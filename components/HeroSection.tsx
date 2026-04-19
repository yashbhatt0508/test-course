"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // 5 seconds interval
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Images Layer */}
      {HERO_IMAGES.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[800ms] ease-in-out ${index === currentImageIndex ? "opacity-100 z-0" : "opacity-0 -z-10"
            }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
          />
        </div>
      ))}

      {/* Dark Overlay for max text visibility */}
      <div className="absolute inset-0 bg-black/75 dark:bg-black/65 z-10" />
      {/* Bottom fade to blend with the next section seamlessly */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[--background] to-transparent z-10" />

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 md:px-8 text-center flex flex-col items-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-[fade-in-up_1s_ease-out]">

          <span className="inline-block py-1.5 px-4 rounded-full bg-[--cta] dark:bg-[--accent] text-[#D9F3F0] dark:text-[--cta] text-sm font-semibold tracking-wide uppercase shadow-sm">
            Elevate Your Journey
          </span>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight drop-shadow-2xl">
            Master Your Future With <span className="text-[--cta] brightness-125 saturate-150 drop-shadow-2xl">EduCraft</span>
          </h1>

          <p className="text-lg md:text-2xl text-neutral-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-xl">
            Unlock premium, interactive learning experiences carefully designed to take your critical skills to the next dimension.
          </p>

          <div className="pt-8">
            <Link
              href="#courses"
              className="group relative inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-[--cta] text-[#D9F3F0] dark:text-[--background] font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-cyan-800 dark:hover:bg-[--cta-hover] hover:shadow-[0_0_20px_var(--cta)]"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
