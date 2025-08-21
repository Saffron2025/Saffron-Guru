import React, { useEffect, useRef } from 'react';
import { FaTruck, FaWrench, FaMapMarkerAlt } from 'react-icons/fa';
import './OnSiteTechician.css';

const OnSiteTechician = () => {
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
          {/* Icon cluster */}
          <div className="svc-icon">
            <FaTruck className="i-main" />
            <FaWrench className="i-sub sub-a" />
            <FaMapMarkerAlt className="i-sub sub-b" />
          </div>

          <h3 className="svc-head">✅ On-Site Technician Dispatch (as needed)</h3>
        </div>

        <p className="svc-sub">
          When remote fixes aren’t enough, a skilled technician arrives at your workplace to resolve the issue directly, restore full functionality, and keep your operations moving.
        </p>
      </div>
    </section>
  );
};

export default OnSiteTechician;
