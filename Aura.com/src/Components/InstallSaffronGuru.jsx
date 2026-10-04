import React, { useEffect, useState } from "react";
import "./InstallSaffronGuru.css";

/* Small inline pictures of the buttons people need to tap, so the steps match what they see */
const ShareIcon = () => (
  <svg viewBox="0 0 24 24" className="sgi-ico" aria-hidden="true">
    <path d="M12 3v12M7.5 7.5 12 3l4.5 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 11H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const DotsIcon = ({ vertical }) => (
  <svg viewBox="0 0 24 24" className="sgi-ico" aria-hidden="true">
    {vertical
      ? [6, 12, 18].map((y) => <circle key={y} cx="12" cy={y} r="2" fill="currentColor" />)
      : [6, 12, 18].map((x) => <circle key={x} cx={x} cy="12" r="2" fill="currentColor" />)}
  </svg>
);
const PlusSquareIcon = () => (
  <svg viewBox="0 0 24 24" className="sgi-ico" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const InstallIcon = () => (
  <svg viewBox="0 0 24 24" className="sgi-ico" aria-hidden="true">
    <rect x="3" y="4" width="18" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M12 7v6M9.5 10.5 12 13l2.5-2.5M8 20h8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DEVICES = {
  "iphone-safari": {
    tab: "iPhone (Safari)",
    steps: [
      <>Tap the <b>Share</b> button <ShareIcon /> (a square with an arrow pointing up) in the bar at the <b>bottom</b> of the screen. <span className="sgi-note">On newer iPhones, first tap the three dots <DotsIcon /> at the bottom right, then tap <b>Share</b>.</span></>,
      <>A menu slides up. <b>Ignore the row of app icons.</b> Swipe up on the menu until you see <b>Add to Home Screen</b> <PlusSquareIcon />, then tap it.</>,
      <>Tap <b>Add</b> at the top right. The blue Saffron Guru shield is now on your phone. Tap it any time to open our site.</>,
    ],
  },
  "iphone-chrome": {
    tab: "iPhone (Chrome)",
    steps: [
      <>Tap the <b>Share</b> button <ShareIcon /> at the <b>top right</b>, inside the web address bar. <span className="sgi-note">If you don't see it, tap the three dots <DotsIcon /> at the bottom right, then tap <b>Share</b>.</span></>,
      <>A menu slides up. <b>Ignore the row of app icons.</b> Swipe up on the menu until you see <b>Add to Home Screen</b> <PlusSquareIcon />, then tap it.</>,
      <>Tap <b>Add</b>. The blue Saffron Guru shield is now on your phone.</>,
    ],
  },
  android: {
    tab: "Android",
    steps: [
      <>In Chrome, tap the three dots <DotsIcon vertical /> at the <b>top right</b> of the screen.</>,
      <>Tap <b>Add to Home screen</b> (on some phones it says <b>Install app</b>).</>,
      <>Tap <b>Install</b> (or <b>Add</b>). The blue Saffron Guru shield is now on your phone.</>,
    ],
  },
  "windows-chrome": {
    tab: "Computer (Chrome)",
    steps: [
      <>Look at the right end of the web address bar for the <b>Install</b> icon <InstallIcon /> and click it. <span className="sgi-note">Don't see it? Click the three dots <DotsIcon vertical /> at the top right, then <b>Cast, save, and share</b>, then <b>Install page as app</b>.</span></>,
      <>Click <b>Install</b>. Saffron Guru opens in its own window and gets a shortcut on your computer.</>,
    ],
  },
  "windows-edge": {
    tab: "Computer (Edge)",
    steps: [
      <>Click the three dots <DotsIcon /> at the top right of Edge.</>,
      <>Click <b>Apps</b>, then <b>Install this site as an app</b>.</>,
      <>Click <b>Install</b>. Saffron Guru opens in its own window and gets a shortcut on your computer.</>,
    ],
  },
  "mac-safari": {
    tab: "Mac (Safari)",
    steps: [
      <>In the menu bar at the very top of your screen, click <b>File</b>, then <b>Add to Dock…</b> <span className="sgi-note">Or click the <b>Share</b> button <ShareIcon /> in the Safari toolbar, then <b>Add to Dock</b>.</span></>,
      <>Click <b>Add</b>. The Saffron Guru shield appears in your Dock at the bottom of the screen.</>,
    ],
  },
};

function detectDevice() {
  const ua = navigator.userAgent || "";
  const iOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  if (iOS) return /CriOS|EdgiOS|FxiOS/.test(ua) ? "iphone-chrome" : "iphone-safari";
  if (/Android/i.test(ua)) return "android";
  if (/Edg\//.test(ua)) return "windows-edge";
  if (/Macintosh/.test(ua) && /Safari\//.test(ua) && !/Chrome\/|Chromium\//.test(ua)) return "mac-safari";
  return "windows-chrome";
}

const isInstalled = () =>
  (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone === true;

export default function InstallSaffronGuru() {
  const [installed, setInstalled] = useState(false);
  const [open, setOpen] = useState(false);
  const [device, setDevice] = useState("windows-chrome");
  const [canPrompt, setCanPrompt] = useState(false);

  useEffect(() => {
    setInstalled(isInstalled());
    setDevice(detectDevice());
    setCanPrompt(!!window.__sgInstallPrompt);
    const ready = () => setCanPrompt(true);
    const done = () => { setInstalled(true); setOpen(false); };
    window.addEventListener("sg-install-ready", ready);
    window.addEventListener("appinstalled", done);
    return () => {
      window.removeEventListener("sg-install-ready", ready);
      window.removeEventListener("appinstalled", done);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (installed) return null;

  const startInstall = async () => {
    const evt = window.__sgInstallPrompt;
    if (evt) {
      try {
        evt.prompt();
        const choice = await evt.userChoice;
        window.__sgInstallPrompt = null;
        setCanPrompt(false);
        if (choice && choice.outcome === "accepted") setInstalled(true);
        return;
      } catch (e) { /* fall back to the written steps */ }
    }
    setOpen(true);
  };

  const info = DEVICES[device];

  return (
    <div className="sgi-wrap">
      <div className="sgi-badge">
        <img src="/Products/saffron-guru-logo-192.png" alt="" className="sgi-badge-logo" width="48" height="48" loading="lazy" decoding="async" />
        <div className="sgi-badge-text">
          <strong>Install Saffron Guru</strong>
          <span>On your phone or computer. One tap to reach us.</span>
        </div>
        <button type="button" className="sgi-btn" onClick={startInstall}>Install</button>
      </div>
      <button type="button" className="sgi-how" onClick={() => setOpen(true)}>How to install on other devices</button>

      {open && (
        <div className="sgi-overlay" onClick={() => setOpen(false)}>
          <div className="sgi-modal" role="dialog" aria-modal="true" aria-labelledby="sgi-title" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="sgi-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
            <h3 id="sgi-title">Install Saffron Guru</h3>
            <div className="sgi-tabs" role="tablist">
              {Object.entries(DEVICES).map(([key, d]) => (
                <button key={key} type="button" role="tab" aria-selected={device === key}
                  className={`sgi-tab${device === key ? " is-active" : ""}`} onClick={() => setDevice(key)}>
                  {d.tab}
                </button>
              ))}
            </div>
            <ol className="sgi-steps">
              {info.steps.map((s, i) => (
                <li key={i}><span className="sgi-num">{i + 1}</span><div>{s}</div></li>
              ))}
            </ol>
            {canPrompt && (device === "windows-chrome" || device === "windows-edge" || device === "android") && (
              <button type="button" className="sgi-btn sgi-btn-wide" onClick={startInstall}>Install now</button>
            )}
            <p className="sgi-help">Need help? Call us at <a href="tel:+18443134987">+1 844-313-4987</a> and we'll do it with you.</p>
          </div>
        </div>
      )}
    </div>
  );
}
