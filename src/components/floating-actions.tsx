import { MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export function FloatingActions() {
  return (
    <aside
      aria-label="التواصل السريع"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-[max(1.25rem,env(safe-area-inset-left))] z-40"
    >
      <a
        href={`https://wa.me/${siteConfig.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تحدث معنا عبر واتساب"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-blue-500/40 bg-[#0B1A30] text-blue-400 shadow-xl shadow-blue-950/60 transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:bg-[#102444] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {/* Soft Glow & Subtle Pulse Ring */}
        <span className="absolute -inset-1 -z-10 animate-ping rounded-full bg-blue-500/20 opacity-75 duration-1000" />
        <span className="absolute inset-0 -z-10 rounded-full bg-blue-600/25 blur-md" />

        <MessageSquare className="h-6 w-6" />

        {/* Tooltip */}
        <span className="pointer-events-none absolute bottom-full left-0 mb-3 hidden whitespace-nowrap rounded-xl border border-blue-500/30 bg-[#0B1018]/95 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xl backdrop-blur-md transition-all sm:group-hover:block">
          تحدث معنا عبر واتساب
        </span>
      </a>
    </aside>
  );
}
