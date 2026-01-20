const fs = require('fs')
const canvafy = require('canvafy') 
const SETTING = require('../connection/setting');
module.exports = async (DinzBotz, anu) => {
  try {
        let metadata = await DinzBotz.groupMetadata(anu.id)
        let participants = anu.participants
        let namagc = metadata.subject;
      let thumwel = `${global.wlcmimg}`;
      let thumleft = `${global.leftimg}`;
      let jumpahMem = metadata.participants.length;
        for (let num of participants) {
 var ppuser
    try {
      ppuser = await DinzBotz.profilePictureUrl(m.sender, 'image')
    } catch (err) {
      ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
    }

            // --- WELCOME ---
            if (anu.action == 'add') {
                // Baca Data Terbaru
                let welcomeData = []
                let setWelcomeData = {}
                try {
                    welcomeData = JSON.parse(fs.readFileSync('./database/sambutan/welcome.json'))
                    setWelcomeData = JSON.parse(fs.readFileSync('./database/sambutan/set_welcome.json'))
                } catch {}

                // Cek langsung ke array data (tanpa bikin variable isWelcome lagi)
                if (welcomeData.includes(anu.id)) {
                    
                    let teks = setWelcomeData[anu.id] || "Halo @user, Selamat datang di @group 👋"
                    let welcomeCaption = teks
                        .replace(/@user/g, `@${num.split('@')[0]}`)
                        .replace(/@group/g, metadata.subject)
                        .replace(/@desc/g, metadata.desc?.toString() || "Tidak ada deskripsi")

                    const welcomeCard = await new canvafy.WelcomeLeave()
                        .setAvatar(ppuser)
                        .setBackground("image", `${global.wlcmimg}`)
                        .setTitle("WELCOME")
                        .setDescription(`Welcome to ${metadata.subject}`)
                        .setBorder("#2a2e35")
                        .setAvatarBorder("#2a2e35")
                        .setOverlayOpacity(0.5)
                        .build();

                    await DinzBotz.sendMessage(anu.id, { image: welcomeCard, caption: welcomeCaption, mentions: [num] })
                }
            }

            // --- LEFT ---
            else if (anu.action == 'remove') {
                // Baca Data Terbaru
                let leftData = []
                let setLeftData = {}
                try {
                    leftData = JSON.parse(fs.readFileSync('./database/sambutan/left.json'))
                    setLeftData = JSON.parse(fs.readFileSync('./database/sambutan/set_left.json'))
                } catch {}

                // Cek langsung ke array data
                if (leftData.includes(anu.id)) {
                    
                    let teks = setLeftData[anu.id] || "Selamat tinggal @user 👋"
                    let goodbyeCaption = teks
                        .replace(/@user/g, `@${num.split('@')[0]}`)
                        .replace(/@group/g, metadata.subject)
                        .replace(/@desc/g, metadata.desc?.toString() || "Tidak ada deskripsi")

                    const goodbyeCard = await new canvafy.WelcomeLeave()
                        .setAvatar(ppuser)
                        .setBackground("image", `${global.leftimg}`)
                        .setTitle("GOODBYE")
                        .setDescription(`Leaving ${metadata.subject}`)
                        .setBorder("#2a2e35")
                        .setAvatarBorder("#2a2e35")
                        .setOverlayOpacity(0.5)
                        .build();

                    await DinzBotz.sendMessage(anu.id, { image: goodbyeCard, caption: goodbyeCaption, mentions: [num] })
                }
            }
        }
    } catch (err) {
        console.log(err)
    }
}
