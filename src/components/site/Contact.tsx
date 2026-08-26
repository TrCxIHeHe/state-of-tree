import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/language";
import { Reveal } from "./Reveal";

const LOGO_SRC = "/brand/seal.png";
const QR_SRC = "/brand/donation-qr.png";
const CONTACT_EMAIL = "kendrasarkarorakshathi@gmail.com";

function DonationForm() {
  const { t, lang } = useLanguage();
  const bodyFont = lang === "kn" ? "kn" : "";
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const fieldClass =
    "w-full border-b border-[color:var(--ivory)]/25 bg-transparent px-0.5 py-2.5 text-[0.95rem] text-[color:var(--ivory)] placeholder:text-[color:var(--ivory)]/40 focus:border-[color:var(--ivory)]/70 focus:outline-none transition-colors";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = t("Contribution enquiry", "ಕೊಡುಗೆ ವಿಚಾರಣೆ");
    const bodyLines = [
      `${t("Name", "ಹೆಸರು")}: ${name}`,
      `${t("Contact", "ಸಂಪರ್ಕ")}: ${contact}`,
      message ? `${t("Message", "ಸಂದೇಶ")}: ${message}` : "",
    ].filter(Boolean);
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div>
        <label htmlFor="donor-name" className="text-[0.7rem] tracking-[0.2em] text-[color:var(--ivory)]/55 uppercase">
          {t("Name", "ಹೆಸರು")}
        </label>
        <input
          id="donor-name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={fieldClass}
          placeholder={t("Your name", "ನಿಮ್ಮ ಹೆಸರು")}
        />
      </div>
      <div>
        <label htmlFor="donor-contact" className="text-[0.7rem] tracking-[0.2em] text-[color:var(--ivory)]/55 uppercase">
          {t("Contact", "ಸಂಪರ್ಕ")}
        </label>
        <input
          id="donor-contact"
          required
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className={fieldClass}
          placeholder={t("Phone or e-mail", "ಫೋನ್ ಅಥವಾ ಇಮೇಲ್")}
        />
      </div>
      <div>
        <label htmlFor="donor-message" className="text-[0.7rem] tracking-[0.2em] text-[color:var(--ivory)]/55 uppercase">
          {t("Message", "ಸಂದೇಶ")}{" "}
          <span className="normal-case text-[color:var(--ivory)]/40">
            ({t("optional", "ಐಚ್ಛಿಕ")})
          </span>
        </label>
        <textarea
          id="donor-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className={`${fieldClass} resize-none`}
          placeholder={t("Anything you'd like us to know", "ನೀವು ತಿಳಿಸಲು ಬಯಸುವುದೇನಾದರೂ")}
        />
      </div>
      <button
        type="submit"
        className={`mt-1 inline-flex w-fit items-center justify-center border border-[color:var(--ivory)]/40 bg-[color:var(--ivory)]/10 px-6 py-3 text-[0.82rem] font-medium tracking-wide text-[color:var(--ivory)] transition-colors hover:bg-[color:var(--ivory)]/20 ${bodyFont}`}
      >
        {t("Send details", "ವಿವರಗಳನ್ನು ಕಳುಹಿಸಿ")}
      </button>
      <p className={`text-[0.78rem] leading-relaxed text-[color:var(--ivory)]/55 ${bodyFont}`}>
        {t(
          `This opens your mail app addressed to ${CONTACT_EMAIL}, prefilled with your details.`,
          `ಇದು ನಿಮ್ಮ ಮೇಲ್ ಆ್ಯಪ್ ಅನ್ನು ${CONTACT_EMAIL} ಗೆ ವಿಳಾಸ ಸಹಿತ, ನಿಮ್ಮ ವಿವರಗಳೊಂದಿಗೆ ತೆರೆಯುತ್ತದೆ.`,
        )}
      </p>
    </form>
  );
}

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

        <div className="mt-16 grid gap-10 border-t border-[color:var(--ivory)]/15 pt-14 md:mt-20 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:pt-16">
          <Reveal className="flex flex-col items-start gap-5">
            <div>
              <p className="text-[0.72rem] tracking-[0.24em] text-[color:var(--ivory)]/60 uppercase">
                {t("Contribute generously", "ಉದಾರವಾಗಿ ಕೊಡುಗೆ ನೀಡಿ")}
              </p>
              <p className={`mt-2 max-w-[36ch] text-[0.95rem] leading-[1.8] text-[color:var(--ivory)]/75 ${bodyFont}`}>
                {t(
                  "Scan the QR code to contribute directly for this cause.",
                  "ಈ ಉದ್ದೇಶಕ್ಕಾಗಿ ನೇರವಾಗಿ ಕೊಡುಗೆ ನೀಡಲು ಕ್ಯೂಆರ್ ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ.",
                )}
              </p>
            </div>
            <img
              src={QR_SRC}
              alt="Scan to contribute — donation QR code for Sarkaro Rakshathi Kendra"
              className="h-40 w-40 border border-[color:var(--ivory)]/25 bg-[color:var(--ivory)] p-2 md:h-48 md:w-48"
              width={480}
              height={480}
            />
          </Reveal>

          <Reveal delay={100}>
            <p className="text-[0.72rem] tracking-[0.24em] text-[color:var(--ivory)]/60 uppercase">
              {t("Or leave your details", "ಅಥವಾ ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಬಿಡಿ")}
            </p>
            <div className="mt-4 max-w-[440px]">
              <DonationForm />
            </div>
          </Reveal>
        </div>
      </div>

      <footer className="border-t border-[color:var(--ivory)]/15">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:px-8">
          <img
            src={LOGO_SRC}
            alt=""
            className="h-12 w-auto opacity-95"
            width={700}
            height={705}
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
