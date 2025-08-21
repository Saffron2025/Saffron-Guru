import React, { useEffect, useRef } from 'react';
import { FaFolderOpen, FaCloud, FaServer } from 'react-icons/fa';
import './DriveConfigation.css';

const DriveConfigation = () => {
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
          {/* Icon cluster: folder (main), cloud + server (subs) */}
          <div className="svc-icon">
            <FaFolderOpen className="i-main" />
            <FaCloud className="i-sub sub-a" />
            <FaServer className="i-sub sub-b" />
          </div>

          <h3 className="svc-head">✅ File Sharing & Drive Configuration</h3>
        </div>

        <p className="svc-sub">
          We set up and configure secure file sharing systems and network drives so your team can easily access, store, and collaborate on business documents. Our service includes organizing shared folders, assigning user permissions, and integrating with platforms like OneDrive, Google Drive, or on-premises file servers. We also troubleshoot access issues, resolve sync problems, and apply security settings to ensure files are available to the right people — and only the right people — at all times.
        </p>
      </div>
    </section>
  );
};

export default DriveConfigation;
