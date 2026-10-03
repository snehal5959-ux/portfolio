import { motion } from "framer-motion";
import { useState } from "react";
import {
  ResumeSectionContainer,
  ResumeSectionTitle,
} from "./ResumeSectionContainer";
import { resumeData } from "@/app/data/resume";

export function ResumeContact() {
  const [formState, setFormState] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormState({ email: "", subject: "", message: "" });

      // Reset submitted state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <ResumeSectionContainer id="contact">
      <ResumeSectionTitle
        title="Get In Touch"
        subtitle="Let's connect and work together"
      />

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glassmorphic p-8 rounded-xl border border-purple-500/20"
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center h-full gap-4 text-center py-12"
            >
              <div className="text-5xl">✅</div>
              <h3 className="text-2xl font-bold text-slate-100">Thank you!</h3>
              <p className="text-slate-400">
                I'll get back to you as soon as possible.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-200 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-describedby="email-help"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 hover:border-purple-500/50 focus:border-purple-500 rounded-lg text-slate-100 placeholder-slate-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
                <span id="email-help" className="text-xs text-slate-500 mt-1">
                  We'll never share your email
                </span>
              </div>

              {/* Subject Input */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-slate-200 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  placeholder="Let's collaborate..."
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 hover:border-purple-500/50 focus:border-purple-500 rounded-lg text-slate-100 placeholder-slate-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-200 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 hover:border-purple-500/50 focus:border-purple-500 rounded-lg text-slate-100 placeholder-slate-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/50 resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <span>📧</span>
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Email Card */}
          <motion.a
            href={`mailto:${resumeData.socialLinks.email}`}
            whileHover={{ scale: 1.05 }}
            className="glassmorphic p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 block group"
          >
            <div className="text-3xl mb-3">📧</div>
            <h3 className="text-lg font-semibold text-slate-100 group-hover:text-purple-300 transition-colors">
              Email
            </h3>
            <p className="text-slate-400 text-sm">
              {resumeData.socialLinks.email}
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Response time: within 24 hours
            </p>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            href={resumeData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="glassmorphic p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 block group"
          >
            <div className="text-3xl mb-3">💼</div>
            <h3 className="text-lg font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
              LinkedIn
            </h3>
            <p className="text-slate-400 text-sm">Connect with me</p>
            <p className="text-xs text-slate-500 mt-2">
              Let's expand our network
            </p>
          </motion.a>

          {/* GitHub Card */}
          <motion.a
            href={resumeData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="glassmorphic p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 block group"
          >
            <div className="text-3xl mb-3">🐙</div>
            <h3 className="text-lg font-semibold text-slate-100 group-hover:text-purple-300 transition-colors">
              GitHub
            </h3>
            <p className="text-slate-400 text-sm">Check out my code</p>
            <p className="text-xs text-slate-500 mt-2">
              Explore my projects and contributions
            </p>
          </motion.a>
        </motion.div>
      </div>
    </ResumeSectionContainer>
  );
}
