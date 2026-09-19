import { useState } from "react";
import { faqData } from "@/data/faq";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative z-10 bg-background/50 py-12 sm:py-16 border-t border-border/20"
    >
      <div className="mx-auto max-w-[800px] px-5 sm:px-8">
        <SectionHeading id="faq-title" title="الأسئلة الشائعة" />

        <div className="mt-14 space-y-3">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${isOpen ? "border-primary/30 bg-primary/5" : "border-border/30 bg-card/20 hover:border-primary/20 hover:bg-card/30"}`}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between p-4 sm:p-5 text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  <span
                    className={`text-sm sm:text-base font-bold transition-colors ${isOpen ? "text-primary" : "text-foreground"}`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? "bg-primary/20 text-primary rotate-180" : "bg-white/5 text-muted-foreground"}`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 sm:px-5 pb-5 text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
