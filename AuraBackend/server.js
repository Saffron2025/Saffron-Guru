const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const keepAlive = require("./keepAlive");

const app = express();

// -------------------------------------------
// 🔥 CORS MUST BE FIRST MIDDLEWARE
// -------------------------------------------
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://www.saffronguru.com",
      "https://saffronguru.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// 🔥 Preflight fix (MOST IMPORTANT)
app.options("*", (req, res) => {
  res.sendStatus(200);
});

// -------------------------------------------
// 🔥 Body Parser AFTER CORS
// -------------------------------------------
app.use(express.json());

// -------------------------------------------
// 🔥 Routes
// -------------------------------------------
app.use("/api/auth", authRoutes);

// Health Check
app.get("/ping", (req, res) => {
  res.send("pong backend alive");
});

// Root
app.get("/", (req, res) => res.send("Backend is running!"));

// Keep-Alive
keepAlive();

// -------------------------------------------
// DB + Server
// -------------------------------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
