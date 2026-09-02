import React from "react";
import { useLocation } from "react-router-dom";

import AppNavbar from "./Components/AppNavbar";
import AuraFooter from "./Components/Footer";
import CallUs from "./Components/CallUs";

const Layout = ({ children }) => {
  const location = useLocation();

  // Jin pages par Footer nahi dikhana
  const noFooterPaths = [
    "/about",
    "/privacy-policy",
    "/terms",
    "/return-policy",
    "/why-us",
    "/contact",
  ];

  return (
    <>
      {/* ================= Navbar ================= */}
      <AppNavbar />

      {/* ================= Current Page Content ================= */}
      {children}

      {/* ================= Call Us ================= */}
      <CallUs />

      {/* ================= Footer ================= */}
      {/* {!noFooterPaths.includes(location.pathname) && (
        <AuraFooter />
      )} */}
    </>
  );
};

export default Layout;