"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HERO_IMAGE = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
      </div>

      {/* Dark Overlay for text visibility */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      {/* Subtle dark gradient at bottom for text contrast */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/60 to-transparent z-10" />

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 md:px-8 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-8"
        >

          <span className="inline-block py-1 px-4 rounded-full bg-white/20 text-white backdrop-blur-sm text-[11px] font-bold uppercase tracking-wider border border-white/30 shadow-sm">
            Aligned with Australian curriculum standards
          </span>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight drop-shadow-md">
            Help your child feel<br />
            <span className="text-indigo-300">confident with EduAid</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-100 max-w-xl mx-auto font-medium leading-relaxed drop-shadow">
            Improve confidence, strengthen core subjects, and track real progress<br />
            all in one place.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/courses?filter=FREE"
              className="relative inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#6366F1] text-white font-semibold text-base transition-transform duration-200 hover:scale-[1.02] shadow-[0_0_20px_rgba(99,102,241,0.5)]"
            >
              {/* Pulse Ring */}
              <span className="absolute inset-0 rounded-full animate-[pulse-ring_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></span>
              <span className="relative z-10">Start with a Free Test</span>
            </Link>

            <Link
              href="/courses"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/40 text-white font-semibold text-base transition-all duration-200 hover:scale-[1.02] hover:bg-white/20"
            >
              Explore Test Series
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
