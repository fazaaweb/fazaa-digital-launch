import heroPoster from "@/assets/fazaa-hero-poster.jpg";
import heroVideo from "@/assets/fazaa-hero.mp4";
import heroVideoWebm from "@/assets/fazaa-hero.webm";

export function HeroVideo() {
  return (
    <video
      className="hero-video"
      autoPlay
      muted
      playsInline
      loop
      preload="auto"
      poster={heroPoster}
      style={{
        objectFit: "cover",
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
      }}
    >
      <source src={heroVideoWebm} type="video/webm" />
      <source src={heroVideo} type="video/mp4" />
    </video>
  );
}
