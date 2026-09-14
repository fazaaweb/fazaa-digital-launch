
import { processData } from "@/data/process";

export function ProcessSection() {
  return (
    <section id="process" aria-labelledby="process-title" className="relative z-10 bg-background py-12 sm:py-16 border-t border-border/20">
      <div className="mx-auto max-w-[1000px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center flex flex-col items-center mb-16">
          <h2 id="process-title" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            كيف نعمل؟
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg leading-relaxed">
            خطوات واضحة ومنهجية عمل احترافية لضمان تحويل فكرتك إلى واقع رقمي ناجح.
          </p>
        </div>

        <div className="relative border-r border-border/40 pr-6 sm:pr-10 ml-auto">
          {processData.map((step, index) => (
            <div key={step.number} className="relative mb-10 last:mb-0 group">
              {/* Timeline dot */}
              <div className="absolute -right-[29px] sm:-right-[45px] top-1 h-3 w-3 rounded-full bg-border border-2 border-background transition-colors duration-300 group-hover:bg-primary group-hover:border-primary/20 group-hover:scale-125" />
              
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                <span className="text-xl sm:text-2xl font-black text-border transition-colors duration-300 group-hover:text-primary/40">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
