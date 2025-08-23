import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./ProtectionShowcase.css";

const ProtectionShowcase = () => {
  const rootRef = useRef(null);
  const imgCardRef = useRef(null);

  // Scroll reveal animation
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) el.classList.add("pshowcase-in");
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // 3D tilt effect
  useEffect(() => {
    const card = imgCardRef.current;
    if (!card) return;
    const onMove = (e) => {
      const r = card.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / (r.width / 2);
      const dy = (e.clientY - cy) / (r.height / 2);
      card.style.transform = `rotateX(${(-dy * 6).toFixed(
        2
      )}deg) rotateY(${(dx * 8).toFixed(2)}deg) scale(1.03)`;
    };
    const onLeave = () =>
      (card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)");

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Cursor glow on links
  useEffect(() => {
    const links = document.querySelectorAll(".pshowcase-link");
    const handleMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      e.currentTarget.style.setProperty("--x", `${x}%`);
      e.currentTarget.style.setProperty("--y", `${y}%`);
    };
    links.forEach((el) => el.addEventListener("pointermove", handleMove));

    return () => {
      links.forEach((el) =>
        el.removeEventListener("pointermove", handleMove)
      );
    };
  }, []);

  return (
    <section ref={rootRef} className="pshowcase-section">
      {/* Background animated aurora */}
      <div className="pshowcase-bg">
        <div className="aurora aurora-1" />
        <div className="aurora aurora-2" />
        <div className="pshowcase-grain" />
      </div>

      <div className="pshowcase-top-left">
        ✨ Secure Your World with <span className="highlight">DefendMePro™</span>
      </div>

      <div className="pshowcase-container">
        {/* LEFT SIDE */}
        <div className="pshowcase-left">
          <div className="pshowcase-text-top">
            <h3 className="pshowcase-kicker">🚫 Beyond Antivirus</h3>
            <p>
              Antivirus Can’t Stop <span className="highlight">Scammers</span>.
              <br />
              <strong className="highlight">DefendMePro™ Protects You</strong>{" "}
              from Real Threats — <span className="highlight">Scams</span>,{" "}
              <span className="highlight">Fraud</span>,{" "}
              <span className="highlight">Identity Theft</span>,{" "}
              <span className="highlight">Hacking Attempts</span>, and{" "}
              <span className="highlight">Online Takeovers</span>.
              <br />
              <span className="pshowcase-sub">
                With <span className="highlight">Human IT Experts</span>,
                available 7 days a week.
              </span>
            </p>
          </div>

          <div ref={imgCardRef} className="pshowcase-card">
            <div className="pshowcase-ring" />
            <img
              src="/Hero/Digital.WebP"
              alt="Protection Illustration"
              className="pshowcase-hero"
              loading="lazy"
            />

            <div className="pshowcase-badge badge-1">🛡 Real Protection</div>
            <div className="pshowcase-badge badge-2">💬 Human Help</div>
            <div className="pshowcase-badge badge-3">⚡ Instant Action</div>

            <span className="sparkle s1" />
            <span className="sparkle s2" />
            <span className="sparkle s3" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="pshowcase-right">
          <h2 className="pshowcase-title">
  <span className="pshowcase-title-badge">
    <img
      src="/Hero/shield.WebP"
      alt="Shield"
      className="pshowcase-inline-icon"
    />
    <span className="highlight">Complete Digital Protection</span> with{" "}
    <span className="highlight">Live Assistance</span> When You Need It ✅
  </span>
</h2>


          <ul className="pshowcase-list">
            <li>
              <Link to="/DefendPro?item=identity-theft" className="pshowcase-link">
                👤 <span className="highlight">Identity Theft</span>
              </Link>
            </li>
            <li>
              <Link to="/DefendPro?item=fraud-detection" className="pshowcase-link">
                ⚠️ <span className="highlight">Fraud Detection</span>
              </Link>
            </li>
            <li>
              <Link to="/DefendPro?item=scam-protection" className="pshowcase-link">
                🚫 <span className="highlight">Scam Protection</span>
              </Link>
            </li>
            <li>
              <Link to="/DefendPro?item=scam-alerts" className="pshowcase-link">
                🔔 <span className="highlight">Scam Alerts</span>
              </Link>
            </li>
            <li>
              <Link to="/DefendPro?item=financial-security" className="pshowcase-link">
                💰 <span className="highlight">Financial Security</span>
              </Link>
            </li>
            <li>
              <Link to="/DefendPro?item=password-manager" className="pshowcase-link">
                🔑 <span className="highlight">Password Manager</span>
              </Link>
            </li>
            <li>
              <Link to="/DefendPro?item=antivirus" className="pshowcase-link">
                🖥 <span className="highlight">Device Security</span>
              </Link>
            </li>
            <li>
              <Link to="/DefendPro?item=vpn" className="pshowcase-link">
                🌐 <span className="highlight">VPN & Privacy</span>
              </Link>
            </li>
            <li>
              <Link to="/DefendPro?item=spam-call" className="pshowcase-link">
                📞 <span className="highlight">Spam Call Protection</span>
              </Link>
            </li>
            <li>
              <Link to="/DefendPro?item=human-support" className="pshowcase-link">
                👤 <span className="highlight">U.S. Based Support</span>
              </Link>
            </li>
          </ul>

          <div className="pshowcase-cta">
            <Link className="pshowcase-learn" to="/LearnMore">
              🚀 Explore Full Protection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtectionShowcase;
