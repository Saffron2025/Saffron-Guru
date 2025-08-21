import React from "react";
import AllSection from "../Components/AllSection";
import AppNavbar from "../Components/AppNavbar";
import "./ReadFAQ.css";

const ReadFAQ = () => {
  return (
    <>
      <AppNavbar />
      <section className="faq-wrapper">
        <h1 className="faq-title">🧠 Fraud FAQ</h1>
        <p className="faq-subtitle">
          Common questions about fraud prevention—clear, practical answers your
          family can act on today.
        </p>

        <div className="faq-content">
          <div className="faq-block">
            <h2>1) How do I know if a support call is fake?</h2>
            <p>
              Short answer: If they called you, assume it’s fake.
              <br />
              Do this: Hang up → open the brand’s official app/website or call
              the number on your card/bill → you call them.
            </p>
          </div>

          <div className="faq-block">
            <h2>2) Should I ever share an OTP, PIN, or password on a call?</h2>
            <p>
              Never. No bank, tech company, or government agency needs your
              OTP/PIN/password on the phone or via text.
            </p>
          </div>

          <div className="faq-block">
            <h2>3) My bank called about “fraud.” What do I do?</h2>
            <p>
              Hang up → call the number on the back of your card → ask for the
              fraud department → review recent charges & enable alerts.
            </p>
          </div>

          <div className="faq-block">
            <h2>
              4) I clicked a suspicious link and typed my password—am I hacked?
            </h2>
            <p>
              Maybe. <br />
              Do this now:
              <br />1. Change that password everywhere you used it.
              <br />2. Turn on 2-step verification.
              <br />3. Run a security scan on your device.
            </p>
          </div>

          <div className="faq-block">
            <h2>5) I sent money by Zelle/wire—can I get it back?</h2>
            <p>
              Often hard. Call your bank immediately and request a recall/fraud
              hold. File a report (IC3/FTC). Speed matters.
            </p>
          </div>

          <div className="faq-block">
            <h2>6) I paid with gift cards or crypto—am I stuck?</h2>
            <p>
              Usually, yes. Contact the gift-card issuer or exchange
              immediately; report to IC3/FTC. Next time: use credit cards only.
            </p>
          </div>

          <div className="faq-block">
            <h2>7) Amazon/PayPal emailed a big “order confirmation.” Real or fake?</h2>
            <p>
              Check inside the official app (Amazon → Orders, PayPal →
              Activity). If it’s not there, the email is a phish.
            </p>
          </div>

          <div className="faq-block">
            <h2>8) A pop-up says “Virus detected—call Microsoft.”</h2>
            <p>
              It’s a scam. Close the tab/app (use Task Manager/Force Quit), run
              your antivirus, and only seek help via official channels.
            </p>
          </div>

          <div className="faq-block">
            <h2>9) What’s the safest way to handle passwords?</h2>
            <p>
              Use a password manager. One strong master passphrase (4–5 random
              words). Unique 16+ chars for every site. Turn on 2FA.
            </p>
          </div>

          <div className="faq-block">
            <h2>10) Credit card or debit card for online purchases?</h2>
            <p>
              Credit card. Better fraud protections and chargebacks. Avoid bank
              transfers, gift cards, and crypto for strangers.
            </p>
          </div>

          <div className="faq-block">
            <h2>11) How do I protect my phone number from SIM-swap scams?</h2>
            <p>
              Set a SIM PIN, add a carrier account PIN, and request a port
              freeze/lock from your carrier.
            </p>
          </div>

          <div className="faq-block">
            <h2>12) How do I secure my home Wi-Fi?</h2>
            <p>
              Change the router admin password, use WPA2/WPA3, update firmware,
              disable WPS, and use a guest network for visitors.
            </p>
          </div>

          <div className="faq-block">
            <h2>13) Are QR codes safe?</h2>
            <p>
              Treat unknown QR codes like links from strangers. When in doubt,
              type the website instead of scanning.
            </p>
          </div>

          <div className="faq-block">
            <h2>14) What are the red flags for investment/crypto scams?</h2>
            <p>
              “Guaranteed returns,” pressure to act fast, moving money to
              unknown wallets, or trading on unregulated apps.
              <br />
              Verify advisors on FINRA BrokerCheck / SEC IAPD; talk to a trusted
              family member first.
            </p>
          </div>

          <div className="faq-block">
            <h2>15) What is a refund/overpayment scam?</h2>
            <p>
              They “accidentally” pay too much, ask you to return the
              difference; their check bounces later. Never send money back on
              unexpected checks.
            </p>
          </div>

          <div className="faq-block">
            <h2>16) What about property & real-estate scams?</h2>
            <p>
              Wire fraud: email tells you to change closing instructions—call
              your escrow/agent on a known number first.
              <br />
              Title/deed fraud: monitor county records; sign up for recording
              alerts where available.
            </p>
          </div>

          <div className="faq-block">
            <h2>17) How do “grandparent” and romance scams work?</h2>
            <p>
              Emotional urgency + secrecy. Video-verify identities and call
              family directly on known numbers before sending any money.
            </p>
          </div>

          <div className="faq-block">
            <h2>18) When is it safe to allow remote access to my computer?</h2>
            <p>
              Only after you contact a verified company yourself.
              <br />
              Saffron Guru customers: never allow access without the official
              Saffron Guru password provided by our tech during your session.
            </p>
          </div>

          <div className="faq-block">
            <h2>19) Can caller ID be faked?</h2>
            <p>
              Yes—spoofing is trivial. Caller ID is not proof. Always call back
              on official numbers.
            </p>
          </div>

          <div className="faq-block">
            <h2>20) Where should I report fraud in the U.S.?</h2>
            <p>
              • Bank/Credit card: call the number on your card first.
              <br />
              • FBI IC3: ic3.gov (internet crime)
              <br />
              • FTC: reportfraud.ftc.gov (consumer scams)
              <br />
              Save screenshots, emails, phone numbers, payment details.
            </p>
          </div>

          <div className="faq-family">
            <h2>🧑‍👩‍👦 Family Safety Plan</h2>
            <ul>
              <li>
                Money rule: No money moves until we hang up and call back on a
                known number (from the card, bill, or official app).
              </li>
              <li>
                Family code word: We only act on emergencies if the caller knows
                our private code word.
              </li>
              <li>
                Contacts saved: Bank, card, insurer/Medicare, mobile carrier,
                Saffron Guru 844-313-4987 saved in Contacts.
              </li>
              <li>
                Alerts ON: Turn on transaction/login alerts for bank, email,
                Amazon/PayPal. Review statements weekly.
              </li>
              <li>
                Links & numbers in messages = untrusted: Don’t tap links or call
                numbers from emails/texts. Open the official app/website
                yourself.
              </li>
              <li>
                Remote access rule: Never allow screen sharing/remote control
                unless you initiated support and verified the company. Saffron
                Guru clients: never allow access without the official Saffron
                Guru password given by our tech during the session.
              </li>
              <li>
                Passwords & 2FA: Use a password manager + 2-factor on email,
                bank, shopping apps.
              </li>
            </ul>
          </div>

          <div className="faq-renewal">
            <h2>🧾 “Renewal”, “Order Confirmation” & Delivery Scams</h2>
            <h3>What these look like</h3>
            <ul>
              <li>
                “Your Prime/Antivirus/Office has renewed for $349 — call to
                cancel.”
              </li>
              <li>
                “Thanks for your $1,899 iPhone order — click to dispute.”
              </li>
              <li>
                “Package held / reschedule delivery — pay ₹/$ to release.”
              </li>
            </ul>

            <h3>Red flags</h3>
            <ul>
              <li>
                Urgent cancel/dispute buttons or phone numbers in the message.
              </li>
              <li>
                Amounts slightly high (to trigger panic), odd sender addresses,
                grammar errors.
              </li>
              <li>
                Demands for gift cards/UPI/crypto/wire “for verification.”
              </li>
            </ul>

            <h3>The safe response (always the same)</h3>
            <ol>
              <li>Do not click. Do not call the number in the message.</li>
              <li>
                Open the official app (Amazon → Orders, PayPal → Activity,
                Apple/Google → Subscriptions) or type the site yourself.
              </li>
              <li>
                If the charge/order isn’t there, it’s a scam—delete/block.
              </li>
              <li>
                If you see a real charge, dispute it inside the app or by
                calling the official number on your card.
              </li>
            </ol>
            <p className="faq-quote">
              One-line script: <br />
              “I don’t verify anything from inbound messages. I’ll check my
              account/app directly.”
            </p>
          </div>

          <div className="faq-footer">
            <h2>Saffron Guru LLC</h2>
            <p>
              Toll-Free: +1 844-313-4987 • Email: info@saffronguru.com
              <br />
              Available 7 days a week to protect you with digital security, scam
              protection, anti-hacking, and IT support.
            </p>
          </div>
        </div>
      </section>
      <AllSection />
    </>
  );
};

export default ReadFAQ;
