import React, { useEffect, useRef } from 'react';
import { 
  FaBriefcase, FaClock, FaLayerGroup, FaHeadset, 
  FaTools, FaUserCog, FaShieldAlt, FaHandshake 
} from 'react-icons/fa';
import './WhyChooseSaffronGuruSafeSupportAssist.css';

const WhyChooseSaffronGuruSafeSupportAssist = () => {
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
    <section ref={ref} className="why-section">
      <div className="why-top">
        <h2 className="why-title">
          Why Choose <span>Saffron Guru’s Safe Support Assist™</span> for Business
        </h2>
        <p className="why-sub">
          A complete IT support solution designed to keep businesses running without interruptions.
        </p>
      </div>

      <div className="why-steps">
        {points.map((p, i) => (
          <div className="why-step" key={i}>
            <div className="why-number">{i + 1}</div>
            <div className="why-content">
              <div className="why-icon">{p.icon}</div>
              <div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="why-footer">
        <p>
          <strong>Safe Support Assist™</strong> ensures your technology never slows you down.  
          <br /> When IT runs smoothly, your business can thrive.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseSaffronGuruSafeSupportAssist;
