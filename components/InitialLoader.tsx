"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function InitialLoader() {
  const [stage, setStage] = useState(0); 
  // 0: Blank screen #D9F3F0
  // 1: Spinner appears
  // 2: Spinner replaced by EduCraft text
  // 3: Trigger exit animation

  useEffect(() => {
    // Show spinner after slight delay
    const t1 = setTimeout(() => setStage(1), 300);
    // Show EduCraft text after spinner rotates (e.g. 1.2s later)
    const t2 = setTimeout(() => setStage(2), 1500);
    // Fade away entirely
    const t3 = setTimeout(() => setStage(3), 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <AnimatePresence>
      {stage < 3 && (
        <motion.div
          key="loader-container-full"
          initial={{ opacity: 1, y: 0 }}
          exit={{ y: "-100%", opacity: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#D9F3F0] dark:bg-[#0A1F26] pointer-events-auto"
        >
          <AnimatePresence mode="wait">
            {stage === 1 && (
              <motion.div
                key="spinner"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
                className="w-16 h-16 sm:w-20 sm:h-20 border-[5px] border-[#0E7490]/20 dark:border-white/10 border-t-[#0E7490] dark:border-t-[--cta] rounded-full animate-spin"
              />
            )}

            {stage === 2 && (
              <motion.h1
                key="logo"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, type: "spring", bounce: 0.4 } }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(4px)", transition: { duration: 0.4 } }}
                className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-[#0B2C35] dark:text-white drop-shadow-xl tracking-tight"
              >
                EduCraft
              </motion.h1>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
