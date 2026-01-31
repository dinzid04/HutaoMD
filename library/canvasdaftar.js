const { createCanvas, loadImage, GlobalFonts } = require('@napi-rs/canvas')
const bg_image = 'https://cdn.dinzid.biz.id/3Vd2.jpg' 

// Helper: Membuat sudut tumpul (Rounded Rect) yang aman
function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath()
    ctx.moveTo(x + radius, y)
    ctx.lineTo(x + width - radius, y)
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
    ctx.lineTo(x + width, y + height - radius)
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
    ctx.lineTo(x + radius, y + height)
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
    ctx.lineTo(x, y + radius)
    ctx.quadraticCurveTo(x, y, x + radius, y)
    ctx.closePath()
}

// Helper: Membuat teks rata tengah dengan shadow
function drawText(ctx, text, x, y, font, color, align = 'center') {
    ctx.save()
    ctx.font = font
    ctx.textAlign = align
    ctx.fillStyle = color
    ctx.shadowColor = "rgba(0,0,0,0.8)"
    ctx.shadowBlur = 10
    ctx.fillText(text, x, y)
    ctx.restore()
}

async function makeCard(type, data) {
    const width = 1280
    const height = 720
    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')

    // --- 1. LAYER BACKGROUND ---
    try {
        const bg = await loadImage(bg_image)
        // Draw Image Full Cover
        ctx.drawImage(bg, 0, 0, width, height)
    } catch (e) {
        ctx.fillStyle = '#121212'
        ctx.fillRect(0, 0, width, height)
    }

    // --- 2. LAYER VIGNETTE & DARKEN ---
    // Membuat gradasi gelap agar teks lebih "pop up" dan background tidak balapan
    const gradient = ctx.createRadialGradient(width/2, height/2, 100, width/2, height/2, width);
    gradient.addColorStop(0, "rgba(0, 0, 0, 0.4)"); // Tengah agak terang dikit
    gradient.addColorStop(1, "rgba(0, 0, 0, 0.9)"); // Pinggir gelap banget
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // --- 3. LAYER GLASS CARD (FRAME TENGAH) ---
    const cardW = 900
    const cardH = 500
    const cardX = (width - cardW) / 2
    const cardY = (height - cardH) / 2

    ctx.save()
    roundedRect(ctx, cardX, cardY, cardW, cardH, 40)
    ctx.fillStyle = "rgba(255, 255, 255, 0.03)" // Transparan putih sangat tipis
    ctx.fill()
    
    // Border tipis elegan
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.restore()

    // --- 4. PROFILE PICTURE (KIRI atau TENGAH) ---
    // Desain baru: PP di kiri/tengah tergantung layout, kita buat layout vertikal clean
    const ppSize = 220
    const ppX = width / 2
    const ppY = cardY + 50 // Setengah keluar dari card bagian atas biar keren
    
    ctx.save()
    ctx.beginPath()
    ctx.arc(ppX, ppY, ppSize / 2, 0, Math.PI * 2)
    ctx.closePath()
    ctx.clip()
    
    try {
        const img = await loadImage(data.pp)
        ctx.drawImage(img, ppX - ppSize/2, ppY - ppSize/2, ppSize, ppSize)
    } catch (e) {
        ctx.fillStyle = '#333'
        ctx.fill()
    }
    ctx.restore()

    // Ring Border PP (Warna menyesuaikan status)
    let ringColor = '#ffffff'
    if (type === 'welcome') ringColor = '#00ffaa' // Hijau Neon
    if (type === 'denied') ringColor = '#ff4444' // Merah
    if (type === 'limit') ringColor = '#ffbb00' // Kuning/Oranye

    ctx.beginPath()
    ctx.arc(ppX, ppY, ppSize / 2, 0, Math.PI * 2)
    ctx.lineWidth = 8
    ctx.strokeStyle = ringColor
    ctx.stroke()

    // --- 5. TEKS & KONTEN ---
    
    // Config Font (Pakai font sans-serif bawaan sistem agar aman)
    // Hierarchy: TITLE (Small), NAME (Big), DETAILS (Medium)
    
    const textStartY = ppY + 160 // Mulai nulis di bawah PP
    
    if (type === 'welcome') {
        // Status Badge
        drawText(ctx, "VERIFICATION SUCCESSFUL", width/2, textStartY, "bold 24px sans-serif", ringColor)

        // Nama User
        drawText(ctx, data.name.toUpperCase(), width/2, textStartY + 60, "bold 70px sans-serif", "#ffffff")
        
        // Kotak SN (Aesthetic Box)
        const snBoxW = 500
        const snBoxH = 60
        const snBoxX = (width - snBoxW) / 2
        const snBoxY = textStartY + 90
        
        ctx.save()
        roundedRect(ctx, snBoxX, snBoxY, snBoxW, snBoxH, 15)
        ctx.fillStyle = "rgba(0,0,0,0.5)"
        ctx.fill()
        ctx.strokeStyle = "rgba(255,255,255,0.2)"
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.restore()
        
        // Teks SN
        drawText(ctx, `SN: ${data.sn}`, width/2, snBoxY + 40, "30px monospace", "#dddddd")

        // Footer Info
        drawText(ctx, `Age: ${data.age} • Registered: ${data.date}`, width/2, snBoxY + 110, "25px sans-serif", "#aaaaaa")

    } 
    else if (type === 'denied') {
        drawText(ctx, "ACCESS DENIED", width/2, textStartY, "bold 30px sans-serif", ringColor)
        drawText(ctx, "UNKNOWN USER", width/2, textStartY + 60, "bold 60px sans-serif", "#ffffff")
        
        // Peringatan
        drawText(ctx, "You are not registered in our database.", width/2, textStartY + 120, "30px sans-serif", "#dddddd")
        drawText(ctx, "Please type .daftar <name>.<age>", width/2, textStartY + 160, "italic 30px sans-serif", "#aaaaaa")
    } 
    else if (type === 'limit') {
        drawText(ctx, data.isHabis ? "DAILY LIMIT EXCEEDED" : "YOUR DAILY LIMIT", width/2, textStartY, "bold 25px sans-serif", ringColor)
        
        // Angka Limit Besar
        drawText(ctx, `${data.limit} / ${data.limitAwal}`, width/2, textStartY + 80, "bold 90px sans-serif", "#ffffff")
        
        // Progress Bar
        const barW = 600
        const barH = 20
        const barX = (width - barW) / 2
        const barY = textStartY + 110
        
        // Track (Abu-abu)
        ctx.fillStyle = "rgba(255,255,255,0.1)"
        roundedRect(ctx, barX, barY, barW, barH, 10)
        ctx.fill()
        
        // Progress (Warna)
        let pct = 0
        if (data.limitAwal > 0) pct = Math.max(0, Math.min(1, data.limit / data.limitAwal))
        
        if (pct > 0) {
            ctx.fillStyle = ringColor
            roundedRect(ctx, barX, barY, barW * pct, barH, 10)
            ctx.fill()
            
            // Glow effect pada bar
            ctx.shadowColor = ringColor
            ctx.shadowBlur = 15
            ctx.fill()
            ctx.shadowBlur = 0 // Reset shadow
        }

        drawText(ctx, "Refills automatically at 00:00 WIB", width/2, barY + 60, "25px sans-serif", "#aaaaaa")
    }

    // --- 6. WATERMARK (Opsional, pojok kanan bawah) ---
    drawText(ctx, "DinzBotz System", width - 50, height - 40, "italic 20px sans-serif", "rgba(255,255,255,0.3)", "right")

    return canvas.toBuffer('image/png')
}

module.exports = { makeCard }
