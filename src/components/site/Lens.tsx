import treeAsset from "@/assets/tree.png.asset.json";
import { Reveal } from "./Reveal";

const problems = ["Corruption", "Non-professionalism", "Administrative weaknesses", "Systemic problems", "Political excuses"];
const direction = [
  "Professional administration",
  "Meaningful governance",
  "Practical solutions",
  "Better outcomes",
  "Public participation",
];

export function Lens() {
  return (
    <section id="lens" className="rule-top">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_0.85fr]">
          <Reveal>
            <p className="eyebrow">Governance Lens</p>
            <h2 className="mt-4 font-display text-[2.1rem] leading-[1.12] md:text-[3rem]">
              Every structure must survive one question:{" "}
              <span className="text-accent">is it necessary?</span>
            </h2>
            <p className="mt-6 text-[1rem] leading-[1.9] text-foreground/80">
              Governance has the authority to question the necessity of the Governor's office through the lens of
              Governance. The same lens is turned on every individual, organization and system — including the
              democracy system which we adopted.
            </p>
          </Reveal>

          <Reveal delay={120} className="flex justify-center">
            <div
              className="relative aspect-square w-[min(88%,380px)] overflow-hidden rounded-full border border-border"
              aria-hidden
            >
              <img
                src={treeAsset.url}
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
              The dried half — Problems
            </p>
            <ul className="mt-6">
              {problems.map((p) => (
                <li key={p} className="flex items-baseline gap-3 border-b border-border/70 py-3.5">
                  <span className="h-px w-5 shrink-0 bg-[color:var(--dried)]" />
                  <span className="font-display text-xl text-foreground/80 md:text-2xl">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="bg-background p-7 md:p-10">
            <p className="text-[0.7rem] tracking-[0.24em] text-[color:var(--living-deep)] uppercase">
              The living half — Desired direction
            </p>
            <ul className="mt-6">
              {direction.map((p) => (
                <li key={p} className="flex items-baseline gap-3 border-b border-border/70 py-3.5">
                  <span className="h-px w-5 shrink-0 bg-[color:var(--living)]" />
                  <span className="font-display text-xl md:text-2xl">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
