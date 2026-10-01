import { ExternalLink, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { personalInfo, navLinks } from "../../data/portfolio";
import "./Footer.css";

const socialLinks = [
  { icon: FaGithub, label: "GitHub", href: personalInfo.github },
  { icon: FaLinkedin, label: "LinkedIn", href: personalInfo.linkedin },
  { icon: ExternalLink, label: "LeetCode", href: personalInfo.leetcode },
];

function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__container">
        {/* Top */}
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <Code2 size={20} className="footer__logo-icon" />
              <span className="footer__name">
                <span className="gradient-text">Somya</span> Tiwari
              </span>
            </div>
            <p className="footer__tagline">{personalInfo.title}</p>
            <p className="footer__location">📍 {personalInfo.location}</p>

            {/* Social icons */}
            <div className="footer__socials" aria-label="Social media links">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social"
                  aria-label={`${label} profile (opens in new tab)`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <h4 className="footer__nav-title">Navigation</h4>
            <ul className="footer__nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    className="footer__nav-link"
                    onClick={() => scrollTo(link.href)}
                    aria-label={`Scroll to ${link.label}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="footer__contact">
            <h4 className="footer__nav-title">Contact</h4>
            <a
              href={`mailto:${personalInfo.email}`}
              className="footer__email"
              aria-label="Send email to Somya Tiwari"
            >
              {personalInfo.email}
            </a>
            <p className="footer__contact-note">
              Open to software development opportunities.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2026 Somya Tiwari. All rights reserved.
          </p>
          <p className="footer__built">
            Built with React + Vite + GSAP
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
