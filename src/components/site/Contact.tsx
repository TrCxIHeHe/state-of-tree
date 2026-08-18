import { useLanguage } from "@/lib/language";
import { Reveal } from "./Reveal";

const LOGO_SRC = "/brand/logo.png";

export function Contact() {
  const { t, lang } = useLanguage();
  const headFont = lang === "kn" ? "kn-display" : "font-display";
  const bodyFont = lang === "kn" ? "kn" : "";

  return (
    <section id="contact" className="rule-top bg-[color:var(--royal)] text-[color:var(--ivory)]">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-14 md:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="text-[0.72rem] tracking-[0.24em] text-[color:var(--ivory)]/60 uppercase">
              {t("Get involved", "ಪಾಲ್ಗೊಳ್ಳಿ")}
            </p>
            <h2 className={`mt-4 text-[2.1rem] leading-[1.12] md:text-[3rem] ${headFont}`}>
              {t(
                "This concept is impossible without your involvement.",
                "ನಿಮ್ಮ ಪಾಲ್ಗೊಳ್ಳುವಿಕೆ ಇಲ್ಲದೆ ಈ ಪರಿಕಲ್ಪನೆ ಅಸಾಧ್ಯ.",
              )}
            </h2>
            <p
              className={`mt-6 text-[1rem] leading-[1.9] text-[color:var(--ivory)]/80 ${bodyFont}`}
            >
              {t(
                "Contribute your ideas, expertise and practical solutions as we build a manifesto powered by science, technology and ground realities. Please contribute generously for this cause.",
                "ವಿಜ್ಞಾನ, ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ನೆಲದ ವಾಸ್ತವಗಳ ಆಧಾರದ ಮೇಲೆ ಪ್ರಣಾಳಿಕೆಯನ್ನು ರೂಪಿಸಲು ನಿಮ್ಮ ಆಲೋಚನೆ, ಪರಿಣತಿ ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ಪರಿಹಾರಗಳನ್ನು ನೀಡಿ. ಈ ಉದ್ದೇಶಕ್ಕಾಗಿ ಉದಾರವಾಗಿ ಕೊಡುಗೆ ನೀಡಿ.",
              )}
            </p>
          </Reveal>

          <Reveal delay={120} className="text-[0.95rem] leading-[1.9]">
            <address className={`not-italic text-[color:var(--ivory)]/85 ${bodyFont}`}>
              {t(
                "# 373, JLR Chambers, MK Puttalingaiah Road (80 Ft. Road),",
                "# 373, ಜೆಎಲ್‌ಆರ್ ಚೇಂಬರ್ಸ್, ಎಂಕೆ ಪುಟ್ಟಲಿಂಗಯ್ಯ ರಸ್ತೆ (80 ಅಡಿ ರಸ್ತೆ),",
              )}
              <br />
              {t(
                "Padmanabhanagar, BSK III Stage, Bengaluru – 560 070",
                "ಪದ್ಮನಾಭನಗರ, ಬಿಎಸ್‌ಕೆ 3ನೇ ಹಂತ, ಬೆಂಗಳೂರು – 560 070",
              )}
              <br />
              {t("Beside Yogananda Hospital", "ಯೋಗಾನಂದ ಆಸ್ಪತ್ರೆಯ ಪಕ್ಕದಲ್ಲಿ")}
            </address>
            <dl className="mt-6 divide-y divide-[color:var(--ivory)]/15 border-y border-[color:var(--ivory)]/15">
              <div className="flex items-baseline justify-between gap-4 py-3">
                <dt className="text-[0.7rem] tracking-[0.2em] text-[color:var(--ivory)]/55 uppercase">
                  {t("Mobile", "ಮೊಬೈಲ್")}
                </dt>
                <dd>
                  <a
                    href="tel:+918073907460"
                    className="underline decoration-[color:var(--ivory)]/30 underline-offset-4"
                  >
                    8073907460
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-4 py-3">
                <dt className="text-[0.7rem] tracking-[0.2em] text-[color:var(--ivory)]/55 uppercase">
                  {t("E-mail", "ಇಮೇಲ್")}
                </dt>
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
                <dt className="text-[0.7rem] tracking-[0.2em] text-[color:var(--ivory)]/55 uppercase">
                  {t("Regn. No.", "ನೋಂದಣಿ ಸಂಖ್ಯೆ")}
                </dt>
                <dd>DRB4/SOR/136/2021-2022</dd>
              </div>
            </dl>
            <p className={`mt-6 text-xl ${headFont}`}>
              {t("H. S. Yoganarasimha", "ಎಚ್. ಎಸ್. ಯೋಗನರಸಿಂಹ")}{" "}
              <span className="text-[color:var(--ivory)]/60 italic">
                — {t("President", "ಅಧ್ಯಕ್ಷರು")}
              </span>
            </p>
          </Reveal>
        </div>
      </div>

      <footer className="border-t border-[color:var(--ivory)]/15">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:px-8">
          <img
            src={LOGO_SRC}
            alt=""
            className="h-10 w-auto opacity-90 brightness-0 invert"
            width={503}
            height={588}
          />
          <p className="text-[0.8rem] text-[color:var(--ivory)]/70">
            Sarkaro Rakshathi Kendra (R.) · ಸರ್ಕಾರೋ ರಕ್ಷತಿ ಕೇಂದ್ರ (ರಿ.) ·{" "}
            {t("A Watchdog of Government", "ಸರ್ಕಾರದ ಒಂದು ಕಾವಲುಗಾರ")}
          </p>
          <p className="kn text-[0.8rem] text-[color:var(--ivory)]/55 md:ml-auto">
            ಸರ್ಕಾರೋ ರಕ್ಷತಿ ರಕ್ಷಿತಃ
          </p>
        </div>
      </footer>
    </section>
  );
}
