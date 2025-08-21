import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import './AuraGraphSection.css'; // Create this CSS file
import MediaMentions from './MediaMentions';
import GlobalReach from './GlobalReach';
import AllSection from './AllSection'
import FloatingChat from './FloatingChat';
import { useState, useEffect } from 'react';
import Videos from './Videos';
import SocialMedia from './SocialMedia';
import './Footer.css'
import ItSupport from './ItSupport';
import ProtectionShowcase from './ProtectionShowcase';
import NewsletterForm from './NewsletterForm';

const Footer = () => {

  const [drawLine, setDrawLine] = useState(false);

  useEffect(() => {
    setTimeout(() => setDrawLine(true), 200); // slight delay before animating
  }, []);
  return (
    <>
    <section className="aura-graph-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="aura-graph-left-col">
            <h2 className="graph-title">
              Odds of falling victim to <br />
              online crime? <span className="highlight-text">1 in 4.</span>
            </h2>
            <p className="graph-description">
              You probably know more than a few people who have been <br />
              scammed. Last year, Americans lost over $12.5 billion to online <br />
              crimes with new scams emerging daily.
            </p>
            <p className="graph-description mb-4">
              Aura proactively protects you and your family, pushing the odds <br />
              in your favor.
            </p>
            
          </Col>
          {/* Graph Section */}

         <Col md={6} className="aura-graph-right-col">
  <div className="graph-visual-container">
    <svg
      className="graph-svg"
      viewBox="0 0 1000 600"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="graphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#84b6f4" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        <mask id="dash-mask">
          <path
            d="M 0 550 C 150 400, 400 250, 600 150 C 750 100, 850 60, 950 20"
            stroke="white"
            strokeWidth="5"
            fill="none"
          />
          <path
            d="M 950 20 L 1000 0"
            stroke="white"
            strokeWidth="5"
            strokeDasharray="12 12"
            fill="none"
          />
        </mask>
      </defs>

      {/* Gradient fill under graph */}
      <path
        d="M 0 550 C 150 400, 400 250, 600 150 C 750 100, 850 60, 950 20 L 1000 0 L 1000 600 L 0 600 Z"
        fill="url(#graphGradient)"
        mask="url(#dash-mask)"
      />

      {/* Animated path line */}
      <path
        d="M 0 550 C 150 400, 400 250, 600 150 C 750 100, 850 60, 950 20 L 1000 0"
        className="graph-animated-path"
        fill="none"
      />
    </svg>

    <div className="graph-year-line">
      <div className="year-item">2021</div>
      <div className="year-item">2022</div>
      <div className="year-item">2023</div>
      <div className="year-item">
        2024
        <div className="data-point-circle"></div>
      </div>
    </div>

    <div className="graph-data-callout">
      <h4 className="callout-title">$16 billion was lost in 2024</h4>
      <p className="callout-description">
        Since 2020, the amount lost to online <br />
        crime has nearly tripled. (FBI)
      </p>
    </div>
  </div>
</Col>
<Videos/>

{/* <div className="full-width-wrapper"> */}
  {/* <div className="content-center"> */}
<ProtectionShowcase/>

     <div className="protection-shared-cta">
    <div className="cta-line">
      <img src="/Hero/discount.WebP" alt="offer" className="cta-icon" />
      <span className='VeterenText'>
        We offer <strong>special pricing for seniors and veterans</strong>. Please speak to our expert to learn more.
      </span>
    </div>
    <div className="cta-buttons">
<Link className="cta-btn" to="/contact">📞 Call Us</Link>
{/* <button className="cta-btn" onClick={() => document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' })}>💬 Chat</button> */}
{/* <button className="cta-btn" onClick={() => document.getElementById('learn-more')?.scrollIntoView({ behavior: 'smooth' })}>📘 Learn More</button> */}
    </div>
  </div>

    <ItSupport/>





        </Row>

      </Container>

 
    </section>
    <NewsletterForm/>
    <SocialMedia/>

<MediaMentions/>

{/* <FloatingChat/> */}


    <GlobalReach/>

    <AllSection/>
    {/* <Disclaimer/> */}
    </>
  );
};

export default Footer;