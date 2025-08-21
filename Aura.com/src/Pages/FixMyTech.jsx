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
      { threshold: 0.15 }
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
      <section className="fix-wrapper">
        <div className="fix-container">
          {/* 🏠 Home Plan */}
          <div className="fix-card" ref={addRef}>
            <h2>🏠 FixMyTech™ Home — $89.99 + taxes</h2>
            <p>For seniors & families who want it fixed today.</p>
            <ul>
              <li>Service for one problem on one device</li>
              <li>Printer fixes • Virus/malware removal • PC/Mac tune up</li>
              <li>Email/Internet troubleshooting • Windows/macOS reset</li>
              <li>Clear prevention tips and a simple summary</li>
            </ul>
            <p className="highlight">
              ✅ 30-Day Assistance After Fix — if the same issue reappears, we’ll
              fix it again free of charge.
            </p>
          </div>

          {/* 🏢 Business Plan */}
          <div className="fix-card" ref={addRef}>
            <h2>🏢 FixMyTech™ Business — $149.99 + taxes</h2>
            <p>For small offices, pros, and teams that can’t afford downtime.</p>
            <ul>
              <li>Service for one business problem affecting a workstation</li>
              <li>
                Multi printer setup & queues • Office apps (Microsoft
                365/Google Workspace)
              </li>
              <li>
                Email routing, shared folders, permissions, profile fixes
              </li>
              <li>Network & Wi-Fi troubleshooting • Windows/macOS reset</li>
              <li>Hardening checklist to prevent repeat incidents</li>
            </ul>
          </div>

          {/* 🔒 How It Works */}
          <div className="fix-section" ref={addRef}>
            <h2>🔒 How It Works (Simple & Safe)</h2>
            <ol>
              <li>Book your time (today or tomorrow).</li>
              <li>
                Connect securely via a one-time link — you stay in control.
              </li>
              <li>
                We diagnose & fix — talking you through each step, in plain
                English.
              </li>
              <li>
                Leave safer — we tidy up settings and share a quick prevention
                list.
              </li>
            </ol>
            <p className="note">
              Your control: you can see everything we do, pause at any time, and
              end the session with one click. We never store your passwords.
            </p>
          </div>

          {/* 🎯 Included vs Not */}
          <div className="fix-section" ref={addRef}>
            <h2>🎯 What’s Included vs. Not</h2>
            <p>
              <strong>Included:</strong> remote troubleshooting, configuration,
              cleanup/tune up, safe OS reset, app setup, email/Wi-Fi fixes,
              printer & multi printer setup, basic backup, security hygiene.
            </p>
            <p>
              <strong>Not included:</strong> physical repairs/parts, deep data
              recovery, enterprise server work, paid software licenses, complex
              rewiring, onsite service (available separately).
            </p>
          </div>

          {/* ⭐ Why Choose Us */}
          <div className="fix-section" ref={addRef}>
            <h2>⭐ Why Choose Us</h2>
            <ul>
              <li>Nearly 10 years helping Americans feel safe with tech.</li>
              <li>
                Patient, plain language support — we explain as we go.
              </li>
              <li>Printer & business pros — we solve what others avoid.</li>
              <li>No contracts, no surprises — clear one-time pricing.</li>
              <li>
                Senior-friendly alerts & summaries — large text, no jargon.
              </li>
              <li>
                U.S.-based company focused on scams, safety, and peace of mind.
              </li>
            </ul>
          </div>

          {/* ❓ FAQ */}
          <div className="fix-faq" ref={addRef}>
            <h2>❓ Frequently Asked Questions</h2>
            <details>
              <summary>Will you come onsite?</summary>
              <p>
                This package is remote. Onsite help can be arranged in select
                areas separately.
              </p>
            </details>
            <details>
              <summary>What if it’s more complex than expected?</summary>
              <p>
                We’ll stay on it within scope. If multiple problems, we’ll
                explain options before extra charges. No surprise fees.
              </p>
            </details>
            <details>
              <summary>Can you remove a virus completely?</summary>
              <p>
                Yes. We clean infections, reset browsers, and harden settings.
                If a clean reset is needed, we’ll guide you safely.
              </p>
            </details>
            <details>
              <summary>Do you handle multiple printers for my office?</summary>
              <p>
                Yes — shared printers, drivers, permissions, default queues, and
                naming conventions.
              </p>
            </details>
            <details>
              <summary>Will you reset Windows or macOS if required?</summary>
              <p>
                Yes. We back up what’s needed and perform a safe reset so you
                start fresh.
              </p>
            </details>
            <details>
              <summary>What if the problem comes back?</summary>
              <p>
                Our 30 Day Assurance covers one free revisit for the same issue
                on the same device.
              </p>
            </details>
          </div>

          {/* 📞 CTA */}
          <div className="fix-cta" ref={addRef}>
            <h2>📞 Ready to Fix Your Tech?</h2>
            <p>
              Home — $89.99 + taxes <br />
              Business — $149.99 + taxes
            </p>
            <div className="btn-group">
              <Link to="/Pricing" className="cta-btn">
  ⚡ Fix It Now
</Link>

<Link to="/contact" className="cta-btn secondary">
  📞 Talk to a Tech
</Link>
            </div>
            <p className="note">
              Prefer talking? Call <strong>844 313 4987</strong>. We’ll guide you
              patiently, step by step.
            </p>
          </div>
        </div>
      </section>
      <AllSection />
    </>
  );
};

export default FixMyTech;
