import { featuresData } from "@/data/features";
import { SectionHeading } from "@/components/section-heading";
import {
  Check,
  ShieldCheck,
  Zap,
  Globe,
  Layout,
  Smartphone,
  Search,
  RefreshCw,
  Lock,
  FastForward,
} from "lucide-react";

const featureIcons = {
  Check,
  ShieldCheck,
  Zap,
  Globe,
  Layout,
  Smartphone,
  Search,
  RefreshCw,
  Lock,
  FastForward,
};

export function FeaturesSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="relative z-10 bg-background/50 py-12 sm:py-16 border-t border-border/20"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          id="features-title"
          title="أهم ميزات مواقعنا"
          subtitle="نهتم بأدق التفاصيل التقنية والفنية لضمان خروج موقعك بأفضل صورة وأعلى أداء."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feature, idx) => {
            const Icon = featureIcons[feature.iconName as keyof typeof featureIcons] || Check;
            const isLarge = idx === 0 || idx === 3;
            return (
              <div
                key={feature.id}
                className={`group flex items-start gap-4 rounded-xl border border-border/30 bg-card/20 p-5 transition-all duration-300 hover:border-primary/30 hover:bg-card/50 ${isLarge ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="flex shrink-0 h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-1.5">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
