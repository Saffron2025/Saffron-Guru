import React from 'react';
import AppNavbar from '../Components/AppNavbar';
import AllSection from '../Components/AllSection';
import './ABCNational.css';

const ABCNational = () => {
  return (
    <>
      <AppNavbar />

      <div className="abc-container">
        <div className="abc-card">
          <h1 className="abc-title">💰 FBI Report: $4.8B Lost by Seniors in 2024</h1>
          <p className="abc-subtitle">
            Shocking rise in scams targeting older Americans. Cybercriminals are evolving—and so must our awareness.
          </p>

          <section className="abc-section">
            <h2>📊 Alarming Stats</h2>
            <ul>
              <li>Nearly <strong>100,000 seniors</strong> were victimized in 2024.</li>
              <li>Total losses exceeded <strong>$4.8 billion</strong>, up 11% from 2023.</li>
              <li>Victims over 60 were scammed out of an average of <strong>$48,000</strong>.</li>
            </ul>
          </section>

          <section className="abc-section">
            <h2>🧠 Common Scam Tactics</h2>
            <ul>
              <li>Tech support impersonation.</li>
              <li>Phishing emails claiming to be from banks or government.</li>
              <li>Romance scams targeting the emotionally vulnerable.</li>
              <li>Bitcoin & crypto investment fraud.</li>
            </ul>
          </section>

          <section className="abc-section">
            <h2>✅ How to Stay Safe</h2>
            <ul>
              <li>Never trust unsolicited calls or emails.</li>
              <li>Don't click unknown links—even if they look official.</li>
              <li>Enable 2FA and keep passwords secure.</li>
              <li>Educate seniors and their families proactively.</li>
            </ul>
          </section>

          <p className="abc-warning">
            🚨 <strong>Protect your family.</strong> Share this with seniors who may not be aware—they’re the top targets in this digital age.
          </p>

          {/* 🔗 Link to full article */}
          <div className="abc-read-more">
            <a
              href="https://abcnews.go.com/Politics/seniors-lost-48-billion-scammers-2024-fbi/story?id=121059590&utm_source"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Read Full Article on ABC News →
            </a>
          </div>
        </div>
      </div>

      <AllSection />
    </>
  );
};

export default ABCNational;
