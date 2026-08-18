import { useLanguage } from "@/lib/language";
import { Reveal } from "./Reveal";

const emotional = [
  { en: "Culture", kn: "ಸಂಸ್ಕೃತಿ" },
  { en: "Tradition", kn: "ಸಂಪ್ರದಾಯ" },
  { en: "Heritage", kn: "ಪರಂಪರೆ" },
  { en: "Scriptures", kn: "ಶಾಸ್ತ್ರಗಳು" },
  { en: "Beliefs", kn: "ನಂಬಿಕೆಗಳು" },
];
const practical = [
  { en: "Population", kn: "ಜನಸಂಖ್ಯೆ" },
  { en: "Resources", kn: "ಸಂಪನ್ಮೂಲಗಳು" },
  { en: "Administration", kn: "ಆಡಳಿತ" },
  { en: "Communal issues", kn: "ಕೋಮು ಸಮಸ್ಯೆಗಳು" },
  { en: "Unemployment", kn: "ನಿರುದ್ಯೋಗ" },
  { en: "Law & Order", kn: "ಕಾನೂನು ಮತ್ತು ಸುವ್ಯವಸ್ಥೆ" },
];

export function About() {
  const { t, lang } = useLanguage();
  const headFont = lang === "kn" ? "kn-display" : "font-display";
  const bodyFont = lang === "kn" ? "kn" : "";

  return (
    <section id="about" className="rule-top bg-[color:var(--parchment)]/60">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="eyebrow">{t("About the Kendra", "ಕೇಂದ್ರದ ಪರಿಚಯ")}</p>
          <h2
            className={`mt-4 max-w-[22ch] text-[2.1rem] leading-[1.12] md:text-[3rem] ${headFont}`}
          >
            {t("Existing on the base of ", "ಇರುವುದು ")}
            <span className="text-[color:var(--living-deep)]">
              {t("Emotionality", "ಭಾವನಾತ್ಮಕತೆ")}
            </span>
            {t(" and ", " ಮತ್ತು ")}
            <span className="text-[color:var(--bark)]">{t("Practicality", "ಪ್ರಾಯೋಗಿಕತೆ")}</span>
            {t(".", " ಎಂಬ ಬುನಾದಿಯ ಮೇಲೆ.")}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
          <Reveal className="bg-background p-7 md:p-10">
            <p className="text-[0.7rem] tracking-[0.24em] text-[color:var(--living-deep)] uppercase">
              {t("Emotional Foundation", "ಭಾವನಾತ್ಮಕ ಬುನಾದಿ")}
            </p>
            <p className={`mt-5 text-[0.95rem] leading-[1.85] text-foreground/80 ${bodyFont}`}>
              {t(
                "Emotionality is related to our culture, tradition, heritage, scriptures and our beliefs — the living half of the tree, the part that still flowers.",
                "ಭಾವನಾತ್ಮಕತೆ ಎಂಬುದು ನಮ್ಮ ಸಂಸ್ಕೃತಿ, ಸಂಪ್ರದಾಯ, ಪರಂಪರೆ, ಶಾಸ್ತ್ರಗಳು ಮತ್ತು ನಂಬಿಕೆಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ್ದು — ಮರದ ಜೀವಂತ ಅರ್ಧಭಾಗ, ಇನ್ನೂ ಅರಳುತ್ತಿರುವ ಭಾಗ.",
              )}
            </p>
            <ul className="mt-7 divide-y divide-border">
              {emotional.map((item) => (
                <li key={item.en} className="flex items-baseline gap-3 py-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--living)]" />
                  <span className={`text-xl ${headFont}`}>{t(item.en, item.kn)}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="bg-background p-7 md:p-10">
            <p className="text-[0.7rem] tracking-[0.24em] text-[color:var(--bark)] uppercase">
              {t("Practical Reality", "ಪ್ರಾಯೋಗಿಕ ವಾಸ್ತವ")}
            </p>
            <p className={`mt-5 text-[0.95rem] leading-[1.85] text-foreground/80 ${bodyFont}`}>
              {t(
                "Practicality is related to today's existential situation and our problems — the bare half, the branches that dried because the root was neglected.",
                "ಪ್ರಾಯೋಗಿಕತೆ ಎಂಬುದು ಇಂದಿನ ಅಸ್ತಿತ್ವದ ಪರಿಸ್ಥಿತಿ ಮತ್ತು ನಮ್ಮ ಸಮಸ್ಯೆಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ್ದು — ಬರಿದಾದ ಅರ್ಧಭಾಗ, ಬೇರನ್ನು ನಿರ್ಲಕ್ಷಿಸಿದ್ದರಿಂದ ಒಣಗಿದ ಕೊಂಬೆಗಳು.",
              )}
            </p>
            <ul className="mt-7 divide-y divide-border">
              {practical.map((item) => (
                <li key={item.en} className="flex items-baseline gap-3 py-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--dried)]" />
                  <span className={`text-xl text-foreground/85 ${headFont}`}>
                    {t(item.en, item.kn)}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
