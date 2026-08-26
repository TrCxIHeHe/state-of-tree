import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, inView };
}

/** A root path whose stroke draws itself in once the section scrolls into view. */
function RootPath({
  d,
  width,
  inView,
  delay = 0,
}: {
  d: string;
  width: number;
  inView: boolean;
  delay?: number;
}) {
  return (
    <path
      d={d}
      fill="none"
      stroke="var(--bark)"
      strokeWidth={width}
      strokeLinecap="round"
      pathLength={1}
      strokeDasharray={1}
      style={{
        strokeDashoffset: inView ? 0 : 1,
        transition: `stroke-dashoffset 1500ms cubic-bezier(.16,1,.3,1) ${delay}ms`,
      }}
    />
  );
}

/** A cartoon root-pest: a round black body with a crimson belly, two wide
 * white eyes, and eight bent legs that skitter once it has scuttled in. */
function Bug({ inView, delay = 0 }: { inView: boolean; delay?: number }) {
  const legs = [
    { x1: -5, y1: -2, x2: -12, y2: -7, x3: -17, y3: -4, side: "a" },
    { x1: -5.5, y1: 0.5, x2: -13, y2: 1, x3: -18, y3: 3, side: "b" },
    { x1: -5, y1: 3, x2: -11, y2: 8, x3: -15, y3: 12, side: "a" },
    { x1: 5, y1: -2, x2: 12, y2: -7, x3: 17, y3: -4, side: "b" },
    { x1: 5.5, y1: 0.5, x2: 13, y2: 1, x3: 18, y3: 3, side: "a" },
    { x1: 5, y1: 3, x2: 11, y2: 8, x3: 15, y3: 12, side: "b" },
  ] as const;

  return (
    <svg
      viewBox="-20 -14 40 28"
      className="h-6 w-9 shrink-0 overflow-visible sm:h-7 sm:w-10 md:h-8 md:w-11"
      style={{ opacity: inView ? 1 : 0, transition: "opacity 60ms linear" }}
      aria-hidden
    >
      {/* the stain the pest leaves behind — the root visibly sickening */}
      <ellipse
        cx="0"
        cy="1.5"
        rx="12"
        ry="7"
        fill="var(--crimson)"
        className="animate-pest-stain"
        style={{ animationDelay: `${delay}ms` }}
      />
      {/* one-shot impact ring, timed to the moment it lands */}
      <circle
        cx="0"
        cy="0"
        r="4"
        fill="none"
        stroke="var(--crimson)"
        strokeWidth="1.2"
        className="pest-impact"
        style={{
          opacity: 0,
          animation: inView ? `pest-impact 850ms ease-out ${delay + 120}ms both` : undefined,
        }}
      />
      <g style={{ animationDelay: `${delay}ms` }} className={inView ? "animate-pest-enter" : ""}>
        {legs.map((l, i) => (
          <path
            key={i}
            d={`M ${l.x1} ${l.y1} L ${l.x2} ${l.y2} L ${l.x3} ${l.y3}`}
            fill="none"
            stroke="#1b1310"
            strokeWidth="1.4"
            strokeLinecap="round"
            className={l.side === "a" ? "animate-pest-leg-a" : "animate-pest-leg-b"}
            style={{ animationDelay: `${i * 90}ms` }}
          />
        ))}
        <g className="animate-pest-body">
          <ellipse cx="0" cy="0.5" rx="7.2" ry="5.6" fill="#1b1310" />
          <ellipse cx="0.5" cy="2" rx="4.2" ry="2.8" fill="var(--crimson)" opacity="0.92" />
          <circle cx="-2.6" cy="-1.4" r="2.3" fill="#f6efe4" />
          <circle cx="2.6" cy="-1.4" r="2.3" fill="#f6efe4" />
          <circle cx="-2.3" cy="-1.1" r="1.05" fill="#1b1310" />
          <circle cx="2.9" cy="-1.1" r="1.05" fill="#1b1310" />
        </g>
      </g>
    </svg>
  );
}

/** A bold, flat-cartoon arrow — yellow with a black outline — pointing left
 * or right out of the root system. */
function YellowArrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 64 22"
      className="h-3.5 w-8 shrink-0 md:h-5 md:w-11"
      style={{ transform: direction === "left" ? "scaleX(-1)" : undefined }}
      aria-hidden
    >
      <path
        d="M0 8 H38 V2 L64 11 L38 20 V14 H0 Z"
        fill="#f2c14e"
        stroke="#1b1310"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** One full row: a bug at the root tip, a bold arrow, and the label it
 * points to — ordered so the bug always sits nearest the root. */
function RootAlert({
  label,
  side,
  hasBug = true,
  dark,
  inView,
  delay = 0,
  index,
}: {
  label: string;
  side: "left" | "right";
  hasBug?: boolean;
  dark: boolean;
  inView: boolean;
  delay?: number;
  index?: number;
}) {
  const bug = hasBug ? <Bug inView={inView} delay={delay} /> : <span className="w-9 md:w-11" />;
  const arrow = <YellowArrow direction={side} />;
  const labelColor = dark ? "text-[color:var(--ivory)]/90" : "text-[color:var(--bark)]";
  const markColor = dark ? "text-[color:var(--ivory)]" : "text-[color:var(--crimson)]";
  const indexColor = dark ? "text-[color:var(--ivory)]/40" : "text-[color:var(--crimson)]/50";
  const text = (
    <span className={`flex flex-col ${side === "left" ? "items-end" : "items-start"}`}>
      {index !== undefined && (
        <span
          className={`font-display text-[0.6rem] tracking-[0.1em] md:text-[0.7rem] ${indexColor}`}
        >
          {String(index).padStart(2, "0")}
        </span>
      )}
      <span
        className={`text-[0.72rem] leading-tight font-semibold whitespace-nowrap sm:text-[0.85rem] md:text-[0.98rem] ${
          hasBug ? labelColor : `animate-mark-glow font-display text-xl md:text-2xl ${markColor}`
        }`}
      >
        {label}
      </span>
    </span>
  );
  return (
    <div
      className={`flex items-center gap-1 sm:gap-1.5 md:gap-2 ${side === "left" ? "flex-row-reverse" : ""}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : `translateX(${side === "left" ? "" : "-"}12px)`,
        transition: `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms`,
      }}
    >
      {bug}
      {arrow}
      {text}
    </div>
  );
}

/** A plain-flow legend entry — used in place of the root-tip overlay on
 * narrow screens, where there isn't room to anchor labels off to the side. */
function LegendItem({
  label,
  hasBug = true,
  dark,
  inView,
  delay = 0,
  index,
}: {
  label: string;
  hasBug?: boolean;
  dark: boolean;
  inView: boolean;
  delay?: number;
  index?: number;
}) {
  const labelColor = dark ? "text-[color:var(--ivory)]/90" : "text-[color:var(--bark)]";
  const markColor = dark ? "text-[color:var(--ivory)]" : "text-[color:var(--crimson)]";
  const indexColor = dark ? "text-[color:var(--ivory)]/40" : "text-[color:var(--crimson)]/50";
  return (
    <div
      className="flex items-center gap-2"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(8px)",
        transition: `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms`,
      }}
    >
      {hasBug ? <Bug inView={inView} delay={delay} /> : <span className="w-7 shrink-0" />}
      <YellowArrow direction="right" />
      <span className="flex flex-col">
        {index !== undefined && (
          <span className={`font-display text-[0.55rem] tracking-[0.1em] ${indexColor}`}>
            {String(index).padStart(2, "0")}
          </span>
        )}
        <span
          className={`text-[0.78rem] leading-tight font-semibold ${
            hasBug ? labelColor : `animate-mark-glow font-display text-lg ${markColor}`
          }`}
        >
          {label}
        </span>
      </span>
    </div>
  );
}

/** The tree's exposed root system: eight roots fanning from a trunk stub,
 * with pests representing Corruption, Non-Professionalism and Democracy
 * feeding at three of the tips, and one tip left as an open question.
 * Reused wherever the site needs to make that point visually. */
export function RootsDiagram({
  dark = true,
  showEyebrow = true,
  compact = false,
  className = "",
}: {
  /** Tuned for a dark (soil) background by default; set false for a light one. */
  dark?: boolean;
  showEyebrow?: boolean;
  /** Always use the plain-flow legend, even on wide screens — for narrow
   * columns where there isn't room for the precise root-tip overlay. */
  compact?: boolean;
  className?: string;
}) {
  const { t } = useLanguage();
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={`relative w-full ${className}`}>
      <svg
        viewBox="0 0 1000 480"
        className="h-auto w-full"
        role="img"
        aria-labelledby="roots-diagram-title"
      >
        <title id="roots-diagram-title">
          {t(
            "The tree's exposed root system, with pests representing corruption, non-professionalism and democracy feeding at the tips, and one tip left as an unanswered question.",
            "ಮರದ ತೆರೆದ ಬೇರುಗಳ ವ್ಯವಸ್ಥೆ, ಭ್ರಷ್ಟಾಚಾರ, ವೃತ್ತಿಪರತೆಯ ಕೊರತೆ ಮತ್ತು ಪ್ರಜಾಪ್ರಭುತ್ವವನ್ನು ಪ್ರತಿನಿಧಿಸುವ ಕೀಟಗಳಿಂದ ಬಿರುಕುಬಿಟ್ಟಿದೆ.",
          )}
        </title>

        <path
          d="M486 0 L482 46 Q500 62 518 46 L514 0 Z"
          fill="var(--bark)"
          className="animate-trunk-pulse"
        />

        <RootPath d="M488 50 C 420 90, 330 90, 210 150" width={11} inView={inView} delay={80} />
        <RootPath d="M488 55 C 430 120, 360 170, 260 240" width={8} inView={inView} delay={200} />
        <RootPath d="M492 58 C 450 150, 420 230, 340 330" width={7} inView={inView} delay={320} />
        <RootPath d="M494 60 C 470 160, 460 260, 420 400" width={6} inView={inView} delay={440} />

        <RootPath d="M512 50 C 580 90, 670 90, 790 150" width={9} inView={inView} delay={80} />
        <RootPath d="M510 55 C 570 120, 640 170, 740 240" width={7} inView={inView} delay={200} />
        <RootPath d="M508 58 C 550 150, 580 230, 660 330" width={5} inView={inView} delay={320} />
        <RootPath d="M506 60 C 530 160, 540 260, 580 400" width={4} inView={inView} delay={440} />

        {showEyebrow && (
          <line
            x1="488"
            y1="50"
            x2="150"
            y2="60"
            stroke={
              dark
                ? "color-mix(in oklab, var(--ivory) 45%, transparent)"
                : "color-mix(in oklab, var(--bark) 35%, transparent)"
            }
            strokeWidth="1"
            style={{ opacity: inView ? 1 : 0, transition: "opacity 700ms ease 1100ms" }}
          />
        )}
      </svg>

      <div
        className={`pointer-events-none absolute inset-0 hidden ${compact ? "" : "md:block"}`}
      >
        {showEyebrow && (
          <div className="absolute top-[9%] left-[8%] max-w-[9rem] md:top-[10%] md:left-[6%]">
            <p
              className={`eyebrow ${dark ? "text-[color:var(--ivory)]/70" : "text-[color:var(--royal-soft)]"}`}
            >
              {t("Positive to the government", "ಸರ್ಕಾರಕ್ಕೆ ಧನಾತ್ಮಕ")}
            </p>
          </div>
        )}

        <div className="absolute top-[26%] left-[26%] -translate-x-full md:left-[30%] lg:left-[20%] xl:left-[16%]">
          <RootAlert
            label={t("Corruption", "ಭ್ರಷ್ಟಾಚಾರ")}
            side="left"
            dark={dark}
            inView={inView}
            delay={950}
            index={1}
          />
        </div>
        <div className="absolute top-[48%] left-[32%] -translate-x-full md:left-[36%] lg:left-[26%] xl:left-[22%]">
          <RootAlert
            label={t("Non-Professionalism", "ವೃತ್ತಿಪರತೆಯ ಕೊರತೆ")}
            side="left"
            dark={dark}
            inView={inView}
            delay={1150}
            index={2}
          />
        </div>

        <div className="absolute top-[26%] left-[68%] md:left-[68%] lg:left-[72%] xl:left-[76%]">
          <RootAlert
            label={t("Democracy", "ಪ್ರಜಾಪ್ರಭುತ್ವ")}
            side="right"
            dark={dark}
            inView={inView}
            delay={1350}
            index={3}
          />
        </div>
        <div className="absolute top-[48%] left-[63%] md:left-[63%] lg:left-[67%] xl:left-[71%]">
          <RootAlert
            label="?"
            side="right"
            hasBug={false}
            dark={dark}
            inView={inView}
            delay={1500}
          />
        </div>
      </div>

      {/* narrow screens (or any column too tight for the overlay): a plain legend */}
      <div className={`mt-6 grid grid-cols-2 gap-x-4 gap-y-5 ${compact ? "" : "md:hidden"}`}>
        <LegendItem
          label={t("Corruption", "ಭ್ರಷ್ಟಾಚಾರ")}
          dark={dark}
          inView={inView}
          delay={950}
          index={1}
        />
        <LegendItem
          label={t("Democracy", "ಪ್ರಜಾಪ್ರಭುತ್ವ")}
          dark={dark}
          inView={inView}
          delay={1350}
          index={3}
        />
        <LegendItem
          label={t("Non-Professionalism", "ವೃತ್ತಿಪರತೆಯ ಕೊರತೆ")}
          dark={dark}
          inView={inView}
          delay={1150}
          index={2}
        />
        <LegendItem label="?" hasBug={false} dark={dark} inView={inView} delay={1500} />
      </div>
    </div>
  );
}
