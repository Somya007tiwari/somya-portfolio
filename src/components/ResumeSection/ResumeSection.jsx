import { Download, ExternalLink, FileText, Eye } from "lucide-react";
import { RESUME_URL } from "../../data/portfolio";
import "./ResumeSection.css";

function ResumeSection({ onOpenModal }) {
  return (
    <section id="resume" className="section resume-section" aria-label="Resume Preview">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <FileText size={14} /> Resume
          </span>
          <h2 className="section-title">Resume Preview</h2>
          <p className="section-subtitle">
            View, read, open, or download my complete resume directly from the portfolio.
          </p>
        </div>

        {/* Action Controls Bar */}
        <div className="resume-section__bar card glass">
          <div className="resume-section__info">
            <div className="resume-section__badge">PDF</div>
            <div>
              <h3 className="resume-section__doc-title">Somya Tiwari — Resume</h3>
              <p className="resume-section__doc-meta">Software Developer | Computer Science CSE</p>
            </div>
          </div>

          <div className="resume-section__actions">
            {onOpenModal && (
              <button
                className="btn btn-outline btn-sm"
                onClick={onOpenModal}
                aria-label="Maximize resume preview modal"
              >
                <Eye size={16} />
                <span>Fullscreen View</span>
              </button>
            )}

            <a
              href={RESUME_URL}
              download="Somya_Tiwari_Resume.pdf"
              className="btn btn-primary btn-sm"
              aria-label="Download Resume PDF"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
              aria-label="Open Resume in New Tab"
            >
              <ExternalLink size={16} />
              <span>Open Resume in New Tab</span>
            </a>
          </div>
        </div>

        {/* Embedded Viewer Container */}
        <div className="resume-section__viewer-container card glass">
          <iframe
            src={`${RESUME_URL}#toolbar=0`}
            title="Somya Tiwari Resume Preview"
            className="resume-section__iframe"
            loading="lazy"
          />
          <div className="resume-section__footer-fallback">
            <span>Unable to preview PDF directly in your browser?</span>
            <div className="resume-section__footer-btns">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <ExternalLink size={14} /> Open in New Tab
              </a>
              <a
                href={RESUME_URL}
                download="Somya_Tiwari_Resume.pdf"
                className="btn btn-primary btn-sm"
              >
                <Download size={14} /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;
