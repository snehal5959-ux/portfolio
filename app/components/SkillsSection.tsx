"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  category: string;
  description: string;
  skills: Skill[];
  accent: string;
}

const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    description: "Designing responsive, accessible interfaces with polished interactions.",
    accent: "text-cyan-300",
    skills: [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "Bootstrap", icon: "🧩" },
      { name: "Responsive Design", icon: "📱" },
    ],
  },
  {
    category: "Backend",
    description: "Reliable server-side logic, APIs, and scalable application flows.",
    accent: "text-violet-300",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🛠️" },
      { name: "API Integration", icon: "🔗" },
      { name: "Auth & Security", icon: "🔐" },
    ],
  },
  {
    category: "Database & Tools",
    description: "Working with data stores and developer tools across the full stack.",
    accent: "text-emerald-300",
    skills: [
      { name: "MongoDB", icon: "🍃" },
      { name: "SQLite", icon: "🗄️" },
      { name: "Git & GitHub", icon: "🐙" },
      { name: "VS Code", icon: "💻" },
      { name: "Postman", icon: "📮" },
      { name: "AWS EC2", icon: "☁️" },
    ],
  },
  {
    category: "Frameworks & Cloud",
    description: "Frameworks and cloud technologies in my toolkit.",
    accent: "text-sky-300",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "📘" },
      { name: "Docker", icon: "🐳" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative isolate overflow-hidden border-y border-cyan-300/10 bg-[radial-gradient(ellipse_at_top_left,_rgba(0,229,255,0.08),_transparent_42%),radial-gradient(ellipse_at_bottom_right,_rgba(108,99,255,0.09),_transparent_36%),_#050816] px-5 py-20 text-slate-100 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/[0.015] via-transparent to-violet-400/[0.025]" />
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12 flex flex-col justify-between gap-5 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-cyan-300">Skills / Toolkit</p>
            <h2 className="max-w-xl text-3xl font-semibold text-white sm:text-4xl">Tools I use to bring ideas to life.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-400">A working set across interfaces, application logic, data, and cloud.</p>
        </motion.div>

        <div className="divide-y divide-white/10">
          {skillsData.map((category, index) => (
            <motion.article key={category.category} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.06 }} className="grid gap-5 py-7 md:grid-cols-[minmax(12rem,0.8fr)_2fr] md:items-center">
              <div>
                <p className={`mb-1 text-xs font-semibold ${category.accent}`}>0{index + 1} / 04</p>
                <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                <p className="mt-1 text-sm text-slate-400">{category.description}</p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span key={skill.name} className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/10 bg-white/[0.045] px-3.5 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-cyan-300/30 hover:bg-cyan-300/[0.06]">
                    <span className={category.accent} aria-hidden="true">{skill.icon}</span>{skill.name}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
