import * as React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { BookOpen, Scroll } from 'lucide-react';

interface Chapter {
  id: number;
  titleFr: string;
  titleEn: string;
  yearFr: string;
  yearEn: string;
  icon: React.ElementType;
}



const LandingHero: React.FC = () => {
  const { language } = useLanguage();

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-white/5 to-red-500/10" />
      <div className="absolute inset-0 backdrop-blur-3xl" />
      
      {/* Chapters Grid */}
      <div id="chapters" className="relative z-10 w-full max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => scrollToSection(`chapter-${chapter.id}`)}
                className="w-full text-left"
              >
                <div className="group relative overflow-hidden rounded-xl bg-white/5 hover:bg-white/10 
                              border border-white/10 hover:border-white/20 transition-all duration-300
                              p-6 cursor-pointer transform hover:scale-[1.02]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full 
                                filter blur-3xl transform translate-x-16 -translate-y-16" />
                  
                  <chapter.icon className="w-8 h-8 text-white/60 mb-4" />
                  
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {language === 'french' ? chapter.titleFr : chapter.titleEn}
                  </h3>
                  
                  <p className="text-gray-400">
                    {language === 'french' ? chapter.yearFr : chapter.yearEn}
                  </p>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                                  animate-shimmer" />
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingHero; 