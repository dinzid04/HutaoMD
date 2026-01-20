// ./plugins/setmenu.js
const fs = require('fs');
const path = require('path');

const setmenuPath = path.join(__dirname, '../lib/database/setmenu.json');

// Load atau buat file setmenu.json
function loadSetMenu() {
    try {
        if (!fs.existsSync(setmenuPath)) {
            const defaultData = { menuVersion: 'v1' };
            fs.writeFileSync(setmenuPath, JSON.stringify(defaultData, null, 2));
            return defaultData;
        }
        return JSON.parse(fs.readFileSync(setmenuPath));
    } catch (error) {
        console.error('Error loading setmenu:', error);
        return { menuVersion: 'v1' };
    }
}

// Simpan setting menu
function saveSetMenu(data) {
    try {
        fs.writeFileSync(setmenuPath, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error('Error saving setmenu:', error);
        return false;
    }
}

const handler = async (m, { reply, isOwner, text, command, cmd }) => {
    try {
        const setmenu = loadSetMenu();
        
        if (!isOwner) {
            return await reply('❌ Command ini hanya untuk Owner!');
        }
        
        if (!text) {
            const currentMenu = setmenu.menuVersion || 'v1';
            return await reply(
`📋 *SET MENU*

Menu saat ini: *${currentMenu}*

Penggunaan:
${cmd} v1 - Set menu versi 1
${cmd} v2 - Set menu versi 2
${cmd} v3 - Set menu versi 3`
            );
        }
        
        const version = text.toLowerCase().trim();
        
        if (['v1', 'v2', 'v3'].includes(version)) {
            setmenu.menuVersion = version;
            const saved = saveSetMenu(setmenu);
            
            if (saved) {
                return await reply(`✅ Menu berhasil diatur ke versi *${version.toUpperCase()}*`);
            } else {
                return await reply('❌ Gagal menyimpan setting menu!');
            }
        } else {
            return await reply('❌ Versi menu tidak valid! Gunakan v1, v2, atau v3');
        }
    } catch (error) {
        console.error('Error in setmenu handler:', error);
        return await reply('❌ Terjadi error saat mengatur menu!');
    }
};

handler.help = ['setmenu'];
handler.tags = ['owner'];
handler.command = ['setmenu'];

module.exports = handler;