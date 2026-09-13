import { useEffect, useRef } from "react";

import heroPoster from "@/assets/fazaa-hero-poster.jpg";
import { HeroActions } from "@/components/hero-actions";
import { HeroVideo } from "@/components/hero-video";

export function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null);

  // Parallax خفيف على الشاشات الكبيرة
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
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="hero-section relative isolate z-0 overflow-hidden"
    >
      <div ref={sceneRef} aria-hidden="true" className="hero-media absolute inset-0 z-0">
        <img
          src={heroPoster}
          alt=""
          width="1280"
          height="846"
          loading="eager"
          decoding="async"
          className="hero-bg"
        />
        <HeroVideo />
      </div>
      <div aria-hidden="true" className="hero-overlay pointer-events-none absolute inset-0 z-[1]" />

      <div className="hero-content relative z-10 mx-auto flex min-h-[100svh] min-h-[100dvh] w-full max-w-[1560px] flex-col items-center justify-center px-5 text-center sm:px-8 lg:px-12 xl:px-16">
        <div className="hero-copy w-full max-w-2xl">
          <h1
            id="hero-title"
            className="hero-reveal text-balance text-[1.875rem] font-extrabold leading-[1.2] tracking-tight text-foreground min-[380px]:text-[2.125rem] sm:text-4xl sm:leading-[1.18] md:text-5xl md:leading-[1.14] xl:text-[3.85rem] 2xl:text-[4.35rem]"
          >
            نصنع حضورًا رقميًا
            <span className="block text-primary-highlight">يليق بمشروعك.</span>
          </h1>

          <p className="hero-reveal hero-delay-1 mt-3.5 mx-auto max-w-xl text-pretty text-[0.9375rem] font-medium leading-relaxed text-secondary-foreground/95 min-[380px]:text-[1rem] sm:mt-5 sm:text-lg sm:leading-relaxed lg:text-[1.125rem] lg:leading-[1.8] xl:text-[1.1875rem]">
            نصمم ونطور مواقع إلكترونية احترافية تجمع بين التصميم المميز، الأداء السريع، وتجربة
            المستخدم السلسة، لتقدم مشروعك بصورة احترافية أمام عملائك.
          </p>

          <div className="mt-5 sm:mt-7">
            <HeroActions />
          </div>

          <p className="hero-reveal hero-delay-4 mt-3.5 flex items-center justify-center gap-2 text-xs font-medium tracking-wide text-muted-foreground/85 sm:mt-4.5 sm:text-[0.875rem]">
            <span aria-hidden="true" className="h-px w-5 shrink-0 bg-primary/70 sm:w-6" />
            تصميم احترافي • أداء سريع • تجربة تُبنى حول مشروعك
            <span aria-hidden="true" className="h-px w-5 shrink-0 bg-primary/70 sm:w-6" />
          </p>
        </div>
      </div>
    </section>
  );
}
