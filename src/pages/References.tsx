
import React from "react";
import ReferenceSection from "@/components/ReferenceSection";
import { useLanguage } from "@/components/LanguageContext";

const wikiLogo = "/logos/wikipedia.png";
const britLogo = "/logos/britannica.png";
const historyLogo = "/logos/historycom.png";

// Example references, you can expand as needed
const allReferences = [
  {
    name: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Julius_Caesar",
    citation: {
      french: '"Jules César." Wikipédia, l\'encyclopédie libre.',
      english: '"Julius Caesar." Wikipedia, The Free Encyclopedia.',
    },
    logoUrl: wikiLogo,
  },
  {
    name: "Britannica",
    url: "https://www.britannica.com/biography/Julius-Caesar",
    citation: {
      french: '"Jules César." Encyclopédie Britannica.',
      english: '"Julius Caesar." Encyclopedia Britannica.',
    },
    logoUrl: britLogo,
  },
  {
    name: "History.com",
    url: "https://www.history.com/topics/ancient-rome/julius-caesar",
    citation: {
      french: '"Biographie de Jules César" History.com Éditeurs.',
      english: '"Julius Caesar Biography" History.com Editors.',
    },
    logoUrl: historyLogo,
  },
  // Add more references as appropriate
];

const ReferencesPage = () => {
  const { language } = useLanguage();

  // Map references citations per language
  const references = allReferences.map((ref) => ({
    name: ref.name,
    url: ref.url,
    citation: language === "french" ? ref.citation.french : ref.citation.english,
    logoUrl: ref.logoUrl,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-white to-purple-200 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-charcoalGray dark:text-gray-200"> 
        {language === "french" ? "Références" : "References"}
      </h1>
      <ReferenceSection references={references} />
    </div>
  );
};

export default ReferencesPage;

