const { createCanvas, loadImage } = require('@napi-rs/canvas');

// --- UPDATE URL GAMBAR CUSTOM (FINAL) ---
const iconUrls = {
    // Resources
    rock: 'https://img.icons8.com/fluency/96/rock.png',
    iron: 'https://img.icons8.com/fluency/96/iron-ore.png',
    gold: 'https://img.icons8.com/fluency/96/gold-ore.png',
    diamond: 'https://cdn.dinzid.biz.id/H3mF.png',
    emerald: 'https://cdn.dinzid.biz.id/V9Uu.png',
    string: 'https://cdn.dinzid.biz.id/hl2F.png',
    wood: 'https://img.icons8.com/fluency/96/wood.png',
    trash: 'https://img.icons8.com/fluency/96/trash.png',
    
    // Ikan
    buntal: 'https://cdn.dinzid.biz.id/76KA.png',
    kepiting: 'https://img.icons8.com/fluency/96/crab.png',
    cumi: 'https://cdn.dinzid.biz.id/pH0y.png',
    dory: 'https://img.icons8.com/fluency/96/fish.png',
    lumba: 'https://img.icons8.com/fluency/96/dolphin.png',
    hiu: 'https://img.icons8.com/fluency/96/shark.png',
    paus: 'https://img.icons8.com/fluency/96/whale.png',
    udang: 'https://img.icons8.com/fluency/96/prawn.png',
    orca: 'https://cdn.dinzid.biz.id/r3fs.png',
    lobster: 'https://img.icons8.com/fluency/96/lobster.png',
    gurita: 'https://img.icons8.com/fluency/96/octopus.png',
    
    // Alat
    pickaxe: 'https://cdn.dinzid.biz.id/xfAJ.png',
    sword: 'https://img.icons8.com/fluency/96/sword.png',
    fishingrod: 'https://img.icons8.com/fluency/96/fishing-pole.png',
    armor: 'https://cdn.dinzid.biz.id/8RI6.png',
    unknown: 'https://img.icons8.com/fluency/96/question-mark.png',
    
    // Pekerjaan
    ojek: 'https://img.icons8.com/fluency/96/motorcycle.png',
    petani: 'https://img.icons8.com/fluency/96/tractor.png',
    dokter: 'https://img.icons8.com/fluency/96/stethoscope.png',
    pedagang: 'https://img.icons8.com/fluency/96/shop.png',
    montir: 'https://img.icons8.com/fluency/96/wrench.png',
    kuli: 'https://img.icons8.com/fluency/96/trowel.png',
    
    // Bank
    chip: 'https://img.icons8.com/fluency/96/sim-card-chip.png',
    visa: 'https://img.icons8.com/color/96/visa.png',

    // Berkebun
    pisang: 'https://img.icons8.com/fluency/96/banana.png',
    anggur: 'https://img.icons8.com/fluency/96/grapes.png',
    mangga: 'https://img.icons8.com/fluency/96/mango.png',
    jeruk: 'https://img.icons8.com/fluency/96/orange.png',
    apel: 'https://img.icons8.com/fluency/96/apple.png',
    bibit: 'https://img.icons8.com/fluency/96/seed-packet.png',

    // Medals (Leaderboard)
    medal1: 'https://cdn.dinzid.biz.id/HBFW.png',
    medal2: 'https://cdn.dinzid.biz.id/Yayb.png',
    medal3: 'https://cdn.dinzid.biz.id/ab0F.png'
};

const bgUrls = {
    mining: 'https://cdn.dinzid.biz.id/Yv5f.jpg',
    fishing: 'https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-coconut-palm-tree-sunrise-time_74190-7454.jpg',
    repair: 'https://cdn.dinzid.biz.id/MAL3.jpg',
    aquarium: 'https://cdn.dinzid.biz.id/flTG.jpg',
    work: 'https://cdn.dinzid.biz.id/3Bri.jpg',
    atm: 'https://cdn.dinzid.biz.id/Y5y6.jpg',
    garden: 'https://cdn.dinzid.biz.id/LRCX.jpg',
    leaderboard: 'https://img.freepik.com/free-photo/neon-lights-background-concept_23-2148096338.jpg'
};

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

function drawGlassCard(ctx, x, y, w, h, r, borderCol = 'rgba(255,255,255,0.3)') {
    ctx.save();
    drawRoundedRect(ctx, x, y, w, h, r);
    ctx.fillStyle = 'rgba(20, 20, 20, 0.6)'; 
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = borderCol;
    ctx.stroke();
    ctx.restore();
}

const createGrindCanvas = async (type, data) => {
    try {
        const width = 800;
        const height = 600; 
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');

        let bgUrl = bgUrls[type] || bgUrls.mining;
        try {
            const bg = await loadImage(bgUrl);
            ctx.drawImage(bg, 0, 0, width, height);
        } catch (e) {
            ctx.fillStyle = '#1a1a1a';
            ctx.fillRect(0, 0, width, height);
        }
        
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, 'rgba(0,0,0,0.3)');
        gradient.addColorStop(1, 'rgba(0,0,0,0.9)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        const items = data.items || {};
        const itemKeys = Object.keys(items);
        let safeName = (data.user && data.user.name) ? data.user.name : 'Player';

        if (type !== 'repair') {
            const gridW = 450;
            const gridH = 450;
            const gridX = (width - gridW) / 2;
            const gridY = 50;
            const gap = 20;
            const boxSize = (gridW - gap) / 2;

            drawGlassCard(ctx, gridX - 20, gridY - 20, gridW + 40, gridH + 40, 30);

            let col = 0, row = 0;
            for (let i = 0; i < itemKeys.length; i++) {
                let key = itemKeys[i];
                let count = items[key];
                if (count <= 0) continue;
                
                if (col > 1) { col = 0; row++; }
                let itemX = gridX + col * (boxSize + gap);
                let itemY = gridY + row * (boxSize + gap);

                drawGlassCard(ctx, itemX, itemY, boxSize, boxSize, 20, 'rgba(255,255,255,0.15)');

                let iconUrl = iconUrls[key] || iconUrls.unknown;
                try {
                    let icon = await loadImage(iconUrl);
                    ctx.drawImage(icon, itemX + 40, itemY + 40, 130, 130);
                } catch (e) {}

                ctx.fillStyle = 'rgba(0,0,0,0.7)';
                drawRoundedRect(ctx, itemX + boxSize - 60, itemY + 10, 50, 40, 10);
                ctx.fill();
                ctx.fillStyle = '#fff';
                ctx.font = 'bold 24px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(count, itemX + boxSize - 35, itemY + 38);
                
                col++;
            }

            const barY = gridY + gridH + 40;
            drawGlassCard(ctx, gridX - 20, barY, gridW + 40, 70, 35);
            
            const pX = gridX + 35;
            const pY = barY + 35;
            ctx.save();
            ctx.beginPath(); ctx.arc(pX, pY, 25, 0, Math.PI * 2); ctx.clip();
            try {
                const pp = await loadImage(data.user.pp);
                ctx.drawImage(pp, pX - 25, pY - 25, 50, 50);
            } catch (e) {
                ctx.fillStyle = '#555'; ctx.fillRect(pX - 25, pY - 25, 50, 50);
            }
            ctx.restore();

            ctx.textAlign = 'left';
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 24px Arial';
            ctx.fillText(safeName.substring(0, 15), pX + 40, pY + 8);
            
            if (data.stats) {
                ctx.textAlign = 'right';
                ctx.font = 'bold 20px Arial';
                ctx.fillStyle = '#90ee90'; 
                ctx.fillText(`+${data.stats.exp} XP`, gridX + gridW + 10, pY - 5);
                ctx.fillStyle = '#ccc';
                ctx.font = '16px Arial';
                let sub = data.stats.sub || 'Grinding';
                ctx.fillText(sub, gridX + gridW + 10, pY + 20);
            }

        } else {
            const cardW = 350;
            const cardH = 500;
            const cardX = (width - cardW) / 2;
            const cardY = 50;

            ctx.shadowColor = '#DAA520';
            ctx.shadowBlur = 40;
            drawGlassCard(ctx, cardX, cardY, cardW, cardH, 40, '#DAA520');
            ctx.shadowBlur = 0;

            let key = itemKeys[0] || 'pickaxe';
            let iconUrl = iconUrls[key] || iconUrls.unknown;
            try {
                let icon = await loadImage(iconUrl);
                ctx.shadowColor = '#FFD700';
                ctx.shadowBlur = 50;
                ctx.drawImage(icon, cardX + 75, cardY + 60, 200, 200);
                ctx.shadowBlur = 0;
            } catch (e) {}

            ctx.textAlign = 'center';
            ctx.font = 'bold 36px Arial';
            ctx.fillStyle = '#90ee90'; 
            ctx.fillText("SUCCESS", width / 2, cardY + 330);
            ctx.fillText("REPAIRED", width / 2, cardY + 375);

            if (data.cost) {
                ctx.font = '18px Arial';
                ctx.fillStyle = '#ccc';
                ctx.fillText(data.cost, width / 2, cardY + 430);
            }
        }

        return canvas.toBuffer('image/png');

    } catch (error) {
        console.error("Error Grind Canvas:", error);
        return null;
    }
};

const createAquariumCanvas = async (data) => {
    try {
        const width = 1000;
        const height = 600;
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');

        try {
            const bg = await loadImage(bgUrls.aquarium);
            ctx.drawImage(bg, 0, 0, width, height);
        } catch (e) {
            ctx.fillStyle = '#006994';
            ctx.fillRect(0, 0, width, height);
        }

        ctx.fillStyle = 'rgba(0, 100, 255, 0.2)';
        ctx.fillRect(0, 0, width, height);

        const items = data.items || {};
        const fishTypes = Object.keys(items);
        let totalFish = 0;

        for (let fish of fishTypes) {
            let count = items[fish];
            if (count > 0) {
                totalFish += count;
                let drawCount = Math.min(count, 3); 
                
                let iconUrl = iconUrls[fish];
                if (iconUrl) {
                    let fishImg = await loadImage(iconUrl);
                    for (let i = 0; i < drawCount; i++) {
                        let size = Math.random() * 60 + 60; 
                        let x = Math.random() * (width - 150) + 50;
                        let y = Math.random() * (height - 200) + 50;
                        
                        ctx.save();
                        if (Math.random() > 0.5) {
                            ctx.translate(x + size, y);
                            ctx.scale(-1, 1);
                            ctx.drawImage(fishImg, 0, 0, size, size);
                        } else {
                            ctx.drawImage(fishImg, x, y, size, size);
                        }
                        ctx.restore();
                    }
                }
            }
        }

        for (let i = 0; i < 20; i++) {
            let bx = Math.random() * width;
            let by = Math.random() * height;
            let bsize = Math.random() * 10;
            ctx.beginPath();
            ctx.arc(bx, by, bsize, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.fill();
        }

        const pX = 80;
        const pY = height - 80;
        
        ctx.save();
        ctx.beginPath(); ctx.arc(pX, pY, 50, 0, Math.PI * 2); ctx.clip();
        try {
            const pp = await loadImage(data.user.pp);
            ctx.drawImage(pp, pX - 50, pY - 50, 100, 100);
        } catch (e) {
            ctx.fillStyle = '#555'; ctx.fillRect(pX - 50, pY - 50, 100, 100);
        }
        ctx.restore();
        
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#fff';
        ctx.beginPath(); ctx.arc(pX, pY, 50, 0, Math.PI * 2); ctx.stroke();

        ctx.fillStyle = '#fff';
        ctx.font = 'bold 30px Arial';
        ctx.shadowColor = 'black';
        ctx.shadowBlur = 5;
        let safeName = (data.user && data.user.name) ? data.user.name : 'Player';
        ctx.fillText(`${safeName}'s Aquarium`, pX + 70, pY - 10);
        
        ctx.font = '20px Arial';
        ctx.fillText(`Total Fish: ${totalFish} ekor`, pX + 70, pY + 25);

        return canvas.toBuffer('image/png');

    } catch (error) {
        console.error("Error Aquarium Canvas:", error);
        return null;
    }
}

const createWorkCanvas = async (data) => {
    try {
        const width = 800;
        const height = 400; 
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');

        let bgUrl = bgUrls.work;
        try {
            const bg = await loadImage(bgUrl);
            ctx.drawImage(bg, 0, 0, width, height);
        } catch (e) {
            ctx.fillStyle = '#333';
            ctx.fillRect(0, 0, width, height);
        }

        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, 'rgba(0,0,0,0.4)');
        gradient.addColorStop(1, 'rgba(0,0,0,0.9)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        const cardW = 600;
        const cardH = 300;
        const cardX = (width - cardW) / 2;
        const cardY = (height - cardH) / 2;

        drawGlassCard(ctx, cardX, cardY, cardW, cardH, 20);

        const iconX = cardX + 30;
        const iconY = cardY + 30;
        let iconUrl = iconUrls[data.job] || iconUrls.unknown;
        try {
            let icon = await loadImage(iconUrl);
            ctx.shadowColor = '#00FF00';
            ctx.shadowBlur = 20;
            ctx.drawImage(icon, iconX, iconY, 100, 100);
            ctx.shadowBlur = 0;
        } catch (e) {}

        const textX = iconX + 130;
        const textY = cardY + 60;

        ctx.fillStyle = '#fff';
        ctx.font = 'bold 32px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(data.job.toUpperCase(), textX, textY);

        ctx.fillStyle = '#ccc';
        ctx.font = '18px Arial';
        let safeName = data.user.name || 'Player';
        ctx.fillText(`Worker: ${safeName}`, textX, textY + 30);
        
        ctx.fillStyle = '#90ee90'; 
        ctx.font = 'bold 24px Arial';
        ctx.fillText(`Salary: ${data.salary} Money`, textX, textY + 70);

        ctx.fillStyle = '#fff';
        ctx.font = 'italic 16px Arial';
        let desc = data.desc || 'Bekerja keras bagai kuda...';
        if(desc.length > 40) desc = desc.substring(0, 40) + '...';
        ctx.fillText(`"${desc}"`, cardX + 30, cardY + 200);

        const pX = width - 80;
        const pY = height - 80;
        ctx.save();
        ctx.beginPath(); ctx.arc(pX, pY, 40, 0, Math.PI * 2); ctx.clip();
        try {
            const pp = await loadImage(data.user.pp);
            ctx.drawImage(pp, pX - 40, pY - 40, 80, 80);
        } catch(e) {}
        ctx.restore();

        return canvas.toBuffer('image/png');

    } catch (e) {
        console.error(e);
        return null;
    }
}

const createBankCanvas = async (data) => {
    try {
        const width = 800;
        const height = 450;
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');

        let bgUrl = bgUrls.atm;
        try {
            const bg = await loadImage(bgUrl);
            ctx.drawImage(bg, 0, 0, width, height);
        } catch (e) {
            ctx.fillStyle = '#DAA520';
            ctx.fillRect(0, 0, width, height);
        }
        
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, 'rgba(0,0,0,0.1)');
        gradient.addColorStop(1, 'rgba(0,0,0,0.6)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        const cardW = 700;
        const cardH = 400;
        const cardX = (width - cardW) / 2;
        const cardY = (height - cardH) / 2;
        
        drawGlassCard(ctx, cardX, cardY, cardW, cardH, 25, 'rgba(255, 215, 0, 0.5)');
        
        ctx.fillStyle = '#FFD700'; 
        ctx.font = 'bold 36px Arial';
        ctx.textAlign = 'right';
        ctx.shadowColor = 'black';
        ctx.shadowBlur = 10;
        ctx.fillText("GOLD CARD", cardX + cardW - 40, cardY + 60);

        ctx.textAlign = 'left';
        ctx.font = 'bold 28px Arial';
        ctx.fillStyle = '#fff';
        ctx.fillText("DINZID BANK", cardX + 40, cardY + 60);

        try {
            const chip = await loadImage(iconUrls.chip);
            ctx.drawImage(chip, cardX + 40, cardY + 120, 80, 80);
        } catch(e) {}

        try {
            const visa = await loadImage(iconUrls.visa);
            ctx.drawImage(visa, cardX + cardW - 120, cardY + cardH - 100, 80, 50);
        } catch(e) {}

        const pX = cardX + 80;
        const pY = cardY + cardH - 80;
        ctx.save();
        ctx.beginPath(); ctx.arc(pX, pY, 40, 0, Math.PI * 2); ctx.clip();
        try {
            const pp = await loadImage(data.user.pp);
            ctx.drawImage(pp, pX - 40, pY - 40, 80, 80);
        } catch(e) {}
        ctx.restore();

        ctx.shadowBlur = 0;
        ctx.fillStyle = '#fff';
        ctx.font = '24px Arial';
        let safeName = data.user.name || 'CUSTOMER';
        ctx.fillText(safeName.toUpperCase(), pX + 60, pY - 10);
        
        ctx.font = '18px Courier New';
        let id = data.user.id || '0000 0000 0000';
        ctx.fillText(id.replace(/[^0-9]/g, '').substring(0, 16).replace(/(.{4})/g, '$1 '), pX + 60, pY + 20);

        ctx.textAlign = 'right';
        ctx.fillStyle = '#90ee90'; 
        ctx.font = 'bold 22px Arial';
        ctx.fillText(`Wallet: $${data.wallet.toLocaleString()}`, cardX + cardW - 40, cardY + 150);
        
        ctx.fillStyle = '#FFD700'; 
        ctx.font = 'bold 28px Arial';
        ctx.fillText(`Bank: $${data.bank.toLocaleString()}`, cardX + cardW - 40, cardY + 190);

        return canvas.toBuffer('image/png');

    } catch (e) {
        console.error(e);
        return null;
    }
}

const createGardenCanvas = async (data) => {
    return createGrindCanvas('garden', data);
}

const createLeaderboardCanvas = async (data) => {
    try {
        const width = 800;
        const height = 900;
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');

        let bgUrl = bgUrls.leaderboard;
        try {
            const bg = await loadImage(bgUrl);
            ctx.drawImage(bg, 0, 0, width, height);
        } catch (e) {
            ctx.fillStyle = '#111';
            ctx.fillRect(0, 0, width, height);
        }
        
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, 'rgba(0,0,0,0.3)');
        gradient.addColorStop(1, 'rgba(0,0,0,0.9)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        // Header Title
        let title = data.title || "TOP GLOBAL";
        let subtitle = data.subtitle || "The Richest Players";

        ctx.textAlign = 'center';
        ctx.font = 'bold 50px Arial';
        ctx.fillStyle = '#FFD700';
        ctx.shadowColor = '#FFD700';
        ctx.shadowBlur = 20;
        ctx.fillText(`${title}`, width / 2, 80);
        ctx.shadowBlur = 0;

        ctx.font = '24px Arial';
        ctx.fillStyle = '#fff';
        ctx.fillText(subtitle, width / 2, 120);

        let startY = 160;
        let cardH = 120;
        let gap = 20;

        for (let i = 0; i < data.top.length; i++) {
            let user = data.top[i];
            let y = startY + (i * (cardH + gap));
            let x = 40;
            let w = width - 80;
            
            let borderColor = 'rgba(255,255,255,0.2)';
            if(i === 0) borderColor = '#FFD700'; // Gold
            if(i === 1) borderColor = '#C0C0C0'; // Silver
            if(i === 2) borderColor = '#CD7F32'; // Bronze

            drawGlassCard(ctx, x, y, w, cardH, 20, borderColor);
            
            ctx.textAlign = 'center';
            ctx.font = 'bold 40px Arial';
            ctx.fillStyle = borderColor === 'rgba(255,255,255,0.2)' ? '#fff' : borderColor;
            ctx.fillText(`#${i + 1}`, x + 50, y + 75);

            let ppSize = 80;
            let ppX = x + 120;
            let ppY = y + 20;
            ctx.save();
            ctx.beginPath(); ctx.arc(ppX + ppSize/2, ppY + ppSize/2, ppSize/2, 0, Math.PI*2); ctx.clip();
            try {
                let pp = await loadImage(user.pp);
                ctx.drawImage(pp, ppX, ppY, ppSize, ppSize);
            } catch(e) {
                ctx.fillStyle = '#555'; ctx.fillRect(ppX, ppY, ppSize, ppSize);
            }
            ctx.restore();

            ctx.textAlign = 'left';
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 30px Arial';
            let name = user.name.length > 15 ? user.name.substring(0, 15) + '...' : user.name;
            ctx.fillText(name, ppX + 100, y + 55);

            // Display Score
            ctx.fillStyle = '#90ee90';
            ctx.font = '24px Arial';
            ctx.fillText(user.scoreStr, ppX + 100, y + 90);

            if(i < 3) {
                let medalUrl = iconUrls[`medal${i+1}`];
                try {
                    let medal = await loadImage(medalUrl);
                    ctx.drawImage(medal, x + w - 100, y + 20, 80, 80);
                } catch(e) {}
            }
        }

        return canvas.toBuffer('image/png');

    } catch (e) {
        console.error(e);
        return null;
    }
}

module.exports = { createGrindCanvas, createAquariumCanvas, createWorkCanvas, createBankCanvas, createGardenCanvas, createLeaderboardCanvas };
