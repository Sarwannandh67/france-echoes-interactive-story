
import React, { useEffect, useState } from "react"
import { useBilingualToggle } from "@/hooks/useBilingualToggle"

const FLAGS = {
  french: "🇫🇷",
  english: "🇬🇧",
}

const LanguageToggle = () => {
  const { language, toggleLanguage } = useBilingualToggle(
    // Persist initial language from localStorage or default to french
    (typeof window !== "undefined" &&
    (localStorage.getItem("language") === "english" || localStorage.getItem("language") === "french")
      ? (localStorage.getItem("language") as "french" | "english")
      : "french")
  )

  // Save language in localStorage
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle language"
      className="flex items-center gap-2 rounded-md border border-gray-300 bg-white dark:bg-gray-800 px-3 py-1 text-sm shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors select-none"
    >
      <span className="text-2xl">{FLAGS[language]}</span>
      <span className="font-medium">{language === "french" ? "Français" : "English"}</span>
    </button>
  )
}

export default LanguageToggle

