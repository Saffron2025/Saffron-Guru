import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./ProtectionShowcase.css";

const ProtectionShowcase = () => {
  const rootRef = useRef(null);

  // 🔹 Scroll reveal
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) el.classList.add("pshowcase-in");
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // 🔹 Random floating glow dots
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    for (let i = 0; i < 12; i++) {
      const dot = document.createElement("span");
      dot.className = "glow-dot";
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.animationDuration = `${8 + Math.random() * 6}s`;
      dot.style.animationDelay = `${Math.random() * 5}s`;
      el.appendChild(dot);
    }
  }, []);

  return (
    <section ref={rootRef} className="pshowcase-wrapper">
      {/* Hero Intro */}
      <div className="pshowcase-hero">
        <h1>
          ✨ Secure Your World with{" "}
          <span className="highlight">DefendMePro™</span>
        </h1>
        <p>
          <strong>Complete Digital Protection</strong> with{" "}
          <span className="highlight">Live Assistance</span> when you need it ✅
        </p>
      </div>

      <div className="pshowcase-container">
        {/* LEFT SIDE */}
        <div className="pshowcase-left">
          {/* Image first */}
          <div className="pshowcase-image-card">
            <img
              src="/Hero/Digital.avif"
              alt="Protection Illustration"
              className="hero-image"
              loading="lazy"
            />
            <div className="badge">🛡 Real Protection</div>
            <div className="badge">💬 Human Help</div>
            <div className="badge">⚡ Instant Action</div>
          </div>

          {/* Intro after image */}
          <div className="pshowcase-intro">
            <h3 className="kicker">🚫 Beyond Antivirus</h3>
            <p>
              Antivirus Can’t Stop <span className="highlight">Scammers</span>.
              <br />
              <strong className="highlight">DefendMePro™ Protects You</strong>{" "}
              from <span className="highlight">Scams</span>,{" "}
              <span className="highlight">Fraud</span>,{" "}
              <span className="highlight">Identity Theft</span>,{" "}
              <span className="highlight">Hacking</span>, and{" "}
              <span className="highlight">Online Takeovers</span>.
              <br />
              <span className="sub">
                With <span className="highlight">Human IT Experts</span>,
                available 7 days a week.
              </span>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="pshowcase-right">
          <ul className="feature-list">
            <li><Link to="/DefendPro?item=identity-theft">👤 Identity Theft</Link></li>
            <li><Link to="/DefendPro?item=fraud-detection">⚠️ Fraud Detection</Link></li>
            <li><Link to="/DefendPro?item=scam-protection">🚫 Scam Protection</Link></li>
            <li><Link to="/DefendPro?item=scam-alerts">🔔 Scam Alerts</Link></li>
            <li><Link to="/DefendPro?item=financial-security">💰 Financial Security</Link></li>
            <li><Link to="/DefendPro?item=password-manager">🔑 Password Manager</Link></li>
            <li><Link to="/DefendPro?item=antivirus">🖥 Device Security</Link></li>
            <li><Link to="/DefendPro?item=vpn">🌐 VPN & Privacy</Link></li>
            <li><Link to="/DefendPro?item=spam-call">📞 Spam Call Protection</Link></li>
            <li><Link to="/DefendPro?item=human-support">👤 U.S. Based Support</Link></li>
          </ul>

          <div className="cta">
            <Link to="/LearnMore" className="cta-btn">
              🚀 Explore Full Protection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtectionShowcase;
