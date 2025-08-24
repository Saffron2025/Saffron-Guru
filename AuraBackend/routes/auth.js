const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const nodemailer = require('nodemailer');
const otpStore = require('../utils/otpStore');
const axios = require('axios');
const verifyToken=require('../Middleware/verifyToken')
const router = express.Router();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

// Send OTP
router.post('/send-otp', async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) return res.status(400).json({ msg: 'User already exists' });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore.set(email, { otp, name, password, createdAt: Date.now() });

  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: email,
    subject: 'Your OTP for Saffron Guru Signup',
    html: `<p>Your OTP is: <b>${otp}</b></p>`
  });

  res.json({ msg: 'OTP sent to your email address' });
});

// Verify OTP
router.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;
  const entry = otpStore.get(email);

  if (!entry) return res.status(400).json({ msg: 'OTP not found. Please request again.' });
  if (Date.now() - entry.createdAt > 5 * 60 * 1000) {
    otpStore.delete(email);
    return res.status(400).json({ msg: 'OTP expired' });
  }

  if (entry.otp !== otp) return res.status(400).json({ msg: 'Invalid OTP' });

  const hashedPassword = await bcrypt.hash(entry.password, 10);
  const newUser = new User({ name: entry.name, email, password: hashedPassword });
  await newUser.save();

  otpStore.delete(email);
  res.status(201).json({ msg: 'Signup successful. You can now login.' });
});

// Login
router.post('/login', async (req, res) => {
  const { email, password, turnstileToken } = req.body;

  // Cloudflare CAPTCHA
  try {
    const response = await axios.post(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      new URLSearchParams({
        secret: '0x4AAAAAABufecY60a188MzdpoOia1pLgec',
        response: turnstileToken
      }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
    );
    if (!response.data.success) {
      return res.status(400).json({ msg: 'Captcha verification failed' });
    }
  } catch (error) {
    return res.status(500).json({ msg: 'Captcha verification error' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    // Update lastLogin
    const lastLogin = new Date().toLocaleString();
    user.lastLogin = lastLogin;
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone || '',
        lastLogin
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

// 🧠 GET user profile
router.get('/me', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// ✏️ UPDATE user profile
router.put('/update', verifyToken, async (req, res) => {
  const { name, phone } = req.body;

  try {
    const updated = await User.findByIdAndUpdate(
      req.user.id,
      { name, phone },
      { new: true }
    ).select('-password');

    res.json({ msg: 'Profile updated', user: updated });
  } catch (err) {
    res.status(500).json({ msg: 'Update failed' });
  }
});

// Change Password
router.put('/change-password', verifyToken, async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Old password is incorrect' });

    const hashed = await bcrypt.hash(newPassword, 10);
    user.password = hashed;
    await user.save();

    res.json({ msg: 'Password changed successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error changing password' });
  }
});


module.exports = router;
