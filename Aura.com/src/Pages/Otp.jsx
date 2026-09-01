import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import './Otp.css'; // ✅ isme loader CSS bhi add karna hoga

const OtpVerify = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Email passed from signup page
  const { email } = location.state || {};

  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!email) return alert('Email not found. Go back to signup.');

    try {
      setLoading(true); // ✅ Loader ON
      const res = await axios.post('http://localhost:5000/api/auth/verify-otp', {
        email,
        otp,
      });

      alert(res.data.msg || "Verification successful!");
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.msg || 'Invalid OTP');
    } finally {
      setLoading(false); // ✅ Loader OFF
    }
  };

  return (
    <div className="otp-wrapper">
      {/* 🔹 Overlay Loader */}
      {loading && (
        <div className="overlay-loader">
          <div className="spinner"></div>
          <p>Verifying OTP...</p>
        </div>
      )}

      <form className="otp-form" onSubmit={handleVerify}>
        <h2 className="otp-heading">Verify OTP</h2>

        <p className="otp-subtext">OTP sent to: <strong>{email}</strong></p>

        <input
          type="text"
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          className="otp-input"
        />

        <button type="submit" className="otp-btn" disabled={loading}>
          {loading ? 'Verifying...' : 'Verify OTP'}
        </button>
      </form>
    </div>
  );
};

export default OtpVerify;
