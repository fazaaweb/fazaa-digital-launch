import { useEffect, useState } from "react";

import transparentLogo from "@/assets/fazaa-web-logo-transparent.png";
import { MobileMenu } from "@/components/mobile-menu";
import { Button } from "@/components/ui/button";
import { company, navigation } from "@/lib/site-config";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLogoScrolled, setIsLogoScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsScrolled(window.scrollY > 2);
      setIsLogoScrolled(window.scrollY > 50);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-border/60 bg-background/80 shadow-nav backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto grid h-[4.5rem] w-full max-w-[1560px] grid-cols-[minmax(0,1fr)_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-4 px-[max(1rem,env(safe-area-inset-right))] sm:h-[5.5rem] sm:px-6 lg:h-[7rem] lg:px-10 xl:px-14">
        <a
          href="#hero"
          aria-label="فزعة ويب - الرئيسية"
          className="flex justify-self-start min-w-0 items-center gap-2 focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:gap-2.5"
        >
          {/* Logo Container with Scroll Transition */}
          <div
            className={`shrink-0 flex-none flex items-center justify-center rounded-full transition-colors duration-300 ease-in-out ${
              isLogoScrolled
                ? "bg-black shadow-lg w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
                : "bg-transparent"
            }`}
          >
            <img
              src={transparentLogo}
              width="1144"
              height="768"
              alt="فزعة ويب"
              className={`shrink-0 object-contain drop-shadow-logo transition-all duration-300 ease-in-out ${
                isLogoScrolled
                  ? "w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] lg:w-[60px] lg:h-[60px]"
                  : "w-[84px] h-[56px] sm:w-[119px] sm:h-[80px] lg:w-[167px] lg:h-[112px]"
              }`}
            />
          </div>
          <span className="whitespace-nowrap font-sans text-lg font-bold tracking-tight text-foreground drop-shadow-logo sm:text-xl lg:text-2xl">
            {company.name}
          </span>
        </a>

        <nav aria-label="التنقل الرئيسي" className="hidden justify-self-center lg:block">
          <ul className="flex items-center gap-5 xl:gap-7">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="nav-link py-3 text-sm font-medium text-secondary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring xl:text-[0.9375rem]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2 justify-self-end">
          <Button asChild variant="hero" className="group relative hidden h-11 overflow-hidden px-5 transition-all duration-300 hover:shadow-primary/30 active:scale-[0.98] xl:inline-flex">
            <a href="#contact">
              <span className="absolute inset-0 -z-10 translate-x-[-150%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-[150%]" />
              <span className="transition-transform duration-300 group-hover:scale-[1.02] inline-block">{company.primaryCta}</span>
            </a>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
