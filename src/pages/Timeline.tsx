
import React from "react";
import { useLanguage } from "../components/LanguageContext";

const timelineEvents = [
  {
    year: "58-50 BC",
    french: "Conquête de la Gaule par Jules César",
    english: "Julius Caesar's conquest of Gaul",
  },
  {
    year: "1337-1453",
    french: "Guerre de Cent Ans",
    english: "Hundred Years' War",
  },
  {
    year: "16ème siècle",
    french: "La Renaissance en France",
    english: "The Renaissance in France",
  },
  {
    year: "1643-1715",
    french: "Règne de Louis XIV, le Roi Soleil",
    english: "Reign of Louis XIV, the Sun King",
  },
  {
    year: "1815",
    french: "Bataille de Waterloo",
    english: "Battle of Waterloo",
  },
  {
    year: "1945",
    french: "Fin de la Seconde Guerre mondiale",
    english: "End of World War II",
  },
  {
    year: "1968",
    french: "Protestations de Mai 1968",
    english: "May 1968 Protests",
  },
];

const Timeline = () => {
  const { language } = useLanguage();
  return (
    <main className="pt-24 px-4 sm:px-8 md:px-16 max-w-5xl mx-auto min-h-screen">
      <h1 className="text-4xl font-playfair font-bold mb-8 text-center">
        {language === "french" ? "Chronologie de l'Histoire de France" : "Timeline of French History"}
      </h1>
      <ol className="border-l-2 border-primary dark:border-primary-foreground ml-4">
        {timelineEvents.map((event, idx) => (
          <li key={idx} className="mb-8 ml-6 relative mt-2">
            <span className="absolute -left-4 top-1 w-4 h-4 rounded-full bg-primary dark:bg-primary-foreground border border-white dark:border-gray-900"></span>
            <time className="mb-1 text-primary font-semibold block">
              {event.year}
            </time>
            <p className="text-gray-700 dark:text-gray-300">
              {language === "french" ? event.french : event.english}
            </p>
          </li>
        ))}
      </ol>
    </main>
  );
};

export default Timeline;

