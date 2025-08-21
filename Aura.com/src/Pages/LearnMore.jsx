import React from 'react';
import AppNavbar from '../Components/AppNavbar';
import AllSection from '../Components/AllSection';
import './LearnMore.css'; // 👈 Make sure this CSS file exists

const LearnMore = () => {
  return (
    <>
      <AppNavbar />
      <section className="learn-more-section">
        <div className="learn-more-container">
          <h2 className="learn-heading">
            DefendMePro™ Includes Everything for Your Digital Protection — and Support for Tech Hurdles, Too. ✅
          </h2>
          <p className="learn-para fade-in">
            In an era where online scams, phishing attacks, and identity theft have become a part of everyday life, basic antivirus solutions are no longer enough. 
            <strong> DefendMePro™ is a next-generation protection system </strong> designed not just to block threats — but to walk with you through them.
          </p>

          <p className="learn-para slide-in-left">
            From real-time scam alerts to human-powered IT assistance, DefendMePro™ empowers you with tools and guidance to navigate the digital world safely. 
            Whether you receive a suspicious email, a fake bank message, or need help with your devices — we're here.
          </p>

          <p className="learn-para slide-in-right">
            Most software stops at scanning for viruses. We go further. You get:
            <ul className="learn-list zoom-in">
              <li>🛡️ Identity Theft Protection with Dark Web Monitoring</li>
              <li>🚫 Real-Time Scam Detection and Blocking</li>
              <li>🔐 Password Vault to Secure All Your Logins</li>
              <li>🛰️ VPN for Online Privacy & Anonymity</li>
              <li>🖥️ Virus, Malware & Spyware Cleanup by Experts</li>
              <li>📞 Spam Call & Text Blocker</li>
              <li>💸 Financial Account Monitoring & Alerts</li>
              <li>👨‍💻 U.S.-Based Human IT Support — 7 Days a Week</li>
            </ul>
          </p>

          <p className="learn-para fade-in-delay">
            <strong>We protect you. And we support you.</strong> Whether you’re dealing with a hacked account, suspicious phone call, or just setting up your new laptop — our experts are one tap away.
          </p>

          <div className="learn-cta-wrapper">
            <p className="learn-cta-text">✅ Trusted by seniors, families, and professionals across the country.</p>
            <p className="learn-cta-text">🕵️‍♂️ It’s not just software. It’s your digital bodyguard.</p>
          </div>
        </div>
      </section>

      <AllSection />
    </>
  );
};

export default LearnMore;
