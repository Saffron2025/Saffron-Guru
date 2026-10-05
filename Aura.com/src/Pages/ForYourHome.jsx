import React from 'react'
import AppNavbar from '../Components/AppNavbar.jsx'
import AllSection from '../Components/AllSection.jsx'
import WiFiSetupTroubleShooting from '../Components/WiFiSetupTroubleShooting.jsx'
import LaptopDesktopRepair from '../Components/LaptopDekstopRepair.jsx'
import PrinterSupport from '../Components/PrinterSetubTroubleShooting.jsx'
import SoftwareSupport from '../Components/SoftwareInstallation.jsx'
import SmartTVSupport from '../Components/SmartTVSupport.jsx'
import EmailSupport from '../Components/EmailOutlook.jsx'
import MobileDeviceSupport from '../Components/IPhoneAndroid.jsx'
import RouterNetworkSupport from '../Components/RouterNetwork.jsx'
import VirusRemovalSupport from '../Components/VirusSpyware.jsx'
import DataBackupSupport from '../Components/DataBackup.jsx'
import SlowDevicesFix from '../Components/SlowDevice.jsx'
import MonthlyHealthCheck from '../Components/MonthlyDeviceSupport.jsx'
import TechTeamBanner from '../Components/YourPersonalTech.jsx'
import WhyChooseSafeSupport from '../Components/WhyChooseSafeSupportAssist.jsx'
import HomeOnSiteAndBuying from '../Components/HomeOnSiteAndBuying.jsx'
import {
  ServiceTiles,
  ExtraServices,
  HowItWorks,
  CheckList,
  TrustCallBand,
  Anchor,
} from '../Components/support/SupportSections.jsx'
import './ForYourHome.css'

/* Services that have their own long section further down the page */
const MAIN_SERVICES = [
  { id: 'home-wifi', icon: '📶', label: 'Wi-Fi Setup & Fixes' },
  { id: 'home-computer', icon: '💻', label: 'Laptop & Desktop Help' },
  { id: 'home-printer', icon: '🖨️', label: 'Printer Setup & Fixes' },
  { id: 'home-software', icon: '🧩', label: 'Software & Office Help' },
  { id: 'home-tv', icon: '📺', label: 'Smart TV & Streaming' },
  { id: 'home-email', icon: '📧', label: 'Email & Outlook' },
  { id: 'home-phone', icon: '📱', label: 'iPhone, Android & Tablets' },
  { id: 'home-router', icon: '🛜', label: 'Router & Home Network' },
  { id: 'home-virus', icon: '🦠', label: 'Virus & Malware Removal' },
  { id: 'home-backup', icon: '💾', label: 'Backup & Recovery' },
  { id: 'home-slow', icon: '🐢', label: 'Slow Computer Fix' },
  { id: 'home-checkup', icon: '🩺', label: 'Monthly Health Checkups' },
]

/* Everyday needs that get a short card */
const MORE_SERVICES = [
  {
    id: 'home-scam-help',
    icon: '🚨',
    label: 'Scammed or Someone Got Into Your Computer?',
    featured: true,
    text: 'If a pop-up, caller or fake website tricked you, call us. We check your computer, remove anything the scammer left behind, secure your accounts and help you with next steps, such as calling your bank.',
  },
  {
    id: 'home-accounts',
    icon: '🔑',
    label: 'Locked Out of an Account?',
    text: 'Gmail, Facebook, Apple ID or Microsoft account? We walk you through the official recovery steps and help you set up passwords you can actually remember.',
  },
  {
    id: 'home-apps',
    icon: '📲',
    label: 'Apps & Accounts Assistance',
    text: 'Setup and help with the apps and accounts you use every day, such as email, Zoom, FaceTime and WhatsApp, banking and shopping apps, plus secure logins and account settings.',
  },
  {
    id: 'home-photos',
    icon: '🖼️',
    label: 'Photos Saved & Organized',
    text: 'Move photos from your phone to your computer or cloud, keep them backed up, and find them again when you want to share them.',
  },
  {
    id: 'home-new-computer',
    icon: '🆕',
    label: 'New Computer Setup',
    text: 'We set up your new computer and bring over your files, email, pictures and favorite websites from the old one.',
  },
  {
    id: 'home-easier',
    icon: '🔠',
    label: 'Make Your Devices Easier to Use',
    text: 'Bigger text, clearer screens, louder sound and a simpler home screen, adjusted to what is comfortable for you.',
  },
  {
    id: 'home-smart',
    icon: '🏠',
    label: 'Smart Home Devices',
    text: 'Help with Alexa, Google Home, video doorbells and other smart devices: setup, Wi-Fi connection and everyday use.',
  },
]

const TILES = [
  { ...MORE_SERVICES[0], label: 'Scam & Hacked Computer Help' },
  ...MAIN_SERVICES,
  ...MORE_SERVICES.slice(1).map(({ id, icon, label }) => ({ id, icon, label })),
  { id: 'home-safe-remote', icon: '🛡️', label: 'Is Remote Help Safe?' },
]

const ForYourHome = () => {
  return (
    <>
      <AppNavbar />
      <div>
        {/* ✅ Banner Section */}
        <section className="tech-banner-wrapper-ultimate">
          <div className="tech-banner-content-ultimate">
            <h1 className="tech-banner-title-ultimate">
              🧘 You Focus on Life.<br />💻 We Handle the Tech.
            </h1>
            <p className="tech-banner-subtext-ultimate">
              Whether it’s your <strong>Wi-Fi</strong>, <strong>computer</strong>, <strong>smartphone</strong>, or <strong>printer</strong> — our trusted team is always here to fix, guide, and support you with care.
              <br />
              <span className="highlight-ultimate">No confusion. No hourly fees. Just help you can count on.</span>
            </p>
          </div>

          <div className="tech-banner-floating-image-ultimate">
            <img
              src="/Hero/saffron-guru-home-tech-support-seniors.webp"
              alt="Saffron Guru home tech support: a smiling senior at home on a video call with a friendly Saffron Guru technician, with his printer, router, phone and tablet nearby"
              width="1376"
              height="768"
              loading="eager"
              fetchpriority="high"
            />
          </div>

          <div className="tech-banner-glow-layer"></div>
        </section>
      </div>

      {/* ✅ Everything we help with, at a glance */}
      <ServiceTiles
        title="Safe Support Assist™:"
        highlight="Everything We Help With"
        subtitle="One friendly team for all the technology in your home. Tap any service to read more."
        items={TILES}
      />

      <HowItWorks
        title="How It Works"
        steps={[
          { title: 'Call Us', text: 'Tell us what is wrong, in your own words. No tech knowledge needed, and no question is too small.' },
          { title: 'We Fix It With You', text: 'We fix it over the phone or remotely while you watch every step, and we explain what we did in plain English.' },
          { title: 'We Stay With You', text: 'Monthly checkups and ongoing support, so you always have someone patient to call when something new comes up.' },
        ]}
      />

      {/* ✅ Help Section */}
      <section className="tech-help-section-ultimate">
        <div className="tech-help-content-ultimate">
          <h2 className="tech-help-title-ultimate">🧰 What Can We Help You With?</h2>
          <p className="tech-help-subtext-ultimate">
            From everyday tech problems to device setup — and even the toughest fixes — we don’t give up until your tech works like it should.
          </p>
        </div>
      </section>

      {/* ✅ Imported Components */}
      <Anchor id="home-wifi"><WiFiSetupTroubleShooting /></Anchor>
      <Anchor id="home-computer"><LaptopDesktopRepair /></Anchor>
      <Anchor id="home-printer"><PrinterSupport /></Anchor>
      <Anchor id="home-software"><SoftwareSupport /></Anchor>
      <Anchor id="home-tv"><SmartTVSupport /></Anchor>
      <Anchor id="home-email"><EmailSupport /></Anchor>
      <Anchor id="home-phone"><MobileDeviceSupport /></Anchor>
      <Anchor id="home-router"><RouterNetworkSupport /></Anchor>
      <Anchor id="home-virus"><VirusRemovalSupport /></Anchor>
      <Anchor id="home-backup"><DataBackupSupport /></Anchor>
      <Anchor id="home-slow"><SlowDevicesFix /></Anchor>
      <Anchor id="home-checkup"><MonthlyHealthCheck /></Anchor>

      <HomeOnSiteAndBuying />

      <ExtraServices
        title="More Ways"
        highlight="We Help Every Day"
        subtitle="The things our customers call us about most, beyond fixing devices."
        items={MORE_SERVICES}
      />

      <CheckList
        id="home-safe-remote"
        tone="blue"
        title="🛡️ Is Remote Help Safe With Saffron Guru?"
        intro="Scammers use remote access too, so it is right to be careful. This is how we work:"
        points={[
          { title: 'You are always in control.', text: 'Nothing happens on your computer without your permission, and you can watch everything we do on your screen.' },
          { title: 'You can end the session at any time,', text: 'with one click.' },
          { title: 'Check it is really us.', text: 'Our number is +1 844-313-4987, the same number shown on this website.' },
          { title: 'We never ask for gift cards, cryptocurrency or wire transfers.', text: 'Anyone who does is not Saffron Guru.' },
        ]}
      />

      <TechTeamBanner />
      <WhyChooseSafeSupport />

      <CheckList
        tone="light"
        title="👨‍👩‍👧 Setting This Up for a Parent or Grandparent?"
        intro="Many people look after the technology of someone they love. Safe Support Assist™ gives them a patient, friendly team to call, and gives you peace of mind."
        points={[
          { title: 'Patient help in plain English,', text: 'with no rush and no judgment.' },
          { title: 'Scam-aware technicians', text: 'who also help them avoid fake calls, pop-ups and websites.' },
          { title: 'One flat plan,', text: 'with no hourly charges.' },
        ]}
      />

      <TrustCallBand
        heading="Talk to a Real Person Today"
        text="Tell us what is going on and we will help you sort it out, step by step."
        points={[
          { icon: '📅', label: 'Serving customers since 2016' },
          { icon: '🧑‍💻', label: 'Real people, not bots' },
          { icon: '🗓️', label: 'Help 7 days a week' },
          { icon: '🤝', label: 'Customers who stay with us for years' },
        ]}
      />

      <AllSection />
    </>
  )
}

export default ForYourHome
