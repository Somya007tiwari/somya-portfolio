import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Layers, Target } from "lucide-react";
import { aboutContent } from "../../data/portfolio";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  { icon: Code2, label: "Full-Stack Developer", desc: "React, Node.js, PostgreSQL" },
  { icon: Layers, label: "Problem Solver", desc: "C++, DSA, Algorithms" },
  { icon: Target, label: "CS @ JECRC", desc: "B.Tech CSE · 2023–2027" },
];

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about__header", {
        scrollTrigger: { trigger: ".about__header", start: "top 98%" },
        opacity: 0, y: 30, duration: 0.6, ease: "power3.out", clearProps: "opacity,transform",
      });

      gsap.from(".about__paragraph", {
        scrollTrigger: { trigger: ".about__text", start: "top 98%" },
        opacity: 0, y: 25, duration: 0.5, stagger: 0.15, ease: "power3.out", clearProps: "opacity,transform",
      });

      gsap.from(".about__card-panel", {
        scrollTrigger: { trigger: ".about__card-panel", start: "top 98%" },
        opacity: 0, x: 30, duration: 0.6, ease: "power3.out", clearProps: "opacity,transform",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about section" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="about__header section-header">
          <span className="section-tag">Who I Am</span>
          <h2 className="section-title">About Me</h2>
          <div className="divider" />
        </div>

        {/* Grid */}
        <div className="about__grid">
          {/* Text */}
          <div className="about__text">
            {aboutContent.map((para, i) => (
              <p key={i} className="about__paragraph">
                {para}
              </p>
            ))}

            {/* Location tag */}
            <div className="about__location">
              <span className="about__location-icon">📍</span>
              <span>Jaipur, Rajasthan, India</span>
            </div>
          </div>

          {/* Visual Card Panel */}
          <div className="about__card-panel">
            {/* Dev card */}
            <div className="about__dev-card glass card">
              <div className="about__dev-avatar">
                <span className="about__dev-initials">ST</span>
                <div className="about__dev-status">
                  <span className="about__dev-status-dot" />
                  Open to work
                </div>
              </div>

              <div className="about__dev-info">
                <h3 className="about__dev-name">Somya Tiwari</h3>
                <p className="about__dev-role">Software Developer</p>
                <p className="about__dev-uni">JECRC University · CSE · 2023–2027</p>
              </div>

              <div className="about__dev-divider" />

              {/* Highlights */}
              <div className="about__highlights">
                {highlights.map(({ icon: Icon, label, desc }) => (
                  <div className="about__highlight" key={label}>
                    <div className="about__highlight-icon">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="about__highlight-label">{label}</div>
                      <div className="about__highlight-desc">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating accent box */}
            <div className="about__accent-box glass">
              <span className="about__accent-emoji">🚀</span>
              <div>
                <div className="about__accent-title">Currently Building</div>
                <div className="about__accent-sub">Full-Stack Web Apps</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
