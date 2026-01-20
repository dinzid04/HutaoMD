const fetch = require('node-fetch');

const handler = async (m, { sock, reply, isOwner, text, cmd, command }) => {
    try {
        // Kirim pesan "wait" terlebih dahulu
        const waitMsg = await sock.sendMessage(m.chat, { 
            text: '⏳ Mengambil data Grow a Garden...' 
        }, { quoted: m });
        
        // Fetch data dari API
        const apiUrl = 'https://api.zenzxz.my.id/api/info/growagardenstock';
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Format pesan response
        let message = `🌱 *GROW A GARDEN INFO* 🌱\n\n`;
        
        // Informasi source & update
        message += `🔗 *Source:* ${data.data.source}\n`;
        message += `🔄 *Updated:* ${data.data.updated}\n\n`;
        
        // Informasi user
        message += `👤 *USER INFO*\n`;
        message += `• Player Name: ${data.data.user.playerName}\n`;
        message += `• User ID: ${data.data.user.userId}\n`;
        message += `• Session ID: ${data.data.user.sessionId}\n\n`;
        
        // Informasi garden
        message += `🏡 *GARDEN INFO*\n`;
        message += `• Update Number: ${data.data.garden.updateNumber}\n`;
        message += `• Timestamp: ${data.data.garden.timestamp}\n`;
        message += `• Weather: ${data.data.garden.weather.type} (${data.data.garden.weather.duration}s)\n\n`;
        
        // Seeds dengan quantity > 0
        const availableSeeds = data.data.garden.seeds.filter(seed => seed.quantity > 0);
        if (availableSeeds.length > 0) {
            message += `🌿 *SEEDS AVAILABLE (${availableSeeds.length})*\n`;
            availableSeeds.forEach(seed => {
                message += `• ${seed.name}: ${seed.quantity}\n`;
            });
            message += `\n`;
        } else {
            message += `🌿 *SEEDS AVAILABLE:* Tidak ada seeds\n\n`;
        }
        
        // Gear dengan quantity > 0
        const availableGear = data.data.garden.gear.filter(item => item.quantity > 0);
        if (availableGear.length > 0) {
            message += `🛠️ *GEAR AVAILABLE (${availableGear.length})*\n`;
            availableGear.forEach(item => {
                message += `• ${item.name}: ${item.quantity}\n`;
            });
            message += `\n`;
        } else {
            message += `🛠️ *GEAR AVAILABLE:* Tidak ada gear\n\n`;
        }
        
        // Cosmetic dengan quantity > 0
        const availableCosmetic = data.data.garden.cosmetic.filter(item => item.quantity > 0);
        if (availableCosmetic.length > 0) {
            message += `🎨 *COSMETIC AVAILABLE (${availableCosmetic.length})*\n`;
            availableCosmetic.forEach(item => {
                message += `• ${item.name}: ${item.quantity}\n`;
            });
            message += `\n`;
        } else {
            message += `🎨 *COSMETIC AVAILABLE:* Tidak ada cosmetic\n\n`;
        }
        
        // Eggs dengan quantity > 0
        const availableEggs = data.data.garden.eggs.filter(egg => egg.quantity > 0);
        if (availableEggs.length > 0) {
            message += `🥚 *EGGS AVAILABLE (${availableEggs.length})*\n`;
            availableEggs.forEach(egg => {
                message += `• ${egg.name}: ${egg.quantity}\n`;
            });
            message += `\n`;
        } else {
            message += `🥚 *EGGS AVAILABLE:* Tidak ada eggs\n\n`;
        }
        
        // Event information
        if (data.data.garden.event && data.data.garden.event.length > 0) {
            message += `🎪 *EVENT ITEMS*\n`;
            data.data.garden.event.forEach(event => {
                message += `• ${event.name}: ${event.quantity}\n`;
            });
            message += `\n`;
        }
        
        // Traveling info
        if (data.data.garden.traveling && data.data.garden.traveling.Frame !== "0") {
            message += `✈️ *TRAVELING*\n`;
            message += `• Frame: ${data.data.garden.traveling.Frame}\n\n`;
        }
        
        // Meta information
        message += `📈 *META INFO*\n`;
        message += `• Last Update: ${new Date(data.data.meta.lastUpdateTime * 1000).toLocaleString()}\n`;
        message += `• Time Since Update: ${data.data.meta.timeSinceLastUpdate}s\n`;
        message += `• Data Expired: ${data.data.meta.dataExpired ? 'Yes' : 'No'}\n`;
        message += `• Data Version: ${data.data.meta.dataVersion}\n`;
        message += `• API Type: ${data.data.meta.apiType}\n\n`;
        
        // Edit pesan wait menjadi hasil
        await sock.sendMessage(m.chat, { 
            text: message,
            edit: waitMsg.key 
        });
        
    } catch (error) {
        console.error('Error fetching Grow a Garden data:', error);
        
        // Coba hapus pesan wait jika ada dan kirim error
        try {
            if (waitMsg) {
                await sock.sendMessage(m.chat, { 
                    text: `❌ Error: Gagal mengambil data Grow a Garden\n\nDetail: ${error.message}`,
                    edit: waitMsg.key 
                });
            } else {
                await reply(m.chat, `❌ Error: Gagal mengambil data Grow a Garden\n\nDetail: ${error.message}`, m);
            }
        } catch (editError) {
            await reply(m.chat, `❌ Error: Gagal mengambil data Grow a Garden\n\nDetail: ${error.message}`, m);
        }
    }
};

// Alternative simpler version tanpa edit message
const handlerSimple = async (m, { sock, reply }) => {
    try {
        await reply(m.chat, '⏳ Mengambil data Grow a Garden...', m);
        
        const apiUrl = 'https://api.zenzxz.my.id/api/info/growagardenstock';
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        let message = `🌱 *GROW A GARDEN INFO* 🌱\n\n`;
        message += `👤 *Player:* ${data.data.user.playerName}\n`;
        message += `🆔 *User ID:* ${data.data.user.userId}\n`;
        message += `🌦️ *Weather:* ${data.data.garden.weather.type}\n\n`;
        
        // Summary items
        const seedsCount = data.data.garden.seeds.filter(s => s.quantity > 0).length;
        const gearCount = data.data.garden.gear.filter(g => g.quantity > 0).length;
        const eggsCount = data.data.garden.eggs.filter(e => e.quantity > 0).length;
        
        message += `📦 *SUMMARY*\n`;
        message += `• Seeds: ${seedsCount} jenis\n`;
        message += `• Gear: ${gearCount} items\n`;
        message += `• Eggs: ${eggsCount} jenis\n\n`;
        
        message += `🕐 *Update:* ${data.data.updated}\n`;
        
        await reply(m.chat, message, m);
        
    } catch (error) {
        console.error('Error:', error);
        await reply(m.chat, `❌ Error: ${error.message}`, m);
    }
};

handler.help = ['growagarden', 'gaginfo'];
handler.tags = ['game', 'info'];
handler.command = ['growagarden', 'gaginfo', 'gardeninfo'];

module.exports = handler;