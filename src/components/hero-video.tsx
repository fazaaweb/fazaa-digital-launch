import { useEffect, useRef } from "react";

import heroPoster from "@/assets/fazaa-hero-poster.jpg";
import heroVideo from "@/assets/fazaa-hero.mp4";
import heroVideoWebm from "@/assets/fazaa-hero.webm";

/**
 * Dual-video seamless loop technique.
 * Two identical <video> elements are stacked. When the active video
 * approaches its end, the standby video starts from 0 and cross-fades in,
 * then the roles swap. The result is a perfectly continuous animation
 * with zero visible jump, freeze, or black frame.
 */
export function HeroVideo() {
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoA = videoARef.current;
    const videoB = videoBRef.current;
    if (!videoA || !videoB) return;

    let isAActive = true;
    let transitioning = false;
    let rafId: number;

    const checkLoop = () => {
      const active = isAActive ? videoA : videoB;
      const standby = isAActive ? videoB : videoA;

      if (
        !transitioning &&
        active.duration > 0 &&
        active.currentTime >= active.duration - 0.5
      ) {
        transitioning = true;

        // Start standby from the beginning underneath
        standby.currentTime = 0;
        standby.play().catch(() => {});

        // Cross-fade: bring standby in, fade active out
        standby.style.opacity = "1";
        active.style.opacity = "0";

        // After the CSS transition completes, clean up
        setTimeout(() => {
          active.pause();
          active.currentTime = 0;
          isAActive = !isAActive;
          transitioning = false;
        }, 500);
      }

      rafId = requestAnimationFrame(checkLoop);
    };

    rafId = requestAnimationFrame(checkLoop);

    return () => cancelAnimationFrame(rafId);
  }, []);

  const fadeTransition = { transition: "opacity 0.45s ease" };

  return (
    <>
      <video
        ref={videoARef}
        className="hero-video"
        autoPlay
        muted
        playsInline
        preload="auto"
        poster={heroPoster}
        style={{ ...fadeTransition, opacity: 1 }}
      >
        <source src={heroVideoWebm} type="video/webm" />
        <source src={heroVideo} type="video/mp4" />
      </video>
      <video
        ref={videoBRef}
        className="hero-video"
        muted
        playsInline
        preload="auto"
        style={{ ...fadeTransition, opacity: 0 }}
      >
        <source src={heroVideoWebm} type="video/webm" />
        <source src={heroVideo} type="video/mp4" />
      </video>
    </>
  );
}
