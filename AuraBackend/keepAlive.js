const axios = require("axios");

// ⚠️ Apna backend URL daalna
const URL = "https://saffron-guru-backend.onrender.com/ping";

function keepAlive() {
  setInterval(async () => {
    try {
      const res = await axios.get(URL);
      console.log("🔁 Keep-Alive Ping:", res.status);
    } catch (error) {
      console.log("❌ Keep-Alive Failed:", error.message);
    }
  }, 5 * 60 * 1000); // Every 5 minutes
}

module.exports = keepAlive;
