"use client";

import Link from "next/link";

export default function SloganSection() {
  return (
    <section className="py-28 md:py-40 relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[--cta] to-[--accent]">
      {/* Subtle overlay texture */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-white/50 to-transparent pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-5xl">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold text-[--background] dark:text-[--primary] leading-tight group mb-10 tracking-tight">
          Unlock Your Potential.{" "}
          <br className="hidden md:block" />
          <span className="relative inline-block mt-2">
            Learn Without Limits.
            {/* Animated underline */}
            <span className="absolute -bottom-2 left-0 w-0 h-1 md:h-2 bg-[--background] dark:bg-[--primary] transition-all duration-[600ms] ease-in-out group-hover:w-full" />
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl text-[--background]/90 dark:text-[--primary]/80 mb-14 font-medium max-w-3xl mx-auto leading-relaxed">
          Join thousands of learners elevating their careers through our expertly crafted coursework right now.
        </p>

        <Link
          href="#signin"
          className="inline-block px-10 py-5 rounded-full bg-[--background] text-[--cta] font-bold text-lg shadow-xl hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-105"
        >
          Begin Your Journey
        </Link>
      </div>
    </section>
  );
}
