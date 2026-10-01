import { useState, useEffect, useRef } from "react";
import { Sun, Moon, Menu, X, Eye } from "lucide-react";
import { navLinks } from "../../data/portfolio";
import "./Navbar.css";

function Navbar({ theme, toggleTheme, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const mobileMenuRef = useRef(null);

  // Detect scroll to apply frosted navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sections = navLinks.map((l) => document.getElementById(l.href));
      let current = "hero";
      sections.forEach((section) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100) current = section.id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handleClick = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const handleResumeClick = () => {
    setMobileOpen(false);
    if (onOpenResume) {
      onOpenResume();
    }
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`} role="banner">
      <div className="navbar__container">
        {/* Logo */}
        <button
          className="navbar__logo"
          onClick={() => scrollTo("hero")}
          aria-label="Scroll to top"
        >
          <span className="navbar__logo-text">
            <span className="gradient-text">Somya</span> Tiwari
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button
              key={link.href}
              className={`navbar__link ${activeSection === link.href ? "navbar__link--active" : ""}`}
              onClick={() => scrollTo(link.href)}
              aria-current={activeSection === link.href ? "page" : undefined}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="navbar__actions">
          {/* Theme Toggle */}
          <button
            className="navbar__icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Resume Button */}
          <button
            onClick={handleResumeClick}
            className="btn btn-outline btn-sm navbar__resume"
            aria-label="View resume inside portfolio"
          >
            <Eye size={14} />
            Resume
          </button>

          {/* Hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="navbar__overlay" aria-hidden="true" />
      )}

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`navbar__mobile ${mobileOpen ? "navbar__mobile--open" : ""}`}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
      >
        <div className="navbar__mobile-header">
          <span className="navbar__logo-text">
            <span className="gradient-text">Somya</span> Tiwari
          </span>
          <button
            className="navbar__icon-btn"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="navbar__mobile-links" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <button
              key={link.href}
              className={`navbar__mobile-link ${activeSection === link.href ? "navbar__mobile-link--active" : ""}`}
              onClick={() => scrollTo(link.href)}
              aria-current={activeSection === link.href ? "page" : undefined}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="navbar__mobile-footer">
          <button
            className="btn btn-ghost btn-sm"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
          <button onClick={handleResumeClick} className="btn btn-primary btn-sm">
            <Eye size={14} /> Resume
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
