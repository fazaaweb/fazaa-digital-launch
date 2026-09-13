import { portfolioData } from "@/data/portfolio";
import { Layers, Sparkles } from "lucide-react";

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="relative z-10 border-t border-border/40 bg-background/80 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1560px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary sm:text-sm">
            نماذج بصرية وتجريبية
          </span>
          <h2
            id="portfolio-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            بعض أعمالنا
          </h2>
          <p className="mt-4 text-base leading-relaxed text-secondary-foreground/85 sm:text-lg">
            مجموعة مختارة من تصاميم ومشاريع الويب التي تعكس اهتمامنا بالتفاصيل، التصميم، وتجربة المستخدم.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.map((project, index) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-border/50 bg-card/60 transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Visual Concept Header */}
              <div className="relative aspect-video w-full overflow-hidden border-b border-border/40 bg-gradient-to-br from-primary/10 via-background to-secondary/30 p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                    {project.badge}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    {project.category}
                  </span>
                </div>

                {/* Abstract UI Representation */}
                <div className="my-auto flex flex-col gap-2 opacity-80 transition-opacity group-hover:opacity-100">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary/60" />
                    <div className="h-1.5 w-24 rounded-full bg-border" />
                  </div>
                  <div className="h-12 w-full rounded-lg border border-border/40 bg-background/70 backdrop-blur-sm p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Layers className="h-4 w-4 text-primary" />
                      <div className="space-y-1">
                        <div className="h-2 w-16 rounded bg-foreground/30" />
                        <div className="h-1.5 w-10 rounded bg-muted-foreground/30" />
                      </div>
                    </div>
                    <Sparkles className="h-3.5 w-3.5 text-primary/70" />
                  </div>
                </div>

                <div className="text-[11px] font-mono text-muted-foreground/60">
                  0{index + 1} // CONCEPT PREVIEW
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/80">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
