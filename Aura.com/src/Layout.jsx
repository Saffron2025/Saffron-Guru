import React from "react";
import { useLocation } from "react-router-dom";
import AppNavbar from "./Components/AppNavbar";
import TopBanner from "./Components/TopBanner";
import AuraFooter from "./Components/Footer";
import FloatingChat from "./Components/FloatingChat";

const Layout = ({ children }) => {
  const location = useLocation();
  const noChatPaths = ["/about", "/privacy-policy", "/terms", "/return-policy", "/why-us", "/contact"];

  const userId = `user-${Date.now()}`; // dynamic userId

  return (
    <>
      <TopBanner />
      <AppNavbar />
      {children}
      {!noChatPaths.includes(location.pathname) && <AuraFooter />}
      {/* {!noChatPaths.includes(location.pathname) && (
        <FloatingChat role="user" name="Website Visitor" userId={userId} />
      )} */}
    </>
  );
};

export default Layout;
