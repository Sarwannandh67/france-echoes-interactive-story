
import React from "react";
import { useLanguage } from "../components/LanguageContext";

// Sample gallery images and descriptions (these can be updated as needed)
const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
    alt: "Historical Landscape",
    frenchDesc: "Paysage historique en France",
    englishDesc: "Historical landscape in France",
  },
  {
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
    alt: "Historical Garden",
    frenchDesc: "Jardin historique français",
    englishDesc: "Historical French garden",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    alt: "Historic Landmark",
    frenchDesc: "Site historique célèbre",
    englishDesc: "Famous historic site",
  },
];

const Gallery = () => {
  const { language } = useLanguage();
  return (
    <main className="pt-24 px-4 sm:px-8 md:px-16 max-w-5xl mx-auto min-h-screen">
      <h1 className="text-4xl font-playfair font-bold mb-8 text-center">
        {language === "french" ? "Galerie Historique" : "Historical Gallery"}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryItems.map((item, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden shadow-lg bg-card dark:bg-gray-800">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <p className="text-gray-800 dark:text-gray-200 text-center">
                {language === "french" ? item.frenchDesc : item.englishDesc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Gallery;

