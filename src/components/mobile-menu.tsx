import { Menu, X } from "lucide-react";
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
          className="min-h-11 min-w-11 lg:hidden"
        >
          <Menu aria-hidden="true" />
        </Button>
      </SheetTrigger>
      
      <SheetContent
        side="right"
        dir="rtl"
        // w-[75%] makes it take only a portion of the screen, leaving the left side showing the normal site
        // bg-gray-950/85 backdrop-blur-xl keeps the premium glassmorphism on the menu panel itself
        className="z-[100] w-[75%] border-l border-gray-800/50 bg-gray-950/85 px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6 backdrop-blur-xl sm:max-w-sm [&>button]:hidden"
      >
        <SheetHeader className="mt-2 w-full space-y-0">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={transparentLogo}
                width="1144"
                height="768"
                alt="فزعة ويب"
                className="h-10 w-auto object-contain sm:h-12"
              />
              <span className="text-lg font-bold text-white">{company.name}</span>
            </div>
            
            <SheetClose className="rounded-full p-2 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <X className="h-6 w-6" />
              <span className="sr-only">إغلاق القائمة</span>
            </SheetClose>
          </div>
          <SheetTitle className="sr-only">قائمة التنقل</SheetTitle>
          <SheetDescription className="sr-only">روابط أقسام موقع فزعة ويب</SheetDescription>
        </SheetHeader>

        <nav aria-label="قائمة الهاتف" className="mt-10">
          <ul className="flex flex-col">
            {navigation.map((item) => (
              <li key={item.href} className="border-b border-gray-800/50">
                <SheetClose asChild>
                  <a
                    href={item.href}
                    className="flex w-full items-center py-4 text-lg font-medium text-white transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 relative">
          {/* Subtle slow pulsing glow behind the button to attract attention */}
          <span className="absolute -inset-1 -z-10 animate-[pulse_3s_ease-in-out_infinite] rounded-lg bg-primary/40 blur-md" />
          <SheetClose asChild>
            <Button asChild variant="hero" size="hero" className="group relative w-full overflow-hidden text-lg shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-primary/30 active:scale-[0.98]">
              <a href="#contact">
                <span className="absolute inset-0 -z-10 translate-x-[-150%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-[150%]" />
                <span className="transition-transform duration-300 group-hover:scale-[1.02] inline-block">اطلب موقعك الآن</span>
              </a>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
