import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ResumeSectionContainerProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function ResumeSectionContainer({
  id,
  children,
  className = "",
}: ResumeSectionContainerProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative max-w-6xl mx-auto px-6 py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
}

interface ResumeSectionTitleProps {
  title: string;
  subtitle?: string;
}

export function ResumeSectionTitle({
  title,
  subtitle,
}: ResumeSectionTitleProps) {
  return (
    <div className="mb-12">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-2"
      >
        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-slate-400 text-lg"
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-4"
      />
    </div>
  );
}
