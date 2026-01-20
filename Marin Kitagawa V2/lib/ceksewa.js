const fs = require('fs');
const path = require('path');

async function cekSewa(conn) {
    try {
        console.log('🔍 Mengecek sewa group...');
        
        if (!fs.existsSync('./lib/database/sewa.json')) {
            console.log('📁 File sewa.json tidak ditemukan');
            return;
        }
        
        const data = fs.readFileSync('./lib/database/sewa.json', 'utf8');
        const sewaData = JSON.parse(data);
        const now = Date.now();
        
        for (const sewa of sewaData) {
            if (sewa.status === 'active' && now >= sewa.endTime) {
                console.log(`⏰ Waktu sewa habis untuk group: ${sewa.groupId}`);
                
                try {
                    // Keluar dari group
                    await conn.groupLeave(sewa.groupId);
                    console.log(`✅ Bot keluar dari group: ${sewa.groupId}`);
                    
                    // Update status
                    sewa.status = 'expired';
                } catch (error) {
                    console.error(`❌ Gagal keluar dari group ${sewa.groupId}:`, error.message);
                }
            }
        }
        
        // Simpan perubahan status
        fs.writeFileSync('./lib/database/sewa.json', JSON.stringify(sewaData, null, 2));
        console.log('✅ Pengecekan sewa selesai');
        
    } catch (error) {
        console.error('❌ Error dalam cekSewa:', error);
    }
}

// Jalankan cek sewa setiap 1 menit
function startSewaChecker(conn) {
    setInterval(() => cekSewa(conn), 60 * 1000); // 1 menit
    
    // Jalankan sekali saat startup
    setTimeout(() => cekSewa(conn), 5000);
}

module.exports = { cekSewa, startSewaChecker };