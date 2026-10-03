"use client";

import React from "react";
import { motion } from "framer-motion";

interface NeonCardProps {
  children: React.ReactNode;
  className?: string;
  neonColor?: "cyan" | "blue" | "purple" | "green";
  hoverable?: boolean;
  onClick?: () => void;
  delay?: number;
}

const neonColorMap = {
  cyan: "hover:shadow-[0_0_20px_rgba(0,255,255,0.6),_0_0_40px_rgba(0,255,255,0.3)] border-cyan-500/50 hover:border-cyan-400",
  blue: "hover:shadow-[0_0_20px_rgba(59,130,246,0.6),_0_0_40px_rgba(59,130,246,0.3)] border-blue-500/50 hover:border-blue-400",
  purple: "hover:shadow-[0_0_20px_rgba(168,85,247,0.6),_0_0_40px_rgba(168,85,247,0.3)] border-purple-500/50 hover:border-purple-400",
  green: "hover:shadow-[0_0_20px_rgba(34,197,94,0.6),_0_0_40px_rgba(34,197,94,0.3)] border-green-500/50 hover:border-green-400",
};

export default function NeonCard({
  children,
  className = "",
  neonColor = "cyan",
  hoverable = true,
  onClick,
  delay = 0,
}: NeonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      onClick={onClick}
      className={`
        relative
        ${hoverable ? "cursor-pointer group" : ""}
        ${neonColor && hoverable ? neonColorMap[neonColor] : ""}
        border rounded-xl p-6
        bg-gradient-to-br from-white/5 to-white/[0.02]
        backdrop-blur-sm
        transition-all duration-300
        ${className}
      `}
    >
      {/* Subtle animated background on hover */}
      {hoverable && (
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${
              neonColor === "cyan"
                ? "rgba(0,255,255,0.1)"
                : neonColor === "blue"
                ? "rgba(59,130,246,0.1)"
                : neonColor === "purple"
                ? "rgba(168,85,247,0.1)"
                : "rgba(34,197,94,0.1)"
            }, transparent)`,
          }}
        />
      )}

      {/* Content wrapper to ensure it sits above background */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
