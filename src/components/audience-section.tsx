import { audienceData } from "@/data/audience";
import { SectionHeading } from "@/components/section-heading";

export function AudienceSection() {
  return (
    <section
      id="audience"
      aria-labelledby="audience-title"
      className="relative z-10 bg-background/50 py-12 sm:py-16 border-t border-border/20"
    >
      <div className="mx-auto max-w-[1000px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          id="audience-title"
          title="لمن نصمم؟"
          subtitle="نقدم حلولًا مصممة خصيصًا لتلائم طبيعة أعمالك وأهدافك الرقمية في مختلف القطاعات."
        />

        <div className="mt-14 flex flex-wrap justify-center gap-3 sm:gap-4">
          {audienceData.map((item) => (
            <div
              key={item.id}
              className="group cursor-default rounded-full border border-border/30 bg-card/20 px-5 py-2.5 transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5"
            >
              <span className="text-sm sm:text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
