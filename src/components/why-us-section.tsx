import { whyUsData } from "@/data/why-us";
import { SectionHeading } from "@/components/section-heading";
import {
  Palette,
  Zap,
  Layout,
  Smartphone,
  TrendingUp,
  MessageSquare,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const iconMap = {
  Palette,
  Zap,
  Layout,
  Smartphone,
  TrendingUp,
  MessageSquare,
  CheckCircle2,
  Sparkles,
};

export function WhyUsSection() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-title"
      className="relative z-10 bg-background py-12 sm:py-16 border-t border-border/20"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          id="why-us-title"
          title="لماذا تختار فزعة ويب؟"
          subtitle="لأننا نرى الموقع كجزء من مشروعك، وليس مجرد واجهة على الإنترنت."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyUsData.map((item) => {
            const IconComponent = iconMap[item.iconName as keyof typeof iconMap] || Sparkles;
            return (
              <div
                key={item.id}
                className="group relative flex flex-col rounded-xl border border-border/30 bg-card/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/40"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/5 text-primary transition-colors group-hover:bg-primary/10">
                  <IconComponent className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
