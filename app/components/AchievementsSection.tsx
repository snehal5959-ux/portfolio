"use client";

import React from "react";
import { motion } from "framer-motion";

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  type: "internship" | "award" | "certification" | "project";
  icon: string;
  color: "cyan" | "blue" | "purple" | "green";
  details?: string[];
  link?: string;
}

const achievementsData: Achievement[] = [
  {
    id: 1,
    title: "ProAzure Internship – RPA & Cloud Computing",
    description: "12-week intensive internship focusing on automation and AWS infrastructure",
    date: "2024",
    type: "internship",
    icon: "🏢",
    color: "cyan",
    details: [
      "Designed and implemented RPA bots using UiPath reducing manual tasks by 70%",
      "Deployed scalable AWS infrastructure (EC2, Lambda, S3, RDS)",
      "Developed process automation workflows saving 200+ hours monthly",
      "Collaborated with cross-functional teams on cloud migration projects",
      "Gained hands-on experience with production-grade applications",
    ],
    link: "https://www.proazuresoft.com/",
  },
  {
    id: 2,
    title: "Finalist – Code Byte 2k25",
    description: "Advanced coding competition with 500+ participants",
    date: "2025",
    type: "award",
    icon: "🏆",
    color: "blue",
    details: [
      "Ranked among top 10 finalists",
      "Solved complex algorithmic challenges",
      "Demonstrated problem-solving skills under time pressure",
    ],
  },
  {
    id: 3,
    title: "24-Hour Hackathon: Chakravyuh 2k25",
    description: "Intense hackathon event building innovative solutions",
    date: "2025",
    type: "project",
    icon: "⚡",
    color: "purple",
    details: [
      "Developed full-stack application in 24 hours",
      "Integrated APIs and real-time data processing",
      "Presented solution to panel of industry judges",
      "Won recognition for technical excellence",
    ],
  },
  {
    id: 4,
    title: "AWS Certified Cloud Practitioner",
    description: "Professional AWS certification validating cloud expertise",
    date: "2024",
    type: "certification",
    icon: "☁️",
    color: "green",
    details: [
      "Pass score: 800/1000",
      "Covers AWS core services and best practices",
      "Valid through 2027",
    ],
  },
];

const colorMap = {
  cyan: {
    border: "border-cyan-500/50",
    bg: "from-cyan-500/10 to-cyan-500/5",
    badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/50",
    accent: "from-cyan-500 to-cyan-400",
  },
  blue: {
    border: "border-blue-500/50",
    bg: "from-blue-500/10 to-blue-500/5",
    badge: "bg-blue-500/20 text-blue-300 border-blue-500/50",
    accent: "from-blue-500 to-blue-400",
  },
  purple: {
    border: "border-purple-500/50",
    bg: "from-purple-500/10 to-purple-500/5",
    badge: "bg-purple-500/20 text-purple-300 border-purple-500/50",
    accent: "from-purple-500 to-purple-400",
  },
  green: {
    border: "border-green-500/50",
    bg: "from-green-500/10 to-green-500/5",
    badge: "bg-green-500/20 text-green-300 border-green-500/50",
    accent: "from-green-500 to-green-400",
  },
};

export default function AchievementsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="achievements" className="px-8 py-20 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Achievements & Milestones
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>
        <p className="text-gray-400 text-lg">
          Professional accomplishments and recognition
        </p>
      </motion.div>

      {/* Achievements List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-8"
      >
        {achievementsData.map((achievement, index) => {
          const colors = colorMap[achievement.color];
          const isInternship = achievement.type === "internship";

          return (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-xl border ${colors.border} bg-gradient-to-br ${colors.bg} transition-all duration-300 ${
                isInternship ? "hover:border-cyan-400 md:col-span-2" : ""
              }`}
            >
              {/* Animated Accent Line */}
              <div
                className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${colors.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className={`text-4xl`}>{achievement.icon}</div>
                  </div>

                  {/* Title & Meta */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3
                          className={`text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors ${
                            isInternship ? "text-cyan-300" : ""
                          }`}
                        >
                          {achievement.title}
                        </h3>
                        {isInternship && (
                          <div className="flex items-center gap-2 mt-2">
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-500/50 text-cyan-300">
                              Featured Achievement
                            </span>
                            <a
                              href={achievement.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-black hover:shadow-lg transition-all"
                            >
                              Visit Company ↗
                            </a>
                          </div>
                        )}
                      </div>

                      {/* Type Badge */}
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${colors.badge}`}>
                        {achievement.type.charAt(0).toUpperCase() +
                          achievement.type.slice(1)}
                      </div>
                    </div>

                    {/* Date & Description */}
                    <p className="text-gray-400 text-sm mb-2">📅 {achievement.date}</p>
                    <p className="text-gray-300 text-base">
                      {achievement.description}
                    </p>
                  </div>
                </div>

                {/* Details if available */}
                {achievement.details && achievement.details.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-gray-600/30">
                    <p className="text-sm font-semibold text-white mb-4">Key Highlights:</p>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {achievement.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-gray-300"
                        >
                          <span className={`inline-block mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                            achievement.color === "cyan"
                              ? "bg-cyan-400"
                              : achievement.color === "blue"
                              ? "bg-blue-400"
                              : achievement.color === "purple"
                              ? "bg-purple-400"
                              : "bg-green-400"
                          }`} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Stats Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {[
          { icon: "🏆", value: "4+", label: "Major Achievements" },
          { icon: "🎓", value: "5+", label: "Certifications" },
          { icon: "⚡", value: "3+", label: "Hackathons" },
          { icon: "💼", value: "12w", label: "Internship Duration" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-gray-600/30 hover:border-cyan-500/50 transition-all"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-xs text-gray-400 mt-2">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
