import React, { useEffect, useRef } from 'react';
import AppNavbar from '../Components/AppNavbar.jsx'
import AllSection from '../Components/AllSection.jsx'
import WiFiNetwork from '../Components/WiFiNetwork.jsx';
import './ForYourBusiness.css';
import MultiplePrinter from '../Components/MultiplePrinter.jsx';
import BusinessEmailSupport from '../Components/BusinessEmailSupport.jsx';
import OfficeSoftwareInstallation from '../Components/OfficeSoftwareInstallation.jsx';
import NetworkSecurity from '../Components/NetworkSecurity.jsx';
import DeviceManagment from '../Components/DeviceManagement.jsx';
import ServerCloud from '../Components/ServerCloud.jsx';
import DriveConfigation from '../Components/DriveConfigation.jsx';
import EmailTroubleShooting from '../Components/EmailTroubleShooting.jsx'
import VPNSetup from '../Components/VPNSetup.jsx';
import BackupSolutions from '../Components/BackupSolution.jsx';
import RemoteWorkshop from '../Components/RemoteWorkshop.jsx';
import ScheduleIT from '../Components/ScheduleIT.jsx';
import OnSiteTechician from '../Components/OnSiteTechician.jsx';
import WhyChooseSaffronGuruSafeSupportAssist from '../Components/WhyChooseSaffronGuruSafeSupportAssist.jsx';

const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.15 }
    );
    root.querySelectorAll('.bb-banner').forEach(n => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
};

export default function ForYourBusiness() {
  const ref = useReveal();

  return (
    <>    
    <AppNavbar/>
    <div ref={ref} className="bb-wrap">
      {/* Banner 1 */}
      <section className="bb-banner bb-1">
  <div className="bb-bg" />
  <div className="bb-content bb-grid">
    <div className="bb-visual">
      <div className="bb-image-card">
        <img
          src="/Hero/TechFailures.WebP" // ✅ तू अपनी image path डाल दे
          alt="Tech Issues"
          className="bb-img"
          loading="lazy"
        />
      </div>
    </div>
    <div className="bb-text">
      <h2 className="bb-head">
        Tech Failures Drain Productivity, Profits, and Patience.
      </h2>
      <p className="bb-sub">
        Frozen screens, endless error messages, failed connections — when technology breaks,
        productivity crashes, customers wait, and your reputation takes the hit.
      </p>
    </div>
  </div>
</section>

      {/* Banner 2 (with image) */}
      <section className="bb-banner bb-2">
        <div className="bb-bg" />
        <div className="bb-content bb-grid">
          <div className="bb-text">
            <h2 className="bb-head">
              Imagine a Workplace Where Technology Never Holds You Back.
            </h2>
            <p className="bb-sub">
              Every device connected. Every file secure. Every system optimized — so your team can
              focus on growing the business, not fixing problems.
            </p>
          </div>
          <div className="bb-visual">
            {/* Replace src with your real image */}
            <div className="bb-image-card">
              <img
                src="/Hero/ProvideTechSupport.WebP"
                alt="Business Live Tech Support By a Technician wearing a Headphone Provide support Remotely"
                className="bb-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Banner 3 */}
      <section className="bb-banner bb-3">
  <div className="bb-bg" />
  <div className="bb-content bb-grid">
    <div className="bb-visual">
      <div className="bb-image-card">
        <img
          src="/Hero/SafeSupport.WebP" // ✅ तू अपनी image path डाल दे
          alt="Safe Support Assist"
          className="bb-img"
          loading="lazy"
        />
      </div>
    </div>
    <div className="bb-text">
      <h2 className="bb-head">
        Safe Support Assist™ for Business — Your Own IT Department Without the Overhead
      </h2>
      <p className="bb-sub">
        End-to-end IT: networks, shared printers, apps, cloud, security, backups, ongoing maintenance,
        and troubleshooting from minor glitches to complex issues — all handled by live pros 7 days a week.
      </p>

      <div className="bb-divider" aria-hidden />

      <p className="bb-sub bb-strong">
        What’s Included in Safe Support Assist™ for Business
      </p>
      <p className="bb-sub">
        We handle every part of your company’s technology so your team can focus on what they do best.
      </p>
    </div>
  </div>
</section>
    </div>
    <WiFiNetwork/>
    <MultiplePrinter/>
    <BusinessEmailSupport/>
    <OfficeSoftwareInstallation/>
    <NetworkSecurity/>
    <DeviceManagment/>
    <ServerCloud/>
    <DriveConfigation/>
    <VPNSetup/>
    <EmailTroubleShooting/>
    <BackupSolutions/>
    <RemoteWorkshop/>
    <ScheduleIT/>
    <OnSiteTechician/>
    <WhyChooseSaffronGuruSafeSupportAssist/>
    <AllSection/>
    </>

  );
}
