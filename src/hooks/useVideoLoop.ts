import { useEffect, useRef } from "react";

/**
 * Seamless background-video loop with a JavaScript (rAF) fade system —
 * no CSS transitions, per the brand spec:
 *   • 500ms fade-in on load / loop restart
 *   • 500ms fade-out when 0.55s remain before the clip ends
 *   • a fadingOut guard stops repeated timeupdate events re-triggering it
 *   • on `ended`: snap to opacity 0, wait 100ms, reset to 0s, play, fade back in
 *   • every new fade cancels the running animation frame and resumes from the
 *     current opacity (never snaps)
 * Respects prefers-reduced-motion by holding a still frame instead of playing.
 */
const FADE_MS = 500;
const FADE_OUT_LEAD = 0.55;

export function useVideoLoop() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const cancelFade = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const fadeTo = (target: number, onDone?: () => void) => {
      cancelFade();
      const from = Number(video.style.opacity || "0");
      let startTs: number | null = null;
      const step = (ts: number) => {
        if (startTs === null) startTs = ts;
        const t = Math.min(1, (ts - startTs) / FADE_MS);
        video.style.opacity = String(from + (target - from) * t);
        if (t < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          rafRef.current = null;
          onDone?.();
        }
      };
      rafRef.current = requestAnimationFrame(step);
    };

    const safePlay = () => {
      const p = video.play();
      if (p && typeof p.then === "function") p.catch(() => {});
    };

    if (reduceMotion) {
      video.style.opacity = "1";
      video.pause();
      return () => cancelFade();
    }

    const handleLoaded = () => {
      video.style.opacity = "0";
      fadingOutRef.current = false;
      safePlay();
      fadeTo(1);
    };

    const handleTimeUpdate = () => {
      if (!video.duration || Number.isNaN(video.duration)) return;
      const remaining = video.duration - video.currentTime;
      if (remaining <= FADE_OUT_LEAD && !fadingOutRef.current) {
        fadingOutRef.current = true;
        fadeTo(0);
      }
    };

    const handleEnded = () => {
      cancelFade();
      video.style.opacity = "0";
      window.setTimeout(() => {
        video.currentTime = 0;
        safePlay();
        fadingOutRef.current = false;
        fadeTo(1);
      }, 100);
    };

    video.addEventListener("loadeddata", handleLoaded);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    if (video.readyState >= 2) handleLoaded();

    return () => {
      cancelFade();
      video.removeEventListener("loadeddata", handleLoaded);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return videoRef;
}
