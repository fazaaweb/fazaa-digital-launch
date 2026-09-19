import { portfolioData } from "@/data/portfolio";
import { ArrowUpLeft } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="relative z-10 bg-background/50 py-12 sm:py-16 border-t border-border/20"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          id="portfolio-title"
          title="بعض أعمالنا"
          subtitle="مجموعة مختارة من تصاميم ومشاريع الويب التي تعكس اهتمامنا بالتفاصيل، التصميم، وتجربة المستخدم."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {portfolioData.map((project, index) => {
            const isFirst = index === 0;
            const spanClass = isFirst ? "lg:col-span-12" : "lg:col-span-6";

            return (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-2xl border border-border/40 bg-card/20 transition-all duration-500 hover:border-primary/30 hover:bg-card/40 ${spanClass}`}
              >
                <div className="relative aspect-[16/10] sm:aspect-[21/9] lg:aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />

                  <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">
                    <div className="flex justify-between items-center gap-4">
                      <div className="max-w-2xl">
                        <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                          {project.title}
                        </h3>
                      </div>
                      <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-transform duration-300 group-hover:rotate-45 group-hover:bg-primary/20 group-hover:border-primary/40">
                        <ArrowUpLeft className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
