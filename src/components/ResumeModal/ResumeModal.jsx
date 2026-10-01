import { useEffect, useRef } from "react";
import { Download, ExternalLink, X, FileText } from "lucide-react";
import { RESUME_URL } from "../../data/portfolio";
import "./ResumeModal.css";

function ResumeModal({ isOpen, onClose }) {
  const modalRef = useRef(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="resume-modal__backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="resume-modal__container glass"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="resume-modal__header">
          <div className="resume-modal__title-group">
            <div className="resume-modal__icon-badge">
              <FileText size={20} />
            </div>
            <div>
              <h2 id="resume-modal-title" className="resume-modal__title">
                Resume Preview
              </h2>
              <span className="resume-modal__subtitle">Somya Tiwari — Software Developer</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="resume-modal__actions">
            <a
              href={RESUME_URL}
              download="Somya_Tiwari_Resume.pdf"
              className="btn btn-primary btn-sm resume-modal__action-btn"
              aria-label="Download Resume PDF"
            >
              <Download size={15} />
              <span>Download Resume</span>
            </a>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm resume-modal__action-btn"
              aria-label="Open Resume in New Tab"
            >
              <ExternalLink size={15} />
              <span>Open Resume in New Tab</span>
            </a>

            <button
              className="resume-modal__close-btn"
              onClick={onClose}
              aria-label="Close resume preview modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body / PDF Embedded Viewer */}
        <div className="resume-modal__body">
          <iframe
            src={`${RESUME_URL}#toolbar=0`}
            title="Somya Tiwari Resume"
            className="resume-modal__iframe"
            loading="eager"
          />
          <div className="resume-modal__fallback">
            <p>
              If the PDF preview is not displaying properly in your browser:
            </p>
            <div className="resume-modal__fallback-btns">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <ExternalLink size={14} /> Open Resume in New Tab
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
    </div>
  );
}

export default ResumeModal;
