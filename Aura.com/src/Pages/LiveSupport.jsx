import React from 'react'
import AppNavbar from '../Components/AppNavbar'
import { useNavigate } from 'react-router-dom'

import AllSection from '../Components/AllSection'
import './LiveSupport.css'

const LiveSupport = () => {
  const navigate = useNavigate();

  return (
    <>
      <AppNavbar />
      <div className="live-support-page">
        <div className="support-hero">
          <h1 className="support-title">💬 Live Scam Protection Support</h1>
          <p className="support-subtitle">
            Our mission is to protect U.S. seniors from online scams, fraud, and digital traps.
            Our friendly team is available 24/7 to give you safe, step-by-step guidance.
          </p>
        </div>

        <div className="support-container">
          <div className="support-card">
            <h2>👩‍💻 Live Chat Support</h2>
            <p>
              Talk instantly with a trained protection expert.
              If you received a suspicious call, email, or popup, we’ll guide you in real-time.
            </p>
            <button
              className="support-btn"
              onClick={() => {
                if (window.jivo_api) {
                  window.jivo_api.open();
                } else {
                  alert("Chat service is loading... please wait a moment.");
                }
              }}
            >
              Start Live Chat
            </button>
          </div>

          <div className="support-card">
            <h2>📞 Toll-Free Helpline</h2>
            <p>
              Speak directly with our U.S. support staff.
              No robots, no waiting. Just clear answers in simple words.
            </p>
            <button
              className="support-btn"
              onClick={() => navigate("/contact")}
            >
              Call Now
            </button>
          </div>

          <div className="support-card">
            <h2>📧 Email Support</h2>
            <p>
              Prefer writing? Send us details of your concern.
              We reply quickly with step-by-step instructions.
            </p>
            <button
              className="support-btn"
              onClick={() => navigate("/contact")}
            >
              Send Email
            </button>
          </div>

          {/* Emergency Section */}
          <div className="emergency-section">
            <div className="emergency-header">
              <span className="emergency-icon">🚨</span>
              <h2>Emergency Help</h2>
            </div>
            <div className="emergency-body">
              <p>
                If you think you’ve already been scammed, don’t panic – we’re here.
                We’ll help secure your identity, stop fraudulent activity,
                and guide you in reporting to the right authorities.
              </p>
              <button className="emergency-btn">Get Emergency Help</button>
            </div>
          </div>
        </div>

        {/* 🌟 Brand GIF Section with 2-column layout */}
        <div className="support-brand-section">
          <div className="brand-left">
            <img
              src="/Products/SaffronGuruLogo.gif"
              alt="Saffron Guru Logo"
              className="saffronGuru-logo-support"
            />
          </div>
          <div className="brand-right">
            <h3>Your Trusted Digital Protection Partner</h3>
            <p>
              We stand by seniors and families across the U.S. with real-time scam protection, 
              fraud detection, and 24/7 expert guidance.  
            </p>
          </div>
        </div>

        <div className="support-footer-note">
          <h3>🌎 Protecting Seniors Across America</h3>
          <p>
            Every day, scammers target older adults with fake calls, emails, and pop-ups.
            DefendMePro fights back with real people, real solutions, and real protection.
            You are not alone – we’ve already helped thousands of families, and we are ready to help you too.
          </p>
        </div>
      </div>
      <AllSection />
    </>
  )
}

export default LiveSupport
