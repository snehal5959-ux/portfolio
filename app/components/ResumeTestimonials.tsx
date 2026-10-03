import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ResumeSectionContainer,
  ResumeSectionTitle,
} from "./ResumeSectionContainer";
import { resumeData } from "@/app/data/resume";

export function ResumeTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonials = resumeData.testimonials;

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoPlay, testimonials.length]);

  const goToPrevious = () => {
    setAutoPlay(false);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <ResumeSectionContainer id="testimonials">
      <ResumeSectionTitle
        title="What People Say"
        subtitle="Feedback from colleagues and clients"
      />

      <div className="relative">
        {/* Carousel */}
        <div className="glassmorphic p-12 rounded-xl border border-purple-500/20 min-h-96 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl"
            >
              {/* Quote */}
              <blockquote className="text-2xl md:text-3xl font-light text-slate-100 mb-8 leading-relaxed">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center gap-4">
                {/* Avatar Placeholder */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-2xl font-bold text-white">
                  {currentTestimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div>
                  <p className="text-lg font-semibold text-slate-100">
                    {currentTestimonial.author}
                  </p>
                  <p className="text-slate-400 text-sm">
                    {currentTestimonial.title}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToPrevious}
            className="p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:border-purple-500 text-slate-300 hover:text-purple-400 transition-colors"
            aria-label="Previous testimonial"
          >
            ←
          </motion.button>

          {/* Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setAutoPlay(false);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-purple-500 to-cyan-500"
                    : "w-2 bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToNext}
            className="p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:border-purple-500 text-slate-300 hover:text-purple-400 transition-colors"
            aria-label="Next testimonial"
          >
            →
          </motion.button>
        </div>

        {/* Auto-play Toggle */}
        <div className="text-center mt-6">
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className="text-xs text-slate-500 hover:text-slate-400 transition-colors flex items-center gap-2 mx-auto"
          >
            <span className={autoPlay ? "text-green-500" : "text-slate-500"}>
              ●
            </span>
            {autoPlay ? "Auto-playing" : "Paused"} (click to toggle)
          </button>
        </div>
      </div>
    </ResumeSectionContainer>
  );
}
