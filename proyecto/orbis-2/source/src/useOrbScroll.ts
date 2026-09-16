import { useEffect, type RefObject } from "react";

/** Move the existing canvas; keep its WebGL context, audio and deformation alive. */
export function useOrbScroll(
  root: RefObject<HTMLDivElement | null>,
  stage: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!root.current || !stage.current) return;
      const w = document.documentElement.clientWidth,
        h = window.innerHeight;
      const mobile = w <= 700,
        short = h <= 600 && !mobile;
      const top = mobile ? 125 : short ? 12 : 35;
      const bottom = mobile ? 134 : short ? 65 : 79;
      const progress = document.fullscreenElement
        ? 0
        : Math.min(1, window.scrollY / (h * 0.8));
      const p = progress * progress * (3 - 2 * progress);
      const dock = mobile ? 120 : Math.min(470, w * 0.34, h * 0.55);
      const right = mobile ? 0 : 24;
      const endY = h - bottom - dock - (mobile ? 4 : 24);
      const lerp = (a: number, b: number) => a + (b - a) * p;
      Object.assign(stage.current.style, {
        left: `${lerp(0, w - dock - right)}px`,
        top: `${lerp(top, endY)}px`,
        width: `${lerp(w, dock)}px`,
        height: `${lerp(h - top - bottom, dock)}px`,
      });
      root.current.dataset.reading = progress > 0.85 ? "true" : "false";
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    document.addEventListener("fullscreenchange", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("fullscreenchange", schedule);
    };
  }, [root, stage]);
}
