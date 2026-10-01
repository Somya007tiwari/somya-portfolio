import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Lock, CheckCircle2, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "../../data/portfolio";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

function ProjectPreview({ project }) {
  if (project.id === "shms") {
    // SHMS — placeholder with clear instructions to add screenshots
    return (
      <div className="project-preview project-preview--shms">
        {project.hasScreenshots && project.screenshotPaths.length > 0 ? (
          <img
            src={project.screenshotPaths[0]}
            alt="SHMS dashboard screenshot"
            className="project-preview__img"
            loading="lazy"
          />
        ) : (
          <div className="project-preview__placeholder">
            <div className="project-preview__placeholder-inner">
              <div className="project-preview__placeholder-icon">🏥</div>
              <div className="project-preview__placeholder-title">{project.shortName}</div>
              <div className="project-preview__placeholder-sub">
                Smart Hospital Management System
              </div>
              <div className="project-preview__placeholder-hint">
                {/* Replace hasScreenshots to true and add paths in portfolio.js */}
                Screenshot area — add paths to <code>screenshotPaths</code> in{" "}
                <code>src/data/portfolio.js</code>
              </div>
            </div>
            <div className="project-preview__mock-ui" aria-hidden="true">
              <div className="project-preview__mock-bar" />
              <div className="project-preview__mock-row">
                <div className="project-preview__mock-sidebar" />
                <div className="project-preview__mock-content">
                  <div className="project-preview__mock-card" />
                  <div className="project-preview__mock-card" />
                  <div className="project-preview__mock-card" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // HRMS — abstract developer visual
  return (
    <div className="project-preview project-preview--hrms">
      <div className="project-preview__hrms-visual" aria-label="HRMS project visual">
        <div className="project-preview__hrms-glow" />
        <div className="project-preview__hrms-card glass">
          <div className="project-preview__hrms-header">
            <span className="project-preview__hrms-dot project-preview__hrms-dot--1" />
            <span className="project-preview__hrms-dot project-preview__hrms-dot--2" />
            <span className="project-preview__hrms-dot project-preview__hrms-dot--3" />
            <span className="project-preview__hrms-title">HRMS Dashboard</span>
          </div>
          <div className="project-preview__hrms-body">
            {["Employee Mgmt", "Role Access", "HR Workflows", "Auth & JWT", "GraphQL API"].map((item) => (
              <div key={item} className="project-preview__hrms-row">
                <CheckCircle2 size={13} className="project-preview__hrms-check" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="project-preview__hrms-footer">
            <span className="project-preview__hrms-badge">Next.js</span>
            <span className="project-preview__hrms-badge">ASP.NET Core</span>
            <span className="project-preview__hrms-badge">GraphQL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, reversed }) {
  return (
    <article
      className={`project-card ${reversed ? "project-card--reversed" : ""}`}
      aria-label={`Project: ${project.name}`}
    >
      {/* Preview */}
      <div className="project-card__preview">
        <ProjectPreview project={project} />
        <div
          className="project-card__preview-overlay"
          style={{ "--accent": project.accentColor }}
        />
      </div>

      {/* Content */}
      <div className="project-card__content">
        <div className="project-card__meta">
          <span className="project-card__tag">Featured Project</span>
          {project.liveDemo === null && (
            <span className="project-card__nodeploy">
              <Lock size={11} /> Not deployed yet
            </span>
          )}
        </div>

        <h3 className="project-card__name">{project.name}</h3>
        {project.fullTitle !== project.name && (
          <p className="project-card__full-title">{project.fullTitle}</p>
        )}

        <div className="project-card__desc card">
          <p>{project.description}</p>
        </div>

        {/* Features */}
        <ul className="project-card__features">
          {project.features.slice(0, 4).map((f) => (
            <li key={f} className="project-card__feature">
              <ChevronRight size={14} className="project-card__feature-icon" />
              {f}
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="project-card__techs">
          {project.technologies.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>

        {/* Buttons */}
        <div className="project-card__buttons">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            aria-label={`View ${project.name} on GitHub (opens in new tab)`}
          >
            <FaGithub size={15} />
            View on GitHub
          </a>
          {project.liveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
              aria-label={`View ${project.name} live demo (opens in new tab)`}
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          ) : (
            <span className="project-card__no-demo">
              <Lock size={13} />
              Not Deployed Yet
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects__header", {
        scrollTrigger: { trigger: ".projects__header", start: "top 98%" },
        opacity: 0, y: 30, duration: 0.6, ease: "power3.out", clearProps: "opacity,transform",
      });

      gsap.from(".project-card", {
        scrollTrigger: { trigger: ".projects__list", start: "top 98%" },
        opacity: 0, y: 30,
        duration: 0.6, stagger: 0.15, ease: "power3.out", clearProps: "opacity,transform",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="projects section" ref={sectionRef}>
      <div className="container">
        <div className="projects__header section-header">
          <span className="section-tag">What I've Built</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Two full-stack applications built end-to-end — from database design to UI.
          </p>
        </div>

        <div className="projects__list">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
