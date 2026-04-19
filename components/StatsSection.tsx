"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: 2000,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest));
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
};

export default function StatsSection() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="w-full relative z-20 mt-2 mb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-[#0b5c73]/95 dark:bg-[#071d24]/85 backdrop-blur-xl shadow-2xl rounded-[2rem] py-12 px-6 border border-white/10 dark:border-white/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center justify-center text-center pt-8 sm:pt-0"
          >
            <div className="text-5xl md:text-6xl font-bold text-white mb-3 flex items-baseline">
              <AnimatedNumber value={10} /><span className="text-3xl ml-1">+</span>
            </div>
            <p className="text-[rgba(255,255,255,0.7)] font-medium text-lg tracking-wide uppercase">Courses Ready</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center text-center pt-8 sm:pt-0"
          >
            <div className="text-5xl md:text-6xl font-bold text-white mb-3 flex items-baseline">
              Free
            </div>
            <p className="text-[rgba(255,255,255,0.7)] font-medium text-lg tracking-wide uppercase">To Get Started</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center justify-center text-center pt-8 sm:pt-0"
          >
            <div className="text-5xl md:text-6xl font-bold text-white mb-3 flex items-baseline">
              <AnimatedNumber value={100} /><span className="text-3xl ml-1">%</span>
            </div>
            <p className="text-[rgba(255,255,255,0.7)] font-medium text-lg tracking-wide uppercase">Self-Paced</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center justify-center text-center pt-8 sm:pt-0"
          >
            <div className="text-5xl md:text-6xl font-bold text-white mb-3 flex items-baseline">
              ✓
            </div>
            <p className="text-[rgba(255,255,255,0.7)] font-medium text-lg tracking-wide uppercase">Certificate Included</p>
          </motion.div>

        </div>
        </div>
      </div>
    </section>
  );
}
