import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { FaRobot } from "react-icons/fa";

import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Services from "./pages/Services";

import MainLayout from "./layouts/MainLayout";

function PageLoader() {
  return (
    <div className="page-loader">
      <div className="loader-bg-glow loader-bg-glow-one" />
      <div className="loader-bg-glow loader-bg-glow-two" />

      <div className="loader-grid" />

      <div className="loader-content">
        <div className="loader-logo-wrapper">
          <div className="loader-ring loader-ring-one" />
          <div className="loader-ring loader-ring-two" />

          <div className="loader-logo">
            <FaRobot />
          </div>
        </div>

        <div className="loader-brand">
          <span>FLUX</span>
          <span className="loader-brand-lime">FAME</span>
        </div>

        <div className="loader-status">
          <span>Loading</span>

          <span className="loader-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>

        <div className="loader-progress">
          <div className="loader-progress-bar" />
        </div>
      </div>
    </div>
  );
}

function PageTransition() {
  const location = useLocation();

  const [loading, setLoading] = useState(
    location.pathname !== "/"
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    if (location.pathname === "/") {
      setLoading(false);
      return;
    }

    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 850);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <PageLoader />}

      <div
        className={
          loading
            ? "page-content page-content-loading"
            : "page-content page-content-visible"
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/case-studies"
            element={<CaseStudies />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/privacy"
            element={<PrivacyPolicy />}
          />

          <Route
            path="/terms"
            element={<Terms />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </div>
    </>
  );
}

export default function App() {
  return (
    <MainLayout>
      <PageTransition />
    </MainLayout>
  );
}







