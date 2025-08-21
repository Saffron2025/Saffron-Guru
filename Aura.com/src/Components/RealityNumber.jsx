import React from 'react';
import ExpandableSection from './ExpandableSection';
import './DefendMeBuilt.css'; // uses the CSS you provided

const content = (
  <div className="reality-numbers-wrapper">
    <h2 className="reality-numbers-heading">📊 The Reality in Numbers</h2>

    <div className="reality-point">
      🟨 $16.6 B — Total losses from cybercrime and online scams in 2024 (up 33%) —{' '}
      <a
        href="https://www.reuters.com/world/us/complaints-about-ransomware-attacks-us-infrastructure-rise-9-fbi-says-2025-04-23/?utm_source=chatgpt.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source
      </a>
    </div>

    <div className="reality-point">
      🟨 859,532 — FBI IC3 complaints filed in 2024 —{' '}
      <a
        href="https://www.fbi.gov/news/press-releases/fbi-releases-annual-internet-crime-report?utm_source=chatgpt.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source
      </a>
    </div>

    <div className="reality-point">
      🟨 83% of total losses came from cyber enabled fraud (~$13.7 B) — not malware —{' '}
      <a
        href="https://industrialcyber.co/reports/fbis-internet-crime-report-2024-records-16-6-billion-in-cybercrime-losses-amid-rising-ransomware-threats/?utm_source=chatgpt.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source
      </a>
    </div>

    <div className="reality-point">
      🟨 $4.9 B lost by people aged 60+ (147,127 complaints, up 43%) —{' '}
      <a
        href="https://www.fbi.gov/contact-us/field-offices/boston/news/fbi-highlights-growing-number-of-reported-elder-fraud-cases-ahead-of-world-elder-abuse-awareness-day?utm_source=chatgpt.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source
      </a>
    </div>

    <div className="reality-point">
      🟨 1 in 4 Americans reported being targeted by online fraud
    </div>

    <div className="reality-point">
      🟨 98% of modern scams bypass antivirus software completely
    </div>
  </div>
);

const RealityNumber = () => (
  <ExpandableSection title="📊 The Reality in Numbers" content={content} />
);

export default RealityNumber;
