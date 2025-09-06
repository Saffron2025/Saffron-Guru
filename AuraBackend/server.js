const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

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

// 🚀 Root route
app.get("/", (req, res) => res.send("Backend is running!"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
