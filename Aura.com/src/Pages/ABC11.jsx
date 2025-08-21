import React from 'react';
import AppNavbar from '../Components/AppNavbar';
import AllSection from '../Components/AllSection';
import './ABC11.css';

const ABC11 = () => {
  return (
    <>
      <AppNavbar />

      <div className="scam-container">
        <div className="scam-card">
          <h1 className="scam-title">🚨 Raleigh Senior Scammed via Fake Microsoft Call</h1>
          <p className="scam-intro">
            A retiree lost nearly her entire Social Security check to a fake “Microsoft technician”
            scam that directed her to buy gift cards.
          </p>

          <div className="scam-content">
            <section>
              <h2>🧠 How It Started</h2>
              <p>
                The scam began when the woman’s computer screen turned black and displayed a number
                claiming to be from Microsoft. The caller sounded calm and professional.
              </p>
            </section>

            <section>
              <h2>🎯 Scam Mechanics</h2>
              <p>
                She was told  funds were missing and directed to store after store, buying gift
                cards and sharing the PINs. Almost $3,000 vanished before she realized the truth.
              </p>
            </section>

            <section>
              <h2>📉 Behind the Numbers</h2>
              <p>
                According to the FTC, imposter scams cost consumers $2.95 billion in 2024, with the
                most losses stemming from such scams—even more than investment scams.
              </p>
            </section>

            <section>
              <h2>✅ Staying Safe</h2>
              <ul>
                <li>
                  Never give computer access to unsolicited callers claiming to fix your device.
                </li>
                <li>Don’t buy gift cards for someone instructing you over the phone.</li>
                <li>
                  Always verify by contacting known agency numbers—not the ones they provide.
                </li>
              </ul>
            </section>

            <p className="scam-footer">
              While this was a heartbreaking loss, the woman shares her story so others don’t fall
              for similar traps. Be safe, and verify before trusting.
            </p>

            {/* 🔗 Read More Link */}
            <div className="scam-read-more">
              <a
                href="https://abc11.com/post/scams-nc-woman-north-carolina-loses-thousands-computer-scam/16063886/?utm_source"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 Read Full Article on ABC11 →
              </a>
            </div>
          </div>
        </div>
      </div>

      <AllSection />
    </>
  );
};

export default ABC11;
