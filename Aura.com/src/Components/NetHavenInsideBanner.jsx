import React from "react";
import "./NetHavenInsideBanner.css";

const NetHavenInsideBanner = () => {
  return (
    <section className="inside-banner">
      {/* Animated background layers */}
      <div className="inside-bg inside-bg-a" />
      <div className="inside-bg inside-bg-b" />
      <div className="inside-noise" />

      <div className="inside-wrap">
        {/* Left: Sticky Image */}
        <aside className="inside-image">
          <img
            src="/Hero/NetHavenInsideBanner.WebP"  /* <- change to your image path */
            alt="NetHaven devices preview"
            loading="lazy"
          />
          <div className="image-glow" />
        </aside>

        {/* Right: Content (text unchanged) */}
        <article className="inside-content">
          <h2 className="inside-eyebrow">What’s Inside NetHaven™</h2>

          <h3 className="inside-sub">
            Your Complete AI-Powered Parental Control Solution — Protecting Up to 5 Devices in Your Household
          </h3>

          <p className="inside-body">
            NetHaven™ delivers everything you need to protect your children online — in one easy subscription. From setting healthy boundaries to blocking harmful content and tracking online activity, every feature works together to keep your kids safe, focused, and balanced in today’s digital world. With coverage for up to 5 devices, you can protect the entire family across phones, tablets, and computers — all from a single dashboard.
          </p>

          <div className="inside-badges">
            <div className="chip">AI-Powered</div>
            <div className="chip">5 Devices</div>
            <div className="chip">One Dashboard</div>
          </div>

          <div className="inside-cta">
            <button className="cta ghost">Explore Features</button>
            <button className="cta solid">Get NetHaven™</button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default NetHavenInsideBanner;
