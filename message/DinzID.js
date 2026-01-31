const SETTING = require('../connection/setting')
require('../lib/listmenu')
const keywords = require('../lib/validator/allKeywords')
const similarity = require('similarity');
const { createGrindCanvas, createAquariumCanvas,createWorkCanvas, createBankCanvas, createGardenCanvas, createLeaderboardCanvas } = require('../library/canvasGrind')
const { createDungeonCanvas } = require('../library/canvasDungeon');
const { createCraftCanvas } = require('../library/canvasCraft')
const { createMeCanvas } = require('../library/canvasMe')
const { makeCard } = require('../library/canvasdaftar')
const TicTacToe = require('../library/tictactoe')
const canvafy = require('canvafy')
let modul = SETTING['modul'];
let getreq = SETTING['file'];
const chalk = modul['chalk'];
const crypto = require('crypto');
const fs = modul['fs'];
const JsConfuser = require("js-confuser");
const fetch = require('node-fetch'); 
const FormData = require('form-data');
const util = modul['util'];
const genshindb = require('genshin-db')
const https = modul['https'];
const os = require('os');
const axios = modul['axios'];
const ytsr = modul['ytsr'];
const yts = require('yt-search');
const { spawn, exec, execSync } = modul['child'];
const { downloadContentFromMessage, WA_DEFAULT_EPHEMERAL, getLastMessageInChat, MessageType, generateWAMessageFromContent, prepareWAMessageMedia, proto, generateWAMessage,generateWAMessageContent, areJidsSameUser} = modul['baileys'];
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
const datagc = JSON.parse(fs.readFileSync("./database/reseller.json"))
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
const userSpam = new Map()
const userSpamWarning = new Map()
const pathSpam = './database/antispam.json'
if (!require('fs').existsSync(pathSpam)) {
const defaultData = {
status: false,
mode: 'kick',
filter: 'all',
max_msg: 5,
cooldown: 5000,
max_warn: 3
}
require('fs').writeFileSync(pathSpam, JSON.stringify(defaultData, null, 2))
}
let dbSpam = JSON.parse(require('fs').readFileSync(pathSpam))
if (dbSpam.mode === undefined) {
dbSpam.mode = 'kick'
dbSpam.filter = 'all'
dbSpam.max_msg = 5
dbSpam.cooldown = 5000
dbSpam.max_warn = 3
require('fs').writeFileSync(pathSpam, JSON.stringify(dbSpam, null, 2))
}
const pathStikCmd = './database/sticker_cmd.json'
if (!require('fs').existsSync(pathStikCmd)) {
require('fs').writeFileSync(pathStikCmd, JSON.stringify({}, null, 2))}
let dbStikCmd = JSON.parse(require('fs').readFileSync(pathStikCmd))
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
  clan: {},
  others: {},
  users: {},
  chats: {},
  settings: {},
  ...(global.db || {})
}
global.limit_awal = 20
const tebakgambar = {}
const tebakhero = {}
const tebakff = {}
const tebakjkt48 = {}
const tebakml = {}
const tebakkata = {}
const asahotak = {}
const lengkapikalimat = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const tebakkimia = {}
const tebaklirik = {}
const tebaktebakan = {}
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
let tebakkimia1 = []
let tebakasahotak = []
let tebaksiapakahaku = []
let tebaksusunkata = []
let tebaktekateki = []
let vote = db.others.vote = []
//SETUP
module.exports = async(m, DinzBotz, from, chatUpdate, store) => { 
if (m.xtype === 'stickerMessage' && m.msg.fileSha256) {
let stickerHash = m.msg.fileSha256.toString('base64')
if (dbStikCmd[stickerHash]) {
let cmdText = dbStikCmd[stickerHash].text
m.xtype = 'conversation'
m.mtype = 'conversation' 
m.body = cmdText
m.text = cmdText
m.msg = { conversation: cmdText }
m.message = { conversation: cmdText } 
console.log(`[STIK-CMD] Mengubah stiker menjadi perintah: ${cmdText}`)
}
}
// ---------------------------------------


if (from && from.endsWith('@lid')) {
from = m.chat ? m.chat : from.replace(/@lid$/, '@s.whatsapp.net');
}
if (!m.isGroup && from && from.endsWith('@lid')) from = m.chat
   const isGrouP = from.endsWith('@g.us')
   const sender = isGrouP ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
   const pushname = m.pushName || "No Name"
   const CMD = (m.xtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.xtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.xtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.xtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.xtype == 'buttonsResponseMessage') && m.message.buttonsResponseMessage.selectedButtonId ? m.message.buttonsResponseMessage.selectedButtonId : (m.xtype == 'listResponseMessage') && m.message.listResponseMessage.singleSelectReply.selectedRowId? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.xtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.xtype === 'interactiveResponseMessage') ? (JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id) : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
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
let chatmessage = (m.xtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.xtype == 'imageMessage') ? m.message.imageMessage.caption : (m.xtype == 'videoMessage') ? m.message.videoMessage.caption : (m.xtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.xtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.xtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.xtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.xtype === 'interactiveResponseMessage') ? (JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id) : (m.xtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

let ordermessage = (m.xtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.xtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.xtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.xtype == 'extendedTextMessage') && m.message.extendedTextMessage.text.startsWith(prefix) ? m.message.extendedTextMessage.text : (m.xtype == 'buttonsResponseMessage') && m.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) ? m.message.buttonsResponseMessage.selectedButtonId : (m.xtype == 'listResponseMessage') && m.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.xtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId.startsWith(prefix) ? m.message.templateButtonReplyMessage.selectedId : (m.xtype === 'interactiveResponseMessage') ? (JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id) : ''
   var budy = (typeof m.text == 'string' ? m.text : '')
   let args = ordermessage.trim().split(/ +/).slice(1)
   const order = ordermessage.slice(0).trim().split(/ +/).shift().toLowerCase()	   
   let isCmd = ordermessage.startsWith(prefix)
   let command = isCmd ? ordermessage.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
   let text = q = args.join(' ')
   const fatkuns = (m.quoted || m)
   const quoted = (fatkuns.xtyp == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.xtyp == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.xtyp == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m   
   const content = JSON.stringify(m.message)
   const orderPlugins = isCmd ? ordermessage.slice(1).trim().split(/ +/).shift().toLowerCase() : null
   const isGroup = from.endsWith(keywords[0]['chats'][1])
   const isChanel = from.endsWith('@newsletter')
   const getGroupAdmins = (participants) =>{
    return participants
    .filter(u => u.admin === 'admin' || u.admin === 'superadmin')
    .map(u => u.jid);};
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
  const getNumber = jid => (jid || '').split('@')[0]
  const senderNumber = getNumber(m.sender)
  const messageContent = ordermessage || m.xtype;
  const formattedContent = formatContent(messageContent);
  const mess = { wait: '⏳ Sedang diproses, mohon tunggu...'};
  const isGrupPrem = datagc.includes(m.chat)
  const shouldExit = true
//----- configuration user ---//
    try {
      const isNumber = x => typeof x === 'number' && !isNaN(x)
      const user = global.db.users[m.sender]
      if (typeof user !== 'object') global.db.users[m.sender] = {}
      const chats = global.db.chats[m.chat]
      if (typeof chats !== 'object') global.db.chats[m.chat] = {}

      if (chats) {
      if (!('airdrop' in chats)) chats.airdrop = true
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
        if (!('clan' in user)) user.clan = ''
        if (!('clan_rank' in user)) user.clan_rank = '' 
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
        if (!isNumber(user.limit)) user.limit = 20 
        if (!('afkReason' in user)) user.afkReason = ''
        if (!("premium" in user)) user.premium = false
        if (!('autoMikasa' in user)) user.autoMikasa = false
        if (!('autoaiset' in user)) user.autoaiset = false
        if (!('caiSesi' in user)) user.caiSesi = ''
        if (!('nama' in user)) user.nama = `${pushname}`;
      } else global.db.users[m.sender] = {
        clan: '',
        clan_rank: '',
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
      const setting = db.settings[botNumber]
      if (typeof setting !== 'object') db.settings[botNumber] = {}
      if (setting) {
        if (!isNumber(setting.status)) setting.status = 0
        if (!('autobio' in setting)) setting.autobio = false
        if (!('modelimit' in setting)) setting.modelimit = true
        if (!('modedaftar' in setting)) setting.modedaftar = false
      } else global.db.settings[botNumber] = {
        autobio: false,
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
async function fetchCharacter(name) {
      try {
        const database = await fetch('https://raw.githubusercontent.com/XM4ZE/DATABASE/master/genshin/maximus-gibuild.json')
          .then(res => res.json());
        return Object.values(database).find(char => char.name === name);
      } catch (error) {
        console.error('Fetch error:', error);
        throw error;
      }
    }
const uploaden = async (path) => {
    try {
        const FormData = require('form-data')
        const fs = require('fs')
        const axios = require('axios')
        
        let fd = new FormData()
        fd.append('file', fs.createReadStream(path))
        
        let res = await axios.post('https://dinzapi-sweager.vercel.app/api/cdn/dinzid', fd, {
            headers: {
                ...fd.getHeaders(),
                'accept': 'application/json'
            }
        })
        
        return res.data.data.url
    } catch (e) {
        console.error(e)
        return null
    }
}
//--- Func Antilink
const settingsPath = './database/bot_settings.json'
if (!fs.existsSync(settingsPath)) {
    fs.writeFileSync(settingsPath, JSON.stringify({ mute_all: false, whitelist_groups: [] }, null, 2))
}
let settingsBot = JSON.parse(fs.readFileSync(settingsPath))

if (isGroup) {
    if (settingsBot.mute_all) {
        let isWhitelisted = settingsBot.whitelist_groups.includes(from)
        if (!isWhitelisted && !isOwner) return 
    }
}
const antilinkFile = './database/antilink.json'
if (!fs.existsSync(antilinkFile)) fs.writeFileSync(antilinkFile, JSON.stringify({}, null, 2))
let antilinkk = JSON.parse(fs.readFileSync(antilinkFile))

function saveantilinkk() {
  fs.writeFileSync(antilinkFile, JSON.stringify(antilinkk, null, 2))
}

if (m.isGroup && !m.key.fromMe) {
    if (!antilinkk[m.chat]) {
        antilinkk[m.chat] = {
            wa: false, tt: false, ig: false, fb: false, all: false, 
            tagsw: false, image: false, video: false, sticker: false, nsfw: false,
            antibule: false, antitoxic: false,
            action: 'delete', custom: [], warnings: {},
            msg_admin: 'Admin mah bebas bos, lanjutkeun! 😎',
            msg_warn: '⚠️ @user Dilarang mengirim link/media terlarang di sini!',
            msg_kick: '⛔ @user Melanggar aturan 3x, selamat tinggal! 👋'
        }
    }

    const setting = antilinkk[m.chat]
    const sender = m.sender
    const chatmessage = (m.text || '').toLowerCase()
    
    const type = m.xtype
    const msg = m.msg || m.message?.[type]
    const mime = (msg || {}).mimetype || ''
    const isViewOnce = type === 'viewOnceMessage' || type === 'viewOnceMessageV2'

    if (!setting.msg_admin) setting.msg_admin = 'Admin mah bebas bos, lanjutkeun! 😎'
    if (!setting.msg_warn) setting.msg_warn = '⚠️ @user Dilarang mengirim link/media terlarang di sini!'
    if (!setting.msg_kick) setting.msg_kick = '⛔ @user Melanggar aturan 3x, selamat tinggal! 👋'
    if (setting.nsfw === undefined) setting.nsfw = false
    if (setting.antibule === undefined) setting.antibule = false
    if (setting.antitoxic === undefined) setting.antitoxic = false

    let isViolation = false
    let typeDetected = ''

    if (setting.antibule && !sender.startsWith('62')) {
        isViolation = true; typeDetected = 'Nomor Luar Negeri (Anti-Bule)'
    }

    if (!isViolation && setting.antitoxic) {
        const toxicList = ['anjing', 'babi', 'kunyuk', 'bajingan', 'asu', 'bangsat', 'kampret', 'kontol', 'memek', 'ngentot', 'goblok', 'tolol', 'bego']
        if (toxicList.some(word => chatmessage.includes(word))) {
            isViolation = true; typeDetected = 'Kata Kasar (Toxic)'
        }
    }

    if (!isViolation && setting.tagsw && m.message && m.message.groupStatusMentionMessage) {
        isViolation = true; typeDetected = 'Tag Status (SW)'
    }

    if (!isViolation) {
        if (setting.sticker && (type === 'stickerMessage' || mime.includes('webp'))) {
            isViolation = true; typeDetected = 'Sticker'
        } else if (setting.video && (type === 'videoMessage' || mime.includes('video') || (isViewOnce && mime.includes('video')))) {
            isViolation = true; typeDetected = 'Video'
        } else if (setting.image && (type === 'imageMessage' || mime.includes('image') || (isViewOnce && mime.includes('image')))) {
            isViolation = true; typeDetected = 'Gambar/Foto'
        }
    }

    if (!isViolation && setting.nsfw && (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || mime.includes('image') || mime.includes('video') || mime.includes('webp'))) {
    try {
        const axios = require('axios')
        const FormData = require('form-data')
        const fs = require('fs')
        const { exec } = require('child_process')

        let media = await DinzBotz.downloadAndSaveMediaMessage(m)
        let fileToCheck = media

        if (type === 'videoMessage' || type === 'stickerMessage' || mime.includes('video') || mime.includes('webp')) {
            let outputJPG = media + '.jpg'
            
            await new Promise((resolve, reject) => {
                exec(`ffmpeg -i ${media} -vframes 1 -f image2 ${outputJPG}`, (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        fileToCheck = outputJPG
                        resolve()
                    }
                })
            })
        }

        if (fs.existsSync(fileToCheck)) {
            let buffer = fs.readFileSync(fileToCheck)
            const form = new FormData()
            form.append('file', buffer, 'image.jpg')
            
            const { data } = await axios.post('https://www.nyckel.com/v1/functions/o2f0jzcdyut2qxhu/invoke', form, {
                headers: { ...form.getHeaders() }
            })

            if (data.labelName) {
                let label = data.labelName.toLowerCase()
                if (label.includes('nsfw') || label.includes('porn') || label.includes('hentai') || label.includes('sexy') || label.includes('nude')) {
                    isViolation = true
                    typeDetected = `Konten NSFW (${data.labelName})`
                }
            }

            fs.unlinkSync(fileToCheck)
            if (fileToCheck !== media && fs.existsSync(media)) fs.unlinkSync(media)
        }

    } catch (e) {
        console.log(e)
        if (typeof media !== 'undefined' && fs.existsSync(media)) fs.unlinkSync(media)
    }
}


    if (!isViolation && chatmessage.length > 0) {
        if (setting.wa && (chatmessage.includes('chat.whatsapp.com') || chatmessage.includes('wa.me'))) { isViolation = true; typeDetected = 'Link WhatsApp' }
        if (setting.tt && (chatmessage.includes('tiktok.com'))) { isViolation = true; typeDetected = 'Link TikTok' }
        if (setting.ig && (chatmessage.includes('instagram.com'))) { isViolation = true; typeDetected = 'Link Instagram' }
        if (setting.fb && (chatmessage.includes('facebook.com') || chatmessage.includes('fb.watch'))) { isViolation = true; typeDetected = 'Link Facebook' }
        if (setting.all && (chatmessage.includes('http') || chatmessage.includes('https') || chatmessage.includes('www'))) { isViolation = true; typeDetected = 'Link Website' }
        
        if (!isViolation && setting.custom.length > 0) {
             for (let x of setting.custom) {
                 if (chatmessage.includes(x)) { isViolation = true; typeDetected = 'Link Terlarang'; break }
             }
        }
        if (isViolation && typeDetected === 'Link WhatsApp') {
            let linkGc = await DinzBotz.groupInviteCode(m.chat).catch(() => null)
            if (linkGc && chatmessage.includes(linkGc)) isViolation = false
        }
    }

    if (isViolation) {
        if (isAdmins || isOwner) {
            let teks = setting.msg_admin.replace('@user', `@${sender.split('@')[0]}`)
            await DinzBotz.sendMessage(m.chat, { text: teks, mentions: [sender] }, { quoted: m })
        
        } else if (isBotAdmins) {
            await DinzBotz.sendMessage(m.chat, { delete: m.key })

            if (setting.action === 'kick' || typeDetected === 'Nomor Luar Negeri (Anti-Bule)') {
                const warn = (setting.warnings[sender] || 0) + 1
                setting.warnings[sender] = warn
                saveantilinkk()

                if (warn >= 3 || typeDetected === 'Nomor Luar Negeri (Anti-Bule)') {
                    let teks = setting.msg_kick.replace('@user', `@${sender.split('@')[0]}`)
                    if (typeDetected === 'Nomor Luar Negeri (Anti-Bule)') teks = '⛔ Nomor Luar Negeri dilarang masuk grup ini! Auto Kick.'
                    
                    await DinzBotz.sendMessage(m.chat, { text: teks, mentions: [sender] })
                    await DinzBotz.groupParticipantsUpdate(m.chat, [sender], 'remove')
                    delete setting.warnings[sender]
                    saveantilinkk()
                } else {
                    await DinzBotz.sendMessage(m.chat, {
                        text: `⚠️ *WARNING (${warn}/3)*\n@${sender.split('@')[0]} melanggar: ${typeDetected}!\nJangan diulangi atau kick.`,
                        mentions: [sender]
                    })
                }
            } else {
                let teks = setting.msg_warn.replace('@user', `@${sender.split('@')[0]}`)
                if (typeDetected === 'Konten NSFW/Porno') teks = `⚠️ @${sender.split('@')[0]} Terdeteksi mengirim konten *NSFW (18+)*! Dilarang keras.`
                if (typeDetected === 'Kata Kasar (Toxic)') teks = `⚠️ @${sender.split('@')[0]} Jaga ketikan! Dilarang toxic.`
                
                await DinzBotz.sendMessage(m.chat, { text: teks, mentions: [sender] })
            }
        }
    }
}
//-- AntiSpam By Dinz
if (isGroup && dbSpam.status && !isOwner && !isAdmin) {
    let shouldCheck = false
    if (dbSpam.filter === 'all') shouldCheck = true
    if (dbSpam.filter === 'prefix' && isCmd) shouldCheck = true
    if (dbSpam.filter === 'noprefix' && !isCmd) shouldCheck = true

    if (shouldCheck) {
        if (!userSpam.has(sender)) {
            userSpam.set(sender, { count: 1, lastmsg: Date.now() })
        } else {
            const userData = userSpam.get(sender)
            const timeDiff = Date.now() - userData.lastmsg
            
            if (timeDiff < dbSpam.cooldown) {
                userData.count++
                userData.lastmsg = Date.now()
                userSpam.set(sender, userData)

                if (userData.count >= dbSpam.max_msg) {
                    let warnCount = userSpamWarning.get(sender) || 0
                    warnCount++
                    userSpamWarning.set(sender, warnCount)

                    userSpam.set(sender, { count: 0, lastmsg: Date.now() })

                    if (warnCount >= dbSpam.max_warn) {
                        if (dbSpam.mode === 'kick') {
                            if (isBotAdmins) {
                                await reply(`❌ *SPAM DETECTED (Limit Reached)*\n\nMaaf @${sender.split('@')[0]}, Anda di-KICK karena spam berlebihan!`)
                                await DinzBotz.groupParticipantsUpdate(from, [sender], 'remove')
                            } else {
                                await reply('❌ Terdeteksi Spam Kick, tapi Bot bukan Admin.')
                            }
                        } else if (dbSpam.mode === 'delete') {
                             if (isBotAdmins) {
                                await reply(`⚠️ *SPAM DETECTED*\n@${sender.split('@')[0]} Jangan spam! Pesan Anda dihapus.`)
                                await DinzBotz.sendMessage(from, { delete: m.key })
                            } else {
                                await reply('⚠️ Jangan Spam woi!')
                            }
                        }
                        userSpamWarning.delete(sender)
                    } else {
                        await reply(`⚠️ *PERINGATAN SPAM (${warnCount}/${dbSpam.max_warn})*\n\n@${sender.split('@')[0]} terdeteksi mengirim ${dbSpam.max_msg} pesan dalam ${dbSpam.cooldown/1000} detik.\nModus: ${dbSpam.mode.toUpperCase()}`)
                    }
                }
            } else {
                userSpam.set(sender, { count: 1, lastmsg: Date.now() })
            }
        }
    }
}
//---SetCmd
const pathList = './database/list_store.json'
if (!require('fs').existsSync(pathList)) {
require('fs').writeFileSync(pathList, JSON.stringify({}, null, 2))}
let dbList = JSON.parse(require('fs').readFileSync(pathList))
let textCek = (m.xtype === 'conversation') ? m.message.conversation : 
              (m.xtype == 'imageMessage') ? m.message.imageMessage.caption : 
              (m.xtype == 'videoMessage') ? m.message.videoMessage.caption : 
              (m.xtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : 
              m.text || '';
let chatID = from || m.chat; 

if (isGroup && dbList[chatID] && dbList[chatID].list && dbList[chatID].list[textCek]) {
    let dataList = dbList[chatID].list[textCek]
    if (dataList.image) {
        await DinzBotz.sendMessage(chatID, { 
            image: { url: dataList.image }, 
            caption: dataList.text 
        }, { quoted: m })
    } else {
        await DinzBotz.sendMessage(chatID, { text: dataList.text }, { quoted: m })
    }
}
// --- Limit
    const setting = global.db.settings[botNumber]
    let user = global.db.users[m.sender]
    let cronTime = new Date().toLocaleDateString('id-ID', { timeZone: 'Asia/Jakarta' })
    let limitDefault = global.limit_awal || 20 

    if (typeof user.limit === 'undefined' || isNaN(user.limit)) user.limit = limitDefault
    if (typeof user.registered === 'undefined') user.registered = false
    if (typeof user.dateLimit === 'undefined') user.dateLimit = cronTime
    if (typeof user.name === 'undefined') user.name = ''

    if (user.dateLimit !== cronTime) {
      user.limit = limitDefault
      user.dateLimit = cronTime
    }

    if (setting.modedaftar && !user.registered && isCmd) {
      const allowCmd = ['daftar', 'verify', 'menu', 'ceksn'] 
      if (!allowCmd.includes(command)) {
          let ppuser
          try { ppuser = await DinzBotz.profilePictureUrl(m.sender, 'image') } catch { ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' }
          let buffer = await makeCard('denied', { pp: ppuser })
          return DinzBotz.sendMessage(m.chat, { image: buffer, caption: `⚠️ *AKSES DITOLAK*\n\nMode Pendaftaran sedang *AKTIF*.\nSilakan daftar dulu.\n\nKetik: \`.daftar nama.umur\`` }, { quoted: m })
      }
    }

    const isExempt = isOwner || isPrem
    if (setting.modelimit && !isExempt && isCmd) {
        const noLimitCmd = ['ceklimit', 'limit', 'me', 'profile', 'claim', 'daily', 'daftar', 'unreg', 'sewa', 'allmenu', 'menu', 'claimairdrop' ] 
        
        if (!noLimitCmd.includes(command)) {
            if (user.limit <= 0) {
                let ppuser
                try { ppuser = await DinzBotz.profilePictureUrl(m.sender, 'image') } catch { ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' }
                let buffer = await makeCard('limit', { 
                    pp: ppuser, 
                    limit: 0, 
                    limitAwal: limitDefault, 
                    isHabis: true 
                })
                return DinzBotz.sendMessage(m.chat, { image: buffer, caption: `⚠️ *LIMIT HABIS*\n\nLimit harianmu (0/${limitDefault}) sudah habis.\nTunggu reset jam 00:00 WIB atau beli Premium.` }, { quoted: m })
            }
            user.limit -= 1
        }
    }

// --- Ban user
    if (user.banned && !isOwner) {
        let ppuser
        try {
            ppuser = await DinzBotz.profilePictureUrl(m.sender, 'image')
        } catch (err) {
            ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
        
        let buffer = await makeCard('denied', { pp: ppuser })
        
        return DinzBotz.sendMessage(m.chat, {
            image: buffer,
            caption: `⛔ *AKSES DIBLOKIR (BANNED)*\n\nMaaf, akun kamu telah di-banned permanen oleh Owner karena melanggar aturan.\n\nKamu tidak bisa lagi menggunakan bot ini.`
        }, { quoted: m })
    }

//--- PlayCh
const pathCh = './database/channel.json'
if (!require('fs').existsSync(pathCh)) {
require('fs').writeFileSync(pathCh, JSON.stringify({ id: '' }))}
let dbCh = JSON.parse(require('fs').readFileSync(pathCh))

// --- Sider & TotalChat
if (isGroup) {
    let chat = global.db.chats[from]
    if (typeof chat !== 'object') global.db.chats[from] = {}
    
    let userJid = m.sender
    let rawId = m.key.participant || m.participant || ''

    if (chat) {
        if (!chat.users) chat.users = {}
        if (!chat.users[userJid]) chat.users[userJid] = {
            name: pushname,
            total: 0,
            lastSeen: 0,
            lid: ''
        }
        
        let userChat = chat.users[userJid]
        userChat.total += 1
        userChat.lastSeen = Date.now()
        userChat.name = pushname
        
        if (rawId.includes('@lid')) {
            userChat.lid = rawId
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
    DinzBotz.tebakff = DinzBotz.tebakff ? DinzBotz.tebakff : {};
if (m.chat in DinzBotz.tebakff && !isCmd) {
    let room = DinzBotz.tebakff[m.chat]
    let json = room[1]
    if (budy.toLowerCase() == json.name.toLowerCase()) {
        await DinzBotz.sendMessage(m.chat, { text: `🎮 *Tebak Free Fire* 🎮\n\nJawaban Benar! 🎉\n👤 Karakter: *${json.name}*\n💰 Bonus: ${room[2]} Poin` }, { quoted: m })
        clearTimeout(room[3])
        delete DinzBotz.tebakff[m.chat]
    }
}
DinzBotz.tebakgame = DinzBotz.tebakgame ? DinzBotz.tebakgame : {};
if (m.chat in DinzBotz.tebakgame && !isCmd) {
    let room = DinzBotz.tebakgame[m.chat]
    let json = room[1]
    if (budy.toLowerCase() == json.jawaban.toLowerCase()) {
        await DinzBotz.sendMessage(m.chat, { text: `🎮 *Tebak Game* 🎮\n\nJawaban Benar! 🎉\n🕹️ Game: *${json.jawaban}*\n💰 Bonus: ${room[2]} Poin` }, { quoted: m })
        clearTimeout(room[3])
        delete DinzBotz.tebakgame[m.chat]
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
      } else if (DinzBotz.tebakff && DinzBotz.tebakff[gamejid]) {
        DinzBotz.sendMessage(gamejid, {
          text: "ada soal yang belomm selesaiii,"
        }, {
          quoted: DinzBotz.tebakff[gamejid][0]
        })
        return true
      } else if (DinzBotz.tebakgame && DinzBotz.tebakgame[gamejid]) {
        DinzBotz.sendMessage(gamejid, {
          text: "ada soal yang belomm selesaiii,"
        }, {
          quoted: DinzBotz.tebakgame[gamejid][0]
        })
        return true
      } else {
        return false
      }
    }

    

//--- plugins loader
const path = require('path')
global.plugins = global.plugins || {}
global.plugins.regexp = global.plugins.regexp || []
const loadPlugins = async (directory) => {
    let pluginFolder = path.join(__dirname, '..', directory)
    if (!fs.existsSync(pluginFolder)) {
       // console.log(`[ERROR] Folder plugins TIDAK DITEMUKAN di: ${pluginFolder}`)
        return
    }
    let files = fs.readdirSync(pluginFolder)
    for (let file of files) {
        let fullPath = path.join(pluginFolder, file)
        
        if (/\.(js|cjs|mjs)$/.test(file)) {
            try {
                if (require.cache[fullPath]) delete require.cache[fullPath]
                let module = await import(`file://${fullPath}?update=${Date.now()}`)
                let plugin = module.default || module

                if (plugin) {
                    if (plugin.command) {
                        if (plugin.command instanceof RegExp) {
                            let isExist = global.plugins.regexp.find(p => p.command.toString() === plugin.command.toString())
                            if (!isExist) {
                                global.plugins.regexp.push(plugin)
                            //    console.log(`[LOAD] Berhasil load plugin REGEX: ${file}`)
                            }
                        } else if (Array.isArray(plugin.command)) {
                            plugin.command.forEach(cmd => {
                                global.plugins[cmd] = plugin
                            })
                   //         console.log(`[LOAD] Berhasil load plugin: ${file} (Cmd: ${plugin.command})`)
                        } else {
                            global.plugins[plugin.command] = plugin
                          //  console.log(`[LOAD] Berhasil load plugin: ${file} (Cmd: ${plugin.command})`)
                        }
                    }
                }
            } catch (e) {
               // console.error(`[ERROR] Gagal load plugin ${file}:`, e.message)
            }
        }
    }
}
await loadPlugins('plugins')
let pluginHandler = null
if (global.plugins[command]) {
    pluginHandler = global.plugins[command]
   // console.log(`[EXEC] Menemukan plugin string untuk: ${command}`)
} 
else if (global.plugins.regexp) {
    for (let plugin of global.plugins.regexp) {
        if (plugin.command instanceof RegExp && plugin.command.test(command)) {
            pluginHandler = plugin
          //  console.log(`[EXEC] Menemukan plugin REGEX untuk: ${command}`)
            break
        }
    }
}
if (pluginHandler) {
    try {
        let extra = {
            conn: DinzBotz,
            DinzBotz,
            prefix,
            usedPrefix: prefix,
            command,
            reply,
            text,
            m,
            isGroup: m.isGroup,
            DinzTheCreator,
            sender,
            senderNumber,
            pushname,
            args,
            runtime,
            formatp,
            sleep,
            getBuffer,
            isBotAdmins,
            isAdmins,
            isCmd,
            isPrem,
            store,
            participants: m.isGroup ? groupMetadata.participants : [],
            example: (teks) => reply(`Contoh: ${prefix + command} ${teks}`)
        }

        if (typeof pluginHandler === 'function') {
            await pluginHandler(m, extra)
        } else if (pluginHandler.operate) {
            await pluginHandler.operate(DinzBotz, m, extra)
        }
        
        return 
        
    } catch (e) {
        console.error("[ERROR PLUGIN]", e)
        m.reply(`Error Plugin: ${e.message}`)
    }
}
// Func FakeQuoted
const sendMenuDisplay = async () => {
    const fs = require('fs')
    const moment = require('moment-timezone')
    
    await DinzBotz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key } })

    const time = moment.tz('Asia/Jakarta').format('HH')
    let hituet = "Malam"
    if (time >= 4) { hituet = "Pagi" }
    if (time >= 11) { hituet = "Siang" }
    if (time >= 15) { hituet = "Sore" }
    if (time >= 18) { hituet = "Malam" }

    let menuText = global.allmenu(prefix, hituet, pushname, isPrem, runtime)
    let type = global.menuType || '1'

    if (type === '1') {
        await DinzBotz.sendMessage(m.chat, {
            video: fs.readFileSync('./media/hutao.mp4'),
            gifPlayback: true,
            caption: menuText
        }, { quoted: m })
        
    } else if (type === '2') {
        await DinzBotz.sendMessage(m.chat, {
            image: fs.readFileSync('./media/thumb.jpg'),
            caption: menuText
        }, { quoted: m })

    } else if (type === '3') {
        await DinzBotz.sendMessage(m.chat, {
            caption: menuText,
            footer: global.botname || 'DinzBotz',
            image: fs.readFileSync('./media/thumb.jpg'),
            viewOnce: true,
            headerType: 4,
            buttons: [
                {
                    buttonId: `${prefix}owner`,
                    buttonText: { displayText: 'ᴏᴡɴᴇʀ' },
                    type: 1
                },
                {
                    buttonId: `${prefix}sewa`,
                    buttonText: { displayText: 'sᴇᴡᴀ ʙᴏᴛ' },
                    type: 1
                },
                {
                    buttonId: 'action',
                    buttonText: { displayText: 'ᴄʟɪᴄᴋ ʜᴇʀᴇ' },
                    type: 4,
                    nativeFlowInfo: {
                        name: 'single_select',
                        paramsJson: JSON.stringify({
                            title: 'ᴘɪʟɪʜ ᴍᴇɴᴜ',
                            sections: [
                                {
                                    title: `ᴍᴀɪɴ ᴍᴇɴᴜ`,
                                    highlight_label: `ᴜᴛᴀᴍᴀ`,
                                    rows: [
                                        { title: "ᴏᴡɴᴇʀ ᴍᴇɴᴜ", description: "Menu Khusus Owner", id: `${prefix}ownermenu` },
                                        { title: "ɢʀᴏᴜᴘ ᴍᴇɴᴜ", description: "Menu Grup", id: `${prefix}groupmenu` },
                                        { title: "sᴛᴏʀᴇ ᴍᴇɴᴜ", description: "Menu Toko", id: `${prefix}storemenu` },
                                        { title: "ᴘᴀɴᴇʟ ᴍᴇɴᴜ", description: "Menu Pterodactyl", id: `${prefix}panelmenu` }
                                    ]
                                },
                                {
                                    title: `ғᴇᴀᴛᴜʀᴇ ᴍᴇɴᴜ`,
                                    highlight_label: ``,
                                    rows: [
                                        { title: "ᴘʀɪᴍʙᴏɴ ᴍᴇɴᴜ", description: "Fitur Primbom", id: `${prefix}primbonmenu` },
                                        { title: "sᴛᴀʟᴋ ᴍᴇɴᴜ", description: "Fitur Stalk", id: `${prefix}stalkmenu` },
                                        { title: "ʀᴀɴᴅᴏᴍᴍᴇɴᴜ", description: "Random", id: `${prefix}randommenu` },
                                        { title: "ᴀɪ ᴍᴇɴᴜ", description: "Fitur AI", id: `${prefix}aimenu` },
                                        { title: "ᴀɪ ᴇᴅɪᴛ ᴍᴇɴᴜ", description: "Fitur AI Edit", id: `${prefix}aieditmenu` },
                                        { title: "ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ", description: "Downloader", id: `${prefix}downloadmenu` },
                                        { title: "sᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ", description: "Menu Stiker", id: `${prefix}stickermenu` },
                                        { title: "ᴍᴀᴋᴇʀ ᴍᴇɴᴜ", description: "Menu Maker", id: `${prefix}makermenu` },
                                        { title: "ʀᴘɢ ᴍᴇɴᴜ", description: "Game RPG", id: `${prefix}rpgmenu` },
                                        { title: "ɢᴀᴍᴇ ᴍᴇɴᴜ", description: "Mini Games", id: `${prefix}gamemenu` },
                                        { title: "ɪsʟᴀᴍɪᴄ ᴍᴇɴᴜ", description: "Fitur Islami", id: `${prefix}islamicmenu` },
                                        { title: "ɢᴇɴsʜɪɴ ᴍᴇɴᴜ", description: "Info Genshin Impact", id: `${prefix}genshinmenu` },
                                        { title: "ᴀɴɪᴍᴇ ᴍᴇɴᴜ", description: "Info Anime", id: `${prefix}animemenu` },
                                        { title: "ɴsғᴡ ᴍᴇɴᴜ", description: "Menu 18+", id: `${prefix}nsfwmenu` },
                                        { title: "ᴇᴘʜᴏᴛᴏ ᴍᴇɴᴜ", description: "Ephoto 360", id: `${prefix}ephotomenu` },
                                        { title: "ᴇɴᴄ ᴍᴇɴᴜ", description: "Tools Enkripsi", id: `${prefix}encmenu` },
                                        { title: "ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ", description: "Tools Konversi", id: `${prefix}convertmenu` },
                                        { title: "sᴇᴀʀᴄʜ ᴍᴇɴᴜ", description: "Pencarian", id: `${prefix}searchmenu` },
                                        { title: "ᴀɴᴏɴʏᴍᴏᴜs ᴍᴇɴᴜ", description: "Menu Anonymous", id: `${prefix}anonymousmenu` },
                                        { title: "ᴛᴏᴏʟs ᴍᴇɴᴜ", description: "Alat Bantu", id: `${prefix}toolsmenu` },
                                        { title: "ғᴜɴ ᴍᴇɴᴜ", description: "Menu Hiburan", id: `${prefix}funmenu` },
                                        { title: "ǫᴜᴏᴛᴇs ᴍᴇɴᴜ", description: "Menu Kata-kata", id: `${prefix}quotesmenu` },
                                        { title: "ᴏᴛʜᴇʀ ᴍᴇɴᴜ", description: "Menu Lainnya", id: `${prefix}othermenu` }
                                    ]
                                }
                            ]
                        })
                    }
                }
            ],
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                    title: global.botname,
                    body: global.ownername,
                    thumbnailUrl: "https://telegra.ph/file/a7c66914652243e8825c7.jpg",
                    sourceUrl: "https://whatsapp.com/channel/0029VbAuu0fFHWpvAZAS3d17/107",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m })
    }
}
// --- Rpg
let userCheck = global.db.users[m.sender]
if (userCheck && userCheck.clan) {
    let clanTarget = global.db.clan[userCheck.clan]
    if (!clanTarget.underAttack && Math.random() < 0.01) { 
        clanTarget.underAttack = true
        clanTarget.monsterHp = clanTarget.level * 500
        
        let warn = `🚨 *CLAN BASE UNDER ATTACK!* 🚨\n\n`
        warn += `🏰 Markas Clan *${userCheck.clan}* diserang Monster!\n`
        warn += `👾 Monster HP: ${clanTarget.monsterHp}\n\n`
        warn += `Segera ketik *${prefix}defend* untuk melindungi Kas Clan!`
        
        DinzBotz.sendMessage(m.chat, { 
            text: warn, 
            contextInfo: {
                mentionedJid: clanTarget.members,
                externalAdReply: {
                    title: `⚠️ BASE ALERT: ${userCheck.clan}`,
                    body: `Monster Invasion detected!`,
                    thumbnailUrl: "https://cdn.dinzid.biz.id/CM2p.jpg",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        })
    }
}
if (m.isGroup && global.db.chats[m.chat].airdrop && !global.db.others.airdropActive) {
    if (Math.random() < 0.005) { 
        global.db.others.airdropActive = true
        global.db.others.airdropCode = Math.random().toString(36).substring(2, 7).toUpperCase()
        
        let txt = `📦 *AIRDROP RPG TELAH JATUH!* 📦\n\n`
        txt += `Sebuah peti persediaan jatuh dari langit! Siapa cepat dia dapat!\n\n`
        txt += `Ketik perintah di bawah untuk mengambil:\n`
        txt += `👉 *${prefix}claimairdrop ${global.db.others.airdropCode}*`

        await DinzBotz.sendMessage(m.chat, {
            text: txt,
            contextInfo: {
                externalAdReply: {
                    title: "🎁 RPG AIRDROP EVENT",
                    body: "Grab it fast before others do!",
                    thumbnailUrl: "https://cdn.dinzid.biz.id/O7bK.png",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        })
    }
}









//FUNCTION
else if (new RegExp(`${ownerNumber}`, 'i').test(m.text)) {
    if (!DinzTheCreator) {
        await DinzBotz.sendMessage(m.chat, {
            video: {
                url: global.pvt
            },
            ptv: true
        }, {
            quoted: m
        });
    }
}

// --- DATABASE & SETUP ---
const pathAdzan = './database/adzan_groups.json'
const pathClose = './database/adzan_close.json'

if (!fs.existsSync(pathAdzan)) fs.writeFileSync(pathAdzan, JSON.stringify([]))
if (!fs.existsSync(pathClose)) fs.writeFileSync(pathClose, JSON.stringify([]))

let adzanDailyCache = {}
let manualTestSchedule = {}

async function getJadwalSholat() {
    try {
        const { data } = await axios.get('https://api.aladhan.com/v1/timingsByCity?city=Subang&country=Indonesia&method=8')
        return data.data.timings
    } catch (e) {
        return { Fajr: "04:30", Dhuhr: "12:00", Asr: "15:15", Maghrib: "18:10", Isha: "19:20" }
    }
}

setInterval(async () => {
    const moment = require('moment-timezone')
    const now = moment.tz('Asia/Jakarta')
    const timeNow = now.format('HH:mm')
    const dateNow = now.format('YYYY-MM-DD')

    const jadwalAsli = await getJadwalSholat()
    const jadwal = { ...jadwalAsli, ...manualTestSchedule }

    const dbAdzan = JSON.parse(fs.readFileSync(pathAdzan))
    const dbClose = JSON.parse(fs.readFileSync(pathClose))

    for (const [sholat, waktu] of Object.entries(jadwal)) {
        const key = `${dateNow}-${sholat}`

        if (timeNow === waktu && !adzanDailyCache[key]) {
            adzanDailyCache[key] = true
            
            if (manualTestSchedule[sholat]) delete manualTestSchedule[sholat]

            let thumbislam = "https://telegra.ph/file/687fd664f674e90ae1079.jpg"
            if (sholat === "Fajr") thumbislam = "https://telegra.ph/file/b666be3c20c68d9bd0139.jpg"
            else if (sholat === "Dhuhr") thumbislam = "https://telegra.ph/file/5295095dad53783b9cd64.jpg"
            else if (sholat === "Asr") thumbislam = "https://telegra.ph/file/c0e1948ad75a2cba22845.jpg"
            else if (sholat === "Maghrib") thumbislam = "https://telegra.ph/file/0082ad9c0e924323e08a6.jpg"
            else if (sholat === "Isha") thumbislam = "https://telegra.ph/file/fd141833a983afa0a8412.jpg"
            else if (sholat === "Test") thumbislam = "https://telegra.ph/file/687fd664f674e90ae1079.jpg"

            for (let idGroup of dbAdzan) {
                try {
                    let isAutoClose = dbClose.includes(idGroup)
                    let textBody = isAutoClose ? "Grup ditutup 5 menit untuk sholat." : "Segeralah mengambil air wudhu dan shalat."

                    await DinzBotz.sendMessage(idGroup, {
                        audio: { url: "https://files.catbox.moe/0nj6pp.mp3" },
                        mimetype: 'audio/mpeg',
                        fileName: `adzan.mp3`,
                        ptt: true,
                        contextInfo: {
                            externalAdReply: {
                                title: `🕋 Waktu ${sholat} Telah Tiba`,
                                body: textBody,
                                mediaType: 1,
                                renderLargerThumbnail: true,
                                thumbnailUrl: thumbislam,
                                sourceUrl: "https://instagram.com/dinzbotz"
                            }
                        }
                    })

                    if (isAutoClose) {
                        try {
                            await DinzBotz.groupSettingUpdate(idGroup, 'announcement')
                            await DinzBotz.sendMessage(idGroup, { text: `🔒 *GRUP DITUTUP SEMENTARA*\n\nSelamat menunaikan ibadah sholat ${sholat}.` })
                            
                            setTimeout(async () => {
                                try {
                                    await DinzBotz.groupSettingUpdate(idGroup, 'not_announcement')
                                    await DinzBotz.sendMessage(idGroup, { text: `🔓 *GRUP DIBUKA KEMBALI*` })
                                } catch (errOpen) {}
                            }, 5 * 60 * 1000) 
                            
                        } catch (errAdmin) {}
                    }
                    await new Promise(r => setTimeout(r, 1000))
                } catch (err) {}
            }
        }
    }
}, 5000)
async function groupSatus(jid, content) {
  const inside = await generateWAMessageContent(content, {
    upload: DinzBotz.waUploadToServer
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
  await DinzBotz.relayMessage(jid, m.message, {
    messageId: m.key.id
  });
  return m;
}
var ppuser
    try {
      ppuser = await DinzBotz.profilePictureUrl(m.sender, 'image')
    } catch (err) {
      ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
    }
DinzBotz.game = DinzBotz.game ? DinzBotz.game : {}
let roomTTT = DinzBotz.game[m.chat]

if (roomTTT && roomTTT.status === 'PLAYING' && !m.isBaileys) {
    if (/^[1-9]$/.test(m.body)) {
        let input = parseInt(m.body) - 1
        let game = roomTTT.game
        
        if (m.sender !== game.turn) return

        if (game.move(input, m.sender)) {
            let img = await game.toCanvas()
            
            if (game.winner || game.isDraw) {
                let caption = ''
                if (game.winner) {
                    let winner = game.winner
                    let loser = winner === roomTTT.x ? roomTTT.o : roomTTT.x
                    
                    caption += `🎉 *TIC TAC TOE SELESAI* 🎉\n\n`
                    caption += `🏆 Pemenang: @${winner.split('@')[0]}\n`
                    
                    if (roomTTT.bet > 0) {
                        global.db.users[winner].money += roomTTT.bet
                        global.db.users[loser].money -= roomTTT.bet
                        caption += `💰 Menang Taruhan: Rp ${roomTTT.bet.toLocaleString()}\n`
                    }
                    global.db.users[winner].exp += 500
                } else {
                    caption += `🤝 *GAME SERI (DRAW)* 🤝\n\nTidak ada pemenang.`
                }
                
                delete DinzBotz.game[m.chat]
                
                DinzBotz.sendMessage(m.chat, { image: img, caption: caption, mentions: [roomTTT.x, roomTTT.o] }, { quoted: m })
            } else {
                let caption = `🎮 *Room:* ${m.chat.split('@')[0]}\n`
                caption += `Giliran: @${game.turn.split('@')[0]} (${game.turn === roomTTT.x ? '❌' : '⭕'})`
                
                DinzBotz.sendMessage(m.chat, { image: img, caption: caption, mentions: [roomTTT.x, roomTTT.o] })
            }
        }
    }
}
DinzBotz.suit = DinzBotz.suit ? DinzBotz.suit : {}
let room = Object.values(DinzBotz.suit).find(room => room.id && [room.p, room.p2].includes(m.sender) && room.status == 'wait')

if (room) {
    if (/^terima/i.test(m.body) && !m.isBaileys && m.sender == room.p2) {
        room.status = 'play'
        room.asal = m.chat
        clearTimeout(room.waktu)
        room.waktu = setTimeout(() => {
            reply('Suit dibatalkan karena pemain tidak kunjung memilih pilihan di PC.')
            delete DinzBotz.suit[room.id]
        }, 60000)

        let help = `Silakan pilih salah satu di bawah ini (Kirim ke Chat Pribadi Bot):\n\n✌️ *Gunting*\n✊ *Batu*\n🖐️ *Kertas*\n\n_Pemenang mendapatkan Rp ${room.money.toLocaleString()}_`
        
        await DinzBotz.sendMessage(room.p, { text: help })
        await DinzBotz.sendMessage(room.p2, { text: help })
        reply('Tantangan diterima! Silakan cek Chat Pribadi (PC) bot untuk memilih pilihan kalian.')
    } else if (/^tolak/i.test(m.body) && !m.isBaileys && m.sender == room.p2) {
        reply(`@${room.p2.split('@')[0]} menolak duel.`)
        delete DinzBotz.suit[room.id]
    }
}

let activeRoom = Object.values(DinzBotz.suit).find(room => room.id && [room.p, room.p2].includes(m.sender) && room.status == 'play')
if (activeRoom) {
    let win = ''
    let tie = false
    let p1 = activeRoom.p
    let p2 = activeRoom.p2
    
    if (m.chat == m.sender) { // Cek jika chat di PC
        if (/gunting/i.test(m.body)) activeRoom.p == m.sender ? activeRoom.pilih = 'gunting' : activeRoom.pilih2 = 'gunting'
        else if (/batu/i.test(m.body)) activeRoom.p == m.sender ? activeRoom.pilih = 'batu' : activeRoom.pilih2 = 'batu'
        else if (/kertas/i.test(m.body)) activeRoom.p == m.sender ? activeRoom.pilih = 'kertas' : activeRoom.pilih2 = 'kertas'
        
        if (activeRoom.pilih && activeRoom.pilih2) {
            let r = activeRoom.pilih
            let r2 = activeRoom.pilih2
            
            if (r == r2) tie = true
            else if (r == 'batu' && r2 == 'gunting') win = p1
            else if (r == 'batu' && r2 == 'kertas') win = p2
            else if (r == 'gunting' && r2 == 'kertas') win = p1
            else if (r == 'gunting' && r2 == 'batu') win = p2
            else if (r == 'kertas' && r2 == 'batu') win = p1
            else if (r == 'kertas' && r2 == 'gunting') win = p2

            let resultTxt = `🎮 *HASIL SUIT PVP* 🎮\n\n`
            resultTxt += `@${p1.split('@')[0]}: ${r}\n`
            resultTxt += `@${p2.split('@')[0]}: ${r2}\n\n`
            
            if (tie) {
                resultTxt += `*HASIL: SERI!* Tidak ada uang yang berkurang.`
            } else {
                let kalah = (win == p1) ? p2 : p1
                let nominal = activeRoom.money
                global.db.users[win].money += nominal
                global.db.users[kalah].money -= nominal
                resultTxt += `*PEMENANG:* @${win.split('@')[0]}\n`
                resultTxt += `🎁 *Hadiah:* Rp ${nominal.toLocaleString()}`
            }
            
            DinzBotz.sendMessage(activeRoom.asal, { text: resultTxt, mentions: [p1, p2] })
            delete DinzBotz.suit[activeRoom.id]
        }
    }
}
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
        }

     
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

        let url = `https://rynekoo-api.hf.space/text.gen/gemini/realtime?text=${encodeURIComponent(m.text)}&systemPrompt=${encodeURIComponent(systemPrompt)}`;
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
        isForwarded: true,
            forwardingScore: 999,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363403870324179@newsletter',
                newsletterName: `${global.botname}`,
                serverMessageId: 100
            },
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
function formatContent(content) {
    if (!content) return chalk.gray('│   (no content)');
    
    const maxLineLength = 42;
    const lines = [];
    content.split('\n').forEach(line => {
        while (line.length > 0) {
            const chunk = line.substring(0, maxLineLength);
            lines.push(`│   ${chalk.white(chunk)}`);
            line = line.substring(chunk.length);
        }
    });
    
    return lines.slice(0, 3).join('\n'); // Limit to 3 lines
}
if (m.message) {
    const fixLogText = (text) => {
        if (!text) return text
        return text.replace(/@(\d+)/g, (match, number) => {
            const potentialLid = number + '@lid'
            const foundJid = DinzBotz.findJidByLid ? DinzBotz.findJidByLid(potentialLid) : null
            return foundJid ? `@${foundJid.split('@')[0]}` : match
        })
    }
    let messageContent = ordermessage || m.xtype;
    let formattedContent = formatContent(messageContent);
    let type = fixLogText( m.xtype )
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
│ ${chalk.bold('♻️ Type:')}
│ ${chalk.greenBright(type)}
│
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
│ ${chalk.bold('♻️ Type:')}
│ ${chalk.greenBright(type)}
│
│ ${chalk.bold('💬 Content:')}
│ ${chalk.greenBright(formattedContent)}
└──────────────────────────────────────────────────────┘
`)
    }
}


    switch(command) {
  case 'menu': {
    const fs = require('fs')
    
    await DinzBotz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key } })

    let menuType = global.menuType || '1'

    if (menuType === '3') {
        await sendMenuDisplay()
    } else {
        let ownernya = global.ownerNumber + '@s.whatsapp.net';
        let me = m.sender;
        let uptime = runtime(process.uptime());
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

        let DinzID_sad = `ʜᴀʟʟᴏ, ${pushname}.
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

┏━━━ *[ ᴍ ᴀ ɪ ɴ | ᴍ ᴇ ɴ ᴜ ]* ━━━┓
┃ ◼ ${prefix}aimenu
┃ ◼ ${prefix}encmenu
┃ ◼ ${prefix}rpgmenu
┃ ◼ ${prefix}funmenu
┃ ◼ ${prefix}nsfwmenu
┃ ◼ ${prefix}toolsmenu
┃ ◼ ${prefix}gamemenu
┃ ◼ ${prefix}storemenu
┃ ◼ ${prefix}panelmenu
┃ ◼ ${prefix}othermenu
┃ ◼ ${prefix}ownermenu
┃ ◼ ${prefix}groupmenu
┃ ◼ ${prefix}makermenu
┃ ◼ ${prefix}animemenu
┃ ◼ ${prefix}quotesmenu
┃ ◼ ${prefix}searchmenu
┃ ◼ ${prefix}islamicmenu
┃ ◼ ${prefix}genshinmenu
┃ ◼ ${prefix}aieditmenu
┃ ◼ ${prefix}ephotomenu
┃ ◼ ${prefix}stickermenu
┃ ◼ ${prefix}convertmenu
┃ ◼ ${prefix}downloadmenu
┃ ◼ ${prefix}anonymousmenu
┃ ◼ ${prefix}pterodactylmenu
┗━━━━━━━━━━━━━━━━┛`;

        if (menuType === '1') {
            await DinzBotz.sendMessage(m.chat, {
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
        
        } else {
            await DinzBotz.sendMessage(m.chat, {
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
    }

    let muskk = {
        audio: fs.readFileSync('./media/audio/menu.mp3'),
        mimetype: 'audio/mp4',  
        ptt: true
    };
    await DinzBotz.sendMessage(m.chat, muskk, { quoted: m });
}
break
case 'setmenutype': {
    if (!DinzTheCreator) return reply(mess.owner)
    if (!args[0]) return reply(`Pilih tipe menu:\n1. Tipe Video\n2. Tipe Image\n3. Tipe Button\n\nContoh: ${prefix + command} 3`)
    if (args[0] === '1') {
        global.menuType = '1'
        reply('Sukses mengubah tampilan menu ke Tipe 1')
    } else if (args[0] === '2') {
        global.menuType = '2'
        reply('Sukses mengubah tampilan menu ke Tipe 2')
    } else if (args[0] === '3') {
        global.menuType = '3'
        reply('Sukses mengubah tampilan menu ke Tipe 3')
    } else {
        reply('Tipe tidak tersedia, pilih 1, 2, atau 3')
    }
    break
}
case 'remini':
case 'hd':
case 'upscale': {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) return reply(`Kirim atau reply gambar dengan caption ${prefix + command}`)
    if (!/image/.test(mime)) return reply(`Kirim atau reply gambar dengan caption ${prefix + command}`)

    await DinzBotz.sendMessage(m.chat, { react: { text: "⚙️", key: m.key } })

    try {
        let media = await DinzBotz.downloadMediaMessage(q)
        let ran = './' + Math.floor(Math.random() * 100000) + '.jpg'
        fs.writeFileSync(ran, media)
        
        let urlGambar = await uploaden(ran)
        
        let res = await fetch(`https://api-faa.my.id/faa/hdv4?image=${urlGambar}`)
        let json = await res.json()
        
        fs.unlinkSync(ran)

        if (!json.status || !json.result || !json.result.image_upscaled) return reply('Gagal memproses gambar, coba lagi nanti.')

        await DinzBotz.sendMessage(m.chat, { 
            image: { url: json.result.image_upscaled }, 
            caption: `✅ *SUKSES MENJERNIHKAN FOTO*\n\n✨ *Status:* Success\n📐 *Resolusi:* Ultra HD (4K)` 
        }, { quoted: m })

    } catch (e) {
        console.log(e)
        reply('Terjadi kesalahan saat memproses gambar.')
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
case 'yta':
case 'ytmp4':
case 'ytv': {
    if (!text) return reply(`Kirim perintah:\n${prefix + command} link_youtube\nAtau: ${prefix + command} judul_lagu`)

    await DinzBotz.sendMessage(m.chat, { react: { text: "⏳", key: m.key } })

    const axios = require('axios')
    const yts = require('yt-search')
    const crypto = require('crypto')

    let isVideo = /ytmp4|ytv/.test(command)
    let urlYt = text

    if (!urlYt.startsWith('http')) {
        let search = await yts(text)
        if (!search.all || search.all.length === 0) return reply('Media tidak ditemukan.')
        urlYt = search.all[0].url
    }

    try {
        const { data } = await axios.get(`https://rynekoo-api.hf.space/downloader/youtube/v2?url=${encodeURIComponent(urlYt)}`)
        
        if (!data.success || !data.result) throw new Error('V2 Failed')

        let res = data.result
        let dlUrl = ''
        let quality = ''
        let mime = ''

        if (isVideo) {
            let media = res.medias.find(v => v.itag === 22) || res.medias.find(v => v.itag === 18) || res.medias.find(v => v.extension === 'mp4' && v.is_audio === true)
            if (!media) throw new Error('Video V2 Not Found')
            dlUrl = media.url
            quality = media.quality || '360p'
            mime = 'video/mp4'
        } else {
            let media = res.medias.find(v => v.itag === 140) || res.medias.find(v => v.extension === 'm4a') || res.medias.find(v => v.extension === 'mp3')
            if (!media) throw new Error('Audio V2 Not Found')
            dlUrl = media.url
            quality = '128kbps'
            mime = 'audio/mpeg'
        }

        if (isVideo) {
            await DinzBotz.sendMessage(m.chat, {
                video: { url: dlUrl },
                caption: `🎬 *${res.title}*\n⏱️ Durasi: ${res.duration}s\n📺 Kualitas: ${quality}\n🔗 Server: Rynekoo V2`,
                mimetype: mime
            }, { quoted: m })
        } else {
            await DinzBotz.sendMessage(m.chat, {
                audio: { url: dlUrl },
                mimetype: 'audio/mpeg',
                fileName: `${res.title}.mp3`,
                contextInfo: {
                    externalAdReply: {
                        title: res.title,
                        body: res.author,
                        thumbnailUrl: res.thumbnail,
                        sourceUrl: urlYt,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m })
        }
        await DinzBotz.sendMessage(m.chat, { react: { text: "✅", key: m.key } })

    } catch (e1) {
        try {
            const { data } = await axios.get(`https://rynekoo-api.hf.space/downloader/youtube/v5?url=${encodeURIComponent(urlYt)}`)
            
            if (!data.success || !data.result) throw new Error('V5 Failed')

            let res = data.result
            let dlUrl = ''
            let quality = ''

            if (isVideo) {
                let media = res.formats.find(v => v.qualityLabel === '720p') || res.formats.find(v => v.qualityLabel === '360p') || res.formats[0]
                dlUrl = media.url
                quality = media.qualityLabel
            } else {
                let media = res.adaptiveFormats.find(v => v.itag === 140) || res.adaptiveFormats.find(v => v.mimeType.includes('audio/mp4'))
                dlUrl = media.url
                quality = '128kbps'
            }

            if (isVideo) {
                await DinzBotz.sendMessage(m.chat, {
                    video: { url: dlUrl },
                    caption: `🎬 *${res.title}*\n📺 Kualitas: ${quality}\n🔗 Server: Rynekoo V5`,
                    mimetype: 'video/mp4'
                }, { quoted: m })
            } else {
                await DinzBotz.sendMessage(m.chat, {
                    audio: { url: dlUrl },
                    mimetype: 'audio/mpeg',
                    fileName: `${res.title}.mp3`,
                    contextInfo: {
                        externalAdReply: {
                            title: res.title,
                            body: res.channelTitle,
                            thumbnailUrl: res.thumbnail[0].url,
                            sourceUrl: urlYt,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: m })
            }
            await DinzBotz.sendMessage(m.chat, { react: { text: "✅", key: m.key } })

        } catch (e2) {
            try {
                const anu = Buffer.from('C5D58EF67A7584E4A29F6C35BBC4EB12', 'hex')
                function decrypt(enc) {
                    const b = Buffer.from(enc.replace(/\s/g, ''), 'base64')
                    const iv = b.subarray(0, 16)
                    const data = b.subarray(16)
                    const d = crypto.createDecipheriv('aes-128-cbc', anu, iv)
                    return JSON.parse(Buffer.concat([d.update(data), d.final()]).toString())
                }

                async function savetube(url) {
                    try {
                        const random = await axios.get('https://media.savetube.vip/api/random-cdn', {
                            headers: { origin: 'https://save-tube.com', referer: 'https://save-tube.com/', 'User-Agent': 'Mozilla/5.0' }
                        })
                        const cdn = random.data.cdn
                        const info = await axios.post(`https://${cdn}/v2/info`, { url }, {
                            headers: { 'Content-Type': 'application/json', origin: 'https://save-tube.com', referer: 'https://save-tube.com/', 'User-Agent': 'Mozilla/5.0' }
                        })
                        if (!info.data || !info.data.status) return null
                        const json = decrypt(info.data.data)

                        async function download(type, quality) {
                            const r = await axios.post(`https://${cdn}/download`, {
                                id: json.id, key: json.key, downloadType: type, quality: String(quality)
                            }, {
                                headers: { 'Content-Type': 'application/json', origin: 'https://save-tube.com', referer: 'https://save-tube.com/', 'User-Agent': 'Mozilla/5.0' }
                            })
                            return r.data && r.data.data ? r.data.data.downloadUrl : null
                        }

                        const videos = []
                        for (const v of json.video_formats) {
                            videos.push({ quality: v.quality, label: v.label, url: await download('video', v.quality) })
                        }
                        for (const a of json.audio_formats) {
                            videos.push({ quality: a.quality, label: a.label, url: await download('audio', a.quality) })
                        }
                        return { title: json.title, duration: json.duration, thumbnail: json.thumbnail, videos }
                    } catch (e) { return null }
                }

                async function runSiputzx(type, url) {
                    let attempts = 0
                    while (attempts < 10) {
                        try {
                            const res = await axios.get(`https://youtubedl.siputzx.my.id/download?type=${type}&url=${url}`)
                            if (res.data.status === "completed") return "https://youtubedl.siputzx.my.id" + res.data.fileUrl
                            await new Promise(r => setTimeout(r, 2000))
                            attempts++
                        } catch (e) { attempts++; await new Promise(r => setTimeout(r, 2000)) }
                    }
                    return null
                }

                let data = await savetube(urlYt)
                
                if (data) {
                    if (isVideo) {
                        let videoSource = data.videos.find(v => v.quality === 720) || data.videos.find(v => v.quality === 480) || data.videos[0]
                        if (!videoSource || !videoSource.url) throw new Error('SaveTube Video Empty')

                        await DinzBotz.sendMessage(m.chat, {
                            video: { url: videoSource.url },
                            caption: `🎬 *${data.title}*\n⏱️ Durasi: ${data.duration}s\n📺 Kualitas: ${videoSource.label}\n🔗 Server: SaveTube (Fallback 2)`,
                            mimetype: 'video/mp4'
                        }, { quoted: m })
                    } else {
                        let audioSource = data.videos.find(v => v.label.includes('MP3')) || data.videos.find(v => v.label.includes('audio'))
                        if (!audioSource || !audioSource.url) throw new Error('SaveTube Audio Empty')

                        await DinzBotz.sendMessage(m.chat, {
                            audio: { url: audioSource.url },
                            mimetype: 'audio/mpeg',
                            fileName: data.title + '.mp3',
                            contextInfo: {
                                externalAdReply: {
                                    title: data.title,
                                    body: `Duration: ${data.duration}s`,
                                    thumbnailUrl: data.thumbnail,
                                    sourceUrl: urlYt,
                                    mediaType: 1,
                                    renderLargerThumbnail: true
                                }
                            }
                        }, { quoted: m })
                    }
                    await DinzBotz.sendMessage(m.chat, { react: { text: "✅", key: m.key } })
                } else {
                    let mode = isVideo ? "merge" : "audio"
                    let resultUrl = await runSiputzx(mode, urlYt)
                    if (!resultUrl) throw new Error('Siputzx Failed')

                    if (isVideo) {
                        await DinzBotz.sendMessage(m.chat, { video: { url: resultUrl }, caption: '✅ Video berhasil didownload (Server Ultimate)', mimetype: 'video/mp4' }, { quoted: m })
                    } else {
                        await DinzBotz.sendMessage(m.chat, { audio: { url: resultUrl }, mimetype: "audio/mpeg", fileName: "audio.mp3" }, { quoted: m })
                    }
                    await DinzBotz.sendMessage(m.chat, { react: { text: "✅", key: m.key } })
                }

            } catch (finalErr) {
                console.log(finalErr)
                reply('Gagal mengambil data dari semua server (V2, V5, dan Scraper). Coba lagi nanti.')
            }
        }
    }
}
break
case 'playch': {
  if (!text) return reply('Masukkan judul lagu!\nContoh: *playch Jakarta Hari Ini*')

  const playChId = `${global.idch}`

  try {
    let vredenUrl = `https://api.vreden.my.id/api/v1/download/play/audio?query=${encodeURIComponent(text)}`
    let dataVreden = await (await fetch(vredenUrl)).json()

    if (dataVreden.result && dataVreden.result.download && dataVreden.result.download.url) {
      let meta = dataVreden.result.metadata
      
      const newsletterInfo = {
        newsletterJid: playChId,
        serverMessageId: 20,
        newsletterName: meta.title
      }

      await DinzBotz.sendMessage(playChId, {
        audio: { url: dataVreden.result.download.url },
        mimetype: 'audio/mpeg',
        fileName: `${meta.title}.mp3`,
        ptt: true,
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: newsletterInfo,
          externalAdReply: {
            title: meta.title,
            body: `${meta.author.name} • ${meta.timestamp}`,
            thumbnailUrl: meta.thumbnail,
            sourceUrl: meta.url,
            mediaType: 2,
            renderLargerThumbnail: false
          }
        }
      })
      reply(`Berhasil mengirim lagu ke channel via Vreden!`)
    } else {
      throw new Error('Vreden Gagal')
    }

  } catch (errVreden) {
    try {
      let faaSpotUrl = `https://api-faa.my.id/faa/spotify-play?q=${encodeURIComponent(text)}`
      let dataFaaSpot = await (await fetch(faaSpotUrl)).json()

      if (dataFaaSpot.status && dataFaaSpot.download && dataFaaSpot.download.url) {
        let info = dataFaaSpot.info

        const newsletterInfo = {
          newsletterJid: playChId,
          serverMessageId: 20,
          newsletterName: info.title
        }
        
        await DinzBotz.sendMessage(playChId, {
          audio: { url: dataFaaSpot.download.url },
          mimetype: 'audio/mpeg',
          fileName: `${info.title}.mp3`,
          ptt: true,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: newsletterInfo,
            externalAdReply: {
              title: info.title,
              body: `${info.artist} • ${info.duration}`,
              thumbnailUrl: info.thumbnail,
              sourceUrl: info.spotify_url,
              mediaType: 2,
              renderLargerThumbnail: false
            }
          }
        })
        reply(`Berhasil mengirim lagu ke channel via Spotify!`)
      } else {
        throw new Error('Faa Spotify Gagal')
      }

    } catch (errFaaSpot) {
      try {
        let faaScUrl = `https://api-faa.my.id/faa/soundcloud-play?query=${encodeURIComponent(text)}`
        let dataFaaSc = await (await fetch(faaScUrl)).json()

        if (dataFaaSc.status && dataFaaSc.result) {
          let res = dataFaaSc.result
          let minutes = Math.floor(res.duration / 60000)
          let seconds = ((res.duration % 60000) / 1000).toFixed(0)
          let durationStr = minutes + ":" + (seconds < 10 ? '0' : '') + seconds

          const newsletterInfo = {
            newsletterJid: playChId,
            serverMessageId: 20,
            newsletterName: res.title
          }

          await DinzBotz.sendMessage(playChId, {
            audio: { url: res.download_url },
            mimetype: 'audio/mpeg',
            fileName: `${res.title}.mp3`,
            ptt: true,
            contextInfo: {
              forwardingScore: 999,
              isForwarded: true,
              forwardedNewsletterMessageInfo: newsletterInfo,
              externalAdReply: {
                title: res.title,
                body: `${res.user} • ${durationStr}`,
                thumbnailUrl: res.thumbnail,
                sourceUrl: res.source_url,
                mediaType: 2,
                renderLargerThumbnail: false
              }
            }
          })
          reply(`Berhasil mengirim lagu ke channel via SoundCloud!`)
        } else {
          reply(`❌ Lagu tidak ditemukan di semua server.`)
        }

      } catch (errFinal) {
        console.log(errFinal)
        reply(`❌ Terjadi gangguan jaringan pada server bot.`)
      }
    }
  }
}
db.users[m.sender].exp += 300
break
case 'play': {
    if (!text) return reply(`Ketik judul lagu.\nContoh: ${prefix + command} 505`)

    await DinzBotz.sendMessage(m.chat, { react: { text: "🎧", key: m.key } })

    const axios = require('axios')
    const crypto = require('crypto')
    const yts = require('yt-search')

    try {
        let search = await yts(text)
        let vid = search.all && search.all.length > 0 ? search.all[0] : null
        
        if (!vid) throw new Error('YTS Not Found')

        const anu = Buffer.from('C5D58EF67A7584E4A29F6C35BBC4EB12', 'hex')

        function decrypt(enc) {
            const b = Buffer.from(enc.replace(/\s/g, ''), 'base64')
            const iv = b.subarray(0, 16)
            const data = b.subarray(16)
            const d = crypto.createDecipheriv('aes-128-cbc', anu, iv)
            return JSON.parse(Buffer.concat([d.update(data), d.final()]).toString())
        }

        async function savetube(url) {
            try {
                const random = await axios.get('https://media.savetube.vip/api/random-cdn', {
                    headers: { 'origin': 'https://save-tube.com', 'referer': 'https://save-tube.com/', 'User-Agent': 'Mozilla/5.0' }
                })
                const cdn = random.data.cdn
                const info = await axios.post(`https://${cdn}/v2/info`, { url }, {
                    headers: { 'Content-Type': 'application/json', 'origin': 'https://save-tube.com', 'referer': 'https://save-tube.com/', 'User-Agent': 'Mozilla/5.0' }
                })

                if (!info.data || !info.data.status) return null
                const json = decrypt(info.data.data)

                async function download(type, quality) {
                    const r = await axios.post(`https://${cdn}/download`, {
                        id: json.id, key: json.key, downloadType: type, quality: String(quality)
                    }, {
                        headers: { 'Content-Type': 'application/json', 'origin': 'https://save-tube.com', 'referer': 'https://save-tube.com/', 'User-Agent': 'Mozilla/5.0' }
                    })
                    return r.data && r.data.data ? r.data.data.downloadUrl : null
                }

                const videos = []
                for (const a of json.audio_formats) {
                    videos.push({ quality: a.quality, label: a.label, url: await download('audio', a.quality) })
                }
                return { title: json.title, duration: json.duration, thumbnail: json.thumbnail, videos }
            } catch (e) { return null }
        }

        async function runSiputzx(url) {
            let attempts = 0
            while (attempts < 10) {
                try {
                    const res = await axios.get(`https://youtubedl.siputzx.my.id/download?type=audio&url=${encodeURIComponent(url)}`)
                    if (res.data.status === "completed") return "https://youtubedl.siputzx.my.id" + res.data.fileUrl
                    await new Promise(r => setTimeout(r, 2000))
                    attempts++
                } catch (e) { attempts++; await new Promise(r => setTimeout(r, 2000)) }
            }
            return null
        }

        let data = await savetube(vid.url)
        let audioUrl = null

        if (data) {
            let audioSource = data.videos.find(v => v.label.includes('MP3')) || data.videos[0]
            if (audioSource) audioUrl = audioSource.url
        }

        if (!audioUrl) {
            audioUrl = await runSiputzx(vid.url)
        }

        if (!audioUrl) throw new Error('Scrape Failed')

        await DinzBotz.sendMessage(m.chat, {
            audio: { url: audioUrl },
            mimetype: 'audio/mpeg',
            fileName: vid.title + '.mp3',
            contextInfo: {
                externalAdReply: {
                    title: vid.title,
                    body: `YouTube Scrape | ${vid.author.name}`,
                    thumbnailUrl: vid.thumbnail,
                    sourceUrl: vid.url,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m })

    } catch (e) {
        reply('⚠️ Metode Scrape (YouTube) gagal/error. Mengalihkan ke Server API Vreden...')
        
        try {
            let vredenUrl = `https://api.vreden.my.id/api/ytplay?query=${encodeURIComponent(text)}`
            let { data } = await axios.get(vredenUrl)
            let res = data.result

            if (!res || !res.download || !res.download.url) throw new Error('Vreden Failed')

            await DinzBotz.sendMessage(m.chat, {
                audio: { url: res.download.url },
                mimetype: 'audio/mpeg',
                fileName: `${res.title}.mp3`,
                contextInfo: {
                    externalAdReply: {
                        title: res.title,
                        body: 'Vreden API (Fallback)',
                        thumbnailUrl: res.thumbnail,
                        sourceUrl: res.url,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m })

        } catch (e2) {
            reply('⚠️ YouTube API (Vreden) gagal. Mencari lagu di Spotify...')
            
            try {
                let faaSpotUrl = `https://api-faa.my.id/faa/spotify-play?q=${encodeURIComponent(text)}`
                let { data } = await axios.get(faaSpotUrl)
                let res = data

                if (!res.status || !res.download || !res.download.url) throw new Error('Spotify Failed')

                await DinzBotz.sendMessage(m.chat, {
                    audio: { url: res.download.url },
                    mimetype: 'audio/mpeg',
                    fileName: `${res.info.title}.mp3`,
                    contextInfo: {
                        externalAdReply: {
                            title: res.info.title,
                            body: `Spotify API | ${res.info.artist}`,
                            thumbnailUrl: res.info.thumbnail,
                            sourceUrl: res.info.spotify_url,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: m })

            } catch (e3) {
                reply('⚠️ Spotify gagal. Mencari lagu di SoundCloud...')

                try {
                    let faaScUrl = `https://api-faa.my.id/faa/soundcloud-play?query=${encodeURIComponent(text)}`
                    let { data } = await axios.get(faaScUrl)
                    let res = data.result

                    if (!data.status || !res) throw new Error('SoundCloud Failed')

                    await DinzBotz.sendMessage(m.chat, {
                        audio: { url: res.download_url },
                        mimetype: 'audio/mpeg',
                        fileName: `${res.title}.mp3`,
                        contextInfo: {
                            externalAdReply: {
                                title: res.title,
                                body: `SoundCloud API | ${res.user}`,
                                thumbnailUrl: res.thumbnail,
                                sourceUrl: res.source_url,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, { quoted: m })

                } catch (e4) {
                    reply('❌ Gagal mendownload lagu dari semua server (YouTube, Spotify, SoundCloud). Coba judul lain.')
                }
            }
        }
    }
}
break
case 'totalcase':
case 'case': {
    const fs = require('fs')
    let data = fs.readFileSync(__filename, 'utf-8')
    
    let cases = data.split('case \'')
    cases.shift()
    
    let list = {
        total: 0,
        owner: [],
        group: [],
        private: [],
        admin: [],
        botAdmin: [],
        premium: [],
        general: []
    }

    for (let code of cases) {
        let cmdName = code.split('\'')[0]
        if (!cmdName) continue

        let snippet = code.split(':')[1] || ''
        snippet = snippet.substring(0, 300)

        if (snippet.includes('!isCreator') || snippet.includes('!isOwner') || snippet.includes('!DinzTheCreator')) {
            list.owner.push(cmdName)
        } else if (snippet.includes('!isAdmins') || snippet.includes('!isAdmin')) {
            list.admin.push(cmdName)
        } else if (snippet.includes('!isBotAdmins') || snippet.includes('!isBotAdmin')) {
            list.botAdmin.push(cmdName)
        } else if (snippet.includes('!isPrem') || snippet.includes('!isPremium')) {
            list.premium.push(cmdName)
        } else if (snippet.includes('!isGroup') || snippet.includes('!m.isGroup')) {
            list.group.push(cmdName)
        } else if (snippet.match(/if\s*\(\s*(m\.)?isGroup\s*\)\s*return/)) {
            list.private.push(cmdName)
        } else {
            list.general.push(cmdName)
        }
        list.total++
    }

    let txt = `📊 *TOTAL CASE STATISTIC* 📊\n`
    txt += `Total Fitur: ${list.total}\n\n`
    
    txt += `┌ 👑 *OWNER* (${list.owner.length})\n`
    txt += `│ ${list.owner.join(', ') || '-'}\n`
    txt += `└──────────\n\n`

    txt += `┌ 🏢 *GROUP ONLY* (${list.group.length})\n`
    txt += `│ ${list.group.join(', ') || '-'}\n`
    txt += `└──────────\n\n`
    
    txt += `┌ 👮‍♂️ *ADMIN ONLY* (${list.admin.length})\n`
    txt += `│ ${list.admin.join(', ') || '-'}\n`
    txt += `└──────────\n\n`

    txt += `┌ 🤖 *BOT ADMIN* (${list.botAdmin.length})\n`
    txt += `│ ${list.botAdmin.join(', ') || '-'}\n`
    txt += `└──────────\n\n`

    txt += `┌ 📩 *PRIVATE CHAT* (${list.private.length})\n`
    txt += `│ ${list.private.join(', ') || '-'}\n`
    txt += `└──────────\n\n`
    
    txt += `┌ 💎 *PREMIUM* (${list.premium.length})\n`
    txt += `│ ${list.premium.join(', ') || '-'}\n`
    txt += `└──────────\n\n`

    txt += `┌ 🌍 *UMUM / BIASA* (${list.general.length})\n`
    txt += `│ ${list.general.join(', ') || '-'}\n`
    txt += `└──────────`

    reply(txt)
}
break
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
      if (!DinzTheCreator) return reply('Khusus Admin!!')
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

case 'mute': {
    if (!m.isGroup) return reply('Khusus Grup!')
    if (!isAdmins && !isOwner) return reply('Khusus Admin!')

    if (!db.chats[m.chat]) db.chats[m.chat] = {}

    db.chats[m.chat].mute = !db.chats[m.chat].mute
    
    fs.writeFileSync('./database/database.json', JSON.stringify(db, null, 2))

    reply(`🔇 *MODE MUTE GROUP*\n\nStatus: ${db.chats[m.chat].mute ? 'AKTIF' : 'NONAKTIF'}\n\n${db.chats[m.chat].mute ? 'Sekarang hanya Admin yang bisa menggunakan bot di grup ini.' : 'Sekarang semua member bisa menggunakan bot kembali.'}`)
}
break
case 'antilink':
case 'groupsecurity': {
    if (!m.isGroup) return reply('Khusus Group!')
    if (!isBotAdmins) return reply('Bot harus jadi Admin dulu!')
    if (!isAdmins && !isOwner) return reply('Khusus Admin!')

    if (!antilinkk[m.chat]) {
        antilinkk[m.chat] = {
            wa: false, tt: false, ig: false, fb: false, all: false, 
            tagsw: false, image: false, video: false, sticker: false, nsfw: false,
            antibule: false, antitoxic: false,
            action: 'delete', custom: [], warnings: {},
            msg_admin: 'Admin mah bebas bos, lanjutkeun! 😎',
            msg_warn: '⚠️ @user Dilarang mengirim link/media terlarang di sini!',
            msg_kick: '⛔ @user Melanggar aturan 3x, selamat tinggal! 👋'
        }
    }

    let args = text.split(' ')
    let type = args[0] ? args[0].toLowerCase() : ''
    let content = args.slice(1).join(' ')
    let data = antilinkk[m.chat]

    if (!data.msg_admin) data.msg_admin = 'Admin mah bebas bos, lanjutkeun! 😎'
    if (!data.msg_warn) data.msg_warn = '⚠️ @user Dilarang mengirim link/media terlarang di sini!'
    if (!data.msg_kick) data.msg_kick = '⛔ @user Melanggar aturan 3x, selamat tinggal! 👋'
    if (!data.custom) data.custom = []
    if (!data.action) data.action = 'delete'
    if (data.image === undefined) data.image = false
    if (data.video === undefined) data.video = false
    if (data.sticker === undefined) data.sticker = false
    if (data.nsfw === undefined) data.nsfw = false
    if (data.antibule === undefined) data.antibule = false
    if (data.antitoxic === undefined) data.antitoxic = false

    if (type === 'wa') { data.wa = !data.wa; saveantilinkk(); reply(`Antilink WhatsApp: ${data.wa ? 'ON' : 'OFF'}`) }
    else if (type === 'tt') { data.tt = !data.tt; saveantilinkk(); reply(`Antilink TikTok: ${data.tt ? 'ON' : 'OFF'}`) }
    else if (type === 'ig') { data.ig = !data.ig; saveantilinkk(); reply(`Antilink Instagram: ${data.ig ? 'ON' : 'OFF'}`) }
    else if (type === 'fb') { data.fb = !data.fb; saveantilinkk(); reply(`Antilink Facebook: ${data.fb ? 'ON' : 'OFF'}`) }
    else if (type === 'tagsw') { data.tagsw = !data.tagsw; saveantilinkk(); reply(`Anti Tag SW: ${data.tagsw ? 'ON' : 'OFF'}`) }
    else if (type === 'all') { data.all = !data.all; saveantilinkk(); reply(`Antilink All: ${data.all ? 'ON' : 'OFF'}`) }
    
    else if (type === 'foto' || type === 'image') { data.image = !data.image; saveantilinkk(); reply(`Anti Image: ${data.image ? 'ON' : 'OFF'}`) }
    else if (type === 'video') { data.video = !data.video; saveantilinkk(); reply(`Anti Video: ${data.video ? 'ON' : 'OFF'}`) }
    else if (type === 'sticker') { data.sticker = !data.sticker; saveantilinkk(); reply(`Anti Sticker: ${data.sticker ? 'ON' : 'OFF'}`) }
    else if (type === 'nsfw' || type === 'antinsfw') { data.nsfw = !data.nsfw; saveantilinkk(); reply(`Anti NSFW (18+): ${data.nsfw ? 'ON' : 'OFF'}`) }
    else if (type === 'bule' || type === 'antibule') { data.antibule = !data.antibule; saveantilinkk(); reply(`Anti Bule (+62 Only): ${data.antibule ? 'ON' : 'OFF'}`) }
    else if (type === 'toxic' || type === 'antitoxic') { data.antitoxic = !data.antitoxic; saveantilinkk(); reply(`Anti Toxic: ${data.antitoxic ? 'ON' : 'OFF'}`) }
    
    else if (type === 'setadmin') {
        if (!content) return reply(`Contoh: ${prefix}antilink setadmin Ampun puh sepuh @user mah bebas!`)
        data.msg_admin = content
        saveantilinkk()
        reply(`✅ Pesan Admin Immunity berhasil diubah!`)
    } 
    else if (type === 'setwarn') {
        if (!content) return reply(`Contoh: ${prefix}antilink setwarn Eh @user, jangan nyebar link woy!`)
        data.msg_warn = content
        saveantilinkk()
        reply(`✅ Pesan Peringatan berhasil diubah!`)
    } 
    else if (type === 'setkick') {
        if (!content) return reply(`Contoh: ${prefix}antilink setkick Beban grup berkurang satu, bye @user!`)
        data.msg_kick = content
        saveantilinkk()
        reply(`✅ Pesan Kick berhasil diubah!`)
    }

    else if (type === 'action') {
        if (args[1] === 'kick') { data.action = 'kick'; saveantilinkk(); reply('Mode: KICK') }
        else if (args[1] === 'delete') { data.action = 'delete'; saveantilinkk(); reply('Mode: DELETE') }
        else reply(`Pilih: kick / delete`)
    } 
    else if (type === 'add') {
        if (!args[1]) return reply('Masukin linknya!')
        data.custom.push(args[1]); saveantilinkk(); reply('Link ditambahkan!')
    } 
    else if (type === 'del') {
        let idx = data.custom.indexOf(args[1])
        if (idx > -1) { data.custom.splice(idx, 1); saveantilinkk(); reply('Link dihapus!') }
    }
    else if (type === 'reset') {
        data.warnings = {}; saveantilinkk()
        reply(`✅ Warning count seluruh member direset.`)
    }

    else {
        let status = (k) => data[k] ? '✅ ON' : '❌ OFF'
        let act = data.action === 'kick' ? '😈 KICK (3x Warn)' : '🛡️ DELETE ONLY'
        let customList = data.custom.length > 0 ? data.custom.join(', ') : 'KOSONG'
        
        reply(`🛡️ *GROUP SECURITY ULTIMATE* 🛡️\n\n` +
        `⚙️ *Action Mode:* ${act}\n` +
        `📝 *Custom Link:* [ ${customList} ]\n` +
        `─────────────────────\n` +
        `📱 *wa:* ${status('wa')}\n` +
        `🎵 *tt:* ${status('tt')}\n` +
        `📸 *ig:* ${status('ig')}\n` +
        `📘 *fb:* ${status('fb')}\n` +
        `🏷️ *tagsw:* ${status('tagsw')}\n` + 
        `🌐 *all:* ${status('all')}\n` +
        `─────────────────────\n` +
        `🖼️ *image:* ${status('image')}\n` +
        `🎥 *video:* ${status('video')}\n` +
        `🎭 *sticker:* ${status('sticker')}\n` +
        `🔞 *nsfw:* ${status('nsfw')}\n` +
        `🌍 *bule:* ${status('antibule')}\n` +
        `🤬 *toxic:* ${status('antitoxic')}\n` +
        `─────────────────────\n\n` +
        `*⚙️ PENGATURAN PESAN:*\n` +
        `• *${prefix}antilink setadmin <text>*\n` +
        `• *${prefix}antilink setwarn <text>*\n` +
        `• *${prefix}antilink setkick <text>*\n\n` +
        `*⚙️ COMMAND LAIN:*\n` +
        `• *${prefix}antilink <tipe>*\n` +
        `• *${prefix}antilink action kick/delete*\n` +
        `• *${prefix}antilink add <link>*\n` +
        `• *${prefix}antilink reset*\n` +
        `_(Contoh: ${prefix}antilink bule)_`)
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
    if (!text) return reply(`Kirim link MediaFire.\nContoh: ${prefix + command} https://www.mediafire.com/file/xxxxx`)

    await DinzBotz.sendMessage(m.chat, { react: { text: "📦", key: m.key } })

    const axios = require('axios')

    try {
        const { data } = await axios.get(`https://api-faa.my.id/faa/mediafire?url=${encodeURIComponent(text)}`)

        if (!data.status || !data.result) return reply('File tidak ditemukan atau link bermasalah.')

        const file = data.result
        
        let mimeType = 'application/octet-stream'
        if (file.mime === 'zip') mimeType = 'application/zip'
        if (file.mime === 'pdf') mimeType = 'application/pdf'
        if (file.mime === 'rar') mimeType = 'application/x-rar-compressed'
        if (file.mime === 'apk') mimeType = 'application/vnd.android.package-archive'

        let caption = `╭───┈ *MEDIAFIRE* ┈───\n`
        caption += `│ 📄 *Nama:* ${file.filename}\n`
        caption += `│ ⚖️ *Ukuran:* ${file.size}\n`
        caption += `│ 📂 *Tipe:* ${file.mime.toUpperCase()}\n`
        caption += `│ 🚀 *Link:* ${file.download_url}\n`
        caption += `╰─────────────────────\n`
        caption += `_Sedang mengirim file, mohon tunggu..._`

        await DinzBotz.sendMessage(m.chat, {
            document: { url: file.download_url },
            fileName: file.filename,
            mimetype: mimeType,
            caption: caption
        }, { quoted: m })

        await DinzBotz.sendMessage(m.chat, { react: { text: "✅", key: m.key } })

    } catch (e) {
        console.log(e)
        reply('Terjadi kesalahan saat mengambil file.')
    }
}
break
case 'igdl':
    case 'ig':
    case 'instagram': {
      try {
        // Validasi input
        if (!args[0]) {
          return reply(`📌 *Cara Menggunakan:*\n${prefix}igdl <link Instagram>\n\nContoh:\n${prefix}igdl https://www.instagram.com/p/ABC123/`);
        }

        const url = args[0];
        if (!/instagram\.com\//.test(url)) {
          return m.reply('⚠️ Link harus berupa:\n- Postingan: https://instagram.com/p/...\n- Reel: https://instagram.com/reel/...\n- IG TV: https://instagram.com/tv/...');
        }

        const axios = require('axios');
        const cheerio = require('cheerio');
        const qs = require('qs');
        const waitMsg = await m.reply('⏳ Mengunduh media...');

        const headers = {
          'Content-Type': 'application/x-www-form-urlencoded'
        };
        const data = qs.stringify({
          url: url,
          lang: 'en'
        });

        const res = await axios.post('https://api.instasave.website/media', data, {
          headers
        });
        const html = (res.data.match(/innerHTML\s*=\s*"(.+?)";/s)?.[1] || '').replace(/\\"/g, '"');
        const $ = cheerio.load(html);
        const result = [];

        $('.download-items').each((_, el) => {
          const downloadUrl = $(el).find('a[title="Download"]').attr('href');
          const type = $(el).find('.format-icon i').attr('class')?.includes('ivideo') ? 'video' : 'image';
          if (downloadUrl) result.push({
            type,
            url: downloadUrl
          });
        });

        if (!result.length) throw new Error('Media tidak ditemukan');

        // Kirim media dengan caption sederhana
        for (let [index, media] of result.entries()) {
          const caption = `📥 *Berhasil Diunduh* (${index + 1}/${result.length})\n` +
            `🔗 ${url}\n` +
            `🕒 ${new Date().toLocaleTimeString()}`;

          if (media.type === 'video') {
            await DinzBotz.sendMessage(m.chat, {
              video: {
                url: media.url
              },
              caption: caption
            }, {
              quoted: m
            });
          } else {
            await DinzBotz.sendMessage(m.chat, {
              image: {
                url: media.url
              },
              caption: caption
            }, {
              quoted: m
            });
          }

          if (index < result.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 1500)); // Delay
          }
        }

      } catch (error) {
        console.error('Error:', error);
        m.reply(`❌ Gagal mengunduh:\n${error.message}\n\nPastikan link valid dan coba lagi.`);
      }
      break;
    }
case 'telestick':
case 'tele': {
    if (!text) return reply(`Kirim link sticker pack Telegram.\nContoh: ${prefix + command} https://t.me/addstickers/namapack`)

    await DinzBotz.sendMessage(m.chat, { react: { text: "⏳", key: m.key } })

    const axios = require('axios')

    try {
        const { data } = await axios.get(`https://dinzapi-sweager.vercel.app/api/downloader/telestick?url=${encodeURIComponent(text)}`)

        if (!data.status || !data.data || !data.data.success) return reply('Gagal mengambil data sticker pack.')

        const pack = data.data.pack_info
        const stickers = data.data.stickers

        let txt = `✅ *STICKER DITEMUKAN*\n\n`
        txt += `📦 *Nama:* ${pack.title}\n`
        txt += `🔢 *Total:* ${pack.stickers_count}\n\n`
        txt += `_Sedang mengirim stiker satu per satu..._`

        await reply(txt)

        for (let sticker of stickers) {
            try {
                if (sticker.is_animated || sticker.is_video) {
                    await DinzBotz.sendVideoAsSticker(m.chat, sticker.image_url, m, { 
                        packname: pack.title, 
                        author: 'DinzBotz Tele Sticker' 
                    })
                } else {
                    await DinzBotz.sendImageAsSticker(m.chat, sticker.image_url, m, { 
                        packname: pack.title, 
                        author: 'DinzBotz Tele Sticker' 
                    })
                }
                await new Promise(resolve => setTimeout(resolve, 2000))
            } catch (e) {
                console.log('Gagal kirim satu stiker:', e)
            }
        }

        await DinzBotz.sendMessage(m.chat, { react: { text: "✅", key: m.key } })

    } catch (e) {
        console.log(e)
        reply('Terjadi kesalahan saat mengambil stiker.')
    }
}
break
case 'pinterest':
case 'pin': {
    if (!text) return reply(`Mau cari gambar apa?\nContoh: ${prefix + command} hutao`)

    await DinzBotz.sendMessage(m.chat, { react: { text: "🔍", key: m.key } })

    const axios = require('axios')
    const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys")

    try {
        const { data } = await axios.get(`https://api-faa.my.id/faa/pinterest?q=${encodeURIComponent(text)}`)

        if (!data.status || !data.result || data.result.length === 0) {
             await DinzBotz.sendMessage(m.chat, { react: { text: "❌", key: m.key } })
             return reply('Gambar tidak ditemukan.')
        }

        let images = data.result.sort(() => Math.random() - 0, 9).slice(0, 9)
        let cards = []

        for (let i = 0; i < images.length; i++) {
            let url = images[i]
            
            let media = await prepareWAMessageMedia({ image: { url: url } }, { upload: DinzBotz.waUploadToServer })
            
            cards.push({
                body: proto.Message.InteractiveMessage.Body.fromObject({
                    text: `*Result ${i + 1}* from: ${text}`
                }),
                footer: proto.Message.InteractiveMessage.Footer.fromObject({
                    text: "© DinzBotz Pinterest"
                }),
                header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: "Pinterest Search",
                    hasMediaAttachment: true,
                    imageMessage: media.imageMessage
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [
                        {
                            name: "cta_url",
                            buttonParamsJson: `{"display_text":"👁️ View HD Image","url":"${url}","merchant_url":"${url}"}`
                        }
                    ]
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
                            text: `🎨 *PINTEREST SEARCH*\n🔎 Query: ${text}\n📱 Geser untuk melihat hasil lainnya`
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.fromObject({
                            text: "DinzBotz Carousel"
                        }),
                        header: proto.Message.InteractiveMessage.Header.fromObject({
                            title: "",
                            subtitle: "",
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
        await DinzBotz.sendMessage(m.chat, { react: { text: "✅", key: m.key } })

    } catch (e) {
        console.log(e)
        reply('Gagal membuat carousel, coba lagi nanti.')
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
    if (!user) return reply(`User ${who} not in database`)

    let clanName = user.clan && user.clan !== '' ? user.clan : 'No Clan'
    
    let sortedlevel = Object.entries(global.db.users).sort((a, b) => b[1].level - a[1].level)
    let userslevel = sortedlevel.map(v => v[0])
    let sortedchip = Object.entries(global.db.users).sort((a, b) => b[1].chip - a[1].chip)
    let userschip = sortedchip.map(v => v[0])
    let sortedmoney = Object.entries(global.db.users).sort((a, b) => b[1].money - a[1].money)
    let usersmoney = sortedmoney.map(v => v[0])

    let owners = global.ownerNumber || []
    let cleanTargetNum = who.split('@')[0]
    let isMods = owners.includes(cleanTargetNum)
    let isPremData = premium.some(u => u.id === who || u.lid === who)
    let isPrems = isMods || isPremData || new Date() - user.premiumTime < 0
    let limit = isPrems ? 'Unlimited' : user.limit
    
    let baseStatus = isMods ? 'OWNER' : isPrems ? 'PREMIUM' : 'FREE'
    const namaUser = user.registered ? user.name : DinzBotz.getName(who)
    const userSn = user.sn || 'UNREGISTERED'

    const getEmot = (v) => global.rpg && global.rpg.emoticon ? global.rpg.emoticon(v) : v
    const fmt = (v) => {
        let e = getEmot(v)
        return e !== v ? `${e} ${v}` : v
    }

    let tools = Object.keys(inventory.tools).map(v => user[v] && `*${fmt(v)}:* ${typeof inventory.tools[v] === 'object' ? inventory.tools[v][user[v]?.toString()] : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
    let items = Object.keys(inventory.items).map(v => user[v] && `*${fmt(v)}:* ${user[v]}`).filter(v => v).join('\n').trim()
    let crates = Object.keys(inventory.crates).map(v => user[v] && `*${fmt(v)}:* ${user[v]}`).filter(v => v).join('\n').trim()
    let pets = Object.keys(inventory.pets).map(v => user[v] && `*${fmt(v)}:* ${user[v] >= inventory.pets[v] ? 'Max Levels' : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()

    let caption = `
━━━━━━━━━━━━━━━━━━
👤 *ᴜsᴇʀ ɪɴꜰᴏ*
🎫 ʟɪᴍɪᴛ : *${limit}*
🔑 ꜱɴ : *${userSn}*

🎒 *ɪɴᴠᴇɴᴛᴏʀʏ*
${Object.keys(inventory.others).map(v => user[v] && `➠ ${fmt(v)}: ${user[v]}`).filter(v => v).join('\n')} ${tools ? `

*ʟɪꜱᴛ ᴛᴏᴏʟs* :
${tools}` : ''}${items ? `

*ʟɪꜱᴛ ɪᴛᴇᴍs* :
${items}` : ''}${crates ? `

*ʟɪꜱᴛ ᴄʀᴀᴛᴇs* :
${crates}` : ''}${pets ? `

*ʟɪꜱᴛ ᴩᴇᴛs* :
${pets}` : ''}

🛡️ *ᴄʟᴀɴ ꜱᴛᴀᴛᴜs* :
🏴‍☠️ ɴᴀᴍᴇ : *${clanName}*

♻️ *ᴀʀᴄʜɪᴇᴠᴇᴍᴇɴᴛ* :
${getEmot('chip')} ᴛᴏᴘ ᴄʜɪᴘ *${userschip.indexOf(who) + 1}*
${getEmot('money')} ᴛᴏᴘ ᴍᴏɴᴇʏ *${usersmoney.indexOf(who) + 1}*
${getEmot('level')} ᴛᴏᴘ ʟᴇᴠᴇʟ *${userslevel.indexOf(who) + 1}*
━━━━━━━━━━━━━━━━━━
`.trim()

    try {
        await DinzBotz.sendMessage(m.chat, {
            react: {
                text: '🎨',
                key: m.key
            }
        })

        let ppUrl
        try {
            ppUrl = await DinzBotz.profilePictureUrl(who, 'image')
        } catch {
            ppUrl = 'https://i.pinimg.com/564x/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.jpg'
        }

        const userLevel = user.level || 0
        const currentExp = user.exp || 0
        const maxExp = 1000 * (userLevel + 1)
        const bgUrl = 'https://cdn.dinzid.biz.id/uv36.jpg'
        
        const { createMeCanvas } = require('../library/canvasMe')
        const canvasBuffer = await createMeCanvas(ppUrl, namaUser, baseStatus, clanName, limit, userSn, userLevel, currentExp, maxExp, bgUrl)

        if (canvasBuffer) {
            await DinzBotz.sendMessage(m.chat, {
                image: canvasBuffer,
                caption: caption
            }, {
                quoted: m
            })
            await DinzBotz.sendMessage(m.chat, {
                react: {
                    text: '',
                    key: m.key
                }
            })
        } else {
            reply(caption)
        }

    } catch (e) {
        console.error(e)
        reply(caption)
    }

    global.db.users[m.sender].exp += 100
}
break
case 'craft':
case 'crafting': {
    if (!m.isGroup) return reply(mess.only.group)
    
    // 1. DEFINISI RESEP (Mudah diedit)
    const recipes = {
        pickaxe: { wood: 10, rock: 5, iron: 5, string: 20 },
        sword: { wood: 10, iron: 15 },
        fishingrod: { wood: 10, iron: 2, string: 20 },
        armor: { iron: 30, emerald: 1, diamond: 5 },
        atm: { emerald: 3, diamond: 6, money: 10000 }
    }

    let type = (args[0] || '').toLowerCase()
    let user = global.db.users[m.sender]
    let settings = global.db.settings[botNumber]

    // 2. JIKA TIDAK ADA ARGUMEN ATAU ITEM TIDAK ADA DI LIST
    if (!type || !recipes[type]) {
        let textMenu = `
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█  ⚒️ *CRAFTING TABLE* ⚒️  █
█▄▄▄▄█▄▄▄▄█▄▄▄▄█

Silahkan pilih item yang ingin dibuat:
Format: *${prefix + command} [item]*

*LIST ITEM:*
`
        for (let item in recipes) {
            textMenu += `▧ ${item.charAt(0).toUpperCase() + item.slice(1)}\n`
        }
        
        textMenu += `\n_Contoh: ${prefix}craft sword_`
        
        return await DinzBotz.sendMessage(m.chat, {
            image: { url: 'https://img.freepik.com/free-photo/tools-dark-wooden-background_23-2148815779.jpg' }, // Gambar Menu Umum
            caption: textMenu
        }, { quoted: m })
    }

    // 3. LOGIKA CRAFTING
    let selectedRecipe = recipes[type]
    let isEnough = true
    let missingItems = []

    // Cek Bahan
    for (let material in selectedRecipe) {
        let required = selectedRecipe[material]
        let owned = user[material] || 0
        if (owned < required) {
            isEnough = false
            missingItems.push(`${material} (Kurang ${required - owned})`)
        }
    }

    // Cek apakah user sudah punya item tersebut (Kecuali item consumable/stackable tertentu jika ada)
    // Di logic lama kamu: if (user.pickaxe > 0) return reply...
    if (user[type] > 0) return reply(`❌ Kamu sudah memiliki *${type}*!`)

    // 4. GENERATE CANVAS CRAFTING TABLE
    await DinzBotz.sendMessage(m.chat, { react: { text: '⚒️', key: m.key } })
    
    // Kirim data inventory user yang relevan ke canvas
    const canvasBuffer = await createCraftCanvas(type, selectedRecipe, user)

    // 5. EKSEKUSI
    if (isEnough) {
        // Kurangi Bahan
        for (let material in selectedRecipe) {
            user[material] -= selectedRecipe[material]
            // Update Stock Global (Logic lama kamu)
            if (settings.stock && typeof settings.stock[material] !== 'undefined') {
                settings.stock[material] += selectedRecipe[material]
            }
        }

        // Tambah Item
        user[type] += 1
        // Tambah Durability (Sesuai logic lama)
        if (type === 'pickaxe') user.pickaxedurability = 40
        if (type === 'sword') user.sworddurability = 40
        if (type === 'fishingrod') user.fishingroddurability = 40
        if (type === 'armor') user.armordurability = 50
        if (type === 'atm') user.fullatm = 500000000

        // Kirim Gambar Sukses
        await DinzBotz.sendMessage(m.chat, {
            image: canvasBuffer,
            caption: `✅ *SUKSES MEMBUAT ${type.toUpperCase()}*\n\nBahan telah dikurangi dari inventory.`
        }, { quoted: m })

    } else {
        // Kirim Gambar Gagal (Visual Merah)
        await DinzBotz.sendMessage(m.chat, {
            image: canvasBuffer,
            caption: `❌ *GAGAL CRAFTING*\n\nBahan tidak cukup!\nLihat gambar untuk detail kekurangan bahan.`
        }, { quoted: m })
    }
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
        reply('🎉 Fitur level up telah diaktifkan!\nSekarang bot akan mengirim notifikasi saat level user naik.');
      } else if (action === 'off') {
        levelUpManager.updateSettings({
          enabled: false
        });
        reply('🔇 Fitur level up telah dinonaktifkan.\nNotifikasi level up tidak akan ditampilkan.');
      } else {
        const status = settings.enabled ? '🟢 AKTIF' : '🔴 NONAKTIF';
        const lastUpdated = settings.lastUpdated ? `\nTerakhir diupdate: ${new Date(settings.lastUpdated).toLocaleString()}` : '';

        reply(
          `⚙️ *Pengaturan Level Up*\n\n` +
          `Status: ${status}${lastUpdated}\n\n` +
          `Gunakan:\n` +
          `• ${prefix}levelup on - Aktifkan notifikasi\n` +
          `• ${prefix}levelup off - Nonaktifkan notifikasi`
        );
      }
      break;
    }
case 'dungeon':
case 'adventure': {
    if (!m.isGroup) return reply(mess.only.group)

    let user = global.db.users[m.sender]
    const cooldown = 300000 
    let timers = cooldown - (new Date() - user.lastdungeon)

    if (new Date() - user.lastdungeon < cooldown) {
        let menit = Math.floor(timers / 60000)
        let detik = Math.floor((timers % 60000) / 1000)
        return reply(`⏳ *STAMINA HABIS*\n\nKamu butuh istirahat.\nSilahkan tunggu *${menit} menit ${detik} detik* lagi.`)
    }

    if (user.health < 50) return reply(`⚠️ *NYAWA KRITIS (${user.health})*\n\nTidak bisa bertarung dengan kondisi sekarat!\nGunakan *${prefix}heal* atau beli potion di *${prefix}shop*.`)

    const monsters = [
        { name: 'Slime', hp: 200, dmg: 15, tier: 'Easy', img: 'https://img.icons8.com/fluency/96/slime.png', exp: 150, money: 500, dropRate: 0.8 },
        { name: 'Goblin', hp: 400, dmg: 35, tier: 'Easy', img: 'https://img.icons8.com/fluency/96/goblin.png', exp: 300, money: 1000, dropRate: 0.7 },
        { name: 'Wolf', hp: 700, dmg: 60, tier: 'Medium', img: 'https://img.icons8.com/fluency/96/wolf.png', exp: 600, money: 2500, dropRate: 0.6 },
        { name: 'Orc', hp: 1200, dmg: 90, tier: 'Medium', img: 'https://img.icons8.com/fluency/96/orc.png', exp: 1000, money: 4500, dropRate: 0.5 },
        { name: 'Demon', hp: 3000, dmg: 180, tier: 'Hard', img: 'https://img.icons8.com/fluency/96/demon.png', exp: 3000, money: 10000, dropRate: 0.4 },
        { name: 'Dragon', hp: 8000, dmg: 400, tier: 'Hell', img: 'https://img.icons8.com/fluency/96/dragon.png', exp: 10000, money: 50000, dropRate: 0.2 },
        { name: 'Hydra', hp: 15000, dmg: 700, tier: 'GOD', img: 'https://img.icons8.com/fluency/96/hydra.png', exp: 25000, money: 100000, dropRate: 0.1 }
    ]

    let myLevel = user.level || 0
    let potentialEnemies = monsters.filter(m => {
        if (myLevel < 5) return m.tier === 'Easy'
        if (myLevel < 20) return m.tier === 'Easy' || m.tier === 'Medium'
        if (myLevel < 50) return m.tier === 'Medium' || m.tier === 'Hard'
        if (myLevel < 100) return m.tier === 'Hard' || m.tier === 'Hell'
        return true
    })
    
    let enemy = potentialEnemies[Math.floor(Math.random() * potentialEnemies.length)]

    let swordDmg = (user.sword || 0) * 15
    let playerBaseDmg = 30 + (user.level * 2)
    let totalPlayerDmg = (playerBaseDmg + swordDmg) * 5 
    
    let armorDef = (user.armor || 0) * 8
    let enemyHitDmg = Math.max(10, enemy.dmg - armorDef)
    let totalEnemyDmg = enemyHitDmg * Math.floor(Math.random() * 4 + 1)

    let isWin = totalPlayerDmg >= enemy.hp
    let statusBattle = isWin ? 'VICTORY' : 'DEFEAT'
    let rewardText = ''

    user.lastdungeon = new Date() * 1

    if (isWin) {
        user.exp += enemy.exp
        user.money += enemy.money
        rewardText = `+${enemy.exp} XP | +${enemy.money} Money`

        if (Math.random() < enemy.dropRate) {
            let commonDrops = ['iron', 'wood', 'rock', 'string', 'trash', 'potion']
            let rareDrops = ['gold', 'diamond', 'emerald']
            
            let gotItem = ''
            if (enemy.tier === 'Hard' || enemy.tier === 'Hell' || enemy.tier === 'GOD') {
                gotItem = rareDrops[Math.floor(Math.random() * rareDrops.length)]
            } else {
                gotItem = commonDrops[Math.floor(Math.random() * commonDrops.length)]
            }
            
            user[gotItem] = (user[gotItem] || 0) + 1
            rewardText += ` | Loot: 1 ${gotItem.toUpperCase()}`
        }
        
        let needExp = 1000 * (user.level + 1)
        if (user.exp >= needExp) {
            user.level += 1
            user.exp -= needExp
            rewardText += ` | 🆙 LEVEL UP! (${user.level})`
        }

    } else {
        user.health = Math.max(0, user.health - totalEnemyDmg)
        rewardText = `Terluka Parah! HP -${totalEnemyDmg}`
    }

    if (user.sword > 0) user.sworddurability = Math.max(0, user.sworddurability - 1)
    if (user.armor > 0) user.armordurability = Math.max(0, user.armordurability - 1)

    await DinzBotz.sendMessage(m.chat, { react: { text: '⚔️', key: m.key } })

    let ppUrl
    try { ppUrl = await DinzBotz.profilePictureUrl(m.sender, 'image') } 
    catch { ppUrl = 'https://i.pinimg.com/564x/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.jpg' }

    let playerName = user.name || user.nama || m.pushName || 'Player'

    let canvas = await createDungeonCanvas(
        { name: playerName, hp: user.health, maxHp: 100 + (myLevel * 50), image: ppUrl },
        { name: enemy.name, hp: isWin ? 0 : enemy.hp, maxHp: enemy.hp, image: enemy.img, tier: enemy.tier },
        { status: statusBattle, dmgDealt: totalPlayerDmg, dmgTaken: isWin ? 0 : totalEnemyDmg, reward: rewardText }
    )

    let caption = `*⚔️ BATTLE LOG*\n\n👤 *${playerName}* (Lv.${user.level})\n🆚\n👹 *${enemy.name}* [${enemy.tier}]\n\n💥 *Combat Info:*\n🗡️ Atk Power: ${playerBaseDmg + swordDmg} (Sword Lv.${user.sword})\n🛡️ Def Power: ${armorDef} (Armor Lv.${user.armor})\n\n🎁 *Result:* ${rewardText}`

    if (canvas) {
        await DinzBotz.sendMessage(m.chat, { image: canvas, caption: caption }, { quoted: m })
    } else {
        reply(caption)
    }
}
break

case 'heal':
case 'berobat': {
    let user = global.db.users[m.sender]
    if (user.health >= 100) return reply('Darah kamu masih penuh! (100%)')

    if (user.potion > 0) {
        user.potion -= 1
        user.health = 100
        return reply(`✅ *HEALED*\nKamu minum 🥤 Potion.\nDarah kembali 100%`)
    } 
    
    if (user.money >= 1000) {
        user.money -= 1000
        user.health = 100
        return reply(`✅ *HEALED*\nKamu membayar 💰 1000 ke Dokter.\nDarah kembali 100%`)
    }

    return reply(`❌ *GAGAL*\nKamu butuh Potion atau 1000 Money untuk berobat.\nKetik *${prefix}shop* untuk beli potion.`)
}
break
case 'upgrade':
case 'tempa': {
    if (!args[0]) {
        return reply(`
🔨 *BLACKSMITH* 🔨
Upgrade equipment kamu agar kuat di dungeon!

*⚔️ Sword (Menambah Attack)*
Biaya: Level * 2000 Money + 5 Iron + 5 Wood
Cmd: *${prefix}upgrade sword*

*🛡️ Armor (Menambah Defense)*
Biaya: Level * 2000 Money + 5 Iron + 2 Diamond
Cmd: *${prefix}upgrade armor*
`)
    }

    let type = args[0].toLowerCase()
    let user = global.db.users[m.sender]

    if (type === 'sword') {
        if (user.sword == 0) return reply('Kamu belum punya Sword! Craft dulu.')
        let costMoney = user.sword * 2000
        let costIron = 5
        let costWood = 5

        if (user.money < costMoney || user.iron < costIron || user.wood < costWood) {
            return reply(`❌ *BAHAN KURANG*\nButuh:\n💰 ${costMoney} Money\n⛓️ ${costIron} Iron\n🪵 ${costWood} Wood`)
        }

        user.money -= costMoney
        user.iron -= costIron
        user.wood -= costWood
        user.sword += 1
        user.sworddurability = 100 
        reply(`🔥 *UPGRADE SUKSES*\nSword naik ke Level ${user.sword}!\nAttack Power meningkat.`)
    } 
    else if (type === 'armor') {
        if (user.armor == 0) return reply('Kamu belum punya Armor! Craft dulu.')
        let costMoney = user.armor * 2000
        let costIron = 5
        let costDiamond = 2

        if (user.money < costMoney || user.iron < costIron || user.diamond < costDiamond) {
            return reply(`❌ *BAHAN KURANG*\nButuh:\n💰 ${costMoney} Money\n⛓️ ${costIron} Iron\n💎 ${costDiamond} Diamond`)
        }

        user.money -= costMoney
        user.iron -= costIron
        user.diamond -= costDiamond
        user.armor += 1
        user.armordurability = 100
        reply(`🛡️ *UPGRADE SUKSES*\nArmor naik ke Level ${user.armor}!\nDefense Power meningkat.`)
    }
    else {
        reply('Hanya bisa upgrade sword atau armor.')
    }
}
break
case 'shop':
case 'buy':
case 'sell': {
    if (!m.isGroup) return reply(mess.only.group)

    const capitalize = (word) => word.charAt(0).toUpperCase() + word.substr(1)
    const getEmot = (v) => {
        const emoticons = {
            limit: '🎫', chip: '💾', exp: '✨', potion: '🥤', trash: '🗑️',
            wood: '🪵', rock: '🪨', string: '🕸️', iron: '⛓️', diamond: '💎',
            emerald: '❇️', gold: '🪙', common: '📦', uncommon: '🛍️', mythic: '🎁',
            legendary: '🗃️', petfood: '🍖', pet: '🐾', anggur: '🍇', apel: '🍎',
            jeruk: '🍊', mangga: '🥭', pisang: '🍌', bibitanggur: '🌱', bibitapel: '☘️',
            bibitjeruk: '🌿', bibitmangga: '🍀', bibitpisang: '🌴', umpan: '🪱',
            dory: '🐠', lumba: '🐬', buntal: '🐡', kepiting: '🦀', hiu: '🦈',
            paus: '🐳', orca: '🐋', lobster: '🦞', gurita: '🐙', udang: '🦐', cumi: '🦑'
        }
        if (global.rpg && global.rpg.emoticon) return global.rpg.emoticon(v)
        return emoticons[v] || v
    }

    const items = {
        buy: {
            limit: { exp: 9999 },
            chip: { money: 1000000 },
            exp: { money: 1000 },
            potion: { money: 1250 },
            trash: { money: 40 },
            wood: { money: 700 },
            rock: { money: 850 },
            string: { money: 400 },
            iron: { money: 3000 },
            diamond: { money: 500000 },
            emerald: { money: 100000 },
            gold: { money: 100000 },
            common: { money: 2000 },
            uncommon: { money: 20000 },
            mythic: { money: 75000 },
            legendary: { money: 200000 },
            petfood: { money: 3500 },
            pet: { money: 120000 },
            anggur: { money: 2000 },
            apel: { money: 2000 },
            jeruk: { money: 2000 },
            mangga: { money: 2000 },
            pisang: { money: 2000 },
            bibitanggur: { money: 2000 },
            bibitapel: { money: 2000 },
            bibitjeruk: { money: 2000 },
            bibitmangga: { money: 2000 },
            bibitpisang: { money: 2000 },
            umpan: { money: 5000 },
            dory: { money: 2000 },
            lumba: { money: 20000 },
            buntal: { money: 4000 },
            kepiting: { money: 6000 },
            hiu: { money: 30000 },
            paus: { money: 100000 },
            orca: { money: 120000 },
            lobster: { money: 10000 },
            gurita: { money: 8000 },
            udang: { money: 2000 },
            cumi: { money: 2000 }
        },
        sell: {
            limit: { exp: 999 },
            exp: { money: 1 },
            chip: { money: 1000000 },
            potion: { money: 625 },
            trash: { money: 20 },
            wood: { money: 350 },
            rock: { money: 425 },
            string: { money: 200 },
            iron: { money: 1500 },
            diamond: { money: 250000 },
            emerald: { money: 50000 },
            gold: { money: 50000 },
            common: { money: 1000 },
            uncommon: { money: 10000 },
            mythic: { money: 37500 },
            legendary: { money: 100000 },
            petfood: { money: 1750 },
            pet: { money: 60000 },
            anggur: { money: 1000 },
            apel: { money: 1000 },
            jeruk: { money: 1000 },
            mangga: { money: 1000 },
            pisang: { money: 1000 },
            bibitanggur: { money: 1000 },
            bibitapel: { money: 1000 },
            bibitjeruk: { money: 1000 },
            bibitmangga: { money: 1000 },
            bibitpisang: { money: 1000 },
            umpan: { money: 2500 },
            dory: { money: 1000 },
            lumba: { money: 10000 },
            buntal: { money: 2000 },
            kepiting: { money: 3000 },
            hiu: { money: 15000 },
            paus: { money: 50000 },
            orca: { money: 60000 },
            lobster: { money: 5000 },
            gurita: { money: 4000 },
            udang: { money: 1000 },
            cumi: { money: 1000 }
        }
    }

    const categories = {
        '🎒 KEPERLUAN RPG': ['limit', 'exp', 'chip', 'potion', 'petfood', 'pet', 'trash', 'common', 'uncommon', 'mythic', 'legendary'],
        '⛏️ PERTAMBANGAN': ['wood', 'rock', 'string', 'iron', 'gold', 'diamond', 'emerald'],
        '🌾 PERTANIAN (BIBIT)': ['bibitanggur', 'bibitapel', 'bibitjeruk', 'bibitmangga', 'bibitpisang'],
        '🍎 HASIL PANEN': ['anggur', 'apel', 'jeruk', 'mangga', 'pisang'],
        '🎣 HASIL LAUT & PANCING': ['umpan', 'dory', 'lumba', 'buntal', 'kepiting', 'hiu', 'paus', 'orca', 'lobster', 'gurita', 'udang', 'cumi']
    }

    let user = global.db.users[m.sender]
    const mode = command.toLowerCase() === 'sell' ? 'sell' : 'buy'
    const listItems = Object.fromEntries(Object.entries(items[mode]).filter(([v]) => v))
    
    let cleanArgs = args.join(' ').replace(/,/g, ' ').split(' ').filter(v => v)
    
    let cart = []
    for (let i = 0; i < cleanArgs.length; i++) {
        let name = cleanArgs[i].toLowerCase()
        if (listItems[name]) {
            let count = 1
            if (cleanArgs[i + 1] && !isNaN(cleanArgs[i + 1])) {
                count = Math.max(1, parseInt(cleanArgs[i + 1]))
                i++
            }
            cart.push({ name, count })
        }
    }

    if (cart.length === 0) {
        let isBuy = mode === 'buy'
        let totalAsset = 0
        
        let text = `╭─── [ *${isBuy ? 'DINZ MART' : 'PENGEPUL BARANG'}* ]\n`
        text += `│ 👤 *User:* ${pushname}\n`
        text += `│ 💰 *Saldo:* ${user.money.toLocaleString()}\n`
        text += `│ 🏷️ *Mode:* ${isBuy ? 'PEMBELIAN (BUY)' : 'PENJUALAN (SELL)'}\n`
        text += `╰─────────────────────────●\n\n`
        
        let hasItem = false

        for (let [catName, catItems] of Object.entries(categories)) {
            let catContent = []
            
            for (let item of catItems) {
                if (listItems[item]) {
                    let paymentMethod = Object.keys(listItems[item])[0]
                    let price = listItems[item][paymentMethod]
                    
                    if (!isBuy) {
                        if (user[item] > 0) {
                            catContent.push(`│ ▫ ${getEmot(item)} ${capitalize(item)} (x${user[item]})\n│   └ 💵 ${price.toLocaleString()}`)
                            hasItem = true
                        }
                    } else {
                        catContent.push(`│ ▫ ${getEmot(item)} ${capitalize(item)} : ${price.toLocaleString()}`)
                        hasItem = true
                    }
                }
            }
            
            if (catContent.length > 0) {
                text += `╭── [ *${catName}* ]\n`
                text += catContent.join('\n')
                text += `\n╰────────────────\n`
            }
        }

        if (!isBuy && !hasItem) {
            return reply(`🎒 *TAS KOSONG*\n\nKamu tidak memiliki barang apapun untuk dijual.`)
        }

        text += `\n💁🏻‍♂ *TIPS TRANSAKSI:*\n`
        text += `Gunakan format: *${prefix}${mode} [item] [jumlah]*\n`
        text += `Contoh: *${prefix}${mode} ${isBuy ? 'potion 10' : 'dory 50'}*`
        
        return reply(text)
    }

    let successReport = []
    let failedReport = []

    for (let itemData of cart) {
        let { name, count } = itemData
        let paymentMethod = Object.keys(listItems[name])[0]
        let pricePerItem = listItems[name][paymentMethod]
        let totalPrice = pricePerItem * count

        if (mode === 'buy') {
            if (user[paymentMethod] >= totalPrice) {
                user[paymentMethod] -= totalPrice
                user[name] = (user[name] || 0) + count
                successReport.push(`+${count} ${capitalize(name)} 📉 -${totalPrice.toLocaleString()}`)
            } else {
                failedReport.push(`${capitalize(name)} (Uang Kurang)`)
            }
        } else {
            if ((user[name] || 0) >= count) {
                user[name] -= count
                user[paymentMethod] = (user[paymentMethod] || 0) + totalPrice
                successReport.push(`-${count} ${capitalize(name)} 📈 +${totalPrice.toLocaleString()}`)
            } else {
                failedReport.push(`${capitalize(name)} (Stok Kurang)`)
            }
        }
    }

    let headerRes = mode === 'buy' ? '🛒 *STRUK BELANJA*' : '🤝 *STRUK PENJUALAN*'
    let resultMsg = `${headerRes}\n\n`
    
    if (successReport.length > 0) {
        resultMsg += `✅ *Berhasil:*\n${successReport.join('\n')}\n`
    }
    
    if (failedReport.length > 0) {
        resultMsg += `\n❌ *Gagal:*\n${failedReport.join('\n')}`
    }

    resultMsg += `\n\n💰 Sisa Uang: ${user.money.toLocaleString()}`
    
    reply(resultMsg)
}
break
case 'mining':
case 'nambang':
case 'mine': {
    if (!m.isGroup) return reply(mess.only.group)
    let user = global.db.users[m.sender]
    
    let cooldown = 180000 
    if (new Date() - user.lastmining < cooldown) {
        let timers = cooldown - (new Date() - user.lastmining)
        let menit = Math.floor(timers / 60000)
        let detik = Math.floor((timers % 60000) / 1000)
        return reply(`⏳ *PULIHKAN TENAGA*\n\nKamu kelelahan menambang.\nIstirahat dulu selama *${menit} menit ${detik} detik*.`)
    }

    if (user.pickaxe == 0) return reply('❌ Kamu tidak punya Pickaxe ⛏️.\nCraft dulu dengan *' + prefix + 'craft pickaxe*')
    if (user.pickaxedurability <= 0) return reply('❌ Pickaxe kamu hancur! 🏚️\nPerbaiki dengan *' + prefix + 'repair pickaxe*')

    await DinzBotz.sendMessage(m.chat, { react: { text: '⛏️', key: m.key } })

    let multiplier = 1 + (user.level * 0.05)
    
    let drops = {
        trash: Math.floor(Math.random() * 10),
        rock: Math.floor((Math.random() * 5 + 2) * multiplier),
        iron: Math.floor((Math.random() * 3 + 1) * multiplier),
        gold: Math.random() < 0.2 ? 1 : 0,
        diamond: Math.random() < 0.05 ? 1 : 0,
        emerald: Math.random() < 0.03 ? 1 : 0,
    }

    let xpGain = 100 + (drops.iron * 20) + (drops.gold * 100) + (drops.diamond * 200)

    user.trash += drops.trash
    user.rock += drops.rock
    user.iron += drops.iron
    user.gold += drops.gold
    user.diamond += drops.diamond
    user.emerald += drops.emerald
    user.exp += xpGain
    user.pickaxedurability -= 5
    user.lastmining = new Date() * 1

    let ppUrl
    try { ppUrl = await DinzBotz.profilePictureUrl(m.sender, 'image') } 
    catch { ppUrl = 'https://i.pinimg.com/564x/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.jpg' }

    let pName = user.name || user.nama || m.pushName || 'Miner'

    let canvas = await createGrindCanvas('mining', {
        user: { name: pName, pp: ppUrl },
        items: drops,
        stats: { exp: xpGain }
    })

    let lootList = []
    if(drops.diamond > 0) lootList.push(`💎 ${drops.diamond} Diamond`)
    if(drops.gold > 0) lootList.push(`👑 ${drops.gold} Gold`)
    if(drops.emerald > 0) lootList.push(`💚 ${drops.emerald} Emerald`)
    if(drops.iron > 0) lootList.push(`⛓️ ${drops.iron} Iron`)
    if(drops.rock > 0) lootList.push(`🪨 ${drops.rock} Rock`)
    if(drops.trash > 0) lootList.push(`🗑️ ${drops.trash} Trash`)

    let caption = `👷‍♂️ *MINING OPERATIONS* 👷‍♂️\n\n`
    caption += `👤 *Miner:* ${pName}\n`
    caption += `🆙 *XP Gained:* +${xpGain} XP\n`
    caption += `📉 *Pickaxe:* ${user.pickaxedurability}% Durability\n`
    caption += `───────────────────\n`
    caption += `📦 *RESOURCES FOUND:*\n`
    caption += `${lootList.join('\n') || 'Debu...'}\n`
    caption += `───────────────────\n`
    caption += `_Tips: Gunakan .repair jika durability rendah!_`

    if (canvas) {
        await DinzBotz.sendMessage(m.chat, { image: canvas, caption: caption }, { quoted: m })
    } else {
        reply(caption)
    }
}
break
case 'fishing':
case 'mancing':
case 'fish': {
    if (!m.isGroup) return reply(mess.only.group)
    let user = global.db.users[m.sender]
    
    let cooldown = 180000 
    if (new Date() - user.lastfishing < cooldown) {
        let timers = cooldown - (new Date() - user.lastfishing)
        let menit = Math.floor(timers / 60000)
        let detik = Math.floor((timers % 60000) / 1000)
        return reply(`⏳ *IKAN BELUM LAPAR*\n\nKamu terlalu sering memancing.\nTunggu *${menit} menit ${detik} detik* lagi agar ikan kembali berkumpul.`)
    }

    if (user.fishingrod == 0) return reply('❌ Kamu tidak punya Pancingan 🎣.\nCraft dulu dengan *' + prefix + 'craft fishingrod*')
    if (user.fishingroddurability <= 0) return reply('❌ Pancingan kamu patah! 🎣\nPerbaiki dengan *' + prefix + 'repair fishingrod*')

    await DinzBotz.sendMessage(m.chat, { react: { text: '🎣', key: m.key } })
    
    await new Promise(r => setTimeout(r, 2000))

    let multiplier = 1 + (user.level * 0.05)
    let commonFish = ['dory', 'lumba', 'buntal', 'kepiting', 'udang']
    let rareFish = ['hiu', 'paus', 'orca', 'lobster', 'gurita', 'cumi']
    
    let catchList = {}
    let totalCount = Math.floor(Math.random() * 3 + 1)
    
    for (let i = 0; i < totalCount; i++) {
        let fishType = ''
        if (Math.random() < 0.3) { 
            fishType = rareFish[Math.floor(Math.random() * rareFish.length)]
        } else {
            fishType = commonFish[Math.floor(Math.random() * commonFish.length)]
        }
        
        let qty = Math.floor((Math.random() * 2 + 1) * multiplier)
        user[fishType] = (user[fishType] || 0) + qty
        catchList[fishType] = qty
    }

    let xpGain = 150 * totalCount
    user.exp += xpGain
    user.fishingroddurability -= 5
    user.lastfishing = new Date() * 1

    let ppUrl
    try { ppUrl = await DinzBotz.profilePictureUrl(m.sender, 'image') } 
    catch { ppUrl = 'https://i.pinimg.com/564x/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.jpg' }

    let pName = user.name || user.nama || m.pushName || 'Fisherman'

    let canvas = await createGrindCanvas('fishing', {
        user: { name: pName, pp: ppUrl },
        items: catchList,
        stats: { exp: xpGain }
    })

    let fishText = []
    for (let f in catchList) {
        let emot = '🐟'
        if(['hiu','paus','orca'].includes(f)) emot = '🦈'
        if(['kepiting','lobster'].includes(f)) emot = '🦀'
        if(['cumi','gurita'].includes(f)) emot = '🐙'
        
        fishText.push(`${emot} ${catchList[f]} ${f.charAt(0).toUpperCase() + f.slice(1)}`)
    }

    let caption = `🎣 *FISHING EXPEDITION* 🎣\n\n`
    caption += `👤 *Fisher:* ${pName}\n`
    caption += `🆙 *XP Gained:* +${xpGain} XP\n`
    caption += `📉 *Rod:* ${user.fishingroddurability}% Durability\n`
    caption += `───────────────────\n`
    caption += `🎒 *CATCH RESULT:*\n`
    caption += `${fishText.join('\n')}\n`
    caption += `───────────────────\n`
    caption += `_Cek koleksimu dengan .kolam_`

    if (canvas) {
        await DinzBotz.sendMessage(m.chat, { image: canvas, caption: caption }, { quoted: m })
    } else {
        reply(caption)
    }
}
break
case 'repair':
case 'perbaiki': {
    if (!args[0]) return reply(`
🔧 *TUKANG SERVICE* 🔧
Perbaiki alat yang rusak agar bisa dipakai lagi.

Cara: *${prefix}repair [alat]*
Contoh: *${prefix}repair pickaxe*

*Biaya Perbaikan:*
⛏️ Pickaxe: 5 Wood + 3 Iron
🎣 Fishingrod: 5 Wood + 5 String
⚔️ Sword: 10 Iron + 1000 Money
🛡️ Armor: 10 Iron + 1000 Money
`)
    
    let type = args[0].toLowerCase()
    let user = global.db.users[m.sender]
    let success = false
    let costText = ''

    if (type === 'pickaxe') {
        if (user.pickaxe == 0) return reply('Kamu belum punya pickaxe.')
        if (user.pickaxedurability >= 100) return reply('Pickaxe masih bagus (100%).')
        if (user.wood < 5 || user.iron < 3) return reply('❌ Bahan kurang: 5 Wood, 3 Iron.')
        user.wood -= 5; user.iron -= 3; user.pickaxedurability = 100;
        success = true; costText = 'Cost: 5 Wood, 3 Iron'
    }
    else if (type === 'sword') {
        if (user.sword == 0) return reply('Kamu belum punya sword.')
        if (user.sworddurability >= 100) return reply('Sword masih bagus (100%).')
        if (user.iron < 10 || user.money < 1000) return reply('❌ Bahan kurang: 10 Iron, 1000 Money.')
        user.iron -= 10; user.money -= 1000; user.sworddurability = 100;
        success = true; costText = 'Cost: 10 Iron, 1000 Money'
    }
    else if (type === 'armor') {
        if (user.armor == 0) return reply('Kamu belum punya armor.')
        if (user.armordurability >= 100) return reply('Armor masih bagus (100%).')
        if (user.iron < 10 || user.money < 1000) return reply('❌ Bahan kurang: 10 Iron, 1000 Money.')
        user.iron -= 10; user.money -= 1000; user.armordurability = 100;
        success = true; costText = 'Cost: 10 Iron, 1000 Money'
    }
    else if (type === 'fishingrod') {
        if (user.fishingrod == 0) return reply('Kamu belum punya pancingan.')
        if (user.fishingroddurability >= 100) return reply('Pancingan masih bagus (100%).')
        if (user.wood < 5 || user.string < 5) return reply('❌ Bahan kurang: 5 Wood, 5 String.')
        user.wood -= 5; user.string -= 5; user.fishingroddurability = 100;
        success = true; costText = 'Cost: 5 Wood, 5 String'
    }
    else {
        return reply('Alat tidak valid. (pickaxe/sword/armor/fishingrod)')
    }

    if (success) {
        await DinzBotz.sendMessage(m.chat, { react: { text: '🔨', key: m.key } })
        
        let ppUrl
        try { ppUrl = await DinzBotz.profilePictureUrl(m.sender, 'image') } 
        catch { ppUrl = 'https://i.pinimg.com/564x/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.jpg' }

        let pName = user.name || user.nama || m.pushName || 'Player'

        let items = {}
        items[type] = 1

        let canvas = await createGrindCanvas('repair', {
            user: { name: pName, pp: ppUrl },
            items: items,
            stats: { exp: 0 },
            cost: costText 
        })

        if (canvas) {
            await DinzBotz.sendMessage(m.chat, { 
                image: canvas, 
                caption: `✅ *REPAIR SUKSES*\n\nAlat: ${type.toUpperCase()}\nDurability: 100%` 
            }, { quoted: m })
        } else {
            reply('Repair sukses.')
        }
    }
}
break
case 'kolam':
case 'aquarium':
case 'pool': {
    if (!m.isGroup) return reply(mess.only.group)
    let user = global.db.users[m.sender]

    await DinzBotz.sendMessage(m.chat, { react: { text: '🌊', key: m.key } })

    let fishTypes = ['dory', 'lumba', 'buntal', 'kepiting', 'hiu', 'paus', 'orca', 'lobster', 'gurita', 'udang', 'cumi']
    let myFish = {}
    let totalEkor = 0

    for (let fish of fishTypes) {
        if (user[fish] > 0) {
            myFish[fish] = user[fish]
            totalEkor += user[fish]
        }
    }

    if (totalEkor === 0) return reply('❌ Kamu belum punya ikan! Pergi memancing dulu dengan .fishing')

    let ppUrl
    try { ppUrl = await DinzBotz.profilePictureUrl(m.sender, 'image') } 
    catch { ppUrl = 'https://i.pinimg.com/564x/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.jpg' }

    let pName = user.name || user.nama || m.pushName || 'Player'

    let canvas = await createAquariumCanvas({
        user: { name: pName, pp: ppUrl },
        items: myFish
    })

    let caption = `🌊 *${pName.toUpperCase()}'S AQUARIUM* 🌊\n\n`
    caption += `Total Ikan: ${totalEkor} Ekor\n`
    caption += `_Jaga ikanmu baik-baik atau jual di .shop jika butuh uang!_`

    if (canvas) {
        await DinzBotz.sendMessage(m.chat, { image: canvas, caption: caption }, { quoted: m })
    } else {
        reply('Gagal membuat gambar aquarium.')
    }
}
break
case 'suitpvp':
case 'suit': {
    if (!m.isGroup) return reply(mess.only.group)
    if (typeof global.db.users[m.sender].money === 'undefined') global.db.users[m.sender].money = 0
    
    let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    if (!target) return reply(`Tag orang yang ingin diajak duel!\nContoh: *${prefix}suit @user 5000*`)
    if (target === m.sender) return reply('Masa mau suit sama diri sendiri?')
    if (target === botNumber) return reply('Bot mah selalu menang, jangan lawan bot!')

    let nominal = args[1] ? parseInt(args[1]) : 0
    if (isNaN(nominal) || nominal < 0) return reply('Jumlah taruhan harus berupa angka valid!')
    if (global.db.users[m.sender].money < nominal) return reply(`Uang kamu tidak cukup! Saldo saat ini: Rp ${global.db.users[m.sender].money.toLocaleString()}`)
    if (global.db.users[target] && global.db.users[target].money < nominal) return reply(`Uang lawan tidak cukup untuk taruhan ini!`)

    DinzBotz.suit = DinzBotz.suit ? DinzBotz.suit : {}
    let id = m.chat
    if (DinzBotz.suit[id]) return reply('Masih ada suit yang berlangsung di grup ini!')

    DinzBotz.suit[id] = {
        chat: id,
        id: id,
        p: m.sender,
        p2: target,
        status: 'wait',
        waktu: setTimeout(() => {
            if (DinzBotz.suit[id]) {
                reply(`Waktu suit habis! Duel dibatalkan.`)
                delete DinzBotz.suit[id]
            }
        }, 60000),
        money: nominal
    }

    let txt = `🎮 *SUIT PVP* 🎮\n\n`
    txt += `@${m.sender.split('@')[0]} menantang @${target.split('@')[0]} untuk berduel!\n`
    txt += `💰 *Taruhan:* Rp ${nominal.toLocaleString()}\n\n`
    txt += `Ketik *terima* untuk bermain atau *tolak* untuk membatalkan.`
    
    DinzBotz.sendMessage(m.chat, { text: txt, mentions: [m.sender, target] }, { quoted: m })
}
break
case 'ttt':
case 'tictactoe': {
    if (!m.isGroup) return reply(mess.only.group)
    DinzBotz.game = DinzBotz.game ? DinzBotz.game : {}
    if (DinzBotz.game[m.chat]) return reply('Masih ada game TicTacToe berlangsung di grup ini!\nKetik *.delttt* untuk menghapus sesi.')
    let nominal = args[0] ? parseInt(args[0]) : 0
    if (isNaN(nominal)) nominal = 0
    if (nominal > 0) {
        let user = global.db.users[m.sender]
        if (user.money < nominal) return reply(`Uang kamu kurang untuk taruhan Rp ${nominal.toLocaleString()}`)
    }
    DinzBotz.game[m.chat] = {
        id: m.chat,
        status: 'WAITING',
        x: m.sender,
        o: null,
        bet: nominal,
        game: null
    }
    let caption = `🎮 *TIC TAC TOE* 🎮\n\n`
    caption += `@${m.sender.split('@')[0]} menunggu lawan!\n`
    if (nominal > 0) caption += `💰 Taruhan: Rp ${nominal.toLocaleString()}\n`
    caption += `\nKetik *.joiin* untuk masuk!`
    DinzBotz.sendMessage(m.chat, { text: caption, mentions: [m.sender] }, { quoted: m })
}
break
case 'joiin':
case 'jointtt': {
    if (!m.isGroup) return reply(mess.only.group)
    DinzBotz.game = DinzBotz.game ? DinzBotz.game : {}
    let room = DinzBotz.game[m.chat]
    if (!room) return reply('Tidak ada sesi TicTacToe yang sedang menunggu pemain.')
    if (room.status !== 'WAITING') return reply('Game sudah dimulai!')
    if (room.x === m.sender) return reply('Kamu yang buat room woy, masa mau main sendiri?')
    if (room.bet > 0) {
        let user = global.db.users[m.sender]
        if (user.money < room.bet) return reply(`Uang kamu kurang untuk mengikuti taruhan Rp ${room.bet.toLocaleString()}`)
    }
    room.o = m.sender
    room.status = 'PLAYING'
    room.game = new TicTacToe(m.chat, room.x, room.o)
    let img = await room.game.toCanvas()
    let caption = `🏁 *GAME DIMULAI* 🏁\n\n`
    caption += `❌: @${room.x.split('@')[0]}\n`
    caption += `⭕: @${room.o.split('@')[0]}\n`
    if (room.bet > 0) caption += `💰 Pot: Rp ${(room.bet * 2).toLocaleString()}\n`
    caption += `\nGiliran: @${room.x.split('@')[0]} (❌)\n`
    caption += `Ketik angka *1-9* untuk melangkah!`
    DinzBotz.sendMessage(m.chat, { image: img, caption: caption, mentions: [room.x, room.o] }, { quoted: m })
}
break
case 'delttt':
case 'delgame': {
    if (!m.isGroup) return reply(mess.only.group)
    DinzBotz.game = DinzBotz.game ? DinzBotz.game : {}
    if (!DinzBotz.game[m.chat]) return reply('Tidak ada game di grup ini.')
    delete DinzBotz.game[m.chat]
    reply('✅ Sesi TicTacToe berhasil dihapus.')
}
break
case 'quotes':
      const quotexeony = await axios.get(`https://favqs.com/api/qotd`)
      const textquotes = `*${themeemoji} Quote:* ${quotexeony.data.quote.body}\n\n*${themeemoji} Author:* ${quotexeony.data.quote.author}`
      return reply(textquotes)
      break
case 'cry':
    case 'kill':
    case 'hug':
    case 'pat':
    case 'bite':
    case 'yeet':
    case 'bully':
    case 'bonk':
    case 'poke':
    case 'nom':
    case 'slap':
    case 'smile':
    case 'wave':
    case 'awoo':
    case 'blush':
    case 'smug':
    case 'glomp':
    case 'happy':
    case 'dance':
    case 'cringe':
    case 'cuddle':
    case 'highfive':
    case 'shinobu':
    case 'handhold': {

      axios.get(`https://api.waifu.pics/sfw/${command}`)
        .then(({
          data
        }) => {
          DinzBotz.sendImageAsSticker(from, data.url, m, {
            packname: global.packname,
            author: global.author
          })
        })
    }
    db.users[m.sender].exp += 300;
    break
    case 'woof':
    case '8ball':
    case 'goose':
    case 'gecg':
    case 'feed':
    case 'avatar':
    case 'fox_girl':
    case 'lizard':
    case 'spank1':
    case 'meow':
    case 'tickle': {

      axios.get(`https://nekos.life/api/v2/img/${command}`)
        .then(({
          data
        }) => {
          DinzBotz.sendImageAsSticker(from, data.url, m, {
            packname: global.packname,
            author: global.author
          })
        })
    }
    db.users[m.sender].exp += 300;
    break
case 'kerja':
case 'work':
case 'bekerja': {
    if (!m.isGroup) return reply(mess.only.group)
    let user = global.db.users[m.sender]
    let type = (args[0] || '').toLowerCase()

    const cooldown = 300000 
    if (new Date() - user.lastkerja < cooldown) {
        let timers = cooldown - (new Date() - user.lastkerja)
        let menit = Math.floor(timers / 60000)
        let detik = Math.floor((timers % 60000) / 1000)
        return reply(`⏳ *ISTIRAHAT*\n\nKamu baru saja bekerja keras.\nTunggu *${menit} menit ${detik} detik* lagi.`)
    }

    const jobs = {
        ojek: { money: 150000, desc: ['Mengantar Ibu Budi ke Pasar', 'Mengantar Paket Shopee', 'Nganterin Ayang orang lain', 'Nge-gojek makanan'] },
        petani: { money: 200000, desc: ['Memanen Padi di sawah', 'Menanam Jagung hibrida', 'Membajak sawah pak lurah', 'Panen Raya Cabai'] },
        dokter: { money: 500000, desc: ['Operasi plastik pasien', 'Menyuntik vaksin', 'Memeriksa pasien demam', 'Bedah jantung'] },
        pedagang: { money: 250000, desc: ['Jualan cilok laris manis', 'Dagang sayur di pasar', 'Buka olshop laris', 'Jualan pulsa'] },
        montir: { money: 300000, desc: ['Servis motor supra', 'Ganti oli mobil sport', 'Tambal ban bocor', 'Modif mesin balap'] },
        kuli: { money: 180000, desc: ['Angkat semen 50 sak', 'Bangun rumah mewah', 'Ngecor jalan tol', 'Pasang keramik masjid'] }
    }

    if (!jobs[type]) {
        let text = `💼 *LOWONGAN PEKERJAAN* 💼\n\nPilih pekerjaan yang kamu mau:\n`
        Object.keys(jobs).forEach(j => {
            text += `🔹 ${prefix}kerja ${j}\n`
        })
        text += `\n_Contoh: ${prefix}kerja dokter_`
        return reply(text)
    }

    await DinzBotz.sendMessage(m.chat, { react: { text: '💼', key: m.key } })

    let jobData = jobs[type]
    let randomDesc = jobData.desc[Math.floor(Math.random() * jobData.desc.length)]
    
    let multiplier = 1 + (user.level * 0.1) 
    let gaji = Math.floor(jobData.money * multiplier)

    user.money += gaji
    user.lastkerja = new Date() * 1
    user.exp += 500 

    let ppUrl
    try { ppUrl = await DinzBotz.profilePictureUrl(m.sender, 'image') } 
    catch { ppUrl = 'https://i.pinimg.com/564x/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.jpg' }

    let pName = user.name || user.nama || m.pushName || 'Worker'

    let canvas = await createWorkCanvas({
        user: { name: pName, pp: ppUrl },
        job: type,
        salary: gaji,
        desc: randomDesc
    })

    let caption = `💼 *WORK REPORT*\n\n`
    caption += `👤 *Nama:* ${pName}\n`
    caption += `🛠️ *Job:* ${type.toUpperCase()}\n`
    caption += `📝 *Tugas:* ${randomDesc}\n`
    caption += `💰 *Gaji:* Rp ${gaji.toLocaleString()}\n`
    caption += `\n_Gaji menyesuaikan level kamu! Semakin tinggi level, semakin kaya!_`

    if (canvas) {
        await DinzBotz.sendMessage(m.chat, { image: canvas, caption: caption }, { quoted: m })
    } else {
        reply(caption)
    }
}
break
case 'fightnaga':
    case 'perangnaga': {

      if (!m.isGroup) return reply(mess.only.group)

      function Acakin(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
      }
      let penumpan = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak']
      let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
      let nogo = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak']
      let nogorojo = penumpan[Math.floor(Math.random() * penumpan.length)]
      DinzBotz.level = global.db.users[m.sender]
      DinzBotz.fightnaga = DinzBotz.fightnaga ? DinzBotz.fightnaga : {}
      const delay = time => new Promise(res => setTimeout(res, time));

      if (typeof DinzBotz.fightnaga[m.sender] != "undefined" && DinzBotz.fightnaga[m.sender] == true) return reply(`*Tidak bisa melakukan battle ⚔️ karena Arena yang kamu miliki dipakai untuk fight pet mu yg lain.*`)

      let users = participants.map(a => a.id)
      var lawan
      lawan = users[Math.floor(users.length * Math.random())]
      while (typeof global.db.users[lawan] == "undefined" || lawan == m.sender) {
        lawan = users[Math.floor(users.length * Math.random())]
      }

      let lamaPertarungan = Acakin(8, 20)
      reply(`*Pet Kamu* (🐉naga ${nogorojo} ) ⚔️menantang 🐉naganya *${penumpang}* (🐉naga kamu ) lagi berkelahi.\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yg menang🎮.`)

      DinzBotz.fightnaga[m.sender] = true

      await delay(1000 * 60 * lamaPertarungan)

      const alasanKalah = ['Naikin lagi levelnya😐', 'Cupu', 'Kurang hebat', 'Ampas Petnya', 'Pet gembel']
      const alasanMenang = ['Hebat', 'Pro', 'Ganas Pet', 'Legenda Pet', 'Sangat Pro', 'Rajin Ngasi Makan Pet']

      let kesempatan = []
      let i
      for (i = 0; i < global.db.users[m.sender].naga; i++) kesempatan.push(m.sender)
      for (i = 0; i < global.db.users[lawan].naga; i++) kesempatan.push(lawan)

      let pointPemain = 0
      let pointLawan = 0
      for (i = 0; i < 10; i++) {
        unggul = Acakin(0, kesempatan.length - 1)
        if (kesempatan[unggul] == m.sender) pointPemain += 1
        else pointLawan += 1
      }

      if (pointPemain > pointLawan) {
        let hadiah = (pointPemain - pointLawan) * 20000
        global.db.users[m.sender].money += hadiah
        global.db.users[m.sender].tiketcoin += 1
        reply(`*${DinzBotz.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${DinzBotz.getName(lawan)}*\n\n*Pet🐉Kamu* (naga ${global.db.users[m.sender].naga}) MENANG melawan 🐉naganya *${DinzBotz.getName(lawan)}* (naga ${global.db.users[lawan].naga}) karena naga🐉kamu ${alasanMenang[Acakin(0,alasanMenang.length-1)]}\n\nHadiah Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`)
      } else if (pointPemain < pointLawan) {
        let denda = (pointLawan - pointPemain) * 100000
        global.db.users[m.sender].money -= denda
        global.db.users[m.sender].tiketcoin += 1
        reply(`*${DinzBotz.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${DinzBotz.getName(lawan)}*\n\n*Pet🐉Kamu* (naga ${global.db.users[m.sender].naga}) KALAH melawan 🐉naganya *${DinzBotz.getName(lawan)}* (naga ${global.db.users[lawan].naga}) karena pet kamu ${alasanKalah[Acakin(0,alasanKalah.length-1)]}\n\nUang kamu berkurang Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`)
      } else {
        reply(`*${DinzBotz.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${DinzBotz.getName(lawan)}*\n\nHasil imbang kak, ga dapet apa apa 😂`)
      }

      delete DinzBotz.fightnaga[m.sender]
    }
    db.users[m.sender].exp += 300;
break
case 'fightkyubi': {

      if (!m.isGroup) return reply(mess.only.group)

      function Acakin(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
      }
      let penumpan = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak']
      let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
      let nogo = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak']
      let nogorojo = penumpan[Math.floor(Math.random() * penumpan.length)]
      DinzBotz.level = global.db.users[m.sender]
      DinzBotz.fightnaga = DinzBotz.fightnaga ? DinzBotz.fightnaga : {}
      const delay = time => new Promise(res => setTimeout(res, time));

      if (typeof DinzBotz.fightnaga[m.sender] != "undefined" && DinzBotz.fightnaga[m.sender] == true) return reply(`*Tidak bisa melakukan battle ⚔️ karena Arena yang kamu miliki dipakai untuk fight pet mu yg lain.*`)

      let users = participants.map(u => u.id)
      var lawan
      lawan = users[Math.floor(users.length * Math.random())]
      while (typeof global.db.users[lawan] == "undefined" || lawan == m.sender) {
        lawan = users[Math.floor(users.length * Math.random())]
      }

      let lamaPertarungan = Acakin(8, 20)

      reply(`*Pet Kamu* (🦊kyubi ${penumpang}) ⚔️menantang 🦊kyubinya *${nogorojo}* (🦊kyubi kamu) lagi berkelahi.\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yg menang🎮.`)

      DinzBotz.fightnaga[m.sender] = true

      await delay(1000 * 60 * lamaPertarungan)

      let alasanKalah = ['Naikin lagi levelnya😐', 'Cupu', 'Kurang hebat', 'Ampas Petnya', 'Pet gembel']
      let alasanMenang = ['Hebat', 'Pro', 'Ganas Pet', 'Legenda Pet', 'Sangat Pro', 'Rajin Ngasi Makan Pet']

      let kesempatan = []
      let i
      let unggul
      for (i = 0; i < global.db.users[m.sender].kyubi; i++) kesempatan.push(m.sender)
      for (i = 0; i < global.db.users[lawan].kyubi; i++) kesempatan.push(lawan)

      let pointPemain = 0
      let pointLawan = 0
      for (i = 0; i < 10; i++) {
        unggul = Acakin(0, kesempatan.length - 1)
        if (kesempatan[unggul] == m.sender) pointPemain += 1
        else pointLawan += 1
      }

      if (pointPemain > pointLawan) {
        let hadiah = (pointPemain - pointLawan) * 20000
        global.db.users[m.sender].money += hadiah
        global.db.users[m.sender].tiketcoin += 1
        reply(`*${DinzBotz.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${DinzBotz.getName(lawan)}*\n\n*Pet🦊Kamu* (kyubi ${global.db.users[m.sender].kyubi}) MENANG melawan 🦊kyubinya *${DinzBotz.getName(lawan)}* (kyubi ${global.db.users[lawan].kyubi}) karena kyubi🦊kamu ${alasanMenang[Acakin(0,alasanMenang.length-1)]}\n\nHadiah Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`)
      } else if (pointPemain < pointLawan) {
        let denda = (pointLawan - pointPemain) * 100000
        global.db.users[m.sender].money -= denda
        global.db.users[m.sender].tiketcoin += 1
        reply(`*${DinzBotz.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${DinzBotz.getName(lawan)}*\n\n*Pet🦊Kamu* (kyubi ${global.db.users[m.sender].kyubi}) KALAH melawan 🦊kyubinya *${DinzBotz.getName(lawan)}* (kyubi ${global.db.users[lawan].kyubi}) karena pet kamu ${alasanKalah[Acakin(0,alasanKalah.length-1)]}\n\nUang kamu berkurang Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`)
      } else {
        reply(`*${DinzBotz.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${DinzBotz.getName(lawan)}*\n\nHasil imbang kak, ga dapet apa apa 😂`)
      }

      delete DinzBotz.fightnaga[m.sender]
    }
    db.users[m.sender].exp += 300;
    break
    case 'fightphonix': {

      if (!m.isGroup) return reply(mess.only.group)

      function Acakin(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
      }
      let penumpan = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak']
      let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
      let nogo = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak']
      let nogorojo = penumpan[Math.floor(Math.random() * penumpan.length)]
      DinzBotz.level = global.db.users[m.sender]
      DinzBotz.fightnaga = DinzBotz.fightnaga ? DinzBotz.fightnaga : {}
      const delay = time => new Promise(res => setTimeout(res, time));

      if (typeof DinzBotz.fightnaga[m.sender] != "undefined" && DinzBotz.fightnaga[m.sender] == true) return reply(`*Tidak bisa melakukan battle ⚔️ karena Arena yang kamu miliki dipakai untuk fight pet mu yg lain.*`)

      let users = participants.map(u => u.id)
      var lawan
      lawan = users[Math.floor(users.length * Math.random())]
      while (typeof global.db.users[lawan] == "undefined" || lawan == m.sender) {
        lawan = users[Math.floor(users.length * Math.random())]
      }

      let lamaPertarungan = Acakin(8, 20)

      reply(`*Pet Kamu* (🦅phonix ${penumpang}) ⚔️menantang 🦅phonixnya *${nogorojo}* (🦅phonix kamu) lagi berkelahi.\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yg menang🎮.`)

      DinzBotz.fightnaga[m.sender] = true

      await delay(1000 * 60 * lamaPertarungan)

      let alasanKalah = ['Naikin lagi levelnya😐', 'Cupu', 'Kurang hebat', 'Ampas Petnya', 'Pet gembel']
      let alasanMenang = ['Hebat', 'Pro', 'Ganas Pet', 'Legenda Pet', 'Sangat Pro', 'Rajin Ngasi Makan Pet']

      let kesempatan = []
      for (i = 0; i < global.db.users[m.sender].phonix; i++) kesempatan.push(m.sender)
      for (i = 0; i < global.db.users[lawan].phonix; i++) kesempatan.push(lawan)

      let pointPemain = 0
      let pointLawan = 0
      for (i = 0; i < 10; i++) {
        unggul = Acakin(0, kesempatan.length - 1)
        if (kesempatan[unggul] == m.sender) pointPemain += 1
        else pointLawan += 1
      }

      if (pointPemain > pointLawan) {
        let hadiah = (pointPemain - pointLawan) * 20000
        global.db.users[m.sender].money += hadiah
        global.db.users[m.sender].tiketcoin += 1
        reply(`*${DinzBotz.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${DinzBotz.getName(lawan)}*\n\n*Pet🦅Kamu* (phonix ${global.db.users[m.sender].phonix}) MENANG melawan 🦅phonixnya *${DinzBotz.getName(lawan)}* (phonix ${global.db.users[lawan].phonix}) karena phonix🦅kamu ${alasanMenang[Acakin(0,alasanMenang.length-1)]}\n\nHadiah Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`)
      } else if (pointPemain < pointLawan) {
        let denda = (pointLawan - pointPemain) * 10000
        global.db.users[m.sender].money -= denda
        global.db.users[m.sender].tiketcoin += 1
        reply(`*${DinzBotz.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${DinzBotz.getName(lawan)}*\n\n*Pet🦅Kamu* (phonix ${global.db.users[m.sender].phonix}) KALAH melawan 🦅phonixnya *${DinzBotz.getName(lawan)}* (phonix ${global.db.users[lawan].phonix}) karena pet kamu ${alasanKalah[Acakin(0,alasanKalah.length-1)]}\n\nUang kamu berkurang Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`)
      } else {
        reply(`*${DinzBotz.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${DinzBotz.getName(lawan)}*\n\nHasil imbang kak, ga dapet apa apa 😂`)
      }

      delete DinzBotz.fightnaga[m.sender]
    }
    db.users[m.sender].exp += 300;
    break
    case 'fightkucing': {

      if (!m.isGroup) return reply(mess.only.group)

      function Acakin(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
      }
      let penumpan = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak']
      let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
      let nogo = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak']
      let nogorojo = penumpan[Math.floor(Math.random() * penumpan.length)]
      DinzBotz.level = global.db.users[m.sender]
      DinzBotz.fightnaga = DinzBotz.fightnaga ? DinzBotz.fightnaga : {}
      const delay = time => new Promise(res => setTimeout(res, time));

      if (typeof DinzBotz.fightnaga[m.sender] != "undefined" && DinzBotz.fightnaga[m.sender] == true) return reply(`*Tidak bisa melakukan battle karena arena yg kamu miliki sedang kamu pakai .*`)

      let users = participants.map(u => u.id)
      var lawan
      lawan = users[Math.floor(users.length * Math.random())]
      while (typeof global.db.users[lawan] == "undefined" || lawan == m.sender) {
        lawan = users[Math.floor(users.length * Math.random())]
      }

      let lamaPertarungan = Acakin(8, 20)

      reply(`*Pet Kamu* (🐱kucing ${penumpang}) menantang 🐈kucingnya *${nogorojo}* (🐱kucing kamu) lagi kelahi rebutin bini.\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yg menang🎮.`)

      DinzBotz.fightnaga[m.sender] = true

      await delay(1000 * 60 * lamaPertarungan)

      let alasanKalah = ['Naikin lagi levelnya😐', 'Cupu', 'Kurang hebat', 'Ampas Petnya', 'Pet gembel']
      let alasanMenang = ['Hebat', 'Pro', 'Ganas Pet', 'Legenda Pet', 'Sangat Pro', 'Rajin Ngasi Makan Pet']

      let kesempatan = []
      for (i = 0; i < global.db.users[m.sender].kucing; i++) kesempatan.push(m.sender)
      for (i = 0; i < global.db.users[lawan].kucing; i++) kesempatan.push(lawan)

      let pointPemain = 0
      let pointLawan = 0
      for (i = 0; i < 10; i++) {
        unggul = Acakin(0, kesempatan.length - 1)
        if (kesempatan[unggul] == m.sender) pointPemain += 1
        else pointLawan += 1
      }

      if (pointPemain > pointLawan) {
        let hadiah = (pointPemain - pointLawan) * 20000
        global.db.users[m.sender].money += hadiah
        global.db.users[m.sender].tiketcoin += 1
        reply(`*${DinzBotz.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${DinzBotz.getName(lawan)}*\n\n*Pet🐈Kamu* (kucing ${global.db.users[m.sender].kucing}) MENANG melawan 🐈kucingnya *${DinzBotz.getName(lawan)}* (kucing ${global.db.users[lawan].kucing}) karena kucing🐈kamu ${alasanMenang[Acakin(0,alasanMenang.length-1)]}\n\nHadiah Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`)
      } else if (pointPemain < pointLawan) {
        let denda = (pointLawan - pointPemain) * 100000
        global.db.users[m.sender].money -= denda
        global.db.users[m.sender].tiketcoin += 1
        reply(`*${DinzBotz.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${DinzBotz.getName(lawan)}*\n\n*Pet🐈Kamu* (kucing ${global.db.users[m.sender].kucing}) KALAH melawan 🐈kucingnya *${DinzBotz.getName(lawan)}* (kucing ${global.db.users[lawan].kucing}) karena pet kamu ${alasanKalah[Acakin(0,alasanKalah.length-1)]}\n\nUang kamu berkurang Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`)
      } else {
        reply(`*${DinzBotz.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${DinzBotz.getName(lawan)}*\n\nHasil imbang kak, ga dapet apa apa 😂`)
      }

      delete DinzBotz.fightnaga[m.sender]
    }
    break
    case 'fightgriffin': {

      function Acakin(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
      }
      let penumpan = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak']
      let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
      let nogo = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak']
      let nogorojo = penumpan[Math.floor(Math.random() * penumpan.length)]
      if (!m.isGroup) return reply(mess.only.group)
      DinzBotz.level = global.db.users[m.sender]
      DinzBotz.fightnaga = DinzBotz.fightnaga ? DinzBotz.fightnaga : {}
      const delay = time => new Promise(res => setTimeout(res, time));

      if (typeof DinzBotz.fightnaga[m.sender] != "undefined" && DinzBotz.fightnaga[m.sender] == true) return reply(`*Tidak bisa melakukan battle ⚔️ karena Arena yang kamu miliki dipakai untuk fight pet mu yg lain.*`)

      let users = participants.map(u => u.id)
      var lawan
      lawan = users[Math.floor(users.length * Math.random())]
      while (typeof global.db.users[lawan] == "undefined" || lawan == m.sender) {
        lawan = users[Math.floor(users.length * Math.random())]
      }

      let lamaPertarungan = Acakin(8, 20)

      m.reply(`*Pet Kamu* (🦚griffin ${penumpang}) ⚔️menantang 🦚griffinnya *${nogorojo}* (🦚griffin kamu) lagi berkelahi.\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yg menang🎮.`)

      DinzBotz.fightnaga[m.sender] = true

      await delay(1000 * 60 * lamaPertarungan)

      let alasanKalah = ['Naikin lagi levelnya😐', 'Cupu', 'Kurang hebat', 'Ampas Petnya', 'Pet gembel']
      let alasanMenang = ['Hebat', 'Pro', 'Ganas Pet', 'Legenda Pet', 'Sangat Pro', 'Rajin Ngasi Makan Pet']

      let kesempatan = []
      for (i = 0; i < global.db.users[m.sender].griffin; i++) kesempatan.push(m.sender)
      for (i = 0; i < global.db.users[lawan].griffin; i++) kesempatan.push(lawan)

      let pointPemain = 0
      let pointLawan = 0
      for (i = 0; i < 10; i++) {
        unggul = Acakin(0, kesempatan.length - 1)
        if (kesempatan[unggul] == m.sender) pointPemain += 1
        else pointLawan += 1
      }

      if (pointPemain > pointLawan) {
        let hadiah = (pointPemain - pointLawan) * 20000
        global.db.users[m.sender].money += hadiah
        global.db.users[m.sender].tiketcoin += 1
        m.reply(`*${DinzBotz.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${DinzBotz.getName(lawan)}*\n\n*Pet🦚Kamu* (griffin ${global.db.users[m.sender].griffin}) MENANG melawan 🦚griffinnya *${DinzBotz.getName(lawan)}* (griffin ${global.db.users[lawan].griffin}) karena griffin🦚kamu ${alasanMenang[Acakin(0,alasanMenang.length-1)]}\n\nHadiah Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`)
      } else if (pointPemain < pointLawan) {
        let denda = (pointLawan - pointPemain) * 100000
        global.db.users[m.sender].money -= denda
        global.db.users[m.sender].tiketcoin += 1
        m.reply(`*${DinzBotz.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${DinzBotz.getName(lawan)}*\n\n*Pet🦚Kamu* (griffin ${global.db.users[m.sender].griffin}) KALAH melawan 🦚griffinnya *${DinzBotz.getName(lawan)}* (griffin ${global.db.users[lawan].griffin}) karena pet kamu ${alasanKalah[Acakin(0,alasanKalah.length-1)]}\n\nUang kamu berkurang Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`)
      } else {
        m.reply(`*${DinzBotz.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${DinzBotz.getName(lawan)}*\n\nHasil imbang kak, ga dapet apa apa 😂`)
      }

      delete DinzBotz.fightnaga[m.sender]
    }
    db.users[m.sender].exp += 300;
    break
    case 'fightcentaur':
    case 'perangcentaur': {

      if (!m.isGroup) return reply(mess.only.group)

      function Acakin(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
      }
      let penumpan = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak']
      let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
      let nogo = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak']
      let nogorojo = penumpan[Math.floor(Math.random() * penumpan.length)]
      DinzBotz.level = global.db.users[m.sender]
      DinzBotz.fightnaga = DinzBotz.fightnaga ? DinzBotz.fightnaga : {}
      const delay = time => new Promise(res => setTimeout(res, time));

      if (typeof DinzBotz.fightnaga[m.sender] != "undefined" && DinzBotz.fightnaga[m.sender] == true) return reply(`*Tidak bisa melakukan battle ⚔️ karena Arena yang kamu miliki dipakai untuk fight pet mu yg lain.*`)

      let users = participants.map(u => u.id)
      var lawan
      lawan = users[Math.floor(users.length * Math.random())]
      while (typeof global.db.users[lawan] == "undefined" || lawan == m.sender) {
        lawan = users[Math.floor(users.length * Math.random())]
      }

      let lamaPertarungan = Acakin(8, 20)

      m.reply(`*Pet Kamu* (🐴centaur ${penumpang}) ⚔️menantang 🐴centaurnya *${nogorojo}* (🐴centaur kamu) lagi berkelahi.\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yg menang🎮.`)

      DinzBotz.fightnaga[m.sender] = true

      await delay(1000 * 60 * lamaPertarungan)

      let alasanKalah = ['Naikin lagi levelnya😐', 'Cupu', 'Kurang hebat', 'Ampas Petnya', 'Pet gembel']
      let alasanMenang = ['Hebat', 'Pro', 'Ganas Pet', 'Legenda Pet', 'Sangat Pro', 'Rajin Ngasi Makan Pet']

      let kesempatan = []
      for (i = 0; i < global.db.users[m.sender].centaur; i++) kesempatan.push(m.sender)
      for (i = 0; i < global.db.users[lawan].centaur; i++) kesempatan.push(lawan)

      let pointPemain = 0
      let pointLawan = 0
      for (i = 0; i < 10; i++) {
        unggul = Acakin(0, kesempatan.length - 1)
        if (kesempatan[unggul] == m.sender) pointPemain += 1
        else pointLawan += 1
      }

      if (pointPemain > pointLawan) {
        let hadiah = (pointPemain - pointLawan) * 20000
        global.db.users[m.sender].money += hadiah
        global.db.users[m.sender].tiketcoin += 1
        m.reply(`*${DinzBotz.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${DinzBotz.getName(lawan)}*\n\n*Pet🐴Kamu* (centaur ${global.db.users[m.sender].centaur}) MENANG melawan 🐴centaurnya *${DinzBotz.getName(lawan)}* (centaur ${global.db.users[lawan].centaur}) karena centaur🐴kamu ${alasanMenang[Acakin(0,alasanMenang.length-1)]}\n\nHadiah Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`)
      } else if (pointPemain < pointLawan) {
        let denda = (pointLawan - pointPemain) * 100000
        global.db.users[m.sender].money -= denda
        global.db.users[m.sender].tiketcoin += 1
        m.reply(`*${DinzBotz.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${DinzBotz.getName(lawan)}*\n\n*Pet🐴Kamu* (centaur ${global.db.users[m.sender].centaur}) KALAH melawan 🐴centaurnya *${DinzBotz.getName(lawan)}* (centaur ${global.db.users[lawan].centaur}) karena pet kamu ${alasanKalah[Acakin(0,alasanKalah.length-1)]}\n\nUang kamu berkurang Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`)
      } else {
        m.reply(`*${DinzBotz.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${DinzBotz.getName(lawan)}*\n\nHasil imbang kak, ga dapet apa apa 😂`)
      }

      delete DinzBotz.fightnaga[m.sender]
    }
    db.users[m.sender].exp += 300;
break
case 'bankcek':
case 'bank':
case 'atm':
case 'cekbank': {
    if (!m.isGroup) return reply(mess.only.group)
    let user = global.db.users[m.sender]
    
    // Pastikan user punya field bank
    if (typeof user.bank === 'undefined') user.bank = 0

    await DinzBotz.sendMessage(m.chat, { react: { text: '💳', key: m.key } })

    let ppUrl
    try { ppUrl = await DinzBotz.profilePictureUrl(m.sender, 'image') } 
    catch { ppUrl = 'https://i.pinimg.com/564x/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.jpg' }

    let pName = user.name || user.nama || m.pushName || 'Nasabah'
    
    let canvas = await createBankCanvas({
        user: { name: pName, pp: ppUrl, id: m.sender },
        wallet: user.money,
        bank: user.bank
    })

    let text = `🏦 *DINZID FINANCIAL* 🏦\n\n`
    text += `👤 *Nasabah:* ${pName}\n`
    text += `💵 *Dompet:* Rp ${user.money.toLocaleString()}\n`
    text += `💳 *Bank:* Rp ${user.bank.toLocaleString()}\n`
    text += `💰 *Total Kekayaan:* Rp ${(user.money + user.bank).toLocaleString()}\n\n`
    text += `_Gunakan .deposit [jumlah] untuk menabung_\n`
    text += `_Gunakan .withdraw [jumlah] untuk tarik tunai_`

    if (canvas) {
        await DinzBotz.sendMessage(m.chat, { image: canvas, caption: text }, { quoted: m })
    } else {
        reply(text)
    }
}
break
case 'nabung':
case 'deposit':
case 'banknabung': {
    if (!m.isGroup) return reply(mess.only.group)
    let user = global.db.users[m.sender]
    if (typeof user.bank === 'undefined') user.bank = 0

    let count = args[0]
    if (!count) return reply(`Masukan jumlah yang ingin ditabung!\nContoh: *${prefix}deposit 5000* atau *${prefix}deposit all*`)
    
    if (count === 'all') {
        count = user.money
    } else {
        count = parseInt(count)
    }

    if (isNaN(count)) return reply('Jumlah harus berupa angka!')
    if (count < 1) return reply('Minimal nabung 1 money.')
    if (user.money < count) return reply(`Uang di dompet kurang! Kamu cuma punya Rp ${user.money}`)

    user.money -= count
    user.bank += count

    reply(`✅ *DEPOSIT BERHASIL*\n\nBerhasil memindahkan *Rp ${count.toLocaleString()}* ke Bank.\nSisa Dompet: Rp ${user.money.toLocaleString()}\nSaldo Bank: Rp ${user.bank.toLocaleString()}`)
}
break
case 'tarik':
case 'withdraw':
case 'banktarik': {
    if (!m.isGroup) return reply(mess.only.group)
    let user = global.db.users[m.sender]
    if (typeof user.bank === 'undefined') user.bank = 0

    let count = args[0]
    if (!count) return reply(`Masukan jumlah yang ingin ditarik!\nContoh: *${prefix}withdraw 5000* atau *${prefix}withdraw all*`)

    if (count === 'all') {
        count = user.bank
    } else {
        count = parseInt(count)
    }

    if (isNaN(count)) return reply('Jumlah harus berupa angka!')
    if (count < 1) return reply('Minimal tarik 1 money.')
    if (user.bank < count) return reply(`Uang di bank kurang! Saldo kamu cuma Rp ${user.bank}`)

    user.bank -= count
    user.money += count

    reply(`✅ *PENARIKAN BERHASIL*\n\nBerhasil menarik *Rp ${count.toLocaleString()}* ke Dompet.\nUang Dompet: Rp ${user.money.toLocaleString()}\nSisa Bank: Rp ${user.bank.toLocaleString()}`)
}
break
case 'maling': {

      if (!m.isGroup) return reply(mess.only.group)

      function msToTime(duration) {
        var milliseconds = parseInt((duration % 1000) / 100),
          seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

        hours = (hours < 10) ? "0" + hours : hours
        minutes = (minutes < 10) ? "0" + minutes : minutes
        seconds = (seconds < 10) ? "0" + seconds : seconds

        return hours + " jam " + minutes + " menit " + seconds + " detik"
      }
      const timeout = 604800000

      let user = db.users[m.sender]
      let time = user.lastmaling + 604800000
      if (new Date - user.lastmaling < 604800000) return reply(`📮Anda sudah merampok bank\nTunggu selama ⏲️ ${msToTime(time - new Date())} lagi`)
      let money = `${Math.floor(Math.random() * 30000)}`.trim()
      let exp = `${Math.floor(Math.random() * 999)}`.trim()
      let kardus = `${Math.floor(Math.random() * 1000)}`.trim()
      user.money += money * 1
      user.exp += exp * 1
      user.kardus += kardus * 1
      user.lastmaling = new Date * 1
      reply(`Selamat kamu mendapatkan : \n💰+${money} Money\📦+${kardus} Kardus\n✨+${exp} Exp`)
      setTimeout(() => {
        reply(`Yuk waktunya Maling lagi 👋…`)
      }, timeout)
    }
    db.users[m.sender].exp += 300;
    break
    case 'berkebun':
case 'berkebon':
case 'garden': {
    if (!m.isGroup) return reply(mess.only.group)
    let user = global.db.users[m.sender]

    const cooldown = 1800000 // 30 Menit
    if (new Date() - user.lastberkebon < cooldown) {
        let timers = cooldown - (new Date() - user.lastberkebon)
        let menit = Math.floor(timers / 60000)
        let detik = Math.floor((timers % 60000) / 1000)
        return reply(`⏳ *TANAMAN BELUM MASAK*\n\nHarap tunggu *${menit} menit ${detik} detik* lagi untuk memanen.`)
    }

    // Cek Bibit (Minimal punya 100 bibit untuk start farming masal)
    let bibitPisang = user.bibitpisang || 0
    let bibitAnggur = user.bibitanggur || 0
    let bibitMangga = user.bibitmangga || 0
    let bibitJeruk = user.bibitjeruk || 0
    let bibitApel = user.bibitapel || 0

    if (bibitPisang < 100 || bibitAnggur < 100 || bibitMangga < 100 || bibitJeruk < 100 || bibitApel < 100) {
        let text = `🌱 *GUDANG BIBIT KOSONG* 🌱\n\n`
        text += `Kamu butuh masing-masing **100 Bibit** untuk memulai perkebunan besar!\n\n`
        text += `🍌 Bibit Pisang: ${bibitPisang}/100\n`
        text += `🍇 Bibit Anggur: ${bibitAnggur}/100\n`
        text += `🥭 Bibit Mangga: ${bibitMangga}/100\n`
        text += `🍊 Bibit Jeruk: ${bibitJeruk}/100\n`
        text += `🍎 Bibit Apel: ${bibitApel}/100\n\n`
        text += `_Dapatkan bibit dari Dungeon atau Shop!_`
        return reply(text)
    }

    await DinzBotz.sendMessage(m.chat, { react: { text: '🌾', key: m.key } })

    // Proses Panen
    let hasilPisang = Math.floor(Math.random() * 50) + 10
    let hasilAnggur = Math.floor(Math.random() * 50) + 10
    let hasilMangga = Math.floor(Math.random() * 50) + 10
    let hasilJeruk = Math.floor(Math.random() * 50) + 10
    let hasilApel = Math.floor(Math.random() * 50) + 10

    user.pisang += hasilPisang
    user.anggur += hasilAnggur
    user.mangga += hasilMangga
    user.jeruk += hasilJeruk
    user.apel += hasilApel

    // Kurangi Bibit
    user.bibitpisang -= 100
    user.bibitanggur -= 100
    user.bibitmangga -= 100
    user.bibitjeruk -= 100
    user.bibitapel -= 100

    user.lastberkebon = new Date() * 1
    user.exp += 1000

    let ppUrl
    try { ppUrl = await DinzBotz.profilePictureUrl(m.sender, 'image') } 
    catch { ppUrl = 'https://i.pinimg.com/564x/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.jpg' }

    let pName = user.name || user.nama || m.pushName || 'Farmer'

    let harvestItems = {
        pisang: hasilPisang,
        anggur: hasilAnggur,
        mangga: hasilMangga,
        jeruk: hasilJeruk,
        apel: hasilApel
    }

    let canvas = await createGardenCanvas({
        user: { name: pName, pp: ppUrl },
        items: harvestItems,
        stats: { exp: 1000, sub: 'Harvesting' }
    })

    let caption = `🚜 *HARVEST REPORT* 🚜\n\n`
    caption += `👤 *Farmer:* ${pName}\n`
    caption += `🆙 *XP Gained:* +1000 XP\n`
    caption += `───────────────────\n`
    caption += `🧺 *HASIL PANEN:*\n`
    caption += `🍌 Pisang: +${hasilPisang}\n`
    caption += `🍇 Anggur: +${hasilAnggur}\n`
    caption += `🥭 Mangga: +${hasilMangga}\n`
    caption += `🍊 Jeruk: +${hasilJeruk}\n`
    caption += `🍎 Apel: +${hasilApel}\n`
    caption += `───────────────────\n`
    caption += `_Bibit otomatis ditanam kembali..._`

    if (canvas) {
        await DinzBotz.sendMessage(m.chat, { image: canvas, caption: caption }, { quoted: m })
    } else {
        reply(caption)
    }
}
break
case 'bet': {

      if (!m.isGroup) return reply(mess.only.group)

      function number(x = 0) {
        x = parseInt(x)
        return !isNaN(x) && typeof x == 'number'
      }
      const items = ['money', 'chip']
      let user = global.db.users[m.sender]
      let item = items.filter(v => v in user && typeof user[v] == 'number')
      let type = (args[0] || '').toLowerCase()
      let count = (args[1] && number(parseInt(args[1])) ? Math.max(parseInt(args[1]), 1) : /all/i.test(args[1]) ? Math.floor(parseInt(user[type])) : 1) * 1
      if (!item.includes(type)) return reply(`*List Item:*\n${item.map(v => `${global.rpg.emoticon(v)}${v}`.trim()).join('\n')}\n\nContoh:\nbet money 100000`)
      if ((user[type] * 1) < count) return reply(`*${type} ${global.rpg.emoticon(type)}* kamu tidak cukup!!`)
      let moneyDulu = user[type] * 1
      let txt = (m.msg && m.msg.selectedDisplayText ? m.msg.selectedDisplayText : m.text ? m.text : '').toLowerCase()
      try {
        let Bot = (Math.ceil(Math.random() * 91)) * 1
        let Kamu = (Math.floor(Math.random() * 71)) * 1
        let status = 'Kalah'
        if (Bot < Kamu) {
          user[type] += count * 1
          status = 'Menang'
        } else if (Bot > Kamu) {
          user[type] -= count * 1
        } else {
          status = 'Seri'
          user[type] += (Math.floor(count / 1.5)) * 1
        }
        reply(`
| *PLAYERS* | *POINT* |
*🤖 BOT:*      ${Bot}
*👤 KAMU:*    ${Kamu}

Kamu *${status}*, kamu ${status == 'Menang' ? `Mendapatkan *+${count * 2}*`: status == 'Kalah' ? `Kehilangan *-${count * 1}*`: `Mendapatkan *+${Math.floor(count / 1.5)}*`} *${type} ${global.rpg.emoticon(type)}*
`.trim())
      } catch (e) {
        if (moneyDulu > (user[type] * 1)) user[type] = moneyDulu * 1
        reply('Error saat melakukan judi (Rejected)')
      }
    }
    db.users[m.sender].exp += 300;
    break
    case 'claim':
    case 'bonus': {

      if (!m.isGroup) return reply(mess.only.group)

      function msToTime(duration) {
        var milliseconds = parseInt((duration % 1000) / 100),
          seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
        hours = (hours < 10) ? "0" + hours : hours
        minutes = (minutes < 10) ? "0" + minutes : minutes
        seconds = (seconds < 10) ? "0" + seconds : seconds

        return hours + " jam " + minutes + " menit " + seconds + " detik"
      }
      let user = global.db.users[m.sender]
      let time = user.lastbonus + 86400000
      if (new Date - user.lastbonus < 86400000) return reply(`Kamu Sudah Ambil Bonus Hari Ini\nTunggu selama ${msToTime(time - new Date())} lagi`)
      let money = Math.floor(Math.random() * 50000000)
      user.money += money * 1
      user.lastbonus = new Date * 1
      reply(`Selamat Kamu Mendapatkan Bonus : \n+${money} Money`)
    }
    db.users[m.sender].exp += 300;
    break
    case 'cheat':
case 'cheater':
case 'cit': {
    if (!isOwner) return reply('❌ *ACCESS DENIED*\nFitur ini khusus Developer/Owner bot!')
    let type = (args[0] || '').toLowerCase()
    let jumlah = args[1] ? parseInt(args[1]) : 999999999 // Default: UNLIMITED

    let user = global.db.users[m.sender]

    switch (type) {
        case 'money':
        case 'uang':
        case 'duit':
            user.money += jumlah
            user.bank += jumlah
            reply(`🤑 *CHEAT MONEY ACTIVATED*\n\nSukses menambahkan:\n💵 Wallet: +${jumlah.toLocaleString()}\n💳 Bank: +${jumlah.toLocaleString()}`)
            break

        case 'exp':
        case 'level':
        case 'xp':
            user.exp += jumlah
            reply(`🧠 *CHEAT XP ACTIVATED*\n\nSukses menambahkan:\n🆙 XP: +${jumlah.toLocaleString()}`)
            break

        case 'bibit':
        case 'seed':
            user.bibitpisang += 1000
            user.bibitanggur += 1000
            user.bibitmangga += 1000
            user.bibitjeruk += 1000
            user.bibitapel += 1000
            reply(`🌾 *FARMER MODE*\n\nSukses menambahkan 1000 semua jenis bibit!`)
            break

        case 'ikan':
        case 'fish':
            user.hiu += 100
            user.paus += 100
            user.orca += 100
            user.lumba += 100
            reply(`🦈 *AQUAMAN MODE*\n\nSukses menambahkan 100 Ikan Legendaris (Hiu, Paus, Orca, Lumba)!`)
            break

        case 'item':
        case 'bahan':
            user.diamond += 10000
            user.gold += 10000
            user.emerald += 10000
            user.iron += 10000
            user.wood += 10000
            user.rock += 10000
            user.string += 10000
            reply(`💎 *MINER GOD*\n\nSukses menambahkan 10.000 semua resource tambang!`)
            break

        case 'all':
        case 'max':
        case 'full':
            // Money & Bank
            user.money = 999999999999
            user.bank = 999999999999
            
            // Resources
            user.diamond = 99999
            user.gold = 99999
            user.emerald = 99999
            user.iron = 99999
            user.wood = 99999
            user.rock = 99999
            user.string = 99999
            
            // Bibit
            user.bibitpisang = 9999
            user.bibitanggur = 9999
            user.bibitmangga = 9999
            user.bibitjeruk = 9999
            user.bibitapel = 9999

            // Tools (Repair Instant)
            user.pickaxedurability = 100
            user.fishingroddurability = 100
            user.sworddurability = 100
            user.armordurability = 100
            
            // Potion & Crate
            user.potion = 9999
            user.legendary = 9999

            reply(`😈 *GOD MODE ACTIVATED*\n\nAkun anda sekarang:\n✅ Unlimited Money\n✅ Unlimited Resource\n✅ Unlimited Bibit\n✅ Full Durability\n✅ 9999 Legendary Crate`)
            break

        case 'reset':
            // Hati-hati pakai ini
            user.money = 0
            user.bank = 0
            user.exp = 0
            user.level = 0
            user.diamond = 0
            user.gold = 0
            user.iron = 0
            reply(`🗑️ *RESET SUCCESS*\nAkun kamu kembali jadi miskin.`)
            break

        default:
            reply(`
🛑 *CHEAT MENU (OWNER ONLY)* 🛑

Cara pakai: *${prefix}cheat [tipe] [jumlah]*

📋 *List Kode Cheat:*
1. *money* (Tambah Uang & Bank)
2. *exp* (Tambah XP Instant)
3. *bibit* (Stok Bibit Kebun)
4. *item* (Stok Tambang/Crafting)
5. *ikan* (Stok Ikan Langka)
6. *all* (AUTO SULTAN / GOD MODE)
7. *reset* (Jadi Miskin Lagi)

Contoh:
*${prefix}cheat money 1000000000*
*${prefix}cheat all*
`)
    }
}
break
case 'nebang': {

      if (!m.isGroup) return reply(mess.only.group)

      function msToTime(duration) {
        var milliseconds = parseInt((duration % 1000) / 100),
          seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

        hours = (hours < 10) ? "0" + hours : hours
        minutes = (minutes < 10) ? "0" + minutes : minutes
        seconds = (seconds < 10) ? "0" + seconds : seconds

        return hours + " jam " + minutes + " menit " + seconds + " detik"
      }
      let user = global.db.users[m.sender]
      let time = user.lastparming + 1800000
      if (new Date - user.lastparming < 1800000) return reply(`Anda sudah lelah untuk bekerja\nTunggu selama ${msToTime(time - new Date())} lagi`)
      let wood = `${Math.floor(Math.random() * 50)}`.trim()
      let money = `${Math.floor(Math.random() * 50000)}`.trim()
      user.wood += wood * 1
      user.money += money * 1
      user.lastparming = new Date * 1
      reply(`Selamat kamu mendapatkan : \n+${wood} Kayu\n+${money} Money`)
    }
    db.users[m.sender].exp += 300;
    break
    case 'bansos': {

      if (!m.isGroup) return reply(mess.only.group)

      function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)];
      }

      function clockString(ms) {
        let h = Math.floor(ms / 3600000);
        let m = Math.floor(ms / 60000) % 60;
        let s = Math.floor(ms / 1000) % 60;
        return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
      }

      let user = global.db.users[m.sender];
      let randomaku = Math.floor(Math.random() * 101);
      let randomkamu = Math.floor(Math.random() * 101);
      let __timers = new Date() - user.lastbansos;
      let _timers = 360 - __timers;
      let timers = clockString(_timers);

      if (user.money < 1000) {
        return reply(`Uang Anda Harus Diatas Seribu Untuk Menggunakan Command Ini`);
      }

      if (new Date() - user.lastbansos > 300000) {
        if (randomaku > randomkamu) {
          user.money -= 3000000;
          user.lastbansos = new Date() * 1;
          return DinzBotz.sendMessage(m.chat, {
            image: {
              url: 'https://telegra.ph/file/afcf9a7f4e713591080b5.jpg'
            },
            caption: `Kamu Tertangkap Setelah Kamu korupsi dana bansos🕴️💰,  Dan Kamu harus membayar denda 3 Juta rupiah💵`
          });
        } else if (randomaku < randomkamu) {
          user.money += 3000000;
          user.lastbansos = new Date() * 1;
          return DinzBotz.sendMessage(m.chat, {
            image: {
              url: 'https://telegra.ph/file/d31fcc46b09ce7bf236a7.jpg'
            },
            caption: `Kamu berhasil korupsi dana bansos🕴️💰,  Dan Kamu mendapatkan 3 Juta rupiah💵`
          });
        } else {
          user.lastbansos = new Date() * 1;
          return reply(`Sorry Gan Lu g Berhasil Korupsi bansos Dan Tidak masuk penjara karna Kamu *melarikan diri🏃*`);
        }
      } else {
        return reply(`Silahkan Menunggu Beberapa Menit Untuk bansos Lagi`);
      }
    }
    db.users[m.sender].exp += 300;
    break;
    case 'taxy': {

      if (!m.isGroup) return reply(mess.only.group)

      function clockString(ms) {
        let h = Math.floor(ms / 3600000)
        let m = Math.floor(ms / 60000) % 60
        let s = Math.floor(ms / 1000) % 60
        return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
      }
      let __timers = (new Date - global.db.users[m.sender].lastmisi)
      let _timers = (3600000 - __timers)
      let order = global.db.users[m.sender].ojekk
      let timers = clockString(_timers)
      let name = DinzBotz.getName(m.sender)
      let user = global.db.users[m.sender]
      let id = m.sender
      let kerja = 'Taxy'
      DinzBotz.misi = DinzBotz.misi ? DinzBotz.misi : {}
      if (id in DinzBotz.misi) {
        reply(`Selesaikan Misi ${DinzBotz.misi[id][0]} Terlebih Dahulu`)
        throw false
      }
      if (new Date - user.lastmisi > 3600000) {
        let randomaku1 = Math.floor(Math.random() * 1000000)
        let randomaku2 = Math.floor(Math.random() * 10000)

        var dimas = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       🚕


✔️ Mendapatkan orderan....
`.trim()

        var dimas2 = `
🚶⬛⬛⬛⬛⬛🚐⬛⬛⬛🚓🚚
🚖⬜⬜⬜⬛⬜⬜⬜🚓⬛🚑
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🚙
🏘️🏘️🏢️🌳  🌳 🏘️  🏘️🏡


🚖 Mengantar Ke tujuan.....
`.trim()

        var dimas3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🚓
⬛⬜🚗⬜⬜⬛⬜🚐⬜⬜⬛🚙🚚🚑
⬛⬛⬛⬛🚒⬛⬛⬛⬛⬛⬛🚚
🏘️🏘️🏘️🏘️🌳  🌳 🏘️


🚖 Selesai Mengantar Pelanggan....
`.trim()

        var dimas4 = `
➕ 💹Menerima gaji....
`.trim()

        var hsl = `
*—[ Hasil Taxy ${name} ]—*
➕ 💹 Uang = [ ${randomaku1} ]
➕ ✨ Exp = [ ${randomaku2} ]
➕ 😍 Order Selesai = +1
➕ 📥Total Order Sebelumnya : ${order}
`.trim()

        user.money += randomaku1
        user.exp += randomaku2
        user.ojekk += 1

        DinzBotz.misi[id] = [
          kerja,
          setTimeout(() => {
            delete DinzBotz.misi[id]
          }, 27000)
        ]

        setTimeout(() => {
          reply(`${hsl}`)
        }, 27000)

        setTimeout(() => {
          reply(`${dimas4}`)
        }, 25000)

        setTimeout(() => {
          reply(`${dimas3}`)
        }, 20000)

        setTimeout(() => {
          reply(`${dimas2}`)
        }, 15000)

        setTimeout(() => {
          reply(`${dimas}`)
        }, 10000)

        setTimeout(() => {
          reply('🔍Mencari pelanggan.....')
        }, 0)
        user.lastmisi = new Date * 1
      } else reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
    }
    db.users[m.sender].exp += 300;
    break
    case 'mulung': {

      if (!m.isGroup) return reply(mess.only.group)

      function msToTime(duration) {
        var milliseconds = parseInt((duration % 1000) / 100),
          seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
        hours = (hours < 10) ? "0" + hours : hours
        minutes = (minutes < 10) ? "0" + minutes : minutes
        seconds = (seconds < 10) ? "0" + seconds : seconds
        return hours + " jam " + minutes + " menit " + seconds + " detik"
      }
      let user = global.db.users[m.sender]
      let time = user.lastmulung + 1800000

      if (new Date - user.lastmulung < 1800000) return reply(`Anda sudah lelah untuk mulung\nTunggu selama ${msToTime(time - new Date())} lagi`)

      let botol = Math.floor(Math.random() * 1000)
      let kaleng = Math.floor(Math.random() * 1000)
      let kardus = Math.floor(Math.random() * 1000)
      let gelas = Math.floor(Math.random() * 1000)
      let plastik = Math.floor(Math.random() * 1000)

      user.botol += botol * 1
      user.kaleng += kaleng * 1
      user.kardus += kardus * 1
      user.gelas += gelas * 1
      user.plastik += plastik * 1
      user.lastmulung = new Date * 1
      reply(`Selamat kamu mendapatkan : \n+${botol} Botol\n+${kaleng} Kaleng\n+${kardus} Kardus\n+${gelas} Gelas\n+${plastik} Plastik`)
    }
    db.users[m.sender].exp += 300;
    break
    case 'berburu': {

      if (!m.isGroup) return reply(mess.only.group)

      function clockString(ms) {
        let h = Math.floor(ms / 3600000)
        let m = Math.floor(ms / 60000) % 60
        let s = Math.floor(ms / 1000) % 60
        console.log({
          ms,
          h,
          m,
          s
        })
        return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
      }
      let __timers = (new Date - global.db.users[m.sender].lastmisi)
      let _timers = (3600000 - __timers)
      let timers = clockString(_timers)
      let name = DinzBotz.getName(m.sender)
      let user = global.db.users[m.sender]
      let id = m.sender
      let kerja = 'Berburu'
      DinzBotz.misi = DinzBotz.misi ? DinzBotz.misi : {}
      if (id in DinzBotz.misi) {
        return reply(`Selesaikan Misi ${DinzBotz.misi[id][0]} Terlebih Dahulu`)
      }
      if (new Date - user.lastmisi > 3600000) {
        let hewan1 = Math.floor(Math.random() * 10)
        let hewan2 = Math.floor(Math.random() * 10)
        let hewan3 = Math.floor(Math.random() * 10)
        let hewan4 = Math.floor(Math.random() * 10)
        let hewan5 = Math.floor(Math.random() * 10)
        let hewan6 = Math.floor(Math.random() * 10)
        let hewan7 = Math.floor(Math.random() * 10)
        let hewan8 = Math.floor(Math.random() * 10)
        let hewan9 = Math.floor(Math.random() * 10)
        let hewan10 = Math.floor(Math.random() * 10)
        let hewan11 = Math.floor(Math.random() * 10)
        let hewan12 = Math.floor(Math.random() * 10)

        let hsl = `🕸 *Hasil Berburu ${user.registered ? user.name : DinzBotz.getName(m.sender)}* 
${hewan1 ? `
🐂 Banteng: ${hewan1}` : ''} ${hewan2 ? `
🐅 Harimau: ${hewan2}` : ''} ${hewan3 ? `
🐘 Gajah: ${hewan3}` : ''} ${hewan4 ? `
🐐 Kambing: ${hewan4}` : ''} ${hewan5 ? `
🐼 Panda: ${hewan5}` : ''} ${hewan6 ? `
🐊 Buaya: ${hewan6}` : ''} ${hewan7 ? `
🐃 Kerbau: ${hewan7}` : ''} ${hewan8 ? `
🐮 Sapi: ${hewan8}` : ''} ${hewan9 ? `
🐒 Monyet: ${hewan9}` : ''} ${hewan10 ? `
🐗 Babi Hutan: ${hewan10}` : ''} ${hewan11 ? `
🐖 Babi: ${hewan11}` : ''} ${hewan12 ? `
🐓 Ayam: ${hewan12}` : ''}
`.trim()

        user.banteng += hewan1
        user.harimau += hewan2
        user.gajah += hewan3
        user.kambing += hewan4
        user.panda += hewan5
        user.buaya += hewan6
        user.kerbau += hewan7
        user.sapi += hewan8
        user.monyet += hewan9
        user.babihutan += hewan10
        user.babi += hewan11
        user.ayam += hewan12

        DinzBotz.misi[id] = [
          kerja,
          setTimeout(() => {
            delete DinzBotz.misi[id]
          }, 20000)
        ]

        setTimeout(() => {
          reply(`${hsl}`)
        }, 20000)

        setTimeout(() => {
          reply(`Nah ini dia`)
        }, 18000)

        setTimeout(() => {
          reply('Dorr🔥')
        }, 15000)

        setTimeout(() => {
          reply('Dapat Sasaran')
        }, 14000)

        setTimeout(() => {
          reply('Sedang mencari mangsa...')
        }, 0)
        user.lastmisi = new Date * 1
      } else reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
    }
    db.users[m.sender].exp += 300;
    break
    case 'polisi': {

      if (!m.isGroup) return reply(mess.only.group)

      function clockString(ms) {
        let h = Math.floor(ms / 3600000)
        let m = Math.floor(ms / 60000) % 60
        let s = Math.floor(ms / 1000) % 60
        console.log({
          ms,
          h,
          m,
          s
        })
        return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
      }
      let __timers = (new Date - global.db.users[m.sender].lastmisi)
      let _timers = (3600000 - __timers)
      let order = global.db.users[m.sender].ojekk
      let timers = clockString(_timers)
      let name = DinzBotz.getName(m.sender)
      let user = global.db.users[m.sender]
      let id = m.sender
      let kerja = 'Polisi'
      DinzBotz.misi = DinzBotz.misi ? DinzBotz.misi : {}
      if (id in DinzBotz.misi) {
        reply(`Selesaikan Misi ${DinzBotz.misi[id][0]} Terlebih Dahulu`)
        throw false
      }
      if (new Date - global.db.users[m.sender].lastmisi > 3600000) {
        let randomaku1 = Math.floor(Math.random() * 10)
        let randomaku2 = Math.floor(Math.random() * 10)

        let rbrb1 = (randomaku1 * 100000)
        let rbrb2 = (randomaku2 * 1000)

        var dimas = `
👮Mengejar Pencuri....
`.trim()

        var dimas2 = `
👮Menangkap pencuri....
`.trim()

        var dimas3 = `
🚔Membawa ke kantor polisi\nDan di penjara
`.trim()

        var dimas4 = `
➕ 💹Menerima gaji....
`.trim()

        var hsl = `
*—[ Hasil Polisi ${name} ]—*
➕ 💹 Uang = [ ${rbrb1} ]
➕ ✨ Exp = [ ${rbrb2} ]
➕ 😍 Order Selesai = +1
➕ 📥Total Order Sebelumnya : ${order}
`.trim()

        user.money += rbrb1
        user.exp += rbrb2
        user.ojekk += 1

        DinzBotz.misi[id] = [
          kerja,
          setTimeout(() => {
            delete DinzBotz.misi[id]
          }, 27000)
        ]

        setTimeout(() => {
          reply(`${hsl}`)
        }, 27000)

        setTimeout(() => {
          reply(`${dimas4}`)
        }, 25000)

        setTimeout(() => {
          reply(`${dimas3}`)
        }, 20000)

        setTimeout(() => {
          reply(`${dimas2}`)
        }, 15000)

        setTimeout(() => {
          reply(`${dimas}`)
        }, 10000)

        setTimeout(() => {
          reply('??Sedang Berpatroli.....')
        }, 0)
        user.lastmisi = new Date * 1
      } else reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
    }
    db.users[m.sender].exp += 300;
    break
    case 'berdagang': {

      if (!m.isGroup) return reply(mess.only.group)

      function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
      }

      function clockString(ms) {
        let h = Math.floor(ms / 3600000)
        let m = Math.floor(ms / 60000) % 60
        let s = Math.floor(ms / 1000) % 60
        console.log({
          ms,
          h,
          m,
          s
        })
        return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
      }

      let dapat = (Math.floor(Math.random() * 5000))
      let who
      if (m.isGroup) who = m.mentionedJid[0]
      else who = m.chat
      if (!who) return reply('Tag salah satu lah, yang kamu ingin berdagang bareng')
      if (typeof db.users[who] == 'undefined') return reply('Pengguna tidak ada didalam data base')
      let __timers = (new Date - global.db.users[m.sender].lastdagang)
      let _timers = (28800000 - __timers)
      let timers = clockString(_timers)
      let users = global.db.users
      let username = DinzBotz.getName(who)
      if (new Date - global.db.users[m.sender].lastdagang > 28800000) {
        if (4999 > users[who].money) return reply('Target tidak memiliki modal harap masukkan modal 5000')
        if (4999 > users[m.sender].money) return reply('kamu tidak memiliki modal harap masukkan modal 5000')
        users[who].money -= dapat * 1
        users[m.sender].money -= dapat * 1
        global.db.users[m.sender].lastdagang = new Date * 1
        reply(`Mohon tunggu kak..\nKamu dan @${who.replace(/@.+/, '')} sedang berdagang.. ðŸ˜…\n\nKamu dan @${who.replace(/@.+/, '')} meletakkan modal -${dapat} ðŸ˜…`)
        setTimeout(() => {
          reply(m.chat, `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`, m, {
            contextInfo: {
              mentionedJid: [m.sender, who]
            }
          })
        }, 3600000)
        setTimeout(() => {
          reply(`Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`, {
            contextInfo: {
              mentionedJid: [m.sender, who]
            }
          })
        }, 7200000)
        setTimeout(() => {
          reply(`Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`, {
            contextInfo: {
              mentionedJid: [m.sender, who]
            }
          })
        }, 10800000)
        setTimeout(() => {
          reply(`Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`, {
            contextInfo: {
              mentionedJid: [m.sender, who]
            }
          })
        }, 14400000)
        setTimeout(() => {
          reply(`Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`, {
            contextInfo: {
              mentionedJid: [m.sender, who]
            }
          })
        }, 18000000)
        setTimeout(() => {
          reply(`Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`, {
            contextInfo: {
              mentionedJid: [m.sender, who]
            }
          })
        }, 21600000)
        setTimeout(() => {
          reply(`Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`, {
            contextInfo: {
              mentionedJid: [m.sender, who]
            }
          })
        }, 25200000)
        setTimeout(() => {
          reply(`Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +10000\n${users[m.sender].money += 10000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +100000\n${users[who].money += 100000} Money @${who.replace(/@.+/, '')}`, {
            contextInfo: {
              mentionedJid: [m.sender, who]
            }
          })
        }, 28800000)
      } else reply(`Anda Sudah Berdagang , tunggu ${timers} lagi..`)

    }
    db.users[m.sender].exp += 300;
    break
    case 'merampok':
    case 'rampok': {

      if (!m.isGroup) return reply(mess.only.group)

      function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
      }

      function clockString(ms) {
        let h = Math.floor(ms / 3600000)
        let m = Math.floor(ms / 60000) % 60
        let s = Math.floor(ms / 1000) % 60
        return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
      }
      let dapat = (Math.floor(Math.random() * 100000))
      let users = global.db.users
      let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
      if (!who) return reply('Tag orang yang mau kamu Rampok!')
      if (typeof global.db.users[who] == 'undefined') return reply('Pengguna tidak ada didalam database')
      if (users[who].level > users[m.sender].level) return reply(`Level kamu harus lebih tinggi dari @${who.split('@')[0]} Untuk bisa merampoknya!`, false, {
        mentions: [who]
      })
      let __timers = (new Date - global.db.users[m.sender].lastrampok)
      let _timers = (3600000 - __timers)
      let timers = clockString(_timers)
      if (new Date - global.db.users[m.sender].lastrampok > 3600000) {
        if (10000 > users[who].money) return reply('ᴛᴀʀɢᴇᴛ ɢᴀᴀᴅᴀ 💰ᴜᴀɴɢ ʙᴏᴅᴏʜ, ᴋɪꜱᴍɪɴ ᴅɪᴀ')
        users[who].money -= dapat * 1
        users[m.sender].money += dapat * 1
        global.db.users[m.sender].lastrampok = new Date * 1
        reply(`ʙᴇʀʜᴀꜱɪʟ ᴍᴇʀᴀᴍᴘᴏᴋ ᴍᴏɴᴇʏ ᴛᴀʀɢᴇᴛ ꜱᴇʙᴇꜱᴀʀ 💰${dapat}`)
      } else reply(`Anda Sudah merampok dan berhasil sembunyi , tunggu ${timers} untuk merampok lagi`)
    }
    db.users[m.sender].exp += 300;
    break
    case 'bunuh':
    case 'hitman': {

      if (!m.isGroup) return reply(mess.only.group)

      function clockString(ms) {
        let h = Math.floor(ms / 3600000)
        let m = Math.floor(ms / 60000) % 60
        let s = Math.floor(ms / 1000) % 60
        return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
      }
      let __timers = (new Date - global.db.users[m.sender].lastmisi)
      let _timers = (3600000 - __timers)
      let order = global.db.users[m.sender].ojekk
      let timers = clockString(_timers)
      let name = DinzBotz.getName(m.sender)
      let user = global.db.users[m.sender]
      let id = m.sender
      let kerja = 'Bunuh'
      DinzBotz.misi = DinzBotz.misi ? DinzBotz.misi : {}
      if (id in DinzBotz.misi) {
        reply(`Selesaikan Misi ${DinzBotz.misi[id][0]} Terlebih Dahulu`)
        throw false
      }
      if (new Date - global.db.users[m.sender].lastmisi > 3600000) {
        let randomaku4 = Math.floor(Math.random() * 10)
        let randomaku5 = Math.floor(Math.random() * 10)

        let rbrb4 = (randomaku4 * 100000)
        let rbrb5 = (randomaku5 * 1000)

        var dimas = `
🕵️ Mendapatkan Target.....
`.trim()

        var dimas2 = `
⚔️ Menusuk Tubuhnya.....
`.trim()

        var dimas3 = `
☠️ Target meninggal\nDan kamu mengambil barang² nya
`.trim()

        var dimas4 = `
💼 Hasil dari membunuh....
`.trim()

        var hsl = `
*—[ Hasil ${name} ]—*
➕ 💹 Uang = [ ${rbrb4} ]
➕ ✨ Exp = [ ${rbrb5} ]
➕ 👮 Pelanggaran +1
➕ ☑️ Misi Berhasil = +1
➕  📥Total Misi Sebelumnya : ${order}
`.trim()

        user.money += rbrb4
        user.exp += rbrb5
        user.ojekk += 1
        user.warn += 1

        DinzBotz.misi[id] = [
          kerja,
          setTimeout(() => {
            delete DinzBotz.misi[id]
          }, 27000)
        ]
        setTimeout(() => {
          reply(`${hsl}`)
        }, 27000)

        setTimeout(() => {
          reply(`${dimas4}`)
        }, 25000)

        setTimeout(() => {
          reply(`${dimas3}`)
        }, 20000)

        setTimeout(() => {
          reply(`${dimas2}`)
        }, 15000)

        setTimeout(() => {
          reply(`${dimas}`)
        }, 10000)

        setTimeout(() => {
          reply('🔍Mencari Target pembunuhan.....')
        }, 0)
        user.lastmisi = new Date * 1
      } else reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
    }
    db.users[m.sender].exp += 300;
    break
    case 'collect': {

      if (!m.isGroup) return reply(mess.only.group)

      function clockString(ms) {
        let h = Math.floor(ms / 3600000)
        let m = Math.floor(ms / 60000) % 60
        let s = Math.floor(ms / 1000) % 60
        console.log({
          ms,
          h,
          m,
          s
        })
        return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
      }
      let __timers = (new Date - global.db.users[m.sender].lastclaim)
      let _timers = (43200000 - __timers)
      let timers = clockString(_timers)
      let user = global.db.users[m.sender]
      if (new Date - global.db.users[m.sender].lastclaim > 43200000) {
        reply(`Kamu sudah mengclaim dan mendapatkan *1000* 💵money dan *1* 🥤potion`)
        user.money += 1000
        user.potion += 1
        user.lastclaim = new Date * 1
      } else reply(`silahkan tunggu *${timers}* lagi untuk bisa mengclaim lagi`)
    }
    db.users[m.sender].exp += 300;
    break
    case 'feed': {

      if (!m.isGroup) return reply(mess.only.group)

      function clockString(ms) {
        let h = isNaN(ms) ? '--' : Math.floor(ms / 310000)
        let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
        let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
        return [h, ' H ', m, ' M ', s, ' S'].map(v => v.toString().padStart(2, 0)).join('')
      }

      function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
      }

      let info = `
乂 List Pet:
🐈 • Cᴀᴛ
🐕 • Dᴏɢ
🐎 • Hᴏʀsᴇ
🦊 • Fᴏx
🤖 • Rᴏʙᴏ

*➠ Contoh:* ${command}fcat
`.trim()
      let pesan = pickRandom(['ɴʏᴜᴍᴍᴍ~', 'ᴛʜᴀɴᴋs', 'ᴛʜᴀɴᴋʏᴏᴜ ^-^', '...', 'ᴛʜᴀɴᴋ ʏᴏᴜ~', 'ᴀʀɪɢᴀᴛᴏᴜ ^-^'])
      let type = (args[0] || '').toLowerCase()
      let emo = (type == 'fox' ? '🦊' : '' || type == 'cat' ? '🐈' : '' || type == 'dog' ? '🐕' : '' || type == 'horse' ? '🐴' : '' || type == 'robo' ? '🤖' : '')
      let user = global.db.users[m.sender]
      let rubah = global.db.users[m.sender].fox
      let kuda = global.db.users[m.sender].horse
      let kucing = global.db.users[m.sender].cat
      let anjing = global.db.users[m.sender].dog
      let robot = global.db.users[m.sender].robo
      switch (type) {
      case 'fox':
        if (rubah == 0) return reply('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
        if (rubah == 10) return reply('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
        let __waktur = (new Date - user.foxlastfeed)
        let _waktur = (10000 - __waktur)
        let waktur = clockString(_waktur)
        if (new Date - user.foxlastfeed > 10000) {
          if (user.petfood > 0) {
            user.petfood -= 1
            user.foxexp += 20
            user.foxlastfeed = new Date * 1
            reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
            if (rubah > 0) {
              let naiklvl = ((rubah * 100) - 1)
              if (user.foxexp > naiklvl) {
                user.fox += 1
                user.foxexp -= (rubah * 100)
                reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
              }
            }
          } else reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
        } else reply(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktur}*`)
        break
      case 'cat':
        if (kucing == 0) return reply('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
        if (kucing == 10) return reply('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
        let __waktuc = (new Date - user.catlastfeed)
        let _waktuc = (10000 - __waktuc)
        let waktuc = clockString(_waktuc)
        if (new Date - user.catlastfeed > 10000) {
          if (user.petfood > 0) {
            user.petfood -= 1
            user.catexp += 20
            user.catlastfeed = new Date * 1
            reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)

            if (kucing > 0) {
              let naiklvl = ((kucing * 100) - 1)
              if (user.catexp > naiklvl) {
                user.cat += 1
                user.catexp -= (kucing * 100)
                reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
              }
            }
          } else reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
        } else reply(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktuc}*`)
        break
      case 'dog':
        if (anjing == 0) return reply('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
        if (anjing == 10) return reply('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
        let __waktua = (new Date - user.doglastfeed)
        let _waktua = (10000 - __waktua)
        let waktua = clockString(_waktua)
        if (new Date - user.doglastfeed > 10000) {
          if (user.petfood > 0) {
            user.petfood -= 1
            user.dogexp += 20
            user.doglastfeed = new Date * 1
            reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
            if (anjing > 0) {
              let naiklvl = ((anjing * 100) - 1)
              if (user.dogexp > naiklvl) {
                user.dog += 1
                user.dogexp -= (anjing * 100)
                reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
              }
            }
          } else reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
        } else reply(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktua}*`)
        break
      case 'horse':
        if (kuda == 0) return reply('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
        if (kuda == 10) return reply('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
        let __waktuk = (new Date - user.horselastfeed)
        let _waktuk = (10000 - __waktuk)
        let waktuk = clockString(_waktuk)
        if (new Date - user.horselastfeed > 10000) {
          if (user.petfood > 0) {
            user.petfood -= 1
            user.horseexp += 20
            user.horselastfeed = new Date * 1
            reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
            if (kuda > 0) {
              let naiklvl = ((kuda * 100) - 1)
              if (user.horseexp > naiklvl) {
                user.horse += 1
                user.horseexp -= (kuda * 100)
                reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
              }
            }
          } else reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
        } else reply(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktuk}*`)
        break
      case 'robo':
        if (robot == 0) return reply('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
        if (robot == 10) return reply('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
        let __wakturb = (new Date - user.robolastfeed)
        let _wakturb = (10000 - __wakturb)
        let wakturb = clockString(_wakturb)
        if (new Date - user.robolastfeed > 10000) {
          if (user.petfood > 0) {
            user.petfood -= 1
            user.roboexp += 20
            user.robolastfeed = new Date * 1
            reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
            if (robot > 0) {
              let naiklvl = ((robot * 100) - 1)
              if (user.roboexp > naiklvl) {
                user.robo += 1
                user.roboexp -= (robot * 100)
                reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
              }
            }
          } else reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
        } else reply(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${wakturb}*`)
        break
      default:
        return reply(`${info}`)
      }
    }
    db.users[m.sender].exp += 300;
    break
case 'fighting':
    case 'fight': {

      function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      if (!m.isGroup) return reply(mess.only.group)
      DinzBotz.fight = DinzBotz.fight ? DinzBotz.fight : {}
      let user = global.db.users[m.sender]
      if (typeof DinzBotz.fight[m.sender] != "undefined" && DinzBotz.fight[m.sender] == true) return reply(`Kamu masih bertarung.`)
      let users = participants.map(a => a.id)
      var lawan
      lawan = users[Math.floor(users.length * Math.random())]
      while (typeof global.db.users[lawan] == "undefined" || lawan == m.sender) {
        lawan = users[Math.floor(users.length * Math.random())]
      }
      reply(`*Kamu* (level ${user.level}) menantang *${DinzBotz.getName(lawan)}* (level ${global.db.users[lawan].level}) dan sedang dalam pertarungan.\n\nTunggu 5 menit lagi dan lihat siapa yg menang.`)
      DinzBotz.fight[m.sender] = true
      await delay(300000)
      let kesempatan = []
      for (let i = 0; i < user.level; i++) kesempatan.push(m.sender)
      for (let i = 0; i < global.db.users[lawan].level; i++) kesempatan.push(lawan)
      let pointPemain = 0
      let pointLawan = 0
      for (let i = 0; i < 10; i++) {
        let unggul = getRandom(0, kesempatan.length - 1)
        if (kesempatan[unggul] == m.sender) pointPemain += 1
        else pointLawan += 1
      }
      if (pointPemain > pointLawan) {
        let hadiah = (pointPemain - pointLawan) * 10000
        user.money += hadiah
        user.limit += 1
        reply(`*${DinzBotz.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${DinzBotz.getName(lawan)}*\n\n*Kamu* (level ${user.level}) menang melawan *${DinzBotz.getName(lawan)}* (level ${global.db.users[lawan].level}) karena kamu ${alasanMenang[getRandom(0, alasanMenang.length - 1)]}\n\nHadiah . ${hadiah.toLocaleString()}\n+1 Limit`)
      } else if (pointPemain < pointLawan) {
        let denda = (pointLawan - pointPemain) * 100000
        user.money -= denda
        user.limit += 1
        reply(`*${DinzBotz.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${DinzBotz.getName(lawan)}*\n\n*Kamu* (level ${user.level}) kalah melawan *${DinzBotz.getName(lawan)}* (level ${global.db.users[lawan].level}) karena kamu ${alasanKalah[getRandom(0, alasanKalah.length - 1)]}\n\nMoney kamu berkurang ${denda.toLocaleString()}\n+1 Limit`)
      } else {
        reply(`*${DinzBotz.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${DinzBotz.getName(lawan)}*\n\nHasil imbang kak, ga dapet apa apa`)
      }
      delete DinzBotz.fight[m.sender]
    }
    db.users[m.sender].exp += 300;
    break
    case 'gajian': {

      if (!m.isGroup) return reply(mess.only.group)

      function JaM(ms) {
        let h = isNaN(ms) ? '60' : Math.floor(ms / 3600000) % 60
        return [h].map(v => v.toString().padStart(2, 0)).join(':')
      }

      function MeNit(ms) {
        let m = isNaN(ms) ? '60' : Math.floor(ms / 60000) % 60
        return [m].map(v => v.toString().padStart(2, 0)).join(':')
      }

      function DeTik(ms) {
        let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
        return [s].map(v => v.toString().padStart(2, 0)).join(':')
      }

      let LastClaim = global.db.users[m.sender].lastclaim
      let cdm = `${MeNit(new Date - LastClaim)}`
      let cds = `${DeTik(new Date - LastClaim)}`
      let cd1 = Math.ceil(44 - cdm)
      let cd2 = Math.ceil(59 - cds)
      if (new Date - global.db.users[m.sender].lastclaim > 2700000) {
        global.db.users[m.sender].money += 50000000
        global.db.users[m.sender].exp += 100
        reply('Nih gaji lu +Rp50000000')
        global.db.users[m.sender].lastclaim = new Date * 1
      } else return reply(`Lu udah ambil jatah hari ini.\n\nTunggu ${cd1} Menit ${cd2} Detik!`)
    }
    db.users[m.sender].exp += 300;
    break
    case 'transfer': {

      if (!m.isGroup) return reply(mess.only.group)

      function special(type) {
        let b = type.toLowerCase()
        let special = (['common', 'uncommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
        return special
      }

      function isNumber(x) {
        return !isNaN(x)
      }
      const items = [
        'money', 'bank', 'potion', 'trash', 'wood',
        'rock', 'string', 'petFood', 'emerald',
        'diamond', 'gold', 'iron', 'common',
        'uncommon', 'mythic', 'legendary', 'pet', 'chip',
        'anggur', 'apel', 'jeruk', 'mangga', 'pisang',
        'bibitanggur', 'bibitapel', 'bibitjeruk', 'bibitmangga', 'bibitpisang',
      ]
      let user = global.db.users[m.sender]
      const item = items.filter(v => v in user && typeof user[v] == 'number')
      let lol = `Use format ${command} [type] [value] [number]
Contoh ${command} money 9999 @621927237001

📍 Transferable items
${item.map(v => `${rpg.emoticon(v)}${v}`.trim()).join('\n')}
`.trim()
      const type = (args[0] || '').toLowerCase()
      if (!item.includes(type)) return reply(lol)
      const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
      let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
      let _user = global.db.users[who]
      if (!who) return reply('Tag salah satu, atau ketik Nomernya!!')
      if (!(who in global.db.users)) return reply(`User ${who} not in database`)
      if (user[type] * 1 < count) return reply(`Your *${rpg.emoticon(type)}${type}${special(type)}* is less *${count - user[type]}*`)
      let previous = user[type] * 1
      let _previous = _user[type] * 1
      user[type] -= count * 1
      _user[type] += count * 1
      if (previous > user[type] * 1 && _previous < _user[type] * 1) reply(`*––––––『 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁 』––––––*\n*📊 Status:* Succes\n*🗂️ Type:* ${type}${special(type)} ${rpg.emoticon(type)}\n*🧮 Count:* ${count}\n*📨 To:* @${(who || '').replace(/@s\.whatsapp\.net/g, '')}`, null, {
        mentions: [who]
      })
      else {
        user[type] = previous
        _user[type] = _previous
        reply(`*––––––『 TRANSFER 』––––––*\n*📊 Status:* Failted\n*📍 Item:* ${count} ${rpg.emoticon(type)}${type}${special(type)}\n*📨 To:* @${(who || '').replace(/@s\.whatsapp\.net/g, '')}`, null, {
          mentions: [who]
        })
      }
    }
    db.users[m.sender].exp += 300;
    break
    case 'roket': {

      if (!m.isGroup) return reply(mess.only.group)

      function clockString(ms) {
        let h = Math.floor(ms / 3600000)
        let m = Math.floor(ms / 60000) % 60
        let s = Math.floor(ms / 1000) % 60
        return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
      }
      let __timers = (new Date - global.db.users[m.sender].lastmisi)
      let _timers = (3600000 - __timers)
      let user = global.db.users[m.sender]
      let order = global.db.users[m.sender].rokets
      let timers = clockString(_timers)
      let name = user.registered ? user.name : DinzBotz.getName(m.sender)
      let id = m.sender
      let kerja = 'Roket'
      DinzBotz.misi = DinzBotz.misi ? DinzBotz.misi : {}
      if (id in DinzBotz.misi) {
        reply(`Selesaikan Misi ${DinzBotz.misi[id][0]} Terlebih Dahulu`)
        throw false
      }
      if (user.health < 80) return reply(`Anda Harus Memiliki Minimal 80Health`)
      if (new Date - global.db.users[m.sender].lastmisi > 3600000) {
        let ngerok4 = Math.floor(Math.random() * 10)
        let ngerok5 = Math.floor(Math.random() * 10)

        let ngrk4 = (ngerok4 * 100000)
        let ngrk5 = (ngerok5 * 1000)

        let rokit = `🌕


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████
🚀

👨‍🚀 Memulai penerbangan....
`.trim()

        let rokit2 = `🌕


🚀
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ Dalam penerbangan....
`.trim()

        let rokit3 = `🌕🚀


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ Sampai di tujuan....
`.trim()

        let rokit4 = `🌕🚀

➕ Sukses Mendarat.... 👨‍🚀
`.trim()

        let hsl = `
*—[ Hasil Ngroket ${name} ]—*
➕ 💹 Uang = [ ${ngrk4} ]
➕ ✨ Exp = [ ${ngrk5} ]
➕ 😍 Mendarat Selesai = +1
➕  📥Total Mendarat Sebelumnya : ${order}
`.trim()

        user.money += ngrk4
        user.exp += ngrk5
        user.rokets += 1
        user.health -= 80

        DinzBotz.misi[id] = [
          kerja,
          setTimeout(() => {
            delete DinzBotz.misi[id]
          }, 27000)
        ]

        setTimeout(() => {
          reply(hsl)
        }, 27000)

        setTimeout(() => {
          reply(rokit4)
        }, 25000)

        setTimeout(() => {
          reply(rokit3)
        }, 20000)

        setTimeout(() => {
          reply(rokit2)
        }, 15000)

        setTimeout(() => {
          reply(rokit)
        }, 10000)

        setTimeout(() => {
          reply(`🔍 ${name} Mencari Lokasi.....`)
        }, 0)
        user.lastmisi = new Date * 1
      } else reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
    }
    break
    case 'rob':
    case 'robery': {

      if (!m.isGroup) return reply(mess.only.group)

      function clockString(ms) {
        let h = Math.floor(ms / 3600000)
        let m = Math.floor(ms / 60000) % 60
        let s = Math.floor(ms / 1000) % 60
        return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
      }
      let user = global.db.users[m.sender]
      let __timers = (new Date - user.lastmisi)
      let _timers = (3600000 - __timers)
      let timers = clockString(_timers)
      let id = m.sender
      let kerja = 'Rob'
      DinzBotz.misi = DinzBotz.misi ? DinzBotz.misi : {}
      if (id in DinzBotz.misi) {
        reply(`Selesaikan Misi ${DinzBotz.misi[id][0]} Terlebih Dahulu`)
        throw false
      }
      if (user.health < 80) return reply('Anda Harus Memiliki Minimal 80Health')
      if (new Date - global.db.users[m.sender].lastmisi > 3600000) {
        let rndm1 = Math.floor(Math.random() * 10)
        let rndm2 = Math.floor(Math.random() * 10)

        let ran1 = (rndm1 * 100000)
        let ran2 = (rndm2 * 1000)

        let jln = `
🏘️          🚗

✔️ Mengincar target....
`.trim()

        let jln2 = `
🏘️     🚶

➕ Memulai aksi....
`.trim()

        let jln3 = `
🏘️

➕ Merampok....
`.trim()

        let jln4 = `
🚗



🏘️🚓

➕ 💹Berhasil kabur....
`.trim()

        let hsl = `
*—[ Hasil rob ]—*

➕ 💹 Uang = [ ${ran1} ]
➕ ✨ Exp = [ ${ran2} ]
➕ 📦 Rob Selesai = +1

Dan health anda berkurang -80
`.trim()
        user.money += ran1
        user.exp += ran2
        user.health -= 80

        DinzBotz.misi[id] = [
          kerja,
          setTimeout(() => {
            delete DinzBotz.misi[id]
          }, 27000)
        ]

        setTimeout(() => {
          reply(hsl)
        }, 27000)

        setTimeout(() => {
          reply(jln4)
        }, 25000)

        setTimeout(() => {
          reply(jln3)
        }, 20000)

        setTimeout(() => {
          reply(jln2)
        }, 15000)

        setTimeout(() => {
          reply(jln)
        }, 10000)

        setTimeout(() => {
          reply('🔍Mencari Rumah.....')
        }, 0)
        user.lastmisi = new Date * 1
      } else reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
    }
    break
    case 'referal': {

      if (!m.isGroup) return reply(mess.only.group)
      const {
        crypto
      } = require("crypto")
      const xp_first_time = 2500
      const xp_link_creator = 15000
      const xp_bonus = {
        5: 40000,
        10: 100000,
        20: 250000,
        50: 1000000,
        100: 10000000,
      }

      let users = global.db.users
      if (text) {
        if ('ref_count' in users[m.sender]) throw 'Tidak bisa menggunakan kode referal!'
        let link_creator = (Object.entries(users).find(([, {
          ref_code
        }]) => ref_code === text.trim()) || [])[0]
        if (!link_creator) throw 'Kode referal tidak valid'
        let count = users[link_creator].ref_count++
        let extra = xp_bonus[count] || 0
        users[link_creator].exp += xp_link_creator + extra
        users[m.sender].exp += xp_first_time
        users[m.sender].ref_count = 0
        m.reply(`
Selamat!
+${xp_first_time} XP
`.trim())
        reply(`
Seseorang telah menggunakan kode referal kamu
+${xp_link_creator + extra} XP
`.trim(), link_creator)
      } else {
        let code = users[m.sender].ref_code = users[m.sender].ref_code || new Array(11).fill().map(() => [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'][crypto.randomInt(62)]).join('')
        users[m.sender].ref_count = users[m.sender].ref_count ? users[m.sender].ref_count : 0
        let command_text = `${command}ref ${code}`
        let command_link = `wa.me/${DinzBotzuser.jid.split('@')[0]}?text=${encodeURIComponent(command_text)}`
        let share_text = `
Dapatkan ${xp_first_time} XP untuk yang menggunakan link/kode referal dibawah ini

Referal Code: *${code}*

${command_link}
`.trim()
        reply(`
Dapatkan ${xp_link_creator} XP untuk setiap pengguna baru yang menggunakan kode referal kamu
${users[m.sender].ref_count} orang telah menggunakan kode referal kamu

Kode referal kamu: ${code}

Bagikan link kepada teman: ${command_link}

atau kirim pesan kepada teman wa.me/?text=${encodeURIComponent(share_text)}

${Object.entries(xp_bonus).map(([count, xp]) => `${count} Orang = Bonus ${xp} XP`).join('\n')}
`.trim())
      }
    }
    db.users[m.sender].exp += 300;
    break
case 'petstore':
    case 'petshop': {

      if (!m.isGroup) return reply(mess.only.group)
      let type = (args[0] || '').toLowerCase()
      let _type = (args[0] || '').toLowerCase()
      let user = global.db.users[m.sender]
      global.db.users[m.sender].pickaxe = global.db.users[m.sender].pickaxe || 0
      global.db.users[m.sender].pedang = global.db.users[m.sender].pedang || 0
      global.db.users[m.sender].fishingrod = global.db.users[m.sender].fishingrod || 0

      //----------HARGA
      let hdog = 2
      let hcat = 2
      let hhorse = 4
      let hfox = 6
      let hrobo = 10

      let hlion = 10
      let hrhinoceros = 10
      let hdragon = 10
      let hcentaur = 10
      let hkyubi = 10
      let hgriffin = 10
      let hphonix = 10
      let hwolf = 10

      let logo = `— *P E T   S T O R E* —
▮▧▧▧▧▧▧▧▧▧▧▧▧▮`
      let caption = `
🐈 *Cat:* ${hcat} 🔖
🐕 *Dog:* ${hdog} 🔖
🐎 *Horse:* ${hhorse} 🔖
🦊 *Fox:* ${hfox} 🔖
🤖 *Robo:* ${hrobo} 🔖

〉 *ABILITY*
Cooming soon...`
      const sections = [{
        title: "Buy A Pet",
        rows: [{
            title: "Cat 🐈",
            rowId: ".petshop cat",
            description: "Adopt A Cat"
          },
          {
            title: "Dog 🐕",
            rowId: ".petshop dog",
            description: "Adopt A Dog"
          },
          {
            title: "Horse 🐎",
            rowId: ".petshop horse",
            description: "Adopt A Horse"
          },
          {
            title: "Fox 🦊",
            rowId: ".petshop fox",
            description: "Adopt A Fox"
          },
          {
            title: "Robo 🤖",
            rowId: ".petshop robo",
            description: "Buy A Robo"
          },
        ]
      }, ]

      const listMessage = {
        text: caption,
        footer: wm,
        title: logo,
        buttonText: "ADOPT ME 🐾",
        sections
      }

      try {
        if (/petshop/i.test(command)) {
          const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
          switch (type) {
          case 'cat':
            if (user.cat > 0) return reply('Kamu sudah memilik ini')
            if (user.pet < hcat) return reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hcat
            global.db.users[m.sender].cat += 1
            reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'dog':
            if (user.dog > 0) return reply('Kamu sudah memilik ini')
            if (user.pet < hdog) return reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hdog
            global.db.users[m.sender].dog += 1
            reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'fox':
            if (user.fox > 0) return reply('Kamu sudah memilik ini')
            if (user.pet < hfox) return reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hfox
            global.db.users[m.sender].fox += 1
            reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'horse':
            if (user.horse > 0) return reply('Kamu sudah memilik ini')
            if (user.pet < hhorse) return reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hhorse
            global.db.users[m.sender].horse += 1
            reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'robo':
            if (user.robo > 0) return reply('Kamu sudah memilik ini')
            if (user.pet < hrobo) return reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hrobo
            global.db.users[m.sender].robo += 1
            reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'lion':
            if (user.lion > 0) return reply('Kamu sudah memilik ini')
            if (user.pet < hlion) return reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hlion
            global.db.users[m.sender].lion += 1
            reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'rhinoceros':
            if (user.rhinoceros > 0) return reply('Kamu sudah memilik ini')
            if (user.pet < hrhinoceros) return reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hrhinoceros
            global.db.users[m.sender].rhinoceros += 1
            reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'dragon':
            if (user.dragon > 0) return reply('Kamu sudah memilik ini')
            if (user.pet < hdragon) return reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hdragon
            global.db.users[m.sender].dragon += 1
            reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'centaur':
            if (user.centaur > 0) return reply('Kamu sudah memilik ini')
            if (user.pet < hcentaur) return reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hcentaur
            global.db.users[m.sender].centaur += 1
            reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'kyubi':
            if (user.kyubi > 0) return reply('Kamu sudah memilik ini')
            if (user.pet < hkyubi) return reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hkyubi
            global.db.users[m.sender].kyubi += 1
            reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'griffin':
            if (user.griffin > 0) return reply('Kamu sudah memilik ini')
            if (user.pet < hgriffin) return reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hgriffin
            global.db.users[m.sender].griffin += 1
            reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'phonix':
            if (user.phonix > 0) return reply('Kamu sudah memilik ini')
            if (user.pet < hphonix) return reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hphonix
            global.db.users[m.sender].phonix += 1
            reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'wolf':
            if (user.wolf > 0) return reply('Kamu sudah memilik ini')
            if (user.pet < hwolf) return reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hwolf
            global.db.users[m.sender].wolf += 1
            reply("Selamat anda mempunyai pet Baru ! 🎉")
            break

          default:
            return await m.reply(`${logo}\n${caption}`)
            //return await DinzBotz.sendMessage(m.chat, listMessage)
          }
        } else if (/enchant|enchan/i.test(command)) {
          const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 : Math.min(1, count)
          switch (_type) {
          case 't':
            break
          case '':
            break

          default:
            return DinzBotz.sendButton(m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
          }
        }
      } catch (err) {
        reply("Error\n\n\n" + err.stack)
      }
    }
    break
case 'koboy': {

      if (!m.isGroup) return reply(mess.only.group)

      function random(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
      }
      try {
        DinzBotz.tembak = DinzBotz.tembak || {
          musuh: [],
          tembak: []
        }
        if (/kiri/i.test(text)) {

          let kiri = [
            ["🤠", "-", "-", "-", "-"],
            ["-", "🤠", "-", "-", "-"],
            ["-", "-", "🤠", "-", "-"],
            ["-", "-", "-", "🤠", "-"],
            ["-", "-", "-", "-", "🤠"]
          ]

          if (DinzBotz.tembak.tembak.indexOf("🤠") == 0) {
            DinzBotz.tembak.tembak = kiri[0]
          } else if (DinzBotz.tembak.tembak.indexOf("🤠") == 1) {
            DinzBotz.tembak.tembak = kiri[0]
          } else if (DinzBotz.tembak.tembak.indexOf("🤠") == 2) {
            DinzBotz.tembak.tembak = kiri[1]
          } else if (DinzBotz.tembak.tembak.indexOf("🤠") == 3) {
            DinzBotz.tembak.tembak = kiri[2]
          } else if (DinzBotz.tembak.tembak.indexOf("🤠") == 4) {
            DinzBotz.tembak.tembak = kiri[3]
          }

          let pos = DinzBotz.tembak.musuh.join(" ") + "\n\n\n" + DinzBotz.tembak.tembak.join(" ")

          if (DinzBotz.tembak.musuh.indexOf("🥷") === DinzBotz.tembak.tembak.indexOf("🤠")) return DinzBotz.sendButton(m.chat, pos, wm, [
            ['Tembak', `${command}koboy tembak`]
          ])
          return DinzBotz.sendButton(m.chat, pos, wm, [
            ['←', `${command}koboy kiri`],
            ['→', `${command}koboy kanan`]
          ])
        } else if (/kanan/i.test(text)) {

          let kanan = [
            ["🤠", "-", "-", "-", "-"],
            ["-", "🤠", "-", "-", "-"],
            ["-", "-", "🤠", "-", "-"],
            ["-", "-", "-", "🤠", "-"],
            ["-", "-", "-", "-", "🤠"]
          ]

          if (DinzBotz.tembak.tembak.indexOf("🤠") == 0) {
            DinzBotz.tembak.tembak = kanan[1]
          } else if (DinzBotz.tembak.tembak.indexOf("🤠") == 1) {
            DinzBotz.tembak.tembak = kanan[2]
          } else if (DinzBotz.tembak.tembak.indexOf("🤠") == 2) {
            DinzBotz.tembak.tembak = kanan[3]
          } else if (DinzBotz.tembak.tembak.indexOf("🤠") == 3) {
            DinzBotz.tembak.tembak = kanan[4]
          } else if (DinzBotz.tembak.tembak.indexOf("🤠") == 4) {
            DinzBotz.tembak.tembak = kanan[4]
          }

          let pos = DinzBotz.tembak.musuh.join(" ") + "\n\n\n" + DinzBotz.tembak.tembak.join(" ")

          if (DinzBotz.tembak.musuh.indexOf("🥷") === DinzBotz.tembak.tembak.indexOf("🤠")) return DinzBotz.sendButton(m.chat, pos, wm, [
            ['Tembak', `${command}koboy tembak`]
          ])
          return DinzBotz.sendButton(m.chat, pos, wm, [
            ['←', `${command}koboy kiri`],
            ['→', `${command}koboy kanan`]
          ])
        } else if (/tembak/i.test(text)) {

          if (DinzBotz.tembak.tembak.indexOf("🤠") == DinzBotz.tembak.musuh.indexOf("🥷")) {
            DinzBotz.tembak = {}
            global.db.users[m.sender].money += 1000
            reply("Kamu menang!\n\nUang += 1000")
          }

        } else {
          let randMusuh = [
            ["🥷", "-", "-", "-", "-"],
            ["-", "🥷", "-", "-", "-"],
            ["-", "-", "🥷", "-", "-"],
            ["-", "-", "-", "🥷", "-"],
            ["-", "-", "-", "-", "🥷"]
          ]
          let randAku = [
            ["🤠", "-", "-", "-", "-"],
            ["-", "🤠", "-", "-", "-"],
            ["-", "-", "🤠", "-", "-"],
            ["-", "-", "-", "🤠", "-"],
            ["-", "-", "-", "-", "🤠"]
          ]

          let musuh = random(randMusuh)
          let aku = random(randAku)

          DinzBotz.tembak.musuh = musuh
          DinzBotz.tembak.tembak = aku

          let pos = DinzBotz.tembak.musuh.join(" ") + "\n\n\n" + DinzBotz.tembak.tembak.join(" ")

          if (DinzBotz.tembak.musuh.indexOf("🥷") === DinzBotz.tembak.tembak.indexOf("🤠")) return DinzBotz.sendButton(m.chat, pos, wm, [
            ['Tembak', `${command}koboy tembak`]
          ])
          return DinzBotz.sendButton(m.chat, pos, wm, [
            ['←', `${command}koboy kiri`],
            ['→', `${command}koboy kanan`]
          ])
        }
      } catch (e) {
        throw false
      }
    }
    db.users[m.sender].exp += 300;
    break
case 'leaderboard':
case 'lb':
case 'top': {
    if (!m.isGroup) return reply(mess.only.group)

    // Default kategori: Money
    let type = (args[0] || 'money').toLowerCase()
    
    await DinzBotz.sendMessage(m.chat, { react: { text: '📊', key: m.key } })

    // 1. AMBIL DATA REALTIME DARI GRUP & DATABASE
    // Ambil list ID member grup saat ini
    let groupMetadata = await DinzBotz.groupMetadata(m.chat)
    let participants = groupMetadata.participants.map(p => p.id)
    
    let groupUsers = []
    
    // Loop setiap member grup, cek apakah datanya ada di database bot
    for (let jid of participants) {
        // Cek database global
        let dbUser = global.db.users[jid]
        
        // JIKA user ini ada di database (pernah chat), masukkan ke list
        if (dbUser) {
            groupUsers.push({
                jid: jid,
                name: dbUser.name || dbUser.nama || dbUser.pushname || dbUser.notify || 'Member',
                money: parseInt(dbUser.money) || 0,
                bank: parseInt(dbUser.bank) || 0,
                exp: parseInt(dbUser.exp) || 0,
                level: parseInt(dbUser.level) || 0
            })
        }
    }

    // Kalau kosong, berarti belum ada member grup yang terdaftar di bot
    if (groupUsers.length === 0) return reply("❌ *DATA KOSONG*\n\nBelum ada member di grup ini yang terdaftar di database bot.\n_Note: Member harus chat minimal sekali agar terdaftar._")

    // 2. LOGIKA SORTING (URUTKAN DARI TERBESAR)
    let sortedUsers = []
    let title = ""
    let subtitle = ""

    if (type === 'money' || type === 'uang' || type === 'kaya') {
        title = "TOP SULTAN"
        subtitle = "Orang Terkaya di Grup Ini"
        // Urutkan Money + Bank
        sortedUsers = groupUsers.sort((a, b) => (b.money + b.bank) - (a.money + a.bank))
    } 
    else if (type === 'exp' || type === 'level' || type === 'xp') {
        title = "TOP SEPUH"
        subtitle = "Member Paling Aktif (XP)"
        // Urutkan XP
        sortedUsers = groupUsers.sort((a, b) => b.exp - a.exp)
    }
    else if (type === 'bank' || type === 'atm') {
        title = "TOP TABUNGAN"
        subtitle = "Saldo Bank Terbanyak"
        // Urutkan Bank
        sortedUsers = groupUsers.sort((a, b) => b.bank - a.bank)
    }
    else {
        return reply(`❌ *TYPE SALAH*\n\nGunakan:\n• ${prefix}lb money\n• ${prefix}lb exp\n• ${prefix}lb bank`)
    }

    // 3. BATASI TAMPILAN (Top 5 Gambar, Top 10 Teks)
    // Slice otomatis menangani jumlah array yang sedikit.
    // Misal data cuma 3, slice(0, 5) tetap akan ambil 3. Aman.
    let top5 = sortedUsers.slice(0, 5)
    let top10 = sortedUsers.slice(0, 10)

    // 4. SIAPKAN GAMBAR LEADERBOARD
    let dataForCanvas = []
    for (let i = 0; i < top5.length; i++) {
        let user = top5[i]
        
        let ppUrl
        try { ppUrl = await DinzBotz.profilePictureUrl(user.jid, 'image') } 
        catch { ppUrl = 'https://i.pinimg.com/564x/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.jpg' }

        // Format Angka
        let scoreStr = ''
        if (type === 'exp') scoreStr = `${user.exp.toLocaleString()} XP`
        else if (type === 'bank') scoreStr = `Rp ${user.bank.toLocaleString()}`
        else scoreStr = `Rp ${(user.money + user.bank).toLocaleString()}`

        dataForCanvas.push({
            name: user.name,
            pp: ppUrl,
            scoreStr: scoreStr
        })
    }

    // Panggil Canvas
    let canvas = await createLeaderboardCanvas({ 
        top: dataForCanvas,
        title: title,
        subtitle: subtitle
    })

    // 5. SIAPKAN CAPTION TEKS (DENGAN TAG)
    let caption = `🏆 *LEADERBOARD GROUP* 🏆\n`
    caption += `📍 *Group:* ${groupMetadata.subject}\n`
    caption += `📊 *Kategori:* ${title}\n`
    caption += `👥 *Total Data:* ${groupUsers.length} Member\n\n`
    
    let mentions = []
    
    top10.forEach((user, index) => {
        let val = 0
        if (type === 'exp') val = `${user.exp.toLocaleString()} XP`
        else if (type === 'bank') val = `Rp ${user.bank.toLocaleString()}`
        else val = `Rp ${(user.money + user.bank).toLocaleString()}` // Total Kekayaan

        let medal = ''
        if(index === 0) medal = '🥇'
        if(index === 1) medal = '🥈'
        if(index === 2) medal = '🥉'
        if(index > 2) medal = `${index + 1}.`
        
        mentions.push(user.jid)
        
        // Tag member
        caption += `${medal} @${user.jid.split('@')[0]}\n`
        caption += `   └ ${val}\n`
    })
    
    if (groupUsers.length > 10) {
        caption += `\n_...dan ${groupUsers.length - 10} member lainnya._`
    }
    
    caption += `\n_Ayo lebih aktif biar naik rank!_`

    if (canvas) {
        await DinzBotz.sendMessage(m.chat, { 
            image: canvas, 
            caption: caption,
            mentions: mentions 
        }, { quoted: m })
    } else {
        reply(caption)
    }
}
break
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
                packname: global.packname,
                author: global.author,
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
case "bratvid":
case "bratvideo": {
    if (!isPrem) return reply(mess.only.premium)
    if (!text) return reply(`[❗] Input teks tidak ditemukan! Kirim perintah dengan format: ${prefix + command} <teks>`)
    
    await DinzBotz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key } })

    try {
        const axios = require('axios')
        let bratUrl = `https://brat.siputzx.my.id/gif?text=${encodeURIComponent(text)}&delay=500`
        
        let response = await axios.get(bratUrl, {
            responseType: "arraybuffer",
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        })
        
        let videoBuffer = response.data

        await DinzBotz.sendVideoAsSticker(m.chat, videoBuffer, m, {
            packname: global.packname,
            author: global.author
        })

    } catch (err) {
        console.error("Error:", err)
        reply("[❗] Gagal membuat stiker bratvid.")
    }
}
break
case "brat": {
    if (!text) return m.reply(`❌ Masukkan teksnya!\nContoh: ${prefix + command} gila lu ndro`)
    
    await DinzBotz.sendMessage(m.chat, {
        react: {
            text: "⏱️",
            key: m.key,
        }
    })

    try {
        const axios = require('axios')
        let url = `https://api-faa.my.id/faa/brat?text=${encodeURIComponent(text)}`
        
        let response = await axios.get(url, {
            responseType: "arraybuffer",
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
            }
        })

        await DinzBotz.sendImageAsSticker(m.chat, response.data, m, {
            packname: global.packname,
            author: global.author
        })

    } catch (err) {
        console.error("❌ Error:", err)
        m.reply("Terjadi kesalahan saat membuat stiker.")
    }
}
break

    case 'lirik':
case 'lyrics': {
    const yts = require('yt-search')
    const axios = require('axios')
    const cheerio = require('cheerio')

    if (!text) return reply(`⚠️ *Format Salah!*\nKetik: ${prefix + command} [Judul Lagu]\nContoh: ${prefix + command} Sial Mahalini`)

    await DinzBotz.sendMessage(m.chat, { react: { text: '🎧', key: m.key } })

    try {
        let search = await yts(text)
        let song = search.all[0]
        if (!song) return reply("❌ Lagu tidak ditemukan.")

        let lyricsText = ''
        
        try {
            let src1 = await fetch(`https://api.diioffc.web.id/api/search/lirik?query=${encodeURIComponent(text)}`)
            let json1 = await src1.json()
            if (json1.result && json1.result.lyrics) {
                lyricsText = json1.result.lyrics
            }
        } catch (e) {}

        if (!lyricsText) {
            try {
                const { data } = await axios.get(`https://songsear.ch/q/${encodeURIComponent(text)}`)
                const $ = cheerio.load(data)
                const resultDiv = $("div.results > div:nth-child(1) > .head > a")
                
                if (resultDiv.length) {
                    const number = resultDiv.attr("href").split("/")[4]
                    const lyricData = await axios.get(`https://songsear.ch/api/song/${number}?text_only=true`)
                    lyricsText = lyricData.data.song.text_html
                        .replace(/<br\/>/g, "\n")
                        .replace(/&#x27;/g, "'")
                        .replace(/<\/?[^>]+(>|$)/g, "")
                        .trim()
                }
            } catch (e) {}
        }

        if (!lyricsText) return reply("❌ Lirik tidak ditemukan.")

        const more = String.fromCharCode(8206)
        const readMore = more.repeat(4001)

        let caption = `乂  *L Y R I C S  -  P L A Y E R*\n\n`
        caption += `🎵 *Title:* ${song.title}\n`
        caption += `👤 *Artist:* ${song.author?.name || 'Unknown'}\n`
        caption += `⏱️ *Duration:* ${song.timestamp || song.duration}\n`
        caption += `──────────────────\n`
        caption += readMore 
        caption += `\n${lyricsText}\n`
        caption += `\n──────────────────\n`
        caption += `_Created by ${botname || 'DinzBotz'}_`

        let fquoted = {
            key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' },
            message: {
                contactMessage: {
                    displayName: `${song.title} - ${song.author?.name}`,
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a;;;\nFN:${song.author?.name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
            }
        }

        await DinzBotz.sendMessage(m.chat, {
            text: caption,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                    title: song.title,
                    body: `Artist: ${song.author?.name} | Duration: ${song.timestamp}`,
                    mediaType: 1,
                    previewType: 0,
                    renderLargerThumbnail: true,
                    thumbnailUrl: song.thumbnail,
                    sourceUrl: song.url
                }
            }
        }, { quoted: m })
        
        await DinzBotz.sendMessage(m.chat, { react: { text: '✅', key: m.key } })

    } catch (err) {
        console.error(err)
        reply(`❌ Terjadi kesalahan: ${err.message}`)
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
case 'ttaudio': {
    if (!text) return reply(`Masukkan link TikTok!\nContoh: ${prefix + command} https://vt.tiktok.com/ZSjXNEnbC/`)

    await DinzBotz.sendMessage(m.chat, { react: { text: "🎧", key: m.key } })

    try {
        let apiUrl = `https://dinzapi-sweager.vercel.app/api/downloader/tiktok?url=${encodeURIComponent(text)}`
        let res = await fetch(apiUrl)
        let json = await res.json()

        if (!json.status || !json.data || !json.data.urls) {
            return reply('Gagal mengambil data. Pastikan link valid.')
        }

        let mediaUrl = json.data.urls[0]
        let meta = json.data.metadata
        let title = meta.title || 'TikTok Audio'
        let creator = meta.creator || 'Creator'

        await DinzBotz.sendMessage(m.chat, {
            audio: { url: mediaUrl },
            mimetype: 'audio/mpeg',
            fileName: 'tiktok_audio.mp3',
            contextInfo: {
                externalAdReply: {
                    title: title,
                    body: `Creator: ${creator}`,
                    thumbnailUrl: meta.thumbnail,
                    sourceUrl: text,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m })

    } catch (e) {
        console.log(e)
        reply('Terjadi kesalahan saat mengambil audio.')
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
        let res;
        try {
            res = await DinzBotz.groupAcceptInvite(code);
        } catch (e) {
            console.log(e);
            return m.reply('❌ Gagal Join! Bot mungkin diblokir dari grup itu atau Link sudah di-reset admin.');
        }

        if (!res) return m.reply('❌ Gagal Join (Response kosong).');
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
case 'quotechat':
    case 'xquote':
    case 'quotly':
    case 'qc': {

      const colorMap = {
        hitam: "#000000",
        putih: "#ffffff",
        merah: "#ff0000",
        biru: "#0000ff",
        kuning: "#ffff00",
        hijau: "#00ff00",
        ijo: "#00ff00",
        ungu: "#800080",
        pink: "#ffc0cb",
        oranye: "#ffa500",
        coklat: "#8b4513",
        abu: "#808080",
        pink_pastel: "#ffd1dc",
        cyan: "#00ffff",
        toska: "#40e0d0",
        lavender: "#e6e6fa",
        mint: "#98ff98",
        peach: "#ffcccb",
        salem: "#fa8072",
        emas: "#ffd700",
        silver: "#c0c0c0",
        navy: "#000080",
        maroon: "#800000",
        coklat_muda: "#d2b48c",
        biru_muda: "#add8e6",
        hijau_muda: "#90ee90",
        kuning_pastel: "#fdfd96",
        merah_muda: "#ff6961",
        biru_laut: "#4682b4",
        hijau_lumut: "#556b2f",
        ungu_muda: "#dda0dd",
        abu_muda: "#d3d3d3",
        karamel: "#c68e17",
        hijau_toska: "#20b2aa",
        biru_langit: "#87ceeb",
        coklat_tua: "#654321",
        magenta: "#ff00ff",
        indigo: "#4b0082",
        krem: "#fffdd0",
        coklat_kopi: "#4b2e2a",
        plum: "#dda0dd",
        coral: "#ff7f50",
        emas_tua: "#b8860b",
        biru_laut_tua: "#00008b",
        merah_bata: "#8b0000",
        salmon: "#fa8072",
        tomato: "#ff6347",
        merah_anggur: "#800020",
        sienna: "#a0522d",
        biru_kehijauan: "#5f9ea0",
        hijau_zamrud: "#50c878",
        aquamarine: "#7fffd4",
        chartreuse: "#7fff00",
        lime_green: "#32cd32",
        perak: "#c0c0c0",
        teal: "#008080",
        khaki: "#f0e68c",
        emas_muda: "#ffe4b5",
        beige: "#f5f5dc",
        olive: "#808000",
        merah_cerah: "#ff4500",
        crimson: "#dc143c",
        fuchsia: "#ff00ff",
        chocolate: "#d2691e",
        biru_royal: "#4169e1",
        hijau_gelap: "#006400",
        merah_jambu: "#ff1493",
        biru_es: "#e0ffff",
        kuning_keemasan: "#ffd700",
        jade: "#00a86b",
        mustard: "#ffdb58",
        biru_neon: "#4d4dff",
        aprikot: "#fbceb1",
        biru_beludru: "#483d8b",
        ungu_gelap: "#4b0082",
        pastel: "#dbb2ff",
        hijau_army: "#4b5320",
        pink_flamingo: "#fc74fd",
        ungu_terong: "#990066",
        biru_denim: "#1560bd",
        biru_baja: "#4682b4",
        kelabu_tua: "#a9a9a9",
        teal_muda: "#afeeee",
        hijau_daun: "#228b22",
        lavender_muda: "#e6e6fa",
        oranye_kemerahan: "#ff4500",
        raspberry: "#e30b5c",
        biru_langit_terang: "#87cefa",
        biru_arktik: "#00bfff",
        hijau_pastel: "#77dd77",
        merah_muda_terang: "#ffb6c1",
        kuning_neon: "#ccff00",
        emas_metalik: "#d4af37",
        ungu_lilac: "#c8a2c8",
        biru_langit_pastel: "#a1caf1",
        coklat_susu: "#a0522d",
        biru_petir: "#1f75fe",
        hijau_pistachio: "#93c572",
        orchid: "#da70d6",
        biru_pirus: "#40e0d0",
        merah_cherry: "#de3163",
        kuning_lemon: "#fff44f",
        orange_terang: "#ffae42",
        biru_zaitun: "#9ab973"
      };
      let bgColor = "#ffffff";
      if (!text) return reply("Teksnya mana?");
      DinzBotz.sendMessage(m.chat, {
        react: {
          text: '🕒',
          key: m.key
        }
      })
      if (text.length > 10000) return reply("Maximal 10000 karakter!");
      let profilePic = await DinzBotz.profilePictureUrl(m.sender, "image").catch(() => "https://i.ibb.co/3Fh9V6p/avatar-contact.png");
      const payload = {
        type: "quote",
        format: "png",
        backgroundColor: bgColor,
        width: 512,
        height: 768,
        scale: 2,
        messages: [{
          entities: [],
          avatar: true,
          from: {
            id: 1,
            name: pushname,
            photo: {
              url: profilePic
            }
          },
          text: text,
          replyMessage: {}
        }]
      };
      const response = await axios.post("https://bot.lyo.su/quote/generate", payload, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      const imageBuffer = Buffer.from(response.data.result.image, "base64");
      DinzBotz.sendImageAsSticker(from, imageBuffer, m, {
        packname: global.botname,
        author: global.botname
      })
    }
    db.users[m.sender].exp += 300;
    break
case 'quotesanime':
case 'quotesanim': {
    let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
    if (!res.ok) return await res.text()
    let json = await res.json()
    if (!json.result[0]) return json
    let {
        indo,
        character,
        anime
    } = json.result[0]
    reply(`${indo}\n\n📮By: _${character}_ \nAnime:\n${anime}`)
}
db.users[m.sender].exp += 300;
break

case 'quotesbacot': {
    function pickRandom(list) {
        return list[Math.floor(list.length * Math.random())]
    }
    const bacot = [
        'Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.',
        'Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.',
        'Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.',
        'Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.',
        'Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.',
        'Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.',
        'Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.',
        'Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.',
        'Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.',
        'Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.',
        'Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.',
        'Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.',
        'Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.',
        'Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.',
        'Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.',
        'Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.',
        'Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.',
        'Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.',
        'Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.',
        'Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.',
        'Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!',
        'Masih berharap dan terus berharap lama-lama aku jadi juara harapan.',
        'Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.',
        'Statusnya rohani, kelakuannya rohalus.',
        'Kegagalan bukan suatu keberhasilan.',
        'Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.',
        'Aku juga pernah kaya, waktu gajian.',
        'Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.',
        'Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.',
        'Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.',
        'Jangan terlalu berharap! nanti jatuhnya sakit!',
        'Ingat! Anda itu jomblo',
        'Gak tau mau ngetik apa'
    ]
    let bacotan = pickRandom(bacot)
    reply(bacotan)
}
db.users[m.sender].exp += 300;
break

case 'quotesbucin': {
    const bucin = [
        "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
        "Seorang yang single diciptakan bersama pasangan yang belum ditemukan.",
        "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
        "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
        "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
        "Pacar orang adalah jodoh kita yang tertunda.",
        "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
        "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
        "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
        "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
        "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
        "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
        "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
        "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
        "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
        "Aku ingin menjadi satu-satunya, bukan salah satunya.",
        "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
        "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
        "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
        "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
        "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
        "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
        "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
        "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
        "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
        "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
        "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
        "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
        "Dalam dinginnya malam, tak kuingat lagi Berapa sering aku memikirkanmu juga merindukanmu.",
        "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
        "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
        "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
        "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
        "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
        "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
        "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
        "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
        "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
        "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
        "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
        "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
        "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
        "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
        "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
        "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
        "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
        "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
        "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
        "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
        "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
        "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
        "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
        "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
        "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
        "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
        "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
        "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
        "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
        "Mengejar itu capek, tapi lebih capek lagi menunggu Menunggu kamu menyadari keberadaanku...",
        "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
        "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
        "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
        "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
        "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
        "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
        "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
        "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
        "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
        "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
        "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya? Kalau aku tidak kecewa, tapi aku menunggu ucapannya.",
        "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
        "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
        "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
        "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
        "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
        "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
        "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
        "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
        "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
        "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
        "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
        "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. Sujiwo Tejo",
        "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
        "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
        "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
        "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
        "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
        "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
        "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
        "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
        "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
        "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
        "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
        "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
        "Saben dino kegowo ngimpi tapi ora biso nduweni.",
        "Ora ketemu koe 30 dino rasane koyo sewulan.",
        "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
        "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
        "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
        "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
        "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
        "Kanyaah akang moal luntur najan make Bayclean.",
        "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
        "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
        "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang.",
        "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
        "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
        "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
        "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
        "Cukup jaringan aja yang hilang, kamu jangan.",
        "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
        "Musuhku adalah mereka yang ingin memilikimu juga.",
        "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
        "Jam tidurku hancur dirusak rindu.",
        "Cukup China aja yang jauh, cinta kita jangan.",
        "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
        "Cuma satu keinginanku, dicintai olehmu..",
        "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
        "Cukup antartika aja yang jauh. Antarkita jangan."
    ]
    const DinzIDtruth = bucin[Math.floor(Math.random() * bucin.length)]
    reply(`${DinzIDtruth}`)
}
db.users[m.sender].exp += 300;
break

case 'quotesmotivasi': {
    function pickRandom(list) {
        return list[Math.floor(list.length * Math.random())]
    }
    const motivasi = [
        "ᴊᴀɴɢᴀɴ ʙɪᴄᴀʀᴀ, ʙᴇʀᴛɪɴᴅᴀᴋ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴋᴀᴛᴀᴋᴀɴ, ᴛᴜɴᴊᴜᴋᴋᴀɴ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴊᴀɴᴊɪ, ʙᴜᴋᴛɪᴋᴀɴ ꜱᴀᴊᴀ.",
        "ᴊᴀɴɢᴀɴ ᴘᴇʀɴᴀʜ ʙᴇʀʜᴇɴᴛɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ʏᴀɴɢ ᴛᴇʀʙᴀɪᴋ ʜᴀɴʏᴀ ᴋᴀʀᴇɴᴀ ꜱᴇꜱᴇᴏʀᴀɴɢ ᴛɪᴅᴀᴋ ᴍᴇᴍʙᴇʀɪ ᴀɴᴅᴀ ᴘᴇɴɢʜᴀʀɢᴀᴀɴ.",
        "ʙᴇᴋᴇʀᴊᴀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ᴛɪᴅᴜʀ. ʙᴇʟᴀᴊᴀʀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ʙᴇʀᴘᴇꜱᴛᴀ. ʜᴇᴍᴀᴛ ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴɢʜᴀʙɪꜱᴋᴀɴ. ʜɪᴅᴜᴘʟᴀʜ ꜱᴇᴘᴇʀᴛɪ ᴍɪᴍᴘɪ ᴍᴇʀᴇᴋᴀ.",
        "ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴜꜱᴀᴛᴋᴀɴ ᴘɪᴋɪʀᴀɴ ꜱᴀᴅᴀʀ ᴋɪᴛᴀ ᴘᴀᴅᴀ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ɪɴɢɪɴᴋᴀɴ, ʙᴜᴋᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ᴛᴀᴋᴜᴛɪ.",
        "ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ɢᴀɢᴀʟ. ᴋᴇᴛᴀᴋᴜᴛᴀɴ ʙᴇʀᴀᴅᴀ ᴅɪ ᴛᴇᴍᴘᴀᴛ ʏᴀɴɢ ꜱᴀᴍᴀ ᴛᴀʜᴜɴ ᴅᴇᴘᴀɴ ꜱᴇᴘᴇʀᴛɪ ᴀɴᴅᴀ ꜱᴀᴀᴛ ɪɴɪ.",
        "ᴊɪᴋᴀ ᴋɪᴛᴀ ᴛᴇʀᴜꜱ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ʟᴀᴋᴜᴋᴀɴ, ᴋɪᴛᴀ ᴀᴋᴀɴ ᴛᴇʀᴜꜱ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ᴅᴀᴘᴀᴛᴋᴀɴ.",
        "ᴊɪᴋᴀ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱᴛʀᴇꜱ, ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴍᴇɴɢᴇʟᴏʟᴀ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ.",
        "ʙᴇʀꜱɪᴋᴀᴘ ᴋᴇʀᴀꜱ ᴋᴇᴘᴀʟᴀ ᴛᴇɴᴛᴀɴɢ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴅᴀɴ ꜰʟᴇᴋꜱɪʙᴇʟ ᴛᴇɴᴛᴀɴɢ ᴍᴇᴛᴏᴅᴇ ᴀɴᴅᴀ.",
        "ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ᴍᴇɴɢᴀʟᴀʜᴋᴀɴ ʙᴀᴋᴀᴛ ᴋᴇᴛɪᴋᴀ ʙᴀᴋᴀᴛ ᴛɪᴅᴀᴋ ʙᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ.",
        "ɪɴɢᴀᴛʟᴀʜ ʙᴀʜᴡᴀ ᴘᴇʟᴀᴊᴀʀᴀɴ ᴛᴇʀʙᴇꜱᴀʀ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ʙɪᴀꜱᴀɴʏᴀ ᴅɪᴘᴇʟᴀᴊᴀʀɪ ᴅᴀʀɪ ꜱᴀᴀᴛ-ꜱᴀᴀᴛ ᴛᴇʀʙᴜʀᴜᴋ ᴅᴀɴ ᴅᴀʀɪ ᴋᴇꜱᴀʟᴀʜᴀɴ ᴛᴇʀʙᴜʀᴜᴋ.",
        "ʜɪᴅᴜᴘ ʙᴜᴋᴀɴ ᴛᴇɴᴛᴀɴɢ ᴍᴇɴᴜɴɢɢᴜ ʙᴀᴅᴀɪ ʙᴇʀʟᴀʟᴜ, ᴛᴇᴛᴀᴘɪ ʙᴇʟᴀᴊᴀʀ ᴍᴇɴᴀʀɪ ᴅɪ ᴛᴇɴɢᴀʜ ʜᴜᴊᴀɴ.",
        "ᴊɪᴋᴀ ʀᴇɴᴄᴀɴᴀɴʏᴀ ᴛɪᴅᴀᴋ ʙᴇʀʜᴀꜱɪʟ, ᴜʙᴀʜ ʀᴇɴᴄᴀɴᴀɴʏᴀ ʙᴜᴋᴀɴ ᴛᴜᴊᴜᴀɴɴʏᴀ.",
        "ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴀᴋᴀɴ ʙᴇʀᴀᴋʜɪʀ; ᴛᴀᴋᴜᴛʟᴀʜ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴛᴀᴋ ᴘᴇʀɴᴀʜ ᴅɪᴍᴜʟᴀɪ.",
        "ᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇɴᴀʀ-ʙᴇɴᴀʀ ʜᴇʙᴀᴛ ᴀᴅᴀʟᴀʜ ᴏʀᴀɴɢ ʏᴀɴɢ ᴍᴇᴍʙᴜᴀᴛ ꜱᴇᴛɪᴀᴘ ᴏʀᴀɴɢ ᴍᴇʀᴀꜱᴀ ʜᴇʙᴀᴛ.",
        "ᴘᴇɴɢᴀʟᴀᴍᴀɴ ᴀᴅᴀʟᴀʜ ɢᴜʀᴜ ʏᴀɴɢ ʙᴇʀᴀᴛ ᴋᴀʀᴇɴᴀ ᴅɪᴀ ᴍᴇᴍʙᴇʀɪᴋᴀɴ ᴛᴇꜱ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ, ᴋᴇᴍᴜᴅɪᴀɴ ᴘᴇʟᴀᴊᴀʀᴀɴɴʏᴀ.",
        "ᴍᴇɴɢᴇᴛᴀʜᴜɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴀɴʏᴀᴋ ʏᴀɴɢ ᴘᴇʀʟᴜ ᴅɪᴋᴇᴛᴀʜᴜɪ ᴀᴅᴀʟᴀʜ ᴀᴡᴀʟ ᴅᴀʀɪ ʙᴇʟᴀᴊᴀʀ ᴜɴᴛᴜᴋ ʜɪᴅᴜᴘ.",
        "ꜱᴜᴋꜱᴇꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴋʜɪʀ, ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ꜰᴀᴛᴀʟ. ʏᴀɴɢ ᴛᴇʀᴘᴇɴᴛɪɴɢ ᴀᴅᴀʟᴀʜ ᴋᴇʙᴇʀᴀɴɪᴀɴ ᴜɴᴛᴜᴋ ᴍᴇʟᴀɴᴊᴜᴛᴋᴀɴ.",
        "ʟᴇʙɪʜ ʙᴀɪᴋ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ᴏʀɪꜱɪɴᴀʟɪᴛᴀꜱ ᴅᴀʀɪᴘᴀᴅᴀ ʙᴇʀʜᴀꜱɪʟ ᴍᴇɴɪʀᴜ.",
        "ʙᴇʀᴀɴɪ ʙᴇʀᴍɪᴍᴘɪ, ᴛᴀᴘɪ ʏᴀɴɢ ʟᴇʙɪʜ ᴘᴇɴᴛɪɴɢ, ʙᴇʀᴀɴɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴛɪɴᴅᴀᴋᴀɴ ᴅɪ ʙᴀʟɪᴋ ɪᴍᴘɪᴀɴᴍᴜ.",
        "ᴛᴇᴛᴀᴘᴋᴀɴ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴛɪɴɢɢɪ-ᴛɪɴɢɢɪ, ᴅᴀɴ ᴊᴀɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ᴍᴇɴᴄᴀᴘᴀɪɴʏᴀ.",
        "ᴋᴇᴍʙᴀɴɢᴋᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀʀɪ ᴋᴇɢᴀɢᴀʟᴀɴ. ᴋᴇᴘᴜᴛᴜꜱᴀꜱᴀᴀɴ ᴅᴀɴ ᴋᴇɢᴀɢᴀʟᴀɴ ᴀᴅᴀʟᴀʜ ᴅᴜᴀ ʙᴀᴛᴜ ʟᴏɴᴄᴀᴛᴀɴ ᴘᴀʟɪɴɢ ᴘᴀꜱᴛɪ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ.",
        "ᴊᴇɴɪᴜꜱ ᴀᴅᴀʟᴀʜ ꜱᴀᴛᴜ ᴘᴇʀꜱᴇɴ ɪɴꜱᴘɪʀᴀꜱɪ ᴅᴀɴ ꜱᴇᴍʙɪʟᴀɴ ᴘᴜʟᴜʜ ꜱᴇᴍʙɪʟᴀɴ ᴘᴇʀꜱᴇɴ ᴋᴇʀɪɴɢᴀᴛ.",
        "ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴛᴇᴍᴘᴀᴛ ᴘᴇʀꜱɪᴀᴘᴀɴ ᴅᴀɴ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ʙᴇʀᴛᴇᴍᴜ.",
        "ᴋᴇᴛᴇᴋᴜɴᴀɴ ɢᴀɢᴀʟ 19 ᴋᴀʟɪ ᴅᴀɴ ʙᴇʀʜᴀꜱɪʟ ᴘᴀᴅᴀ ᴋᴇꜱᴇᴍᴘᴀᴛᴀᴍ ʏᴀɴɢ ᴋᴇ-20.",
        "ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ ᴅᴀɴ ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ᴋᴇɢᴀɢᴀʟᴀɴ ʜᴀᴍᴘɪʀ ᴘᴇʀꜱɪꜱ ꜱᴀᴍᴀ.",
        "ꜱᴜᴋꜱᴇꜱ ʙɪᴀꜱᴀɴʏᴀ ᴅᴀᴛᴀɴɢ ᴋᴇᴘᴀᴅᴀ ᴍᴇʀᴇᴋᴀ ʏᴀɴɢ ᴛᴇʀʟᴀʟᴜ ꜱɪʙᴜᴋ ᴍᴇɴᴄᴀʀɪɴʏᴀ.",
        "ᴊᴀɴɢᴀɴ ᴛᴜɴᴅᴀ ᴘᴇᴋᴇʀᴊᴀᴀɴᴍᴜ ꜱᴀᴍᴘᴀɪ ʙᴇꜱᴏᴋ, ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇɴɢᴇʀᴊᴀᴋᴀɴɴʏᴀ ʜᴀʀɪ ɪɴɪ.",
        "20 ᴛᴀʜᴜɴ ᴅᴀʀɪ ꜱᴇᴋᴀʀᴀɴɢ, ᴋᴀᴜ ᴍᴜɴɢᴋɪɴ ʟᴇʙɪʜ ᴋᴇᴄᴇᴡᴀ ᴅᴇɴɢᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴛɪᴅᴀᴋ ꜱᴇᴍᴘᴀᴛ ᴋᴀᴜ ʟᴀᴋᴜᴋᴀɴ ᴀʟɪʜ-ᴀʟɪʜ ʏᴀɴɢ ꜱᴜᴅᴀʜ.",
        "ᴊᴀɴɢᴀɴ ʜᴀʙɪꜱᴋᴀɴ ᴡᴀᴋᴛᴜᴍᴜ ᴍᴇᴍᴜᴋᴜʟɪ ᴛᴇᴍʙᴏᴋ ᴅᴀɴ ʙᴇʀʜᴀʀᴀᴘ ʙɪꜱᴀ ᴍᴇɴɢᴜʙᴀʜɴʏᴀ ᴍᴇɴᴊᴀᴅɪ ᴘɪɴᴛᴜ.",
        "ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ɪᴛᴜ ᴍɪʀɪᴘ ꜱᴇᴘᴇʀᴛɪ ᴍᴀᴛᴀʜᴀʀɪ ᴛᴇʀʙɪᴛ. ᴋᴀʟᴀᴜ ᴋᴀᴜ ᴍᴇɴᴜɴɢɢᴜ ᴛᴇʀʟᴀʟᴜ ʟᴀᴍᴀ, ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇʟᴇᴡᴀᴛᴋᴀɴɴʏᴀ.",
        "ʜɪᴅᴜᴘ ɪɴɪ ᴛᴇʀᴅɪʀɪ ᴅᴀʀɪ 10 ᴘᴇʀꜱᴇɴ ᴀᴘᴀ ʏᴀɴɢ ᴛᴇʀᴊᴀᴅɪ ᴘᴀᴅᴀᴍᴜ ᴅᴀɴ 90 ᴘᴇʀꜱᴇɴ ʙᴀɢᴀɪᴍᴀɴᴀ ᴄᴀʀᴀᴍᴜ ᴍᴇɴʏɪᴋᴀᴘɪɴʏᴀ.",
        "ᴀᴅᴀ ᴛɪɢᴀ ᴄᴀʀᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴄᴀᴘᴀɪ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴛᴇʀᴛɪɴɢɢɪ: ᴄᴀʀᴀ ᴘᴇʀᴛᴀᴍᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴅᴜᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴛɪɢᴀ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴊᴀᴅɪ ʙᴀɪᴋ.",
        "ᴀʟᴀꜱᴀɴ ɴᴏᴍᴏʀ ꜱᴀᴛᴜ ᴏʀᴀɴɢ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ᴀᴅᴀʟᴀʜ ᴋᴀʀᴇɴᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴᴅᴇɴɢᴀʀᴋᴀɴ ᴛᴇᴍᴀɴ, ᴋᴇʟᴜᴀʀɢᴀ, ᴅᴀɴ ᴛᴇᴛᴀɴɢɢᴀ ᴍᴇʀᴇᴋᴀ.",
        "ᴡᴀᴋᴛᴜ ʟᴇʙɪʜ ʙᴇʀʜᴀʀɢᴀ ᴅᴀʀɪᴘᴀᴅᴀ ᴜᴀɴɢ. ᴋᴀᴍᴜ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴜᴀɴɢ, ᴛᴇᴛᴀᴘɪ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴡᴀᴋᴛᴜ.",
        "ᴘᴇɴᴇᴛᴀᴘᴀɴ ᴛᴜᴊᴜᴀɴ ᴀᴅᴀʟᴀʜ ʀᴀʜᴀꜱɪᴀ ᴍᴀꜱᴀ ᴅᴇᴘᴀɴ ʏᴀɴɢ ᴍᴇɴᴀʀɪᴋ.",
        "ꜱᴀᴀᴛ ᴋɪᴛᴀ ʙᴇʀᴜꜱᴀʜᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ ᴅᴀʀɪ ᴋɪᴛᴀ, ꜱᴇɢᴀʟᴀ ꜱᴇꜱᴜᴀᴛᴜ ᴅɪ ꜱᴇᴋɪᴛᴀʀ ᴋɪᴛᴀ ᴊᴜɢᴀ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ.",
        "ᴘᴇʀᴛᴜᴍʙᴜʜᴀɴ ᴅɪᴍᴜʟᴀɪ ᴋᴇᴛɪᴋᴀ ᴋɪᴛᴀ ᴍᴜʟᴀɪ ᴍᴇɴᴇʀɪᴍᴀ ᴋᴇʟᴇᴍᴀʜᴀɴ ᴋɪᴛᴀ ꜱᴇɴᴅɪʀɪ.",
        "ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
        "ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
        "ʜᴀʟ ᴘᴇʀᴛᴀᴍᴀ ʏᴀɴɢ ᴅɪʟᴀᴋᴜᴋᴀɴ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴀɴᴅᴀɴɢ ᴋᴇɢᴀɢᴀʟᴀɴ ꜱᴇʙᴀɢᴀɪ ꜱɪɴʏᴀʟ ᴘᴏꜱɪᴛɪꜰ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ.",
        "ᴄɪʀɪ ᴋʜᴀꜱ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇʀᴇᴋᴀ ꜱᴇʟᴀʟᴜ ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴜɴᴛᴜᴋ ᴍᴇᴍᴘᴇʟᴀᴊᴀʀɪ ʜᴀʟ-ʜᴀʟ ʙᴀʀᴜ.",
        "ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ɪɴɢɪɴᴋᴀɴ, ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴍᴇɴɢɪɴɢɪɴᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛᴋᴀɴ.",
        "ᴏʀᴀɴɢ ᴘᴇꜱɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴋᴇꜱᴜʟɪᴛᴀɴ ᴅɪ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ. ᴏʀᴀɴɢ ʏᴀɴɢ ᴏᴘᴛɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴘᴇʟᴜᴀɴɢ ᴅᴀʟᴀᴍ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴜʟɪᴛᴀɴ.",
        "ᴋᴇʀᴀɢᴜᴀɴ ᴍᴇᴍʙᴜɴᴜʜ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴍɪᴍᴘɪ ᴅᴀʀɪᴘᴀᴅᴀ ᴋᴇɢᴀɢᴀʟᴀɴ.",
        "ʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ʜᴀʀᴜꜱ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ ꜱᴀᴍᴘᴀɪ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ɪɴɢɪɴ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ.",
        "ᴏᴘᴛɪᴍɪꜱᴛɪꜱ ᴀᴅᴀʟᴀʜ ꜱᴀʟᴀʜ ꜱᴀᴛᴜ ᴋᴜᴀʟɪᴛᴀꜱ ʏᴀɴɢ ʟᴇʙɪʜ ᴛᴇʀᴋᴀɪᴛ ᴅᴇɴɢᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀɴ ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴅᴀʀɪᴘᴀᴅᴀ ʏᴀɴɢ ʟᴀɪɴ.",
        "ᴘᴇ狀ʜᴀʀɢᴀᴀɴ ᴘᴀʟɪɴɢ ᴛɪɴɢɢɪ ʙᴀɢɪ ꜱᴇᴏʀᴀɴɢ ᴘᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴘᴀ ʏᴀɴɢ ᴅɪᴀ ᴘᴇʀᴏʟᴇʜ ᴅᴀʀɪ ᴘᴇᴋᴇʀᴊᴀᴀɴ ɪᴛᴜ, ᴛᴀᴘɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴇʀᴋᴇᴍʙᴀɴɢ ɪᴀ ᴅᴇɴɢᴀɴ ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱɴʏᴀ ɪᴛᴜ.",
        "ᴄᴀʀᴀ ᴛᴇʀʙᴀɪᴋ ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ ᴀᴅᴀʟᴀʜ ᴅᴇɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ʙᴇʀʙɪᴄᴀʀᴀ ᴅᴀɴ ᴍᴜʟᴀɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ.",
        "ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴜꜱᴜʟ ᴊɪᴋᴀ ᴛᴇᴋᴀᴅ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ ᴄᴜᴋᴜᴘ ᴋᴜᴀᴛ."
    ]
    let motivasii = pickRandom(motivasi)
    reply(`"${motivasii}"`)
}
db.users[m.sender].exp += 300;
break

case 'quotesgalau': {
    function pickRandom(list) {
        return list[Math.floor(list.length * Math.random())]
    }
    const galau = [
        "Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji",
        "Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu",
        "Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu",
        "Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu",
        "Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu",
        "Tak semudah itu melupakanmu",
        "Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya",
        "Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya",
        "Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya",
        "Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama",
        "Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya",
        "Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku",
        "Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati",
        "Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya",
        "Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu",
        "Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat",
        "Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya",
        "Tolong jangan pergi saat aku sudah sangat sayang padamu",
        "Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget",
        "Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu",
        "Sakit itu ketika cinta yang aku beri tidak kamu hargai",
        "Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu",
        "Karenamu aku jadi tau cinta yang sesungguhnya",
        "Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih",
        "Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai",
        "Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa",
        "Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis",
        "Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa",
        "Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama",
        "Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan",
        "Aku tak menyangka kamu pergi dan melupakan ku begitu cepat",
        "Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa",
        "Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku",
        "Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia",
        "Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali",
        "Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu",
        "Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu",
        "Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri",
        "Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku",
        "Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka",
        "Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu",
        "Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan",
        "Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina",
        "Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri",
        "Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja",
        "Aku berdiri disini sendiri menunggu kehadiran dirimu",
        "Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran",
        "Maaf aku lupa ternyata aku bukan siapa-siapa",
        "Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu",
        "Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku",
        "Jangan buat aku terlalu berharap jika kamu tidak menginginkanku",
        "Lebih baik sendiri daripada berdua tapi tanpa kepastian",
        "Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri",
        "Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar",
        "Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi",
        "Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki",
        "Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu",
        "Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau",
        "Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa",
        "Aku bukan mencari yang sempurna tapi yang terbaik untukku",
        "Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan",
        "Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka",
        "Terima kasih karena kamu aku menjadi lupa tentang masa laluku",
        "Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja",
        "Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati",
        "Mikirin orang yang gak pernah mikirin kita itu emang bikin gila",
        "Dari sekian lama menunggu apa yang sudah didapat",
        "Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali",
        "Yang sendiri adalah yang bersabar menunggu pasangan sejatinya",
        "Aku terlahir sederhana dan ditinggal sudah biasa",
        "Aku sayang kamu tapi aku masih takut untuk mencintaimu",
        "Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia",
        "Aku tidak pernah berpikir kamu akan menjadi yang sementara",
        "Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah",
        "Jangan paksa aku menjadi cewek seperti seleramu",
        "Hanya yang sabar yang mampu melewati semua kekecewaan",
        "Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri",
        "Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu",
        "Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu"
    ]
    let bacotan = pickRandom(galau)
    reply(bacotan)
}
db.users[m.sender].exp += 300;
break

case 'quotesgombal': {
    function pickRandom(list) {
        return list[Math.floor(list.length * Math.random())]
    }
    const gombal = [
        "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
        "Seandainya sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
        "Aku gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
        "Kamu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
        "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
        "Kalausaja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
        "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
        "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
        "denganambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta.",
        "Kalo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
        "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
        "Aku harap kamu tidak menanyakan hal terindah yang pernah singgah di kehidupanku, karena jawaban nya adalah kamu.",
        "Aku tak pernah berjanji untuk sebuah perasaan, namun aku berusaha berjanji untuk sebuah kesetiaan.",
        "Aku sangat berharap kamu tau, kalau aku tidak pernah menyesali cintaku untuk mu, karena bagiku memiliki kamu sudah cukup bagi ku.",
        "Jangankan memilikimu, mendengar kamu kentut aja aku sudah bahagia.",
        "Aku mohon jangan jalan-jalan terus di pikiranku, duduk yang manis di hatiku saja.",
        "Berulang tahun memang indah, namun bagiku yang lebih indah jika berulang kali bersamamu.",
        "Napas aku kok sesek banget ya?, karena separuh nafasku ada di kamu.",
        "Jika ada seseorang lebih memilih pergi meninggalkan kamu, jangan pernah memohon padanya untuk tetap bertahan. Karena jika dia cinta, dia tak akan mau pergi.",
        "jangann diam aja dong, memang diam itu emas, tapi ketahuilah suara kamu itu seperti berlian.",
        "Ada 3 hal yang paling aku sukai di dunia ini, yaitu Matahari, Bulan dan Kamu. Matahari untuk siang hari, Bulan untuk malam hari dan Kamu untuk selamanya dihatiku.",
        "Sayang, kamu itu seperti garam di lautan, tidak terlihat namun akan selalu ada untuk selamanya.",
        "Aku tidak minta bintang atau bulan kepadamu. Cukup temani aku selamanya di bawah cahayanya.",
        "Akuana kalau kita berdua jadi komplotan penjahat: Aku mencuri hatimu, dan kamu mencuri hatiku?",
        "Aku pengen bersamamu cuma pada dua waktu: SEKARANG dan SELAMANYA.",
        "Jika aku bisa jadi bagian dari dirimu,aku mau jadi air matamu,yang tersimpan di hatimu, lahir dari matamu, hidup di pipimu, dan mati di bibirmu.",
        "Papa kamu pasti kerja di apotik ya? karena cuma kamu obat sakit hatiku.",
        "Andai sebuah bintang akan jatuh setiap kali aku mengingatmu, bulan pasti protes. Soalnya dia bakal sendirian di angkasa.",
        "Keindahan Borobudur keajaiban dunia, keindahan kamu keajaiban cinta.",
        "Setiap malam aku berjalan-jalan di suatu tempat. Kamu tau di mana itu? Di hatimu.",
        "cintaa aku ke kamu tuh bagaikan hutang, awalnya kecil, lama-lama didiemin malah tambah gede."
    ]
    let bacotan = pickRandom(gombal)
    reply(bacotan)
}
db.users[m.sender].exp += 300;
break

case 'quoteshacker': {
    function pickRandom(list) {
        return list[Math.floor(list.length * Math.random())]
    }
    const heker = [
        "Dear kamu yang tertulis di halaman defacementku, Kapan jadi pacarku?",
        "Aku rela ko jadi Processor yg kepanasan, asalkan kmu yg jadi heatsink'y yg setiap saat bisa mendinginkan ku.",
        "Gak usah nyari celah xss deh, karena ketika kamu ngeklik hatiku udah muncul pop up namamu.",
        "berharap setelah aku berhasil login di hati kamu ga akan ada tombol logout, dan sessionku ga bakal pernah expired.",
        "Masa aku harus pake teknik symlink bypass buat buka-buka folder hatimu yg open_basedir enabled.",
        "Diriku dan Dirimu itu ibarat PHP dan MySQL yang belum terkoneksi.",
        "Jangan cuma bisa inject hatinya,tapi harus bisa patchnya juga. Biar tidak selingkuh sama hacker lain.",
        "Aku memang programmer PHP,tapi aku nggak akan php-in kamu kok.",
        "Jika cinta itu Array, maka,cintaku padamu tak pernah empty jika di unset().",
        "aku ingin kamu rm -rf kan semua mantan di otak mu,akulah root hati kamu.",
        "Senyumu bagaikan cooler yang menyejukan hatiku ketika sedang overclock.",
        "kamu adalah terminalku, dimana aku menghabiskan waktuku untuk mengetikan beribu baris kode cinta untukmu.",
        "hatiku ibarat vps hanya untukmu saja bukan shared hosting yg bisa tumpuk berbagai domain cinta.",
        "Jangan men-dualboot-kan hatiku kepadamu.",
        "Cintamu bagaikan TeamViewer yang selalu mengendalikan hatiku.",
        "cinta kita tak akan bisa dipisahkan walau setebal apapun itu firewall...!!"
    ]
    let bacotan = pickRandom(heker)
    reply(bacotan)
}
db.users[m.sender].exp += 300;
break

case 'quotesbijak': {
    function pickRandom(list) {
        return list[Math.floor(list.length * Math.random())]
    }
    const quotes = [
        "Keyakinan merupakan suatu pengetahuan di dalam hati, jauh tak terjangkau oleh bukti.",
        "Rasa bahagia dan tak bahagia bukan berasal dari apa yang kamu miliki, bukan pula berasal dari siapa diri kamu, atau apa yang kamu kerjakan. Bahagia dan tak bahagia berasal dari pikiran kamu.",
        "Sakit dalam perjuangan itu hanya sementara. Bisa jadi kamu rasakan dalam semenit, sejam, sehari, atau setahun. Namun jika menyerah, rasa sakit itu akan terasa selamanya.",
        "Hanya seseorang yang takut yang bisa bertindak berani. Tanpa rasa takut itu tidak ada apapun yang bisa disebut berani.",
        "Jadilah diri kamu sendiri. Siapa lagi yang bisa melakukannya lebih baik ketimbang diri kamu sendiri?",
        "Kesempatan kamu untuk sukses di setiap kondisi selalu dapat diukur oleh seberapa besar kepercayaan kamu pada diri sendiri.",
        "Kebanggaan kita yang terbesar adalah bukan tidak pernah gagal, tetapi bangkit kembali setiap kali kita jatuh.",
        "Suatu pekerjaan yang paling tak kunjung bisa diselesaikan adalah pekerjaan yang tak kunjung pernah dimulai.",
        "Pikiran kamu bagaikan api yang perlu dinyalakan, bukan bejana yang menanti untuk diisi.",
        "Kejujuran adalah batu penjuru dari segala kesuksesan. Pengakuan adalah motivasi terkuat. Bahkan kritik dapat membangun rasa percaya diri saat disisipkan di antara pujian.",
        "Segala sesuatu memiliki kesudahan, yang sudah berakhir biarlah berlalu dan yakinlah semua akan baik-baik saja.",
        "Setiap detik sangatlah berharga karena waktu mengetahui banyak hal, termasuk rahasia hati.",
        "Jika kamu tak menemukan buku yang kamu cari di rak, maka tulislah sendiri.",
        "Jika hatimu banyak merasakan sakit, maka belajarlah dari rasa sakit itu untuk tidak memberikan rasa sakit pada orang lain.",
        "Hidup tak selamanya tentang pacar.",
        "Rumah bukan hanya sebuah tempat, tetapi itu adalah perasaan.",
        "Pilih mana: Orang yang memimpikan kesuksesan atau orang yang membuatnya menjadi kenyataan?",
        "Kamu mungkin tidak bisa menyiram bunga yang sudah layu dan berharap ia akan mekar kembali, tapi kamu bisa menanam bunga yang baru dengan harapan yang lebih baik dari sebelumnya.",
        "Bukan bahagia yang menjadikan kita bersyukur, tetapi dengan bersyukurlah yang akan menjadikan hidup kita bahagia.",
        "Aku memang diam. Tapi aku tidak buta."
    ]
    let bacotan = pickRandom(quotes)
    reply(bacotan)
}
db.users[m.sender].exp += 300;
break
case 'checkme':
      neme = args.join(" ")
      bet = `${sender}`
      var sifat = ["Baik", "Tidak ramah", "Chapri", "Nibba/nibbi", "Mengganggu", "Rusak", "Orang marah", "Sopan", "Beban", "Hebat", "Cringe", "Pembohong"]
      var hoby = ['Memasak', 'Menari', 'Bermain', 'Bermain game', 'Melukis', 'Membantu Orang Lain', 'Menonton anime', 'Membaca', 'Bersepeda', 'Bernyanyi', 'Berbincang-bincang', 'Berbagi Meme', 'Menggambar', 'Menghabiskan Uang Orang Tua', 'Bermain Truth or Dare', 'Menghabiskan Waktu Sendirian']
      var bukcin = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
      var arp = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
      var cakep = ['Ya', 'Tidak', 'Sangat jelek', 'Mirip opet', 'Jelek kayak monyet', 'mirip pepek', 'Sangat tampan']
      var wetak = ['Peduli', 'Murah hati', 'Orang marah', 'Maaf', 'Tunduk', 'Baik', 'Maafkan aku', 'Berhati baik', 'Sabar', 'UwU', 'Terbaik', 'Membantu']
      var baikk = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
      var bhuruk = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
      var cerdhas = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
      var berhani = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
      var mengheikan = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
      var sipat = sifat[Math.floor(Math.random() * sifat.length)]
      var biho = hoby[Math.floor(Math.random() * hoby.length)]
      var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
      var senga = arp[Math.floor(Math.random() * arp.length)]
      var chakep = cakep[Math.floor(Math.random() * cakep.length)]
      var watak = wetak[Math.floor(Math.random() * wetak.length)]
      var baik = baikk[Math.floor(Math.random() * baikk.length)]
      var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
      var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
      var berani = berhani[Math.floor(Math.random() * berhani.length)]
      var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
      profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${pushname}
*karakteristik :* ${sipat}
*Hobby :* ${biho}
*bucin :* ${bhucin}%
*Great :* ${senga}%
*Ganteng/Cantik:* ${chakep}
*Character :* ${watak}
*Moral Baik :* ${baik}%
*Morals Buruk :* ${burug}%
*Kecerdasan :* ${cerdas}%
*Keberanian :* ${berani}%
*Penakut :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
      buff = await getBuffer(ppuser)
      DinzBotz.sendMessage(from, {
        image: buff,
        caption: profile,
        mentions: [bet]
      }, {
        quoted: m
      })
      break
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
      DinzBotz.sendMessage(m.chat, {
        image: {
          url: yeha
        },
        caption: "",
        viewOnce: false,
        contextInfo: {
        isForwarded: false, 
        forwardingScore: 9999, 
  },
      }, {
        quoted: m
      })
    }
    break
    case 'hentaivid2': {

      if (!isPrem) return replyprem(mess.premium)
      reply(mess.wait)
      DinzBotz.sendMessage(m.chat, {
        video: {
          url: `https://api.fgmods.xyz/api/nsfw-nime/hentai-mp4?apikey=qzu9Ja5Q`
        },
        caption: `success`
      }, {
        quoted: m
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'hentaivid':
    case 'hentaivideo': {

      if (!isPrem) return replyprem(mess.premium)
      reply(mess.wait)
      DinzBotz.sendMessage(m.chat, {
        video: {
          url: `https://api.fgmods.xyz/api/nsfw-nime/hentai-mp4?apikey=qzu9Ja5Q`
        },
        caption: `success`
      }, {
        quoted: m
      })
    }
    break
    case 'trap':
      if (!isPrem) return replyprem(mess.premium)
      reply(mess.wait)
      waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)
      DinzBotz.sendMessage(m.chat, {
        caption: mess.success,
        image: {
          url: waifudd.data.url
        }
      }, {
        quoted: m
      })
      break
    case 'hentai-neko':
    case 'hneko':
      if (!isPrem) return replyprem(mess.premium)
      waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
      DinzBotz.sendMessage(m.chat, {
        caption: mess.success,
        image: {
          url: waifudd.data.url
        }
      }, {
        quoted: m
      })
      break
    case 'hentai-waifu':
    case 'nwaifu':
      if (!isPrem) return replyprem(mess.premium)
      reply(mess.wait)
      waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)
      DinzBotz.sendMessage(m.chat, {
        caption: mess.success,
        image: {
          url: waifudd.data.url
        }
      }, {
        quoted: m
      })
      break
    case 'gasm':
      if (!isPrem) return replyprem(mess.premium)
      reply(mess.wait)
      waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
      DinzBotz.sendMessage(m.chat, {
        caption: mess.success,
        image: {
          url: waifudd.data.url
        }
      }, {
        quoted: m
      })
      break
    case 'milf':
      if (!isPrem) return replyprem(mess.premium)
      reply(mess.wait)
      var ahegaonsfw = JSON.parse(fs.readFileSync('./data/DinzIDMedia/nsfw/milf.json'))
      var xeonyresult = pickRandom(ahegaonsfw)
      DinzBotz.sendMessage(m.chat, {
        caption: mess.success,
        image: {
          url: xeonyresult.url
        }
      }, {
        quoted: m
      })
      break
    case 'ass':
    case 'ahegao':
    case 'bdsm':
    case 'blowjob':
    case 'cuckold':
    case 'cum':
    case 'eba':
    case 'ero':
    case 'femdom':
    case 'food':
    case 'gangbang':
    case 'glasses':
    case 'jahy':
    case 'masturbation':
    case 'neko-hentai':
    case 'neko-hentai2':
    case 'nsfwloli':
    case 'orgy':
    case 'panties':
    case 'pussy':
    case 'tentacles':
    case 'thighs':
    case 'hentai': {

      DinzBotz.sendMessage(m.chat, {
        react: {
          text: '🕒',
          key: m.key
        }
      })
      if (!isPrem) return replyprem(mess.premium)
      try {
        async function scrapeData() {
          try {
            const page = Math.floor(Math.random() * 50);
            const {
              data
            } = await axios.get('https://e-hentai.org/tag/random?prev=' + page);
            const $ = cheerio.load(data);
            const results = [];
            $('.glthumb').each((index, element) => {
              const img = $(element).find('img');
              const imgSrc = img.attr('data-src');

              if (imgSrc) {
                results.push(imgSrc);
              }
            });
            return results
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }

        function getRandomElement(array) {
          const randomIndex = Math.floor(Math.random() * array.length);
          return array[randomIndex];
        }
        const jmebut = await scrapeData()
        const randomUrl = getRandomElement(jmebut);
        DinzBotz.sendMessage(m.chat, {
          caption: mess.success,
          image: {
            url: randomUrl
          }
        }, {
          quoted: m
        })
      } catch (error) {
        return reply(`💥 Terjadi kesalahan saat mengambil data: ${error.message}`);
      }
    }
    db.users[m.sender].exp += 300;
    break
    case 'yuri':
      if (!isPrem) return replyprem(mess.premium)
      reply(mess.wait)
      var ahegaonsfw = JSON.parse(fs.readFileSync('./data/DinzIDMedia/nsfw/yuri.json'))
      var xeonyresult = pickRandom(ahegaonsfw)
      DinzBotz.sendMessage(m.chat, {
        caption: mess.success,
        image: {
          url: xeonyresult.url
        }
      }, {
        quoted: m
      })
      break
    case 'zettai':
      if (!isPrem) return replyprem(mess.premium)
      DinzBotz.sendMessage(m.chat, {
        react: {
          text: `⏱️`,
          key: m.key
        }
      })
      var ahegaonsfw = JSON.parse(fs.readFileSync('./data/DinzIDMedia/nsfw/zettai.json'))
      var xeonyresult = pickRandom(ahegaonsfw)
      DinzBotz.sendMessage(m.chat, {
        caption: mess.success,
        image: {
          url: xeonyresult.url
        }
      }, {
        quoted: m
      })
      break
    case 'gifblowjob':
      if (!isPrem) return replyprem(mess.premium)
      if (!m.isGroup) return reply(mess.only.group)
      if (!AntiNsfw) return reply(mess.nsfw)
      reply(mess.wait)
      let assss = await axios.get("https://api.waifu.pics/nsfw/blowjob")
      var bobuff = await fetchBuffer(assss.data.url)
      var bogif = await buffergif(bobuff)
      await DinzBotz.sendMessage(m.chat, {
        video: bogif,
        gifPlayback: true
      }, {
        quoted: m
      }).catch(err => {})
      break
    case 'gifhentai':
      if (!isPrem) return replyprem(mess.premium)
      if (!m.isGroup) return reply(mess.only.group)
      if (!AntiNsfw) return reply(mess.nsfw)
      reply(mess.wait)
      var ahegaonsfw = JSON.parse(fs.readFileSync('./data/DinzIDMedia/nsfw/gifs.json'))
      var xeonyresultx = pickRandom(ahegaonsfw)
      await DinzBotz.sendMessage(m.chat, {
        video: xeonyresultx,
        gifPlayback: true
      }, {
        quoted: m
      }).catch(err => {})
      break
    case 'gifs':
    case 'foot': {
      if (!isPrem) return replyprem(mess.premium)
      if (!m.isGroup) return reply(mess.only.group)
      if (!AntiNsfw) return reply(mess.nsfw)
      reply(mess.wait)
      let heyy
      let yeha = heyy[Math.floor(Math.random() * heyy.length)]
      if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gifs.json')
      if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/foot.json')
      DinzBotz.sendMessage(m.chat, {
        image: {
          url: yeha
        },
        caption: mess.success
      }, {
        quoted: m
      })
    }
    db.users[m.sender].exp += 300;
    break

    case 'animeawoo': {

      if (!isPrem) return replyprem(mess.premium)
      reply(mess.wait)
      waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animemegumin': {

      if (!isPrem) return replyprem(mess.premium)
      reply(mess.wait)
      waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animeshinobu': {

      reply(mess.wait)
      waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animehandhold': {

      reply(mess.wait)
      waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animehighfive': {

      reply(mess.wait)
      waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animecringe': {

      reply(mess.wait)
      waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animedance': {

      reply(mess.wait)
      waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animehappy': {

      reply(mess.wait)
      waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animeglomp': {

      reply(mess.wait)
      waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animesmug': {

      reply(mess.wait)
      waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animeblush': {

      reply(mess.wait)
      waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animewave': {

      reply(mess.wait)
      waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animesmile': {

      reply(mess.wait)
      waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animepoke': {

      reply(mess.wait)
      waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animewink': {

      reply(mess.wait)
      waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break

    case 'animebonk': {

      reply(mess.wait)
      waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animebully': {

      reply(mess.wait)
      waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animeyeet': {

      reply(mess.wait)
      waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animebite': {

      reply(mess.wait)
      waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animelick': {

      reply(mess.wait)
      waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animekill': {

      reply(mess.wait)
      waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animecry': {

      reply(mess.wait)
      waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animewlp': {

      reply(mess.wait)
      waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animekiss': {

      reply(mess.wait)
      waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animehug': {

      reply(mess.wait)
      waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animeneko': {

      reply(mess.wait)
      waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animepat': {

      reply(mess.wait)
      waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animeslap': {

      reply(mess.wait)
      waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animecuddle': {

      reply(mess.wait)
      waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animewaifu': {

      reply(mess.wait)
      waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animenom': {

      reply(mess.wait)
      waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animefoxgirl': {

      reply(mess.wait)
      waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animetickle': {

      reply(mess.wait)
      waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animegecg': {

      reply(mess.wait)
      waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animefeed': {

      reply(mess.wait)
      waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'animeavatar': {

      reply(mess.wait)
      waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)
      await DinzBotz.sendMessage(m.chat, {
        image: {
          url: waifudd.data.url
        },
        caption: mess.success
      }, {
        quoted: m
      }).catch(err => {
        return ('Error!')
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'glitchtext':
    case 'writetext':
    case 'advancedglow':
    case 'typographytext':
    case 'pixelglitch':
    case 'neonglitch':
    case 'flagtext':
    case 'flag3dtext':
    case 'deletingtext':
    case 'blackpinkstyle':
    case 'glowingtext':
    case 'underwatertext':
    case 'logomaker':
    case 'cartoonstyle':
    case 'papercutstyle':
    case 'watercolortext':
    case 'effectclouds':
    case 'blackpinklogo':
    case 'gradienttext':
    case 'summerbeach':
    case 'luxurygold':
    case 'multicoloredneon':
    case 'sandsummer':
    case 'galaxywallpaper':
    case '1917style':
    case 'makingneon':
    case 'royaltext':
    case 'freecreate':
    case 'galaxystyle':
    case 'lighteffects': {

      if (!q) return reply(`Contoh : ${prefix+command} DinzBotz`)
      DinzBotz.sendMessage(m.chat, {
        react: {
          text: `⏱️`,
          key: m.key
        }
      })
      let link
      if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
      if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
      if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
      if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
      if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
      if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
      if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
      if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
      if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
      if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
      if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
      if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
      if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
      if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
      if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
      if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
      if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
      if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
      if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
      if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
      if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
      if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
      if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
      if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
      if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
      if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
      if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
      if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
      if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
      if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
      let haldwhd = await ephoto(link, q)
      DinzBotz.sendMessage(m.chat, {
        image: {
          url: haldwhd
        },
        caption: `${mess.success}`
      }, {
        quoted: m
      })
    }
    db.users[m.sender].exp += 300;
    break
    case 'tebakbom':
case 'bomb': {
    const { createCanvas } = require('@napi-rs/canvas')

    if (!global.tebakbom) global.tebakbom = {}

    const drawBoard = (min, max, lastGuess, isBoom, bombNumber) => {
        const width = 800
        const height = 400
        const canvas = createCanvas(width, height)
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = '#1a1a1a'
        ctx.fillRect(0, 0, width, height)

        if (isBoom) {
            ctx.fillStyle = '#ff0000'
            ctx.fillRect(0, 0, width, height)
        }

        ctx.fillStyle = isBoom ? '#000000' : '#ffffff'
        ctx.font = 'bold 40px sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText('BOMB DEFUSAL SQUAD', width / 2, 60)

        ctx.fillStyle = '#333333'
        ctx.fillRect(50, 150, 700, 100)

        const totalRange = 100
        const startX = 50
        const barWidth = 700
        
        const safeStart = ((min - 1) / totalRange) * barWidth
        const safeEnd = (max / totalRange) * barWidth
        const safeWidth = safeEnd - safeStart

        ctx.fillStyle = isBoom ? '#000000' : '#00ff00'
        ctx.fillRect(startX + safeStart, 150, safeWidth, 100)

        if (!isBoom && lastGuess) {
            const guessPos = ((lastGuess - 1) / totalRange) * barWidth
            ctx.fillStyle = '#ffff00'
            ctx.fillRect(startX + guessPos - 2, 140, 4, 120)
        }

        ctx.fillStyle = isBoom ? '#000000' : '#ffffff'
        ctx.font = 'bold 80px sans-serif'
        ctx.fillText(`${min} - ${max}`, width / 2, 225)

        ctx.font = '30px sans-serif'
        if (isBoom) {
            ctx.fillText(`BOOM! THE BOMB WAS AT ${bombNumber}`, width / 2, 350)
        } else {
            ctx.fillText(`ZONE SECURE. WAITING FOR INPUT...`, width / 2, 350)
        }

        return canvas.toBuffer('image/png')
    }

    if (!m.isGroup) return reply('Fitur ini khusus Grup!')
    let id = m.chat
    let room = global.tebakbom[id]
    let textArg = args[0] ? args[0].toLowerCase() : ''

    if (textArg === 'create') {
        if (room) return reply('Sesi game sudah ada! Selesaikan dulu atau hapus.')
        
        let bet = args[1] && !isNaN(args[1]) ? parseInt(args[1]) : 0
        
        if (bet > 0) {
            let user = global.db.users[m.sender]
            if (user.money < bet) return reply(`Uang kamu kurang untuk membuat taruhan sebesar ${bet}`)
            user.money -= bet
        }

        global.tebakbom[id] = {
            id: id,
            players: [m.sender],
            status: 'WAITING',
            turn: 0,
            bomb: Math.floor(Math.random() * 100) + 1,
            min: 1,
            max: 100,
            bet: bet,
            creator: m.sender
        }

        let caption = `💣 *DEFUSE THE BOMB* 💣\n\n`
        caption += `💰 *Taruhan:* ${bet.toLocaleString()}\n`
        caption += `👥 *Status:* Menunggu Pemain\n\n`
        caption += `Ketik *${prefix + command} join* untuk bergabung.\n`
        caption += `Ketik *${prefix + command} start* untuk memulai.`

        await DinzBotz.sendMessage(m.chat, { image: drawBoard(1, 100, null, false, 0), caption: caption }, { quoted: m })
    }
    else if (textArg === 'join') {
        if (!room || room.status !== 'WAITING') return reply('Tidak ada sesi yang sedang menunggu pemain.')
        if (room.players.includes(m.sender)) return reply('Kamu sudah bergabung!')
        
        if (room.bet > 0) {
            let user = global.db.users[m.sender]
            if (user.money < room.bet) return reply('Uang kamu tidak cukup untuk ikut taruhan ini.')
            user.money -= room.bet
        }

        room.players.push(m.sender)
        reply(`✅ BERHASIL JOIN! \nTotal Pemain: ${room.players.length}`)
    }
    else if (textArg === 'start') {
        if (!room || room.status !== 'WAITING') return reply('Buat sesi dulu.')
        if (room.players[0] !== m.sender) return reply('Hanya pembuat room yang bisa memulai.')
        
        room.status = 'PLAYING'
        let first = room.players[0]
        
        let caption = `🚨 *GAME STARTED!* 🚨\n\n`
        caption += `Zona Aman: *${room.min} - ${room.max}*\n`
        caption += `Giliran: @${first.split('@')[0]}\n\n`
        caption += `Ketik angkanya: *${prefix + command} [angka]*`

        await DinzBotz.sendMessage(m.chat, { text: caption, mentions: [first] }, { quoted: m })
    }
    else if (textArg === 'delete') {
        if (!room) return reply('Tidak ada sesi.')
        if (room.players[0] !== m.sender) return reply('Hanya creator yang bisa menghapus.')
        
        if (room.bet > 0 && room.status === 'WAITING') {
            room.players.forEach(p => {
                global.db.users[p].money += room.bet
            })
        }
        
        delete global.tebakbom[id]
        reply('Sesi dihapus.')
    }
    else if (!isNaN(args[0])) {
        if (!room || room.status !== 'PLAYING') return reply(`Ketik ${prefix + command} create untuk membuat game.`)
        if (room.players[room.turn] !== m.sender) return reply(`Bukan giliranmu! Giliran @${room.players[room.turn].split('@')[0]}`)

        let guess = parseInt(args[0])
        if (guess <= room.min || guess >= room.max) {
            return reply(`ANGKA TIDAK VALID! Masukkan angka di ANTARA ${room.min} dan ${room.max}.`)
        }

        if (guess === room.bomb) {
            let img = drawBoard(room.min, room.max, guess, true, room.bomb)
            
            let caption = `💥 *BOOOM!!! MELEDAK!* 💥\n\n`
            caption += `💀 *Korban:* @${m.sender.split('@')[0]}\n`
            caption += `💣 *Angka Bom:* ${room.bomb}\n`
            
            if (room.players.length > 1) {
                let winners = room.players.filter(p => p !== m.sender)
                let pot = room.bet * room.players.length
                
                if (pot > 0) {
                    let share = Math.floor(pot / winners.length)
                    winners.forEach(w => global.db.users[w].money += share)
                    caption += `\n🏆 *Pemenang:* ${winners.map(v => '@' + v.split('@')[0]).join(', ')}\n`
                    caption += `💰 *Hadiah:* ${share.toLocaleString()} per orang`
                }
            } else {
                caption += `\n🤣 *SOLO PLAYER KALAH!*`
            }

            delete global.tebakbom[id]
            await DinzBotz.sendMessage(m.chat, { image: img, caption: caption, mentions: room.players }, { quoted: m })

        } else {
            if (guess < room.bomb) room.min = guess
            else room.max = guess
            
            room.turn = (room.turn + 1) % room.players.length
            
            let img = drawBoard(room.min, room.max, guess, false, 0)
            let caption = `✅ *ZONA AMAN TERKUNCI*\n\n`
            caption += `📉 *Range Baru:* ${room.min} - ${room.max}\n`
            caption += `👤 *Giliran:* @${room.players[room.turn].split('@')[0]}`

            await DinzBotz.sendMessage(m.chat, { image: img, caption: caption, mentions: [room.players[room.turn]] })
        }
    } else {
        let helpMsg = `🎮 *TEBAK BOM (BOMB DEFUSAL)* 🎮\n\n`
        helpMsg += `Cara Main:\n`
        helpMsg += `1. *${prefix + command} create* (Buat room)\n`
        helpMsg += `2. *${prefix + command} join* (Gabung)\n`
        helpMsg += `3. *${prefix + command} start* (Mulai)\n`
        helpMsg += `4. *${prefix + command} [angka]* (Menebak angka, misal: ${prefix + command} 50)\n\n`
        helpMsg += `Hindari angka bomnya!`
        reply(helpMsg)
    }
}
break
case 'duel':
case 'gelud': {
    const { createCanvas, loadImage } = require('@napi-rs/canvas')
    
    if (!global.duel) global.duel = {}

    const drawDuel = async (p1, p2, hp1, hp2, maxHp, turnName) => {
        const width = 800
        const height = 400
        const canvas = createCanvas(width, height)
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = '#1a1a1a'
        ctx.fillRect(0, 0, width, height)

        ctx.font = 'bold 30px sans-serif'
        ctx.fillStyle = '#ffffff'
        ctx.textAlign = 'center'
        ctx.fillText('⚔️ DUEL ARENA ⚔️', width / 2, 50)
        
        ctx.font = '20px sans-serif'
        ctx.fillStyle = '#aaaaaa'
        ctx.fillText(`Giliran: @${turnName}`, width / 2, 380)

        const barWidth = 300
        const barHeight = 30
        
        ctx.fillStyle = '#333333'
        ctx.fillRect(50, 250, barWidth, barHeight)
        const hp1Percent = Math.max(0, hp1 / maxHp)
        ctx.fillStyle = hp1Percent > 0.5 ? '#00ff00' : hp1Percent > 0.2 ? '#ffff00' : '#ff0000'
        ctx.fillRect(50, 250, barWidth * hp1Percent, barHeight)

        ctx.fillStyle = '#333333'
        ctx.fillRect(450, 250, barWidth, barHeight)
        const hp2Percent = Math.max(0, hp2 / maxHp)
        ctx.fillStyle = hp2Percent > 0.5 ? '#00ff00' : hp2Percent > 0.2 ? '#ffff00' : '#ff0000'
        ctx.fillRect(450, 250, barWidth * hp2Percent, barHeight)

        ctx.fillStyle = '#ffffff'
        ctx.font = 'bold 25px sans-serif'
        ctx.textAlign = 'left'
        ctx.fillText(`${hp1} / ${maxHp}`, 50, 240)
        
        ctx.textAlign = 'right'
        ctx.fillText(`${hp2} / ${maxHp}`, 750, 240)

        try {
            const ava1 = await loadImage(p1)
            const ava2 = await loadImage(p2)
            
            ctx.save()
            ctx.beginPath()
            ctx.arc(100, 150, 60, 0, Math.PI * 2)
            ctx.closePath()
            ctx.clip()
            ctx.drawImage(ava1, 40, 90, 120, 120)
            ctx.restore()
            
            ctx.strokeStyle = '#ffffff'
            ctx.lineWidth = 5
            ctx.beginPath()
            ctx.arc(100, 150, 60, 0, Math.PI * 2)
            ctx.stroke()

            ctx.save()
            ctx.beginPath()
            ctx.arc(700, 150, 60, 0, Math.PI * 2)
            ctx.closePath()
            ctx.clip()
            ctx.drawImage(ava2, 640, 90, 120, 120)
            ctx.restore()

            ctx.strokeStyle = '#ffffff'
            ctx.lineWidth = 5
            ctx.beginPath()
            ctx.arc(700, 150, 60, 0, Math.PI * 2)
            ctx.stroke()
            
        } catch (e) {
            console.log('Error drawing avatar')
        }

        return canvas.toBuffer('image/png')
    }

    if (!m.isGroup) return reply('Fitur ini khusus Grup!')
    let id = m.chat
    let room = global.duel[id]
    let textArg = args[0] ? args[0].toLowerCase() : ''
    
    if (textArg === 'create' || textArg === 'tantang') {
        if (room) return reply('Sudah ada duel berjalan di grup ini!')
        
        let opponent = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        if (!opponent) return reply(`Tag lawan yang mau diajak gelud!\nContoh: ${prefix + command} create @tag [taruhan]`)
        if (opponent === m.sender) return reply('Tidak bisa duel diri sendiri.')

        let bet = args[1] && !isNaN(args[1]) ? parseInt(args[1]) : 0
        if (bet > 0) {
            let user = global.db.users[m.sender]
            if (user.money < bet) return reply('Uang kamu kurang.')
            user.money -= bet
        }

        global.duel[id] = {
            id: id,
            p1: m.sender,
            p2: opponent,
            hp1: 100,
            hp2: 100,
            maxHp: 100,
            bet: bet,
            status: 'WAITING',
            turn: m.sender 
        }

        reply(`🥊 *TANTANGAN DUEL!* 🥊\n\n@${m.sender.split('@')[0]} menantang @${opponent.split('@')[0]}\n💰 Taruhan: ${bet.toLocaleString()}\n\nKetik *${prefix + command} accept* untuk menerima!`, { mentions: [m.sender, opponent] })
    }
    else if (textArg === 'accept' || textArg === 'terima') {
        if (!room || room.status !== 'WAITING') return reply('Tidak ada tantangan.')
        if (m.sender !== room.p2) return reply('Bukan kamu yang ditantang!')
        
        if (room.bet > 0) {
            let user = global.db.users[m.sender]
            if (user.money < room.bet) return reply('Uang kamu kurang untuk mengikuti taruhan ini.')
            user.money -= room.bet
        }

        room.status = 'PLAYING'
        
        let p1Pic = await DinzBotz.profilePictureUrl(room.p1, 'image').catch(_ => 'https://i.ibb.co/3Fh9V6p/avatar-contact.png')
        let p2Pic = await DinzBotz.profilePictureUrl(room.p2, 'image').catch(_ => 'https://i.ibb.co/3Fh9V6p/avatar-contact.png')
        let img = await drawDuel(p1Pic, p2Pic, room.hp1, room.hp2, room.maxHp, room.turn.split('@')[0])
        
        let caption = `🔔 *FIGHT!* 🔔\n\nDuel dimulai!\nGiliran pertama: @${room.turn.split('@')[0]}\n\nKetik:\n*${prefix + command} pukul* (Damage 10-25)\n*${prefix + command} skill* (Damage 5-40 / Bisa Meleset)\n*${prefix + command} heal* (Nambah Darah)`
        
        await DinzBotz.sendMessage(m.chat, { image: img, caption: caption, mentions: [room.p1, room.p2] }, { quoted: m })
    }
    else if (['pukul', 'skill', 'heal'].includes(textArg)) {
        if (!room || room.status !== 'PLAYING') return reply(`Belum ada duel. Ketik ${prefix + command} create @tag`)
        if (room.turn !== m.sender) return reply(`⏳ Sabar! Sekarang giliran lawanmu.`)

        let isP1 = m.sender === room.p1
        let dmg = 0
        let heal = 0
        let msg = ''

        if (textArg === 'pukul') {
            dmg = Math.floor(Math.random() * 16) + 10 
            msg = `👊 @${m.sender.split('@')[0]} memukul lawan!\n💥 Damage: -${dmg}`
        } else if (textArg === 'skill') {
            let chance = Math.random()
            if (chance > 0.3) { 
                dmg = Math.floor(Math.random() * 36) + 5
                msg = `🔥 @${m.sender.split('@')[0]} mengeluarkan jurus!\n💥 Critical Damage: -${dmg}`
            } else {
                dmg = 0
                msg = `💨 @${m.sender.split('@')[0]} menggunakan skill tapi MELESET!`
            }
        } else if (textArg === 'heal') {
            heal = Math.floor(Math.random() * 15) + 5
            msg = `💊 @${m.sender.split('@')[0]} minum obat!\n💚 HP: +${heal}`
        }

        if (isP1) {
            room.hp2 -= dmg
            room.hp1 += heal
            if (room.hp1 > room.maxHp) room.hp1 = room.maxHp
        } else {
            room.hp1 -= dmg
            room.hp2 += heal
            if (room.hp2 > room.maxHp) room.hp2 = room.maxHp
        }

        if (room.hp1 <= 0 || room.hp2 <= 0) {
            room.hp1 = Math.max(0, room.hp1)
            room.hp2 = Math.max(0, room.hp2)
            
            let winner = room.hp1 > 0 ? room.p1 : room.p2
            let loser = room.hp1 > 0 ? room.p2 : room.p1
            
            let p1Pic = await DinzBotz.profilePictureUrl(room.p1, 'image').catch(_ => 'https://i.ibb.co/3Fh9V6p/avatar-contact.png')
            let p2Pic = await DinzBotz.profilePictureUrl(room.p2, 'image').catch(_ => 'https://i.ibb.co/3Fh9V6p/avatar-contact.png')
            let img = await drawDuel(p1Pic, p2Pic, room.hp1, room.hp2, room.maxHp, winner.split('@')[0])
            
            let caption = `🏆 *GAME OVER* 🏆\n\nPemenang: @${winner.split('@')[0]}\n`
            if (room.bet > 0) {
                global.db.users[winner].money += (room.bet * 2)
                caption += `💰 Mendapatkan hadiah: ${(room.bet * 2).toLocaleString()}`
            }
            
            delete global.duel[id]
            await DinzBotz.sendMessage(m.chat, { image: img, caption: caption, mentions: [winner, loser] }, { quoted: m })
            
        } else {
            room.turn = isP1 ? room.p2 : room.p1 
            
            let p1Pic = await DinzBotz.profilePictureUrl(room.p1, 'image').catch(_ => 'https://i.ibb.co/3Fh9V6p/avatar-contact.png')
            let p2Pic = await DinzBotz.profilePictureUrl(room.p2, 'image').catch(_ => 'https://i.ibb.co/3Fh9V6p/avatar-contact.png')
            let img = await drawDuel(p1Pic, p2Pic, room.hp1, room.hp2, room.maxHp, room.turn.split('@')[0])
            
            await DinzBotz.sendMessage(m.chat, { image: img, caption: msg + `\n\nGiliran: @${room.turn.split('@')[0]}`, mentions: [room.p1, room.p2] }, { quoted: m })
        }
    }
    else if (textArg === 'delete') {
        if (!room) return reply('Tidak ada sesi.')
        if (room.p1 !== m.sender) return reply('Hanya penantang yang bisa membatalkan.')
        
        if (room.bet > 0 && room.status === 'WAITING') {
            global.db.users[room.p1].money += room.bet
        }
        delete global.duel[id]
        reply('Duel dibatalkan.')
    } else {
        reply(`🥊 *DUEL GELUD* 🥊\n\nCara main:\n1. ${prefix + command} create @tag [taruhan]\n2. ${prefix + command} accept\n3. ${prefix + command} pukul / skill / heal`)
    }
}
break
case 'addcase': {
    const fs = require('fs')
    const pathFile = './message/DinzID.js'

    const penanda = Buffer.from('LyogLS10YW1iYWggY2FzZSBkaXNpbmktLSAqLw==', 'base64').toString('utf-8')

    if (!q) {
        return reply('Format salah.\nContoh: !addcase namafitur|reply("oke")')
    }

    const firstPipe = q.indexOf('|')

    if (firstPipe === -1) return reply('Format salah. Harap pisahkan nama case dan kode dengan tanda garis tegak "|"')

    const inputNames = q.substring(0, firstPipe)
    const inputCode = q.substring(firstPipe + 1)

    if (inputCode.includes('case \u0027')) {
        return reply('DITOLAK: Jangan menumpuk case baru di dalam kode ini.')
    }

    const caseNames = inputNames.split(',').map(item => item.trim())

    try {
        let dataFile = fs.readFileSync(pathFile, 'utf8')

        const duplicateCheck = caseNames.find(name => dataFile.includes(`case '${name}'`))
        if (duplicateCheck) return reply(`Gagal: Case ${duplicateCheck} sudah ada.`)

        let newCasesString = ''
        caseNames.forEach(name => {
            newCasesString += `case '${name}':\n    `
        })

        const finalBlock = `
    ${newCasesString}{
        ${inputCode}
    }
    break

    ${penanda}`

        if (!dataFile.includes(penanda)) return reply('Marker tidak ditemukan di bagian bawah file.')
        
        dataFile = dataFile.replace(penanda, finalBlock)
        fs.writeFileSync(pathFile, dataFile)

        reply(`Sukses menambahkan case: ${caseNames.join(', ')}`)

    } catch (e) {
        console.log(e)
        reply('Terjadi kesalahan saat menyimpan file.')
    }
}
break
case 'delcase': {
    const fs = require('fs')
    const pathFile = './message/DinzID.js'

    if (!q) return reply('Masukkan nama case yang ingin dihapus')

    try {
        let dataFile = fs.readFileSync(pathFile, 'utf8')
        let lines = dataFile.split('\n')

        let indexLine = -1

        lines.forEach((line, i) => {
            if (line.trim().startsWith(`case '${q}':`)) {
                indexLine = i
            }
        })

        if (indexLine === -1) return reply(`Case '${q}' tidak ditemukan di file DinzID.js`)

        const isStackAbove = (indexLine > 0) && lines[indexLine - 1].trim().startsWith('case \'')
        const isStackBelow = (indexLine < lines.length - 1) && lines[indexLine + 1].trim().startsWith('case \'')

        if (isStackAbove || isStackBelow) {
            let currentLine = lines[indexLine]
            currentLine = currentLine.replace(`case '${q}':`, '')

            if (currentLine.trim() === '') {
                lines.splice(indexLine, 1)
            } else {
                lines[indexLine] = currentLine
            }

            reply(`Sukses menghapus case '${q}' (Mode: Stack).`)

        } else {
            let indexBreak = -1

            for (let i = indexLine; i < lines.length; i++) {
                if (lines[i].trim() === 'break' || lines[i].trim().endsWith('break')) {
                    indexBreak = i
                    break
                }
            }

            if (indexBreak === -1) {
                lines.splice(indexLine, 1)
                reply(`Case '${q}' dihapus, tapi penutup 'break' tidak ditemukan otomatis.`)
            } else {
                
                let indexEnd = indexBreak

                if (lines[indexBreak + 1] && lines[indexBreak + 1].trim() === '}') {
                    indexEnd = indexBreak + 1
                }

                lines.splice(indexLine, (indexEnd - indexLine) + 1)
                reply(`Sukses menghapus case '${q}' beserta kodingannya.`)
            }
        }

        let finalData = lines.join('\n').replace(/\n\s*\n\s*\n/g, '\n\n')
        fs.writeFileSync(pathFile, finalData)

    } catch (e) {
        console.log(e)
        reply('Terjadi error saat memproses file.')
    }
}
break
case 'getcase': {
    const fs = require('fs')
    const pathFile = './message/DinzID.js'

    if (!q) return reply('Masukkan nama case yang ingin diambil kodenya')

    try {
        let dataFile = fs.readFileSync(pathFile, 'utf8')
        let lines = dataFile.split('\n')

        let targetIndex = -1
        lines.forEach((line, i) => {
            if (line.trim().startsWith(`case '${q}':`)) {
                targetIndex = i
            }
        })

        if (targetIndex === -1) return reply(`Case '${q}' tidak ditemukan`)

        let startIndex = targetIndex
        while (startIndex > 0 && lines[startIndex - 1].trim().startsWith('case \'')) {
            startIndex--
        }

        let endIndex = -1
        for (let i = targetIndex; i < lines.length; i++) {
            if (lines[i].trim() === 'break' || lines[i].trim().endsWith('break')) {
                endIndex = i
                break
            }
        }

        if (endIndex === -1) return reply('Error: Penutup break tidak ditemukan untuk case ini')

        if (lines[endIndex + 1] && lines[endIndex + 1].trim() === '}') {
            endIndex = endIndex + 1
        }

        const caseCode = lines.slice(startIndex, endIndex + 1).join('\n')
        
        reply(caseCode)

    } catch (e) {
        console.log(e)
        reply('Terjadi error saat mengambil data case')
    }
}
break
case 'jadwal-sholat':
case 'jadwalsholat': {
    try {
        if (!text) return reply(`⚠️ *Format Salah!*\nSilakan masukkan nama kota.\n\n📝 *Contoh:*\n${prefix + command} Jakarta\n${prefix + command} Bandung`)

        reply('⏳ *Sedang mencari jadwal sholat...*')
        
        // Menggunakan API Vreden sesuai permintaan
        let res = await fetchJson(`https://api.vreden.my.id/api/v1/islamic/jadwalsholat?kota=${encodeURIComponent(text)}`)

        if (!res.status || !res.result) return reply('❌ *Data tidak ditemukan!* Pastikan nama kota benar.')

        let t = res.result.timings
        let d = res.result.date
        let h = d.hijri

        let caption = `✨ *JADWAL SHOLAT HARI INI* ✨
📍 *Kota:* ${text.toUpperCase()}
📅 *Tanggal:* ${d.readable}
🗓️ *Hijriyah:* ${h.day} ${h.month.en} ${h.year}

╭───────────────╮
│ 🌙 *Imsak* : ${t.Imsak}
│ 🌅 *Subuh* : ${t.Fajr}
│ 🌄 *Terbit* : ${t.Sunrise}
│ 🌞 *Dzuhur* : ${t.Dhuhr}
│ 🌇 *Ashar* : ${t.Asr}
│ 🌆 *Maghrib* : ${t.Maghrib}
│ 🌌 *Isya* : ${t.Isha}
╰───────────────╯

💡 _"Jaga sholatmu, jaga hidupmu."_`

        reply(caption)

    } catch (e) {
        console.log(e)
        reply('❌ Terjadi kesalahan saat mengambil data.')
    }
}
break
case 'asmaulhusna': {
    try {
        reply('⏳ *Mengambil data Asmaul Husna...*')
        let res = await fetchJson('https://islamic-api-zhirrr.vercel.app/api/asmaulhusna')
        let data = res.data

        if (!data) return reply('❌ Data tidak ditemukan.')

        let header = `✨ *ASMAUL HUSNA (99 Nama Allah)* ✨\n\n`
        let content = data.map(item => `🔹 *${item.index}. ${item.latin}* (${item.arabic})\n_${item.translation_id}_`).join('\n\n')

        reply(header + content)
    } catch (err) {
        console.error(err)
        reply('❌ *Error!* Gagal mengambil data Asmaul Husna.')
    }
}
break
case 'niat-sholat':
case 'niatsholat': {
    try {
        let res = await fetchJson('https://islamic-api-zhirrr.vercel.app/api/niatshalat')
        if (!text) {
            let list = res.map(item => `• ${item.name}`).join('\n')
            return reply(`📋 *DAFTAR NIAT SHOLAT*

${list}

📝 *Cara Pakai:*
${prefix + command} <nama sholat>
Contoh: *${prefix + command} subuh*`)
        }

        let result = res.find(item => item.name.toLowerCase().includes(text.toLowerCase()))
        if (!result) return reply(`❌ Niat sholat *"${text}"* tidak ditemukan. Cek daftar dengan mengetik *${prefix + command}*`)

        let caption = `🤲 *NIAT SHOLAT ${result.name.toUpperCase()}*

📜 *Arab:*
${result.arabic}

🔤 *Latin:*
${result.latin}

📖 *Artinya:*
"${result.terjemahan}"`.trim()

        reply(caption)
    } catch (err) {
        console.error(err)
        reply('❌ Error saat mengambil data niat sholat.')
    }
}
break
case 'juz':
case 'alquan-juz': {
    try {
        if (!text) return reply(`⚠️ *Format Salah!*\nMasukkan nomor Juz yang ingin dicari.\n\n📝 *Contoh:*\n${prefix + command} 1`)

        reply(`⏳ *Sedang memuat data Al-Qur'an Juz ${text}...*`)

        let res = await fetchJson(`https://cloudku.us.kg/api/murotal/juz?id=${text}`)

        if (res.status !== "success" || !res.result || res.result.length === 0) return reply(`❌ Juz ${text} tidak ditemukan.`)

        let data = res.result
        let header = `📖 *AL-QUR'AN DIGITAL - JUZ ${text}* 📖\n\n`
        let audioUrl = data[0].audio

        let content = data.map((item) => {
            return `*Surah ${item.surah} : Ayat ${item.ayah}*
${item.arab}
_${item.latin}_
"${item.text}"`
        }).join('\n\n───────────────\n\n')

        let fullText = header + content

        if (fullText.length > 4000) {
            let txtPath = `./database/juz_${text}.txt`
            fs.writeFileSync(txtPath, fullText)
            
            await DinzBotz.sendMessage(from, { 
                document: fs.readFileSync(txtPath), 
                fileName: `AlQuran_Juz_${text}.txt`, 
                mimetype: 'text/plain', 
                caption: `✨ *Data Al-Qur'an Juz ${text}* ✨` 
            }, { quoted: m })
            
            fs.unlinkSync(txtPath)
        } else {
            reply(fullText)
        }

        await DinzBotz.sendMessage(from, { 
            audio: { url: audioUrl }, 
            mimetype: 'audio/mpeg', 
            ptt: false 
        }, { quoted: m })

    } catch (e) {
        console.error(e)
        reply('❌ Terjadi kesalahan saat mengambil data Juz.')
    }
}
break
case 'listsurah': {
    try {
        reply('⏳ *Sedang mengambil daftar surah...*')

        let res = await fetchJson(`https://cloudku.us.kg/api/murotal/list/surah`)

        if (res.status !== "success" || !res.result) return reply('❌ Gagal mengambil daftar surah.')

        let teks = `✨ *DAFTAR SURAH AL-QUR'AN* ✨\n\n`
        
        res.result.forEach((s) => {
            teks += `*${s.number}. ${s.name_id}* (${s.name_short})\n`
            teks += `│ 📜 Ayat: ${s.number_of_verses} | 🌍 Arti: ${s.translation_id}\n`
            teks += `╰───────────────╼\n`
        })

        teks += `\n📝 *Cara Membaca:* Ketik *${prefix}surah <nomor>*\nContoh: *${prefix}surah 18*`

        reply(teks)

    } catch (e) {
        console.error(e)
        reply('❌ Terjadi kesalahan saat mengambil daftar surah.')
    }
}
break
case 'surah': {
    try {
        if (!text) return reply(`⚠️ *Format Salah!*\n\nMasukkan nomor surah yang ingin dicari.\n📝 *Contoh:* ${prefix + command} 18`)

        reply(`⏳ *Memuat informasi surah nomor ${text}...*`)

        let res = await fetchJson(`https://cloudku.us.kg/api/murotal/surah?id=${text}`)

        if (res.status !== "success" || !res.result) return reply(`❌ Surah nomor ${text} tidak ditemukan.`)

        let s = res.result
        
        let caption = `📖 *DETAIL SURAH AL-QUR'AN*

╭─────────────────────╼
│ 🕋 *Surah* : ${s.name_id} (${s.name_long})
│ 🌍 *Arti* : ${s.translation_id}
│ 🔢 *Nomor* : ${s.number}
│ 📜 *Ayat* : ${s.number_of_verses} Ayat
│ 🕌 *Tipe* : ${s.revelation_id}
╰─────────────────────╼

✨ *Tafsir Singkat:*

${s.tafsir}`

        await DinzBotz.sendMessage(from, { 
            audio: { url: s.audio_url }, 
            mimetype: 'audio/mpeg', 
            ptt: false 
        }, { quoted: m })

        reply(caption)

    } catch (e) {
        console.error(e)
        reply('❌ Gagal mengambil data detail surah.')
    }
}
break
case 'doa':
case 'berdoa': {
    try {
        let res = await fetchJson('https://doa-doa-api-ahmadramadhan.fly.dev/api')

        if (!text) {
            let randomExamples = res.sort(() => 0.5 - Math.random()).slice(0, 5).map(i => `• ${i.doa}`).join('\n')
            return reply(`📋 *KUMPULAN DOA HARIAN*

Ketik nama doa yang ingin dicari.
📝 *Contoh:* ${prefix + command} makan

💡 *Contoh Doa Tersedia:*
${randomExamples}
...dan banyak lagi.`)
        }

        let result = res.find(item => item.doa.toLowerCase().includes(text.toLowerCase()))
        if (!result) return reply(`❌ Doa *"${text}"* tidak ditemukan.`)

        let caption = `🤲 *${result.doa.toUpperCase()}*

📜 *Arab:*
${result.ayat}

🔤 *Latin:*
${result.latin}

📖 *Artinya:*
"${result.artinya}"`.trim()

        reply(caption)
    } catch (err) {
        console.error(err)
        reply('❌ Gagal mengambil data doa.')
    }
}
break
case 'gislam': {
    if (!text) return reply(`🔍 *Mau cari artikel apa?*
Contoh: ${prefix + command} puasa`)

    try {
        reply('⏳ *Mencari artikel islami...*')
        let res = await fetchJson(`https://artikel-islam.netlify.app/.netlify/functions/api/ms?page=1&s=${encodeURIComponent(text)}`)

        if (!res.success || !res.data || res.data.data.length === 0) return reply('❌ Artikel tidak ditemukan.')

        let articles = res.data.data
        let caption = `📚 *HASIL PENCARIAN ARTIKEL ISLAMI*
Kata Kunci: _${text}_\n\n`

        articles.forEach((art, i) => {
            caption += `*${i + 1}. ${art.title}*
🔗 ${art.url}\n\n`
        })

        reply(caption)
    } catch (err) {
        console.error(err)
        reply('❌ Terjadi kesalahan saat mencari artikel.')
    }
}
break
case 'kataislam': {
    try {
        reply('✨ *Mencari inspirasi...*')
        let payload = {
            content: "Berikan satu quotes islami pendek, menyentuh hati, dan memotivasi beserta sumbernya (jika ada). Bahasa Indonesia.",
            cName: "S-AI",
            cID: "S-AIbAQ0HcC"
        }
        let res = await axios.post('https://ai.siputzx.my.id/', payload)
        let quote = res.data.result

        reply(`📜 *KATA MUTIARA ISLAMI*

"${quote}"

`)
    } catch (err) {
        console.error(err)
        reply('❌ Gagal mengambil quotes.')
    }
}
break
case 'pantunislam': {
    try {
        reply('✨ *Membuat pantun...*')
        let payload = {
            content: "Buatkan satu pantun islami 4 baris yang lucu tapi penuh nasehat agama. Bahasa Indonesia.",
            cName: "S-AI",
            cID: "S-AIbAQ0HcC"
        }
        let res = await axios.post('https://ai.siputzx.my.id/', payload)
        let pantun = res.data.result

        reply(`🎙️ *PANTUN ISLAMI*

${pantun}

`)
    } catch (err) {
        console.error(err)
        reply('❌ Gagal membuat pantun.')
    }
}
break
case 'genshin-wildlife':
case 'g-wildlife':
case 'gens-wildlife': {
    if (!text) return reply(`Contoh: *${prefix + command} snowboar*\nHarap berikan nama binatang liar.`)

    try {
        let result = await genshindb.wildlife(text)

        if (result) {
            let response = `*Binatang Liar Ditemukan: ${result.name}*\n\n` + 
                           `_${result.description || "Data tidak tersedia"}_\n\n` + 
                           `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n` + 
                           `*Habitat:* ${result.habitat || "Data tidak tersedia"}`
            reply(response)
        } else {
            reply("Binatang liar tidak ditemukan.")
        }
    } catch (err) {
        let available = await genshindb.wildlife("names", { matchCategories: true })
        reply(`*Tidak Ditemukan*\n\n*Binatang liar yang tersedia:* ${available.join(", ")}`)
    }
}
break

case 'genshin-weapons':
case 'g-weapons':
case 'gens-weapons': {
    if (!text) return reply(`Contoh: *${prefix + command} claymore*\nHarap berikan nama senjata.`)

    try {
        let result = await genshindb.weapons(text)

        if (result) {
            let response = `*Senjata Ditemukan: ${result.name}*\n\n` + 
                           `_${result.description || "Data tidak tersedia"}_\n\n` + 
                           `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n` + 
                           `*Type:* ${result.type || "Data tidak tersedia"}\n` + 
                           `*Base ATK:* ${result.baseAttack || "Data tidak tersedia"}\n` + 
                           `*Substat:* ${result.subStat || "Data tidak tersedia"}\n` + 
                           `*Passive Name:* ${result.passiveName || "Data tidak tersedia"}\n` + 
                           `*Passive Description:* ${result.passiveDescription || "Data tidak tersedia"}\n` + 
                           (result.refinement ? `\n*Refinement (${result.refinement.refine}):* ${result.refinement.description || "Data tidak tersedia"}\n` : "")
            reply(response)
        } else {
            reply("Senjata tidak ditemukan.")
        }
    } catch (err) {
        let available = await genshindb.weapons("names", { matchCategories: true })
        reply(`*Tidak Ditemukan*\n\n*Senjata yang tersedia:* ${available.join(", ")}`)
    }
}
break

case 'genshin-voiceovers':
case 'g-voiceovers':
case 'gens-voiceovers': {
    if (!text) return reply(`Contoh: *${prefix + command} venti*\nHarap berikan nama voiceover.`)

    try {
        let result = await genshindb.voiceovers(text)

        if (result) {
            let response = `*Voiceover Ditemukan: ${result.name}*\n\n` +
                           `_${result.description || "Deskripsi tidak tersedia"}_\n\n` +
                           `*Rarity:* ${result.rarity || "Data tidak tersedia"}`
            reply(response)
        } else {
            reply("Voiceover tidak ditemukan.")
        }
    } catch (err) {
        let available = await genshindb.voiceovers("names", { matchCategories: true })
        reply(`*Tidak Ditemukan*\n\n*Voiceover yang tersedia:* ${available.join(", ")}`)
    }
}
break

case 'genshin-viewpoint':
case 'g-viewpoint':
case 'gens-viewpoint': {
    if (!text) return reply(`Contoh: *${prefix + command} starfell valley*\nHarap berikan nama pemandangan.`)

    try {
        let result = await genshindb.viewpoints(text)

        if (result) {
            let response = `*Pemandangan Ditemukan: ${result.name}*\n\n` +
                           `_${result.description || "Deskripsi tidak tersedia"}_\n\n` +
                           `*Region:* ${result.region || "Data tidak tersedia"}\n` +
                           `*Area:* ${result.area || "Data tidak tersedia"}`
            reply(response)
        } else {
            reply("Pemandangan tidak ditemukan.")
        }
    } catch (err) {
        let available = await genshindb.viewpoints("names", { matchCategories: true })
        reply(`*Tidak Ditemukan*\n\n*Pemandangan yang tersedia:* ${available.join(", ")}`)
    }
}
break

case 'genshin-talents':
case 'g-talents':
case 'gens-talents': {
    if (!text) return reply(`Contoh: *${prefix + command} diluc*\nHarap berikan nama karakter untuk mencari bakatnya.`)

    try {
        let result = await genshindb.talents(text)

        if (result && result.length > 0) {
            let response = `*Bakat ditemukan untuk karakter ${text}:*\n\n`
            result.forEach((talent, index) => {
                response += `*${index + 1}. ${talent.name}*\n`
                response += `_${talent.description || "Deskripsi tidak tersedia"}_\n\n`
                response += `*Jenis:* ${talent.type || "Data tidak tersedia"}\n`
                response += `*Element:* ${talent.element || "Data tidak tersedia"}\n\n`
            })
            reply(response)
        } else {
            reply(`Bakat untuk karakter '${text}' tidak ditemukan.`)
        }
    } catch (err) {
        reply(`*Tidak Ditemukan*\n\n*Bakat untuk karakter '${text}' tidak ditemukan.`)
    }
}
break

case 'genshin-potion':
case 'g-potion':
case 'gens-potion': {
    if (!text) return reply(`Contoh: *${prefix + command} squirrel fish*\nHarap berikan nama ramuan atau makanan.`)

    try {
        let result = await genshindb.foods(text)

        if (result) {
            let response = `*Ramuan atau Makanan Ditemukan: ${result.name}*\n\n` +
                           `_${result.description || "Deskripsi tidak tersedia"}_\n\n` +
                           `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n` +
                           `*Efek:* ${result.effect || "Data tidak tersedia"}`
            reply(response)
        } else {
            reply(`Ramuan atau makanan '${text}' tidak ditemukan.`)
        }
    } catch (err) {
        let availableFoods = await genshindb.foods("names", { matchCategories: true })
        reply(`*List ${text} foods :*\n\n- ${availableFoods.join("\n- ")}`)
    }
}
break

case 'genshin-outfit':
case 'g-outfit':
case 'gens-outfit': {
    if (!text) return reply(`Contoh: *${prefix + command} outrider*\nHarap berikan nama kostum atau outfit.`)

    try {
        let result = await genshindb.outfits(text)

        if (result) {
            let response = `*Kostum Ditemukan: ${result.name}*\n\n` +
                           `_${result.description || "Deskripsi tidak tersedia"}_\n\n` +
                           `*Karakter:* ${result.character || "Data tidak tersedia"}`
            if (result.url && result.url.modelviewer) {
                response += `\n_${result.url.modelviewer}_`
            }
            reply(response)
        } else {
            reply(`Kostum '${text}' tidak ditemukan.`)
        }
    } catch (err) {
        let availableOutfits = await genshindb.outfits("names", { matchCategories: true })
        reply(`*Not Found*\n\n*Available outfits is:*\n${availableOutfits.join(", ")}`)
    }
}
break

case 'genshin-nation':
case 'g-nation':
case 'gens-nation': {
    if (!text) return reply(`Contoh: *${prefix + command} mondstadt*\nHarap berikan nama wilayah atau nasionalitas.`)

    try {
        let result = await genshindb.geographies(text)

        if (result) {
            let response = `*Informasi Wilayah Ditemukan: ${result.name}*\n\n` +
                           `_${result.description || "Deskripsi tidak tersedia"}_\n\n` +
                           `*Area:* ${result.area || "Data tidak tersedia"}\n` +
                           `*Region:* ${result.region || "Data tidak tersedia"}`
            reply(response)
        } else {
            reply("Informasi wilayah tidak ditemukan.")
        }
    } catch (err) {
        let available = await genshindb.geographies("names", { matchCategories: true })
        reply(`*Tidak Ditemukan*\n\n*Wilayah yang tersedia:* ${available.join(", ")}`)
    }
}
break

case 'genshin-namacard':
case 'g-namacard':
case 'gens-namacard': {
    if (!text) return reply(`Contoh: *${prefix + command} anemo flare*\nHarap berikan nama kartu nama.`)

    try {
        let result = await genshindb.namecards(text)

        if (result) {
            let response = `*Kartu Nama Ditemukan: ${result.name}*\n\n` +
                           `_${result.description || "Deskripsi tidak tersedia"}_\n\n` +
                           `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n` +
                           `*Unlock:* ${result.unlock || "Data tidak tersedia"}`
            reply(response)
        } else {
            reply("Kartu nama tidak ditemukan.")
        }
    } catch (err) {
        let available = await genshindb.namecards("names", { matchCategories: true })
        reply(`*Tidak Ditemukan*\n\n*Kartu nama yang tersedia:* ${available.join(", ")}`)
    }
}
break

case 'genshin-materials':
case 'g-materials':
case 'gens-materials': {
    if (!text) return reply(`Contoh: *${prefix + command} boreal wolf's milk*\nHarap berikan nama material.`)

    try {
        let result = await genshindb.materials(text)

        if (result) {
            let response = `*Material Ditemukan: ${result.name}*\n\n` +
                           `_${result.description || "Deskripsi tidak tersedia"}_\n\n` +
                           `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n` +
                           `*Type:* ${result.type || "Data tidak tersedia"}`
            reply(response)
        } else {
            reply("Material tidak ditemukan.")
        }
    } catch (err) {
        let available = await genshindb.materials("names", { matchCategories: true })
        reply(`*Tidak Ditemukan*\n\n*Material yang tersedia:* ${available.join(", ")}`)
    }
}
break

case 'genshin-food':
case 'g-food':
case 'gens-food': {
    if (!text) return reply(`Contoh: *${prefix + command} temptation*\nHarap berikan nama makanan.`)

    try {
        let result = await genshindb.foods(text)

        if (result) {
            let response = `*Makanan Ditemukan: ${result.name}*\n\n` +
                           `_"${result.description}"_\n\n` +
                           `*Rarity:* ${result.rarity}\n` +
                           `*Type:* ${result.foodtype}\n` +
                           `*Category:* ${result.foodfilter} (${result.foodcategory})\n\n`
            
            if (result.effect) response += `*Effect:*\n${result.effect}\n\n`
            if (result.suspicious) response += `*Suspicious:*\n${result.suspicious.effect}\n_"${result.suspicious.description}"_\n\n`
            if (result.normal) response += `*Normal:*\n${result.normal.effect}\n_"${result.normal.description}"_\n\n`
            if (result.delicious) response += `*Delicious:*\n${result.delicious.effect}\n_"${result.delicious.description}"_\n\n`
            
            reply(response)
        } else {
            reply("Makanan tidak ditemukan.")
        }
    } catch (err) {
        let available = await genshindb.foods("names", { matchCategories: true })
        reply(`*Tidak Ditemukan*\n\n*Makanan yang tersedia:* ${available.join(", ")}`)
    }
}
break

case 'genshin-enemy':
case 'g-enemy':
case 'gens-enemy': {
    if (!text) return reply(`Contoh: *${prefix + command} ruin guard*\nHarap berikan nama musuh.`)

    try {
        let result = await genshindb.enemies(text)

        if (result) {
            let response = `*Musuh Ditemukan: ${result.name}*\n\n` +
                           `_${result.description || "Deskripsi tidak tersedia"}_\n\n` +
                           `*Level:* ${result.level || "Data tidak tersedia"}\n` +
                           `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n` +
                           `*Element:* ${result.element || "Data tidak tersedia"}`
            reply(response)
        } else {
            reply("Musuh tidak ditemukan.")
        }
    } catch (err) {
        let available = await genshindb.enemies("names", { matchCategories: true })
        reply(`*Tidak Ditemukan*\n\n*Musuh yang tersedia:* ${available.join(", ")}`)
    }
}
break

case 'genshin-emoji':
case 'g-emoji':
case 'gens-emoji': {
    if (!text) return reply(`Contoh: *${prefix + command} anemo*\nHarap berikan nama emoji.`)

    try {
        let result = await genshindb.emojis(text)

        if (result) {
            let response = `*Emoji Ditemukan: ${result.name}*\n\n` +
                           `_${result.description}_\n\n` +
                           `*Rarity:* ${result.rarity || "Data tidak tersedia"}`
            reply(response)
        } else {
            reply("Emoji tidak ditemukan.")
        }
    } catch (err) {
        let available = await genshindb.emojis("names", { matchCategories: true })
        reply(`*Tidak Ditemukan*\n\n*Emoji yang tersedia:* ${available.join(", ")}`)
    }
}
break

case 'genshin-domain':
case 'g-domain':
case 'gens-domain': {
    if (!text) return reply(`Contoh: *${prefix + command} valley of remembrance*\nHarap berikan nama domain.`)

    try {
        let result = await genshindb.domains(text)

        if (result) {
            let response = `*Domain Ditemukan: ${result.name}*\n\n` +
                           `_${result.description}_\n\n` +
                           `*Area:* ${result.area || "Data tidak tersedia"}\n` +
                           `*Level:* ${result.level || "Data tidak tersedia"}`
            reply(response)
        } else {
            reply("Domain tidak ditemukan.")
        }
    } catch (err) {
        let available = await genshindb.domains("names", { matchCategories: true })
        reply(`*Tidak Ditemukan*\n\n*Domain yang tersedia:* ${available.join(", ")}`)
    }
}
break

case 'genshin-craft':
case 'g-craft':
case 'gens-craft': {
    if (!text) return reply(`Contoh: *${prefix + command} mystical enhancement ore*\nHarap berikan nama craft.`)

    try {
        let result = await genshindb.crafts(text)

        if (result) {
            let response = `*Craft Ditemukan: ${result.name}*\n\n` +
                           `_${result.description}_\n\n` +
                           `*Type:* ${result.type || "Data tidak tersedia"}\n` +
                           `*Rarity:* ${result.rarity || "Data tidak tersedia"}`
            reply(response)
        } else {
            reply("Craft tidak ditemukan.")
        }
    } catch (err) {
        let available = await genshindb.crafts("names", { matchCategories: true })
        reply(`*Tidak Ditemukan*\n\n*Craft yang tersedia:* ${available.join(", ")}`)
    }
}
break

case 'genshin-const':
case 'g-const':
case 'gens-const':
case 'genshin-constellation':
case 'g-constellation':
case 'gens-constellation': {
    if (!text) return reply(`Contoh: *${prefix + command} diluc*\nHarap berikan nama karakter untuk mencari konstelasinya.`)

    try {
        let result = await genshindb.constellations(text)

        if (result && result.length > 0) {
            let response = `*Konstelasi ditemukan untuk karakter ${text}:*\n\n`
            result.forEach((constellation, index) => {
                response += `*${index + 1}. ${constellation.name}*\n`
                response += `_${constellation.effect}_\n\n`
                response += `*Unlock At:* C${constellation.unlock || "Data tidak tersedia"}`
                if (index < result.length - 1) response += "\n\n"
            })
            reply(response)
        } else {
            reply(`Konstelasi untuk karakter '${text}' tidak ditemukan.`)
        }
    } catch (err) {
        reply(`*Tidak Ditemukan*\n\n*Konstelasi untuk karakter '${text}' tidak ditemukan.`)
    }
}
break

case 'genshin-artifact':
case 'g-artifact':
case 'gens-artifact': {
    if (!text) return reply(`Contoh: *${prefix + command} berserker*\nHarap berikan nama artefak.`)

    try {
        let result = await genshindb.artifacts(text)

        if (result) {
            let response = `*Artefak Ditemukan: ${result.name}*\n\n` +
                           `_${result.description}_\n\n` +
                           `*Set:* ${result.set || "Data tidak tersedia"}\n` +
                           `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n` +
                           `*Slot:* ${result.slot || "Data tidak tersedia"}`
            reply(response)
        } else {
            reply("Artefak tidak ditemukan.")
        }
    } catch (err) {
        let available = await genshindb.artifacts("names", { matchCategories: true })
        reply(`*Tidak Ditemukan*\n\n*Artefak yang tersedia:* ${available.join(", ")}`)
    }
}
break

case 'genshin-area':
case 'g-area':
case 'gens-area': {
    if (!text) return reply(`Contoh: *${prefix + command} liyue*\nHarap berikan nama tempat.`)

    try {
        let result = await genshindb.geographies(text)

        if (result) {
            let response = `*Info Geografi: ${result.name}*\n\n` +
                           `_${result.description || "Deskripsi tidak tersedia"}_\n\n` +
                           `*Area:* ${result.area || "Data tidak tersedia"}\n` +
                           `*Region:* ${result.region || "Data tidak tersedia"}\n` +
                           `*Urutan Sortir:* ${result.sortorder || "Data tidak tersedia"}`
            reply(response)
        } else {
            reply("Geografi tidak ditemukan.")
        }
    } catch (err) {
        let available = await genshindb.geographies("names", { matchCategories: true })
        reply(`*Tidak Ditemukan*\n\n*Geografi yang tersedia:* ${available.join(", ")}`)
    }
}
break

case 'genshin-animal':
case 'g-animals':
case 'gens-animals': {
    if (!text) return reply(`Contoh: *${prefix + command} shiba*\nHarap berikan nama hewan.`)

    try {
        let animal = await genshindb.animals(text)

        if (animal) {
            let response = `*Hewan Ditemukan: ${animal.name}*\n\n` +
                           `"${animal.description}"\n\n` +
                           `*Kategori:* ${animal.category || ""}\n` +
                           `*Jenis Hitungan:* ${animal.counttype || ""}\n` +
                           `_${animal.sortorder ? `Urutan Sortir: ${animal.sortorder}` : ""}_`
            reply(response)
        } else {
            reply("Hewan tidak ditemukan.")
        }
    } catch (err) {
        let allAnimalNames = await genshindb.animals("names", { matchCategories: true })
        reply(`*Tidak Ditemukan*\n\n*Hewan yang tersedia:* ${allAnimalNames.join(", ")}`)
    }
}
break

case 'genshin-rankadventure':
case 'g-rankadventure':
case 'genshin-advrank':
case 'g-advrank':
case 'gens-rankadventure':
case 'gens-advrank': {
    if (!text || isNaN(parseInt(text))) {
        return reply(`Masukkan nomor peringkat petualang yang valid. Contoh: *${prefix + command} 5*`)
    }

    try {
        let rankNumber = parseInt(text)
        let result = await genshindb.adventureranks(rankNumber)

        if (result) {
            let response = `*Rank Petualang Ditemukan untuk Rank ${rankNumber}:*\n\n` +
                           `*Experience:* ${result.exp || "Data tidak tersedia"}\n` +
                           `*Reward:* ${result.reward || "Data tidak tersedia"}\n` +
                           `*Deskripsi:* ${result.description || "Data tidak tersedia"}`
            reply(response)
        } else {
            reply(`Rank petualang untuk Rank ${rankNumber} tidak ditemukan.`)
        }
    } catch (err) {
        reply(`*Terjadi Kesalahan saat mengambil data Rank.*`)
    }
}
break

case 'genshin-achievement':
case 'g-achievement':
case 'gens-achievement': {
    if (!text) return reply(`Contoh: *${prefix + command} mondstadt*\nHarap berikan nama prestasi.`)

    try {
        let result = await genshindb.achievements(text)

        if (result) {
            let response = `*${result.name}*\n` +
                           `_${result.description}_\n\n` +
                           `*Kategori:* ${result.category || ""}\n` +
                           `*Rarity:* ${result.rarity || ""}\n` +
                           `*Detail:* ${result.detail || ""}\n` +
                           `*Cara Mendapatkan:* ${result.howToObtain || ""}`
            reply(response)
        } else {
            reply("Prestasi tidak ditemukan.")
        }
    } catch (err) {
        let available = await genshindb.achievements("names", { matchCategories: true })
        reply(`*Tidak Ditemukan*\n\n*Prestasi yang tersedia:* ${available.join(", ")}`)
    }
}
break

case 'genshin-char':
case 'g-char':
case 'gens-char':
case 'genshin-characters':
case 'g-characters':
case 'gens-characters': 
case 'genshinchar': {
      const _0x51a365 = _0x5873;
      (function (_0x2c23a4, _0x3fb52a) {
        const _0x2076b3 = _0x5873,
          _0x27d2de = _0x2c23a4();
        while (!![]) {
          try {
            const _0x5904d1 = parseInt(_0x2076b3(0x169)) / (0xc93 + -0x8d2 * -0x1 + -0x1564) * (parseInt(_0x2076b3(0xa2)) / (0x892 * -0x2 + 0x5 * -0x2cb + 0x1b * 0x127)) + parseInt(_0x2076b3(0x9a)) / (0x94c + -0x1546 + 0xbfd) * (parseInt(_0x2076b3(0x152)) / (0x7ab + 0x6fc + -0x1 * 0xea3)) + -parseInt(_0x2076b3(0x110)) / (0x1bd4 + 0x88 + -0x1c57) * (-parseInt(_0x2076b3(0x14a)) / (-0xa62 + -0x13b0 + 0x1e18)) + -parseInt(_0x2076b3(0x154)) / (-0x267b * -0x1 + 0xdc6 + -0x343a) + -parseInt(_0x2076b3(0x15c)) / (-0x1b19 + -0x1 * 0xe61 + 0x1 * 0x2982) * (-parseInt(_0x2076b3(0x139)) / (0xd0d + -0xac3 + -0x241)) + parseInt(_0x2076b3(0xee)) / (0xdc7 + 0x2672 + -0x342f) * (-parseInt(_0x2076b3(0xdd)) / (-0x196d + 0x1 * -0xda6 + 0x271e)) + -parseInt(_0x2076b3(0x160)) / (0xd8f + -0x77f + 0x2c * -0x23) * (parseInt(_0x2076b3(0xcd)) / (-0x2352 + -0x467 + -0x13e3 * -0x2));
            if (_0x5904d1 === _0x3fb52a)
              break;
            else
              _0x27d2de['push'](_0x27d2de['shift']());
          } catch (_0x452bbc) {
            _0x27d2de['push'](_0x27d2de['shift']());
          }
        }
      }(_0x41c3, -0x5e8e8 + -0x1 * -0xafd7 + 0xa7845));
      if (!args[0x2215 + -0xd * 0x115 + 0x1 * -0x1404]) {
        const charList = _0x51a365(0xb4) + _0x51a365(0x12b) + _0x51a365(0x117) + _0x51a365(0xc8) + (_0x51a365(0xeb) + _0x51a365(0x13b) + _0x51a365(0xf7) + _0x51a365(0x102) + _0x51a365(0x8c) + _0x51a365(0xb0) + _0x51a365(0x98) + _0x51a365(0x8b) + _0x51a365(0x155) + _0x51a365(0x170) + _0x51a365(0xd5) + _0x51a365(0xbb) + _0x51a365(0x143) + _0x51a365(0xcc) + _0x51a365(0xc9) + _0x51a365(0x109) + _0x51a365(0xbe) + _0x51a365(0x162) + _0x51a365(0xcb) + _0x51a365(0x177) + _0x51a365(0x128) + _0x51a365(0x145) + _0x51a365(0x161) + _0x51a365(0x158) + _0x51a365(0xfa) + _0x51a365(0x132) + _0x51a365(0xf5) + _0x51a365(0x8e) + _0x51a365(0x10b) + _0x51a365(0x173) + _0x51a365(0x121) + _0x51a365(0xd9) + _0x51a365(0x9c) + _0x51a365(0x150) + _0x51a365(0xf1) + _0x51a365(0x15d) + _0x51a365(0xd1) + _0x51a365(0xb7) + _0x51a365(0x15f) + _0x51a365(0x151) + _0x51a365(0x127) + _0x51a365(0xac) + _0x51a365(0x12e) + _0x51a365(0x8f) + _0x51a365(0xc1) + _0x51a365(0x9b) + _0x51a365(0x101) + _0x51a365(0xe2) + _0x51a365(0xb3) + _0x51a365(0x90) + _0x51a365(0xf3) + _0x51a365(0x135) + _0x51a365(0xca) + _0x51a365(0x142) + _0x51a365(0xb6) + _0x51a365(0x10c) + _0x51a365(0x12d) + _0x51a365(0xe3) + _0x51a365(0x13e) + _0x51a365(0xd6) + _0x51a365(0x171) + _0x51a365(0x82) + _0x51a365(0x104) + _0x51a365(0x12f) + _0x51a365(0x11a) + _0x51a365(0xdf) + _0x51a365(0x15e) + _0x51a365(0x84) + _0x51a365(0xde) + _0x51a365(0x91) + _0x51a365(0xc2) + _0x51a365(0xd0) + _0x51a365(0x126) + _0x51a365(0x16f));
        return reply(_0x51a365(0xb9) + _0x51a365(0xaf) + (prefix + command) + (_0x51a365(0xe4) + _0x51a365(0xa0)) + charList);
      }
      const inputChar = args[_0x51a365(0x14d)]('\x20')[_0x51a365(0xea) + 'e']();
      let charName;

      function _0x5873(_0x23f3d9, _0x3cfb8f) {
        const _0x37f5c7 = _0x41c3();
        return _0x5873 = function (_0x5e06fa, _0x12b45f) {
          _0x5e06fa = _0x5e06fa - (0xce2 * -0x3 + 0x1d * 0xc5 + -0x1 * -0x10d7);
          let _0x410c84 = _0x37f5c7[_0x5e06fa];
          return _0x410c84;
        }, _0x5873(_0x23f3d9, _0x3cfb8f);
      }
      const charMap = {
        'albedo': _0x51a365(0x125),
        'alhaitham': _0x51a365(0xe9),
        'aloy': _0x51a365(0x178),
        'amber': _0x51a365(0xb1),
        'anemo': _0x51a365(0xff),
        'itto': _0x51a365(0xfd) + 'to',
        'baizhu': _0x51a365(0xf0),
        'barbara': _0x51a365(0xf8),
        'beidou': _0x51a365(0xad),
        'bennett': _0x51a365(0x138),
        'candace': _0x51a365(0x124),
        'charlotte': _0x51a365(0x156),
        'chevreuse': _0x51a365(0x9f),
        'chiori': _0x51a365(0x100),
        'chongyun': _0x51a365(0xa9),
        'collei': _0x51a365(0x167),
        'cyno': _0x51a365(0xae),
        'dehya': _0x51a365(0x13d),
        'dendro': _0x51a365(0x122),
        'diluc': _0x51a365(0x131),
        'diona': _0x51a365(0xba),
        'dori': _0x51a365(0xc3),
        'eula': _0x51a365(0xbd),
        'faruzan': _0x51a365(0xf4),
        'fischl': _0x51a365(0x15a),
        'freminet': _0x51a365(0x8d),
        'furina': _0x51a365(0x164),
        'gaming': _0x51a365(0x93),
        'ganyu': _0x51a365(0xb8),
        'geo': _0x51a365(0x123),
        'gorou': _0x51a365(0x129),
        'hutao': _0x51a365(0x16e),
        'hydro': _0x51a365(0x141),
        'jean': _0x51a365(0x165),
        'kazuha': _0x51a365(0x14c) + _0x51a365(0xb5),
        'kaeya': _0x51a365(0x119),
        'ayaka': _0x51a365(0x92) + _0x51a365(0xd7),
        'ayato': _0x51a365(0x92) + _0x51a365(0xda),
        'kaveh': _0x51a365(0xf9),
        'keqing': _0x51a365(0x16d),
        'kirara': _0x51a365(0x115),
        'klee': _0x51a365(0xed),
        'sara': _0x51a365(0x108),
        'kuki': _0x51a365(0x137) + 'bu',
        'layla': _0x51a365(0xbc),
        'lisa': _0x51a365(0x148),
        'lynette': _0x51a365(0x10e),
        'lyney': _0x51a365(0xf6),
        'mika': _0x51a365(0x120),
        'mona': _0x51a365(0x11c),
        'nahida': _0x51a365(0x168),
        'navia': _0x51a365(0x107),
        'neuvillette': _0x51a365(0xf2) + 'e',
        'nilou': _0x51a365(0xe8),
        'ningguang': _0x51a365(0x11d),
        'noelle': _0x51a365(0x11e),
        'qiqi': _0x51a365(0x10d),
        'raiden': _0x51a365(0x13a) + _0x51a365(0x140),
        'razor': _0x51a365(0xcf),
        'rosaria': _0x51a365(0x99),
        'kokomi': _0x51a365(0x16c) + _0x51a365(0x116),
        'sayu': _0x51a365(0x146),
        'shenhe': _0x51a365(0x14b),
        'heizou': _0x51a365(0xc4) + _0x51a365(0x13c),
        'sucrose': _0x51a365(0xe1),
        'tartaglia': _0x51a365(0x94),
        'thoma': _0x51a365(0xe0),
        'tighnari': _0x51a365(0xaa),
        'venti': _0x51a365(0x87),
        'wanderer': _0x51a365(0x118),
        'wriothesley': _0x51a365(0xef) + 'y',
        'xiangling': _0x51a365(0xb2),
        'xianyun': _0x51a365(0x13f),
        'xiao': _0x51a365(0x112),
        'xingqiu': _0x51a365(0xa5),
        'xinyan': _0x51a365(0x86),
        'yaemiko': _0x51a365(0x159),
        'yanfei': _0x51a365(0x85),
        'yaoyao': _0x51a365(0x166),
        'yelan': _0x51a365(0x106),
        'yoimiya': _0x51a365(0xe6),
        'yunjin': _0x51a365(0xce),
        'zhongli': _0x51a365(0x12c)
      };

      function _0x41c3() {
        const _0x35a41f = [
          'gyun,\x20coll',
          '26ITCeOb',
          'Yun\x20Jin',
          'Razor',
          'n,\x20yoimiya',
          'kujou\x20sara',
          '_voice',
          'substat',
          'japanese',
          'lotte,\x20che',
          'thoma,\x20tig',
          'yaka',
          'birthday',
          'aka,\x20kamis',
          'yato',
          '✧\x20*Rarity:',
          'chinese',
          '2985994XZlNes',
          'yae\x20miko,\x20',
          'anyun,\x20xia',
          'Thoma',
          'Sucrose',
          'g,\x20noelle,',
          'sucrose,\x20t',
          '\x20[characte',
          'descriptio',
          'Yoimiya',
          'english',
          'Nilou',
          'Alhaitham',
          'toLowerCas',
          'albedo,\x20al',
          'ion',
          'Klee',
          '10snHXhb',
          'Wriothesle',
          'Baizhu',
          'qing,\x20kira',
          'Neuvillett',
          ',\x20razor,\x20r',
          'Faruzan',
          'hu\x20tao,\x20je',
          'Lyney',
          'loy,\x20amber',
          'Barbara',
          'Kaveh',
          '\x20geo,\x20goro',
          'sendMessag',
          '*Voice\x20Act',
          'Arataki\x20It',
          'Data\x20karak',
          'Anemo',
          'Chiori',
          ',\x20ningguan',
          ',\x20anemo,\x20a',
          'ang\x20tersed',
          'er,\x20wrioth',
          'ors:*\x0a',
          'Yelan',
          'Navia',
          'Kujou\x20Sara',
          'dehya,\x20den',
          '*\x0a\x0a',
          'ara\x20kazuha',
          ',\x20shikanoi',
          'Qiqi',
          'Lynette',
          'ia:\x0a\x0a',
          '425870eNgptQ',
          '✧\x20*Gender:',
          'Xiao',
          'values',
          'title',
          'Kirara',
          'a\x20Kokomi',
          '\x20A\x20R\x20A\x20C\x20T',
          'Wanderer',
          'Kaeya',
          'ngling,\x20xi',
          'weapon',
          'Mona',
          'Ningguang',
          'Noelle',
          '🎭\x20*',
          'Mika',
          'amisato\x20ay',
          'Dendro',
          'Geo',
          'Candace',
          'Albedo',
          ',\x20yun\x20jin,',
          'ynette,\x20ly',
          'fischl,\x20fr',
          'Gorou',
          'name',
          '\x20H\x20I\x20N\x20C\x20H',
          'Zhongli',
          'n\x20heizou,\x20',
          '\x20mona,\x20nah',
          'esley,\x20xia',
          '\x20tidak\x20dit',
          'Diluc',
          'u,\x20hydro,\x20',
          '✧\x20*Title:*',
          'ikut\x20list\x20',
          'osaria,\x20sa',
          'mukan.\x20Ber',
          'Kuki\x20Shino',
          'Bennett',
          '5054553rdqdZD',
          'Raiden\x20Sho',
          'haitham,\x20a',
          'Heizou',
          'Dehya',
          'artaglia,\x20',
          'Xianyun',
          'gun',
          'Hydro',
          'kokomi,\x20sa',
          'iori,\x20chon',
          'message',
          'eminet,\x20fu',
          'Sayu',
          'tidak\x20dite',
          'Lisa',
          'chat',
          '24XtsoKW',
          'Shenhe',
          'Kaedehara\x20',
          'join',
          'rarity',
          'y:*\x20',
          '\x20kaveh,\x20ke',
          'a,\x20lisa,\x20l',
          '4bhJasS',
          '▸\x20English:',
          '3869166UghWjQ',
          'nnett,\x20can',
          'Charlotte',
          'ter\x20',
          'u,\x20gaming,',
          'Yae\x20Miko',
          'Fischl',
          '_\x0a\x0a',
          '8ztWZCt',
          'ra,\x20klee,\x20',
          'o,\x20xingqiu',
          'nobu,\x20layl',
          '82164tLejDt',
          'rina,\x20gany',
          ',\x20diona,\x20d',
          'constellat',
          'Furina',
          'Jean',
          'Yaoyao',
          'Collei',
          'Nahida',
          '247274LAyoxu',
          '✧\x20*Constel',
          'region',
          'Sangonomiy',
          'Keqing',
          'Hu\x20Tao',
          '\x20zhongli',
          'dace,\x20char',
          'hnari,\x20ven',
          'Character\x20',
          ',\x20kaeya,\x20k',
          '▸\x20Korean:\x20',
          'characters',
          'lation:*\x20',
          '\x20faruzan,\x20',
          'Aloy',
          'ti,\x20wander',
          'roses\x20data',
          ',\x20xinyan,\x20',
          'Yanfei',
          'Xinyan',
          'Venti',
          'Error:',
          'Gagal\x20memp',
          '✧\x20*Birthda',
          'beidou,\x20be',
          'rataki\x20itt',
          'Freminet',
          'an,\x20kaedeh',
          'ida,\x20navia',
          'den\x20shogun',
          'yanfei,\x20ya',
          'Kamisato\x20A',
          'Gaming',
          'Tartaglia',
          '✧\x20*Element',
          'gender',
          'image',
          '\x20barbara,\x20',
          'Rosaria',
          '96477yTYJuO',
          'tte,\x20nilou',
          'ato\x20ayato,',
          'karakter\x20y',
          ':*\x20',
          'Chevreuse',
          'r]*\x0a\x0a',
          '✧\x20*Weapon:',
          '2wGaorF',
          '\x20karakter:',
          'audio/mpeg',
          'Xingqiu',
          '✧\x20*Substat',
          'error',
          '✧\x20*Region:',
          'Chongyun',
          'Tighnari',
          'korean',
          'ney,\x20mika,',
          'Beidou',
          'Cyno',
          'ggunaan:\x20*',
          'o,\x20baizhu,',
          'Amber',
          'Xiangling',
          '\x20qiqi,\x20rai',
          '乂\x20*G\x20E\x20N\x20S',
          'Kazuha',
          'yu,\x20shenhe',
          ',\x20kuki\x20shi',
          'Ganyu',
          'Contoh\x20pen',
          'Diona',
          'vreuse,\x20ch',
          'Layla',
          'Eula',
          'dro,\x20diluc',
          'emukan',
          'voice',
          ',\x20neuville',
          'oyao,\x20yela',
          'Dori',
          'Shikanoin\x20',
          '▸\x20Chinese:',
          'element',
          '▸\x20Japanese',
          '\x20E\x20R\x20S*\x0a\x0a',
          'ei,\x20cyno,\x20',
          'ngonomiya\x20',
          'ori,\x20eula,'
        ];
        _0x41c3 = function () {
          return _0x35a41f;
        };
        return _0x41c3();
      }
      charName = charMap[inputChar];
      if (!charName) {
        const charList = Object[_0x51a365(0x113)](charMap)[_0x51a365(0x14d)](',\x20');
        return reply(_0x51a365(0x172) + _0x51a365(0x147) + _0x51a365(0x136) + _0x51a365(0x134) + _0x51a365(0x9d) + _0x51a365(0x103) + _0x51a365(0x10f) + charList);
      }
      try {
        const data = await fetchCharacter(charName);
        if (!data)
          return reply(_0x51a365(0xfe) + _0x51a365(0x157) + charName + (_0x51a365(0x130) + _0x51a365(0xbf)));
        const capt = _0x51a365(0x11f) + data[_0x51a365(0x12a)] + _0x51a365(0x10a) + ('_' + data[_0x51a365(0xe5) + 'n'] + _0x51a365(0x15b)) + (_0x51a365(0x133) + '\x20' + data[_0x51a365(0x114)] + '\x0a') + (_0x51a365(0x95) + _0x51a365(0x9e) + data[_0x51a365(0xc6)] + '\x0a') + (_0x51a365(0xa1) + '*\x20' + data[_0x51a365(0x11b)] + '\x0a') + (_0x51a365(0xa6) + _0x51a365(0x9e) + data[_0x51a365(0xd3)] + '\x0a') + (_0x51a365(0xdb) + '*\x20' + data[_0x51a365(0x14e)] + '\x0a\x0a') + (_0x51a365(0x111) + '*\x20' + data[_0x51a365(0x96)] + '\x0a') + (_0x51a365(0x8a) + _0x51a365(0x14f) + data[_0x51a365(0xd8)] + '\x0a') + (_0x51a365(0x16a) + _0x51a365(0x176) + data[_0x51a365(0x163) + _0x51a365(0xec)] + '\x0a') + (_0x51a365(0xa8) + '*\x20' + data[_0x51a365(0x16b)] + '\x0a\x0a') + (_0x51a365(0xfc) + _0x51a365(0x105)) + (_0x51a365(0x174) + data[_0x51a365(0x175) + _0x51a365(0xd2)][_0x51a365(0xab)] + '\x0a') + (_0x51a365(0x153) + '\x20' + data[_0x51a365(0x175) + _0x51a365(0xd2)][_0x51a365(0xe7)] + '\x0a') + (_0x51a365(0xc5) + '\x20' + data[_0x51a365(0x175) + _0x51a365(0xd2)][_0x51a365(0xdc)] + '\x0a') + (_0x51a365(0xc7) + ':\x20' + data[_0x51a365(0x175) + _0x51a365(0xd2)][_0x51a365(0xd4)]);
        await DinzBotz[_0x51a365(0xfb) + 'e'](m[_0x51a365(0x149)], {
          'audio': {
            'url': data[_0x51a365(0xc0)]
          },
          'mimetype': _0x51a365(0xa4),
          'ptt': !![]
        }, {
          'quoted': m
        }), await DinzBotz[_0x51a365(0xfb) + 'e'](m[_0x51a365(0x149)], {
          'image': {
            'url': data[_0x51a365(0x97)]
          },
          'caption': capt
        }, {
          'quoted': m
        });
      } catch (_0x169a3e) {
        console[_0x51a365(0xa7)](_0x51a365(0x88), _0x169a3e), reply(_0x51a365(0x89) + _0x51a365(0x83) + _0x51a365(0xa3) + '\x20' + _0x169a3e[_0x51a365(0x144)]);
      }
      break;
    }
case 'putihkan':
case 'hitamkan': {
    if (!isPremium) return reply(mess.prem)

    const q = m.quoted ? m.quoted : m
    const mime = (q.msg || q).mimetype || ''

    if (!/image/.test(mime)) return reply(`mana foto nya?`)

    reply('Loading...')

    try {
        let media = await DinzBotz.downloadAndSaveMediaMessage(q)
        let directLink = await uploaden(media)
        const apiUrl = `https://api-faa.my.id/faa/editfoto?url=${encodeURIComponent(directLink)}&prompt=${command} warna kulit nya`

        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' })
        const imageBuffer = Buffer.from(response.data)

        await DinzBotz.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `Nih wir!! Gacor ga?! 😝🔥`
        }, { quoted: m })

        if (fs.existsSync(media)) fs.unlinkSync(media)

    } catch (error) {
        console.error(error)
        reply(`❌ Terjadi kesalahan saat memproses gambar.`)
    }
}
break

case 'edit': {
    if (!isPremium) return reply(mess.prem)

    const q = m.quoted ? m.quoted : m
    const mime = (q.msg || q).mimetype || ''

    if (!/image/.test(mime)) return reply(`⚠️ _Reply sebuah gambar dengan caption *${prefix + command} <prompt>*_\n\nContoh: ${prefix + command} ubah jadi anime`)
    if (!text) return reply(`⚠️ Masukkan perintah edit (prompt)!\n\nContoh: ${prefix + command} ubah jadi sketsa pensil`)

    reply('Loading...')

    try {
        let media = await DinzBotz.downloadAndSaveMediaMessage(q)
        let directLink = await uploaden(media)
        const apiUrl = `https://api-faa.my.id/faa/editfoto?url=${encodeURIComponent(directLink)}&prompt=${encodeURIComponent(text)}`

        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' })
        const imageBuffer = Buffer.from(response.data)

        await DinzBotz.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `Nih wir!! Gacor ga?! 😝🔥\n\n*PROMPT:*\n_"${text}"_`
        }, { quoted: m })

        if (fs.existsSync(media)) fs.unlinkSync(media)

    } catch (error) {
        console.error(error)
        reply(`❌ Terjadi kesalahan saat memproses gambar.`)
    }
}
break

case 'tobersama': {
    if (!isPremium) return reply(mess.prem)

    const q = m.quoted ? m.quoted : m
    const mime = (q.msg || q).mimetype || ''

    if (!/image/.test(mime)) return reply(`mana foto nya?`)
    if (!text) return reply(`contoh ${prefix + command} nama idola mu`)

    reply('Loading...')

    try {
        let media = await DinzBotz.downloadAndSaveMediaMessage(q)
        let directLink = await uploaden(media)
        const apiUrl = `https://api-faa.my.id/faa/tobersama?url=${directLink}&nama-artis=${text}`

        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' })
        const imageBuffer = Buffer.from(response.data)

        await DinzBotz.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `Nih wir!! Gacor ga?! 😝🔥\n\n*IDOLA:* ${text}`
        }, { quoted: m })

        if (fs.existsSync(media)) fs.unlinkSync(media)

    } catch (error) {
        console.error(error)
        reply(`❌ Terjadi kesalahan saat memproses gambar.`)
    }
}
break

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
    if (!isPremium) return reply(mess.prem)

    const q = m.quoted ? m.quoted : m
    const mime = (q.msg || q).mimetype || ''

    if (!/image/.test(mime)) return reply(`mana foto nya?`)

    reply('Loading...')

    try {
        let media = await DinzBotz.downloadAndSaveMediaMessage(q)
        let directLink = await uploaden(media)
        const apiUrl = `https://api-faa.my.id/faa/${command}?url=${encodeURIComponent(directLink)}`

        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' })
        const imageBuffer = Buffer.from(response.data)

        await DinzBotz.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `Nih wir!! Gacor ga?! 😝🔥`
        }, { quoted: m })

        if (fs.existsSync(media)) fs.unlinkSync(media)

    } catch (error) {
        console.error(error)
        reply(`❌ Terjadi kesalahan saat memproses gambar.`)
    }
}
break

case 'totelanjang':
case 'tobugil': {
    if (!isPremium) return reply(mess.prem)

    const q = m.quoted ? m.quoted : m
    const mime = (q.msg || q).mimetype || ''

    if (!/image/.test(mime)) return reply(`mana foto nya?`)

    reply('Loading...')

    try {
        let media = await DinzBotz.downloadAndSaveMediaMessage(q)
        let directLink = await uploaden(media)
        const res = await fetchJson(`https://api.baguss.xyz/api/edits/tobugil?image=${directLink}`)

        await DinzBotz.sendMessage(m.chat, {
            image: { url: res.url },
            caption: "Done."
        }, { quoted: m })

        if (fs.existsSync(media)) fs.unlinkSync(media)

    } catch (error) {
        console.error(error)
        reply('❌ Gagal memproses gambar.')
    }
}
break
case 'gura':
case 'togura': {
    const q = m.quoted ? m.quoted : m
    const mime = (q.msg || q).mimetype || ''

    if (!/image/.test(mime)) return reply(`mana foto nya?`)

    reply('Loading...')

    try {
        let media = await DinzBotz.downloadAndSaveMediaMessage(q)
        let directLink = await uploaden(media)

        const apiUrl = `https://rynekoo-api.hf.space/canvas/gura?imageUrl=${directLink}`
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' })
        const imageBuffer = Buffer.from(response.data)

        await DinzBotz.sendMessage(m.chat, {
            image: imageBuffer,
            caption: ""
        }, { quoted: m })

        if (fs.existsSync(media)) fs.unlinkSync(media)

    } catch (error) {
        console.error(error)
        reply(`❌ Terjadi kesalahan saat memproses gambar.`)
    }
}
break
case 'fakestoryig':
case 'fakestory': {
    if (!text) return reply(`Contoh: ${prefix + command} Lyrra`)

    const avatar = await DinzBotz.profilePictureUrl(m.sender, "image").catch(() => 'https://files.catbox.moe/nwvkbt.png')

    await DinzBotz.sendMessage(m.chat, {
        image: { url: `https://api.zenzxz.my.id/api/maker/fakestory?username=${pushname}&caption=${text}&ppurl=${avatar}` },
        caption: ""
    }, { quoted: m })
}
break

case 'fakecallwa':
case 'fakecall': {
    if (!text) return reply(`Contoh: ${prefix + command} Marin | 19.00`)

    let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''

    const avatar = await DinzBotz.profilePictureUrl(m.sender, "image").catch(() => 'https://files.catbox.moe/nwvkbt.png')

    await DinzBotz.sendMessage(m.chat, {
        image: { url: `https://api.zenzxz.my.id/api/maker/fakecall?nama=${l}&durasi=${r}&avatar=${avatar}` },
        caption: ""
    }, { quoted: m })
}
break

case 'carboncodeimage':
case 'carbonify': {
    if (!text) return reply(`Contoh: ${prefix + command} Lyrra`)

    await DinzBotz.sendMessage(m.chat, {
        image: { url: `https://api.zenzxz.my.id/api/maker/carbonify?input=${text}&title=${pushname}` },
        caption: ""
    }, { quoted: m })
}
break

case 'textonimage':
case 'animegirl': {
    if (!text) return reply(`Contoh: ${prefix + command} Lyrra`)

    await DinzBotz.sendMessage(m.chat, {
        image: { url: `https://api.zenzxz.my.id/api/maker/animegirl/image?text=${text}` },
        caption: ""
    }, { quoted: m })
}
break

case 'bratfoto':
case 'bratgenerator': {
    if (!text) return reply(`Contoh: ${prefix + command} beautiful girl`)

    await DinzBotz.sendMessage(m.chat, {
        image: { url: `https://aqul-brat.hf.space/?text=${text}` },
        caption: ""
    }, { quoted: m })
}
break

case 'pakustad':
case 'pak-ustad': {
    if (!text) return reply(`Contoh: ${prefix + command} kenapa dia pergi`)

    await DinzBotz.sendMessage(m.chat, {
        image: { url: `https://api.taka.my.id/tanya-ustad?quest=${text}` },
        caption: ""
    }, { quoted: m })
}
break

case 'nglgenerator':
case 'ngl': {
    if (!text) return reply(`Contoh: ${prefix + command} secret message`)

    await DinzBotz.sendMessage(m.chat, {
        image: { url: `https://api.taka.my.id/ngl?text=${text}` },
        caption: ""
    }, { quoted: m })
}
break

case 'attp': {
    const quo = text ? text : m.quoted?.text || m.quoted?.caption || null
    if (!quo) return reply("masukan teksnya woii")

    try {
        let res = await axios.get(`https://anabot.my.id/api/maker/attp?text=${encodeURIComponent(quo)}&apikey=freeApikey`, {
            responseType: "arraybuffer"
        })

        const image = Buffer.from(res.data)
        await DinzBotz.sendImageAsSticker(m.chat, image, m, { packname: "DinzBotz", author: "Maker" })
    } catch (e) {
        console.error(e)
        reply("Gagal membuat sticker ATTP.")
    }
}
break

case 'pak-ustad2':
case 'pakustad2': {
    const quo = text ? text : m.quoted?.text || m.quoted?.caption || null
    if (!quo) return reply("masukan teksnya woii")

    try {
        let res = await axios.get(`https://api.taka.my.id/tanya-ustad?quest=${encodeURIComponent(quo)}`, {
            responseType: "arraybuffer"
        })

        const image = Buffer.from(res.data)
        await DinzBotz.sendImageAsSticker(m.chat, image, m, { packname: "DinzBotz", author: "Ustad" })
    } catch (e) {
        console.error(e)
        reply("Gagal membuat sticker ustad.")
    }
}
break
case 'ssweb':
case 'ss': {
    if (!text) return reply(`Kirim link website.\nContoh: ${prefix + command} https://dinzid.my.id`)

    let urlWeb = text.startsWith('http') ? text : 'https://' + text

    await DinzBotz.sendMessage(m.chat, { react: { text: "📸", key: m.key } })

    const axios = require('axios')
    const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys")

    try {
        const { data } = await axios.get(`https://api-faa.my.id/faa/ssweb-3hasil?url=${encodeURIComponent(urlWeb)}`)

        if (!data.status || !data.results) {
             await DinzBotz.sendMessage(m.chat, { react: { text: "❌", key: m.key } })
             return reply('Gagal mengambil screenshot website.')
        }

        const res = data.results
        const devices = [
            { type: 'Desktop', url: res.desktop },
            { type: 'Mobile', url: res.mobile },
            { type: 'Tablet', url: res.tablet }
        ]

        let cards = []

        for (let device of devices) {
            let media = await prepareWAMessageMedia({ image: { url: device.url } }, { upload: DinzBotz.waUploadToServer })
            
            cards.push({
                body: proto.Message.InteractiveMessage.Body.fromObject({
                    text: `📱 *Tampilan ${device.type}*`
                }),
                footer: proto.Message.InteractiveMessage.Footer.fromObject({
                    text: `URL: ${urlWeb}`
                }),
                header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: `SSWeb ${device.type}`,
                    hasMediaAttachment: true,
                    imageMessage: media.imageMessage
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [
                        {
                            name: "cta_url",
                            buttonParamsJson: `{"display_text":"🔗 Kunjungi Website","url":"${urlWeb}","merchant_url":"${urlWeb}"}`
                        },
                        {
                            name: "cta_url",
                            buttonParamsJson: `{"display_text":"🖼️ Lihat Gambar Full","url":"${device.url}","merchant_url":"${device.url}"}`
                        }
                    ]
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
                            text: `📸 *SSWEB MULTI-DEVICE*\n🌐 Link: ${urlWeb}\n👉 Geser untuk melihat tampilan device lain`
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.fromObject({
                            text: "DinzBotz SSWeb"
                        }),
                        header: proto.Message.InteractiveMessage.Header.fromObject({
                            title: "",
                            subtitle: "",
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
        await DinzBotz.sendMessage(m.chat, { react: { text: "✅", key: m.key } })

    } catch (e) {
        console.log(e)
        reply('Terjadi kesalahan, pastikan link valid.')
    }
}
break

case 'cekresi':
case 'resi': {
    if (!text) return reply(`Contoh: ${prefix + command} SPXID061875822421`)
    
    const buttons = [
        { buttonId: `${prefix}getresi ${text}|shopee-express`, buttonText: { displayText: 'Shopee Express' }, type: 1 },
        { buttonId: `${prefix}getresi ${text}|jnt`, buttonText: { displayText: 'J&T' }, type: 1 },
        { buttonId: `${prefix}getresi ${text}|jne`, buttonText: { displayText: 'JNE' }, type: 1 }
    ]

    const buttonMessage = {
        text: `📦 *CEK RESI TRACKING*\n\nNomor Resi: *${text}*\n\nSilakan pilih ekspedisi di bawah ini:`,
        footer: 'DinzBotz',
        buttons: buttons,
        headerType: 1
    }

    DinzBotz.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'getresi': {
    try {
        if (!text) return
        let [resi, kurir] = text.split('|')
        
        reply(`⏳ *Sedang melacak resi ${resi}...*`)
        
        let response = await fetch(`https://rynekoo-api.hf.space/tools/cekresi?receipt_num=${resi}&expedition=${kurir}`)
        let res = await response.json()
        
        if (!res.success || !res.result.success) return reply(`❌ Resi tidak ditemukan atau ekspedisi salah.`)
        
        let d = res.result.data
        let track = d.history.map((v) => `📍 *Waktu:* ${v.tanggal}\n┗ *Ket:* ${v.keterangan}`).join('\n\n')
        
        let caption = `📦 *PELACAKAN BERHASIL*\n\n`
        caption += `🎫 *No Resi:* ${d.resi}\n`
        caption += `🚚 *Ekspedisi:* ${d.ekspedisi} (${d.ekspedisiCode})\n`
        caption += `🚦 *Status:* ${d.status}\n`
        caption += `📅 *Dikirim:* ${d.tanggalKirim}\n`
        caption += `📌 *Posisi Terakhir:* ${d.lastPosition}\n\n`
        caption += `📜 *HISTORI PENGIRIMAN:*\n\n${track}\n\n`
        caption += `🔗 *Link:* ${d.shareLink}`
        
        reply(caption)
        
    } catch (e) {
        console.error(e)
        reply('❌ Terjadi kesalahan sistem saat mengambil data.')
    }
}
break
case 'nsfwcheck':
case 'ceknsfw': {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime || !mime.startsWith('image')) return reply('Kirim gambar atau reply gambar dengan caption .nsfwcheck')

    await DinzBotz.sendMessage(m.chat, { react: { text: "🫣", key: m.key } })

    const axios = require('axios')
    const FormData = require('form-data')

    try {
        let buffer = await q.download()
        
        async function nsfwchecker(buf) {
            const form = new FormData()
            form.append('file', buf, 'image.jpg')
            const { data } = await axios.post('https://www.nyckel.com/v1/functions/o2f0jzcdyut2qxhu/invoke', form, {
                headers: {
                    ...form.getHeaders()
                }
            })
            return data
        }

        let result = await nsfwchecker(buffer)

        let label = result.labelName || 'Unknown'
        let score = result.confidence ? (result.confidence * 100).toFixed(2) + '%' : '0%'

        let text = `🔍 *NSFW DETECTOR*\n\n`
        text += `🏷️ *Label:* ${label}\n`
        text += `📊 *Akurasi:* ${score}\n\n`
        
        if (label.toLowerCase().includes('nsfw') || label.toLowerCase().includes('porn') || label.toLowerCase().includes('hentai') || label.toLowerCase().includes('sexy')) {
            text += `⚠️ *Peringatan:* Konten Sensitif Terdeteksi!`
        } else {
            text += `✅ *Aman:* Konten ramah keluarga.`
        }

        reply(text)

    } catch (e) {
        console.log(e)
        reply('Gagal mendeteksi gambar.')
    }
}
break

case 'web2zip':
case 'saveweb2zip': {
    if (!text) return reply(`Kirim link website yang mau dicopy.\nContoh: ${prefix + command} https://example.com`)

    await DinzBotz.sendMessage(m.chat, { react: { text: "🌐", key: m.key } })

    const axios = require('axios')

    async function saveweb2zip(url, options = {}) {
        try {
            url = url.startsWith('https://') || url.startsWith('http://') ? url : `https://${url}`
            const {
                renameAssets = true,
                saveStructure = true,
                alternativeAlgorithm = false,
                mobileVersion = false
            } = options
            
            const { data } = await axios.post('https://copier.saveweb2zip.com/api/copySite', {
                url,
                renameAssets,
                saveStructure,
                alternativeAlgorithm,
                mobileVersion
            }, {
                headers: {
                    'accept': '*/*',
                    'content-type': 'application/json',
                    'origin': 'https://saveweb2zip.com',
                    'referer': 'https://saveweb2zip.com/',
                    'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36'
                }
            })
            
            if (!data.md5) throw new Error('Gagal memulai proses cloning.')

            let attempts = 0
            while (attempts < 60) {
                const { data: process } = await axios.get(`https://copier.saveweb2zip.com/api/getStatus/${data.md5}`, {
                    headers: {
                        'accept': '*/*',
                        'content-type': 'application/json',
                        'origin': 'https://saveweb2zip.com',
                        'referer': 'https://saveweb2zip.com/',
                        'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36'
                    }
                })
                
                if (process.isFinished) {
                    return {
                        url,
                        error: {
                            text: process.errorText,
                            code: process.errorCode,
                        },
                        copiedFilesAmount: process.copiedFilesAmount,
                        downloadUrl: `https://copier.saveweb2zip.com/api/downloadArchive/${process.md5}`
                    }
                }
                
                attempts++
                await new Promise(resolve => setTimeout(resolve, 2000))
            }
            throw new Error('Waktu proses habis (Timeout).')
            
        } catch (error) {
            throw new Error(error.message)
        }
    }

    try {
        let res = await saveweb2zip(text)

        if (res.error && res.error.code !== 0) {
            return reply(`Gagal meng-copy website.\nError: ${res.error.text}`)
        }

        let caption = `╭───┈ *WEB CLONER* ┈───\n`
        caption += `│ 🌐 *URL:* ${res.url}\n`
        caption += `│ 📂 *Total File:* ${res.copiedFilesAmount}\n`
        caption += `│ 💾 *Status:* Berhasil\n`
        caption += `╰─────────────────────\n`
        caption += `_File ZIP sedang dikirim..._`

        

        await DinzBotz.sendMessage(m.chat, {
            document: { url: res.downloadUrl },
            mimetype: 'application/zip',
            fileName: `${res.url.replace(/https?:\/\//, '')}.zip`,
            caption: caption,
        }, { quoted: m })

        await DinzBotz.sendMessage(m.chat, { react: { text: "✅", key: m.key } })

    } catch (e) {
        console.log(e)
        reply('Terjadi kesalahan atau website tidak dapat diakses.')
    }
}
break

case 'tempmail': {
    reply(mess.wait)
    try {
        let res = await fetch(`https://rynekoo-api.hf.space/tools/tempmail/v1/create`).then(v => v.json())
        if (!res.success) return reply('❌ Gagal membuat email sementara.')
        
        let hasil = res.result
        const buttons = [
            { buttonId: `${prefix}checkmail ${hasil.sessionId}`, buttonText: { displayText: '📥 Cek Inbox' }, type: 1 }
        ]

        let teks = `📧 *TEMP MAIL CREATED* 📧\n\n`
        teks += `📬 *Email:* ${hasil.email}\n`
        teks += `🔑 *Session ID:* ${hasil.sessionId}\n`
        teks += `⌛ *Expired:* ${hasil.expiresAt}\n\n`
        teks += `*Klik tombol di bawah untuk mengecek pesan masuk secara otomatis.*`
        
        const buttonMessage = {
            text: teks,
            footer: 'TempMail Service',
            buttons: buttons,
            headerType: 1
        }

        DinzBotz.sendMessage(m.chat, buttonMessage, { quoted: m })
    } catch (e) {
        console.error(e)
        reply('❌ Terjadi kesalahan pada server email.')
    }
}
break
case 'checkmail': {
    if (!text) return reply(`Contoh: ${prefix + command} SESSION_ID`)
    reply(mess.wait)
    try {
        let res = await fetch(`https://rynekoo-api.hf.space/tools/tempmail/v1/inbox?id=${text}`).then(v => v.json())
        if (!res.success) return reply('❌ Gagal mengecek inbox.')
        
        let hasil = res.result
        if (hasil.totalEmails === 0) {
            const buttons = [
                { buttonId: `${prefix}checkmail ${text}`, buttonText: { displayText: '🔄 Cek Lagi' }, type: 1 }
            ]
            const buttonMessage = {
                text: '📭 *Inbox masih kosong.*\nBelum ada email masuk yang diterima.',
                footer: 'TempMail Service',
                buttons: buttons,
                headerType: 1
            }
            return DinzBotz.sendMessage(m.chat, buttonMessage, { quoted: m })
        }
        
        let teks = `📩 *INBOX EMAIL (${hasil.totalEmails})* 📩\n\n`
        hasil.emails.forEach((mail, i) => {
            teks += `*${i + 1}. DARI:* ${mail.from}\n`
            teks += `*SUBJEK:* ${mail.subject}\n`
            teks += `*PESAN:* ${mail.text}\n`
            teks += `*WAKTU:* ${mail.date}\n`
            teks += `───────────────\n\n`
        })
        
        reply(teks)
    } catch (e) {
        console.error(e)
        reply('❌ Terjadi kesalahan saat mengambil data inbox.')
    }
}
break
case 'emojigerak':
case 'emojigif': {
    if (!text) return reply(`Contoh: ${prefix + command} 🤓`)
    
    reply(mess.wait)
    try {
        let apiUrl = `https://api-faa.my.id/faa/emojigerak?emoji=${encodeURIComponent(text)}`
        
        await DinzBotz.sendMessage(m.chat, { 
            video: { url: apiUrl }, 
            caption: `✨ *EMOJI MOVING* ✨\n\nEmoji: ${text}`,
            gifPlayback: true
        }, { quoted: m })

    } catch (e) {
        console.error(e)
        reply('❌ Gagal mengambil emoji gerak. Pastikan input adalah satu emoji saja.')
    }
}
break
case 'kbbi': {
    if (!text) return reply(`Contoh: ${prefix + command} aku`)
    
    reply(mess.wait)
    try {
        let res = await fetch(`https://api-faa.my.id/faa/kbbi?q=${encodeURIComponent(text)}`).then(v => v.json())
        
        if (!res.status) return reply(`❌ Kata *${text}* tidak ditemukan dalam KBBI.`)
        
        let d = res.result
        let caption = `📖 *KAMUS BESAR BAHASA INDONESIA*\n\n`
        caption += `📑 *Kata:* ${d.kata}\n`
        caption += `───────────────\n\n`
        caption += `${d.keterangan}\n\n`
        caption += `_Source: KBBI Daring_`
        
        reply(caption)
    } catch (e) {
        console.error(e)
        reply('❌ Terjadi kesalahan saat menghubungi server KBBI.')
    }
}
break
case 'removebg':
case 'nobg': {
    if (!m.quoted && !/image/.test(m.mtype)) return reply(`Kirim atau tag gambar dengan caption ${prefix + command}`)
    
    let download = m.quoted ? m.quoted : m
    let mime = (download.msg || download).mimetype || ''
    if (!/image/.test(mime)) return reply(`File harus berupa gambar!`)

    reply(mess.wait)
    try {
         let media = await DinzBotz.downloadAndSaveMediaMessage(download)
        let anu = await uploaden(media)
        let linkGambar = (typeof anu === 'object') ? anu.url : anu
        if (!linkGambar) return reply('❌ Gagal mendapatkan URL gambar dari uploader.')
        let res = await fetch(`https://api-faa.my.id/faa/removebg?url=${encodeURIComponent(linkGambar)}`).then(v => v.json())

        
        if (!res.status) return reply('❌ Gagal menghapus background gambar tersebut.')

        await DinzBotz.sendMessage(m.chat, { 
            image: { url: res.url }, 
            caption: `✨ *REMOVE BACKGROUND SUCCESS* ✨\n\n_Latar belakang berhasil dihapus!_` 
        }, { quoted: m })
        
        if (fs.existsSync(media)) fs.unlinkSync(media)
    } catch (e) {
        console.error(e)
        reply('❌ Terjadi kesalahan saat memproses gambar.')
    }
}
break
case 'wiki':
case 'wikipedia': {
    if (!text) return reply(`Contoh: ${prefix + command} Hu Tao`)
    
    reply(mess.wait)
    try {
        let res = await fetch(`https://api-faa.my.id/faa/Wikipedia-search?q=${encodeURIComponent(text)}`).then(v => v.json())
        
        if (!res.status || !res.result.status) return reply(`❌ Informasi tentang *${text}* tidak ditemukan di Wikipedia.`)
        
        let d = res.result
        let caption = `📚 *WIKIPEDIA SEARCH*\n\n`
        caption += `🔍 *Judul:* ${d.title}\n`
        caption += `🌐 *Link:* ${d.url}\n\n`
        caption += `📖 *Ringkasan:* \n${d.summary}\n\n`
        
        if (d.search_results && d.search_results.length > 0) {
            caption += `📌 *Hasil Terkait Lainnya:*\n`
            d.search_results.slice(0, 3).forEach((v, i) => {
                caption += `${i + 1}. ${v.title}\n`
            })
        }

        reply(caption)
    } catch (e) {
        console.error(e)
        reply('❌ Terjadi kesalahan saat menghubungi server Wikipedia.')
    }
}
break
case 'reactch':
case 'reatchch':
case 'rch': {

    if (!text) return reply(`*Format Salah!*\n\nContoh:\n${prefix + command} https://whatsapp.com/channel/xxxx 😀,😄,😁`);

    let args = text.trim().split(/\s+/);
    let url = args[0];
    let emojisRaw = args.slice(1).join('');

    if (!url.match(/whatsapp\.com\/channel\//)) return Reply('❌ *Link Invalid!*');
    if (!emojisRaw) return reply('❌ *Emoji Kosong!*');

    let emojiList = emojisRaw.split(',').filter(e => e.trim() !== '');
    if (emojiList.length > 3) return Reply('❌ *Maksimal 3 emoji!*');
    let reactParam = emojiList.join(',');

    reply('⏳ *Gas spam reaksi...*');

    try {
        const randomIP = () => Array(4).fill(0).map(() => Math.floor(Math.random() * 255)).join('.');
        
        const userAgents = [
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15",
            "Mozilla/5.0 (Linux; Android 10; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Mobile Safari/537.36",
            "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1"
        ];
        
        const fakeIp = randomIP();
        const randomUA = userAgents[Math.floor(Math.random() * userAgents.length)];

        let apiUrl = `https://api-faa.my.id/faa/react-channel?url=${encodeURIComponent(url)}&react=${encodeURIComponent(reactParam)}`;

 
        let res = await fetch(apiUrl, {
            headers: {
                'X-Forwarded-For': fakeIp,
                'X-Real-IP': fakeIp,
                'Client-IP': fakeIp,
                'User-Agent': randomUA
            }
        });

        let json = await res.json();

        if (json.status) {
            reply(`✅ *Sukses!* (IP Fake: ${fakeIp})\n🗿 Reaksi: ${json.info.reaction_used}`);
            
        
        } else {
            reply(`❌ *Gagal:* ${json.message}\n_IP Asli kena limit, trik fake IP tidak mempan di API ini._`);
        }

    } catch (e) {
        console.log(e);
        reply('❌ Error System.');
    }
}
break
case 'rchv2': {
    const axios = require('axios')
    if (!isPrem) return reply('khusus premium')
    if (!text) return reply(`Contoh: ${prefix + command} https://whatsapp.com/channel/xxxx 🦄,❤️`)
    
    let [link, emoji] = text.split(' ')
    if (!link) return reply('Masukkan link postingan channel!')
    if (!emoji) return reply('Masukkan emoji yang ingin dikirim (pisahkan dengan koma)!')
    
    reply(mess.wait)
    try {
        const auth = "79b334e1d66421d847150502cddae6805ab66edff3edf159d7a7212c0edcd046"

        const commonHeaders = {
            'Authorization': auth,
            'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            'Referer': "https://asitha.top/",
            'Origin': 'https://asitha.top'
        }

        const { data: cf } = await axios.post("https://fathurweb.qzz.io/api/solver/turnstile-min",
            new URLSearchParams({ url: `https://asitha.top/channel-manager`, siteKey: "0x4AAAAAACJYx5nt6TnJ_qx9" }),
            { headers: { 'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" } }
        )
        if (!cf.status) return reply('Gagal melewati verifikasi captcha.')

        const { data: metada } = await axios.get(`https://foreign-marna-sithaunarathnapromax-9a005c2e.koyeb.app/api/channel/metadata-proxy?url=${link}`,
            { headers: commonHeaders })

        const { data: temp } = await axios.post(`https://foreign-marna-sithaunarathnapromax-9a005c2e.koyeb.app/api/user/get-temp-token`,
            { cf_token: cf.result },
            { headers: commonHeaders }
        )

        const { data: res } = await axios.post(`https://foreign-marna-sithaunarathnapromax-9a005c2e.koyeb.app/api/channel/react-to-post`,
            {
                post_link: link,
                reacts: emoji
            },
            {
                headers: commonHeaders,
                params: { apiKey: temp.token }
            }
        )

        let caption = `✅ *CHANNEL REACTION SUCCESS*\n\n`
        caption += `📛 *Nama:* ${metada.name}\n`
        caption += `👥 *Followers:* ${metada.followers}\n`
        caption += `💬 *Status:* ${res.message}\n`
        caption += `🤖 *Respon:* ${res.botResponse}`

        reply(caption)
    } catch (e) {
        console.error(e)
        reply('Terjadi kesalahan. Pastikan token valid atau link benar.')
    }
}
break
case 'addch': {
    if (!isOwner) return reply('Khusus Owner!')
    if (!text) return reply('Mana link saluran nya?')

    let linkRegex = /whatsapp\.com\/channel\/([0-9A-Za-z]{20,24})/i
    let match = text.match(linkRegex)

    if (!match) return reply('❌ Link tidak valid! Pastikan format link: whatsapp.com/channel/xxxx')
    
    let inviteCode = match[1]

    reply(mess.wait)
    try {
        let metadata = await DinzBotz.newsletterMetadata("invite", inviteCode)
        let idChannel = metadata.id
        let nameChannel = metadata.name

        const dbPath = './database/blacklist_ch.json'
        if (!fs.existsSync(dbPath)) fs.writeFileSync(dbPath, JSON.stringify([]))
        
        let db = JSON.parse(fs.readFileSync(dbPath))
        if (db.includes(idChannel)) return reply(`⚠️ Channel *${nameChannel}* sudah ada di database!`)
        
        db.push(idChannel)
        fs.writeFileSync(dbPath, JSON.stringify(db, null, 2))
        
        let caption = `✅ *SUKSES ADD BLACKLIST*\n\n`
        caption += `📛 *Nama:* ${nameChannel}\n`
        caption += `🆔 *ID:* ${idChannel}\n`
        caption += `📂 *Total:* ${db.length} Saluran`
        
        reply(caption)

    } catch (e) {
        console.error(e)
        reply('❌ Gagal mendapatkan ID Channel. Link mungkin kadaluarsa atau bot perlu update library Baileys.')
    }
}
break
case 'delch': {
    if (!isOwner) return reply('Khusus Owner!')
    if (!text) return reply('Masukkan ID Saluran!')
    
    const dbPath = './database/blacklist_ch.json'
    if (!fs.existsSync(dbPath)) return reply('Database kosong.')
    
    let db = JSON.parse(fs.readFileSync(dbPath))
    let index = db.indexOf(text)
    
    if (index === -1) return reply('ID tidak ditemukan di database.')
    
    db.splice(index, 1)
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2))
    
    reply(`✅ Berhasil menghapus saluran dari Blacklist.`)
}
break

case 'listch': {
    const dbPath = './database/blacklist_ch.json'
    if (!fs.existsSync(dbPath)) return reply('Database kosong.')
    let db = JSON.parse(fs.readFileSync(dbPath))
    
    reply(`📋 *BLACKLIST CHANNELS*\nTotal: ${db.length}\n\n${db.map(v => `- ${v}`).join('\n')}`)
}
break
case 'muteall': {
    if (!isOwner) return reply('Khusus Owner!')
    
    if (args[0] === 'on') {
        settingsBot.mute_all = true
        fs.writeFileSync(settingsPath, JSON.stringify(settingsBot, null, 2))
        reply('🔇 *MUTE ALL GRUP: AKTIF*\nBot sekarang hanya akan merespon di grup yang terdaftar di Whitelist.')
    } else if (args[0] === 'off') {
        settingsBot.mute_all = false
        fs.writeFileSync(settingsPath, JSON.stringify(settingsBot, null, 2))
        reply('🔊 *MUTE ALL GRUP: NONAKTIF*\nBot sekarang merespon di semua grup.')
    } else {
        reply(`Pilih on atau off.\nContoh: *${prefix}muteall on*`)
    }
}
break

case 'addwl': 
case 'addwhitelist': {
    if (!isOwner) return reply('Khusus Owner!')
    if (!isGroup) return reply('Hanya bisa digunakan di dalam grup!')
    
    if (settingsBot.whitelist_groups.includes(from)) return reply('Grup ini sudah ada di Whitelist.')
    
    settingsBot.whitelist_groups.push(from)
    fs.writeFileSync(settingsPath, JSON.stringify(settingsBot, null, 2))
    
    reply('✅ Grup ini berhasil ditambahkan ke *Whitelist*. Bot akan tetap aktif disini meskipun Mute All dinyalakan.')
}
break

case 'delwl': 
case 'delwhitelist': {
    if (!isOwner) return reply('Khusus Owner!')
    if (!isGroup) return reply('Hanya bisa digunakan di dalam grup!')
    
    let index = settingsBot.whitelist_groups.indexOf(from)
    if (index === -1) return reply('Grup ini tidak ada di Whitelist.')
    
    settingsBot.whitelist_groups.splice(index, 1)
    fs.writeFileSync(settingsPath, JSON.stringify(settingsBot, null, 2))
    
    reply('❌ Grup ini dihapus dari *Whitelist*. Bot tidak akan merespon lagi jika Mute All aktif.')
}
break

case 'listwl': {
    if (!isOwner) return reply('Khusus Owner!')
    let text = `📜 *DAFTAR GRUP WHITELIST*\n`
    text += `Status Mute All: ${settingsBot.mute_all ? '✅ ON' : '❌ OFF'}\n\n`
    
    if (settingsBot.whitelist_groups.length === 0) {
        text += '_Belum ada grup yang di-whitelist._'
    } else {
        for (let id of settingsBot.whitelist_groups) {
            let meta = await DinzBotz.groupMetadata(id).catch(e => { return { subject: 'Unknown Group' } })
            text += `• ${meta.subject}\n`
        }
    }
    reply(text)
}
break
case 'antispam': {
    if (!isOwner) return reply('Khusus Owner!')
    
    if (!args[0]) {
        let text = `🛡️ *ANTI-SPAM CONFIGURATION*\n\n`
        text += `• Status: ${dbSpam.status ? '✅ ON' : '❌ OFF'}\n`
        text += `• Mode: ${dbSpam.mode.toUpperCase()} (kick/delete)\n`
        text += `• Filter: ${dbSpam.filter.toUpperCase()} (all/prefix/noprefix)\n`
        text += `• Limit: ${dbSpam.max_msg} chat / ${dbSpam.cooldown/1000} detik\n`
        text += `• Warning: ${dbSpam.max_warn}x\n\n`
        text += `*Cara Ubah Setting:*\n`
        text += `• ${prefix}antispam on/off\n`
        text += `• ${prefix}antispam mode kick/delete\n`
        text += `• ${prefix}antispam filter all/prefix/noprefix\n`
        text += `• ${prefix}antispam limit <jumlah>\n`
        text += `• ${prefix}antispam time <detik>`
        return reply(text)
    }

    if (args[0] === 'on') {
        dbSpam.status = true
        reply('✅ Anti-Spam Diaktifkan.')
    } else if (args[0] === 'off') {
        dbSpam.status = false
        reply('❌ Anti-Spam Dimatikan.')
    } else if (args[0] === 'mode') {
        if (!['kick', 'delete'].includes(args[1])) return reply('Pilih mode: kick atau delete')
        dbSpam.mode = args[1]
        reply(`✅ Mode diubah menjadi: *${args[1].toUpperCase()}*`)
    } else if (args[0] === 'filter') {
        if (!['all', 'prefix', 'noprefix'].includes(args[1])) return reply('Pilih filter: all, prefix, atau noprefix')
        dbSpam.filter = args[1]
        reply(`✅ Filter diubah menjadi: *${args[1].toUpperCase()}*`)
    } else if (args[0] === 'limit') {
        if (isNaN(args[1])) return reply('Masukkan angka!')
        dbSpam.max_msg = parseInt(args[1])
        reply(`✅ Batas pesan diatur ke: *${args[1]} pesan*`)
    } else if (args[0] === 'time') {
        if (isNaN(args[1])) return reply('Masukkan angka (detik)!')
        dbSpam.cooldown = parseInt(args[1]) * 1000
        reply(`✅ Waktu cooldown diatur ke: *${args[1]} detik*`)
    }
    
    require('fs').writeFileSync(pathSpam, JSON.stringify(dbSpam, null, 2))
}
break
case 'setcmd': {
    if (!isOwner) return reply('Khusus Owner!')
    if (!m.quoted) return reply('Reply stiker yang mau dijadikan command!')
    if (m.quoted.xtype !== 'stickerMessage') return reply('Itu bukan stiker!')
    if (!text) return reply(`Masukkan command-nya!\nContoh: *${prefix}setcmd .menu*`)
    
    let stickerHash = m.quoted.fileSha256.toString('base64')
    
    dbStikCmd[stickerHash] = {
        text: text,
        date: Date.now()
    }
    
    require('fs').writeFileSync(pathStikCmd, JSON.stringify(dbStikCmd, null, 2))
    reply(`✅ Berhasil Set Command!\n\nStiker tersebut sekarang adalah pemicu untuk command: *${text}*`)
}
break
case 'delcmd': {
    if (!isOwner) return reply('Khusus Owner!')
    if (!m.quoted) return reply('Reply stiker yang mau dihapus command-nya!')
    if (m.quoted.xtype !== 'stickerMessage') return reply('Itu bukan stiker!')
    
    let stickerHash = m.quoted.fileSha256.toString('base64')
    
    if (!dbStikCmd[stickerHash]) return reply('Stiker ini tidak terdaftar sebagai command.')
    
    delete dbStikCmd[stickerHash]
    require('fs').writeFileSync(pathStikCmd, JSON.stringify(dbStikCmd, null, 2))
    reply('✅ Berhasil menghapus command dari stiker ini.')
}
break
case 'listcmd': {
    if (!isOwner) return reply('Khusus Owner!')
    
    let list = Object.values(dbStikCmd)
    if (list.length === 0) return reply('Belum ada Sticker Command.')
    
    let txt = `📋 *LIST STICKER COMMAND*\nTotal: ${list.length}\n\n`
    let i = 1
    for (let hash in dbStikCmd) {
        txt += `${i++}. Command: *${dbStikCmd[hash].text}*\n`
    }
    txt += `\n_Cara pakai: Kirim stikernya untuk mengeksekusi command._`
    reply(txt)
}
break
case 'addlist':
case 'setlist':
case 'updatelist': {
    if (!isGroup) return reply('Hanya untuk grup!')
    if (!isAdmin && !isOwner) return reply('Khusus Admin!')
    
    let args1 = text.split('|')[0]
    let args2 = text.split('|')[1]
    
    if (!args1 || !args2) return reply(`Format Salah!\nContoh: ${prefix + command} key|response`)
    
    let urlImage = false
    
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    
    if (/image/.test(mime)) {
        reply('⏳ Sedang mengupload gambar...')
        
        try {
            let media = await DinzBotz.downloadAndSaveMediaMessage(q)
            
            let uploadResult = await uploaden(media)
            
            if (typeof uploadResult === 'object' && uploadResult.url) {
                urlImage = uploadResult.url
            } else if (typeof uploadResult === 'string') {
                urlImage = uploadResult
            } else {
                urlImage = false 
            }

            if (fs.existsSync(media)) fs.unlinkSync(media)

        } catch (e) {
            console.log(e)
            return reply('❌ Gagal upload gambar. Coba lagi.')
        }
    }
    
    if (!dbList[from]) dbList[from] = { list: {}, simbol: '•', proses: 'Pesanan sedang diproses...' }
    if (!dbList[from].list) dbList[from].list = {}
    
    dbList[from].list[args1] = {
        text: args2,
        image: urlImage
    }
    
    require('fs').writeFileSync(pathList, JSON.stringify(dbList, null, 2))
    reply(`✅ List berhasil disimpan: ${args1}\n🖼️ Gambar: ${urlImage ? 'Ada' : 'Tidak'}`)
}
break
case 'dellist': {
    if (!isGroup) return reply('Hanya untuk grup!')
    if (!isAdmin && !isOwner) return reply('Khusus Admin!')
    if (!text) return reply(`Masukkan nama list yang mau dihapus!`)
    
    if (!dbList[from] || !dbList[from].list || !dbList[from].list[text]) return reply('List tidak ditemukan.')
    
    delete dbList[from].list[text]
    require('fs').writeFileSync(pathList, JSON.stringify(dbList, null, 2))
    reply(`✅ Berhasil menghapus list: *${text}*`)
}
break
case 'list':
case 'menuadmin': {
    if (!isGroup) return reply('Hanya untuk grup!')
    
    if (!dbList[from] || !dbList[from].list || Object.keys(dbList[from].list).length === 0) return reply('Belum ada list di grup ini.')
    
    let simbol = dbList[from].simbol || '•'
    let textList = `*DAFTAR LIST TOKO*\n\n`
    
    for (let x of Object.keys(dbList[from].list)) {
        textList += `${simbol} ${x}\n`
    }
    
    reply(textList)
}
break
case 'setsimbol': {
    if (!isGroup) return reply('Hanya untuk grup!')
    if (!isAdmin && !isOwner) return reply('Khusus Admin!')
    if (!text) return reply('Masukkan simbolnya! Contoh: .setsimbol =>')
    
    if (!dbList[from]) dbList[from] = { list: {}, simbol: '•', proses: 'Pesanan sedang diproses...' }
    
    dbList[from].simbol = text
    require('fs').writeFileSync(pathList, JSON.stringify(dbList, null, 2))
    reply(`✅ Simbol list berhasil diubah jadi: ${text}`)
}
break
case 'setproses': {
    if (!isGroup) return reply('Hanya untuk grup!')
    if (!isAdmin && !isOwner) return reply('Khusus Admin!')
    if (!text) return reply('Masukkan teks proses! Contoh: .setproses Wait ya kak, sedang dicek admin.')
    
    if (!dbList[from]) dbList[from] = { list: {}, simbol: '•', proses: 'Pesanan sedang diproses...' }
    
    dbList[from].proses = text
    require('fs').writeFileSync(pathList, JSON.stringify(dbList, null, 2))
    reply(`✅ Teks proses berhasil diubah.`)
}
break
case 'proses': {
    if (!isGroup) return reply('Hanya untuk grup!')
    if (!m.quoted) return reply('Reply chat pesanan yang mau diproses!')
    
    let prosesText = (dbList[from] && dbList[from].proses) ? dbList[from].proses : 'Pesanan sedang diproses...'
    
    let tek = `*「 PROSES 」*\n\n${prosesText}\n\n🕒 *Jam:* ${moment().format('HH:mm:ss')}\n📅 *Tanggal:* ${moment().format('DD/MM/YYYY')}`
    
    let quoteObj = m.quoted.fakeObj || m.quoted
    
    await DinzBotz.sendMessage(from, { text: tek }, { quoted: quoteObj })
}
break
case 'setdone': {
    if (!isGroup) return reply('Hanya untuk grup!')
    if (!isAdmin && !isOwner) return reply('Khusus Admin!')
    if (!text) return reply('Masukkan pesan untuk status Done!')
    
    if (!dbList[from]) dbList[from] = { list: {}, simbol: '•', proses: 'Proses...', done: 'Transaksi Berhasil!', pending: 'Menunggu Pembayaran...', cancel: 'Transaksi Dibatalkan!', time: true }
    
    dbList[from].done = text
    require('fs').writeFileSync(pathList, JSON.stringify(dbList, null, 2))
    reply(`✅ Pesan Done berhasil diubah.`)
}
break
case 'setdoneimage': {
    if (!isGroup) return reply('Hanya untuk grup!')
    if (!isAdmin && !isOwner) return reply('Khusus Admin!')
    
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    
    if (!/image/.test(mime)) return reply('Kirim/Reply gambar dengan caption .setdoneimage')
    
    reply('⏳ Mengupload gambar...')
    try {
        let media = await DinzBotz.downloadAndSaveMediaMessage(q)
        let uploadResult = await uploaden(media)
        let urlImage = (typeof uploadResult === 'object' && uploadResult.url) ? uploadResult.url : uploadResult
        
        if (fs.existsSync(media)) fs.unlinkSync(media)
        
        if (!dbList[from]) dbList[from] = { list: {}, simbol: '•', proses: 'Proses...', done: 'Transaksi Berhasil!', pending: 'Menunggu Pembayaran...', cancel: 'Transaksi Dibatalkan!', time: true }
        
        dbList[from].done_image = urlImage
        require('fs').writeFileSync(pathList, JSON.stringify(dbList, null, 2))
        reply('✅ Gambar Done berhasil diset!')
    } catch (e) {
        reply('❌ Gagal upload gambar.')
    }
}
break
case 'done': {
    if (!isGroup) return reply('Hanya untuk grup!')
    if (!m.quoted) return reply('Reply pesanan yang sudah selesai!')
    
    let db = dbList[from] || {}
    let doneText = db.done || 'Transaksi Berhasil Terimakasih!'
    let showTime = (db.time !== false) 
    
    let caption = `*「 SUKSES 」*\n\n${doneText}`
    if (showTime) {
        caption += `\n\n🕒 *Jam:* ${moment().format('HH:mm:ss')}\n📅 *Tanggal:* ${moment().format('DD/MM/YYYY')}`
    }
    
    let quoteObj = m.quoted.fakeObj || m.quoted
    
    if (db.done_image) {
        await DinzBotz.sendMessage(from, { image: { url: db.done_image }, caption: caption }, { quoted: quoteObj })
    } else {
        await DinzBotz.sendMessage(from, { text: caption }, { quoted: quoteObj })
    }
}
break
case 'setpending': {
    if (!isGroup) return reply('Hanya untuk grup!')
    if (!isAdmin && !isOwner) return reply('Khusus Admin!')
    if (!text) return reply('Masukkan pesan untuk status Pending!')
    
    if (!dbList[from]) dbList[from] = { list: {}, simbol: '•', proses: 'Proses...', done: 'Transaksi Berhasil!', pending: 'Menunggu Pembayaran...', cancel: 'Transaksi Dibatalkan!', time: true }
    
    dbList[from].pending = text
    require('fs').writeFileSync(pathList, JSON.stringify(dbList, null, 2))
    reply(`✅ Pesan Pending berhasil diubah.`)
}
break
case 'setpendingimage': {
    if (!isGroup) return reply('Hanya untuk grup!')
    if (!isAdmin && !isOwner) return reply('Khusus Admin!')
    
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    
    if (!/image/.test(mime)) return reply('Kirim/Reply gambar dengan caption .setpendingimage')
    
    reply('⏳ Mengupload gambar...')
    try {
        let media = await DinzBotz.downloadAndSaveMediaMessage(q)
        let uploadResult = await uploaden(media)
        let urlImage = (typeof uploadResult === 'object' && uploadResult.url) ? uploadResult.url : uploadResult
        
        if (fs.existsSync(media)) fs.unlinkSync(media)
        
        if (!dbList[from]) dbList[from] = { list: {}, simbol: '•', proses: 'Proses...', done: 'Transaksi Berhasil!', pending: 'Menunggu Pembayaran...', cancel: 'Transaksi Dibatalkan!', time: true }
        
        dbList[from].pending_image = urlImage
        require('fs').writeFileSync(pathList, JSON.stringify(dbList, null, 2))
        reply('✅ Gambar Pending berhasil diset!')
    } catch (e) {
        reply('❌ Gagal upload gambar.')
    }
}
break
case 'pending': {
    if (!isGroup) return reply('Hanya untuk grup!')
    if (!m.quoted) return reply('Reply pesanan yang pending!')
    
    let db = dbList[from] || {}
    let pendingText = db.pending || 'Mohon selesaikan pembayaran.'
    let showTime = (db.time !== false) 
    
    let caption = `*「 PENDING 」*\n\n${pendingText}`
    if (showTime) {
        caption += `\n\n🕒 *Jam:* ${moment().format('HH:mm:ss')}\n📅 *Tanggal:* ${moment().format('DD/MM/YYYY')}`
    }
    
    let quoteObj = m.quoted.fakeObj || m.quoted
    
    if (db.pending_image) {
        await DinzBotz.sendMessage(from, { image: { url: db.pending_image }, caption: caption }, { quoted: quoteObj })
    } else {
        await DinzBotz.sendMessage(from, { text: caption }, { quoted: quoteObj })
    }
}
break
case 'setcancel': {
    if (!isGroup) return reply('Hanya untuk grup!')
    if (!isAdmin && !isOwner) return reply('Khusus Admin!')
    if (!text) return reply('Masukkan pesan untuk status Cancel!')
    
    if (!dbList[from]) dbList[from] = { list: {}, simbol: '•', proses: 'Proses...', done: 'Transaksi Berhasil!', pending: 'Menunggu Pembayaran...', cancel: 'Transaksi Dibatalkan!', time: true }
    
    dbList[from].cancel = text
    require('fs').writeFileSync(pathList, JSON.stringify(dbList, null, 2))
    reply(`✅ Pesan Cancel berhasil diubah.`)
}
break
case 'setcancelimage': {
    if (!isGroup) return reply('Hanya untuk grup!')
    if (!isAdmin && !isOwner) return reply('Khusus Admin!')
    
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    
    if (!/image/.test(mime)) return reply('Kirim/Reply gambar dengan caption .setcancelimage')
    
    reply('⏳ Mengupload gambar...')
    try {
        let media = await DinzBotz.downloadAndSaveMediaMessage(q)
        let uploadResult = await uploaden(media)
        let urlImage = (typeof uploadResult === 'object' && uploadResult.url) ? uploadResult.url : uploadResult
        
        if (fs.existsSync(media)) fs.unlinkSync(media)
        
        if (!dbList[from]) dbList[from] = { list: {}, simbol: '•', proses: 'Proses...', done: 'Transaksi Berhasil!', pending: 'Menunggu Pembayaran...', cancel: 'Transaksi Dibatalkan!', time: true }
        
        dbList[from].cancel_image = urlImage
        require('fs').writeFileSync(pathList, JSON.stringify(dbList, null, 2))
        reply('✅ Gambar Cancel berhasil diset!')
    } catch (e) {
        reply('❌ Gagal upload gambar.')
    }
}
break
case 'cancel': {
    if (!isGroup) return reply('Hanya untuk grup!')
    if (!m.quoted) return reply('Reply pesanan yang dibatalkan!')
    
    let db = dbList[from] || {}
    let cancelText = db.cancel || 'Transaksi dibatalkan.'
    let showTime = (db.time !== false) 
    
    let caption = `*「 CANCEL 」*\n\n${cancelText}`
    if (showTime) {
        caption += `\n\n🕒 *Jam:* ${moment().format('HH:mm:ss')}\n📅 *Tanggal:* ${moment().format('DD/MM/YYYY')}`
    }
    
    let quoteObj = m.quoted.fakeObj || m.quoted
    
    if (db.cancel_image) {
        await DinzBotz.sendMessage(from, { image: { url: db.cancel_image }, caption: caption }, { quoted: quoteObj })
    } else {
        await DinzBotz.sendMessage(from, { text: caption }, { quoted: quoteObj })
    }
}
break
case 'settime': {
    if (!isGroup) return reply('Hanya untuk grup!')
    if (!isAdmin && !isOwner) return reply('Khusus Admin!')
    
    if (!dbList[from]) dbList[from] = { list: {}, simbol: '•', proses: 'Proses...', done: 'Transaksi Berhasil!', pending: 'Menunggu Pembayaran...', cancel: 'Transaksi Dibatalkan!', time: true }
    
    if (args[0] === 'on') {
        dbList[from].time = true
        reply('✅ Tampilan Waktu (Jam/Tanggal) Diaktifkan.')
    } else if (args[0] === 'off') {
        dbList[from].time = false
        reply('❌ Tampilan Waktu (Jam/Tanggal) Dimatikan.')
    } else {
        reply(`Pilih on atau off.\nContoh: ${prefix}settime off`)
    }
    require('fs').writeFileSync(pathList, JSON.stringify(dbList, null, 2))
}
break
case "toswgc": {
  if (!m.isGroup) return m.reply('khusus digroup');
  if (!isAdmins && !!isOwner) return m.reply('khusus admins dan owner');
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

  await DinzBotz.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
}
break;
case 'autoadzan': {
    const pathAdzan = './database/adzan_groups.json'
    const pathClose = './database/adzan_close.json'

    if (!require('fs').existsSync(pathAdzan)) require('fs').writeFileSync(pathAdzan, JSON.stringify([]))
    if (!require('fs').existsSync(pathClose)) require('fs').writeFileSync(pathClose, JSON.stringify([]))

    let dbAdzan = JSON.parse(require('fs').readFileSync(pathAdzan))
    let dbClose = JSON.parse(require('fs').readFileSync(pathClose))

    if (args[0] === 'all' && isOwner) {
        let allGroups = Object.keys(await DinzBotz.groupFetchAllParticipating())
        let addedCount = 0
        
        for (let id of allGroups) {
            if (!dbAdzan.includes(id)) {
                dbAdzan.push(id)
                addedCount++
            }
        }
        
        require('fs').writeFileSync(pathAdzan, JSON.stringify(dbAdzan))
        return reply(`✅ Sukses mengaktifkan Notifikasi Adzan di *${addedCount}* grup baru.\nTotal grup aktif: ${dbAdzan.length}`)
    }
    
    if (args[0] === 'offall' && isOwner) {
        require('fs').writeFileSync(pathAdzan, JSON.stringify([]))
        require('fs').writeFileSync(pathClose, JSON.stringify([]))
        return reply('✅ Sukses mematikan Auto Adzan & Auto Close di SEMUA grup.')
    }

    if (!isGroup) return reply('Hanya untuk grup!')
    if (!isAdmin && !isOwner) return reply('Khusus Admin!')

    if (args[0] === 'on') {
        if (!dbAdzan.includes(from)) {
            dbAdzan.push(from)
            require('fs').writeFileSync(pathAdzan, JSON.stringify(dbAdzan))
        }
        reply(`✅ *AUTO ADZAN AKTIF*\n(Hanya notifikasi suara, grup TIDAK ditutup).`)
        
    } else if (args[0] === 'close') {
        if (args[1] === 'on') {
            if (!dbAdzan.includes(from)) {
                dbAdzan.push(from)
                require('fs').writeFileSync(pathAdzan, JSON.stringify(dbAdzan))
            }
            if (!dbClose.includes(from)) {
                dbClose.push(from)
                require('fs').writeFileSync(pathClose, JSON.stringify(dbClose))
            }
            reply(`✅ *AUTO ADZAN & CLOSE AKTIF*\n(Bot akan menutup grup otomatis selama 5 menit saat adzan).`)

        } else if (args[1] === 'off') {
            let newDbClose = dbClose.filter(x => x !== from)
            require('fs').writeFileSync(pathClose, JSON.stringify(newDbClose))
            reply(`✅ Fitur Auto Close dimatikan (Auto Adzan tetap aktif).`)
        } else {
            reply(`Pilih on atau off untuk fitur close.\nContoh: ${prefix}autoadzan close on`)
        }

    } else if (args[0] === 'off') {
        let newDbAdzan = dbAdzan.filter(x => x !== from)
        let newDbClose = dbClose.filter(x => x !== from)
        
        require('fs').writeFileSync(pathAdzan, JSON.stringify(newDbAdzan))
        require('fs').writeFileSync(pathClose, JSON.stringify(newDbClose))
        reply('✅ Auto Adzan & Auto Close BERHASIL DIMATIKAN.')
        
    } else {
        reply(`*PENGATURAN AUTO ADZAN*\n\n1. ${prefix}autoadzan on\n(Hanya Notifikasi Suara)\n\n2. ${prefix}autoadzan close on\n(Notifikasi + Tutup Grup 5 Menit)\n\n3. ${prefix}autoadzan close off\n(Matikan fitur tutup grup saja)\n\n4. ${prefix}autoadzan off\n(Matikan semua fitur adzan)\n\nKhusus Owner:\n- ${prefix}autoadzan all\n- ${prefix}autoadzan offall`)
    }
}
break
case 'listadzan':
case 'ceklistadzan': {
    if (!isOwner) return reply('Khusus Owner!')

    const pathAdzan = './database/adzan_groups.json'
    if (!require('fs').existsSync(pathAdzan)) {
        require('fs').writeFileSync(pathAdzan, JSON.stringify([]))
    }
    let dbAdzan = JSON.parse(require('fs').readFileSync(pathAdzan))

    if (dbAdzan.length === 0) return reply('Belum ada grup yang mengaktifkan Auto Adzan.')

    reply('⏳ Memuat data grup...')

    let txt = `*LIST GRUP AUTO ADZAN*\nTotal: ${dbAdzan.length} Grup\n\n`
    let allGroups = await DinzBotz.groupFetchAllParticipating()

    for (let i = 0; i < dbAdzan.length; i++) {
        let id = dbAdzan[i]
        let name = allGroups[id] ? allGroups[id].subject : 'Unknown Group'
        txt += `${i + 1}. ${name}\nID: ${id}\n\n`
    }

    reply(txt)
}
break
case 'testadzan': {
    if (!isOwner) return reply('Khusus Owner')
    
    const moment = require('moment-timezone')
    const timeNow = moment.tz('Asia/Jakarta')
    const nextMinute = timeNow.add(1, 'minutes').format('HH:mm')
    
    manualTestSchedule['Test'] = nextMinute
    
    let txt = `✅ *TEST SCHEDULE DIBUAT*\n\n`
    txt += `Waktu Sekarang: ${moment.tz('Asia/Jakarta').format('HH:mm')}\n`
    txt += `Jadwal Trigger: ${nextMinute}\n\n`
    txt += `Silakan tunggu 1 menit. Bot akan otomatis mengirim Adzan Test ke semua grup terdaftar.`
    
    reply(txt)
}
break
case 'tomp4': {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    
    if (!/webp/.test(mime)) return reply('Reply sticker bergerak (gif) dengan caption .tomp4')

    reply('⏳ Sedang mengkonversi sticker ke video...')

    let media = await DinzBotz.downloadAndSaveMediaMessage(q)
    let { webp2mp4 } = require('../lib/webp2mp4')

    try {
        let fileContent = require('fs').readFileSync(media) 

    
        let webpToMp4 = await webp2mp4(fileContent)
        
        await DinzBotz.sendMessage(from, { 
            video: { url: webpToMp4 }, 
            caption: '✅ Konversi Berhasil!',
            gifPlayback: true
        }, { quoted: m })
        
        if (require('fs').existsSync(media)) require('fs').unlinkSync(media)

    } catch (e) {
        console.error(e)
        reply('❌ Gagal convert. Server Ezgif mungkin sedang sibuk atau limit.')
        if (require('fs').existsSync(media)) require('fs').unlinkSync(media)
    }
}
break
// --- Fun
case 'katailham':
case 'katakata': {
    const quotes = [
        'Mending rakit PC daripada rakit rumah tangga.',
        'Jangan sombong, di atas langit masih ada genteng.',
        'Hidup itu seperti roda, kadang di atas, kadang di bengkel.',
        'Cantik itu relatif, tergantung letak kamera dan intensitas cahaya.',
        'Uang tidak bisa membeli kebahagiaan, tapi bisa beli seblak, sama aja sih.',
        'Jangan membalas budi, karena belum tentu Budi yang melakukannya.',
        'Cinta itu buta, makanya butuh rabaan... eh arahan.',
        'Kerja keraslah sampai tetanggamu mengira kamu pelihara tuyul.',
        'Jika ada orang yang menghinamu, jangan marah. Lempar saja dengan bata.',
        'Jodoh emang gak kemana, tapi saingan dimana-mana.',
        'Waktu adalah uang. Kalau temanmu ajak main pas tanggal tua, berarti dia gak punya waktu.',
        'Berakit-rakit ke hulu, berenang-renang ke tepian. Mantan udah ke penghulu, kita masih sendirian.',
        'Sakit hati itu biasa, yang luar biasa itu sakit gigi.',
        'Motivasi hari ini: Tetaplah bernafas walaupun tidak berguna.',
        'Kunci sukses adalah kunci yang tidak hilang.',
        'Masa depan itu seperti sekumpulan tempe, tidak ada yang tahu.',
        'Kegagalan adalah kesuksesan yang tertunda... dan tertunda terus.',
        'Sahabat sejati adalah mereka yang tahu betapa gilanya kamu, tapi masih mau berteman.',
        'Rumah tangga itu rumit, kalau sederhana namanya rumah makan.',
        'Belajarlah dari bulu ketek, walaupun selalu terhimpit tapi tetap tegar bertahan hidup.',
        'Cinta itu seperti angkot, rela nunggu orang di pengkolan padahal belum tentu mau naik.',
        'Dompetku seperti bawang, setiap dibuka bawaannya pengen nangis.',
        'Diet mulai besok. Kalimat itu sudah saya ucapkan sejak tahun 2010.',
        'Manusia boleh berencana, tapi saldo juga yang menentukan.',
        'Kalau kamu jelek, jangan takut mencintai. Karena yang harus takut itu yang kamu cintai.'
    ]
    const random = quotes[Math.floor(Math.random() * quotes.length)]
    reply(`📜 *KATA ILHAM*\n\n"${random}"`)
}
break
case 'faktaunik': {
    const fakta = [
        'Madu adalah satu-satunya makanan yang tidak pernah basi.',
        'Siput bisa tidur selama 3 tahun.',
        'Kecoa bisa hidup 9 hari tanpa kepala, lalu mati kelaparan.',
        'Burung unta matanya lebih besar dari otaknya.',
        'Kucing tidur 70% dari hidup mereka.',
        'Gajah adalah satu-satunya mamalia yang tidak bisa melompat.',
        'Lidah jerapah warnanya hitam, panjangnya bisa 50 cm.',
        'Manusia tidak bisa menjilat sikunya sendiri.',
        'Buaya tidak bisa menjulurkan lidahnya.',
        'Jantung udang terletak di kepalanya.',
        'Babi tidak bisa melihat ke langit.',
        'Namibia adalah negara dengan lagu kebangsaan terpendek (0 lirik).',
        'Otak manusia lebih aktif saat tidur daripada saat nonton TV.',
        'Apel lebih efektif daripada kopi untuk menahan kantuk di pagi hari.',
        'Tulang paha manusia lebih kuat dari beton.',
        'Rata-rata orang menghabiskan 6 bulan hidupnya menunggu lampu merah.',
        'Gigi kelinci tidak pernah berhenti tumbuh.',
        'Kupu-kupu mengecap rasa dengan kakinya.',
        'Lumba-lumba tidur dengan satu mata terbuka.',
        'Semut tidak pernah tidur seumur hidupnya.',
        'Air panas lebih cepat jadi es daripada air dingin (Efek Mpemba).',
        'Pisang sebenarnya adalah buah beri, tapi stroberi bukan.',
        'Manusia berbagi 50% DNA dengan pisang.',
        'Coklat bisa membunuh anjing karena mengandung Theobromine.',
        'Di Jupiter dan Saturnus, hujan yang turun adalah berlian.'
    ]
    const random = fakta[Math.floor(Math.random() * fakta.length)]
    reply(`🧠 *FAKTA UNIK*\n\n${random}`)
}
break
case 'truth': {
    const truth = [
        'Siapa orang yang paling kamu benci di grup ini?',
        'Kapan terakhir kali kamu ngompol?',
        'Siapa nama mantan yang masih kamu sayang?',
        'Pernah ngambil uang ortu diem-diem? Berapa?',
        'Hal paling memalukan apa yang pernah kamu alami di sekolah?',
        'Siapa first love kamu?',
        'Pernah selingkuh? Jujur!',
        'Kalau boleh ganti nama, mau ganti jadi nama apa?',
        'Apa aib terbesar yang kamu sembunyikan?',
        'Siapa member grup ini yang menurutmu paling ganteng/cantik?',
        'Pernah naksir guru/dosen sendiri?',
        'Pernah ciuman? Sama siapa?',
        'Apa kebohongan terakhir yang kamu ucapkan?',
        'Kalau dunia kiamat besok, apa yang mau kamu lakuin?',
        'Pernah stalking sosmed mantan pake akun fake?',
        'Siapa orang terakhir yang kamu chat di WA?',
        'Pernah nangis gara-gara hal sepele? Apa itu?',
        'Sebutkan 3 sifat jelekmu!',
        'Apa hal yang paling bikin kamu ilfeel sama lawan jenis?',
        'Pernah suka sama pacar teman sendiri?'
    ]
    const random = truth[Math.floor(Math.random() * truth.length)]
    reply(`🗣️ *TRUTH*\n\n${random}`)
}
break
case 'dare': {
    const dare = [
        'Kirim foto selfie muka jelek sekarang!',
        'VN nyanyi lagu Balonku Ada Lima pake nada Rock!',
        'Chat random orang di kontakmu bilang "Aku Hamil" (Cowok bilang "Aku Menghamili")',
        'Ganti foto profil WA pake foto aib selama 10 menit!',
        'Teriak "AKU GILA" di VN kirim ke sini!',
        'Chat mantan bilang "Kangen" terus screenshot kirim sini!',
        'Prank teman bilang mau pinjam duit 5 juta!',
        'Update status WA tulisan Alay "4ku C4y4n9 K4mu"!',
        'Telpon salah satu member grup ini terus nyanyi Happy Birthday!',
        'Kirim sticker paling jorok yang kamu punya!',
        'Ganti nama di WA jadi "Babi Ngepet" selama 1 jam!',
        'VN desahan selama 5 detik!',
        'Chat dosen/guru bilang "I Love You"!',
        'Kirim ss chat terakhir sama pacar/gebetan!',
        'Lakukan kayang dan kirim fotonya ke sini!',
        'Minum air garam satu sendok (Videoin)!',
        'Jilat tembok dan kirim videonya!',
        'Joget TikTok tanpa musik kirim videonya!',
        'Tulis nama member grup ini di jidat kamu trus foto!',
        'Baca puisi romantis buat admin grup lewat VN!'
    ]
    const random = dare[Math.floor(Math.random() * dare.length)]
    reply(`🔥 *DARE*\n\n${random}`)
}
break
case 'pantun': {
    const pantun = [
        'Berakit-rakit ke hulu, berenang-renang ke tepian.\nMantan udah ke penghulu, kita masih sendirian.',
        'Burung perkutut, burung kutilang.\nKamu kentut, nggak bilang-bilang.',
        'Ikan hiu makan tomat.\nI love you so much.',
        'Jalan-jalan ke kota Paris, lihat gedung berbaris-baris.\nBiarpun mati di ujung keris, asal dapat Dinda yang manis.',
        'Makan nasi lauknya patin, jangan lupa dikasih santan.\nKalau kamu emang prihatin, kenapa dulu kamu duain?',
        'Pohon pisang daunnya layu, bisa dijadikan pupuk sawah.\nSaat abang bilang I love you, ku cuma bisa bilang cius miapah.',
        'Satu titik dua koma.\nKamu cantik siapa yang punya?',
        'Minum jamu makan nangka.\nLihat kamu langsung kuka.',
        'Beli paku sama palu.\nCintaku padamu takkan berlalu.',
        'Ke pasar beli kedondong.\nHai kamu, kenalan dong.',
        'Makan sate kambing muda.\nBapak kamu maling ya?',
        'Buah manggis buah pepaya.\nCewek manis siapa yang punya?',
        'Jalan-jalan ke kota Padang.\nJangan lupa beli rendang.\nKalau abang pulang begadang.\nJangan lupa bawa uang.',
        'Pergi ke pasar beli itik.\nLihat eneng cantik, abang tertarik.',
        'Anak kera main di empang.\nKamu ketawa, hatiku senang.'
    ]
    const random = pantun[Math.floor(Math.random() * pantun.length)]
    reply(`🎤 *PANTUN*\n\n${random}`)
}
break
case 'cekkhodam': {
    if (!text) return reply(`Ketik nama!\nContoh: ${prefix}cekkhodam Dinz`)
    
    const khodam = [
        'Harimau Putih', 'Naga Sakti', 'Buaya Darat', 'Kucing Oren', 'Kecoa Terbang',
        'Lele Terbang', 'Belut Listrik', 'Kudanil Jawa', 'Cicak Kawin', 'Tokek',
        'Ular Sawah', 'Babi Hutan', 'Monyet Pantai', 'Lutung Kasarung', 'Macan Cisewu',
        'Kutu Rambut', 'Cacing Pita', 'Undur-undur', 'Kecebong Hanyut', 'Nyamuk DBD',
        'Lalat Ijo', 'Tikus Got', 'Kucing Garong', 'Anjing Pelacak', 'Badak Bercula Satu',
        'Ikan Sapu-sapu', 'Ikan Lele', 'Ikan Buntal', 'Bebek Goreng', 'Ayam Kampus',
        'Sapi Qurban', 'Kambing Guling', 'Kuda Lumping', 'Raja Hutan', 'Singa Ompong',
        'Garuda Pancasila', 'Elang Botak', 'Merpati Pos', 'Gagak Hitam', 'Kelelawar',
        'Laba-laba Sunda', 'Kalajengking', 'Kelabang', 'Semut Merah', 'Rayap Kayu',
        'Tuyul Mohawk', 'Genderuwo Tiktok', 'Pocong Ngesot', 'Kuntilanak Merah', 'Sundel Bolong',
        'Wewe Gombel', 'Jenglot', 'Nyi Roro Kidul', 'Buto Ijo', 'Leak Bali',
        'Suster Ngesot', 'Hantu Jeruk Purut', 'Si Manis Jembatan Ancol', 'Kolor Ijo', 'Babi Ngepet',
        'Siluman Ular', 'Siluman Kera', 'Jin Tomang', 'Jin Ifrit', 'Setan Kredit',
        'Roh Halus', 'Arwah Penasaran', 'Jelangkung', 'Boneka Santet', 'Dukun Beranak',
        'Kulkas 2 Pintu', 'Magic Com', 'Rice Cooker', 'Mesin Cuci', 'Setrika Panas',
        'Kipas Angin Rusak', 'AC Bocor', 'Remote TV', 'Antena Parabola', 'Lampu Petromak',
        'Sapu Lidi', 'Sapu Ijuk', 'Pelan Lantai', 'Ember Pecah', 'Gayung Love',
        'Sikat WC', 'Sikat Gigi', 'Odol Habis', 'Sabun Bolong', 'Shampoo Sachet',
        'Handuk Basah', 'Keset Welcome', 'Pintu Gerbang', 'Jendela Nako', 'Engsel Pintu',
        'Paku Karat', 'Paku Payung', 'Palu Thor', 'Obeng Kembang', 'Tang Buaya',
        'Gergaji Mesin', 'Bor Listrik', 'Cangkul Pak Tani', 'Arit Rumput', 'Golok Pembunuh',
        'Beat Mberr', 'Mio Mirza', 'Supra Bapak', 'RX King', 'Vespa Gembel',
        'Truk Pasir', 'Bus Sumber Kencono', 'Angkot Padang', 'Becak Terbang', 'Bajaj Pulsar',
        'Ban Bocor', 'Knalpot Brong', 'Stang Bundar', 'Spion Kiri', 'Standar Dua',
        'Busi Kotor', 'Rantai Karat', 'Rem Blong', 'Klakson Telolet', 'Helm Ciduk',
        'Seblak Ceker', 'Cireng Isi', 'Batagor', 'Siomay Bandung', 'Cimol',
        'Tahu Bulat', 'Sotong', 'Cilor', 'Maklor', 'Telur Gulung',
        'Bakso Beranak', 'Mie Ayam', 'Nasi Padang', 'Rendang', 'Sate Madura',
        'Kerupuk Kulit', 'Kerupuk Kaleng', 'Peyek Kacang', 'Rempeyek', 'Opak Singkong',
        'Es Teh Manis', 'Kopi Hitam', 'Jus Alpukat', 'Soda Gembira', 'Cendol Dawet',
        'Martabak Manis', 'Terang Bulan', 'Kue Cubit', 'Pisang Goreng', 'Mendoan',
        'Upin Ipin', 'Jarjit', 'Mail', 'Ehsan', 'Kak Ros',
        'Opah', 'Tok Dalang', 'Raju', 'Meimei', 'Susanti',
        'Spongebob', 'Patrick Star', 'Squidward', 'Tuan Krab', 'Plankton',
        'Naruto', 'Sasuke', 'Sakura', 'Goku', 'Vegeta',
        'Doraemon', 'Nobita', 'Giant', 'Suneo', 'Shizuka',
        'Ultraman Ribut', 'Power Ranger Merah', 'Kamen Rider', 'Satria Baja Hitam', 'Gundam',
        'Badut Ancol', 'Badut Mampang', 'Topeng Monyet', 'Sirkus', 'Akrobat',
        'Pesulap Merah', 'Limbad', 'Deddy Corbuzier', 'Vicky Prasetyo', 'Aldi Taher',
        'Ambatron', 'Rusdi Ngawi', 'Mas Fuad', 'Pak Vinsen', 'Bernadya',
        'Sempak Firaun', 'Sendal Jepit Swallow', 'Tutup Botol', 'Kaleng Khong Guan', 'Galon Kosong',
        'Tabung Gas 3kg', 'Kompor Meledak', 'Aspal Panas', 'Polisi Tidur', 'Tiang Listrik',
        'Batu Bata', 'Batako', 'Semen Tiga Roda', 'Cat Tembok', 'Kuas Cat',
        'Plastik Kresek', 'Kardus Indomie', 'Botol Marjan', 'Tusuk Gigi', 'Korek Api'
    ]
    
    const random = khodam[Math.floor(Math.random() * khodam.length)]
    
    await reply(`🔮 *CEK KHODAM*\n\n👤 Nama: ${text}\n👻 Khodam: *${random}*\n\n_Sedang memanggil suara khodam..._`)

    try {
        let ttsText = `Khodam dari ${text} adalah, ${random}`
        let { data } = await axios.get(`https://rynekoo-api.hf.space/tools/tts/qwen?text=${encodeURIComponent(ttsText)}&voice=dylan`)
        
        if (data.success && data.result) {
            await DinzBotz.sendMessage(from, { 
                audio: { url: data.result }, 
                mimetype: 'audio/mpeg', 
                ptt: true 
            }, { quoted: m })
        }
    } catch (e) {
        console.log(e)
    }
}
break
case 'tts': {
    if (!text) return reply(`Masukkan teksnya!\nContoh: ${prefix}tts Halo saya bot`)
    
    let textToSpeech = text.length > 200 ? text.substring(0, 200) : text

    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({ text: `🔊 *TTS AI OPTIONS*\n\nTeks: "${textToSpeech}"\n\nSilakan klik tombol di bawah untuk memilih 1 dari 7 model suara:` }),
                    footer: proto.Message.InteractiveMessage.Footer.create({ text: "DinzBotz AI" }),
                    header: proto.Message.InteractiveMessage.Header.create({ title: "🎙️ TEXT TO SPEECH", subtitle: "Select Voice" }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: "PILIH MODEL SUARA",
                                    sections: [{
                                        title: "Daftar Model Tersedia",
                                        rows: [
                                            { header: "Dylan", title: "Suara Cowok Berat", id: `${prefix}ttsaudio dylan|${textToSpeech}` },
                                            { header: "Sunny", title: "Suara Cewek Ceria", id: `${prefix}ttsaudio sunny|${textToSpeech}` },
                                            { header: "Jada", title: "Suara Cowok Kalem", id: `${prefix}ttsaudio jada|${textToSpeech}` },
                                            { header: "Cherry", title: "Suara Cewek Manis", id: `${prefix}ttsaudio cherry|${textToSpeech}` },
                                            { header: "Ethan", title: "Suara Cowok Deep", id: `${prefix}ttsaudio ethan|${textToSpeech}` },
                                            { header: "Serena", title: "Suara Cewek Elegan", id: `${prefix}ttsaudio serena|${textToSpeech}` },
                                            { header: "Chelsie", title: "Suara Cewek Soft", id: `${prefix}ttsaudio chelsie|${textToSpeech}` }
                                        ]
                                    }]
                                })
                            }
                        ]
                    })
                })
            }
        }
    }, { userJid: from, quoted: m })

    await DinzBotz.relayMessage(from, msg.message, { messageId: msg.key.id })
}
break
case 'ttsaudio': {
    if (!text) return
    
    let [model, teks] = text.split('|')
    if (!model || !teks) return reply('Data tidak valid.')

    await DinzBotz.sendMessage(from, { react: { text: "⏳", key: m.key } })

    try {
        let { data } = await axios.get(`https://rynekoo-api.hf.space/tools/tts/qwen?text=${encodeURIComponent(teks)}&voice=${model}`)
        
        if (data.success && data.result) {
            await DinzBotz.sendMessage(from, { 
                audio: { url: data.result }, 
                mimetype: 'audio/mpeg', 
                ptt: true 
            }, { quoted: m })
            
            await DinzBotz.sendMessage(from, { react: { text: "✅", key: m.key } })
        } else {
            reply('❌ Gagal membuat audio.')
        }
    } catch (e) {
        console.log(e)
        reply('❌ Terjadi kesalahan pada server TTS.')
    }
}
break
case 'yts': {
    if (!text) return reply(`Kirim judul lagunya!\nContoh: ${prefix}yts Nemen Hiphop`)
    
    await DinzBotz.sendMessage(from, { react: { text: "🔍", key: m.key } })

    let search = await yts(text)
    let data = search.all.filter(v => v.type === 'video').slice(0, 10) 
    
    if (data.length === 0) return reply('Video tidak ditemukan.')

    let cards = []

    for (let i of data) {
        let media = await prepareWAMessageMedia({ image: { url: i.thumbnail } }, { upload: DinzBotz.waUploadToServer })
        
        cards.push({
            body: proto.Message.InteractiveMessage.Body.create({
                text: `🎵 *${i.title}*\n\n⏳ Durasi: ${i.timestamp}\n👀 Views: ${i.views}\n👤 Channel: ${i.author.name}`
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
                text: "DinzBotz Media"
            }),
            header: proto.Message.InteractiveMessage.Header.create({
                title: "",
                subtitle: "",
                hasMediaAttachment: true,
                imageMessage: media.imageMessage
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: [
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "DOWNLOAD OPTIONS",
                            id: `${prefix}play ${i.title}`
                        })
                    }
                ]
            })
        })
    }

    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({ 
                        text: `🔎 *YOUTUBE SEARCH RESULTS*\n\nKata Kunci: "${text}"\nTotal Hasil: ${data.length}\n\n_Geser ke samping untuk melihat hasil lainnya_ 👉` 
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({ 
                        text: "Powered by DinzBotz" 
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.create({
                        cards: cards
                    })
                })
            }
        }
    }, { userJid: from, quoted: m })

    await DinzBotz.relayMessage(from, msg.message, { messageId: msg.key.id })
    await DinzBotz.sendMessage(from, { react: { text: "✅", key: m.key } })
}
break
case 'texttoimage':
case 'txttoimg': {
    if (!text) return reply(`Masukkan prompt gambar!\nContoh: ${prefix}epicrealism gunung meletus`)

    let prompt = text

    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({ text: `🎨 *EPIC REALISM AI*\n\nPrompt: "${prompt}"\n\nSilakan pilih rasio gambar:` }),
                    footer: proto.Message.InteractiveMessage.Footer.create({ text: "DinzBotz AI" }),
                    header: proto.Message.InteractiveMessage.Header.create({ title: "AI IMAGE GENERATOR", subtitle: "Select Ratio" }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Square (1:1)",
                                    id: `${prefix}epicrealismgen ${prompt}|1:1`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Portrait (9:16)",
                                    id: `${prefix}epicrealismgen ${prompt}|9:16`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Landscape (16:9)",
                                    id: `${prefix}epicrealismgen ${prompt}|16:9`
                                })
                            }
                        ]
                    })
                })
            }
        }
    }, { userJid: from, quoted: m })

    await DinzBotz.relayMessage(from, msg.message, { messageId: msg.key.id })
}
break
case 'epicrealismgen': {
    if (!text.includes('|')) return

    let [prompt, ratio] = text.split('|')
    
    await DinzBotz.sendMessage(from, { react: { text: "🎨", key: m.key } })

    try {
        let { data } = await axios.get(`https://rynekoo-api.hf.space/image.gen/epic-realism?prompt=${encodeURIComponent(prompt)}&ratio=${ratio}`)
        
        if (data.success && data.result) {
            await DinzBotz.sendMessage(from, { 
                image: { url: data.result }, 
                caption: `✅ *EPIC REALISM GENERATED*\n\nPrompt: ${prompt}\nRatio: ${ratio}` 
            }, { quoted: m })
            
            await DinzBotz.sendMessage(from, { react: { text: "✅", key: m.key } })
        } else {
            reply('❌ Gagal membuat gambar.')
        }
    } catch (e) {
        console.log(e)
        reply('❌ Server error atau sedang limit.')
    }
}
break
case "bratvid":
    case "bratvideo": {
      if (!isPrem) return reply(mess.only.premium)
      if (!text) return reply("[❗] Input teks tidak ditemukan! Kirim perintah dengan format: .bratvid <teks>");
      DinzBotz.sendMessage(m.chat, {
        react: {
          text: `⏱️`,
          key: m.key
        }
      })
      try {
        let brat = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isAnimated=true&delay=500`;
        let response = await axios.get(brat, {
          responseType: "arraybuffer"
        });
        let videoBuffer = response.data;
        let stickerBuffer = await DinzBotz.sendVideoAsSticker(m.chat, videoBuffer, m, {
          packname: global.packname,
          author: global.author
        });
        console.log("Stiker berhasil dibuat:", stickerBuffer);
      } catch (err) {
        console.error("Error:", err);
        reply("[❗] Maaf, terjadi kesalahan saat mencoba membuat stiker video. Silakan coba lagi.");
      }
    }
    db.users[m.sender].exp += 300;
    break;
case 'swm':
    case 'steal':
    case 'stickerwm':
    case 'take':
    case 'wm': {

      const getRandom = (ext) => {
        return `${Math.floor(Math.random() * 10000)}${ext}`
      }
      let ahuh = args.join(' ').split('|')
      let satu = ahuh[0] !== '' ? ahuh[0] : `yoy`
      let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
      let {
        Sticker,
        createSticker,
        StickerTypes
      } = require('wa-sticker-formatter')
      let media = await DinzBotz.downloadAndSaveMediaMessage(quoted)
      let jancok = new Sticker(media, {
        pack: satu, 
        author: dua, 
        type: StickerTypes.FULL, 
        categories: ['🤩', '🎉'], 
        id: '12345', 
        quality: 70, 
        background: '#FFFFFF00' 
      })
      let stok = getRandom(".webp")
      let nono = await jancok.toFile(stok)
      let nah = fs.readFileSync(nono)
      await DinzBotz.sendMessage(from, {
        sticker: nah
      }, {
        quoted: m
      })
      await fs.unlinkSync(stok)
      await fs.unlinkSync(media)
    }
    break
case "cekidch":
    case "idch": {
      if (!text) return reply("linkchnya")
      if (!text.includes("https://whatsapp.com/channel/")) return reply("Link tautan tidak valid")
      let result = text.split('https://whatsapp.com/channel/')[1]
      let res = await DinzBotz.newsletterMetadata("invite", result)
      let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
      return m.reply(teks)
    }
    db.users[m.sender].exp += 300;
    break
case 'checkupdate': {
    if (!isOwner) return reply('Khusus Owner!')
    
    let { gitConfig } = require('./git') 
    
    if (!gitConfig.owner || !gitConfig.repo) {
        return reply(`⚠️ Konfigurasi GitHub belum diisi!\nSilakan edit file *git.js* dan isi owner serta nama repo.`)
    }

    await DinzBotz.sendMessage(from, { react: { text: "🔍", key: m.key } })
    
    try {
        let options = { headers: { 'User-Agent': 'Bot-WhatsApp' } }
        if (gitConfig.token) options.headers['Authorization'] = `token ${gitConfig.token}`

        let { data } = await axios.get(`https://api.github.com/repos/${gitConfig.owner}/${gitConfig.repo}/commits/main`, options)

        let author = data.commit.author.name
        let message = data.commit.message
        let date = new Date(data.commit.author.date).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })
        

        let incomingFiles = data.files.filter(f => f.status !== 'removed')

        let isMsgUpdate = incomingFiles.some(f => f.filename === 'DinzID.js') 
            ? "⚠️ *ADA UPDATE DI DinzID.js*" 
            : "✅ DinzID.js aman"

        let fileList = incomingFiles.slice(0, 10).map(f => {
            let icon = f.status === 'added' ? '🆕' : '📝'
            return `${icon} ${f.filename}`
        }).join('\n')

        
        if (incomingFiles.length > 10) fileList += `\n...dan ${incomingFiles.length - 10} file lainnya.`
        

        if (incomingFiles.length === 0) {
            fileList = "_Hanya penghapusan file sampah (Cleaner)_"
        }

        let msg = generateWAMessageFromContent(from, {
            viewOnceMessage: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({ 
                            text: `📡 *INFO UPDATE TERBARU*\n\n` +
                                  `📂 *Repo:* ${gitConfig.repo}\n` +
                                  `👤 *Author:* ${author}\n` +
                                  `📅 *Waktu:* ${date}\n` +
                                  `📝 *Pesan:* "${message}"\n\n` +
                                  `📂 *File Masuk (Upload/Edit):*\n${fileList}\n\n` +
                                  `_${isMsgUpdate}_` 
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({ text: "GitHub Config JS" }),
                        header: proto.Message.InteractiveMessage.Header.create({ title: "UPDATE CHECKER", subtitle: "New Uploads Only" }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "🚀 UPDATE SEKARANG",
                                        id: `${prefix}update yakin`
                                    })
                                }
                            ]
                        })
                    })
                }
            }
        }, { userJid: from, quoted: m })

        await DinzBotz.relayMessage(from, msg.message, { messageId: msg.key.id })

    } catch (e) {
        if (e.response && e.response.status === 404) return reply('❌ Repository tidak ditemukan! Cek file git.js.')
        reply(`❌ Error: ${e.message}`)
    }
}
break
case 'updatesc':
case 'update': {
    if (!isOwner) return reply('Khusus Owner!')
    const { exec } = require('child_process')
    const fs = require('fs')

    // --- 1. SETTING URL REPO (Pastikan Benar) ---
    const MY_GIT_URL = 'https://github.com/dinzid04/HutaoMD.git' 

    if (!text.includes('yakin')) {
        return reply(`⚠️ *PERINGATAN UPDATE BERSIH*\n\nFitur ini akan MENGHAPUS folder sistem lama (message, lib, src) dan mendownload ulang dari GitHub.\nDatabase aman.\n\nPastikan link repo benar: ${MY_GIT_URL}\n\nKetik *${prefix}update yakin* untuk lanjut.`)
    }

    await DinzBotz.sendMessage(m.chat, { react: { text: "🧹", key: m.key } })

    // --- 2. FUNGSI BACKUP DATABASE ---
    const backupDB = () => {
        try {
            if (fs.existsSync('./database')) {
                // Hapus backup lama biar ga numpuk
                if (fs.existsSync('./database_backup')) fs.rmSync('./database_backup', { recursive: true, force: true })
                // Copy database sekarang ke backup
                fs.cpSync('./database', './database_backup', { recursive: true })
            }
        } catch (e) { return false } 
        return true
    }

    // --- 3. FUNGSI RESTORE DATABASE ---
    const restoreDB = () => {
        try {
            if (fs.existsSync('./database_backup')) {
                // Hapus database kosong hasil clone (kalau ada)
                if (fs.existsSync('./database')) fs.rmSync('./database', { recursive: true, force: true })
                // Balikin database asli
                fs.cpSync('./database_backup', './database', { recursive: true })
                // Hapus backup
                fs.rmSync('./database_backup', { recursive: true, force: true })
            }
        } catch (e) {}
    }

    // --- 4. EKSEKUSI ---
    reply(`♻️ _Sedang membersihkan file lama & update..._`)

    // A. Backup Dulu
    if (!backupDB()) return reply('❌ Gagal Backup Database. Update dibatalkan.')

    // B. Hapus Folder Bermasalah (Biar Download Ulang)
    // Tambahkan folder lain di list ini jika ada yang ga ke-update
    const folderSampah = ['./message', './lib', './src', './plugins', './language'] 
    
    try {
        folderSampah.forEach(f => {
            if (fs.existsSync(f)) {
                fs.rmSync(f, { recursive: true, force: true })
            }
        })
    } catch (errHapus) {
        console.log('Gagal hapus folder lama (tidak masalah, lanjut git):', errHapus)
    }

    // C. Perintah Git (Force Pull)
    const cmds = [
        'git config --global --add safe.directory /home/container',
        'git init',
        'git remote remove origin || true',
        `git remote add origin ${MY_GIT_URL}`,
        'git fetch origin',
        'git reset --hard origin/main'
    ]

    exec(cmds.join(' && '), (err, stdout) => {
        // D. Restore Database Apapun Hasilnya
        restoreDB()

        if (err) {
            // Fallback ke branch 'master' kalau 'main' gagal
            const cmdMaster = [
                'git config --global --add safe.directory /home/container',
                'git fetch origin',
                'git reset --hard origin/master'
            ]
            
            exec(cmdMaster.join(' && '), (err2, stdout2) => {
                restoreDB()
                if (err2) return reply(`❌ Gagal Update Total:\n${err.message}\n\n${err2.message}`)
                
                reply(`✅ *UPDATE SUKSES (Master)*\n\nFolder lama telah diganti dengan versi terbaru.\n_Bot restarting..._`)
                setTimeout(() => { process.exit() }, 3000)
            })
            return
        }

        reply(`✅ *UPDATE SUKSES (Main)*\n\nFolder lama telah diganti dengan versi terbaru.\n_Bot restarting..._`)
        setTimeout(() => { process.exit() }, 3000)
    })
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
                await DinzBotz.sendMessage(m.chat, {
                  document: fileBuffer,
                  mimetype: 'application/javascript',
                  fileName: outName,
                  caption: '✅ *Mandarin encrypted!*'
                }, {
                  quoted: m
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
case "enchard":
case "encrypthard": {
    if (!isOwner) return reply(mess.owner)
    if (!m.quoted) return m.reply("reply file .js")
    if (!/javascript|text/.test(mime)) return reply("reply file .js")

    // --- IMPORT MANUAL (Wajib ada di dalam case jika malas scroll ke atas) ---
    // Mencoba load baileys, fallback ke path umum jika error
    let downloadContentFromMessage
    try {
        const baileys = require('@whiskeysockets/baileys')
        downloadContentFromMessage = baileys.downloadContentFromMessage
    } catch {
        try {
            const baileys = require('@adiwajshing/baileys')
            downloadContentFromMessage = baileys.downloadContentFromMessage
        } catch {
            return m.reply("Module baileys tidak ditemukan.")
        }
    }

    // --- BAGIAN FIX DOWNLOAD (Anti Bad Decrypt) ---
    let buffer = Buffer.from([])
    try {
        // Deteksi objek pesan (Support berbagai base bot: Hisoka, Betabotz, dll)
        // Kita cari objek yang berisi url/mediakey
        let msgContent = m.quoted.message || m.quoted.msg || m.quoted
        
        // Jika masih terbungkus documentMessage, buka bungkusnya
        if (msgContent.documentMessage) msgContent = msgContent.documentMessage
        
        // Download stream
        const stream = await downloadContentFromMessage(msgContent, 'document')
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
    } catch (e) {
        console.error(e)
        return m.reply(`Gagal download: ${e.message}. Pastikan file belum expired.`)
    }

    // --- BAGIAN FIX FILENAME (Anti Error Undefined) ---
    // Kita cek satu-satu keberadaan nama filenya biar gak crash
    let filename = 'file.js'
    if (m.quoted.fileName) filename = m.quoted.fileName
    else if (m.quoted.message?.documentMessage?.fileName) filename = m.quoted.message.documentMessage.fileName
    else if (m.quoted.msg?.fileName) filename = m.quoted.msg.fileName

    let safeFilename = filename.replace(/[^a-zA-Z0-9_.-]/g, '')
    let tmpPath = `./@hardenc-${safeFilename}`

    // Simpan file
    fs.writeFileSync(tmpPath, buffer)
    m.reply("Memproses encrypt hard code . . .")

    JsConfuser.obfuscate(fs.readFileSync(tmpPath).toString(), {
        target: "node",
        preset: "low",
        compact: true,
        minify: true,
        flatten: true,
        identifierGenerator: function() {
            const originalString = "YoimiyaID" // Hapus karakter aneh biar aman
            function stringAcak(panjang) {
                let hasil = ''
                const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
                for (let i = 0; i < panjang; i++) {
                    hasil += karakter.charAt(Math.floor(Math.random() * karakter.length))
                }
                return hasil
            }
            return originalString + "_" + stringAcak(3)
        },
        renameVariables: true,
        renameGlobals: true,
        stringEncoding: 0.01,
        stringSplitting: 0.1,
        stringConcealing: true,
        stringCompression: true,
        duplicateLiteralsRemoval: true,
        
        // --- FIX INVALID OPTION ---
        shuffle: true,
        // stack: false, // HAPUS INI (Penyebab error Invalid Option)
        // -------------------------

        controlFlowFlattening: false,
        opaquePredicates: false,
        deadCode: false,
        dispatcher: false,
        rgf: false,
        calculator: false,
        hexadecimalNumbers: false,
        movedDeclarations: true,
        objectExtraction: true,
        globalConcealing: true
    }).then(async (obfuscated) => {
        fs.writeFileSync(tmpPath, obfuscated)
        await DinzBotz.sendMessage(m.chat, {
            document: fs.readFileSync(tmpPath),
            mimetype: "application/javascript",
            fileName: filename,
            caption: "Encrypt File JS Sukses! Type:\nString"
        }, { quoted: m })
        if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath)
    }).catch(e => {
        m.reply("Error Encrypt: " + e)
        if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath)
    })
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
                await DinzBotz.sendMessage(m.chat, {
                  document: fileBuffer,
                  mimetype: 'application/javascript',
                  fileName: outName,
                  caption: '✅ *Invisible encrypted siap!*'
                }, {
                  quoted: m
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
                await DinzBotz.sendMessage(m.chat, {
                  document: fileBuffer,
                  mimetype: 'application/javascript',
                  fileName: outName,
                  caption: '✅ *Calcrick Chaos Core encrypted!*'
                }, {
                  quoted: m
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
                await DinzBotz.sendMessage(m.chat, {
                  document: fileBuffer,
                  mimetype: 'application/javascript',
                  fileName: outName,
                  caption: '✅ *Hardened Strong encrypted!* — SATURN 🔥'
                }, {
                  quoted: m
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
                await DinzBotz.sendMessage(m.chat, {
                  document: fileBuffer,
                  mimetype: 'application/javascript',
                  fileName: outName,
                  caption: '✅ *Hardened Ultra encrypted!* — SATURN 🔥'
                }, {
                  quoted: m
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
case 'ownermenu':
case 'groupmenu':
case 'storemenu': 
case 'aimenu': 
case 'aieditmenu': 
case 'downloadmenu': 
case 'stickermenu': 
case 'makermenu': 
case 'rpgmenu': 
case 'gamemenu': 
case 'islamicmenu': 
case 'genshinmenu': 
case 'animemenu': 
case 'nsfwmenu': 
case 'ephotomenu': 
case 'encmenu': 
case 'convertmenu': 
case 'searchmenu': 
case 'anonymousmenu': 
case 'toolsmenu': 
case 'funmenu': 
case 'quotesmenu': 
case 'primbonmenu':
case 'randommenu':
case 'stalkmenu':
case 'panelmenu':
case 'pterodactylmenu':
case 'othermenu': {
    const fs = require('fs')
    await DinzBotz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key } })
    let DinzID_sad
    switch (command) {
        case 'ownermenu': DinzID_sad = global.ownermenu(prefix); break
        case 'groupmenu': DinzID_sad = global.groupmenu(prefix); break
        case 'storemenu': DinzID_sad = global.storemenu(prefix); break
        case 'aimenu': DinzID_sad = global.aimenu(prefix); break
        case 'aieditmenu': DinzID_sad = global.aieditmenu(prefix); break
        case 'downloadmenu': DinzID_sad = global.downloadmenu(prefix); break
        case 'stickermenu': DinzID_sad = global.stickermenu(prefix); break
        case 'makermenu': DinzID_sad = global.makermenu(prefix); break
        case 'rpgmenu': DinzID_sad = global.rpgmenu(prefix); break
        case 'gamemenu': DinzID_sad = global.gamemenu(prefix); break
        case 'islamicmenu':  DinzID_sad = global.islamicmenu(prefix); break
        case 'genshinmenu':  DinzID_sad = global.genshinmenu(prefix); break
        case 'animemenu': DinzID_sad = global.animemenu(prefix); break
        case 'nsfwmenu': DinzID_sad = global.nsfwmenu(prefix); break
        case 'ephotomenu': DinzID_sad = global.ephotomenu(prefix); break
        case 'encmenu': DinzID_sad = global.encmenu(prefix); break
        case 'convertmenu': DinzID_sad = global.convertmenu(prefix); break
        case 'randommenu': DinzID_sad = global.randommenu(prefix); break
        case 'stalkmenu': DinzID_sad = global.stalkmenu(prefix); break
        case 'primbonmenu': DinzID_sad = global.primbonmenu(prefix); break
        case 'searchmenu': DinzID_sad = global.searchmenu(prefix); break
        case 'anonymousmenu': DinzID_sad = global.anonymousmenu(prefix); break
        case 'toolsmenu': DinzID_sad = global.toolsmenu(prefix); break
        case 'funmenu': DinzID_sad = global.funmenu(prefix); break
        case 'panelmenu': case 'pterodactylmenu': DinzID_sad = global.panelmenu(prefix); break
        case 'quotesmenu': DinzID_sad = global.quotesmenu(prefix); break
        case 'othermenu': DinzID_sad = global.othermenu(prefix); break
        default: DinzID_sad = global.allmenu(prefix, hituet, pushname, isPrem, runtime)
    }

    if (global.menuType === '1') {
        await DinzBotz.sendMessage(m.chat, {
            image: fs.readFileSync('./media/thumb.jpg'), 
            gifPlayback: true,
            caption: DinzID_sad,
        }, { quoted: m })
    } else if (global.menuType === '2') {
        await DinzBotz.sendMessage(m.chat, {
            image: fs.readFileSync('./media/thumb.jpg'), 
            caption: DinzID_sad,
        }, { quoted: m })
    } else if (global.menuType === '3') {
        await DinzBotz.sendMessage(m.chat, {
            caption: DinzID_sad,
            footer: global.botname || 'DinzBotz',
            image: fs.readFileSync('./media/thumb.jpg'),
            viewOnce: true,
            headerType: 4,
            buttons: [
                {
                    buttonId: `${prefix}owner`,
                    buttonText: { displayText: 'ᴏᴡɴᴇʀ' },
                    type: 1
                },
                {
                    buttonId: `${prefix}sewa`,
                    buttonText: { displayText: 'sᴇᴡᴀ ʙᴏᴛ' },
                    type: 1
                },
                {
                    buttonId: 'action',
                    buttonText: { displayText: 'ᴄʟɪᴄᴋ ʜᴇʀᴇ' },
                    type: 4,
                    nativeFlowInfo: {
                        name: 'single_select',
                        paramsJson: JSON.stringify({
                            title: 'ᴘɪʟɪʜ ᴍᴇɴᴜ',
                            sections: [
                                {
                                    title: `ᴍᴀɪɴ ᴍᴇɴᴜ`,
                                    highlight_label: `ᴜᴛᴀᴍᴀ`,
                                    rows: [
                                        { title: "ᴀʟʟ ᴍᴇɴᴜ", description: "Menampilkan Semua Menu", id: `${prefix}allmenu` },
                                        { title: "ᴏᴡɴᴇʀ ᴍᴇɴᴜ", description: "Menu Khusus Owner", id: `${prefix}ownermenu` },
                                        { title: "ɢʀᴏᴜᴘ ᴍᴇɴᴜ", description: "Menu Grup", id: `${prefix}groupmenu` },
                                        { title: "sᴛᴏʀᴇ ᴍᴇɴᴜ", description: "Menu Toko", id: `${prefix}storemenu` },
                                        { title: "ᴘᴀɴᴇʟ ᴍᴇɴᴜ", description: "Menu Pterodactyl", id: `${prefix}panelmenu` }
                                    ]
                                },
                                {
                                    title: `ғᴇᴀᴛᴜʀᴇ ᴍᴇɴᴜ`,
                                    highlight_label: ``,
                                    rows: [
                                        { title: "ᴘʀɪᴍʙᴏɴ ᴍᴇɴᴜ", description: "Fitur Primbom", id: `${prefix}primbonmenu` },
                                        { title: "sᴛᴀʟᴋ ᴍᴇɴᴜ", description: "Fitur Stalk", id: `${prefix}stalkmenu` },
                                        { title: "ʀᴀɴᴅᴏᴍᴍᴇɴᴜ", description: "Random", id: `${prefix}randommenu` },
                                        { title: "ᴀɪ ᴍᴇɴᴜ", description: "Fitur AI", id: `${prefix}aimenu` },
                                        { title: "ᴀɪ ᴇᴅɪᴛ ᴍᴇɴᴜ", description: "Fitur AI Edit", id: `${prefix}aieditmenu` },
                                        { title: "ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ", description: "Downloader", id: `${prefix}downloadmenu` },
                                        { title: "sᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ", description: "Menu Stiker", id: `${prefix}stickermenu` },
                                        { title: "ᴍᴀᴋᴇʀ ᴍᴇɴᴜ", description: "Menu Maker", id: `${prefix}makermenu` },
                                        { title: "ʀᴘɢ ᴍᴇɴᴜ", description: "Game RPG", id: `${prefix}rpgmenu` },
                                        { title: "ɢᴀᴍᴇ ᴍᴇɴᴜ", description: "Mini Games", id: `${prefix}gamemenu` },
                                        { title: "ɪsʟᴀᴍɪᴄ ᴍᴇɴᴜ", description: "Fitur Islami", id: `${prefix}islamicmenu` },
                                        { title: "ɢᴇɴsʜɪɴ ᴍᴇɴᴜ", description: "Info Genshin Impact", id: `${prefix}genshinmenu` },
                                        { title: "ᴀɴɪᴍᴇ ᴍᴇɴᴜ", description: "Info Anime", id: `${prefix}animemenu` },
                                        { title: "ɴsғᴡ ᴍᴇɴᴜ", description: "Menu 18+", id: `${prefix}nsfwmenu` },
                                        { title: "ᴇᴘʜᴏᴛᴏ ᴍᴇɴᴜ", description: "Ephoto 360", id: `${prefix}ephotomenu` },
                                        { title: "ᴇɴᴄ ᴍᴇɴᴜ", description: "Tools Enkripsi", id: `${prefix}encmenu` },
                                        { title: "ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ", description: "Tools Konversi", id: `${prefix}convertmenu` },
                                        { title: "sᴇᴀʀᴄʜ ᴍᴇɴᴜ", description: "Pencarian", id: `${prefix}searchmenu` },
                                        { title: "ᴀɴᴏɴʏᴍᴏᴜs ᴍᴇɴᴜ", description: "Menu Anonymous", id: `${prefix}anonymousmenu` },
                                        { title: "ᴛᴏᴏʟs ᴍᴇɴᴜ", description: "Alat Bantu", id: `${prefix}toolsmenu` },
                                        { title: "ғᴜɴ ᴍᴇɴᴜ", description: "Menu Hiburan", id: `${prefix}funmenu` },
                                        { title: "ǫᴜᴏᴛᴇs ᴍᴇɴᴜ", description: "Menu Kata-kata", id: `${prefix}quotesmenu` },
                                        { title: "ᴏᴛʜᴇʀ ᴍᴇɴᴜ", description: "Menu Lainnya", id: `${prefix}othermenu` }
                                    ]
                                }
                            ]
                        })
                    }
                }
            ],
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                    title: global.botname,
                    body: global.ownername,
                    thumbnailUrl: "https://cdn.dinzid.biz.id/Ao86.jpg",
                    sourceUrl: "https://whatsapp.com/channel/0029VbAuu0fFHWpvAZAS3d17/107",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m })
    } else {
        await DinzBotz.sendMessage(m.chat, {
            image: fs.readFileSync('./media/thumb.jpg'), 
            caption: DinzID_sad,
        }, { quoted: m })
    }
}
break
case 'allmenu': {
    await sendMenuDisplay()
}
break
case 'rvo':
case 'readviewonce': {
    if (!m.quoted) return reply('Reply pesan View Once!')
    
    let msg = m.quoted.message
    if (!msg) return reply('Gagal akses pesan. Coba reply ulang.')

    let keys = Object.keys(msg)
    let type = keys.find(k => k === 'viewOnceMessageV2' || k === 'viewOnceMessage')
    
    let finalMsg = msg
    let mediaType = ''

    if (type) {
        finalMsg = msg[type].message
        mediaType = Object.keys(finalMsg).find(k => k === 'imageMessage' || k === 'videoMessage' || k === 'audioMessage')
    } else {
        mediaType = keys.find(k => k === 'imageMessage' || k === 'videoMessage' || k === 'audioMessage')
        if (!mediaType || !msg[mediaType].viewOnce) {
            return reply('⚠️ Ini bukan pesan View Once (Sekali Lihat)!')
        }
    }

    if (!mediaType) return reply('Tipe media tidak dikenali.')

    let realType = mediaType === 'imageMessage' ? 'image' : mediaType === 'videoMessage' ? 'video' : 'audio'
    
    try {
        let stream = await downloadContentFromMessage(finalMsg[mediaType], realType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }

        if (realType === 'video') {
            await DinzBotz.sendMessage(m.chat, { video: buffer, caption: '🔓 Sukses Terbuka' }, { quoted: m })
        } else if (realType === 'image') {
            await DinzBotz.sendMessage(m.chat, { image: buffer, caption: '🔓 Sukses Terbuka' }, { quoted: m })
        } else if (realType === 'audio') {
            await DinzBotz.sendMessage(m.chat, { audio: buffer, ptt: true }, { quoted: m })
        }

    } catch (err) {
        console.log(err)
        reply('❌ Gagal download media. Mungkin sudah kadaluarsa.')
    }
}
break
case 'promote':
case 'admin': {
    if (!isGroup) return reply('Fitur ini khusus di dalam grup!')
    if (!isBotAdmins) return reply('Bot harus menjadi Admin grup dulu!')
    if (!isAdmins && !isOwner) return reply('Fitur ini khusus Admin grup!')

    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    if (!users || users === '@s.whatsapp.net') return reply('Tag atau Reply orang yang mau dijadikan Admin!')

    await DinzBotz.groupParticipantsUpdate(m.chat, [users], 'promote')
    .then((res) => {
        reply(`✅ Sukses! @${users.split('@')[0]} sekarang adalah Admin.`)
    }).catch((err) => {
        reply('Gagal! Pastikan nomor valid atau bot adalah admin.')
    })
}
break

case 'demote':
case 'unadmin': {
    if (!isGroup) return reply('Fitur ini khusus di dalam grup!')
    if (!isBotAdmins) return reply('Bot harus menjadi Admin grup dulu!')
    if (!isAdmins && !isOwner) return reply('Fitur ini khusus Admin grup!')

    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    if (!users || users === '@s.whatsapp.net') return reply('Tag atau Reply orang yang mau diturunkan jabatannya!')

    await DinzBotz.groupParticipantsUpdate(m.chat, [users], 'demote')
    .then((res) => {
        reply(`✅ Sukses! @${users.split('@')[0]} telah diturunkan menjadi Member.`)
    }).catch((err) => {
        reply('Gagal! Pastikan nomor valid atau bot adalah admin.')
    })
}
break
case "1gbv2": case "2gbv2": case "3gbv2": case "4gbv2": case "5gbv2": case "6gbv2": case "7gbv2": case "8gbv2": case "9gbv2": case "10gbv2": case "unlimitedv2": case "unliv2": {
if (!DinzTheCreator && !isGrupPrem) return m.reply('Only owner dan grup dengan akses Reseller')
if (!text) return reply("username")
global.panel = text
var ram
var disknya
var cpu
if (command == "1gbv2") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gbv2") {
ram = "2000"
disknya = "2000"
cpu = "60"
} else if (command == "3gbv2") {
ram = "3000"
disknya = "3000"
cpu = "80"
} else if (command == "4gbv2") {
ram = "4000"
disknya = "4000"
cpu = "100"
} else if (command == "5gbv2") {
ram = "5000"
disknya = "5000"
cpu = "120"
} else if (command == "6gbv2") {
ram = "6000"
disknya = "6000"
cpu = "140"
} else if (command == "7gbv2") {
ram = "7000"
disknya = "7000"
cpu = "160"
} else if (command == "8gbv2") {
ram = "8000"
disknya = "8000"
cpu = "180"
} else if (command == "9gbv2") {
ram = "9000"
disknya = "9000"
cpu = "200"
} else if (command == "10gbv2") {
ram = "10000"
disknya = "10000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+"990"
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
"password": password
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
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_21",
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
var teks = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
* Disk : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
* ${global.domainV2}

*Syarat & Ketentuan :*
${global.teksPanel}
`
await fs.writeFileSync("akunpanel.txt", teks)
await DinzBotz.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
delete global.panel
}
break

case "listpanelv2": case "listpv2": case "listserverv2": {
if (!DinzTheCreator) return m.reply(mess.owner)
if (!global.apikey) return m.reply("Apikey tidak ditemukan!\nPastikan di settings.js *global.apikey* sudah di isi!")
let page = 1
let allServers = []
  while (true) {
    let res = await fetch(`${global.domainV2}/api/application/servers?page=${page}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${global.apikeyV2}`
      }
    })

    let data = await res.json()
    if (!data.data || data.data.length === 0) break

    allServers.push(...data.data)

    if (!data.meta?.pagination || page >= data.meta.pagination.total_pages) break
    page++
  }

  if (!allServers.length) return m.reply("Tidak ada server panel.")

  let teks = `*List all server panel*\n> #Total: *${allServers.length} server*\n\n`
  let no = 1

  for (let srv of allServers) {
    let s = srv.attributes
    let uuid = s.uuid.split("-")[0]
    let status = "unknown"

    try {
      let res = await fetch(`${global.domain}/api/client/servers/${uuid}/resources`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${global.capikey}`
        }
      })
      let json = await res.json()
      status = json.attributes?.current_state?.toUpperCase() || "unknown"
    } catch (e) {
      status = "unknown"
    }

    teks += `  ⚪ ID Server : *${s.id}*\n`
    teks += `  ⚫ ID User : *${s.user}*\n`
    teks += `  📍 Nama : *${s.name}*\n`
    teks += `  💾 RAM : *${s.limits.memory == 0 ? "Unlimited" : (s.limits.memory / 1000) + "GB"}*\n`
    teks += `┣𖣠 Status : *${status}*\n\n`
  }
  return DinzBotz.sendMessage(m.chat, { text: teks }, { quoted: m })
}
break

case "delpanelv2":
case "delpv2": {
  if (!DinzTheCreator) return m.reply(mess.owner)
  if (global.apikey.length < 1) return m.reply("Apikey tidak ditemukan!\nPastikan di settings.js *global.apikey* sudah di isi!")
  if (!args[0]) return reply(`id servernya\n\nuntuk melihat id server ketik *${prefix}listpanel*`)

  let f = await fetch(global.domainV2 + "/api/application/servers?page=1", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + global.apikeyV2
    }
  })
  let result = await f.json()
  let servers = result.data
  let deletedUserId = null
  let deletedServerName = null

  for (let server of servers) {
    let s = server.attributes
    if (args[0] == s.id.toString()) {
      deletedUserId = s.user // <-- ambil user ID dari server
      deletedServerName = s.name

      // Hapus server
      await fetch(global.domainV2 + `/api/application/servers/${s.id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + global.apikeyV2
        }
      })
    }
  }
  if (!deletedUserId) return m.reply("*ID Server* Tidak Ditemukan")
  // Hapus user berdasarkan user ID
  await fetch(global.domainV2 + `/api/application/users/${deletedUserId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + global.apikeyV2
    }
  })
  m.reply(`Berhasil Menghapus Akun Panel *${capital(deletedServerName)}* (Server & User)`)
}
break

case "cadminv2": case "cadpv2": {
if (!DinzTheCreator) return Reply(mess.owner)
if (!text) return reply("username")
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+"001"
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
"password": password
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
var teks = `*Data Akun Admin Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}
* ${global.domainV2}

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await fs.writeFileSync("./akunpanel.txt", teks)
await DinzBotz.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
}
break

case "deladminv2": case "deladpv2": {
if (!DinzTheCreator) return m.reply(mess.owner)
if (!args[0]) return reply(`id nya\n\nuntuk melihat id admin ketik *${prefix}listadmin*`)
let cek = await fetch(global.domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apikeyV2
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
let delusr = await fetch(global.domainV2 + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("ID Admin Tidak Ditemukan!")
m.reply(`Berhasil Menghapus Admin Panel *${capital(getid)}*`)
}
break

case "listadminv2": case "listadpv2": {
if (!DinzTheCreator) return m.reply(mess.owner)
let cek = await fetch(global.domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak Ada Admin Panel")
var teks = "*List all admin panel*\n\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `  ⚪ ID User : *${i.attributes.id}*
   📍 Nama : *${i.attributes.first_name}*\n\n`
})
m.reply(teks)
}
break

  case "clearpanelv2": case "clearserverv2": { 
if (!DinzTheCreator) return reply(mess.owner)
await reply(`*Memproses penghapusan semua user & server panel ⚠️*`)
try {
const headers = {
  "Authorization": "Bearer " + global.apikeyV2,
  "Content-Type": "application/json",
  "Accept": "application/json",
};

async function getUsers() {
  try {
    const res = await axios.get(`${global.domainV2}/api/application/users`, { headers });
    return res.data.data;
  } catch (error) {
    reply(JSON.stringify(error.response?.data || error.message, null, 2))
    return [];
  }
}

async function getServers() {
  try {
    const res = await axios.get(`${global.domainV2}/api/application/servers`, { headers });
    return res.data.data;
  } catch (error) {
    reply(JSON.stringify(error.response?.data || error.message, null, 2))
    return [];
  }
}
async function deleteServer(serverUUID) {
  try {
    await axios.delete(`${global.domainV2}/api/application/servers/${serverUUID}`, { headers });
    console.log(`Server ${serverUUID} berhasil dihapus.`);
  } catch (error) {
    console.error(`Gagal menghapus server ${serverUUID}:`, error.response?.data || error.message);
  }
}
async function deleteUser(userID) {
  try {
    await axios.delete(`${global.domainV2}/api/application/users/${userID}`, { headers });
    console.log(`User ${userID} berhasil dihapus.`);
  } catch (error) {
    console.error(`Gagal menghapus user ${userID}:`, error.response?.data || error.message);
  }
}
async function deleteNonAdminUsersAndServers() {
  const users = await getUsers();
  const servers = await getServers();
  let totalSrv = 0
  for (const user of users) {
    if (user.attributes.root_admin) {
      console.log(`Lewati admin: ${user.attributes.username}`);
      continue; // Lewati admin
    }
    const userID = user.attributes.id;
    const userEmail = user.attributes.email;
    console.log(`Menghapus user: ${user.attributes.username} (${userEmail})`);
    // Cari server yang dimiliki user ini
    const userServers = servers.filter(srv => srv.attributes.user === userID);
    // Hapus semua server user ini
    for (const server of userServers) {
      await deleteServer(server.attributes.id);
      totalSrv += 1
    }
    // Hapus user setelah semua servernya terhapus
    await deleteUser(userID);
  }
await reply(`*Finished Cleaning the Panel ✅*

- Total *${totalSrv}* (user & server) panel dihapus 

*⚠️ Server yang dihapus bukan admin panel*`)
}
// Jalankan fungsi
return deleteNonAdminUsersAndServers();
} catch (err) {
return reply(`${JSON.stringify(err, null, 2)}`)
}
}
break

case "addserver": case "addsrv": {
  if (!DinzTheCreator) return m.reply(mess.owner)
  if (!text) return reply(`id,nama,ram\nKetik: *${prefix}listpanel* untuk melihat id`);
  let [usr_id, nama, ramInput] = text.split(",");
  if (!usr_id || !nama || !ramInput) return reply(`id,nama,ram\nKetik: *${prefix}listpanel* untuk melihat id`);
  usr_id = usr_id.trim();
  nama = nama.trim();
  ramInput = ramInput.trim().toLowerCase();

  let ram, disknya, cpu;

  if (["unli", "unlimited"].includes(ramInput)) {
    ram = disknya = cpu = 0;
  } else if (/^\d+gb$/.test(ramInput)) {
    const gb = parseInt(ramInput.replace("gb", ""));
    if (gb < 1 || gb > 10) return reply("RAM hanya boleh dari 1GB sampai 10GB atau 'unli'");
    ram = gb * 1000;
    disknya = gb * 1000;
    cpu = 20 + (gb * 20); // contoh: 1gb = 40%, 2gb = 60%, dst
  } else {
    return reply("Format RAM salah. Gunakan seperti: 1gb - unli");
  }

  const desc = tanggal(Date.now());

  const getEgg = await fetch(`${global.domainV2}/api/application/nests/${nestid}/eggs/${egg}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${global.apikeyV2}`
    }
  });

  const eggData = await getEgg.json();
  const startup_cmd = eggData.attributes.startup;

  const createServer = await fetch(`${global.domainV2}/api/application/servers`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${global.apikeyV2}`
    },
    body: JSON.stringify({
      name: nama,
      description: desc,
      user: parseInt(usr_id),
      egg: parseInt(egg),
      docker_image: "ghcr.io/parkervcp/yolks:nodejs_20",
      startup: startup_cmd,
      environment: {
        INST: "npm", USER_UPLOAD: "0",
        AUTO_UPDATE: "0", CMD_RUN: "npm start"
      },
      limits: {
        memory: parseInt(ram),
        swap: 0,
        disk: parseInt(disknya),
        io: 500,
        cpu: parseInt(cpu)
      },
      feature_limits: { databases: 5, backups: 5, allocations: 5 },
      deploy: {
        locations: [parseInt(loc)],
        dedicated_ip: false,
        port_range: [],
      },
    })
  });

  const result = await createServer.json();

  if (result.errors) return reply("Gagal menambah server:\n" + JSON.stringify(result.errors[0], null, 2));
  const server = result.attributes;

  let teks = `*Succes Create New Server ✅*
- User ID : ${usr_id}
- Server ID : ${server.id}
- Nama Server : ${nama}

*Server Specifications 🖥️*
- Ram : ${ram == 0 ? "Unlimited" : `${ram / 1000}GB`}
- Disk : ${disknya == 0 ? "Unlimited" : `${disknya / 1000}GB`}
- CPU : ${cpu == 0 ? "Unlimited" : cpu + "%"}`;

  await DinzBotz.sendMessage(m.chat, { text: teks, contextInfo: { isForwarded: true } }, { quoted: m });
}
break

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!DinzTheCreator && !isGrupPrem) return m.reply('Only owner dan grup dengan akses Reseller')
if (!text) return reply("username")
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
disknya = "2000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "3000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "4000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "5000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "6000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "7000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "8000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "9000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "10000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+"990"
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
"password": password
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
var teks = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
* Disk : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
${global.teksPanel}
`
await fs.writeFileSync("akunpanel.txt", teks)
await DinzBotz.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
delete global.panel
}
break

case "listpanel": case "listp": case "listserver": {
if (!DinzTheCreator) return m.reply(mess.owner)
if (!global.apikey) return m.reply("Apikey tidak ditemukan!\nPastikan di settings.js *global.apikey* sudah di isi!")
let page = 1
let allServers = []
  while (true) {
    let res = await fetch(`${global.domain}/api/application/servers?page=${page}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${global.apikey}`
      }
    })

    let data = await res.json()
    if (!data.data || data.data.length === 0) break

    allServers.push(...data.data)

    if (!data.meta?.pagination || page >= data.meta.pagination.total_pages) break
    page++
  }

  if (!allServers.length) return m.reply("Tidak ada server panel.")

  let teks = `*List all server panel*\n> #Total: *${allServers.length} server*\n\n`
  let no = 1

  for (let srv of allServers) {
    let s = srv.attributes
    let uuid = s.uuid.split("-")[0]
    let status = "unknown"

    try {
      let res = await fetch(`${global.domain}/api/client/servers/${uuid}/resources`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${global.capikey}`
        }
      })
      let json = await res.json()
      status = json.attributes?.current_state?.toUpperCase() || "unknown"
    } catch (e) {
      status = "unknown"
    }

    teks += `┣𖣠 ID Server : *${s.id}*\n`
    teks += `┣𖣠 ID User : *${s.user}*\n`
    teks += `┣𖣠 Nama : *${s.name}*\n`
    teks += `┣𖣠 RAM : *${s.limits.memory == 0 ? "Unlimited" : (s.limits.memory / 1000) + "GB"}*\n`
    teks += `┣𖣠 Status : *${status}*\n\n`
  }
  return DinzBotz.sendMessage(m.chat, { text: teks }, { quoted: m })
}
break

case "delpanel":
case "delp": {
  if (!DinzTheCreator) return m.reply(mess.owner)
  if (global.apikey.length < 1) return m.reply("Apikey tidak ditemukan!\nPastikan di settings.js *global.apikey* sudah di isi!")
  if (!args[0]) return reply(`id servernya\n\nuntuk melihat id server ketik *${prefix}listpanel*`)

  let f = await fetch(global.domain + "/api/application/servers?page=1", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + global.apikey
    }
  })
  let result = await f.json()
  let servers = result.data
  let deletedUserId = null
  let deletedServerName = null

  for (let server of servers) {
    let s = server.attributes
    if (args[0] == s.id.toString()) {
      deletedUserId = s.user // <-- ambil user ID dari server
      deletedServerName = s.name

      // Hapus server
      await fetch(global.domain + `/api/application/servers/${s.id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + global.apikey
        }
      })
    }
  }
  if (!deletedUserId) return m.reply("*ID Server* Tidak Ditemukan")
  // Hapus user berdasarkan user ID
  await fetch(global.domain + `/api/application/users/${deletedUserId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + global.apikey
    }
  })
  m.reply(`Berhasil Menghapus Akun Panel *${capital(deletedServerName)}* (Server & User)`)
}
break

case "cadmin": case "cadp": {
if (!DinzTheCreator) return m.reply(mess.owner)
if (!text) return reply("username")
let username = text.toLowerCase()
let email = username+"@epic.com"
let name = capital(args[0])
let password = username+"001"
let f = await fetch(global.domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (!m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `*Yours admin panel 📦*
* *ID User :* ${user.id}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}

*Rules Admin Panel ⚠️*
* Jangan Maling Script
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* No rusuh`
await DinzBotz.sendMessage(orang, {
  text: teks,
  contextInfo: { isForwarded: true }
}, { quoted: m });
}
break

case "cadmin2": {
if (!DinzTheCreator) return Reply(mess.owner)
if (!text) return reply("username")
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+"001"
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
"password": password
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
var teks = `*Data Akun Admin Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}
* ${global.domain}

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await fs.writeFileSync("./akunpanel.txt", teks)
await DinzBotz.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
}
break

case "deladmin": case "deladp": {
if (!DinzTheCreator) return m.reply(mess.owner)
if (!args[0]) return reply(`id nya\n\nuntuk melihat id admin ketik *${prefix}listadmin*`)
let cek = await fetch(global.domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apikey
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
let delusr = await fetch(global.domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("ID Admin Tidak Ditemukan!")
m.reply(`Berhasil Menghapus Admin Panel *${capital(getid)}*`)
}
break

case "listadmin": case "listadp": {
if (!DinzTheCreator) return m.reply(mess.owner)
let cek = await fetch(global.domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak Ada Admin Panel")
var teks = "*List all admin panel*\n\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += ` ⚪ ID User : *${i.attributes.id}*
   📍 Nama : *${i.attributes.first_name}*\n\n`
})
m.reply(teks)
}
break

case "hpsallserver": case "clearpanel": case "clearserver": { 
if (!DinzTheCreator) return reply(mess.owner)
await reply(`*Memproses penghapusan semua user & server panel ⚠️*`)
try {
const headers = {
  "Authorization": "Bearer " + global.apikey,
  "Content-Type": "application/json",
  "Accept": "application/json",
};

async function getUsers() {
  try {
    const res = await axios.get(`${global.domain}/api/application/users`, { headers });
    return res.data.data;
  } catch (error) {
    reply(JSON.stringify(error.response?.data || error.message, null, 2))
    return [];
  }
}

async function getServers() {
  try {
    const res = await axios.get(`${global.domain}/api/application/servers`, { headers });
    return res.data.data;
  } catch (error) {
    reply(JSON.stringify(error.response?.data || error.message, null, 2))
    return [];
  }
}
async function deleteServer(serverUUID) {
  try {
    await axios.delete(`${global.domain}/api/application/servers/${serverUUID}`, { headers });
    console.log(`Server ${serverUUID} berhasil dihapus.`);
  } catch (error) {
    console.error(`Gagal menghapus server ${serverUUID}:`, error.response?.data || error.message);
  }
}
async function deleteUser(userID) {
  try {
    await axios.delete(`${global.domain}/api/application/users/${userID}`, { headers });
    console.log(`User ${userID} berhasil dihapus.`);
  } catch (error) {
    console.error(`Gagal menghapus user ${userID}:`, error.response?.data || error.message);
  }
}
async function deleteNonAdminUsersAndServers() {
  const users = await getUsers();
  const servers = await getServers();
  let totalSrv = 0
  for (const user of users) {
    if (user.attributes.root_admin) {
      console.log(`Lewati admin: ${user.attributes.username}`);
      continue; // Lewati admin
    }
    const userID = user.attributes.id;
    const userEmail = user.attributes.email;
    console.log(`Menghapus user: ${user.attributes.username} (${userEmail})`);
    // Cari server yang dimiliki user ini
    const userServers = servers.filter(srv => srv.attributes.user === userID);
    // Hapus semua server user ini
    for (const server of userServers) {
      await deleteServer(server.attributes.id);
      totalSrv += 1
    }
    // Hapus user setelah semua servernya terhapus
    await deleteUser(userID);
  }
await reply(`*Finished Cleaning the Panel ✅*

- Total *${totalSrv}* (user & server) panel dihapus 

*⚠️ Server yang dihapus bukan admin panel*`)
}
// Jalankan fungsi
return deleteNonAdminUsersAndServers();
} catch (err) {
return reply(`${JSON.stringify(err, null, 2)}`)
}
}
break
case "addserver": case "addsrv": {
  if (!DinzTheCreator) return m.reply(mess.owner)
  if (!text) return reply(`id,nama,ram\nKetik: *${prefix}listpanel* untuk melihat id`);
  let [usr_id, nama, ramInput] = text.split(",");
  if (!usr_id || !nama || !ramInput) return reply(`id,nama,ram\nKetik: *${prefix}listpanel* untuk melihat id`);
  usr_id = usr_id.trim();
  nama = nama.trim();
  ramInput = ramInput.trim().toLowerCase();

  let ram, disknya, cpu;

  if (["unli", "unlimited"].includes(ramInput)) {
    ram = disknya = cpu = 0;
  } else if (/^\d+gb$/.test(ramInput)) {
    const gb = parseInt(ramInput.replace("gb", ""));
    if (gb < 1 || gb > 10) return reply("RAM hanya boleh dari 1GB sampai 10GB atau 'unli'");
    ram = gb * 1000;
    disknya = gb * 1000;
    cpu = 20 + (gb * 20); // contoh: 1gb = 40%, 2gb = 60%, dst
  } else {
    return reply("Format RAM salah. Gunakan seperti: 1gb - unli");
  }

  const desc = tanggal(Date.now());

  const getEgg = await fetch(`${global.domain}/api/application/nests/${nestid}/eggs/${egg}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${global.apikey}`
    }
  });

  const eggData = await getEgg.json();
  const startup_cmd = eggData.attributes.startup;

  const createServer = await fetch(`${global.domain}/api/application/servers`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${global.apikey}`
    },
    body: JSON.stringify({
      name: nama,
      description: desc,
      user: parseInt(usr_id),
      egg: parseInt(egg),
      docker_image: "ghcr.io/parkervcp/yolks:nodejs_20",
      startup: startup_cmd,
      environment: {
        INST: "npm", USER_UPLOAD: "0",
        AUTO_UPDATE: "0", CMD_RUN: "npm start"
      },
      limits: {
        memory: parseInt(ram),
        swap: 0,
        disk: parseInt(disknya),
        io: 500,
        cpu: parseInt(cpu)
      },
      feature_limits: { databases: 5, backups: 5, allocations: 5 },
      deploy: {
        locations: [parseInt(loc)],
        dedicated_ip: false,
        port_range: [],
      },
    })
  });

  const result = await createServer.json();

  if (result.errors) return reply("Gagal menambah server:\n" + JSON.stringify(result.errors[0], null, 2));
  const server = result.attributes;

  let teks = `*Succes Create New Server ✅*
- User ID : ${usr_id}
- Server ID : ${server.id}
- Nama Server : ${nama}

*Server Specifications 🖥️*
- Ram : ${ram == 0 ? "Unlimited" : `${ram / 1000}GB`}
- Disk : ${disknya == 0 ? "Unlimited" : `${disknya / 1000}GB`}
- CPU : ${cpu == 0 ? "Unlimited" : cpu + "%"}`;

  await DinzBotz.sendMessage(m.chat, { text: teks, contextInfo: { isForwarded: true } }, { quoted: m });
}
break;
case "addgrupreseller":
case "addgrupreseller":
case "addseller": {
  if (!DinzTheCreator) return reply(mess.owner)
  if (!m.isGroup) return reply(mess.group)
  const input = m.chat
  if (datagc.includes(input))
    return reply(`Grup ini sudah di beri akses reseller panel!`)
  datagc.push(input)
  await fs.writeFileSync("./database/reseller.json", JSON.stringify(datagc, null, 2))
  reply(`Berhasil menambah grup reseller panel ✅`)
}
break
case "delgrupseller":
case "delgrupreseller": {
  if (!DinzTheCreator) return reply(mess.owner)
  if (datagc.length < 1) return reply("Tidak ada grup reseller panel!")
  if (!text && m.isGroup) {
    if (!datagc.includes(m.chat))
      return reply("Grup ini bukan grup reseller panel!")

    datagc.splice(datagc.indexOf(m.chat), 1)
    fs.writeFileSync("./database/reseller.json", JSON.stringify(datagc, null, 2))
    return reply("Berhasil menghapus grup reseller panel ✅")
  }

  if (!text)
    return reply(
      `Masukkan *nomor list* grup!
      
*Example:*
- ${prefix}delresseler 2
- ${prefix}listresseler (untuk lihat detail)`
    )

  if (text === "all") {
    datagc.length = 0
    fs.writeFileSync("./database/reseller.json", JSON.stringify(datagc, null, 2))
    return reply("Berhasil menghapus *semua* grup reseller panel ✅")
  }

  let nomor = parseInt(text)
  if (isNaN(nomor))
    return reply("Masukkan *angka* sesuai nomor di list!")

  let index = nomor - 1
  if (index < 0 || index >= datagc.length)
    return reply("Nomor tidak valid!")

  let removed = datagc[index]
  datagc.splice(index, 1)
  fs.writeFileSync("./database/reseller.json", JSON.stringify(datagc, null, 2))

  reply(
    `Berhasil menghapus grup reseller ✅
- ID Groups: *${removed}*`
  )
}
break
case "listgrupseller":
case "listress": {
  if (!DinzTheCreator) return reply(mess.owner)
  if (datagc.length < 1) return reply("Tidak ada group reseller di data!")

  let teks = `*List all grup reseller*\n\n`
  let no = 1

  for (let id of datagc) {
    let name = "Tidak ditemukan"
    try {
      let meta = await DinzBotz.groupMetadata(id)
      name = meta.subject || name
    } catch {}

    teks += `${no}. *${name}*\n`
    teks += ` ┣𖣠 Id: \`${id}\`\n\n`
    no++
  }

  teks += `*Cara hapus:*
- ${prefix}delresseler nomornya
- ${prefix}delresseler langsung di grup`

  await DinzBotz.sendMessage(m.chat, { text: teks }, { quoted: m })
}
break
case 'setsectime': {
    if (!isOwner) return reply(mess.owner)
    if (!args[0]) return reply(`Masukkan durasi dalam menit!\nContoh: ${prefix + command} 20`)
    
    let amount = parseInt(args[0])
    if (isNaN(amount)) return reply('❌ Durasi harus berupa angka (menit)!')

    try {
        const fs = require('fs')
        const configPath = './database/security_config.json'
        
        let data = { duration: amount }
        fs.writeFileSync(configPath, JSON.stringify(data, null, 2))
        
        reply(`✅ Berhasil mengatur durasi keamanan menjadi *${amount} Menit*.\nEfek akan berlaku saat bot direstart.`)
    } catch (e) {
        console.error(e)
        reply('❌ Gagal menyimpan konfigurasi.')
    }
}
break
case 'getsession':
      if (!DinzTheCreator) return reply(mess.only.owner)
      reply('Tunggu sebentar, saat ini sedang mengambil file sesi Anda')
      let sesi = await fs.readFileSync('./session/creds.json')
      DinzBotz.sendMessage(m.chat, {
        document: sesi,
        mimetype: 'application/json',
        fileName: 'creds.json'
      }, {
        quoted: m
      })
      break
case 'delsesi':
    case 'clearsession': {

      fs.readdir("./session", async function (err, files) {
        if (err) {
          console.log('Unable to scan directory: ' + err);
          return reply('Unable to scan directory: ' + err);
        }
        let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
          item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
        )
        console.log(filteredArray.length);
        let teks = `Terdeteksi ${filteredArray.length} file kenangan <3\n\n`
        if (filteredArray.length == 0) return reply(`${teks}`)
        filteredArray.map(function (e, i) {
          teks += (i + 1) + `. ${e}\n`
        })
        reply(`${teks}`)
        await sleep(2000)
        reply("Menghapus file Kenangan...")
        await filteredArray.forEach(function (file) {
          fs.unlinkSync(`./session/${file}`)
        });
        await sleep(2000)
        reply("Berhasil menghapus semua Kenangan di folder session")
      });
    }
    db.users[m.sender].exp += 300;
    break
// --- B only
case 'sposearch':
case 'spotifysearch':
case 'spotify': {
    if (!text) return reply(`Contoh : ${prefix + command} 505 Arctic Monkeys`)
    
    const axios = require('axios')
    const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require('@whiskeysockets/baileys')

    async function searchSpotify(text) {
        try {
            const { data } = await axios.get(`https://api.vreden.my.id/api/v1/search/spotify?query=${text}&limit=10`)
            
            if (!data.status || !data.result || !data.result.search_data || data.result.search_data.length === 0) return reply('Lagu tidak ditemukan.')

            let caption = data.result.search_data.map((v) => {
                return {
                    header: "",
                    title: v.title,
                    description: `👤 ${v.artist} | ⏱️ ${v.duration}`,
                    id: `${prefix}spotifydl ${v.song_link}`
                }
            })

            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: {
                            body: {
                                text: `🔎 Spotify Search\n\nHasil Pencarian Dari: ${text}\nSilahkan Pilih List di bawah ini`
                            },
                            footer: {
                                text: global.botname
                            },
                            header: proto.Message.InteractiveMessage.Header.create({
                                ...(await prepareWAMessageMedia({
                                    image: {
                                        url: data.result.search_data[0].cover_img
                                    }
                                }, {
                                    upload: DinzBotz.waUploadToServer
                                })),
                                title: '',
                                gifPlayback: true,
                                subtitle: global.ownername,
                                hasMediaAttachment: false
                            }),
                            nativeFlowMessage: {
                                buttons: [{
                                    name: "single_select",
                                    buttonParamsJson: JSON.stringify({
                                        title: "CLICK HERE",
                                        sections: [{
                                            title: "SPOTIFY LIST",
                                            rows: caption
                                        }]
                                    })
                                }]
                            }
                        }
                    }
                }
            }, {
                quoted: m
            }, {})

            await DinzBotz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            })

        } catch (e) {
            console.log(e)
            reply('Maaf, terjadi kesalahan saat mencari lagu.')
        }
    }

    searchSpotify(text)
}
break
case 'spodl':
case 'spotifydl': {
    if (!text) return reply('Mana link-nya?')
    
    const axios = require('axios')
    await DinzBotz.sendMessage(m.chat, { react: { text: "⬇️", key: m.key } })

    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/d/spotifyv2?url=${text}`)
        
        if (!data.status || !data.data) return reply('Gagal mengambil data lagu.')

        const res = data.data

        await DinzBotz.sendMessage(m.chat, {
            audio: { url: res.mp3DownloadLink },
            mimetype: 'audio/mpeg',
            fileName: res.title + '.mp3',
            contextInfo: {
                externalAdReply: {
                    title: res.title,
                    body: res.artist,
                    thumbnailUrl: res.coverImage,
                    sourceUrl: text,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m })

        await DinzBotz.sendMessage(m.chat, { react: { text: "✅", key: m.key } })

    } catch (e) {
        console.log(e)
        reply('Maaf, server sedang sibuk atau link tidak valid.')
    }
}
break
case 'addname': {
    if (!isOwner) return reply(mess.owner)
    
    const mapMenu = {
        'owner': 'ownermenu',
        'panel': 'panelmenu',
        'group': 'groupmenu',
        'store': 'storemenu',
        'ai': 'aimenu',
        'aiedit': 'aieditmenu',
        'download': 'downloadmenu',
        'sticker': 'stickermenu',
        'maker': 'makermenu',
        'rpg': 'rpgmenu',
        'game': 'gamemenu',
        'islamic': 'islamicmenu',
        'genshin': 'genshinmenu',
        'anime': 'animemenu',
        'nsfw': 'nsfwmenu',
        'ephoto': 'ephotomenu',
        'enc': 'encmenu',
        'convert': 'convertmenu',
        'search': 'searchmenu',
        'anonymous': 'anonymousmenu',
        'tools': 'toolsmenu',
        'fun': 'funmenu',
        'quotes': 'quotesmenu',
        'other': 'othermenu'
    }

    if (!text) {
        let listCat = Object.keys(mapMenu).map(v => `• ${v}`).join('\n')
        return reply(`⚠️ *Format Salah!*\n\nCara pakai:\n${prefix}addlist [kategori] [namafitur]\n\nContoh:\n${prefix}addlist group antilink\n\n*Kategori Tersedia:*\n${listCat}`)
    }

    let [kategori, ...fiturArr] = text.split(" ")
    let namaFitur = fiturArr.join(" ")

    if (!mapMenu[kategori]) return reply(`❌ Kategori *${kategori}* tidak ditemukan! Cek list kategori dengan mengetik *${prefix}addlist* saja.`)
    if (!namaFitur) return reply(`❌ Nama fiturnya mana? Contoh: *${prefix}addlist group kickmember*`)

    try {
        const fs = require('fs')
        const pathFile = './lib/listmenu.js'
        
        if (!fs.existsSync(pathFile)) return reply("❌ File listmenu.js tidak ditemukan!")

        let fileContent = fs.readFileSync(pathFile, 'utf-8')
        let targetMenu = mapMenu[kategori]

        const regex = new RegExp(`(global\\.${targetMenu}\\s*=\\s*\\(prefix\\)\\s*=>\\s*{[\\s\\S]*?)┗━━━━━━━━━━━━━━━━`, 'i')

        if (!regex.test(fileContent)) {
            return reply(`❌ Gagal menemukan struktur menu untuk *${targetMenu}*. Pastikan format di listmenu.js belum berubah.`)
        }

        const newLine = `┃ ▧ \${prefix}${namaFitur}\n`
        let newContent = fileContent.replace(regex, `$1${newLine}┗━━━━━━━━━━━━━━━━`)

        fs.writeFileSync(pathFile, newContent, 'utf-8')

        delete require.cache[require.resolve(pathFile)]
        require(pathFile)

        reply(`✅ Berhasil menambahkan fitur *${namaFitur}* ke kategori *${kategori}*!`)

    } catch (e) {
        console.error(e)
        reply(`❌ Terjadi error: ${e.message}`)
    }
}
break
case 'gdrive':
case 'googledrive':
case 'gd': {
    if (!text) return reply(`Mana Link Google Drive nya?\nContoh: ${prefix + command} https://drive.google.com/file/d/xxxxx`)

    const axios = require('axios')
    await DinzBotz.sendMessage(m.chat, { react: { text: `⏳`, key: m.key } })

    try {
        let { data } = await axios.get(`https://api.vreden.my.id/api/v1/download/gdrive?url=${text}`)

        if (!data.status || !data.result) return reply('File tidak ditemukan, pastikan link publik (tidak di-private).')

        let meta = data.result.file
        let user = data.result.uploader

        let fileSize = parseInt(meta.size)
        let formattedSize = fileSize >= 1000000 
            ? (fileSize / 1000000).toFixed(2) + ' MB' 
            : (fileSize / 1000).toFixed(2) + ' KB'

        let caption = `☁️ *GOOGLE DRIVE DOWNLOADER*

📂 *Informasi File*
• Nama : ${meta.name}
• Ukuran : ${formattedSize}
• Tipe : ${meta.mimetype}
• Upload : ${meta.last_modified}

👤 *Informasi Uploader*
• Nama : ${user.name}
• Email : ${user.email}

🚀 _Sedang mengirim file, mohon tunggu..._`

        await DinzBotz.sendMessage(m.chat, {
            document: { url: meta.download },
            fileName: meta.name,
            mimetype: meta.mimetype,
            caption: caption,
            contextInfo: {
                externalAdReply: {
                    title: "Google Drive Downloader",
                    body: meta.name,
                    thumbnailUrl: "https://telegra.ph/file/a44400c24208a0d486f03.jpg",
                    sourceUrl: text,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m })

        await DinzBotz.sendMessage(m.chat, { react: { text: `✅`, key: m.key } })

    } catch (e) {
        console.log(e)
        reply('Gagal mendownload. Kemungkinan file terlalu besar atau link error.')
    }
}
break
case 'facebook':
case 'fbdl':
case 'fb': {
    if (!text) return reply(`Mana Link Facebook nya?\nContoh: ${prefix + command} https://www.facebook.com/share/r/xxxxx`)

    const axios = require('axios')
    await DinzBotz.sendMessage(m.chat, { react: { text: `⏳`, key: m.key } })

    try {
        let { data } = await axios.get(`https://api.vreden.my.id/api/v1/download/facebook?url=${text}`)

        if (!data.status || !data.result) return reply('Video tidak ditemukan atau link bersifat privat.')

        let meta = data.result
        let videoUrl = meta.download.hd || meta.download.sd
        let quality = meta.download.hd ? 'High Definition (HD)' : 'Standard Definition (SD)'

        let caption = `📘 *FACEBOOK DOWNLOADER*

📝 *Judul* : ${meta.title}
⏱️ *Durasi* : ${meta.durasi}
📊 *Kualitas* : ${quality}

🚀 _Sedang mengirim video..._`

        await DinzBotz.sendMessage(m.chat, {
            video: { url: videoUrl },
            caption: caption,
            contextInfo: {
                externalAdReply: {
                    title: "Facebook Downloader",
                    body: meta.title,
                    thumbnailUrl: meta.thumbnail,
                    sourceUrl: text,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m })

        await DinzBotz.sendMessage(m.chat, { react: { text: `✅`, key: m.key } })

    } catch (e) {
        console.log(e)
        reply('Gagal mendownload video. Terjadi kesalahan pada server.')
    }
}
break
case 'buatclan':
case 'createclan': {
    let user = global.db.users[m.sender]
    let clans = global.db.clan
    let clanName = args.join(" ")

    if (!clanName) return reply(`Nama clannya apa?\nContoh: ${prefix}buatclan NagaHitam`)
    if (user.clan) return reply(`Lu udah punya clan: *${user.clan}*! Keluar dulu kalau mau bikin baru.`)
    if (clans[clanName]) return reply(`Nama clan *${clanName}* sudah dipakai! Cari nama lain.`)
    if (clanName.length > 20) return reply('Nama clan maksimal 20 karakter.')

    let biaya = 10000
    if (user.money < biaya) return reply(`Duit lu kurang! Butuh ${biaya} Money buat bikin clan.`)
    
    user.money -= biaya

    global.db.clan[clanName] = {
        name: clanName,
        leader: m.sender,
        level: 1,
        exp: 0,
        balance: 0,
        members: [m.sender],
        wins: 0,
        loss: 0,
        created_at: new Date() * 1
    }

    user.clan = clanName
    user.clan_rank = 'leader'

    let txt = `✅ *CLAN BERHASIL DIBUAT!*\n\n`
    txt += `👑 *Nama:* ${clanName}\n`
    txt += `👤 *Ketua:* @${m.sender.split('@')[0]}\n`
    txt += `💰 *Biaya:* -${biaya} Money\n\n`
    txt += `_Silakan invite member atau suruh mereka join!_`

    await DinzBotz.sendMessage(m.chat, { 
        text: txt, 
        contextInfo: { 
            mentionedJid: [m.sender],
            externalAdReply: {
                title: `🛡️ NEW CLAN ESTABLISHED`,
                body: "System Clan RPG",
                thumbnailUrl: "https://cdn.dinzid.biz.id/c3DH.jpg",
                sourceUrl: "",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        } 
    }, { quoted: m })
}
break
case 'infoclan':
case 'claninfo':
case 'myclan': {
    let user = global.db.users[m.sender]
    if (!user.clan) return reply(`Lu belom punya clan! Ketik *${prefix}buatclan* untuk membuat.`)

    let clan = global.db.clan[user.clan]
    if (!clan) {
        user.clan = ''
        user.clan_rank = ''
        return reply('Data clan corrupt/hilang. Status direset.')
    }

    let memberList = clan.members.map((v, i) => {
        let role = (v === clan.leader) ? '👑' : '👤'
        return `${i + 1}. ${role} @${v.split('@')[0]}`
    }).join('\n')

    let txt = `🛡️ *INFO CLAN ${clan.name.toUpperCase()}* 🛡️\n\n`
    txt += `👑 *Leader:* @${clan.leader.split('@')[0]}\n`
    txt += `🆙 *Level:* ${clan.level}\n`
    txt += `✨ *Exp:* ${clan.exp} / ${clan.level * 1000}\n`
    txt += `💰 *Saldo Kas:* Rp ${clan.balance.toLocaleString()}\n`
    txt += `⚔️ *War Stats:* ${clan.wins} Menang / ${clan.loss} Kalah\n`
    txt += `👥 *Anggota:* ${clan.members.length} Orang\n\n`
    txt += `📜 *DAFTAR MEMBER:*\n${memberList}`

    await DinzBotz.sendMessage(m.chat, { 
        text: txt, 
        contextInfo: { 
            mentionedJid: clan.members,
            externalAdReply: {
                title: `🏰 STATUS CLAN: ${clan.name}`,
                body: `Level: ${clan.level} | Member: ${clan.members.length}`,
                thumbnailUrl: "https://cdn.dinzid.biz.id/7uFp.jpg",
                sourceUrl: "",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        } 
    }, { quoted: m })
}
break

case 'keluarclan':
case 'leaveclan': {
    let user = global.db.users[m.sender]
    if (!user.clan) return reply('Lu ga punya clan!')
    
    let clan = global.db.clan[user.clan]
    if (!clan) { user.clan = ''; return reply('Error data.') }

    if (m.sender === clan.leader) return reply(`Ketua tidak bisa keluar! Bubarkan atau oper jabatan dulu.`)

    let index = clan.members.indexOf(m.sender)
    if (index > -1) clan.members.splice(index, 1)

    let oldClan = user.clan
    user.clan = ''
    user.clan_rank = ''

    await DinzBotz.sendMessage(m.chat, { 
        text: `👋 Lu berhasil keluar dari clan *${oldClan}*.`,
        contextInfo: {
            externalAdReply: {
                title: `🚪 LEFT CLAN`,
                body: "Sampai jumpa petualang...",
                thumbnailUrl: "https://cdn.dinzid.biz.id/1Yor.jpg",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
}
break

case 'nabungclan':
case 'depositclan': {
    let user = global.db.users[m.sender]
    if (!user.clan) return reply('Lu ga punya clan!')
    
    if (!args[0]) return reply(`Mau deposit berapa?\nContoh: ${prefix}nabungclan 5000`)
    let amount = parseInt(args[0])
    if (isNaN(amount)) return reply('Angka tidak valid!')
    if (amount < 100) return reply('Minimal 100 perak.')
    if (user.money < amount) return reply(`Duit kurang! Sisa: ${user.money.toLocaleString()}`)

    let clan = global.db.clan[user.clan]
    user.money -= amount
    clan.balance += amount
    clan.exp += Math.floor(amount / 100) 

    let txt = `✅ *DEPOSIT SUKSES*\n\n`
    txt += `💸 *Jumlah:* ${amount.toLocaleString()}\n`
    txt += `🏦 *Kas Clan:* ${clan.balance.toLocaleString()}\n`
    txt += `🆙 *Clan XP:* +${Math.floor(amount / 100)}`

    await DinzBotz.sendMessage(m.chat, { 
        text: txt,
        contextInfo: {
            externalAdReply: {
                title: `💰 CLAN TREASURY`,
                body: `Donasi dari @${m.sender.split('@')[0]}`,
                thumbnailUrl: "https://cdn.dinzid.biz.id/ux4W.jpg",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
}
break

case 'joinclan': {
    if (!args[0]) return reply(`Masukan nama clan!\nContoh: ${prefix}joinclan NagaHitam`)
    let clanName = args.join(" ")
    let user = global.db.users[m.sender]

    if (user.clan) return reply(`Lu masih di dalam clan *${user.clan}*. Keluar dulu!`)
    
    let clan = global.db.clan[clanName]
    if (!clan) return reply('Clan tidak ditemukan! (Case Sensitive)')

    let maxMember = 10 + (clan.level * 2) 
    if (clan.members.length >= maxMember) return reply(`Clan Penuh! (Max ${maxMember})`)

    clan.members.push(m.sender)
    user.clan = clanName
    user.clan_rank = 'member'

    await DinzBotz.sendMessage(m.chat, { 
        text: `✅ Selamat! Lu sekarang anggota clan *${clanName}*.\nKetik *${prefix}infoclan* untuk cek.`,
        contextInfo: {
            externalAdReply: {
                title: `🤝 JOIN SUCCESS`,
                body: `Welcome to ${clanName}`,
                thumbnailUrl: "https://cdn.dinzid.biz.id/b9pS.jpg",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
}
break
case 'clandaily':
case 'dailyclan': {
    let user = global.db.users[m.sender]
    if (!user.clan) return reply(`Lu belom punya clan! Ketik *${prefix}buatclan* dulu.`)

    let clan = global.db.clan[user.clan]
    if (!clan) return reply('Data clan error.')

    let oneDay = 86400000
    let lastClaim = user.lastClanDaily || 0
    let now = new Date() * 1
    
    if (now - lastClaim < oneDay) {
        let remaining = lastClaim + oneDay - now
        let hours = Math.floor(remaining / 3600000)
        let minutes = Math.floor((remaining % 3600000) / 60000)
        return reply(`Sabar! Lu udah ambil jatah harian clan.\nTunggu: ${hours} jam ${minutes} menit lagi.`)
    }

    let addExp = Math.floor(Math.random() * 100) + 50
    let addMoney = Math.floor(Math.random() * 5000) + 2000

    clan.exp += addExp
    clan.balance += addMoney
    user.lastClanDaily = now
    
    // Auto Level Up Clan Logic
    let limitExp = clan.level * 1000
    if (clan.exp >= limitExp) {
        clan.level += 1
        clan.exp = clan.exp - limitExp
        var naikLevel = true
    }

    let txt = `✅ *CLAN DAILY CLAIMED*\n\n`
    txt += `👤 *User:* @${m.sender.split('@')[0]}\n`
    txt += `🛡️ *Clan:* ${clan.name}\n\n`
    txt += `🎁 *Reward:*\n`
    txt += `➕ ${addExp} Clan XP\n`
    txt += `➕ Rp ${addMoney.toLocaleString()} (Masuk Kas Clan)\n`
    
    if (naikLevel) txt += `\n🎉 *CLAN LEVEL UP!* Sekarang Level ${clan.level}`

    await DinzBotz.sendMessage(m.chat, { 
        text: txt, 
        contextInfo: { 
            mentionedJid: [m.sender],
            externalAdReply: {
                title: `💰 CLAN DAILY REWARD`,
                body: `Donasi Harian Sukses`,
                thumbnailUrl: "https://cdn.dinzid.biz.id/2jmS.jpg",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        } 
    }, { quoted: m })
}
break
case 'clanquest':
case 'misi': {
    let user = global.db.users[m.sender]
    if (!user.clan) return reply(`Lu belom punya clan!`)

    let clan = global.db.clan[user.clan]
    let oneHour = 3600000
    let lastQuest = user.lastClanQuest || 0
    let now = new Date() * 1

    if (now - lastQuest < oneHour) {
        let remaining = lastQuest + oneHour - now
        let minutes = Math.floor((remaining % 3600000) / 60000)
        return reply(`Istirahat dulu! Pasukan kelelahan.\nMisi tersedia lagi dalam ${minutes} menit.`)
    }

    // --- DATABASE MISI (50+ VARIASI) ---
    let quests = [
        "Memburu Naga Api di Gunung Merapi",
        "Mengawal Pedagang Kaya melintasi Gurun Pasir",
        "Menyerang Markas Goblin di Hutan Terlarang",
        "Mencari Harta Karun di Lautan Hantu",
        "Menyelamatkan Putri Raja yang Diculik Orc",
        "Menumpas Sindikat Penyelundup Narkoba di Pelabuhan",
        "Membersihkan Selokan Kota dari Tikus Mutan",
        "Mengusir Roh Jahat di Rumah Tua",
        "Mencuri Dokumen Rahasia dari Kerajaan Tetangga",
        "Melatih Pasukan Milisi Desa",
        "Memanen Kristal Sihir di Gua Kristal",
        "Menangkap Buronan Kelas S",
        "Meredakan Tawuran antar Kampung Sebelah",
        "Mengambil Telur Griffin di Puncak Tebing",
        "Menjaga Perbatasan dari Serangan Undead",
        "Menyusup ke Pesta Dansa Vampir",
        "Memancing Kraken di Segitiga Bermuda",
        "Mencari Kucing Hilang milik Nenek Sihir",
        "Berduel dengan Ksatria Hitam",
        "Memperbaiki Bendungan yang Jebol",
        "Mengawal Pengiriman Emas Bank Pusat",
        "Menyelidiki Kasus Pembunuhan Misterius",
        "Berburu Babi Hutan Raksasa",
        "Mencari Bahan Ramuan Abadi",
        "Menghancurkan Portal Iblis",
        "Menolong Pedagang yang Roda Gerobaknya Patah",
        "Memungut Pajak di Desa Terpencil",
        "Menghentikan Ritual Pemuja Setan",
        "Menjinakkan Kuda Liar Legendaris",
        "Membangun Jembatan yang Runtuh",
        "Mengantar Surat Cinta Raja ke Ratu Sebelah",
        "Menangkap Maling Celana Dalam di Asrama Putri",
        "Membersihkan Toilet Umum Guild (Hukuman)",
        "Menjadi Bodyguard Idol Terkenal",
        "Menyelesaikan Sengketa Tanah Warga",
        "Memasak Hidangan Raksasa untuk Festival",
        "Membajak Kapal Bajak Laut",
        "Menggali Sumur di Desa Kekeringan",
        "Menemukan Kota Hilang Atlantis",
        "Mengusir Hama Belalang di Ladang Gandum",
        "Menangkap Hacker yang Membobol Bank Guild",
        "Melawan Godzilla yang Muncul di Kota",
        "Menolong Alien memperbaiki UFO",
        "Menjadi Juri Lomba Masak Kerajaan",
        "Mengumpulkan Pajak dari Preman Pasar",
        "Menyusup ke Markas Penjahat sebagai Penari",
        "Mengambil Pedang Excalibur yang Tertancap",
        "Membersihkan Pantai dari Sampah Plastik",
        "Melawan Mafia Tanah",
        "Mencari Obat Sakit Gigi Raja Naga"
    ]
    
    // --- DATABASE ALASAN GAGAL ---
    let failReasons = [
        "Pasukanmu terpeleset kulit pisang dan ketahuan musuh.",
        "Senjata pasukanmu patah saat pertempuran.",
        "Pasukanmu salah baca peta dan nyasar ke rumah mantan.",
        "Monster terlalu kuat, pasukanmu lari terbirit-birit.",
        "Cuaca buruk badai petir membuat misi dibatalkan.",
        "Ternyata target misi adalah saudara sendiri, misi gagal.",
        "Pasukanmu keracunan makanan warteg sebelum berangkat.",
        "Ada pengkhianat di dalam tim yang membocorkan rencana.",
        "Raja membatalkan misi secara mendadak.",
        "Pasukanmu tertidur saat berjaga malam.",
        "Kuda pasukan mogok makan dan tidak mau jalan."
    ]

    let randomQuest = quests[Math.floor(Math.random() * quests.length)]
    let randomFail = failReasons[Math.floor(Math.random() * failReasons.length)]
    
    // Logic RNG (Success Rate 65%)
    let successRate = Math.random()
    user.lastClanQuest = now

    if (successRate > 0.35) {
        // BERHASIL
        let rewardExp = Math.floor(Math.random() * 300) + 150
        let rewardMoney = Math.floor(Math.random() * 15000) + 5000
        
        // Bonus Jackpot (Kemungkinan kecil dapet gede banget)
        if (Math.random() > 0.9) {
            rewardExp *= 2
            rewardMoney *= 2
            randomQuest += " (CRITICAL SUCCESS!)"
        }

        clan.exp += rewardExp
        clan.balance += rewardMoney
        
        // Auto Level Up Check
        let limitExp = clan.level * 1000
        if (clan.exp >= limitExp) {
            clan.level += 1
            clan.exp -= limitExp
            var naikLevel = true
        }

        let txt = `⚔️ *MISI CLAN SUKSES*\n\n`
        txt += `📜 *Misi:* ${randomQuest}\n`
        txt += `✅ *Laporan:* Misi berjalan lancar, reputasi clan meningkat.\n\n`
        txt += `🎁 *Rewards:*\n`
        txt += `➕ ${rewardExp} XP Clan\n`
        txt += `➕ Rp ${rewardMoney.toLocaleString()} (Kas Clan)`
        
        if (naikLevel) txt += `\n\n🎉 *LEVEL UP!* Clan naik ke Level ${clan.level}!`

        await DinzBotz.sendMessage(m.chat, { 
            text: txt, 
            contextInfo: { 
                externalAdReply: {
                    title: `✅ MISSION COMPLETED`,
                    body: clan.name,
                    thumbnailUrl: "https://i.pinimg.com/736x/e8/38/c2/e838c21319080081d66838b816a75f1b.jpg",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            } 
        }, { quoted: m })

    } else {
        // GAGAL
        let denda = Math.floor(Math.random() * 3000) + 1000
        clan.balance -= denda
        if (clan.balance < 0) clan.balance = 0

        let txt = `☠️ *MISI CLAN GAGAL*\n\n`
        txt += `📜 *Misi:* ${randomQuest}\n`
        txt += `❌ *Penyebab:* ${randomFail}\n\n`
        txt += `📉 *Kerugian:* -Rp ${denda.toLocaleString()} (Biaya Pengobatan)`

        await DinzBotz.sendMessage(m.chat, { 
            text: txt, 
            contextInfo: { 
                externalAdReply: {
                    title: `❌ MISSION FAILED`,
                    body: "Better luck next time...",
                    thumbnailUrl: "https://cdn.dinzid.biz.id/gFGR.jpg",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            } 
        }, { quoted: m })
    }
}
break
case 'clanwar':{
    if (!args[0]) return reply(`Tag musuh dari clan lain!\nContoh: ${prefix}war @userLawan`)
    let target = m.mentionedJid[0] || args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    
    let user = global.db.users[m.sender]
    if (!user.clan) return reply('Lu ga punya clan!')
    
    let myClan = global.db.clan[user.clan]
    if (m.sender !== myClan.leader) return reply('Hanya Ketua Clan yang bisa ngajak perang!')
    
    if (myClan.level < 5) return reply(`⚠️ *LEVEL TOO LOW*\n\nClan lu masih Level ${myClan.level}.\nMinimal Level 5 buat fitur Clan War!\n\nRajin-rajinlah *.clandaily* dan *.clanquest* buat naikin level.`)

    let targetUser = global.db.users[target]
    if (!targetUser || !targetUser.clan) return reply('Lawan lu ga punya clan!')
    
    let enemyClan = global.db.clan[targetUser.clan]
    if (user.clan === targetUser.clan) return reply('Sesama anggota dilarang gelud!')

    let myPower = (myClan.level * 50) + (myClan.members.length * 10) + Math.floor(Math.random() * 500)
    let enemyPower = (enemyClan.level * 50) + (enemyClan.members.length * 10) + Math.floor(Math.random() * 500)

    let txt = `⚔️ *CLAN WAR DIMULAI* ⚔️\n\n`
    txt += `🛡️ *${myClan.name}* (Power: ${myPower})\n`
    txt += `VS\n`
    txt += `🛡️ *${enemyClan.name}* (Power: ${enemyPower})\n\n`

    if (myPower > enemyPower) {
        let stealAmount = Math.floor(enemyClan.balance * 0.1)
        if (stealAmount > enemyClan.balance) stealAmount = enemyClan.balance
        
        myClan.balance += stealAmount
        enemyClan.balance -= stealAmount
        myClan.wins += 1
        enemyClan.loss += 1

        txt += `🏆 *VICTORY: ${myClan.name}* 🏆\n`
        txt += `💰 Rampasan Perang: Rp ${stealAmount.toLocaleString()}`
    } else {
        let fineAmount = Math.floor(myClan.balance * 0.05)
        myClan.balance -= fineAmount
        enemyClan.balance += fineAmount
        myClan.loss += 1
        enemyClan.wins += 1

        txt += `💀 *DEFEAT: ${myClan.name}* 💀\n`
        txt += `💸 Pasukanmu kalah! Denda: Rp ${fineAmount.toLocaleString()}`
    }

    await DinzBotz.sendMessage(m.chat, { 
        text: txt, 
        contextInfo: { 
            mentionedJid: [target],
            externalAdReply: {
                title: `⚔️ CLAN WAR BATTLE`,
                body: `${myClan.name} vs ${enemyClan.name}`,
                thumbnailUrl: "https://cdn.dinzid.biz.id/WzzH.jpg",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        } 
    }, { quoted: m })
}
break
case 'listclan':
case 'clanlist':
case 'topclan': {
    const { createCanvas, loadImage } = require('@napi-rs/canvas')
    let clans = global.db.clan
    if (!clans || Object.keys(clans).length === 0) return reply('Belum ada clan.')

    let sortedClans = Object.values(clans).sort((a, b) => {
        if (b.level !== a.level) return b.level - a.level
        return b.wins - a.wins
    })

    let topClans = sortedClans.slice(0, 10)
    
    const width = 1080
    const headerH = 250
    const itemH = 160
    const gap = 30
    const height = headerH + (topClans.length * (itemH + gap)) + 50
    
    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')

    try {
        const bgImage = await loadImage('https://i.pinimg.com/originals/2e/e0/75/2ee0755dd9f9a43a0544f8f4356e804b.jpg') 
        ctx.drawImage(bgImage, 0, 0, width, height)
    } catch {
        ctx.fillStyle = '#1a1a1a'
        ctx.fillRect(0, 0, width, height)
    }

    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
    ctx.fillRect(0, 0, width, height)

    ctx.save()
    ctx.shadowColor = '#f7c716'
    ctx.shadowBlur = 20
    ctx.font = 'bold 90px Arial'
    ctx.fillStyle = '#ffffff'
    ctx.textAlign = 'center'
    ctx.fillText('🏆 CLAN LEADERBOARD', width / 2, 130)
    
    ctx.shadowBlur = 0
    ctx.font = '40px Arial'
    ctx.fillStyle = '#cccccc'
    ctx.fillText('Top 10 Strongest Guilds', width / 2, 190)
    ctx.restore()

    for (let i = 0; i < topClans.length; i++) {
        let c = topClans[i]
        let y = headerH + (i * (itemH + gap))
        
        ctx.save()
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
        ctx.fillRect(50, y, width - 100, itemH)
        
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
        ctx.lineWidth = 2
        ctx.strokeRect(50, y, width - 100, itemH)

        let rankColor = '#ffffff'
        let rankSize = '80px'
        let medal = ''
        
        if (i === 0) { rankColor = '#FFD700'; medal = '👑'; }
        else if (i === 1) { rankColor = '#C0C0C0'; medal = '🥈'; }
        else if (i === 2) { rankColor = '#CD7F32'; medal = '🥉'; }

        ctx.fillStyle = rankColor
        ctx.font = `bold ${rankSize} Arial`
        ctx.textAlign = 'center'
        ctx.fillText(`#${i + 1}`, 150, y + 110)

        ctx.save()
        ctx.beginPath()
        ctx.arc(300, y + itemH/2, 60, 0, Math.PI * 2)
        ctx.closePath()
        ctx.clip()

        let ppUrl
        try {
            ppUrl = await DinzBotz.profilePictureUrl(c.leader, 'image')
        } catch {
            ppUrl = 'https://i.pinimg.com/564x/a8/57/00/a85700f3c614f6313750b9d8196c08f5.jpg'
        }
        
        try {
            const img = await loadImage(ppUrl)
            ctx.drawImage(img, 240, y + itemH/2 - 60, 120, 120)
        } catch {
            ctx.fillStyle = '#555'
            ctx.fillRect(240, y + itemH/2 - 60, 120, 120)
        }
        ctx.restore()

        ctx.lineWidth = 4
        ctx.strokeStyle = rankColor
        ctx.beginPath()
        ctx.arc(300, y + itemH/2, 60, 0, Math.PI * 2)
        ctx.stroke()

        ctx.textAlign = 'left'
        ctx.fillStyle = '#ffffff'
        ctx.font = 'bold 55px Arial'
        ctx.fillText(c.name.toUpperCase(), 400, y + 80)

        ctx.fillStyle = '#dddddd'
        ctx.font = '35px Arial'
        ctx.fillText(`Lv. ${c.level}`, 400, y + 130)

        ctx.textAlign = 'right'
        ctx.fillStyle = '#f7c716' 
        ctx.font = 'bold 40px Arial'
        ctx.fillText(`${c.wins} Win`, width - 80, y + 95)
        
        ctx.fillStyle = '#ff4d4d' 
        ctx.font = 'bold 30px Arial'
        ctx.fillText(`${c.loss} Loss`, width - 80, y + 135)
        
        ctx.restore()
    }

    let txt = `📜 *GLOBAL CLAN LEADERBOARD* 📜\n\n`
    txt += `Gunakan *.clanwar <nama>* untuk menantang mereka!\n`

    let mentions = []
    topClans.forEach(c => mentions.push(c.leader))

    await DinzBotz.sendMessage(m.chat, {
        image: canvas.toBuffer('image/png'),
        caption: txt,
        mentions: mentions,
        contextInfo: {
            externalAdReply: {
                title: "HALL OF FAME",
                body: "Top Guilds Season 1",
                thumbnailUrl: "https://cdn.dinzid.biz.id/IXpD.jpg",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
}
break
case 'clanpromote':
case 'promoteclan': {
    let user = global.db.users[m.sender]
    if (!user.clan) return reply('Lu ga punya clan!')
    
    let clan = global.db.clan[user.clan]
    if (m.sender !== clan.leader) return reply('Hanya Ketua Clan yang bisa menaikkan jabatan!')

    if (!args[0] && !m.mentionedJid[0]) return reply(`Tag member yang mau dijadiin Elder (Wakil)!\nContoh: ${prefix}clanpromote @member`)
    
    let target = m.mentionedJid[0] || args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    let targetUser = global.db.users[target]

    if (!targetUser || targetUser.clan !== user.clan) return reply('Dia bukan member clan lu!')
    if (target === m.sender) return reply('Mau promote diri sendiri? Aneh lu.')

    targetUser.clan_rank = 'elder'

    let txt = `✅ *JABATAN DINAIKKAN*\n\n`
    txt += `👤 *User:* @${target.split('@')[0]}\n`
    txt += `🔰 *Rank Baru:* ELDER (Wakil Ketua)\n`
    txt += `Sekarang dia bisa bantu urus clan!`

    await DinzBotz.sendMessage(m.chat, { 
        text: txt, 
        contextInfo: { 
            mentionedJid: [target],
            externalAdReply: {
                title: `🔰 RANK PROMOTION`,
                body: `New Elder Appointed`,
                thumbnailUrl: "https://cdn.dinzid.biz.id/YLya.jpg",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        } 
    }, { quoted: m })
}
break

case 'clandemote':
case 'demoteclan': {
    let user = global.db.users[m.sender]
    if (!user.clan) return reply('Lu ga punya clan!')
    
    let clan = global.db.clan[user.clan]
    if (m.sender !== clan.leader) return reply('Hanya Ketua Clan yang bisa menurunkan jabatan!')

    if (!args[0] && !m.mentionedJid[0]) return reply(`Tag Elder yang mau diturunkan!\nContoh: ${prefix}clandemote @member`)
    
    let target = m.mentionedJid[0] || args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    let targetUser = global.db.users[target]

    if (!targetUser || targetUser.clan !== user.clan) return reply('Dia bukan member clan lu!')
    
    targetUser.clan_rank = 'member'

    let txt = `⬇️ *JABATAN DITURUNKAN*\n\n`
    txt += `👤 *User:* @${target.split('@')[0]}\n`
    txt += `🔰 *Rank Baru:* Member Biasa`

    await DinzBotz.sendMessage(m.chat, { 
        text: txt, 
        contextInfo: { 
            mentionedJid: [target],
            externalAdReply: {
                title: `⬇️ RANK DEMOTION`,
                body: `Back to member`,
                thumbnailUrl: "https://cdn.dinzid.biz.id/eXT1.jpg",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        } 
    }, { quoted: m })
}
break

case 'clankick':
case 'kickclan': {
    let user = global.db.users[m.sender]
    if (!user.clan) return reply('Lu ga punya clan!')
    
    let clan = global.db.clan[user.clan]
    
    if (user.clan_rank !== 'leader' && user.clan_rank !== 'elder') return reply('Hanya Ketua atau Elder yang bisa kick member!')

    if (!args[0] && !m.mentionedJid[0]) return reply(`Tag member beban yang mau dikick!\nContoh: ${prefix}clankick @beban`)
    
    let target = m.mentionedJid[0] || args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    let targetUser = global.db.users[target]

    if (!targetUser || targetUser.clan !== user.clan) return reply('Dia bukan member clan lu!')
    if (target === clan.leader) return reply('Lu mau ngekick Ketua? Kudeta?')
    if (target === m.sender) return reply('Pake fitur .keluarclan kalo mau keluar sendiri.')

    // Logic Kick
    let index = clan.members.indexOf(target)
    if (index > -1) clan.members.splice(index, 1)

    targetUser.clan = ''
    targetUser.clan_rank = ''

    await DinzBotz.sendMessage(m.chat, { 
        text: `🚫 Berhasil menendang @${target.split('@')[0]} dari Clan!`,
        contextInfo: { 
            mentionedJid: [target],
            externalAdReply: {
                title: `🚫 MEMBER KICKED`,
                body: `Cleaning up the trash`,
                thumbnailUrl: "https://cdn.dinzid.biz.id/1Yor.jpg",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        } 
    }, { quoted: m })
}
break
case 'clanrename':
case 'renameclan': {
    let user = global.db.users[m.sender]
    if (!user.clan) return reply('Lu ga punya clan!')
    
    let clan = global.db.clan[user.clan]
    if (m.sender !== clan.leader) return reply('Hanya Ketua Clan yang bisa ganti nama!')

    let newName = args.join(" ")
    if (!newName) return reply(`Mau ganti nama jadi apa?\nContoh: ${prefix}clanrename NagaPutih`)
    if (newName.length > 20) return reply('Kepanjangan wir! Maksimal 20 huruf.')
    
    if (global.db.clan[newName]) return reply('Nama itu udah dipake clan lain!')

    // Biaya Ganti Nama (Biar gak sering ganti)
    let cost = 50000
    if (clan.balance < cost) return reply(`Uang kas kurang! Biaya ganti nama: Rp ${cost.toLocaleString()}`)

    // Proses Ganti Nama di DB
    clan.balance -= cost
    let oldName = clan.name
    
    // Pindahkan Data ke Key Baru
    global.db.clan[newName] = clan
    global.db.clan[newName].name = newName
    delete global.db.clan[oldName]

    // Update Data Semua Member
    for (let memberId of clan.members) {
        if (global.db.users[memberId]) {
            global.db.users[memberId].clan = newName
        }
    }

    let txt = `✍️ *NAMA CLAN DIGANTI*\n\n`
    txt += `Old Name: ${oldName}\n`
    txt += `New Name: *${newName}*\n`
    txt += `Biaya: Rp ${cost.toLocaleString()}`

    await DinzBotz.sendMessage(m.chat, { 
        text: txt, 
        contextInfo: { 
            externalAdReply: {
                title: `✍️ CLAN RENAMED`,
                body: `New Identity Established`,
                thumbnailUrl: "https://cdn.dinzid.biz.id/Zk04.jpg",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        } 
    }, { quoted: m })
}
break
case 'clandisband':
case 'disbandguild': {
    let user = global.db.users[m.sender]
    if (!user.clan) return reply('Lu ga punya clan!')
    let clan = global.db.clan[user.clan]
    if (m.sender !== clan.leader) return reply('Hanya Ketua yang bisa membubarkan Clan!')

    let name = user.clan
    // Hapus status clan di semua member
    clan.members.forEach(id => {
        if (global.db.users[id]) {
            global.db.users[id].clan = ''
            global.db.users[id].clan_rank = ''
        }
    })
    
    delete global.db.clan[name]
    reply(`💥 *CLAN ${name} TELAH DIBUBARKAN!* Semua member sekarang menjadi free agent.`)
}
break
case 'clandeposit':
case 'guilddepo': {
    let user = global.db.users[m.sender]
    if (!user.clan) return reply('Join clan dulu wir!')
    if (!args[0]) return reply('Masukkan jumlah uang yang mau didepositkan!')
    
    let amount = parseInt(args[0])
    if (isNaN(amount) || amount <= 0) return reply('Jumlah harus angka positif!')
    if (user.money < amount) return reply('Duit lu ga cukup!')

    user.money -= amount
    global.db.clan[user.clan].balance += amount
    
    reply(`✅ Berhasil deposit *Rp ${amount.toLocaleString()}* ke Kas Clan.\nTerima kasih atas kontribusinya!`)
}
break
case 'clanwithdraw':
case 'guildwd': {
    let user = global.db.users[m.sender]
    if (!user.clan) return reply('Lu ga punya clan!')
    let clan = global.db.clan[user.clan]
    if (m.sender !== clan.leader) return reply('Hanya Ketua yang bisa narik duit Kas!')

    if (!args[0]) return reply('Masukkan jumlah yang mau ditarik!')
    let amount = parseInt(args[0])
    if (isNaN(amount) || amount <= 0) return reply('Jumlah harus angka positif!')
    if (clan.balance < amount) return reply('Saldo Kas Clan ga cukup!')

    clan.balance -= amount
    user.money += amount
    
    reply(`💸 Berhasil menarik *Rp ${amount.toLocaleString()}* dari Kas Clan ke dompet pribadi.`)
}
break
case 'claninvite':
case 'ginvite': {
    let user = global.db.users[m.sender]
    if (!user.clan) return reply('Lu ga punya clan!')
    let clan = global.db.clan[user.clan]
    if (user.clan_rank !== 'leader' && user.clan_rank !== 'elder') return reply('Hanya Ketua/Elder yang bisa invite orang!')

    if (!m.mentionedJid[0]) return reply('Tag orang yang mau diinvite!')
    let target = m.mentionedJid[0]
    if (global.db.users[target].clan) return reply('Orang itu sudah punya clan!')

    // Sistem Undangan (Auto-Accept untuk mempermudah, atau lu bisa bikin sistem acc)
    global.db.users[target].clan = user.clan
    global.db.users[target].clan_rank = 'member'
    clan.members.push(target)

    reply(`🎉 @${target.split('@')[0]} berhasil diajak bergabung ke Clan *${user.clan}*!`, null, { mentions: [target] })
}
break
case 'slot': {
    let user = global.db.users[m.sender]
    let taruhan = parseInt(args[0])
    if (!taruhan || taruhan < 100) return reply('Minimal taruhan Rp 100!')
    if (user.money < taruhan) return reply('Duit lu ga cukup!')

    const emojis = ["🍎", "💎", "🍋", "🎰", "🔔", "🍒"];
    
    // Fungsi acak emoji
    const roll = () => [
        emojis[Math.floor(Math.random() * emojis.length)],
        emojis[Math.floor(Math.random() * emojis.length)],
        emojis[Math.floor(Math.random() * emojis.length)]
    ];

    user.money -= taruhan
    
    // Pesan Awal (Frame 1)
    let { key } = await DinzBotz.sendMessage(m.chat, { text: `[  🎰 SLOT 🎰  ]\n--------------\n  [ ⌛ ] [ ⌛ ] [ ⌛ ]\n--------------\n*SPINNING...*` })

    // Animasi Spin (Edit Message)
    for (let i = 0; i < 3; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Delay 1 detik per frame
        let r = roll();
        await DinzBotz.sendMessage(m.chat, { text: `[  🎰 SLOT 🎰  ]\n--------------\n  [ ${r[0]} ] [ ${r[1]} ] [ ${r[2]} ]\n--------------\n*SPINNING...*`, edit: key })
    }

    // Hasil Akhir
    let final = roll();
    let win = false;
    let profit = 0;

    if (final[0] === final[1] && final[1] === final[2]) {
        win = true;
        profit = taruhan * 10; // Jackpot 3 sama
    } else if (final[0] === final[1] || final[1] === final[2] || final[0] === final[2]) {
        win = true;
        profit = Math.floor(taruhan * 2.5); // 2 sama
    }

    let resultTxt = win ? `JACKPOT! 🏆\nLu menang Rp ${profit.toLocaleString()}` : `LOSE! 💀\nCoba lagi wir!`
    if (win) user.money += profit

    await new Promise(resolve => setTimeout(resolve, 1000));
    await DinzBotz.sendMessage(m.chat, { 
        text: `[  🎰 SLOT 🎰  ]\n--------------\n  [ ${final[0]} ] [ ${final[1]} ] [ ${final[2]} ]\n--------------\n${resultTxt}`, 
        edit: key 
    })
}
break
case 'casino': {
    let user = global.db.users[m.sender]
    let taruhan = parseInt(args[0])
    if (!taruhan || taruhan < 500) return reply('Minimal taruhan Rp 500!')
    if (user.money < taruhan) return reply('Duit kurang!')

    let botScore = Math.floor(Math.random() * 11) + 15 // 15-25
    let userScore = Math.floor(Math.random() * 12) + 14 // 14-26

    let txt = `🃏 *CASINO BLACKJACK* 🃏\n\n`
    txt += `👤 Score Lu: ${userScore}\n`
    txt += `🤖 Score Bot: ${botScore}\n\n`

    if (userScore > 21 && botScore > 21 || userScore === botScore) {
        txt += `🤝 *DRAW!* Duit dikembalikan.`
    } else if (userScore > 21) {
        user.money -= taruhan
        txt += `❌ *BUST!* Lu kalah Rp ${taruhan.toLocaleString()}`
    } else if (botScore > 21 || userScore > botScore) {
        let win = taruhan * 2
        user.money += win
        txt += `✅ *WIN!* Lu dapet Rp ${win.toLocaleString()}`
    } else {
        user.money -= taruhan
        txt += `❌ *LOSE!* Lu kalah Rp ${taruhan.toLocaleString()}`
    }
    reply(txt)
}
break
case 'coinflip': {
    let user = global.db.users[m.sender]
    let bet = parseInt(args[0])
    let side = args[1]?.toLowerCase() // heads / tails
    if (!bet || !side) return reply('Contoh: .coinflip 1000 heads')
    if (user.money < bet) return reply('Duit ga cukup!')

    let result = Math.random() < 0.5 ? 'heads' : 'tails'
    let win = side === result

    if (win) {
        user.money += bet
        reply(`🪙 Koin mendarat di *${result}*!\n✅ Lu menang Rp ${bet.toLocaleString()}`)
    } else {
        user.money -= bet
        reply(`🪙 Koin mendarat di *${result}*!\n❌ Lu kalah Rp ${bet.toLocaleString()}`)
    }
}
break
case 'dice': {
    let user = global.db.users[m.sender]
    let bet = parseInt(args[0])
    if (!bet || bet < 100) return reply('Masukkan taruhan!')
    if (user.money < bet) return reply('Duit ga cukup!')

    let userDice = Math.floor(Math.random() * 6) + 1
    let botDice = Math.floor(Math.random() * 6) + 1

    let txt = `🎲 *DICE ROLL* 🎲\n\n`
    txt += `👤 Lu: [ ${userDice} ]\n`
    txt += `🤖 Bot: [ ${botDice} ]\n\n`

    if (userDice > botDice) {
        user.money += bet
        txt += `✅ Menang Rp ${bet.toLocaleString()}!`
    } else if (userDice < botDice) {
        user.money -= bet
        txt += `❌ Kalah Rp ${bet.toLocaleString()}!`
    } else {
        txt += `🤝 Seri!`
    }
    reply(txt)
}
break
case 'roulette': {
    let user = global.db.users[m.sender]
    let bet = parseInt(args[0])
    let color = args[1]?.toLowerCase() // red / black / green
    if (!bet || !color) return reply('Contoh: .roulette 1000 red')
    if (user.money < bet) return reply('Duit ga cukup!')

    let colors = ['red', 'black', 'red', 'black', 'red', 'black', 'green']
    let result = colors[Math.floor(Math.random() * colors.length)]

    if (color === result) {
        let multi = (result === 'green' ? 10 : 2)
        let win = bet * multi
        user.money += win
        reply(`🎡 Roda berhenti di *${result.toUpperCase()}*!\n✅ Lu menang Rp ${win.toLocaleString()} (x${multi})`)
    } else {
        user.money -= bet
        reply(`🎡 Roda berhenti di *${result.toUpperCase()}*!\n❌ Lu kalah Rp ${bet.toLocaleString()}`)
    }
}
break
case 'raid':
case 'raidboss': {
    let user = global.db.users[m.sender]
    if (!user.clan) return reply('Hanya anggota Clan yang bisa ikut Raid Boss!')
    
    if (!global.db.others.raidboss) {
        global.db.others.raidboss = {
            name: "DRAGON OF CHAOS",
            hp: 2000000,
            maxhp: 2000000,
            status: 'ALIVE'
        }
    }

    let boss = global.db.others.raidboss
    if (boss.status === 'DEAD') return reply('Boss sudah dikalahkan! Tunggu muncul kembali besok.')

    let userClan = global.db.clan[user.clan]
    let damage = (userClan.level * 250) + Math.floor(Math.random() * 1000)
    
    boss.hp -= damage
    
    let txt = `⚔️ *ATTACKING RAID BOSS* ⚔️\n\n`
    txt += `👤 *Penyerang:* @${m.sender.split('@')[0]}\n`
    txt += `🛡️ *Clan:* ${user.clan}\n`
    txt += `💥 *Damage:* -${damage.toLocaleString()}\n`
    txt += `🩸 *Sisa HP Boss:* ${Math.max(0, boss.hp).toLocaleString()} / ${boss.maxhp.toLocaleString()}\n\n`

    if (boss.hp <= 0) {
        boss.status = 'DEAD'
        userClan.balance += 500000
        txt += `🎊 *LAST HIT!* Clan *${user.clan}* berhasil membunuh Boss!\n`
        txt += `💰 Hadiah Kas Clan: +Rp 500.000`
    }

    await DinzBotz.sendMessage(m.chat, { 
        text: txt, 
        contextInfo: { 
            mentionedJid: [m.sender],
            externalAdReply: {
                title: `🌋 WORLD BOSS EVENT`,
                body: `Boss: ${boss.name}`,
                thumbnailUrl: "https://i.pinimg.com/736x/e8/38/c2/e838c21319080081d66838b816a75f1b.jpg",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        } 
    }, { quoted: m })
}
break
case 'defend':
case 'tangkis': {
    let user = global.db.users[m.sender]
    if (!user.clan) return reply('Lu gapunya markas buat dijaga wir.')
    
    let clan = global.db.clan[user.clan]
    if (!clan.underAttack) return reply('Markas lagi aman tenteram wir.')

    let defensePower = Math.floor(Math.random() * 100) + 50
    clan.monsterHp -= defensePower

    if (clan.monsterHp <= 0) {
        clan.underAttack = false
        await DinzBotz.sendMessage(m.chat, { 
            text: `✅ *VICTORY!* @${m.sender.split('@')[0]} berhasil mengusir monster!\nMarkas kembali aman.`,
            contextInfo: { 
                mentionedJid: [m.sender],
                externalAdReply: {
                    title: `🏰 BASE SECURED`,
                    body: `Defender: @${m.sender.split('@')[0]}`,
                    thumbnailUrl: "https://cdn.dinzid.biz.id/kZJo.jpg",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m })
    } else {
        reply(`⚔️ Berhasil menyerang monster! Sisa HP Monster: ${clan.monsterHp}`)
    }
}
break
case 'claimairdrop': {
    if (!global.db.others.airdropActive) return reply('Gak ada airdrop yang jatuh saat ini wir.')
    if (!args[0]) return reply('Masukin kode airdropnya!')
    if (args[0].toUpperCase() !== global.db.others.airdropCode) return reply('Kode airdrop salah!')

    let user = global.db.users[m.sender]
    global.db.others.airdropActive = false
    
    let rewards = [
        { name: 'money', qty: Math.floor(Math.random() * 5000) + 1000 },
        { name: 'exp', qty: Math.floor(Math.random() * 500) + 200 },
        { name: 'kayu', qty: Math.floor(Math.random() * 20) + 5 },
        { name: 'batu', qty: Math.floor(Math.random() * 15) + 5 },
        { name: 'iron', qty: Math.floor(Math.random() * 10) + 1 }
    ]
    
    let result = rewards[Math.floor(Math.random() * rewards.length)]
    user[result.name] = (user[result.name] || 0) + result.qty

    let txt = `🎁 *AIRDROP CLAIMED!* 🎁\n\n`
    txt += `Selamat @${m.sender.split('@')[0]}, lu berhasil ngambil peti itu!\n`
    txt += `📦 Isi: *+${result.qty} ${result.name}*`

    await DinzBotz.sendMessage(m.chat, { 
        text: txt, 
        contextInfo: { mentionedJid: [m.sender] } 
    }, { quoted: m })
}
break

case 'airdrop': {
    if (!m.isGroup) return reply('Hanya bisa di grup!')
    let groupMetadata = await DinzBotz.groupMetadata(m.chat)
    let participants = groupMetadata.participants
    if (!isAdmins) return reply('Khusus Admin Grup!')

    if (!args[0]) return reply(`Pilih status:\n${prefix}airdrop on\n${prefix}airdrop off`)
    
    if (args[0] === 'on') {
        global.db.chats[m.chat].airdrop = true
        reply('✅ Auto Airdrop diaktifkan untuk grup ini.')
    } else if (args[0] === 'off') {
        global.db.chats[m.chat].airdrop = false
        reply('❌ Auto Airdrop dimatikan untuk grup ini.')
    }
}
break
case 'cekgay': {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? DinzBotz.user.id : m.sender
    let name = await DinzBotz.getName(who)
    
    await DinzBotz.sendMessage(m.chat, { react: { text: '🏳️‍🌈', key: m.key } })

    try {
        let ppUrl
        try {
            ppUrl = await DinzBotz.profilePictureUrl(who, 'image')
        } catch {
            ppUrl = 'https://i.pinimg.com/564x/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.jpg'
        }

        let randomNum = Math.floor(Math.random() * 100) + 1
        
        let apiUrl = `https://api.siputzx.my.id/api/canvas/gay?nama=${encodeURIComponent(name)}&avatar=${encodeURIComponent(ppUrl)}&num=${randomNum}`
        
        let { data } = await axios.get(apiUrl, { responseType: 'arraybuffer' })

        let komentar = ''
        if (randomNum > 80) {
            komentar = 'Wah parah, lu udah stadium akhir wir! 😱🏳️‍🌈'
        } else if (randomNum > 50) {
            komentar = 'Hati-hati, benih-benihnya mulai tumbuh... 🤔'
        } else if (randomNum > 20) {
            komentar = 'Aman, masih wajar lah dikit-dikit. 👍'
        } else {
            komentar = 'Jantan sejati! Laki banget lu bang! 💪😎'
        }

        let txt = `🏳️‍🌈 *HASIL CEK GAY* 🏳️‍🌈\n\n`
        txt += `👤 *Target:* @${who.split('@')[0]}\n`
        txt += `📊 *Tingkat Gay:* ${randomNum}%\n`
        txt += `💭 *Komentar Bot:* ${komentar}`

        await DinzBotz.sendMessage(m.chat, { 
            image: data, 
            caption: txt,
            contextInfo: { mentionedJid: [who] }
        }, { quoted: m })

        await DinzBotz.sendMessage(m.chat, { react: { text: '🤣', key: m.key } })

    } catch (e) {
        console.error(e)
        reply('❌ Gagal mengambil data. Mungkin API sedang down atau foto profil tidak terbaca.')
    }
}
break
case 'facepalm': {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''

    if (!/image/.test(mime)) return reply(`Kirim atau Reply gambar dengan caption *${prefix + command}*`)

    await DinzBotz.sendMessage(m.chat, { react: { text: '🤦‍♂️', key: m.key } })

    try {
        let media = await q.download()
        
        let form = new FormData()
        form.append('reqtype', 'fileupload')
        form.append('userhash', '')
        form.append('fileToUpload', media, { filename: 'image.jpg' })

        let uploadReq = await axios.post('https://catbox.moe/user/api.php', form, {
            headers: {
                ...form.getHeaders()
            }
        })
        
        let imageUrl = uploadReq.data

        if (!imageUrl || imageUrl.includes('error')) return reply('❌ Gagal upload gambar ke server.')

        let apiUrl = `https://api.siputzx.my.id/api/canvas/facepalm?image=${encodeURIComponent(imageUrl)}`
        
        let { data } = await axios.get(apiUrl, { responseType: 'arraybuffer' })

        await DinzBotz.sendMessage(m.chat, { 
            image: data, 
            caption: '🤦‍♂️ Hadehh...',
            contextInfo: { mentionedJid: [m.sender] }
        }, { quoted: m })

    } catch (e) {
        console.error(e)
        reply('❌ Gagal memproses gambar.')
    }
}
break
case 'beautiful': {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''

    if (!/image/.test(mime)) return reply(`Kirim atau Reply gambar dengan caption *${prefix + command}*`)

    await DinzBotz.sendMessage(m.chat, { react: { text: '✨', key: m.key } })

    try {
        let media = await q.download()
        
        let form = new FormData()
        form.append('reqtype', 'fileupload')
        form.append('userhash', '')
        form.append('fileToUpload', media, { filename: 'image.jpg' })

        let uploadReq = await axios.post('https://catbox.moe/user/api.php', form, {
            headers: {
                ...form.getHeaders()
            }
        })
        
        let imageUrl = uploadReq.data

        if (!imageUrl || imageUrl.includes('error')) return reply('❌ Gagal upload gambar ke server.')

        let apiUrl = `https://api.siputzx.my.id/api/canvas/beautiful?image=${encodeURIComponent(imageUrl)}`
        
        let { data } = await axios.get(apiUrl, { responseType: 'arraybuffer' })

        await DinzBotz.sendMessage(m.chat, { 
            image: data, 
            caption: '✨ Oh this is beautiful...',
            contextInfo: { mentionedJid: [m.sender] }
        }, { quoted: m })

    } catch (e) {
        console.error(e)
        reply('❌ Gagal memproses gambar.')
    }
}
break
case 'blur': {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''

    if (!/image/.test(mime)) return reply(`Kirim atau Reply gambar dengan caption *${prefix + command}*`)

    await DinzBotz.sendMessage(m.chat, { react: { text: '😶‍🌫️', key: m.key } })

    try {
        let media = await q.download()
        
        let form = new FormData()
        form.append('reqtype', 'fileupload')
        form.append('userhash', '')
        form.append('fileToUpload', media, { filename: 'image.jpg' })

        let uploadReq = await axios.post('https://catbox.moe/user/api.php', form, {
            headers: {
                ...form.getHeaders()
            }
        })
        
        let imageUrl = uploadReq.data

        if (!imageUrl || imageUrl.includes('error')) return reply('❌ Gagal upload gambar ke server.')

        let apiUrl = `https://api.siputzx.my.id/api/canvas/blur?image=${encodeURIComponent(imageUrl)}`
        
        let { data } = await axios.get(apiUrl, { responseType: 'arraybuffer' })

        await DinzBotz.sendMessage(m.chat, { 
            image: data, 
            caption: '😶‍🌫️ Blur Effect Success',
            contextInfo: { mentionedJid: [m.sender] }
        }, { quoted: m })

    } catch (e) {
        console.error(e)
        reply('❌ Gagal memproses gambar.')
    }
}
break
case 'tolol':
case 'sertifikattolol': {
    if (!text) return reply(`Masukan nama yang ingin dibuatkan sertifikat!\nContoh: *${prefix + command} Udin*`)

    await DinzBotz.sendMessage(m.chat, { react: { text: '📜', key: m.key } })

    try {
        let apiUrl = `https://api.siputzx.my.id/api/canvas/sertifikat-tolol?text=${encodeURIComponent(text)}`
        
        let { data } = await axios.get(apiUrl, { responseType: 'arraybuffer' })

        await DinzBotz.sendMessage(m.chat, { 
            image: data, 
            caption: 'Nih sertifikatnya, pajang di dinding ya 🤣',
            contextInfo: { mentionedJid: [m.sender] }
        }, { quoted: m })

    } catch (e) {
        console.error(e)
        reply('❌ Gagal membuat sertifikat.')
    }
}
break
case 'igstalk': {
    if (!text) return reply(`Masukan username Instagram!\nContoh: *${prefix + command} google*`)

    await DinzBotz.sendMessage(m.chat, { react: { text: '🔍', key: m.key } })

    try {
        let { data } = await axios.get(`https://api.siputzx.my.id/api/stalk/instagram?username=${text}`)
        
        if (!data.status || !data.data) return reply(`❌ Username *${text}* tidak ditemukan.`)

        let user = data.data
        
        let caption = `📸 *INSTAGRAM STALK* 📸\n\n`
        caption += `👤 *Username:* @${user.username}\n`
        caption += `📛 *Nama:* ${user.full_name}\n`
        caption += `📝 *Bio:* ${user.biography || '-'}\n`
        caption += `🔗 *Link Bio:* ${user.external_url || '-'}\n\n`
        
        caption += `📊 *Statistik Akun:*\n`
        caption += `👥 *Followers:* ${user.followers_count.toLocaleString()}\n`
        caption += `👤 *Following:* ${user.following_count.toLocaleString()}\n`
        caption += `🖼️ *Total Post:* ${user.posts_count.toLocaleString()}\n`

        await DinzBotz.sendMessage(m.chat, {
            image: { url: user.profile_pic_url },
            caption: caption
        }, { quoted: m })

    } catch (e) {
        console.error(e)
        reply('❌ Gagal mengambil data. Pastikan API key aman atau server sedang tidak down.')
    }
}
break
case 'ghstalk':
case 'github': {
    if (!text) return reply(`Masukan username GitHub!\nContoh: *${prefix + command} octocat*`)

    await DinzBotz.sendMessage(m.chat, { react: { text: '🐱', key: m.key } })

    try {
        let { data } = await axios.get(`https://api.siputzx.my.id/api/stalk/github?user=${text}`)

        if (!data.status) return reply(`❌ Username *${text}* tidak ditemukan.`)

        let gh = data.data
        let createdAt = new Date(gh.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
        let updatedAt = new Date(gh.updated_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })

        let caption = `👾 *GITHUB PROFILE* 👾\n\n`
        caption += `👤 *Name:* ${gh.nickname || gh.username}\n`
        caption += `🔖 *Username:* @${gh.username}\n`
        caption += `📝 *Bio:* ${gh.bio || '-'}\n`
        caption += `🆔 *ID:* ${gh.id}\n`
        caption += `📍 *Location:* ${gh.location || '-'}\n`
        caption += `🏢 *Company:* ${gh.company || '-'}\n`
        caption += `📧 *Email:* ${gh.email || '-'}\n`
        caption += `🔗 *Blog/Web:* ${gh.blog || '-'}\n\n`
        
        caption += `📊 *Statistics:*\n`
        caption += `📦 *Repos:* ${gh.public_repo}\n`
        caption += `📑 *Gists:* ${gh.public_gists}\n`
        caption += `👥 *Followers:* ${gh.followers}\n`
        caption += `👤 *Following:* ${gh.following}\n\n`
        
        caption += `📅 *Created:* ${createdAt}\n`
        caption += `🔄 *Updated:* ${updatedAt}\n`
        caption += `🔗 *Profile:* ${gh.url}`

        await DinzBotz.sendMessage(m.chat, {
            image: { url: gh.profile_pic },
            caption: caption
        }, { quoted: m })

    } catch (e) {
        console.error(e)
        reply('❌ Gagal mengambil data GitHub.')
    }
}
break
case 'ttstalk':
case 'tiktokstalk': {
    if (!text) return reply(`Masukan username TikTok!\nContoh: *${prefix + command} mrbeast*`)

    await DinzBotz.sendMessage(m.chat, { react: { text: '🎵', key: m.key } })

    try {
        let { data } = await axios.get(`https://api.siputzx.my.id/api/stalk/tiktok?username=${text}`)

        if (!data.status || !data.data) return reply(`❌ Username *${text}* tidak ditemukan.`)

        let user = data.data.user
        let stats = data.data.stats
        
        let createDate = new Date(user.createTime * 1000).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })

        let caption = `🎵 *TIKTOK PROFILE* 🎵\n\n`
        caption += `👤 *Username:* @${user.uniqueId} ${user.verified ? '✅' : ''}\n`
        caption += `📛 *Nickname:* ${user.nickname}\n`
        caption += `📝 *Bio:* ${user.signature || '-'}\n`
        caption += `🔗 *Link Bio:* ${user.bioLink ? user.bioLink.link : '-'}\n`
        caption += `📅 *Created:* ${createDate}\n\n`
        
        caption += `📊 *Statistics:*\n`
        caption += `👥 *Followers:* ${stats.followerCount.toLocaleString()}\n`
        caption += `👤 *Following:* ${stats.followingCount.toLocaleString()}\n`
        caption += `❤️ *Likes:* ${stats.heart.toLocaleString()}\n`
        caption += `🎥 *Video:* ${stats.videoCount.toLocaleString()}\n`
        caption += `🔒 *Private:* ${user.privateAccount ? 'Yes' : 'No'}`

        await DinzBotz.sendMessage(m.chat, {
            image: { url: user.avatarLarger },
            caption: caption
        }, { quoted: m })

    } catch (e) {
        console.error(e)
        reply('❌ Gagal mengambil data TikTok.')
    }
}
break
case 'twtstalk': {
    if (!text) return reply(`Masukan username Twitter!\nContoh: *${prefix + command} Genshin*`)

    await DinzBotz.sendMessage(m.chat, { react: { text: '🐦', key: m.key } })

    try {
        let { data } = await axios.get(`https://api.siputzx.my.id/api/stalk/twitter?user=${text}`)

        if (!data.status || !data.data) return reply(`❌ Username *${text}* tidak ditemukan.`)

        let twt = data.data
        let stats = twt.stats
        let profile = twt.profile

        let createdAt = new Date(twt.created_at).toLocaleDateString('id-ID', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })

        let caption = `🐦 *TWITTER PROFILE* 🐦\n\n`
        caption += `👤 *Name:* ${twt.name} ${twt.verified ? '✅' : ''}\n`
        caption += `🔖 *Username:* @${twt.username}\n`
        caption += `📝 *Bio:* ${twt.description || '-'}\n`
        caption += `📍 *Location:* ${twt.location || '-'}\n`
        caption += `📅 *Joined:* ${createdAt}\n\n`

        caption += `📊 *Statistics:*\n`
        caption += `👥 *Followers:* ${stats.followers.toLocaleString()}\n`
        caption += `👤 *Following:* ${stats.following.toLocaleString()}\n`
        caption += `🐦 *Tweets:* ${stats.tweets.toLocaleString()}\n`
        caption += `❤️ *Likes:* ${stats.likes.toLocaleString()}\n`
        caption += `🖼️ *Media:* ${stats.media.toLocaleString()}\n\n`

        caption += `🆔 *ID:* ${twt.id}`

        await DinzBotz.sendMessage(m.chat, {
            image: { url: profile.image },
            caption: caption
        }, { quoted: m })

    } catch (e) {
        console.error(e)
        reply('❌ Gagal mengambil data Twitter.')
    }
}
break
// -- Tools
case 'country':
case 'negara': {
    if (!text) return reply(`Masukan nama negara!\nContoh: *${prefix + command} Indonesia*`)

    await DinzBotz.sendMessage(m.chat, { react: { text: '🌏', key: m.key } })

    try {
        let { data } = await axios.get(`https://api.siputzx.my.id/api/tools/countryInfo?name=${text}`)

        if (!data.status || !data.data) return reply(`❌ Negara *${text}* tidak ditemukan.`)

        let info = data.data
        let neighbors = info.neighbors && info.neighbors.length > 0 ? info.neighbors.map(n => n.name).join(', ') : 'Tidak ada / Negara Kepulauan'
        let languages = info.languages && info.languages.native ? info.languages.native.join(', ') : '-'

        let caption = `🌏 *COUNTRY INFORMATION* 🌏\n\n`
        caption += `🏳️ *Name:* ${info.name}\n`
        caption += `🏛️ *Capital:* ${info.capital}\n`
        caption += `🗺️ *Continent:* ${info.continent.name} ${info.continent.emoji}\n`
        caption += `💰 *Currency:* ${info.currency}\n`
        caption += `🗣️ *Language:* ${languages}\n`
        caption += `📞 *Phone Code:* ${info.phoneCode}\n`
        caption += `🌐 *TLD Domain:* ${info.internetTLD}\n`
        caption += `📏 *Area:* ${info.area.squareKilometers.toLocaleString()} km²\n`
        caption += `🚗 *Driving Side:* ${info.drivingSide}\n`
        caption += `⭐ *Famous For:* ${info.famousFor}\n`
        caption += `📍 *Coordinates:* ${info.coordinates.latitude}, ${info.coordinates.longitude}\n\n`
        
        caption += `🏘️ *Neighbors:*\n${neighbors}`

        await DinzBotz.sendMessage(m.chat, {
            image: { url: info.flag },
            caption: caption
        }, { quoted: m })

    } catch (e) {
        console.error(e)
        reply('❌ Gagal mengambil data negara.')
    }
}
break
case 'kodepos': {
    if (!text) return reply(`Masukan nama daerah!\nContoh: *${prefix + command} pabuaran*`)

    await DinzBotz.sendMessage(m.chat, { react: { text: '📮', key: m.key } })

    try {
        let { data } = await axios.get(`https://api.siputzx.my.id/api/tools/kodepos?form=${text}`)

        if (!data.status || data.data.length === 0) return reply(`❌ Data tidak ditemukan untuk wilayah *${text}*.`)

        let caption = `📮 *PENCARIAN KODE POS* 📮\n`
        caption += `🔎 *Query:* ${text}\n\n`

        for (let i of data.data) {
            caption += `📍 *Lokasi:* ${i.desa}, ${i.kecamatan}\n`
            caption += `🏙️ *Kota/Kab:* ${i.kota}\n`
            caption += `🗺️ *Provinsi:* ${i.provinsi}\n`
            caption += `✉️ *Kode Pos:* ${i.kodepos}\n`
            caption += `──────────────────\n`
        }

        await DinzBotz.sendMessage(m.chat, { text: caption }, { quoted: m })

    } catch (e) {
        console.error(e)
        reply('❌ Gagal mengambil data kode pos.')
    }
}
break
case 'subdofind':
case 'subdomain': {
    if (!text) return reply(`Masukan nama domain!\nContoh: *${prefix + command} siputzx.my.id*`)

    await DinzBotz.sendMessage(m.chat, { react: { text: '🌐', key: m.key } })

    try {
        let { data } = await axios.get(`https://api.siputzx.my.id/api/tools/subdomains?domain=${text}`)

        if (!data.status || !data.data || data.data.length === 0) return reply(`❌ Subdomain tidak ditemukan untuk *${text}*.`)

        let subdomains = data.data.join('\n').split('\n').filter(item => item.trim() !== '')
        
        let caption = `🌐 *SUBDOMAIN FINDER* 🌐\n`
        caption += `🔎 *Target:* ${text}\n`
        caption += `📊 *Total Found:* ${subdomains.length}\n\n`
        
        caption += subdomains.map((sub, i) => `${i + 1}. ${sub}`).join('\n')

        await DinzBotz.sendMessage(m.chat, { text: caption }, { quoted: m })

    } catch (e) {
        console.error(e)
        reply('❌ Gagal mengambil data subdomain.')
    }
}
break
case 'menyerah':
case 'nyerah': {
      if (m.chat in siapaaku) {
        clearTimeout(siapaaku[m.chat][3])
        delete siapaaku[m.chat]
        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }
      if (m.chat in tebakkalimat) {
        clearTimeout(tebakkalimat[m.chat][3])
        delete tebakkalimat[m.chat]

        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }
      if (m.chat in tebakbendera) {
        clearTimeout(tebakbendera[m.chat][3])
        delete tebakbendera[m.chat]

        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }
      if (m.chat in tebakkata) {
        clearTimeout(tebakkata[m.chat][3])
        delete tebakkata[m.chat]

        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }
      if (m.chat in asahotak) {
        clearTimeout(asahotak[m.chat][3])
        delete asahotak[m.chat]

        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }
      if (m.chat in lengkapikalimat) {
        clearTimeout(lengkapikalimat[m.chat][3])
        delete lengkapikalimat[m.chat]

        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }
      if (m.chat in tebakgame) {
        clearTimeout(tebakgame[m.chat][3])
        delete tebakgame[m.chat]

        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }
      if (m.chat in tebakhero) {
        clearTimeout(tebakhero[m.chat][3])
        delete tebakhero[m.chat]

        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }
      if (m.chat in tebakff) {
        clearTimeout(tebakff[m.chat][3])
        delete tebakff[m.chat]

        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }
      if (m.chat in tebakkabupaten) {
        clearTimeout(tebakkabupaten[m.chat][3])
        delete tebakkabupaten[m.chat]

        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }
      if (m.chat in tebakjkt48) {
        clearTimeout(tebakjkt48[m.chat][3])
        delete tebakjkt48[m.chat]

        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }
      if (m.chat in tebaknct) {
        clearTimeout(tebaknct[m.chat][3])
        delete tebaknct[m.chat]

        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }
      if (m.chat in tebakhewan) {
        clearTimeout(tebakhewan[m.chat][3])
        delete tebakhewan[m.chat]

        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }
      if (m.chat in tebakml) {
        clearTimeout(tebakml[m.chat][3])
        delete tebakml[m.chat]

        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }
      if (m.chat in tebakchara) {
        clearTimeout(tebakchara[m.chat][3])
        delete tebakchara[m.chat]

        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }
      if (m.chat in tebaklogo) {
        clearTimeout(tebaklogo[m.chat][3])
        delete tebaklogo[m.chat]

        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }
      if (m.chat in tebakaplikasi) {
        clearTimeout(tebakaplikasi[m.chat][3])
        delete tebakaplikasi[m.chat]

        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }
      if (m.chat in tebakkimia) {
        clearTimeout(tebakkimia[m.chat][3])
        delete tebakkimia[m.chat]

        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }
      if (m.chat in tebaklirik) {
        clearTimeout(tebaklirik[m.chat][3])
        delete tebaklirik[m.chat]

        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }
      if (m.chat in tebaktebakan) {
        clearTimeout(tebaktebakan[m.chat][3])
        delete tebaktebakan[m.chat]

        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }
      if (m.chat in susunkata) {
        clearTimeout(susunkata[m.chat][3])
        delete susunkata[m.chat]

        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }
      if (m.chat in caklontong) {
        clearTimeout(caklontong[m.chat][3])
        delete caklontong[m.chat]

        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }
      if (m.chat in tebakgambar) {
        clearTimeout(tebakgambar[m.chat][3])
        delete tebakgambar[m.chat]

        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }
      if (m.chat in tekateki) {
        clearTimeout(tekateki[m.chat][3])
        delete tekateki[m.chat]

        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }
         if (m.chat in DinzBotz.tebakff) {
        clearTimeout(DinzBotz.tebakff[m.chat][3])
        delete DinzBotz.tebakff[m.chat]
        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }
      if (m.chat in DinzBotz.tebakgame) {
        clearTimeout(DinzBotz.tebakgame[m.chat][3])
        delete DinzBotz.tebakgame[m.chat]
        return DinzBotz.sendMessage(m.chat, {
          text: `kamu sangat payah, kroco banget 😜`
        }, {
          quoted: m
        })
      }

    }

    break
case 'bantuan': {
      if (m.chat in tebakgambar) {
        let json = tebakgambar[m.chat][1]
        m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }
      if (m.chat in tebakgame) {
        let json = tebakgame[m.chat][1]
        m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }
      if (m.chat in tebakhero) {
        let json = tebakhero[m.chat][1]
        m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }
      if (m.chat in tebakff) {
        let json = tebakff[m.chat][1]
        m.reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }
      if (m.chat in tebakkabupaten) {
        let json = tebakkabupaten[m.chat][1]
        m.reply('```' + json.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }
      if (m.chat in tebakjkt48) {
        let json = tebakjkt48[m.chat][1]
        m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }
      if (m.chat in tebaknct) {
        let json = tebaknct[m.chat][1]
        m.reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }
      if (m.chat in tebakhewan) {
        let json = tebakhewan[m.chat][1]
        m.reply('```' + json.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }
      if (m.chat in tebakml) {
        let json = tebakml[m.chat][1]
        m.reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }
      if (m.chat in tebakchara) {
        let json = tebakchara[m.chat][1]
        m.reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }
      if (m.chat in tebaklogo) {
        let json = tebaklogo[m.chat][1]
        m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }
      if (m.chat in tebakaplikasi) {
        let json = tebakaplikasi[m.chat][1]
        m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }
      if (m.chat in tebakkata) {
        let json = tebakkata[m.chat][1]
        m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }
      if (m.chat in asahotak) {
        let json = asahotak[m.chat][1]
        m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }
      if (m.chat in lengkapikalimat) {
        let json = lengkapikalimat[m.chat][1]
        m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }
      if (m.chat in tebakbendera) {
        let json = tebakbendera[m.chat][1]
        m.reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }
      if (m.chat in tebakkalimat) {
        let json = tebakkalimat[m.chat][1]
        m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }
      if (m.chat in siapaaku) {
        let json = siapaaku[m.chat][1]
        m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }
      if (m.chat in tebakkimia) {
        let json = tebakkimia[m.chat][1]
        m.reply('```' + json.unsur.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }
      if (m.chat in tebaklirik) {
        let json = tebaklirik[m.chat][1]
        m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }
      if (m.chat in tebaktebakan) {
        let json = tebaktebakan[m.chat][1]
        m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }
      if (m.chat in susunkata) {
        let json = susunkata[m.chat][1]
        m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }
      if (m.chat in caklontong) {
        let json = caklontong[m.chat][1]
        m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }
      if (m.chat in tekateki) {
        let json = tekateki[m.chat][1]
        m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }
        if (m.chat in DinzBotz.tebakff) {
        let json = DinzBotz.tebakff[m.chat][1]
        m.reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }
      if (m.chat in DinzBotz.tebakgame) {
        let json = DinzBotz.tebakgame[m.chat][1]
        m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
      }

    }
    break
case 'tebakff': {
    if (m.chat in DinzBotz.tebakff) return reply('Masih ada soal yang belum terjawab di chat ini.')
    try {
        let { data } = await axios.get('https://api.siputzx.my.id/api/games/karakter-freefire')
        if (!data.status) return reply('Gagal mengambil data game.')
        let json = data.data
        let caption = `🎮 *TEBAK KARAKTER FF* 🎮\n\nSiapakah nama karakter Free Fire di atas?\n\n⏳ Waktu: 60 Detik\n🎫 Bantuan: .bantuan\n🏳️ Nyerah: .nyerah`
        DinzBotz.tebakff[m.chat] = [
            await DinzBotz.sendMessage(m.chat, { image: { url: json.gambar }, caption: caption }, { quoted: m }),
            json,
            2500,
            setTimeout(() => {
                if (DinzBotz.tebakff[m.chat]) {
                    reply(`⏳ *Waktu Habis!*\n\nJawabannya adalah: *${json.name}*`)
                    delete DinzBotz.tebakff[m.chat]
                }
            }, 60000)
        ]
    } catch (e) {
        reply('Terjadi kesalahan pada fitur Tebak FF.')
    }
}
break
case 'tebakgame': {
    if (m.chat in DinzBotz.tebakgame) return reply('Masih ada soal yang belum terjawab di chat ini.')
    try {
        let { data } = await axios.get('https://api.siputzx.my.id/api/games/tebakgame')
        if (!data.status) return reply('Gagal mengambil data game.')
        let json = data.data
        let caption = `🎮 *TEBAK GAME* 🎮\n\nApa judul game dari gambar di atas?\n\n⏳ Waktu: 60 Detik\n🎫 Bantuan: .bantuan\n🏳️ Nyerah: .nyerah`
        DinzBotz.tebakgame[m.chat] = [
            await DinzBotz.sendMessage(m.chat, { image: { url: json.img }, caption: caption }, { quoted: m }),
            json,
            2500,
            setTimeout(() => {
                if (DinzBotz.tebakgame[m.chat]) {
                    reply(`⏳ *Waktu Habis!*\n\nJawabannya adalah: *${json.jawaban}*`)
                    delete DinzBotz.tebakgame[m.chat]
                }
            }, 60000)
        ]
    } catch (e) {
        reply('Terjadi kesalahan pada fitur Tebak Game.')
    }
}
break
case 'artinama': {
    if (!text) return reply('Masukan nama yang ingin dicek, contoh: .artinama Dinz')
    try {
        let { data } = await axios.get(`https://api.siputzx.my.id/api/primbon/artinama?nama=${text}`)
        if (!data.status) return reply('Maaf, arti nama tidak ditemukan.')
        let json = data.data
        let txt = `🔮 *PRIMBON ARTI NAMA* 🔮\n\n`
        txt += `👤 Nama: ${json.nama}\n`
        txt += `📝 Arti: ${json.arti}\n\n`
        txt += `💡 Catatan: ${json.catatan}`
        reply(txt)
    } catch (e) {
        reply('Terjadi kesalahan saat mengecek arti nama.')
    }
}
break
case 'cocoknama': {
    if (!text.includes('|')) return reply('Masukan nama kamu dan pasangan dipisah dengan tanda |, contoh: .cocoknama Putu|Keyla')
    let [nama1, nama2] = text.split('|')
    try {
        let { data } = await axios.get(`https://api.siputzx.my.id/api/primbon/kecocokan_nama_pasangan?nama1=${nama1}&nama2=${nama2}`)
        if (!data.status) return reply('Maaf, data tidak ditemukan.')
        let json = data.data
        let caption = `❤️ *RAMALAN KECOCOKAN CINTA* ❤️\n\n`
        caption += `👤 Nama Kamu: ${json.nama_anda}\n`
        caption += `👤 Nama Pasangan: ${json.nama_pasangan}\n\n`
        caption += `➕ Sisi Positif: ${json.sisi_positif}\n`
        caption += `➖ Sisi Negatif: ${json.sisi_negatif}\n\n`
        caption += `💡 Catatan: ${json.catatan}`
        await DinzBotz.sendMessage(m.chat, { image: { url: json.gambar }, caption: caption }, { quoted: m })
    } catch (e) {
        reply('Terjadi kesalahan saat mengecek kecocokan nama.')
    }
}
break
case 'ramaljodoh': {
    if (!text.includes('|')) return reply('Format salah!\nMasukan: Nama1,Tanggal,Bulan,Tahun|Nama2,Tanggal,Bulan,Tahun\n\nContoh: .ramaljodoh Putu,16,11,2007|Keyla,01,01,2008')
    
    let [orang1, orang2] = text.split('|')
    let [nama1, tgl1, bln1, thn1] = orang1.split(',')
    let [nama2, tgl2, bln2, thn2] = orang2.split(',')

    if (!nama1 || !tgl1 || !bln1 || !thn1 || !nama2 || !tgl2 || !bln2 || !thn2) return reply('Pastikan data lengkap! Tanggal, bulan, dan tahun harus diisi untuk keduanya.')

    try {
        let { data } = await axios.get(`https://api.siputzx.my.id/api/primbon/ramalanjodoh?nama1=${nama1}&tgl1=${tgl1}&bln1=${bln1}&thn1=${thn1}&nama2=${nama2}&tgl2=${tgl2}&bln2=${bln2}&thn2=${thn2}`)
        
        if (!data.status) return reply('Gagal mengambil data ramalan.')

        let res = data.data.result
        let txt = `❤️ *RAMALAN JODOH (PRIMBON JAWA)* ❤️\n\n`
        txt += `👨 Name 1: ${nama1} (${tgl1}/${bln1}/${thn1})\n`
        txt += `👩 Name 2: ${nama2} (${tgl2}/${bln2}/${thn2})\n\n`
        txt += `📜 *Deskripsi:*\n${res.deskripsi}\n\n`
        txt += `🔮 *Hasil Analisa:*\n${res.hasil_ramalan.join('\n\n')}\n\n`
        if (data.data.peringatan) txt += `⚠️ *Peringatan:* ${data.data.peringatan}`

        reply(txt)
    } catch (e) {
        reply('Terjadi kesalahan, pastikan format tanggal angka benar.')
    }
}
break
case 'tafsirmimpi': {
    if (!text) return reply('Masukan kata kunci mimpi, contoh: .tafsirmimpi ular')
    try {
        let { data } = await axios.get(`https://api.siputzx.my.id/api/primbon/tafsirmimpi?mimpi=${text}`)
        if (!data.status) return reply('Tafsir mimpi tidak ditemukan.')
        
        let json = data.data
        let txt = `🔮 *TAFSIR MIMPI* 🔮\n`
        txt += `🔍 Keyword: ${json.keyword}\n\n`
        
        for (let i of json.hasil) {
            txt += `💭 *Mimpi:* ${i.mimpi}\n`
            txt += `💬 *Arti:* ${i.tafsir}\n`
            txt += `───────────────────\n`
        }
        
        txt += `\n💡 *SOLUSI (Jika Mimpi Buruk):*\n${json.solusi}`
        
        reply(txt)
    } catch (e) {
        reply('Terjadi kesalahan saat mencari tafsir mimpi.')
    }
}
break
case 'cecanindo':
case 'cecanindonesia': {
    await DinzBotz.sendMessage(m.chat, {
        image: { url: 'https://api.siputzx.my.id/api/r/cecan/indonesia' },
        caption: `Random Cecan Indonesia`,
        buttons: [{ buttonId: 'cecanindo', buttonText: { displayText: 'Lanjut' }, type: 1 }],
        headerType: 4
    }, { quoted: m })
}
break

case 'cecanchina':
case 'cecancina': {
    await DinzBotz.sendMessage(m.chat, {
        image: { url: 'https://api.siputzx.my.id/api/r/cecan/china' },
        caption: `Random Cecan China`,
        buttons: [{ buttonId: 'cecanchina', buttonText: { displayText: 'Lanjut' }, type: 1 }],
        headerType: 4
    }, { quoted: m })
}
break

case 'cecanjapan':
case 'cecanjepang': {
    await DinzBotz.sendMessage(m.chat, {
        image: { url: 'https://api.siputzx.my.id/api/r/cecan/japan' },
        caption: `Random Cecan Japan`,
        buttons: [{ buttonId: 'cecanjapan', buttonText: { displayText: 'Lanjut' }, type: 1 }],
        headerType: 4
    }, { quoted: m })
}
break

case 'cecankorea':
case 'cecankor': {
    await DinzBotz.sendMessage(m.chat, {
        image: { url: 'https://api.siputzx.my.id/api/r/cecan/korea' },
        caption: `Random Cecan Korea`,
        buttons: [{ buttonId: 'cecankorea', buttonText: { displayText: 'Lanjut' }, type: 1 }],
        headerType: 4
    }, { quoted: m })
}
break

case 'cecanthailand':
case 'cecanthai': {
    await DinzBotz.sendMessage(m.chat, {
        image: { url: 'https://api.siputzx.my.id/api/r/cecan/thailand' },
        caption: `Random Cecan Thailand`,
        buttons: [{ buttonId: 'cecanthailand', buttonText: { displayText: 'Lanjut' }, type: 1 }],
        headerType: 4
    }, { quoted: m })
}
break

case 'cecanvietnam':
case 'cecanviet': {
    await DinzBotz.sendMessage(m.chat, {
        image: { url: 'https://api.siputzx.my.id/api/r/cecan/vietnam' },
        caption: `Random Cecan Vietnam`,
        buttons: [{ buttonId: 'cecanvietnam', buttonText: { displayText: 'Lanjut' }, type: 1 }],
        headerType: 4
    }, { quoted: m })
}
break

case 'neko':
case 'randomneko': {
    await DinzBotz.sendMessage(m.chat, {
        image: { url: 'https://api.siputzx.my.id/api/r/neko' },
        caption: `Random Neko`,
        buttons: [{ buttonId: 'neko', buttonText: { displayText: 'Lanjut' }, type: 1 }],
        headerType: 4
    }, { quoted: m })
}
break

case 'waifu':
case 'randomwaifu': {
    await DinzBotz.sendMessage(m.chat, {
        image: { url: 'https://api.siputzx.my.id/api/r/waifu' },
        caption: `Random Waifu`,
        buttons: [{ buttonId: 'waifu', buttonText: { displayText: 'Lanjut' }, type: 1 }],
        headerType: 4
    }, { quoted: m })
}
break

case 'bluearchive':
case 'randombluearchive': {
    await DinzBotz.sendMessage(m.chat, {
        image: { url: 'https://api.siputzx.my.id/api/r/blue-archive' },
        caption: `Random Blue Archive`,
        buttons: [{ buttonId: 'bluearchive', buttonText: { displayText: 'Lanjut' }, type: 1 }],
        headerType: 4
    }, { quoted: m })
}
break
case 'nglspam': {

      if (!DinzTheCreator) return reply(mess.prem)
      if (!text.split("|")[0] || !text.split("|")[1] || !text.split("|")[2]) {
        return reply("Masukan username, pesan, dan jumlah spam!\nContoh: .nglspam Dinz|haloo|5");
      }
      async function sendSpamMessage(username, message, spamCount) {
        let counter = 0;
        while (counter < spamCount) {
          try {
            const date = new Date();
            const minutes = date.getMinutes();
            const hours = date.getHours();
            const formattedDate = `${hours}:${minutes}`;
            const deviceId = crypto.randomBytes(21).toString('hex');
            const url = 'https://ngl.link/api/submit';
            const headers = {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
              'Accept': '*/*',
              'Accept-Language': 'en-US,en;q=0.5',
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'X-Requested-With': 'XMLHttpRequest',
              'Sec-Fetch-Dest': 'empty',
              'Sec-Fetch-Mode': 'cors',
              'Sec-Fetch-Site': 'same-origin',
              'Referer': `https://ngl.link/${username}`,
              'Origin': 'https://ngl.link'
            };
            const body = `username=${username}&question=${message}&deviceId=${deviceId}&gameSlug=&referrer=`;

            const response = await fetch(url, {
              method: 'POST',
              headers,
              body,
              mode: 'cors',
              credentials: 'include'
            });

            if (response.status !== 200) {
              console.log(`[${formattedDate}] [Err] Ratelimited`);
              await new Promise(resolve => setTimeout(resolve, 25000));
            } else {
              counter++;
              console.log(`[${formattedDate}] [Msg] Sent: ${counter}`);
            }
          } catch (error) {
            console.error(`[${formattedDate}] [Err] ${error}`);
            await new Promise(resolve => setTimeout(resolve, 5000));
          }
        }
      };
      const [username, message, count] = text.split("|");
      const spamCount = parseInt(count, 10);

      if (isNaN(spamCount) || spamCount <= 0) {
        return reply("Jumlah spam harus berupa angka positif!");
      }

      try {
        await sendSpamMessage(username, message, spamCount);
        reply(`Sukses mengirim ${spamCount} pesan NGL ke ${username}`);
      } catch (e) {
        console.error(e); // Menambahkan logging error untuk debug
        return reply("Fitur error, coba lagi nanti.");
      }
    }
    //D|ts si pler 🐎
    break
case 'firasattelinga': {
    try {
        let { data } = await axios.get('https://gist.githubusercontent.com/dinzid04/9ed36f9ed2e1e00e9a90dfc3efefd91a/raw/7c34f00cc0c4a215cdec1c82fcb067174ba4ef22/telinga.json')
        let jam = new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }).split(' ')[1].split(':')[0]
        let inputJam = text ? text.replace(/:00/g, '') : jam
        let result = data.find(i => i.jam.startsWith(inputJam.toString().padStart(2, '0')))
        if (!result) return reply('Data firasat tidak ditemukan untuk jam tersebut.')
        let txt = `👂 *FIRASAT TELINGA BERDENGING* 👂\n`
        txt += `🕐 Pukul: ${result.jam}\n\n`
        txt += `⬅️ *Kiri:* ${result.kiri}\n`
        txt += `➡️ *Kanan:* ${result.kanan}`
        reply(txt)
    } catch (e) {
        reply('Terjadi kesalahan saat mengambil data.')
    }
}
break

case 'firasatkedutan': {
    if (!text) return reply('Masukan bagian tubuh yang kedutan, contoh: .firasatkedutan mata')
    try {
        let { data } = await axios.get('https://gist.githubusercontent.com/dinzid04/54b9ae66ea33ad4c86b1fabf9ed4be36/raw/f7a7278cfb06350604d2c8b6de8c16539e0bcc58/kedutan.json')
        let result = data.find(i => i.bagian.toLowerCase().includes(text.toLowerCase()))
        if (!result) return reply('Bagian tubuh tidak ditemukan di primbon.')
        let txt = `⚡ *FIRASAT KEDUTAN* ⚡\n`
        txt += `📍 Bagian: ${result.bagian}\n`
        txt += `📝 Arti: ${result.arti}`
        reply(txt)
    } catch (e) {
        reply('Terjadi kesalahan saat mengambil data.')
    }
}
break

case 'artitahilalat': {
    if (!text) return reply('Masukan posisi tahi lalat, contoh: .artitahilalat bibir')
    try {
        let { data } = await axios.get('https://gist.githubusercontent.com/dinzid04/63458c6ca0cf67abaf886690e78b88a0/raw/1fc6990d69e7a05c338ee683902651267208d6e9/tahilalat.json')
        let result = data.find(i => i.posisi.toLowerCase().includes(text.toLowerCase()))
        if (!result) return reply('Posisi tahi lalat tidak ditemukan.')
        let txt = `🌑 *ARTI TAHI LALAT* 🌑\n`
        txt += `📍 Posisi: ${result.posisi}\n`
        txt += `📝 Arti: ${result.arti}`
        reply(txt)
    } catch (e) {
        reply('Terjadi kesalahan saat mengambil data.')
    }
}
break

case 'kokology': {
    try {
        let { data } = await axios.get('https://gist.githubusercontent.com/dinzid04/dd92b0bc1f54c85b0786832d3f087c06/raw/a1fb1da9ba6925916ca5ebcd811ba719c0cc61f1/kokologi.json')
        let json = data[Math.floor(Math.random() * data.length)]
        let txt = `🧠 *TES PSIKOLOGI (KOKOLOGY)* 🧠\n\n`
        txt += `❓ *Soal:* \n${json.soal}\n\n`
        txt += `(Pikirkan jawabanmu dulu sebelum membaca penjelasan di bawah)\n`
        txt += String.fromCharCode(8206).repeat(4001)
        txt += `\n💡 *Penjelasan/Arti:*\n${json.penjelasan}`
        reply(txt)
    } catch (e) {
        reply('Terjadi kesalahan saat mengambil data.')
    }
}
break

case 'gombalan':
case 'katabijak':
case 'faktaunik':
case 'faktapsikologi':
case 'deeptalk':
case 'alasanngeles': {
    let urls = {
        'gombalan': 'https://gist.githubusercontent.com/dinzid04/4597fc507454491fa9c4d1ab645a2b1c/raw/4d28654c85c285d7d72103aaeaf42bf6b3343958/gombalan.json',
        'katabijak': 'https://gist.githubusercontent.com/dinzid04/3a5b65f99d7be0163eb07fa297eb5dca/raw/7207fe1cdde8c2bef300206dee3ec257aca67cd1/katabijak.json',
        'faktaunik': 'https://gist.githubusercontent.com/dinzid04/d581f0315247c25ee7b5b5f2d54480e4/raw/60cd4b64a65b5185127ba7fda8593f37424a3812/fakta_unik.json',
        'faktapsikologi': 'https://gist.githubusercontent.com/dinzid04/d759a1af34df0b488df7196ea3066ad4/raw/6513bb70e04919850e275402762962ba547c08b4/fakta_psikologi.json',
        'deeptalk': 'https://gist.githubusercontent.com/dinzid04/a520110eed6183b6f557214ee60a4554/raw/236c0a3f9d19a8ce6139aa2060e8ccbbed11a7b6/topik_deeptalk',
        'alasanngeles': 'https://gist.githubusercontent.com/dinzid04/1421ba61c4ab85fe879b43b836799b61/raw/121a3463e018a9f76236b1bb8757e9c5da5c7b4c/alasan_ngeles.json'
    }
    try {
        let { data } = await axios.get(urls[command])
        let result = data[Math.floor(Math.random() * data.length)]
        let header = command.toUpperCase()
        if (command == 'deeptalk') header = 'DEEP TALK TOPIC'
        if (command == 'alasanngeles') header = 'ALASAN NGELES'
        reply(`📜 *${header}*\n\n"${result}"`)
    } catch (e) {
        reply('Terjadi kesalahan saat mengambil data.')
    }
}
break
case 'daftar': {
    let user = global.db.users[m.sender]
    if (user.registered === true) return reply(`⚠️ Kamu sudah terdaftar!\nSN: \`${user.sn}\``)
    if (!text) return reply('❎ Format salah!\nContoh: *.daftar Dinz.18*')
    let [nama, umur] = text.split('.')
    if (!nama || !umur) return reply('❎ Format salah!\nContoh: *.daftar Dinz.18*')
    if (isNaN(umur)) return reply('Umur harus angka!')
    if (umur > 50) return reply('Tua banget bang 🗿')
    if (umur < 10) return reply('Bocil dilarang make 👶')
    
    let sn = require('crypto').randomBytes(8).toString('hex')
    let ppuser
    try {
        ppuser = await DinzBotz.profilePictureUrl(m.sender, 'image')
    } catch (err) {
        ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' 
    }
    
    user.name = nama
    user.age = parseInt(umur)
    user.sn = sn
    user.registered = true
    user.date = new Date().toLocaleDateString('id-ID', { timeZone: 'Asia/Jakarta' })
    
    let buffer = await makeCard('welcome', { 
        pp: ppuser, 
        name: nama, 
        age: umur, 
        sn: sn, 
        date: user.date 
    })
    
    await DinzBotz.sendMessage(m.chat, { 
        image: buffer, 
        caption: `✅ *REGISTRASI BERHASIL*\n\nTerima kasih sudah mendaftar.\nSN kamu: \`${sn}\``
    }, { quoted: m })
}
break

case 'unreg':
case 'unregister': {
    let user = global.db.users[m.sender]
    if (!user.registered) return reply('Kamu belum terdaftar.')

    if (!text) {
        let captcha = await new canvafy.Captcha()
            .setBackground("image", "https://cdn.dinzid.biz.id/3Vd2.jpg")
            .setCaptchaKey(user.sn)
            .setBorder("#ff0000")
            .setOverlayOpacity(0.7)
            .build()

        let media = await prepareWAMessageMedia({ image: captcha }, { upload: DinzBotz.waUploadToServer })

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        header: {
                            hasMediaAttachment: true,
                            imageMessage: media.imageMessage
                        },
                        body: {
                            text: `⚠️ *KONFIRMASI HAPUS AKUN*\n\nSN: ${user.sn}\nApakah kamu yakin ingin menghapus akun?`
                        },
                        footer: {
                            text: 'Pilih tombol di bawah'
                        },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "✅ LANJUT UNREG",
                                        id: `.unreg ${user.sn}`
                                    })
                                },
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "❌ BATAL",
                                        id: ".menu"
                                    })
                                }
                            ]
                        }
                    }
                }
            }
        }, { quoted: m })

        await DinzBotz.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
        return
    }

    if (text !== user.sn) return reply('SN Salah! Lihat gambar.')
    
    user.registered = false
    user.name = ''
    user.age = 0
    user.sn = ''
    user.limit = 0
    reply('✅ Akun berhasil dihapus.')
}
break

case 'ceksn':
case 'cekserial': {
    let user = global.db.users[m.sender]
    if (!user.registered) return reply('Kamu belum daftar!')
    reply(`🔑 *SERIAL NUMBER KAMU*\n\n\`${user.sn}\``)
}
break

case 'ceklimit':
case 'limit': {
    let user = global.db.users[m.sender]
    let ppuser
    try {
        ppuser = await DinzBotz.profilePictureUrl(m.sender, 'image')
    } catch (err) {
        ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
    }
    
    let buffer = await makeCard('limit', { 
        pp: ppuser, 
        limit: isOwner ? '∞' : user.limit, 
        limitAwal: global.limit_awal,
        isHabis: false 
    })
    
    await DinzBotz.sendMessage(m.chat, { 
        image: buffer, 
        caption: `📊 *STATUS LIMIT*\n\nLimit: ${isOwner ? 'Unlimited' : user.limit} / ${global.limit_awal}\nReset: 00:00 WIB`
    }, { quoted: m })
}
break
case 'addlimit': {
    if (!isOwner) return reply('Khusus Owner!')
    
    let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    if (!target) return reply('❎ Tag orangnya atau reply chatnya!\nContoh: .addlimit @user 10')
    
    let jumlah = args.filter(v => !v.includes('@') && !isNaN(v))[0]
    
    if (!jumlah) return reply('❎ Masukan jumlah limitnya angka!\nContoh: .addlimit @user 10')
    
    jumlah = parseInt(jumlah)
    let userTarget = global.db.users[target]
    if (!userTarget) return reply('⚠️ User tersebut belum pernah chat bot.')
    
    userTarget.limit += jumlah
    reply(`✅ *SUKSES TAMBAH LIMIT*\n\n👤 Target: @${target.split('@')[0]}\n➕ Tambah: ${jumlah}\n🎫 Total Limit: ${userTarget.limit}`)
}
break

case 'resetlimit': {
    if (!isOwner) return reply('Khusus Owner!')
    let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    if (target) {
        let userTarget = global.db.users[target]
        userTarget.limit = global.limit_awal
        reply(`✅ Limit @${target.split('@')[0]} telah direset ke ${global.limit_awal}.`)
    } else {
        reply('⚠️ *RESET ALL LIMIT*\nSedang mereset limit seluruh user...')
        let users = global.db.users
        for (let jid in users) {
            users[jid].limit = global.limit_awal
        }
        reply(`✅ Sukses mereset limit semua user ke ${global.limit_awal}.`)
    }
}
break

case 'modelimit': {
    if (!isOwner) return reply('Fitur ini khusus Owner Bot!')
    
    let botNum = DinzBotz.user.id.split(':')[0] + "@s.whatsapp.net"
    let set = global.db.settings[botNum]

    if (args[0] === 'on') {
        set.modelimit = true
        reply('✅ Mode Limit berhasil diaktifkan.\n(Sedang menyimpan ke database...)')
    } else if (args[0] === 'off') {
        set.modelimit = false
        reply('✅ Mode Limit berhasil dimatikan.\n(Sedang menyimpan ke database...)')
    } else {
        reply(`Gunakan perintah: ${prefix + command} on/off\nStatus saat ini: ${set.modelimit ? 'ON' : 'OFF'}`)
        return // Jangan save kalau cuma cek status
    }
    
    // --- [ PAKSA SIMPAN DATA ] ---
    // Agar tidak hilang saat restart
    try {
        if (global.db.write) {
            await global.db.write() 
            reply('💾 Database berhasil disimpan permanen.')
        } else {
            reply('⚠️ Database tersimpan di RAM. Tunggu 1 menit sebelum restart agar tersimpan ke file.')
        }
    } catch (e) {
        console.log('Gagal menyimpan:', e)
    }
}
break

case 'modedaftar': {
    if (!isOwner) return reply('Fitur ini khusus Owner Bot!')

    let botNum = DinzBotz.user.id.split(':')[0] + "@s.whatsapp.net"
    let set = global.db.settings[botNum]

    if (args[0] === 'on') {
        set.modedaftar = true
        reply('✅ Mode Daftar berhasil diaktifkan.\n(Sedang menyimpan ke database...)')
    } else if (args[0] === 'off') {
        set.modedaftar = false
        reply('✅ Mode Daftar berhasil dimatikan.\n(Sedang menyimpan ke database...)')
    } else {
        reply(`Gunakan perintah: ${prefix + command} on/off\nStatus saat ini: ${set.modedaftar ? 'ON' : 'OFF'}`)
        return // Jangan save kalau cuma cek status
    }

    // --- [ PAKSA SIMPAN DATA ] ---
    // Agar tidak hilang saat restart
    try {
        if (global.db.write) {
            await global.db.write() 
            reply('💾 Database berhasil disimpan permanen.')
        } else {
            reply('⚠️ Database tersimpan di RAM. Tunggu 1 menit sebelum restart agar tersimpan ke file.')
        }
    } catch (e) {
        console.log('Gagal menyimpan:', e)
    }
}
break

case 'ban': {
    if (!isOwner) return reply('Khusus Owner!')
    let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    if (!target) return reply('Tag orangnya atau reply chatnya!')
    let userTarget = global.db.users[target]
    if (!userTarget) return reply('User tidak ditemukan di database.')
    
    userTarget.banned = true
    reply(`⛔ *SUKSES BAN USER*\n\nTarget: @${target.split('@')[0]}\nStatus: Banned Permanen`)
}
break

case 'unban': {
    if (!isOwner) return reply('Khusus Owner!')
    let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    if (!target) return reply('Tag orangnya atau reply chatnya!')
    let userTarget = global.db.users[target]
    if (!userTarget) return reply('User tidak ditemukan di database.')
    
    userTarget.banned = false
    reply(`✅ *SUKSES UNBAN USER*\n\nTarget: @${target.split('@')[0]}\nStatus: Bebas (Bisa pakai bot lagi)`)
}
break

case 'listban': {
    let users = global.db.users
    let bannedUsers = []
    for (let jid in users) {
        if (users[jid].banned) {
            bannedUsers.push(jid)
        }
    }
    
    let txt = `⛔ *DAFTAR USER BANNED*\nTotal: ${bannedUsers.length}\n\n`
    if (bannedUsers.length === 0) {
        reply('Tidak ada user yang dibanned saat ini.')
    } else {
        bannedUsers.forEach((id, i) => {
            txt += `${i + 1}. @${id.split('@')[0]}\n`
        })
        reply(txt)
    }
}
break
case 'enc-custom': {
    // 1. Validasi Input
    if (!m.quoted) return m.reply('Balas file .js yang mau di-enc!')
    
    let args = (text || '').trim().split(/\s+/)
    let customName = args[0]

    if (!customName) return m.reply(`Mana nama custom-nya?\nContoh: *${prefix + command} DinzBotz*`)
    if (!/^[a-zA-Z0-9_]+$/.test(customName)) return m.reply('Nama cuma boleh Huruf, Angka, dan _ (Tanpa spasi)')

    let fileName = m.quoted.fileName || 'script.js'
    if (!fileName.endsWith('.js')) return m.reply('Harus file .js wir!')

    // Kasih tau user lagi proses
    await m.reply(`⏳ Memproses enkripsi *${customName}* (Mode Aman)...`)

    try {
        // 2. Download File ke Memori
        let media = await m.quoted.download()
        let rawCode = media.toString('utf8')

        // Cek Syntax biar gak error
        try {
            new Function(rawCode)
        } catch (e) {
            return m.reply(`❌ Script error syntax! Benerin dulu:\n${e.message}`)
        }

        // 3. Generator Nama Custom
        const idGen = () => {
            const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
            let suffix = ''
            // Kita pendekin suffix jadi 2 huruf aja biar hemat memori
            for (let i = 0; i < 2; i++) suffix += chars[Math.floor(Math.random() * chars.length)]
            return `${customName}_${suffix}`
        }

        // 4. CONFIG RINGAN (LITE)
        // Fokus: Ganti Nama Variabel, tapi Logika JANGAN dibikin berat.
        const config = {
            target: 'node',
            preset: 'low', // Ganti ke LOW biar enteng
            
            // --- Fitur Tampilan (Request Kamu) ---
            renameVariables: true,
            renameGlobals: true,
            identifierGenerator: idGen, 
            hexadecimalNumbers: false, // Tetap Clean (No Hex)
            stringEncoding: false,     // Tetap Clean (No Unicode)
            duplicateLiteralsRemoval: false,
            
            // --- Fitur Berat (DIPANGKAS BIAR GAK CRASH) ---
            compact: true,
            minify: true,
            flatten: false, // Matikan flatten (Berat!)
            controlFlowFlattening: false, // Matikan control flow (Ini biang kerok RAM bocor)
            dispatcher: false, // Matikan dispatcher
            deadCode: false, // Matikan dead code (Bikin file gede & lemot)
            
            // Proteksi Standar Aja
            lock: { 
                selfDefending: false, 
                antiDebug: false 
            }
        }

        // 5. Eksekusi Enkripsi
        // Kita pakai await biar bot nungguin prosesnya selesai
        const obf = await JsConfuser.obfuscate(rawCode, config)
        const finalCode = typeof obf === 'string' ? obf : obf.code

        // 6. Langsung Kirim Buffer (Tanpa Simpan File)
        // Ini mengurangi beban disk I/O panel
        await DinzBotz.sendMessage(m.chat, {
            document: Buffer.from(finalCode, 'utf-8'),
            mimetype: 'application/javascript',
            fileName: `Enc-${customName}.js`,
            caption: `✅ *Sukses Encrypt (Lite Mode)!*
            
🛡️ Name: ${customName}
⚡ Status: Anti-Crash / Fast Build`
        }, { quoted: m })

    } catch (e) {
        console.error(e) // Cek console kalau masih error
        m.reply(`❌ Gagal: ${e.message}`)
    }
}
break
case 'hdvid':
case 'hdvideo': {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) return reply(`Kirim atau reply video dengan caption ${prefix + command}`)
    if (!/video/.test(mime)) return reply(`Kirim atau reply video dengan caption ${prefix + command}`)

    await DinzBotz.sendMessage(m.chat, { react: { text: "⚙️", key: m.key } })

    let ran = './' + Math.floor(Math.random() * 100000) + '.mp4'

    try {
        let media = await DinzBotz.downloadMediaMessage(q)
        fs.writeFileSync(ran, media)
        
        let urlVideo = await uploaden(ran)
        
        let res = await fetch(`https://api-faa.my.id/faa/hdvid?url=${urlVideo}`)
        let json = await res.json()
        
        if (fs.existsSync(ran)) fs.unlinkSync(ran)

        if (!json.status || !json.result || !json.result.download_url) return reply('Gagal memproses video, pastikan durasi tidak terlalu panjang.')

        await DinzBotz.sendMessage(m.chat, { 
            video: { url: json.result.download_url }, 
            caption: `✅ *SUKSES MENJERNIHKAN VIDEO*\n\n✨ *Status:* Success\n🎥 *Kualitas:* HD Enhanced` 
        }, { quoted: m })

    } catch (e) {
        console.log(e)
        reply('Terjadi kesalahan saat memproses video.')
        if (fs.existsSync(ran)) fs.unlinkSync(ran)
    }
}
break
case 'sider':
case 'kicksider': {
    if (!isGroup) return reply('Fitur ini khusus Grup!')
    if (!isBotAdmins) return reply('Bot harus jadi Admin dulu!')
    
    await DinzBotz.sendMessage(m.chat, { react: { text: "🔎", key: m.key } })

    let groupMetadata = await DinzBotz.groupMetadata(from)
    let participants = groupMetadata.participants
    let chatData = global.db.chats[from] ? global.db.chats[from].users : {}
    
    let totalMember = participants.length
    let now = Date.now()
    let oneWeek = 604800000 

    let ghosts = [] 
    let siders = [] 
    let active = [] 

    for (let member of participants) {
        let id = member.id
        let finalJid = id

        if (id.includes('@lid')) {
            if (DinzBotz.findJidByLid) {
                let found = DinzBotz.findJidByLid(id)
                if (found) finalJid = found
            }
            if (finalJid.includes('@lid')) {
                let manualSearch = Object.keys(chatData).find(key => chatData[key].lid === id)
                if (manualSearch) finalJid = manualSearch
            }
        } else {
            finalJid = DinzBotz.decodeJid(id)
        }

        let userDB = chatData[finalJid]
        
        if (!userDB || userDB.total === 0) {
            ghosts.push(finalJid)
        } else {
            let lastSeen = userDB.lastSeen
            let daysNoChat = Math.floor((now - lastSeen) / 86400000)
            
            let userData = { 
                id: finalJid, 
                total: userDB.total, 
                last: lastSeen, 
                days: daysNoChat,
                name: userDB.name || 'Unknown'
            }

            if (now - lastSeen > oneWeek) {
                siders.push(userData)
            } else {
                active.push(userData)
            }
        }
    }

    if (args[0] === 'kick') {
        if (!isAdmins) return reply('Khusus Admin Grup!')
        if (ghosts.length === 0) return reply('Tidak ada Ghost Sider yang bisa di-kick.')
        
        reply(`🚀 *KICKING GHOST SIDER*\nMengeluarkan ${ghosts.length} orang yang tidak pernah chat...`)
        
        for (let jid of ghosts) {
            await new Promise(resolve => setTimeout(resolve, 2000))
            await DinzBotz.groupParticipantsUpdate(from, [jid], 'remove')
        }
        return reply('✅ Selesai bersih-bersih grup.')
    }

    active.sort((a, b) => b.total - a.total)
    siders.sort((a, b) => a.last - b.last)

    let text = `📊 *ANALISIS GRUP FULL*\n`
    text += `👥 Total: ${totalMember} Member\n`
    text += `🗣️ Aktif: ${active.length}\n`
    text += `💤 Sider: ${siders.length}\n`
    text += `👻 Ghost: ${ghosts.length}\n`
    text += `_________________________\n\n`

    text += `🏆 *MEMBER AKTIF (${active.length})*\n`
    if (active.length === 0) {
        text += `- Belum ada data\n`
    } else {
        text += active.map((v, i) => {
            return `${i + 1}. @${v.id.split('@')[0]} (💬 ${v.total})`
        }).join('\n')
    }

    text += `\n\n💤 *SIDER 7 HARI+ (${siders.length})*\n`
    if (siders.length === 0) {
        text += `- Nihil\n`
    } else {
        text += siders.map(v => {
            let date = new Date(v.last).toLocaleDateString('id-ID')
            return `@${v.id.split('@')[0]} (${v.days} hari off)`
        }).join('\n')
    }

    text += `\n\n👻 *GHOST 0 CHAT (${ghosts.length})*\n`
    if (ghosts.length === 0) {
        text += `- Nihil\n`
    } else {
        text += ghosts.map(v => `@${v.split('@')[0]}`).join('\n')
    }

    text += `\n\n_Ketik ${prefix}sider kick untuk kick Ghost Sider_`

    let allMentions = [...active.map(v => v.id), ...siders.map(v => v.id), ...ghosts]

    await DinzBotz.sendMessage(m.chat, { 
        text: text, 
        mentions: allMentions 
    }, { quoted: m })
}
break












/* --tambah case disini-- */
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