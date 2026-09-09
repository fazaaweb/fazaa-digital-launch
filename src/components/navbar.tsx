import { useEffect, useState } from "react";

import logoAsset from "@/assets/fazaa-web-logo.png.asset.json";
import { MobileMenu } from "@/components/mobile-menu";
import { Button } from "@/components/ui/button";
import { company, navigation } from "@/lib/site-config";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 20);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${
        isScrolled
          ? "border-border/60 bg-background/80 shadow-nav backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto grid h-20 w-full max-w-[1560px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:h-24 sm:px-6 lg:flex lg:px-10 xl:px-14">
        <a
          href="#home"
          aria-label="فزعة ويب - الرئيسية"
          className="flex min-w-0 items-center focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <img
            src={logoAsset.url}
            width="144"
            height="96"
            alt="فزعة ويب"
            className="h-[4.25rem] w-auto max-w-[8.75rem] object-contain drop-shadow-logo sm:h-20 sm:max-w-[10rem]"
          />
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