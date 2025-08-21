import React from 'react'
import KidsInternetBanner from '../Components/KidsInternetBanner';
import SafeKidsBanner from '../Components/SafeKidsBanner';
import NetHavenBanner from '../Components/NetHavenBanner';
import MostParentalCantrollers from '../Components/MostParentalCantrollers';
import NetHavenInsideBanner from '../Components/NetHavenInsideBanner';
import TimeTrackingBanner from '../Components/TimeTrackingBanner';
import BlockUnsafeBanner from '../Components/BlockUnsafeBanner';
import AppNavbar from '../Components/AppNavbar';
import AllSection from '../Components/AllSection';
import SmartActivityReportsBanner from '../Components/SmartActivityReportsBanner';
import LocationGeofenceBanner from '../Components/LocationGeofenceBanner';
import SmartScreenTimeBanner from '../Components/SmartScreenTimeBanner';
import TamperDetectionBanner from '../Components/TamperDetectionBanner';
import SocialMediaMonitoringBanner from '../Components/SocialMediaMonitoringBanner';
import SafeSearchEnforcementBanner from '../Components/SafeSearchEnforcementBanner';
import AIPoweredBanner from '../Components/AIPoweredBanner';
import WhyChooseNetHaven from '../Components/WhyChooseNetHaven';

const ParentSolution = () => {
  return (
    <>
    <AppNavbar/>
    <div>
<KidsInternetBanner/>
<SafeKidsBanner/>
<NetHavenBanner/>
<MostParentalCantrollers/>
<NetHavenInsideBanner/>
<br />
<TimeTrackingBanner/>
<br />
<BlockUnsafeBanner/>
<br />
<SmartActivityReportsBanner/>
<br />
<LocationGeofenceBanner/>
<br />
<SmartScreenTimeBanner/>
<br />
<TamperDetectionBanner/>
<br />
<SocialMediaMonitoringBanner/>
<br />
<SafeSearchEnforcementBanner/>
<br />
<AIPoweredBanner/>
<br />
<WhyChooseNetHaven/>

    </div>
    <AllSection/>
  </>
  )
}

export default ParentSolution