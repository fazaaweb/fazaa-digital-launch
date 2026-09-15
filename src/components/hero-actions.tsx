import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { company } from "@/lib/site-config";

export function HeroActions() {
  return (
    <div className="hero-reveal hero-delay-3 relative z-[11] flex w-full flex-col items-center gap-2.5 sm:w-auto sm:flex-row sm:justify-center sm:gap-3">
      <div className="relative w-full sm:w-auto animate-pulse-scale">
        <span className="absolute -inset-1 -z-10 animate-[pulse_3s_ease-in-out_infinite] rounded-lg bg-primary/40 blur-md" />
        <Button asChild variant="hero" size="hero" className="group relative w-full overflow-hidden shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-primary/30 active:scale-[0.98] sm:w-auto">
          <a href="#contact">
            <span className="absolute inset-0 -z-10 translate-x-[-150%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-[150%]" />
            <span className="flex items-center gap-2 transition-transform duration-300 group-hover:scale-[1.02]">
              {company.primaryCta}
              <ArrowLeft aria-hidden="true" />
            </span>
          </a>
        </Button>
      </div>
      {/* 4. Improve Secondary Button: Clear border and bright white text */}
      <Button asChild variant="heroOutline" size="hero" className="w-full sm:w-auto border-2 border-primary/60 text-white hover:bg-primary/20 hover:border-primary hover:text-white shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        <a href="#services">خدماتنا</a>
      </Button>
    </div>
  );
}
