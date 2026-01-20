/**
 * CR Ponta Sensei
 * CH https://whatsapp.com/channel/0029VagslooA89MdSX0d1X1z
 * WEB https://codeteam.my.id
**/

const fetch = require("node-fetch");
const FormData = require("form-data");
const fs = require("fs");
const crypto = require("crypto");

const randomFpId = () => crypto.randomBytes(16).toString("hex");

const makeHeaders = () => ({
  accept: "*/*",
  "accept-language": "id-ID",
  "x-fp-id": randomFpId(),
  Referer: "https://nanana.app/en?utm_source=toolify",
  "Referrer-Policy": "strict-origin-when-cross-origin",
});

/**
 * Fungsi utama proses generate gambar lengkap dengan hasil detail
 * @param {string} imagePath - path file gambar lokal
 * @param {string} prompt - teks prompt untuk generate
 * @returns {Promise<object>} hasil lengkap berisi { uploadedUrl, requestId, finalUrl, status }
 */
const banana = async (imagePath, prompt) => {
  const form = new FormData();
  form.append("image", fs.readFileSync(imagePath), { filename: imagePath.split("/").pop() });

  const uploadRes = await fetch("https://nanana.app/api/upload-img", {
    method: "POST",
    headers: makeHeaders(),
    body: form,
  });

  const uploadJson = await uploadRes.json();
  if (!uploadJson.success) throw new Error("Upload gagal!");

  const uploadedUrl = uploadJson.url;

  await new Promise((r) => setTimeout(r, 2000));

  const generateRes = await fetch("https://nanana.app/api/image-to-image", {
    method: "POST",
    headers: { ...makeHeaders(), "content-type": "application/json" },
    body: JSON.stringify({ prompt, image_urls: [uploadedUrl] }),
  });

  const generateText = await generateRes.text();
  let generateJson;
  try {
    generateJson = JSON.parse(generateText);
  } catch {
    throw new Error("Response generate bukan JSON");
  }

  if (!generateJson.success) throw new Error("Gagal membuat request generate!");

  const requestId = generateJson.request_id;

  while (true) {
    const res = await fetch("https://nanana.app/api/get-result", {
      method: "POST",
      headers: { ...makeHeaders(), "content-type": "application/json" },
      body: JSON.stringify({ requestId, type: "image-to-image" }),
    });

    const json = await res.json();

    if (json.completed && json.data?.images?.length) {
      return {
        uploadedUrl,
        requestId,
        finalUrl: json.data.images[0].url,
        status: "completed",
      };
    }

    await new Promise((r) => setTimeout(r, 5000));
  }
};

// Export bila dipakai sebagai module
module.exports = banana;