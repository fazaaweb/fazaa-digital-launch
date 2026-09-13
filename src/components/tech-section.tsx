import { technologiesData } from "@/data/technologies";
import { Code2 } from "lucide-react";

export function TechSection() {
  return (
    <section
      id="technologies"
      aria-labelledby="tech-title"
      className="relative z-10 border-t border-border/40 bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1560px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary sm:text-sm">
            البنية البرمجية
          </span>
          <h2
            id="tech-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            تقنية حديثة خلف كل تجربة
          </h2>
          <p className="mt-4 text-base leading-relaxed text-secondary-foreground/85 sm:text-lg">
            نستخدم تقنيات وأدوات حديثة لبناء مواقع سريعة، مرنة، وقابلة للتطوير.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologiesData.map((tech) => (
            <div
              key={tech.id}
              className="group rounded-2xl border border-border/50 bg-card/60 p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {tech.category}
                </span>
                <Code2 className="h-5 w-5 text-muted-foreground/60 transition-colors group-hover:text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-foreground">
                {tech.name}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-secondary-foreground/80">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
