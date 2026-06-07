import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  
  const goToSection = (id) => {
    navigate("/");

    setActive(id);
    closeMenu();

    const scrollToTarget = () => {
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        requestAnimationFrame(scrollToTarget);
      }
    };

    requestAnimationFrame(scrollToTarget);
  };

  
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false);

      if (location.pathname !== "/") return;

      const sections = ["home", "services", "process", "testimonials", "faq"];

      let current = null;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= 200 && rect.bottom >= 200) {
            current = id;
          }
        }
      });

      if (current) setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen, location.pathname]);

  
  useEffect(() => {
    if (location.pathname === "/") setActive("home");
    else if (location.pathname === "/about") setActive("about");
    else if (location.pathname === "/contact") setActive("contact");
    else if (location.pathname === "/case-studies") setActive("case-studies");
  }, [location.pathname]);

  // Nav Item
  const NavItem = ({ id, to, onClick, children }) => {
    const isActive = active === id;

    const base =
      "relative text-sm font-medium transition duration-300 hover:text-lime-400";

    const underline =
      "absolute left-0 -bottom-1 h-[2px] bg-lime-400 rounded-full transition-all duration-300";

    if (to) {
      return (
        <Link to={to} onClick={closeMenu} className={base}>
          {children}
          <span
            className={`${underline} ${
              isActive ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
          />
        </Link>
      );
    }

    return (
      <button onClick={onClick} className={base}>
        {children}
        <span
          className={`${underline} ${
            isActive ? "w-full opacity-100" : "w-0 opacity-0"
          }`}
        />
      </button>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-5">
      <div className="container-custom">

        {/* NAVBAR */}
        <div className="relative glass rounded-full px-6 lg:px-8 py-4 flex items-center justify-between">

          {/* LOGO */}
          <button
            onClick={() => goToSection("home")}
            className="text-2xl font-bold shrink-0"
          >
            Flux<span className="text-lime-400">Fame</span>
          </button>

          {/* DESKTOP */}
          <nav className="hidden lg:flex items-center gap-8">

            <NavItem id="home" onClick={() => goToSection("home")}>
              Home
            </NavItem>

            <NavItem id="services" onClick={() => goToSection("services")}>
              Services
            </NavItem>

            <NavItem id="case-studies" to="/case-studies">
              Case Studies
            </NavItem>

            <NavItem id="process" onClick={() => goToSection("process")}>
              Process
            </NavItem>

            <NavItem id="about" to="/about">
              About
            </NavItem>

            <NavItem id="contact" to="/contact">
              Contact
            </NavItem>

          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lime-400"
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setMenuOpen(false)}
            />

            <div className="lg:hidden mt-3 glass rounded-2xl overflow-hidden relative z-50">

              <nav className="flex flex-col text-base font-medium">

                <button
                  onClick={() => goToSection("home")}
                  className="px-6 py-4 text-left border-b border-white/5 hover:text-lime-400"
                >
                  Home
                </button>

                <button
                  onClick={() => goToSection("services")}
                  className="px-6 py-4 text-left border-b border-white/5 hover:text-lime-400"
                >
                  Services
                </button>

                <Link
                  to="/case-studies"
                  onClick={closeMenu}
                  className="px-6 py-4 border-b border-white/5 hover:text-lime-400"
                >
                  Case Studies
                </Link>

                <button
                  onClick={() => goToSection("process")}
                  className="px-6 py-4 text-left border-b border-white/5 hover:text-lime-400"
                >
                  Process
                </button>

                <Link
                  to="/about"
                  onClick={closeMenu}
                  className="px-6 py-4 border-b border-white/5 hover:text-lime-400"
                >
                  About
                </Link>

                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="px-6 py-4 hover:text-lime-400"
                >
                  Contact
                </Link>

              </nav>
            </div>
          </>
        )}

      </div>
    </header>
  );
}