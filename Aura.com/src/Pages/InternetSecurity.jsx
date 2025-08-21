import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppNavbar from '../Components/AppNavbar';
import AllSection from '../Components/AllSection';
import './InternetSecurity.css';

const InternetSecurity = () => {
  return (
    <>
    <AppNavbar/>
    <div className="internet-security-page">
      <header className="security-hero">
        <h1 className="security-title">🛡️ Internet Security & Online Fraud Protection</h1>
        <p className="security-subtitle">
          Stay one step ahead of scammers, hackers, and identity thieves with our powerful protection guide.
        </p>
      </header>

      <section className="security-content-section fade-in-section">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="section-heading">📍 What is Internet Security?</h2>
              <p>
                Internet security involves protecting your personal, financial, and digital information while using the internet. It defends users against scams, fraud, malware, phishing attacks, identity theft, and more. With more than 12 billion dollars lost to scams in 2024, understanding these threats is critical.
              </p>

              <h2 className="section-heading">🚨 Top Internet Threats in 2025</h2>
              <ul className="security-list">
                <li><strong>Phishing Emails:</strong> Fake emails pretending to be from banks or services.</li>
                <li><strong>Tech Support Scams:</strong> Scammers pretending to be from Microsoft, Apple, or "Saffron Guru" support.</li>
                <li><strong>Remote Access Fraud:</strong> Fraudsters asking to install apps like AnyDesk or TeamViewer.</li>
                <li><strong>Fake Shopping Sites:</strong> Attractive deals that steal your credit card info.</li>
                <li><strong>Romance Scams:</strong> Emotional manipulation to extract money from lonely users.</li>
              </ul>

              <h2 className="section-heading">💡 Signs of a Scam</h2>
              <ul className="security-list">
                <li>Someone urgently asks for payment through gift cards or crypto.</li>
                <li>You’re promised a prize but must pay a “processing fee.”</li>
                <li>A tech support pop-up says your PC is infected and provides a number to call.</li>
                <li>You’re pressured to give remote access to “fix” an issue.</li>
              </ul>

              <h2 className="section-heading">🧠 How to Stay Safe Online</h2>
              <ol className="security-list-numbered">
                <li>Never share OTPs or passwords, even with someone who sounds official.</li>
                <li>Use strong, unique passwords and a password manager.</li>
                <li>Enable two-factor authentication (2FA) everywhere.</li>
                <li>Install a reputable antivirus and keep it updated.</li>
                <li>Don’t click on links from unknown senders — always verify first.</li>
              </ol>

              <h2 className="section-heading">🛡️ DefendMePro™ Can Help</h2>
              <p>
                Our security system includes real-time scam detection, phishing protection, and U.S.-based human support for seniors and families. We’re not just antivirus — we’re a complete digital defense shield.
              </p>

              <div className="protection-card">
                <h3>🔥 Features Included:</h3>
                <ul>
                  <li>Scam & Fraud Alerts in Real-Time</li>
                  <li>Dark Web Monitoring</li>
                  <li>Bank Account & Credit Protection</li>
                  <li>24/7 IT Support & Remote Assistance</li>
                  <li>Phishing Blocker & Spam Call Filter</li>
                </ul>
              </div>

              <h2 className="section-heading">📈 Why Seniors Are the #1 Target</h2>
              <p>
                According to the FBI, adults aged 60+ lost over $3.4 billion to scams in 2024. Fraudsters target seniors due to trust, politeness, and lack of tech awareness. Our platform is built specifically to protect seniors from these evolving threats.
              </p>

              <h2 className="section-heading">🌐 Resources for Internet Safety</h2>
              <ul className="resource-links">
                <li><a href="/resources">📚 Scam & Fraud Prevention Guides</a></li>
                <li><a href="/DefendPro">🛠️ How DefendMePro Works</a></li>
                <li><a href="/contact">💬 Talk to an Expert</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
    <AllSection/>
    </>
  );
};

export default InternetSecurity;
