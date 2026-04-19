import { LegalPageLayout, LegalSection } from "@/components/AnimatedLegalContent";
import { AnimatedText } from "@/components/AnimatedText";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | EduCraft",
  description: "Privacy policy and data protection guidelines for EduCraft.",
};

export default function PrivacyPolicy() {
  const toc = (
    <nav className="p-6 bg-[--alt-bg] rounded-2xl border border-[--accent] lg:sticky lg:top-32 w-full mb-8 lg:mb-0 shadow-sm">
      <h3 className="font-serif font-bold text-lg text-[--primary] mb-5">Table of Contents</h3>
      <ul className="space-y-4 text-[15px] text-[--secondary] font-medium">
        <li><a href="#intro" className="flex items-center hover:text-[--cta] hover:translate-x-1 transition-all duration-300">1. Introduction</a></li>
        <li><a href="#data-collection" className="flex items-center hover:text-[--cta] hover:translate-x-1 transition-all duration-300">2. Data Collection</a></li>
        <li><a href="#data-usage" className="flex items-center hover:text-[--cta] hover:translate-x-1 transition-all duration-300">3. Data Usage</a></li>
        <li><a href="#data-protection" className="flex items-center hover:text-[--cta] hover:translate-x-1 transition-all duration-300">4. Data Protection</a></li>
        <li><a href="#cookies" className="flex items-center hover:text-[--cta] hover:translate-x-1 transition-all duration-300">5. Cookies</a></li>
        <li><a href="#user-rights" className="flex items-center hover:text-[--cta] hover:translate-x-1 transition-all duration-300">6. User Rights</a></li>
        <li><a href="#contact" className="flex items-center hover:text-[--cta] hover:translate-x-1 transition-all duration-300">7. Contact</a></li>
      </ul>
    </nav>
  );

  return (
    <LegalPageLayout title="Privacy Policy" toc={toc}>
      <LegalSection title="1. Introduction" id="intro">
        <p>
          <AnimatedText text="Welcome to EduCraft. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights." />
        </p>
      </LegalSection>

      <LegalSection title="2. Data Collection" id="data-collection">
        <p>
          <AnimatedText text="We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows: Identity Data, Contact Data, Technical Data, Profile Data, and Usage Data." />
        </p>
      </LegalSection>

      <LegalSection title="3. Data Usage" id="data-usage">
        <p>
          <AnimatedText text="We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you; Where it is necessary for our legitimate interests; Where we need to comply with a legal obligation." />
        </p>
      </LegalSection>

      <LegalSection title="4. Data Protection" id="data-protection">
        <p>
          <AnimatedText text="We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know." />
        </p>
      </LegalSection>

      <LegalSection title="5. Cookies" id="cookies">
        <p>
          <AnimatedText text="You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly." />
        </p>
      </LegalSection>

      <LegalSection title="6. User Rights" id="user-rights">
        <p>
          <AnimatedText text="Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and to automated decision making." />
        </p>
      </LegalSection>

      <LegalSection title="7. Contact" id="contact">
        <p>
          <AnimatedText text="If you have any questions about this privacy policy or our privacy practices, please contact us at our provided support email or physical address." />
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
