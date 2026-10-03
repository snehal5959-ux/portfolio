"use client";

import { certificates } from "../data/portfolio";
import NeonCard from "./NeonCard";
import { motion } from "framer-motion";

export default function CertificatesList() {
  return (
    <section id="certificates" className="px-8 py-20 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Certifications & Credentials
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>
        <p className="text-gray-400 text-lg">Professional certifications and completed courses</p>
      </motion.div>

      {/* Certificates Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <NeonCard
            key={cert.id}
            neonColor={cert.color as "cyan" | "blue" | "purple"}
            delay={index * 0.1}
            className="h-full border-gray-600/40 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5"
          >
            <div className="flex flex-col h-full">
              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl flex-shrink-0">{cert.icon}</span>
                <div>
                  <h3 className="font-bold text-lg text-white leading-tight">
                    {cert.title}
                  </h3>
                </div>
              </div>

              {cert.organization && (
                <p className="text-sm text-gray-400 mb-2">{cert.organization}</p>
              )}
              <p className="text-sm leading-relaxed text-gray-300">{cert.details}</p>

              {/* Date & Credential */}
              <div className="mt-auto space-y-3 pt-4 border-t border-gray-700/50">
                {cert.date && (
                  <div className="text-xs text-gray-500">
                    📅 {new Date(`${cert.date}T00:00:00`).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                )}
                {cert.credentialLink && (
                  <a
                    href={cert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs px-3 py-2 rounded-lg border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            </div>
          </NeonCard>
        ))}
      </div>
    </section>
  );
}
