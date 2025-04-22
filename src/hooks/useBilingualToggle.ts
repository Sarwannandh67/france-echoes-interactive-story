
import { useState } from "react";

export function useBilingualToggle(initial: "french" | "english" = "french") {
  const [language, setLanguage] = useState<"french" | "english">(initial);

  const toggleLanguage = () => {
    setLanguage((lang) => (lang === "french" ? "english" : "french"));
  };

  return {
    language,
    toggleLanguage,
  };
}

