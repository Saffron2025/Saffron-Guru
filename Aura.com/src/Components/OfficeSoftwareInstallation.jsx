import React, { useEffect, useRef } from 'react';
import { FaTools } from 'react-icons/fa';
import './OfficeSoftwareInstallation.css';

const OfficeSoftwareInstallation = () => {
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
    <section ref={ref} className="office-banner">
      <div className="office-card">
        <div className="office-header">
          <div className="office-icon"><FaTools /></div>
          <h3 className="office-head">🛠️ Office Software Installation & Troubleshooting</h3>
        </div>
        <p className="office-sub">
          We install and configure essential business software such as Microsoft Office, accounting tools, 
          and collaboration apps. Our support covers updates, setup adjustments, and troubleshooting issues 
          like crashes, errors, or compatibility problems — keeping your applications running smoothly and reliably.
        </p>
      </div>
    </section>
  );
};

export default OfficeSoftwareInstallation;
