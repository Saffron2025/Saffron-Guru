import React from "react";
import { useNavigate } from "react-router-dom";
import AppNavbar from "../Components/AppNavbar";
import AllSection from "../Components/AllSection";
import "./LiveSupport.css";

const LiveSupport = () => {
  const navigate = useNavigate();

  const openLiveChat = () => {
    if (window.jivo_api) {
      window.jivo_api.open();
    } else {
      alert("Chat service is loading... please wait a moment.");
    }
  };

  return (
    <>
      <AppNavbar />

      <main className="live-support-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="support-hero">

          <div className="support-hero-badge">
            <span className="hero-status-dot"></span>
            LIVE IT SUPPORT • 7 DAYS A WEEK
          </div>

          <h1 className="support-title">
            Live IT Support &
            <span> Online Safety Assistance</span>
          </h1>

          <p className="support-subtitle">
            Our mission is to help protect seniors, families, and small
            businesses from the growing risks of online scams, fraud,
            and digital threats.
          </p>

          <p className="support-intro">
            Our comprehensive security solutions provide multiple layers
            of protection across your devices, browsers, accounts, and
            everyday online activity. But technology can never replace
            human judgment completely. If something still does not look
            right, feels suspicious, or simply leaves you unsure, call us.
          </p>

          <div className="support-hero-actions">

            <button
              className="support-btn support-primary-btn"
              onClick={openLiveChat}
            >
              <span className="btn-icon">💬</span>
              Start Live Chat
            </button>

            <button
              className="support-btn support-secondary-btn"
              onClick={() => navigate("/contact")}
            >
              <span className="btn-icon">📞</span>
              Call Support
            </button>

          </div>

          <div className="support-phone">
            <span className="phone-label">
              Toll-Free Support
            </span>

            <a href="tel:8443134987">
              844-313-4987
            </a>
          </div>

        </section>


        {/* =====================================================
            SUPPORT SECTION
        ===================================================== */}

        <section className="support-container">

          <div className="support-section-heading">

            <span className="section-kicker">
              HOW WE CAN HELP
            </span>

            <h2>
              Real People. Clear Answers. Practical Support.
            </h2>

            <p>
              Tell us what is happening and our team will help you
              understand the issue and guide you through the next steps.
            </p>

          </div>


          {/* =====================================================
              SUPPORT CARDS
          ===================================================== */}

          <div className="support-card-grid">

            {/* LIVE CHAT */}

            <article className="support-card">

              <div className="support-card-icon">
                💬
              </div>

              <div className="support-card-content">

                <span className="support-card-label">
                  FAST ASSISTANCE
                </span>

                <h2>
                  Live Chat Support
                </h2>

                <p>
                  Chat directly with an experienced Saffron Guru IT
                  support professional for assistance with computers,
                  printers, email, Wi-Fi, software, account security,
                  suspicious calls, unfamiliar pop-ups, and other
                  technology or online safety concerns.
                </p>

                <p>
                  We will listen carefully, explain the issue in clear
                  language, and guide you through the next steps.
                </p>

                <button
                  className="support-btn card-btn"
                  onClick={openLiveChat}
                >
                  Start Live Chat
                  <span>→</span>
                </button>

              </div>

            </article>


            {/* PHONE */}

            <article className="support-card">

              <div className="support-card-icon">
                📞
              </div>

              <div className="support-card-content">

                <span className="support-card-label">
                  TALK TO OUR TEAM
                </span>

                <h2>
                  Toll-Free Phone Support
                </h2>

                <p>
                  Call our toll-free number and speak directly with
                  the Saffron Guru IT support team.
                </p>

                <p>
                  We troubleshoot computers, printers, Wi-Fi and network
                  problems, email, smartphones and tablets, accounting
                  software, business applications, and other technology
                  used in your home or business.
                </p>

                <p>
                  You can also call us about suspicious pop-ups,
                  unusual account activity, unsafe downloads, or a
                  DefendMe Pro™ security alert.
                </p>

                <button
                  className="support-btn card-btn"
                  onClick={() => navigate("/contact")}
                >
                  Call Now
                  <span>→</span>
                </button>

              </div>

            </article>


            {/* EMAIL */}

            <article className="support-card">

              <div className="support-card-icon">
                ✉️
              </div>

              <div className="support-card-content">

                <span className="support-card-label">
                  WRITTEN ASSISTANCE
                </span>

                <h2>
                  Email Support
                </h2>

                <p>
                  Need help with a technical issue, an online security
                  concern, or just have a question?
                </p>

                <p>
                  Saffron Guru is available seven days a week by phone
                  and chat. If email is more convenient, send us the
                  details and our team will respond promptly with clear,
                  practical assistance.
                </p>

                <button
                  className="support-btn card-btn"
                  onClick={() => navigate("/contact")}
                >
                  Send Email
                  <span>→</span>
                </button>

              </div>

            </article>

          </div>


          {/* =====================================================
              EMERGENCY HELP
          ===================================================== */}

          <section className="emergency-section">

            <div className="emergency-header">

              <div className="emergency-icon">
                🚨
              </div>

              <div>
                <span className="emergency-kicker">
                  URGENT ASSISTANCE
                </span>

                <h2>
                  Emergency Help
                </h2>
              </div>

            </div>

            <div className="emergency-body">

              <p>
                Need urgent technical or online security help and cannot
                reach us right away? Our specialists may be assisting
                other customers, or you may be calling outside normal
                support hours. Leave a voicemail on our toll-free number
                and we will return your call as soon as possible.
              </p>

              <div className="emergency-warning">

                <span className="warning-icon">
                  ⚠️
                </span>

                <div>

                  <strong>
                    If something looks suspicious:
                  </strong>

                  <p>
                    Do not click links, make payments, provide personal
                    information, or allow anyone access to your device
                    until you are sure it is legitimate.
                  </p>

                </div>

              </div>

              <p>
                If you receive a suspicious email, invoice, text message,
                security warning, or anything online that does not look
                right, leave us a message and we will help you review it.
              </p>

              <p>
                If unexpected pop-ups, alarming warnings, or persistent
                ads appear on your computer or mobile device, avoid
                interacting with them. If the screen becomes locked or
                difficult to control, shut the device down and wait for
                assistance.
              </p>

              <p>
                If you believe you may already have shared information,
                sent money, or allowed someone access to your device,
                mention that clearly in your voicemail so we can
                prioritize the situation and help you take the
                appropriate steps.
              </p>

              <div className="emergency-actions">

                <a
                  href="tel:8443134987"
                  className="emergency-btn"
                >
                  📞 Call 844-313-4987
                </a>

                <button
                  className="emergency-contact-btn"
                  onClick={() => navigate("/contact")}
                >
                  Contact Support →
                </button>

              </div>

            </div>

          </section>


          {/* =====================================================
              SECURITY NOTE
          ===================================================== */}

          <section className="security-note">

            <div className="security-note-icon">
              🛡️
            </div>

            <div className="security-note-content">

              <span>
                NOTE
              </span>

              <p>
                Security extensions are installed across supported
                browsers to help block malicious pop-ups and unsafe
                content. In some cases, an extension may need to be
                temporarily disabled for a legitimate website. If a
                suspicious pop-up or warning appears during that time
                and you cannot close it safely, do not click anything.
                Shut down the device and contact us for assistance.
              </p>

            </div>

          </section>


          {/* =====================================================
              TRUSTED PARTNER
          ===================================================== */}

          <section className="support-brand-section">

            <div className="brand-left">

              <div className="brand-logo-wrapper">

                <img
                  src="/Products/SaffronGuruLogo.gif"
                  alt="Saffron Guru Logo"
                  className="saffronGuru-logo-support"
                />

              </div>

            </div>

            <div className="brand-right">

              <span className="section-kicker">
                WHY SAFFRON GURU
              </span>

              <h2>
                Your Trusted IT & Digital Security Partner
              </h2>

              <p>
                Helping seniors, families, and small businesses stay
                connected and protected with expert IT support, advanced
                online security solutions, and real human guidance
                available seven days a week.
              </p>

              <button
                className="brand-contact-btn"
                onClick={() => navigate("/contact")}
              >
                Get Support
                <span>→</span>
              </button>

            </div>

          </section>


          {/* =====================================================
              PROTECTING SENIORS
          ===================================================== */}

          <section className="support-footer-note">

            <div className="footer-note-icon">
              🛡️
            </div>

            <span className="section-kicker">
              OUR COMMITMENT
            </span>

            <h2>
              Protecting Seniors Across America
            </h2>

            <p>
              Every day, older adults are targeted by increasingly
              convincing scam calls, fraudulent emails, deceptive
              pop-ups, and other online threats. DefendMe Pro™ was built
              to help stand between our customers and those risks,
              combining advanced security solutions with direct access
              to real people who can step in when something seems
              suspicious or uncertain.
            </p>

            <p>
              You are never expected to face these situations alone.
              Over the years, Saffron Guru has helped thousands of
              families and small businesses navigate technology and
              online security with greater confidence, and we are here
              whenever you need us.
            </p>


            {/* =================================================
                BADGE IMAGES
            ================================================= */}

            <div className="support-badges">

              {/* SERVING SINCE 2016 */}

              <div className="support-badge">
                <img
                  src="/Products/serving-badge.webp"
                  alt="Serving Since 2016"
                  className="support-badge-image"
                />
              </div>


              {/* REAL HUMAN IT SUPPORT */}

              <div className="support-badge">
                <img
                  src="/Products/real-human-it-support.webp"
                  alt="Real Human IT Support"
                  className="support-badge-image"
                />
              </div>


              {/* 7 DAYS A WEEK */}

              <div className="support-badge">
                <img
                  src="/Products/available-7-days.webp"
                  alt="Available 7 Days a Week"
                  className="support-badge-image"
                />
              </div>

            </div>

          </section>

        </section>

      </main>

      <AllSection />
    </>
  );
};

export default LiveSupport;