import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Award } from "lucide-react";
import { certifications } from "../../data/portfolio";
import "./Certifications.css";

gsap.registerPlugin(ScrollTrigger);

function Certifications() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".certifications__header", {
        scrollTrigger: { trigger: ".certifications__header", start: "top 98%" },
        opacity: 0, y: 30, duration: 0.6, ease: "power3.out", clearProps: "opacity,transform",
      });

      gsap.from(".cert-card", {
        scrollTrigger: { trigger: ".certifications__grid", start: "top 98%" },
        opacity: 0, y: 30, scale: 0.98,
        duration: 0.5, stagger: 0.1, ease: "power3.out", clearProps: "opacity,transform",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="certifications" className="certifications section" ref={sectionRef}>
      <div className="container">
        <div className="certifications__header section-header">
          <span className="section-tag">Credentials</span>
          <h2 className="section-title">Certifications</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Professional certificates earned through internships and training programs.
          </p>
        </div>

        <div className="certifications__grid">
          {certifications.map((cert, i) => (
            <article key={cert.id} className="cert-card card">
              <div className="cert-card__icon-wrap">
                <Award size={26} />
                <span className="cert-card__number">#{i + 1}</span>
              </div>

              <div className="cert-card__body">
                <h3 className="cert-card__title">{cert.title}</h3>

                {cert.organization && (
                  <p className="cert-card__org">{cert.organization}</p>
                )}

                {cert.description && (
                  <p className="cert-card__desc">{cert.description}</p>
                )}

                <div className="cert-card__meta">
                  {(cert.date || cert.year) && (
                    <span className="cert-card__date">📅 {cert.date || cert.year}</span>
                  )}

                  {cert.certId && (
                    <span className="cert-card__id">ID: {cert.certId}</span>
                  )}

                  {cert.type && (
                    <span className="tech-badge">{cert.type}</span>
                  )}

                  {cert.technology && (
                    <span className="tech-badge">{cert.technology}</span>
                  )}
                </div>
              </div>

              {cert.url ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-card__link btn btn-outline btn-sm"
                  aria-label={`View ${cert.title} certificate (opens in new tab)`}
                >
                  View Certificate <ExternalLink size={13} />
                </a>
              ) : (
                <button
                  disabled
                  className="cert-card__link btn btn-outline btn-sm hero__btn--disabled"
                >
                  Link Unavailable
                </button>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
