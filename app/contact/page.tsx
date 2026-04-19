import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | EduCraft",
  description: "Get in touch with the EduCraft team.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-[80px] bg-[--background]">
      {/* 300px Hero */}
      <div className="h-[220px] md:h-[300px] flex items-center justify-center bg-[--alt-bg] border-b border-[--accent]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[--primary] animate-[fade-in-up_0.5s_ease-out] tracking-tight">
          Get In Touch
        </h1>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Form Side - 60% */}
          <div className="w-full lg:w-[60%]">
            <ContactForm />
          </div>
          
          {/* Info Side - 40% */}
          <div className="w-full lg:w-[40%] flex flex-col space-y-10">
            <div>
              <h2 className="text-2xl font-serif font-bold text-[--primary] mb-6">Contact Information</h2>
              <p className="text-[--secondary] leading-relaxed mb-8">
                Whether you have a question about courses, billing, or technical support, our team is ready to answer all your questions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[--alt-bg] text-[--cta] rounded-full shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[--primary] mb-1">Email Us</h4>
                    <p className="text-[--secondary]">support@educraft.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[--alt-bg] text-[--cta] rounded-full shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[--primary] mb-1">Call Us</h4>
                    <p className="text-[--secondary]">+1 (800) 555-0199</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[--alt-bg] text-[--cta] rounded-full shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[--primary] mb-1">Visit Us</h4>
                    <p className="text-[--secondary]">123 Learning Lane<br />Knowledge City, ED 90210</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[--accent] rounded-2xl border border-[--cta]/20">
              <div className="flex items-center gap-3 text-[--cta] font-bold mb-2">
                <Clock size={20} />
                <h4>Response Time</h4>
              </div>
              <p className="text-[--primary] font-medium text-sm">
                We aim to respond to all inquiries within 24 hours during standard business days.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
