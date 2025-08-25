// src/utils/keepAlive.js
const keepAlive = () => {
  setInterval(() => {
    fetch("https://saffron-guru-backend.onrender.com/api/auth/ping") 
      .then(() => console.log("🔄 Keep-alive ping sent"))
      .catch((err) => console.error("❌ Keep alive error:", err));
  }, 10 * 60 * 1000); // every 10 min
};

export default keepAlive;
