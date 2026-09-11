import { useEffect, useState } from "react";

import transparentLogo from "@/assets/fazaa-web-logo-transparent.png";
import { MobileMenu } from "@/components/mobile-menu";
import { Button } from "@/components/ui/button";
import { company, navigation } from "@/lib/site-config";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 2);
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
      <div className="mx-auto grid h-[3.75rem] w-full max-w-[1560px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-[max(1rem,env(safe-area-inset-right))] sm:h-[4.5rem] sm:px-6 lg:h-24 lg:flex lg:px-10 xl:px-14">
        <a
          href="#home"
          aria-label="فزعة ويب - الرئيسية"
          className="flex min-w-0 items-center gap-2.5 focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:gap-3"
        >
          <img
            src={transparentLogo}
            width="1144"
            height="768"
            alt="فزعة ويب"
            className="h-11 w-auto shrink-0 object-contain drop-shadow-logo sm:h-14 lg:h-16"
          />
          <span className="hidden whitespace-nowrap text-base font-bold text-foreground drop-shadow-logo lg:block lg:text-xl">
            {company.name}
          </span>
        </a>

        <nav aria-label="التنقل الرئيسي" className="hidden flex-1 justify-center lg:flex">
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
          <Button asChild variant="hero" className="hidden h-11 px-5 xl:inline-flex">
            <a href="#contact">{company.primaryCta}</a>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}