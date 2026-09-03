import React, { useState } from "react";
import { PhoneCall, X } from "lucide-react";
import "./CallUs.css";
import AppNavbar from "./AppNavbar";
const CallUs = () => {
  const [callOpen, setCallOpen] = useState(false);

  return (
    <>    
    <AppNavbar/>
    <div
      className={`aura-call-toggle ${
        callOpen ? "aura-call-toggle-open" : ""
      }`}
    >
      {/* CALL BUTTON */}
      <button
        type="button"
        className="aura-call-toggle-button"
        onClick={() => setCallOpen(!callOpen)}
        aria-label={
          callOpen
            ? "Close support contact"
            : "Open support contact"
        }
        aria-expanded={callOpen}
      >
        {callOpen ? (
          <X size={25} strokeWidth={2.5} />
        ) : (
          <PhoneCall size={25} strokeWidth={2.5} />
        )}

        <span className="aura-call-toggle-label">
          {callOpen ? "Close" : "Call Us"}
        </span>
      </button>

      {/* SUPPORT PANEL */}
      <div className="aura-call-panel">
        <div className="aura-call-panel-icon">
          <PhoneCall size={25} strokeWidth={2.5} />
        </div>

        <div className="aura-call-panel-content">
          <span className="aura-call-panel-title">
            Need Help?
          </span>

          <span className="aura-call-panel-subtitle">
            Our support team is here for you
          </span>

          <a
            href="tel:+18443134987"
            className="aura-call-panel-number"
          >
            +1 844-313-4987
          </a>
        </div>
      </div>
    </div>
    </>

  );
};

export default CallUs;