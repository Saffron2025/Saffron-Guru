// utils/notificationFormatter.js

// 🔹 Helper: spammy words & emojis clean
function sanitizeText(text) {
  if (!text) return "";
  return text
    .replace(/🔥|🚀|💯|FREE|GET NOW|CLICK HERE/gi, "") // spam trigger words remove
    .replace(/\s{2,}/g, " ") // extra spaces
    .trim();
}

// 🔹 Format notification consistently
function formatNotification({ title, body, image, url }) {
  return {
    title: sanitizeText(title) || "Saffron Guru Alert",
    body: sanitizeText(body) || "Check your dashboard for more details.",
    image: image || "https://saffronguru.com/default-banner.png",
    url: url || "https://saffronguru.com",
  };
}

module.exports = { formatNotification };
