import React, { useEffect, useRef } from 'react';
import { FaDesktop, FaMobileAlt, FaPrint } from 'react-icons/fa';
import './DeviceManagement.css';

const DeviceManagment = () => {
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
            <FaDesktop className="i-main" />
            <FaMobileAlt className="i-sub sub-a" />
            <FaPrint className="i-sub sub-b" />
          </div>

          <h3 className="svc-head">✅ Device Management (PCs, Printers, Mobiles)</h3>
        </div>

        <p className="svc-sub">
          We manage and maintain your business devices — including desktops, laptops, printers, and mobile devices — to keep them secure, optimized, and ready for work. Our service covers device setup, configuration, user permissions, software updates, performance tuning, and system resets when needed. We also provide troubleshooting for software-related issues, connectivity problems, and configuration errors, ensuring your entire device fleet operates smoothly.
        </p>
      </div>
    </section>
  );
};

export default DeviceManagment;
