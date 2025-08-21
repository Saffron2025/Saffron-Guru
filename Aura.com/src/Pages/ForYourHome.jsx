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
import './ForYourHome.css'

const ForYourHome = () => {
  return (
    <>
    <AppNavbar/>
        <div>
        <section className="tech-banner-wrapper-ultimate">
  <div className="tech-banner-content-ultimate">
    <h1 className="tech-banner-title-ultimate">🧘 You Focus on Life.<br />💻 We Handle the Tech.</h1>
    <p className="tech-banner-subtext-ultimate">
      Whether it’s your <strong>Wi-Fi</strong>, <strong>computer</strong>, <strong>smartphone</strong>, or <strong>printer</strong> — our trusted team is always here to fix, guide, and support you with care.
      <br />
      <span className="highlight-ultimate">No confusion. No hourly fees. Just help you can count on.</span>
    </p>
  </div>

  <div className="tech-banner-floating-image-ultimate">
    <img src="/Hero/TechSupportHome.WebP" alt="Tech Help" />
  </div>

  <div className="tech-banner-glow-layer"></div>
</section>

<section className="tech-help-section-ultimate">
  <div className="tech-help-content-ultimate">
    <h2 className="tech-help-title-ultimate">🧰 What Can We Help You With?</h2>
    <p className="tech-help-subtext-ultimate">
      From everyday tech problems to device setup — and even the toughest fixes — we don’t give up until your tech works like it should.
    </p>
  </div>
</section>


        </div>
<WiFiSetupTroubleShooting/>
<LaptopDesktopRepair/>
<PrinterSupport/>
<SoftwareSupport/>
<SmartTVSupport/>
<EmailSupport/>
<MobileDeviceSupport/>
<RouterNetworkSupport/>
<VirusRemovalSupport/>
<DataBackupSupport/>
<SlowDevicesFix/>
<MonthlyHealthCheck/>
<TechTeamBanner/>
<WhyChooseSafeSupport/>
        <AllSection/>
  </>

  )
}

export default ForYourHome