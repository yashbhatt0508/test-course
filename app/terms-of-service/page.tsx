import { LegalPageLayout, LegalSection } from "@/components/AnimatedLegalContent";
import { AnimatedText } from "@/components/AnimatedText";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | EduCraft",
  description: "Terms of service and use licenses for EduCraft.",
};

export default function TermsOfService() {
  const toc = (
    <nav className="p-6 bg-[--alt-bg] rounded-2xl border border-[--accent] lg:sticky lg:top-32 w-full mb-8 lg:mb-0 shadow-sm">
      <h3 className="font-serif font-bold text-lg text-[--primary] mb-5">Table of Contents</h3>
      <ul className="space-y-4 text-[15px] text-[--secondary] font-medium">
        <li><a href="#acceptance" className="flex items-center hover:text-[--cta] hover:translate-x-1 transition-all duration-300">1. Acceptance</a></li>
        <li><a href="#use-license" className="flex items-center hover:text-[--cta] hover:translate-x-1 transition-all duration-300">2. Use License</a></li>
        <li><a href="#disclaimer" className="flex items-center hover:text-[--cta] hover:translate-x-1 transition-all duration-300">3. Disclaimer</a></li>
        <li><a href="#liability" className="flex items-center hover:text-[--cta] hover:translate-x-1 transition-all duration-300">4. Limitation of Liability</a></li>
        <li><a href="#governing-law" className="flex items-center hover:text-[--cta] hover:translate-x-1 transition-all duration-300">5. Governing Law</a></li>
        <li><a href="#contact" className="flex items-center hover:text-[--cta] hover:translate-x-1 transition-all duration-300">6. Contact</a></li>
      </ul>
    </nav>
  );

  return (
    <LegalPageLayout title="Terms of Service" toc={toc}>
      <LegalSection title="1. Acceptance" id="acceptance">
        <p>
          <AnimatedText text="By accessing this website, we assume you accept these terms and conditions. Do not continue to use EduCraft if you do not agree to take all of the terms and conditions stated on this page." />
        </p>
      </LegalSection>

      <LegalSection title="2. Use License" id="use-license">
        <p>
          <AnimatedText text="Permission is granted to temporarily download one copy of the materials (information or software) on EduCraft's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title." />
        </p>
      </LegalSection>

      <LegalSection title="3. Disclaimer" id="disclaimer">
        <p>
          <AnimatedText text="The materials on EduCraft's website are provided on an 'as is' basis. EduCraft makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability." />
        </p>
      </LegalSection>

      <LegalSection title="4. Limitation of Liability" id="liability">
        <p>
          <AnimatedText text="In no event shall EduCraft or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on EduCraft's website." />
        </p>
      </LegalSection>

      <LegalSection title="5. Governing Law" id="governing-law">
        <p>
          <AnimatedText text="These terms and conditions are governed by and construed in accordance with the laws of the applicable jurisdiction, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location." />
        </p>
      </LegalSection>

      <LegalSection title="6. Contact" id="contact">
        <p>
          <AnimatedText text="For any questions regarding our Terms of Service, please reach out via our contact page." />
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
