import { useEffect, useRef } from "react";

import heroPoster from "@/assets/fazaa-hero-poster.jpg.asset.json";
import heroVideo from "@/assets/fazaa-hero.mp4.asset.json";
import heroVideoWebm from "@/assets/fazaa-hero.webm.asset.json";
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
    <section id="home" aria-labelledby="hero-title" className="hero-section relative isolate overflow-hidden">
      <div ref={sceneRef} aria-hidden="true" className="hero-media absolute inset-0">
        <img src={heroPoster.url} alt="" className="hero-media-backdrop" />
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroPoster.url}
        >
          <source src={heroVideoWebm.url} type="video/webm" />
          <source src={heroVideo.url} type="video/mp4" />
        </video>
      </div>
      <div aria-hidden="true" className="hero-overlay absolute inset-0" />

      <div className="hero-content relative z-10 mx-auto flex w-full max-w-[1560px] items-end px-5 pb-[max(4.5rem,env(safe-area-inset-bottom))] pt-28 sm:px-8 sm:pb-20 lg:items-center lg:px-14 lg:pb-4 lg:pt-28">
        <div className="hero-copy w-full max-w-2xl lg:w-[48%]">
          <h1
            id="hero-title"
            className="hero-reveal text-balance text-[2.45rem] font-extrabold leading-[1.25] text-foreground sm:text-5xl sm:leading-[1.22] lg:text-[3.6rem] xl:text-[4.15rem] 2xl:text-[4.65rem]"
          >
            نصنع حضورًا رقميًا
            <span className="block text-primary-highlight">يليق بمشروعك.</span>
          </h1>

          <p className="hero-reveal hero-delay-1 mt-5 max-w-xl text-pretty text-base font-normal leading-8 text-secondary-foreground sm:mt-6 sm:text-lg sm:leading-9 lg:text-xl">
            نصمم ونطور مواقع إلكترونية احترافية تجمع بين التصميم المميز، الأداء السريع، وتجربة
            المستخدم السلسة، لتقدم مشروعك بصورة احترافية أمام عملائك.
          </p>

          <div className="mt-7 sm:mt-8">
            <HeroActions />
          </div>

          <p className="hero-reveal hero-delay-4 mt-6 flex items-center gap-3 text-sm font-medium leading-6 text-muted-foreground sm:text-base">
            <span aria-hidden="true" className="h-px w-8 shrink-0 bg-primary" />
            تصميم احترافي • أداء سريع • تجربة تُبنى حول مشروعك
          </p>
        </div>
      </div>
    </section>
  );
}