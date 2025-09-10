import React from "react";
import AppNavbar from "../Components/AppNavbar";
import Allsection from "../Components/AllSection";
import "./Blog.css";

const Blog = () => {
  return (
    <>
      <AppNavbar />
      <section className="blog-section">
        <div className="blog-container">
          <h1 className="blog-title">
            🛡️ The Complete Senior’s Guide to Online Scams in 2025
          </h1>

          <p className="blog-intro">
            The internet is a wonderful tool — we use it for shopping, paying
            bills, talking to family, watching news, and even booking
            appointments. But along with all the benefits comes a dark side:
            online scams. According to the FBI, seniors lost over{" "}
            <strong>$3.4 billion in 2024</strong> to cybercrime. This guide is
            written in simple, clear language to help older adults and their
            families understand scams and protect themselves in 2025 and beyond.
          </p>

          <div className="blog-content">
            {/* Section 1 */}
            <h2>🚫 1. Tech Support Scams</h2>
            <p>
              Tech support scams are among the most common frauds targeting
              seniors. A pop-up suddenly appears on your screen with a scary
              message: “Warning! Your computer is infected. Call Microsoft now!”
              The pop-up may even play loud alarm sounds to frighten you.
            </p>
            <p>
              Once you call the number, the scammer pretends to be from
              Microsoft, Apple, or another big brand. They ask you to install
              software like AnyDesk so they can “fix” your computer. In reality,
              they either steal your files or charge hundreds of dollars for
              fake services.
            </p>
            <div className="tip">
              ✅ Tip: Never call phone numbers from pop-ups. Close the window or
              restart your device. Real companies never show warnings like that.
            </div>

            {/* Section 2 */}
            <h2>📞 2. Refund & Bank Scams</h2>
            <p>
              These scams start with a phone call or email saying, “We
              accidentally refunded $5,000 into your bank account.” The scammer
              then pressures you to “send the money back.” They may even trick
              your online banking page to look like the money is really there.
            </p>
            <p>
              Victims often panic and send thousands of dollars, only to realize
              later that no money was ever deposited. These scams are effective
              because they play on honesty — many seniors want to correct
              mistakes quickly.
            </p>
            <div className="tip">
              ✅ Tip: Banks never ask you to return money. If in doubt, hang up
              and call your bank using the number on the back of your card.
            </div>

            {/* Section 3 */}
            <h2>🌐 3. Phishing Emails & Fake Websites</h2>
            <p>
              Phishing scams involve emails or text messages that look official
              but are fake. A message might say: “Your PayPal account is locked.
              Log in now.” The link takes you to a website that looks real but
              steals your password.
            </p>
            <p>
              These scams are dangerous because the fake sites are almost
              identical to the real ones. Seniors who are not used to spotting
              small differences in web addresses are easy targets.
            </p>
            <div className="tip">
              ✅ Tip: Always check the website address (URL). Type it manually in
              your browser instead of clicking suspicious links.
            </div>

            {/* Section 4 */}
            <h2>🎁 4. Lottery & Prize Scams</h2>
            <p>
              “Congratulations! You won $50,000 or a brand-new car!” These
              messages arrive by email, text, or even phone. The catch? You must
              pay a small “processing fee” or “tax” to claim the prize. Once you
              pay, the scammer disappears, and there was never any prize.
            </p>
            <p>
              These scams exploit excitement and hope. Many seniors believe they
              are lucky winners and end up losing money instead.
            </p>
            <div className="tip">
              ✅ Tip: If you never entered a lottery, you didn’t win. Real prizes
              never ask for upfront fees.
            </div>

            {/* Section 5 */}
            <h2>❤️ 5. Romance Scams</h2>
            <p>
              Romance scams are emotional and very damaging. Scammers create
              fake profiles on dating sites or social media. They send friendly
              messages and slowly build a relationship. After gaining trust,
              they ask for money to “visit you,” “pay hospital bills,” or “help
              with emergencies.”
            </p>
            <p>
              Victims may send thousands of dollars over months or years. Some
              even lose their life savings, believing they are helping someone
              they love.
            </p>
            <div className="tip">
              ✅ Tip: Never send money to someone you have never met in real life.
              Talk to trusted family members if someone online asks for money.
            </div>

            {/* Section 6 */}
            <h2>🖥️ 6. Remote Access Traps</h2>
            <p>
              Scammers misuse remote access apps like TeamViewer or AnyDesk.
              They say: “Let me help fix your problem. Just install this app.”
              Once installed, they can control your screen, see your passwords,
              and even move money from your bank accounts.
            </p>
            <div className="tip">
              ✅ Tip: Only allow remote access to trusted family or official IT
              support staff. If in doubt, say no.
            </div>

            {/* Section 7 */}
            <h2>💰 7. Investment & Crypto Scams</h2>
            <p>
              “Invest $1,000 today and get $10,000 tomorrow!” These scams sound
              exciting, but they are fake. Scammers show dashboards with fake
              profits, but when you try to withdraw, the money vanishes.
            </p>
            <p>
              Many seniors are tempted by these scams because they want to grow
              retirement savings quickly. But high-return promises are almost
              always fraud.
            </p>
            <div className="tip">
              ✅ Tip: Only invest through licensed banks or advisors. If it sounds
              too good to be true, it is fake.
            </div>

            {/* Extra Content for length (Case studies, FAQs, Tips) */}
            <h2>📖 Real Stories</h2>
            <p>
              In 2024, a 72-year-old from Florida lost $45,000 to a fake tech
              support scam. Another senior in California lost $80,000 to a
              romance scam. These are not rare cases — they happen every day. By
              learning these stories, we understand how scammers work and can
              avoid falling into traps.
            </p>

            <h2>❓ Frequently Asked Questions</h2>
            <h3>Q: What should I do if I think I was scammed?</h3>
            <p>
              A: Stop communication immediately. Call your bank to freeze
              accounts. Report to the FBI’s Internet Crime Complaint Center
              (IC3.gov). Tell a trusted family member.
            </p>

            <h3>Q: How do I know if an email is fake?</h3>
            <p>
              A: Look for spelling mistakes, unusual email addresses, and urgent
              language like “Act now!” or “Your account will close today.”
            </p>

            <h3>Q: Should I use antivirus software?</h3>
            <p>
              A: Yes, antivirus helps against viruses, but scams target human
              behavior. Use antivirus for safety, but also stay alert.
            </p>

            <h2>⚡ Final Golden Rules</h2>
            <ul>
              <li>Pause and think before acting. Scammers use fear and urgency.</li>
              <li>Never share OTPs, PINs, or passwords.</li>
              <li>Check with family if something feels suspicious.</li>
              <li>Keep your computer and phone updated.</li>
              <li>Use strong, unique passwords or a password manager.</li>
            </ul>

            <p className="blog-end">
              Scammers are clever, but awareness is stronger. Share this guide
              with your friends and family. Together, we can make the internet a
              safer place for seniors in 2025 and beyond.
            </p>
          </div>
        </div>
      </section>
      <Allsection />
    </>
  );
};

export default Blog;
