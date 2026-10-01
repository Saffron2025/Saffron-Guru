import React from "react";
import "./SafeKidsBanner.css";

const SafeKidsBanner = () => {
  return (
    <section className="safe-banner">
      {/* Animated Background Layers */}
      <div className="safe-bg gradient"></div>
      <div className="safe-bg blob blob1"></div>
      <div className="safe-bg blob blob2"></div>

      {/* Inner Content */}
      <div className="safe-inner">
        {/* Left Visual */}
        <div className="safe-image">
          <div className="image-light"></div>
          <img
            src="/Hero/safe-digital-world-for-kids.webp"
            alt="A safer digital world for kids"
            loading="eager"           // 👈 load immediately
            fetchpriority="high"      // 👈 mark as top priority
            width="500"
            height="400"              // 👈 prevent layout shift
          />
        </div>

        {/* Right Text */}
        <div className="safe-text">
          <h2 className="safe-title">
            Imagine a Safer, Healthier Digital World for Your Kids
          </h2>
          <p className="safe-subtitle">
            Where they explore, learn, and play online — free from harmful
            content, toxic strangers, and endless scrolling. Where you feel
            confident knowing they’re protected, even when you’re not in the room.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SafeKidsBanner;
