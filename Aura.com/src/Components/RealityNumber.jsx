// src/Components/RealityNumber.jsx

import React from 'react';
import ExpandableSection from './ExpandableSection';
import './DefendMeBuilt.css';

const RealityNumber = () => {
  const content = (
    <section className="reality-premium-section">

      {/* LEFT CONTENT */}
      <div className="reality-premium-content">

        <div className="reality-premium-badge">
          📊 CYBERCRIME STATISTICS
        </div>

        <h2 className="reality-premium-heading">
          The Reality
          <span> In Numbers.</span>
        </h2>

        <p className="reality-premium-intro">
          Behind every suspicious message, fake website, and scam call,
          there is a growing problem affecting millions of people.
        </p>

        <div className="reality-stats-list">

          <div className="reality-stat-card">
            <div className="reality-stat-icon">💰</div>

            <div className="reality-stat-info">
              <h4>$16.6B</h4>
              <p>
                Total losses from cybercrime and online scams reported in
                2024, representing a significant increase.
              </p>

              <a
                href="https://www.reuters.com/world/us/complaints-about-ransomware-attacks-us-infrastructure-rise-9-fbi-says-2025-04-23/?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source →
              </a>
            </div>
          </div>


          <div className="reality-stat-card">
            <div className="reality-stat-icon">📁</div>

            <div className="reality-stat-info">
              <h4>859,532</h4>
              <p>
                FBI IC3 complaints were filed in 2024 related to internet
                crime and online threats.
              </p>

              <a
                href="https://www.fbi.gov/news/press-releases/fbi-releases-annual-internet-crime-report?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source →
              </a>
            </div>
          </div>


          <div className="reality-stat-card">
            <div className="reality-stat-icon">🚨</div>

            <div className="reality-stat-info">
              <h4>83%</h4>
              <p>
                Of total reported losses came from cyber-enabled fraud
                rather than traditional malware attacks.
              </p>

              <a
                href="https://industrialcyber.co/reports/fbis-internet-crime-report-2024-records-16-6-billion-in-cybercrime-losses-amid-rising-ransomware-threats/?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source →
              </a>
            </div>
          </div>


          <div className="reality-stat-card">
            <div className="reality-stat-icon">👥</div>

            <div className="reality-stat-info">
              <h4>$4.9B</h4>
              <p>
                Reported losses affecting people aged 60+, showing how
                seriously scammers target vulnerable communities.
              </p>

              <a
                href="https://www.fbi.gov/contact-us/field-offices/boston/news/fbi-highlights-growing-number-of-reported-elder-fraud-cases-ahead-of-world-elder-abuse-awareness-day?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source →
              </a>
            </div>
          </div>

        </div>


        {/* BOTTOM HIGHLIGHTS */}

        <div className="reality-bottom-highlights">

          <div className="reality-mini-highlight">
            <span>🎯</span>

            <div>
              <strong>1 in 4 Americans</strong>
              <small>
                reported being targeted by online fraud.
              </small>
            </div>
          </div>


          <div className="reality-mini-highlight">
            <span>🛡️</span>

            <div>
              <strong>98%</strong>
              <small>
                of modern scams bypass antivirus software completely.
              </small>
            </div>
          </div>

        </div>

      </div>


      {/* RIGHT IMAGE */}

      <div className="reality-premium-image">

        <div className="reality-image-glow"></div>

        <div className="reality-image-wrapper">

          <img
            src="/Products/reality-numbers.webp"
            alt="Cybercrime statistics and online scam protection"
          />

          <div className="reality-image-overlay"></div>

        </div>


        <div className="reality-floating-card">

          <span>📊</span>

          <div>
            <strong>Digital Threats</strong>
            <small>Growing every year</small>
          </div>

        </div>

      </div>

    </section>
  );

  return (
    <ExpandableSection
      title="📊 The Reality in Numbers"
      content={content}
    />
  );
};

export default RealityNumber;