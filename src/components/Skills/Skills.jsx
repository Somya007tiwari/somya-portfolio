import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiCplusplus, SiJavascript, SiTypescript,
  SiHtml5, SiReact, SiVite,
  SiNodedotjs, SiExpress, SiPostman,
  SiPostgresql, SiMongodb, SiMysql,
  SiGit, SiGithub,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandVscode } from "react-icons/tb";
import { BookOpen } from "lucide-react";
import { skillCategories } from "../../data/portfolio";
import "./Skills.css";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  SiCplusplus, SiJavascript, SiTypescript,
  SiHtml5, SiCss3: FaCss3Alt, SiReact, SiVite,
  SiNodedotjs, SiExpress, SiPostman,
  SiPostgresql, SiMongodb, SiMysql,
  SiGit, SiGithub, SiVisualstudiocode: TbBrandVscode,
};

function SkillIcon({ iconName }) {
  const Icon = iconMap[iconName];
  if (!Icon) return null;
  return <Icon size={22} />;
}

function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills__header", {
        scrollTrigger: { trigger: ".skills__header", start: "top 98%" },
        opacity: 0, y: 30, duration: 0.6, ease: "power3.out", clearProps: "opacity,transform",
      });

      gsap.from(".skills__category", {
        scrollTrigger: { trigger: ".skills__grid", start: "top 98%" },
        opacity: 0, y: 25,
        duration: 0.5, stagger: 0.08, ease: "power3.out", clearProps: "opacity,transform",
      });

      gsap.from(".skill-item", {
        scrollTrigger: { trigger: ".skills__grid", start: "top 98%" },
        opacity: 0, scale: 0.9,
        duration: 0.4, stagger: 0.03, ease: "back.out(1.5)", clearProps: "opacity,transform",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="skills section" ref={sectionRef}>
      <div className="container">
        <div className="skills__header section-header">
          <span className="section-tag">What I Work With</span>
          <h2 className="section-title">Skills</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Technologies and tools I use to build full-stack applications.
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className={`skills__category card ${cat.isLearning ? "skills__category--learning" : ""}`}
            >
              <div className="skills__category-header">
                {cat.isLearning && (
                  <span className="skills__learning-badge">
                    <BookOpen size={12} /> Currently Learning
                  </span>
                )}
                <h3 className="skills__category-name">{cat.name}</h3>
              </div>

              <div className="skills__items">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`skill-item ${cat.isLearning ? "skill-item--learning" : ""}`}
                    title={cat.isLearning ? `${skill.name} — actively learning` : skill.name}
                  >
                    {skill.icon && (
                      <span className="skill-item__icon">
                        <SkillIcon iconName={skill.icon} />
                      </span>
                    )}
                    <span className="skill-item__name">{skill.name}</span>
                    {cat.isLearning && (
                      <span className="skill-item__learning-dot" title="Currently learning" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
