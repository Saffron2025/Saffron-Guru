import React from 'react';
import AppNavbar from '../Components/AppNavbar.jsx';
import AllSection from '../Components/AllSection.jsx';
import WiFiNetwork from '../Components/WiFiNetwork.jsx';
import MultiplePrinter from '../Components/MultiplePrinter.jsx';
import BusinessEmailSupport from '../Components/BusinessEmailSupport.jsx';
import OfficeSoftwareInstallation from '../Components/OfficeSoftwareInstallation.jsx';
import NetworkSecurity from '../Components/NetworkSecurity.jsx';
import DeviceManagment from '../Components/DeviceManagement.jsx';
import ServerCloud from '../Components/ServerCloud.jsx';
import DriveConfigation from '../Components/DriveConfigation.jsx';
import EmailTroubleShooting from '../Components/EmailTroubleShooting.jsx';
import VPNSetup from '../Components/VPNSetup.jsx';
import BackupSolutions from '../Components/BackupSolution.jsx';
import RemoteWorkshop from '../Components/RemoteWorkshop.jsx';
import ScheduleIT from '../Components/ScheduleIT.jsx';
import OnSiteTechician from '../Components/OnSiteTechician.jsx';
import WhyChooseSaffronGuruSafeSupportAssist from '../Components/WhyChooseSaffronGuruSafeSupportAssist.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ForYourBusiness.css';

export default function ForYourBusiness() {
  return (
    <>
      <AppNavbar />
      <div className="business-page">

        {/* Hero Banner 1 */}
        <section className="business-section hero-banner">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <LazyLoadImage
                  src="/Hero/TechFailures.WebP"
                  alt="Tech Issues"
                  effect="blur"
                  className="business-img"
                />
              </Col>
              <Col md={6}>
                <h1 className="business-hero-head">
                  💻 Tech Failures Drain Productivity, Profits & Patience
                </h1>
                <p className="business-hero-text">
                  Frozen screens, endless error messages, failed connections — when technology breaks,
                  <strong> productivity crashes and customers are left waiting</strong>.  
                  We ensure your business never gets stuck.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Hero Banner 2 */}
        <section className="business-section hero-banner">
          <Container>
            <Row className="align-items-center flex-md-row-reverse">
              <Col md={6}>
                <LazyLoadImage
                  src="/Hero/ProvideTechSupport.WebP"
                  alt="Business Live Tech Support"
                  effect="blur"
                  className="business-img"
                />
              </Col>
              <Col md={6}>
                <h1 className="business-hero-head">
                  🌟 Imagine a Workplace Where Tech Never Holds You Back
                </h1>
                <p className="business-hero-text">
                  Every device connected. Every file secure. Every system optimized —  
                  so your team can <strong>focus on growth</strong>, not fixing problems.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Hero Banner 3 */}
        <section className="business-section hero-banner">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <LazyLoadImage
                  src="/Hero/SafeSupport.WebP"
                  alt="Safe Support Assist"
                  effect="blur"
                  className="business-img"
                />
              </Col>
              <Col md={6}>
                <h1 className="business-hero-head">
                  🛡️ Safe Support Assist™ for Business
                </h1>
                <p className="business-hero-text">
                  Your Own IT Department Without the Overhead.  
                  End-to-end IT: networks, printers, apps, cloud, security, backups —  
                  <strong>all handled by live pros 7 days a week</strong>.
                </p>
                <hr className="business-divider" />
                <h3 className="business-subhead">
                  ✅ What’s Included in Safe Support Assist™
                </h3>
                <p className="business-hero-text">
                  We manage every part of your company’s technology so your team  
                  can focus on what they do best — <strong>running the business</strong>.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      {/* Rest of feature sections */}
      <WiFiNetwork />
      <MultiplePrinter />
      <BusinessEmailSupport />
      <OfficeSoftwareInstallation />
      <NetworkSecurity />
      <DeviceManagment />
      <ServerCloud />
      <DriveConfigation />
      <VPNSetup />
      <EmailTroubleShooting />
      <BackupSolutions />
      <RemoteWorkshop />
      <ScheduleIT />
      <OnSiteTechician />
      <WhyChooseSaffronGuruSafeSupportAssist />
      <AllSection />
    </>
  );
}
