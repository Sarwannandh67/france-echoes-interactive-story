import React from "react";
import { useLanguage } from "../components/LanguageContext";
import { motion } from "framer-motion";
import { BookOpen, Scroll, Crown, Flag, Globe, Swords, User } from "lucide-react";
import Header from "../components/Header";

interface TimelineEvent {
  year: string;
  french: {
    title: string;
    description: string;
  };
  english: {
    title: string;
    description: string;
  };
  icon: React.ElementType;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "58-50 BC",
    french: {
      title: "Conquête de la Gaule par Jules César",
      description: "Jules César mène une campagne militaire qui transforme la Gaule en province romaine, marquant le début de l'influence romaine en France."
    },
    english: {
      title: "Julius Caesar's Conquest of Gaul",
      description: "Julius Caesar leads a military campaign that transforms Gaul into a Roman province, marking the beginning of Roman influence in France."
    },
    icon: Swords
  },
  {
    year: "1337-1453",
    french: {
      title: "La Guerre de Cent Ans",
      description: "Conflit majeur entre la France et l'Angleterre, marqué par l'émergence de Jeanne d'Arc et culminant avec la victoire française."
    },
    english: {
      title: "The Hundred Years' War",
      description: "Major conflict between France and England, marked by the emergence of Joan of Arc and culminating in French victory."
    },
    icon: User
  },
  {
    year: "15-16th century",
    french: {
      title: "La Renaissance Française",
      description: "Période d'épanouissement artistique et culturel, avec l'émergence de l'humanisme et la construction de châteaux magnifiques."
    },
    english: {
      title: "French Renaissance",
      description: "Period of artistic and cultural flourishing, with the emergence of humanism and the construction of magnificent châteaux."
    },
    icon: BookOpen
  },
  {
    year: "1643-1715",
    french: {
      title: "Le Règne de Louis XIV",
      description: "Le Roi Soleil établit la monarchie absolue et fait de la France la première puissance européenne. Construction du château de Versailles."
    },
    english: {
      title: "Reign of Louis XIV",
      description: "The Sun King establishes absolute monarchy and makes France the leading European power. Construction of the Palace of Versailles."
    },
    icon: Crown
  },
  {
    year: "1789-1799",
    french: {
      title: "La Révolution Française",
      description: "Période de changements radicaux qui transforme la société française, abolissant la monarchie et établissant la République."
    },
    english: {
      title: "French Revolution",
      description: "Period of radical change that transforms French society, abolishing monarchy and establishing the Republic."
    },
    icon: Flag
  },
  {
    year: "1804-1815",
    french: {
      title: "L'Empire Napoléonien",
      description: "Napoléon Bonaparte devient empereur et domine l'Europe jusqu'à sa défaite finale à Waterloo."
    },
    english: {
      title: "Napoleonic Empire",
      description: "Napoleon Bonaparte becomes emperor and dominates Europe until his final defeat at Waterloo."
    },
    icon: Crown
  },
  {
    year: "1914-1918",
    french: {
      title: "Première Guerre Mondiale",
      description: "La France joue un rôle crucial dans la victoire des Alliés, mais subit des pertes humaines et matérielles considérables."
    },
    english: {
      title: "World War I",
      description: "France plays a crucial role in Allied victory but suffers considerable human and material losses."
    },
    icon: Swords
  },
  {
    year: "1939-1945",
    french: {
      title: "Seconde Guerre Mondiale",
      description: "Période d'occupation, de résistance et finalement de libération, qui redéfinit la place de la France dans le monde."
    },
    english: {
      title: "World War II",
      description: "Period of occupation, resistance, and eventual liberation that redefines France's place in the world."
    },
    icon: Swords
  },
  {
    year: "1946-1960s",
    french: {
      title: "Décolonisation",
      description: "La France accorde l'indépendance à ses colonies, notamment en Afrique, transformant profondément ses relations internationales."
    },
    english: {
      title: "Decolonization",
      description: "France grants independence to its colonies, particularly in Africa, profoundly transforming its international relations."
    },
    icon: Globe
  },
  {
    year: "1968",
    french: {
      title: "Mai 68",
      description: "Mouvement de contestation sociale et culturelle qui transforme la société française et influence les générations futures."
    },
    english: {
      title: "May 1968",
      description: "Social and cultural protest movement that transforms French society and influences future generations."
    },
    icon: Flag
  }
];

const Timeline = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      <Header />
      
      <main className="pt-24 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {language === "french" ? "Chronologie de l'Histoire de France" : "Timeline of French History"}
        </motion.h1>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-blue-500/20" />

          {timelineEvents.map((event, idx) => (
            <motion.div
              key={idx}
              className={`relative flex items-center mb-16 ${
                idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[50%] w-4 h-4 rounded-full bg-blue-500 transform -translate-x-1/2 z-10">
                <div className="absolute w-8 h-8 rounded-full bg-blue-500/20 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 animate-pulse" />
              </div>

              {/* Content */}
              <div className={`w-[45%] ${idx % 2 === 0 ? "pr-8" : "pl-8"}`}>
                <div className="bg-[#1E293B] rounded-xl p-6 hover:bg-[#2E3B4E] transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <event.icon className="w-6 h-6 text-blue-400" />
                    <h3 className="text-xl font-semibold">
                      {language === "french" ? event.french.title : event.english.title}
                    </h3>
                  </div>
                  <time className="text-sm text-blue-400 font-medium block mb-3">
                    {event.year}
                  </time>
                  <p className="text-gray-300">
                    {language === "french" ? event.french.description : event.english.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Timeline;

