import { useEffect, useRef } from "react";

import heroPoster from "@/assets/fazaa-hero-poster.jpg";
import heroVideo from "@/assets/fazaa-hero.mp4";
import heroVideoWebm from "@/assets/fazaa-hero.webm";

/**
 * نقاط التكرار: تم تحديدها بعد تحليل إطارات الفيديو (المدة 8 ثوانٍ).
 * نتوقف قبل حركة النهاية ونعود إلى نقطة بداية مطابقة بصريًا للمشهد.
 */
const LOOP_START = 0;
const TAIL_TRIM = 0.5; // الجزء الأخير الذي لا يُعرض أبدًا (حركة النهاية)
const CROSSFADE = 1.4; // مدة الانتقال اللطيف بين الدورتين

/**
 * حلقة فيديو غير محسوسة: طبقتان من نفس الفيديو تتبادلان التشغيل،
 * فيبدأ المقطع الثاني من نقطة البداية قبل أن يصل الأول إلى حركة النهاية.
 */
export function HeroVideo() {
  const layersRef = useRef<Array<HTMLVideoElement | null>>([null, null]);

  useEffect(() => {
    const [a, b] = layersRef.current;
    if (!a || !b) return;

    let activeIndex = 0;
    let switching = false;
    let frame = 0;
    let disposed = false;

    const layerAt = (index: number) => layersRef.current[index] as HTMLVideoElement;

    const safePlay = (video: HTMLVideoElement) => {
      const played = video.play();
      if (played && typeof played.catch === "function") played.catch(() => {});
    };

    const prepare = () => {
      for (const video of [a, b]) {
        video.muted = true;
        video.currentTime = LOOP_START;
      }
      b.style.opacity = "0";
      a.style.opacity = "1";
      safePlay(a);
    };

    const swap = () => {
      const current = layerAt(activeIndex);
      const next = layerAt(activeIndex === 0 ? 1 : 0);

      switching = true;
      try {
        next.currentTime = LOOP_START;
      } catch {
        /* لا شيء: سيُعاد الضبط في الدورة القادمة */
      }
      safePlay(next);
      next.style.opacity = "1";
      current.style.opacity = "0";

      window.setTimeout(() => {
        if (disposed) return;
        current.pause();
        try {
          current.currentTime = LOOP_START;
        } catch {
          /* تجاهل */
        }
        activeIndex = activeIndex === 0 ? 1 : 0;
        switching = false;
      }, CROSSFADE * 1000);
    };

    const tick = () => {
      frame = window.requestAnimationFrame(tick);
      if (switching) return;

      const current = layerAt(activeIndex);
      const duration = current.duration;
      if (!Number.isFinite(duration) || duration <= TAIL_TRIM + CROSSFADE) return;

      const loopEnd = duration - TAIL_TRIM;
      if (current.currentTime >= loopEnd - CROSSFADE) swap();
      else if (current.paused && current.readyState >= 2) safePlay(current);
    };

    const onMeta = () => prepare();

    a.addEventListener("loadedmetadata", onMeta);
    b.addEventListener("loadedmetadata", onMeta);
    if (a.readyState >= 1 && b.readyState >= 1) prepare();

    frame = window.requestAnimationFrame(tick);

    const onVisible = () => {
      if (document.visibilityState === "visible" && !switching) safePlay(layerAt(activeIndex));
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frame);
      a.removeEventListener("loadedmetadata", onMeta);
      b.removeEventListener("loadedmetadata", onMeta);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return (
    <>
      {[0, 1].map((index) => (
        <video
          key={index}
          ref={(node) => {
            layersRef.current[index] = node;
          }}
          className="hero-video"
          style={{
            opacity: index === 0 ? 1 : 0,
            transition: `opacity ${CROSSFADE}s cubic-bezier(0.45, 0, 0.55, 1)`,
          }}
          autoPlay={index === 0}
          muted
          playsInline
          preload="auto"
          poster={index === 0 ? heroPoster : undefined}
        >
          <source src={heroVideoWebm} type="video/webm" />
          <source src={heroVideo} type="video/mp4" />
        </video>
      ))}
    </>
  );
}
