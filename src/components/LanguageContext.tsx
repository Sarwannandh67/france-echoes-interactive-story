
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

type LanguageType = "french" | "english";

interface LanguageContextType {
  language: LanguageType;
  toggleLanguage: () => void;
  setLanguage: (lang: LanguageType) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguageType>(
    (typeof window !== "undefined" &&
    (localStorage.getItem("language") === "english" || localStorage.getItem("language") === "french")
      ? (localStorage.getItem("language") as LanguageType)
      : "french")
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((lang) => (lang === "french" ? "english" : "french"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
