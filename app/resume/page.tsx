"use client";

import { ResumeNav } from "@/app/components/ResumeNav";
import { ResumeHero } from "@/app/components/ResumeHero";
import { ResumeAbout } from "@/app/components/ResumeAbout";
import { ResumeExperience } from "@/app/components/ResumeExperience";
import { ResumeSkills } from "@/app/components/ResumeSkills";
import { ResumeProjects } from "@/app/components/ResumeProjects";
import { ResumeEducation } from "@/app/components/ResumeEducation";
import { ResumeTestimonials } from "@/app/components/ResumeTestimonials";
import { ResumeContact } from "@/app/components/ResumeContact";
import { ResumeFooter } from "@/app/components/ResumeFooter";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <ResumeNav />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <ResumeHero />

        {/* About Section */}
        <ResumeAbout />

        {/* Experience Timeline */}
        <ResumeExperience />

        {/* Skills Section */}
        <ResumeSkills />

        {/* Projects Section */}
        <ResumeProjects />

        {/* Education & Certifications */}
        <ResumeEducation />

        {/* Testimonials Carousel */}
        <ResumeTestimonials />

        {/* Contact Section */}
        <ResumeContact />
      </main>

      {/* Footer */}
      <ResumeFooter />
    </div>
  );
}
