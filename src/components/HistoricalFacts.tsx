import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { History } from 'lucide-react';

interface Fact {
  id: number;
  french: string;
  english: string;
}

interface HistoricalFactsProps {
  facts: Fact[];
  icon?: React.ElementType;
}

const HistoricalFacts: React.FC<HistoricalFactsProps> = ({ facts, icon: Icon = History }) => {
  const { language } = useLanguage();

  return (
    <div className="relative overflow-hidden rounded-xl group">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-red-500/5 to-purple-500/10 opacity-70"></div>
        <div className="absolute inset-0 backdrop-blur-xl"></div>
        <div className="absolute inset-0 bg-white/10 group-hover:bg-white/15 transition-colors duration-300"></div>
        <div className="absolute inset-0 border border-white/20 group-hover:border-white/30 rounded-xl transition-colors duration-300"></div>
      </div>

      {/* Content */}
      <div className="relative p-6 sm:p-8">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl transform translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-500/10 rounded-full filter blur-3xl transform -translate-x-20 translate-y-20"></div>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div className="p-2 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-lg">
            <Icon size={24} className="text-blue-300" />
          </div>
          <h2 className="text-2xl font-semibold text-white">
            {language === 'french' ? 'Faits Historiques' : 'Historical Facts'}
          </h2>
        </div>

        {/* Facts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group/fact relative overflow-hidden"
            >
              <div className="relative p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300
                            border border-white/10 hover:border-white/20">
                {/* Fact content */}
                <p className="text-gray-200 text-sm leading-relaxed">
                  {language === 'french' ? fact.french : fact.english}
                </p>

                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover/fact:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoricalFacts; 