import { useState } from "react";
import { faqData } from "@/data/faq";
import { ChevronDown } from "lucide-react";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqData[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative z-10 border-t border-border/40 bg-background/80 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1000px] px-5 sm:px-8 lg:px-12">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary sm:text-sm">
            إجابات واضحة
          </span>
          <h2
            id="faq-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            هل لديك سؤال؟
          </h2>
          <p className="mt-4 text-base leading-relaxed text-secondary-foreground/85 sm:text-lg">
            إليك إجابات لأبرز الأسئلة الشائعة حول خدماتنا وطريقة تنفيذ المواقع.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-border/50 bg-card/60 transition-colors hover:border-primary/30"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between p-5 text-right font-bold text-foreground sm:p-6 sm:text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-border/40 px-5 pb-6 pt-4 sm:px-6">
                    <p className="text-sm font-normal leading-relaxed text-secondary-foreground/85 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
