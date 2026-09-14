
import { technologiesData } from "@/data/technologies";
import { Code2 } from "lucide-react";

export function TechSection() {
  return (
    <section id="technologies" aria-labelledby="tech-title" className="relative z-10 bg-background py-12 sm:py-16 border-t border-border/20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center flex flex-col items-center">
          <h2 id="tech-title" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            تقنية حديثة خلف كل تجربة
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg leading-relaxed">
            نستخدم تقنيات وأدوات حديثة لبناء مواقع سريعة، مرنة، وقابلة للتطوير.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologiesData.map((tech) => (
            <div
              key={tech.id}
              className="group flex flex-col rounded-xl border border-border/30 bg-card/20 p-5 transition-all duration-300 hover:border-primary/30 hover:bg-card/40"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/5 text-primary/70 transition-colors group-hover:text-primary group-hover:bg-primary/10">
                  <Code2 className="h-4 w-4" />
                </div>
                <h3 className="text-base font-bold text-foreground">{tech.name}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
