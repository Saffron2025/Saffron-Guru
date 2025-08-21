import React, { useEffect, useRef } from 'react';
import { FaBriefcase, FaClock, FaLayerGroup, FaHeadset, FaTools, FaUserCog, FaShieldAlt, FaHandshake } from 'react-icons/fa';
import './WhyChooseSaffronGuruSafeSupportAssist.css';

const WhyChooseSaffronGuruSafeSupportAssist = () => {
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

  const points = [
    { icon: <FaBriefcase />, title: "Business-First Mindset", desc: "We know every tech issue affects productivity, deadlines, and customer trust." },
    { icon: <FaClock />, title: "Nearly 10 Years of Experience", desc: "Proven track record supporting companies across industries." },
    { icon: <FaLayerGroup />, title: "Full Coverage", desc: "From networks and printers to software and security, everything is handled under one plan." },
    { icon: <FaHeadset />, title: "Fast, Reliable Support", desc: "Live technicians available 7 days a week to resolve issues without delay." },
    { icon: <FaTools />, title: "Proactive Maintenance", desc: "Problems are prevented before they cause downtime." },
    { icon: <FaUserCog />, title: "Tailored Solutions", desc: "Services and configurations customized for your business size, industry, and workflow." },
    { icon: <FaShieldAlt />, title: "Security You Can Trust", desc: "Strong protections to keep your data safe and operations running smoothly." },
    { icon: <FaHandshake />, title: "Long-Term Partnership", desc: "We work alongside your team as a dedicated IT ally, not just a help desk." }
  ];

  return (
    <section ref={ref} className="why-wrap">
      <div className="why-header">
        <h2>Why Choose <span className="highlight">Saffron Guru’s Safe Support Assist™</span> for Business</h2>
      </div>

      <div className="why-grid">
        {points.map((p, i) => (
          <div className="why-card" key={i}>
            <div className="icon-box">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>

      {/* ✅ Moved tagline to bottom */}
      <div className="why-bottom-tagline">
        <p>
          When your technology works, your business thrives.<br />
          <strong>Safe Support Assist™</strong> for Business keeps it that way — every day.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseSaffronGuruSafeSupportAssist;
