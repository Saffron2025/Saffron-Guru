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
              <h4>$20.9B</h4>
              <p>
                Total losses from cybercrime and online scams reported to the
                FBI in 2025, up 26% from 2024.
              </p>

              <a
                href="https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf"
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
              <h4>1 Million+</h4>
              <p>
                FBI IC3 complaints were filed in 2025 related to internet
                crime and online threats, about 3,000 every day.
              </p>

              <a
                href="https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf"
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
              <h4>201,266</h4>
              <p>
                Complaints filed by Americans aged 60 and older in 2025,
                with an average loss of $38,500 per victim.
              </p>

              <a
                href="https://www.fbi.gov/news/stories/scammers-target-older-adult-victims"
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
              <h4>$7.7B</h4>
              <p>
                Reported losses by people aged 60+ in 2025, up 59% in one
                year, showing how seriously scammers target older adults.
              </p>

              <a
                href="https://www.fbi.gov/news/stories/scammers-target-older-adult-victims"
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
        loading="lazy"
        decoding="async"
            src="/Products/saffron-guru-cybercrime-statistics.webp"
            alt="Saffron Guru cybercrime and online scam statistics"
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