import React, { useEffect, useRef } from 'react';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import './BusinessEmailSupport.css';

const BusinessEmailSupport = () => {
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
          <div className="svc-icon"><FaEnvelopeOpenText /></div>
          <h3 className="svc-head">✅ Business Email Setup & Support</h3>
        </div>
        <p className="svc-sub">
          We set up secure, branded email accounts for your business using platforms like Microsoft 365, Google Workspace, 
          or your preferred email hosting service. Our process includes domain configuration, mailbox creation, and 
          synchronization across desktop, web, and mobile devices for seamless communication. We also manage advanced 
          settings such as spam filtering, forwarding rules, and group email distribution. In addition, we provide ongoing 
          troubleshooting — from fixing send/receive errors and sync issues to resolving security alerts — ensuring your 
          business email runs smoothly, securely, and without disruption.
        </p>
      </div>
    </section>
  );
};

export default BusinessEmailSupport;
