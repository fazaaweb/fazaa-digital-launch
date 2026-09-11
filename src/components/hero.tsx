import { useEffect, useRef } from "react";

import heroPoster from "@/assets/fazaa-hero-poster.jpg";
import heroVideo from "@/assets/fazaa-hero.mp4";
import heroVideoWebm from "@/assets/fazaa-hero.webm";
import { HeroActions } from "@/components/hero-actions";

export function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const finePointer = window.matchMedia("(pointer: fine) and (min-width: 1024px)");
    if (!finePointer.matches) return;

    const move = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 7;
      const y = (event.clientY / window.innerHeight - 0.5) * 5;
      scene.style.setProperty("--scene-x", `${x}px`);
      scene.style.setProperty("--scene-y", `${y}px`);
    };
    const reset = () => {
      scene.style.setProperty("--scene-x", "0px");
      scene.style.setProperty("--scene-y", "0px");
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerleave", reset);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <section id="home" aria-labelledby="hero-title" className="hero-section relative isolate z-0 overflow-hidden">
      <div ref={sceneRef} aria-hidden="true" className="hero-media absolute inset-0 z-0">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroPoster}
        >
          <source src={heroVideoWebm} type="video/webm" />
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div aria-hidden="true" className="hero-overlay pointer-events-none absolute inset-0 z-[1]" />

      <div className="hero-content relative z-10 mx-auto flex w-full max-w-[1560px] flex-col justify-center px-5 pb-[max(2.75rem,env(safe-area-inset-bottom))] pt-20 sm:px-8 sm:pb-14 sm:pt-24 lg:px-14 lg:pt-28 xl:pb-4">
        <div className="hero-copy w-full max-w-[38rem] xl:w-[48%] xl:max-w-2xl 2xl:max-w-3xl mt-auto mb-10 md:my-auto">
          <h1
            id="hero-title"
            className="hero-reveal max-w-[21rem] text-balance text-[2.05rem] font-extrabold leading-[1.28] text-foreground min-[390px]:max-w-[23rem] min-[390px]:text-[2.2rem] sm:max-w-xl sm:text-5xl sm:leading-[1.22] xl:text-[4.15rem] 2xl:max-w-3xl 2xl:text-[4.65rem]"
          >
            نصنع حضورًا رقميًا
            <span className="block text-primary-highlight">يليق بمشروعك.</span>
          </h1>

          <p className="hero-reveal hero-delay-1 mt-4 max-w-[35rem] text-pretty text-[0.9375rem] font-normal leading-7 text-secondary-foreground min-[390px]:text-base min-[390px]:leading-[1.9] sm:mt-6 sm:text-lg sm:leading-9 lg:text-xl">
            نصمم ونطور مواقع إلكترونية احترافية تجمع بين التصميم المميز، الأداء السريع، وتجربة
            المستخدم السلسة، لتقدم مشروعك بصورة احترافية أمام عملائك.
          </p>

          <div className="mt-5 sm:mt-8">
            <HeroActions />
          </div>

          <p className="hero-reveal hero-delay-4 mt-4 flex items-center gap-3 text-[0.8125rem] font-medium leading-6 text-muted-foreground min-[390px]:text-sm sm:mt-6 sm:text-base">
            <span aria-hidden="true" className="h-px w-8 shrink-0 bg-primary" />
            تصميم احترافي • أداء سريع • تجربة تُبنى حول مشروعك
          </p>
        </div>
      </div>
    </section>
  );
}