import { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { IntroSection } from "@/components/intro-section";
import { ServicesSection } from "@/components/services-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { WhyUsSection } from "@/components/why-us-section";
import { FeaturesSection } from "@/components/features-section";
import { ProcessSection } from "@/components/process-section";
import { AudienceSection } from "@/components/audience-section";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { FloatingActions } from "@/components/floating-actions";

export function App() {
  // Global Intersection Observer for scroll animations
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            // Optional: stop observing once revealed
            // observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -50px 0px",
        threshold: 0.1,
      },
    );

    const elements = document.querySelectorAll(".reveal-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-white"
      dir="rtl"
    >
      <Navbar />
      <main>
        <Hero />
        <div className="reveal-up">
          <IntroSection />
        </div>
        <div className="reveal-up">
          <ServicesSection />
        </div>
        <div className="reveal-up">
          <PortfolioSection />
        </div>
        <div className="reveal-up">
          <WhyUsSection />
        </div>
        <div className="reveal-up">
          <FeaturesSection />
        </div>
        <div className="reveal-up">
          <ProcessSection />
        </div>
        <div className="reveal-up">
          <AudienceSection />
        </div>
        <div className="reveal-up">
          <FaqSection />
        </div>
        <div className="reveal-up">
          <ContactSection />
        </div>
      </main>
      <div className="reveal-up">
        <Footer />
      </div>
      <FloatingActions />
    </div>
  );
}

export default App;
