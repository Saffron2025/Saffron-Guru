import React, { useEffect, useRef } from 'react';
import { FaGlobe, FaEnvelope, FaBug } from 'react-icons/fa';
import './EmailTroubleShooting.css';

const WebsiteEmailBanner = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="svc-banner">
      <div className="svc-bg" />
      <div className="svc-card">
        <div className="svc-header">
          {/* Icon cluster: web (main), mail + bug (subs) */}
          <div className="svc-icon">
            <FaGlobe className="i-main" />
            <FaEnvelope className="i-sub sub-a" />
            <FaBug className="i-sub sub-b" />
          </div>

          <h3 className="svc-head">✅ Website &amp; Email Troubleshooting</h3>
        </div>

        <p className="svc-sub">
          When your website goes down or email stops working, business comes to a standstill. This service resolves issues such as domain and DNS errors, hosting problems, slow load times, and email delivery failures. From fixing broken links to restoring inbox access, every problem is addressed quickly to restore smooth communication and keep your online presence running without interruption.
        </p>
      </div>
    </section>
  );
};

export default WebsiteEmailBanner;
