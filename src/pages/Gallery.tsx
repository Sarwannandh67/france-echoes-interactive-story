import React from "react";
import { useLanguage } from "../components/LanguageContext";

// Gallery items with historical French images
const galleryItems = [
  {
    src: "/images/napoleanbonaparte.jpg",
    alt: "Napoleon Bonaparte",
    frenchDesc: "Napoléon Bonaparte à la bataille d'Austerlitz",
    englishDesc: "Napoleon Bonaparte at the Battle of Austerlitz",
  },
  {
    src: "/images/palacedeversailles.jpg",
    alt: "Palace of Versailles",
    frenchDesc: "Le château de Versailles, symbole de la monarchie française",
    englishDesc: "Palace of Versailles, symbol of French monarchy",
  },
  {
    src: "/images/bastille.jpeg",
    alt: "Storming of the Bastille",
    frenchDesc: "La prise de la Bastille, 14 juillet 1789",
    englishDesc: "Storming of the Bastille, July 14, 1789",
  },
  {
    src: "/images/100yearswar&joanofarc.jpg",
    alt: "Joan of Arc",
    frenchDesc: "Jeanne d'Arc, l'héroïne française",
    englishDesc: "Joan of Arc, the French heroine",
  },
  {
    src: "/images/thesunking.jpg",
    alt: "Louis XIV",
    frenchDesc: "Louis XIV, le Roi Soleil",
    englishDesc: "Louis XIV, the Sun King",
  },
  {
    src: "/images/frenchrevolution.jpg",
    alt: "French Revolution",
    frenchDesc: "La Révolution française, un tournant de l'histoire",
    englishDesc: "The French Revolution, a turning point in history",
  },
  {
    src: "/images/franceworldwar1.jpg",
    alt: "World War I",
    frenchDesc: "La Première Guerre mondiale en France",
    englishDesc: "World War I in France",
  },
  {
    src: "/images/franceworldwar2.jpg",
    alt: "Liberation of Paris",
    frenchDesc: "La libération de Paris, 1944",
    englishDesc: "Liberation of Paris, 1944",
  },
  {
    src: "/images/may1968protests.jpg",
    alt: "May 1968",
    frenchDesc: "Mai 68, les manifestations étudiantes",
    englishDesc: "May 1968 student protests",
  },
  {
    src: "/images/conquestofgaulandbattleofasia.jpg",
    alt: "Conquest of Gaul and Battle Of Asia [ 58 - 51BC ] ",
    frenchDesc: "Conquête de la Gaule et Bataille d'Asie",
    englishDesc: "Conquest of Gaul and Battle of Asia",
  },
  {
    src: "/images/liberationofparis.jpg",
    alt: "Liberation Of Paris [19 August 1944]",
    frenchDesc: "Libération de Paris",
    englishDesc: "Liberation Of Paris",
  },
  {
    src: "/images/liberationofparis.jpg",
    alt: "Tour Eiffel [March 31, 1889]",
    frenchDesc: "Tour Eiffel",
    englishDesc: "Eiffel Tower",
  },
  {
    src: "/images/modernfrance.jpg",
    alt: "Modern France",
    frenchDesc: "La France moderne",
    englishDesc: "Modern France",
  },
  {
    src: "/images/franceineuropeanunion.jpg",
    alt: "Role in European Union",
    frenchDesc: "Le rôle de la France dans l'Union européenne",
    englishDesc: "France Role In European Union",
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

