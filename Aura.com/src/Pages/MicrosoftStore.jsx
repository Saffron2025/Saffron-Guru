import React from 'react';
import './MicrosoftStore.css';
import AppNavbar from '../Components/AppNavbar';
import { Link } from 'react-router-dom'; // Make sure this is imported
import AllSection from '../Components/AllSection';
import { Container, Row, Col } from 'react-bootstrap';

const MicrosoftStore = () => {
  return (
    <>
    <AppNavbar/>
    <div className="microsoft-store-page">
      <header className="store-hero">
        <h1>🛡️ Microsoft Store: Your First Line of Digital Defense</h1>
        <p>Learn how scammers misuse Microsoft’s name and how to secure your devices, purchases, and personal data — especially for seniors and families.</p>
      </header>

      <Container className="store-content">
        <Row>
          <Col md={12}>
            <section className="store-section fade-in-slide">
              <h2>🎯 Common Microsoft Store Scams</h2>
              <ul>
                <li><strong>Fake Microsoft Support Popups:</strong> “Your PC is infected” warnings that prompt you to call a fake number.</li>
                <li><strong>Phishing Emails:</strong> Fake order confirmations claiming to be from Microsoft Store with dangerous links.</li>
                <li><strong>Remote Access Traps:</strong> Scammers pretending to be Microsoft techs asking you to install remote tools.</li>
                <li><strong>App Store Frauds:</strong> Apps pretending to be Microsoft tools but stealing your data.</li>
              </ul>
            </section>

            <section className="store-section gradient-bg">
              <h2>🔐 How to Stay Safe on the Microsoft Store</h2>
              <p>
                The official Microsoft Store is one of the safest platforms for purchasing apps, games, and digital licenses — but only if used carefully.
              </p>
              <ul>
                <li>✅ Only download from <strong>store.microsoft.com</strong> or the built-in Windows Store.</li>
                <li>✅ Use two-factor authentication (2FA) on your Microsoft account.</li>
                <li>✅ Regularly review purchased items and subscriptions from your Microsoft dashboard.</li>
                <li>✅ Avoid clicking links in suspicious emails — go directly to the store.</li>
              </ul>
            </section>

            <section className="store-section styled-box">
              <h2>📦 Subscription & Billing Safety Tips</h2>
              <p>
                Microsoft 365 and other subscriptions can be misused by scammers to trick victims with false renewal alerts.
              </p>
              <ul>
                <li>Never trust a call saying “Your Office license has expired” unless you confirm via your official account.</li>
                <li>Always review your billing directly from your Microsoft account page.</li>
                <li>Scammers may spoof emails using "m1crosoft.com" — always check sender domains.</li>
              </ul>
            </section>

            <section className="store-section scam-stats">
              <h2>📊 Shocking Stats</h2>
              <p>
                In 2024 alone, over <strong>$1.8 billion</strong> was lost due to fake software scams — many using Microsoft's name.<br />
                Over <strong>60%</strong> of victims were aged 50+.
              </p>
            </section>

            <section className="store-section final-cta">
              <h2>🧠 Always Think Before You Click</h2>
              <p>
                No real Microsoft agent will ever ask for your passwords, remote access, or payment on a call.<br />
                If you’re ever unsure, speak to a real tech expert or use our <strong>DefendMePro™</strong> service to block scams instantly.
              </p>
             <Link to="/contact" className="cta-button">
  💬 Talk to Our Scam Protection Experts Today
</Link>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
    <AllSection/>
    </>
  );
};

export default MicrosoftStore;
