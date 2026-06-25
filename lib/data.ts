// ─── PORTFOLIO DATA ───────────────────────────────────────────────────────────
// Edit this file to update your portfolio content.

export const PROFILE = {
  name: "Mainul Islam",
  initials: "MI",
  title: "Full Stack Developer",
  location: "Dhaka, Bangladesh",
  timezone: "UTC+6",
  tagline:
    "Full Stack Developer with a BSc in Computer Science (3.73 GPA) and production experience at AmberIT LTD. I build scalable, API-first web applications using React, Node.js, and MongoDB — and I care as much about clean architecture as I do about shipping fast.",
  email: "s.m.sunny97@gmail.com",
  phone: "+880 1521 260456",
  github: "https://github.com/MainulIslamSunny",
  githubUsername: "MainulIslamSunny",
  linkedin: "https://linkedin.com/in/mainulislam188478",
  portfolio: "https://portfolio-mainul.vercel.app",
  // Replace with a real hosted PDF URL, e.g. Google Drive public link or /cv.pdf in /public
  cvUrl: "https://drive.google.com/file/d/1VmVYsR5KqZy5AcwZfKB6H6mU3c9neK07/view?usp=sharing",
  availableForWork: true,
  metrics: [
    { value: "3+", label: "YRS EXP" },
    { value: "10+", label: "PROJECTS" },
    { value: "3.73", label: "CGPA" },
  ],
  typingRoles: [
    "Full Stack Developer",
    "React & Node.js Engineer",
    "REST API Specialist",
    "Open to Opportunities",
  ],
};

export const SKILLS = [
  {
    category: "Frontend",
    color: "accent" as const,
    items: ["JavaScript ES6+", "React", "Redux", "Next.js", "TailwindCSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend & Databases",
    color: "amber" as const,
    items: ["Node.js", "Express.js", "PHP", "MySQL", "MongoDB", "Mongoose", "REST APIs", "JWT Auth"],
  },
  {
    category: "AI / Tools",
    color: "green" as const,
    items: ["Python", "OpenCV", "YOLOv3", "Git & GitHub", "Agile / Scrum", "Manual QA Testing"],
  },
];

export const EXPERIENCE = [
  {
    role: "Assistant Network Engineer",
    company: "AmberIT LTD",
    period: "Jan 2025 – Oct 2025",
    duration: "10 months",
    color: "accent" as const,
    description:
      "Supported system and network operations in a live production environment, monitoring service performance and resolving escalated technical incidents.",
    impacts: [
      "Reduced average incident resolution time by improving diagnostic documentation and runbooks for the support team",
      "Monitored network performance metrics daily across ISP infrastructure, flagging anomalies proactively",
      "Collaborated with cross-functional teams to maintain service uptime SLAs in a fast-paced ISP environment",
    ],
  },
  {
    role: "Manual Software Testing Trainee",
    company: "A1QA",
    period: "Nov 2023 – Feb 2024",
    duration: "4 months",
    color: "accent2" as const,
    description:
      "Executed structured test cases across web applications, documenting defects and contributing to Agile release cycles.",
    impacts: [
      "Wrote and executed test cases for web apps, identifying critical UI and functional defects",
      "Logged and tracked bugs using issue management tools, collaborating directly with development team",
    ],
  },
];

export const PROJECTS = [
  {
    icon: "🛒",
    name: "E-Commerce Platform",
    description:
      "Full-stack e-commerce with product listings, cart management, JWT auth, and a role-based admin dashboard.",
    tech: ["React", "Redux", "Next.js", "TailwindCSS", "MongoDB", "Mongoose", "JWT"],
    status: "In Progress" as const,
    featured: true,
    github: "",
    live: "",
  },
  {
    icon: "🎯",
    name: "Camera Classification",
    description:
      "Real-time object detection via live camera feed using YOLOv3. Final year BSc thesis project.",
    tech: ["Python", "OpenCV", "NumPy", "YOLOv3"],
    status: "Thesis" as const,
    featured: false,
    github: "",
    live: "",
  },
  {
    icon: "📚",
    name: "Library System",
    description: "Full CRUD library management with member tracking and inventory control.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    status: null,
    featured: false,
    github: "",
    live: "",
  },
  {
    icon: "🌐",
    name: "Responsive Portfolio",
    description:
      "Animated personal portfolio with bento-grid layout and live GitHub API integration.",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    status: "Live" as const,
    featured: false,
    github: "https://github.com/MainulIslamSunny",
    live: "https://portfolio-mainul.vercel.app",
  },
  {
    icon: "✉️",
    name: "Email Validator",
    description: "Client-side validator with regex patterns and real-time feedback UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: null,
    featured: false,
    github: "",
    live: "",
  },
];

export const EDUCATION = {
  institution: "Daffodil International University",
  degree: "BSc — Computer Science & Engineering",
  period: "Mar 2019 – Apr 2023",
  location: "Dhaka",
  cgpa: "3.73",
  scale: "4.00",
  courses: [
    "Data Structures",
    "Algorithms",
    "OOP",
    "Database Systems",
    "Computer Networks",
    "Machine Learning",
  ],
};

export const AWARDS = [
  {
    icon: "🏅",
    title: "Youth Leadership Certificate",
    org: "NYU & NORC, University of Chicago",
  },
  {
    icon: "🏆",
    title: "Hult Prize 2020",
    org: "Campus Round Finalist",
  },
  {
    icon: "🥇",
    title: "DIU Battle of Mind 2.0",
    org: "University Finalist",
  },
  {
    icon: "💬",
    title: "Languages",
    org: "English (Professional B2+) · Bangla (Native)",
  },
];
