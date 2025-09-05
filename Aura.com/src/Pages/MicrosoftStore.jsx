import React, { useState } from 'react';
import './MicrosoftStore.css';
import AppNavbar from '../Components/AppNavbar';
import AllSection from '../Components/AllSection';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const products = [
  { id: 1, name: "Office 2016 Pro Plus", img: "/Products/Office2016ProPlus.WebP", price: "$99.99", desc: "Classic productivity suite trusted by millions." },
  { id: 2, name: "Office 2019 Pro Plus", img: "/Products/Office 2019 Pro Plus.Webp", price: "$129.99", desc: "Modern productivity apps with cloud sync." },
  { id: 3, name: "Office 2021 Pro Plus", img: "/Products/Office 2021 Pro Plus.Webp", price: "$149.99", desc: "Latest one-time Office license." },
  { id: 4, name: "Office 2024 Pro Plus", img: "/Products/Office 2024 Pro Plus.Webp", price: "$199.99", desc: "Upcoming future-ready Office tools." },
  { id: 5, name: "Project 2019 / 2021 Pro", img: "/Products/Project 2019  2021 Pro.Webp", price: "$179.99", desc: "Advanced project management for professionals." },
  { id: 6, name: "Visio 2019 / 2021 Pro", img: "/Products/Visio 2019  2021 Pro.Webp", price: "$159.99", desc: "Powerful diagramming and flowcharts." },
  { id: 7, name: "Windows 11 Home", img: "/Products/Windows 11 Home.Webp", price: "$119.99", desc: "For everyday use with latest features." },
  { id: 8, name: "Windows 11 Pro", img: "/Products/Windows 11 Pro.Webp", price: "$199.99", desc: "For power users & businesses." },
  { id: 9, name: "Windows Server 2019 Standard / Datacenter", img: "/Products/Windows Server 2019 Standard  Datacenter.Webp", price: "$399.99", desc: "Reliable server OS for enterprise." },
  { id: 10, name: "Windows Server 2022 Standard / Datacenter", img: "/Products/Windows Server 2022 Standard  Datacenter.Webp", price: "$499.99", desc: "Next-gen secure server platform." },
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
          Get genuine Microsoft products with lifetime licenses, no hidden charges, and instant digital delivery.
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

      <AllSection />
    </>
  );
};

export default MicrosoftStore;
