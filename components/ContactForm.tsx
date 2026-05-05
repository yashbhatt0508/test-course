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
            className="absolute -top-20 left-0 right-0 bg-green-500/10 border border-green-500/20 text-green-600 p-4 rounded-xl flex items-center justify-center gap-2 mb-6 shadow-sm z-10"
          >
            <CheckCircle2 size={20} />
            <span className="font-medium">Message sent successfully! We'll be in touch.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm relative z-0">
        
        {/* Name Input */}
        <div className="flex flex-col gap-1.5 text-[#0F172A] focus-within:text-[#6366F1]">
          <label htmlFor="name" className="text-sm font-semibold">
            Full Name
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className={cn(
              "w-full px-4 py-3 bg-[#F8FAFC] rounded-xl border outline-none transition-all duration-300",
              errors.name ? "border-red-500/50 focus:border-red-500" : "border-[#E2E8F0] focus:border-[#6366F1]"
            )}
            placeholder="John Doe"
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="text-red-500 text-xs mt-1 font-medium flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-red-500" /> {errors.name.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Email Input */}
        <div className="flex flex-col gap-1.5 text-[#0F172A] focus-within:text-[#6366F1]">
          <label htmlFor="email" className="text-sm font-semibold">
            Email Address
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            className={cn(
              "w-full px-4 py-3 bg-[#F8FAFC] rounded-xl border outline-none transition-all duration-300",
              errors.email ? "border-red-500/50 focus:border-red-500" : "border-[#E2E8F0] focus:border-[#6366F1]"
            )}
            placeholder="john@example.com"
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="text-red-500 text-xs mt-1 font-medium flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-red-500" /> {errors.email.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Subject Select */}
        <div className="flex flex-col gap-1.5 text-[#0F172A] focus-within:text-[#6366F1]">
          <label htmlFor="subject" className="text-sm font-semibold">
            Subject
          </label>
          <div className="relative">
            <select
              {...register("subject")}
              id="subject"
              className={cn(
                "w-full px-4 py-3 bg-[#F8FAFC] rounded-xl border outline-none transition-all duration-300 font-medium appearance-none",
                errors.subject ? "border-red-500/50 focus:border-red-500" : "border-[#E2E8F0] focus:border-[#6366F1]"
              )}
              defaultValue=""
            >
              <option value="" disabled hidden>Select a Subject</option>
              <option value="enrollment">Course Enrollment</option>
              <option value="support">Technical Support</option>
              <option value="billing">Billing Inquiry</option>
              <option value="other">Other Inquiry</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#64748B]">
              <ChevronDown size={20} />
            </div>
          </div>
          <AnimatePresence>
            {errors.subject && (
              <motion.p initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="text-red-500 text-xs mt-1 font-medium flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-red-500" /> {errors.subject.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Message Textarea */}
        <div className="flex flex-col gap-1.5 text-[#0F172A] focus-within:text-[#6366F1]">
          <label htmlFor="message" className="text-sm font-semibold">
            Your Message
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={4}
            className={cn(
              "w-full px-4 py-3 bg-[#F8FAFC] rounded-xl border outline-none transition-all duration-300 resize-none",
              errors.message ? "border-red-500/50 focus:border-red-500" : "border-[#E2E8F0] focus:border-[#6366F1]"
            )}
            placeholder="Type your message here..."
          />
          <AnimatePresence>
            {errors.message && (
              <motion.p initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="text-red-500 text-xs mt-1 font-medium flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-red-500" /> {errors.message.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 py-3 bg-[#6366F1] hover:bg-indigo-600 text-white rounded-full font-bold flex items-center justify-center gap-2 transition-transform duration-200 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.01]"
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
