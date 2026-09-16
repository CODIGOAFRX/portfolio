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
      const canvasHeight = Math.max(1, h - top - bottom);
      const scale = 1 + (dock / Math.min(w, canvasHeight) - 1) * p;
      const centerX = w / 2 + (w - dock / 2 - right - w / 2) * p;
      const centerY =
        canvasHeight / 2 +
        (h - bottom - dock / 2 - (mobile ? 4 : 24) - top - canvasHeight / 2) *
          p;
      // Layout dimensions only change with the viewport. Scroll uses the
      // compositor, so WebGL keeps its drawing buffer throughout the journey.
      Object.assign(stage.current.style, {
        left: "0px",
        top: `${top}px`,
        width: `${w}px`,
        height: `${canvasHeight}px`,
        transform: `translate3d(${centerX - (w * scale) / 2}px, ${centerY - (canvasHeight * scale) / 2}px, 0) scale(${scale})`,
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
