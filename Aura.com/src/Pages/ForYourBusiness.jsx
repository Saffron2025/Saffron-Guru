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
import {
  ServiceTiles,
  ExtraServices,
  HowItWorks,
  TrustCallBand,
  Anchor,
} from '../Components/support/SupportSections.jsx';
import './ForYourBusiness.css';

/* Services that have their own long section further down the page */
const MAIN_SERVICES = [
  { id: 'biz-wifi', icon: '📶', label: 'Wi-Fi & Access Points' },
  { id: 'biz-printers', icon: '🖨️', label: 'Printers & Copiers' },
  { id: 'biz-email', icon: '📧', label: 'Business Email' },
  { id: 'biz-office', icon: '🛠️', label: 'Office Software' },
  { id: 'biz-firewall', icon: '🧱', label: 'Network Security & Firewall' },
  { id: 'biz-devices', icon: '💻', label: 'Device Management' },
  { id: 'biz-cloud', icon: '☁️', label: 'Server & Cloud Sync' },
  { id: 'biz-files', icon: '📂', label: 'File Sharing & Drives' },
  { id: 'biz-vpn', icon: '🔒', label: 'VPN & Remote Access' },
  { id: 'biz-website', icon: '🌐', label: 'Website & Email Fixes' },
  { id: 'biz-backup', icon: '💾', label: 'Backup & Storage' },
  { id: 'biz-remote', icon: '👥', label: 'Remote Workforce Setup' },
  { id: 'biz-maintenance', icon: '⏰', label: 'Scheduled Maintenance' },
  { id: 'biz-onsite', icon: '🚚', label: 'On-Site Technician' },
];

/* Managed IT essentials that get a short card */
const MANAGED_IT = [
  {
    id: 'biz-updates',
    icon: '🔄',
    label: 'Updates & Patch Management',
    text: 'We keep Windows, macOS and your business software up to date, so known security holes are closed before anyone can use them.',
  },
  {
    id: 'biz-m365',
    icon: '📨',
    label: 'Microsoft 365 & Google Workspace',
    text: 'User accounts, mailboxes, licenses, shared calendars and permissions, managed for you and set up the right way.',
  },
  {
    id: 'biz-staff',
    icon: '🧑‍💼',
    label: 'New Staff Setup & Leavers',
    text: 'New team members get their accounts, email and computer ready on day one. When someone leaves, their access is closed properly.',
  },
  {
    id: 'biz-security',
    icon: '🔐',
    label: 'Security Basics for Your Team',
    text: 'Two-step login (MFA), endpoint protection on every device and practical guidance so your staff can spot scam emails, fake invoices and phishing links.',
  },
  {
    id: 'biz-assets',
    icon: '🧾',
    label: 'Device & License Tracking',
    text: 'Know which computers and software your business has, who uses them and when licenses and warranties are due for renewal.',
  },
  {
    id: 'biz-vendors',
    icon: '🤝',
    label: 'We Deal With Your Vendors',
    text: 'Internet provider, printer company or software vendor: we make the calls and handle the technical conversation for you.',
  },
  {
    id: 'biz-advice',
    icon: '🧭',
    label: 'Technology Advice & Buying Help',
    text: 'Honest advice on which computers, printers and software fit your business and your budget, before you spend money.',
  },
];

const TILES = [
  ...MAIN_SERVICES,
  ...MANAGED_IT.map(({ id, icon, label }) => ({ id, icon, label })),
];

export default function ForYourBusiness() {
  return (
    <>
      <AppNavbar />
      <div className="business-page">

        {/* Hero Banner 1 - eager load */}
        <section className="business-section hero-banner">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <img
                  src="/Hero/business-tech-failures.webp"
                  alt="Small business tech problems slowing down work"
                  className="business-img"
                  loading="eager"   // ✅ fast load
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

        {/* Hero Banner 2 - eager load */}
        <section className="business-section hero-banner">
          <Container>
            <Row className="align-items-center flex-md-row-reverse">
              <Col md={6}>
                <img
                  src="/Hero/saffron-guru-business-live-tech-support.webp"
                  alt="Saffron Guru live tech support for small businesses"
                  className="business-img"
                  loading="eager"   // ✅ fast load
                />
              </Col>
              <Col md={6}>
                <h2 className="business-hero-head">
                  🌟 Imagine a Workplace Where Tech Never Holds You Back
                </h2>
                <p className="business-hero-text">
                  Every device connected. Every file secure. Every system optimized —  
                  so your team can <strong>focus on growth</strong>, not fixing problems.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Hero Banner 3 - eager load */}
        <section className="business-section hero-banner">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <img
                  src="/Hero/safe-support-assist-for-business.webp"
                  alt="Safe Support Assist for business by Saffron Guru"
                  className="business-img"
                  loading="eager"   // ✅ fast load
                />
              </Col>
              <Col md={6}>
                <h2 className="business-hero-head">
                  🛡️ Safe Support Assist™ for Business
                </h2>
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

      {/* Everything included, at a glance */}
      <ServiceTiles
        title="Safe Support Assist™ for Business:"
        highlight="Everything Included"
        subtitle="Your complete IT department in one plan. Tap any service to read more."
        items={TILES}
      />

      <HowItWorks
        title="How It Works"
        steps={[
          { title: 'Talk to Us', text: 'Tell us about your business, your team, your devices and what keeps going wrong.' },
          { title: 'We Set Things Right', text: 'We fix current problems, secure your devices and accounts, and organize your setup so it is easy to manage.' },
          { title: 'Ongoing IT Care', text: 'Regular maintenance and updates, plus live help 7 days a week whenever your team gets stuck.' },
        ]}
      />

      {/* Rest of feature sections - lazy load remains */}
      <Anchor id="biz-wifi"><WiFiNetwork /></Anchor>
      <Anchor id="biz-printers"><MultiplePrinter /></Anchor>
      <Anchor id="biz-email"><BusinessEmailSupport /></Anchor>
      <Anchor id="biz-office"><OfficeSoftwareInstallation /></Anchor>
      <Anchor id="biz-firewall"><NetworkSecurity /></Anchor>
      <Anchor id="biz-devices"><DeviceManagment /></Anchor>
      <Anchor id="biz-cloud"><ServerCloud /></Anchor>
      <Anchor id="biz-files"><DriveConfigation /></Anchor>
      <Anchor id="biz-vpn"><VPNSetup /></Anchor>
      <Anchor id="biz-website"><EmailTroubleShooting /></Anchor>
      <Anchor id="biz-backup"><BackupSolutions /></Anchor>
      <Anchor id="biz-remote"><RemoteWorkshop /></Anchor>
      <Anchor id="biz-maintenance"><ScheduleIT /></Anchor>
      <Anchor id="biz-onsite"><OnSiteTechician /></Anchor>

      <ExtraServices
        title="Complete"
        highlight="Managed IT"
        subtitle="The behind-the-scenes work that keeps a business running safely, included in your plan."
        items={MANAGED_IT}
      />

      <WhyChooseSaffronGuruSafeSupportAssist />

      <TrustCallBand
        heading="Let’s Talk About Your Business IT"
        text="Tell us how your team works today, and we will show you how Safe Support Assist™ can take IT off your plate."
        points={[
          { icon: '📅', label: 'Serving businesses since 2016' },
          { icon: '🧑‍💻', label: 'Real technicians, not bots' },
          { icon: '🗓️', label: 'Live help 7 days a week' },
          { icon: '⭐', label: 'BBB A+ rated' },
          { icon: '🤝', label: 'Long-term partnerships' },
        ]}
      />

      <AllSection />
    </>
  );
}
