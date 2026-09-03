import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./ProtectionShowcase.css";

const ProtectionShowcase = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("pshowcase-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const dots = [];

    for (let i = 0; i < 22; i++) {
      const dot = document.createElement("span");
      dot.className = "ps-glow-dot";

      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.animationDelay = `${Math.random() * 7}s`;
      dot.style.animationDuration = `${6 + Math.random() * 7}s`;

      el.appendChild(dot);
      dots.push(dot);
    }

    return () => {
      dots.forEach((dot) => dot.remove());
    };
  }, []);

  const features = [
    {
      icon: "👤",
      title: "Identity Theft",
      item: "identity-theft",
    },
    {
      icon: "⚠️",
      title: "Fraud Detection",
      item: "fraud-detection",
    },
    {
      icon: "🚫",
      title: "Scam Protection",
      item: "scam-protection",
    },
    {
      icon: "🔔",
      title: "Scam Alerts",
      item: "scam-alerts",
    },
    {
      icon: "💰",
      title: "Financial Security",
      item: "financial-security",
    },
    {
      icon: "🔑",
      title: "Password Manager",
      item: "password-manager",
    },
    {
      icon: "🖥️",
      title: "Device Security",
      item: "antivirus",
    },
    {
      icon: "🌐",
      title: "VPN & Privacy",
      item: "vpn",
    },
    {
      icon: "📞",
      title: "Spam Call Protection",
      item: "spam-call",
    },
    {
      icon: "🧑‍💻",
      title: "U.S. Based Support",
      item: "human-support",
    },
  ];

  return (
    <section ref={rootRef} className="pshowcase-wrapper">

      {/* Background effects */}
      <div className="ps-grid"></div>
      <div className="ps-orb ps-orb-one"></div>
      <div className="ps-orb ps-orb-two"></div>
      <div className="ps-orb ps-orb-three"></div>

      {/* HERO */}
      <div className="pshowcase-hero">

        <div className="ps-top-badge">
          <span className="ps-badge-icon">🛡</span>
          COMPLETE DIGITAL PROTECTION
          <span className="ps-live-dot"></span>
        </div>

        <h1>
          Secure Your World with
          <br />
          <span>DefendMePro™</span>
        </h1>

        <p>
          Complete Digital Protection with{" "}
          <strong>Live Assistance</strong> when you need it.
          <span className="ps-check">✓</span>
        </p>

        <div className="ps-hero-pills">
          <div className="ps-pill">
            <span>🛡</span>
            Real Protection
          </div>

          <div className="ps-pill">
            <span>👥</span>
            Human Help
          </div>

          <div className="ps-pill">
            <span>⚡</span>
            Instant Action
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="pshowcase-container">

        {/* LEFT */}
        <div className="pshowcase-left">

          {/* IMAGE CARD */}
          <div className="ps-image-frame">

            <div className="ps-corner ps-corner-tl"></div>
            <div className="ps-corner ps-corner-tr"></div>
            <div className="ps-corner ps-corner-bl"></div>
            <div className="ps-corner ps-corner-br"></div>

            <div className="ps-image-glow"></div>

            <img
              src="/Hero/Digital.avif"
              alt="DefendMePro Digital Protection"
              className="hero-image"
              loading="lazy"
            />

            <div className="ps-image-overlay"></div>

            <div className="ps-status-card">
              <span className="ps-status-icon">✓</span>

              <div>
                <small>PROTECTION STATUS</small>
                <strong>ACTIVE & SECURE</strong>
              </div>
            </div>

            <div className="ps-floating-card ps-floating-one">
              🛡 <span>Protected</span>
            </div>

            <div className="ps-floating-card ps-floating-two">
              ⚡ <span>Live Support</span>
            </div>
          </div>

          {/* BEYOND ANTIVIRUS */}
          <div className="pshowcase-intro">

            <div className="ps-section-label">
              🛡 BEYOND ANTIVIRUS
            </div>

            <h2>
              Antivirus Can't Stop
              <br />
              <span>Scammers.</span>
            </h2>

            <p className="ps-intro-main">
              <strong>DefendMePro™</strong> protects you from the
              digital threats that traditional antivirus can't handle.
            </p>

            <div className="ps-threat-tags">
              <span>🚫 Scams</span>
              <span>⚠️ Fraud</span>
              <span>👤 Identity Theft</span>
              <span>💻 Hacking</span>
              <span>🌐 Online Takeovers</span>
            </div>

            <div className="ps-expert-box">
              <div className="ps-expert-icon">👨‍💻</div>

              <div>
                <strong>
                  Human IT Experts
                </strong>

                <p>
                  Real people ready to help you,
                  <br />
                  available 7 days a week.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="pshowcase-right">

          <div className="ps-feature-header">
            <span>✦</span>
            <div>
              <small>ONE SOLUTION</small>
              <h2>What You Get</h2>
            </div>
          </div>

          <div className="feature-list">

            {features.map((feature, index) => (
              <Link
                key={feature.item}
                to={`/DefendPro?item=${feature.item}`}
                className="ps-feature-card"
                style={{
                  "--feature-delay": `${index * 0.06}s`,
                }}
              >
                <div className="ps-feature-icon">
                  {feature.icon}
                </div>

                <span className="ps-feature-title">
                  {feature.title}
                </span>

                <span className="ps-arrow">›</span>
              </Link>
            ))}

          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="ps-bottom-cta">

        <div className="ps-cta-shield">
          🛡
        </div>

        <div className="ps-cta-text">
          <span>Your Digital Life.</span>
          <strong>Secured.</strong>

          <p>
            One solution. Complete peace of mind.
          </p>
        </div>

        <Link
          to="/LearnMore"
          className="ps-cta-button"
        >
          <span>🚀</span>
          Explore Full Protection
          <b>→</b>
        </Link>
      </div>

      {/* TRUST BAR */}
      <div className="ps-trust-bar">

        <div>
          <span>🛡</span>
          <strong>Trusted Protection</strong>
        </div>

        <div>
          <span>👥</span>
          <strong>Human Experts</strong>
        </div>

        <div>
          <span>⚡</span>
          <strong>Instant Resolution</strong>
        </div>

        <div>
          <span>🌐</span>
          <strong>Complete Coverage</strong>
        </div>

      </div>
    </section>
  );
};

export default ProtectionShowcase;


//

// import React, { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import "./ProtectionShowcase.css";

// const ProtectionShowcase = () => {
//   const rootRef = useRef(null);

//   useEffect(() => {
//     const element = rootRef.current;

//     if (!element) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           element.classList.add("pshowcase-visible");
//           observer.unobserve(element);
//         }
//       },
//       {
//         threshold: 0.1,
//       }
//     );

//     observer.observe(element);

//     return () => observer.disconnect();
//   }, []);

//   const features = [
//     {
//       icon: "👤",
//       title: "Identity Theft",
//       item: "identity-theft",
//     },
//     {
//       icon: "⚠️",
//       title: "Fraud Detection",
//       item: "fraud-detection",
//     },
//     {
//       icon: "🚫",
//       title: "Scam Protection",
//       item: "scam-protection",
//     },
//     {
//       icon: "🔔",
//       title: "Scam Alerts",
//       item: "scam-alerts",
//     },
//     {
//       icon: "💰",
//       title: "Financial Security",
//       item: "financial-security",
//     },
//     {
//       icon: "🔑",
//       title: "Password Manager",
//       item: "password-manager",
//     },
//     {
//       icon: "🖥️",
//       title: "Device Security",
//       item: "antivirus",
//     },
//     {
//       icon: "🌐",
//       title: "VPN & Privacy",
//       item: "vpn",
//     },
//     {
//       icon: "📞",
//       title: "Spam Call Protection",
//       item: "spam-call",
//     },
//     {
//       icon: "👨‍💻",
//       title: "U.S. Based Support",
//       item: "human-support",
//     },
//   ];

//   return (
//     <section ref={rootRef} className="pshowcase-wrapper">

//       {/* ================= HEADER ================= */}

//       <div className="pshowcase-header">

//         <span className="pshowcase-label">
//           COMPLETE DIGITAL PROTECTION
//         </span>

//         <h2>
//           Secure Your World with{" "}
//           <span>DefendMePro™</span>
//         </h2>

//         <p>
//           Complete digital protection with{" "}
//           <strong>live assistance</strong> when you need it.
//         </p>

//       </div>


//       {/* ================= MAIN CONTENT ================= */}

//       <div className="pshowcase-container">

//         {/* ================= LEFT COLUMN ================= */}

//         <div className="pshowcase-left">

//           {/* IMAGE */}

//           <div className="pshowcase-image">

//             <img
//               src="/Hero/Digital.avif"
//               alt="DefendMePro Digital Protection"
//               loading="lazy"
//             />

//             <div className="image-status">
//               <span className="status-dot"></span>

//               <div>
//                 <small>Protection Status</small>
//                 <strong>Active & Secure</strong>
//               </div>
//             </div>

//           </div>


//           {/* INTRO CARD */}

//           <div className="pshowcase-intro">

//             <span className="intro-label">
//               BEYOND ANTIVIRUS
//             </span>

//             <h3>
//               Antivirus Can't Stop Scammers.
//             </h3>

//             <p>
//               Traditional antivirus protects your device,
//               but today's digital threats go far beyond
//               viruses and malware.
//             </p>

//             <p>
//               <strong>DefendMePro™</strong> helps protect you
//               from scams, fraud, identity theft, hacking,
//               and online takeovers.
//             </p>


//             {/* Threats */}

//             <div className="threat-list">

//               <span>✓ Scams</span>
//               <span>✓ Fraud</span>
//               <span>✓ Identity Theft</span>
//               <span>✓ Hacking</span>
//               <span>✓ Online Takeovers</span>

//             </div>


//             {/* Human Support */}

//             <div className="expert-box">

//               <div className="expert-icon">
//                 👨‍💻
//               </div>

//               <div>
//                 <strong>
//                   Human IT Experts
//                 </strong>

//                 <p>
//                   Real people available to help you
//                   7 days a week.
//                 </p>
//               </div>

//             </div>

//           </div>

//         </div>


//         {/* ================= RIGHT COLUMN ================= */}

//         <div className="pshowcase-right">

//           <div className="features-heading">

//             <span>
//               WHAT YOU GET
//             </span>

//             <h3>
//               Complete Protection
//             </h3>

//             <p>
//               Multiple layers of protection in one solution.
//             </p>

//           </div>


//           {/* FEATURE LIST */}

//           <div className="feature-list">

//             {features.map((feature) => (

//               <Link
//                 key={feature.item}
//                 to={`/DefendPro?item=${feature.item}`}
//                 className="feature-card"
//               >

//                 <span className="feature-icon">
//                   {feature.icon}
//                 </span>

//                 <span className="feature-name">
//                   {feature.title}
//                 </span>

//                 <span className="feature-arrow">
//                   →
//                 </span>

//               </Link>

//             ))}

//           </div>

//         </div>

//       </div>


//       {/* ================= CTA ================= */}

//       <div className="pshowcase-cta">

//         <div className="cta-content">

//           <div className="cta-icon">
//             🛡️
//           </div>

//           <div>

//             <h3>
//               Your Digital Life.{" "}
//               <span>Protected.</span>
//             </h3>

//             <p>
//               One solution for complete digital peace of mind.
//             </p>

//           </div>

//         </div>


//         <Link
//           to="/LearnMore"
//           className="cta-button"
//         >
//           Explore Full Protection
//           <span>→</span>
//         </Link>

//       </div>


//       {/* ================= TRUST ITEMS ================= */}

//       <div className="trust-items">

//         <div>
//           <span>🛡️</span>
//           <p>Trusted Protection</p>
//         </div>

//         <div>
//           <span>👨‍💻</span>
//           <p>Human IT Experts</p>
//         </div>

//         <div>
//           <span>⚡</span>
//           <p>Fast Assistance</p>
//         </div>

//         <div>
//           <span>🔒</span>
//           <p>Privacy Focused</p>
//         </div>

//       </div>

//     </section>
//   );
// };

// export default ProtectionShowcase;