"use client";

import { useEffect, useRef } from "react";

const GAP = 28;
const REACH = 170;

/** A grid of dots that lift and brighten around the cursor. */
export default function DotField() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = canvas.current;
    const ctx = el?.getContext("2d");
    if (!el || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio, 2);
    const mouse = { x: -999, y: -999 };
    const ink = getComputedStyle(document.documentElement).getPropertyValue("--color-mute").trim();
    const accent = getComputedStyle(document.documentElement).getPropertyValue("--color-accent").trim();
    let raf = 0;

    const draw = () => {
      const { width, height } = el.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      for (let x = GAP / 2; x < width; x += GAP) {
        for (let y = GAP / 2; y < height; y += GAP) {
          const d = Math.hypot(x - mouse.x, y - mouse.y);
          const near = Math.max(0, 1 - d / REACH);
          ctx.globalAlpha = 0.16 + near * 0.84;
          ctx.fillStyle = near > 0.02 ? accent : ink;
          ctx.beginPath();
          ctx.arc(x, y - near * 7, 1 + near * 1.6, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };
    const resize = () => {
      const { width, height } = el.getBoundingClientRect();
      el.width = width * dpr;
      el.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    if (!reduced) window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={canvas} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />;
}
