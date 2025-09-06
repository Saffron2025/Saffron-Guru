// src/Components/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AllSection from './AllSection';
import './About.css';

const About = () => {
  return (
    <>
      <section className="about-section">
        <Container>

          {/* Our Story */}
          <Row className="about-block">
            <Col md={6}>
              <h2 className="about-heading">Our Story</h2>
              <p className="about-text">
                We were founded and proudly incorporated in Dover, Delaware, in April 2016 — starting out as a dedicated American business with one mission: to provide honest, reliable IT support and a trusted online software store for home users, small businesses, and professionals.
              </p>
              <p className="about-text">
                In the beginning, our services were offered exclusively within the United States, built on the values of integrity, personal care, and results you can count on. As word spread, our commitment to treating every customer like family carried us far beyond U.S. borders. Today, we’re privileged to serve customers across Canada and American retirees in Mexico, Panama, and Costa Rica — keeping them safe, connected, and supported, no matter where in the world they call home.
              </p>
              <p className="about-text">
                But as the digital landscape changed, so did the threats. We saw scams, hacking, and identity theft reaching deeper into people’s lives — especially targeting seniors and vulnerable communities. It became clear that traditional tech support wasn’t enough anymore.
              </p>
              <p className="about-text">
                That’s why we created DefendMePro™ — our all-in-one digital protection service. It combines expert IT support, advanced cyber-threat blocking, fraud prevention, and scam defence into a single, trusted solution.
              </p>
              <p className="about-text">
                Whether we’re fixing your computer, solving a tech issue at your business, stopping a scam in its tracks, or protecting your entire family’s digital life, our mission is simple and unwavering: To keep you, your family, and your business safe — and to give you complete peace of mind in today’s connected world.
              </p>
            </Col>
            <Col md={6}>
              <img
                src="/Hero/OurProtection.WebP"
                alt="Our Story"
                className="about-image"
                loading="lazy"
              />
            </Col>
          </Row>

          {/* Our Mission */}
          <Row className="about-block reverse">
            <Col md={6}>
              <img
                src="/Hero/OurMission.WebP"
                alt="Our Mission"
                className="OurMission"
                loading="lazy"
              />
            </Col>
            <Col md={6}>
              <h2 className="about-heading">Our Mission</h2>
              <p className="about-text">
                At Saffron Guru, our mission is simple but urgent: to stop scams before they reach you. Scams are spreading faster than ever. In 2024 alone, Americans lost over $16 billion to online fraud. Seniors, veterans, and families are targeted every day by hackers, impostors, and cybercriminals.
              </p>
              <p className="about-text">
                We exist to protect the people most at risk—older adults, vulnerable families, and small businesses—by building a digital safety wall around their lives. Our purpose is not just support—we provide complete online protection and, most importantly, peace of mind.
              </p>
              <p className="about-text">
                Every call we take, every tool we build, every scam we block is driven by one mission: 👉 To give you safety, trust, and freedom in today’s digital age.
              </p>
            </Col>
          </Row>

          {/* Journey & Achievements */}
          <Row className="about-block">
            <Col md={6}>
              <h2 className="about-heading">Our Journey & Achievements</h2>
              <p className="about-text">
                For nearly a decade, Saffron Guru has stood as a trusted partner in protecting homes and small businesses from online threats and scams. Our journey began with a simple goal: to provide honest, reliable IT support to seniors, veterans, and families who needed someone they could trust. Over the years, that mission has grown into a full commitment to complete online protection.
              </p>
              <ul className="about-list">
                <li>⭐ Rated 5-Star IT Support by our customers.</li>
                <li>✅ Achieved a 99.9% customer satisfaction rate—a testament to our dedication and care.</li>
                <li>🌎 Expanded from the United States into Canada, serving thousands of loyal clients.</li>
                <li>✈️ Proudly trusted by retirees abroad in Mexico, Panama, Costa Rica, and beyond.</li>
              </ul>
              <p className="about-text">
                What drives us forward is not just technology—it’s the trust and loyalty of the people we protect. That’s our greatest achievement.
              </p>
            </Col>
            <Col md={6}>
              <img
                src="/Hero/OurJourney.WebP"
                alt="Achievements"
                className="about-image"
                loading="lazy"
              />
            </Col>
          </Row>

          {/* Our Values */}
          <Row className="about-block reverse">
            <Col md={6}>
              <img
                src="/Hero/OurValue.WebP"
                alt="Our Values"
                className="OurValue"
                loading="lazy"
              />
            </Col>
            <Col md={6}>
              <h2 className="about-heading">Our Values</h2>
              <ul className="about-list">
                <li>Trust – You let us into your digital world, and we treat that trust like gold.</li>
                <li>Honesty – No confusing jargon, no hidden tricks. Just plain, clear help you can believe in.</li>
                <li>Safety – Every scam we block, every device we protect, is one less worry on your shoulders.</li>
                <li>Care – We don’t see “tickets” or “cases.” We see mothers, fathers, grandparents, veterans—real people who deserve patience, kindness, and protection.</li>
              </ul>
              <p className="about-text">
                These principles are why our customers call us not just their IT team, but their lifeline in the digital world.
              </p>
            </Col>
          </Row>

          {/* What We Offer */}
          <Row className="about-block">
            <Col md={6}>
              <h2 className="about-heading">What We Offer Today</h2>
              <ul className="about-list">
                <li>🛡️ NetHaven™ – AI-powered parental control tool</li>
                <li>🔐 DefendMePro™ – Total Scam & Security Shield</li>
                <li>💡 Personal Guidance – Stay ahead of scams with expert tips</li>
                <li>🤝 Trusted IT Support – For nearly a decade of dependable care</li>
              </ul>
              <p className="about-text">
                At Saffron Guru, protection isn’t just a service—it’s a promise.
              </p>
            </Col>
            <Col md={6}>
              <img
                src="/Hero/WhatWeOfferToday.WebP"
                alt="What We Offer"
                className="WhatWeOfferToday"
                loading="lazy"
              />
            </Col>
          </Row>

          {/* Vision */}
          <Row className="about-block reverse">
            <Col md={6}>
              <img
                src="/Hero/OurVision.WebP"
                alt="Our Vision"
                className="OurVision"
                loading="lazy"
              />
            </Col>
            <Col md={6}>
              <h2 className="about-heading">Our Vision for the Future</h2>
              <p className="about-text">
                In today’s fast, AI-driven world, digital safety is no longer optional—it’s essential. Cyberattacks and scams are now powered by AI-driven tools that adapt in real time, impersonate trusted voices with deepfakes, and launch highly personalized fraud attempts.
              </p>
              <p className="about-text">
                Our vision is clear: • To protect every home and small business. • To stop cyberattacks and scams before harm. • To reach millions of families across North America and beyond.
              </p>
              <p className="about-text">
                Next April, Saffron Guru will celebrate 10 years of service—a decade of honest, reliable IT support with a commitment to 100% customer satisfaction.
              </p>

              {/* 👇 Merged BBB Badge + Text */}
              <div className="about-text trust-bbb">
                <span>
                  We’re proud to be BBB Accredited — a recognition of our long-standing commitment to honesty, transparency, and trust.
                </span>
                <a
                  href="https://www.bbb.org/us/tx/irving/profile/computer-software/saffron-guru-0875-91317606/#sealclick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trust-link-block"
                >
                  <img
                    src="/Hero/cdn.WebP"
                    alt="BBB A+ Rated"
                    className="trust-full-image"
                    loading="lazy"
                  />
                </a>
              </div>

              <p className="about-text">
                👉 Call us today and let Saffron Guru be your trusted partner in the digital world. Toll Free +1 844-313-4987
              </p>
            </Col>
          </Row>

        </Container>
      </section>

      <AllSection />
    </>
  );
};

export default About;
