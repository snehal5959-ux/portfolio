import { motion } from "framer-motion";
import Image from "next/image";
import { resumeData } from "@/app/data/resume";

export function ResumeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient with Parallax */}
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: -20, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/0 via-purple-500/5 to-cyan-500/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative w-48 h-48 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-xl opacity-50" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500/30 backdrop-blur-md bg-slate-900/50">
              <Image
                src="/image/profile.jpg"
                alt="Snehal Gavali – Full Stack Developer and Cloud Computing Expert"
                fill
                className="object-cover"
                priority
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%237c3aed' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='white'%3ESG%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              Hi, I'm {resumeData.personal.name.split(" ")[0]}
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-300 font-light mb-6">
            {resumeData.personal.title}
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            {resumeData.personal.description}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Download Resume */}
          <a
            href={resumeData.personal.resumePdf}
            download="Snehal_Gavali_Resume.pdf"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2"
            aria-label="Download Snehal Gavali's resume as PDF"
          >
            <span>📄</span>
            <span>Download Resume</span>
          </a>

          {/* LinkedIn */}
          <a
            href={resumeData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-slate-800/50 border-2 border-cyan-500/50 hover:border-cyan-400 text-slate-200 hover:text-cyan-300 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            aria-label="Connect on LinkedIn"
          >
            <span>🔗</span>
            <span>Connect on LinkedIn</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-slate-500 text-sm">Scroll to explore</div>
          <div className="text-2xl">↓</div>
        </motion.div>
      </div>
    </section>
  );
}
