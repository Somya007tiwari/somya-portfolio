import { useEffect, useRef } from "react";
import { ExternalLink, ArrowDown, Download, Eye } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { gsap } from "gsap";
import { personalInfo, RESUME_URL } from "../../data/portfolio";
import profileImg from "../../assets/profile.jpg";
import "./Hero.css";

function Hero({ onOpenResume }) {
  const containerRef = useRef(null);
  const floatRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Master timeline for staggered entrance
      const tl = gsap.timeline({ delay: 0.1 });

      tl.from(".hero__tag", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".hero__name",
          { opacity: 0, y: 40, duration: 0.8, ease: "power3.out" },
          "-=0.3"
        )
        .from(
          ".hero__title",
          { opacity: 0, y: 30, duration: 0.7, ease: "power3.out" },
          "-=0.5"
        )
        .from(
          ".hero__tagline",
          { opacity: 0, y: 25, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .from(
          ".hero__intro",
          { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .from(
          ".hero__btn",
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".hero__social-link",
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.4,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        )
        .from(
          ".hero__visual",
          { opacity: 0, scale: 0.9, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        .from(
          ".hero__scroll",
          { opacity: 0, y: 10, duration: 0.5, ease: "power2.out" },
          "-=0.1"
        );

      // Continuous subtle floating animation for profile photo
      gsap.to(".hero__photo-wrapper", {
        y: -10,
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Subtle gradient orb animation
      gsap.to(".hero__glow-orb", {
        scale: 1.15,
        opacity: 0.6,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero section" ref={containerRef} aria-label="Introduction">
      {/* Background glows */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow-orb hero__glow-orb--1" />
        <div className="hero__glow-orb hero__glow-orb--2" />
        <div className="hero__grid-overlay" />
      </div>

      <div className="container hero__container">
        {/* Left — Text Content */}
        <div className="hero__content">
          <div className="hero__tag">
            <span className="hero__tag-dot" aria-hidden="true" />
            Available for opportunities
          </div>

          <h1 className="hero__name">
            Hi, I'm <span className="gradient-text">Somya Tiwari</span>.
          </h1>

          <div className="hero__title">
            <span className="hero__title-text">{personalInfo.title}</span>
          </div>

          <p className="hero__tagline">{personalInfo.tagline}</p>

          <p className="hero__intro">{personalInfo.intro}</p>

          {/* CTA Buttons */}
          <div className="hero__btns">
            <button
              className="btn btn-primary hero__btn"
              onClick={scrollToProjects}
              aria-label="Scroll to projects section"
            >
              View Projects
              <ArrowDown size={16} />
            </button>

            <button
              className="btn btn-outline hero__btn"
              onClick={onOpenResume}
              aria-label="View resume inside portfolio"
            >
              <Eye size={16} />
              View Resume
            </button>

            {RESUME_URL ? (
              <a
                href={RESUME_URL}
                download="Somya_Tiwari_Resume.pdf"
                className="btn btn-ghost hero__btn"
                aria-label="Download resume PDF"
              >
                <Download size={16} />
                Download Resume
              </a>
            ) : (
              <span
                className="btn btn-ghost hero__btn hero__btn--disabled"
                title="Resume will be available soon"
                aria-label="Resume coming soon"
              >
                <Download size={16} />
                Download Resume
              </span>
            )}
          </div>

          {/* Social Links */}
          <div className="hero__socials" aria-label="Social media links">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LeetCode"
            >
              <ExternalLink size={20} />
              <span>LeetCode</span>
            </a>
          </div>
        </div>

        {/* Right — Profile Photo Visual */}
        <div className="hero__visual" ref={floatRef}>
          <div className="hero__photo-wrapper">
            {/* Ambient Glows */}
            <div className="hero__photo-glow hero__photo-glow--1" aria-hidden="true" />
            <div className="hero__photo-glow hero__photo-glow--2" aria-hidden="true" />

            {/* Photo Container Frame */}
            <div className="hero__photo-frame">
              <img
                src={profileImg}
                alt="Somya Tiwari — Software Developer"
                className="hero__photo-img"
                loading="eager"
              />
            </div>

            {/* Floating Badges */}
            <div className="hero__badge hero__badge--tl glass">
              <span>⚡</span> Full-Stack Dev
            </div>
            <div className="hero__badge hero__badge--br glass">
              <span>🎓</span> CS @ JECRC
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}

export default Hero;
