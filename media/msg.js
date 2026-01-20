/*
🌸 𝗦𝗖𝗥𝗜𝗣𝗧 𝗜𝗡𝗙𝗢 🌸  
┌───────────────────────────────┐
│ 💫 𝗝𝘂𝗱𝘂𝗹 : Yurii-Md  
│ 👑 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : FallZx Infinity  
│ ⚠️ 𝗡𝗼𝘁𝗲 : Jangan hapus credit ini!  
│     Hargai creator dengan tetap mencantumkan nama.  
└───────────────────────────────┘
✨ Terima kasih telah menggunakan script ini!
*/
const SETTING = require('../connection/setting')
const keywords = require('../lib/validator/allKeywords')
const similarity = require('similarity');
const { createMeCanvas } = require('../library/canvasMe')
let modul = SETTING['modul'];
let getreq = SETTING['file'];
const chalk = modul['chalk'];
const fs = modul['fs'];
const fetch = require('node-fetch'); 
const FormData = require('form-data');
const util = modul['util'];
const https = modul['https'];
const os = require('os');
const axios = modul['axios'];
const ytsr = modul['ytsr'];
const { spawn, exec, execSync } = modul['child'];
const { downloadContentFromMessage, WA_DEFAULT_EPHEMERAL, getLastMessageInChat, MessageType, generateWAMessageFromContent, prepareWAMessageMedia, proto } = modul['baileys'];
const moment = modul['time'];
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const speed = modul['speed'];
const request = modul['request'];
const path = modul['path'];
const ms = modul['premium'];
const cheerio = require('cheerio');
const { createCanvas, GlobalFonts } = require('@napi-rs/canvas');
const { color, bgcolor, ConsoleLog, biocolor } = require('.' + getreq['color']);
const { formatSize, sleep, readTime, reSize, runtime, getBuffer, getRandom, pickRandom, fetchJson, isUrl, genMath, formatp } = require('.' + getreq['funct']);
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, writeExif, writeExifStc } = require('.' + getreq['exif']);
const folderSambutan = './database/sambutan';
//SCRAPE
const { upload } = require('../lib/scrape/uploader.js');

//DATABASE 
var balance = JSON.parse(fs.readFileSync('./database/balance.json'));
var limit = JSON.parse(fs.readFileSync('./database/limit.json'));
var glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
var premium = JSON.parse(fs.readFileSync('./database/premium.json'));
const checkPremiumUser = (userId, premiumData) => {
return premiumData.some(u => u.id === userId || u.lid === userId);
};
var pendaftar = JSON.parse(fs.readFileSync('./database/user.json'));
const ownerPath = './database/owner.json'
if (!fs.existsSync(ownerPath)) fs.writeFileSync(ownerPath, JSON.stringify([]))
var ownerDb = JSON.parse(fs.readFileSync(ownerPath))
global.ownerNumber = [...new Set([...global.ownerNumber, ...ownerDb])]
const db_api = JSON.parse(fs.readFileSync('./database/api.json'));
const afk = require("../lib/afk");
let _afk = JSON.parse(fs.readFileSync("./database/afk.json"));
const databasefile = './database/database/database.json';
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
  settings: {},
  ...(global.db || {})
}
const tebakgambar = {}
const tebakgame = {}
const tebakhero = {}
const tebakff = {}
const tebakkabupaten = {}
const tebakkartun = {}
const tebakjkt48 = {}
const tebaknct = {}
const tebakenhypen = {}
const tebakhewan = {}
const tebakml = {}
const tebakchara = {}
const tebaklogo = {}
const tebakaplikasi = {}
const tebakkata = {}
const asahotak = {}
const lengkapikalimat = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const kuisioner = {}
const tebakkimia = {}
const tebaklirik = {}
const tebaktebakan = {}
const petakbom = {}
const pirates = {}
const mathgame = {}
const verifyNumber = {}
let tebaklagu1 = []
let _family100 = []
let kuismath = []
let tebakgambar1 = []
let tebakkata1 = []
let transactionDetails = {};
let caklontong1 = []
let caklontong_desk = []
let tebakkalimat1 = []
let tebaklirik1 = []
let tebaktebakan1 = []
let tebakbendera1 = []
let tebakbendera2 = []
let tebakkabupaten1 = []
let tebakkimia1 = []
let tebakasahotak = []
let tebaksiapakahaku = []
let tebaksusunkata = []
let tebaktekateki = []
let vote = db.others.vote = []
//SETUP
module.exports = async(m, DinzBotz, from, store) => { 
   
   if (from && from.endsWith('@lid')) {
       from = m.chat ? m.chat : from.replace(/@lid$/, '@s.whatsapp.net');
   }
if (!m.isGroup && from && from.endsWith('@lid')) from = m.chat
   const isGrouP = from.endsWith('@g.us')
   const sender = isGrouP ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
   const pushname = m.pushName || "No Name"
   const CMD = (m.xtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.xtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.xtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.xtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.xtype == 'buttonsResponseMessage') && m.message.buttonsResponseMessage.selectedButtonId ? m.message.buttonsResponseMessage.selectedButtonId : (m.xtype == 'listResponseMessage') && m.message.listResponseMessage.singleSelectReply.selectedRowId? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.xtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
   let pfxConf = JSON.parse(fs.readFileSync('./database/prefix.json'));
   let prefix;
   if (pfxConf.mode === 'noprefix') {
       prefix = '';
   } else if (pfxConf.mode === 'multi') {
       prefix = /^[#!.,®©¥€¢£/\∆✓]/.test(CMD) ? CMD.match(/^[#!.,®©¥€¢£/\∆✓]/gi) : '#';
   } else {
       prefix = pfxConf.symbol;
   }
   global.prefix = prefix;
   const chatmessage = (m.xtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.xtype == 'imageMessage') ? m.message.imageMessage.caption : (m.xtype == 'videoMessage') ? m.message.videoMessage.caption : (m.xtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.xtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.xtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.xtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.xtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
   const ordermessage = (m.xtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.xtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.xtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.xtype == 'extendedTextMessage') && m.message.extendedTextMessage.text.startsWith(prefix) ? m.message.extendedTextMessage.text : (m.xtype == 'buttonsResponseMessage') && m.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) ? m.message.buttonsResponseMessage.selectedButtonId : (m.xtype == 'listResponseMessage') && m.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.xtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId.startsWith(prefix) ? m.message.templateButtonReplyMessage.selectedId : ''   
   const chats = (m.xtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.xtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.xtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.xtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.xtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.xtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.xtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''   	
   const args = ordermessage.trim().split(/ +/).slice(1)         
   const order = ordermessage.slice(0).trim().split(/ +/).shift().toLowerCase()	   
   const isCmd = ordermessage.startsWith(prefix)   
   const command = isCmd ? ordermessage.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
   const text = q = args.join(' ')   
   const fatkuns = (m.quoted || m)
   const quoted = (fatkuns.xtyp == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.xtyp == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.xtyp == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m   
   const content = JSON.stringify(m.message)
   const orderPlugins = isCmd ? ordermessage.slice(1).trim().split(/ +/).shift().toLowerCase() : null
   const isGroup = from.endsWith(keywords[0]['chats'][1])
   const isChanel = from.endsWith('@newsletter')
   const getGroupAdmins = (participants) =>{
    return participants
        .filter(u => u.admin === 'admin' || u.admin === 'superadmin')
        .map(u => u.jid);
		};
   const normalize = jid => jid.split(':')[0] + '@s.whatsapp.net';
   const botNumber = DinzBotz.user.id.split(':')[0] + keywords[0]['chats'][0]
   const mime = (quoted.msg || quoted).mimetype || ''
   const isMedia = /image|video|sticker|audio/.test(mime)
   const itulho = isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid  
   const isOwner = [botNumber, ...global.ownerNumber].map(jid => jid.replace(/[^0-9]/g, '') + keywords[0]['chats'][0]).includes(itulho)
   const DinzTheCreator = [botNumber, ...global.ownerNumber].map(jid => jid.replace(/[^0-9]/g, '') + keywords[0]['chats'][0]).includes(itulho)
   const groupMetadata = m.isGroup ? await DinzBotz.groupMetadata(m.chat).catch(() => ({})) : null;
   DinzBotz.groupName = m.isGroup ? groupMetadata.subject : 'Private Chat';
   const groupMembers = m.isGroup ? groupMetadata.participants || [] : [];
   const groupAdmins = m.isGroup ? getGroupAdmins(groupMembers) : [];
   const isBotAdmins = m.isGroup ? groupAdmins.map(normalize).includes(normalize(botNumber)) : false;
   const isAdmins = m.isGroup ? groupAdmins.map(normalize).includes(normalize(m.sender)) : false;
        m.isAdmins = isAdmins
        m.isAdmin = isAdmins
        let isAdmin = isAdmins
        m.isBotAdmin = isBotAdmins
        m.isBotAdmins = isBotAdmins
   const isPremium = isOwner || premium.some(u => u.id === m.sender || u.lid === m.sender)
   const isPrem = isPremium
   const gcounti = SETTING.gcount
   const gcount = isPremium ? gcounti.prem : gcounti.user
   const limitCount = SETTING.limitCount
   const isUser = pendaftar.includes(sender)
   const isAfkOn = afk.checkAfkUser(m.sender, _afk)
   const mentionedJid = m.mentionedJid || [] 
   const mentionByTag = m.xtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
   const mentionByreply = m.xtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
  const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByreply) : []
  const mentionUser = mention != undefined ? mention.filter(n => n) : false
  const today = moment().tz("Asia/Jakarta")
  const day = today.format('dddd');
  const datee = today.format('D');
  const month = today.format('MMMM');
  const year = today.format('YYYY');


//----- configuration user ---//
    try {
      const isNumber = x => typeof x === 'number' && !isNaN(x)
      const user = global.db.users[m.sender]
      if (typeof user !== 'object') global.db.users[m.sender] = {}
      const chats = global.db.chats[m.chat]
      if (typeof chats !== 'object') global.db.chats[m.chat] = {}

      if (chats) {
        if (!('antitagsw' in chats)) chats.antitagsw = false
        if (!('autoyoimiya' in chats)) chats.autoyoimiya = false
        if (!('antipromosi' in chats)) chats.antipromosi = false
        if (!('owneronly' in chats)) chats.owneronly = false
      } else global.db.chats[m.chat] = {
        owneronly: false,
        antitagsw: false,
        autoyoimiya: false,
        antipromosi: false
      }

      if (user) {
        if (!isNumber(user.subscribers)) user.subscribers = 0
        if (!isNumber(user.like)) user.like = 0
        if (!isNumber(user.viewers)) user.viewers = 0
        if (!isNumber(user.playButton)) user.playButton = 0
        if (!isNumber(user.lastLive)) user.lastLive = 0
        if (!isNumber(user.chip)) user.chip = 0
        if (!isNumber(user.level)) user.level = 0
        if (!isNumber(user.atm)) user.atm = 0
        if (!isNumber(user.money)) user.money = 0
        if (!isNumber(user.fullatm)) user.fullatm = 0
        if (!isNumber(user.bank)) user.bank = 0
        if (!isNumber(user.health)) user.health = 100
        if (!isNumber(user.potion)) user.potion = 0
        if (!isNumber(user.trash)) user.trash = 0
        if (!isNumber(user.wood)) user.wood = 0
        if (!isNumber(user.rock)) user.rock = 0
        if (!isNumber(user.string)) user.string = 0
        if (!isNumber(user.petfood)) user.petfood = 0
        if (!isNumber(user.emerald)) user.emerald = 0
        if (!isNumber(user.diamond)) user.diamond = 0
        if (!isNumber(user.gold)) user.gold = 0
        if (!isNumber(user.botol)) user.botol = 0
        if (!isNumber(user.kardus)) user.kardus = 0
        if (!isNumber(user.kaleng)) user.kaleng = 0
        if (!isNumber(user.gelas)) user.gelas = 0
        if (!isNumber(user.plastik)) user.plastik = 0
        if (!isNumber(user.iron)) user.iron = 0
        if (!isNumber(user.common)) user.common = 0
        if (!isNumber(user.uncommon)) user.uncommon = 0
        if (!isNumber(user.mythic)) user.mythic = 0
        if (!isNumber(user.legendary)) user.legendary = 0
        if (!isNumber(user.umpan)) user.umpan = 0
        if (!isNumber(user.pet)) user.pet = 0
        if (!isNumber(user.paus)) user.paus = 0
        if (!isNumber(user.kepiting)) user.kepiting = 0
        if (!isNumber(user.gurita)) user.gurita = 0
        if (!isNumber(user.cumi)) user.cumi = 0
        if (!isNumber(user.buntal)) user.buntal = 0
        if (!isNumber(user.dory)) user.dory = 0
        if (!isNumber(user.lumba)) user.lumba = 0
        if (!isNumber(user.lobster)) user.lobster = 0
        if (!isNumber(user.hiu)) user.hiu = 0
        if (!isNumber(user.udang)) user.udang = 0
        if (!isNumber(user.orca)) user.orca = 0
        if (!isNumber(user.banteng)) user.banteng = 0
        if (!isNumber(user.gajah)) user.gajah = 0
        if (!isNumber(user.harimau)) user.harimau = 0
        if (!isNumber(user.kambing)) user.kambing = 0
        if (!isNumber(user.panda)) user.panda = 0
        if (!isNumber(user.buaya)) user.buaya = 0
        if (!isNumber(user.kerbau)) user.kerbau = 0
        if (!isNumber(user.sapi)) user.sapi = 0
        if (!isNumber(user.monyet)) user.monyet = 0
        if (!isNumber(user.babihutan)) user.babihutan = 0
        if (!isNumber(user.babi)) user.babi = 0
        if (!isNumber(user.ayam)) user.ayam = 0

        if (!isNumber(user.lastadventure)) user.lastadventure = 0
        if (!isNumber(user.lastkill)) user.lastkill = 0
        if (!isNumber(user.lastmisi)) user.lastmisi = 0
        if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
        if (!isNumber(user.lastwar)) user.lastwar = 0
        if (!isNumber(user.lastsda)) user.lastsda = 0
        if (!isNumber(user.lastduel)) user.lastduel = 0
        if (!isNumber(user.lastmining)) user.lastmining = 0
        if (!isNumber(user.lasthunt)) user.lasthunt = 0
        if (!isNumber(user.lastgift)) user.lastgift = 0
        if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
        if (!isNumber(user.lastdagang)) user.lastdagang = 0
        if (!isNumber(user.lasthourly)) user.lasthourly = 0
        if (!isNumber(user.lastbansos)) user.lastbansos = 0
        if (!isNumber(user.lastrampok)) user.lastrampok = 0
        if (!isNumber(user.lastclaim)) user.lastclaim = 0
        if (!isNumber(user.lastnebang)) user.lastnebang = 0
        if (!isNumber(user.lastweekly)) user.lastweekly = 0
        if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
        if (!isNumber(user.apel)) user.apel = 0
        if (!isNumber(user.anggur)) user.anggur = 0
        if (!isNumber(user.jeruk)) user.jeruk = 0
        if (!isNumber(user.mangga)) user.mangga = 0
        if (!isNumber(user.pisang)) user.pisang = 0
        if (!isNumber(user.makanan)) user.makanan = 0
        if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
        if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
        if (!isNumber(user.bibitapel)) user.bibitapel = 0
        if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
        if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
        if (!isNumber(user.horse)) user.horse = 0
        if (!isNumber(user.horseexp)) user.horseexp = 0
        if (!isNumber(user.cat)) user.cat = 0
        if (!isNumber(user.catexp)) user.catexp = 0
        if (!isNumber(user.fox)) user.fox = 0
        if (!isNumber(user.foxhexp)) user.foxexp = 0
        if (!isNumber(user.dog)) user.foxexp = 0
        if (!isNumber(user.dogexp)) user.dogexp = 0
        if (!isNumber(user.robo)) user.robo = 0
        if (!isNumber(user.roboexp)) user.roboexp = 0
        if (!isNumber(user.horselastfeed)) user.horselastfeed = 0
        if (!isNumber(user.catlastfeed)) user.catlastfeed = 0
        if (!isNumber(user.robolastfeed)) user.robolastfeed = 0
        if (!isNumber(user.foxlastfeed)) user.foxlastfeed = 0
        if (!isNumber(user.doglastfeed)) user.doglastfeed = 0
        if (!isNumber(user.robo)) user.robo = 0
        if (!isNumber(user.robodurability)) user.robodurability = 0
        if (!isNumber(user.armor)) user.armor = 0
        if (!isNumber(user.armordurability)) user.armordurability = 0
        if (!isNumber(user.sword)) user.sword = 0
        if (!isNumber(user.sworddurability)) user.sworddurability = 0
        if (!isNumber(user.pickaxe)) user.pickaxe = 1
        if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
        if (!isNumber(user.exp)) user.exp = 0
        if (!isNumber(user.rank)) user.rank = 0
        if (!isNumber(user.fishingrod)) user.fishingrod = 0
        if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
        if (!user.premium) user.premiumTime = 0
        if (!('afkReason' in user)) user.afkReason = ''
        if (!("premium" in user)) user.premium = false
        if (!('autoMikasa' in user)) user.autoMikasa = false
        if (!('autoaiset' in user)) user.autoaiset = false
        if (!('caiSesi' in user)) user.caiSesi = ''
        if (!('nama' in user)) user.nama = `${pushname}`;
      } else global.db.users[m.sender] = {
        subscribers: 0,
        like: 0,
        viewers: 0,
        youtube: `${pushname}`,
        playButton: 0,
        lastLive: 0,
        afkTime: -1,
        afkReason: '',
        premiumTime: 0,
        premium: false,
        money: 100000,
        exp: 0,
        rank: 0,
        autoMikasa: false,
        autoaiset: false,
        caiSesi: '',
        level: 0,
        rankup: 0,
        limit: 20,
        freelimit: 0,
        nama: `${pushname}`,
        lastclaim: 0,
        skata: 0,
        registered: false,
        name: m.name,
        pc: 0,
        joinlimit: 1,
        age: -1,
        regTime: -1,
        unreg: false,
        afk: -1,
        afkReason: '',
        banned: false,
        bannedTime: 0,
        warning: 0,
        rokets: 0,
        role: 'Beginner',
        skill: '',
        ojekk: 0,
        WarnReason: '',
        chip: 0,
        bank: 0,
        atm: 0,
        fullatm: 0,
        health: 1000,
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
        horse: 0,
        horseexp: 0,
        horselastfeed: 0,
        cat: 0,
        catexp: 0,
        catlastfeed: 0,
        fox: 0,
        foxexp: 0,
        foxlastfeed: 0,
        robo: 0,
        roboexp: 0,
        robolastfeed: 0,
        dog: 0,
        dogexp: 0,
        doglastfeed: 0,
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
        ikan: 0,
        orca: 0,
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
        apel: 20,
        pisang: 0,
        anggur: 0,
        mangga: 0,
        jeruk: 0,
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
        lastclaim: 0,
        lastnebang: 0,
        lastweekly: 0,
        lastmonthly: 0

      }

      // Inisialisasi file database untuk Auto AI v2

      const setting = db.settings[botNumber]
      if (typeof setting !== 'object') db.settings[botNumber] = {}
      if (setting) {
        if (!('anticall' in setting)) setting.anticall = false
        if (!isNumber(setting.status)) setting.status = 0
        if (!('autobio' in setting)) setting.autobio = false
        if (!('autopromosi' in setting)) setting.autopromosi = false
        if (!('autoread' in setting)) setting.autoread = false
        if (!('goodbye' in setting)) chats.goodbye = setting.auto_leaveMsg
        if (!('onlygrub' in setting)) setting.onlygrub = false
        if (!('onlyadmin' in setting)) setting.onlyadmin = false
        if (!('onlypc' in setting)) setting.onlypc = false
        if (!('welcome' in setting)) chats.welcome = setting.auto_welcomeMsg
      } else global.db.settings[botNumber] = {
        anticall: false,
        status: 0,
        stock: 10,
        autobio: false,
        autopromosi: false,
        autoread: false,
        auto_ai_grup: false,
        goodbye: false,
        onlyadmin: false,
        onlygrub: false,
        onlypc: false,
        welcome: false,
        autoread: false
      }
      } catch (err) {
      console.error(err)
    }

//FUNC BOT SETTING
if (db.settings[botNumber].autoread) {
    DinzBotz.readMessages([m.key])
}

if (isCmd && !isOwner) {
    const replyAccess = async (title, msg) => {
        await DinzBotz.sendMessage(m.chat, {
            text: msg,
            contextInfo: {
                externalAdReply: {
                    title: title,
                    body: "🔒 DinzBotz Security System",
                    thumbnailUrl: global.thumbnail || "https://cdn.dinzid.biz.id/j8vT.jpg",
                    sourceUrl: "https://chat.whatsapp.com/0",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m })
    }

    if (!db.settings[botNumber].public) {
        return replyAccess("🚧 ACCESS DENIED", "Maaf, saat ini bot sedang dalam *MODE SELF*.\nHanya Owner yang dapat mengakses fitur ini.")
    }

    if (db.settings[botNumber].onlypc && m.isGroup) {
        return replyAccess("❌ PRIVATE CHAT ONLY", "Maaf, fitur ini tidak dapat digunakan di Grup.\nSilakan gunakan bot melalui *Private Chat (PC)*.")
    }

    if (db.settings[botNumber].onlygrub && !m.isGroup) {
        return replyAccess("👥 GROUP CHAT ONLY", "Maaf, fitur ini tidak dapat digunakan di Private Chat.\nSilakan gunakan bot di dalam *Grup*.")
    }

    if (db.settings[botNumber].onlyadmin && m.isGroup && !isAdmin) {
        return replyAccess("👮 ADMIN ACCESS ONLY", "Mohon maaf, akses ditolak.\nFitur ini dikunci khusus untuk *Admin Grup* saja.")
    }
}
if (m.isGroup && global.db.chats[m.chat].mute && !isAdmins && !isOwner) {
    return
}
//--- Func Antilink
    const antilinkFile = './database/antilink.json'
if (!fs.existsSync(antilinkFile)) fs.writeFileSync(antilinkFile, JSON.stringify({}, null, 2))
let antilinkk = JSON.parse(fs.readFileSync(antilinkFile))

function saveantilinkk() {
  fs.writeFileSync(antilinkFile, JSON.stringify(antilinkk, null, 2))
}

if (m.isGroup && !m.key.fromMe) {
    if (!antilinkk[m.chat]) {
        antilinkk[m.chat] = {
            wa: false, tt: false, ig: false, fb: false, all: false, kick: false,
            custom: [], warnings: {}
        }
    }

    const chatmessage = m.text || ''
    const setting = antilinkk[m.chat]
    
    if (chatmessage.length > 0 && !isAdmins && !isOwner) {
        let isLink = false
        let typeDetected = ''

        if (setting.wa && (chatmessage.includes('chat.whatsapp.com') || chatmessage.includes('wa.me'))) { isLink = true; typeDetected = 'WhatsApp' }
        if (setting.tt && (chatmessage.includes('tiktok.com'))) { isLink = true; typeDetected = 'TikTok' }
        if (setting.ig && (chatmessage.includes('instagram.com'))) { isLink = true; typeDetected = 'Instagram' }
        if (setting.fb && (chatmessage.includes('facebook.com') || chatmessage.includes('fb.watch'))) { isLink = true; typeDetected = 'Facebook' }
        if (setting.all && (chatmessage.includes('http') || chatmessage.includes('https') || chatmessage.includes('www'))) { isLink = true; typeDetected = 'Link Apapun' }
        
        if (!isLink && setting.custom.length > 0) {
             for (let x of setting.custom) {
                 if (chatmessage.includes(x)) {
                     isLink = true; typeDetected = 'Custom Link'; break
                 }
             }
        }

        if (isLink) {
            if (typeDetected === 'WhatsApp') {
                let linkGc = await DinzBotz.groupInviteCode(m.chat).catch(() => null)
                if (linkGc && chatmessage.includes(linkGc)) isLink = false
            }

            if (isLink) {
                if (isBotAdmins) {
                    await DinzBotz.sendMessage(m.chat, { delete: m.key })
                    
                    if (setting.kick) {
                        const user = m.sender
                        const warn = (setting.warnings[user] || 0) + 1
                        setting.warnings[user] = warn
                        saveantilinkk()

                        if (warn >= 3) {
                            await DinzBotz.sendMessage(m.chat, {
                                text: `⛔ @${user.split('@')[0]} telah melanggar 3x mengirim link ${typeDetected} dan akan dikeluarkan!`,
                                mentions: [user]
                            })
                            await DinzBotz.groupParticipantsUpdate(m.chat, [user], 'remove')
                            delete setting.warnings[user]
                            saveantilinkk()
                        } else {
                            await DinzBotz.sendMessage(m.chat, {
                                text: `⚠️ Link ${typeDetected} terdeteksi!\nPeringatan ke-${warn}/3 untuk @${user.split('@')[0]}`,
                                mentions: [user]
                            })
                        }
                    }
                }
            }
        }
    }
}


// -- Func Game
const waktuHabis = (jawaban) => {

      let teks = `Gini doang gabisa jawab \n\nJawaban:*\n${jawaban}`
      const context = {
        text: teks,
        contextInfo: {
          externalAdReply: {
            title: `Waktu Habis ⏰`,
            body: "Dasar Kroco",
            previewType: "PHOTO",
            thumbnailUrl: `https://telegra.ph/file/030ebfc99f9cb5be7e8cb.png`,
            sourceUrl: "-"
          }
        }
      };
      return DinzBotz.sendMessage(m.chat, context, {
        quoted: m,
      });
    }
const JwbTrue = (tebak, rank, exp, money) => {
      let users = global.db.users[m.sender];
      users.money += 10000
      users.exp += 10000
      users.rank += 10000
      let teks = `*🎮 ${tebak} 🎮*\n\nKiw Kiww Bener 🎉\n+Rp 10.000 MONEY 💸`
      const context = {
        text: teks,
        contextInfo: {
          externalAdReply: {
            title: `Jawaban Benar🥳`,
            body: tebak,
            previewType: "PHOTO",
            thumbnailUrl: `https://telegra.ph/file/f8749fccf9b3320cd6307.png`,
            sourceUrl: "-"
          }
        }
      };
      return DinzBotz.sendMessage(m.chat, context, {
        quoted: m,
      });
    }
    
DinzBotz.tebakkata = DinzBotz.tebakkata ? DinzBotz.tebakkata : {}
    if (from in DinzBotz.tebakkata) {
      let id = m.chat
      let users = global.db.users[m.sender]
      let json = JSON.parse(JSON.stringify(DinzBotz.tebakkata[id][1]))
      kuis = true
      if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
        users.money += 10000
        var teks = `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\nHadiah : 10.000 money\n`
        reply(`${teks}`)
        clearTimeout(DinzBotz.tebakkata[id][2])
        delete DinzBotz.tebakkata[id]
      } else console.log('*Jawaban Salah!*')
    }
DinzBotz.tebaktebakan = DinzBotz.tebaktebakan ? DinzBotz.tebaktebakan : {};
    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
      kuis = true
      jawaban = tebaktebakan[m.sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
        DinzBotz.sendMessage(m.chat, {
          image: {
            url: 'https://telegra.ph/file/14744917bea0185b52fb1.jpg'
          },
          caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Tebakan`
        }, {
          quoted: m
        })
        delete tebaktebakan[m.sender.split('@')[0]]
      } else console.log('*Jawaban Salah!*')
    }
DinzBotz.tebaklirik = DinzBotz.tebaklirik ? DinzBotz.tebaklirik : {}
    if (from in DinzBotz.tebaklirik) {
      const similarity = require('similarity')
      const threshold = 0.72
      let id = m.chat
      let users = global.db.users[m.sender]
      let json = JSON.parse(JSON.stringify(DinzBotz.tebaklirik[id][1]))

      if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
        user.money += DinzBotz.tebaklirik[id][2]
        global.db.users[m.sender].exp += 100000
        var teks = `*GAME TEBAK LIRIK*\n\nJawaban Kamu Benar!\n Hadiah : +${DinzBotz.tebaklirik[id][2]} Money 💸\n EXP: +10`
        reply(`${teks}`)
        clearTimeout(DinzBotz.tebaklirik[id][3])
        delete DinzBotz.tebaklirik[id]
      } else if (similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) reply(`*Dikit Lagi!*`)
      // else reply(`*Salah!*`)
    }
DinzBotz.tebakgambar = DinzBotz.tebakgambar ? DinzBotz.tebakgambar : {}
    if (from in DinzBotz.tebakgambar) {
      kuis = true
      let id = m.chat
      let users = global.db.users[m.sender]
      let json = JSON.parse(JSON.stringify(DinzBotz.tebakgambar[id][1]))
      if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
        users.money += 10000
        var teks = `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\nHadiah : 10.000 money\n\nIngin bermain lagi? Silahkan Ketik TebakGambar`
        reply(`${teks}`)
        clearTimeout(DinzBotz.tebakgambar[id][3])
        delete DinzBotz.tebakgambar[id]
      } else console.log('*Jawaban Salah!*')
    }
DinzBotz.tebakkimia = DinzBotz.tebakkimia ? DinzBotz.tebakkimia : {};
    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
      kuis = true
      jawaban = tebakkimia[m.sender.split('@')[0]]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakkimia[m.sender.split('@')[0]]
      } else if (budy.toLowerCase() == jawaban) {
        await DinzBotz.sendText(m.chat, `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉`, m)
        delete tebakkimia[m.sender.split('@')[0]]
      } else console.log('*Jawaban Salah!*')
    }
DinzBotz.siapaaku = DinzBotz.siapaaku ? DinzBotz.siapaaku : {}
    if (from in DinzBotz.siapaaku) {
      const similarity = require('similarity')
      const threshold = 0.72
      let id = m.chat
      let users = global.db.users[m.sender]
      let json = JSON.parse(JSON.stringify(DinzBotz.siapaaku[id][1]))

      if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
        users.money += DinzBotz.siapaaku[id][2]
        var teks = `*GAME SIAPAKAH AKU*\n\nJawaban Kamu Benar!\n Hadiah : +${DinzBotz.siapaaku[id][2]} Money 💸`
        reply(`${teks}`)
        clearTimeout(DinzBotz.siapaaku[id][3])
        delete DinzBotz.siapaaku[id]
      } else if (similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) reply(`*Dikit Lagi!*`)
      // else reply(`*Salah!*`) 
    }
DinzBotz.susunkata = DinzBotz.susunkata ? DinzBotz.susunkata : {}
    if (from in DinzBotz.susunkata) {
      const similarity = require('similarity')
      const threshold = 0.72
      let id = m.chat
      let users = global.db.users[m.sender]
      let json = JSON.parse(JSON.stringify(DinzBotz.susunkata[id][1]))

      if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
        users.money += DinzBotz.susunkata[id][2]
        var teks = `*GAME SUSUN KATA*\n\nJawaban Kamu Benar!\n Hadiah : +${DinzBotz.susunkata[id][2]} Money 💸`
        reply(`${teks}`)
        clearTimeout(DinzBotz.susunkata[id][3])
        delete DinzBotz.susunkata[id]
      } else if (similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) reply(`*Dikit Lagi!*`)
      // else reply(`*Salah!*`)

    }
DinzBotz.tekateki = DinzBotz.tekateki ? DinzBotz.tekateki : {}
    if (from in DinzBotz.tekateki) {
      let users = global.db.users[m.sender]
      const similarity = require('similarity')
      const threshold = 0.72
      let id = m.chat
      let json = JSON.parse(JSON.stringify(DinzBotz.tekateki[id][1]))

      if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
        users.money += DinzBotz.tekateki[id][2]
        var teks = `*GAME TEKATEKI*\n\nJawaban Kamu Benar!\n Hadiah : +${DinzBotz.tekateki[id][2]} Money 💸`
        reply(`${teks}`)
        clearTimeout(DinzBotz.tekateki[id][3])
        delete DinzBotz.tekateki[id]
      } else if (similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) reply(`*Dikit Lagi!*`)
    }
DinzBotz.tebakbendera = DinzBotz.tebakbendera ? DinzBotz.tebakbendera : {};
    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
      kuis = true
      jawaban = tebakbendera[m.sender.split('@')[0]]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakbendera[m.sender.split('@')[0]]
      } else if (budy.toLowerCase() == jawaban) {
        await DinzBotz.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
        delete tebakbendera[m.sender.split('@')[0]]
      } else console.log('*Jawaban Salah!*')
    }
DinzBotz.caklontong = DinzBotz.caklontong ? DinzBotz.caklontong : {};
    if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
      kuis = true
      jawaban = caklontong[m.sender.split('@')[0]]
      deskripsi = caklontong_desk[m.sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
        DinzBotz.sendMessage(m.chat, {
          image: {
            url: 'https://telegra.ph/file/14744917bea0185b52fb1.jpg'
          },
          caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lontong`
        }, {
          quoted: m
        })
        delete caklontong[m.sender.split('@')[0]]
        delete caklontong_desk[m.sender.split('@')[0]]
      } else console.log('*Jawaban Salah!*')
    }
    
if (tebakbendera[m.chat] && !isCmd && m.quoted) {
      if (m.quoted.id == tebakbendera[m.chat][0].key.id) {
        const similarity = require('similarity')
        const threshold = 0.72
        let json = JSON.parse(JSON.stringify(tebakbendera[m.chat][1]))
        jawaban = json.name.toLowerCase().trim()
        if (m.text.toLowerCase() == jawaban) {

          JwbTrue("Tebak Bendera", tebakbendera[m.chat][2], `\n\nKirim perintah .tebakbendera\nuntuk bermain lagi 🎮`)
          clearTimeout(tebakbendera[m.chat][3])
          delete tebakbendera[m.chat]
        } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
          m.reply(`dikit lagi🗿`)
        else DinzBotz.sendMessage(m.chat, {
          react: {
            text: "❌",
            key: m.key,
          }
        })
      }
    }
    if (tebakjkt48[m.chat] && !isCmd && m.quoted) {
      if (m.quoted.id == tebakjkt48[m.chat][0].key.id) {
        const similarity = require('similarity')
        const threshold = 0.72
        let json = JSON.parse(JSON.stringify(tebakjkt48[m.chat][1]))
        jawaban = json.jawaban.toLowerCase().trim()
        if (m.text.toLowerCase() == jawaban) {
          JwbTrue("Tebak JKT48", tebakjkt48[m.chat][2], `\n\nKirim perintah .tebakjkt48\nuntuk bermain lagi 🎮`)
          clearTimeout(tebakjkt48[m.chat][3])
          delete tebakjkt48[m.chat]
        } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
          m.reply(`dikit lagi🗿`)
        else DinzBotz.sendMessage(m.chat, {
          react: {
            text: "❌",
            key: m.key,
          }
        })
      }
    }
if (caklontong[m.chat] && !isCmd && m.quoted) {
      if (m.quoted.id == caklontong[m.chat][0].key.id) {
        const similarity = require('similarity')
        const threshold = 0.72
        let json = JSON.parse(JSON.stringify(caklontong[m.chat][1]))
        jawaban = json.jawaban.toLowerCase().trim()
        if (m.text.toLowerCase() == jawaban) {
          JwbTrue("Cak Lontong", caklontong[m.chat][2], `\n\nKirim perintah .caklontong\nuntuk bermain lagi 🎮`)
          clearTimeout(caklontong[m.chat][3])
          delete caklontong[m.chat]
        } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
          m.reply(`dikit lagi🗿`)
        else DinzBotz.sendMessage(m.chat, {
          react: {
            text: "❌",
            key: m.key,
          }
        })
      }
    }
if (tekateki[m.chat] && !isCmd && m.quoted) {
      if (m.quoted.id == tekateki[m.chat][0].key.id) {
        const similarity = require('similarity')
        const threshold = 0.72
        let json = JSON.parse(JSON.stringify(tekateki[m.chat][1]))
        jawaban = json.jawaban.toLowerCase().trim()
        if (m.text.toLowerCase() == jawaban) {

          JwbTrue("Teka Teki", tekateki[m.chat][2], `\n\nKirim perintah .tekateki\nuntuk bermain lagi 🎮`)
          clearTimeout(tekateki[m.chat][3])
          delete tekateki[m.chat]
        } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
          m.reply(`dikit lagi🗿`)
        else DinzBotz.sendMessage(m.chat, {
          react: {
            text: "❌",
            key: m.key,
          }
        })
      }
    }
if (siapaaku[m.chat] && !isCmd && m.quoted) {
      if (m.quoted.id == siapaaku[m.chat][0].key.id) {
        const similarity = require('similarity')
        const threshold = 0.72
        let json = JSON.parse(JSON.stringify(siapaaku[m.chat][1]))
        jawaban = json.jawaban.toLowerCase().trim()
        if (m.text.toLowerCase() == jawaban) {

          JwbTrue("Tebak Siapa", siapaaku[m.chat][2], `\n\nKirim perintah .tebaksiapa\nuntuk bermain lagi 🎮`)
          clearTimeout(siapaaku[m.chat][3])
          delete siapaaku[m.chat]
        } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
          m.reply(`dikit lagi🗿`)
        else DinzBotz.sendMessage(m.chat, {
          react: {
            text: "❌",
            key: m.key,
          }
        })
      }
    }
if (lengkapikalimat[m.chat] && !isCmd && m.quoted) {
      if (m.quoted.id == lengkapikalimat[m.chat][0].key.id) {

        let json = JSON.parse(JSON.stringify(lengkapikalimat[m.chat][1]))
        jawaban = json.jawaban.toLowerCase().trim()
        if (m.text.toLowerCase() == jawaban) {

          JwbTrue("Lengkapi Kalimat", lengkapikalimat[m.chat][2], `\n\nKirim perintah .lengkapikalimat\nuntuk bermain lagi 🎮`)
          clearTimeout(lengkapikalimat[m.chat][3])
          delete lengkapikalimat[m.chat]
        } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
          m.reply(`dikit lagi🗿`)
        else DinzBotz.sendMessage(m.chat, {
          react: {
            text: "❌",
            key: m.key,
          }
        })
      }
    }

if (tebakkimia[m.chat] && !isCmd && m.quoted) {
      if (m.quoted.id == tebakkimia[m.chat][0].key.id) {
        const similarity = require('similarity')
        const threshold = 0.72
        let json = JSON.parse(JSON.stringify(tebakkimia[m.chat][1]))
        jawaban = json.unsur.toLowerCase().trim()
        if (m.text.toLowerCase() == jawaban) {
          JwbTrue("Teka Kimia", tebakkimia[m.chat][2], `\n\nKirim perintah .tebakkimia\nuntuk bermain lagi 🎮`)
          clearTimeout(tebakkimia[m.chat][3])
          delete tebakkimia[m.chat]
        } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
          m.reply(`dikit lagi🗿`)
        else DinzBotz.sendMessage(m.chat, {
          react: {
            text: "❌",
            key: m.key,
          }
        })
      }
    }
 if (tebakgambar[m.chat] && !isCmd && m.quoted) {
      if (m.quoted.id == tebakgambar[m.chat][0].key.id) {
        const similarity = require('similarity')
        const threshold = 0.72
        let json = JSON.parse(JSON.stringify(tebakgambar[m.chat][1]))
        jawaban = json.jawaban.toLowerCase().trim()
        if (m.text.toLowerCase() == jawaban) {

          JwbTrue("Tebak Gambar", tebakgambar[m.chat][2], `\n\nKirim perintah .tebakgambar\nuntuk bermain lagi 🎮`)
          clearTimeout(tebakgambar[m.chat][3])
          delete tebakgambar[m.chat]
        } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
          m.reply(`dikit lagi🗿`)
        else DinzBotz.sendMessage(m.chat, {
          react: {
            text: "❌",
            key: m.key,
          }
        })
      }
    }
if (tebaktebakan[m.chat] && !isCmd && m.quoted) {
      if (m.quoted.id == tebaktebakan[m.chat][0].key.id) {
        const similarity = require('similarity')
        const threshold = 0.72
        let json = JSON.parse(JSON.stringify(tebaktebakan[m.chat][1]))
        jawaban = json.jawaban.toLowerCase().trim()
        if (m.text.toLowerCase() == jawaban) {
          JwbTrue("Teka Tebakan", tebaktebakan[m.chat][2], `\n\nKirim perintah .tebaktebakan\nuntuk bermain lagi 🎮`)
          clearTimeout(tebaktebakan[m.chat][3])
          delete tebaktebakan[m.chat]
        } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
          m.reply(`dikit lagi🗿`)
        else DinzBotz.sendMessage(m.chat, {
          react: {
            text: "❌",
            key: m.key,
          }
        })
      }
    }
if (tebakkata[m.chat] && !isCmd && m.quoted) {
      if (m.quoted.id == tebakkata[m.chat][0].key.id) {
        const similarity = require('similarity')
        const threshold = 0.72
        let json = JSON.parse(JSON.stringify(tebakkata[m.chat][1]))
        jawaban = json.jawaban.toLowerCase().trim()
        if (m.text.toLowerCase() == jawaban) {
          JwbTrue("Tebak Kata", tebakkata[m.chat][2], `\n\nKirim perintah .tebakkata\nuntuk bermain lagi 🎮`)
          clearTimeout(tebakkata[m.chat][3])
          delete tebakkata[m.chat]
        } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
          m.reply(`dikit lagi🗿`)
        else DinzBotz.sendMessage(m.chat, {
          react: {
            text: "❌",
            key: m.key,
          }
        })
      }
    }
async function cekgame(gamejid) {
      if (tekateki[gamejid]) {
        DinzBotz.sendMessage(gamejid, {
          text: "ada soal yang belomm selesaiii,"
        }, {
          quoted: tekateki[gamejid][0]
        })
        return true
      } else if (tebakff[gamejid]) {
        DinzBotz.sendMessage(gamejid, {
          text: "ada soal yang belomm selesaiii,"
        }, {
          quoted: tebakff[gamejid][0]
        })
        return true
      } else if (susunkata[gamejid]) {
        DinzBotz.sendMessage(gamejid, {
          text: "ada soal yang belomm selesaiii,"
        }, {
          quoted: susunkata[gamejid][0]
        })
        return true
      } else if (caklontong[gamejid]) {
        DinzBotz.sendMessage(gamejid, {
          text: "ada soal yang belomm selesaiii,"
        }, {
          quoted: caklontong[gamejid][0]
        })
        return true
      } else if (tebakml[gamejid]) {
        DinzBotz.sendMessage(gamejid, {
          text: "ada soal yang belomm selesaiii,"
        }, {
          quoted: tebakml[gamejid][0]
        })
        return true
      } else {
        return false
      }
    }








//FUNCTION
const levelUpManager = {
      settingsPath: path.join(__dirname, './database/levelup_settings.json'),
      ensureSettingsFile: function () {
        const dirPath = path.dirname(this.settingsPath);
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, {
            recursive: true
          });
        }

        if (!fs.existsSync(this.settingsPath)) {
          const defaultSettings = {
            enabled: true,
            lastUpdated: new Date().toISOString()
          };
          fs.writeFileSync(this.settingsPath, JSON.stringify(defaultSettings, null, 2));
          return defaultSettings;
        }
      },

      getSettings: function () {
        this.ensureSettingsFile();
        try {
          return JSON.parse(fs.readFileSync(this.settingsPath));
        } catch (e) {
          console.error('Error reading settings:', e);
          return {
            enabled: true
          }; 
        }
      },

      
      updateSettings: function (newSettings) {
        const current = this.getSettings();
        const updated = {
          ...current,
          ...newSettings,
          lastUpdated: new Date().toISOString()
        };
        fs.writeFileSync(this.settingsPath, JSON.stringify(updated, null, 2));
        return updated;
      }
    };

const { LevelUp } = require('canvafy'); 
async function levelUpCanvas(data) {
    const config = {
        defaultPP: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60',
        background: 'https://img4.teletype.in/files/36/d9/36d9ca77-2a2f-482f-9af6-8fe18145c76f.jpeg',
        borderColor: '#FFD700', 
        avatarBorder: '#00FF00'
    };

    try {
        const { level, nama, sender } = data;
        let ppUrl;

       
        try {
            ppUrl = await DinzBotz.profilePictureUrl(sender, 'image');
        } catch (e) {
           
        if (!ppUrl || typeof ppUrl !== 'string') {
            ppUrl = config.defaultPP;
        }
        const buffer = await new canvafy.LevelUp()
            .setAvatar(ppUrl) 
            .setBackground('image', config.background)
            .setUsername(nama || 'User')
            .setBorder(config.borderColor)
            .setAvatarBorder(config.avatarBorder)
            .setOverlayOpacity(0.5)
            .setLevels(level - 1, level)
            .build();

        return buffer;

    } catch (err) {
        console.error('Error LevelUp Canvas:', err);
        return null; 

        try {
             return await new canvafy.LevelUp()
                .setAvatar(config.defaultPP)
                .setBackground('image', config.background)
                .setUsername(data.nama || 'User')
                .setLevels(data.level - 1, data.level)
                .build();
        } catch (e) {
            return null;
        }
    }
}

const threshold = 2000; 

if (global.db.users[m.sender].exp > threshold) {
    const settings = levelUpManager.getSettings(); 
    
    if (settings.enabled) {
        try {
            // 1. Update Database
            global.db.users[m.sender].exp = 0; 
            global.db.users[m.sender].level += 1; 

            const currentLevel = global.db.users[m.sender].level;

            // 2. Buat Gambar
            const buffz = await levelUpCanvas({
                level: currentLevel,
                exp: global.db.users[m.sender].exp, 
                nama: global.db.users[m.sender].nama, 
                sender: m.sender
            });

            if (buffz) {
                let caption = `*🎉 C O N G R A T U L A T I O N S 🎉*\n\n`;
                caption += `* ➠ * • ♔ Level sebelumnya : ${currentLevel - 1}\n`;
                caption += `* ➠ * • ♚ Level baru : ${currentLevel}\n`;
                caption += `\nPESAN :
TERUS LAH BERINTERAKSI DENGAN BOT AGAR LEVEL KAMU SEMAKIN TINGGI.`;

                await DinzBotz.sendMessage(m.chat, {
                    image: buffz,
                    caption: caption
                }, { quoted: m });
            }
        } catch (e) {
            console.error('Gagal membuat gambar level up:', e);
        }
    }
}

const getWelcomeText = (groupId, db) => {
    let position = null
    Object.keys(db).forEach((i) => {
        if (db[i].id === groupId) {
            position = i
        }
    })
    if (position !== null) {
        return db[position].text
    }
   
    return 'Halo @user, Selamat datang di @subject\n\n@desc' 
}

if (!fs.existsSync(folderSambutan)){
    fs.mkdirSync(folderSambutan, { recursive: true });
}
const readJson = (filename) => {
    const filePath = `${folderSambutan}/${filename}`;
    if (!fs.existsSync(filePath)) {
        const defaultData = filename.startsWith('set_') ? {} : [];
        fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2));
    }
    return JSON.parse(fs.readFileSync(filePath));
};
let _welcome = readJson('welcome.json');
let _left = readJson('left.json');
let _setWelcome = readJson('set_welcome.json');
let _setLeft = readJson('set_left.json');
const cekWelcome = (groupId) => _welcome.includes(groupId);
const cekLeft = (groupId) => _left.includes(groupId);
const pathKia = './database/autokia.json'
const readDbKia = () => {
    if (!fs.existsSync(pathKia)) {
        const defaultData = {
            groups: {},
            private: { on: false, sessions: {} },
            prompt: "You are a helpful assistant", 
            fakeImage: getRandomImageUrl() || "https://telegra.ph/file/5dfcd7952eb5a92a54366.jpg", 
            fakeCaption: "ʜᴜᴛᴀᴏ ~ ᴀɪ"
        }
        fs.writeFileSync(pathKia, JSON.stringify(defaultData, null, 2))
        return defaultData
    }
    return JSON.parse(fs.readFileSync(pathKia))
}
const writeDbKia = (data) => {
    fs.writeFileSync(pathKia, JSON.stringify(data, null, 2))
}

const dbKia = readDbKia(); 
let isAutoKiaActive = false;
let currentSession = "";
if (!m.fromMe && !isCmd) {
    if (m.isGroup) {
        if (dbKia.groups && dbKia.groups[m.chat]) {
            isAutoKiaActive = true;
            currentSession = dbKia.groups[m.chat].session;
        }
    } else {
        if (dbKia.private && dbKia.private.on) {
            isAutoKiaActive = true;
            currentSession = dbKia.private.sessions[m.chat] || "";
        }
    }
}
if (isAutoKiaActive) {
    try {
  const axios = require('axios')
        let systemPrompt = dbKia.prompt || "you are a helpful assistant";
        let fakeImgUrl = dbKia.fakeImage || getRandomImageUrl() || "https://telegra.ph/file/5dfcd7952eb5a92a54366.jpg"; 
        let fakeTitle = dbKia.fakeCaption || "ʜᴜᴛᴀᴏ ~ ᴀɪ";

        let url = `https://api.nekolabs.web.id/text.gen/gemini/realtime?text=${encodeURIComponent(m.text)}&systemPrompt=${encodeURIComponent(systemPrompt)}`;
        if (currentSession) url += `&sessionId=${encodeURIComponent(currentSession)}`;

        let { data } = await axios.get(url);

        if (data.success) {
            let dbKiaNow = readDbKia(); 
            if (m.isGroup) {
                dbKiaNow.groups[m.chat] = { session: data.result.sessionId };
            } else {
                if (!dbKiaNow.private.sessions) dbKiaNow.private.sessions = {};
                dbKiaNow.private.sessions[m.chat] = data.result.sessionId;
            }
            writeDbKia(dbKiaNow); 
            await DinzBotz.sendMessage(m.chat, {
                text: data.result.text,
                contextInfo: {
                    externalAdReply: {
                        title: fakeTitle,
                        body: "",
                        thumbnailUrl: fakeImgUrl, 
                        sourceUrl: "",           
                        mediaType: 1,
                        renderLargerThumbnail: false
                    }
                }
            }, { quoted: m });
        }
    } catch (e) {
        console.log("AutoKia Error:", e);
    }
}
const pathMenfess = './database/menfess.json';
const makeId = (length) => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
const dbMenfess = () => {
    if (!fs.existsSync(pathMenfess)) {
        if (!fs.existsSync('./database')) fs.mkdirSync('./database');
        fs.writeFileSync(pathMenfess, JSON.stringify([], null, 2));
        return [];
    }
    return JSON.parse(fs.readFileSync(pathMenfess));
};
const addMenfess = (id, from, to, msg) => {
    let db = dbMenfess();
    db.push({
        id: id,      // Kode Unik (MF-XXXX)
        from: from,
        to: to,
        msg: msg,
        date: Date.now()
    });
    fs.writeFileSync(pathMenfess, JSON.stringify(db, null, 2));
};
const findMenfess = (id) => {
    let db = dbMenfess();
    return db.find(x => x.id === id);
};
global.anonymous = global.anonymous ? global.anonymous : {}
const roomChat = Object.values(global.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (roomChat && !isCmd && !m.isGroup) {
    let other = roomChat.a === m.sender ? roomChat.b : roomChat.a
    if (m.mtype === 'conversation') {
        await DinzBotz.sendMessage(other, { text: m.message.conversation })
    } else if (m.mtype === 'imageMessage') {
        await DinzBotz.sendMessage(other, { image: await m.download(), caption: m.message.imageMessage.caption || '' })
    } else if (m.mtype === 'videoMessage') {
        await DinzBotz.sendMessage(other, { video: await m.download(), caption: m.message.videoMessage.caption || '' })
    } else if (m.mtype === 'audioMessage') {
        await DinzBotz.sendMessage(other, { audio: await m.download(), mimetype: 'audio/mpeg', ptt: m.message.audioMessage.ptt })
    } else {
        await DinzBotz.copyNForward(other, m, true)
    }
    return
}
function msToDate(mse) {
      let temp = mse;
      let days = Math.floor(mse / (24 * 60 * 60 * 1000));
      let daysms = mse % (24 * 60 * 60 * 1000);
      let hours = Math.floor(daysms / (60 * 60 * 1000));
      let hoursms = mse % (60 * 60 * 1000);
      let minutes = Math.floor(hoursms / (60 * 1000));
      let minutesms = mse % (60 * 1000);
      let sec = Math.floor(minutesms / 1000);

      return `${days} Days ${hours} Hours ${minutes} Minutes`;
    }
const pathSewa = './database/sewa.json';
const readDbSewa = () => {
    try {
        if (!fs.existsSync(pathSewa)) {
            if (!fs.existsSync('./database')) fs.mkdirSync('./database'); 
            fs.writeFileSync(pathSewa, JSON.stringify([], null, 2));
            return [];
        }
        return JSON.parse(fs.readFileSync(pathSewa));
    } catch (e) { return []; }
};
const writeDbSewa = (data) => {
    try { fs.writeFileSync(pathSewa, JSON.stringify(data, null, 2)); } catch (e) {}
};
const checkIsSewa = (jid) => {
    let db = readDbSewa();
    return db.some(x => x.id === jid);
};
const checkSewaSafe = async (dinz) => {
    if (global.lastSewaCheck && Date.now() - global.lastSewaCheck < 60000) return;
    global.lastSewaCheck = Date.now(); 
    try {
        let dbSewa = readDbSewa();
        let now = Date.now();
        let isModified = false;

        for (let i = 0; i < dbSewa.length; i++) {
            let data = dbSewa[i];
            if (now >= data.expired) {
                console.log(`[SEWA] Expired: ${data.id}`);
                
                if (dinz && dinz.ws && dinz.ws.isOpen) {
                    await dinz.sendMessage(data.id, { 
                        text: `⚠️ *MASA SEWA HABIS* ⚠️\n\nBot akan keluar otomatis.\nTerima kasih telah menggunakan jasa kami.`,
                        contextInfo: {
                            externalAdReply: {
                                title: "RENTAL EXPIRED",
                                thumbnailUrl: "https://cdn.dinzid.biz.id/6S2g.jpg",
                                mediaType: 1, renderLargerThumbnail: true
                            }
                        }
                    });
                    
                    await new Promise(r => setTimeout(r, 2000));
                    await dinz.groupLeave(data.id);
                }
                dbSewa.splice(i, 1);
                isModified = true;
                i--; 
            }
        }
        if (isModified) writeDbSewa(dbSewa);
    } catch (e) {
        console.log('Error check sewa safe:', e);
    }
};
function getRandomImageUrl() {
      const imageUrls = [
        "https://cdn.dinzid.biz.id/jnrY.jpg",
        "https://cdn.dinzid.biz.id/rscu.jpg",
        "https://cdn.dinzid.biz.id/7ols.jpg",
        "https://cdn.dinzid.biz.id/xiSO.jpg",
        "https://cdn.dinzid.biz.id/KsNz.jpg",
        "https://cdn.dinzid.biz.id/GgXf.jpg",
        // Tambahkan URL gambar lain di sini
      ];
      return imageUrls[Math.floor(Math.random() * imageUrls.length)];
    }
async function reply(txt) {
      DinzBotz.sendMessage(m.chat, {
        text: txt,
        contextInfo: {
          "externalAdReply": {
            "title": `${global.botname}`,
            "body": `https://dinzid.my.id`,
            "previewType": "PHOTO",
            "thumbnailUrl": getRandomImageUrl(),
            "sourceUrl": ``
          },
        }
      }, {
        quoted: m
      })
    }
  const qkontak = { 
    key: {
        fromMe: false, 
        participant: "0@s.whatsapp.net", 
        ...(from ? { remoteJid: "status@broadcast" } : {})
    }, 
    message: { 
        contactMessage: { 
            displayName: `${m.sayingtime + m.timoji}\n☏User: ${pushname}`, 
            vcard: 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + `item1.TEL;waid=${sender.split("@")[0]}:+${sender.split("@")[0]}\n` + 'item1.X-ABLabel:Ponsel\n' + 'END:VCARD' 
        } 
    } 
  }


//CONFIG AFK
if (m.isGroup) {
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let ment of mentionUser) {
if (afk.checkAfkUser(ment, _afk)) {
let getId2 = afk.getAfkId(ment, _afk)
let getReason2 = afk.getAfkReason(getId2, _afk)
let getTime = Date.now() - afk.getAfkTime(getId2, _afk)
let heheh2 = await readTime(getTime)
m.reply(` *[ ⛔ PERINGATAN ⛔ ]*
 
 📝 *Note :* Jangan tag dia kak, Dia sedang afk
 💡 *Alasan* : ${getReason2}
 🕛 *Selama* : ${heheh2.hours} jam, ${heheh2.minutes} menit, ${heheh2.seconds} detik yg lalu`)
}
}
if (afk.checkAfkUser(m.sender, _afk)) {
let getId = afk.getAfkId(m.sender, _afk)
let getReason = afk.getAfkReason(getId, _afk)
let getTime = Date.now() - afk.getAfkTime(getId, _afk)
let heheh = await readTime(getTime)
_afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
DinzBotz.sendTextWithMentions(m.chat,`*[ 👑 KEMBALI DARI AFK 👑 ]*
 
 👤 *User* : @${m.sender.split('@')[0]}
 💡 *Alasan* : ${getReason}
 🕛 *Selama* : ${heheh.hours} jam, ${heheh.minutes} menit, ${heheh.seconds} detik yg lalu`, m)
}
}

//EVALED & EXEC
if (chatmessage.startsWith('<')) {
    if (!isOwner) return
    if (!q) return m.reply('Masukan Parameter Code!')
    let kode = chatmessage.trim().split(/ +/)[0]
    let teks
    try {
        teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
    } catch (e) {
        teks = e
    } finally {
        await m.reply(require('util').format(teks))
    }
}
if (chatmessage.startsWith('=>')) {
    if (!isOwner) return
    function Return(sul) {
        sat = JSON.stringify(sul, null, 2)
        bang = util.format(sat)
        if (sat == undefined) {
            bang = util.format(sul)
        }
        return m.reply(bang)
    }
    try {
        m.reply(util.format(eval(`(async () => { ${chatmessage.slice(3)} })()`)))
    } catch (e) {
        m.reply(String(e))
    }
}
if (chatmessage.startsWith('>')) {
    if (!isOwner) return
    try {
        let evaled = await eval(chatmessage.slice(2))
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
        await m.reply(evaled)
    } catch (err) {
        m.reply(String(err))
    }
}
if (chatmessage.startsWith('$')) {
    if (!isOwner) return
    exec(chatmessage.slice(2), (err, stdout) => {
        if(err) return DinzBotz.sendMessage(from, {text :String(err)}, {quoted:m})
        if (stdout) return m.reply(stdout)
    })
}

//AUTO REGISTER
if (m.message && m.text && !isUser && !isGroup) {
    pendaftar.push(sender)
    fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
}

//ONLYGC
const onlygc = () => {
  DinzBotz.sendMessage(m.chat, {
    text: `_ʜᴀʟᴏ ${pushname}, *xʙᴏᴛ-ɴᴇxᴛ ᴠᴇʀꜱɪᴏɴ* ʜᴀɴʏᴀ ʙɪꜱᴀ ᴅɪɢᴜɴᴀᴋᴀɴ ᴅɪ ᴅᴀʟᴀᴍ ɢʀᴏᴜᴘ ꜱᴀᴊᴀ, ᴊɪᴋᴀ ɪɴɢɪɴ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴɴʏᴀ ᴅɪ ᴘʀɪᴠᴀᴛ ᴄʜᴀᴛ ᴘᴇʀᴛɪᴍʙᴀɴɢᴋᴀɴ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴇʟɪ ʜᴀᴋ ᴀᴋꜱᴇꜱ ᴘʀᴇᴍɪᴜᴍ ᴀᴛᴀᴜ ᴍᴇᴍʙᴇʟɪ ꜱᴄʀɪᴘᴛ ɴʏᴀ_`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `AKSES DILARANG 🚫`,
        body: "Only In Group Chat",
        thumbnailUrl: "https://endpoint.web.id/server/file/Zy853r7VXWBRHTnM.jpg",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  })
}

// --- LOGGING SYSTEM (ALL CHAT) ---
if (m.message) {
    const fixLogText = (text) => {
        if (!text) return text
        return text.replace(/@(\d+)/g, (match, number) => {
            const potentialLid = number + '@lid'
            const foundJid = DinzBotz.findJidByLid ? DinzBotz.findJidByLid(potentialLid) : null
            return foundJid ? `@${foundJid.split('@')[0]}` : match
        })
    }

    let formattedContent = fixLogText(m.body || m.mtype)
    let rawSender = m.sender
    let userJid = rawSender
    let userLid = rawSender.endsWith('@lid') ? rawSender : '-'

    if (rawSender.endsWith('@lid') && DinzBotz.findJidByLid) {
        let realSender = DinzBotz.findJidByLid(rawSender)
        if (realSender) userJid = realSender
    }

    const calendarString = new Date().toLocaleString()
    
    // Tentukan warna tag: Command (Hijau), Chat Biasa (Biru)
    let msgTypeTag = isCmd ? chalk.bgGreen.black(' CMD ') : chalk.bgBlue.black(' MSG ')

    if (m.isGroup) {
        console.log(`
┌──────────────── ${msgTypeTag} ${chalk.bold.blue('[GROUP]')} ────────────────┐
│ ${chalk.green.bold('🕒 Time:')}    ${calendarString}
│ ${chalk.blue.bold('👤 Name:')}    ${chalk.magenta(pushname)}
│ ${chalk.blue.bold('📱 JID:')}     ${chalk.yellow(userJid.split('@')[0])}
│ ${chalk.yellow.bold('🏠 Group:')}   ${chalk.yellow(DinzBotz.groupName)}
├──────────────────────────────────────────────────────┤
│ ${chalk.bold('💬 Content:')}
│ ${chalk.greenBright(formattedContent)}
└──────────────────────────────────────────────────────┘
`)
    } else {
        console.log(`
┌──────────────── ${msgTypeTag} ${chalk.bold.magenta('[PRIVATE]')} ──────────────┐
│ ${chalk.green.bold('🕒 Time:')}    ${calendarString}
│ ${chalk.blue.bold('👤 Name:')}    ${chalk.magenta(pushname)}
│ ${chalk.blue.bold('📱 JID:')}     ${chalk.yellow(userJid.split('@')[0])}
├──────────────────────────────────────────────────────┤
│ ${chalk.bold('💬 Content:')}
│ ${chalk.greenBright(formattedContent)}
└──────────────────────────────────────────────────────┘
`)
    }
}


    switch(command) {
  case 'menu': {
  DinzBotz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
  
  const currentMode = global.menuMode || 'nobutton';
  const menuType = global.menuType || '1'; 
  
  if (currentMode === 'button') {
    let menu = `Hai Kak ${pushname}👋,

ᴍᴇɴᴜ ɪɴɪ ᴍᴇɴᴜ ʙᴜᴛᴛᴏɴ 
ʏᴀɴɢ ᴅɪsɪᴍᴘᴇʟᴋᴀɴ 
ᴀɢᴀʀ ᴍᴇᴍᴜᴅᴀʜᴋᴀɴ
ᴜsᴇʀ sᴀᴀᴛ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ
ғɪᴛᴜʀ ғɪᴛᴜʀ ʙᴏᴛ

ʜᴜᴛᴀᴏ - ᴍᴅ ᴠ1 ʏᴀɴɢ sɪᴀᴘ
ᴍᴇɴᴇᴍᴀɴɪ ᴀɴᴅᴀ ᴋᴀᴘᴀɴᴘᴜɴ ɪᴛᴜ
ᴊɪᴋᴀ ᴋᴀᴍᴜ ʙᴜᴛᴜʜ ʙᴀɴᴛᴜᴀɴ
ᴀᴋᴜ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ 

> ᴄʟɪᴄᴋ ᴀʟʟᴍᴇɴᴜ ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ sᴇᴍᴜᴀ ᴍᴇɴᴜ\n`
        DinzBotz.sendMessage(m.chat, {
          footer: '© DinzID VyL - 2025',
          buttons: [{
              buttonId: `.owner`,
              buttonText: {
                displayText: 'ᴏᴡɴᴇʀ'
              },
              type: 1
            },
            {
              buttonId: `.menu`,
              buttonText: {
                displayText: 'ᴍᴇɴᴜ sɪᴍᴘᴇʟ'
              },
              type: 1
            },
            {
              buttonId: 'action',
              buttonText: {
                displayText: 'ini pesan interactiveMeta'
              },
              type: 4,
              nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                  title: 'ᴀʟʟᴍᴇɴᴜ',
                  sections: [{
                      title: `ʟɪsᴛ ʏᴀɴɢ sᴇʀɪɴɢ ᴅɪᴘᴀᴋᴀɪ`,
                      highlight_label: `.ᴘᴏᴘᴜʟᴇʀ`,
                      rows: [{
                        title: "ᴀʟʟ ᴍᴇɴᴜ ʜᴜᴛᴀᴏ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ sᴇᴍᴜᴀ ᴍᴇɴᴜ",
                        id: `.allmenubutton`,
                      }, ]
                    },
                    {
                      title: `ᴍᴇɴᴜ ᴄʜᴀʀᴀᴄᴛᴇʀ.ᴀɪ`,
                      highlight_label: ``,
                      rows: [{
                        title: "ᴄʜᴀʀᴀᴄᴛᴇʀ.ᴀɪ ᴍᴇɴᴜ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴄᴀɪ ᴍᴇɴᴜ",
                        id: `.caibutton`,
                      }, ]
                    },
                    {
                      title: `ɴᴇᴡ ᴜᴘᴅᴀᴛᴇ`,
                      highlight_label: `ᴘᴇᴍʙᴀʀᴜᴀɴ ғɪᴛᴜʀ`,
                      rows: [{
                          title: "ɴᴇᴡ ᴜᴘᴅᴀᴛᴇ",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ғɪᴛᴜʀ ʙᴀʀᴜ",
                          id: `.newupdatebutton`,
                        },
                        {
                          title: "ғɪᴛᴜʀ ғɪx",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ғɪᴛᴜʀ ʏᴀɴɢ sᴜᴅᴀʜ ᴅɪ ғɪx",
                          id: `.fixbutton`,
                        },
                        {
                          title: "ᴘᴛᴇʀᴏᴅᴀᴄᴛʏʟ ᴍᴇɴᴜ",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴘᴀɴᴇʟ ᴘᴛᴇʀᴏᴅᴀᴄᴛʏʟ",
                          id: `.pterodactylmenuv1`,
                        },
                        {
                          title: "ᴘᴛᴇʀᴏᴅᴀᴄᴛʏʟ sᴇʀᴠᴇʀ 2",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴘᴀɴᴇʟ ᴘᴛᴇʀᴏᴅᴀᴄᴛʏʟ",
                          id: `.pterodactylmenuv2`,
                        },
                      ]
                    },
                    {
                      title: `ʟɪsᴛ ᴍᴇɴᴜ ʏᴀɴɢ ᴅɪᴘɪsᴀʜᴋᴀɴ`,
                      highlight_label: ``,
                      rows: [{
                          title: "ʙᴀᴄᴀ ᴘᴇʀᴀᴛᴜʀᴀɴ",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴘᴇʀᴀᴛᴜʀᴀɴ",
                          id: `.bacaperaturanbutton`,
                        },
                        {
                          title: "ᴅᴏɴᴀsɪ",
                          description: "ᴍeɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ᴅᴏɴᴀsɪ",
                          id: `.donasibutton`,
                        },
                        {
                          title: "ᴀɪ ᴍᴇɴᴜ",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴀɪ ᴍᴇɴᴜ",
                          id: `.aimenubutton`,
                        },
                        {
                          title: "ғᴜɴ ᴍᴇɴᴜ",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ғᴜɴ ᴍᴇɴᴜ",
                          id: `.funmenubutton`,
                        },
                        {
                          title: "ʀᴘɢ ᴍᴇɴᴜ",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ʀᴘɢ ᴍᴇɴᴜ",
                          id: `.rpgmenubutton`,
                        },
                        {
                          title: "ᴘᴜsʜᴍᴇɴᴜ ᴍᴇɴᴜ",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴘᴜsʜᴍᴇɴᴜ ᴍᴇɴᴜ",
                          id: `.pushmenubutton`,
                        },
                        {
                          title: "ɴғsᴡ ᴍᴇɴᴜ",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ɴғsᴡ ᴍᴇɴᴜ",
                          id: `nfswmenubutton`,
                        },
                        {
                          title: "ɢᴀᴍᴇ ᴍᴇɴᴜ",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ɢᴀᴍᴇ ᴍᴇɴᴜ",
                          id: `.gamemenubutton`,
                        },
                        {
                          title: "sᴛᴏʀᴇ ᴍᴇɴᴜ",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ sᴛᴏʀᴇ ᴍᴇɴᴜ",
                          id: `.storemenubutton`,
                        },
                        {
                          title: "ᴀɴɪᴍᴇ ᴍᴇɴᴜ",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴀɴɪᴍᴇ ᴍᴇɴᴜ",
                          id: `.animebutton`,
                        },
                        {
                          title: "ᴏᴛʜᴇʀ ᴍᴇɴᴜ",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴏᴛʜᴇʀ ᴍᴇɴᴜ",
                          id: `.othermenubutton`,
                        },
                        {
                          title: "ᴏᴡɴᴇʀ ᴍᴇɴᴜ",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴏᴡɴᴇʀ ᴍᴇɴᴜ",
                          id: `.ownermenubutton`,
                        },
                        {
                          title: "ɢʀᴏᴜᴘ ᴍᴇɴᴜ",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ɢʀᴏᴜᴘ ᴍᴇɴᴜ",
                          id: `.groupmenubutton`,
                        },
                        {
                          title: "ɪsʟᴀᴍɪᴄ ᴍᴇɴᴜ",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ɪsʟᴀᴍɪᴄ ᴍᴇɴᴜ",
                          id: `.islamimenubutton`,
                        },
                        {
                          title: "ʙᴇʀɪᴛᴀ ᴍᴇɴᴜ",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ʙᴇʀɪᴛᴀ ᴍᴇɴᴜ",
                          id: `.beritamenubutton`,
                        },
                        {
                          title: "ǫᴜᴏᴛᴇs ᴍᴇɴᴜ",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ǫᴜᴏᴛᴇs ᴍᴇɴᴜ",
                          id: `.quotesmenubutton`,
                        },
                        {
                          title: "sᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ sᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ",
                          id: `.stickermenubutton`,
                        },
                        {
                          title: "sᴛᴀʟᴋᴇʀ ᴍᴇɴᴜ",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ sᴛᴀʟᴋᴇʀ ᴍᴇɴᴜ",
                          id: `.stalkermenubutton`,
                        },
                        {
                          title: "ᴘʀɪᴍʙᴏɴ ᴍᴇɴᴜ",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴘʀɪᴍᴏɴ ᴍᴇɴᴜ",
                          id: `.primbonmenubutton`,
                        },
                        {
                          title: "sᴇʀᴛɪғɪᴋᴀᴛ ᴍᴇɴᴜ",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ sᴇʀᴛɪғɪᴋᴀᴛ ᴍᴇɴᴜ",
                          id: `.sertifikatmenubutton`,
                        },
                        {
                          title: "ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ",
                          id: `.downloadmenubutton`,
                        },
                        {
                          title: "ᴇᴘʜᴏᴛᴏ360 ᴍᴇɴᴜ",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴇᴘʜᴏᴛᴏ360 ᴍᴇɴᴜ",
                          id: `.ephoto360menubutton`,
                        },
                        {
                          title: "ᴀɴᴏɴʏᴍᴏᴜs ᴍᴇɴᴜ",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴀɴᴏɴʏᴍᴏᴜs ᴍᴇɴᴜ",
                          id: ".anonymousmenubutton",
                        },
                        {
                          title: "ʀᴀɴᴅᴏᴍ ᴠɪᴅᴇᴏ ᴍᴇɴᴜ",
                          description: ".ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ʀᴀɴᴅᴏᴍ ᴠɪᴅᴇᴏ ᴍᴇɴᴜ",
                          id: ".randomvideomenubutton",
                        },
                        {
                          title: "ʀᴀɴᴅᴏᴍ ᴘʜᴏᴛᴏ ᴍᴇɴᴜ",
                          description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ʀᴀɴᴅᴏᴍ ᴘʜᴏᴛᴏ ᴍᴇɴᴜ",
                          id: ".randomphotomenubutton",
                        },
                      ]
                    },
                    {
                      title: `ɪɴғᴏʀᴍᴀsɪ ʜᴜᴛᴀᴏ ᴀssɪsᴛᴇɴᴛ`,
                      highlight_label: `ᴅɪɴᴢɪᴅ ᴏғғᴄ`,
                      rows: [{
                          title: "ɪɴғᴏ ʙᴏᴛ",
                          description: "ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ",
                          id: `.infobot`,
                        },
                        {
                          title: "ᴍᴇɴᴜ sɪᴍᴘʟᴇ",
                          description: "ᴋᴇᴍʙᴀʟɪ ᴋᴇ ᴍᴇɴᴜ sɪᴍᴘᴇʟ",
                          id: `.menu`,
                        },
                      ]
                    },
                  ],
                })
              }
            }
          ],
      headerType: 1,
      image: fs.readFileSync('./media/menuv1.jpg'),
      caption: menu,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        mentionedJid: [m.sender],
        externalAdReply: {
          title: botname,
          body: global.ownername,
          thumbnailUrl: dinzmenu,
          sourceUrl: 'https://whatsapp.com/channel/0029VbAuu0fFHWpvAZAS3d17/107',
          mediaType: 1
        }
      }
    }, { quoted: m });
    
  } else {
    let ownernya = global.ownernumber + '@s.whatsapp.net';
    let me = m.sender;
    let uptime = await runtime(process.uptime());
    let timestampe = speed();
    let latensie = speed() - timestampe;
    let statusMode = 'ᴘᴜʙʟɪᴄ'
    if (!db.settings[botNumber].public) {
    statusMode = 'sᴇʟғ'
    } else if (db.settings[botNumber].onlyadmin) {
    statusMode = 'ᴏɴʟʏ ᴀᴅᴍɪɴ'
    } else if (db.settings[botNumber].onlygrub) {
    statusMode = 'ᴏɴʟʏ ɢʀᴏᴜᴘ'
    } else if (db.settings[botNumber].onlypc) {
    statusMode = 'ᴏɴʟʏ ᴘᴄ'
    }
DinzID_sad = `ʜᴀʟʟᴏ, ${pushname}.
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ ʟᴀʏᴀɴᴀɴ ${botname}.

ᴋᴀᴍɪ ᴀᴅᴀʟᴀʜ ᴀssɪsᴛᴀɴᴛ ᴠɪʀᴛᴜᴀʟ ʏᴀɴɢ ᴅɪʀᴀɴᴄᴀɴɢ ᴋʜᴜsᴜs ᴜɴᴛᴜᴋ ᴍᴇɴɪɴɢᴋᴀᴛᴋᴀɴ ᴘʀᴏᴅᴜᴋᴛɪᴠɪᴛᴀs ᴅɪɢɪᴛᴀʟ ᴀɴᴅᴀ. sɪsᴛᴇᴍ ɪɴɪ ᴅɪʟᴇɴɢᴋᴀᴘɪ ᴅᴇɴɢᴀɴ ʙᴇʀʙᴀɢᴀɪ ᴋᴀᴘᴀʙɪʟɪᴛᴀs, ᴍᴜʟᴀɪ ᴅᴀʀɪ:

+ ᴘᴇɴɢᴇʟᴏʟᴀᴀɴ ᴋᴇᴀᴍᴀɴᴀɴ ɢʀᴜᴘ
+ ᴀᴋsᴇs ᴜɴᴅᴜʜ ᴍᴇᴅɪᴀ ᴛᴀɴᴘᴀ ʙᴀᴛᴀs
+ sᴀʀᴀɴᴀ ᴇᴅᴜᴋᴀsɪ ᴅᴀɴ ɪɴғᴏʀᴍᴀsɪ

ᴋᴀᴍɪ ʙᴇʀᴋᴏᴍɪᴛᴍᴇɴ ᴍᴇᴍʙᴇʀɪᴋᴀɴ ᴘᴇɴɢᴀʟᴀᴍᴀɴ ᴛᴇʀʙᴀɪᴋ.
ᴅɪʙᴜᴀᴛ ᴏʟᴇʜ ${global.nameCreator}.

ᴊɪᴋᴀ ᴛᴇʀᴊᴀᴅɪ ᴋᴇɴᴅᴀʟᴀ ᴛᴇᴋɴɪs, sɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ .ᴏᴡɴᴇʀ


┏━╸[ \`ɪɴғᴏʀᴍᴀᴛɪᴏɴ ᴜsᴇʀ\` ]╺━┓
┃𖥠│ ᴜsᴇʀ : ${pushname}
┃𖥠│ ᴛʏᴘᴇ : ${isPrem ? 'ᴠɪᴘ' : 'ғʀᴇᴇ'}
┃𖥠│ ᴛɪᴍᴇ : ${runtime(process.uptime())}
┃𖥠│ ᴏᴡɴᴇʀ : ${global.ownername}
┗━━━━━━━━━━━━━━━┛

┏━ *[ ᴍᴀɪɴ ғᴇᴀᴛᴜʀᴇs ]* ━┓
┃
┃ ◼ .ᴀɪᴍᴇɴᴜ
┃ ◼ .ᴀʟʟᴍᴇɴᴜ
┃ ◼ .sᴛᴏʀᴇᴍᴇɴᴜ
┃ ◼ .ᴘᴜsʜᴍᴇɴᴜ
┃ ◼ .ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ
┃ ◼ .ᴘᴛᴇʀᴏᴅᴀᴄᴛʏʟᴍᴇɴᴜ
┃
┣━ *[ ғᴜɴ & ɢᴀᴍᴇs ]* ━╣
┃
┃ ◼ .ʀᴘɢᴍᴇɴᴜ
┃ ◼ .ғᴜɴᴍᴇɴᴜ
┃ ◼ .ɢᴀᴍᴇᴍᴇɴᴜ
┃ ◼ .ᴀɴɪᴍᴇᴍᴇɴᴜ
┃ ◼ .sᴛɪᴄᴋᴇʀᴍᴇɴᴜ
┃ ◼ .ʀᴀɴᴅᴏᴍᴘʜᴏᴛᴏᴍᴇɴᴜ
┃ ◼ .ʀᴀɴᴅᴏᴍᴠɪᴅᴇᴏᴍᴇɴᴜ
┃
┣━ *[ ᴍɪsᴄᴇʟʟᴀɴᴇᴏᴜs ]* ━╣
┃
┃ ◼ .ᴅᴏɴᴀsɪ
┃ ◼ .ɴғsᴡᴍᴇɴᴜ
┃ ◼ .ɢʀᴏᴜᴘᴍᴇɴᴜ
┃ ◼ .ʙᴇʀɪᴛᴀᴍᴇɴᴜ
┃ ◼ .ɪsʟᴀᴍɪᴍᴇɴᴜ
┃ ◼ .ᴏ̨ᴜᴏᴛᴇsᴍᴇɴᴜ
┃ ◼ .sᴛᴀʟᴋᴇʀᴍᴇɴᴜ
┃ ◼ .ᴘʀɪᴍʙᴏɴᴍᴇɴᴜ
┃ ◼ .ᴇᴘʜᴏᴛᴏ360ᴍᴇɴᴜ
┃ ◼ .ᴀɴᴏɴʏᴍᴏᴜsᴍᴇɴᴜ
┃ ◼ .ʙᴀᴄᴀᴘᴇʀᴀᴛᴜʀᴀɴ
┃
┗━━━━━━━━━━━━┛`;
    if (menuType === '1') {
      DinzBotz.sendMessage(m.chat, {
        video: fs.readFileSync('./media/hutao.mp4'),
        gifPlayback: true,
        caption: DinzID_sad,
        contextInfo: {
          forwardingScore: 1,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterName: `${global.ownername}`,
            newsletterJid: `120363403870324179@newsletter`,
          },
          externalAdReply: {
            title: botname,
            body: ownername,
            thumbnailUrl: `${global.thumbnail}`,
            sourceUrl: `https://whatsapp.com/channel/0029Vaa4rPI4yltIJcEJyN1x`,
            mediaType: 1,
            renderLargerThumbnail: true,
            mentionedJid: [m.sender]
          }
        }
      }, { quoted: m });
    
    } else if (menuType === '2') {
      DinzBotz.sendMessage(m.chat, {
        image: fs.readFileSync('./media/thumb.jpg'),
        caption: DinzID_sad,
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          mentionedJid: [m.sender],
          externalAdReply: {
            title: botname,
            body: global.ownername,
            thumbnailUrl: dinzmenu,
            sourceUrl: 'https://whatsapp.com/channel/0029VbAuu0fFHWpvAZAS3d17/107',
            mediaType: 1
          }
        }
      }, { quoted: m });
    }
    
    let muskk = {
      audio: fs.readFileSync('./media/audio/menu.mp3'),
      mimetype: 'audio/mp4',  
      ptt: true
    };
    await DinzBotz.sendMessage(m.chat, muskk, { quoted: m });
  }
  break;
}
case 'setmenutype': {
    if (!DinzTheCreator) return reply(mess.owner)
    if (!args[0]) return reply(`Pilih tipe menu:\n1. Tipe Video (Gif Playback)\n2. Tipe Image (Mirip Button Style)\n\nContoh: ${prefix + command} 1`)
    
    if (args[0] === '1') {
        global.menuType = '1'
        reply('Sukses mengubah tampilan menu ke Tipe 1 (Video/Gif)')
    } else if (args[0] === '2') {
        global.menuType = '2'
        reply('Sukses mengubah tampilan menu ke Tipe 2 (Image)')
    } else {
        reply('Tipe tidak tersedia, pilih 1 atau 2')
    }
    break
}

case 'remini':
case 'hdr':
case 'hd': {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || (q.m || q).mimetype || ''
    
    if (!/image/.test(mime)) return reply(`Kirim gambar dengan caption ${prefix + command} atau reply gambar yang sudah ada.`)
    
    await DinzBotz.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } })
    await reply(`⚠️ Sedang memproses HD (Upscale 4x)...\n⏳ Tunggu sekitar 1 menit.`);

    let media = await DinzBotz.downloadAndSaveMediaMessage(q);
    
    try {
        console.log('1. Uploading to CDN...');
        const form = new FormData();
        form.append('file', fs.createReadStream(media));

        const uploadRes = await fetch('https://cdn.dinzid.biz.id/upload', {
            method: 'POST',
            body: form,
            headers: { ...form.getHeaders() }
        });

        if (!uploadRes.ok) throw new Error(`Upload Gagal: ${uploadRes.status}`);
        
        const uploadJson = await uploadRes.json();
        console.log('>> CDN Response:', uploadJson); 

        const cdnUrl = uploadJson.url || uploadJson.file || uploadJson.result;
        if (!cdnUrl) throw new Error('CDN tidak mengembalikan URL.');

        console.log('2. Requesting Upscale (4x)...');
        
        const apiUrl = `https://api.nekolabs.web.id/tools/upscale/supawork?imageUrl=${encodeURIComponent(cdnUrl)}&scale=4`;
        
        const nekoRes = await fetch(apiUrl);
        
        if (!nekoRes.ok) {
            const errText = await nekoRes.text();
            throw new Error(`API Error: ${nekoRes.status} - ${errText}`);
        }

        const anjai = await nekoRes.json();
        console.log('>> Nekolabs Response:', anjai);

     
        if (anjai.success && anjai.result) {
            await DinzBotz.sendMessage(m.chat, {
                image: { url: anjai.result },
                caption: `*sᴜᴄᴄᴇss ᴜᴘsᴄᴀʟᴇ 𝟺x* ✨`
            }, { quoted: m });
        } else {
            reply(`Gagal: ${JSON.stringify(anjai)}`);
        }

        fs.unlinkSync(media);

    } catch (error) {
        console.error('ERROR:', error);
        reply(`Terjadi kesalahan:\n${error.message}`);
        if (fs.existsSync(media)) fs.unlinkSync(media);
    }
}
break
  case 'dinzmenu':
    case 'menuv1':
    case 'menu-v1': {

      let menu = `Hai Kak ${pushname}👋,

ᴍᴇɴᴜ ᴠ1 ɪɴɪ ᴍᴇɴᴜ ʙᴜᴛᴛᴏɴ 
ʏᴀɴɢ ᴅɪsɪᴍᴘᴇʟᴋᴀɴ 
ᴀɢᴀʀ ᴍᴇᴍᴜᴅᴀʜᴋᴀɴ
ᴜsᴇʀ sᴀᴀᴛ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ
ғɪᴛᴜʀ ғɪᴛᴜʀ ʙᴏᴛ

ʜᴜᴛᴀᴏ - ᴍᴅ ᴠ1 ʏᴀɴɢ sɪᴀᴘ
ᴍᴇɴᴇᴍᴀɴɪ ᴀɴᴅᴀ ᴋᴀᴘᴀɴᴘᴜɴ ɪᴛᴜ
ᴊɪᴋᴀ ᴋᴀᴍᴜ ʙᴜᴛᴜʜ ʙᴀɴᴛᴜᴀɴ
ᴀᴋᴜ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ 

> ᴄʟɪᴄᴋ ᴀʟʟᴍᴇɴᴜ ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ sᴇᴍᴜᴀ ᴍᴇɴᴜ\n`
      DinzBotz.sendMessage(m.chat, {
        footer: '© DinzID VyL - 2025',
        buttons: [{
            buttonId: `.owner`,
            buttonText: {
              displayText: 'ᴏᴡɴᴇʀ'
            },
            type: 1
          },
          {
            buttonId: `.menu`,
            buttonText: {
              displayText: 'ᴍᴇɴᴜ sɪᴍᴘᴇʟ'
            },
            type: 1
          },
          {
            buttonId: 'action',
            buttonText: {
              displayText: 'ini pesan interactiveMeta'
            },
            type: 4,
            nativeFlowInfo: {
              name: 'single_select',
              paramsJson: JSON.stringify({
                title: 'ᴀʟʟᴍᴇɴᴜ',
                sections: [{
                    title: `ʟɪsᴛ ʏᴀɴɢ sᴇʀɪɴɢ ᴅɪᴘᴀᴋᴀɪ`,
                    highlight_label: `.ᴘᴏᴘᴜʟᴇʀ`,
                    rows: [{
                      title: "ᴀʟʟ ᴍᴇɴᴜ ʜᴜᴛᴀᴏ",
                      description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ sᴇᴍᴜᴀ ᴍᴇɴᴜ",
                      id: `.allmenubutton`,
                    }, ]
                  },
                  {
                    title: `ᴍᴇɴᴜ ᴄʜᴀʀᴀᴄᴛᴇʀ.ᴀɪ`,
                    highlight_label: ``,
                    rows: [{
                      title: "ᴄʜᴀʀᴀᴄᴛᴇʀ.ᴀɪ ᴍᴇɴᴜ",
                      description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴄᴀɪ ᴍᴇɴᴜ",
                      id: `.caibutton`,
                    }, ]
                  },
                  {
                    title: `ɴᴇᴡ ᴜᴘᴅᴀᴛᴇ`,
                    highlight_label: `ᴘᴇᴍʙᴀʀᴜᴀɴ ғɪᴛᴜʀ`,
                    rows: [{
                        title: "ɴᴇᴡ ᴜᴘᴅᴀᴛᴇ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ғɪᴛᴜʀ ʙᴀʀᴜ",
                        id: `.newupdatebutton`,
                      },
                      {
                        title: "ғɪᴛᴜʀ ғɪx",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ғɪᴛᴜʀ ʏᴀɴɢ sᴜᴅᴀʜ ᴅɪ ғɪx",
                        id: `.fixbutton`,
                      },
                      {
                        title: "ᴘᴛᴇʀᴏᴅᴀᴄᴛʏʟ ᴍᴇɴᴜ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴘᴀɴᴇʟ ᴘᴛᴇʀᴏᴅᴀᴄᴛʏʟ",
                        id: `.pterodactylmenuv1`,
                      },
                      {
                        title: "ᴘᴛᴇʀᴏᴅᴀᴄᴛʏʟ sᴇʀᴠᴇʀ 2",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴘᴀɴᴇʟ ᴘᴛᴇʀᴏᴅᴀᴄᴛʏʟ",
                        id: `.pterodactylmenuv2`,
                      },
                    ]
                  },
                  {
                    title: `ʟɪsᴛ ᴍᴇɴᴜ ʏᴀɴɢ ᴅɪᴘɪsᴀʜᴋᴀɴ`,
                    highlight_label: ``,
                    rows: [{
                        title: "ʙᴀᴄᴀ ᴘᴇʀᴀᴛᴜʀᴀɴ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴘᴇʀᴀᴛᴜʀᴀɴ",
                        id: `.bacaperaturanbutton`,
                      },
                      {
                        title: "ᴅᴏɴᴀsɪ",
                        description: "ᴍeɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ᴅᴏɴᴀsɪ",
                        id: `.donasibutton`,
                      },
                      {
                        title: "ᴀɪ ᴍᴇɴᴜ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴀɪ ᴍᴇɴᴜ",
                        id: `.aimenubutton`,
                      },
                      {
                        title: "ғᴜɴ ᴍᴇɴᴜ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ғᴜɴ ᴍᴇɴᴜ",
                        id: `.funmenubutton`,
                      },
                      {
                        title: "ʀᴘɢ ᴍᴇɴᴜ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ʀᴘɢ ᴍᴇɴᴜ",
                        id: `.rpgmenubutton`,
                      },
                      {
                        title: "ᴘᴜsʜᴍᴇɴᴜ ᴍᴇɴᴜ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴘᴜsʜᴍᴇɴᴜ ᴍᴇɴᴜ",
                        id: `.pushmenubutton`,
                      },
                      {
                        title: "ɴғsᴡ ᴍᴇɴᴜ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ɴғsᴡ ᴍᴇɴᴜ",
                        id: `nfswmenubutton`,
                      },
                      {
                        title: "ɢᴀᴍᴇ ᴍᴇɴᴜ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ɢᴀᴍᴇ ᴍᴇɴᴜ",
                        id: `.gamemenubutton`,
                      },
                      {
                        title: "sᴛᴏʀᴇ ᴍᴇɴᴜ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ sᴛᴏʀᴇ ᴍᴇɴᴜ",
                        id: `.storemenubutton`,
                      },
                      {
                        title: "ᴀɴɪᴍᴇ ᴍᴇɴᴜ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴀɴɪᴍᴇ ᴍᴇɴᴜ",
                        id: `.animebutton`,
                      },
                      {
                        title: "ᴏᴛʜᴇʀ ᴍᴇɴᴜ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴏᴛʜᴇʀ ᴍᴇɴᴜ",
                        id: `.othermenubutton`,
                      },
                      {
                        title: "ᴏᴡɴᴇʀ ᴍᴇɴᴜ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴏᴡɴᴇʀ ᴍᴇɴᴜ",
                        id: `.ownermenubutton`,
                      },
                      {
                        title: "ɢʀᴏᴜᴘ ᴍᴇɴᴜ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ɢʀᴏᴜᴘ ᴍᴇɴᴜ",
                        id: `.groupmenubutton`,
                      },
                      {
                        title: "ɪsʟᴀᴍɪᴄ ᴍᴇɴᴜ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ɪsʟᴀᴍɪᴄ ᴍᴇɴᴜ",
                        id: `.islamimenubutton`,
                      },
                      {
                        title: "ʙᴇʀɪᴛᴀ ᴍᴇɴᴜ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ʙᴇʀɪᴛᴀ ᴍᴇɴᴜ",
                        id: `.beritamenubutton`,
                      },
                      {
                        title: "ǫᴜᴏᴛᴇs ᴍᴇɴᴜ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ǫᴜᴏᴛᴇs ᴍᴇɴᴜ",
                        id: `.quotesmenubutton`,
                      },
                      {
                        title: "sᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ sᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ",
                        id: `.stickermenubutton`,
                      },
                      {
                        title: "sᴛᴀʟᴋᴇʀ ᴍᴇɴᴜ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ sᴛᴀʟᴋᴇʀ ᴍᴇɴᴜ",
                        id: `.stalkermenubutton`,
                      },
                      {
                        title: "ᴘʀɪᴍʙᴏɴ ᴍᴇɴᴜ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴘʀɪᴍᴏɴ ᴍᴇɴᴜ",
                        id: `.primbonmenubutton`,
                      },
                      {
                        title: "sᴇʀᴛɪғɪᴋᴀᴛ ᴍᴇɴᴜ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ sᴇʀᴛɪғɪᴋᴀᴛ ᴍᴇɴᴜ",
                        id: `.sertifikatmenubutton`,
                      },
                      {
                        title: "ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ",
                        id: `.downloadmenubutton`,
                      },
                      {
                        title: "ᴇᴘʜᴏᴛᴏ360 ᴍᴇɴᴜ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴇᴘʜᴏᴛᴏ360 ᴍᴇɴᴜ",
                        id: `.ephoto360menubutton`,
                      },
                      {
                        title: "ᴀɴᴏɴʏᴍᴏᴜs ᴍᴇɴᴜ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴀɴᴏɴʏᴍᴏᴜs ᴍᴇɴᴜ",
                        id: ".anonymousmenubutton",
                      },
                      {
                        title: "ʀᴀɴᴅᴏᴍ ᴠɪᴅᴇᴏ ᴍᴇɴᴜ",
                        description: ".ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ʀᴀɴᴅᴏᴍ ᴠɪᴅᴇᴏ ᴍᴇɴᴜ",
                        id: ".randomvideomenubutton",
                      },
                      {
                        title: "ʀᴀɴᴅᴏᴍ ᴘʜᴏᴛᴏ ᴍᴇɴᴜ",
                        description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ʀᴀɴᴅᴏᴍ ᴘʜᴏᴛᴏ ᴍᴇɴᴜ",
                        id: ".randomphotomenubutton",
                      },
                    ]
                  },
                  {
                    title: `ɪɴғᴏʀᴍᴀsɪ ʜᴜᴛᴀᴏ ᴀssɪsᴛᴇɴᴛ`,
                    highlight_label: `ᴅɪɴᴢɪᴅ ᴏғғᴄ`,
                    rows: [{
                        title: "ɪɴғᴏ ʙᴏᴛ",
                        description: "ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ",
                        id: `.infobot`,
                      },
                      {
                        title: "ᴍᴇɴᴜ sɪᴍᴘʟᴇ",
                        description: "ᴋᴇᴍʙᴀʟɪ ᴋᴇ ᴍᴇɴᴜ sɪᴍᴘᴇʟ",
                        id: `.menu`,
                      },
                    ]
                  },
                ],
              })
            }
          }
        ],
        headerType: 1,
        viewOnce: true,
        image: fs.readFileSync('./media/menuv1.jpg'),
        gifPlayback: true,
        caption: menu,
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          mentionedJid: [sender],
          forwardedNewsletterMessageInfo: {
            newsletterName: `DinzID`,
            newsletterJid: `6556}`,
          },
          externalAdReply: {
            title: botname,
            body: ownername,
            thumbnailUrl: dinzmenu,
            sourceUrl: 'https://whatsapp.com/channel/0029VbAuu0fFHWpvAZAS3d17/107',
            mediaType: 1,
            renderLargerThumbnail: false
          }
        }
      }, {
        quoted: m
      })
      await sleep(2500)
      DinzBotz.sendMessage(m.chat, {
        audio: fs.readFileSync('./media/audio/menu.mp3'),
        mimetype: 'audio/mp4',
        ptt: true
      }, {
        quoted: m
      })
    }
    db.users[m.sender].exp += 300;
    break
case 'setprefix': {
    if (!isOwner) return m.reply('Khusus Owner!');
    if (!text) return m.reply(`*Cara Pakai:*\n\n1. ${prefix}setprefix multi\n(Bisa pakai banyak simbol . # / dll)\n\n2. ${prefix}setprefix noprefix\n(Tanpa simbol, langsung ketik perintah)\n\n3. ${prefix}setprefix #\n(Hanya bisa pakai simbol #)`);

    let pfxConf = JSON.parse(fs.readFileSync('./database/prefix.json'));
    if (args[0] === 'multi') {
        pfxConf.mode = 'multi';
        m.reply('✅ Berhasil ubah ke mode *Multi Prefix*');
    } else if (args[0] === 'noprefix') {
        pfxConf.mode = 'noprefix';
        m.reply('✅ Berhasil ubah ke mode *No Prefix* (Tanpa Simbol)');
    } else {
        pfxConf.mode = 'single';
        pfxConf.symbol = args[0]; // Ambil simbol yang diketik user
        m.reply(`✅ Berhasil ubah ke mode *Single Prefix*. Simbol: ${args[0]}`);
    }
    fs.writeFileSync('./database/prefix.json', JSON.stringify(pfxConf, null, 2));
}
break
case "bck": case "backup": {
    const sender = m.sender.split("@")[0];
    const isCreator = global.owner.includes(sender);
    
    if (!isCreator && m.sender !== botNumber) {
        return m.reply(mess.owner);
    }

    try {        
        m.reply("Processing Backup Script . .");
        const tmpDir = "./data/trash";
        if (fs.existsSync(tmpDir)) {
            try { 
                const files = fs.readdirSync(tmpDir).filter(f => !f.endsWith(".js"));
                for (let file of files) fs.unlinkSync(`${tmpDir}/${file}`);
            } catch {}
        }

        const dateDisplay = typeof global.tanggal === 'function' ? global.tanggal(Date.now()) : new Date().toDateString();
        const safeDate = dateDisplay.replace(/[^a-zA-Z0-9]/g, '_');
        const name = `${global.botname} - ${safeDate}`; 

        const exclude = ["node_modules", "Auth", "session", "package-lock.json", "yarn.lock", ".npm", ".cache", ".git", ".gitignore", "setbot.json"];
        const filesToZip = fs.readdirSync(process.cwd())
            .filter(f => !exclude.includes(f) && f !== "" && !f.endsWith(".zip"));

        if (!filesToZip.length) return m.reply("Tidak ada file yang dapat di-backup.");

        execSync(`zip -r "${name}.zip" ${filesToZip.join(" ")}`);

        const zipPath = `./${name}.zip`;
        const zipBuffer = fs.readFileSync(zipPath);

        await DinzBotz.sendMessage(m.sender, {
            document: zipBuffer,
            fileName: `${name}.zip`,
            caption: `*SUCCESS BACKUP SCRIPT*\n\n` +
                     `- 📅 Tanggal: ${dateDisplay}\n` + 
                     `*💬 File aman tersimpan.*`, 
            mimetype: "application/zip"
        }, { quoted: m });

        if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);
        if (m.isGroup) m.reply("Script bot berhasil dikirim ke private chat.");

    } catch (err) {
        console.error("Backup Error:", err);
        m.reply(`❌ Gagal Backup:\n${err.message}`);
    }
}
break;
case 'iqc': {
    if (!text) return reply(`Masukan pesan!\nContoh: ${prefix + command} Halo sayang`)

   DinzBotz.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })

    try {
        const time = new Date().toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', hour12: false })
        const battery = Math.floor(Math.random() * (100 - 20 + 1)) + 20
        
        const apiUrl = `https://brat.siputzx.my.id/iphone-quoted?time=${encodeURIComponent(time)}&batteryPercentage=${battery}&carrierName=Indosat&messageText=${encodeURIComponent(text)}&emojiStyle=apple`

        const { data } = await axios.get(apiUrl, { responseType: 'arraybuffer' })

        await DinzBotz.sendMessage(m.chat, { 
            image: Buffer.from(data), 
            caption: 'Done' 
        }, { quoted: m })

       DinzBotz.sendMessage(m.chat, { react: { text: '✅', key: m.key } })

    } catch (error) {
        console.log(error)
        reply('Terjadi kesalahan saat membuat gambar.')
        DinzBotz.sendMessage(m.chat, { react: { text: '❌', key: m.key } })
    }
}
break
case 'tourl': {
    if (!mime) return reply(`Kirim/Reply Video/Gambar Dengan Caption ${prefix + command}`)
    
    DinzBotz.sendMessage(m.chat, { react: { text: "⏳️", key: m.key } })

    try {
        let media = await DinzBotz.downloadAndSaveMediaMessage(quoted)
        
        const FormData = require('form-data')
        const form = new FormData()
        form.append('file', fs.createReadStream(media))

        const { data } = await axios.post('https://dinzapi-sweager.vercel.app/api/cdn/dinzid', form, {
            headers: {
                ...form.getHeaders()
            }
        })

        if (!data.status || !data.data || !data.data.url) throw new Error('Format respon API tidak sesuai')

        let responseUrl = data.data.url
        let fileSize = (fs.statSync(media).size / 1024).toFixed(2)
        let uploader = `${pushname}`
        let caption = `> ᴜᴋᴜʀᴀɴ ғɪʟᴇ : ${fileSize} ᴋʙ\n> ᴘᴇɴɢᴜɴɢɢᴀʜ : ${uploader}`.trim()

        if (/image|video/.test(mime)) {
            let msg = generateWAMessageFromContent(
                m.chat, {
                    viewOnceMessage: {
                        message: {
                            interactiveMessage: {
                                body: {
                                    text: `*sᴜᴅᴀʜ sᴇʟᴇsᴀɪ ${pushname} sɪʟᴀʜᴋᴀɴ ᴅɪᴄᴏᴘᴘʏ ʟɪɴᴋɴʏᴀ*`
                                },
                                carouselMessage: {
                                    cards: [{
                                        header: proto.Message.InteractiveMessage.Header.create({
                                            ...(await prepareWAMessageMedia({
                                                image: {
                                                    url: './media/hutaodinz.jpg'
                                                }
                                            }, {
                                                upload: DinzBotz.waUploadToServer
                                            })),
                                            title: '',
                                            gifPlayback: true,
                                            subtitle: global.ownername,
                                            hasMediaAttachment: false
                                        }),
                                        body: {
                                            text: caption
                                        },
                                        nativeFlowMessage: {
                                            buttons: [{
                                                "name": "cta_copy",
                                                "buttonParamsJson": `{\"display_text\":\"Click to get link\",\"id\":\"123456789\",\"copy_code\":\"${responseUrl}\"}`
                                            }, {
                                                "name": "cta_url",
                                                "buttonParamsJson": `{\"display_text\":\"Open Link\",\"url\":\"${responseUrl}\",\"merchant_url\":\"${responseUrl}\"}`
                                            }],
                                        },
                                    }, ],
                                    messageVersion: 1,
                                },
                            },
                        },
                    },
                }, {
                    quoted: m
                }
            )

            await DinzBotz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id,
            })

        } else {
            reply(`Link File: ${responseUrl}`)
        }

        await fs.unlinkSync(media)

    } catch (err) {
        console.log(err)
        reply("Ups, terjadi kesalahan saat mengunggah media.")
    }
}
break
case 'ht':
case 'h':
case 'hidetag': {
    if (!isGroup) return reply('Fitur ini hanya untuk grup!')
    if (!isAdmin) return reply('Fitur ini khusus admin grup!')

    const members = await groupMetadata.participants.map(u => u.id)
    const isQuoted = m.quoted ? true : false
    const mime = (isQuoted ? m.quoted.mimetype : m.mimetype) || ''
    const q = args.join(" ")

    if (/image|video/.test(mime)) {
        let media = isQuoted ? await m.quoted.download() : await m.download()
        let captionText = q ? q : (isQuoted ? m.quoted.text : '')

        await DinzBotz.sendMessage(m.chat, {
            [mime.split('/')[0]]: media,
            caption: captionText,
            mentions: members
        }, { quoted: m })

    } else if (isQuoted && m.quoted.text) {
        await DinzBotz.sendMessage(m.chat, {
            text: m.quoted.text,
            mentions: members
        }, { quoted: m })

    } else {
        let textToSend = q ? q : ''
        
        await DinzBotz.sendMessage(m.chat, {
            text: textToSend,
            mentions: members
        }, { quoted: m })
    }
    break
}
    case 'install':
case 'npm': {
    if (!isOwner) return reply('Fitur ini khusus Owner!')
    if (!text) return reply(`Mau install module apa?\nContoh: ${prefix + command} axios`)
    reply(`⏳ Sedang menginstall module *${text}*...\nMohon tunggu, bot akan restart otomatis jika berhasil.`)
    require('child_process').exec(`npm install ${text}`, (err, stdout, stderr) => {
        if (err) {
           
            return reply(`❌ Gagal menginstall module: ${err.message}`)
        }
        DinzBotz.sendMessage(m.chat, { 
            text: `✅ Sukses install *${text}*!\n\n📝 Output:\n${stdout}\n\n♻️ Bot sedang merestart sistem...` 
        }, { quoted: m }).then(() => {
            setTimeout(() => {
                process.exit()
            }, 3000)
        })
    })
}
break
case 'ytmp3':
case 'yta': {
  if (!args[0]) return reply(`Contoh: ${prefix + command} https://youtu.be/HWjCStB6k4o 128`)

  let url = args[0]
  let quality = args[1] || '128'

  DinzBotz.sendMessage(m.chat, {
    react: {
      text: "⏳",
      key: m.key
    }
  })

  try {
    const apiUrl = `https://api.vreden.my.id/api/v1/download/youtube/audio?url=${url}&quality=${quality}`
    const response = await fetch(apiUrl)
    const json = await response.json()

    if (!json.status || !json.result) {
      return reply('Gagal mengambil data audio.')
    }

    const meta = json.result.metadata
    const dl = json.result.download

    await DinzBotz.sendMessage(m.chat, {
      audio: {
        url: dl.url
      },
      mimetype: 'audio/mpeg',
      fileName: dl.filename,
      contextInfo: {
        externalAdReply: {
          title: meta.title,
          body: meta.author.name,
          mediaType: 1,
          renderLargerThumbnail: true,
          thumbnailUrl: meta.thumbnail,
          sourceUrl: meta.url
        }
      }
    }, {
      quoted: m
    })

    DinzBotz.sendMessage(m.chat, {
      react: {
        text: "✅",
        key: m.key
      }
    })

  } catch (error) {
    console.error(error)
    reply('Terjadi kesalahan saat mengunduh.')
  }
}
break
case 'ytmp4':
case 'ytv': {
  if (!args[0]) return reply(`Contoh: ${prefix + command} https://youtu.be/HWjCStB6k4o 480`)

  let url = args[0]
  let quality = args[1] || '360'

  DinzBotz.sendMessage(m.chat, {
    react: {
      text: "⏳",
      key: m.key
    }
  })

  try {
    const apiUrl = `https://api.vreden.my.id/api/v1/download/youtube/video?url=${url}&quality=${quality}`
    const response = await fetch(apiUrl)
    const json = await response.json()

    if (!json.status || !json.result) {
      return reply('Gagal mengambil data video.')
    }

    const meta = json.result.metadata
    const dl = json.result.download

    const caption = `╭───┈ *YOUTUBE VIDEO* ┈───
│ 🎬 *Judul:* ${meta.title}
│ ⏱️ *Durasi:* ${meta.duration.timestamp}
│ 👁️ *Views:* ${meta.views}
│ 📅 *Upload:* ${meta.ago}
│ 💿 *Kualitas:* ${dl.quality}
╰──────────────────────

_Sedang mengirim video..._`

    await DinzBotz.sendMessage(m.chat, {
      video: {
        url: dl.url
      },
      caption: caption,
      mimetype: 'video/mp4',
      fileName: dl.filename
    }, {
      quoted: m
    })

    DinzBotz.sendMessage(m.chat, {
      react: {
        text: "✅",
        key: m.key
      }
    })

  } catch (error) {
    console.error(error)
    reply('Terjadi kesalahan saat mengunduh.')
  }
}
break
case 'play': {
    if (!text) return reply(`Ketik judul lagu.\nContoh: ${prefix + command} 505`);

    await DinzBotz.sendMessage(m.chat, { react: { text: "🎧", key: m.key } });

    const makeCaption = (title, artist, duration, url, source) => {
        return `╭───┈ *ᴍᴜsɪᴄ ᴘʟᴀʏᴇʀ* ┈───\n` +
               `│ 💿 *Title:* ${title}\n` +
               `│ 🎙️ *Artist:* ${artist}\n` +
               `│ ⏱️ *Duration:* ${duration}\n` +
               `│ 🔗 *Link:* ${url}\n` +
               `│ 📡 *Server:* ${source}\n` +
               `╰─────────────────────`;
    };

    try {
        /* -------------------------------------------
           PRIORITAS 1: NEKOLABS SPOTIFY
           ------------------------------------------- */
        let spotifyUrl = `https://api.nekolabs.web.id/downloader/spotify/play/v1?q=${encodeURIComponent(text)}`;
        let dataSpot = await (await fetch(spotifyUrl)).json();

        if (dataSpot.success && dataSpot.result) {
            let { title, artist, duration, cover, url } = dataSpot.result.metadata;
            let dlUrl = dataSpot.result.downloadUrl;

            await DinzBotz.sendMessage(m.chat, {
                audio: { url: dlUrl },
                mimetype: 'audio/mpeg',
                fileName: `${title}.mp3`,
                contextInfo: {
                    externalAdReply: {
                        title: title,
                        body: artist,
                        thumbnailUrl: cover,
                        sourceUrl: url,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                },
                caption: makeCaption(title, artist, duration, url, "Neko Spotify")
            }, { quoted: m });

        } else {
            throw new Error('Spotify Not Found');
        }

    } catch (errSpot) {
        try {
            /* -------------------------------------------
               PRIORITAS 2: NEKOLABS YOUTUBE (FALLBACK 1)
               ------------------------------------------- */
            let ytNekoUrl = `https://api.nekolabs.web.id/downloader/youtube/play/v1?q=${encodeURIComponent(text)}`;
            let dataYt = await (await fetch(ytNekoUrl)).json();

            if (dataYt.success && dataYt.result) {
                let { title, channel, duration, cover, url } = dataYt.result.metadata;
                let dlUrl = dataYt.result.downloadUrl;

                await DinzBotz.sendMessage(m.chat, {
                    audio: { url: dlUrl },
                    mimetype: 'audio/mpeg',
                    fileName: `${title}.mp3`,
                    contextInfo: {
                        externalAdReply: {
                            title: title,
                            body: channel,
                            thumbnailUrl: cover,
                            sourceUrl: url,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    },
                    caption: makeCaption(title, channel, duration, url, "Neko YouTube")
                }, { quoted: m });

            } else {
                throw new Error('Neko Youtube Not Found');
            }

        } catch (errYt) {
            try {
                /* -------------------------------------------
                   PRIORITAS 3: DINZAPI YOUTUBE (FALLBACK 2)
                   ------------------------------------------- */
                let dinzUrl = `https://dinzapi-sweager.vercel.app/api/downloader/ytaudio?query=${encodeURIComponent(text)}&direct=false`;
                let dataDinz = await (await fetch(dinzUrl)).json();

                if (dataDinz.status && dataDinz.data) {
                    let meta = dataDinz.data.metadata;
                    let audio = dataDinz.data.audio;

                    await DinzBotz.sendMessage(m.chat, {
                        audio: { url: audio.url },
                        mimetype: 'audio/mpeg',
                        fileName: audio.filename,
                        contextInfo: {
                            externalAdReply: {
                                title: meta.title,
                                body: meta.artist,
                                thumbnailUrl: meta.thumbnail,
                                sourceUrl: meta.youtubeUrl,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        },
                        caption: makeCaption(meta.title, meta.artist, meta.duration, meta.youtubeUrl, "DinzApi")
                    }, { quoted: m });

                } else {
                    reply(`❌ Lagu tidak ditemukan di semua server.`);
                }
            } catch (errFinal) {
                console.error(errFinal);
                reply(`❌ Terjadi kesalahan sistem.`);
            }
        }
    }
}
break;
case 'listcase':
case 'listfitur': {
    const fs = require('fs')
    let data = fs.readFileSync(__filename, 'utf8')
    let casePattern = /case\s+['"]([^'"]+)['"]\s*:\s*\{/g
    let matches = data.match(casePattern)
    
    if (!matches) return reply('Tidak ada case ditemukan.')

    let cleanCases = matches.map(m => {
        return m.match(/['"]([^'"]+)['"]/)[1]
    })
    
    let text = `*📜 LIST ALL FEATURES (${cleanCases.length})*\n\n`
    text += cleanCases.sort().map((c, i) => `${i + 1}. ${c}`).join('\n')
    
    reply(text)
}
break
case 'setppgc':
case 'setppgroup':
    case 'setgcpp':
    case 'setgrouppp': {

      if (!m.isGroup) return reply(mess.only.group)
      if (!isAdmins && !DinzTheCreator) return reply('Khusus Admin!!')
      if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
      if (!quoted) return reply(`Where is the picture?`)
      if (!/image/.test(mime)) return reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
      if (/webp/.test(mime)) return reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
      var mediz = await DinzBotz.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
      if (args[0] == `full`) {
        var {
          img
        } = await generateProfilePicture(mediz)
        await DinzBotz.query({
          tag: 'iq',
          attrs: {
            to: m.chat,
            type: 'set',
            xmlns: 'w:profile:picture'
          },
          content: [{
            tag: 'picture',
            attrs: {
              type: 'image'
            },
            content: img
          }]
        })
        fs.unlinkSync(mediz)
        reply(`Success`)
      } else {
        var memeg = await DinzBotz.updateProfilePicture(m.chat, {
          url: mediz
        })
        fs.unlinkSync(mediz)
        reply(`Success`)
      }
    }
    db.users[m.sender].exp += 300;
    break
    case 'deleteppgroup':
    case 'delppgc':
    case 'deleteppgc':
    case 'delppgroup': {

      if (!m.isGroup) return reply(mess.only.group)
      if (!isAdmins && !DinzTheCreator) return reply('Khusus Admin!!')
      if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
      await DinzBotz.removeProfilePicture(from)
    }
    break
    case 'deleteppbot':
    case 'delppbot': {

      if (!DinzTheCreator) return reply(mess.only.owner)
      await DinzBotz.removeProfilePicture(DinzBotz.user.id)
      reply(`Success in deleting bot's profile picture`)
    }
    break
    case '🐚':
    case 'kick': {

      if (!m.isGroup) return reply(mess.only.group)
      if (!isAdmins && !DinzTheCreator) return reply('Khusus Admin!!')
      if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
      let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
      await DinzBotz.groupParticipantsUpdate(m.chat, [users], 'remove')
      await reply(`sukses kak`)
    }
    db.users[m.sender].exp += 300;
    break
    //=========================================\\
    case 'kickall': {

      if (!m.isGroup) return reply(mess.only.group)
      if (!isAdmins && !DinzTheCreator) return reply('Khusus Admin!!')
      if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
      const users = participants.map(a => a.id)
      await DinzBotz.groupParticipantsUpdate(m.chat, [users], 'remove')
      await reply(`sukses kak`)
    }
    db.users[m.sender].exp += 300;
    break
    case 'setbotname': {

      if (!DinzTheCreator) return reply(mess.only.owner)
      if (!text) return reply(`Dimana namanya?\nContoh: ${prefix + command} DinzID BotID`)
      await DinzBotz.updateProfileName(text)
      reply(`Success in changing the name of bot's number`)
    }
    break
    case 'setbotbio': {

      if (!DinzTheCreator) return reply(mess.only.owner)
      if (!text) return reply(`Dimana teksnya?\nContoh: ${prefix + command} DinzID BotID`)
      await DinzBotz.updateProfileStatus(text)
      reply(`Success in changing the bio of bot's number`)
    }
    break
    case 'setnamegc':
    case 'setgroupname':
    case 'setsubject': {

      if (!m.isGroup) return reply(mess.only.group)
      if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
      if (!isAdmins) return reply('Khusus Admin!!')
      if (!text) return reply('Text ?')
      await DinzBotz.groupUpdateSubject(m.chat, text)
      await reply(`sukses kak`)
    }
    break
    case 'setdesc':
    case 'setdesk': {

      if (!m.isGroup) return reply(mess.only.group)
      if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
      if (!isAdmins) return reply('Khusus Admin!!')
      if (!text) return reply('Text ?')
      await DinzBotz.groupUpdateDescription(m.chat, text)
      await reply(`sukses kak`)
    }
    break
case 'setppbot':
    case 'setbotpp': {

      if (!DinzTheCreator) return reply(mess.only.owner)
      if (!quoted) return reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
      if (!/image/.test(mime)) return reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
      if (/webp/.test(mime)) return reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
      var medis = await DinzBotz.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
      if (args[0] == `full`) {
        var {
          img
        } = await generateProfilePicture(medis)
        await DinzBotz.query({
          tag: 'iq',
          attrs: {
            to: botNumber,
            type: 'set',
            xmlns: 'w:profile:picture'
          },
          content: [{
            tag: 'picture',
            attrs: {
              type: 'image'
            },
            content: img
          }]
        })
        fs.unlinkSync(medis)
        reply(`Success`)
      } else {
        var memeg = await DinzBotz.updateProfilePicture(botNumber, {
          url: medis
        })
        fs.unlinkSync(medis)
        reply(`Success`)
      }
    }
    db.users[m.sender].exp += 300;
    break
    case 'creategc':
    case 'creategroup': {

      if (!DinzTheCreator) return reply(mess.only.owner)
      if (!args.join(" ")) return reply(`Use ${prefix+command} groupname`)
      try {
        let cret = await DinzBotz.groupCreate(args.join(" "), [])
        let response = await DinzBotz.groupInviteCode(cret.id)
        teks = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}
       `
        DinzBotz.sendMessage(m.chat, {
          text: teks,
          mentions: await DinzBotz.parseMention(teks)
        }, {
          quoted: m
        })
      } catch {
        reply('yah Error kak laporankan ke owner agar di perbaiki')
      }
    }
    db.users[m.sender].exp += 300;
    break
    case 'setthumbvid':
    case 'setvideothumb': {
      // [1] Import modul dan setup path
      const fs = require('fs');
      const videoThumbPath = './media/hutao.mp4';
      if (!DinzTheCreator) reply('⚠️ Hanya owner yang bisa mengganti thumbnail!')
      if (!quoted) return reply(`Fotonya Mana?`)
      if (!/video/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)

      try {
        // Download gambar
        const media = await DinzBotz.downloadMediaMessage(quoted);

        // [5] Hapus file lama
        if (fs.existsSync(videoThumbPath)) {
          fs.unlinkSync(videoThumbPath);
        }

        // [6] Simpan file baru
        fs.writeFileSync(videoThumbPath, media);

        // [7] Konfirmasi
        await DinzBotz.sendMessage(m.chat, {
          video: {
            url: videoThumbPath
          },
          caption: '✅ Thumbnail video berhasil diubah!'
        }, {
          quoted: m
        });

      } catch (error) {
        console.error('Error:', error);
        reply(m.chat, '❌ Gagal mengubah thumbnail: ' + error.message, m);
      }
      break;
    }

    case 'cekthumbvid': {
      // [1] Langsung kirim dari folder media
      const fs = require('fs');
      const videoThumbPath = './media/hutao.mp4';

      if (!fs.existsSync(videoThumbPath)) {
        return reply(m.chat, '❌ File thumbnail tidak ditemukan', m);
      }

      DinzBotz.sendMessage(m.chat, {
        video: {
          url: videoThumbPath
        },
        caption: '🎬 Thumbnail video saat ini:'
      }, {
        quoted: m
      });
      break;
    }
    // --- FITUR CONVERT (TOIMG, TOVN, TOAUDIO) ---

case 'toimg':
case 'tovideo': {
    if (!m.quoted) return reply('Reply stickernya!')
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    
    if (!/webp/.test(mime)) return reply(`Balas sticker dengan caption ${prefix + command}`)
    
    reply('⏳ Sedang mengkonversi...')
    
    try {
        let media = await DinzBotz.downloadMediaMessage(q)
        let ran = getRandom('.webp')
        let ran2 = getRandom('.png') // Ganti .mp4 kalau mau tovideo (gif sticker)
        
        fs.writeFileSync(ran, media)
        
        // Convert Webp ke Image/Video pake FFmpeg
        exec(`ffmpeg -i ${ran} ${ran2}`, (err) => {
            fs.unlinkSync(ran) // Hapus file mentah
            
            if (err) {
                console.log(err)
                return reply('Gagal konversi (Pastikan FFmpeg terinstall)')
            }
            
            let buffer = fs.readFileSync(ran2)
            DinzBotz.sendMessage(m.chat, { image: buffer, caption: '✅ Done' }, { quoted: m })
            fs.unlinkSync(ran2) // Hapus file hasil
        })
    } catch (e) {
        console.log(e)
        reply('Gagal convert.')
    }
}
break

case 'tovn': {
    if (!m.quoted) return reply('Reply Video/Audionya!')
    let q = m.quoted ? m.quoted : m
    
    // Logic Fix Media Key (Penting biar ga error derive key)
    let mediaNode = m.quoted ? m.quoted : (m.msg || m.m || m.message?.audioMessage || m.message?.videoMessage)
    let mime = (mediaNode.msg || mediaNode).mimetype || ''

    if (!/video|audio/.test(mime)) return reply(`Balas video/audio dengan caption ${prefix + command}`)
    
    reply('⏳ Sedang memproses VN...')

    try {
        let media = await DinzBotz.downloadMediaMessage(mediaNode)
        let ran = getRandom('.mp4') // Input bisa mp4/audio
        let ran2 = getRandom('.mp3') // Output VN (PTT)
        
        fs.writeFileSync(ran, media)
        
        // Convert ke format PTT (Opus/Mp3)
        exec(`ffmpeg -i ${ran} -vn -c:a libmp3lame -b:a 128k ${ran2}`, (err) => {
            fs.unlinkSync(ran)
            
            if (err) {
                console.log(err)
                return reply('Gagal konversi (Pastikan FFmpeg terinstall)')
            }
            
            let buffer = fs.readFileSync(ran2)
            // ptt: true agar dikirim sebagai Voice Note
            DinzBotz.sendMessage(m.chat, { audio: buffer, ptt: true, mimetype: 'audio/mpeg' }, { quoted: m })
            fs.unlinkSync(ran2)
        })
    } catch (e) {
        console.log(e)
        reply('Error saat membuat VN.')
    }
}
break

case 'toaudio':
case 'tomp3': {
    if (!m.quoted) return reply('Reply Videonya!')
    let q = m.quoted ? m.quoted : m
    
    // Logic Fix Media Key
    let mediaNode = m.quoted ? m.quoted : (m.msg || m.m || m.message?.videoMessage)
    let mime = (mediaNode.msg || mediaNode).mimetype || ''

    if (!/video|audio/.test(mime)) return reply(`Balas video/audio dengan caption ${prefix + command}`)
    
    reply('⏳ Sedang mengambil audio...')

    try {
        let media = await DinzBotz.downloadMediaMessage(mediaNode)
        let ran = getRandom('.mp4')
        let ran2 = getRandom('.mp3')
        
        fs.writeFileSync(ran, media)
        
        // Convert Video ke Audio (MP3)
        exec(`ffmpeg -i ${ran} -vn -ab 128k -ar 44100 -f mp3 ${ran2}`, (err) => {
            fs.unlinkSync(ran)
            
            if (err) {
                console.log(err)
                return reply('Gagal konversi.')
            }
            
            let buffer = fs.readFileSync(ran2)
            // ptt: false agar dikirim sebagai Audio/Musik biasa
            DinzBotz.sendMessage(m.chat, { audio: buffer, ptt: false, mimetype: 'audio/mpeg' }, { quoted: m })
            fs.unlinkSync(ran2)
        })
    } catch (e) {
        console.log(e)
        reply('Error saat convert ke audio.')
    }
}
break
case 'upset':
case 'setvar':
case 'updatesetting': {
    if (!isOwner) return reply('Khusus Owner')

    const settingPath = './connection/setting.js'
    
    try {
        let data = fs.readFileSync(settingPath, 'utf8')

        if (!text) {
            let regex = /global\.(\w+)\s*=\s*(.*)/g
            let list = []
            let match
            
            while ((match = regex.exec(data)) !== null) {
                let cleanVal = match[2].trim()
                if (cleanVal.endsWith(',')) cleanVal = cleanVal.slice(0, -1)
                list.push(`• *${match[1]}* : ${cleanVal}`)
            }
            
            if (list.length === 0) return reply('Tidak ada variable global ditemukan di file setting.')
            
            return reply(`*LIST CONFIGURATION*\nLokasi: ${settingPath}\n\n${list.join('\n')}\n\nCara ubah: ${prefix + command} botname NamaBaru`)
        }

        let [key, ...value] = text.split(' ')
        let val = value.join(' ')
        
        if (!key || !val) return reply(`Format salah. Gunakan ${prefix+command} tanpa teks untuk melihat list variable.`)

        let regex = new RegExp(`(global\\.${key}\\s*=\\s*)(["'\`])(.*?)(["'\`])`, 'g')
        
        if (regex.test(data)) {
            let updatedData = data.replace(regex, `$1$2${val}$4`)
            fs.writeFileSync(settingPath, updatedData, 'utf8')
            
            global[key] = val
            
            reply(`Sukses mengganti global.${key} menjadi ${val}`)
            
        } else {
            let insertIndex = data.indexOf('module.exports')
            if (insertIndex === -1) insertIndex = data.length
            
            let newData = data.slice(0, insertIndex) + `global.${key} = "${val}"\n` + data.slice(insertIndex)
            
            fs.writeFileSync(settingPath, newData, 'utf8')
            
            global[key] = val
            
            reply(`Sukses menambahkan variable baru global.${key}`)
        }

    } catch (e) {
        console.log(e)
        reply('Gagal membaca atau mengedit file setting.js')
    }
}
break

    case 'smeme':
case 'stickmeme':
case 'smm': {
    if (!text && !m.quoted) return reply(`Kirim/Reply Gambar dengan caption:\n${prefix + command} Atas|Bawah`)

    
    let q = m.quoted ? m.quoted : m
    let mediaNode = m.quoted ? m.quoted : (m.msg || m.m || m.message?.imageMessage || m.message?.videoMessage)
    
    let mime = (mediaNode.msg || mediaNode).mimetype || ''

    if (!/image/.test(mime)) return reply(`Format salah! Kirim/Reply gambar lalu ketik ${prefix + command} Atas|Bawah`)

    DinzBotz.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })

    try {
        let media = await DinzBotz.downloadMediaMessage(mediaNode)
        
        const { ext } = await require('file-type').fromBuffer(media)
        let form = new (require('form-data'))
        form.append('file', media, 'upload.' + ext)

        let res = await axios.post('https://dinzapi-sweager.vercel.app/api/cdn/dinzid', form, {
            headers: { ...form.getHeaders() }
        })

        if (!res.data.status) return reply('Gagal upload ke DinzID CDN.')
        
        let urlGambar = res.data.data.url

        let [atas, bawah] = text.split('|')
        if (!bawah) { bawah = atas; atas = '_'; }
        if (!atas) atas = '_';
        if (!bawah) bawah = '_';

        let memeUrl = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${encodeURIComponent(urlGambar)}`

        await DinzBotz.sendImageAsSticker(m.chat, memeUrl, m, { 
            packname: global.packname || 'DinzBotz', 
            author: global.author || 'DinzAPI' 
        })

        DinzBotz.sendMessage(m.chat, { react: { text: '✅', key: m.key } })

    } catch (e) {
        console.log(e)
        reply('Gagal membuat sticker meme. (Media Key Error)')
        DinzBotz.sendMessage(m.chat, { react: { text: '❌', key: m.key } })
    }
}
break


    case 'setthumb':
case 'gantithumb': {
    if (!DinzTheCreator) return reply('⚠️ Hanya owner yang bisa mengganti thumbnail!')

    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || (q.m || q).mimetype || ''
    
    if (!/image/.test(mime)) return reply(`📌 Kirim/Reply gambar dengan caption *${prefix + command}*`)

    try {
        await DinzBotz.sendMessage(m.chat, { react: { text: "⏳", key: m.key } })
        
        let media = await q.download()
        if (!media) throw new Error('Media tidak valid')

        const FormData = require('form-data')
        const axios = require('axios')
        
        let form = new FormData()
        form.append('source', media, { filename: 'thumb.jpg', contentType: 'image/jpeg' })

        let { data } = await axios.post('https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5', form, {
            headers: { ...form.getHeaders() }
        })

        if (!data.image || !data.image.url) throw new Error('Upload gagal')
        
        global.thumbnail = data.image.url
        
        await DinzBotz.sendMessage(m.chat, { 
            image: { url: global.thumbnail }, 
            caption: `✅ Thumbnail berhasil diubah!\n🔗 ${global.thumbnail}`,
            mentions: [m.sender]
        }, { quoted: m })

    } catch (error) {
        console.error(error)
        reply('❌ Gagal mengubah thumbnail')
    }
}
break
    case 'cekthumb': {
      DinzBotz.sendMessage(m.chat, {
        image: {
          url: global.thumbnail
        },
        caption: '🖼️ Thumbnail saat ini:'
      }, {
        quoted: m
      });
      break;
    }

    // Fitur reset thumbnail
    case 'resetthumb': {
      if (!DinzTheCreator) reply('⚠️ Hanya owner yang bisa reset thumbnail!')
      global.thumbnail = 'https://files.catbox.moe/t86463.jpg';
      DinzBotz.sendMessage(m.chat, {
        text: '✅ Thumbnail direset ke default'
      }, {
        quoted: m
      });
      break;
    }
    case 'addowner': {
    if (!isOwner) return reply('Khusus Owner!')

    let rawTarget
    if (m.mentionedJid && m.mentionedJid[0]) {
        rawTarget = m.mentionedJid[0]
    } else if (m.quoted) {
        rawTarget = m.quoted.sender
    } else if (text) {
        if (text.endsWith('@lid')) {
            rawTarget = text
        } else if (text.endsWith('@s.whatsapp.net')) {
            rawTarget = text
        } else {
            let clean = text.replace(/[^0-9]/g, '')
            if (!clean) return reply(`Masukan nomor valid!\nContoh: ${prefix + command} 628xxx`)
            rawTarget = clean + '@s.whatsapp.net'
        }
    } else {
        return reply(`❌ *FORMAT SALAH*\n\n1. Tag/Reply user\n2. Ketik Nomor: ${prefix + command} 628xxx\n3. Ketik LID: ${prefix + command} 123@lid`)
    }

    let cleanJid = rawTarget.replace(/[^0-9]/g, '')

    if (global.ownerNumber.includes(cleanJid)) {
        return reply('User tersebut SUDAH menjadi Owner.')
    }

    ownerDb.push(cleanJid)
    fs.writeFileSync('./database/owner.json', JSON.stringify(ownerDb, null, 2))

    global.ownerNumber.push(cleanJid)

    reply(`✅ *SUKSES ADD OWNER*\n\n👤 ID: ${rawTarget}\n📂 Status: Access Granted`)
}
break
case 'delowner': {
    if (!isOwner) return reply('Khusus Owner!')

    let rawTarget
    if (m.mentionedJid && m.mentionedJid[0]) {
        rawTarget = m.mentionedJid[0]
    } else if (m.quoted) {
        rawTarget = m.quoted.sender
    } else if (text) {
        let clean = text.replace(/[^0-9]/g, '')
        rawTarget = clean + '@s.whatsapp.net'
    } else {
        return reply('Tag/Reply/Ketik nomor yang mau dihapus!')
    }

    let cleanJid = rawTarget.replace(/[^0-9]/g, '')

    let index = ownerDb.indexOf(cleanJid)
    if (index === -1) return reply('User tersebut BUKAN Owner di database tambahan.')

    ownerDb.splice(index, 1)
    fs.writeFileSync('./database/owner.json', JSON.stringify(ownerDb, null, 2))

    let globalIndex = global.ownerNumber.indexOf(cleanJid)
    if (globalIndex !== -1) {
        global.ownerNumber.splice(globalIndex, 1)
    }

    reply(`🗑️ *SUKSES DELETE OWNER*\n\n👤 ID: ${rawTarget}\n📂 Status: Access Revoked`)
}
break
case 'listowner': {
    let combinedOwners = [...new Set([...global.ownerNumber, ...ownerDb])]
    if (combinedOwners.length < 1) return reply('Tidak ada owner terdaftar.')

    let txt = `*👑 LIST OWNER BOT*\nTotal: ${combinedOwners.length} User\n\n`
    combinedOwners.forEach((u, i) => {
        txt += `${i + 1}. @${u}\n`
    })

    DinzBotz.sendMessage(m.chat, { 
        text: txt, 
        mentions: combinedOwners.map(u => u + '@s.whatsapp.net') 
    }, { quoted: m })
}
break
case 'addprem':
case 'addpremium': {
    if (!isOwner) return reply('Khusus Owner!')

    let rawTarget
    if (m.mentionedJid && m.mentionedJid[0]) {
        rawTarget = m.mentionedJid[0]
    } else if (m.quoted) {
        rawTarget = m.quoted.sender
    } else if (text) {
        if (text.endsWith('@lid')) {
            rawTarget = text
        } else if (text.endsWith('@s.whatsapp.net')) {
            rawTarget = text
        } else {
            let clean = text.replace(/[^0-9]/g, '')
            if (!clean) return reply(`Masukan nomor valid!\nContoh: ${prefix + command} 628xxx`)
            rawTarget = clean + '@s.whatsapp.net'
        }
    } else {
        // PESAN INSTRUKSI LENGKAP DENGAN CONTOH LID
        return reply(`❌ *FORMAT SALAH*\n\nSilahkan pilih metode input:\n\n1. *Tag/Reply User*\n   (Langsung ketik perintah sambil tag/reply)\n\n2. *Via Nomor HP*\n   ${prefix + command} 628123456789\n\n3. *Via LID Manual* (Khusus Linked Device)\n   ${prefix + command} 12333444555@lid\n\n⚠️ _Pastikan akhiran @lid diketik jika menggunakan ID Linked Device._`)
    }

    let finalJid = '-'
    let finalLid = '-'

    if (rawTarget.endsWith('@lid')) {
        finalLid = rawTarget
        if (global.store) {
            const contacts = global.store.contacts
            for (let id in contacts) {
                if (contacts[id].lid === finalLid) {
                    finalJid = id
                    break
                }
            }
        }
    } else if (rawTarget.endsWith('@s.whatsapp.net')) {
        finalJid = rawTarget
        if (global.store && global.store.contacts[finalJid]) {
            finalLid = global.store.contacts[finalJid].lid || '-'
        }
    }

    if (finalJid === '-') finalJid = rawTarget

    if (premium.some(u => u.id === finalJid || (finalLid !== '-' && u.lid === finalLid))) {
        return reply('User tersebut SUDAH Premium.')
    }

    premium.push({
        id: finalJid,
        lid: finalLid,
        date: new Date().toLocaleDateString()
    })

    fs.writeFileSync('./database/premium.json', JSON.stringify(premium, null, 2))

    reply(`✅ *SUKSES ADD PREMIUM*\n\n👤 ID: ${finalJid}\n🆔 LID: ${finalLid}\n📅 Date: ${new Date().toLocaleDateString()}`)

    let notifText = `*🎉 CONGRATULATIONS! 🎉*\n\nSelamat! Akun kamu telah berhasil di-upgrade menjadi *Premium User* oleh Owner.\n\nSekarang kamu bisa mengakses fitur-fitur eksklusif dan limit tanpa batas.\n\n📅 Tanggal Aktif: ${new Date().toLocaleDateString()}\nTerima kasih telah menggunakan bot ini!`

    await DinzBotz.sendMessage(finalJid, {
        text: notifText,
        contextInfo: {
            externalAdReply: {
                title: "PREMIUM ACTIVATED",
                body: "DinzBotz Premium Access",
                thumbnailUrl: "https://cdn.dinzid.biz.id/yzz9.jpg",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }).catch(() => {})
}
break
case 'delprem':
case 'delpremium': {
    if (!isOwner) return reply('Khusus Owner!')

    let rawTarget
    if (m.mentionedJid && m.mentionedJid[0]) rawTarget = m.mentionedJid[0]
    else if (m.quoted) rawTarget = m.quoted.sender
    else if (text) rawTarget = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    else return reply(`Tag/Reply/Ketik Nomor yang mau dihapus!`)
    let index = premium.findIndex(u => u.id === rawTarget || u.lid === rawTarget)
    
    if (index === -1) return reply('User tersebut TIDAK ADA di database Premium.')

    let deletedUser = premium[index]
    premium.splice(index, 1)
    fs.writeFileSync('./database/premium.json', JSON.stringify(premium, null, 2))
    
    reply(`🗑️ Sukses menghapus Premium:\nID: ${deletedUser.id}\nLID: ${deletedUser.lid}`)
}
break

case 'listprem':
case 'listpremium': {
    if (premium.length < 1) return reply('Belum ada user premium.')
    
    let txt = `*LIST USER PREMIUM*\nTotal: ${premium.length} User\n\n`
    premium.forEach((u, i) => {
        txt += `${i + 1}. @${u.id.split('@')[0]}\n`
    })
    
    // Kirim dengan mention agar nama kontaknya muncul (bukan cuma nomor)
    DinzBotz.sendMessage(m.chat, { 
        text: txt, 
        mentions: premium.map(u => u.id).filter(v => v.endsWith('@s.whatsapp.net')) 
    }, { quoted: m })
}
break
case 'onlypc': {
    if (!isOwner) return reply('Khusus Owner!')
    db.settings[botNumber].onlypc = !db.settings[botNumber].onlypc
    if (db.settings[botNumber].onlypc) {
        db.settings[botNumber].public = true
        db.settings[botNumber].onlygrub = false
    }
    fs.writeFileSync('./database/database.json', JSON.stringify(db, null, 2))
    reply(`Berhasil mengubah status Only PC ke: ${db.settings[botNumber].onlypc ? 'ON' : 'OFF'}`)
}
break
case 'autoread': {
    if (!isOwner) return reply('Khusus Owner!')
    db.settings[botNumber].autoread = !db.settings[botNumber].autoread
    fs.writeFileSync('./database/database.json', JSON.stringify(db, null, 2))
    reply(`Berhasil mengubah status Auto Read ke: ${db.settings[botNumber].autoread ? 'ON' : 'OFF'}`)
}
break
case 'onlygc':
case 'onlygroup': {
    if (!isOwner) return reply('Khusus Owner!')
    db.settings[botNumber].onlygrub = !db.settings[botNumber].onlygrub
    if (db.settings[botNumber].onlygrub) {
        db.settings[botNumber].public = true
        db.settings[botNumber].onlypc = false
    }
    fs.writeFileSync('./database/database.json', JSON.stringify(db, null, 2))
    reply(`Berhasil mengubah status Only Group ke: ${db.settings[botNumber].onlygrub ? 'ON' : 'OFF'}`)
}
break
case 'onlyadmin': {
    if (!isOwner) return reply('Khusus Owner!')
    db.settings[botNumber].onlyadmin = !db.settings[botNumber].onlyadmin
    if (db.settings[botNumber].onlyadmin) {
        db.settings[botNumber].public = true      // Otomatis Nyalain Public
        db.settings[botNumber].onlypc = false     // Otomatis Matiin OnlyPC
        db.settings[botNumber].onlygrub = true    // Otomatis Nyalain OnlyGroup (karena admin cuma ada di grup)
    }
    fs.writeFileSync('./database/database.json', JSON.stringify(db, null, 2))
    reply(`Berhasil mengubah status Only Admin ke: ${db.settings[botNumber].onlyadmin ? 'ON' : 'OFF'}`)
}
break
case 'self': {
    if (!isOwner) return reply('Khusus Owner!')
    db.settings[botNumber].public = false
    db.settings[botNumber].onlypc = false    // Reset biar bersih
    db.settings[botNumber].onlygrub = false  // Reset biar bersih
    db.settings[botNumber].onlyadmin = false // Reset biar bersih
    fs.writeFileSync('./database/database.json', JSON.stringify(db, null, 2))
    reply('Mode SELF aktif. Hanya owner yang bisa menggunakan bot.')
}
break
case 'public': {
    if (!isOwner) return reply('Khusus Owner!')
    db.settings[botNumber].public = true
    db.settings[botNumber].onlypc = false    // Reset pembatasan
    db.settings[botNumber].onlygrub = false  // Reset pembatasan
    fs.writeFileSync('./database/database.json', JSON.stringify(db, null, 2))
    reply('Mode PUBLIC aktif. Semua user bisa menggunakan bot.')
}
break
case 'clearchat': 
case 'clearall': {

      if (!DinzTheCreator) return reply(mess.only.owner)
      DinzBotz.chatModify({
        delete: true,
        lastMessages: [{
          key: m.key,
          messageTimestamp: m.messageTimestamp
        }]
      }, m.chat)
    }
    db.users[m.sender].exp += 300;
    break
    case 'pinchat': {

      if (!DinzTheCreator) return reply(mess.only.owner)
      if (m.isGroup) return reply(mess.only.private)
      DinzBotz.chatModify({
        pin: true
      }, m.chat)
    }
    db.users[m.sender].exp += 300;
    break
    case 'join': {

      if (!DinzTheCreator) return reply(mess.only.owner)
      if (!text) return reply(`Contoh ${prefix+command} linkgc`)
      if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
      let result = args[0].split('https://chat.whatsapp.com/')[1]
      await DinzBotz.groupAcceptInvite(result)
      await reply(`sukses kak`)
    }
    db.users[m.sender].exp += 300;
    break
    case 'unpinchat': {

      if (!DinzTheCreator) return reply(mess.only.owner)
      if (m.isGroup) return reply(mess.only.private)
      DinzBotz.chatModify({
        pin: false
      }, m.chat)
    }
    db.users[m.sender].exp += 300;
    break
    case 'restart':
      if (!DinzTheCreator) return reply(mess.only.owner)
      reply(`restarting ${global.botname}`)
      reply(`Done ✅`)
      await sleep(3000)
      process.exit()
      break
case 'leavegc':
case 'leave': {
    if (!isOwner) return reply('Khusus Owner!')
    if (!m.isGroup) return reply('Khusus dalam grup!')
    reply('Sayonara... 👋').then(() => {
        DinzBotz.groupLeave(m.chat)
    })
}
break
case 'totaladmin': {
    if (!m.isGroup) return reply('Fitur ini khusus untuk grup!')
    reply(`📊 *INFO ADMIN GROUP*\n\n👥 Total Admin: *${groupAdmins.length}* orang`)
}
break
case 'tagadmin':
case 'listadmin': {
    if (!m.isGroup) return reply('Fitur ini khusus untuk grup!')
    let teks = `👮 *TAG ADMIN GROUP*\n\n`
    for (let mem of groupAdmins) {
        teks += `➢ @${mem.split('@')[0]}\n`
    }
    DinzBotz.sendMessage(m.chat, { text: teks, mentions: groupAdmins }, { quoted: m })
}
break
case 'tagall':
case 'infoall': {
    if (!m.isGroup) return reply('Fitur ini khusus untuk grup!')
    if (!isAdmins && !isOwner) return reply('Fitur ini khusus Admin Grup!')
    
    let teks = `📣 *EVERYBODY TAG*\n\n`
    teks += `💬 *Pesan:* ${text ? text : 'Tidak ada pesan'}\n\n`
    
    let mems = []
    for (let mem of groupMembers) {
        teks += `➢ @${mem.id.split('@')[0]}\n`
        mems.push(mem.id)
    }
    
    DinzBotz.sendMessage(m.chat, { text: teks, mentions: mems }, { quoted: m })
}
break
case 'sider': {
    if (!m.isGroup) return reply('Fitur ini khusus untuk grup!')
    if (!isAdmins && !isOwner) return reply('Fitur ini khusus Admin Grup!')

    let members = groupMembers.map(u => u.id)
    let total = members.length
    
    let text = `┌ 🕵️ *SIDER DETECTION SYSTEM*\n`
    text += `│ 🏢 Group: ${DinzBotz.groupName}\n`
    text += `│ 👥 Total Member: ${total}\n`
    text += `│ 🕒 Time: ${new Date().toLocaleTimeString()}\n`
    text += `└───────────────────────\n\n`
    text += `⚠️ *PERHATIAN* ⚠️\n`
    text += `_Sistem mendeteksi banyak member yang hanya membaca (Silent Reader). Harap segera muncul untuk absensi!_\n\n`
    text += `*LIST TARGET SIDER:*\n`

    for (let i = 0; i < members.length; i++) {
        text += `│ ${i + 1}. @${members[i].split('@')[0]}\n`
    }
    text += `└───────────────────────\n`
    text += `_Jangan cuma nyimak, ayo ramaikan grup!_`

    DinzBotz.sendMessage(m.chat, { 
        text: text, 
        contextInfo: {
            mentionedJid: members,
            externalAdReply: {
                title: "🛑 GHOST READER DETECTED",
                body: "Scanning Inactive Members...",
                thumbnailUrl: "https://cdn.dinzid.biz.id/yzz9.jpg",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
}
break
case 'mute': {
    if (!m.isGroup) return reply('Khusus Grup!')
    if (!isAdmins && !isOwner) return reply('Khusus Admin!')

    if (!db.chats[m.chat]) db.chats[m.chat] = {}

    db.chats[m.chat].mute = !db.chats[m.chat].mute
    
    fs.writeFileSync('./database/database.json', JSON.stringify(db, null, 2))

    reply(`🔇 *MODE MUTE GROUP*\n\nStatus: ${db.chats[m.chat].mute ? 'AKTIF' : 'NONAKTIF'}\n\n${db.chats[m.chat].mute ? 'Sekarang hanya Admin yang bisa menggunakan bot di grup ini.' : 'Sekarang semua member bisa menggunakan bot kembali.'}`)
}
break
case 'antilink': {
    if (!m.isGroup) return reply('Khusus Group!')
    if (!isBotAdmins) return reply('Bot harus jadi Admin dulu!')
    if (!isAdmins && !isOwner) return reply('Khusus Admin!')

    if (!antilinkk[m.chat]) {
        antilinkk[m.chat] = {
            wa: false, tt: false, ig: false, fb: false, all: false, kick: false,
            custom: [], warnings: {}
        }
    }

    let args = text.split(' ')
    let type = args[0] ? args[0].toLowerCase() : ''
    let data = antilinkk[m.chat]

    if (type === 'wa' || type === 'wame') {
        data.wa = !data.wa
        saveantilinkk()
        reply(`Antilink WhatsApp: ${data.wa ? '✅ ON' : '❌ OFF'}`)
    } else if (type === 'tt' || type === 'tiktok') {
        data.tt = !data.tt
        saveantilinkk()
        reply(`Antilink TikTok: ${data.tt ? '✅ ON' : '❌ OFF'}`)
    } else if (type === 'ig' || type === 'instagram') {
        data.ig = !data.ig
        saveantilinkk()
        reply(`Antilink Instagram: ${data.ig ? '✅ ON' : '❌ OFF'}`)
    } else if (type === 'fb' || type === 'facebook') {
        data.fb = !data.fb
        saveantilinkk()
        reply(`Antilink Facebook: ${data.fb ? '✅ ON' : '❌ OFF'}`)
    } else if (type === 'all') {
        data.all = !data.all
        saveantilinkk()
        reply(`Antilink SEMUA LINK: ${data.all ? '✅ ON' : '❌ OFF'}`)
    } else if (type === 'kick') {
        data.kick = !data.kick
        saveantilinkk()
        reply(`Mode Auto Kick (3x Warn): ${data.kick ? '✅ ON' : '❌ OFF'}`)
    } else if (type === 'add') {
        if (!args[1]) return reply(`Contoh: ${prefix}antilink add videy.co`)
        if (data.custom.includes(args[1])) return reply('Link sudah ada.')
        data.custom.push(args[1])
        saveantilinkk()
        reply(`✅ Sukses menambah filter link: ${args[1]}`)
    } else if (type === 'del') {
        if (!args[1]) return reply(`Contoh: ${prefix}antilink del videy.co`)
        let index = data.custom.indexOf(args[1])
        if (index === -1) return reply('Link tidak ditemukan.')
        data.custom.splice(index, 1)
        saveantilinkk()
        reply(`🗑️ Sukses menghapus filter link: ${args[1]}`)
    } else {
        let status = (k) => data[k] ? '✅ ON' : '❌ OFF'
        reply(`🛡️ *ANTILINK CONFIGURATION*\n\n` +
        `• WhatsApp: ${status('wa')}\n` +
        `• TikTok: ${status('tt')}\n` +
        `• Instagram: ${status('ig')}\n` +
        `• Facebook: ${status('fb')}\n` +
        `• All Link: ${status('all')}\n` +
        `• Auto Kick: ${status('kick')}\n\n` +
        `_Cara pakai:_\n${prefix}antilink <tipe>\n${prefix}antilink kick\n${prefix}antilink add <kata>`)
    }
}
break
case 'linkgc':
case 'linkgroup': {
    if (!m.isGroup) return reply('Khusus Group!')
    if (!isBotAdmins) return reply('Bot harus menjadi Admin dulu!')
    
    let link = await DinzBotz.groupInviteCode(m.chat)
    reply(`🔒 *LINK GROUP*\n\nhttps://chat.whatsapp.com/${link}`)
}
break

case 'invite':
case 'add': {
    if (!m.isGroup) return reply('Khusus Group!')
    if (!isAdmins && !isOwner) return reply('Khusus Admin!')
    if (!isBotAdmins) return reply('Bot harus menjadi Admin dulu!')
    if (!text && !m.quoted) return reply(`Masukan nomor yang ingin di add!\nContoh: ${prefix + command} 628xxx`)

    let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    
    try {
        let res = await DinzBotz.groupParticipantsUpdate(m.chat, [users], 'add')
        
        if (res[0].status == '403') {
            let link = await DinzBotz.groupInviteCode(m.chat)
            let teksInvite = `Hai! Admin grup *${groupMetadata.subject}* mencoba menambahkanmu, tapi gagal karena settingan privasi akunmu.\n\nSilakan bergabung melalui link berikut:\nhttps://chat.whatsapp.com/${link}`
            
            await DinzBotz.sendMessage(users, { text: teksInvite })
            reply(`⚠️ *GAGAL MENAMBAHKAN USER*\n\nUser membatasi siapa yang bisa menambahkannya ke grup (Privasi Kontak).\n\n✅ *SOLUSI:* Bot sudah mengirimkan Link Grup ke Private Chat user tersebut.`)
        } else {
            reply(`✅ Berhasil menambahkan user!`)
        }
    } catch (e) {
        reply('❌ Gagal menambahkan user. Pastikan nomor benar dan terdaftar di WhatsApp.')
    }
}
break
case 'delete':
case 'del': {
    if (!m.isGroup) return reply('Khusus Group!')
    if (!isAdmins && !isOwner) return reply('Khusus Admin!')
    if (!m.quoted) return reply('Reply pesan yang ingin dihapus!')

    await DinzBotz.sendMessage(m.chat, { 
        delete: { 
            remoteJid: m.chat, 
            fromMe: false, 
            id: m.quoted.id, 
            participant: m.quoted.sender 
        } 
    })
}
break
case 'promote': {
    if (!m.isGroup) return reply('Khusus Group!')
    if (!isAdmins && !isOwner) return reply('Khusus Admin!')
    if (!isBotAdmins) return reply('Bot harus menjadi Admin dulu!')

    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    if (!users) return reply('Tag atau Reply member yang ingin dijadikan admin!')

    await DinzBotz.groupParticipantsUpdate(m.chat, [users], 'promote')
    reply(`✅ Sukses Promote @${users.split('@')[0]} menjadi Admin.`)
}
break
case 'demote': {
    if (!m.isGroup) return reply('Khusus Group!')
    if (!isAdmins && !isOwner) return reply('Khusus Admin!')
    if (!isBotAdmins) return reply('Bot harus menjadi Admin dulu!')

    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    if (!users) return reply('Tag atau Reply admin yang ingin diturunkan!')

    await DinzBotz.groupParticipantsUpdate(m.chat, [users], 'demote')
    reply(`⬇️ Sukses Demote @${users.split('@')[0]} menjadi Member biasa.`)
}
break
case 'tagall': {
    if (!m.isGroup) return reply('Khusus Group!')
    if (!isAdmins && !isOwner) return reply('Khusus Admin!')

    let teks = `📣 *EVERYBODY TAG*\n\n`
    teks += `💬 Pesan: ${text ? text : 'Absen Woi!'}\n\n`
    
    let mems = []
    for (let i of groupMembers) {
        teks += `➢ @${i.id.split('@')[0]}\n`
        mems.push(i.id)
    }
    
    DinzBotz.sendMessage(m.chat, { text: teks, mentions: mems }, { quoted: m })
}
break
case 'opentime':
case 'buka': {
    if (!m.isGroup) return reply('Khusus Group!')
    if (!isAdmins && !isOwner) return reply('Khusus Admin!')
    if (!isBotAdmins) return reply('Bot harus menjadi Admin dulu!')

    await DinzBotz.groupSettingUpdate(m.chat, 'not_announcement')
    reply('✅ *GROUP OPENED*\n\nSekarang semua peserta dapat mengirim pesan.')
}
break
case 'closetime':
case 'tutup': {
    if (!m.isGroup) return reply('Khusus Group!')
    if (!isAdmins && !isOwner) return reply('Khusus Admin!')
    if (!isBotAdmins) return reply('Bot harus menjadi Admin dulu!')

    await DinzBotz.groupSettingUpdate(m.chat, 'announcement')
    reply('⛔ *GROUP CLOSED*\n\nSekarang hanya Admin yang dapat mengirim pesan.')
}
break

case 'resetlink':
case 'revoke': {
    if (!m.isGroup) return reply('Khusus Group!')
    if (!isAdmins && !isOwner) return reply('Khusus Admin!')
    if (!isBotAdmins) return reply('Bot harus menjadi Admin dulu!')

    await DinzBotz.groupRevokeInvite(m.chat)
    reply('✅ Link grup berhasil direset! Link lama tidak akan berlaku lagi.')
}
break
case 'anonymous':
case 'start': {
    if (m.isGroup) return reply('Fitur ini tidak dapat digunakan di dalam grup!')
    
    if (Object.values(global.anonymous).find(room => room.check(m.sender))) {
        return reply('Kamu masih berada dalam sesi obrolan.')
    }

    let room = Object.values(global.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))

    if (room) {
        room.b = m.sender
        room.state = 'CHATTING'
        
        let teksMatch = 'Partner ditemukan! Silahkan kirim pesan sekarang.'
        await DinzBotz.sendMessage(room.a, { text: teksMatch })
        await DinzBotz.sendMessage(room.b, { text: teksMatch })
    } else {
        let id = + new Date
        global.anonymous[id] = {
            id: id,
            a: m.sender,
            b: '',
            state: 'WAITING',
            check: function (who) {
                return [this.a, this.b].includes(who)
            }
        }
        reply('Sedang mencari partner...')
    }
}
break
case 'stop': {
    if (m.isGroup) return reply('Fitur ini tidak dapat digunakan di dalam grup!')
    
    let room = Object.values(global.anonymous).find(room => room.check(m.sender))
    if (!room) return reply('Kamu belum memulai obrolan.')

    let other = room.a === m.sender ? room.b : room.a
    if (other) await DinzBotz.sendMessage(other, { text: 'Partner telah menghentikan obrolan.' })
    
    reply('Kamu telah menghentikan obrolan.')
    delete global.anonymous[room.id]
}
break
case 'next':
case 'skip': {
    if (m.isGroup) return reply('Fitur ini tidak dapat digunakan di dalam grup!')
    
    let room = Object.values(global.anonymous).find(room => room.check(m.sender))
    if (room) {
        let other = room.a === m.sender ? room.b : room.a
        if (other) await DinzBotz.sendMessage(other, { text: 'Partner telah meninggalkan obrolan.' })
        delete global.anonymous[room.id]
    }

    let nextRoom = Object.values(global.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))

    if (nextRoom) {
        nextRoom.b = m.sender
        nextRoom.state = 'CHATTING'
        
        let teksMatch = 'Partner ditemukan! Silahkan kirim pesan sekarang.'
        await DinzBotz.sendMessage(nextRoom.a, { text: teksMatch })
        await DinzBotz.sendMessage(nextRoom.b, { text: teksMatch })
    } else {
        let id = + new Date
        global.anonymous[id] = {
            id: id,
            a: m.sender,
            b: '',
            state: 'WAITING',
            check: function (who) {
                return [this.a, this.b].includes(who)
            }
        }
        reply('Sedang mencari partner baru...')
    }
}
break
case 'menfess':
case 'confess':
case 'mf': {
    if (!args[0]) return reply(`⚠️ Format Salah!\n\nContoh:\n${prefix}confess 628xxxx|Halo kak`)
    
    let [number, pesan] = args.join(' ').split('|')
    if (!number || !pesan) return reply(`⚠️ Pisahkan Nomor dan Pesan dengan tanda '|'`)

    number = number.replace(/[^0-9]/g, '')
    if (number.startsWith('0')) number = '62' + number.slice(1)
    let targetJid = number + '@s.whatsapp.net'

    let check = await DinzBotz.onWhatsApp(targetJid)
    if (!check[0]) return reply('❌ Nomor tidak terdaftar di WA!')
    if (targetJid === m.sender) return reply('🗿 Jangan confess ke diri sendiri.')

    let idUnik = 'MF-' + makeId(4)

    reply('🚀 Mengirim pesan...')

    let txtConfess = `💌 *MENFESS RECEIVED*\n\n`
    txtConfess += `Ada pesan rahasia untukmu!\n`
    txtConfess += `--------------------------\n`
    txtConfess += `📝 *Pesan:*\n"${pesan}"\n`
    txtConfess += `--------------------------\n`
    txtConfess += `🔑 *ID PESAN:* ${idUnik}\n`
    txtConfess += `--------------------------\n`
    txtConfess += `⚠️ *CARA BALAS:*\n`
    txtConfess += `Ketik: *${prefix}balasmenfess ${idUnik} Pesanmu*\n\n`
    txtConfess += `Contoh:\n${prefix}balasmenfess ${idUnik} Siapa ni?`

    try {
        await DinzBotz.sendMessage(targetJid, {
            text: txtConfess,
            contextInfo: {
                externalAdReply: {
                    title: "❓ SECRET MESSAGE",
                    body: "ID: " + idUnik,
                    thumbnailUrl: "https://files.catbox.moe/8vwbrk.jpg",
                    mediaType: 1, renderLargerThumbnail: true
                }
            }
        })

        addMenfess(idUnik, m.sender, targetJid, pesan)

        reply(`✅ *TERKIRIM!*\nID Pesan: ${idUnik}`)

    } catch (e) {
        reply('❌ Gagal kirim.')
    }
}
break
case 'balasmenfess':
case 'balasconfess':
case 'balasmf': {
    if (!args[0] || !args[1]) return reply(`⚠️ Format Salah!\n\nContoh:\n${prefix}balasmenfess MF-1234 Halo juga\n\n(Cek ID Pesan di chat bot sebelumnya)`)

    let idCari = args[0]
    let pesanBalasan = args.slice(1).join(' ')

    let data = findMenfess(idCari)
    if (!data) return reply('❌ ID Pesan tidak ditemukan atau sudah kadaluarsa.')

    if (m.sender !== data.to) return reply('❌ Ini bukan pesan menfess buat kamu!')

    let txtReply = `📩 *BALASAN MENFESS*\n\n`
    txtReply += `ID: ${idCari}\n`
    txtReply += `👤 *Dari:* Target (Rahasia)\n`
    txtReply += `--------------------------\n`
    txtReply += `💬 *Balasan:*\n"${pesanBalasan}"\n`
    txtReply += `--------------------------\n`
    txtReply += `_Dia sudah membalas pesanmu!_`

    try {
        await DinzBotz.sendMessage(data.from, {
            text: txtReply,
            contextInfo: {
                externalAdReply: {
                    title: "📨 NEW REPLY",
                    body: "From Target",
                    thumbnailUrl: "https://files.catbox.moe/8vwbrk.jpg",
                    mediaType: 1, renderLargerThumbnail: true
                }
            }
        })

        reply('✅ Balasan sudah dikirim ke pengirim rahasia!')

    } catch (e) {
        reply('❌ Gagal mengirim balasan.')
    }
}
break
case 'mediafire':
case 'mf': {
    if (!args[0]) return reply(`Contoh penggunaan:\n${prefix + command} https://www.mediafire.com/file/xxxxx`)
    if (!args[0].includes('mediafire.com')) return reply('Link yang kamu kirim bukan link MediaFire valid!')

    reply('⏳ Sedang memuat data...')

    try {
        let apiUrl = `https://rynekoo-api.vercel.app/downloader/mediafire?url=${args[0]}`
        let response = await fetch(apiUrl)
        let json = await response.json()

        if (!json.success) return reply('❌ Gagal mengambil data file. Link mungkin kadaluarsa atau diprivasi.')

        let { filename, filesize, mimetype, uploaded, download_url } = json.result

        let caption = `🔥 *MEDIAFIRE DOWNLOADER*\n\n`
        caption += `📂 *File:* ${filename}\n`
        caption += `📦 *Size:* ${filesize}\n`
        caption += `📅 *Uploaded:* ${uploaded}\n`
        caption += `💾 *Type:* ${mimetype}\n\n`
        caption += `⏳ _Sedang mengirim file, mohon tunggu..._`

        await DinzBotz.sendMessage(m.chat, { text: caption }, { quoted: m })

        await DinzBotz.sendMessage(m.chat, {
            document: { url: download_url },
            mimetype: mimetype,
            fileName: filename
        }, { quoted: m })

    } catch (e) {
        reply('❌ Terjadi kesalahan saat mengambil data.')
        console.log(e)
    }
}
break
case 'instagram':
case 'ig':
case 'igdl': {
    if (!args[0]) return reply(`Masukan Link Instagram!\nContoh: ${prefix + command} https://www.instagram.com/p/xxxxx`)
    
    reply('⏳ Sedang memuat media...')

    try {
        let isStory = args[0].includes('/stories/')
        let apiUrl = isStory 
            ? `https://rynekoo-api.vercel.app/downloader/instagram-story?username=${args[0]}`
            : `https://rynekoo-api.vercel.app/downloader/instagram?url=${args[0]}`

        let response = await fetch(apiUrl)
        let json = await response.json()

        if (!json.success) return reply('❌ Gagal mengambil data. Pastikan akun tidak diprivasi atau link valid.')

        let mediaList = isStory ? json.result : json.result.downloadUrl
        let caption = isStory ? 'Instagram Story' : (json.result.metadata.caption || '')
        let username = isStory ? 'Instagram User' : (json.result.metadata.username || '')
        let originalUrl = args[0]

        let images = []
        let videos = []

        for (let url of mediaList) {
            if (url.includes('.mp4')) {
                videos.push(url)
            } else {
                images.push(url)
            }
        }

        if (videos.length > 0) {
            for (let i = 0; i < videos.length; i++) {
                await DinzBotz.sendMessage(m.chat, {
                    video: { url: videos[i] },
                    caption: `📹 Video ${i + 1} • ${isStory ? 'Story' : '@' + username}`
                }, { quoted: m })
            }
        }

        if (images.length > 0) {
            let cards = []

            for (let i = 0; i < images.length; i++) {
                let imageBuffer = await getBuffer(images[i])
                let imageUpload = await prepareWAMessageMedia({ image: imageBuffer }, { upload: DinzBotz.waUploadToServer })

                cards.push({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: i === 0 ? (caption.length > 50 ? caption.slice(0, 50) + '...' : caption) : `Image ${i + 1}`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.fromObject({
                        text: `📸 Slide ${i + 1}/${images.length} • ${isStory ? 'Story' : '@' + username}`
                    }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: "",
                        hasMediaAttachment: true,
                        imageMessage: imageUpload.imageMessage
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [{
                            name: "cta_url",
                            buttonParamsJson: `{"display_text":"🔗 Source Link","url":"${originalUrl}","merchant_url":"${originalUrl}"}`
                        }]
                    })
                })
            }

            const msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                            body: proto.Message.InteractiveMessage.Body.fromObject({
                                text: `📸 *INSTAGRAM ${isStory ? 'STORY' : 'POST'}*\n👤 Account: ${isStory ? 'User' : '@' + username}\n📝 Caption: ${caption}`
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.fromObject({
                                text: "Instagram Carousel Downloader"
                            }),
                            header: proto.Message.InteractiveMessage.Header.fromObject({
                                hasMediaAttachment: false
                            }),
                            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                cards: cards
                            })
                        })
                    }
                }
            }, { quoted: m })

            await DinzBotz.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
        }

    } catch (e) {
        console.log(e)
        reply('❌ Terjadi kesalahan saat mengunduh.')
    }
}
break
case 'telesticker':
case 'stikertele': {
    if (!args[0]) return reply(`Masukan Link Sticker Pack Telegram!\nContoh: ${prefix + command} https://t.me/addstickers/NAMA_PACK`)
    if (!args[0].includes('t.me/addstickers/')) return reply('Link tidak valid!')

    reply('⏳ Sedang mengambil data stiker...')

    try {
        let apiUrl = `https://rynekoo-api.vercel.app/downloader/telegram-sticker?url=${args[0]}`
        let response = await fetch(apiUrl)
        let json = await response.json()

        if (!json.success) return reply('❌ Gagal mengambil pack stiker.')

        let stickers = json.result.stickers
        let total = stickers.length
        let limit = total > 20 ? 20 : total

        reply(`📦 Ditemukan: ${json.result.title}\n🔢 Total Stiker: ${total}\n🚀 Mengirim ${limit} stiker pertama...`)

        for (let i = 0; i < limit; i++) {
            let urlSticker = stickers[i].image_url
            await DinzBotz.sendImageAsSticker(m.chat, urlSticker, m, { packname: json.result.name, author: 'Telegram Sticker' })
            await new Promise(resolve => setTimeout(resolve, 1500))
        }

        reply('✅ Selesai mengirim stiker.')

    } catch (e) {
        console.log(e)
        reply('❌ Gagal mengonversi stiker.')
    }
}
break
case 'pinterest':
case 'pin': {
    if (!text) return reply(`Mau cari apa?\nContoh: ${prefix + command} Furina`)
    
    reply('⏳ Sedang mencari gambar...')

    try {
        let apiUrl = `https://rynekoo-api.vercel.app/discovery/pinterest/search?q=${text}`
        let response = await fetch(apiUrl)
        let json = await response.json()

        if (!json.success || !json.result || json.result.length === 0) return reply('❌ Gambar tidak ditemukan.')

        let data = json.result.slice(0, 5)
        let cards = []

        for (let i of data) {
            let imageBuffer = await getBuffer(i.imageUrl)
            let imageUpload = await prepareWAMessageMedia({ image: imageBuffer }, { upload: DinzBotz.waUploadToServer })

            cards.push({
                body: proto.Message.InteractiveMessage.Body.fromObject({
                    text: i.caption ? i.caption.slice(0, 50) : 'No Caption'
                }),
                footer: proto.Message.InteractiveMessage.Footer.fromObject({
                    text: `👤 Author: ${i.author.name}`
                }),
                header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: "Pinterest Result",
                    hasMediaAttachment: true,
                    imageMessage: imageUpload.imageMessage
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [{
                        name: "cta_url",
                        buttonParamsJson: `{"display_text":"🔗 Original Link","url":"${i.url}","merchant_url":"${i.url}"}`
                    }]
                })
            })
        }

        const msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.fromObject({
                            text: `🔍 Hasil Pencarian: *${text}*\nGeser kartu untuk melihat hasil lainnya.`
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.fromObject({
                            text: "Pinterest Carousel"
                        }),
                        header: proto.Message.InteractiveMessage.Header.fromObject({
                            hasMediaAttachment: false
                        }),
                        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                            cards: cards
                        })
                    })
                }
            }
        }, { quoted: m })

        await DinzBotz.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

    } catch (e) {
        console.log(e)
        reply('❌ Terjadi kesalahan saat membuat carousel.')
    }
}
break
case 'autoai': {
    let dbKia = readDbKia();
    if (!dbKia) dbKia = {};
    if (!dbKia.groups) dbKia.groups = {};
    if (!dbKia.private) dbKia.private = { on: false, sessions: {} };
    if (!dbKia.prompt) dbKia.prompt = "Kamu adalah AI Assistant.";
    if (!dbKia.fakeImage) dbKia.fakeImage = getRandomImageUrl() || "https://telegra.ph/file/5dfcd7952eb5a92a54366.jpg";
    if (!dbKia.fakeCaption) dbKia.fakeCaption = "ʜᴜᴛᴀᴏ ~ ᴀɪ";

    if (!args[0]) {
        return m.reply(`*🤖 PENGATURAN AUTO-AI*\n\n` +
            `🔹 ${prefix}autoai setprompt <teks>\n` +
            `   (Mengatur sifat/instruksi AI)\n` +
            `🔹 ${prefix}autoai setname <teks>\n` +
            `   (Mengatur Title/Nama di Fake Quote)\n` +
            `🔹 ${prefix}autoai setimage <link/reply>\n` +
            `   (Mengatur Foto Profil/Thumbnail via Catbox)\n` +
            `🔹 ${prefix}autoai pc on/off\n` +
            `   (Auto respon di Private Chat)\n` +
            `🔹 ${prefix}autoai group on/off\n` +
            `   (Auto respon di Grup)\n\n` +
            `*Status Saat Ini:*\n` +
            `📩 Mode PC: ${dbKia.private.on ? "✅ ON" : "❌ OFF"}\n` +
            `📝 Prompt: "${dbKia.prompt.substring(0, 20)}..."\n` +
            `🏷️ Name: "${dbKia.fakeCaption}"`);
    }

    const subCmd = args[0].toLowerCase();
    const value = args[1]?.toLowerCase();

    if (subCmd === 'setprompt') {
        if (!DinzTheCreator) return m.reply('❌ Maaf, fitur ini khusus Owner Bot!');
        let newPrompt = args.slice(1).join(" ");
        if (!newPrompt) return m.reply(`Contoh: ${prefix}autoai setprompt Kamu adalah kucing`);

        dbKia.prompt = newPrompt;
        dbKia.groups = {};
        dbKia.private.sessions = {};
        writeDbKia(dbKia);
        m.reply(`✅ *Prompt Berhasil Diganti!*\nSifat baru: "${newPrompt}"`);
    } 
    else if (subCmd === 'setname' || subCmd === 'settitle') {
        if (!DinzTheCreator) return m.reply('❌ Maaf, fitur ini khusus Owner Bot!');
        let newTitle = args.slice(1).join(" ");
        if (!newTitle) return m.reply(`Contoh: ${prefix}autoai setname Jarvis AI`);

        dbKia.fakeCaption = newTitle;
        writeDbKia(dbKia);
        m.reply(`✅ *Nama/Title Berhasil Diganti!*\nMenjadi: "${newTitle}"`);
    }
    // --- FITUR BARU: SET IMAGE (CATBOX) ---
    else if (subCmd === 'setimage' || subCmd === 'setthumb') {
        if (!DinzTheCreator) return m.reply('❌ Maaf, fitur ini khusus Owner Bot!');
        
        let q = m.quoted ? m.quoted : m;
        let mime = (q.msg || q).mimetype || '';
        let urlImage = "";

        if (/image/.test(mime)) {
            m.reply('⏳ Sedang mengupload ke Catbox...');
            try {
                let media = await q.download();
                const FormData = require('form-data');
                const axios = require('axios');
                
                let form = new FormData();
                form.append('reqtype', 'fileupload');
                form.append('fileToUpload', media, 'image.jpg'); 

                let res = await axios.post('https://catbox.moe/user/api.php', form, {
                    headers: form.getHeaders()
                });
                
                urlImage = res.data.trim();
            } catch (e) {
                console.log(e);
                return m.reply('❌ Gagal upload ke Catbox. Coba lagi.');
            }
        } else if (args[1]) {
            urlImage = args[1];
        } else {
            return m.reply(`Kirim/Reply gambar atau masukan link url.\nContoh: ${prefix}autoai setimage https://url.com/foto.jpg`);
        }

        dbKia.fakeImage = urlImage;
        writeDbKia(dbKia);
        m.reply(`✅ *Thumbnail Berhasil Diganti!*\nURL: ${urlImage}`);
    }
    // --------------------------------------
    else if (subCmd === 'pc') {
        if (!DinzTheCreator) return m.reply('❌ Maaf, fitur ini khusus Owner Bot!');
        if (value === 'on') {
            dbKia.private.on = true;
            writeDbKia(dbKia);
            m.reply('✅ *AutoAI Private Mode Diaktifkan!*\nBot akan otomatis membalas chat pribadi.');
        } else if (value === 'off') {
            dbKia.private.on = false;
            writeDbKia(dbKia);
            m.reply('❌ *AutoAI Private Mode Dimatikan.*');
        } else {
            m.reply(`Pilih on atau off. Contoh: ${prefix}autoai pc on`);
        }
    } else if (subCmd === 'group') {
        if (!m.isGroup) return m.reply('Fitur ini hanya untuk Grup!');
        if (!m.isGroupAdmins && !DinzTheCreator) return m.reply('❌ Khusus Admin Grup!');
        if (value === 'on') {
            dbKia.groups[m.chat] = {
                session: ""
            };
            writeDbKia(dbKia);
            m.reply('✅ *AutoAI Grup Diaktifkan!*');
        } else if (value === 'off') {
            delete dbKia.groups[m.chat];
            writeDbKia(dbKia);
            m.reply('❌ *AutoAI Grup Dimatikan.*');
        } else {
            m.reply(`Pilih on atau off. Contoh: ${prefix}autoai group on`);
        }
    } else if (subCmd === 'status') {
        let txt = `*📊 STATUS AUTO-AI*\n\n`;
        txt += `📝 *Prompt:* ${dbKia.prompt}\n`;
        txt += `🏷️ *Name:* ${dbKia.fakeCaption}\n`;
        txt += `📩 *Private Mode:* ${dbKia.private.on ? "ON" : "OFF"}\n`;
        txt += `🏢 *Grup Aktif:* ${Object.keys(dbKia.groups).length} Grup`;
        m.reply(txt);
    }
}
break;
case 'welcome': {
    if (!m.isGroup) return reply('Khusus Grup!')
    if (!isAdmins) return reply('Khusus Admin Grup!')

    if (args[0] === 'on') {
        if (cekWelcome(m.chat)) return reply('Sudah aktif sebelumnya.')
        _welcome.push(m.chat)
        fs.writeFileSync('./database/sambutan/welcome.json', JSON.stringify(_welcome))
        reply('✅ Welcome berhasil *DIAKTIFKAN* di grup ini.')
    } else if (args[0] === 'off') {
        if (!cekWelcome(m.chat)) return reply('Sudah mati sebelumnya.')
        let posi = _welcome.indexOf(m.chat)
        _welcome.splice(posi, 1)
        fs.writeFileSync('./database/sambutan/welcome.json', JSON.stringify(_welcome))
        reply('❌ Welcome berhasil *DIMATIKAN* di grup ini.')
    } else {
        reply(`Pilih on atau off\nContoh: ${prefix}welcome on`)
    }
}
break
case 'listsambutan': {
    if (!DinzTheCreator) return reply('Maaf, fitur cek status global ini khusus Owner Bot.')

    await reply('⏳ Sedang mengambil data seluruh grup...')

    let allGroups = await DinzBotz.groupFetchAllParticipating()
    let groupList = Object.values(allGroups)

    let dbSetWelcome = JSON.parse(fs.readFileSync('./database/sambutan/set_welcome.json'))
    let dbSetLeft = JSON.parse(fs.readFileSync('./database/sambutan/set_left.json'))

    let txt = `*📊 STATUS & TEXT SAMBUTAN*\n`
    txt += `Total Grup Bot: ${groupList.length}\n`
    txt += `==============================\n\n`

    let activeCount = 0

    for (let g of groupList) {
        let isW = cekWelcome(g.id)
        let isL = cekLeft(g.id)

        if (isW || isL) {
            activeCount++
            let msgW = dbSetWelcome[g.id] ? `_"${dbSetWelcome[g.id]}"_` : "(Default)"
            let msgL = dbSetLeft[g.id] ? `_"${dbSetLeft[g.id]}"_` : "(Default)"

            txt += `🏢 *${g.subject}*\n`
            txt += `├ 📥 *Welcome:* ${isW ? "✅ ON" : "❌ OFF"}\n`
            txt += `│  └ Teks: ${msgW}\n`
            txt += `├ 📤 *Left:* ${isL ? "✅ ON" : "❌ OFF"}\n`
            txt += `│  └ Teks: ${msgL}\n`
            txt += `└─────────────────────\n\n`
        }
    }

    if (activeCount === 0) {
        txt += "🔴 Belum ada grup yang mengaktifkan fitur Welcome/Left."
    } else {
        txt += `✅ Menampilkan ${activeCount} grup yang aktif.`
    }

    reply(txt)
}
break
case 'listwelcome':
case 'cekstatuswelcome': {
    if (_welcome.length < 1) return reply('Belum ada grup yang mengaktifkan fitur Welcome.')

    let _welcomeJSON = null
    try {
        if (fs.existsSync('./database/sambutan/set_welcome.json')) {
            _welcomeJSON = JSON.parse(fs.readFileSync('./database/sambutan/set_welcome.json'))
        }
    } catch (e) {
        console.error('Gagal membaca database set_welcome.json', e)
    }

    let teks = '📋 *LIST STATUS WELCOME AKTIF*\n\n'

    for (let x of _welcome) {
        try {
            var meta = await DinzBotz.groupMetadata(x)
            var name = meta.subject
        } catch (e) {
            var name = 'Nama Grup Tidak Terdeteksi'
        }

        let msg = '(Menggunakan Text Default Bot)'

        if (_welcomeJSON) {
            if (Array.isArray(_welcomeJSON)) {
                let data = _welcomeJSON.find(v => v.id === x)
                if (data && data.text) msg = data.text

            } else {
                if (_welcomeJSON[x]) {
                    if (typeof _welcomeJSON[x] === 'object' && _welcomeJSON[x].text) {
                        msg = _welcomeJSON[x].text
                    } else if (typeof _welcomeJSON[x] === 'string') {
                        msg = _welcomeJSON[x]
                    }
                }
            }
        }

        teks += `👥 *Grup:* ${name}\n`
        teks += `🆔 *ID:* ${x}\n`
        teks += `📝 *Pesan:* \n${msg}\n`
        teks += `──────────────────\n\n`
    }

    reply(teks)
}
break
case 'setwelcome': {
    if (!m.isGroup) return reply('Khusus Grup!')
    if (!isAdmins) return reply('Khusus Admin Grup!')
    if (!text) return reply(`Masukan teks welcome-nya!\nContoh: ${prefix}setwelcome Halo @user welcome to @group`)

    _setWelcome[m.chat] = text
    fs.writeFileSync('./database/sambutan/set_welcome.json', JSON.stringify(_setWelcome, null, 2))
    reply(`✅ Teks Welcome berhasil diubah.`)
}
break
case 'left': {
    if (!m.isGroup) return reply('Khusus Grup!')
    if (!isAdmins) return reply('Khusus Admin Grup!')

    if (args[0] === 'on') {
        if (cekLeft(m.chat)) return reply('Sudah aktif sebelumnya.')
        _left.push(m.chat)
        fs.writeFileSync('./database/sambutan/left.json', JSON.stringify(_left))
        reply('✅ Left berhasil *DIAKTIFKAN* di grup ini.')
    } else if (args[0] === 'off') {
        if (!cekLeft(m.chat)) return reply('Sudah mati sebelumnya.')
        let posi = _left.indexOf(m.chat)
        _left.splice(posi, 1)
        fs.writeFileSync('./database/sambutan/left.json', JSON.stringify(_left))
        reply('❌ Left berhasil *DIMATIKAN* di grup ini.')
    } else {
        reply(`Pilih on atau off\nContoh: ${prefix}left on`)
    }
}
break
case 'setleft': {
    if (!m.isGroup) return reply('Khusus Grup!')
    if (!isAdmins) return reply('Khusus Admin Grup!')
    if (!text) return reply(`Masukan teks goodbye-nya!`)

    _setLeft[m.chat] = text
    fs.writeFileSync('./database/sambutan/set_left.json', JSON.stringify(_setLeft, null, 2))
    reply(`✅ Teks Goodbye berhasil diubah.`)
}
break
case 'me':
case 'inventory': {
    if (!m.isGroup) return reply(mess.only.group)

    let inventory = {
        others: {
            joinlimit: true,
            health: true,
            money: true,
            chip: true,
            exp: true,
        },
        items: {
            bibitanggur: true,
            bibitmangga: true,
            bibitpisang: true,
            bibitapel: true,
            bibitjeruk: true,
            anggur: true,
            mangga: true,
            pisang: true,
            apel: true,
            jeruk: true,
            potion: true,
            trash: true,
            wood: true,
            rock: true,
            string: true,
            emerald: true,
            diamond: true,
            gold: true,
            iron: true,
            umpan: true,
            upgrader: true,
            pet: true,
            petfood: true,
        },
        durabi: {
            sworddurability: true,
            pickaxedurability: true,
            fishingroddurability: true,
            armordurability: true,
        },
        tools: {
            armor: {
                '0': '❌',
                '1': 'Leather Armor',
                '2': 'Iron Armor',
                '3': 'Gold Armor',
                '4': 'Diamond Armor',
                '5': 'Emerald Armor',
                '6': 'Crystal Armor',
                '7': 'Obsidian Armor',
                '8': 'Netherite Armor',
                '9': 'Wither Armor',
                '10': 'Dragon Armor',
                '11': 'Hacker Armor'
            },
            sword: {
                '0': '❌',
                '1': 'Wooden Sword',
                '2': 'Stone Sword',
                '3': 'Iron Sword',
                '4': 'Gold Sword',
                '5': 'Copper Sword',
                '6': 'Diamond Sword',
                '7': 'Emerald Sword',
                '8': 'Obsidian Sword',
                '9': 'Netherite Sword',
                '10': 'Samurai Slayer Green Sword',
                '11': 'Hacker Sword'
            },
            pickaxe: {
                '0': '❌',
                '1': 'Wooden Pickaxe',
                '2': 'Stone Pickaxe',
                '3': 'Iron Pickaxe',
                '4': 'Gold Pickaxe',
                '5': 'Copper Pickaxe',
                '6': 'Diamond Pickaxe',
                '7': 'Emerlad Pickaxe',
                '8': 'Crystal Pickaxe',
                '9': 'Obsidian Pickaxe',
                '10': 'Netherite Pickaxe',
                '11': 'Hacker Pickaxe'
            },
            fishingrod: {
                '0': '❌',
                '1': 'Wooden Fishingrod',
                '2': 'Stone Fishingrod',
                '3': 'Iron Fishingrod',
                '4': 'Gold Fishingrod',
                '5': 'Copper Fishingrod',
                '6': 'Diamond Fishingrod',
                '7': 'Emerald Fishingrod',
                '8': 'Crystal Fishingrod',
                '9': 'Obsidian Fishingrod',
                '10': 'God Fishingrod',
                '11': 'Hacker Fishingrod'
            }
        },
        crates: {
            common: true,
            uncommon: true,
            mythic: true,
            legendary: true,
        },
        pets: {
            horse: 10,
            cat: 10,
            fox: 10,
            dog: 10,
            robo: 10,
        },
        cooldowns: {}
    }

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? DinzBotz.user.jid : m.sender
    let user = global.db.users[who]

    if (!(who in global.db.users)) return reply(`User ${who} not in database`)

    let sortedlevel = Object.entries(global.db.users).sort((a, b) => b[1].level - a[1].level)
    let userslevel = sortedlevel.map(v => v[0])
    let sortedchip = Object.entries(global.db.users).sort((a, b) => b[1].chip - a[1].chip)
    let userschip = sortedchip.map(v => v[0])
    let sortedmoney = Object.entries(global.db.users).sort((a, b) => b[1].money - a[1].money)
    let usersmoney = sortedmoney.map(v => v[0])
    let sorteddiamond = Object.entries(global.db.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let usersdiamond = sorteddiamond.map(v => v[0])
    let sortedbank = Object.entries(global.db.users).sort((a, b) => b[1].bank - a[1].bank)
    let usersbank = sortedbank.map(v => v[0])
    let sortedgold = Object.entries(global.db.users).sort((a, b) => b[1].gold - a[1].gold)
    let usersgold = sortedgold.map(v => v[0])

    let owners = global.ownerNumber || []
    let cleanTargetNum = who.split('@')[0]
    let isMods = owners.includes(cleanTargetNum)
    let isPremData = premium.some(u => u.id === who || u.lid === who)
    let isPrems = isMods || isPremData || new Date() - user.premiumTime < 0
    let limit = isPrems ? 'Unlimited' : user.limit
    let statusUser = isMods ? 'Developer / Owner' : isPrems ? 'Premium User' : 'Free User'

    const getEmot = (v) => global.rpg && global.rpg.emoticon ? global.rpg.emoticon(v) : v
    const fmt = (v) => { let e = getEmot(v); return e !== v ? `${e} ${v}` : v }

    let tools = Object.keys(inventory.tools).map(v => user[v] && `*${fmt(v)}:* ${typeof inventory.tools[v] === 'object' ? inventory.tools[v][user[v]?.toString()] : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
    let items = Object.keys(inventory.items).map(v => user[v] && `*${fmt(v)}:* ${user[v]}`).filter(v => v).join('\n').trim()
    let dura = Object.keys(inventory.durabi).map(v => user[v] && `*${fmt(v)}:* ${user[v]}`).filter(v => v).join('\n').trim()
    let crates = Object.keys(inventory.crates).map(v => user[v] && `*${fmt(v)}:* ${user[v]}`).filter(v => v).join('\n').trim()
    let pets = Object.keys(inventory.pets).map(v => user[v] && `*${fmt(v)}:* ${user[v] >= inventory.pets[v] ? 'Max Levels' : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
    let cooldowns = Object.entries(inventory.cooldowns).map(([cd, {
        name,
        time
    }]) => cd in user && `*✧ ${name}*: ${new Date() - user[cd] >= time ? '✅' : '❌'}`).filter(v => v).join('\n').trim()

    let caption = `
━━━━━━━━━━━━━━━━━━
${Object.keys(inventory.others).map(v => user[v] && `➠ ${fmt(v)}: ${user[v]}`).filter(v => v).join('\n')} ${tools ? `

*ʟɪꜱᴛ ᴛᴏᴏʟs* :
${tools}` : ''}${items ? `

*ʟɪꜱᴛ ɪᴛᴇᴍs* :
${items}` : ''}${crates ? `

*ʟɪꜱᴛ ᴄʀᴀᴛᴇs* :
${crates}` : ''}${pets ? `

*ʟɪꜱᴛ ᴩᴇᴛs* :
${pets}` : ''}

♻️ *ᴀʀᴄʜɪᴇᴠᴇᴍᴇɴᴛ* :
${getEmot('chip')} ᴛᴏᴘ ᴄʜɪᴘ *${userschip.indexOf(who) + 1}*
${getEmot('money')} ᴛᴏᴘ ᴍᴏɴᴇʏ *${usersmoney.indexOf(who) + 1}*
${getEmot('level')} ᴛᴏᴘ ʟᴇᴠᴇʟ *${userslevel.indexOf(who) + 1}*
━━━━━━━━━━━━━━━━━━
`.trim()

    try {
        await DinzBotz.sendMessage(m.chat, { react: { text: '🎨', key: m.key } })

        let ppUrl
        try {
            ppUrl = await DinzBotz.profilePictureUrl(who, 'image')
        } catch {
            ppUrl = 'https://i.pinimg.com/564x/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.jpg' 
        }

        const namaUser = user.registered ? user.name : DinzBotz.getName(who)
        const canvasBuffer = await createMeCanvas(ppUrl, namaUser, statusUser, user.level || 0)

        if (canvasBuffer) {
             await DinzBotz.sendMessage(m.chat, {
                image: canvasBuffer,
                caption: caption
            }, { quoted: m })
             await DinzBotz.sendMessage(m.chat, { react: { text: '', key: m.key } })
        } else {
             reply(caption)
        }

    } catch (e) {
        console.error(e)
        reply(caption)
    }

    db.users[m.sender].exp += 300
}
break
case 'tebaktebakan': {
      const gamecek = await cekgame(m.chat)
      if (gamecek) return
      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
      let result = await pickRandom(anu)
      console.log("Jawaban: " + result.jawaban)
      tebaktebakan[m.chat] = [
        await DinzBotz.sendMessage(m.chat, {
          image: fs.readFileSync('./media/gamemenu.jpg'),
          caption: `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
        }, {
          quoted: m
        }), result, 250,
        setTimeout(() => {
          if (tebaktebakan[m.chat]) {
            waktuHabis(result.jawaban)
            delete tebaktebakan[m.chat]
          }
        }, 120000)
      ]
    }
break
case 'tebaklirik': {

      if (!m.isGroup) return reply(mess.only.group)
      let users = global.db.users[m.sender]
      let timeout = 60000
      let poin = 10000
      let id = m.chat
      if (id in DinzBotz.tebaklirik) return reply('Masih ada soal belum terjawab di chat ini')
      let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')).json()
      let json = src[Math.floor(Math.random() * src.length)]
      let caption = `
	Soal: ${json.soal}
	
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Bonus: ${poin} XP
	Hadiah: ${poin} Money
	`.trim()
      DinzBotz.tebaklirik[id] = [
        await reply(`${caption}`),
        json, poin,
        setTimeout(() => {
          if (DinzBotz.tebaklirik[id])
            users.money -= 200
          reply(`*GAME TEBAK LIRIK*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
          delete DinzBotz.tebaklirik[id]
        }, timeout)
      ]
    }
break
case 'tebakgambar': {
      const gamecek = await cekgame(m.chat)
      if (gamecek) return

      let anu = await fetchJson('https://raw.githubusercontent.com/ditss-dev/database/main/game/tebakgambar.json')
      let result = await pickRandom(anu)
      console.log("Jawaban: " + result.jawaban)
      tebakgambar[m.chat] = [
        await DinzBotz.sendMessage(m.chat, {
          image: {
            url: result.img
          },
          caption: `Mohon Dijawab Soal Diatas\n\nDeskripsi : ${result.deskripsi}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
        }, {
          quoted: m
        }), result, 250,
        setTimeout(() => {
          if (tebakgambar[m.chat]) {
            waktuHabis(result.jawaban)
            delete tebakgambar[m.chat]
          }
        }, 120000)
      ]
    }
break
case 'tebakkimia': {
      const gamecek = await cekgame(m.chat)
      if (gamecek) return

      let anu = await fetchJson('https://raw.githubusercontent.com/ditss-dev/database/main/game/tebakkimia.json')
      let result = await pickRandom(anu)
      console.log("Jawaban: " + result.unsur)
      tebakkimia[m.chat] = [
        await DinzBotz.sendMessage(m.chat, {
          image: fs.readFileSync('./media/gamemenu.jpg'),
          caption: `Apa Arti Dari Simbol : *${result.lambang}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
        }, {
          quoted: m
        }), result, 250,
        setTimeout(() => {
          if (tebakkimia[m.chat]) {
            waktuHabis(result.unsur)
            delete tebakkimia[m.chat]
          }
        }, 120000)
      ]
    }
break
case 'siapaaku': {
      const gamecek = await cekgame(m.chat)
      if (gamecek) return

      let anu = await fetchJson('https://raw.githubusercontent.com/ditss-dev/database/main/game/siapakahaku.json')
      let result = await pickRandom(anu)
      console.log("Jawaban: " + result.jawaban)
      siapaaku[m.chat] = [
        await DinzBotz.sendMessage(m.chat, {
          image: fs.readFileSync('./media/gamemenu.jpg'),
          caption: `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
        }, {
          quoted: m
        }), result, 250,
        setTimeout(() => {
          if (siapaaku[m.chat]) {
            waktuHabis(result.jawaban)
            delete siapaaku[m.chat]
          }
        }, 120000)
      ]
    }
break
case 'susunkata': {
      const gamecek = await cekgame(m.chat)
      if (gamecek) return

      let anu = await fetchJson('https://raw.githubusercontent.com/ditss-dev/database/main/game/susunkata.json')
      let result = await pickRandom(anu)
      console.log("Jawaban: " + result.jawaban)
      lengkapikalimat[m.chat] = [
        await DinzBotz.sendMessage(m.chat, {
          image: fs.readFileSync('./media/gamemenu.jpg'),
          caption: `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
        }, {
          quoted: m
        }), result, 250,
        setTimeout(() => {
          if (lengkapikalimat[m.chat]) {
            waktuHabis(result.jawaban)
            delete lengkapikalimat[m.chat]
          }
        }, 120000)
      ]
    }
break
case 'tekateki': {
      const gamecek = await cekgame(m.chat)
      if (gamecek) return

      let anu = await fetchJson('https://raw.githubusercontent.com/ditss-dev/database/main/game/tekateki.json')
      let result = await pickRandom(anu)
      console.log("Jawaban: " + result.jawaban)
      tekateki[m.chat] = [
        await DinzBotz.sendMessage(m.chat, {
          image: {
            url: 'https://files.catbox.moe/fieeis.jpg'
          },
          caption: `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
        }, {
          quoted: m
        }), result, 250,
        setTimeout(() => {
          if (tekateki[m.chat]) {
            waktuHabis(result.jawaban)
            delete tekateki[m.chat]
          }
        }, 120000)
      ]
    }

break
case 'tebakbendera': {
      const gamecek = await cekgame(m.chat)
      if (gamecek) return

      let anu = await fetchJson('https://gist.githubusercontent.com/DinzID/a9cc8367fab1f4c9dd0ab0c405fb6b81/raw/4e04f3fd57be8a8fb905a243e23edf3c525236dd/tebakbendera.json')
      let result = await pickRandom(anu)
      console.log("Jawaban: " + result.name)
      tebakbendera[m.chat] = [
        await DinzBotz.sendMessage(m.chat, {
          image: {
            url: result.img
          },
          caption: `Gambar diatas adalah bendera negara?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
        }, {
          quoted: m
        }), result, 250,
        setTimeout(() => {
          if (tebakbendera[m.chat]) {
            waktuHabis(result.name)
            delete tebakbendera[m.chat]
          }
        }, 120000)
      ]
    }
break
case 'caklontong': {
      const gamecek = await cekgame(m.chat)
      if (gamecek) return

      let anu = await fetchJson('https://raw.githubusercontent.com/ditss-dev/database/main/game/caklontong.json')
      let result = await pickRandom(anu)
      console.log("Jawaban: " + result.jawaban)
      caklontong[m.chat] = [
        await DinzBotz.sendMessage(m.chat, {
          image: fs.readFileSync('./media/gamemenu.jpg'),
          caption: `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
        }, {
          quoted: m
        }), result, 250,
        setTimeout(() => {
          if (caklontong[m.chat]) {
            waktuHabis(result.jawaban)
            delete caklontong[m.chat]
          }
        }, 120000)
      ]
    }

break
case 'tebakjkt48': {
      const gamecek = await cekgame(m.chat);
      if (gamecek) return;

      let anu = await fetchJson('https://api.siputzx.my.id/api/games/tebakjkt');
      let data = anu.data
      console.log("Jawaban: " + data.jawaban);

      let cap = `
Siapakah Nama Member JKT48 Ini?

⏳ *Waktu:* ${(120000 / 1000).toFixed(2)} detik
_Ketik .nyerah Untuk Menyerah..._
_Ketik .bantuan Untuk Petunjuk..._
    `;

      tebakjkt48[m.chat] = [
        await DinzBotz.sendMessage(m.chat, {
          image: {
            url: data.gambar
          },
          caption: cap
        }, {
          quoted: m
        }),
        data,
        250,
        setTimeout(() => {
          if (tebakjkt48[m.chat]) {
            waktuHabis(data.jawaban);
            delete tebakjkt48[m.chat];
          }
        }, 120000)
      ];
break;
}
case 'levelup': {
      const settings = levelUpManager.getSettings();
      const action = args[0]?.toLowerCase();

      if (action === 'on') {
        levelUpManager.updateSettings({
          enabled: true
        });
        replyyoimiya('🎉 Fitur level up telah diaktifkan!\nSekarang bot akan mengirim notifikasi saat level user naik.');
      } else if (action === 'off') {
        levelUpManager.updateSettings({
          enabled: false
        });
        replyyoimiya('🔇 Fitur level up telah dinonaktifkan.\nNotifikasi level up tidak akan ditampilkan.');
      } else {
        const status = settings.enabled ? '🟢 AKTIF' : '🔴 NONAKTIF';
        const lastUpdated = settings.lastUpdated ? `\nTerakhir diupdate: ${new Date(settings.lastUpdated).toLocaleString()}` : '';

        replyyoimiya(
          `⚙️ *Pengaturan Level Up*\n\n` +
          `Status: ${status}${lastUpdated}\n\n` +
          `Gunakan:\n` +
          `• ${prefix}levelup on - Aktifkan notifikasi\n` +
          `• ${prefix}levelup off - Nonaktifkan notifikasi`
        );
      }
      break;
    }
case 'addcase': {
    if (!isOwner) return m.reply(mess.owner)
    if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> .addcase case 'test': {\n> m.reply('hello world')\n> }\n> break`)

    const fileName = 'message/msg.js';
    const newCase = `${text}`;

    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('*ERROR SAAT MEMBACA FILE*', err);
            return;
        }

        const posisiAwal = data.indexOf("case ['addcase']:");
        if (posisiAwal !== -1) {
            const kodeBaru = data.slice(0, posisiAwal) + '\n' + newCase + '\n' + data.slice(posisiAwal);

            fs.writeFile(fileName, kodeBaru, 'utf8', (err) => {
                if (err) {
                    m.reply('*TERJADI KESALAHAN SAAT MENULIS CASE* :', err);
                } else {
                    m.reply('*CASE SUKSES DITAMBAHKAN*');
                }
            });

        } else {
            m.reply('*CASE ADDCASE TIDAK DITEMUKAN');
        }
    });
}
break;
case 's':
case 'sticker':
case 'stiker': {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || (q.m || q).mimetype || ''

    if (/image|video/.test(mime)) {
        if (/video/.test(mime)) {
            if ((q.msg || q).seconds > 15) return reply('Maksimal durasi video 15 detik')
        }

        DinzBotz.sendMessage(m.chat, { react: { text: "⏳", key: m.key } })

        try {
            let media = await DinzBotz.downloadAndSaveMediaMessage(q)
            const Jimp = require('jimp')

            if (/image/.test(mime)) {
                try {
                    let image = await Jimp.read(media)
                    await image.cover(512, 512)
                    await image.writeAsync(media)
                } catch (e) {
                }
            } else if (/video/.test(mime)) {
                try {
                    let filename = media + '.mp4'
                    await fs.renameSync(media, filename)
                    await new Promise((resolve, reject) => {
                        exec(`ffmpeg -i "${filename}" -y -vf "scale=512:512:force_original_aspect_ratio=increase,crop=512:512,setsar=1" -c:a copy "${media}"`, (err) => {
                            if (fs.existsSync(filename)) fs.unlinkSync(filename)
                            if (err) reject(err)
                            resolve()
                        })
                    })
                } catch (e) {
                    console.error(e)
                }
            }

            await DinzBotz.sendImageAsSticker(m.chat, media, m, {
                packname: global.packname || 'Sticker',
                author: global.author || 'DinzBotz'
            })

            if (fs.existsSync(media)) await fs.unlinkSync(media)

        } catch (err) {
            console.log(err)
            reply('Gagal membuat sticker.')
            if (typeof media !== 'undefined' && fs.existsSync(media)) fs.unlinkSync(media)
        }

    } else {
        reply(`Kirim gambar/video dengan caption ${prefix + command}\nAtau reply gambar/video yang sudah ada.`)
    }
}
break

case "brat": {

      if (!text) return m.reply('❌ Masukkan teks untuk membuat stiker.');
      DinzBotz.sendMessage(m.chat, {
        react: {
          text: "⏱️",
          key: m.key,
        }
      })
      try {
        const url = `https://api.hanggts.xyz/imagecreator/brat?text=${encodeURIComponent(text)}`;
        const response = await axios.get(url, {
          responseType: "arraybuffer"
        });

        const {
          Sticker
        } = require('wa-sticker-formatter');
        const sticker = new Sticker(response.data, {
          pack: 'dinzid',
          author: 'yt',
          type: "image",
        });

        const stikerBuffer = await sticker.toBuffer();
        DinzBotz.sendMessage(m.chat, {
          sticker: stikerBuffer
        }, {
          quoted: m
        });

      } catch (err) {
        console.error("❌ Error:", err);
        m.reply("Terjadi kesalahan saat membuat stiker.");
      }
    }
    break
    case "ping": case "os": {
    try {
        const THEME = {
            bg: "#0f1419", bgSecondary: "#1a1f2e", card: "#1e2433", cardHover: "#252b3d",
            primary: "#3b82f6", success: "#10b981", warning: "#f59e0b", danger: "#ef4444",
            purple: "#8b5cf6", cyan: "#06b6d4", pink: "#ec4899", textPrimary: "#f1f5f9",
            textSecondary: "#94a3b8", textTertiary: "#64748b", border: "#2d3548", glow: "rgba(59, 130, 246, 0.2)"
        };

        const formatSize = (bytes) => {
            if (bytes === 0) return '0 B';
            const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
            const i = Math.floor(Math.log(bytes) / Math.log(1024));
            return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
        };

        const formatTime = (seconds) => {
            seconds = Number(seconds);
            const d = Math.floor(seconds / (3600 * 24));
            const h = Math.floor(seconds % (3600 * 24) / 3600);
            const m = Math.floor(seconds % 3600 / 60);
            const s = Math.floor(seconds % 60);
            if (d > 0) return `${d}d ${h}h ${m}m`;
            if (h > 0) return `${h}h ${m}m`;
            return `${m}m ${s}s`;
        };

        function drawBackground(ctx, w, h) {
            const gradient = ctx.createLinearGradient(0, 0, w, h);
            gradient.addColorStop(0, THEME.bg);
            gradient.addColorStop(0.5, THEME.bgSecondary);
            gradient.addColorStop(1, THEME.bg);
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, w, h);
            ctx.globalAlpha = 0.02;
            for (let i = 0; i < 100; i++) {
                const x = Math.random() * w;
                const y = Math.random() * h;
                const size = Math.random() * 2;
                ctx.fillStyle = THEME.textPrimary;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.globalAlpha = 1;
            ctx.strokeStyle = THEME.border;
            ctx.lineWidth = 1;
            for (let i = 0; i < w; i += 50) {
                ctx.globalAlpha = 0.03;
                ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, h); ctx.stroke();
            }
            for (let i = 0; i < h; i += 50) {
                ctx.globalAlpha = 0.03;
                ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(w, i); ctx.stroke();
            }
            ctx.globalAlpha = 1;
        }

        function drawCard(ctx, x, y, w, h, radius) {
            ctx.save();
            ctx.shadowColor = THEME.glow;
            ctx.shadowBlur = 15;
            ctx.beginPath();
            ctx.roundRect(x, y, w, h, radius);
            ctx.fillStyle = THEME.card;
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.strokeStyle = THEME.border;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.restore();
        }

        function drawIcon(ctx, x, y, type, color) {
            ctx.save();
            ctx.strokeStyle = color;
            ctx.fillStyle = color;
            ctx.lineWidth = 2.5;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            switch (type) {
                case 'cpu':
                    ctx.strokeRect(x - 12, y - 12, 24, 24);
                    ctx.fillRect(x - 6, y - 6, 12, 12);
                    ctx.beginPath();
                    ctx.moveTo(x - 12, y - 8); ctx.lineTo(x - 16, y - 8);
                    ctx.moveTo(x - 12, y); ctx.lineTo(x - 16, y);
                    ctx.moveTo(x - 12, y + 8); ctx.lineTo(x - 16, y + 8);
                    ctx.moveTo(x + 12, y - 8); ctx.lineTo(x + 16, y - 8);
                    ctx.moveTo(x + 12, y); ctx.lineTo(x + 16, y);
                    ctx.moveTo(x + 12, y + 8); ctx.lineTo(x + 16, y + 8);
                    ctx.stroke();
                    break;
                case 'memory':
                    for (let i = 0; i < 4; i++) { ctx.strokeRect(x - 10 + i * 6, y - 12, 5, 24); }
                    break;
                case 'disk':
                    ctx.beginPath(); ctx.arc(x, y, 12, 0, Math.PI * 2); ctx.stroke();
                    ctx.beginPath(); ctx.arc(x, y, 8, 0, Math.PI * 2); ctx.stroke();
                    ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill();
                    break;
                case 'network':
                    ctx.beginPath(); ctx.arc(x, y, 12, 0, Math.PI * 2); ctx.stroke();
                    ctx.beginPath(); ctx.moveTo(x, y - 8); ctx.lineTo(x, y + 8);
                    ctx.moveTo(x - 8, y); ctx.lineTo(x + 8, y); ctx.stroke();
                    ctx.beginPath(); ctx.arc(x - 6, y - 6, 2, 0, Math.PI * 2);
                    ctx.arc(x + 6, y - 6, 2, 0, Math.PI * 2);
                    ctx.arc(x - 6, y + 6, 2, 0, Math.PI * 2);
                    ctx.arc(x + 6, y + 6, 2, 0, Math.PI * 2);
                    ctx.fill();
                    break;
                case 'server':
                    for (let i = 0; i < 3; i++) {
                        ctx.strokeRect(x - 12, y - 10 + i * 8, 24, 6);
                        ctx.beginPath(); ctx.arc(x + 8, y - 7 + i * 8, 1.5, 0, Math.PI * 2); ctx.fill();
                    }
                    break;
                case 'clock':
                    ctx.beginPath(); ctx.arc(x, y, 12, 0, Math.PI * 2); ctx.stroke();
                    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y - 8);
                    ctx.moveTo(x, y); ctx.lineTo(x + 6, y); ctx.stroke();
                    break;
            }
            ctx.restore();
        }

        function drawLogo(ctx, x, y, size) {
            ctx.save();
            const gradient = ctx.createLinearGradient(x - size, y - size, x + size, y + size);
            gradient.addColorStop(0, THEME.primary);
            gradient.addColorStop(0.5, THEME.cyan);
            gradient.addColorStop(1, THEME.purple);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.beginPath(); ctx.moveTo(x - size, y); ctx.lineTo(x, y - size); ctx.lineTo(x + size, y); ctx.lineTo(x, y + size); ctx.closePath(); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(x - size / 2, y); ctx.lineTo(x, y - size / 2); ctx.lineTo(x + size / 2, y); ctx.lineTo(x, y + size / 2); ctx.closePath(); ctx.stroke();
            ctx.restore();
        }

        function drawDonutChart(ctx, x, y, radius, lineWidth, percent, color) {
            ctx.save();
            ctx.lineCap = 'round';
            ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.strokeStyle = THEME.bgSecondary; ctx.lineWidth = lineWidth; ctx.stroke();
            const startAngle = -Math.PI / 2;
            const endAngle = startAngle + (Math.PI * 2 * (percent / 100));
            ctx.shadowColor = color; ctx.shadowBlur = 10;
            ctx.beginPath(); ctx.arc(x, y, radius, startAngle, endAngle);
            ctx.strokeStyle = color; ctx.lineWidth = lineWidth; ctx.stroke();
            ctx.shadowBlur = 0;
            ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 28px Arial";
            ctx.textAlign = "center"; ctx.textBaseline = "middle";
            ctx.fillText(`${Math.round(percent)}%`, x, y);
            ctx.restore();
        }

        function drawProgressBar(ctx, x, y, w, h, percent, color, label, value) {
            ctx.fillStyle = THEME.bgSecondary; ctx.fillRect(x, y, w, h);
            const gradient = ctx.createLinearGradient(x, y, x + w, y);
            gradient.addColorStop(0, color); gradient.addColorStop(1, color + 'aa');
            ctx.fillStyle = gradient; ctx.fillRect(x, y, w * (percent / 100), h);
            ctx.strokeStyle = THEME.border; ctx.lineWidth = 1; ctx.strokeRect(x, y, w, h);
            ctx.fillStyle = THEME.textSecondary; ctx.font = "11px Arial"; ctx.textAlign = "left"; ctx.fillText(label, x, y - 6);
            ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 11px Arial"; ctx.textAlign = "right"; ctx.fillText(value, x + w, y - 6);
        }

        function drawStatBox(ctx, x, y, w, h, label, value, color, iconType) {
            drawCard(ctx, x, y, w, h, 12);
            drawIcon(ctx, x + 28, y + 28, iconType, color);
            ctx.fillStyle = THEME.textSecondary; ctx.font = "11px Arial"; ctx.textAlign = "left"; ctx.fillText(label, x + 50, y + 22);
            ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 16px Arial"; ctx.fillText(value, x + 50, y + 40);
        }

        async function renderDashboard(stats) {
            const W = 1200;
            const H = 800;
            const canvas = createCanvas(W, H);
            const ctx = canvas.getContext('2d');

            drawBackground(ctx, W, H);
            drawLogo(ctx, 60, 50, 20);

            ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 32px Arial"; ctx.textAlign = "left"; ctx.fillText("SYSTEM MONITOR", 100, 58);
            ctx.fillStyle = THEME.textSecondary; ctx.font = "13px Arial"; ctx.fillText("Real-time Performance Dashboard", 100, 80);

            const pingStatus = stats.ping < 100 ? THEME.success : stats.ping < 300 ? THEME.warning : THEME.danger;
            ctx.fillStyle = pingStatus; ctx.font = "bold 28px Arial"; ctx.textAlign = "right"; ctx.fillText(`${stats.ping}ms`, W - 50, 50);
            ctx.fillStyle = THEME.textSecondary; ctx.font = "12px Arial"; ctx.fillText("LATENCY", W - 50, 70);

            const gradient = ctx.createLinearGradient(50, 100, W - 50, 100);
            gradient.addColorStop(0, THEME.primary); gradient.addColorStop(0.33, THEME.success); gradient.addColorStop(0.66, THEME.purple); gradient.addColorStop(1, THEME.cyan);
            ctx.strokeStyle = gradient; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(50, 100); ctx.lineTo(W - 50, 100); ctx.stroke();

            const mainY = 130, cardW = 260, cardH = 240, gap = 30;
            const x1 = 50, x2 = x1 + cardW + gap, x3 = x2 + cardW + gap, x4 = x3 + cardW + gap;

            drawCard(ctx, x1, mainY, cardW, cardH, 15);
            drawIcon(ctx, x1 + 30, mainY + 35, 'cpu', THEME.primary);
            ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 18px Arial"; ctx.textAlign = "left"; ctx.fillText("CPU USAGE", x1 + 55, mainY + 40);
            ctx.fillStyle = THEME.textSecondary; ctx.font = "11px Arial"; ctx.fillText(`${stats.cpuCores} Cores @ ${stats.cpuSpeed} MHz`, x1 + 55, mainY + 58);
            drawDonutChart(ctx, x1 + cardW / 2, mainY + 140, 50, 12, stats.cpuLoad, THEME.primary);
            ctx.fillStyle = THEME.textTertiary; ctx.font = "10px Arial"; ctx.textAlign = "center"; ctx.fillText(stats.cpuModel.substring(0, 32), x1 + cardW / 2, mainY + 215);

            drawCard(ctx, x2, mainY, cardW, cardH, 15);
            drawIcon(ctx, x2 + 30, mainY + 35, 'memory', THEME.success);
            ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 18px Arial"; ctx.textAlign = "left"; ctx.fillText("MEMORY", x2 + 55, mainY + 40);
            ctx.fillStyle = THEME.textSecondary; ctx.font = "11px Arial"; ctx.fillText(`Total: ${formatSize(stats.ramTotal)}`, x2 + 55, mainY + 58);
            const ramPercent = (stats.ramUsed / stats.ramTotal) * 100;
            drawDonutChart(ctx, x2 + cardW / 2, mainY + 140, 50, 12, ramPercent, THEME.success);
            ctx.fillStyle = THEME.textTertiary; ctx.font = "11px Arial"; ctx.textAlign = "center"; ctx.fillText(`${formatSize(stats.ramUsed)} Used`, x2 + cardW / 2, mainY + 205); ctx.fillText(`${formatSize(stats.ramTotal - stats.ramUsed)} Free`, x2 + cardW / 2, mainY + 220);

            drawCard(ctx, x3, mainY, cardW, cardH, 15);
            drawIcon(ctx, x3 + 30, mainY + 35, 'disk', THEME.purple);
            ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 18px Arial"; ctx.textAlign = "left"; ctx.fillText("STORAGE", x3 + 55, mainY + 40);
            ctx.fillStyle = THEME.textSecondary; ctx.font = "11px Arial"; ctx.fillText(`Total: ${formatSize(stats.diskTotal)}`, x3 + 55, mainY + 58);
            let diskPercent = stats.diskTotal > 0 ? (stats.diskUsed / stats.diskTotal) * 100 : 0;
            drawDonutChart(ctx, x3 + cardW / 2, mainY + 140, 50, 12, diskPercent, THEME.purple);
            ctx.fillStyle = THEME.textTertiary; ctx.font = "11px Arial"; ctx.textAlign = "center"; ctx.fillText(`${formatSize(stats.diskUsed)} Used`, x3 + cardW / 2, mainY + 205); ctx.fillText(`${formatSize(stats.diskTotal - stats.diskUsed)} Free`, x3 + cardW / 2, mainY + 220);

            drawCard(ctx, x4, mainY, cardW, cardH, 15);
            drawIcon(ctx, x4 + 30, mainY + 35, 'network', THEME.cyan);
            ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 18px Arial"; ctx.textAlign = "left"; ctx.fillText("NETWORK", x4 + 55, mainY + 40);
            ctx.fillStyle = THEME.textSecondary; ctx.font = "11px Arial"; ctx.fillText(`Interface: ${stats.networkInterface}`, x4 + 55, mainY + 58);
            ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 13px Arial"; ctx.textAlign = "left"; ctx.fillText("RX (Download)", x4 + 30, mainY + 95);
            ctx.fillStyle = THEME.cyan; ctx.font = "bold 20px Arial"; ctx.fillText(formatSize(stats.networkRx), x4 + 30, mainY + 120);
            ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 13px Arial"; ctx.fillText("TX (Upload)", x4 + 30, mainY + 155);
            ctx.fillStyle = THEME.pink; ctx.font = "bold 20px Arial"; ctx.fillText(formatSize(stats.networkTx), x4 + 30, mainY + 180);

            const statsY = 400, statW = 175, statH = 70, statGap = 20;
            drawStatBox(ctx, 50, statsY, statW, statH, "HOSTNAME", stats.hostname.substring(0, 15), THEME.primary, 'server');
            drawStatBox(ctx, 50 + (statW + statGap), statsY, statW, statH, "PLATFORM", `${stats.platform} (${stats.arch})`, THEME.success, 'server');
            drawStatBox(ctx, 50 + (statW + statGap) * 2, statsY, statW, statH, "BOT UPTIME", stats.uptimeBot, THEME.purple, 'clock');
            drawStatBox(ctx, 50 + (statW + statGap) * 3, statsY, statW, statH, "SERVER UPTIME", stats.uptimeServer, THEME.warning, 'clock');
            drawStatBox(ctx, 50 + (statW + statGap) * 4, statsY, statW, statH, "NODE.JS", stats.nodeVersion, THEME.cyan, 'server');

            const perfY = 500, perfH = 250, perfW = W - 100;
            drawCard(ctx, 50, perfY, perfW, perfH, 15);
            ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 20px Arial"; ctx.textAlign = "left"; ctx.fillText("SYSTEM PERFORMANCE", 75, perfY + 35);
            ctx.fillStyle = THEME.textSecondary; ctx.font = "12px Arial"; ctx.fillText("Real-time resource monitoring", 75, perfY + 55);

            const barY = perfY + 85, barW = 500, barH = 18, barGap = 35;
            drawProgressBar(ctx, 75, barY, barW, barH, stats.cpuLoad, THEME.primary, "CPU Load", `${stats.cpuLoad}%`);
            drawProgressBar(ctx, 75, barY + barGap, barW, barH, ramPercent, THEME.success, "Memory Usage", `${Math.round(ramPercent)}%`);
            drawProgressBar(ctx, 75, barY + barGap * 2, barW, barH, diskPercent, THEME.purple, "Disk Usage", `${Math.round(diskPercent)}%`);
            drawProgressBar(ctx, 75, barY + barGap * 3, barW, barH, Math.min(100, (stats.ping / 500) * 100), pingStatus, "Network Latency", `${stats.ping}ms`);

            const infoX = 620, infoStartY = perfY + 85, infoLineHeight = 28;
            let infoY = infoStartY;
            ctx.font = "13px Arial"; ctx.textAlign = "left";
            const drawInfoLine = (label, value) => {
                ctx.fillStyle = THEME.textSecondary; ctx.fillText(label, infoX, infoY);
                ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 13px Arial"; ctx.fillText(value, infoX + 150, infoY);
                ctx.font = "13px Arial"; infoY += infoLineHeight;
            };
            drawInfoLine("OS Release", stats.release);
            drawInfoLine("CPU Cores", `${stats.cpuCores} Cores`);
            drawInfoLine("CPU Speed", `${stats.cpuSpeed} MHz`);
            drawInfoLine("Total Memory", formatSize(stats.ramTotal));
            drawInfoLine("Free Memory", formatSize(stats.ramTotal - stats.ramUsed));
            ctx.fillStyle = THEME.textTertiary; ctx.font = "10px Arial"; ctx.textAlign = "center"; ctx.fillText(`Dashboard Generated: ${new Date().toLocaleString()}`, W / 2, H - 20);
            return canvas.toBuffer('image/png');
        }

        function getNetworkStats() {
            try {
                const interfaces = os.networkInterfaces();
                let totalRx = 0, totalTx = 0, activeInterface = 'N/A', ip = 'N/A';
                for (const [name, addrs] of Object.entries(interfaces)) {
                    if (name.toLowerCase().includes('lo')) continue;
                    for (const addr of addrs) {
                        if (addr.family === 'IPv4' && !addr.internal) { activeInterface = name; ip = addr.address; break; }
                    }
                }
                try {
                    const netstat = execSync("cat /proc/net/dev 2>/dev/null || echo ''").toString();
                    const lines = netstat.split('\n');
                    for (const line of lines) {
                        if (line.includes(':') && !line.includes('lo:')) {
                            const parts = line.trim().split(/\s+/);
                            if (parts.length >= 10) { totalRx += parseInt(parts[1]) || 0; totalTx += parseInt(parts[9]) || 0; }
                        }
                    }
                } catch (e) {}
                return { totalRx, totalTx, activeInterface, ip };
            } catch (e) {
                return { totalRx: 0, totalTx: 0, activeInterface: 'N/A', ip: 'N/A' };
            }
        }

        const start = performance.now();
        await new Promise(resolve => setTimeout(resolve, 10));
        const end = performance.now();
        const latency = (end - start).toFixed(2);

        const cpus = os.cpus();
        const totalMem = os.totalmem();
        const freeMem = os.freemem();
        const loadAvg = os.loadavg();
        const cpuPercent = Math.min(100, (loadAvg[0] * 100) / cpus.length).toFixed(1);

        let diskTotal = 0, diskUsed = 0;
        try {
            const df = execSync("df -k --output=size,used / 2>/dev/null").toString();
            const lines = df.trim().split("\n");
            if (lines.length > 1) {
                const [total, used] = lines[1].trim().split(/\s+/).map(Number);
                diskTotal = total * 1024;
                diskUsed = used * 1024;
            }
        } catch (e) {}

        const networkStats = getNetworkStats();

        const stats = {
            ping: latency,
            hostname: os.hostname(),
            platform: os.platform(),
            arch: os.arch(),
            release: os.release(),
            nodeVersion: process.version,
            uptimeBot: formatTime(process.uptime()),
            uptimeServer: formatTime(os.uptime()),
            cpuModel: cpus[0].model.trim(),
            cpuSpeed: cpus[0].speed,
            cpuCores: cpus.length,
            cpuLoad: cpuPercent,
            ramTotal: totalMem,
            ramUsed: totalMem - freeMem,
            diskTotal: diskTotal,
            diskUsed: diskUsed,
            networkRx: networkStats.totalRx,
            networkTx: networkStats.totalTx,
            networkInterface: networkStats.activeInterface,
            networkIP: networkStats.ip
        };

        const imageBuffer = await renderDashboard(stats);

        await DinzBotz.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*SERVER - INFORMATION 🔴*\n\n` +
                `- Latency: ${latency}ms\n` +
                `- CPU: ${stats.cpuLoad}%\n` +
                `- RAM: ${formatSize(stats.ramUsed)} / ${formatSize(stats.ramTotal)}\n` +
                `- Disk: ${formatSize(stats.diskUsed)} / ${formatSize(stats.diskTotal)}\n` +
                `- Network: ↓${formatSize(stats.networkRx)} ↑${formatSize(stats.networkTx)}`
        }, {
            quoted: m
        });

    } catch (e) {
        console.error(e);
        m.reply(`Error: ${e.message}`);
    }
}
break;
case 'ttaudio':
case 'tiktokmusic':
case 'tiktokaudio':
case 'dlaudiotiktok': {
  if (!q) return reply(`Contoh: ${prefix + command} https://vt.tiktok.com/ZS5yReYqE/`)

   DinzBotz.sendMessage(m.chat, {
    react: {
      text: "🎵",
      key: m.key
    }
  })

  try {
    const apiUrl = `https://api.nekolabs.web.id/downloader/tiktok?url=${encodeURIComponent(!q)}`
    const response = await fetch(apiUrl)
    const json = await response.json()

    if (!json.success || !json.result) {
       DinzBotz.sendMessage(m.chat, {
        react: {
          text: "❌",
          key: m.key
        }
      })
      return reply('Gagal mengambil audio TikTok.')
    }

    const data = json.result

    await DinzBotz.sendMessage(m.chat, {
      audio: {
        url: data.musicUrl
      },
      mimetype: 'audio/mpeg',
      fileName: `${data.music_info.title}.mp3`,
      contextInfo: {
        externalAdReply: {
          title: data.music_info.title,
          body: `Artist: ${data.music_info.author}`,
          mediaType: 1,
          renderLargerThumbnail: true,
          thumbnailUrl: data.cover,
          sourceUrl: args[0]
        }
      }
    }, {
      quoted: m
    })

    DinzBotz.sendMessage(m.chat, {
      react: {
        text: "✅",
        key: m.key
      }
    })

  } catch (error) {
    console.error(error)
    reply('Terjadi kesalahan saat mengunduh.')
  }
}
break
case 'tt':
case 'tiktok': {
    let momok = "`𝗧 𝗜 𝗞 𝗧 𝗢 𝗞 - 𝗗 𝗢 𝗪 𝗡 𝗟 𝗢 𝗔 𝗗`"
    if (!q) return reply("Mana link tiktok nya?")
    if (!q.includes("tiktok.com")) return reply("Link tidak valid, pastikan link tiktok!")
    const { tiktokDl } = require('../lib/scrape/scraper1');
    await tiktokDl(q).then(async (result) => {
        await DinzBotz.sendMessage(m.chat, { react: { text: '🕖', key: m.key } })

        if (!result.status) return m.reply("Error!")

        if (result.durations == 0 && result.duration == "0 Seconds") {
            let araara = new Array()
            let urutan = 0

            for (let a of result.data) {
                let imgsc = await prepareWAMessageMedia({ image: { url: `${a.url}` } }, { upload: DinzBotz.waUploadToServer })
                await araara.push({
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: `Foto Slide Ke *${urutan += 1}*`,
                        hasMediaAttachment: true,
                        ...imgsc
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [{
                            "name": "cta_url",
                            "buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
                        }]
                    })
                })
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
            }, { userJid: m.sender, quoted: m })

            await DinzBotz.relayMessage(m.chat, msgii.message, {
                messageId: msgii.key.id
            })

        } else {
            let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")

            await DinzBotz.sendMessage(m.chat, {
                video: { url: urlVid.url },
                caption: momok,
                footer: `\n${global.botname}`,
                buttons: [
                    {
                        buttonId: `.ttaudio ${text}`,
                        buttonText: {
                            displayText: "sᴏᴜɴᴅ 🔊"
                        }
                    },
                ],
                viewOnce: true,
            }, {
                quoted: m
            });
        }

    }).catch(e => console.log(e))

    await DinzBotz.sendMessage(m.chat, { react: { text: '🐬', key: m.key } })
}
break
case 'twitterdl': {
    if (!q) return m.reply('https://x.com/Indomielovers/status/1917826490068279736')
    m.reply('Tunggu sebentar, sedang memproses...')

    try {
        const axios = require('axios')
        const cheerio = require('cheerio')

        const res = await axios.post('https://twmate.com/', new URLSearchParams({
            page: q,
            ftype: 'all',
            ajax: '1'
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Accept': '*/*',
                'X-Requested-With': 'XMLHttpRequest',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36',
                'Referer': 'https://twmate.com/',
            }
        })

        const $ = cheerio.load(res.data)
        const videoLinks = []

        $('.btn-dl').each((index, element) => {
            const quality = $(element).parent().prev().text().trim()
            const downloadUrl = $(element).attr('href')
            if (downloadUrl.includes('.mp4')) {
                videoLinks.push({ quality, downloadUrl })
            }
        })

        if (videoLinks.length === 0) return m.reply('Gagal mengambil video. Pastikan URL benar dan video publik.')

        const best = videoLinks[0]
        let caption = `*Download Twitter/X*\n\n`
        caption += `*Quality:* ${best.quality}\n`
        caption += `*Source:* ${q}\n\n`
        caption += `*Link Alternatif:*\n`

        videoLinks.forEach((v, i) => {
            caption += `${i + 1}. ${v.quality}: ${v.downloadUrl}\n`
        })

        await DinzBotz.sendMessage(m.chat, {
            video: { url: best.downloadUrl },
            caption: caption.trim()
        }, { quoted: m })

    } catch (e) {
        console.error(e)
        m.reply('Terjadi kesalahan saat memproses video.')
    }
}
break
//ownermenu
case 'addsewa':
case 'sewa': {
    if (!DinzTheCreator) return m.reply('Khusus Owner!');
    if (!m.isGroup) return m.reply('Harus di dalam grup!');
    if (!args[0]) return m.reply(`Contoh: ${prefix}sewa 30`);

    let db = readDbSewa();
    if (checkIsSewa(m.chat)) return m.reply('⚠️ Grup ini sudah dalam masa sewa aktif!');

    // Hitung Expired
    let durationDays = parseInt(args[0]);
    let now = Date.now();
    let expiredTime = now + (durationDays * 24 * 60 * 60 * 1000);

    db.push({
        id: m.chat,
        expired: expiredTime,
        date: new Date().toLocaleDateString()
    });
    writeDbSewa(db);

    // Caption Struk
    let txt = `👑 *PREMIUM ACTIVATED* 👑\n\n`;
    txt += `Berhasil menambahkan masa sewa untuk grup ini.\n`;
    txt += `─────────────────────\n`;
    txt += `⏱️ *Durasi:* ${durationDays} Hari\n`;
    txt += `📅 *Start:* ${new Date(now).toLocaleDateString()}\n`;
    txt += `📉 *Expired:* ${new Date(expiredTime).toLocaleDateString()}\n`;
    txt += `─────────────────────\n`;
    txt += `_Bot akan aktif 24 Jam melayani grup ini!_`;

    m.reply(txt, {
        contextInfo: {
            externalAdReply: {
                title: "✅ SUCCESS ADD SEWA",
                body: "Premium Features Unlocked",
                thumbnailUrl: "https://cdn.dinzid.biz.id/yzz9.jpg",
                mediaType: 1, renderLargerThumbnail: true
            }
        }
    });
}
break;
case 'ceksewa': {
    if (!m.isGroup) return m.reply('Khusus Grup!');
    
    let db = readDbSewa();
    let data = db.find(x => x.id === m.chat);

    if (!data) {
        return m.reply(`❌ *FREE TRIAL MODE*\n\nGrup ini belum menyewa bot secara premium.\nBot dapat keluar sewaktu-waktu.\n\n_Hubungi Owner untuk sewa!_`);
    }

    let remaining = data.expired - Date.now();
    let sisaWaktu = msToDate(remaining); // Panggil Helper Waktu Detail

    let txt = `📊 *RENTAL STATUS* 📊\n\n`;
    txt += `Informasi masa aktif bot di grup ini:\n`;
    txt += `─────────────────────\n`;
    txt += `⏳ *Sisa Waktu:* ${sisaWaktu}\n`;
    txt += `📆 *Tanggal Join:* ${data.date}\n`;
    txt += `📉 *Jatuh Tempo:* ${new Date(data.expired).toLocaleDateString()} ${new Date(data.expired).toLocaleTimeString()}\n`;
    txt += `─────────────────────\n`;
    txt += `_Jangan lupa perpanjang sebelum habis ya!_`;

    await DinzBotz.sendMessage(m.chat, { 
        text: txt,
        contextInfo: {
            externalAdReply: {
                title: "💎 PREMIUM GROUP",
                body: `Expires in: ${sisaWaktu}`,
                thumbnailUrl: "https://cdn.dinzid.biz.id/yzz9.jpg",
                mediaType: 1, renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
}
break;
case 'joinsewa': 
case 'sewalink': {
    if (!DinzTheCreator) return m.reply('Khusus Owner!');
    // Cek input
    if (!args[0] || !args[1]) return m.reply(`⚠️ Format Salah!\n\nContoh:\n${prefix}joinsewa <link> 30d (Hari)\n${prefix}joinsewa <link> 60m (Menit)`);

    // 1. Ambil Kode Link (Pakai Regex biar akurat)
    let code = args[0].match(/chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i)?.[1];
    if (!code) return m.reply('❌ Link tidak valid!');

    // 2. Hitung Durasi (Fleksibel Hari/Menit)
    let input = args[1];
    let durasi = parseInt(input);
    let unit = input.toLowerCase().endsWith('m') ? 'Menit' : 'Hari';
    let multiplier = (unit === 'Menit') ? 60000 : 86400000;

    m.reply('⏳ _Sedang memproses join... Mohon tunggu 5 detik..._');

    try {
        // 3. EKSEKUSI JOIN
        // Kita tangkap error spesifik join di sini
        let res;
        try {
            res = await DinzBotz.groupAcceptInvite(code);
        } catch (e) {
            console.log(e);
            return m.reply('❌ Gagal Join! Bot mungkin diblokir dari grup itu atau Link sudah di-reset admin.');
        }

        // Kalau res kosong/undefined, berhenti
        if (!res) return m.reply('❌ Gagal Join (Response kosong).');

        // 4. SIMPAN DATABASE (Cepat)
        let db = readDbSewa();
        if (db.some(x => x.id === res)) {
            return m.reply(`⚠️ Bot berhasil masuk, TAPI grup ini sudah terdaftar sewa sebelumnya.`);
        }

        db.push({
            id: res,
            expired: Date.now() + (durasi * multiplier),
            date: new Date().toLocaleDateString()
        });
        writeDbSewa(db);


        await new Promise(resolve => setTimeout(resolve, 5000));

  
        if (DinzBotz.ws.isOpen) {
            let welcomeTxt = `✅ *BOT CONNECTED* ✅\n\n`;
            welcomeTxt += `Bot berhasil masuk via Link Sewa.\n`;
            welcomeTxt += `─────────────────────\n`;
            welcomeTxt += `⏱️ *Durasi:* ${durasi} ${unit}\n`;
            welcomeTxt += `📉 *Expired:* ${new Date(Date.now() + (durasi * multiplier)).toLocaleString()}\n`;
            welcomeTxt += `─────────────────────\n`;
            welcomeTxt += `_Bot akan otomatis keluar jika expired._`;

            await DinzBotz.sendMessage(res, {
                text: welcomeTxt,
                contextInfo: {
                    externalAdReply: {
                        title: "PREMIUM RENTAL JOIN",
                        body: "Active Now",
                        thumbnailUrl: "https://cdn.dinzid.biz.id/yzz9.jpg",
                        mediaType: 1, renderLargerThumbnail: true
                    }
                }
            });

            // Lapor ke Owner
            reply(`✅ *SUKSES!*\nID: ${res}\nDurasi: ${durasi} ${unit}`);
        } else {
            reply(`⚠️ Berhasil Join & Simpan Database, tapi gagal kirim pesan sambutan (Koneksi tidak stabil).`);
        }

    } catch (e) {
        console.log(e);
        m.reply(`❌ Error System: ${e}`);
    }
}
break;
//--- case game
case 'tebakkata': {
      const gamecek = await cekgame(m.chat)
      if (gamecek) return

      let anu = await fetchJson('https://raw.githubusercontent.com/ditss-dev/database/main/game/tebakkata.json')
      let result = await pickRandom(anu)
      console.log("Jawaban: " + result.jawaban)
      tebakkata[m.chat] = [
        await DinzBotz.sendMessage(m.chat, {
          image: fs.readFileSync('./media/gamemenu.jpg'),
          caption: `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
        }, {
          quoted: m
        }), result, 250,
        setTimeout(() => {
          if (tebakkata[m.chat]) {
            waktuHabis(result.jawaban)
            delete tebakkata[m.chat]
          }
        }, 120000)
      ]
    }
    break


  default:
 }


}

let file = require.resolve(__filename)
 fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log('===================================================');
	console.log(chalk.red(`    New ${__filename}`))
	delete require.cache[file]
	require(file)
})