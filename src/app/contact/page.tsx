import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { ContactSupportSection } from "../../components/sections/ContactSupportSection";
import { ContactFormSection } from "../../components/sections/ContactFormSection";
import { ContactFeaturesBanner } from "../../components/sections/ContactFeaturesBanner";
import { EmailSupportSection } from "../../components/sections/EmailSupportSection";
import { PhoneSupportSection } from "../../components/sections/PhoneSupportSection";
import { SupportServicesSection } from "../../components/sections/SupportServicesSection";
import { ContactCTASection } from "../../components/sections/ContactCTASection";

export default function ContactPage() {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <ContactSupportSection />
      <ContactFeaturesBanner />
      <EmailSupportSection />
      <PhoneSupportSection />
      <SupportServicesSection />
      <ContactFormSection />
      <ContactCTASection />
      <Footer />
    </div>
  );
}
