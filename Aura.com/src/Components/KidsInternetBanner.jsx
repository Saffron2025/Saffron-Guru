import React from "react";
import "./KidsInternetBanner.css";

const KidsInternetBanner = () => {
  return (
    <section className="kids-banner">
      {/* Background Layers */}
      <div className="bg-layer gradient"></div>
      <div className="bg-layer blob blob1"></div>
      <div className="bg-layer blob blob2"></div>

      <div className="kids-banner-inner">
        {/* Left Text */}
        <div className="kids-banner-text">
          <h1 className="kids-title">
            🚸 The Internet Wasn’t Built for Kids
          </h1>
          <p className="kids-subtitle">
            From inappropriate content and online predators to screen addiction and cyber-bullying — kids face risks every time they go online.
            Most parents can’t watch over their children 24/7.
          </p>
        </div>

        {/* Right Image */}
        <div className="kids-banner-image">
          <div className="image-glow"></div>
          <img
            src="/Hero/KidsBanner.WebP"
            alt="Child Online Safety"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default KidsInternetBanner;
