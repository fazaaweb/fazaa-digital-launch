import { servicesData } from "@/data/services";

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative z-10 border-t border-border/40 bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1560px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary sm:text-sm">
            حلول رقمية متكاملة
          </span>
          <h2
            id="services-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            خدماتنا
          </h2>
          <p className="mt-4 text-base text-secondary-foreground/85 sm:text-lg">
            نقدم مجموعة متكاملة من خدمات وحلول الويب المصممة خصيصًا لتلبية احتياجات مختلف المشاريع والأعمال.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-border/50 bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-xl hover:shadow-primary/5"
            >
              <div>
                <span className="font-mono text-xl font-extrabold tracking-widest text-primary/70 transition-colors group-hover:text-primary">
                  {service.number}
                </span>
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-secondary-foreground/80">
                  {service.description}
                </p>
              </div>
              <div className="mt-6 h-1 w-8 rounded-full bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
