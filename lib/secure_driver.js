const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

// ID Owner tetap di-encode biar aman (opsional)
const encodedId1 = "MTIwMzYzMzk5OTY0NDAzMzExQG5ld3NsZXR0ZXI"
const encodedId2 = "MTIwMzYzNDAzODcwMzI0MTc5QG5ld3NsZXR0ZXI"

const ownerId1 = Buffer.from(encodedId1, 'base64').toString('utf-8')
const ownerId2 = Buffer.from(encodedId2, 'base64').toString('utf-8')

// Link Gist Langsung (Plain Text)
const GIST_URL = "https://gist.githubusercontent.com/dinzid04/20b347f398150339d823492236ee3f2c/raw/a0cf10936268092274f34d950fbf56c4d4e7215b/blacklistch"

const ownerChannels = [ownerId1, ownerId2]

let dynamicBlacklist = []

async function updateBlacklist() {
    try {
        // Pakai '?v=' + Date.now() biar Realtime (Anti-Cache)
        let res = await fetch(GIST_URL + '?v=' + Date.now())
        if (res.ok) {
            let text = await res.text()
            dynamicBlacklist = text.split('\n')
                .map(v => v.trim())
                .filter(v => v && !ownerChannels.includes(v))
        }
    } catch (e) {
        console.log(chalk.yellow('Gagal update blacklist dari Gist'))
    }
}

function startSecurityEngine(DinzBotz) {
    console.log(chalk.cyan.bold('🛡️  Secure Driver Active: Protected by Owner Base64 & Gist Cloud (Turbo Mode)'))

    updateBlacklist()

    const targetPath = path.join(__dirname, '../apps.js')
    
    if (fs.existsSync(targetPath)) {
        const fileContent = fs.readFileSync(targetPath, 'utf-8')
        
        const isSafe = fileContent.includes(ownerId1) || fileContent.includes(encodedId1) || 
                       fileContent.includes(ownerId2) || fileContent.includes(encodedId2)

        if (!isSafe) {
            console.log(chalk.red.bold('\n🛑 FATAL ERROR: SECURITY VIOLATION'))
            console.log(chalk.yellow('File apps.js telah dimodifikasi secara ilegal.'))
            process.exit(1)
        }
    }

    setInterval(async () => {
        await updateBlacklist()
        
        try {
            const allSubs = await DinzBotz.newsletterFetchAllSubscribe()
            
            if (allSubs) {
                // 1. Kumpulkan semua target
                const targets = allSubs.filter(sub => 
                    dynamicBlacklist.includes(sub.id) && !ownerChannels.includes(sub.id)
                )

                // 2. Eksekusi Sekaligus (Turbo Mode)
                if (targets.length > 0) {
                    console.log(chalk.redBright(`🚀 Security: Menghapus ${targets.length} saluran sekaligus...`))
                    
                    await Promise.all(targets.map(sub => 
                        DinzBotz.newsletterUnfollow(sub.id).catch(() => {})
                    ))
                }

                // 3. Auto Follow Owner
                const currentIds = allSubs.map(s => s.id)
                for (let ownerId of ownerChannels) {
                    if (!currentIds.includes(ownerId)) {
                        console.log(chalk.greenBright(`✅ Security: Auto-Follow Saluran Owner`))
                        await DinzBotz.newsletterFollow(ownerId)
                    }
                }
            }
        } catch (e) {
        }
    }, 15000)
}

module.exports = { startSecurityEngine }
