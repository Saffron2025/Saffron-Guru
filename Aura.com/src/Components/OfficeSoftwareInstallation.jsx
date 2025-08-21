import React, { useEffect, useRef } from 'react';
import { FaTools } from 'react-icons/fa';
import './OfficeSoftwareInstallation.css';

const OfficeSoftwareInstallation = () => {
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
          <div className="svc-icon"><FaTools /></div>
          <h3 className="svc-head">✅ Office Software Installation & Troubleshooting</h3>
        </div>
        <p className="svc-sub">
          We install and configure essential business software such as Microsoft Office, accounting tools, and collaboration apps. 
          Our support covers updates, setup adjustments, and troubleshooting issues like crashes, errors, or compatibility problems — 
          keeping your applications running smoothly.
        </p>
      </div>
    </section>
  );
};

export default OfficeSoftwareInstallation;
