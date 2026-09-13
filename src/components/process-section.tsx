import { processData } from "@/data/process";

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="relative z-10 border-t border-border/40 bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1560px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary sm:text-sm">
            خطوات التنفيذ
          </span>
          <h2
            id="process-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            كيف نحول فكرتك إلى موقع؟
          </h2>
          <p className="mt-4 text-base leading-relaxed text-secondary-foreground/85 sm:text-lg">
            منهجية واضحة ومباشرة تضمن لك تجربة عمل منظمة ومتابعة دقيقة في كل مرحلة.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processData.map((step) => (
            <div
              key={step.number}
              className="group relative flex flex-col justify-between rounded-2xl border border-border/50 bg-card/60 p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-xl hover:shadow-primary/5"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-black text-primary/80">
                    {step.number}
                  </span>
                  {step.isOptional && (
                    <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
                      اختياري حسب المشروع
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/80">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
