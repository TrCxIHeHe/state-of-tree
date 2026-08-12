import logoAsset from "@/assets/logo.png.asset.json";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="rule-top bg-[color:var(--royal)] text-[color:var(--ivory)]">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-14 md:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="text-[0.72rem] tracking-[0.24em] text-[color:var(--ivory)]/60 uppercase">Get involved</p>
            <h2 className="mt-4 font-display text-[2.1rem] leading-[1.12] md:text-[3rem]">
              This concept is impossible without your involvement.
            </h2>
            <p className="mt-6 text-[1rem] leading-[1.9] text-[color:var(--ivory)]/80">
              Contribute your ideas, expertise and practical solutions as we build a manifesto powered by science,
              technology and ground realities. Please contribute generously for this cause.
            </p>
          </Reveal>

          <Reveal delay={120} className="text-[0.95rem] leading-[1.9]">
            <address className="not-italic text-[color:var(--ivory)]/85">
              # 373, JLR Chambers, MK Puttalingaiah Road (80 Ft. Road),
              <br />
              Padmanabhanagar, BSK III Stage, Bengaluru – 560 070
              <br />
              Beside Yogananda Hospital
            </address>
            <dl className="mt-6 divide-y divide-[color:var(--ivory)]/15 border-y border-[color:var(--ivory)]/15">
              <div className="flex items-baseline justify-between gap-4 py-3">
                <dt className="text-[0.7rem] tracking-[0.2em] text-[color:var(--ivory)]/55 uppercase">Mobile</dt>
                <dd>
                  <a href="tel:+918073907460" className="underline decoration-[color:var(--ivory)]/30 underline-offset-4">
                    8073907460
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-4 py-3">
                <dt className="text-[0.7rem] tracking-[0.2em] text-[color:var(--ivory)]/55 uppercase">E-mail</dt>
                <dd>
                  <a
                    href="mailto:kendrasarkarorakshathi@gmail.com"
                    className="break-all underline decoration-[color:var(--ivory)]/30 underline-offset-4"
                  >
                    kendrasarkarorakshathi@gmail.com
                  </a>
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-3">
                <dt className="text-[0.7rem] tracking-[0.2em] text-[color:var(--ivory)]/55 uppercase">Regn. No.</dt>
                <dd>DRB4/SOR/136/2021-2022</dd>
              </div>
            </dl>
            <p className="mt-6 font-display text-xl">
              H. S. Yoganarasimha <span className="text-[color:var(--ivory)]/60 italic">— President</span>
            </p>
            <p className="kn text-sm text-[color:var(--ivory)]/70">ಯೋಗನರಸಿಂಹ, ಅಧ್ಯಕ್ಷರು</p>
          </Reveal>
        </div>
      </div>

      <footer className="border-t border-[color:var(--ivory)]/15">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:px-8">
          <img src={logoAsset.url} alt="" className="h-10 w-auto opacity-90" width={80} height={93} />
          <p className="text-[0.8rem] text-[color:var(--ivory)]/70">
            Sarkaro Rakshathi Kendra (R.) · ಸರ್ಕಾರೋ ರಕ್ಷತಿ ಕೇಂದ್ರ (ರಿ.) · A Watchdog of Government
          </p>
          <p className="kn text-[0.8rem] text-[color:var(--ivory)]/55 md:ml-auto">ಸರ್ಕಾರೋ ರಕ್ಷತಿ ರಕ್ಷಿತಃ</p>
        </div>
      </footer>
    </section>
  );
}
