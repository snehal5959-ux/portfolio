import { motion } from "framer-motion";
import {
  ResumeSectionContainer,
  ResumeSectionTitle,
} from "./ResumeSectionContainer";
import { projects } from "@/app/data/portfolio";

export function ResumeProjects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <ResumeSectionContainer id="projects">
      <ResumeSectionTitle
        title="Featured Projects"
        subtitle="Showcase of my best work"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="group flex h-full flex-col rounded-lg border border-slate-700 bg-slate-900/50 p-6 transition-colors hover:border-cyan-400/50"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="text-2xl text-cyan-300" aria-hidden="true">{project.icon}</span>
              <span className="text-xs text-slate-400">{project.status}</span>
            </div>
            <div className="flex flex-1 flex-col">
              <h3 className="mb-3 text-xl font-bold text-slate-100 group-hover:text-cyan-200">
                {project.title}
              </h3>
              <p className="mb-5 flex-1 text-sm leading-6 text-slate-400">{project.description}</p>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-sm font-semibold text-cyan-300 hover:text-white"
                  aria-label={`${project.title} GitHub repository`}
                >
                  View GitHub repository ↗
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Projects CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-slate-400 mb-4">
          Interested in seeing more projects?
        </p>
        <a
          href="https://github.com/snehal5959-ux"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          🔗 Visit my GitHub
        </a>
      </motion.div>
    </ResumeSectionContainer>
  );
}
