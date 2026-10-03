import { motion } from "framer-motion";
import { resumeData } from "@/app/data/resume";

export function ResumeFooter() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: "🐙", label: "GitHub", url: resumeData.socialLinks.github },
    { icon: "💼", label: "LinkedIn", url: resumeData.socialLinks.linkedin },
    { icon: "🐦", label: "Twitter", url: resumeData.socialLinks.twitter },
    { icon: "📧", label: "Email", url: `mailto:${resumeData.socialLinks.email}` },
  ];

  const footerLinks = [
    { label: "Home", href: "#" },
    { label: "Resume", href: "/resume.pdf" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-slate-950 to-slate-900/50 border-t border-purple-500/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              {resumeData.personal.name.split(" ")[0]}
            </h3>
            <p className="text-slate-400 text-sm">
              Full Stack Developer | Cloud Architecture | RPA Automation
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-slate-100 font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-slate-100 font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 border border-slate-700 hover:border-transparent flex items-center justify-center transition-all duration-300 text-lg"
                  aria-label={social.label}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500"
        >
          <p>
            © {currentYear} {resumeData.personal.name}. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-slate-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-slate-400 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-slate-400 transition-colors"
            >
              Sitemap
            </a>
          </div>

          <p>
            Built with{" "}
            <span className="text-purple-400">Next.js</span> &{" "}
            <span className="text-cyan-400">Tailwind CSS</span>
          </p>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-lg shadow-purple-500/50 flex items-center justify-center text-white font-bold transition-all duration-300 z-40"
        aria-label="Back to top"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        ↑
      </motion.a>
    </footer>
  );
}
