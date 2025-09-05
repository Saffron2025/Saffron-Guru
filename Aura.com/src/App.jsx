import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import keepAlive from "./utils/keepalive";
import ScrollToTop from "./Components/ScrollToTop";
import Layout from "./Layout";

// ✅ Firebase
import { getFCMToken, listenForeground } from "./firebase";

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


// ✅ Scroll helper
const ScrollToHashElement = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);
  return null;
};

const App = () => {
  useEffect(() => {
    keepAlive();
    const API_BASE =
      import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

    // 🔹 Save token to backend
    const registerToken = async (token) => {
      try {
        const res = await fetch(`${API_BASE}/api/notifications/register-token`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });
        const data = await res.json();
        console.log("📩 Token saved on backend:", data);
      } catch (err) {
        console.error("❌ Error saving token:", err);
      }
    };

    // 🔹 Ask permission + token check
    Notification.requestPermission().then(async (permission) => {
      if (permission === "granted") {
        console.log("✅ Notification permission granted.");

        const token = await getFCMToken();

        // ✅ New vs Old token compare
        if (token && token !== localStorage.getItem("lastToken")) {
          alert("🔄 Your notification access has been refreshed.");
          localStorage.setItem("lastToken", token);
        }

        if (token) await registerToken(token);
      } else {
        console.warn("❌ Notification permission denied.");
      }
    });

    // 🔹 Foreground notifications
    const unsubscribe = listenForeground((payload) => {
      const { title, body, image } = payload.notification;
      new Notification(title, {
        body,
        icon: "/logo192.png",
        image: image || undefined,
      });
    });

    return () => unsubscribe();
  }, []);

  return (
    <div style={{ margin: 0, padding: 0, overflowX: "hidden" }}>
      <Router>
        <ScrollToTop />
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-otp" element={<OtpVerify />} />
          <Route path="/home" element={<Layout><Home /></Layout>} />
          <Route path="/features" element={<Layout><Feature /></Layout>} />
          <Route path="/DefendPro" element={<DefendPro />} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
          <Route path="/terms" element={<Layout><Terms /></Layout>} />
          <Route path="/return-policy" element={<Layout><ReturnPolicy /></Layout>} />
          <Route path="/why-us" element={<Layout><WhyChooseUs /></Layout>} />
          <Route path="/userdashboard" element={<Layout><UserDashboard /></Layout>} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/HowSaffronWorks" element={<HowSaffronWorks />} />
          <Route path="/Fox" element={<Fox />} />
          <Route path="/CBS" element={<CBS />} />
          <Route path="/ABC11" element={<ABC11 />} />
          <Route path="/NewYorkPolice" element={<NewYorkPolice />} />
          <Route path="/ABCNational" element={<ABCNational />} />
          <Route path="/AccountIn" element={<AccountIn />} />
          <Route path="/LearnMore" element={<LearnMore />} />
          <Route path="/microsoft-store" element={<MicrosoftStore />} />
          <Route path="/internet-security" element={<InternetSecurity />} />
          <Route path="/for-your-business" element={<ForYourBusiness />} />
          <Route path="/for-your-home" element={<ForYourHome />} />
          <Route path="/ParentSolution" element={<ParentSolution />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/DaysMoneyBack" element={<DaysMoneyBack />} />
          <Route path="/IdentifyFakeCalls" element={<IdentifyFakeCalls />} />
          <Route path="/ReadFAQ" element={<ReadFAQ />} />
          <Route path="/FixMyTech" element={<FixMyTech />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/live-support" element={<LiveSupport />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
