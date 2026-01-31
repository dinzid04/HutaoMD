const { createCanvas, loadImage } = require('@napi-rs/canvas');

// Helper: Rounded Rectangle
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

const createDungeonCanvas = async (player, monster, battle) => {
    try {
        const width = 1000;
        const height = 500;
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');

        // --- 1. BACKGROUND (Dark Fantasy) ---
        try {
            const bg = await loadImage('https://cdn.dinzid.biz.id/Oz6F.jpg');
            ctx.drawImage(bg, 0, 0, width, height);
        } catch (e) {
            ctx.fillStyle = '#1a1a1a';
            ctx.fillRect(0, 0, width, height);
        }

        // Overlay Gelap (Lebih gelap di bawah untuk teks)
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, 'rgba(0,0,0,0.5)');
        gradient.addColorStop(0.6, 'rgba(0,0,0,0.8)');
        gradient.addColorStop(1, '#000000');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        // --- 2. PLAYER (KIRI) ---
        const pX = 150;
        const pY = 200;
        
        // Foto Profil
        ctx.save();
        ctx.shadowColor = '#00d2ff';
        ctx.shadowBlur = 25;
        ctx.beginPath();
        ctx.arc(pX, pY, 70, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        try {
            const pImg = await loadImage(player.image);
            ctx.drawImage(pImg, pX - 70, pY - 70, 140, 140);
        } catch (e) {
            ctx.fillStyle = '#0055ff';
            ctx.fillRect(pX - 70, pY - 70, 140, 140);
        }
        ctx.restore();

        ctx.beginPath();
        ctx.arc(pX, pY, 70, 0, Math.PI * 2);
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#00d2ff';
        ctx.stroke();

        // HP Bar Player
        let curHpP = Math.min(player.hp, player.maxHp);
        const pHpPercent = Math.max(0, curHpP / player.maxHp);
        
        ctx.fillStyle = '#333';
        drawRoundedRect(ctx, pX - 100, pY + 90, 200, 20, 10);
        ctx.fill();
        ctx.fillStyle = '#00d2ff'; 
        drawRoundedRect(ctx, pX - 100, pY + 90, 200 * pHpPercent, 20, 10);
        ctx.fill();
        
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(player.name.substr(0, 12), pX, pY + 145);
        ctx.font = '16px Arial';
        ctx.fillStyle = '#ccc';
        // Tampilkan HP yang sudah di-limit agar tidak aneh (misal: 450/450)
        ctx.fillText(`HP: ${Math.floor(curHpP)} / ${player.maxHp}`, pX, pY + 165);

        // --- 3. MONSTER (KANAN) ---
        const mX = width - 150;
        const mY = 200;

        try {
            const mImg = await loadImage(monster.image);
            ctx.shadowColor = '#ff0000';
            ctx.shadowBlur = 25;
            ctx.drawImage(mImg, mX - 90, mY - 90, 180, 180);
            ctx.shadowBlur = 0;
        } catch (e) {
            ctx.fillStyle = '#8B0000';
            ctx.beginPath();
            ctx.arc(mX, mY, 70, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 50px Arial';
            ctx.fillText(monster.name.charAt(0).toUpperCase(), mX, mY + 15);
        }

        // HP Bar Monster
        const mHpPercent = Math.max(0, monster.hp / monster.maxHp);
        ctx.fillStyle = '#333';
        drawRoundedRect(ctx, mX - 100, mY + 100, 200, 20, 10); 
        ctx.fill();
        ctx.fillStyle = '#ff0000'; 
        drawRoundedRect(ctx, mX - 100, mY + 100, 200 * mHpPercent, 20, 10);
        ctx.fill();

        ctx.fillStyle = '#ff4444';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(monster.name.toUpperCase(), mX, mY + 150);
        ctx.fillStyle = '#ccc';
        ctx.font = '16px Arial';
        ctx.fillText(`Tier: ${monster.tier}`, mX, mY + 170);

        // --- 4. VS (TENGAH) ---
        ctx.fillStyle = '#fff';
        ctx.font = 'italic 900 60px Arial';
        ctx.shadowColor = '#ff0000';
        ctx.shadowBlur = 20;
        ctx.fillText('VS', width / 2, pY + 10);
        ctx.shadowBlur = 0;

        // --- 5. BATTLE RESULT (TANPA KOTAK) ---
        const logX = width / 2;
        const logY = 380;

        // JUDUL HASIL (VICTORY / DEFEAT)
        ctx.font = '900 55px Arial';
        ctx.textAlign = 'center';
        
        if (battle.status === 'VICTORY') {
            // Efek teks emas glow
            ctx.shadowColor = '#FFD700'; 
            ctx.shadowBlur = 25;
            ctx.fillStyle = '#FFD700';
            ctx.fillText("VICTORY", logX, logY);
        } else {
            // Efek teks merah darah
            ctx.shadowColor = '#8B0000'; 
            ctx.shadowBlur = 25;
            ctx.fillStyle = '#FF3333';
            ctx.fillText("DEFEAT", logX, logY);
        }
        ctx.shadowBlur = 0; // Reset shadow

        // STATISTIK DAMAGE (Teks Putih Bersih)
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 22px Arial';
        // Simbol damage: ⚔️ dan 🛡️
        ctx.fillText(`HIT: ${battle.dmgDealt}   |   TAKEN: ${battle.dmgTaken}`, logX, logY + 45);

        // REWARD TEXT
        if (battle.status === 'VICTORY') {
            ctx.fillStyle = '#00FF7F'; // Spring Green
            ctx.font = 'bold 20px Arial';
            ctx.fillText(battle.reward, logX, logY + 80);
        } else {
            ctx.fillStyle = '#FF6347'; // Tomato Red
            ctx.font = 'bold 20px Arial';
            ctx.fillText("Kamu melarikan diri dengan luka parah...", logX, logY + 80);
        }

        return canvas.toBuffer('image/png');

    } catch (error) {
        console.error("Error Dungeon Canvas:", error);
        return null;
    }
};

module.exports = { createDungeonCanvas };
