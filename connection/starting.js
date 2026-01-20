/*
   FIXED LOADING ANIMATION (ANTI-CRASH)
   Sekarang progress dibatasi max 100% agar tidak error string repeat
*/
const chalk = require('chalk')

const loading = async () => {
    return new Promise((resolve) => {
        let progress = 0;
        const barLength = 30; // Panjang loading bar

        const timer = setInterval(() => {
            progress += 5; // Kecepatan tambah

            // PENGAMAN: Pastikan progress tidak pernah lebih dari 100
            // Jika lebih dari 100, paksa jadi 100
            const safeProgress = progress > 100 ? 100 : progress;

            // Hitung panjang bar berdasarkan safeProgress
            const filledLength = Math.round((barLength * safeProgress) / 100);
            const emptyLength = barLength - filledLength;

            // PENGAMAN 2: Pastikan emptyLength tidak negatif
            const safeEmptyLength = emptyLength < 0 ? 0 : emptyLength;

            // Simbol bar
            const filled = '█'; 
            const empty = '░';
            
            // Buat bar dengan nilai yang sudah diamankan
            const bar = filled.repeat(filledLength) + empty.repeat(safeEmptyLength);
            
            // Cetak ke console (\r biar tidak spam ke bawah)
            process.stdout.write(`\r${chalk.yellow('🔥 Loading spirit...')} [${chalk.red(bar)}] ${chalk.magenta(safeProgress + '%')}`);

            // Cek jika sudah selesai
            if (progress >= 100) {
                clearInterval(timer); // Matikan loop
                process.stdout.write('\n'); // Enter
                console.log(chalk.green('✅ System Ready!'));
                
                // Jeda sedikit sebelum clear screen
                setTimeout(() => {
                    console.clear();
                    resolve(); // Lanjut ke tampilan nama HUTAO
                }, 800);
            }
        }, 100);
    });
}

module.exports = { loading }
