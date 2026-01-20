//————————————————————————//
// LIST RESPONSE SYSTEM (CJS FIXED)
//————————————————————————//

const axios = require('axios')
const chalk = require('chalk')
const cheerio = require("cheerio")
const FormData = require('form-data')
const fs = require('fs')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const path = require('path')

// Path database respon list
const dbPath = './lib/database/list-message.json'

// Fungsi load database (selalu hasilkan array)
function loadDB() {
  try {
    if (!fs.existsSync(dbPath)) {
      fs.writeFileSync(dbPath, JSON.stringify([], null, 3))
      return []
    }
    const data = fs.readFileSync(dbPath)
    const json = JSON.parse(data)
    return Array.isArray(json) ? json : [] // pastikan array
  } catch {
    // jika file rusak / bukan JSON valid
    fs.writeFileSync(dbPath, JSON.stringify([], null, 3))
    return []
  }
}

// Fungsi simpan database
function saveDB(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 3))
}

// Tambah respon baru
function addResponList(groupID, key, response, isImage, image_url) {
  const _db = loadDB()
  const obj_add = { id: groupID, key, response, isImage, image_url }
  _db.push(obj_add)
  saveDB(_db)
}

// Ambil data respon berdasarkan group dan key
function getDataResponList(groupID, key) {
  const _db = loadDB()
  return _db.find(item => item.id === groupID && item.key === key)
}

// Cek apakah respon sudah ada
function isAlreadyResponList(groupID, key) {
  const _db = loadDB()
  return Array.isArray(_db) && _db.some(item => item.id === groupID && item.key === key)
}

// Kirim respon sesuai key
function sendResponList(groupId, key) {
  const _db = loadDB()
  const found = _db.find(item => item.id === groupId && item.key === key)
  return found ? found.response : null
}

// Cek apakah grup sudah punya list respon
function isAlreadyResponListGroup(groupID) {
  const _db = loadDB()
  return Array.isArray(_db) && _db.some(item => item.id === groupID)
}

// Hapus respon berdasarkan group & key
function delResponList(groupID, key) {
  const _db = loadDB()
  const index = _db.findIndex(item => item.id === groupID && item.key === key)
  if (index !== -1) {
    _db.splice(index, 1)
    saveDB(_db)
  }
}

// Update respon
function updateResponList(groupID, key, response, isImage, image_url) {
  const _db = loadDB()
  const index = _db.findIndex(item => item.id === groupID && item.key === key)
  if (index !== -1) {
    _db[index].response = response
    _db[index].isImage = isImage
    _db[index].image_url = image_url
    saveDB(_db)
  }
}

module.exports = {
  addResponList,
  getDataResponList,
  isAlreadyResponList,
  sendResponList,
  isAlreadyResponListGroup,
  delResponList,
  updateResponList
}

// Auto reload module
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.greenBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})