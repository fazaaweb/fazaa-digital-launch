import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { IntroSection } from "@/components/intro-section";
import { ServicesSection } from "@/components/services-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { WhyUsSection } from "@/components/why-us-section";
import { FeaturesSection } from "@/components/features-section";
import { ProcessSection } from "@/components/process-section";
import { AudienceSection } from "@/components/audience-section";
import { TechSection } from "@/components/tech-section";
import { FaqSection } from "@/components/faq-section";
import { FinalCTA } from "@/components/final-cta";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { FloatingActions } from "@/components/floating-actions";

export function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-white" dir="rtl">
      {/* 01 Navbar */}
      <Navbar />

      <main>
        {/* 02 Hero */}
        <Hero />

        {/* 03 Intro */}
        <IntroSection />

        {/* 04 Services */}
        <ServicesSection />

        {/* 05 Portfolio */}
        <PortfolioSection />

        {/* 06 Why Choose Us */}
        <WhyUsSection />

        {/* 07 Features */}
        <FeaturesSection />

        {/* 08 Process */}
        <ProcessSection />

        {/* 09 Audience */}
        <AudienceSection />

        {/* 10 Technologies */}
        <TechSection />

        {/* 11 FAQ */}
        <FaqSection />

        {/* 12 Final CTA */}
        <FinalCTA />

        {/* 13 Project Request Form */}
        <ContactSection />
      </main>

      {/* 14 Footer */}
      <Footer />

      {/* 15 Floating WhatsApp */}
      <FloatingActions />
    </div>
  );
}

export default App;
