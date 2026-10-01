import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar } from "lucide-react";
import { experience } from "../../data/portfolio";
import "./Experience.css";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience__header", {
        scrollTrigger: { trigger: ".experience__header", start: "top 98%" },
        opacity: 0, y: 30, duration: 0.6, ease: "power3.out", clearProps: "opacity,transform",
      });

      gsap.from(".experience__item", {
        scrollTrigger: { trigger: ".experience__timeline", start: "top 98%" },
        opacity: 0, x: -30,
        duration: 0.6, stagger: 0.15, ease: "power3.out", clearProps: "opacity,transform",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="experience section" ref={sectionRef}>
      <div className="container">
        <div className="experience__header section-header">
          <span className="section-tag">Work Experience</span>
          <h2 className="section-title">Experience</h2>
          <div className="divider" />
        </div>

        <div className="experience__timeline">
          <div className="experience__timeline-line" aria-hidden="true" />

          {experience.map((item) => (
            <article key={item.id} className="experience__item">
              {/* Timeline dot */}
              <div className="experience__dot" aria-hidden="true">
                <div className="experience__dot-inner" />
              </div>

              {/* Card */}
              <div className="experience__card card">
                <div className="experience__card-top">
                  <div>
                    <div className="experience__type-badge">
                      <Briefcase size={12} />
                      {item.type}
                    </div>
                    <h3 className="experience__position">{item.position}</h3>
                    <p className="experience__company">{item.company}</p>
                  </div>
                  <div className="experience__year">
                    <Calendar size={14} />
                    {item.year}
                  </div>
                </div>

                <p className="experience__desc">{item.description}</p>

                <div className="experience__techs">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
