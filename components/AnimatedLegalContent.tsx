"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const LegalSection = ({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-12 lg:mb-16 group"
    >
      <h2 className="text-xl md:text-2xl lg:text-[22px] font-serif font-bold text-[--primary] mb-8 relative inline-block">
        {title}
        {/* Animated Underline */}
        <motion.span
          className="absolute left-0 -bottom-3 h-1 bg-[--cta]"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        />
      </h2>
      <div className="space-y-5 text-sm md:text-base text-[--secondary] leading-relaxed transition-all duration-200 group-hover:drop-shadow-[0_0_8px_rgba(14,116,144,0.15)] dark:group-hover:drop-shadow-[0_0_8px_rgba(23,184,213,0.15)]">
        {children}
      </div>
    </motion.section>
  );
};

export const LegalPageLayout = ({ title, children, toc }: { title: string; children: React.ReactNode; toc?: React.ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  // Parallax subtle background movement
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div ref={ref} className="min-h-screen relative bg-[--background] pt-[80px]">
      {/* Background Parallax Layer */}
      <motion.div 
        style={{ y }} 
        className="fixed inset-0 pointer-events-none z-0"
      >
        <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-[--cta] rounded-full blur-[150px] opacity-[0.03] dark:opacity-[0.05]" />
        <div className="absolute bottom-[20%] left-0 w-[600px] h-[600px] bg-[--accent] rounded-full blur-[180px] opacity-[0.05] dark:opacity-[0.05]" />
      </motion.div>

      {/* 300px Hero */}
      <div className="h-[220px] relative flex flex-col items-center justify-center bg-[--alt-bg] border-b border-[--accent] z-10 w-full animate-in fade-in duration-500">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[--primary] tracking-tight">
          {title}
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 md:px-8 py-16 relative z-10 flex flex-col lg:flex-row gap-12 items-start">
        {/* Table of Contents Wrapper */}
        {toc && (
          <aside className="w-full lg:w-1/4 lg:sticky lg:top-32 shrink-0">
             {toc}
          </aside>
        )}

        {/* Content Wrapper */}
        <div className="w-full flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};
