import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Achievements from "./components/Achievements/Achievements";
import Education from "./components/Education/Education";
import Certifications from "./components/Certifications/Certifications";
import ResumeSection from "./components/ResumeSection/ResumeSection";
import ResumeModal from "./components/ResumeModal/ResumeModal";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    // Read theme from localStorage or system preference
    try {
      const stored = localStorage.getItem("theme");
      if (stored) return stored;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // localStorage unavailable
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleOpenResumeModal = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={handleOpenResumeModal}
      />
      <main>
        <Hero onOpenResume={handleOpenResumeModal} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <Certifications />
        <ResumeSection onOpenModal={handleOpenResumeModal} />
        <Contact />
      </main>
      <Footer />
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResumeModal}
      />
    </>
  );
}

export default App;
