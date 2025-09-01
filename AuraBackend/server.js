const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const admin = require("firebase-admin");
const FcmToken = require("./models/FcmToken");

let serviceAccount;

try {
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    // Render/Production ke liye
    serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

    // 🔑 Private key ke \n ko replace karo
    serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, "\n");
  } else {
    // Local development ke liye
    serviceAccount = require("./serviceAccountKey.json");
  }

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  console.log("✅ Firebase Admin initialized");
} catch (err) {
  console.error("❌ Firebase init error:", err.message);
}

const authRoutes = require("./routes/auth");
const app = express();

// ✅ Middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173", // Local dev
      "https://www.saffronguru.com",
      "https://saffronguru.com",
    ],
    credentials: true,
  })
);
app.options("*", cors());

// ✅ MongoDB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB error:", err));

// ✅ Health check
app.get("/ping", (req, res) => {
  res.send("pong ✅ backend alive");
});

// ✅ Auth routes
app.use("/api/auth", authRoutes);

// ================== 🔥 NOTIFICATION ROUTES ==================

// 🛡️ Helper function: Sanitize notification text (avoid spam flagging)
function sanitizeText(text) {
  if (!text) return "";
  return text
    .replace(/FREE|CLICK HERE|GET NOW|🔥|🚀|💯/gi, "") // spammy words/emojis hata diye
    .replace(/\s{2,}/g, " ") // double space cleanup
    .trim();
}

// ✅ Register token
app.post("/api/notifications/register-token", async (req, res) => {
  const { token } = req.body;
  if (!token) return res.json({ success: false, msg: "No token received" });

  try {
    await FcmToken.updateOne({ token }, { token }, { upsert: true });
    console.log("✅ Token saved:", token);
    res.json({ success: true });
  } catch (err) {
    console.error("❌ DB Error:", err);
    res.status(500).json({ success: false, msg: "DB Error" });
  }
});

// ✅ Send notification
app.post("/api/notifications/send", async (req, res) => {
  let { title, body, image, url } = req.body;

  // 🔹 Clean spammy words
  title = sanitizeText(title) || "Saffron Guru Alert";
  body = sanitizeText(body) || "Check your dashboard for details.";
  image = image || "https://saffronguru.com/default.png";
  url = url || "https://saffronguru.com";

  try {
    const docs = await FcmToken.find();
    const tokens = docs.map((doc) => doc.token);

    if (!tokens.length) {
      return res
        .status(400)
        .json({ success: false, msg: "No tokens registered" });
    }

    const message = {
      notification: { title, body, image },
      webpush: {
        fcmOptions: { link: url },
        notification: {
          icon: "https://saffronguru.com/icons/default-icon.png",
          badge: "https://saffronguru.com/icons/badge.png",
          actions: [
            { action: "view", title: "👉 View" }, // safe wording
            { action: "dismiss", title: "❌ Dismiss" },
          ],
        },
      },
      data: { url },
      tokens,
    };

    const response = await admin.messaging().sendEachForMulticast(message);

    // 🚀 Cleanup invalid tokens
    const failedTokens = [];
    await Promise.all(
      response.responses.map(async (resp, idx) => {
        if (!resp.success) {
          const failedToken = tokens[idx];
          failedTokens.push(failedToken);
          console.log("❌ Failed:", failedToken, resp.error?.code);

          if (
            resp.error?.code === "messaging/registration-token-not-registered" ||
            resp.error?.code === "messaging/invalid-argument" ||
            resp.error?.code === "messaging/third-party-auth-error"
          ) {
            await FcmToken.deleteOne({ token: failedToken });
            console.log("🗑️ Removed invalid token:", failedToken);
          }
        }
      })
    );

    console.log("📩 Notifications sent:", response.successCount);
    res.json({
      success: true,
      sent: response.successCount,
      failed: failedTokens,
    });
  } catch (error) {
    console.error("❌ Error sending notification:", error);
    res.status(500).json({ success: false, error });
  }
});

// =============================================================

// ✅ Root route
app.get("/", (req, res) => res.send("Backend is running!"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
