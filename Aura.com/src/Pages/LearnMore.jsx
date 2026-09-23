import React from "react";
import { Link } from "react-router-dom";
import AppNavbar from "../Components/AppNavbar";
import AllSection from "../Components/AllSection";
import "./LearnMore.css";

const LearnMore = () => {
  const protectionFeatures = [
    {
      icon: "🛡️",
      title: "Identity Theft Protection",
      text: "Dark Web Monitoring helps keep watch for exposed personal information.",
    },
    {
      icon: "🚫",
      title: "Real-Time Scam Detection",
      text: "Get protection against suspicious scams, links, messages and online threats.",
    },
    {
      icon: "🔐",
      title: "Password Vault",
      text: "Secure your important logins and keep your passwords organized.",
    },
    {
      icon: "🛰️",
      title: "VPN Protection",
      text: "Add another layer of privacy and protection while browsing online.",
    },
    {
      icon: "🖥️",
      title: "Expert Device Cleanup",
      text: "Get help with viruses, malware and spyware affecting your devices.",
    },
    {
      icon: "📞",
      title: "Spam Call & Text Blocker",
      text: "Reduce unwanted calls and messages that could put you at risk.",
    },
    {
      icon: "💸",
      title: "Financial Monitoring",
      text: "Monitor financial accounts and receive alerts about suspicious activity.",
    },
    {
      icon: "👨‍💻",
      title: "Human IT Support",
      text: "U.S.-Based human IT support available 7 days a week when you need help.",
    },
  ];

  return (
    <>
      <AppNavbar />

      <main className="learn-more-page">

        {/* =========================================
            HERO SECTION
        ========================================= */}

        <section className="learn-hero">

          <div className="learn-hero-glow learn-glow-one"></div>
          <div className="learn-hero-glow learn-glow-two"></div>

          <div className="learn-grid-pattern"></div>

          <div className="learn-hero-container">

            {/* =====================================
                HERO CONTENT
            ===================================== */}

            <div className="learn-hero-content">

              <div className="learn-eyebrow">
                <span className="learn-eyebrow-dot"></span>
                DEFENDME PRO™ DIGITAL PROTECTION
              </div>

              <h1 className="learn-hero-title">
                More Than Protection.
                <span> Real Digital Support.</span>
              </h1>

              <p className="learn-hero-description">
                DefendMe Pro™ is designed to help protect you from today's
                digital threats while giving you access to human support when
                technology gets complicated.
              </p>

              <div className="learn-hero-pills">
                <span>🛡️ Security</span>
                <span>🚨 Scam Protection</span>
                <span>👨‍💻 Human Support</span>
              </div>

            </div>


            {/* =====================================
                HERO IMAGE
            ===================================== */}

            <div className="learn-hero-visual">

              <div className="learn-orbit orbit-one"></div>
              <div className="learn-orbit orbit-two"></div>

              <div className="learn-shield-card">

                <div className="learn-shield-glow"></div>

                {/* DEFENDME PRO IMAGE */}

                <div className="learn-product-image-wrap">

                  <img
                    src="/Products/LearnMore.webp"
                    alt="DefendMe Pro"
                    className="learn-product-image"
                  />

                </div>

                {/* STATUS */}

                <div className="learn-shield-status">
                  <span></span>
                  Protection Ready
                </div>

                <div className="learn-shield-title">
                  DefendMe Pro™
                </div>

                <div className="learn-shield-subtitle">
                  Your Digital Protection Layer
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================
            INTRODUCTION
        ========================================= */}

        <section className="learn-intro-section">

          <div className="learn-content-container">

            <div className="learn-section-label">
              WHY DEFENDME PRO™
            </div>

            <h2 className="learn-section-title">
              Antivirus is only one piece of
              <span> digital protection.</span>
            </h2>

            <div className="learn-intro-grid">

              <div className="learn-intro-main">

                <p>
                  In an era where online scams, phishing attacks, and identity
                  theft have become a part of everyday life, basic antivirus
                  solutions are no longer enough.
                </p>

                <p>
                  <strong>
                    DefendMe Pro™ is a next-generation protection system
                  </strong>{" "}
                  designed not just to block threats — but to walk with you
                  through them.
                </p>

                <p>
                  From real-time scam alerts to human-powered IT assistance,
                  DefendMe Pro™ empowers you with tools and guidance to
                  navigate the digital world safely.
                </p>

              </div>

              <div className="learn-intro-side">

                <div className="learn-mini-card">
                  <span className="learn-mini-icon">🔎</span>

                  <div>
                    <strong>Detect</strong>
                    <p>Identify suspicious activity.</p>
                  </div>
                </div>

                <div className="learn-mini-card">
                  <span className="learn-mini-icon">🛡️</span>

                  <div>
                    <strong>Protect</strong>
                    <p>Reduce your digital risk.</p>
                  </div>
                </div>

                <div className="learn-mini-card">
                  <span className="learn-mini-icon">👨‍💻</span>

                  <div>
                    <strong>Support</strong>
                    <p>Get help when technology gets difficult.</p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================
            PROTECTION FEATURES
        ========================================= */}

        <section className="learn-features-section">

          <div className="learn-content-container">

            <div className="learn-features-heading">

              <div className="learn-section-label">
                WHAT YOU GET
              </div>

              <h2 className="learn-section-title">
                One protection system.
                <span> Multiple layers of defense.</span>
              </h2>

              <p>
                Most software stops at scanning for viruses. DefendMe Pro™
                goes further with protection, privacy, monitoring and human
                assistance.
              </p>

            </div>


            <div className="learn-feature-grid">

              {protectionFeatures.map((feature, index) => (

                <div
                  className="learn-feature-card"
                  key={index}
                >

                  <div className="learn-feature-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="learn-feature-icon">
                    {feature.icon}
                  </div>

                  <h3>
                    {feature.title}
                  </h3>

                  <p>
                    {feature.text}
                  </p>

                  <div className="learn-feature-line"></div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =========================================
            HUMAN SUPPORT
        ========================================= */}

        <section className="learn-support-section">

          <div className="learn-support-container">

            <div className="learn-support-icon">
              👨‍💻
            </div>

            <div className="learn-support-content">

              <span className="learn-support-label">
                HUMAN HELP WHEN YOU NEED IT
              </span>

              <h2>
                We protect you.
                <span> And we support you.</span>
              </h2>

              <p>
                Whether you're dealing with a hacked account, suspicious phone
                call, or simply setting up your new laptop — our experts are
                here to help.
              </p>

              <div className="learn-support-points">

                <span>✓ Security guidance</span>
                <span>✓ Scam assistance</span>
                <span>✓ Device support</span>
                <span>✓ 7 days a week</span>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================
            FINAL CTA
        ========================================= */}

        <section className="learn-final-cta">

          <div className="learn-final-glow"></div>

          <div className="learn-final-content">

            <div className="learn-final-badge">
              ✦ DIGITAL PROTECTION, REIMAGINED
            </div>

            <h2>
              It's not just software.
              <span> It's your digital bodyguard.</span>
            </h2>

            <p>
              Trusted by seniors, families, and professionals across the
              country. Discover what DefendMe Pro™ can do for your digital
              life.
            </p>

            <Link
              to="/DefendPro"
              className="learn-explore-btn"
            >
              <span>Explore DefendMe Pro™</span>
              <span className="learn-explore-arrow">→</span>
            </Link>

          </div>

        </section>

      </main>

      <AllSection />
    </>
  );
};

export default LearnMore;