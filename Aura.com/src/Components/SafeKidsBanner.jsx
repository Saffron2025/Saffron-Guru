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
            src="/Hero/SafeKidsBanner.WebP"
            alt="Safe Digital World"
            loading="lazy"
          />
        </div>

        {/* Right Text */}
        <div className="safe-text">
          <h1 className="safe-title">
            Imagine a Safer, Healthier Digital World for Your Kids
          </h1>
          <p className="safe-subtitle">
            Where they explore, learn, and play online — free from harmful content,
            toxic strangers, and endless scrolling. Where you feel confident knowing
            they’re protected, even when you’re not in the room.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SafeKidsBanner;
