
import { audienceData } from "@/data/audience";

export function AudienceSection() {
  return (
    <section id="audience" aria-labelledby="audience-title" className="relative z-10 bg-background/50 py-12 sm:py-16 border-t border-border/20">
      <div className="mx-auto max-w-[1000px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto text-center flex flex-col items-center">
          <h2 id="audience-title" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            لمن نصمم؟
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
            نقدم حلولًا مصممة خصيصًا لتلائم طبيعة أعمالك وأهدافك الرقمية في مختلف القطاعات.
          </p>
        </div>

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
