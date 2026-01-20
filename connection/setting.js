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
"use strict";
const fs = require('fs')
const chalk = require('chalk')

//---------------- Thumbnail --------//
global.dinzmenu = 'https://cdn.dinzid.biz.id/u7i9.jpg',
global.thumbnail = 'https://cdn.dinzid.biz.id/1ewl.jpg',


global.ownerNumber = ["212714299094", "628990936282"]
global.owner = "628990936282"
global.botfullname = "HuTao"
global.botname = "HuTao - MD"
global.ownername = "DinzID "

global.wlcmimg = 'https://cdn.dinzid.biz.id/hAOk.jpg'
global.leftimg = 'https://cdn.dinzid.biz.id/bBZU.jpg'
global.wlcm = true 
global.textwlcm = `welcome`


//---------SOCIAL MEDIA ---- ///
global.ig = "dinzid04"          
global.tempatDB = './database/database/database.json'


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
  author: `DinzID`,
  packname: `ʜᴜᴛᴀᴏ  - ᴍᴅ`,
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
	console.log(chalk.yellow(`New ${__filename}`))
	delete require.cache[file]
	require(file)
})
