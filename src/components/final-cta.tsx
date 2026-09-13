import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-title"
      className="relative z-10 border-t border-border/40 bg-gradient-to-b from-background via-primary/5 to-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1000px] px-5 sm:px-8 text-center">
        <h2
          id="cta-title"
          className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
        >
          جاهز تبدأ موقعك؟
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-secondary-foreground/90 sm:text-lg">
          أخبرنا عن مشروعك واحتياجاتك، وسنتواصل معك لمناقشة التفاصيل وتحديد الحل المناسب.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="hero" size="hero" className="px-8 text-base">
            <a href="#contact">
              اطلب موقعك الآن
              <ArrowLeft className="mr-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
