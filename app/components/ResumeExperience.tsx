import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ResumeSectionContainer,
  ResumeSectionTitle,
} from "./ResumeSectionContainer";
import { resumeData } from "@/app/data/resume";

export function ResumeExperience() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <ResumeSectionContainer id="experience">
      <ResumeSectionTitle
        title="Experience"
        subtitle="My professional journey and growth"
      />

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full md:transform md:-translate-x-1/2" />

        {/* Experience Cards */}
        <div className="space-y-8 md:space-y-12">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`md:flex gap-8 items-stretch ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex md:w-1/2 justify-center">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-slate-900 absolute left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
                  onClick={() =>
                    setExpandedId(expandedId === exp.id ? null : exp.id)
                  }
                />
              </div>

              {/* Card Content */}
              <div className="md:w-1/2 pl-8 md:pl-0">
                <motion.div
                  onClick={() =>
                    setExpandedId(expandedId === exp.id ? null : exp.id)
                  }
                  className="glassmorphic p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-100 group-hover:text-purple-300 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-cyan-400 font-semibold text-lg">
                        {exp.company}
                      </p>
                    </div>
                    <motion.span
                      animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                      className="text-2xl"
                    >
                      ▼
                    </motion.span>
                  </div>

                  {/* Duration */}
                  <p className="text-slate-400 text-sm mb-4">{exp.duration}</p>

                  {/* Description (always visible) */}
                  <p className="text-slate-300 mb-4">{exp.description}</p>

                  {/* Expandable Details */}
                  <AnimatePresence>
                    {expandedId === exp.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-purple-500/20 pt-4 mt-4"
                      >
                        {/* Highlights */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-slate-100 mb-2">
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.highlights.map((highlight, i) => (
                              <li
                                key={i}
                                className="text-slate-300 text-sm flex gap-2"
                              >
                                <span className="text-cyan-400">✓</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Skills */}
                        <div>
                          <h4 className="text-sm font-semibold text-slate-100 mb-2">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-purple-500/20 border border-purple-500/50 rounded-full text-xs text-slate-300 font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-slate-400 mb-4">
          Want to see my complete work history?
        </p>
        <a
          href="/resume.pdf"
          download="Snehal_Gavali_Resume.pdf"
          className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          📥 Download Full Resume
        </a>
      </motion.div>
    </ResumeSectionContainer>
  );
}
