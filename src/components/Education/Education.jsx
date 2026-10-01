import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Calendar, Star } from "lucide-react";
import { education } from "../../data/portfolio";
import "./Education.css";

gsap.registerPlugin(ScrollTrigger);

function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".education__header", {
        scrollTrigger: { trigger: ".education__header", start: "top 98%" },
        opacity: 0, y: 30, duration: 0.6, ease: "power3.out", clearProps: "opacity,transform",
      });

      gsap.from(".education__card", {
        scrollTrigger: { trigger: ".education__card", start: "top 98%" },
        opacity: 0, y: 30, duration: 0.6, ease: "power3.out", clearProps: "opacity,transform",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="education" className="education section" ref={sectionRef}>
      <div className="container">
        <div className="education__header section-header">
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title">Education</h2>
          <div className="divider" />
        </div>

        <div className="education__wrapper">
          {education.map((item) => (
            <article key={item.id} className="education__card card">
              {/* Icon Column */}
              <div className="education__icon-col">
                <div className="education__icon-wrap">
                  <GraduationCap size={30} />
                </div>
                <div className="education__icon-line" aria-hidden="true" />
              </div>

              {/* Content */}
              <div className="education__content">
                <div className="education__top">
                  <div>
                    <h3 className="education__institution">{item.institution}</h3>
                    <p className="education__degree">{item.degree}</p>
                    <p className="education__branch">{item.branch}</p>
                  </div>
                  <div className="education__meta">
                    <span className="education__detail">
                      <Calendar size={14} />
                      {item.duration}
                    </span>
                    <span className="education__detail education__cgpa">
                      <Star size={14} />
                      CGPA: {item.cgpa}
                    </span>
                  </div>
                </div>

                {/* CGPA bar */}
                <div className="education__cgpa-bar" aria-label={`CGPA: ${item.cgpa}`}>
                  <div className="education__cgpa-label">
                    <span>CGPA</span>
                    <span>{item.cgpa}</span>
                  </div>
                  <div className="education__cgpa-track">
                    <div
                      className="education__cgpa-fill"
                      style={{ width: `${(parseFloat(item.cgpa) / 10) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
