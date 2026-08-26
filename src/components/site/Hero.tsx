import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language";

const TREE_SRC = "/brand/tree.png";

export function Hero() {
  const [y, setY] = useState(0);
  const { t, lang } = useLanguage();
  const headFont = lang === "kn" ? "kn-display" : "font-display";

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" className="grain relative overflow-hidden pt-20 md:pt-24">
      {/* left living wash / right dried wash */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--living)_7%,transparent),transparent_70%)]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--dried)_9%,transparent),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid items-center gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-6">
          <div className="animate-rise">
            <p className="eyebrow">Regn. No.: DRB4/SOR/136/2021-2022</p>
            <h1 className="mt-4 max-w-[16ch]">
              <span className="kn-display block text-[2.35rem] leading-[1.12] font-bold text-primary sm:text-[3.2rem] md:text-[3.4rem]">
                {t("Sarkaro Rakshathi Kendra", "ಸರ್ಕಾರೋ ರಕ್ಷತಿ ಕೇಂದ್ರ")}
              </span>
              <span className="mt-2 block font-sans text-[0.78rem] tracking-[0.28em] text-foreground/70 uppercase md:text-sm">
                {t("ಸರ್ಕಾರೋ ರಕ್ಷತಿ ಕೇಂದ್ರ (ರಿ.)", "Sarkaro Rakshathi Kendra (R.)")}
              </span>
            </h1>
            <p className={`mt-3 text-lg text-accent italic md:text-xl ${headFont}`}>
              {t("A Watchdog of Government", "ಸರ್ಕಾರದ ಒಂದು ಕಾವಲುಗಾರ")}
            </p>
          </div>

          {/* tree stage — the full reference artwork, shown whole and uncropped */}
          <div className="relative">
            <figure
              className="relative z-10 mx-auto w-full max-w-[720px]"
              style={{ transform: `translate3d(0,${Math.min(y * 0.04, 40)}px,0)` }}
            >
              <img
                src={TREE_SRC}
                alt="A nation is like a tree and the governance is its root: a tree green, flowering and fruiting on one half and bare and dried on the other, with its exposed roots below being fed on by pests labelled corruption and non-professionalism, and an arrow toward democracy left as an open question."
                className="h-auto w-full drop-shadow-[0_30px_60px_color-mix(in_oklab,var(--bark)_18%,transparent)]"
                width={1280}
                height={816}
                fetchPriority="high"
              />
            </figure>
          </div>
        </div>

        <div className="mx-auto grid max-w-[1000px] gap-6 py-8 md:grid-cols-[1.15fr_0.85fr] md:py-10">
          <h2
            className={`text-[2rem] leading-[1.14] text-foreground sm:text-[2.6rem] md:text-[3.1rem] ${headFont}`}
          >
            {t("A ", "ಒಂದು ")}
            <span className="text-[color:var(--living-deep)]">{t("nation", "ರಾಷ್ಟ್ರ")}</span>
            {t(" is like a tree — and the ", " ಒಂದು ಮರದಂತೆ — ಮತ್ತು ")}
            <span className="text-accent">{t("Governance", "ಆಡಳಿತ")}</span>
            {t(" is its root.", " ಅದರ ಬೇರು.")}
          </h2>
          <div className="md:pt-3">
            <p
              className={`text-[0.95rem] leading-[1.85] text-foreground/80 ${lang === "kn" ? "kn" : ""}`}
            >
              {t(
                "Governance — one word, one point programme. Where the root is starved by corruption and non-professionalism, the branches dry. Where the root is tended by professional, full-fledged administration, the tree flowers and bears fruit.",
                "ಆಡಳಿತ — ಒಂದೇ ಪದ, ಒಂದೇ ಗುರಿಯ ಕಾರ್ಯಕ್ರಮ. ಭ್ರಷ್ಟಾಚಾರ ಮತ್ತು ವೃತ್ತಿಪರತೆಯ ಕೊರತೆಯಿಂದ ಬೇರು ಹಸಿವಾದಾಗ, ಕೊಂಬೆಗಳು ಒಣಗುತ್ತವೆ. ವೃತ್ತಿಪರ, ಸ್ವಯಂಪೂರ್ಣ ಆಡಳಿತದಿಂದ ಬೇರನ್ನು ಪೋಷಿಸಿದಾಗ, ಮರ ಅರಳಿ ಫಲ ನೀಡುತ್ತದೆ.",
              )}
            </p>
            <p className="kn mt-4 text-[0.95rem] text-foreground/75">ಸರ್ಕಾರೋ ರಕ್ಷತಿ ರಕ್ಷಿತಃ</p>
          </div>
        </div>
      </div>
    </section>
  );
}
