import React, { useEffect, useRef } from "react";
import AppNavbar from "../Components/AppNavbar";
import { Link } from "react-router-dom";
import AllSection from "../Components/AllSection";
import "./FixMyTech.css";

const FixMyTech = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );
    sectionsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <>
      <AppNavbar />

      {/* 🔹 Hero Section */}
      <section className="fix-hero">
        <div className="fix-hero-content">
          <h1>⚡ FixMyTech™ Remote Support</h1>
          <p>
            Friendly, patient, and safe tech help for <strong>seniors</strong>,{" "}
            <strong>families</strong>, and <strong>small businesses</strong>.
            We fix it today — step by step, with no jargon.
          </p>
          <div className="hero-btns">
            <Link to="/pricing" className="cta-btn">⚡ Fix It Now</Link>
            <Link to="/contact" className="cta-btn secondary">📞 Talk to a Tech</Link>
          </div>
        </div>
      </section>

      <section className="fix-wrapper">
        <div className="fix-container">

          {/* 🏠 Home Plan */}
          <div className="fix-card show" id="fixmytech-home" ref={addRef}>
            <div className="fix-card-inner">
              <div className="fix-img-wrapper">
                <img src="/resources/saffron-guru-fixmytech-home-remote-support.webp" alt="FixMyTech Home remote tech support by Saffron Guru" className="fix-img" />
              </div>
              <div className="fix-content">
                <h2>🏠 FixMyTech™ Home — $89.99 + taxes</h2>
                <p className="subtitle">For seniors & families who want it fixed today.</p>
                <ul>
                  <li>Service for one problem on one device</li>
                  <li>Printer fixes • Virus/malware removal • PC/Mac tune up</li>
                  <li>Email/Internet troubleshooting • Windows/macOS reset</li>
                  <li>Clear prevention tips and a simple summary</li>
                </ul>
                <p className="highlight">
                  ✅ 30-Day Assistance After Fix — if the same issue reappears, we’ll fix it again free of charge.
                </p>
              </div>
            </div>
          </div>

          {/* 🏢 Business Plan */}
          <div className="fix-card show" id="fixmytech-business" ref={addRef}>
            <div className="fix-card-inner reverse">
              <div className="fix-img-wrapper">
                <img src="/resources/saffron-guru-fixmytech-business-remote-support.webp" alt="FixMyTech Business remote tech support by Saffron Guru" className="fix-img" />
              </div>
              <div className="fix-content">
                <h2>🏢 FixMyTech™ Business — $149.99 + taxes</h2>
                <p className="subtitle">For small offices, pros, and teams that can’t afford downtime.</p>
                <ul>
                  <li>Service for one business problem affecting a workstation</li>
                  <li>Multi printer setup & queues • Office apps (Microsoft 365/Google Workspace)</li>
                  <li>Email routing, shared folders, permissions, profile fixes</li>
                  <li>Network & Wi-Fi troubleshooting • Windows/macOS reset</li>
                  <li>Hardening checklist to prevent repeat incidents</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 🔒 How It Works */}
          <div className="fix-section" ref={addRef}>
            <h2>🔒 How It Works (Simple & Safe)</h2>
            <ol>
              <li>Book your time (today or tomorrow).</li>
              <li>Connect securely via a one-time link — you stay in control.</li>
              <li>We diagnose & fix — talking you through each step, in plain English.</li>
              <li>Leave safer — we tidy up settings and share a quick prevention list.</li>
            </ol>
            <p className="note">
              Your control: you can see everything we do, pause at any time, and end the session with one click.
            </p>
          </div>

          {/* 🎯 Included vs Not */}
          <div className="fix-section" ref={addRef}>
            <h2>🎯 What’s Included vs. Not</h2>
            <p><strong>Included:</strong> troubleshooting, tune up, OS reset, app setup, Wi-Fi fixes, printer setup, security hygiene.</p>
            <p><strong>Not included:</strong> physical repairs, deep recovery, enterprise servers, licenses, complex rewiring.</p>
          </div>

          {/* ⭐ Why Choose Us */}
          <div className="fix-section" ref={addRef}>
            <h2>⭐ Why Choose Us</h2>
            <ul>
              <li>10+ years helping Americans feel safe with tech.</li>
              <li>Patient, plain language support — we explain as we go.</li>
              <li>Printer & business pros — we solve what others avoid.</li>
              <li>No contracts, no surprises — clear one-time pricing.</li>
              <li>Senior-friendly alerts & summaries — large text, no jargon.</li>
              <li>U.S.-based company focused on scams, safety, and peace of mind.</li>
            </ul>
          </div>

          {/* ❓ FAQ */}
          <div className="fix-faq" ref={addRef}>
            <h2>❓ Frequently Asked Questions</h2>
            <details><summary>Will you come onsite?</summary><p>This package is remote. Onsite help can be arranged separately.</p></details>
            <details><summary>What if it’s more complex than expected?</summary><p>We’ll explain options before any extra charges. No surprise fees.</p></details>
            <details><summary>Can you remove a virus completely?</summary><p>Yes. We clean infections, reset browsers, and harden settings.</p></details>
            <details><summary>Do you handle multiple printers for my office?</summary><p>Yes — shared printers, drivers, permissions, default queues.</p></details>
            <details><summary>Will you reset Windows or macOS if required?</summary><p>Yes. We back up what’s needed and perform a safe reset.</p></details>
            <details><summary>What if the problem comes back?</summary><p>Our 30 Day Assurance covers one free revisit for the same issue.</p></details>
          </div>

          {/* 📞 CTA */}
          <div className="fix-cta" ref={addRef}>
            <h2>📞 Ready to Fix Your Tech?</h2>
            <p>Home — $89.99 + taxes <br/> Business — $149.99 + taxes</p>
            <div className="btn-group">
              <Link to="/pricing" className="cta-btn">⚡ Fix It Now</Link>
              <Link to="/contact" className="cta-btn secondary">📞 Talk to a Tech</Link>
            </div>
            <p className="note">Prefer talking? Call <strong>+1 844-313-4987</strong>. We’ll guide you patiently, step by step.</p>
          </div>
        </div>
      </section>

      <AllSection />
    </>
  );
};

export default FixMyTech;
