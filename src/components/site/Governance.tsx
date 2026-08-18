import { useLanguage } from "@/lib/language";
import { Reveal } from "./Reveal";

export function Governance() {
  const { t, lang } = useLanguage();
  const headFont = lang === "kn" ? "kn-display" : "font-display";
  const bodyFont = lang === "kn" ? "kn" : "";

  return (
    <section
      id="governance"
      className="grain rule-top relative overflow-hidden bg-[color:var(--royal)] text-[color:var(--ivory)]"
    >
      <div className="relative mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-32">
        <Reveal>
          <p className="text-[0.72rem] tracking-[0.24em] text-[color:var(--ivory)]/60 uppercase">
            {t("The conceptual heart", "ಪರಿಕಲ್ಪನೆಯ ಹೃದಯ")}
          </p>
          <h2
            className={`mt-5 text-[3.4rem] leading-[0.95] tracking-[-0.01em] sm:text-[5rem] md:text-[7.5rem] ${headFont}`}
          >
            {t("GOVERNANCE", "ಆಡಳಿತ")}
          </h2>
          <p
            className={`mt-4 text-[1.5rem] leading-tight text-[color:var(--ivory)]/85 md:text-[2.4rem] ${headFont}`}
          >
            {t("is beyond Nation & Democracy", "ರಾಷ್ಟ್ರ ಮತ್ತು ಪ್ರಜಾಪ್ರಭುತ್ವಕ್ಕಿಂತ ಮೀರಿದ್ದು")}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <p
              className={`text-[1.05rem] leading-[1.9] text-[color:var(--ivory)]/85 md:text-[1.2rem] ${bodyFont}`}
            >
              {t(
                "Governance has the authority to question the necessity of the Governor's office through the lens of Governance. It is not a party, not a slogan and not a season — it is the root system beneath every institution a nation builds above the ground.",
                "ಆಡಳಿತಕ್ಕೆ, ಆಡಳಿತದ ದೃಷ್ಟಿಯಿಂದ, ರಾಜ್ಯಪಾಲರ ಕಚೇರಿಯ ಅಗತ್ಯವನ್ನೇ ಪ್ರಶ್ನಿಸುವ ಅಧಿಕಾರವಿದೆ. ಇದು ಒಂದು ಪಕ್ಷವಲ್ಲ, ಘೋಷಣೆಯಲ್ಲ, ಒಂದು ಋತುವೂ ಅಲ್ಲ — ಇದು ರಾಷ್ಟ್ರ ನೆಲದ ಮೇಲೆ ಕಟ್ಟುವ ಪ್ರತಿಯೊಂದು ಸಂಸ್ಥೆಯ ಕೆಳಗಿರುವ ಬೇರಿನ ವ್ಯವಸ್ಥೆ.",
              )}
            </p>
            <p className="kn mt-6 text-[1rem] text-[color:var(--ivory)]/75">
              ಪ್ರತಿಯೊಂದನ್ನು ಸರ್ಕಾರದ ಮೂಗಿನ ನೇರಕ್ಕೆ ನೋಡುವುದು. ಅಂದರೆ, ವ್ಯಕ್ತಿ, ಸಂಘ ಸಂಸ್ಥೆ, ವ್ಯವಸ್ಥೆ
              (ಪ್ರಜಾಪ್ರಭುತ್ವವು ಸೇರಿದಂತೆ) ಯಾವುದೂ ಸರ್ಕಾರಕ್ಕೆ ಹೊರೆಯಾಗಿರಬಾರದು.
            </p>
          </Reveal>
          <Reveal delay={140} className="border-l border-[color:var(--ivory)]/20 pl-6">
            <p className="text-[0.7rem] tracking-[0.24em] text-[color:var(--ivory)]/55 uppercase">
              {t("One word", "ಒಂದು ಪದ")}
            </p>
            <p className={`mt-2 text-3xl ${headFont}`}>{t("Governance", "ಆಡಳಿತ")}</p>
            <p className="mt-6 text-[0.7rem] tracking-[0.24em] text-[color:var(--ivory)]/55 uppercase">
              {t("One point program", "ಒಂದು ಗುರಿಯ ಕಾರ್ಯಕ್ರಮ")}
            </p>
            <p className={`mt-2 text-3xl text-[color:var(--ivory)]/85 ${headFont}`}>
              {t("Elevating Government Administration", "ಸರ್ಕಾರಿ ಆಡಳಿತದ ಉನ್ನತೀಕರಣ")}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
