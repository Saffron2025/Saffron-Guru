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
    <section ref={ref} className="schedule-banner">
      <div className="schedule-card">
        <div className="schedule-header">
          <div className="schedule-icon">
            <FaTools />
            <FaClock />
            <FaShieldAlt />
          </div>
          <h3 className="schedule-head">🛠️⏰🛡️ Scheduled IT Maintenance & Optimization</h3>
        </div>

        <p className="schedule-sub">
          Consistent, preventative maintenance keeps your technology performing at its best. 
          Systems are checked on a set schedule, updates and security fixes are applied without delay, 
          and performance settings are tuned for maximum efficiency.
        </p>
        <p className="schedule-sub">
          Small problems are caught before they turn into downtime, keeping your business operations 
          smooth, secure, and uninterrupted.
        </p>
      </div>
    </section>
  );
};

export default ScheduleIT;
