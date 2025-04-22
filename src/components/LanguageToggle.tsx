
import React from "react";
import { useLanguage } from "./LanguageContext";

const FLAGS = {
  french: "🇫🇷",
  english: "🇬🇧",
};

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle language"
      className="flex items-center gap-2 rounded-md border border-gray-300 bg-white dark:bg-gray-800 px-3 py-1 text-sm shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors select-none"
    >
      <span className="text-2xl">{FLAGS[language]}</span>
      <span className="font-medium">{language === "french" ? "Français" : "English"}</span>
    </button>
  );
};

export default LanguageToggle;
