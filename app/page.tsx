"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AboutMe from "./components/AboutMe";
import AchievementsSection from "./components/AchievementsSection";
import CertificatesList from "./components/CertificatesList";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import ExperienceList from "./components/ExperienceList";
import ProjectsShowcase from "./components/ProjectsShowcase";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ThemeToggle from "./components/ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const words = ["Full Stack Developer", "UI Designer", "Cloud Enthusiast", "Problem Solver"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (typedText.length < currentWord.length) {
          setTypedText(currentWord.slice(0, typedText.length + 1));
        } else {
          setDeleting(true);
        }
      } else if (typedText.length > 0) {
        setTypedText(currentWord.slice(0, typedText.length - 1));
      } else {
        setDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, deleting ? 55 : 120);

    return () => clearTimeout(timeout);
  }, [typedText, deleting, wordIndex]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,229,255,0.18),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(108,99,255,0.22),_transparent_24%),linear-gradient(135deg,_#060813,_#04060d)]" />
        <div className="blob blob-one" />
        <div className="blob blob-two" />
        <div className="blob blob-three" />
      </div>

      <div className="pointer-events-none fixed left-0 top-0 z-[60] h-1 w-full bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400" style={{ width: `${scrollProgress}%` }} />
      <div
        className="pointer-events-none fixed z-[40] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/40 bg-cyan-400/10 blur-2xl"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a href="#home" className="text-lg font-semibold tracking-[0.25em] text-cyan-300 uppercase">Snehal</a>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-cyan-300">
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="rounded-full border border-cyan-400/30 bg-white/5 p-2 text-cyan-300"
              aria-label="Toggle navigation"
            >
              ☰
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-950/90 px-5 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-slate-300" onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main id="home">
        <section className="relative px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
                BTech AI & Data Science Student • VIT Pune
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
                Snehal Gavali
              </h1>
              <h2 className="mt-4 text-2xl font-medium text-cyan-300 sm:text-3xl">
                Turning ideas into <span className="text-white">{typedText}</span>
                <span className="ml-1 animate-pulse">|</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                I craft premium digital experiences with a strong focus on modern web development, intuitive UI, scalable backend systems, and cloud-ready architecture.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/resume.pdf" download className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105">
                  Download Resume
                </a>
                <a href="/internship.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-6 py-3 font-semibold text-emerald-200 transition hover:scale-105">
                  View Internship Certificate
                </a>
                <a href="https://github.com/snehal5959-ux" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-slate-100 transition hover:scale-105">
                  GitHub Profile
                </a>
                <a href="#projects" className="rounded-full border border-cyan-400/40 bg-white/5 px-6 py-3 font-semibold text-cyan-200 transition hover:scale-105">
                  View Projects
                </a>
                <a href="#contact" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-slate-100 transition hover:scale-105">
                  Hire Me
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-400">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">94.71% Diploma</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">AWS EC2 Experience</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Full Stack Focus</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/30 to-violet-500/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-4 shadow-[0_25px_80px_rgba(0,229,255,0.12)] backdrop-blur-2xl">
                <Image src="/images/profile.jpg" alt="Snehal Gavali" width={640} height={760} className="h-[480px] w-full rounded-[1.5rem] object-cover" />
                <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-300">
                  <div>
                    <p className="text-cyan-300">Currently building</p>
                    <p className="font-semibold text-white">Agentic AI & society management</p>
                  </div>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-emerald-300">Open to work</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mx-auto mt-16 flex max-w-6xl flex-wrap justify-center gap-4 text-center">
            {[
              { label: "Study", value: "AI & Data Science · VIT Pune" },
              { label: "Building", value: "Agentic AI benchmarking" },
              { label: "Building", value: "Society management system" },
              { label: "Cloud", value: "AWS Certified Cloud Practitioner" },
            ].map((card) => (
                <div key={`${card.label}-${card.value}`} className="min-w-[180px] rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{card.label}</p>
                <p className="mt-2 text-sm text-slate-300">{card.value}</p>
              </div>
            ))}
          </div>
        </section>

        <AboutMe />
        <SkillsSection />
        <ServicesSection />
        <ProjectsShowcase />
        <ExperienceList />
        <EducationSection />
        <AchievementsSection />
        <TestimonialsSection />
        <CertificatesList />
        <ContactSection />
      </main>

      <footer className="border-t border-white/10 px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Snehal Gavali. Crafted with a premium, modern feel.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#home" className="transition hover:text-cyan-300">Back to Top</a>
            <a href="https://github.com/snehal5959-ux" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">GitHub</a>
            <a href="https://www.linkedin.com/in/snehal-gavali-2a89513b7/" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}