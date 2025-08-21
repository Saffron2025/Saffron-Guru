import React from "react";
import AllSection from "../Components/AllSection";
import AppNavbar from "../Components/AppNavbar";
import "./IdentifyFakeCalls.css";

const IdentifyFakeCalls = () => {
  return (
    <>
      <AppNavbar />
      <section className="fakecalls-wrapper">
        <div className="container">
          <h1 className="fc-title">📞 How to Identify Fake Support Calls</h1>
          <p className="fc-intro">
            Scammers impersonate Microsoft, Amazon, banks, delivery companies,
            even “your internet provider.” <br />
            Use this page as your <strong>hard-line safety policy</strong>.
          </p>

          <div className="fc-block danger">
            <h2>🚫 Zero-Trust Calling Rule</h2>
            <p>
              If <strong>they called you</strong>, you don’t trust them. Ever. <br />
              Only trust calls you <strong>place yourself</strong> to the official number
              from your card, statement, or the brand’s app/website.
            </p>
          </div>

          <div className="fc-block warning">
            <h2>🔎 Instant Red Flags</h2>
            <ul>
              <li>“We detected a virus/fraud—confirm your OTP or password now.”</li>
              <li>“We must remote into your computer/phone to fix it.”</li>
              <li>“Move money to a ‘safe’ account / buy gift cards / pay in crypto.”</li>
              <li>“Do not hang up or call anyone else—keep me on the line.”</li>
              <li>“Read the code we just sent to your phone/email.”</li>
              <li>“Install AnyDesk/TeamViewer/QuickSupport right now.”</li>
              <li>Caller ID looks official (it can be spoofed in seconds).</li>
            </ul>
            <p className="fc-note">
              ✅ Reality: Legitimate companies never ask for passwords/OTPs,
              never demand gift cards/crypto, and never force remote access.
            </p>
          </div>

          <div className="fc-block success">
            <h2>✅ The 30-Second Safe Path</h2>
            <ol>
              <li>Hang up immediately.</li>
              <li>Open the official app/website or use the number on your card.</li>
              <li>You call them. Ask if there’s any alert on your account.</li>
              <li>
                Real issues will <strong>always</strong> appear in your account/app.
              </li>
            </ol>
          </div>

          <div className="fc-block info">
            <h2>🧠 What Real Companies Never Do</h2>
            <ul>
              <li>Ask for full password, OTP, or 2FA code.</li>
              <li>Ask you to install remote-control tools randomly.</li>
              <li>Threaten arrest, lawsuits, or account closure if you don’t pay.</li>
              <li>Take payment by gift cards, crypto, or wires to strangers.</li>
              <li>Stop you from calling back an official number.</li>
            </ul>
          </div>

          <div className="fc-block script">
            <h2>🗣️ Your Anti-Scam Script</h2>
            <blockquote>
              “I don’t verify identity on inbound calls. I’ll call the official number
              myself. Goodbye.”
            </blockquote>
            <p>If they argue, repeat the line and hang up.</p>
          </div>

          <div className="fc-block neutral">
            <h2>🧰 If the Call Is About…</h2>
            <h3>Microsoft / “Windows Support”</h3>
            <p>Claims of viruses, license expiry, or hacker activity.</p>
            <p><strong>Action:</strong> Close the call, run your own scan, and only call the official Microsoft support.</p>

            <h3>Amazon / Delivery / “Order Problem”</h3>
            <p>Fake alerts about orders or Prime renewal.</p>
            <p><strong>Action:</strong> Check your Orders tab in the Amazon app.</p>

            <h3>Banks / Credit Cards</h3>
            <p>“Suspicious transaction—confirm code.”</p>
            <p><strong>Action:</strong> Call the number on the back of your card.</p>

            <h3>Internet/Phone Provider</h3>
            <p>“Router hacked—let us connect.”</p>
            <p><strong>Action:</strong> Call the provider from your bill or official app.</p>
          </div>

          <div className="fc-block danger">
            <h2>🖥️ Remote Access: House Rules</h2>
            <ul>
              <li>Never allow remote access without verifying the company first.</li>
              <li>
                Saffron Guru customers: only allow remote access with the official password
                given during support.
              </li>
            </ul>
          </div>

          <div className="fc-block danger">
            <h2>🚨 If You Already Spoke or Clicked</h2>
            <ol>
              <li>Disconnect internet immediately.</li>
              <li>Uninstall any remote tool they asked you to add.</li>
              <li>Change passwords for email, bank, affected accounts.</li>
              <li>Turn on 2FA in bank/email apps.</li>
              <li>Call your bank to review transactions.</li>
              <li>Run a security scan.</li>
              <li>Save evidence (screenshots, numbers, names).</li>
              <li>
                Report: FBI IC3 (<a href="https://ic3.gov">ic3.gov</a>), FTC (<a href="https://reportfraud.ftc.gov">reportfraud.ftc.gov</a>), or your bank’s fraud line.
              </li>
            </ol>
          </div>

          <div className="fc-block info">
            <h2>🧩 Do / Don’t Cheat Sheet</h2>
            <div className="fc-grid">
              <div>
                <h4>✅ DO</h4>
                <ul>
                  <li>Call back using official numbers.</li>
                  <li>Use apps to check alerts/orders.</li>
                  <li>Turn on account notifications.</li>
                  <li>Keep devices updated.</li>
                </ul>
              </div>
              <div>
                <h4>❌ DON’T</h4>
                <ul>
                  <li>Share OTP, PIN, or passwords.</li>
                  <li>Install remote apps from random callers.</li>
                  <li>Pay with gift cards/crypto for “security.”</li>
                  <li>Stay on pushy or secretive calls.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="fc-block senior">
            <h2>🧓 Family Safety Tip (for Seniors)</h2>
            <p>
              Make a family rule: No money moves without a call-back to an official number
              and a family code phrase. Scammers collapse when you add verification.
            </p>
          </div>

          <div className="fc-footer">
            <p>
              Need help now? <br />
              <strong>Saffron Guru LLC</strong> <br />
              Toll-Free: +1 844-313-4987 • Email: info@saffronguru.com
            </p>
          </div>
        </div>
      </section>
      <AllSection />
    </>
  );
};

export default IdentifyFakeCalls;
