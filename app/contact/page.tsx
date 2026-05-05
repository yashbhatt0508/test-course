import ContactForm from "@/components/ContactForm";
import { Mail, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | EduCraft",
  description: "Get in touch with the EduCraft team.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-[80px] bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-8 py-20 max-w-5xl">
        
        {/* Top Heading */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0F172A] tracking-tight text-center md:text-left">
            Get In Touch
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Info Side */}
          <div className="w-full md:w-[40%] flex flex-col space-y-8">
            <div>
              <p className="text-[#334155] leading-relaxed text-lg mb-8 font-sans">
                We're here to help you. Whether you have a question about our test bundles, need technical support, or just want to share feedback, we'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#6366F1]/10 text-[#6366F1] rounded-full shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A] mb-1 font-serif text-lg">Email Us</h4>
                    <p className="text-[#6366F1] font-medium">support@educraft.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm">
              <div className="flex items-center gap-3 text-[#6366F1] font-bold mb-2">
                <Clock size={20} />
                <h4 className="font-serif">Response Time</h4>
              </div>
              <p className="text-[#334155] text-sm leading-relaxed">
                We aim to respond to all inquiries within 24 hours during standard business days.
              </p>
            </div>
          </div>

          {/* Right Column: Form Side */}
          <div className="w-full md:w-[60%]">
            <ContactForm />
          </div>
          
        </div>
      </div>
    </div>
  );
}
