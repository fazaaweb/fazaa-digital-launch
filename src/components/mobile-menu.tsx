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
        // Glassmorphism and hiding the default absolute close button
        className="z-[100] w-full border-gray-800/50 bg-transparent px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6  sm:max-w-sm [&>button]:hidden"
      >
        {/* Custom Header */}
        <SheetHeader className="mt-2 w-full space-y-0">
          <div className="flex w-full items-center justify-between">
            {/* Logo on the Right */}
            <div className="flex items-center gap-3">
              <img
                src={transparentLogo}
                width="1144"
                height="768"
                alt="فزعة ويب"
                className="h-12 w-auto object-contain sm:h-14"
              />
              <span className="text-xl font-bold text-white">{company.name}</span>
            </div>
            
            {/* Close Button on the Left */}
            <SheetClose className="rounded-full p-2 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <X className="h-7 w-7" />
              <span className="sr-only">إغلاق القائمة</span>
            </SheetClose>
          </div>
          <SheetTitle className="sr-only">قائمة التنقل</SheetTitle>
          <SheetDescription className="sr-only">روابط أقسام موقع فزعة ويب</SheetDescription>
        </SheetHeader>

        {/* Navigation Links */}
        <nav aria-label="قائمة الهاتف" className="mt-12">
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

        {/* CTA Button */}
        <div className="mt-12">
          <SheetClose asChild>
            <Button asChild variant="hero" size="hero" className="group relative w-full overflow-hidden text-lg shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-primary/30 active:scale-[0.98]">
              <a href="#contact">
                <span className="absolute inset-0 -z-10 translate-x-[-150%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-[150%]" />
                <span className="transition-transform duration-300 group-hover:scale-105 inline-block">اطلب موقعك الآن</span>
              </a>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
