import { useState, type FormEvent, type MouseEvent } from "react";
import { useLanguage } from "@/lib/language";
import { Reveal } from "./Reveal";

const LOGO_SRC = "/brand/seal.png";
const QR_SRC = "/brand/donation-qr.png";
const CONTACT_EMAIL = "kendrasarkarorakshathi@gmail.com";

// The exact merchant VPA encoded in the printed donation QR (decoded from its
// EMV payload), so the "tap to pay" intent below opens the very same
// merchant account the QR itself points to.
const UPI_VPA = "MAB.037348059620015@AXISBANK";
const UPI_PAYEE_NAME = "Sarkaro Rakshathi Kendra";
const UPI_PARAMS = `pa=${encodeURIComponent(UPI_VPA)}&pn=${encodeURIComponent(UPI_PAYEE_NAME)}&cu=INR&tn=${encodeURIComponent("Donation")}`;
// Generic UPI intent — the one that shows a full app chooser, but only
// Android's browser actually resolves it that way.
const UPI_GENERIC_URL = `upi://pay?${UPI_PARAMS}`;
// iOS has no such chooser: each app only answers to its own custom scheme,
// so we offer them individually there.
const IOS_UPI_LINKS = [
  { name: "Google Pay", url: `gpay://upi/pay?${UPI_PARAMS}` },
  { name: "PhonePe", url: `phonepe://pay?${UPI_PARAMS}` },
  { name: "Paytm", url: `paytmmp://pay?${UPI_PARAMS}` },
] as const;

function isMobileDevice() {
  if (typeof navigator === "undefined") return false;
  return (
    /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent) ||
    ("ontouchstart" in window && window.innerWidth < 768)
  );
}

function isIOSDevice() {
  if (typeof navigator === "undefined") return false;
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

/** Navigates via a real, user-clicked anchor rather than assigning
 * location.href — some Android browsers/WebViews only honour a custom
 * URL scheme (upi://, gpay://, …) when it comes from an actual link click. */
function openAppLink(url: string) {
  const a = document.createElement("a");
  a.href = url;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/** On a phone: clicking opens the UPI app chooser (Android) or a short list
 * of app-specific links (iOS, which has no generic chooser) — no extra
 * confirmation step. On a laptop/desktop it's just the scannable QR. */
function PaymentQr() {
  const { t } = useLanguage();
  const [showIosChoices, setShowIosChoices] = useState(false);

  function handleActivate(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!isMobileDevice()) return;
    if (isIOSDevice()) {
      setShowIosChoices(true);
      return;
    }
    openAppLink(UPI_GENERIC_URL);
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleActivate}
        className="cursor-pointer border-0 bg-transparent p-0 text-left"
        aria-label={t("Click to pay with any UPI app", "ಯಾವುದೇ UPI ಆ್ಯಪ್‌ನೊಂದಿಗೆ ಪಾವತಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ")}
      >
        <img
          src={QR_SRC}
          alt="Scan or click to contribute — donation QR code for Sarkaro Rakshathi Kendra"
          className="h-40 w-40 border border-[color:var(--ivory)]/25 bg-[color:var(--ivory)] p-2 md:h-48 md:w-48"
          width={480}
          height={480}
        />
      </button>

      {showIosChoices && (
        <div className="mt-3 flex flex-wrap gap-2">
          {IOS_UPI_LINKS.map((app) => (
            <a
              key={app.name}
              href={app.url}
              className="border border-[color:var(--ivory)]/30 bg-[color:var(--ivory)]/10 px-3 py-2 text-[0.78rem] font-medium tracking-wide text-[color:var(--ivory)] transition-colors hover:bg-[color:var(--ivory)]/20"
            >
              {app.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function PaymentMessageForm() {
  const { t, lang } = useLanguage();
  const bodyFont = lang === "kn" ? "kn" : "";
  const [amount, setAmount] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const fieldClass =
    "w-full border-b border-[color:var(--ivory)]/25 bg-transparent px-0.5 py-2.5 text-[0.95rem] text-[color:var(--ivory)] placeholder:text-[color:var(--ivory)]/40 focus:border-[color:var(--ivory)]/70 focus:outline-none transition-colors";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = t("Payment confirmation", "ಪಾವತಿ ದೃಢೀಕರಣ");
    const bodyLines = [
      `${t("Amount paid", "ಪಾವತಿಸಿದ ಮೊತ್ತ")}: ₹${amount}`,
      `${t("Transaction ID", "ವಹಿವಾಟು ಐಡಿ")}: ${transactionId}`,
    ];
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div>
        <label
          htmlFor="paid-amount"
          className="text-[0.7rem] tracking-[0.2em] text-[color:var(--ivory)]/55 uppercase"
        >
          {t("Amount you paid", "ನೀವು ಪಾವತಿಸಿದ ಮೊತ್ತ")}
        </label>
        <input
          id="paid-amount"
          required
          inputMode="decimal"
          value={amount}
          onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ""))}
          className={fieldClass}
          placeholder={t("e.g. 500", "ಉದಾ. 500")}
        />
      </div>
      <div>
        <label
          htmlFor="paid-txn"
          className="text-[0.7rem] tracking-[0.2em] text-[color:var(--ivory)]/55 uppercase"
        >
          {t("Transaction number / ID", "ವಹಿವಾಟು ಸಂಖ್ಯೆ / ಐಡಿ")}
        </label>
        <input
          id="paid-txn"
          required
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          className={`${fieldClass} font-mono`}
          placeholder={t("UPI ref. / UTR number", "UPI ಉಲ್ಲೇಖ / UTR ಸಂಖ್ಯೆ")}
        />
      </div>
      <button
        type="submit"
        className={`mt-1 inline-flex w-fit items-center justify-center border border-[color:var(--ivory)]/40 bg-[color:var(--ivory)]/10 px-6 py-3 text-[0.82rem] font-medium tracking-wide text-[color:var(--ivory)] transition-colors hover:bg-[color:var(--ivory)]/20 ${bodyFont}`}
      >
        {t("Send", "ಕಳುಹಿಸಿ")}
      </button>
      <p className={`text-[0.78rem] leading-relaxed text-[color:var(--ivory)]/55 ${bodyFont}`}>
        {t(
          `This opens your mail app addressed to ${CONTACT_EMAIL}, prefilled with your payment details.`,
          `ಇದು ನಿಮ್ಮ ಮೇಲ್ ಆ್ಯಪ್ ಅನ್ನು ${CONTACT_EMAIL} ಗೆ ವಿಳಾಸ ಸಹಿತ, ನಿಮ್ಮ ಪಾವತಿ ವಿವರಗಳೊಂದಿಗೆ ತೆರೆಯುತ್ತದೆ.`,
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
              <p
                className={`mt-2 hidden max-w-[36ch] text-[0.95rem] leading-[1.8] text-[color:var(--ivory)]/75 md:block ${bodyFont}`}
              >
                {t(
                  "Scan the QR with any UPI app to contribute.",
                  "ಕೊಡುಗೆ ನೀಡಲು ಯಾವುದೇ UPI ಆ್ಯಪ್‌ನಿಂದ QR ಸ್ಕ್ಯಾನ್ ಮಾಡಿ.",
                )}
              </p>
              <p
                className={`mt-2 max-w-[36ch] text-[0.95rem] leading-[1.8] text-[color:var(--ivory)]/75 md:hidden ${bodyFont}`}
              >
                {t("Click the QR to pay.", "ಪಾವತಿಸಲು QR ಅನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ.")}
              </p>
            </div>
            <PaymentQr />
          </Reveal>

          <Reveal delay={100}>
            <p className="text-[0.72rem] tracking-[0.24em] text-[color:var(--ivory)]/60 uppercase">
              {t("Already paid? Let us know", "ಈಗಾಗಲೇ ಪಾವತಿಸಿದ್ದೀರಾ? ನಮಗೆ ತಿಳಿಸಿ")}
            </p>
            <div className="mt-4 max-w-[440px]">
              <PaymentMessageForm />
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
