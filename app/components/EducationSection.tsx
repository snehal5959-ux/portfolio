"use client";

import { motion } from "framer-motion";

const educationItems = [
  {
    title: "BTech in Artificial Intelligence and Data Science",
    meta: "Current Student",
    description: "Vishwakarma Institute of Technology (VIT), Pune.",
    accent: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Diploma in Computer Engineering",
    meta: "94.71% | 2022–2025",
    description: "Government Polytechnic.",
    accent: "from-violet-500/20 to-fuchsia-500/20",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">Education</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Learning with purpose and momentum.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {educationItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`rounded-3xl border border-white/10 bg-gradient-to-br ${item.accent} p-7 backdrop-blur-xl`}
            >
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">{item.meta}</p>
              <h3 className="mb-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-7 text-slate-300">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
