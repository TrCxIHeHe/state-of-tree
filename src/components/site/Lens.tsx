import { useLanguage } from "@/lib/language";
import { Reveal } from "./Reveal";

const TREE_SRC = "/brand/tree.png";

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
        <div className="grid items-center gap-12 md:grid-cols-[1fr_0.85fr]">
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
                "Governance has the authority to question the necessity of the Governor's office through the lens of Governance. The same lens is turned on every individual, organization and system — including the democracy system which we adopted.",
                "ಆಡಳಿತ ದೃಷ್ಟಿಯ ಮೂಲಕ, ರಾಜ್ಯಪಾಲರ ಕಚೇರಿಯ ಅಗತ್ಯವನ್ನೇ ಪ್ರಶ್ನಿಸುವ ಅಧಿಕಾರ ಆಡಳಿತಕ್ಕಿದೆ. ಅದೇ ದೃಷ್ಟಿಯನ್ನು ಪ್ರತಿಯೊಬ್ಬ ವ್ಯಕ್ತಿ, ಸಂಘ ಸಂಸ್ಥೆ ಮತ್ತು ವ್ಯವಸ್ಥೆಯ ಮೇಲೂ ಹರಿಸಲಾಗುತ್ತದೆ — ನಾವು ಅಳವಡಿಸಿಕೊಂಡ ಪ್ರಜಾಪ್ರಭುತ್ವ ವ್ಯವಸ್ಥೆ ಸೇರಿದಂತೆ.",
              )}
            </p>
          </Reveal>

          <Reveal delay={120} className="flex justify-center">
            <div
              className="relative aspect-square w-[min(88%,380px)] overflow-hidden rounded-full border border-border"
              aria-hidden
            >
              <img
                src={TREE_SRC}
                alt=""
                className="absolute top-[-6%] left-1/2 w-[150%] -translate-x-1/2 object-cover"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,color-mix(in_oklab,var(--ivory)_82%,transparent))]" />
              <div className="absolute inset-x-0 top-1/2 h-px bg-border" />
              <div className="absolute inset-y-0 left-1/2 w-px bg-border" />
            </div>
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
