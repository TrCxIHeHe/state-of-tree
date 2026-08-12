import { useEffect, useState } from "react";
import treeAsset from "@/assets/tree.png.asset.json";

export function Hero() {
  const [y, setY] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" className="grain relative overflow-hidden pt-24 md:pt-28">
      {/* left living wash / right dried wash */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--living)_7%,transparent),transparent_70%)]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--dried)_9%,transparent),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="animate-rise">
          <p className="eyebrow">Regn. No.: DRB4/SOR/136/2021-2022</p>
          <h1 className="mt-4 max-w-[16ch]">
            <span className="kn-display block text-[2.35rem] leading-[1.12] font-bold text-primary sm:text-[3.2rem] md:text-[4rem]">
              ಸರ್ಕಾರೋ ರಕ್ಷತಿ ಕೇಂದ್ರ
            </span>
            <span className="mt-2 block font-sans text-[0.78rem] tracking-[0.28em] text-foreground/70 uppercase md:text-sm">
              Sarkaro Rakshathi Kendra (R.)
            </span>
          </h1>
          <p className="mt-3 font-display text-lg text-accent italic md:text-xl">A Watchdog of Government</p>
        </div>

        {/* tree stage */}
        <div className="relative mt-6 md:mt-2">
          <div className="pointer-events-none absolute inset-x-0 top-[8%] z-0 flex justify-center md:top-[14%]">
            <p className="font-display text-[19vw] leading-none tracking-[-0.02em] text-primary/[0.09] select-none md:text-[13rem] lg:text-[16rem]">
              GOVERNANCE
            </p>
          </div>

          <figure
            className="relative z-10 mx-auto w-[min(96%,780px)]"
            style={{ transform: `translate3d(0,${Math.min(y * 0.06, 60)}px,0)` }}
          >
            <img
              src={treeAsset.url}
              alt="A tree that is green, flowering and fruiting on one half and bare and dried on the other half — a nation whose governance is half alive"
              className="animate-sway h-auto w-full drop-shadow-[0_30px_60px_color-mix(in_oklab,var(--bark)_18%,transparent)]"
              width={1220}
              height={1332}
              fetchPriority="high"
            />
            <figcaption className="sr-only">
              A nation is like a tree and the governance is its root.
            </figcaption>
          </figure>

          {/* ground line */}
          <div className="relative z-10 mx-auto -mt-1 h-px w-[min(96%,900px)] bg-border" />

          {/* side labels */}
          <div className="relative z-10 mx-auto grid w-[min(96%,900px)] grid-cols-2 gap-6 pt-5">
            <div className="text-left">
              <p className="text-[0.68rem] tracking-[0.24em] text-[color:var(--living-deep)] uppercase">
                Positive to the Government
              </p>
              <p className="kn mt-1 text-sm text-foreground/75">ಸರ್ಕಾರದೊಂದಿಗೆ ಸಕಾರಾತ್ಮಕವಾಗಿ ಇರುವವರಿಗೆ</p>
            </div>
            <div className="text-right">
              <p className="text-[0.68rem] tracking-[0.24em] text-[color:var(--dried)] uppercase">
                Negative to the Government
              </p>
              <p className="kn mt-1 text-sm text-foreground/75">ಸರ್ಕಾರದೊಂದಿಗೆ ನಕಾರಾತ್ಮಕವಾಗಿ ಇರುವವರಿಗೆ</p>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-[1000px] gap-8 py-14 md:grid-cols-[1.15fr_0.85fr] md:py-20">
          <h2 className="font-display text-[2rem] leading-[1.14] text-foreground sm:text-[2.6rem] md:text-[3.1rem]">
            A <span className="text-[color:var(--living-deep)]">nation</span> is like a tree
            <span className="text-muted-foreground"> — and the </span>
            <span className="text-accent">Governance</span> is its root.
          </h2>
          <div className="md:pt-3">
            <p className="text-[0.95rem] leading-[1.85] text-foreground/80">
              Governance — one word, one point programme. Where the root is starved by corruption and
              non-professionalism, the branches dry. Where the root is tended by professional, full-fledged
              administration, the tree flowers and bears fruit.
            </p>
            <p className="kn mt-4 text-[0.95rem] text-foreground/75">
              ಸರ್ಕಾರೋ ರಕ್ಷತಿ ರಕ್ಷಿತಃ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
