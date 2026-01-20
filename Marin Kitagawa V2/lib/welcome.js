const { WA_DEFAULT_EPHEMERAL } = require('@whiskeysockets/baileys');
const fs = require('fs');
const path = require('path');

// Path untuk database welcome
const DB_PATH = path.join(__dirname, '../db-welcome.json');

// Fungsi untuk memuat database
function loadDB() {
    if (!fs.existsSync(DB_PATH)) {
        const defaultDB = {};
        fs.writeFileSync(DB_PATH, JSON.stringify(defaultDB, null, 2));
        return defaultDB;
    }
    return JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
}

// Timeout metadata biar tidak freeze
async function safeGroupMetadata(sock, id) {
    try {
        return await Promise.race([
            sock.groupMetadata(id),
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error("Timeout Metadata")), 5000)
            )
        ]);
    } catch (e) {
        console.log("❌ Gagal load metadata:", e.message);
        return null;
    }
}

// Timeout fetchStatus biar tidak freeze
async function safeFetchStatus(sock, jid) {
    try {
        return await Promise.race([
            sock.fetchStatus(jid),
            new Promise(resolve => setTimeout(() => resolve(null), 3000))
        ]);
    } catch {
        return null;
    }
}

async function GroupParticipants(sock, { id, participants, action, author }) {
    try {
        console.log("➡️ START HANDLER");

        const gcdata = await safeGroupMetadata(sock, id);
        if (!gcdata) {
            console.log("❌ Metadata gagal, cancel welcome.");
            return;
        }

        const subject = gcdata.subject;
        let db = {};

        try {
            db = loadDB();
        } catch (e) {
            console.log("❌ DB Welcome Error:", e.message);
            db = {};
        }

        let groupSettings = db[id];

        console.log('🔍 DEBUG WELCOME:', {
            groupId: id,
            groupName: subject,
            action,
            participants,
            groupSettings
        });

        // Buat default kalau belum ada
        if (!groupSettings) {
            groupSettings = db[id] = {
                welcome: { enabled: false },
                goodbye: { enabled: false }
            };
        }

        for (const jid of participants) {

            // Ambil nama user
            console.log("➡️ LOAD USERNAME");
            let userName = `@${jid.split("@")[0]}`;
            const info = await safeFetchStatus(sock, jid);

            if (info?.status) userName = info.status;
            else {
                const contactObj = sock.contacts?.[jid];
                if (contactObj?.name) userName = contactObj.name;
            }

            // Nama admin yang melakukan aksi
            console.log("➡️ LOAD ADMIN NAME");
            let adminName = author ? `@${author.split("@")[0]}` : "System";
            const adminInfo = await safeFetchStatus(sock, author);
            if (adminInfo?.status) adminName = adminInfo.status;

            console.log("➡️ SWITCH ACTION:", action);

            switch (action) {
                case "add":
                    if (!groupSettings.welcome?.enabled) {
                        console.log("⚠️ Welcome OFF");
                        return;
                    }

                    const welcomeText = groupSettings.welcome.text ||
                        '🎉 Selamat datang @user di @group!';
                    const welcomeImage = groupSettings.welcome.image ||
                        "https://raw.githubusercontent.com/zionjs/whatsapp-media/main/file_1761997287781";

                    const w = processWelcomeText(welcomeText, {
                        user: userName,
                        userJid: jid,
                        group: subject,
                        desc: gcdata.desc || "Tidak ada deskripsi",
                        size: gcdata.participants.length,
                        author: adminName
                    });

                    await sock.sendMessage(id, {
                        text: w.text,
                        contextInfo: {
                            mentionedJid: w.mentions,
                            externalAdReply: {
                                title: `Welcome • ${subject}`,
                                thumbnailUrl: welcomeImage,
                                renderLargerThumbnail: true,
                                mediaType: 1,
                                previewType: 1
                            }
                        }
                    }, { ephemeralExpiration: WA_DEFAULT_EPHEMERAL });
                    break;

                case "remove":
                    if (!groupSettings.goodbye?.enabled) {
                        console.log("⚠️ Goodbye OFF");
                        return;
                    }

                    const goodbyeText = groupSettings.goodbye.text ||
                        '👋 Selamat tinggal @user!';
                    const goodbyeImage = groupSettings.goodbye.image ||
                        "https://raw.githubusercontent.com/zionjs/whatsapp-media/main/file_1761997163995";

                    const g = processWelcomeText(goodbyeText, {
                        user: userName,
                        userJid: jid,
                        group: subject,
                        desc: gcdata.desc || "Tidak ada deskripsi",
                        size: gcdata.participants.length,
                        author: adminName
                    });

                    await sock.sendMessage(id, {
                        text: g.text,
                        contextInfo: {
                            mentionedJid: g.mentions,
                            externalAdReply: {
                                title: `Goodbye • ${subject}`,
                                thumbnailUrl: goodbyeImage,
                                renderLargerThumbnail: true,
                                mediaType: 1,
                                previewType: 1
                            }
                        }
                    }, { ephemeralExpiration: WA_DEFAULT_EPHEMERAL });
                    break;

                case "promote":
                    await sock.sendMessage(id, {
                        text: `🎉 *@${author.split("@")[0]} menaikkan @${jid.split("@")[0]} menjadi admin!*`,
                        contextInfo: { mentionedJid: [author, jid] }
                    });
                    break;

                case "demote":
                    await sock.sendMessage(id, {
                        text: `🚫 *@${author.split("@")[0]} menurunkan @${jid.split("@")[0]} dari admin!*`,
                        contextInfo: { mentionedJid: [author, jid] }
                    });
                    break;

                default:
                    console.log("⚠️ ACTION UNKNOWN:", action);
            }
        }
    } catch (err) {
        console.error('❌ ERROR GroupParticipants:', err);
    }
}

function processWelcomeText(text, data) {
    let processed = text;
    let mentions = [];

    if (processed.includes('@user')) {
        mentions.push(data.userJid);
        processed = processed.replace(/@user/g, `@${data.userJid.split('@')[0]}`);
    }

    processed = processed
        .replace(/@group/g, data.group)
        .replace(/@desc/g, data.desc)
        .replace(/@member/g, data.size)
        .replace(/@admin/g, data.author);

    return {
        text: processed,
        mentions
    };
}

module.exports = GroupParticipants;