const { createCanvas, loadImage, GlobalFonts } = require('@napi-rs/canvas');

/**
 * Helper: Membuat Rounded Rectangle
 */
function drawRoundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
}

/**
 * Membuat Canvas Kartu Profil Premium (Dengan XP Bar & Custom BG)
 * @param {String} ppUrl - URL foto profil user
 * @param {String} name - Nama user
 * @param {String} status - Status user
 * @param {Number} level - Level user
 * @param {Number} currExp - XP saat ini
 * @param {Number} needExp - XP yang dibutuhkan untuk naik level
 * @param {String} bgUrl - URL Background Custom
 * @returns {Promise<Buffer>} - Buffer gambar
 */
const createMeCanvas = async (ppUrl, name, status, level, currExp, needExp, bgUrl) => {
    try {
        const width = 1000; // Resolusi lebih besar biar HD
        const height = 350;
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');

        // --- 1. BACKGROUND LAYER ---
        // Default BG jika url error/kosong
        let bgImage;
        try {
            bgImage = await loadImage(bgUrl || 'https://files.catbox.moe/t86463.jpg'); 
        } catch (e) {
            // Fallback background abstract dark
            bgImage = await loadImage('https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg');
        }

        // Gambar Background
        ctx.save();
        drawRoundedRect(ctx, 0, 0, width, height, 0); // Full canvas
        ctx.clip(); // Clip agar rounded (opsional)
        
        // Efek Blur pada Background
        ctx.filter = 'blur(6px)'; 
        // Skala gambar agar cover (menutupi seluruh canvas)
        const hRatio = width / bgImage.width;
        const vRatio = height / bgImage.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (width - bgImage.width * ratio) / 2;
        const centerShift_y = (height - bgImage.height * ratio) / 2;
        ctx.drawImage(bgImage, 0, 0, bgImage.width, bgImage.height, centerShift_x, centerShift_y, bgImage.width * ratio, bgImage.height * ratio);
        ctx.restore(); // Hapus filter blur untuk layer berikutnya

        // --- 2. DARK OVERLAY LAYER ---
        // Agar teks terbaca jelas, kita kasih lapisan hitam transparan gradient
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.9)');   // Kiri (gelap banget)
        gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.7)'); // Tengah
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.4)');   // Kanan (agak terang)
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        // --- 3. ORNAMEN DESIGN ---
        // Garis miring estetik
        ctx.save();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 100;
        ctx.beginPath();
        ctx.moveTo(300, -50);
        ctx.lineTo(200, height + 50);
        ctx.stroke();
        ctx.restore();

        // --- 4. FOTO PROFIL (AVATAR) ---
        const avatarSize = 220;
        const avatarX = 50;
        const avatarY = (height - avatarSize) / 2;
        const centerX = avatarX + (avatarSize / 2);
        const centerY = avatarY + (avatarSize / 2);

        ctx.save();
        // Glow Effect di belakang Avatar
        ctx.shadowColor = '#00d2ff';
        ctx.shadowBlur = 30;
        ctx.beginPath();
        ctx.arc(centerX, centerY, (avatarSize / 2) + 5, 0, Math.PI * 2, true);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow

        // Potong lingkaran untuk foto
        ctx.beginPath();
        ctx.arc(centerX, centerY, (avatarSize / 2), 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

        try {
            const avatar = await loadImage(ppUrl);
            ctx.drawImage(avatar, avatarX, avatarY, avatarSize, avatarSize);
        } catch (err) {
            ctx.fillStyle = '#333';
            ctx.fillRect(avatarX, avatarY, avatarSize, avatarSize);
        }
        ctx.restore();

        // Border Avatar (Ring)
        ctx.beginPath();
        ctx.arc(centerX, centerY, (avatarSize / 2) + 5, 0, Math.PI * 2, true);
        ctx.lineWidth = 8;
        ctx.strokeStyle = '#00d2ff'; // Warna Cyan Neon
        ctx.stroke();
        ctx.closePath();

        // --- 5. TEXT INFORMASI ---
        const textStartX = 320;
        
        // Nama User
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 60px Arial';
        ctx.shadowColor = "rgba(0,0,0,0.8)";
        ctx.shadowBlur = 10;
        ctx.fillText(name.length > 15 ? name.substring(0, 15) + '..' : name, textStartX, 100);
        
        // Status User (Background Badge)
        const statusText = status.toUpperCase();
        ctx.font = 'bold 28px Arial';
        const statusWidth = ctx.measureText(statusText).width + 40;
        
        // Kotak Status
        ctx.shadowBlur = 0;
        ctx.fillStyle = 'rgba(0, 210, 255, 0.2)'; // Cyan transparan
        drawRoundedRect(ctx, textStartX, 120, statusWidth, 45, 10);
        ctx.fill();
        ctx.strokeStyle = '#00d2ff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Teks Status
        ctx.fillStyle = '#00d2ff';
        ctx.fillText(statusText, textStartX + 20, 153);

        // Level Text
        ctx.fillStyle = '#cccccc';
        ctx.font = 'bold 30px Arial';
        ctx.fillText(`Level ${level}`, textStartX, 220);

        // --- 6. XP PROGRESS BAR ---
        const barX = textStartX;
        const barY = 240;
        const barWidth = 600;
        const barHeight = 35;
        const radius = 17;

        // Hitung Persentase
        let percent = Math.min(100, Math.max(0, (currExp / needExp) * 100));
        
        // 6a. Background Bar (Warna Abu Gelap)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        drawRoundedRect(ctx, barX, barY, barWidth, barHeight, radius);
        ctx.fill();

        // 6b. Fill Bar (Gradient Hijau/Cyan)
        if (percent > 0) {
            const fillWidth = (barWidth * percent) / 100;
            const barGrad = ctx.createLinearGradient(barX, 0, barX + fillWidth, 0);
            barGrad.addColorStop(0, '#00d2ff'); // Cyan
            barGrad.addColorStop(1, '#3a7bd5'); // Biru
            
            ctx.fillStyle = barGrad;
            // Pastikan lebar minimal selebar radius biar ga aneh bentuknya kalau dikit
            const drawFillWidth = Math.max(fillWidth, radius * 2); 
            
            // Clip area progress bar agar tidak keluar jalur rounded
            ctx.save();
            drawRoundedRect(ctx, barX, barY, barWidth, barHeight, radius);
            ctx.clip();
            
            ctx.beginPath();
            ctx.rect(barX, barY, fillWidth, barHeight);
            ctx.fill();
            ctx.restore();
        }

        // 6c. Teks XP (Overlay di atas bar)
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 20px Arial';
        const xpText = `${currExp} / ${needExp} XP (${Math.floor(percent)}%)`;
        // Taruh di tengah-tengah bar
        // const xpTextWidth = ctx.measureText(xpText).width;
        // ctx.fillText(xpText, barX + (barWidth - xpTextWidth) / 2, barY + 25);
        
        // Atau taruh di sebelah kanan atas bar
        ctx.textAlign = 'right';
        ctx.fillText(xpText, barX + barWidth, 220);

        return canvas.toBuffer('image/png');

    } catch (error) {
        console.error("Error creating premium me canvas:", error);
        return null;
    }
};

module.exports = { createMeCanvas };
