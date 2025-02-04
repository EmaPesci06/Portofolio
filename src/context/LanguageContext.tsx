import { createContext, useState, useEffect, useContext } from "react";

const LanguageContext = createContext({});

export const LanguageProvider = ({ children }: { children: any }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0]; // Detecta el idioma del navegador
    setLanguage(browserLang === "es" ? "es" : "en"); // Usa "es" si el navegador está en español, sino "en"
  }, []);

  return (
    <LanguageContext.Provider value={{ language }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
