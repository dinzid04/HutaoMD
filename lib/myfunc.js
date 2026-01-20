const { proto, delay, downloadContentFromMessage, getContentType, areJidsSameUser, generateWAMessage, getAggregateVotesInPollMessage } = require("@whiskeysockets/baileys");
const chalk = require("chalk");
const fs = require("fs");
const FileType = require("file-type");
const Crypto = require("crypto");
const axios = require("axios");

// --- DATABASE SETUP ---
if (!fs.existsSync('./database')) {
    try {
        fs.mkdirSync('./database');
    } catch (e) {
        console.error('Failed to create database directory:', e);
    }
}

// LID Database Setup
const lidPath = './database/DataUserLid.json';
if (!fs.existsSync(lidPath)) {
    try {
        fs.writeFileSync(lidPath, JSON.stringify({}, null, 2));
    } catch (e) {
        console.error('Failed to create DataUserLid.json:', e);
    }
}

let lidDatabase = {};
const loadLidDatabase = () => {
    try {
        if (fs.existsSync(lidPath)) {
            lidDatabase = JSON.parse(fs.readFileSync(lidPath));
            // Log awal saat bot nyala
            console.log(chalk.blueBright(`[INIT] 📂 Database LID dimuat: ${Object.keys(lidDatabase).length} user tersimpan.`));
        }
    } catch (e) {
        console.error('Error reading DataUserLid.json:', e);
    }
};
loadLidDatabase();

const saveLidDatabase = () => {
    try {
        fs.writeFileSync(lidPath, JSON.stringify(lidDatabase, null, 2));
    } catch (err) {
        console.error('Failed to save DataUserLid:', err);
    }
};

// Helper: Generic Resolver & Saver
const resolveJid = (jid, store, metadata) => {
    if (!jid) return jid;
    if (!jid.endsWith('@lid')) return jid;

    // 1. Cek Database File (Paling Cepat & Hemat Resource)
    if (lidDatabase[jid] && lidDatabase[jid].jid) {
        return lidDatabase[jid].jid;
    }

    // 2. Cek Metadata (Group Participants) - Prioritas kedua
    if (metadata && metadata.participants) {
        const found = metadata.participants.find(p => p.lid === jid || p.id === jid);
        if (found) {
            const realJid = found.id.includes('@lid') ? null : found.id;
            if (realJid) {
                lidDatabase[jid] = { jid: realJid };
                saveLidDatabase();
                console.log(chalk.green(`[LID DETECTED - GROUP] ✅ Berhasil menemukan JID dari Metadata Grup!\nLID: ${jid} -> JID: ${realJid}`));
                return realJid;
            }
        }
    }

    // 3. Cek Store Contacts (Baileys Store) - Terakhir (Looping Berat)
    if (store && store.contacts) {
        for (const [realJid, data] of Object.entries(store.contacts)) {
            if (data.lid === jid) {
                lidDatabase[jid] = { jid: realJid };
                saveLidDatabase();
                console.log(chalk.cyanBright(`[LID DETECTED - STORE] 🔍 Berhasil menemukan JID dari Kontak Store!\nLID: ${jid} -> JID: ${realJid}`));
                return realJid;
            }
        }
    }

    return jid;
};


exports.smsg = async (conn, m, store) => {
  if (!m) return m;
  let M = proto.WebMessageInfo;
  if (m.key) {
    m.id = m.key.id;
    m.isBaileys = m.id.startsWith("BAE5") && m.id.length === 16;
    m.chat = m.key.remoteJid;
    m.fromMe = m.key.fromMe;
    m.isGroup = m.chat.endsWith("@g.us");

    // --- LOAD METADATA (Untuk Grup) ---
    let metadata = null;
    if (m.isGroup) {
         if (!store.groupMetadata) store.groupMetadata = {};
         metadata = store.groupMetadata[m.chat];
         if (!metadata) {
              try {
                  metadata = await conn.groupMetadata(m.chat);
                  store.groupMetadata[m.chat] = metadata;
              } catch (e) {}
         }
    }

    // --- RAW SENDER (Pengirim Asli sebelum diubah) ---
    let rawSender = conn.decodeJid(
      (m.fromMe && conn.user.id) ||
        m.participant ||
        m.key.participant ||
        m.chat ||
        ""
    );

    // ============================================================
    // --- LOGIKA AUTO-LEARN & RESOLVE (Fix untuk PC & Group) ---
    // ============================================================
    
    // LOGIKA 1: Jika ini GRUP, ambil data dari Metadata
    if (m.isGroup && metadata && metadata.participants) {
        const senderInfo = metadata.participants.find(p => p.id === rawSender || p.lid === rawSender);
        if (senderInfo && senderInfo.lid && senderInfo.id) {
            // Jika belum ada di DB, simpan
            if (!lidDatabase[senderInfo.lid]) {
                lidDatabase[senderInfo.lid] = { jid: senderInfo.id };
                saveLidDatabase();
                console.log(chalk.magentaBright(`[AUTO LEARN - GROUP] 💾 Menyimpan User Baru dari Grup.\nLID: ${senderInfo.lid}\nJID: ${senderInfo.id}`));
            }
        }
    }

    // LOGIKA 2: Jika ini PRIVATE CHAT (atau user belum kedata di grup)
    // Jika sender adalah @lid DAN belum ada di database kita
    if (rawSender.endsWith('@lid') && !lidDatabase[rawSender]) {
        // console.log(chalk.yellow(`[DEBUG PC] Menerima pesan LID di Private Chat: ${rawSender}. Mencari di Store...`));
        
        if (store && store.contacts) {
            let foundJid = null;
            // Loop store untuk mencari pemilik LID ini
            for (const [realJid, data] of Object.entries(store.contacts)) {
                if (data.lid === rawSender) {
                    foundJid = realJid;
                    break;
                }
            }
            
            // Jika ketemu di memory store, simpan ke database JSON
            if (foundJid) {
                lidDatabase[rawSender] = { jid: foundJid };
                saveLidDatabase();
                console.log(chalk.cyanBright(`[AUTO LEARN - PC] 💾 Ditemukan di Store (Private Chat)!\nMenyimpan: ${rawSender} => ${foundJid}`));
            } else {
                console.log(chalk.red(`[FAIL PC] Gagal menemukan pasangan JID untuk LID ${rawSender} di Store.`));
            }
        }
    }
    
    // --- 4. APPLY RESOLVE SENDER ---
    // Sekarang database sudah terupdate (baik dari Logic 1 atau 2), kita ubah m.sender
    let originalSender = rawSender;
    m.sender = resolveJid(rawSender, store, metadata);

    // LOG EFEKTIF: Hanya log jika sender beneran berubah
    if (originalSender !== m.sender) {
        console.log(chalk.green(`[SENDER RESOLVED] 🔄 Mengubah Sender:\nDari: ${originalSender}\nKe  : ${m.sender}`));
    }

    // --- 5. RESOLVE PRIVATE CHAT ID ---
    // Jika chat ID-nya sendiri berupa LID (kasus PC), ubah juga
    if (!m.isGroup && m.chat.endsWith('@lid')) {
        const resolvedChat = resolveJid(m.chat, store, null);
        if (resolvedChat !== m.chat) {
            console.log(chalk.yellow(`[CHAT ID FIX] 🛠️ Memperbaiki ID Chat Private:\n${m.chat} -> ${resolvedChat}`));
            m.chat = resolvedChat;
            if (!m.fromMe) m.sender = resolvedChat; 
        }
    }

    conn.downloadAndSaveYanz = async (
    message,
    filename,
    attachExtension = true
  ) => {
    let quoted = message.m ? message.m : message;
    let mime = (message.m || message).mimetype || "";
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, "") : mime.split("/")[0];
    const stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    let type = await FileType.fromBuffer(buffer);
    trueFileName = attachExtension ? filename + "." + type.ext : filename;
    await fs.writeFileSync(trueFileName, buffer);
    return trueFileName;
  };

  conn.downloadMediaYanz = async (message) => {
    let mime = (message.m || message).mimetype || "";
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, "") : mime.split("/")[0];
    const stream = await downloadContentFromMessage(message, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    return buffer;
  };

  const { getImg, getBuffer } = require("../lib/function");

  conn.sendImage = async (jid, path, caption = "", quoted = "", options) => {
    let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], "base64") : /^https?:\/\//.test(path) ? await await getImg(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
    return await conn.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted });
  };

    
    if (m.isGroup) m.participant = conn.decodeJid(m.key.participant) || "";
  }
  if (m.message) {
      m.xtype = getContentType(m.message)
  m.msg = (m.xtype == 'viewOnceMessage' ? m.message[m.xtype].message[getContentType(m.message[m.xtype].message)] : m.message[m.xtype])
  
  try {
    if (m.xtype === 'interactiveResponseMessage') {
        let parse = JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson)
        m.body = parse.id
    } else {
        m.body = m.message.conversation || m.msg.caption || m.msg.text || (m.xtype == 'listResponseMessage') && m.msg.singleSelectReply.selectedRowId || (m.xtype == 'buttonsResponseMessage') && m.msg.selectedButtonId || (m.xtype == 'templateButtonReplyMessage') && m.msg.selectedId || ''
    }
  } catch {
    m.body = ''
  }


    m.body = m.message.conversation || m.m.caption || m.m.text || (m.xtype == "listResponseMessage" && m.m.singleSelectReply.selectedRowId) || (m.xtype == "buttonsResponseMessage" && m.m.selectedButtonId) || (m.xtype == "viewOnceMessage" && m.m.caption) || m.text;
    let quoted = (m.quoted = m.m.contextInfo ? m.m.contextInfo.quotedMessage : null);
    
    // --- 6. RESOLVE MENTIONED JID ---
    m.mentionedJid = m.m.contextInfo ? m.m.contextInfo.mentionedJid : [];
    if (m.mentionedJid && m.mentionedJid.length > 0) {
        let metadata = m.isGroup && store.groupMetadata ? store.groupMetadata[m.chat] : null;
        m.mentionedJid = m.mentionedJid.map(jid => {
            let res = resolveJid(jid, store, metadata);
            if (res !== jid) {
                console.log(chalk.gray(`[MENTION FIX] @${jid} -> @${res}`));
            }
            return res;
        });
    }

    if (m.quoted) {
      let type = getContentType(quoted);
      m.quoted = m.quoted[type];
      if (["productMessage"].includes(type)) {
        type = getContentType(m.quoted);
        m.quoted = m.quoted[type];
      }
      if (typeof m.quoted === "string")
        m.quoted = {
          text: m.quoted,
        };
      m.quoted.xtype = type;
      m.quoted.id = m.m.contextInfo.stanzaId;
      m.quoted.chat = m.m.contextInfo.remoteJid || m.chat;
      m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith("BAE5") && m.quoted.id.length === 16 : false;
      m.quoted.sender = conn.decodeJid(m.m.contextInfo.participant);

      // --- 7. RESOLVE QUOTED SENDER ---
      let metadata = m.isGroup && store.groupMetadata ? store.groupMetadata[m.chat] : null;
      
      let oldQuoted = m.quoted.sender;
      m.quoted.sender = resolveJid(m.quoted.sender, store, metadata);
      
      if (oldQuoted !== m.quoted.sender) {
        // console.log(chalk.gray(`[QUOTED FIX] Sender pesan yang di-reply telah dikonversi.`));
      }

      m.quoted.fromMe = m.quoted.sender === (conn.user && conn.user.id);
      m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || "";
      m.quoted.mentionedJid = m.m.contextInfo ? m.m.contextInfo.mentionedJid : [];

      // --- 8. RESOLVE QUOTED MENTIONS ---
       if (m.quoted.mentionedJid && m.quoted.mentionedJid.length > 0) {
            m.quoted.mentionedJid = m.quoted.mentionedJid.map(jid => resolveJid(jid, store, metadata));
       }

      m.getQuotedObj = m.getQuotedMessage = async () => {
        if (!m.quoted.id) return false;
        let q = await store.loadMessage(m.chat, m.quoted.id, conn);
        return exports.smsg(conn, q, store);
      };
      let vM = (m.quoted.fakeObj = M.fromObject({
        key: {
          remoteJid: m.quoted.chat,
          fromMe: m.quoted.fromMe,
          id: m.quoted.id,
        },
        message: quoted,
        ...(m.isGroup ? { participant: m.quoted.sender } : {}),
      }));
      m.quoted.delete = () =>
        conn.sendMessage(m.quoted.chat, { delete: vM.key });
      m.quoted.download = () => conn.downloadMediaYanz(m.quoted);
    }
  }
  if (m.m.url) m.download = () => conn.downloadMediaYanz(m.m);
  m.text = m.m.text || m.m.caption || m.message.conversation || m.m.contentText || m.m.selectedDisplayText || m.m.title || "";
  m.reply = (text, chatId = m.chat, options = {}) => Buffer.isBuffer(text) ? conn.sendMedia(chatId, text, 'file', '', m, { ...options }) : conn.sendText(chatId, text, m, { ...options })
  m.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)))
  m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => conn.copyNForward(jid, m, forceForward, options)
  
  conn.appenTextMessage = async(text, chatUpdate) => {
  	let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
  		userJid: conn.user.id,
  		quoted: m.quoted && m.quoted.fakeObj
      })    
      messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
      messages.key.id = m.key.id
      messages.pushName = m.pushName
      if (m.isGroup) messages.participant = m.sender
      let m = {
      	...chatUpdate,
      	messages: [proto.WebMessageInfo.fromObject(messages)],
      	type: 'append'
      }   
      conn.ev.emit('messages.upsert', m)
  }

  conn.findJidByLid = (lid) => {
      if (lidDatabase[lid] && lidDatabase[lid].jid) return lidDatabase[lid].jid;
      if (store && store.contacts) {
          for (const [jid, data] of Object.entries(store.contacts)) {
              if (data.lid === lid) return jid;
          }
      }
      return null;
  };

  return m;
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
