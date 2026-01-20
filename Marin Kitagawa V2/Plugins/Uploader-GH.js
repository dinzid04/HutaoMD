const fs = require("fs");
const axios = require("axios");

const handler = async (m, { reply, text, cmd, command, quoted }) => {
    try {
        // Konfigurasi GitHub - ISI TOKEN DAN USERNAME DI SINI
        const GITHUB_TOKEN = "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"; // Ganti dengan token GitHub Anda
        const GITHUB_USERNAME = "zionjs0"; // Ganti dengan username GitHub Anda
        const REPO_NAME = "whatsapp-media"; // Nama repository
        const BRANCH = "main"; // Branch yang digunakan
        
        if (!GITHUB_TOKEN || !GITHUB_USERNAME || GITHUB_TOKEN === "YOUR_GITHUB_TOKEN_HERE" || GITHUB_USERNAME === "YOUR_GITHUB_USERNAME_HERE") {
            return await reply("❌ Silakan isi token dan username GitHub terlebih dahulu di dalam plugin!");
        }

        let media, filename, mime;

        // Cek apakah ada media yang dikutip atau dikirim
        if (quoted && (quoted.mtype === 'imageMessage' || quoted.mtype === 'videoMessage' || quoted.mtype === 'audioMessage' || quoted.mtype === 'documentMessage')) {
            media = await quoted.download();
            filename = quoted.filename || `file_${Date.now()}`;
            mime = quoted.mimetype || 'application/octet-stream';
        } else if (m.type === 'imageMessage' || m.type === 'videoMessage' || m.type === 'audioMessage' || m.type === 'documentMessage') {
            media = await m.download();
            filename = m.filename || `file_${Date.now()}`;
            mime = m.mimetype || 'application/octet-stream';
        } else {
            return await reply("❌ Silakan kirim atau reply media (gambar/video/audio/dokumen) yang ingin diupload!");
        }

        await reply("⏳ Mengupload media ke GitHub...");

        // Tentukan ekstensi file berdasarkan mime type
        let extension = getExtension(mime);
        let finalFilename = `${filename}${extension ? '.' + extension : ''}`;
        
        // Upload ke GitHub dengan auto-create repository
        const rawUrl = await uploadToGitHub(media, finalFilename, GITHUB_USERNAME, GITHUB_TOKEN, REPO_NAME, BRANCH);
        
        if (rawUrl) {
            await reply(`✅ Upload Berhasil!\n\n📁 Nama File: ${finalFilename}\n🔗 Raw URL: ${rawUrl}\n\nSalin link di atas untuk mengakses file.`);
        } else {
            await reply("❌ Gagal mengupload file ke GitHub!");
        }

    } catch (error) {
        console.error("Error:", error);
        await reply(`❌ Terjadi kesalahan: ${error.message}`);
    }
};

// Fungsi untuk membuat repository baru
async function createGitHubRepo(username, token, repoName) {
    try {
        const response = await axios.post(
            'https://api.github.com/user/repos',
            {
                name: repoName,
                description: 'Media files uploaded from WhatsApp Bot',
                auto_init: true,
                private: false
            },
            {
                headers: {
                    'Authorization': `token ${token}`,
                    'Content-Type': 'application/json',
                    'User-Agent': 'WhatsApp-Bot'
                }
            }
        );
        return response.status === 201;
    } catch (error) {
        // Jika repository sudah ada, return true
        if (error.response?.status === 422) {
            return true;
        }
        throw error;
    }
}

// Fungsi untuk upload ke GitHub
async function uploadToGitHub(fileBuffer, filename, username, token, repo, branch = "main") {
    try {
        // Coba buat repository dulu
        const repoCreated = await createGitHubRepo(username, token, repo);
        
        if (!repoCreated) {
            throw new Error("Gagal membuat repository");
        }

        const apiUrl = `https://api.github.com/repos/${username}/${repo}/contents/${filename}`;
        
        // Encode file ke base64
        const fileContent = fileBuffer.toString('base64');
        
        const payload = {
            message: `Upload ${filename} from WhatsApp Bot`,
            content: fileContent,
            branch: branch
        };

        const response = await axios.put(apiUrl, payload, {
            headers: {
                'Authorization': `token ${token}`,
                'Content-Type': 'application/json',
                'User-Agent': 'WhatsApp-Bot'
            }
        });

        if (response.status === 201 || response.status === 200) {
            // Return raw URL
            return `https://raw.githubusercontent.com/${username}/${repo}/${branch}/${filename}`;
        }
        
        return null;
    } catch (error) {
        console.error("GitHub Upload Error:", error.response?.data || error.message);
        
        // Jika error karena file sudah ada, buat dengan nama berbeda
        if (error.response?.status === 422 && error.response?.data?.message?.includes('already exists')) {
            const newFilename = `file_${Date.now()}_${filename}`;
            return await uploadToGitHub(fileBuffer, newFilename, username, token, repo, branch);
        }
        
        throw new Error(`GitHub upload failed: ${error.response?.data?.message || error.message}`);
    }
}

// Fungsi untuk mendapatkan ekstensi file dari mime type
function getExtension(mime) {
    const mimeExtensions = {
        'image/jpeg': 'jpg',
        'image/jpg': 'jpg',
        'image/png': 'png',
        'image/gif': 'gif',
        'image/webp': 'webp',
        'video/mp4': 'mp4',
        'video/3gp': '3gp',
        'video/quicktime': 'mov',
        'audio/mpeg': 'mp3',
        'audio/mp4': 'm4a',
        'audio/ogg': 'ogg',
        'audio/aac': 'aac',
        'application/pdf': 'pdf',
        'application/msword': 'doc',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
        'application/vnd.ms-excel': 'xls',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
        'text/plain': 'txt'
    };
    
    return mimeExtensions[mime] || '';
}

handler.command = ["tourlgh", "uploadgh", "githubup"];
handler.tags = ["tools"];
handler.help = ["tourlgh", "uploadgh", "githubup"];
handler.description = "Upload media ke GitHub dan dapatkan raw URL";

module.exports = handler;