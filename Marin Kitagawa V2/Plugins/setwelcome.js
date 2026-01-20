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

// Fungsi untuk menyimpan database
function saveDB(data) {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

const handler = async (m, { sock, text, command, isGroup, isOwner, groupMetadata, reply, isAdmins }) => {

    if (!isGroup) return reply('❌ *Command ini hanya bisa digunakan di grup!*');

// cek izin admin / owner
if (!isOwner && !isAdmins) 
    return reply('❌ *Fitur ini hanya bisa digunakan oleh Admin grup atau Owner bot!*');

    try {
        const db = loadDB();
        const groupId = m.chat;

        let metadata = groupMetadata;
        if (!metadata) {
            try {
                metadata = await sock.groupMetadata(groupId);
            } catch (error) {
                console.error('Error fetching group metadata:', error);
                return reply('❌ *Gagal mengambil data grup. Pastikan bot adalah admin!*');
            }
        }

        const groupName = metadata?.subject || 'Grup Ini';

        if (!db[groupId]) {
            db[groupId] = {
                welcome: {
                    enabled: true,
                    text: '🎉 Selamat datang @user di @group!\n\nSemoga betah ya! 😊',
                    image: 'https://raw.githubusercontent.com/zionjs/whatsapp-media/main/file_1761997287781'
                },
                goodbye: {
                    enabled: true,
                    text: '👋 Selamat tinggal @user!\n\nSemoga sukses selalu! 💫',
                    image: 'https://raw.githubusercontent.com/zionjs/whatsapp-media/main/file_1761997163995'
                }
            };
            saveDB(db);
        }

        switch (command) {

            case 'welcome':
                const action = text?.toLowerCase();

                if (!action || !['on', 'off', 'status'].includes(action)) {
                    const status = db[groupId].welcome.enabled ? '🟢 AKTIF' : '🔴 NONAKTIF';
                    return reply(`📋 *STATUS WELCOME*\n\nStatus: ${status}\n\nGunakan:\n• .welcome on\n• .welcome off\n• .welcome status`);
                }

                if (action === 'status') {
                    const status = db[groupId].welcome.enabled ? '🟢 AKTIF' : '🔴 NONAKTIF';
                    const settings = db[groupId].welcome;

                    const preview = settings.text
                        .replace(/@user/g, 'Anda')
                        .replace(/@group/g, groupName)
                        .replace(/@desc/g, metadata.desc || 'Tidak ada deskripsi')
                        .replace(/@member/g, metadata.participants?.length || 0);

                    return reply(
                        `📋 *PENGATURAN WELCOME*\n\nStatus: ${status}\n\n📝 Teks:\n${preview}\n\n🖼️ Gambar:\n${settings.image}`
                    );
                }

                db[groupId].welcome.enabled = action === 'on';
                saveDB(db);

                return reply(`✅ Welcome berhasil ${action === 'on' ? 'diaktifkan' : 'dinonaktifkan'}!`);

            case 'goodbye':
                const gAction = text?.toLowerCase();

                if (!gAction || !['on', 'off', 'status'].includes(gAction)) {
                    const status = db[groupId].goodbye.enabled ? '🟢 AKTIF' : '🔴 NONAKTIF';
                    return reply(`📋 *STATUS GOODBYE*\n\nStatus: ${status}\n\nGunakan:\n• .goodbye on\n• .goodbye off\n• .goodbye status`);
                }

                if (gAction === 'status') {
                    const status = db[groupId].goodbye.enabled ? '🟢 AKTIF' : '🔴 NONAKTIF';
                    const settings = db[groupId].goodbye;

                    const preview = settings.text
                        .replace(/@user/g, 'Anda')
                        .replace(/@group/g, groupName);

                    return reply(
                        `📋 *PENGATURAN GOODBYE*\n\nStatus: ${status}\n\n📝 Teks:\n${preview}\n\n🖼️ Gambar:\n${settings.image}`
                    );
                }

                db[groupId].goodbye.enabled = gAction === 'on';
                saveDB(db);

                return reply(`✅ Goodbye berhasil ${gAction === 'on' ? 'diaktifkan' : 'dinonaktifkan'}!`);

            case 'setwelcome':
                if (!text) return reply('❌ Contoh:\n.setwelcome Selamat datang @user di @group!');
                db[groupId].welcome.text = text;
                saveDB(db);
                return reply(`✅ Teks welcome berhasil diatur!\n\nPreview:\n${text}`);

            case 'setgoodbye':
                if (!text) return reply('❌ Contoh:\n.setgoodbye Selamat tinggal @user!');
                db[groupId].goodbye.text = text;
                saveDB(db);
                return reply(`✅ Teks goodbye berhasil diatur!\n\nPreview:\n${text}`);

            case 'setwelcomeimage':
                if (!text.startsWith('http')) return reply('❌ URL harus dimulai http/https');
                db[groupId].welcome.image = text;
                saveDB(db);
                return reply('✅ Gambar welcome berhasil diatur!');

            case 'setgoodbyeimage':
                if (!text.startsWith('http')) return reply('❌ URL harus dimulai http/https');
                db[groupId].goodbye.image = text;
                saveDB(db);
                return reply('✅ Gambar goodbye berhasil diatur!');

            case 'welcomestatus':
                return reply(
                    `📊 *STATUS WELCOME & GOODBYE*\n\nWelcome: ${db[groupId].welcome.enabled ? '🟢 AKTIF' : '🔴 NONAKTIF'}\nGoodbye: ${db[groupId].goodbye.enabled ? '🟢 AKTIF' : '🔴 NONAKTIF'}`
                );

            default:
                break;
        }

    } catch (error) {
        console.error('Error in welcome handler:', error);
        return reply('❌ Terjadi error!');
    }
};

handler.help = ['welcome', 'goodbye', 'setwelcome', 'setgoodbye', 'setwelcomeimage', 'setgoodbyeimage', 'welcomestatus'];
handler.tags = ['owner'];
handler.command = ['welcome','goodbye','setwelcome','setgoodbye','setwelcomeimage','setgoodbyeimage','welcomestatus'];

handler.owner = true; // 🔥 hanya owner
handler.group = true;

module.exports = handler;