import { useEffect, useState } from "react";
import { nav, useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/brand/seal.png";

const links = [
  { href: "#about", label: nav.about },
  { href: "#roots", label: nav.roots },
  { href: "#governance", label: nav.governance },
  { href: "#mission", label: nav.mission },
  { href: "#focus", label: nav.focus },
  { href: "#lens", label: nav.lens },
  { href: "#objectives", label: nav.objectives },
  { href: "#contact", label: nav.contact },
];

function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  return (
    <div
      className={cn(
        "inline-flex items-center border border-border text-[0.7rem] font-medium tracking-wide",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-2.5 py-1.5 transition-colors ${
          lang === "en"
            ? "bg-primary text-primary-foreground"
            : "text-foreground/70 hover:text-primary"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("kn")}
        aria-pressed={lang === "kn"}
        className={`kn px-2.5 py-1.5 transition-colors ${
          lang === "kn"
            ? "bg-primary text-primary-foreground"
            : "text-foreground/70 hover:text-primary"
        }`}
      >
        ಕನ್ನಡ
      </button>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "border-b border-border bg-background/92 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center gap-4 px-5 py-3 md:px-8 md:py-4">
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label="Sarkaro Rakshathi Kendra home"
        >
          <img
            src={LOGO_SRC}
            alt="Sarkaro Rakshathi Kendra official seal: a tree, half flowering and half bare, rooted between a watchdog's raised hands"
            className="h-12 w-auto md:h-14"
            width={700}
            height={705}
          />
          <span className="leading-tight">
            <span className="kn-display block text-[0.95rem] font-semibold text-primary md:text-base">
              ಸರ್ಕಾರೋ ರಕ್ಷತಿ ಕೇಂದ್ರ <span className="font-normal">(ರಿ.)</span>
            </span>
            <span className="block text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase md:text-[0.68rem]">
              Sarkaro Rakshathi Kendra (R.)
            </span>
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-6 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.82rem] font-medium text-foreground/75 transition-colors hover:text-primary"
            >
              {t(l.label.en, l.label.kn)}
            </a>
          ))}
        </nav>

        <LanguageToggle className="ml-auto hidden lg:inline-flex" />

        <button
          type="button"
          className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-border lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-[1.5px] w-5 bg-foreground transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-foreground transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-background lg:hidden"
      >
        <nav className="mx-auto max-w-[1240px] px-5 py-4" aria-label="Mobile">
          <LanguageToggle className="mb-4" />
          <ul className="divide-y divide-border">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-3.5 text-base text-foreground"
                >
                  <span>{t(l.label.en, l.label.kn)}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
