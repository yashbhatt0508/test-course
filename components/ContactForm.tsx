"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="w-full relative">
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="absolute -top-20 left-0 right-0 bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 p-4 rounded-xl flex items-center justify-center gap-2 mb-6 shadow-sm z-10"
          >
            <CheckCircle2 size={20} />
            <span className="font-medium">Message sent successfully! We'll be in touch.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-[--background] p-6 sm:p-8 rounded-3xl border border-[--accent] shadow-sm relative z-0">
        <h3 className="text-2xl font-serif font-bold text-[--primary] mb-6 tracking-tight">Send us a message</h3>
        
        {/* Name Input */}
        <div className="relative group flex flex-col gap-1.5 focus-within:text-[--cta] text-[--primary]">
          <label htmlFor="name" className="text-sm font-semibold ml-1">
            Full Name
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className={cn(
              "w-full px-4 py-4 bg-[--alt-bg] rounded-xl border-2 outline-none transition-all duration-300",
              errors.name ? "border-red-500/50 focus:border-red-500" : "border-transparent focus:border-[--cta]"
            )}
            placeholder="John Doe"
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="text-red-500 text-xs mt-1.5 font-medium flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-red-500" /> {errors.name.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Email Input */}
        <div className="relative group flex flex-col gap-1.5 focus-within:text-[--cta] text-[--primary]">
          <label htmlFor="email" className="text-sm font-semibold ml-1">
            Email Address
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            className={cn(
              "w-full px-4 py-4 bg-[--alt-bg] rounded-xl border-2 outline-none transition-all duration-300",
              errors.email ? "border-red-500/50 focus:border-red-500" : "border-transparent focus:border-[--cta]"
            )}
            placeholder="john@example.com"
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="text-red-500 text-xs mt-1.5 font-medium flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-red-500" /> {errors.email.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Subject Select */}
        <div className="relative group flex flex-col gap-1.5 focus-within:text-[--cta] text-[--primary]">
          <label htmlFor="subject" className="text-sm font-semibold ml-1">
            Subject
          </label>
          <div className="relative">
            <select
              {...register("subject")}
              id="subject"
              className={cn(
                "w-full px-4 py-4 bg-[--alt-bg] dark:bg-[--alt-bg] rounded-xl border-2 outline-none transition-all duration-300 font-medium appearance-none",
                errors.subject ? "border-red-500/50 focus:border-red-500" : "border-transparent focus:border-[--cta]"
              )}
              defaultValue=""
            >
              <option value="" disabled hidden className="bg-white text-black dark:bg-[#0A1F26] dark:text-white">Select a Subject</option>
              <option value="enrollment" className="bg-white text-black dark:bg-[#0A1F26] dark:text-white">Course Enrollment</option>
              <option value="support" className="bg-white text-black dark:bg-[#0A1F26] dark:text-white">Technical Support</option>
              <option value="billing" className="bg-white text-black dark:bg-[#0A1F26] dark:text-white">Billing Inquiry</option>
              <option value="other" className="bg-white text-black dark:bg-[#0A1F26] dark:text-white">Other Inquiry</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[--secondary]">
              <ChevronDown size={20} />
            </div>
          </div>
          <AnimatePresence>
            {errors.subject && (
              <motion.p initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="text-red-500 text-xs mt-1.5 font-medium flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-red-500" /> {errors.subject.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Message Textarea */}
        <div className="relative group flex flex-col gap-1.5 focus-within:text-[--cta] text-[--primary]">
          <label htmlFor="message" className="text-sm font-semibold ml-1">
            Your Message
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={5}
            className={cn(
              "w-full px-4 py-4 bg-[--alt-bg] rounded-xl border-2 outline-none transition-all duration-300 resize-none",
              errors.message ? "border-red-500/50 focus:border-red-500" : "border-transparent focus:border-[--cta]"
            )}
            placeholder="Type your message here..."
          />
          <AnimatePresence>
            {errors.message && (
              <motion.p initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="text-red-500 text-xs mt-1.5 font-medium flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-red-500" /> {errors.message.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-[--cta] hover:bg-cyan-800 dark:hover:bg-[#22d3f2] text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg disabled:hover:shadow-none hover:scale-[1.02] active:scale-[0.98]"
        >
          {isSubmitting ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <>
              Send Message
              <Send size={18} className="translate-y-[1px] ml-1" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
