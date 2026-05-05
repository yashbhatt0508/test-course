"use client";

import Link from "next/link";
import { BookOpen, Clock, FileText, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";

export default function SloganSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Top Slogan Part */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0F172A] leading-tight mb-8"
          >
            Give Your Child the Practice They Actually Need
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-[#334155] mb-12 leading-relaxed"
          >
            Designed to build confidence through consistent practice, timed tests, and clear performance insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/courses"
              className="relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#6366F1] text-white font-semibold text-lg transition-transform duration-200 hover:scale-[1.02] shadow-[0_0_30px_rgba(99,102,241,0.4)]"
            >
              Explore Test Series
            </Link>
          </motion.div>
        </div>

        {/* Why Parents Choose Us Grid */}
        <div className="pt-20 border-t border-[#E2E8F0]">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-[#0F172A] text-center mb-12"
          >
            Why Parents Choose Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 text-[#6366F1]">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-2 font-sans">Curriculum Aligned</h3>
              <p className="text-[#334155] text-sm leading-relaxed">Matches what your child learns at school</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 text-[#6366F1]">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-2 font-sans">Timed Practice</h3>
              <p className="text-[#334155] text-sm leading-relaxed">Helps build confidence for real tests</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 text-[#6366F1]">
                <FileText size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-2 font-sans">Exam-Style Mock Tests</h3>
              <p className="text-[#334155] text-sm leading-relaxed">Practice with tests designed to feel like real exams.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 text-[#6366F1]">
                <BarChart2 size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-2 font-sans">Detailed Performance Insights</h3>
              <p className="text-[#334155] text-sm leading-relaxed">Get clear solutions and understand where your child needs improvement.</p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
