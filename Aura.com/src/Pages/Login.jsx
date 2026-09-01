import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // ✅ Aapka CSS (isme loader CSS bhi add karna hoga)

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [turnstileToken, setTurnstileToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const captchaRef = useRef(null);

  // Turnstile CAPTCHA rendering
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.turnstile && captchaRef.current && !captchaRef.current.hasChildNodes()) {
        window.turnstile.render(captchaRef.current, {
          sitekey: '0x4AAAAAABufeUdz9WpnfFPE',
          callback: (token) => setTurnstileToken(token),
          theme: 'light',
          'refresh-expired': 'auto',
          'retry': 'auto',
          'response-field': true,
          'execution': 'render',
          'action': 'login',
          'language': 'auto',
          'data-mode': 'interaction-only'
        });
        clearInterval(interval);
      }
    }, 300);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!turnstileToken) {
      alert('❌ Please complete the CAPTCHA.');
      return;
    }

    setLoading(true); // ✅ Loader ON

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        ...form,
        turnstileToken,
      });

      localStorage.setItem('authToken', res.data.token);
      localStorage.setItem('saffronUser', JSON.stringify(res.data.user));

      alert(`✅ Welcome ${res.data.user.name}`);
      navigate('/home');
    } catch (err) {
      alert(err.response?.data?.msg || 'Login error');
    } finally {
      setLoading(false); // ✅ Loader OFF
    }
  };

  return (
    <div className="login-wrapper">
      {/* 🔹 Overlay Loader */}
      {loading && (
        <div className="overlay-loader">
          <div className="spinner"></div>
          <p>Logging you in...</p>
        </div>
      )}

      <form className="login-form-glass" onSubmit={handleSubmit}>
        <h2 className="login-heading">🚀 Secure Login</h2>

        <input
          type="email"
          name="email"
          placeholder="✉️ Enter Email"
          value={form.email}
          onChange={handleChange}
          required
          className="login-input"
        />

        <input
          type="password"
          name="password"
          placeholder="🔒 Enter Password"
          value={form.password}
          onChange={handleChange}
          required
          className="login-input"
        />

        {/* Cloudflare CAPTCHA */}
        <div ref={captchaRef} className="cf-turnstile" style={{ marginBottom: '1rem' }}></div>

        <button type="submit" className="login-submit-btn" disabled={loading}>
          {loading ? "⏳ Logging in..." : "Login"}
        </button>

        <div className="form-switch-link">
          Don't have an account?{' '}
          <span onClick={() => navigate('/signup')}>Register here</span>
        </div>
      </form>
    </div>
  );
};

export default Login;