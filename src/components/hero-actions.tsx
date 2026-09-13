import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { company } from "@/lib/site-config";

export function HeroActions() {
  return (
    <div className="hero-reveal hero-delay-3 relative z-[11] flex w-full flex-col items-center gap-2.5 sm:w-auto sm:flex-row sm:justify-center sm:gap-3">
      <Button asChild variant="hero" size="hero" className="w-full sm:w-auto">
        <a href="#contact">
          {company.primaryCta}
          <ArrowLeft aria-hidden="true" />
        </a>
      </Button>
      <Button asChild variant="heroOutline" size="hero" className="w-full sm:w-auto">
        <a href="#services">خدماتنا</a>
      </Button>
    </div>
  );
}
