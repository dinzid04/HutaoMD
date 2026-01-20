const axios = require('axios');
const cheerio = require('cheerio');

class MediaDownloaderScraper {
    constructor() {
        this.baseUrl = 'https://allinonedownloader.com';
        this.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        };
    }

    extractPageInfo(html) {
        const $ = cheerio.load(html);
        const info = {
            title: '',
            description: '',
            supportedPlatforms: [],
            features: []
        };

        // Extract title
        info.title = $('meta[property="og:title"]').attr('content') || $('title').text() || '';

        // Extract description
        info.description = $('meta[name="description"]').attr('content') ||
                           $('meta[property="og:description"]').attr('content') || '';

        // Extract supported platforms
        $('.dropdown-menu.plist .dropdown-item').each((index, element) => {
            const platformName = $(element).text().trim();
            if (platformName) {
                info.supportedPlatforms.push(platformName);
            }
        });

        // Extract features
        $('.col-md-6.mb-3 p').each((index, element) => {
            const text = $(element).text().trim();
            if (text && text.length > 50) {
                info.features.push(text);
            }
        });

        return info;
    }

    extractDownloadForm(html) {
        const $ = cheerio.load(html);
        const formInfo = {
            action_url: '',
            method: 'POST',
            inputs: [],
            token: ''
        };

        const urlInput = $('#url');
        const tokenInput = $('#token');

        if (urlInput.length) {
            formInfo.inputs.push({
                name: 'url',
                type: urlInput.attr('type') || 'url',
                placeholder: urlInput.attr('placeholder') || '',
                required: true
            });
        }

        if (tokenInput.length) {
            formInfo.token = tokenInput.attr('value') || '';
            formInfo.inputs.push({
                name: 'token',
                type: 'hidden',
                value: tokenInput.attr('value') || ''
            });
        }

        return formInfo;
    }

    extractSupportedServices(html) {
        const $ = cheerio.load(html);
        const services = [];

        $('.supp .row.px-3.icns .col-4').each((index, element) => {
            const icon = $(element).find('img');
            const text = $(element).text().trim();

            if (icon.length && text) {
                let iconUrl = icon.attr('src');
                if (iconUrl && iconUrl.startsWith('/')) {
                    iconUrl = this.baseUrl + iconUrl;
                }

                services.push({
                    name: text,
                    icon_url: iconUrl,
                    platform: text.toLowerCase()
                });
            }
        });

        return services;
    }

    async scrapePage(url = null, htmlContent = null) {
        let html = htmlContent;

        if (!html && url) {
            try {
                const response = await axios.get(url, { headers: this.headers });
                html = response.data;
            } catch (error) {
                return { error: `Failed to fetch URL: ${error.message}` };
            }
        }

        if (!html) {
            return { error: 'No HTML content provided' };
        }

        const result = {
            page_info: this.extractPageInfo(html),
            download_form: this.extractDownloadForm(html),
            supported_services: this.extractSupportedServices(html),
            metadata: {
                scraped_at: new Date().toISOString()
            }
        };

        return result;
    }
}

// ==============================
// Penggunaan (Contoh Lengkap)
// ==============================
async function main() {
    const scraper = new MediaDownloaderScraper();

    // Contoh scrape langsung dari URL
    const fromUrl = await scraper.scrapePage('https://allinonedownloader.com');
    console.log('HASIL SCRAPE DARI URL:\n', JSON.stringify(fromUrl, null, 2));

    // Contoh scrape dari HTML manual
    const dummyHtml = `
        <html>
            <head><title>Test</title></head>
            <body><p>Dummy</p></body>
        </html>
    `;
    const fromHtml = await scraper.scrapePage(null, dummyHtml);
    console.log('HASIL SCRAPE DARI HTML:\n', JSON.stringify(fromHtml, null, 2));
}

main();

module.exports = MediaDownloaderScraper;