// src/Components/PrivacyPolicy.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './PrivacyPolicy.css';
import AppNavbar from './AppNavbar';
import AllSection from './AllSection';

const PrivacyPolicy = () => {
  return (
    <>
    <AppNavbar/>
      <section className="privacy-policy-section">
        <Container>
          <Row>
            <Col md={12}>
              <div className="privacy-card">
                <h1 className="privacy-heading">Privacy Policy</h1>
                <p className="privacy-intro">
                  Your trust matters. At <strong>Secure Saffron Guru</strong>, we keep your information safe and private.
                  We explain everything in simple language so it’s easy to understand.
                </p>

                <div className="callout">
                  <strong>Quick summary:</strong> We collect only what we need to protect you, we keep it secure, and we never sell your data.
                </div>

                <h2 className="privacy-subheading">1) What information we collect</h2>
                <p className="privacy-text">Just the basics—only to keep you safe and supported:</p>
                <ul className="privacy-list">
                  <li>📱 Device and operating system details (for setup & protection)</li>
                  <li>📍 IP address and general location (to detect unusual activity)</li>
                  <li>📧 Your contact details (so we can help and notify you)</li>
                  <li>🛡️ Security and activity logs <span className="badge-soft">for threat detection</span></li>
                </ul>

                <h2 className="privacy-subheading">2) How we use your information</h2>
                <p className="privacy-text">Only to improve your safety and service:</p>
                <ul className="privacy-list">
                  <li>⚠️ Find and block scams, fraud, and risky links</li>
                  <li>🔒 Protect your identity and accounts with encryption</li>
                  <li>🤝 Provide live technical support when you need it</li>
                  <li>📬 Send important security alerts and tips</li>
                </ul>

                <h2 className="privacy-subheading">3) How we protect your data</h2>
                <p className="privacy-text">Security is our foundation. We use:</p>
                <ul className="privacy-list">
                  <li>🔐 Strong encryption (AES-256) for data in transit and at rest</li>
                  <li>🧱 Firewalls & intrusion detection</li>
                  <li>🧬 Anonymized analytics (we remove personal details)</li>
                  <li>🛡️ Private, secure connections (VPN where applicable)</li>
                </ul>

                <h2 className="privacy-subheading">4) Your choices & rights</h2>
                <p className="privacy-text">You are in control of your data:</p>
                <ul className="privacy-list">
                  <li>🧾 Ask for a copy of your data or request deletion</li>
                  <li>✏️ Update your personal details anytime</li>
                  <li>🚫 Opt out of marketing messages with one click</li>
                </ul>

                <h2 className="privacy-subheading">5) Cookies</h2>
                <p className="privacy-text">
                  We use essential cookies to run the website safely. Optional cookies (like analytics) are used only with your permission.
                </p>

                <h2 className="privacy-subheading">6) Sharing with trusted partners</h2>
                <p className="privacy-text">
                  We <strong>never sell</strong> your data. We may share limited information with trusted partners, only to provide our services:
                </p>
                <ul className="privacy-list">
                  <li>✅ Fraud and threat-blocking services</li>
                  <li>✅ Secure cloud storage & backups</li>
                  <li>✅ SMS/email delivery for alerts</li>
                </ul>

                <h2 className="privacy-subheading">7) Policy updates</h2>
                <p className="privacy-text">
                  If we make important changes, we’ll let you know by email or inside the app—clearly and in advance.
                </p>

                {/* 👉 Final callout with email + phone */}
                <div className="privacy-callout">
                  Have a question about your privacy? Reach out to our Privacy & Security Desk at 
                  <strong> Saffron Guru</strong> — email us at 
                  <a className="policy-link" href="mailto:CustomerSupport@SaffronGuru.com"> CustomerSupport@SaffronGuru.com</a> 
                  {` `}or call toll-free <strong>844-313-4987</strong>. 
                  We’re here to help.
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <AllSection />
    </>
  );
};

export default PrivacyPolicy;
