import React from 'react';
import AppNavbar from '../Components/AppNavbar';
import AllSection from '../Components/AllSection';
import './NewYorkPolice.css';

const NewYorkPolice = () => (
  <>
    <AppNavbar />

    <div className="spoof-container">
      <div className="spoof-card">
        <h1 className="spoof-title">
          🚨 NY State Police Warn: Spoofing Scam Alert
        </h1>
        <p className="spoof-intro">
          Fraudsters are impersonating government and law enforcement phone lines to trick New Yorkers into revealing personal details.
        </p>

        <div className="spoof-content">
          <section>
            <h2>🔍 Scam Description</h2>
            <p>
              Scammers spoof official phone numbers, making it look like they're calling from the NY State Police or other agencies. They pressure people to share sensitive info—often threatening arrest if they don’t comply.
            </p>
          </section>

          <section>
            <h2>📉 Why It Works</h2>
            <ul>
              <li>Caller ID appears trustworthy (spoofed official numbers).</li>
              <li>Scammers instill fear using threats or fake investigations.</li>
              <li>Targets are often elderly or vulnerable residents.</li>
            </ul>
          </section>

          <section>
            <h2>✅ What You Should Do</h2>
            <ul>
              <li>Never share personal info over unsolicited calls.</li>
              <li>If threatened, hang up immediately—even if ID looks real.</li>
              <li>Don’t call back numbers provided—use verified contact info.</li>
              <li>Report suspicious calls to your bank and local authorities.</li>
            </ul>
          </section>

          <p className="spoof-footer">
            Stay vigilant. Government agencies will <strong>never</strong> call and demand sensitive data. Protect your identity and your peace of mind.
          </p>

          {/* 🔗 Link to full article */}
          <div className="spoof-read-more">
            <a
              href="https://troopers.ny.gov/news/state-police-warn-public-increasing-scams?utm_source"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Read Full Article on NY Troopers Website →
            </a>
          </div>
        </div>
      </div>
    </div>

    <AllSection />
  </>
);

export default NewYorkPolice;
