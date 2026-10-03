"use client";

import { motion } from "framer-motion";

const highlights = [
  { label: "Diploma", value: "94.71%" },
  { label: "Featured Projects", value: "5" },
  { label: "Technologies", value: "25+" },
  { label: "Focus", value: "AI + Web" },
];

export default function AboutMe() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,229,255,0.08)] backdrop-blur-2xl sm:p-10 lg:p-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">About Me</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Crafting polished, purposeful digital products.</h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="mb-6 text-lg leading-8 text-slate-300">
              I’m Snehal Gavali, a BTech student in Artificial Intelligence and Data Science at Vishwakarma Institute of Technology, Pune. I enjoy building responsive web applications and exploring practical applications of AI and cloud technology.
            </p>
            <p className="mb-6 text-lg leading-8 text-slate-300">
              I’m currently working on an industry-level simulation environment for benchmarking agentic AI and a smart residential society management system. My interests include full-stack development, cloud computing, and applied AI.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Full Stack Development",
                "UI/UX Design",
                "Cloud Computing",
                "Artificial Intelligence",
                "Responsive Design",
              ].map((item) => (
                <span key={item} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-200">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
