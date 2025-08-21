import React from "react";
import { Container } from "react-bootstrap";
import "./AIPoweredBanner.css";

const AIPoweredBanner = () => {
  return (
    <section className="ai-banner">
      <div className="ai-overlay"></div>

      <Container>
        <div className="ai-content">
          <h2 className="ai-heading">🤖 AI Powered</h2>
          <p className="ai-text">
            At the heart of NetHaven™ is advanced artificial intelligence that constantly learns from 
            new threats and adapts its protection in real time. Unlike static parental controls that 
            rely on outdated blocklists, NetHaven™ uses AI to identify emerging risks — from newly 
            launched harmful websites to suspicious keywords in chats — and responds instantly.
            <br /><br />
            This means your child’s protection gets smarter every day, staying ahead of the 
            ever-changing digital world.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AIPoweredBanner;
