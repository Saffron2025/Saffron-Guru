import React, { useState } from 'react';
import './MicrosoftStore.css';
import AppNavbar from '../Components/AppNavbar';
import AllSection from '../Components/AllSection';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const products = [
  { id: 22, name: "Microsoft Office Home 2024", img: "/Products/saffron-guru-microsoft-office-home-2024.webp", price: "$179.99", desc: "Word, Excel, PowerPoint and OneNote. Yours to keep." },
  { id: 23, name: "Microsoft Office Home & Business 2024", img: "/Products/saffron-guru-microsoft-office-home-and-business-2024.webp", price: "$249.99", desc: "Adds Outlook. Licensed for business use." },
  { id: 24, name: "Microsoft 365 Family", img: "/Products/saffron-guru-microsoft-365-family.webp", price: "$129.99/year", desc: "Office for up to 6 people, 1 TB storage each." },
  { id: 5, name: "Project 2024 Professional", img: "/Products/saffron-guru-microsoft-project-2024-professional.webp", price: "$179.99", desc: "Plan, schedule and track your projects." },
  { id: 6, name: "Visio 2024 Professional", img: "/Products/saffron-guru-microsoft-visio-2024-professional.webp", price: "$159.99", desc: "Professional diagrams, flowcharts and network maps." },
  { id: 7, name: "Windows 11 Home", img: "/Products/saffron-guru-microsoft-windows-11-home.webp", price: "$89.99", desc: "For everyday use with latest features." },
  { id: 8, name: "Windows 11 Pro", img: "/Products/saffron-guru-microsoft-windows-11-pro.webp", price: "$119.99", desc: "For power users & businesses." },
  { id: 18, name: "Windows Server 2025 Standard", img: "/Products/saffron-guru-microsoft-windows-server-2025-standard.webp", price: "$679.99", desc: "The newest Windows Server, with stronger built-in security." },
  { id: 10, name: "Windows Server 2022 Standard", img: "/Products/saffron-guru-microsoft-windows-server-2022-standard.webp", price: "$499.99", desc: "Secure, proven server platform." },
  { id: 9, name: "Windows Server 2019 Standard", img: "/Products/saffron-guru-microsoft-windows-server-2019-standard.webp", price: "$399.99", desc: "Reliable server OS for enterprise." },
];

const MicrosoftStore = () => {
  const [cartMessage, setCartMessage] = useState("");
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    setCartMessage(`🛒 ${product.name} added to cart. ${product.desc}`);
    navigate(`/product/${product.id}`);
  };

  return (
    <>
      <AppNavbar />

      {/* 🔹 Hero Banner */}
      <header className="store-hero">
        <h1 className="store-title-hero">🛍️ Microsoft Store – Trusted Digital Licenses</h1>
        <p className="store-subtitle">
          Microsoft Office, Microsoft 365, Windows and Windows Server, with instant digital delivery, no hidden charges, and real people to help you set everything up.
        </p>
      </header>

      <div className="microsoft-store-page">
        {/* 🔹 Products Grid */}
        <Container className="product-grid mt-4">
          <h2 className="store-title">💻 Microsoft Products</h2>
          <Row>
            {products.map((product) => (
              <Col md={4} sm={6} xs={12} key={product.id} className="mb-4">
                <Card
                  className="product-card"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <Card.Img
                    as="img"
                    variant="top"
                    src={product.img}
                    alt={product.name}
                    className="product-img"
                    loading="eager"
                    fetchpriority="high"
                    decoding="async"
                  />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className="product-desc">{product.desc}</Card.Text>
                    <Card.Text className="product-price">{product.price}</Card.Text>
                    <Button
                      variant="primary"
                      className="add-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                    >
                      ➕ Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          {cartMessage && <div className="cart-message">{cartMessage}</div>}
        </Container>

        {/* 🔹 Informational Sections */}
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
                  In 2025, Americans aged 60 and older reported over <strong>$1 billion</strong> lost to tech and customer support scams (FBI), many using Microsoft's name.
                </p>
              </section>

              <section className="store-section final-cta">
                <h2>🧠 Always Think Before You Click</h2>
                <p>
                  No real Microsoft agent will ever ask for your passwords, remote access, or payment on a call.<br />
                  If you’re ever unsure, speak to a real tech expert or use our <strong>DefendMe PRO™</strong> service to block scams instantly.
                </p>
                <Link to="/contact" className="cta-button">
                  💬 Talk to a Scam Protection Expert
                </Link>
              </section>
            </Col>
          </Row>
        </Container>
      </div>

      <AllSection />
    </>
  );
};

export default MicrosoftStore;
