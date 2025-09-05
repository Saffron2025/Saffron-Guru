// src/Pages/DefendMePro.js
import React, { useEffect, useRef } from 'react';
import AppNavbar from '../Components/AppNavbar.jsx';
import { useSearchParams } from 'react-router-dom';

import AllSection from '../Components/AllSection.jsx';
import RealityNumber from '../Components/RealityNumber.jsx';
import TraditionalSecurityFails from '../Components/TraditionalSecurityFails.jsx';
import DefendMeBuilt from '../Components/DefendMeBuilt.jsx';
import WhatDefendMeProIncludes from '../Components/whyDefenceProIncludes.jsx';
import EverythingSafe from '../Components/EverythingYouNeedTostaySafe.jsx';
import FraudDetection from '../Components/FraudDetection.jsx';
import ScamProtection from '../Components/ScamProtection.jsx';
import ScamAlertsHub from '../Components/ScamAlertHub.jsx';
import FinancialSecurity from '../Components/FinancialSecurity.jsx';
import PasswordManager from '../Components/PasswordManager.jsx';
import Antivirus from '../Components/Antivirus.jsx';
import VpnPrivacy from '../Components/VPN.jsx';
import SpamCallProtection from '../Components/SpamCallProtection.jsx';
import LiveSupport from '../Components/LiveSupport.jsx';
import DefendMeBusiness from '../Components/DefenseMeBusiness.jsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './DefendPro.css';

const DefendMePro = () => {
  const [searchParams] = useSearchParams();
  const scamRef = useRef(null);
  const fraudRef = useRef(null);

  useEffect(() => {
    const item = searchParams.get('item');
    if (item === 'scam-protection' && scamRef.current) {
      scamRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (item === 'fraud-detection' && fraudRef.current) {
      fraudRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchParams]);

  return (
    <>
      <AppNavbar />

      {/* ✨ Hero Banner */}
      <section className="hero-banner">
        <div className="hero-horizontal-container">
          {/* Hero image = eager load for instant paint */}
          <img
            src="/Hero/shield.WebP"
            alt="Shield"
            className="hero-logo"
            loading="eager"
            fetchpriority="high"
          />
          <h1 className="hero-title-right">DefendMePro™</h1>
        </div>

        <div className="hero-content">
          <h2 className="hero-heading">
            Protection Built for the Real World — Not Just Viruses.
          </h2>
          <p className="hero-subtext">
            <strong>DefendMePro</strong> shields you from scams, identity theft, fraud,
            remote hacking, and digital traps that traditional security misses.
          </p>
        </div>
      </section>

      {/* 💡 Storytelling Paragraph Section */}
      <section className="scam-banner">
        <div className="scam-banner-container">
          <div className="scam-banner-text">
            <h2 className="scam-banner-heading">
              ⚠️ The Threat Isn’t Just Malware — It’s Human Manipulation
            </h2>
            <p className="scam-banner-para">
              Hackers don’t send viruses anymore — <span>they send fake logins, refund scams, and remote traps.</span>  
              <strong> We shut it all down.</strong>
            </p>
            <p className="scam-banner-para">
              Today’s scams don’t just use <span>code</span> — they use <span>people</span>.
              <br />
              A fake <em>Amazon email</em>. A <em>PayPal charge alert</em>. A <em>screen-lock popup</em> with a fake support number.  
              Even a voice that sounds like your <em>bank</em> or <em>loved one</em>.
            </p>
            <p className="scam-banner-warning">
              🛑 All it takes is <strong>one moment of trust</strong> to fall victim.
            </p>
          </div>

          <div className="scam-banner-image">
            {/* Other image = lazy load with blur placeholder */}
            <LazyLoadImage
              src="/Hero/ScamTrap.WebP"
              alt="Scam Trap Illustration"
              effect="blur"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ✅ All other sections remain same */}
      <RealityNumber />
      <TraditionalSecurityFails />
      <DefendMeBuilt />
      <WhatDefendMeProIncludes />
      <EverythingSafe
        expand={searchParams.get('item') === 'identity-theft'}
        key={searchParams.get('item') === 'identity-theft' ? 'identity-theft' : 'none'}
      />

      <FraudDetection
        expand={searchParams.get('item') === 'fraud-detection'}
        key={searchParams.get('item') === 'fraud-detection' ? 'fraud' : 'none'}
      />

      <ScamProtection
        expand={searchParams.get('item') === 'scam-protection'}
        scrollRef={scamRef}
        key={searchParams.get('item') === 'scam-protection' ? 'scam' : 'none'}
      />

      <ScamAlertsHub
        expand={searchParams.get('item') === 'scam-alerts'}
        key={searchParams.get('item') === 'scam-alerts' ? 'scam-alerts' : 'none'}
      />

      <FinancialSecurity
        expand={searchParams.get('item') === 'financial-security'}
        key={searchParams.get('item') === 'financial-security' ? 'finance' : 'none'}
      />

      <PasswordManager
        expand={searchParams.get('item') === 'password-manager'}
        key={searchParams.get('item') === 'password-manager' ? 'pm' : 'none'}
      />

      <Antivirus
        expand={searchParams.get('item') === 'antivirus'}
        key={searchParams.get('item') === 'antivirus' ? 'antivirus' : 'none'}
      />

      <VpnPrivacy
        expand={searchParams.get('item') === 'vpn'}
        key={searchParams.get('item') === 'vpn' ? 'vpn' : 'none'}
      />

      <SpamCallProtection
        expand={searchParams.get('item') === 'spam-call'}
        key={searchParams.get('item') === 'spam-call' ? 'spam' : 'none'}
      />

      <LiveSupport
        expand={searchParams.get('item') === 'human-support'}
        key={searchParams.get('item') === 'human-support' ? 'support' : 'none'}
      />

      <DefendMeBusiness />
      <AllSection />
    </>
  );
};

export default DefendMePro;
