const {
  Client
} = require('ssh2')

let handler = async (m, {
  sock,
  prefix,
  text,
  isOwner
}) => {
  if (!isOwner) return m.reply('Khusus owner');
  if (!text || !text.split("|")) return m.reply("ipvps|pwvps")
  var vpsnya = text.split("|")
  if (vpsnya.length < 2) return m.reply("ipvps|pwvps|domain")
  let ipvps = vpsnya[0]
  let passwd = vpsnya[1]
  const connSettings = {
    host: ipvps,
    port: '22',
    username: 'root',
    password: passwd
  }
  const boostmysql = `\n`
  const command = `bash <(curl -s https://pterodactyl-installer.se)`
  const ress = new Client();
  ress.on('ready', async () => {

    await m.reply("Memproses *uninstall* server panel\nTunggu 1-10 menit hingga proses selsai")

    ress.exec(command, async (err, stream) => {
      if (err) throw err;
      stream.on('close', async (code, signal) => {
        await ress.exec(boostmysql, async (err, stream) => {
          if (err) throw err;
          stream.on('close', async (code, signal) => {
            await m.reply("Berhasil *uninstall* server panel ✅")
          }).on('data', async (data) => {
            await console.log(data.toString())
            if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
              await stream.write("\x09\n")
            }
          }).stderr.on('data', (data) => {
            m.reply('Berhasil Uninstall Server Panel ✅');
          });
        })
      }).on('data', async (data) => {
        await console.log(data.toString())
        if (data.toString().includes(`Input 0-6`)) {
          await stream.write("6\n")
        }
        if (data.toString().includes(`(y/N)`)) {
          await stream.write("y\n")
        }
        if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
          await stream.write("\n")
        }
        if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
          await stream.write("\n")
        }
      }).stderr.on('data', (data) => {
        m.reply('STDERR: ' + data);
      });
    });
  }).on('error', (err) => {
    m.reply('Katasandi atau IP tidak valid')
  }).connect(connSettings)
}

handler.help = ["uinstallpanel"]
handler.tags = ["paneluinstall"]
handler.command = ["uinstallpanel", "paneluinstall", "uinstallerpanel", "paneluinstaller"]

module.exports = handler