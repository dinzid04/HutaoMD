const axios = require("axios");

const api = {
  xterm: {
    url: "https://api.termai.cc",
    key: "TermAI-4ALwMabCh0KiN9I3"
  }
};

module.exports = function SongGenerator(prompt) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "post",
        url: `${api.xterm.url}/api/audioProcessing/song-generator`,
        params: { prompt, key: api.xterm.key },
        responseType: "stream"
      });

      response.data.on("data", (chunk) => {
        try {
          const text = chunk.toString();
          const match = text.match(/data: (.+)/);

          if (!match || !match[1]) return;

          const data = JSON.parse(match[1]);

          console.log("STREAM:", data); // DEBUG WAJIB

          if (data.status === "success") {
            response.data.destroy();
            resolve(data.result);
          }
          if (data.status === "failed") {
            response.data.destroy();
            reject(new Error(data.msg));
          }
        } catch (err) {
          response.data.destroy();
          reject(err);
        }
      });

      response.data.on("error", reject);

    } catch (err) {
      reject(err);
    }
  });
};