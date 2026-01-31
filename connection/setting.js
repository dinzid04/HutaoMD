"use strict";
const fs = require('fs')
const chalk = require('chalk')

//---------------- Thumbnail --------
global.dinzmenu = 'https://cdn.dinzid.biz.id/u7i9.jpg',
global.thumbnail = 'https://cdn.dinzid.biz.id/1ewl.jpg',
//--------------- Settings Bots ---- 
global.ownerNumber = ["212714299094", "628990936282"]
global.owner = "628990936282"
global.botfullname = "HuTao"
global.botname = "HuTao - MD"
global.ownername = "DinzID "
//---------------Welcome ------
global.wlcmimg = 'https://cdn.dinzid.biz.id/hAOk.jpg'
global.leftimg = 'https://cdn.dinzid.biz.id/bBZU.jpg'
global.wlcm = true 
global.textwlcm = `welcome`


//---------SOCIAL MEDIA ---- 
global.ig = "dinzid04"          
global.idch = "120363405008705629@newsletter"
global.tempatDB = './database/database/database.json'
global.packname = 'DinzID'
global.author = 'HuTao ~ MD'


// ---------- Panel Ptero V1 -------
global.loc = "1" 
global.egg = "15" 
global.nestid = "5" 
global.domain = "https://ciaaabocil.shopryzen.my.id"
global.apikey = "ptla_153Qoc3I0nXQWNFhv7DEeq152JU2H2OeBqco2mu5QLF" 
global.capikey = "ptlc_WesWBGFnqt5rcDxYznPES8DxzLDNe2SS4Qkbg5wDd5M" 
// -------- Panel Ptero V2 ------- 
global.locV2 = "1" 
global.eggV2 = "15" 
global.nestidV2 = "5" 
global.domainV2 = "https:" 
global.apikeyV2 = "ptla_" 
global.capikeyV2 = "ptlc_" 


// ----- TextPanel --- 
global.teksPanel = 
"* Expired panel 1 bulan\n* Simpan data ini sebaik mungkin\n* Garansi pembelian 20 hari (5x replace)\n* Claim garansi wajib membawa bukti chat pembelian\n* No sebar Data panel\n* No DDOS Server\n> Jika ada masalah silahkan lapor"



//-------- RPG Icon ----- 
global.rpg = {
 emoticon(string) {
 string = string.toLowerCase()
 let emot = {
 level: '📊',
 limit: '🎫',
 health: '❤️',
 exp: '✨',
 atm: '💳',
 money: '💰',
 bank: '🏦',
 potion: '🥤',
 diamond: '💎',
 common: '📦',
 uncommon: '🛍️',
 mythic: '🎁',
 legendary: '🗃️',
 superior: '💼',
 pet: '🔖',
 trash: '🗑',
 armor: '🥼',
 sword: '⚔️',
 makanancentaur: "🥗",
 makanangriffin: "🥙",
 makanankyubi: "🍗",
 makanannaga: "🍖",
 makananpet: "🥩",
 makananphonix: "🧀",
 pickaxe: '⛏️',
 fishingrod: '🎣',
 wood: '🪵',
 rock: '🪨',
 string: '🕸️',
 horse: '🐴',
 cat: '🐱',
 dog: '🐶',
 fox: '🦊',
 robo: '🤖',
 petfood: '🍖',
 iron: '⛓️',
 gold: '🪙',
 emerald: '❇️',
 upgrader: '🧰',
 bibitanggur: '🌱',
 bibitjeruk: '🌿',
 bibitapel: '☘️',
 bibitmangga: '🍀',
 bibitpisang: '🌴',
 anggur: '🍇',
 jeruk: '🍊',
 apel: '🍎',
 mangga: '🥭',
 pisang: '🍌',
 botol: '🍾',
 kardus: '📦',
 kaleng: '🏮',
 plastik: '📜',
 gelas: '🧋',
 chip: '♋',
 umpan: '🪱',
 naga: "🐉",
 phonix: "🦅",
 kyubi: "🦊",
 griffin: "🦒",
 centaur: "🎠",
 skata: '🧩'
 }
 let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
 if (!results.length) return ''
 else return emot[results[0][0]]
 }
}


module.exports = {
  sesionName: "session",
  banchats: false,
  autoreadsw: false,
  anticall: true,
  banned: {
   maroko: true,
   india: false,
  },  
  gcount: { "prem": 30, "user": 20 },
  limitCount: 20,
  modul: {
    baileys: require("@whiskeysockets/baileys"),
    boom: require('@hapi/boom'),
    chalk: require('chalk'),
    sharp: require('sharp'),
    child: require('child_process'),
    fs: require('fs'),
    os: require('os'),
    pino: require("pino"),
    path: require("path"),
    phonenumber: require('awesome-phonenumber'),
    time: require("moment-timezone"),
    jimp: require('jimp'),
    speed: require('performance-now'),
    util: require("util"),
    https: require('https'),
    sizeFormater: require('human-readable'),
    axios: require('axios'),
    ytsr: require('yt-search'),           
    readline: require("readline"),
    nodecache: require("node-cache"),
    premium: require('parse-ms'),
   },
  file: {
    load: './connection/starting',
    color: './lib/color',
    move: './lib/simple.js', 
    set: './lib/myfunc',
    funct: './lib/function',
    exif: './lib/exif',
    list: './lib/list',
    scrapp: './lib/scraper',
    prem: './lib/premium',
    limit: './lib/limit',
  },

}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.yellow(`NEW ${__filename}`))
	delete require.cache[file]
	require(file)
})
