// src/Components/AnnouncementBar.jsx
// Thin strip at the very top of every page. Links to /why-human-support.
// The fixed menu bar is moved down below it until the visitor scrolls past it.
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./AnnouncementBar.css";

const KEY = "sg-announcement-closed";

function readClosed() {
  try { return window.sessionStorage.getItem(KEY) === "1"; } catch (e) { return false; }
}

const AnnouncementBar = () => {
  const [closed, setClosed] = useState(readClosed);
  const ref = useRef(null);
  const { pathname } = useLocation();
  const hidden = closed || pathname === "/why-human-support";

  useEffect(() => {
    const root = document.documentElement;
    if (hidden) { root.style.setProperty("--sg-bar-offset", "0px"); return; }
    const update = () => {
      const h = ref.current ? ref.current.offsetHeight : 0;
      root.style.setProperty("--sg-bar-offset", Math.max(0, h - window.scrollY) + "px");
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      root.style.setProperty("--sg-bar-offset", "0px");
    };
  }, [hidden]);

  if (hidden) return null;

  const close = () => {
    try { window.sessionStorage.setItem(KEY, "1"); } catch (e) { /* ignore */ }
    setClosed(true);
  };

  return (
    <div className="sg-announce" ref={ref} role="region" aria-label="Announcement">
      <Link to="/why-human-support" className="sg-announce-link">
        <span className="sg-announce-long">
          Americans 60+ lost <strong>$7.7 billion</strong> to online crime in 2025 (FBI).
          Most of it began with a conversation, not a click.
        </span>
        <span className="sg-announce-short">
          Americans 60+ lost <strong>$7.7 billion</strong> to online crime in 2025.
        </span>
        <span className="sg-announce-cta">See why real people matter →</span>
      </Link>
      <button type="button" className="sg-announce-close" onClick={close} aria-label="Close this message">
        ✕
      </button>
    </div>
  );
};

export default AnnouncementBar;
