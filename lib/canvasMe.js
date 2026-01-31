const { createCanvas, loadImage, GlobalFonts } = require('@napi-rs/canvas');
const fs = require('fs');
const path = require('path');

// [OPSIONAL] Kalau mau pakai font custom (misal font game), taruh file .ttf di folder library
// Lalu aktifkan baris ini:
// GlobalFonts.registerFromPath(path.join(__dirname, 'NamaFont.ttf'), 'NamaFontCustom');

/**
 * Membuat Canvas Kartu Profil (Versi @napi-rs/canvas - Support Node 20)
 * @param {String} ppUrl - URL foto profil user
 * @param {String} name - Nama user
 * @param {String} status - Status user
 * @param {Number} level - Level user
 * @returns {Promise<Buffer>} - Buffer gambar
 */
const createMeCanvas = async (ppUrl, name, status, level) => {
    try {
        const width = 800;
        const height = 250;
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');

        // --- BACKGROUND ---
        // Gradient Biru Tua - Ungu Gelap
        const grd = ctx.createLinearGradient(0, 0, width, height);
        grd.addColorStop(0, '#0f0c29');
        grd.addColorStop(0.5, '#302b63');
        grd.addColorStop(1, '#24243e');
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, width, height);

        // Hiasan Garis Tech (Transparan)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 50); ctx.lineTo(width, 150);
        ctx.moveTo(0, 200); ctx.lineTo(width, 50);
        ctx.stroke();

        // --- FOTO PROFIL (LINGKARAN) ---
        const centerX = 125;
        const centerY = 125;
        const radius = 90;

        ctx.save();
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip(); // Potong area menjadi lingkaran

        try {
            const avatar = await loadImage(ppUrl);
            ctx.drawImage(avatar, centerX - radius, centerY - radius, radius * 2, radius * 2);
        } catch (err) {
            // Fallback warna abu-abu jika foto gagal dimuat
            ctx.fillStyle = '#555555';
            ctx.fillRect(centerX - radius, centerY - radius, radius * 2, radius * 2);
        }
        ctx.restore(); // Kembalikan state agar tidak terpotong terus

        // Border Lingkaran (Neon Blue)
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius + 5, 0, Math.PI * 2, true);
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#00d2ff';
        ctx.stroke();
        ctx.closePath();

        // --- TEKS ---
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'left';

        // 1. Nama User
        // Di napi-rs, font default biasanya Arial/Sans. 
        // Kalau mau bold harus eksplisit seperti 'bold 50px Arial'
        ctx.font = 'bold 50px Arial'; 
        ctx.fillText(name, 250, 110);

        // 2. Status
        ctx.fillStyle = '#00d2ff'; // Cyan
        ctx.font = 'bold 25px Arial';
        ctx.fillText(status.toUpperCase(), 250, 150);

        // 3. Level
        ctx.fillStyle = '#cccccc'; // Abu terang
        ctx.font = '20px Arial';
        ctx.fillText(`Level: ${level}`, 250, 185);

        // Return Buffer (Format PNG)
        return canvas.toBuffer('image/png');

    } catch (error) {
        console.error("Error creating me canvas (@napi-rs):", error);
        return null;
    }
};

module.exports = { createMeCanvas };
