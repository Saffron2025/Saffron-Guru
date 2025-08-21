import React from 'react';
import ExpandableSection from './ExpandableSection';
import './DefendMeBuilt.css'; // reuse the same styling

const content = (
  <div className="reality-numbers-wrapper">
    <h2 className="reality-numbers-heading">🧰 What DefendMePro Includes</h2>

    <div className="reality-point">
      ✅ Scam Detection & Alerts<br />
      Get notified before a scam even hits your screen — including refund scams, fake support pop-ups, and impersonation traps.
    </div>

    <div className="reality-point">
      ✅ Browser Trap Protection<br />
      We block phishing sites, fake login pages, and malicious pop-up domains in real time.
    </div>

    <div className="reality-point">
      ✅ Remote Access Blocker<br />
      We block remote access tools commonly abused in scams — like AnyDesk or TeamViewer — unless you approve them
    </div>

    <div className="reality-point">
      ✅ Live Scam Alerts (via Alerts Hub)<br />
      You’ll know what scams are trending before they reach your inbox or phone — directly inside our app or by email.
    </div>

    <div className="reality-point">
      ✅ Real Human Support, 7 Days a Week<br />
      Talk to a trained expert — not a chatbot. Whether you're unsure about a call, email, or pop-up, we’ll guide you safely.
    </div>

    <div className="reality-point">
      ✅ System Hardening & Lockdown Settings<br />
      We block key vulnerability points (like ports, scripts, CMD/PowerShell access) based on your profile — so even sneaky hackers can’t get in.
    </div>

    <div className="reality-point">
      ✅ Ongoing Scam Education<br />
      Get a fresh Scam Playbook every week — right inside the app, by email, or over a quick call. No jargon. Just what to watch out for.
    </div>

    <div className="reality-point">
      ✅ Emergency Callback Button<br />
      One tap from inside Alerts Hub, and a tech expert will call you back ASAP — no waiting, no guessing.
    </div>
  </div>
);

const WhatDefendMeProIncludes = () => (
  <ExpandableSection title="🧰 What DefendMePro Includes" content={content} />
);

export default WhatDefendMeProIncludes;
