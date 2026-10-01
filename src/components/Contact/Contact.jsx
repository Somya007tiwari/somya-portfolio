import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { personalInfo } from "../../data/portfolio";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    display: personalInfo.email,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "Somya007tiwari",
    href: personalInfo.github,
    display: "github.com/Somya007tiwari",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "somya-tiwari715",
    href: personalInfo.linkedin,
    display: "linkedin.com/in/somya-tiwari715",
  },
  {
    icon: ExternalLink,
    label: "LeetCode",
    value: "Somyatiwari_15",
    href: personalInfo.leetcode,
    display: "leetcode.com/u/Somyatiwari_15",
  },
];

// Form state initial value
const INITIAL_FORM = { name: "", email: "", message: "" };

function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState(null); // null | "success"

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact__header", {
        scrollTrigger: { trigger: ".contact__header", start: "top 98%" },
        opacity: 0, y: 30, duration: 0.6, ease: "power3.out", clearProps: "opacity,transform",
      });

      gsap.from(".contact__info", {
        scrollTrigger: { trigger: ".contact__grid", start: "top 98%" },
        opacity: 0, x: -30, duration: 0.6, ease: "power3.out", clearProps: "opacity,transform",
      });

      gsap.from(".contact__form-wrap", {
        scrollTrigger: { trigger: ".contact__grid", start: "top 98%" },
        opacity: 0, x: 30, duration: 0.6, ease: "power3.out", clearProps: "opacity,transform",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status) setStatus(null);
  };

  // mailto fallback — no backend required
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setStatus("success");
    setForm(INITIAL_FORM);
  };

  return (
    <section id="contact" className="contact section" ref={sectionRef}>
      <div className="container">
        <div className="contact__header section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Build Something Together</h2>
          <div className="divider" />
          <p className="section-subtitle">
            I'm always interested in learning, building, and working on meaningful software
            projects. Feel free to connect with me.
          </p>
        </div>

        <div className="contact__grid">
          {/* Info */}
          <div className="contact__info">
            <h3 className="contact__info-title">Connect With Me</h3>
            <p className="contact__info-desc">
              Whether you have an opportunity, a question, or just want to say hello — I'd
              love to hear from you.
            </p>

            <div className="contact__socials">
              {socialLinks.map(({ icon: Icon, label, href, display }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="contact__social-item"
                  aria-label={`${label}${!href.startsWith("mailto") ? " (opens in new tab)" : ""}`}
                >
                  <div className="contact__social-icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="contact__social-label">{label}</div>
                    <div className="contact__social-value">{display}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact__location">
              <MapPin size={15} />
              <span>Jaipur, Rajasthan, India</span>
            </div>
          </div>

          {/* Form */}
          <div className="contact__form-wrap">
            <form
              className="contact__form card"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
            >
              <h3 className="contact__form-title">Send a Message</h3>

              <div className="contact__note">
                <small>
                  This form uses your default email client (mailto). For direct email, use{" "}
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>.
                </small>
              </div>

              <div className="contact__field">
                <label htmlFor="contact-name" className="contact__label">
                  Name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="contact__input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email" className="contact__label">
                  Email <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="contact__input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-message" className="contact__label">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="contact__input contact__textarea"
                  placeholder="What's on your mind?"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
              </div>

              {status === "success" && (
                <div className="contact__success" role="alert">
                  ✅ Email client opened! If it didn't open, email me directly at{" "}
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary contact__submit"
                aria-label="Send message via email"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
