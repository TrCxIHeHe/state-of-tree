import { useLanguage } from "@/lib/language";
import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    t: { en: "Administration", kn: "ಆಡಳಿತ" },
    d: {
      en: "“Somehow, some administration” — the state the source material rejects.",
      kn: "‘ಹೇಗೋ ಒಂದು ಆಡಳಿತ’ — ಈ ಮೂಲ ಸ್ಥಿತಿಯನ್ನು ಕೇಂದ್ರ ತಿರಸ್ಕರಿಸುತ್ತದೆ.",
    },
  },
  {
    n: "02",
    t: { en: "Professionalism", kn: "ವೃತ್ತಿಪರತೆ" },
    d: {
      en: "Administering more professionalism in Government administration.",
      kn: "ಸರ್ಕಾರಿ ಆಡಳಿತದಲ್ಲಿ ಹೆಚ್ಚಿನ ವೃತ್ತಿಪರತೆಯನ್ನು ಅಳವಡಿಸುವುದು.",
    },
  },
  {
    n: "03",
    t: { en: "Meaningful Governance", kn: "ಅರ್ಥಪೂರ್ಣ ಆಡಳಿತ" },
    d: {
      en: "Full fledged administration, seen from the government's point of view.",
      kn: "ಸ್ವಯಂಪೂರ್ಣ ಆಡಳಿತ, ಸರ್ಕಾರದ ದೃಷ್ಟಿಕೋನದಿಂದ ನೋಡಿದಂತೆ.",
    },
  },
  {
    n: "04",
    t: { en: "Results", kn: "ಫಲಿತಾಂಶಗಳು" },
    d: {
      en: "More result oriented — outcomes instead of political excuses.",
      kn: "ಹೆಚ್ಚು ಫಲಿತಾಂಶ ಆಧಾರಿತ — ರಾಜಕೀಯ ನೆಪಗಳ ಬದಲು ಫಲಿತಾಂಶಗಳು.",
    },
  },
  {
    n: "05",
    t: { en: "Public Trust", kn: "ಸಾರ್ವಜನಿಕ ವಿಶ್ವಾಸ" },
    d: {
      en: "More acceptable, more approachable — impossible without your involvement.",
      kn: "ಹೆಚ್ಚು ಸ್ವೀಕಾರಾರ್ಹ, ಹೆಚ್ಚು ಸಮೀಪಿಸಬಹುದಾದ — ನಿಮ್ಮ ಪಾಲ್ಗೊಳ್ಳುವಿಕೆ ಇಲ್ಲದೆ ಅಸಾಧ್ಯ.",
    },
  },
];

export function Mission() {
  const { t, lang } = useLanguage();
  const headFont = lang === "kn" ? "kn-display" : "font-display";
  const bodyFont = lang === "kn" ? "kn" : "";

  return (
    <section id="mission" className="rule-top">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">{t("Our Mission", "ನಮ್ಮ ಧ್ಯೇಯ")}</p>
            <h2 className={`mt-4 text-[2rem] leading-[1.15] md:text-[2.9rem] ${headFont}`}>
              {t(
                "“Administering more professionalism in Government administration”",
                "‘ಸರ್ಕಾರಿ ಆಡಳಿತದಲ್ಲಿ ಹೆಚ್ಚಿನ ವೃತ್ತಿಪರತೆಯನ್ನು ಅಳವಡಿಸುವುದು’",
              )}
            </h2>
            <p className="kn mt-6 text-[0.95rem] text-foreground/75">
              ಸರ್ಕಾರದ ‘ಹೇಗೋ ಒಂದು ಆಡಳಿತ’ ಎಂಬುದರಿಂದ ‘ಸ್ವಯಂಪೂರ್ಣ ಆಡಳಿತ’ ಎಂಬೆಡೆಗೆ ನಡೆಯುವುದು.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className={`text-[1rem] leading-[1.9] text-foreground/80 ${bodyFont}`}>
              {t(
                "This is the concept of the Kendra: to move from somehow-administration to full fledged administration. It means to see everything from the government's point of view — whether it is an individual, an organization or a system (the democracy system which we adopted).",
                "ಇದೇ ಕೇಂದ್ರದ ಪರಿಕಲ್ಪನೆ: ‘ಹೇಗೋ ಒಂದು ಆಡಳಿತ’ದಿಂದ ಸ್ವಯಂಪೂರ್ಣ ಆಡಳಿತದೆಡೆಗೆ ಸಾಗುವುದು. ಎಲ್ಲವನ್ನೂ ಸರ್ಕಾರದ ದೃಷ್ಟಿಕೋನದಿಂದ ನೋಡುವುದು ಎಂದರ್ಥ — ಅದು ವ್ಯಕ್ತಿ, ಸಂಘ ಸಂಸ್ಥೆ ಅಥವಾ ವ್ಯವಸ್ಥೆ (ನಾವು ಅಳವಡಿಸಿಕೊಂಡ ಪ್ರಜಾಪ್ರಭುತ್ವ ವ್ಯವಸ್ಥೆ ಸೇರಿದಂತೆ) ಆಗಿರಲಿ.",
              )}
            </p>

            <ol className="mt-10 border-t border-border">
              {steps.map((s, i) => (
                <li
                  key={s.n}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-b border-border py-5 md:gap-8"
                >
                  <span className="font-display text-2xl text-primary/45">{s.n}</span>
                  <div>
                    <p
                      className={`text-xl md:text-2xl ${headFont}`}
                      style={{
                        color: `color-mix(in oklab, var(--living-deep) ${i * 22}%, var(--bark))`,
                      }}
                    >
                      {t(s.t.en, s.t.kn)}
                    </p>
                    <p
                      className={`mt-1.5 text-[0.9rem] leading-[1.75] text-muted-foreground ${bodyFont}`}
                    >
                      {t(s.d.en, s.d.kn)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className={`mt-6 text-2xl text-accent ${headFont}`}>
              {t(
                "Impossible to make this concept — without your involvement.",
                "ನಿಮ್ಮ ಪಾಲ್ಗೊಳ್ಳುವಿಕೆ ಇಲ್ಲದೆ ಈ ಪರಿಕಲ್ಪನೆ ಅಸಾಧ್ಯ.",
              )}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
