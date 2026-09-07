import { useLanguage } from "@/lib/language";
import { Reveal } from "./Reveal";

const objectives: { en: string; kn: string }[] = [
  {
    en: "To move from the government's ‘some how administration’ towards ‘full fledged administration’.",
    kn: "ಸರ್ಕಾರದ ‘ಹೇಗೋ ಒಂದು ಆಡಳಿತ’ ಎಂಬುದರಿಂದ ‘ಸ್ವಯಂಪೂರ್ಣ ಆಡಳಿತ’ ಎಂಬೆಡೆಗೆ ನಡೆಯುವುದು",
  },
  {
    en: "Administering more professionalism in Government administration — to see everything from the government's point of view. That is, no individual, organization, or system (including democracy) should be a burden on the government.",
    kn: "ಪ್ರತಿಯೊಂದನ್ನು ಸರ್ಕಾರದ ಮೂಗಿನ ನೇರಕ್ಕೆ ನೋಡುವುದು. ಅಂದರೆ, ವ್ಯಕ್ತಿ, ಸಂಘ ಸಂಸ್ಥೆ, ವ್ಯವಸ್ಥೆ (ಪ್ರಜಾಪ್ರಭುತ್ವವು ಸೇರಿದಂತೆ) ಯಾವುದೂ ಸರ್ಕಾರಕ್ಕೆ ಹೊರೆಯಾಗಿರಬಾರದು.",
  },
  {
    en: "To urge the United Nations to declare one day as “World Governance Day”.",
    kn: "ವಿಶ್ವಸಂಸ್ಥೆಗೆ ‘ವಿಶ್ವ ಆಡಳಿತ ದಿನ’ ವೊಂದನ್ನು ಘೋಷಿಸುವಂತೆ ಒತ್ತಾಯಿಸುವುದು",
  },
  {
    en: "To urge that peace committees be formed in sensitive areas where communal disturbances occur.",
    kn: "ಕೋಮು ಗಲಭೆಗಳಾಗುತ್ತಿರುವ ಸೂಕ್ಷ್ಮ ಪ್ರದೇಶಗಳಲ್ಲಿ ಶಾಂತಿ ಸಮಿತಿ ಯನ್ನು ರಚಿಸುವಂತೆ ಒತ್ತಾಯಿಸುವುದು,",
  },
  {
    en: "To urge the government to inculcate the text “Governance” in text books, as a lesson.",
    kn: "ಪಠ್ಯಪುಸ್ತಕಗಳಲ್ಲಿ ‘ಆಡಳಿತ’ ಎಂಬ ಪಠ್ಯವನ್ನು ಒಂದು ಪಾಠವಾಗಿ ಅಳವಡಿಸುವಂತೆ ಸರ್ಕಾರವನ್ನು ಒತ್ತಾಯಿಸುವುದು.",
  },
  {
    en: "To organise public meetings and seminars, and to bring awareness amongst students by conducting debates, essay competition and other activities on the subject of ‘Governance’",
    kn: "ಆಡಳಿತ (Governance) ವಿಷಯದ ಕುರಿತು ಸಾರ್ವಜನಿಕ ಸಭೆಗಳು ಮತ್ತು ವಿಚಾರಸಂಕಿರಣಗಳನ್ನು ಆಯೋಜಿಸುವುದು, ಹಾಗೂ ಚರ್ಚಾಸ್ಪರ್ಧೆಗಳು, ಪ್ರಬಂಧ ಸ್ಪರ್ಧೆಗಳು ಮತ್ತು ಇತರ ಚಟುವಟಿಕೆಗಳನ್ನು ನಡೆಸುವ ಮೂಲಕ ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ಜಾಗೃತಿ ಮೂಡಿಸುವುದು.",
  },
  {
    en: "To urge the government to regulate TV media that acts irresponsibly.",
    kn: "ಬೇಜವಾಬ್ದಾರಿಯಾಗಿ ವರ್ತಿಸುವ ಟಿವಿ ಮಾಧ್ಯಮಗಳನ್ನು ನಿಯಂತ್ರಿಸುವಂತೆ ಸರ್ಕಾರವನ್ನು ಒತ್ತಾಯಿಸುವುದು",
  },
  {
    en: "To compose a Government anthem, just as a national anthem exists.",
    kn: "ರಾಷ್ಟ್ರಗೀತೆ ಇರುವ ಹಾಗೆ ಸರ್ಕಾರ ಗೀತೆಯೊಂದನ್ನು ರಚಿಸುವುದು",
  },
  {
    en: "Only a Sarkaro Rakshathi Kendra free of democracy's obligations, standing on the foundation of Indian culture and Sanatana Dharma, can bring communal harmony.",
    kn: "ಭಾರತೀಯ ಸಂಸ್ಕೃತಿ, ಸನಾತನ ಧರ್ಮ ಎಂಬ ಬುನಾದಿಯ ಮೇಲೆ ನಿಂತಿರುವ ಪ್ರಜಾಪ್ರಭುತ್ವದ ಹಂಗಿಲ್ಲದ ಸರ್ಕಾರೋ ರಕ್ಷತಿ ಕೇಂದ್ರಕ್ಕೆ ಮಾತ್ರ ಕೋಮುವಾರು ಸೌಹಾರ್ದವನ್ನು ತರಲು ಸಾಧ್ಯ.",
  },
  {
    en: "It is the Kendra's objective to prepare a manifesto free of the obligations of democracy's vote-seeking.",
    kn: "ಪ್ರಜಾಪ್ರಭುತ್ವದ ಮತ ಯಾಚನೆಯ ಹಂಗಿಲ್ಲದ ಪ್ರಣಾಳಿಕೆಯನ್ನು ತಯಾರಿಸುವುದು ಕೇಂದ್ರದ ಉದ್ದೇಶ.",
  },
];

export function Objectives() {
  const { t, lang } = useLanguage();
  const headFont = lang === "kn" ? "kn-display" : "font-display";

  return (
    <section id="objectives" className="rule-top bg-[color:var(--parchment)]/60">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="eyebrow">{t("Main Objectives", "ಮುಖ್ಯ ಉದ್ದೇಶಗಳು")}</p>
          <h2
            className={`mt-4 max-w-[24ch] text-[1.9rem] leading-[1.35] font-bold text-primary md:text-[2.8rem] ${headFont}`}
          >
            {t(
              "The main objectives of Sarkaro Rakshathi Kendra",
              "ಸರ್ಕಾರೋ ರಕ್ಷತಿ ಕೇಂದ್ರದ ಮುಖ್ಯ ಉದ್ದೇಶಗಳು",
            )}
          </h2>
        </Reveal>

        <ol className="mx-auto mt-12 max-w-[900px] border-t border-border">
          {objectives.map((o, i) => (
            <Reveal
              as="li"
              key={i}
              delay={Math.min(i * 50, 300)}
              className="border-b border-border py-6 md:py-7"
            >
              <div className="grid grid-cols-[2.2rem_1fr] gap-3 md:grid-cols-[3.5rem_1fr] md:gap-6">
                <span className="font-display text-xl text-accent/70 md:text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className={
                    lang === "kn"
                      ? "kn text-[1rem] text-foreground/85 md:text-[1.08rem]"
                      : "text-[1rem] text-foreground/85 md:text-[1.08rem]"
                  }
                >
                  {t(o.en, o.kn)}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
