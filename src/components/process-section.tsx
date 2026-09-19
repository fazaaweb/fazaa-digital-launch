import { processData } from "@/data/process";
import { SectionHeading } from "@/components/section-heading";

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="relative z-10 bg-background py-16 sm:py-20 border-t border-border/20"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          id="process-title"
          title="كيف نعمل؟"
          subtitle="خطوات واضحة وبسيطة ترافق مشروعك من الفكرة وحتى الإطلاق والنمو."
          className="mb-14 sm:mb-16"
        />

        {/* Clean, Non-card Timeline with precise blue line and blue numbers */}
        <div className="relative pr-2 sm:pr-4">
          {/* Continuous vertical blue line passing cleanly through circle centers */}
          <div
            aria-hidden="true"
            className="absolute right-[19px] sm:right-[23px] top-6 bottom-6 w-0.5 bg-blue-500/40"
          />

          <div className="space-y-6 sm:space-y-7">
            {processData.map((step) => (
              <div
                key={step.number}
                className="relative flex items-start gap-4 sm:gap-6 group"
              >
                {/* Number Circle in clean blue */}
                <div className="relative z-10 flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border-2 border-blue-500 bg-background text-blue-500 font-bold font-mono text-sm sm:text-base transition-colors duration-200 group-hover:bg-blue-500 group-hover:text-white">
                  {step.number}
                </div>

                {/* Text Content (Pure Typography, No Cards) */}
                <div className="pt-1.5 sm:pt-2">
                  <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                    <h3 className="text-base sm:text-lg font-bold text-foreground transition-colors group-hover:text-blue-500">
                      {step.title}
                    </h3>
                    {step.isOptional && (
                      <span className="text-[11px] px-2 py-0.5 rounded bg-muted/60 text-muted-foreground border border-border/40">
                        اختياري
                      </span>
                    )}
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
