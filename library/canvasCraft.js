const { createCanvas, loadImage } = require('@napi-rs/canvas');

// Icon Mapping
const iconUrls = {
    wood: 'https://img.icons8.com/fluency/96/wood.png',
    rock: 'https://img.icons8.com/fluency/96/rock.png',
    string: 'https://img.icons8.com/fluency/96/string.png',
    iron: 'https://img.icons8.com/fluency/96/iron-ore.png',
    diamond: 'https://img.icons8.com/fluency/96/diamond.png',
    emerald: 'https://img.icons8.com/fluency/96/emerald.png',
    money: 'https://img.icons8.com/fluency/96/money-bag.png',
    pickaxe: 'https://img.icons8.com/fluency/96/pickaxe.png',
    sword: 'https://img.icons8.com/fluency/96/sword.png',
    fishingrod: 'https://img.icons8.com/fluency/96/fishing-pole.png',
    armor: 'https://img.icons8.com/fluency/96/armor-plate.png',
    atm: 'https://img.icons8.com/fluency/96/atm.png',
    unknown: 'https://img.icons8.com/fluency/96/question-mark.png'
};

// Helper: Format Angka (12000 -> 12k)
function formatNumber(num) {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    return num.toString();
}

// Helper: Gambar Kotak Rounded
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

// Helper: Gambar Panah Manual (Anti Error Font)
function drawArrow(ctx, x, y) {
    ctx.save();
    ctx.fillStyle = '#FFFFFF';
    ctx.shadowColor = 'black';
    ctx.shadowBlur = 5;
    
    ctx.beginPath();
    // Batang panah
    ctx.rect(x, y - 10, 60, 20); 
    ctx.fill();
    
    // Kepala panah
    ctx.beginPath();
    ctx.moveTo(x + 60, y - 25);
    ctx.lineTo(x + 100, y);
    ctx.lineTo(x + 60, y + 25);
    ctx.fill();
    ctx.restore();
}

const createCraftCanvas = async (itemTarget, recipe, userInv) => {
    try {
        const width = 800;
        const height = 500;
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');

        // --- 1. BACKGROUND (Texture Kayu Gelap RPG) ---
        // Kita pakai background gelap solid + texture biar tulisan pop-up
        try {
            const bg = await loadImage('https://cdn.dinzid.biz.id/rcmk.jpg'); 
            ctx.drawImage(bg, 0, 0, width, height);
        } catch (e) {
            ctx.fillStyle = '#2b2b2b';
            ctx.fillRect(0,0, width, height);
        }

        // Darken Overlay
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, width, height);

        // Border Mewah (Gradient Gold)
        const borderGrad = ctx.createLinearGradient(0, 0, width, height);
        borderGrad.addColorStop(0, '#DAA520');
        borderGrad.addColorStop(0.5, '#FFD700');
        borderGrad.addColorStop(1, '#DAA520');
        ctx.strokeStyle = borderGrad;
        ctx.lineWidth = 12;
        ctx.strokeRect(0, 0, width, height);

        // --- 2. JUDUL ---
        ctx.fillStyle = '#FFD700';
        ctx.font = 'bold 45px Arial';
        ctx.textAlign = 'center';
        ctx.shadowColor = 'rgba(0,0,0,0.8)';
        ctx.shadowBlur = 15;
        ctx.fillText('⚒️ CRAFTING TABLE ⚒️', width / 2, 70);
        ctx.shadowBlur = 0; // Reset shadow

        // --- 3. LOGIC BAHAN (KIRI) ---
        const startX = 40;
        const startY = 130;
        let currentY = startY;

        ctx.textAlign = 'left';
        ctx.fillStyle = '#cccccc';
        ctx.font = 'bold 22px Arial';
        ctx.fillText('Material Needed:', startX + 10, 115);

        const ingredients = Object.keys(recipe);
        
        for (let material of ingredients) {
            const required = recipe[material];
            const owned = userInv[material] || 0;
            const isEnough = owned >= required;

            // Box Material Background
            ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.strokeStyle = isEnough ? 'rgba(0, 255, 0, 0.3)' : 'rgba(255, 0, 0, 0.3)';
            ctx.lineWidth = 2;
            
            drawRoundedRect(ctx, startX, currentY, 400, 75, 15);
            ctx.fill();
            ctx.stroke();

            // Icon Material
            const matUrl = iconUrls[material] || iconUrls.unknown;
            try {
                const matImg = await loadImage(matUrl);
                ctx.drawImage(matImg, startX + 15, currentY + 12, 50, 50);
            } catch (e) {}

            // Nama Material
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 26px Arial';
            ctx.textAlign = 'left';
            ctx.fillText(material.charAt(0).toUpperCase() + material.slice(1), startX + 80, currentY + 47);

            // Jumlah (Pojok Kanan Box)
            // Warna: Hijau kalau cukup, Merah kalau kurang
            ctx.fillStyle = isEnough ? '#00FF7F' : '#FF4500';
            ctx.font = 'bold 26px Arial';
            ctx.textAlign = 'right';
            
            // Format angka biar ga nabrak (ex: 220k / 10k)
            const txtCount = `${formatNumber(owned)} / ${formatNumber(required)}`;
            ctx.fillText(txtCount, startX + 380, currentY + 47);

            currentY += 85; // Jarak antar item
        }

        // --- 4. PANAH (TENGAH) ---
        // Gambar panah manual di koordinat tengah
        drawArrow(ctx, 470, 250);

        // --- 5. HASIL (KANAN) ---
        const resX = 600;
        const resY = 160;

        // Efek Glow di belakang hasil
        ctx.shadowColor = '#FFD700';
        ctx.shadowBlur = 40;
        ctx.fillStyle = 'rgba(255, 215, 0, 0.1)';
        drawRoundedRect(ctx, resX - 20, resY - 20, 160, 160, 20);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Border Box Hasil
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 4;
        ctx.stroke();

        // Icon Hasil
        const targetUrl = iconUrls[itemTarget] || iconUrls.unknown;
        try {
            const targetImg = await loadImage(targetUrl);
            ctx.drawImage(targetImg, resX, resY, 120, 120);
        } catch (e) {}

        // Nama Hasil
        ctx.fillStyle = '#FFD700'; // Warna Emas
        ctx.font = 'bold 30px Arial';
        ctx.textAlign = 'center';
        ctx.shadowColor = 'black';
        ctx.shadowBlur = 10;
        ctx.fillText(itemTarget.toUpperCase(), resX + 60, resY + 190);

        return canvas.toBuffer('image/png');

    } catch (error) {
        console.error("Error Crafting Canvas:", error);
        return null;
    }
};

module.exports = { createCraftCanvas };
