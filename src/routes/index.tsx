import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { FloatingActions } from "@/components/floating-actions";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { PortfolioSection } from "@/components/portfolio-section";
import { ProcessSection } from "@/components/process-section";
import { ProjectCalculator } from "@/components/project-calculator";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { TrustStats } from "@/components/trust-stats";
import { WhyUsSection } from "@/components/why-us-section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "فزعة ويب | منصة تصميم وتطوير المواقع والحلول الرقمية الفاخرة" },
      {
        name: "description",
        content:
          "فزعة ويب - وكالة تصميم وبرمجة مواقع ومتاجر إلكترونية احترافية سريعة وسينمائية للشركات والمؤسسات برؤية عالمية وأداء فائق.",
      },
      {
        property: "og:title",
        content: "فزعة ويب | نصنع حضورًا رقميًا يليق بمشروعك",
      },
      {
        property: "og:description",
        content:
          "نصمم ونطور مواقع إلكترونية احترافية تجمع بين التصميم المميز، الأداء السريع، وتجربة المستخدم السلسة.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-dvh overflow-x-clip bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <TrustStats />
        <ServicesSection />
        <PortfolioSection />
        <ProjectCalculator />
        <WhyUsSection />
        <ProcessSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Center */}
      <FloatingActions />
    </div>
  );
}
