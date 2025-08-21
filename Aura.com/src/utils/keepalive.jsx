// src/utils/keepAlive.js
const keepAlive = () => {
  setInterval(() => {
    fetch("https://aura-project-back.onrender.com")
      .then(() => console.log("🔄 Render backend kept alive"))
      .catch((err) => console.error("❌ Keep alive error:", err));
  }, 10 * 60 * 1000); // every 10 minutes
};

export default keepAlive;
