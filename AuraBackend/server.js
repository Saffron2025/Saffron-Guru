const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const admin = require("firebase-admin");
const FcmToken = require("./models/FcmToken");

// ✅ Firebase Admin Init from ENV
let serviceAccount = null;
try {
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
} catch (err) {
  console.error("❌ Firebase service account parse error:", err.message);
}

if (serviceAccount) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
  console.log("✅ Firebase Admin initialized");
} else {
  console.error("❌ Firebase Admin not initialized (service account missing)");
}

const authRoutes = require('./routes/auth');
const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://www.saffronguru.com",
    "https://saffronguru.com"
  ],
  credentials: true,
}));
app.options("*", cors());

// ✅ MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log("❌ MongoDB error:", err));

// ✅ Health check
app.get('/ping', (req, res) => res.send("pong ✅ backend alive"));

// ✅ Auth routes
app.use('/api/auth', authRoutes);

// ================== 🔥 NOTIFICATION ROUTES ==================

// Register FCM token
app.post("/api/notifications/register-token", async (req, res) => {
  const { token } = req.body;
  if (!token) return res.json({ success: false, msg: "No token received" });

  try {
    await FcmToken.updateOne({ token }, { token }, { upsert: true });
    console.log("✅ Token saved to DB:", token);
    res.json({ success: true });
  } catch (err) {
    console.error("❌ DB Error saving token:", err);
    res.status(500).json({ success: false, msg: "DB Error" });
  }
});

// Send notification to ALL tokens
app.post("/api/notifications/send", async (req, res) => {
  const { title, body, image, url } = req.body;

  try {
    const docs = await FcmToken.find();
    const tokens = docs.map(doc => doc.token);

    if (!tokens.length) {
      return res.status(400).json({ success: false, msg: "No tokens registered" });
    }

    const message = {
      notification: { title, body, image: image || "https://saffronguru.com/default.png" },
      webpush: {
        fcmOptions: { link: url || "https://saffronguru.com" },
        notification: {
          icon: "https://saffronguru.com/icons/default-icon.png",
          badge: "https://saffronguru.com/icons/badge.png",
          actions: [
            { action: "view", title: "👉 Get Now" },
            { action: "dismiss", title: "❌ Dismiss" }
          ]
        }
      },
      data: { url: url || "https://saffronguru.com" },
      tokens
    };

    const response = await admin.messaging().sendEachForMulticast(message);

    // ✅ Invalid tokens remove
    response.responses.forEach(async (resp, idx) => {
      if (!resp.success) {
        const failedToken = tokens[idx];
        console.log("❌ Failed:", failedToken, resp.error?.code);
        if (
          resp.error?.code === "messaging/registration-token-not-registered" ||
          resp.error?.code === "messaging/invalid-argument"
        ) {
          await FcmToken.deleteOne({ token: failedToken });
          console.log("🗑️ Removed invalid token:", failedToken);
        }
      }
    });

    console.log("📩 Notifications sent:", response.successCount);
    res.json({ success: true, sent: response.successCount });

  } catch (error) {
    console.error("❌ Error sending notification:", error);
    res.status(500).json({ success: false, error });
  }
});

// ✅ Debug route - send to ONE token only
app.post("/api/notifications/send-to-one", async (req, res) => {
  const { token, title, body, image, url } = req.body;
  if (!token) return res.status(400).json({ success: false, msg: "Token required" });

  const message = {
    notification: { title, body, image: image || "https://saffronguru.com/default.png" },
    webpush: { fcmOptions: { link: url || "https://saffronguru.com" } },
    data: { url: url || "https://saffronguru.com" },
    token
  };

  try {
    const response = await admin.messaging().send(message);
    console.log("📩 Sent single notification:", response);
    res.json({ success: true, response });
  } catch (error) {
    console.error("❌ Error sending single notification:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// =============================================================

app.get('/', (req, res) => res.send('Backend is running!'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
