import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "kn";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: (en: string, kn: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "src-lang";

function readInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "kn" ? "kn" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang === "kn" ? "kn" : "en";
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang: setLangState,
      toggle: () => setLangState((l) => (l === "en" ? "kn" : "en")),
      t: (en: string, kn: string) => (lang === "kn" ? kn : en),
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

/** Shared chrome strings used across multiple components. */
export const nav = {
  home: { en: "Home", kn: "ಮುಖಪುಟ" },
  about: { en: "About", kn: "ಪರಿಚಯ" },
  roots: { en: "The Roots", kn: "ಬೇರುಗಳು" },
  governance: { en: "Governance", kn: "ಆಡಳಿತ" },
  mission: { en: "Mission", kn: "ಧ್ಯೇಯ" },
  focus: { en: "Focus Areas", kn: "ಕಾರ್ಯಕ್ಷೇತ್ರ" },
  lens: { en: "Governance Lens", kn: "ದೃಷ್ಟಿ" },
  objectives: { en: "Objectives", kn: "ಉದ್ದೇಶಗಳು" },
  contact: { en: "Contact", kn: "ಸಂಪರ್ಕ" },
};
