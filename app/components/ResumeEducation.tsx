import { motion } from "framer-motion";
import {
  ResumeSectionContainer,
  ResumeSectionTitle,
} from "./ResumeSectionContainer";
import { resumeData } from "@/app/data/resume";
import { certificates } from "@/app/data/portfolio";

export function ResumeEducation() {
  return (
    <ResumeSectionContainer id="education">
      <ResumeSectionTitle
        title="Education & Certifications"
        subtitle="Continuous learning and professional development"
      />

      <div className="grid md:grid-cols-2 gap-8">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-100 mb-6">🎓 Education</h3>
          <div className="space-y-4">
            {resumeData.education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="glassmorphic p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-slate-100 mb-2">
                  {edu.degree}
                </h4>
                <p className="text-cyan-400 font-semibold mb-2">{edu.field}</p>
                <p className="text-slate-400 text-sm mb-2">{edu.institution}</p>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>{edu.year}</span>
                  <span>{edu.cgpa}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-100 mb-6">🏆 Certifications</h3>
          <div className="space-y-4">
            {certificates.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.credentialLink ?? "/#certificates"}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="glassmorphic p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 block group cursor-pointer"
              >
                <h4 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-2">
                  {cert.title}
                </h4>
                {cert.organization && <p className="text-slate-400 text-sm mb-2">{cert.organization}</p>}
                <p className="text-slate-400 text-sm mb-2">{cert.details}</p>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>{cert.date ? new Date(`${cert.date}T00:00:00`).toLocaleDateString("en-US", { year: "numeric", month: "short" }) : "Certificate"}</span>
                  <span className="text-cyan-500 group-hover:text-cyan-400">
                    {cert.credentialLink ? "View Certificate →" : "Browse certificates →"}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </ResumeSectionContainer>
  );
}
