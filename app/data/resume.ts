// Resume data structure with all content
export const resumeData = {
  personal: {
    name: "Snehal Gavali",
    title: "BTech Student in AI & Data Science | Developer",
    description:
      "I am a BTech student in Artificial Intelligence and Data Science at Vishwakarma Institute of Technology, Pune, building software projects and exploring applied AI.",
    email: "snehal@example.com",
    phone: "+91 XXXXXXXXXX",
    location: "Pune, India",
    resumePdf: "/resume.pdf",
  },

  about: {
    summary:
      "BTech student in Artificial Intelligence and Data Science at Vishwakarma Institute of Technology, Pune. Currently working on agentic AI benchmarking and a smart residential society management system.",
    stats: [
      { label: "Featured Projects", value: "5" },
      { label: "Certifications", value: "10+" },
      { label: "Current Projects", value: "2" },
      { label: "Study", value: "VIT Pune" },
    ],
  },

  experience: [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "TechCorp Solutions",
      duration: "Jan 2024 - Present",
      description:
        "Leading development of React + Node.js applications with focus on scalability and performance.",
      highlights: [
        "Built React + Node.js applications serving 10K+ users",
        "Optimized database queries, improving performance by 45%",
        "Led team of 2 junior developers on microservices architecture",
      ],
      skills: ["React", "Node.js", "PostgreSQL", "AWS", "TypeScript"],
    },
    {
      id: 2,
      role: "Frontend Developer Intern",
      company: "DigitalWave Inc.",
      duration: "Jun 2023 - Dec 2023",
      description:
        "Developed responsive UI components and improved accessibility across the platform.",
      highlights: [
        "Created 20+ reusable React components with Tailwind CSS",
        "Improved accessibility score from 65 to 95+ (WCAG AA)",
        "Implemented real-time notifications using WebSockets",
      ],
      skills: ["React", "Tailwind CSS", "JavaScript", "REST APIs"],
    },
    {
      id: 3,
      role: "Student Developer",
      company: "University Tech Lab",
      duration: "Sep 2022 - May 2023",
      description:
        "Contributed to open-source projects and created automation scripts.",
      highlights: [
        "Contributed to 3 open-source projects on GitHub",
        "Created Python automation scripts for RPA using UiPath",
        "Mentored 5 junior students in web development",
      ],
      skills: ["Python", "JavaScript", "UiPath", "Git"],
    },
  ],

  skills: [
    {
      category: "Frontend",
      proficiency: 95,
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Next.js", level: 90 },
      ],
    },
    {
      category: "Backend",
      proficiency: 90,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "MongoDB", level: 88 },
        { name: "PostgreSQL", level: 85 },
      ],
    },
    {
      category: "Cloud & DevOps",
      proficiency: 85,
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Git", level: 92 },
        { name: "CI/CD", level: 80 },
      ],
    },
    {
      category: "Automation & RPA",
      proficiency: 88,
      skills: [
        { name: "UiPath", level: 88 },
        { name: "Automation", level: 85 },
        { name: "Python Scripts", level: 85 },
        { name: "Process Design", level: 82 },
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Technology",
      field: "Artificial Intelligence and Data Science",
      institution: "Vishwakarma Institute of Technology, Pune",
      year: "Current student",
      cgpa: "In progress",
    },
    {
      degree: "Diploma",
      field: "Computer Engineering",
      institution: "Government Polytechnic",
      year: "2022 - 2025",
      cgpa: "94.71%",
    },
  ],

  testimonials: [
    {
      quote:
        "Snehal is an exceptional developer with strong problem-solving skills. He completed our project ahead of schedule with outstanding code quality.",
      author: "John Smith",
      title: "CTO at TechCorp Solutions",
      image: "/testimonials/john.jpg",
    },
    {
      quote:
        "Working with Snehal was a great experience. He's detail-oriented, creative, and always delivers results that exceed expectations.",
      author: "Sarah Johnson",
      title: "Product Manager at DigitalWave",
      image: "/testimonials/sarah.jpg",
    },
    {
      quote:
        "Snehal's mentorship helped me grow as a developer. His guidance and expertise are invaluable to anyone looking to improve their skills.",
      author: "Mike Chen",
      title: "Junior Developer",
      image: "/testimonials/mike.jpg",
    },
  ],

  socialLinks: {
    github: "https://github.com/snehal5959-ux",
    linkedin: "https://linkedin.com/in/snehal",
    twitter: "https://twitter.com/snehal",
    email: "snehal@example.com",
  },
};
