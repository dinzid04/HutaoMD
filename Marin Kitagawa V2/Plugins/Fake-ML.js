/**
  » Fitur : FAKE LOBY ML
  » Type     : Plugin ESM
  » Channel   : https://whatsapp.com/channel/0029Vay0apKJZg49rZz1OF33
  » Creator  : MifNity
  » Api      : [ https://api.zenzxz.my.id ]
  » Note    : Enjoy Your Life
**/

const fetch = require('node-fetch');
const FormData = require('form-data');

let handler = async (m, { sock, args }) => {
    try {
        if (!m.quoted && !m.msg?.image) return m.reply("Reply gambar nya");
        if (!args[0]) return m.reply("Contoh: .fakeml <username>");

        let q = m.quoted ? m.quoted : m;
        let mime = q.mimetype || "";
        if (!/image/.test(mime)) return m.reply("Yang direply harus gambar");

        let img = await q.download();

        let form = new FormData();
        form.append("image", img, "image.jpg");
        form.append("username", args[0]);

        let r = await fetch("https://api.zenzxz.my.id/api/maker/fakeml", {
            method: "POST",
            body: form
        });

        if (!r.ok) throw await r.text();
        let buffer = Buffer.from(await r.arrayBuffer());

        sock.sendMessage(m.chat, { image: buffer }, { quoted: m });

    } catch (e) {
        m.reply(String(e));
    }
};

handler.help = ['fakeml <username>'];
handler.command = ['fakeml'];
handler.tags = ['maker'];

module.exports = handler;