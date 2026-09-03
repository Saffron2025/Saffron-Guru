// src/Components/WhyChooseUs.js
import React from "react";
import { Container } from "react-bootstrap";
import "./WhyChooseUs.css";
import AllSection from "./AllSection";
import AppNavbar from "./AppNavbar";
export default function WhyChooseUs() {
  return (
    <>
    <AppNavbar/>
      <section className="why-section">
        <Container>
          <header className="why-header">
            <h1>Why Families Trust Saffron Guru</h1>
            <p className="sub">✅ U.S.-Based Company · Support 7 Days a Week</p>
            <p className="intro">
              For nearly 10 years, Saffron Guru has been more than just a tech
              service. We’re a dedicated American company—a safety net for
              seniors, veterans, families, and small businesses across the U.S.
              and Canada, and for American retirees in Panama, Mexico, and Costa Rica.
              <br /><br />
              We don’t just protect devices. We protect peace of mind.
            </p>
          </header>

          <div className="why-cards">
            <div className="why-card">
              <div className="why-icon">🧠</div>
              <div className="why-text">
                <h3>Smarter Scam Protection</h3>
                <p>
                  We help stop scams, fraud, and online traps before they do
                  damage—whether it’s a suspicious link, a fake call, or a tricky
                  pop-up. Quiet, automatic safety without confusing settings.
                </p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon">🧑‍💻</div>
              <div className="why-text">
                <h3>Human Help, Not Tech Jargon</h3>
                <p>
                  Our patient professionals listen first and speak simply.
                  Whether it’s a basic question or a complex technical mess, we
                  go the extra mile—sticking with you step-by-step until it’s fixed.
                </p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon">🌎</div>
              <div className="why-text">
                <h3>Trusted by Seniors at Home & Abroad</h3>
                <p>
                  From communities across the U.S. and Canada to retiree hubs in
                  Panama, Mexico, and Costa Rica, families choose Saffron Guru for
                  protection handled with care, not confusion.
                </p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon">💬</div>
              <div className="why-text">
                <h3>Fast Help When It Matters</h3>
                <p>
                  Clicked something risky? Think you’ve been scammed? One call
                  gets you immediate guidance to contain the issue and prevent
                  further damage—so you feel in control again.
                </p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon">🔐</div>
              <div className="why-text">
                <h3>All-in-One Security, Without the Hassle</h3>
                <p>
                  VPN, antivirus, firewall, scam alerts—managed together for you.
                  No juggling apps, no confusing dashboards. One shield. One team.
                </p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon">🛡️</div>
              <div className="why-text">
                <h3>Fair & Honest</h3>
                <p>
                  No long contracts. No hidden lock-ins. Stay because you trust
                  us—not because you’re forced to.
                </p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon">☎️</div>
              <div className="why-text">
                <h3>Patient Phone Support (7 Days)</h3>
                <p>
                  Prefer talking instead of typing? We guide you in plain English,
                  at your pace—like a patient friend who won’t let you down.
                </p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon">👨‍👩‍👧‍👦</div>
              <div className="why-text">
                <h3>Caregiver Mode</h3>
                <p>
                  Invite a trusted family member to review alerts and settings.
                  You stay in control—they get peace of mind.
                </p>
              </div>
            </div>

            <div className="why-card big-promise">
              <div className="why-icon">💖</div>
              <div className="why-text">
                <h3>The Saffron Guru Promise</h3>
                <p>
                  For nearly a decade, we’ve protected seniors and families from
                  scams, fraud, and online dangers. We’re not a global tech
                  giant—we’re a U.S.-based company built on care, honesty, and
                  going above and beyond.
                </p>
                <p>
                  Whether it’s a simple fix or a hard, messy problem, we’ll stay
                  with you until you’re safe and sorted. Because in the end, it’s
                  not just about fixing computers—it’s about protecting people.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <AllSection />
    </>
  );
}
