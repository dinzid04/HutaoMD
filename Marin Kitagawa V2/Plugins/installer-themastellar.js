const {
  Client
} = require('ssh2')

let handler = async (m, {
  sock,
  prefix,
  text,
  isOwner
}) => {
  if (!isOwner) return m.reply('Khusus Owner!!')
  if (!text || !text.split("|")) return m.reply("ipvps|pwvps")
  let vii = text.split("|")
  if (vii.length < 2) return m.reply("ipvps|pwvps")
  global.installtema = {
    vps: vii[0],
    pwvps: vii[1]
  }

  if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

  let ipvps = global.installtema.vps
  let passwd = global.installtema.pwvps

  const connSettings = {
    host: ipvps,
    port: '22',
    username: 'root',
    password: passwd
  }

  const command = `bash <(curl -s https://raw.githubusercontent.com/veryLinh/Theme-Autoinstaller/main/install.sh)`
  const ress = new Client();

  ress.on('ready', async () => {
    m.reply("Memproses install *tema stellar* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
    ress.exec(command, (err, stream) => {
      if (err) throw err
      stream.on('close', async (code, signal) => {
        await m.reply("Berhasil install *tema stellar* pterodactyl ✅")
        ress.end()
      }).on('data', async (data) => {
        console.log(data.toString())
        stream.write(`skyzodev\n`)
        stream.write(`1\n`)
        stream.write(`1\n`)
        stream.write(`yes\n`)
        stream.write(`x\n`)
      }).stderr.on('data', (data) => {
        console.log('STDERR: ' + data)
      });
    });
  }).on('error', (err) => {
    console.log('Connection Error: ' + err);
    m.reply('Katasandi atau IP tidak valid');
  }).connect(connSettings);
}

handler.help = ["installtemastellar"]
handler.tags = ["installtemastellar"]
handler.command = ["installtemastellar", "installstellartema", "installstellarthema", "installthemastellar", "installthematestellar"]

module.exports = handler