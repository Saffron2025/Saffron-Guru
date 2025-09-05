import React from "react";
import "./NetHavenBanner.css";

const NetHavenBanner = () => {
  return (
    <section className="nethaven-banner">
      {/* Background layers */}
      <div className="nh-bg gradient"></div>
      <div className="nh-bg blob blob1"></div>
      <div className="nh-bg blob blob2"></div>

      <div className="nethaven-inner">
        {/* Left Fixed Image */}
        <div className="nh-image left-image">
          <div className="image-light"></div>
          <img
            src="/Hero/NetHavenBanner1.WebP"
            alt="Parental Safety"
            loading="eager"          // 👈 load immediately
            fetchpriority="high"     // 👈 highest priority
            width="400"
            height="280"             // 👈 reduce layout shift
          />
        </div>

        {/* Center Text */}
        <div className="nh-text">
          <h1 className="nh-title">
            NetHaven™ — AI-Powered Parental Control Solution
          </h1>
          <p className="nh-subtitle">
            Guide your children toward a safer, healthier digital life with our
            AI-powered parental control solution — built to protect, filter, and
            encourage positive online habits.
          </p>
        </div>

        {/* Right Fixed Image */}
        <div className="nh-image right-image">
          <div className="image-light"></div>
          <img
            src="/Hero/NetHavenBanner2.WebP"
            alt="Child Safe Internet"
            loading="eager"          // 👈 load immediately
            fetchpriority="high"     // 👈 highest priority
            width="400"
            height="280"
          />
        </div>
      </div>
    </section>
  );
};

export default NetHavenBanner;
