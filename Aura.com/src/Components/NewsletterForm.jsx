// src/components/NewsletterForm.js
import React from "react";
import MailerLiteScript from "./MailerLiteScript";
import "./NewsletterForm.css";

const NewsletterForm = () => {
  return (
    <section className="newsletter-wrapper">
      {/* MailerLite script loader */}
      <MailerLiteScript />

      <div className="newsletter-card">
        <div className="newsletter-header">
          <h2>📩 Stay Protected & Informed</h2>
          <p>
            Join our free newsletter — get scam alerts, safety tips, and updates 
            designed especially for seniors and families.
          </p>
        </div>

        {/* MailerLite Form Placeholder */}
        <div className="ml-embedded" data-form="5jp7ck"></div>

        <p className="newsletter-note">
          💡 We respect your privacy. No spam, unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterForm;
