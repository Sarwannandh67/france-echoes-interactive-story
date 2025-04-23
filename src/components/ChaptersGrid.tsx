import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, User, History, Crown, Flag, Globe, Trophy } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const ChaptersGrid = () => {
  const { language } = useLanguage();

  const chapters = [
    {
      icon: BookOpen,
      title: language === 'french' ? 'La conquête de la Gaule' : 'Conquest of Gaul',
      id: 'chapter-1',
      year: '58-50 BC',
      description: language === 'french' 
        ? 'La campagne militaire de Jules César qui a transformé la Gaule'
        : 'Julius Caesar\'s military campaign that transformed Gaul'
    },
    {
      icon: User,
      title: language === 'french' ? 'Jeanne d\'Arc' : 'Joan of Arc',
      id: 'chapter-2',
      year: '1412-1431',
      description: language === 'french'
        ? 'L\'héroïne française de la guerre de Cent Ans'
        : 'The French heroine of the Hundred Years\' War'
    },
    {
      icon: History,
      title: language === 'french' ? 'La Renaissance' : 'The Renaissance',
      id: 'chapter-3',
      year: '15-16th c.',
      description: language === 'french'
        ? 'L\'âge d\'or culturel et artistique de la France'
        : 'France\'s cultural and artistic golden age'
    },
    {
      icon: Crown,
      title: language === 'french' ? 'Louis XIV' : 'Louis XIV',
      id: 'chapter-4',
      year: '1643-1715',
      description: language === 'french'
        ? 'Le règne du Roi Soleil et l\'apogée de la monarchie'
        : 'The reign of the Sun King and monarchy\'s peak'
    },
    {
      icon: Flag,
      title: language === 'french' ? 'L\'Épopée Napoléonienne' : 'Napoleonic Era',
      id: 'chapter-5',
      year: '1799-1815',
      description: language === 'french'
        ? 'L\'ascension et la chute de Napoléon Bonaparte'
        : 'The rise and fall of Napoleon Bonaparte'
    },
    {
      icon: Globe,
      title: language === 'french' ? 'La Colonisation' : 'Colonization',
      id: 'chapter-6',
      year: '19-20th c.',
      description: language === 'french'
        ? 'L\'expansion coloniale française et ses conséquences'
        : 'French colonial expansion and its consequences'
    },
    {
      icon: History,
      title: language === 'french' ? 'Les Guerres Mondiales' : 'World Wars',
      id: 'chapter-7',
      year: '1914-1945',
      description: language === 'french'
        ? 'La France pendant les deux guerres mondiales'
        : 'France during both World Wars'
    },
    {
      icon: Trophy,
      title: language === 'french' ? 'Mai 1968' : 'May 1968',
      id: 'chapter-8',
      year: '1968',
      description: language === 'french'
        ? 'Les mouvements sociaux qui ont changé la France'
        : 'The social movements that changed France'
    }
  ];

  const scrollToChapter = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4 bg-[#0B1120] relative overflow-hidden" id="chapters">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 font-playfair text-white"
        >
          {language === 'french' ? 'Explorez les Chapitres' : 'Explore Chapters'}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {chapters.map((chapter, index) => {
            const Icon = chapter.icon;
            return (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => scrollToChapter(chapter.id)}
                className="group cursor-pointer"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 h-full border border-white/20 
                             hover:border-white/30 transition-all duration-300 hover:bg-white/15
                             shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.24)]">
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-lg 
                                  group-hover:from-blue-500/40 group-hover:to-blue-600/40 
                                  transition-all duration-300 backdrop-blur-sm
                                  shadow-[0_4px_12px_rgb(59,130,246,0.15)]
                                  group-hover:shadow-[0_4px_12px_rgb(59,130,246,0.25)]">
                        <Icon size={24} className="text-blue-300 group-hover:text-blue-200 transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                          {chapter.title}
                        </h3>
                        <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          {chapter.year}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                      {chapter.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ChaptersGrid; 