import React from "react";
import { Container } from "react-bootstrap";
import "./BlockUnsafeBanner.css";

const BlockUnsafeBanner = () => {
  return (
    <section className="block-banner">
      <div className="block-overlay"></div>

      <Container>
        <div className="block-content">
          <h2 className="block-heading">🚫 Block Unsafe Sites & Apps</h2>
          <p className="block-text">
            NetHaven™ uses AI-driven filters to detect and block harmful or inappropriate websites and applications — even newly released ones that other systems miss.
            Whether it’s explicit content, violent games, risky chat platforms, or hidden browser apps, NetHaven™ works in real time to stop access before your child can see or download them.
            <br /><br />
            You decide what’s allowed, and NetHaven™ enforces it across every protected device.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default BlockUnsafeBanner;
