/**
- fitur pinterest search with albummessage work di baileys ongrih
- scrape by : wolep ( thanks scrape nya ) https://pastebin.com/SchZRQ2P
- create by: SkyWalker
**/

const fetch = require("node-fetch")
const {
  generateWAMessage,
  generateWAMessageFromContent,
  jidNormalizedUser
} = require("@whiskeysockets/baileys")
const { randomBytes } = require("crypto")

const handler = async (m, { sock, text, command }) => {
  if (!text) return m.reply(`Example: .${command} furina`)

  await sock.sendMessage(m.chat, { react: { text: "🕓", key: m.key } })

  let urls = []
  try {
    const url =
      "https://www.pinterest.com/resource/BaseSearchResource/get/?data=" +
      encodeURIComponent(
        JSON.stringify({
          options: { query: encodeURIComponent(text) }
        })
      )

    const res = await fetch(url, {
      method: "HEAD",
      headers: {
        "screen-dpr": "4",
        "x-pinterest-pws-handler": "www/search/[scope].js"
      }
    })

    if (!res.ok) throw new Error(`Error ${res.status}`)

    const linkHeader = res.headers.get("Link")
    if (!linkHeader) throw new Error(`Hasil kosong untuk "${text}"`)

    urls = [...linkHeader.matchAll(/<(.*?)>/gm)].map(a => a[1])
  } catch (e) {
    return m.reply(String(e.message))
  }

  const mediaList = []
  for (let url of urls) {
    if (mediaList.length >= 10) break
    try {
      const r = await fetch(url, { redirect: "follow" })
      const type = r.headers.get("content-type") || ""
      if (!type.startsWith("image/")) continue
      const arr = await r.arrayBuffer()
      const buffer = Buffer.from(arr)
      mediaList.push({
        image: buffer,
        caption: `Pinterest Result\nQuery: ${text}`
      })
    } catch {}
  }

  if (!mediaList.length) return m.reply("Tidak ada gambar valid.")

  const opener = generateWAMessageFromContent(
    m.chat,
    {
      messageContextInfo: { messageSecret: randomBytes(32) },
      albumMessage: {
        expectedImageCount: mediaList.filter(a => a.image).length,
        expectedVideoCount: mediaList.filter(a => a.video).length
      }
    },
    {
      userJid: jidNormalizedUser(sock.user.id),
      quoted: m,
      upload: sock.waUploadToServer
    }
  )

  await sock.relayMessage(opener.key.remoteJid, opener.message, {
    messageId: opener.key.id
  })

  for (let content of mediaList) {
    const msg = await generateWAMessage(opener.key.remoteJid, content, {
      upload: sock.waUploadToServer
    })

    msg.message.messageContextInfo = {
      messageSecret: randomBytes(32),
      messageAssociation: {
        associationType: 1,
        parentMessageKey: opener.key
      }
    }

    await sock.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id
    })
  }

  await sock.sendMessage(m.chat, { react: { text: null, key: m.key } })
}

handler.help = ["pinalbum"]
handler.tags = ["search", "image"]
handler.command = ["pinalbum"]

module.exports = handler