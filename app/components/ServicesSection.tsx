"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "High-performance websites and web apps crafted with polished UI, modern architecture, and measurable business impact.",
    icon: "⚡",
    accent: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Frontend Engineering",
    description: "Responsive interfaces with thoughtful motion, accessibility, and conversion-first interactions for every device.",
    icon: "🎨",
    accent: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    title: "Backend Systems",
    description: "Reliable APIs, database design, authentication flows, and cloud-ready services built to scale smoothly.",
    icon: "🛠️",
    accent: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "UI/UX Design",
    description: "Visual systems that feel premium, minimal, and memorable while staying intuitive for real users.",
    icon: "✨",
    accent: "from-amber-500/20 to-orange-500/20",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">Services</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Design, build, and launch with clarity.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`group rounded-3xl border border-white/10 bg-gradient-to-br ${service.accent} p-7 shadow-[0_0_40px_rgba(0,229,255,0.08)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2`}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-black/30 text-2xl">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
              <p className="text-sm leading-7 text-slate-300">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
