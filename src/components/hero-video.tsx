import { useEffect, useRef } from "react";

import heroPoster from "@/assets/fazaa-hero-poster.jpg";
import heroVideo from "@/assets/fazaa-hero.mp4";
import heroVideoWebm from "@/assets/fazaa-hero.webm";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId: number;
    let isSeeking = false;

    // Use requestAnimationFrame for precise detection of the end of the video
    const checkLoop = () => {
      // When we are within 0.1 seconds of the end, seamlessly jump to the start
      // We skip to 0.05s to avoid the black frame at 0s that some encoders add
      if (video.duration > 0 && video.currentTime >= video.duration - 0.1) {
        if (!isSeeking) {
          isSeeking = true;
          video.currentTime = 0.05;
          // Ensure it keeps playing
          video.play().catch(() => {});
        }
      } else {
        isSeeking = false;
      }
      
      rafId = requestAnimationFrame(checkLoop);
    };

    // Ensure the video plays immediately if possible
    video.play().catch(() => {});
    
    rafId = requestAnimationFrame(checkLoop);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-video"
      autoPlay
      muted
      playsInline
      preload="auto"
      poster={heroPoster}
      loop // Fallback native loop
    >
      <source src={heroVideoWebm} type="video/webm" />
      <source src={heroVideo} type="video/mp4" />
    </video>
  );
}
