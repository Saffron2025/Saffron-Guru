import React, { useEffect, useRef } from 'react';
import { FaDesktop, FaMobileAlt, FaPrint } from 'react-icons/fa';
import './DeviceManagement.css';

const DeviceManagment = () => {
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
    <section ref={ref} className="device-banner">
      <div className="device-card">
        <div className="device-header">
          {/* Icon cluster */}
          <div className="device-icon">
            <FaDesktop className="i-main" />
            <FaMobileAlt className="i-sub" />
            <FaPrint className="i-sub" />
          </div>

          <h3 className="device-head">💻📱🖨️ Device Management (PCs, Printers, Mobiles)</h3>
        </div>

        <p className="device-sub">
          We manage and maintain your business devices — including desktops, laptops, printers, 
          and mobile devices — to keep them secure, optimized, and ready for work.
        </p>
        <p className="device-sub">
          Our service covers device setup, configuration, user permissions, software updates, 
          performance tuning, and system resets when needed. We also provide troubleshooting 
          for software-related issues, connectivity problems, and configuration errors, ensuring 
          your entire device fleet operates smoothly.
        </p>
      </div>
    </section>
  );
};

export default DeviceManagment;
