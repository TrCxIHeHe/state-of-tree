import { Reveal } from "./Reveal";

const steps = [
  { n: "01", t: "Administration", d: "“Somehow, some administration” — the state the source material rejects." },
  { n: "02", t: "Professionalism", d: "Administering more professionalism in Government administration." },
  { n: "03", t: "Meaningful Governance", d: "Full fledged administration, seen from the government's point of view." },
  { n: "04", t: "Results", d: "More result oriented — outcomes instead of political excuses." },
  { n: "05", t: "Public Trust", d: "More acceptable, more approachable — impossible without your involvement." },
];

export function Mission() {
  return (
    <section id="mission" className="rule-top">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">Our Mission</p>
            <h2 className="mt-4 font-display text-[2rem] leading-[1.15] md:text-[2.9rem]">
              “Administering more professionalism in Government administration”
            </h2>
            <p className="kn mt-6 text-[0.95rem] text-foreground/75">
              ಸರ್ಕಾರದ ‘ಹೇಗೋ ಒಂದು ಆಡಳಿತ’ ಎಂಬುದರಿಂದ ‘ಸ್ವಯಂಪೂರ್ಣ ಆಡಳಿತ’ ಎಂಬೆಡೆಗೆ ನಡೆಯುವುದು.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[1rem] leading-[1.9] text-foreground/80">
              This is the concept of the Kendra: to move from somehow-administration to full fledged administration. It
              means to see everything from the government's point of view — whether it is an individual, an organization
              or a system (the democracy system which we adopted).
            </p>

            <ol className="mt-10 border-t border-border">
              {steps.map((s, i) => (
                <li key={s.n} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-border py-5 md:gap-8">
                  <span className="font-display text-2xl text-primary/45">{s.n}</span>
                  <div>
                    <p
                      className="font-display text-xl md:text-2xl"
                      style={{
                        color: `color-mix(in oklab, var(--living-deep) ${i * 22}%, var(--bark))`,
                      }}
                    >
                      {s.t}
                    </p>
                    <p className="mt-1.5 text-[0.9rem] leading-[1.75] text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 font-display text-2xl text-accent">
              Impossible to make this concept — without your involvement.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
