import { motion } from "framer-motion";
import { useState } from "react";
import {
  ResumeSectionContainer,
  ResumeSectionTitle,
} from "./ResumeSectionContainer";
import { resumeData } from "@/app/data/resume";

interface SkillRingProps {
  name: string;
  level: number;
}

function SkillRing({ name, level }: SkillRingProps) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (level / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-3"
    >
      <div className="relative w-32 h-32">
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="rgba(248, 250, 252, 0.1)"
            strokeWidth="4"
          />

          {/* Progress circle */}
          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="url(#skillGradient)"
            strokeWidth="4"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            strokeLinecap="round"
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient
              id="skillGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {level}%
            </div>
          </motion.div>
        </div>
      </div>

      <div className="text-center">
        <h4 className="font-semibold text-slate-100">{name}</h4>
      </div>
    </motion.div>
  );
}

export function ResumeSkills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = resumeData.skills;

  return (
    <ResumeSectionContainer id="skills">
      <ResumeSectionTitle
        title="Technical Skills"
        subtitle="Expertise across modern tech stack"
      />

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-12 justify-start">
        {categories.map((category, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveCategory(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              activeCategory === index
                ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/50"
                : "bg-slate-800/50 text-slate-300 border border-slate-700 hover:border-purple-500/50"
            }`}
          >
            {category.category}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
      >
        {categories[activeCategory].skills.map((skill, index) => (
          <SkillRing key={index} name={skill.name} level={skill.level} />
        ))}
      </motion.div>

      {/* Category Summary */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="glassmorphic p-8 rounded-xl border border-purple-500/20"
      >
        <h3 className="text-2xl font-bold text-slate-100 mb-4">
          {categories[activeCategory].category} Overview
        </h3>

        <p className="text-slate-300 mb-6">
          Overall Proficiency: {" "}
          <span className="text-cyan-400 font-semibold">
            {categories[activeCategory].proficiency}%
          </span>
        </p>

        <div className="space-y-3">
          {categories[activeCategory].skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-slate-300">{skill.name}</span>
                <span className="text-slate-400 text-sm">{skill.level}%</span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-2 bg-slate-800 rounded-full overflow-hidden"
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </ResumeSectionContainer>
  );
}
