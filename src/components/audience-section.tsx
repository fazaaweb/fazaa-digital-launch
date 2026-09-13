import { audienceData } from "@/data/audience";
import { CheckCircle2 } from "lucide-react";

export function AudienceSection() {
  return (
    <section
      id="audience"
      aria-labelledby="audience-title"
      className="relative z-10 border-t border-border/40 bg-background/80 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1560px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary sm:text-sm">
            نطاق الحلول
          </span>
          <h2
            id="audience-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            نصمم لمختلف أنواع المشاريع
          </h2>
          <p className="mt-4 text-base leading-relaxed text-secondary-foreground/85 sm:text-lg">
            نقدم حلولًا مصممة خصيصًا لتلائم طبيعة أعمالك وأهدافك الرقمية في مختلف القطاعات.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {audienceData.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col items-center justify-center rounded-2xl border border-border/50 bg-card/50 p-5 text-center transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <span className="mt-3 text-sm font-bold text-foreground transition-colors group-hover:text-primary sm:text-base">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
