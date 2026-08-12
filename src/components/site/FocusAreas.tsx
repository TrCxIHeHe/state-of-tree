import { Reveal } from "./Reveal";

const focus = [
  {
    t: "Elevating Government Administration",
    d: "Elevating Government Administration is the solution for the country's problems.",
  },
  {
    t: "Creating Awareness",
    d: "Through seminars, public speeches, exhibitions, road shows etc.",
  },
  {
    t: "“World Government's Day”",
    d: "Urge UNO to declare one day as “World Government's Day”.",
    kn: "ವಿಶ್ವಸಂಸ್ಥೆಗೆ ‘ವಿಶ್ವಸರ್ಕಾರ ದಿನ’ ವೊಂದನ್ನು ಘೋಷಿಸುವಂತೆ ಒತ್ತಾಯಿಸುವುದು",
  },
  {
    t: "Government as a Lesson",
    d: "Insist the government to inculcate Government as a lesson in text books.",
  },
  {
    t: "Awareness Amongst Students",
    d: "Debates, essay competitions and other activities on the subject of “Governance”.",
  },
  {
    t: "Bringing Communal Harmony",
    d: "Urging peace committees in sensitive areas where communal disturbances occur.",
    kn: "ಕೋಮು ಗಲಭೆಗಳಾಗುತ್ತಿರುವ ಸೂಕ್ಷ್ಮ ಪ್ರದೇಶಗಳಲ್ಲಿ ಶಾಂತಿ ಸಮಿತಿ ಯನ್ನು ರಚಿಸುವಂತೆ ಒತ್ತಾಯಿಸುವುದು",
  },
];

export function FocusAreas() {
  return (
    <section id="focus" className="rule-top bg-[color:var(--parchment)]/60">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="eyebrow">Our Focus Areas</p>
          <h2 className="mt-4 max-w-[24ch] font-display text-[2rem] leading-[1.14] md:text-[2.9rem]">
            Work carried out in the field, in classrooms and in public life.
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {focus.map((f, i) => (
            <Reveal as="li" key={f.t} delay={i * 70} className="bg-background p-7 md:p-9">
              <span className="font-display text-lg text-primary/40">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display text-[1.45rem] leading-tight md:text-[1.6rem]">{f.t}</h3>
              <p className="mt-3 text-[0.9rem] leading-[1.8] text-muted-foreground">{f.d}</p>
              {f.kn ? <p className="kn mt-3 text-[0.85rem] text-foreground/70">{f.kn}</p> : null}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
