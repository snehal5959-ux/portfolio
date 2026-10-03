"use client";

import { motion } from "framer-motion";
import { projects } from "../data/portfolio";

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">Projects</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Built projects and current work.</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article key={project.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className={`flex min-h-64 flex-col rounded-lg border ${project.accent} bg-white/[0.04] p-7 backdrop-blur-xl`}>
              <div className="mb-5 flex items-center justify-between">
                <div className="text-3xl text-cyan-200" aria-hidden="true">{project.icon}</div>
                <span className={`rounded-full border px-3 py-1 text-xs ${project.status === "In progress" ? "border-amber-300/40 bg-amber-300/10 text-amber-200" : "border-emerald-300/40 bg-emerald-300/10 text-emerald-200"}`}>{project.status}</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold leading-snug text-white">{project.title}</h3>
              <p className="mb-6 text-sm leading-7 text-slate-300">{project.description}</p>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white">
                  View GitHub repository <span aria-hidden="true">↗</span>
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
