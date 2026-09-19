import introImage from "@/assets/images/portfolio_agency_web_1789773523937.jpg";

export function IntroSection() {
  return (
    <section
      id="intro"
      aria-labelledby="intro-title"
      className="relative z-10 overflow-hidden border-t border-border/40 bg-background/60 py-12 backdrop-blur-md sm:py-16"
    >
      <div className="mx-auto flex max-w-[1100px] flex-row items-center justify-between gap-4 px-5 sm:gap-8 sm:px-8 md:gap-12 lg:px-12">
        {/* Text Side */}
        <div className="flex-1 text-right">
          <h2
            id="intro-title"
            className="text-xl font-extrabold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl lg:leading-tight"
          >
            أكثر من مجرد موقع إلكتروني
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm font-normal leading-relaxed text-secondary-foreground/90 sm:mx-0 sm:text-base md:text-lg lg:text-xl">
            موقعك هو الواجهة التي يراها عملاؤك قبل أن يتواصلوا معك. لذلك نهتم بأن يكون سريعًا،
            واضحًا، جذابًا، ومتوافقًا مع طبيعة نشاطك وأهدافك.
          </p>
        </div>

        {/* Image Side */}
        <figure
          className="relative w-[45%] max-w-[280px] sm:w-[45%] sm:max-w-[360px] md:max-w-[440px] group"
          aria-label="واجهة موقع إلكتروني احترافي"
        >
          {/* Subtle background glow for the image */}
          <div className="absolute -inset-2 rounded-3xl bg-primary/20 blur-xl transition-opacity duration-500 group-hover:opacity-100 opacity-60" />
          <img
            src={introImage}
            alt="واجهة موقع إلكتروني احترافي متكامل"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="relative aspect-square md:aspect-[4/3] w-full rounded-2xl border border-border/50 object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </figure>
      </div>
    </section>
  );
}
