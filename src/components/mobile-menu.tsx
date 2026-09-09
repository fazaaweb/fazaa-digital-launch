import { Menu } from "lucide-react";

import transparentLogo from "@/assets/fazaa-web-logo-transparent.png";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { company, navigation } from "@/lib/site-config";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="heroOutline"
          size="icon"
          aria-label="فتح القائمة"
          className="min-h-11 min-w-11 md:hidden"
        >
          <Menu aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        dir="rtl"
        className="w-full border-border/60 bg-background/95 px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-8 backdrop-blur-2xl sm:max-w-sm"
      >
        <SheetHeader className="items-start text-right">
          <img
            src={transparentLogo}
            width="1144"
            height="768"
            alt="فزعة ويب"
            className="h-14 w-auto object-contain"
          />
          <SheetTitle className="sr-only">قائمة التنقل</SheetTitle>
          <SheetDescription className="sr-only">روابط أقسام موقع فزعة ويب</SheetDescription>
        </SheetHeader>

        <nav aria-label="قائمة الهاتف" className="mt-8">
          <ul className="flex flex-col">
            {navigation.map((item) => (
              <li key={item.href} className="border-b border-border/50">
                <SheetClose asChild>
                  <a
                    href={item.href}
                    className="flex min-h-14 items-center text-base font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>

        <SheetClose asChild>
          <Button asChild variant="hero" size="hero" className="mt-8 w-full">
            <a href="#contact">{company.primaryCta}</a>
          </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}