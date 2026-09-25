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

    // Ensure standby is primed and ready
    videoB.currentTime = 0;
    videoB.pause();

    const checkLoop = () => {
      const active = isAActive ? videoA : videoB;
      const standby = isAActive ? videoB : videoA;

      // When the active video is 0.6s away from its end, cross-fade to standby
      if (
        !transitioning &&
        active.duration > 0 &&
        active.currentTime >= Math.max(0, active.duration - 0.6)
      ) {
        transitioning = true;

        // Reset and play standby immediately
        standby.currentTime = 0;
        const playPromise = standby.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }

        // Smooth cross-fade
        standby.style.opacity = "1";
        active.style.opacity = "0";

        // After the transition ends, pause active so it doesn't consume CPU/GPU
        setTimeout(() => {
          active.pause();
          active.currentTime = 0;
          isAActive = !isAActive;
          transitioning = false;
        }, 500);
      }

      rafId = requestAnimationFrame(checkLoop);
    };

    // Make sure initial video is playing smoothly
    const startInitial = () => {
      videoA.play().catch(() => {});
    };
    startInitial();

    rafId = requestAnimationFrame(checkLoop);

    return () => {
      cancelAnimationFrame(rafId);
      videoA.pause();
      videoB.pause();
    };
  }, []);

  const fadeTransition = { transition: "opacity 0.5s ease-in-out", willChange: "opacity" };

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
        onPlay={() => {
          // Defer secondary video buffer until primary video has started playing
          if (videoBRef.current && videoBRef.current.preload !== "auto") {
            videoBRef.current.preload = "auto";
          }
        }}
      >
        <source src={heroVideoWebm} type="video/webm" />
        <source src={heroVideo} type="video/mp4" />
      </video>
      <video
        ref={videoBRef}
        className="hero-video"
        muted
        playsInline
        preload="none"
        style={{ ...fadeTransition, opacity: 0 }}
      >
        <source src={heroVideoWebm} type="video/webm" />
        <source src={heroVideo} type="video/mp4" />
      </video>
    </>
  );
}
