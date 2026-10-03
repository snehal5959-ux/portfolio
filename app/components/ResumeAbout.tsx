import { motion } from "framer-motion";
import {
  ResumeSectionContainer,
  ResumeSectionTitle,
} from "./ResumeSectionContainer";
import { resumeData } from "@/app/data/resume";

export function ResumeAbout() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <ResumeSectionContainer id="about">
      <ResumeSectionTitle title="About Me" subtitle="Who I am and what I do" />

      {/* Summary */}
      <div className="mb-12 grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glassmorphic p-6 rounded-xl border border-purple-500/20"
        >
          <p className="text-slate-300 text-lg leading-relaxed">
            {resumeData.about.summary}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {resumeData.about.stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glassmorphic p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Interests / Skills Overview */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="glassmorphic p-8 rounded-xl border border-purple-500/20"
      >
        <h3 className="text-xl font-semibold text-slate-100 mb-4">
          Areas of Interest
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Full Stack Development",
            "Cloud Architecture",
            "RPA Automation",
            "Scalable Systems",
            "Open Source",
            "Mentoring",
          ].map((interest, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/50 rounded-full text-slate-300 text-sm font-medium hover:border-purple-500 transition-colors cursor-default"
            >
              ✨ {interest}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </ResumeSectionContainer>
  );
}
