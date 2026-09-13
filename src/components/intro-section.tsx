import { Sparkles } from "lucide-react";

export function IntroSection() {
  return (
    <section
      id="intro"
      aria-labelledby="intro-title"
      className="relative z-10 border-t border-border/40 bg-background/60 py-20 backdrop-blur-md sm:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary sm:text-sm">
          <Sparkles className="h-4 w-4 shrink-0 text-primary" />
          <span>من الفكرة الأولى إلى حضور رقمي متكامل.</span>
        </div>

        <h2
          id="intro-title"
          className="mt-6 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
        >
          أكثر من مجرد موقع إلكتروني
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base font-normal leading-relaxed text-secondary-foreground/90 sm:text-lg lg:text-xl">
          موقعك هو الواجهة التي يراها عملاؤك قبل أن يتواصلوا معك. لذلك نهتم بأن يكون سريعًا، واضحًا،
          جذابًا، ومتوافقًا مع طبيعة نشاطك وأهدافك.
        </p>
      </div>
    </section>
  );
}
