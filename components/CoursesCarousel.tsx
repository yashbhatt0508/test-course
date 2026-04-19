"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calculator, BookOpen, BrainCircuit } from "lucide-react";

const COURSES = [
  {
    id: 1,
    title: "Advanced Mathematics",
    description: "Master calculus, algebra, and geometry through highly interactive, problem-solving challenges tailored to logic.",
    icon: Calculator,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    id: 2,
    title: "English Literature",
    description: "Enhance your critical reading and writing skills by exploring classical and modern literary masterpieces.",
    icon: BookOpen,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    id: 3,
    title: "Critical Thinking",
    description: "Develop profound analytical skills. Learn how to construct, deconstruct, and evaluate complex arguments efficiently.",
    icon: BrainCircuit,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export default function CoursesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % COURSES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? COURSES.length - 1 : prev - 1));
  };

  return (
    <section id="courses" className="py-24 bg-[--alt-bg] overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[--primary] mb-6">
              Explore Our Curricula
            </h2>
            <p className="text-[--secondary] text-lg md:text-xl">
              Immerse yourself in expertly curated courses tailored to maximize your potential.
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full">
          <div
            className="flex flex-nowrap transition-transform duration-[600ms] ease-in-out md:!transform-none"
            style={{
              transform: isMobile ? `translateX(-${currentIndex * 100}%)` : "none",
            }}
          >
            {COURSES.map((course) => {
              const Icon = course.icon;
              return (
                <div
                  key={course.id}
                  className="w-full md:w-1/3 shrink-0 px-3 md:px-4"
                >
                  <div className="bg-[--background] rounded-2xl p-8 h-full flex flex-col transition-all duration-[400ms] hover:scale-[1.02] hover:shadow-2xl border border-transparent dark:border-white/5">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${course.bg} ${course.color}`}>
                      <Icon size={32} />
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-[--primary] mb-4">
                      {course.title}
                    </h3>

                    <p className="text-[--secondary] mb-8 flex-grow leading-relaxed text-base">
                      {course.description}
                    </p>

                    <button className="mt-auto group flex items-center justify-center space-x-2 w-full py-3.5 rounded-xl bg-transparent border-2 border-[--cta] text-[--cta] font-semibold transition-all duration-300 hover:bg-[--cta] hover:text-[--background]">
                      <span>Explore Course</span>
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Arrows for Mobile Only */}
        <div className="flex md:hidden justify-center space-x-6 mt-10">
          <button
            onClick={prevSlide}
            className="p-3.5 rounded-full bg-[--background] text-[--cta] shadow-md hover:scale-105 transition-transform"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="p-3.5 rounded-full bg-[--background] text-[--cta] shadow-md hover:scale-105 transition-transform"
          >
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
}
