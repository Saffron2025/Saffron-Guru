import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ProtectionShowcase.css';

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
          if (e.isIntersecting) el.classList.add('pshowcase-in');
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
      card.style.transform = `rotateX(${(-dy * 6).toFixed(2)}deg) rotateY(${(dx * 8).toFixed(2)}deg)`;
    };
    const onLeave = () => (card.style.transform = 'rotateX(0deg) rotateY(0deg)');

    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
    return () => {
      card.removeEventListener('mousemove', onMove);
      card.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  // Cursor-reactive glow effect for .pshowcase-link
  useEffect(() => {
    const links = document.querySelectorAll('.pshowcase-link');
    const handleMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      e.currentTarget.style.setProperty('--x', `${x}%`);
      e.currentTarget.style.setProperty('--y', `${y}%`);
    };
    links.forEach((el) => el.addEventListener('pointermove', handleMove));

    return () => {
      links.forEach((el) => el.removeEventListener('pointermove', handleMove));
    };
  }, []);

  return (
    <section ref={rootRef} className="pshowcase-section">
      {/* Background blobs & grain */}
      <div className="pshowcase-bg">
        <div className="pshowcase-blob blob-a" />
        <div className="pshowcase-blob blob-b" />
        <div className="pshowcase-grain" />
      </div>

      {/* 🔹 Top-left outside container */}
      <div className="pshowcase-top-left">
        Get Protected Now With DefendMePro™
      </div>

      <div className="pshowcase-container">
        {/* LEFT SIDE */}
        <div className="pshowcase-left">
          {/* Paragraph stays inside container */}
          <div className="pshowcase-text-top">
            <h3 className="pshowcase-kicker">🚫 Not an Antivirus</h3>
            <p>
              Antivirus Can’t Stop Scammers.<br />
              <strong className="highlight">DefendMePro™ Protects You</strong> From Real Threats — Scams, Fraud, Identity Theft, Common Hacking Attempts, and Online Takeovers.<br />
              <span className="pshowcase-sub">With Real Human IT Support, Available 7 Days a Week.</span>
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

            {/* Floating badges */}
            <div className="pshowcase-badge badge-1">🛡️ Real Protection</div>
            <div className="pshowcase-badge badge-2">💬 Human Help 7 Days</div>
            <div className="pshowcase-badge badge-3">⚡ Instant Response</div>

            {/* Sparkles */}
            <span className="sparkle s1" />
            <span className="sparkle s2" />
            <span className="sparkle s3" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="pshowcase-right">
          <h2 className="pshowcase-title fancy-title">
            <img src="/Hero/shield.WebP" alt="Shield" className="pshowcase-inline-icon" />
            <span>DefendMePro™ — Complete Digital Protection</span>
            <span className="underline-anim">with Live Assistance When You Need It. ✅</span>
          </h2>

          <ul className="pshowcase-list">
            <li><Link to="/DefendPro?item=identity-theft" className="pshowcase-link"><span className="pshowcase-emoji">👤</span><span>Identity Theft Protection</span></Link></li>
            <li><Link to="/DefendPro?item=fraud-detection" className="pshowcase-link"><span className="pshowcase-emoji">⚠️</span><span>Fraud Detection</span></Link></li>
            <li><Link to="/DefendPro?item=scam-protection" className="pshowcase-link"><span className="pshowcase-emoji">🚫</span><span>Scam Protection</span></Link></li>
            <li><Link to="/DefendPro?item=scam-alerts" className="pshowcase-link"><span className="pshowcase-emoji">🔔</span><span>Scam Alerts Hub</span></Link></li>
            <li><Link to="/DefendPro?item=financial-security" className="pshowcase-link"><span className="pshowcase-emoji">💰</span><span>Financial Security</span></Link></li>
            <li><Link to="/DefendPro?item=password-manager" className="pshowcase-link"><span className="pshowcase-emoji">🔑</span><span>Password Manager</span></Link></li>
            <li><Link to="/DefendPro?item=antivirus" className="pshowcase-link"><span className="pshowcase-emoji">🖥️</span><span>Antivirus & Device Security</span></Link></li>
            <li><Link to="/DefendPro?item=vpn" className="pshowcase-link"><span className="pshowcase-emoji">🌐</span><span>VPN & Online Privacy</span></Link></li>
            <li><Link to="/DefendPro?item=spam-call" className="pshowcase-link"><span className="pshowcase-emoji">📞</span><span>Spam Call Protection</span></Link></li>
            <li><Link to="/DefendPro?item=human-support" className="pshowcase-link"><span className="pshowcase-emoji">👤</span><span>U.S.-Based Human Support</span></Link></li>
          </ul>

          <div className="pshowcase-cta">
            <Link className="pshowcase-learn" to="/LearnMore">📘 Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtectionShowcase;
