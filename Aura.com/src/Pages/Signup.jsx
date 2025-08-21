import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [agreeToUpdates, setAgreeToUpdates] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!agreeToUpdates) {
      alert("⚠️ Please agree to receive updates, scam alerts, and notifications to register.");
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/auth/send-otp', form);
      alert("✅ Signup successful!");
      navigate('/verify-otp', { state: { email: form.email } });
    } catch (err) {
      alert(err.response?.data?.msg || "Signup error");
    }
  };

  return (
    <div className="signup-wrapper">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-heading">Create Your Account</h2>

        <input
          name="name"
          placeholder="👤 Full Name"
          onChange={handleChange}
          required
          className="signup-input"
        />
        <input
          name="email"
          placeholder="✉️ Email Address"
          onChange={handleChange}
          required
          className="signup-input"
        />
        <input
          name="password"
          type="password"
          placeholder="🔒 Password"
          onChange={handleChange}
          required
          className="signup-input"
        />

        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            id="agree"
            checked={agreeToUpdates}
            onChange={() => setAgreeToUpdates(!agreeToUpdates)}
          />
          <label htmlFor="agree">
            <span className="checkbox-text">
              🔔 I agree to receive <span className="highlight">important updates</span>, <span className="highlight">scam alerts</span>, and <span className="highlight">service notifications</span> from <strong className="brand-name">Saffron Guru</strong>.
            </span>
          </label>
        </div>

        <button type="submit" className="signup-btn">Register</button>

        <div className="form-switch-link">
          Already registered? <span onClick={() => navigate('/login')}>Login here</span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
