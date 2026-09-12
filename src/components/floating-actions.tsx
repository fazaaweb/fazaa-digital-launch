import { useEffect, useState } from "react";
import { ArrowUp, MessageSquare } from "lucide-react";

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-center gap-3">
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="الرجوع للأعلى"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-card/80 text-foreground shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground animate-in fade-in zoom-in"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/967777000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%81%D8%B1%D9%8A%D9%82%20%D9%81%D8%B2%D8%B9%D8%A9%20%D9%88%D9%8A%D8%A8%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب"
        className="group relative flex h-13 w-13 cursor-pointer items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_8px_25px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-110 hover:bg-emerald-400 active:scale-95"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-background bg-emerald-400" />
        </span>

        <MessageSquare className="h-6 w-6" />

        {/* Hover Tooltip on desktop */}
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-xl border border-white/10 bg-card/90 px-3 py-1.5 text-xs font-bold text-foreground opacity-0 shadow-xl backdrop-blur-xl transition-all duration-200 group-hover:opacity-100 lg:block">
          تواصل معنا مباشرة عبر واتساب
        </span>
      </a>
    </div>
  );
}
