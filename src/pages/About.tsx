import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'framer-motion';
import { BookOpen, Globe, Users, Sparkles } from 'lucide-react';

const About = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      titleFr: 'Contenu Historique Riche',
      titleEn: 'Rich Historical Content',
      descFr: 'Huit chapitres couvrant les moments clés de l\'histoire française.',
      descEn: 'Eight chapters covering key moments in French history.',
    },
    {
      icon: Globe,
      titleFr: 'Support Bilingue',
      titleEn: 'Bilingual Support',
      descFr: 'Contenu disponible en français et en anglais pour une accessibilité mondiale.',
      descEn: 'Content available in both French and English for global accessibility.',
    },
    {
      icon: Users,
      titleFr: 'Expérience Interactive',
      titleEn: 'Interactive Experience',
      descFr: 'Quiz, cartes de vocabulaire et vidéos pour un apprentissage engageant.',
      descEn: 'Quizzes, vocabulary cards, and videos for engaging learning.',
    },
    {
      icon: Sparkles,
      titleFr: 'Design Moderne',
      titleEn: 'Modern Design',
      descFr: 'Interface élégante et responsive pour une expérience utilisateur optimale.',
      descEn: 'Elegant and responsive interface for optimal user experience.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 font-playfair leading-tight">
            {language === 'french' ? 'À Propos d\'Échos de France' : 'About Echoes of France'}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            {language === 'french'
              ? 'Une expérience interactive pour découvrir l\'histoire de France à travers les âges.'
              : 'An interactive experience to discover French history through the ages.'}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900 rounded-lg shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    {language === 'french' ? feature.titleFr : feature.titleEn}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed ml-12 sm:ml-14">
                  {language === 'french' ? feature.descFr : feature.descEn}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 font-playfair">
            {language === 'french' ? 'Notre Mission' : 'Our Mission'}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {language === 'french'
              ? 'Rendre l\'histoire de France accessible et engageante pour tous, en combinant technologie moderne et rigueur historique pour créer une expérience d\'apprentissage unique.'
              : 'Make French history accessible and engaging for everyone by combining modern technology and historical accuracy to create a unique learning experience.'}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 