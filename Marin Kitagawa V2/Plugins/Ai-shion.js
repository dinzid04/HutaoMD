/*
📌 Name : Shion AI
🏷️ Type : Plugin Esm
📦 Saluran : https://whatsapp.com/channel/0029Vb4HHTJFCCoYgkMjn93K
🔥 Sumber Api : zelapioffciall.koyeb.app
👤 Creator : Hazel
*/

const axios = require('axios');

const handler = async (m, { text, sock }) => {
    if (!text) throw 'Masukkan percakapanmu, contoh: Hai Shion, apa kabar?'

    try {
        const url = `https://zelapioffciall.koyeb.app/ai/shion?text=${encodeURIComponent(text)}`
        const res = await axios.get(url)
        const data = res.data

        if (!data.status || !data.result) {
            throw data.message || 'Tidak ada hasil ditemukan.'
        }

        const hasil = `${data.result.content}`

        await sock.sendMessage(m.chat, {
            text: hasil.trim()
        }, {
            quoted: m
        })

    } catch (error) {
        await sock.sendMessage(m.chat, {
            text: `Terjadi kesalahan: ${error.response?.data?.message || error.message || error}`
        }, {
            quoted: m
        })
    }
}

handler.help = ['shion']
handler.tags = ['ai', 'roleplay']
handler.command = ["shionai", "shion"]

module.exports = handler