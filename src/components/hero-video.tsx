import { useEffect, useRef } from "react";

import heroPoster from "@/assets/fazaa-hero-poster.jpg";
import heroVideo from "@/assets/fazaa-hero.mp4";
import heroVideoWebm from "@/assets/fazaa-hero.webm";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Seamless loop: when video approaches its end, smoothly rewind
  // to avoid the visible "jump" restart on loop.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      // When within the last 0.3s of the video, rewind to create a seamless loop
      if (video.duration && video.currentTime >= video.duration - 0.3) {
        video.currentTime = 0;
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-video"
      autoPlay
      muted
      playsInline
      loop
      preload="auto"
      poster={heroPoster}
    >
      <source src={heroVideoWebm} type="video/webm" />
      <source src={heroVideo} type="video/mp4" />
    </video>
  );
}
