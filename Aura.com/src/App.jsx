import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import keepAlive from "./utils/keepalive";
import ScrollToTop from "./Components/ScrollToTop";
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
      const element = document.getElementById(
        hash.replace("#", "")
      );

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
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
            path="/DefendPro"
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
            path="/solution"
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
            path="/HowSaffronWorks"
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
            path="/Fox"
            element={
              <Layout>
                <Fox />
              </Layout>
            }
          />

          <Route
            path="/CBS"
            element={
              <Layout>
                <CBS />
              </Layout>
            }
          />

          <Route
            path="/ABC11"
            element={
              <Layout>
                <ABC11 />
              </Layout>
            }
          />

          <Route
            path="/NewYorkPolice"
            element={
              <Layout>
                <NewYorkPolice />
              </Layout>
            }
          />

          <Route
            path="/ABCNational"
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
            path="/LearnMore"
            element={
              <Layout>
                <LearnMore />
              </Layout>
            }
          />

          <Route
            path="/microsoft-store"
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
            path="/for-your-business"
            element={
              <Layout>
                <ForYourBusiness />
              </Layout>
            }
          />

          <Route
            path="/for-your-home"
            element={
              <Layout>
                <ForYourHome />
              </Layout>
            }
          />

          <Route
            path="/Parent-Solution"
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
            path="/Pricing"
            element={
              <Layout>
                <Pricing />
              </Layout>
            }
          />

          <Route
            path="/DaysMoneyBack"
            element={
              <Layout>
                <DaysMoneyBack />
              </Layout>
            }
          />

          <Route
            path="/IdentifyFakeCalls"
            element={
              <Layout>
                <IdentifyFakeCalls />
              </Layout>
            }
          />

          <Route
            path="/ReadFAQ"
            element={
              <Layout>
                <ReadFAQ />
              </Layout>
            }
          />

          <Route
            path="/FixMyTech"
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
            path="/article"
            element={
              <Layout>
                <ArticlesList />
              </Layout>
            }
          />

          <Route
            path="/article/:id"
            element={
              <Layout>
                <ArticleDetail />
              </Layout>
            }
          />


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