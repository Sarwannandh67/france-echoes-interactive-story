import React from 'react';
import { useLanguage } from './LanguageContext';
import { useLocation } from 'react-router-dom';
import ChaptersGrid from './ChaptersGrid';

const Header = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const isTimelinePage = location.pathname === '/timeline';

  return (
    <header className="bg-[#0B1120] text-white">
      {!isTimelinePage && (
        <>
          {/* Hero Section */}
          <div className="min-h-[90vh] flex flex-col justify-center items-center px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 font-playfair">
                {language === 'french' ? 'Échos de France' : 'Echoes of France'}
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                {language === 'french' 
                  ? 'Un voyage interactif à travers l\'histoire de France, des Gaulois à nos jours. Découvrez les moments qui ont façonné une nation.'
                  : 'An interactive journey through French history, from the Gauls to the present day. Discover the moments that shaped a nation.'}
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span className="text-gray-300">
                    {language === 'french' ? '8 Chapitres' : '8 Chapters'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span className="text-gray-300">
                    {language === 'french' ? 'Bilingue' : 'Bilingual'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span className="text-gray-300">
                    {language === 'french' ? 'Interactif' : 'Interactive'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Chapters Grid */}
          <ChaptersGrid />

          {/* Decorative Elements */}
          <div className="fixed left-0 bottom-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
          <div className="fixed right-0 top-0 w-96 h-96 bg-red-500/5 rounded-full filter blur-3xl"></div>
        </>
      )}
    </header>
  );
};

export default Header; 