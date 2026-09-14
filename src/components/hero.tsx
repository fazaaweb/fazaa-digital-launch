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
        <div className="hero-copy relative w-full max-w-2xl">
          {/* 1. Dark Gradient Overlay for Contrast */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background/95 via-background/70 to-transparent blur-2xl scale-125" aria-hidden="true" />
          
          <h1
            id="hero-title"
            className="hero-reveal text-balance text-[1.875rem] font-extrabold leading-[1.2] tracking-tight text-foreground min-[380px]:text-[2.125rem] sm:text-4xl sm:leading-[1.18] md:text-5xl md:leading-[1.14] xl:text-[3.85rem] 2xl:text-[4.35rem]"
          >
            نصنع حضورًا رقميًا
            {/* 2. Remove space before the period */}
            <span className="block text-primary-highlight">يليق بمشروعك.</span>
          </h1>

          {/* 3. Increase Line-Height for better readability */}
          <p className="hero-reveal hero-delay-1 mt-4 mx-auto max-w-xl text-pretty text-[0.9375rem] font-medium text-gray-200 min-[380px]:text-[1rem] sm:mt-6 sm:text-lg leading-[1.8] sm:leading-[1.9] lg:text-[1.125rem] lg:leading-[2] xl:text-[1.1875rem]">
            نصمم ونطور مواقع إلكترونية احترافية تجمع بين التصميم المميز، الأداء السريع، وتجربة
            المستخدم السلسة، لتقدم مشروعك بصورة احترافية أمام عملائك.
          </p>

          <div className="mt-6 sm:mt-8">
            <HeroActions />
          </div>

          {/* 5. Bottom Features: Lighter text, explicit bullets with gap */}
          <div className="hero-reveal hero-delay-4 mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-gray-200 text-xs sm:text-sm font-medium tracking-wide">
            <span>تصميم احترافي</span> <span className="text-primary text-base sm:text-lg leading-none">•</span>
            <span>أداء سريع</span> <span className="text-primary text-base sm:text-lg leading-none">•</span>
            <span>تجربة تُبنى حول مشروعك</span>
          </div>
        </div>
      </div>
    </section>
  );
}
