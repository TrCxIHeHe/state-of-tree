import { Reveal } from "./Reveal";

const emotional = ["Culture", "Tradition", "Heritage", "Scriptures", "Beliefs"];
const practical = ["Population", "Resources", "Administration", "Communal issues", "Unemployment", "Law & Order"];

export function About() {
  return (
    <section id="about" className="rule-top bg-[color:var(--parchment)]/60">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="eyebrow">About the Kendra</p>
          <h2 className="mt-4 max-w-[22ch] font-display text-[2.1rem] leading-[1.12] md:text-[3rem]">
            Existing on the base of <span className="text-[color:var(--living-deep)]">Emotionality</span> and{" "}
            <span className="text-[color:var(--bark)]">Practicality</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
          <Reveal className="bg-background p-7 md:p-10">
            <p className="text-[0.7rem] tracking-[0.24em] text-[color:var(--living-deep)] uppercase">
              Emotional Foundation
            </p>
            <p className="mt-5 text-[0.95rem] leading-[1.85] text-foreground/80">
              Emotionality is related to our culture, tradition, heritage, scriptures and our beliefs — the living
              half of the tree, the part that still flowers.
            </p>
            <ul className="mt-7 divide-y divide-border">
              {emotional.map((t) => (
                <li key={t} className="flex items-baseline gap-3 py-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--living)]" />
                  <span className="font-display text-xl">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="bg-background p-7 md:p-10">
            <p className="text-[0.7rem] tracking-[0.24em] text-[color:var(--bark)] uppercase">Practical Reality</p>
            <p className="mt-5 text-[0.95rem] leading-[1.85] text-foreground/80">
              Practicality is related to today's existential situation and our problems — the bare half, the branches
              that dried because the root was neglected.
            </p>
            <ul className="mt-7 divide-y divide-border">
              {practical.map((t) => (
                <li key={t} className="flex items-baseline gap-3 py-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--dried)]" />
                  <span className="font-display text-xl text-foreground/85">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
