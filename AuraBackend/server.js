const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');

const app = express();


app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:5173",       // local dev
    "https://www.saffronguru.com", // ✅ live site (www)
    "https://saffronguru.com"      // ✅ root domain
  ],
  credentials: true,
}));

// ✅ Preflight OPTIONS requests handle karo
app.options("*", cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => res.send('Backend is running!'));


router.get("/ping", (req, res) => {
  res.send("pong ✅ Saffron Guru backend is alive");
});



app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
