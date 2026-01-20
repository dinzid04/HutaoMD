// voiceCover.js
const axios = require("axios");
const fs = require("fs");

const api = {
  xterm: {
    url: "https://api.termai.cc",
    key: "TermAI-4ALwMabCh0KiN9I3"
  }
};

module.exports = function VoiceCover(audioPath, model = "Miku") {
  return new Promise((resolve, reject) => {
    const audioData = fs.readFileSync(audioPath);

    axios({
      method: "post",
      url: `${api.xterm.url}/api/audioProcessing/voice-covers`,
      params: {
        model,
        key: api.xterm.key
      },
      data: audioData,
      responseType: "text", // <-- FIXED
      headers: {
        "Content-Type": "audio/mpeg",
        "Transfer-Encoding": "chunked"
      },
      timeout: 600000 // 10 menit
    })
    .then(response => {
      let buffer = "";

      response.data.on("data", chunk => {
        buffer += chunk.toString();

        const matches = buffer.match(/data: (.+)/);
        if (!matches) return;

        try {
          const data = JSON.parse(matches[1]);
          console.log(data);

          if (data.status === "success") {
            resolve(data.result);
            response.data.destroy();
          }
          if (data.status === "failed") {
            reject(data);
            response.data.destroy();
          }
        } catch (error) {}
      });
    })
    .catch(err => reject(err));
  });
};