import { useLanguage } from "@/lib/language";
import { Reveal } from "./Reveal";
import { RootsDiagram } from "./RootsDiagram";

export function Roots() {
  const { t, lang } = useLanguage();
  const headFont = lang === "kn" ? "kn-display" : "font-display";
  const bodyFont = lang === "kn" ? "kn" : "";

  return (
    <section
      id="roots"
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
            <span className="block text-[color:var(--ivory)]">
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
        <RootsDiagram dark />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-5 pt-4 pb-16 md:px-8 md:pb-24">
        <Reveal delay={160}>
          <p
            className={`max-w-[70ch] text-[0.9rem] leading-[1.9] text-[color:var(--ivory)]/60 ${bodyFont}`}
          >
            {t(
              "Corruption and non-professionalism are visible diseases with visible cures. What the Kendra asks — and does not yet answer for you — is whether the democratic root itself is strong enough to carry the weight above it.",
              "ಭ್ರಷ್ಟಾಚಾರ ಮತ್ತು ವೃತ್ತಿಪರತೆಯ ಕೊರತೆ ಕಾಣುವ ರೋಗಗಳು, ಅವಕ್ಕೆ ಕಾಣುವ ಪರಿಹಾರಗಳಿವೆ. ಆದರೆ ಕೇಂದ್ರ ಕೇಳುವ — ಇನ್ನೂ ಉತ್ತರಿಸದ — ಪ್ರಶ್ನೆ: ಮೇಲಿನ ಭಾರವನ್ನು ಹೊರುವಷ್ಟು ಪ್ರಜಾಪ್ರಭುತ್ವದ ಬೇರು ಗಟ್ಟಿಯಾಗಿದೆ?",
            )}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
