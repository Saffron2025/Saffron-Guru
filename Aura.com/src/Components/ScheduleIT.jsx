import React, { useEffect, useRef } from 'react';
import { FaTools, FaClock, FaShieldAlt } from 'react-icons/fa';
import './ScheduleIT.css';

const ScheduleIT = () => {
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
    <section ref={ref} className="svc-banner">
      <div className="svc-bg" />
      <div className="svc-card">
        <div className="svc-header">
          <div className="svc-icon">
            <FaTools className="i-main" />
            <FaClock className="i-sub sub-a" />
            <FaShieldAlt className="i-sub sub-b" />
          </div>
          <h3 className="svc-head">✅ Scheduled IT Maintenance & Optimization</h3>
        </div>
        <p className="svc-sub">
          Consistent, preventative maintenance keeps your technology performing at its best.
          Systems are checked on a set schedule, updates and security fixes are applied without delay,
          and performance settings are tuned for maximum efficiency.
          Small problems are caught before they turn into downtime,
          keeping your business operations smooth, secure, and uninterrupted.
        </p>
      </div>
    </section>
  );
};

export default ScheduleIT;
