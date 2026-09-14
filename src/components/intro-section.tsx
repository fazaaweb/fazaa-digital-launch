
import introWebConnectivity from "@/assets/intro-web-connectivity-3d.jpg";

export function IntroSection() {
  return (
    <section
      id="intro"
      aria-labelledby="intro-title"
      className="relative z-10 overflow-hidden border-t border-border/40 bg-background/60 py-16 backdrop-blur-md sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 sm:px-8 md:gap-14 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div className="text-center lg:text-start">
          <h2
            id="intro-title"
            className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            أكثر من مجرد موقع إلكتروني
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base font-normal leading-relaxed text-secondary-foreground/90 sm:text-lg lg:mx-0 lg:text-xl">
            موقعك هو الواجهة التي يراها عملاؤك قبل أن يتواصلوا معك. لذلك نهتم بأن يكون سريعًا، واضحًا،
            جذابًا، ومتوافقًا مع طبيعة نشاطك وأهدافك.
          </p>
        </div>

        <figure className="mx-auto w-full max-w-[34rem]" aria-label="مجسم تقني يعبّر عن ترابط الويب">
          <img
            src={introWebConnectivity}
            alt="مجسم ثلاثي الأبعاد لشبكة تقنية مترابطة"
            width={1408}
            height={1200}
            loading="lazy"
            decoding="async"
            className="aspect-[7/6] w-full object-contain"
          />
        </figure>
      </div>
    </section>
  );
}
