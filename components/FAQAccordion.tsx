"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  { id: 1, category: "Courses", question: "How long do I have access to a course?", answer: "Once enrolled, you have complete lifetime access to the course materials, including any future updates we make." },
  { id: 2, category: "General", question: "Do you offer certificates?", answer: "Yes, upon completion of any premium course, you receive a verified, shareable digital certificate that you can add to your LinkedIn profile." },
  { id: 3, category: "Billing", question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, and Apple Pay processing globally." },
  { id: 4, category: "Technical", question: "Can I download videos for offline viewing?", answer: "Yes, our mobile application allows downloading content for offline access when you are traveling." },
  { id: 5, category: "Courses", question: "Are there prerequisites?", answer: "Most beginner courses have no prerequisites. Advanced courses clearly outline their prerequisites on their landing page." },
  { id: 6, category: "General", question: "Is there a refund policy?", answer: "We offer a 30-day money-back guarantee, no questions asked, if you are not satisfied with your experience." },
  { id: 7, category: "Billing", question: "How do subscriptions work?", answer: "Subscriptions are billed either monthly or annually, giving you unrestricted access to our entire course library." },
  { id: 8, category: "Technical", question: "I forgot my password, what do I do?", answer: "Click 'Forgot Password' on the login screen, enter your email, and we will send you a secure reset link." },
];

const CATEGORIES = ["All", "General", "Courses", "Billing", "Technical"];

export default function FAQAccordion() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<number | null>(null);

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-4">
      {/* Search Bar */}
      <div className="relative mb-10 w-full max-w-lg mx-auto group">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-[--secondary] transition-colors group-focus-within:text-[--cta]">
          <Search size={22} />
        </div>
        <input
          type="text"
          placeholder="Search for answers..."
          className="w-full pl-14 pr-4 py-4 bg-[--alt-bg] border-2 border-[--accent] focus:border-[--cta] focus:bg-[--background] rounded-xl text-[--primary] transition-all duration-300 outline-none shadow-sm placeholder-[--secondary]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* Animated bottom border focus effect */}
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[--cta] transition-all duration-300 group-focus-within:w-full rounded-b-xl" />
      </div>

      {/* Tabs Desktop & Dropdown Mobile */}
      <div className="mb-14">
        <div className="md:hidden mb-6">
          <select 
            className="w-full p-4 bg-[--alt-bg] dark:bg-[--alt-bg] border border-[--accent] rounded-xl outline-none font-medium appearance-none cursor-pointer"
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
          >
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat} className="bg-white text-black dark:bg-[#0A1F26] dark:text-white">
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden md:flex flex-wrap justify-center gap-3">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2.5 rounded-full font-medium transition-all duration-300",
                activeCategory === cat 
                  ? "bg-[--cta] text-white shadow-md scale-105" 
                  : "bg-[--alt-bg] text-[--secondary] hover:bg-[--accent] hover:text-[--primary]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        <AnimatePresence>
          {filteredFaqs.length === 0 ? (
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="text-center text-[--secondary] py-10"
            >
              No FAQs found matching your criteria.
            </motion.p>
          ) : (
            filteredFaqs.map((faq) => (
              <motion.div 
                key={faq.id} 
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "border rounded-2xl overflow-hidden transition-all duration-300",
                  openId === faq.id ? "border-[--cta] bg-[--background] shadow-[0_4px_20px_rgba(14,116,144,0.1)] dark:shadow-[0_4px_20px_rgba(23,184,213,0.1)]" : "border-[--accent] bg-[--alt-bg] hover:border-[--cta]/50"
                )}
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                >
                  <span className="font-serif font-bold text-lg lg:text-xl text-[--primary] pr-8">{faq.question}</span>
                  <ChevronDown 
                    size={24} 
                    className={cn(
                      "shrink-0 text-[--cta] transition-transform duration-300",
                      openId === faq.id ? "rotate-180" : "rotate-0"
                    )} 
                  />
                </button>
                
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-[--secondary] leading-relaxed border-t border-[--accent] pt-4 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-20 text-center"
      >
        <div className="inline-flex flex-col items-center p-10 bg-[--alt-bg] rounded-3xl border border-[--accent] shadow-sm">
          <h3 className="text-2xl font-serif font-bold text-[--primary] mb-3">Still can't find the answer?</h3>
          <p className="text-[--secondary] mb-8 font-medium">Our support team is ready to assist you 24/7.</p>
          <a href="/contact" className="px-8 py-3.5 bg-[--cta] hover:bg-[--cta-hover] text-white rounded-full font-bold transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95">
            Contact Support
          </a>
        </div>
      </motion.div>
    </div>
  );
}
