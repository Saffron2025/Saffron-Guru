const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const admin = require("firebase-admin");

const authRoutes = require('./routes/auth');
const app = express();

// ================== 🔥 FIREBASE ADMIN INIT ==================
let serviceAccount = null;

try {
  // Parse service account JSON from env
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
} catch (err) {
  console.error("❌ Error parsing FIREBASE_SERVICE_ACCOUNT:", err.message);
}

if (serviceAccount) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
  console.log("✅ Firebase Admin initialized");
} else {
  console.error("❌ Firebase Admin not initialized (missing FIREBASE_SERVICE_ACCOUNT)");
}
// =============================================================

// ✅ Temporary token store (baad me MongoDB model use kar sakte ho)
let tokens = [];

// ✅ Middleware
app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:5173",            // local dev
    "https://www.saffronguru.com",      // live site (www)
    "https://saffronguru.com"           // root domain
  ],
  credentials: true,
}));
app.options("*", cors());

// ✅ MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log("❌ MongoDB error:", err));

// ✅ Health check
app.get('/ping', (req, res) => {
  res.send("pong ✅ backend alive");
});

// ✅ Auth routes
app.use('/api/auth', authRoutes);

// ================== 🔥 NOTIFICATION ROUTES ==================

// Register FCM token
app.post("/api/notifications/register-token", (req, res) => {
  const { token } = req.body;
  if (token && !tokens.includes(token)) {
    tokens.push(token);
    console.log("✅ Token saved:", token);
  }
  res.json({ success: true, tokens });
});

// Send notification to all saved tokens
app.post("/api/notifications/send", async (req, res) => {
  const { title, body } = req.body;

  if (tokens.length === 0) {
    return res.status(400).json({ success: false, msg: "No tokens registered" });
  }

  const message = {
    notification: { title, body },
    tokens: tokens,
  };

  try {
    const response = await admin.messaging().sendMulticast(message);
    console.log("📩 Notifications sent:", response);
    res.json({ success: true, response });
  } catch (error) {
    console.error("❌ Error sending notification:", error);
    res.status(500).json({ success: false, error });
  }
});

// =============================================================

// ✅ Root route
app.get('/', (req, res) => res.send('Backend is running!'));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
