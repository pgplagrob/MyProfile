"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  depth: number;
  phase: number;
  cool: boolean;
};

export function SiteIntro() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  const finish = useCallback(() => {
    setLeaving(true);
    window.setTimeout(() => setVisible(false), 620);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      const frame = window.requestAnimationFrame(() => setVisible(false));
      return () => window.cancelAnimationFrame(frame);
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const exitTimer = window.setTimeout(finish, 2400);

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" || event.key === "Enter" || event.key === " ") {
        finish();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(exitTimer);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [finish]);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`site-intro ${leaving ? "site-intro--leaving" : ""}`}
      role="status"
      aria-label="Opening Weraphat Pankab portfolio"
    >
      <div className="intro-constellation" aria-hidden="true" />
      <div className="intro-content">
        <p className="intro-kicker">INITIALIZING / PORTFOLIO</p>
        <div className="intro-signature" aria-label="Weraphat">
          <span>Weraphat</span><i>.</i>
        </div>
        <svg className="intro-stroke" viewBox="0 0 620 28" aria-hidden="true">
          <path d="M5 19C104 6 178 24 272 14C371 3 447 22 615 8" />
        </svg>
        <div className="intro-progress" aria-hidden="true"><span /></div>
        <p className="intro-meta">FULL-STACK SYSTEMS · BANGKOK</p>
      </div>
      <button type="button" className="intro-skip" onClick={finish}>
        Skip intro <span aria-hidden="true">↗</span>
      </button>
    </div>
  );
}

export function AmbientEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const surface: HTMLCanvasElement = canvas;
    const painter: CanvasRenderingContext2D = context;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let stars: Star[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;
    let scroll = window.scrollY;
    let targetScroll = window.scrollY;
    let animationFrame = 0;

    function createStars() {
      const count = Math.min(240, Math.max(90, Math.round((width * height) / 7200)));
      stars = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: index % 19 === 0 ? 1.35 : 0.35 + Math.random() * 0.75,
        opacity: 0.22 + Math.random() * 0.62,
        depth: 0.25 + Math.random() * 0.9,
        phase: Math.random() * Math.PI * 2,
        cool: index % 11 === 0,
      }));
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      surface.width = Math.round(width * pixelRatio);
      surface.height = Math.round(height * pixelRatio);
      surface.style.width = `${width}px`;
      surface.style.height = `${height}px`;
      painter.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createStars();
    }

    function draw(time = 0) {
      painter.clearRect(0, 0, width, height);
      pointer.x += (pointer.targetX - pointer.x) * 0.035;
      pointer.y += (pointer.targetY - pointer.y) * 0.035;
      scroll += (targetScroll - scroll) * 0.045;

      for (const star of stars) {
        const x = star.x + pointer.x * star.depth * 15;
        const rawY = star.y - scroll * star.depth * 0.035 + pointer.y * star.depth * 9;
        const y = ((rawY % height) + height) % height;
        const twinkle = reducedMotion.matches
          ? 1
          : 0.76 + Math.sin(time * 0.0011 + star.phase) * 0.24;

        painter.beginPath();
        painter.fillStyle = star.cool
          ? `rgba(103, 232, 249, ${star.opacity * twinkle})`
          : `rgba(255, 255, 255, ${star.opacity * twinkle})`;
        painter.arc(x, y, star.radius, 0, Math.PI * 2);
        painter.fill();
      }

      if (!reducedMotion.matches) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    }

    function onPointerMove(event: PointerEvent) {
      pointer.targetX = event.clientX / width - 0.5;
      pointer.targetY = event.clientY / height - 0.5;
    }

    function onScroll() {
      targetScroll = window.scrollY;
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    let observer: IntersectionObserver | undefined;

    if (reducedMotion.matches) {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
    } else {
      document.documentElement.classList.add("reveal-ready");
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
      );
      revealTargets.forEach((target) => observer?.observe(target));
    }

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="cosmic-canvas absolute inset-0" />
      <div className="cosmic-nebula absolute inset-0" />
      <div className="cosmic-vignette absolute inset-0" />
    </div>
  );
}
