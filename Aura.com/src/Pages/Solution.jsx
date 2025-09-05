import React from 'react';
import AppNavbar from '../Components/AppNavbar';
import AllSection from '../Components/AllSection';
import { Container, Row, Col } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Solution.css';

const Solution = () => {
  return (
    <div className="solution-page">
      <AppNavbar />
      
      <header className="solution-hero">
        <h1 className="hero-heading">🛡️ Protecting Our Elders from Online Scams</h1>
        <p className="hero-subtext">
          Every day, thousands of senior citizens fall victim to online frauds. We’re here to stop that.
        </p>
      </header>

      <section className="solution-section fade-slide">
        <Container>
          {/* Section 1 */}
          <Row className="align-items-center mb-5">
            <Col md={6}>
              <div className="image-wrapper">
                <LazyLoadImage
                  src="/Hero/TheRising.WebP"
                  alt="Scam Awareness"
                  effect="blur"
                  loading="lazy"
                  className="solution-img"
                />
              </div>
            </Col>
            <Col md={6}>
              <h2>⚠️ The Rising Threat</h2>
              <p>
                Scammers target the elderly with fake tech support calls, phishing emails, Medicare scams,
                romance frauds, and more. Many seniors lose their life savings before realizing what happened.
              </p>
              <p>
                Our platform offers 24/7 protection, real-time alerts, and expert consultation to guide seniors
                and their families through safe online practices.
              </p>
            </Col>
          </Row>

          {/* Section 2 */}
          <Row className="align-items-center mb-5 flex-md-row-reverse">
            <Col md={6}>
              <div className="image-wrapper">
                <LazyLoadImage
                  src="/Hero/FakeTechSupport.WebP"
                  alt="Fake Support"
                  effect="blur"
                  loading="lazy"
                  className="solution-img"
                />
              </div>
            </Col>
            <Col md={6}>
              <h2>📞 Fake Tech Support</h2>
              <p>
                “Hello, we’re calling from Microsoft…” — this phrase has tricked millions. Elderly users are
                convinced to give remote access to scammers posing as trusted support agents.
              </p>
              <p>
                Our system auto-detects scam numbers and blocks them. We also educate families on how to prevent
                remote access abuse.
              </p>
            </Col>
          </Row>

          {/* Section 3 */}
          <Row className="align-items-center mb-5">
            <Col md={6}>
              <div className="image-wrapper">
                <LazyLoadImage
                  src="/Hero/RomanceScam.WebP"
                  alt="Romance Scam"
                  effect="blur"
                  loading="lazy"
                  className="solution-img"
                />
              </div>
            </Col>
            <Col md={6}>
              <h2>❤️ Romance & Emotional Scams</h2>
              <p>
                Many seniors, especially widowed or living alone, fall into emotional traps from scam “companions”
                they meet online. These scammers exploit loneliness and empathy to extract money.
              </p>
              <p>
                Saffron Guru fraud detection flags unusual activity, protects bank transactions, and provides expert
                counselors to intervene if needed.
              </p>
            </Col>
          </Row>

          {/* Section 4 */}
          <Row className="align-items-center mb-5 flex-md-row-reverse">
            <Col md={6}>
              <div className="image-wrapper">
                <LazyLoadImage
                  src="/Hero/EducationScam.WebP"
                  alt="Education First"
                  effect="blur"
                  loading="lazy"
                  className="solution-img"
                />
              </div>
            </Col>
            <Col md={6}>
              <h2>🎓 Education is First Line of Defense</h2>
              <p>
                We believe education is the strongest anti-scam tool. Our interactive scam awareness sessions
                help seniors identify and avoid modern fraud techniques. We offer:
              </p>
              <ul>
                <li>📺 Scam video simulations</li>
                <li>📞 Phone call coaching sessions</li>
                <li>🧠 Easy-to-understand guides</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <AllSection />
    </div>
  );
};

export default Solution;
