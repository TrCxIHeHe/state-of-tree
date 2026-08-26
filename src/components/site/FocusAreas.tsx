import { useLanguage } from "@/lib/language";
import { Reveal } from "./Reveal";

const focus = [
  {
    t: { en: "Elevating Government Administration", kn: "ಸರ್ಕಾರಿ ಆಡಳಿತದ ಉನ್ನತೀಕರಣ" },
    d: {
      en: "Elevating Government Administration is the solution for the country's problems.",
      kn: "ಸರ್ಕಾರಿ ಆಡಳಿತದ ಉನ್ನತೀಕರಣವೇ ದೇಶದ ಸಮಸ್ಯೆಗಳಿಗೆ ಪರಿಹಾರ.",
    },
  },
  {
    t: { en: "Creating Awareness", kn: "ಜಾಗೃತಿ ಮೂಡಿಸುವುದು" },
    d: {
      en: "Through seminars, public speeches, exhibitions, road shows etc.",
      kn: "ವಿಚಾರ ಸಂಕೀರ್ಣ, ಸಾರ್ವಜನಿಕ ಭಾಷಣ, ಪ್ರದರ್ಶನ, ರೋಡ್‌ಶೋಗಳ ಮೂಲಕ.",
    },
  },
  {
    t: { en: "“World Governance Day”", kn: "‘ವಿಶ್ವ ಆಡಳಿತ ದಿನ’" },
    d: {
      en: "Urge UNO to declare one day as “World Governance Day”.",
      kn: "ವಿಶ್ವಸಂಸ್ಥೆಗೆ ‘ವಿಶ್ವ ಆಡಳಿತ ದಿನ’ ವೊಂದನ್ನು ಘೋಷಿಸುವಂತೆ ಒತ್ತಾಯಿಸುವುದು.",
    },
  },
  {
    t: { en: "Governance as a Lesson", kn: "ಪಠ್ಯದಲ್ಲಿ ‘ಆಡಳಿತ’" },
    d: {
      en: "Insist the government to inculcate Governance as a lesson in text books.",
      kn: "ಪಠ್ಯಪುಸ್ತಕಗಳಲ್ಲಿ ‘ಆಡಳಿತ’ ಎಂಬ ಪಠ್ಯವನ್ನು ಅಳವಡಿಸುವಂತೆ ಸರ್ಕಾರವನ್ನು ಒತ್ತಾಯಿಸುವುದು.",
    },
  },
  {
    t: { en: "Awareness Amongst Students", kn: "ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ಜಾಗೃತಿ" },
    d: {
      en: "Debates, essay competitions and other activities on the subject of “Governance”.",
      kn: "‘ಆಡಳಿತ’ ವಿಷಯದ ಬಗ್ಗೆ ಚರ್ಚಾಸ್ಪರ್ಧೆ, ಪ್ರಬಂಧ ಸ್ಪರ್ಧೆ ಮತ್ತು ಇತರ ಚಟುವಟಿಕೆಗಳು.",
    },
  },
  {
    t: { en: "Bringing Communal Harmony", kn: "ಕೋಮು ಸೌಹಾರ್ದ" },
    d: {
      en: "Urging peace committees in sensitive areas where communal disturbances occur.",
      kn: "ಕೋಮು ಗಲಭೆಗಳಾಗುತ್ತಿರುವ ಸೂಕ್ಷ್ಮ ಪ್ರದೇಶಗಳಲ್ಲಿ ಶಾಂತಿ ಸಮಿತಿಯನ್ನು ರಚಿಸುವಂತೆ ಒತ್ತಾಯಿಸುವುದು.",
    },
  },
];

export function FocusAreas() {
  const { t, lang } = useLanguage();
  const headFont = lang === "kn" ? "kn-display" : "font-display";
  const bodyFont = lang === "kn" ? "kn" : "";

  return (
    <section id="focus" className="rule-top bg-[color:var(--parchment)]/60">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="eyebrow">{t("Our Focus Areas", "ನಮ್ಮ ಕಾರ್ಯಕ್ಷೇತ್ರಗಳು")}</p>
          <h2
            className={`mt-4 max-w-[24ch] text-[2rem] leading-[1.14] md:text-[2.9rem] ${headFont}`}
          >
            {t(
              "Work carried out in the field, in classrooms and in public life.",
              "ಕ್ಷೇತ್ರದಲ್ಲಿ, ತರಗತಿಗಳಲ್ಲಿ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಜೀವನದಲ್ಲಿ ನಡೆಸುವ ಕಾರ್ಯ.",
            )}
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {focus.map((f, i) => (
            <Reveal as="li" key={f.t.en} delay={i * 70} className="bg-background p-7 md:p-9">
              <span className="font-display text-lg text-primary/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={`mt-3 text-[1.45rem] leading-tight md:text-[1.6rem] ${headFont}`}>
                {t(f.t.en, f.t.kn)}
              </h3>
              <p className={`mt-3 text-[0.9rem] leading-[1.8] text-muted-foreground ${bodyFont}`}>
                {t(f.d.en, f.d.kn)}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
