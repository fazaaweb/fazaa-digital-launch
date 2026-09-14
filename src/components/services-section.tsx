
import { servicesData } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative z-10 bg-background py-20 sm:py-28 border-t border-border/20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center flex flex-col items-center">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-4">
            حلول رقمية متكاملة
          </span>
          <h2 id="services-title" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            خدماتنا
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg leading-relaxed">
            نقدم مجموعة متكاملة من خدمات وحلول الويب المصممة خصيصًا لتلبية احتياجات مختلف المشاريع والأعمال.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col rounded-xl border border-border/40 bg-card/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/40 hover:shadow-[0_8px_30px_rgba(var(--primary),0.04)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-semibold text-primary/60 transition-colors group-hover:text-primary">{service.number}</span>
                <h3 className="text-base font-bold text-foreground">{service.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-primary/0 to-transparent transition-all duration-300 group-hover:via-primary/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
