import { Reveal } from "./Reveal";

const objectives: { kn: string; en?: string }[] = [
  {
    kn: "ಸರ್ಕಾರದ ‘ಹೇಗೋ ಒಂದು ಆಡಳಿತ’ ಎಂಬುದರಿಂದ ‘ಸ್ವಯಂಪೂರ್ಣ ಆಡಳಿತ’ ಎಂಬೆಡೆಗೆ ನಡೆಯುವುದು",
  },
  {
    en: "Administering more professionalism in Government administration",
    kn: "ಪ್ರತಿಯೊಂದನ್ನು ಸರ್ಕಾರದ ಮೂಗಿನ ನೇರಕ್ಕೆ ನೋಡುವುದು. ಅಂದರೆ, ವ್ಯಕ್ತಿ, ಸಂಘ ಸಂಸ್ಥೆ, ವ್ಯವಸ್ಥೆ (ಪ್ರಜಾಪ್ರಭುತ್ವವು ಸೇರಿದಂತೆ) ಯಾವುದೂ ಸರ್ಕಾರಕ್ಕೆ ಹೊರೆಯಾಗಿರಬಾರದು.",
  },
  { kn: "ವಿಶ್ವಸಂಸ್ಥೆಗೆ ‘ವಿಶ್ವಸರ್ಕಾರ ದಿನ’ ವೊಂದನ್ನು ಘೋಷಿಸುವಂತೆ ಒತ್ತಾಯಿಸುವುದು" },
  {
    kn: "ಕೋಮು ಗಲಭೆಗಳಾಗುತ್ತಿರುವ ಸೂಕ್ಷ್ಮ ಪ್ರದೇಶಗಳಲ್ಲಿ ಶಾಂತಿ ಸಮಿತಿ ಯನ್ನು ರಚಿಸುವಂತೆ ಒತ್ತಾಯಿಸುವುದು,",
  },
  {
    kn: "ಪಠ್ಯಪುಸ್ತಕಗಳಲ್ಲಿ ‘ಸರ್ಕಾರ’ ಎಂಬ ಪಠ್ಯವನ್ನು ಅಳವಡಿಸುವಂತೆ ಸರ್ಕಾರವನ್ನು ಒತ್ತಾಯಿಸುವುದು.",
  },
  {
    kn: "ಸಾರ್ವಜನಿಕ ಸಭೆ, ವಿಚಾರ ಸಂಕೀರ್ಣಗಳನ್ನು ಏರ್ಪಡಿಸುವುದು. ಶಾಲಾ ಕಾಲೇಜುಗಳಲ್ಲಿ ಪ್ರಬಂಧ ಸ್ಪರ್ಧೆ, ಚರ್ಚಾಸ್ಪರ್ಧೆಗಳನ್ನು ಏರ್ಪಡಿಸುವುದರ ಮೂಲಕ ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ಸರ್ಕಾರದ ಬಗ್ಗೆ ಜಾಗೃತಿಯನ್ನುಂಟು ಮಾಡುವುದು.",
  },
  {
    kn: "ಬೇಜವಾಬ್ದಾರಿಯಾಗಿ ವರ್ತಿಸುವ ಟಿವಿ ಮಾಧ್ಯಮಗಳನ್ನು ನಿಯಂತ್ರಿಸುವಂತೆ ಸರ್ಕಾರವನ್ನು ಒತ್ತಾಯಿಸುವುದು",
  },
  { kn: "ರಾಷ್ಟ್ರಗೀತೆ ಇರುವ ಹಾಗೆ ಸರ್ಕಾರ ಗೀತೆಯೊಂದನ್ನು ರಚಿಸುವುದು" },
  {
    kn: "ಭಾರತೀಯ ಸಂಸ್ಕೃತಿ, ಸನಾತನ ಧರ್ಮ ಎಂಬ ಬುನಾದಿಯ ಮೇಲೆ ನಿಂತಿರುವ ಪ್ರಜಾಪ್ರಭುತ್ವದ ಹಂಗಿಲ್ಲದ ಸರ್ಕಾರೋ ರಕ್ಷತಿ ಕೇಂದ್ರಕ್ಕೆ ಮಾತ್ರ ಕೋಮುವಾರು ಸೌಹಾರ್ದವನ್ನು ತರಲು ಸಾಧ್ಯ.",
  },
  {
    kn: "ಪ್ರಜಾಪ್ರಭುತ್ವದ ಮತ ಯಾಚನೆಯ ಹಂಗಿಲ್ಲದ ಪ್ರಣಾಳಿಕೆಯನ್ನು ತಯಾರಿಸುವುದು ಕೇಂದ್ರದ ಉದ್ದೇಶ.",
  },
];

export function Objectives() {
  return (
    <section id="objectives" className="rule-top bg-[color:var(--parchment)]/60">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="eyebrow">ಮುಖ್ಯ ಉದ್ದೇಶಗಳು</p>
          <h2 className="kn-display mt-4 max-w-[24ch] text-[1.9rem] leading-[1.35] font-bold text-primary md:text-[2.8rem]">
            ಸರ್ಕಾರೋ ರಕ್ಷತಿ ಕೇಂದ್ರದ ಮುಖ್ಯ ಉದ್ದೇಶಗಳು
          </h2>
        </Reveal>

        <ol className="mx-auto mt-12 max-w-[900px] border-t border-border">
          {objectives.map((o, i) => (
            <Reveal as="li" key={i} delay={Math.min(i * 50, 300)} className="border-b border-border py-6 md:py-7">
              <div className="grid grid-cols-[2.2rem_1fr] gap-3 md:grid-cols-[3.5rem_1fr] md:gap-6">
                <span className="font-display text-xl text-accent/70 md:text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  {o.en ? (
                    <p className="mb-2 text-[0.9rem] font-medium tracking-wide text-primary">{o.en}</p>
                  ) : null}
                  <p className="kn text-[1rem] text-foreground/85 md:text-[1.08rem]">{o.kn}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
