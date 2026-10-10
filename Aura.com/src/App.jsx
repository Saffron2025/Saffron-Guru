import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import OurStory from "./Pages/OurStory";
import WhyHumanSupport from "./Pages/WhyHumanSupport";
import Veterans from "./Pages/Veterans";
import ScamBlocker from "./Pages/ScamBlocker";
import Seniors from "./Pages/Seniors";
import keepAlive from "./utils/keepalive";
import ScrollToTop from "./Components/ScrollToTop";
import { RouteMeta } from "./utils/pageMeta";
import Layout from "./Layout";
import OneSignal from "react-onesignal";

// 📄 Pages
import Home from "./Pages/Home";
import Feature from "./Pages/Feature";
import DefendPro from "./Pages/DefendPro";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import UserDashboard from "./Pages/UserDashboard";
import OtpVerify from "./Pages/Otp";

import About from "./Components/About";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Terms from "./Components/Terms";
import ReturnPolicy from "./Components/ReturnPolicy";
import WhyChooseUs from "./Components/WhyChooseUs";

import Solution from "./Pages/Solution";
import Resources from "./Pages/Resources";
import HowSaffronWorks from "./Pages/HowSaffronWorks";
import Fox from "./Pages/Fox";
import CBS from "./Pages/CBS";
import ABC11 from "./Pages/ABC11";
import NewYorkPolice from "./Pages/NewYorkPolice";
import ABCNational from "./Pages/ABCNational";
import AccountIn from "./Pages/AccountIn";
import MicrosoftStore from "./Pages/MicrosoftStore";
import InternetSecurity from "./Pages/InternetSecurity";
import LearnMore from "./Pages/LearnMore";
import ForYourBusiness from "./Pages/ForYourBusiness";
import ForYourHome from "./Pages/ForYourHome";
import ParentSolution from "./Pages/ParentSolution";
import Pricing from "./Pages/Pricing";
import DaysMoneyBack from "./Pages/DaysMoneyBack";
import IdentifyFakeCalls from "./Pages/IdentifyFakeCalls";
import ReadFAQ from "./Pages/ReadFAQ";
import FixMyTech from "./Pages/FixMyTech";
import ProductDetail from "./Pages/ProductDetail";
import LiveSupport from "./Pages/LiveSupport";

import BlogHome from "./Pages/Blogs/BlogHome";
import BlogPost from "./Pages/Blogs/BlogPost";

import ArticleDetail from "./Pages/ArticleDetail";
import ArticlesList from "./Pages/ArticlesList";


// ===============================
// Scroll To Hash Helper
// ===============================
const ScrollToHashElement = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const go = (behavior) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior });
      };
      go("smooth");
      /* Images above the section can load late and push it down, so settle the position again */
      const timers = [900, 2000, 3500].map((ms) =>
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el && Math.abs(el.getBoundingClientRect().top) > 120) go("auto");
        }, ms)
      );
      const stop = () => timers.forEach(clearTimeout);
      window.addEventListener("wheel", stop, { once: true, passive: true });
      window.addEventListener("touchstart", stop, { once: true, passive: true });
      return () => {
        stop();
        window.removeEventListener("wheel", stop);
        window.removeEventListener("touchstart", stop);
      };
    }
  }, [hash]);

  return null;
};


// ===============================
// Main App
// ===============================
const App = () => {

  useEffect(() => {

    // Backend keep alive
    keepAlive();

    // OneSignal initialization
    if (!window.OneSignalInitialized) {
      OneSignal.init({
        appId: "008d4144-75d7-4b47-8fe7-537c358496a0",
        notifyButton: {
          enable: true,
        },
        allowLocalhostAsSecureOrigin: true,
      });

      window.OneSignalInitialized = true;
    }

  }, []);


  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        overflowX: "hidden",
      }}
    >

      <Router>

        <ScrollToTop />

        <RouteMeta />

        <ScrollToHashElement />

        <Routes>


          {/* =========================
              HOME
          ========================= */}

          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />

          <Route
            path="/home"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />


          {/* =========================
              AUTH PAGES
              Layout nahi chahiye
          ========================= */}

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/signup"
            element={<Signup />}
          />

          <Route
            path="/verify-otp"
            element={<OtpVerify />}
          />


          {/* =========================
              MAIN PAGES
          ========================= */}

          <Route
            path="/features"
            element={
              <Layout>
                <Feature />
              </Layout>
            }
          />

          <Route
            path="/defendme-pro-security"
            element={
              <Layout>
                <DefendPro />
              </Layout>
            }
          />

          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />

          <Route
            path="/about-us"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />

          <Route
            path="/privacy-policy"
            element={
              <Layout>
                <PrivacyPolicy />
              </Layout>
            }
          />

          <Route
            path="/terms"
            element={
              <Layout>
                <Terms />
              </Layout>
            }
          />

          <Route
            path="/return-policy"
            element={
              <Layout>
                <ReturnPolicy />
              </Layout>
            }
          />

          <Route
            path="/why-us"
            element={
              <Layout>
                <WhyChooseUs />
              </Layout>
            }
          />


          {/* =========================
              USER DASHBOARD
          ========================= */}

          <Route
            path="/userdashboard"
            element={
              <Layout>
                <UserDashboard />
              </Layout>
            }
          />


          {/* =========================
              SOLUTIONS
          ========================= */}

          <Route
            path="/protecting-seniors"
            element={
              <Layout>
                <Solution />
              </Layout>
            }
          />

          <Route
            path="/resources"
            element={
              <Layout>
                <Resources />
              </Layout>
            }
          />

          <Route
            path="/how-it-works"
            element={
              <Layout>
                <HowSaffronWorks />
              </Layout>
            }
          />


          {/* =========================
              NEWS / MEDIA
          ========================= */}

          <Route
            path="/featured-on-fox"
            element={
              <Layout>
                <Fox />
              </Layout>
            }
          />

          <Route
            path="/featured-on-cbs"
            element={
              <Layout>
                <CBS />
              </Layout>
            }
          />

          <Route
            path="/featured-on-abc11"
            element={
              <Layout>
                <ABC11 />
              </Layout>
            }
          />

          <Route
            path="/featured-on-ny-police"
            element={
              <Layout>
                <NewYorkPolice />
              </Layout>
            }
          />

          <Route
            path="/featured-on-abc-news"
            element={
              <Layout>
                <ABCNational />
              </Layout>
            }
          />


          {/* =========================
              SECURITY PAGES
          ========================= */}

          <Route
            path="/AccountIn"
            element={
              <Layout>
                <AccountIn />
              </Layout>
            }
          />

          <Route
            path="/defendme-pro-features"
            element={
              <Layout>
                <LearnMore />
              </Layout>
            }
          />

          <Route
            path="/microsoft-software"
            element={
              <Layout>
                <MicrosoftStore />
              </Layout>
            }
          />

          <Route
            path="/internet-security"
            element={
              <Layout>
                <InternetSecurity />
              </Layout>
            }
          />


          {/* =========================
              BUSINESS / HOME
          ========================= */}

          <Route
            path="/it-support-business"
            element={
              <Layout>
                <ForYourBusiness />
              </Layout>
            }
          />

          <Route
            path="/it-support-home"
            element={
              <Layout>
                <ForYourHome />
              </Layout>
            }
          />

          <Route
            path="/parental-control"
            element={
              <Layout>
                <ParentSolution />
              </Layout>
            }
          />


          {/* =========================
              OTHER PAGES
          ========================= */}

          <Route
            path="/pricing"
            element={
              <Layout>
                <Pricing />
              </Layout>
            }
          />

          <Route
            path="/money-back-guarantee"
            element={
              <Layout>
                <DaysMoneyBack />
              </Layout>
            }
          />

          <Route
            path="/spot-fake-calls"
            element={
              <Layout>
                <IdentifyFakeCalls />
              </Layout>
            }
          />

          <Route
            path="/faq"
            element={
              <Layout>
                <ReadFAQ />
              </Layout>
            }
          />

          <Route
            path="/fix-my-tech"
            element={
              <Layout>
                <FixMyTech />
              </Layout>
            }
          />


          {/* =========================
              PRODUCT
          ========================= */}

          <Route
            path="/product/:id"
            element={
              <Layout>
                <ProductDetail />
              </Layout>
            }
          />


          {/* =========================
              LIVE SUPPORT
          ========================= */}

          <Route
            path="/live-support"
            element={
              <Layout>
                <LiveSupport />
              </Layout>
            }
          />


          {/* =========================
              BLOG
          ========================= */}

          <Route
            path="/blog"
            element={
              <Layout>
                <BlogHome />
              </Layout>
            }
          />

          <Route
            path="/blog/:slug"
            element={
              <Layout>
                <BlogPost />
              </Layout>
            }
          />


          {/* =========================
              ARTICLES
          ========================= */}

          <Route
            path="/online-safety-hub"
            element={
              <Layout>
                <ArticlesList />
              </Layout>
            }
          />

          <Route
            path="/articles/:id"
            element={
              <Layout>
                <ArticleDetail />
              </Layout>
            }
          />
          <Route
            path="/why-human-support"
            element={
              <Layout>
                <WhyHumanSupport />
              </Layout>
            }
          />

          <Route
            path="/seniors"
            element={<Layout><Seniors /></Layout>}
          />

          <Route
            path="/scam-popup-blocker"
            element={<Layout><ScamBlocker /></Layout>}
          />

          <Route
            path="/our-story"
            element={<Layout><OurStory /></Layout>}
          />
          <Route
            path="/veterans"
            element={<Layout><Veterans /></Layout>}
          />
          <Route path="/Veterens" element={<Navigate to="/veterans" replace />} />

          {/* =========================
              OLD → CLEAN URL REDIRECTS
          ========================= */}
          <Route path="/DefendPro" element={<Navigate to="/defendme-pro-security" replace />} />
          <Route path="/LearnMore" element={<Navigate to="/defendme-pro-features" replace />} />
          <Route path="/for-your-home" element={<Navigate to="/it-support-home" replace />} />
          <Route path="/for-your-business" element={<Navigate to="/it-support-business" replace />} />
          <Route path="/Parent-Solution" element={<Navigate to="/parental-control" replace />} />
          <Route path="/solution" element={<Navigate to="/protecting-seniors" replace />} />
          <Route path="/HowSaffronWorks" element={<Navigate to="/how-it-works" replace />} />
          <Route path="/FixMyTech" element={<Navigate to="/fix-my-tech" replace />} />
          <Route path="/Pricing" element={<Navigate to="/pricing" replace />} />
          <Route path="/DaysMoneyBack" element={<Navigate to="/money-back-guarantee" replace />} />
          <Route path="/IdentifyFakeCalls" element={<Navigate to="/spot-fake-calls" replace />} />
          <Route path="/ReadFAQ" element={<Navigate to="/faq" replace />} />
          <Route path="/article" element={<Navigate to="/online-safety-hub" replace />} />
          <Route path="/microsoft-store" element={<Navigate to="/microsoft-software" replace />} />
          <Route path="/Fox" element={<Navigate to="/featured-on-fox" replace />} />
          <Route path="/CBS" element={<Navigate to="/featured-on-cbs" replace />} />
          <Route path="/ABC11" element={<Navigate to="/featured-on-abc11" replace />} />
          <Route path="/ABCNational" element={<Navigate to="/featured-on-abc-news" replace />} />
          <Route path="/NewYorkPolice" element={<Navigate to="/featured-on-ny-police" replace />} />


          {/* =========================
              404
          ========================= */}

          <Route
            path="*"
            element={
              <h1 style={{ textAlign: "center", marginTop: "100px" }}>
                404 - Page Not Found
              </h1>
            }
          />

        </Routes>

      </Router>

    </div>
  );
};

export default App;