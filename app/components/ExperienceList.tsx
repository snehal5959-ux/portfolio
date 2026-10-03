"use client";

import { experiences } from "../data/portfolio";
import NeonCard from "./NeonCard";
import { motion } from "framer-motion";

export default function ExperienceList() {
  return (
    <section id="experience" className="px-8 py-20 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full" />
        </div>
        <p className="text-gray-400 text-lg">Work experience and career milestones</p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-blue-500 transform md:-translate-x-1/2" />

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-6 w-14 h-14 bg-black border-2 border-cyan-500 rounded-full flex items-center justify-center transform -translate-x-9 md:translate-x-0 md:-translate-x-7 z-10">
                <span className="text-xl">{exp.icon}</span>
              </div>

              {/* Card */}
              <NeonCard
                neonColor={exp.color as "cyan" | "blue" | "purple"}
                className={`flex-1 md:w-1/2 border-gray-600/40 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5 ${
                  index % 2 === 0 ? "md:text-right" : ""
                }`}
              >
                <div className="flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className={index % 2 === 0 ? "text-right w-full" : ""}>
                      <h3 className="text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-cyan-400 font-semibold text-lg">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Duration & Description */}
                  <div className={`mb-4 ${index % 2 === 0 ? "text-right" : ""}`}>
                    <p className="text-sm text-gray-400">⏱️ {exp.duration}</p>
                    <p className="text-gray-300 mt-2">{exp.description}</p>
                  </div>

                  {/* Responsibilities */}
                  <div className={`mb-4 ${index % 2 === 0 ? "" : ""}`}>
                    <p className="text-sm font-semibold text-gray-300 mb-3">
                      Key Responsibilities:
                    </p>
                    <ul
                      className={`space-y-2 text-sm text-gray-400 ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 justify-end">
                          <span>{resp}</span>
                          <span className="text-cyan-400 flex-shrink-0">✓</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="pt-4 border-t border-gray-700/50">
                    <p className="text-xs font-semibold text-gray-300 mb-2">
                      Tech Stack:
                    </p>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-xs border transition-all duration-300 ${
                            exp.color === "cyan"
                              ? "border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/20"
                              : exp.color === "blue"
                              ? "border-blue-500/50 text-blue-300 hover:bg-blue-500/20"
                              : "border-purple-500/50 text-purple-300 hover:bg-purple-500/20"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </NeonCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
