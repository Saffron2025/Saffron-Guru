import React, { useEffect, useRef } from 'react';
import { FaDatabase, FaCloud, FaShieldAlt } from 'react-icons/fa';
import './BackupSolution.css';

const BackupSolutions = () => {
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
          <div className="svc-icon">
            <FaDatabase className="i-main" />
            <FaCloud className="i-sub sub-a" />
            <FaShieldAlt className="i-sub sub-b" />
          </div>
          <h3 className="svc-head">✅ Backup Solutions &amp; Storage Setup</h3>
        </div>
        <p className="svc-sub">
          We protect your business data with secure, automated backup systems and reliable storage solutions. Whether it’s cloud-based, on-premises, or a hybrid setup, backups are configured for regular intervals and tested to ensure successful recovery when needed. Data is encrypted, storage is optimized for speed and capacity, and restoration is fast — so even in the event of accidental deletion or system failure, your critical files remain safe and accessible.
        </p>
      </div>
    </section>
  );
};

export default BackupSolutions;
