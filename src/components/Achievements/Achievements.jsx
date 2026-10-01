import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trophy, Code2, Layers, Monitor } from "lucide-react";
import { achievements } from "../../data/portfolio";
import "./Achievements.css";

gsap.registerPlugin(ScrollTrigger);

const iconComponents = {
  trophy: Trophy,
  code: Code2,
  layers: Layers,
  monitor: Monitor,
};

function Achievements() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".achievements__header", {
        scrollTrigger: { trigger: ".achievements__header", start: "top 98%" },
        opacity: 0, y: 30, duration: 0.6, ease: "power3.out", clearProps: "opacity,transform",
      });

      gsap.from(".achievement-card", {
        scrollTrigger: { trigger: ".achievements__grid", start: "top 98%" },
        opacity: 0, y: 30, scale: 0.98,
        duration: 0.5, stagger: 0.1, ease: "power3.out", clearProps: "opacity,transform",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="achievements" className="achievements section" ref={sectionRef}>
      <div className="container">
        <div className="achievements__header section-header">
          <span className="section-tag">Highlights</span>
          <h2 className="section-title">Achievements</h2>
          <div className="divider" />
        </div>

        <div className="achievements__grid">
          {achievements.map((item) => {
            const Icon = iconComponents[item.icon] || Trophy;
            return (
              <article key={item.id} className="achievement-card card">
                <div className="achievement-card__icon">
                  <Icon size={24} />
                </div>
                <h3 className="achievement-card__title">{item.title}</h3>
                <p className="achievement-card__desc">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
