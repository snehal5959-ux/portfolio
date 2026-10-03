"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Snehal brings a rare mix of elegance, speed, and depth to every project. The whole experience felt premium and thoughtful.",
    author: "Project Collaborator",
    role: "Product Designer",
  },
  {
    quote: "Every interface felt intentional and modern. The attention to detail and execution quality were exceptional.",
    author: "Internship Mentor",
    role: "Technical Lead",
  },
  {
    quote: "The build quality and product instinct stood out immediately. It felt like working with a senior engineer and designer at once.",
    author: "Peer Developer",
    role: "Startup Founder",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">Testimonials</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Trusted by people who value craft.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            >
              <p className="mb-6 text-sm leading-7 text-slate-300">“{item.quote}”</p>
              <div>
                <p className="font-semibold text-white">{item.author}</p>
                <p className="text-sm text-cyan-300">{item.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
