import { useEffect, useRef, useState } from "react";

const SEAL_SRC = "/brand/seal.png";

/** Full-screen entrance: the seal settles in, the name rises, a rule grows
 * between the two halves of the tree's meaning — then it steps aside for
 * the site itself. Plays once per browser session. */
export function IntroSplash({ onDone }: { onDone: () => void }) {
  const [exiting, setExiting] = useState(false);
  const particlesRef = useRef<HTMLDivElement | null>(null);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const holdMs = reduced ? 300 : 3100;
    const fadeMs = reduced ? 250 : 550;

    const exitTimer = setTimeout(() => setExiting(true), holdMs);
    const doneTimer = setTimeout(() => onDoneRef.current(), holdMs + fadeMs);

    let particles: HTMLDivElement[] = [];
    if (!reduced && particlesRef.current) {
      const container = particlesRef.current;
      const colors = [
        "color-mix(in oklab, var(--living) 80%, transparent)",
        "color-mix(in oklab, var(--crimson) 75%, transparent)",
        "color-mix(in oklab, var(--dried) 80%, transparent)",
      ];
      for (let i = 0; i < 18; i++) {
        const el = document.createElement("div");
        el.className = "animate-intro-particle absolute rounded-full";
        const color = colors[i % colors.length];
        const size = 3 + Math.random() * 3;
        el.style.left = `${Math.random() * 100}%`;
        el.style.bottom = "-10px";
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
        el.style.background = color;
        el.style.boxShadow = `0 0 6px ${color}`;
        el.style.setProperty("--drift", `${(Math.random() * 70 - 35).toFixed(0)}px`);
        el.style.animationDuration = `${5 + Math.random() * 4}s`;
        el.style.animationDelay = `${1.2 + Math.random() * 2.4}s`;
        container.appendChild(el);
        particles.push(el);
      }
    }

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      particles.forEach((p) => p.remove());
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden transition-opacity duration-500 ${
        exiting ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{
        background:
          "radial-gradient(circle at 50% 58%, color-mix(in oklab, var(--living-deep) 18%, var(--soil-deep)), var(--soil-deep) 72%), linear-gradient(180deg, var(--royal) 0%, var(--soil-deep) 88%)",
      }}
      aria-hidden={exiting}
    >
      <div ref={particlesRef} className="pointer-events-none absolute inset-0" />

      <div className="animate-intro-emblem relative h-24 w-24 sm:h-32 sm:w-32">
        <div
          aria-hidden
          className="intro-glow absolute inset-[-35%] rounded-full opacity-0 blur-xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--living) 55%, transparent) 0%, color-mix(in oklab, var(--crimson) 25%, transparent) 45%, transparent 72%)",
          }}
        />
        <img
          src={SEAL_SRC}
          alt=""
          className="relative h-full w-full drop-shadow-[0_0_40px_rgba(120,180,140,0.4)]"
          width={700}
          height={705}
        />
      </div>

      <div className="relative mt-7 px-6 text-center">
        <p
          className="animate-intro-rise font-display text-[1.5rem] tracking-[0.04em] text-[color:var(--ivory)] sm:text-[2.15rem]"
          style={{ animationDelay: "950ms" }}
        >
          Sarkaro Rakshathi Kendra
        </p>
        <p
          className="animate-intro-rise mt-2.5 text-[0.62rem] tracking-[0.42em] text-[color:var(--ivory)]/65 uppercase sm:text-[0.7rem]"
          style={{ animationDelay: "1250ms" }}
        >
          A Watchdog of Government
        </p>
        <div
          className="animate-intro-rule mx-auto mt-4 h-px w-0"
          style={{
            background:
              "linear-gradient(90deg, var(--crimson), var(--ivory) 50%, var(--living))",
            boxShadow: "0 0 12px rgba(255,255,255,0.35)",
          }}
        />
      </div>
    </div>
  );
}
