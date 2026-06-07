import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* PAGES */}
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<PrivacyPolicy/>} />
      <Route path="/terms" element={<Terms/>} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}