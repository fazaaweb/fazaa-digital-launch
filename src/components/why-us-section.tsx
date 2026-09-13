import { whyUsData } from "@/data/why-us";
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
      className="relative z-10 border-t border-border/40 bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1560px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary sm:text-sm">
            قيم العمل ومعايير الجودة
          </span>
          <h2
            id="why-us-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            لماذا تختار فزعة ويب؟
          </h2>
          <p className="mt-4 text-base leading-relaxed text-secondary-foreground/85 sm:text-lg">
            لأننا نرى الموقع كجزء من مشروعك، وليس مجرد واجهة على الإنترنت.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUsData.map((item) => {
            const IconComponent = iconMap[item.iconName as keyof typeof iconMap] || Sparkles;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl border border-border/50 bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/20">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-secondary-foreground/80">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
