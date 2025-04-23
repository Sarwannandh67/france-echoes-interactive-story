import React from "react";
import { useLanguage } from "../components/LanguageContext";

// Gallery items with historical French images
const galleryItems = [
  {
    src: "/images/napoleon.jpg",
    alt: "Napoleon Bonaparte",
    frenchDesc: "Napoléon Bonaparte à la bataille d'Austerlitz",
    englishDesc: "Napoleon Bonaparte at the Battle of Austerlitz",
  },
  {
    src: "/images/versailles.jpg",
    alt: "Palace of Versailles",
    frenchDesc: "Le château de Versailles, symbole de la monarchie française",
    englishDesc: "Palace of Versailles, symbol of French monarchy",
  },
  {
    src: "/images/bastille.jpg",
    alt: "Storming of the Bastille",
    frenchDesc: "La prise de la Bastille, 14 juillet 1789",
    englishDesc: "Storming of the Bastille, July 14, 1789",
  },
  {
    src: "/images/joan-of-arc.jpg",
    alt: "Joan of Arc",
    frenchDesc: "Jeanne d'Arc, l'héroïne française",
    englishDesc: "Joan of Arc, the French heroine",
  },
  {
    src: "/images/louis-xiv.jpg",
    alt: "Louis XIV",
    frenchDesc: "Louis XIV, le Roi Soleil",
    englishDesc: "Louis XIV, the Sun King",
  },
  {
    src: "/images/french-revolution.jpg",
    alt: "French Revolution",
    frenchDesc: "La Révolution française, un tournant de l'histoire",
    englishDesc: "The French Revolution, a turning point in history",
  },
  {
    src: "/images/ww1.jpg",
    alt: "World War I",
    frenchDesc: "La Première Guerre mondiale en France",
    englishDesc: "World War I in France",
  },
  {
    src: "/images/ww2-liberation.jpg",
    alt: "Liberation of Paris",
    frenchDesc: "La libération de Paris, 1944",
    englishDesc: "Liberation of Paris, 1944",
  },
  {
    src: "/images/may-68.jpg",
    alt: "May 1968",
    frenchDesc: "Mai 68, les manifestations étudiantes",
    englishDesc: "May 1968 student protests",
  },
];

const Gallery = () => {
  const { language } = useLanguage();
  
  return (
    <div className="bg-[#0B1120] min-h-screen text-white">
      <main className="pt-24 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-playfair font-bold mb-8 text-center">
          {language === "french" ? "Galerie Historique" : "Historical Gallery"}
        </h1>
        
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          {language === "french" 
            ? "Explorez l'histoire de France à travers ces moments historiques capturés en images."
            : "Explore French history through these captured historical moments."}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4 bg-gradient-to-t from-black/80 to-transparent absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm sm:text-base">
                  {language === "french" ? item.frenchDesc : item.englishDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Gallery;

