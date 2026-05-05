"use client";

import { Calculator, BookOpen, BrainCircuit } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const COURSES = [
  {
    id: 1,
    title: "Mathematics",
    description: "Core concepts aligned with school curriculum.",
    icon: Calculator,
    bandColor: "bg-[#6366F1]",
    textColor: "text-[#6366F1]",
  },
  {
    id: 2,
    title: "English",
    description: "Enhance reading comprehension and writing skills.",
    icon: BookOpen,
    bandColor: "bg-[#14B8A6]",
    textColor: "text-[#14B8A6]",
  },
  {
    id: 3,
    title: "Reasoning",
    description: "Develop strong analytical and logical thinking.",
    icon: BrainCircuit,
    bandColor: "bg-[#818CF8]",
    textColor: "text-[#818CF8]",
  },
];

export default function CoursesCarousel() {
  return (
    <section id="courses" className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#0F172A] mb-6"
          >
            What Your Child Will Practice
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#334155] text-lg"
          >
            Focused practice in Mathematics, Reasoning, and English — aligned with school learning, with timed tests and detailed performance insights.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COURSES.map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.id}
                className="group relative bg-white rounded-2xl border border-[#E2E8F0] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col"
              >
                {/* Top colored band */}
                <div className={`h-2 w-full rounded-t-2xl ${course.bandColor}`} />
                
                <div className="p-6 flex flex-col h-full">
                  <div className={`w-12 h-12 mb-5 rounded-xl bg-opacity-10 flex items-center justify-center ${course.textColor} bg-current`}>
                    <Icon size={24} className="opacity-100" />
                  </div>

                  <h3 className="text-2xl font-serif font-semibold text-[#0F172A] mb-3">
                    {course.title}
                  </h3>

                  <p className="text-[#334155] mb-6 flex-grow">
                    {course.description}
                  </p>

                  <Link 
                    href={`/courses?subject=${course.title}`}
                    className="mt-auto text-[#6366F1] font-semibold flex items-center gap-1 group-hover:text-indigo-700 transition-colors"
                  >
                    View Tests <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
