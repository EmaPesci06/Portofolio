import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

export type Lang = "es" | "en";

interface LanguageContextValue {
  language: Lang;
  setLanguage: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: "es",
  setLanguage: () => {},
});

function getInitialLanguage(): Lang {
  const stored = localStorage.getItem("language");
  if (stored === "es" || stored === "en") return stored;
  return navigator.language.startsWith("es") ? "es" : "en";
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Lang>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Lang) => {
    localStorage.setItem("language", lang);
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
