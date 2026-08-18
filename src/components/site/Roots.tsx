import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language";
import { Reveal } from "./Reveal";

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
  color,
  inView,
  delay = 0,
  dashed = false,
}: {
  d: string;
  width: number;
  color: string;
  inView: boolean;
  delay?: number;
  dashed?: boolean;
}) {
  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
      pathLength={1}
      strokeDasharray={dashed ? "0.02 0.028" : 1}
      style={{
        strokeDashoffset: inView ? 0 : 1,
        transition: `stroke-dashoffset 1500ms cubic-bezier(.16,1,.3,1) ${delay}ms`,
      }}
    />
  );
}

/** Small silhouette pest sitting at an infested root tip. */
function Pest({
  x,
  y,
  scale = 1,
  rotate = 0,
}: {
  x: number;
  y: number;
  scale?: number;
  rotate?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <g className="animate-pest-pulse">
        <ellipse cx="0" cy="0" rx="6" ry="4.2" fill="var(--crimson)" />
        <circle cx="7.5" cy="-0.5" r="2.6" fill="var(--crimson)" />
        {[-4, 0, 4].map((o) => (
          <g key={o}>
            <line
              x1="-1"
              y1={o}
              x2="-7"
              y2={o + 4}
              stroke="var(--crimson)"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <line
              x1="1"
              y1={o}
              x2="7"
              y2={o + 4}
              stroke="var(--crimson)"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </g>
        ))}
      </g>
    </g>
  );
}

export function Roots() {
  const { t, lang } = useLanguage();
  const { ref, inView } = useInView<HTMLDivElement>();
  const headFont = lang === "kn" ? "kn-display" : "font-display";
  const bodyFont = lang === "kn" ? "kn" : "";

  return (
    <section
      id="roots"
      ref={ref}
      className="relative overflow-hidden bg-[color:var(--soil)] text-[color:var(--ivory)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,color-mix(in_oklab,var(--soil-deep)_60%,transparent),var(--soil-deep)_88%)]"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 pt-16 md:px-8 md:pt-20">
        <Reveal>
          <p className="text-[0.72rem] tracking-[0.24em] text-[color:var(--ivory)]/55 uppercase">
            {t("Below the ground", "ನೆಲದ ಕೆಳಗೆ")}
          </p>
          <h2
            className={`mt-4 max-w-[20ch] text-[2rem] leading-[1.12] md:text-[3.1rem] ${headFont}`}
          >
            {t(
              "Where the root is fed, the branches flower.",
              "ಬೇರಿಗೆ ಆಹಾರ ಸಿಕ್ಕರೆ, ಕೊಂಬೆಗಳು ಅರಳುತ್ತವೆ.",
            )}
            <span className="block text-[color:var(--dried)]">
              {t("Where it is eaten, they wither.", "ಅದನ್ನು ತಿಂದರೆ, ಅವು ಬಾಡುತ್ತವೆ.")}
            </span>
          </h2>
          <p
            className={`mt-6 max-w-[62ch] text-[0.98rem] leading-[1.9] text-[color:var(--ivory)]/75 ${bodyFont}`}
          >
            {t(
              "A nation stands on what it cannot see. Governance is the root system of every institution built above the ground — and right now, that root is being eaten from within.",
              "ಒಂದು ರಾಷ್ಟ್ರ ನಿಂತಿರುವುದು ಕಣ್ಣಿಗೆ ಕಾಣದ ಬೇರಿನ ಮೇಲೆ. ಆಡಳಿತ ಎಂಬುದು ನೆಲದ ಮೇಲೆ ಕಟ್ಟಲಾದ ಪ್ರತಿಯೊಂದು ಸಂಸ್ಥೆಯ ಬೇರುಗಳ ವ್ಯವಸ್ಥೆ — ಮತ್ತು ಈಗ, ಆ ಬೇರನ್ನು ಒಳಗಿನಿಂದಲೇ ತಿನ್ನಲಾಗುತ್ತಿದೆ.",
            )}
          </p>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-10 w-full max-w-[1240px] px-2 md:mt-14 md:px-8">
        <svg
          viewBox="0 0 1000 480"
          className="h-auto w-full"
          role="img"
          aria-labelledby="roots-svg-title"
        >
          <title id="roots-svg-title">
            {t(
              "The tree's exposed root system, healthy on the left, cracked and infested with corruption and non-professionalism on the right, with an unanswered question over democracy.",
              "ಮರದ ತೆರೆದ ಬೇರುಗಳ ವ್ಯವಸ್ಥೆ, ಎಡಭಾಗ ಆರೋಗ್ಯಕರ, ಬಲಭಾಗ ಭ್ರಷ್ಟಾಚಾರ ಮತ್ತು ವೃತ್ತಿಪರತೆಯ ಕೊರತೆಯಿಂದ ಬಿರುಕುಬಿಟ್ಟಿದೆ.",
            )}
          </title>

          {/* trunk stub continuing from the hero */}
          <path d="M486 0 L482 46 Q500 62 518 46 L514 0 Z" fill="var(--bark)" />

          {/* living roots — left, thicker, unbroken */}
          <RootPath
            d="M488 50 C 420 90, 330 90, 210 150"
            width={11}
            color="var(--living-deep)"
            inView={inView}
            delay={80}
          />
          <RootPath
            d="M488 55 C 430 120, 360 170, 260 240"
            width={8}
            color="var(--living)"
            inView={inView}
            delay={200}
          />
          <RootPath
            d="M492 58 C 450 150, 420 230, 340 330"
            width={7}
            color="var(--living-deep)"
            inView={inView}
            delay={320}
          />
          <RootPath
            d="M494 60 C 470 160, 460 260, 420 400"
            width={6}
            color="var(--living)"
            inView={inView}
            delay={440}
          />

          {/* dried roots — right, thinner, cracked/broken */}
          <RootPath
            d="M512 50 C 580 90, 670 90, 790 150"
            width={9}
            color="var(--dried)"
            inView={inView}
            delay={80}
            dashed
          />
          <RootPath
            d="M510 55 C 570 120, 640 170, 740 240"
            width={7}
            color="var(--dried)"
            inView={inView}
            delay={200}
            dashed
          />
          <RootPath
            d="M508 58 C 550 150, 580 230, 660 330"
            width={5}
            color="var(--dried)"
            inView={inView}
            delay={320}
            dashed
          />
          <RootPath
            d="M506 60 C 530 160, 540 260, 580 400"
            width={4}
            color="var(--dried)"
            inView={inView}
            delay={440}
            dashed
          />

          {/* pests feeding at the dried root tips */}
          <g style={{ opacity: inView ? 1 : 0, transition: "opacity 700ms ease 900ms" }}>
            <Pest x={700} y={175} scale={1.1} rotate={20} />
            <Pest x={600} y={300} scale={0.95} rotate={-10} />
          </g>

          {/* leader lines + labels */}
          <g
            style={{ opacity: inView ? 1 : 0, transition: "opacity 700ms ease 1100ms" }}
            fontFamily="var(--font-sans)"
          >
            <line x1="700" y1="175" x2="860" y2="120" stroke="var(--dried)" strokeWidth="1" />
            <line x1="600" y1="300" x2="760" y2="345" stroke="var(--dried)" strokeWidth="1" />
            <line
              x1="488"
              y1="50"
              x2="150"
              y2="60"
              stroke="color-mix(in oklab, var(--ivory) 45%, transparent)"
              strokeWidth="1"
            />
            <line
              x1="512"
              y1="50"
              x2="880"
              y2="420"
              stroke="color-mix(in oklab, var(--ivory) 45%, transparent)"
              strokeWidth="1"
            />
          </g>
        </svg>

        {/* text labels, positioned to roughly match the leader lines above; laid out with flex/grid for real DOM text */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-[20%] left-[84%] max-w-[9rem] -translate-x-full text-right md:top-[22%] md:left-[86%]">
            <p
              className={`text-[0.95rem] font-semibold text-[color:var(--dried)] md:text-base ${headFont}`}
            >
              {t("Corruption", "ಭ್ರಷ್ಟಾಚಾರ")}
            </p>
          </div>
          <div className="absolute top-[68%] left-[77%] max-w-[9rem] md:top-[70%] md:left-[79%]">
            <p
              className={`text-[0.85rem] font-semibold text-[color:var(--dried)] md:text-[0.95rem] ${headFont}`}
            >
              {t("Non-Professionalism", "ವೃತ್ತಿಪರತೆಯ ಕೊರತೆ")}
            </p>
          </div>
          <div className="absolute top-[9%] left-[8%] max-w-[9rem] md:top-[10%] md:left-[6%]">
            <p className="eyebrow text-[color:var(--ivory)]/70">
              {t("Positive to the government", "ಸರ್ಕಾರಕ್ಕೆ ಧನಾತ್ಮಕ")}
            </p>
          </div>
          <div className="absolute bottom-[2%] left-[86%] max-w-[9rem] md:bottom-[3%] md:left-[88%]">
            <p
              className={`text-[0.95rem] font-semibold text-[color:var(--ivory)]/85 md:text-base ${headFont}`}
            >
              {t("Democracy", "ಪ್ರಜಾಪ್ರಭುತ್ವ")}
            </p>
            <p className="mt-1 font-display text-2xl text-[color:var(--ivory)]/55">?</p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1240px] px-5 pt-4 pb-16 md:px-8 md:pb-24">
        <Reveal delay={160}>
          <p
            className={`max-w-[70ch] text-[0.9rem] leading-[1.9] text-[color:var(--ivory)]/60 ${bodyFont}`}
          >
            {t(
              "Corruption and non-professionalism are visible diseases with visible cures. What the Kendra asks — and does not yet answer for you — is whether the democratic root itself is strong enough to carry the weight above it.",
              "ಭ್ರಷ್ಟಾಚಾರ ಮತ್ತು ವೃತ್ತಿಪರತೆಯ ಕೊರತೆ ಕಾಣುವ ರೋಗಗಳು, ಅವಕ್ಕೆ ಕಾಣುವ ಪರಿಹಾರಗಳಿವೆ. ಆದರೆ ಕೇಂದ್ರ ಕೇಳುವ — ಇನ್ನೂ ಉತ್ತರಿಸದ — ಪ್ರಶ್ನೆ: ಮೇಲಿನ ಭಾರವನ್ನು ಹೊರುವಷ್ಟು ಪ್ರಜಾಪ್ರಭುತ್ವದ ಬೇರು ಗಟ್ಟಿಯಾಗಿದೆಯೇ?",
            )}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
