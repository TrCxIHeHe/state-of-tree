import { useLanguage } from "@/lib/language";
import { Reveal } from "./Reveal";
import { RootsDiagram } from "./RootsDiagram";

const problems = [
  { en: "Corruption", kn: "ಭ್ರಷ್ಟಾಚಾರ" },
  { en: "Non-professionalism", kn: "ವೃತ್ತಿಪರತೆಯ ಕೊರತೆ" },
  { en: "Administrative weaknesses", kn: "ಆಡಳಿತಾತ್ಮಕ ದೌರ್ಬಲ್ಯಗಳು" },
  { en: "Systemic problems", kn: "ವ್ಯವಸ್ಥಾತ್ಮಕ ಸಮಸ್ಯೆಗಳು" },
  { en: "Political excuses", kn: "ರಾಜಕೀಯ ನೆಪಗಳು" },
];
const direction = [
  { en: "Professional administration", kn: "ವೃತ್ತಿಪರ ಆಡಳಿತ" },
  { en: "Meaningful governance", kn: "ಅರ್ಥಪೂರ್ಣ ಆಡಳಿತ" },
  { en: "Practical solutions", kn: "ಪ್ರಾಯೋಗಿಕ ಪರಿಹಾರಗಳು" },
  { en: "Better outcomes", kn: "ಉತ್ತಮ ಫಲಿತಾಂಶಗಳು" },
  { en: "Public participation", kn: "ಸಾರ್ವಜನಿಕ ಪಾಲ್ಗೊಳ್ಳುವಿಕೆ" },
];

export function Lens() {
  const { t, lang } = useLanguage();
  const headFont = lang === "kn" ? "kn-display" : "font-display";
  const bodyFont = lang === "kn" ? "kn" : "";

  return (
    <section id="lens" className="rule-top">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-14 md:grid-cols-[1.05fr_0.95fr] md:gap-10">
          <Reveal>
            <p className="eyebrow">{t("Governance Lens", "ಆಡಳಿತ ದೃಷ್ಟಿ")}</p>
            <h2 className={`mt-4 text-[2.1rem] leading-[1.12] md:text-[3rem] ${headFont}`}>
              {t(
                "Every structure must survive one question: ",
                "ಪ್ರತಿಯೊಂದು ವ್ಯವಸ್ಥೆ ಈ ಒಂದು ಪ್ರಶ್ನೆಯನ್ನು ಎದುರಿಸಲೇಬೇಕು: ",
              )}
              <span className="text-accent">{t("is it necessary?", "ಇದು ಅಗತ್ಯವೇ?")}</span>
            </h2>
            <p className={`mt-6 text-[1rem] leading-[1.9] text-foreground/80 ${bodyFont}`}>
              {t(
                "In simple terms: we believe no office or system should exist just because it always has. So we ask, plainly, of every one of them — is this still necessary?",
                "ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ಯಾವುದೇ ಕಚೇರಿ ಅಥವಾ ವ್ಯವಸ್ಥೆ ಕೇವಲ ಅದು ಸದಾ ಇದ್ದದ್ದು ಎಂಬ ಕಾರಣಕ್ಕೆ ಮುಂದುವರಿಯಬಾರದು ಎಂಬುದು ನಮ್ಮ ನಂಬಿಕೆ. ಹಾಗಾಗಿ ಪ್ರತಿಯೊಂದನ್ನೂ ನೇರವಾಗಿ ಕೇಳುತ್ತೇವೆ — ಇದು ಇನ್ನೂ ಅಗತ್ಯವಿದೆಯೇ?",
              )}
            </p>
            <p className={`mt-4 text-[1rem] leading-[1.9] text-foreground/80 ${bodyFont}`}>
              {t(
                "That includes the Governor's office. It includes any person, organization or system we've come to take for granted — even the democratic system we currently follow. Nothing is exempt from the question just because it is familiar.",
                "ಇದರಲ್ಲಿ ರಾಜ್ಯಪಾಲರ ಕಚೇರಿಯೂ ಸೇರಿದೆ. ನಾವು ಸಹಜವೆಂದು ಒಪ್ಪಿಕೊಂಡ ಯಾವುದೇ ವ್ಯಕ್ತಿ, ಸಂಘ ಸಂಸ್ಥೆ ಅಥವಾ ವ್ಯವಸ್ಥೆ — ನಾವು ಈಗ ಅನುಸರಿಸುತ್ತಿರುವ ಪ್ರಜಾಪ್ರಭುತ್ವ ವ್ಯವಸ್ಥೆ ಸೇರಿದಂತೆ — ಇದರಲ್ಲಿ ಸೇರಿದೆ. ಪರಿಚಿತವಾಗಿದೆ ಎಂಬ ಕಾರಣಕ್ಕೆ ಯಾವುದೂ ಈ ಪ್ರಶ್ನೆಯಿಂದ ಹೊರತಾಗಿಲ್ಲ.",
              )}
            </p>
          </Reveal>

          <Reveal delay={120} className="flex flex-col items-center">
            <p className="max-w-[30ch] text-center text-[0.78rem] tracking-[0.06em] text-foreground/55 italic">
              {t(
                "Turn that same lens on the root below, and three answers come back differently:",
                "ಅದೇ ದೃಷ್ಟಿಯನ್ನು ಕೆಳಗಿನ ಬೇರಿನ ಮೇಲೆ ಹರಿಸಿದಾಗ, ಮೂರು ಉತ್ತರಗಳು ಬೇರೆ ಬೇರೆಯಾಗಿ ಬರುತ್ತವೆ:",
              )}
            </p>
            <div className="mt-8 w-full max-w-[420px]">
              <RootsDiagram dark={false} showEyebrow={false} compact />
            </div>
            <p
              className={`mt-10 max-w-[34ch] text-center text-[1.05rem] leading-[1.6] text-[color:var(--bark)] ${headFont}`}
            >
              {t(
                "“No individual, organization, or system — including democracy — should be a burden on the government.”",
                "“ವ್ಯಕ್ತಿ, ಸಂಘ ಸಂಸ್ಥೆ, ವ್ಯವಸ್ಥೆ — ಪ್ರಜಾಪ್ರಭುತ್ವವು ಸೇರಿದಂತೆ — ಯಾವುದೂ ಸರ್ಕಾರಕ್ಕೆ ಹೊರೆಯಾಗಿರಬಾರದು.”",
              )}
            </p>
            <p className="mt-2 text-[0.68rem] tracking-[0.2em] text-foreground/45 uppercase">
              {t("— from the Kendra's objectives", "— ಕೇಂದ್ರದ ಉದ್ದೇಶಗಳಿಂದ")}
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px border border-border bg-border md:grid-cols-2">
          <Reveal className="bg-[color:var(--parchment)] p-7 md:p-10">
            <p className="text-[0.7rem] tracking-[0.24em] text-[color:var(--bark)] uppercase">
              {t("The dried half — Problems", "ಒಣಗಿದ ಅರ್ಧಭಾಗ — ಸಮಸ್ಯೆಗಳು")}
            </p>
            <ul className="mt-6">
              {problems.map((p) => (
                <li
                  key={p.en}
                  className="flex items-baseline gap-3 border-b border-border/70 py-3.5"
                >
                  <span className="h-px w-5 shrink-0 bg-[color:var(--dried)]" />
                  <span className={`text-xl text-foreground/80 md:text-2xl ${headFont}`}>
                    {t(p.en, p.kn)}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="bg-background p-7 md:p-10">
            <p className="text-[0.7rem] tracking-[0.24em] text-[color:var(--living-deep)] uppercase">
              {t("The living half — Desired direction", "ಜೀವಂತ ಅರ್ಧಭಾಗ — ಬಯಸಿದ ದಿಕ್ಕು")}
            </p>
            <ul className="mt-6">
              {direction.map((p) => (
                <li
                  key={p.en}
                  className="flex items-baseline gap-3 border-b border-border/70 py-3.5"
                >
                  <span className="h-px w-5 shrink-0 bg-[color:var(--living)]" />
                  <span className={`text-xl md:text-2xl ${headFont}`}>{t(p.en, p.kn)}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
