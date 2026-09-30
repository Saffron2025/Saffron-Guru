// src/components/NewsletterForm.js
import React, { useEffect, useRef, useState } from "react";
import MailerLiteScript from "./MailerLiteScript";
import "./NewsletterForm.css";

const NewsletterForm = () => {
  // Load the MailerLite form (and its heavy anti-spam script) only when the
  // visitor scrolls near it, so it does not slow down the first page load.
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show || !ref.current) return;
    if (!("IntersectionObserver" in window)) { setShow(true); return; }
    const io = new IntersectionObserver(
      (entries) => { if (entries.some((e) => e.isIntersecting)) { setShow(true); io.disconnect(); } },
      { rootMargin: "400px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [show]);

  return (
    <section className="newsletter-wrapper" ref={ref}>
      {/* MailerLite script loader */}
      {show && <MailerLiteScript />}

      <div className="newsletter-card">
        <div className="newsletter-header">
          <h2>📩 Stay Protected & Informed</h2>
          <p>
            Join our free newsletter — get scam alerts, safety tips, and updates 
            designed especially for seniors and families.
          </p>
        </div>

        {/* ✅ MailerLite Form Placeholder */}
        <div className="ml-embedded" data-form="5jp7ck"></div>

        <p className="newsletter-note">
          💡 We respect your privacy. No spam, unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterForm;
