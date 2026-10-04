// ============================================================
// Portfolio Data — Somya Tiwari
// All content is centralized here. Update this file to modify
// portfolio content without touching UI components.
// ============================================================

// Place the final resume PDF inside the project's public folder at /public/resume.pdf
export const RESUME_URL = "/resume.pdf";

export const personalInfo = {
  name: "Somya Tiwari",
  title: "Software Developer",
  location: "Jaipur, Rajasthan, India",
  email: "tiwarisaumya927@gmail.com",
  tagline: "Building scalable, user-focused applications with modern web technologies.",
  intro:
    "Computer Science student and aspiring Software Developer passionate about full-stack development, problem solving, and building practical web applications.",
  github: "https://github.com/Somya007tiwari",
  linkedin: "https://www.linkedin.com/in/somya-tiwari715/",
  leetcode: "https://leetcode.com/u/Somyatiwari_15/",
};

export const aboutContent = [
  "I'm Somya Tiwari, a Computer Science and Engineering student at JECRC University, Jaipur, and an aspiring Software Developer with a strong interest in full-stack development. I enjoy building practical, user-friendly web applications and solving problems through technology.",
  "I have experience working with JavaScript, React.js, Node.js, Express.js, PostgreSQL, MongoDB, MySQL, C++, and modern web development tools. I'm currently strengthening my Data Structures and Algorithms and SQL skills while learning TypeScript and improving my full-stack development expertise through practical projects.",
  "My goal is to start my career as a Software Developer and work on real-world applications, learn from experienced professionals, take on challenging problems, and continuously grow as a software engineer.",
];

export const skillCategories = [
  {
    id: "languages",
    name: "Programming Languages",
    skills: [
      { name: "C++", icon: "SiCplusplus" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "TypeScript", icon: "SiTypescript" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend Development",
    skills: [
      { name: "HTML5", icon: "SiHtml5" },
      { name: "CSS3", icon: "SiCss3" },
      { name: "React.js", icon: "SiReact" },
      { name: "Vite", icon: "SiVite" },
    ],
  },
  {
    id: "backend",
    name: "Backend Development",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Express.js", icon: "SiExpress" },
      { name: "REST APIs", icon: "SiPostman" },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "MySQL", icon: "SiMysql" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Technologies",
    skills: [
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "VS Code", icon: "SiVisualstudiocode" },
    ],
  },
  {
    id: "learning",
    name: "Currently Learning",
    isLearning: true,
    skills: [
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "DSA", icon: null },
      { name: "SQL", icon: "SiMysql" },
      { name: "Advanced Full-Stack", icon: null },
    ],
  },
];

export const projects = [
  {
    id: "hrms",
    name: "HRMS / WorkFlow",
    fullTitle: "Human Resource Management System",
    description:
      "A full-stack Human Resource Management System designed to streamline employee and HR operations through a centralized web application. The system provides role-based functionality for employees, HR specialists, managers, and administrators.",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "ASP.NET Core",
      "GraphQL",
      "PostgreSQL",
      "Entity Framework Core",
      "Redux Toolkit",
      "Apollo Client",
      "Tailwind CSS",
      "JWT",
    ],
    features: [
      "Employee management",
      "Role-based access control",
      "Authentication & authorization",
      "GraphQL API",
      "Clean Architecture",
      "JWT-based authentication",
      "Manager and HR workflows",
      "Modular backend architecture",
    ],
    architecture: {
      Frontend: "Next.js + React.js + TypeScript",
      Backend: "ASP.NET Core",
      API: "GraphQL",
      Database: "PostgreSQL",
      "State Management": "Redux Toolkit",
      "Client Data Layer": "Apollo Client",
      Styling: "Tailwind CSS",
    },
    github: "https://github.com/Somya007tiwari/HRMS-project",
    liveDemo: null,
    hasScreenshots: false,
    accentColor: "#6366f1",
  },
  {
    id: "shms",
    name: "Smart Hospital Management System",
    fullTitle: "Smart Hospital Management System",
    shortName: "SHMS",
    description:
      "A full-stack hospital management system designed to digitally manage patients, doctors, appointments, and hospital operations through a centralized web application.",
    problemSolved:
      "The system helps organize hospital information and workflows in one platform, reducing manual management of patient and doctor information while making appointment-related processes easier to manage.",
    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Vite",
      "HTML5",
      "CSS3",
      "REST API",
      "Git",
      "GitHub",
    ],
    features: [
      "Patient registration & login",
      "Doctor management",
      "Appointment management",
      "Admin dashboard",
      "Role-based access",
      "RESTful backend APIs",
      "PostgreSQL database integration",
      "Responsive web interface",
    ],
    architecture: {
      Frontend: "React.js + Vite",
      Backend: "Node.js + Express.js",
      Database: "PostgreSQL",
      API: "REST API",
    },
    github: "https://github.com/Somya007tiwari/SHMS-project",
    liveDemo: "https://shms-project-ecru.vercel.app/login",
    hasScreenshots: false, // Set to true and add screenshot paths when available
    screenshotPaths: [], // e.g. ["/screenshots/shms-1.png", "/screenshots/shms-2.png"]
    accentColor: "#06b6d4",
  },
];

export const experience = [
  {
    id: "smartbridge-pega",
    company: "SmartBridge Educational Services Pvt. Ltd. / Pega",
    position: "Virtual Intern",
    year: "2026",
    type: "Virtual Internship",
    description:
      "Completed hands-on training and practical tasks focused on Pega application development and enterprise technology. Gained exposure to low-code application development and enterprise application workflows.",
    technologies: ["Pega", "Low-Code Application Development"],
  },
];

export const achievements = [
  {
    id: "sih2025",
    title: "Smart India Hackathon 2025 — Top 50",
    icon: "trophy",
    description:
      "Selected among the top 50 teams in Smart India Hackathon 2025 from more than 350 participating teams.",
  },
  {
    id: "dsa",
    title: "DSA & Problem Solving",
    icon: "code",
    description:
      "Regularly practicing Data Structures and Algorithms using C++ to strengthen problem-solving and competitive programming skills.",
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    icon: "layers",
    description:
      "Built end-to-end web applications involving frontend development, backend APIs, authentication, databases, and responsive user interfaces.",
  },
  {
    id: "practical",
    title: "Practical Development",
    icon: "monitor",
    description:
      "Developed full-stack applications including a Human Resource Management System and Smart Hospital Management System.",
  },
];

export const education = [
  {
    id: "jecrc",
    institution: "JECRC University, Jaipur",
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science and Engineering",
    duration: "2023 — 2027",
    cgpa: "8.05 / 10",
  },
];

export const certifications = [
  {
    id: "cert-ibm",
    title: "Web Development Fundamentals",
    organization: "IBM SkillsBuild",
    date: "July 25, 2026",
    certId: "N/A",
    url: "https://drive.google.com/file/d/1JvQnBu4DV0hdU2ORmddjEBvg8cDXkq05/view?usp=sharing",
    description: null,
  },
  {
    id: "cert-udemy",
    title: "Complete Web Development Course",
    organization: "Udemy",
    date: "July 25, 2026",
    certId: "UC-4e3a4e2d-df24-4468-9411-447a9c90b4e6",
    url: "https://drive.google.com/file/d/1ljQZa3L-KV2aiIuO-dWrZFk2-JuiXz3W/view?usp=sharing",
    description: null,
  },
  {
    id: "cert-pega",
    title: "Pega / SmartBridge Virtual Internship",
    organization: "SmartBridge Educational Services Pvt. Ltd. / Pega",
    date: "2026",
    type: "Virtual Internship",
    technology: "Pega / Low-Code Application Development",
    url: "https://drive.google.com/file/d/1ucZGiVnzbmb8TmkyRdXNVE1G154nj68Y/view?usp=sharing",
    description:
      "Completed hands-on training and practical tasks focused on Pega application development, low-code application development, and enterprise application workflows.",
  },
];

export const navLinks = [
  { label: "Home", href: "hero" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Experience", href: "experience" },
  { label: "Achievements", href: "achievements" },
  { label: "Education", href: "education" },
  { label: "Certifications", href: "certifications" },
  { label: "Resume", href: "resume" },
  { label: "Contact", href: "contact" },
];
