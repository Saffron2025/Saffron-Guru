import React, { useEffect, useRef } from 'react';
import { FaGlobe, FaEnvelope, FaBug } from 'react-icons/fa';
import './EmailTroubleShooting.css';

const WebsiteEmailBanner = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="emailts-banner">
      <div className="emailts-card">
        <div className="emailts-header">
          {/* Icon cluster */}
          <div className="emailts-icon">
            <FaGlobe />
            <FaEnvelope />
            <FaBug />
          </div>

          <h3 className="emailts-head">🌐📧🐞 Website & Email Troubleshooting</h3>
        </div>

        <p className="emailts-sub">
          When your website goes down or email stops working, business comes to a standstill. 
          This service resolves issues such as domain and DNS errors, hosting problems, 
          slow load times, and email delivery failures.
        </p>
        <p className="emailts-sub">
          From fixing broken links to restoring inbox access, every problem is addressed quickly 
          to restore smooth communication and keep your online presence running without interruption.
        </p>
      </div>
    </section>
  );
};

export default WebsiteEmailBanner;
