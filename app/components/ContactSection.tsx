"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface ContactOption {
  icon: string;
  label: string;
  value: string;
  link: string;
  color: "cyan" | "blue" | "purple";
}

const contactOptions: ContactOption[] = [
  {
    icon: "✉️",
    label: "Email",
    value: "snehalgavali5959@gmail.com",
    link: "mailto:snehalgavali5959@gmail.com",
    color: "cyan",
  },
  {
    icon: "🔗",
    label: "LinkedIn",
    value: "View My Profile",
    link: "https://www.linkedin.com/in/snehal-gavali-2a89513b7/",
    color: "blue",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "View My Code",
    link: "https://github.com/snehal5959-ux",
    color: "purple",
  },
];

const colorMap = {
  cyan: {
    border: "border-cyan-500/50 hover:border-cyan-400",
    bg: "from-cyan-500/10 to-cyan-500/5",
    text: "text-cyan-300",
    button: "bg-gradient-to-r from-cyan-500 to-cyan-400",
    hoverShadow: "hover:shadow-cyan-500/20",
  },
  blue: {
    border: "border-blue-500/50 hover:border-blue-400",
    bg: "from-blue-500/10 to-blue-500/5",
    text: "text-blue-300",
    button: "bg-gradient-to-r from-blue-500 to-blue-400",
    hoverShadow: "hover:shadow-blue-500/20",
  },
  purple: {
    border: "border-purple-500/50 hover:border-purple-400",
    bg: "from-purple-500/10 to-purple-500/5",
    text: "text-purple-300",
    button: "bg-gradient-to-r from-purple-500 to-purple-400",
    hoverShadow: "hover:shadow-purple-500/20",
  },
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="px-8 py-20 max-w-6xl mx-auto">
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
            Get In Touch
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>
        <p className="text-gray-400 text-lg">
          Let's connect and explore opportunities together
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Contact Options */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:col-span-1 space-y-6"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Reach Out</h3>

          {contactOptions.map((option, index) => {
            const colors = colorMap[option.color];

            return (
              <motion.a
                key={index}
                variants={itemVariants}
                href={option.link}
                target={option.link.startsWith("mailto") ? undefined : "_blank"}
                rel={option.link.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className={`block p-6 rounded-xl border ${colors.border} bg-gradient-to-br ${colors.bg} transition-all duration-300 hover:shadow-lg ${colors.hoverShadow} group`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl group-hover:scale-110 transition-transform">
                    {option.icon}
                  </span>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">
                      {option.label}
                    </p>
                    <p className={`font-semibold ${colors.text} group-hover:text-white transition-colors`}>
                      {option.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}

          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-8 p-6 rounded-xl border border-gray-600/30 bg-gradient-to-br from-white/5 to-white/[0.02]"
          >
            <p className="text-sm text-gray-400 mb-4 font-semibold">Average Response Time</p>
            <p className="text-2xl font-bold text-cyan-400">24 Hours</p>
            <p className="text-xs text-gray-400 mt-2">
              I'm committed to responding promptly to all inquiries
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <div className="p-8 rounded-xl border border-cyan-500/50 bg-gradient-to-br from-white/5 to-white/[0.02]">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="text-5xl mb-4">✅</div>
                <h4 className="text-2xl font-bold text-green-400 mb-2">
                  Message Sent!
                </h4>
                <p className="text-gray-400">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </motion.div>
            ) : (
              <form suppressHydrationWarning onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600/50 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600/50 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600/50 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600/50 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                    placeholder="Tell me about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                >
                  Send Message ✓
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 p-8 rounded-xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-3">Let's Collaborate</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Whether you have a project in mind, want to discuss opportunities, or just want
          to connect, I'd love to hear from you. Let's create something amazing together!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/snehal-gavali-2a89513b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 transition-all"
          >
            Connect on LinkedIn
          </a>
          <a
            href="https://github.com/snehal5959-ux"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold hover:shadow-lg transition-all"
          >
            Check My GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
