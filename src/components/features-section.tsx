import { featuresData } from "@/data/features";

export function FeaturesSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="relative z-10 border-t border-border/40 bg-background/80 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1560px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary sm:text-sm">
            المعايير التقنية
          </span>
          <h2
            id="features-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            أهم ميزات مواقعنا
          </h2>
          <p className="mt-4 text-base leading-relaxed text-secondary-foreground/85 sm:text-lg">
            نحرص على أن يجمع موقعك بين المظهر الاحترافي، الأداء، سهولة الاستخدام، والمتطلبات الأساسية للموقع الحديث.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-border/50 bg-card/60 p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-xl hover:shadow-primary/5"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-lg font-bold text-primary">
                    {feature.number}
                  </span>
                  {feature.isOptional && (
                    <span className="rounded-md border border-border/80 bg-secondary/50 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                      اختياري حسب الطلب
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-secondary-foreground/80">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
