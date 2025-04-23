import React from "react";
import ChapterIntro from "../components/ChapterIntro";
import ChapterVideo from "../components/ChapterVideo";
import HoverFactCard from "../components/HoverFactCard";
import ChapterQuiz from "../components/ChapterQuiz";
import GlassCard from "../components/ui/glass-card";
import VocabularyPopup from "../components/VocabularyPopup";
import { BookOpen, Calendar, User, History, Crown, Flag, Globe, Trophy, Scroll } from "lucide-react";
import { useLanguage } from "../components/LanguageContext";
import Header from "../components/Header";
import HistoricalFacts from "../components/HistoricalFacts";

// Facts and quizzes for each chapter
const chapter1Facts = [
  {
    id: 1,
    french: "Jules César a conquis la Gaule entre 58 et 50 avant J.-C.",
    english: "Julius Caesar conquered Gaul between 58 and 50 BC.",
  },
  {
    id: 2,
    french: "La bataille d'Alésia en 52 avant J.-C. fut décisive pour la conquête romaine.",
    english:
      "The Battle of Alesia in 52 BC was decisive in the Roman conquest.",
  },
  {
    id: 3,
    french: "La Gaule était habitée par diverses tribus celtiques avant la conquête.",
    english: "Gaul was inhabited by various Celtic tribes before conquest.",
  },
];

const chapter2Facts = [
  {
    id: 1,
    french: "Jeanne d'Arc mena les troupes françaises pendant la guerre de Cent Ans.",
    english: "Joan of Arc led French troops during the Hundred Years' War.",
  },
  {
    id: 2,
    french: "La guerre de Cent Ans a duré de 1337 à 1453.",
    english: "The Hundred Years' War lasted from 1337 to 1453.",
  },
  {
    id: 3,
    french: "Jeanne d'Arc fut capturée et brûlée en 1431.",
    english: "Joan of Arc was captured and burned in 1431.",
  },
];

const chapter3Facts = [
  {
    id: 1,
    french: "La Renaissance a stimulé l'art, la science et la philosophie en France.",
    english: "The Renaissance spurred art, science, and philosophy in France.",
  },
  {
    id: 2,
    french: "François 1er fut un roi important de la Renaissance française.",
    english: "Francis I was an important French Renaissance king.",
  },
  {
    id: 3,
    french: "L'humanisme mettait l'accent sur la valeur humaine et la raison.",
    english: "Humanism emphasized human value and reason.",
  },
];

const chapter4Facts = [
  {
    id: 1,
    french: "Louis XIV était appelé le Roi Soleil.",
    english: "Louis XIV was called the Sun King.",
  },
  {
    id: 2,
    french: "Il régna pendant 72 ans, un des plus longs règnes de l'histoire.",
    english: "He reigned for 72 years, one of the longest reigns in history.",
  },
  {
    id: 3,
    french: "Le Château de Versailles a été construit sous son règne.",
    english: "The Palace of Versailles was built during his reign.",
  },
];

const chapter5Facts = [
  {
    id: 1,
    french: "Napoléon a mené la France à de nombreuses conquêtes européennes.",
    english: "Napoleon led France to many European conquests.",
  },
  {
    id: 2,
    french: "La bataille de Waterloo en 1815 marqua sa défaite finale.",
    english: "The Battle of Waterloo in 1815 marked his final defeat.",
  },
  {
    id: 3,
    french: "Napoléon fut empereur des Français de 1804 à 1814/1815.",
    english: "Napoleon was Emperor of the French from 1804 to 1814/1815.",
  },
];

const chapter6Facts = [
  {
    id: 1,
    french: "La colonisation française a eu un impact mondial.",
    english: "French colonization had a global impact.",
  },
  {
    id: 2,
    french: "Les mouvements de décolonisation ont émergé après la Seconde Guerre mondiale.",
    english: "Decolonization movements emerged post-WWII.",
  },
  {
    id: 3,
    french: "La guerre d'Algérie fut une guerre majeure pour la décolonisation.",
    english: "The Algerian War was a major decolonization conflict.",
  },
];

const chapter7Facts = [
  {
    id: 1,
    french: "La Première Guerre mondiale a duré de 1914 à 1918.",
    english: "World War I lasted from 1914 to 1918.",
  },
  {
    id: 2,
    french: "La bataille de Verdun fut l'une des plus longues de la guerre.",
    english: "The Battle of Verdun was one of the longest battles of the war.",
  },
  {
    id: 3,
    french: "Plus de 1.4 million de soldats français sont morts pendant la guerre.",
    english: "Over 1.4 million French soldiers died during the war.",
  },
];

const chapter8Facts = [
  {
    id: 1,
    french: "La France fut occupée par l'Allemagne nazie de 1940 à 1944.",
    english: "France was occupied by Nazi Germany from 1940 to 1944.",
  },
  {
    id: 2,
    french: "La Résistance française a joué un rôle crucial dans la libération.",
    english: "The French Resistance played a crucial role in liberation.",
  },
  {
    id: 3,
    french: "Le débarquement de Normandie a commencé le 6 juin 1944.",
    english: "The Normandy landings began on June 6, 1944.",
  },
];

const chapter9Facts = [
  {
    id: 1,
    french: "Mai 1968 fut une période de protestations étudiantes et sociales.",
    english: "May 1968 was a period of student and social protests.",
  },
  {
    id: 2,
    french: "Les manifestations ont entraîné un changement social important.",
    english: "The protests led to significant social change.",
  },
  {
    id: 3,
    french: "Le slogan célèbre: 'Il est interdit d'interdire!'",
    english: "The famous slogan: 'It is forbidden to forbid!'",
  },
];

// Quizzes for each chapter
const chapter1Quiz = [
  {
    question: "Quand a eu lieu la bataille d'Alésia?",
    options: ["52 avant J.-C.", "43 après J.-C.", "30 avant J.-C.", "60 après J.-C."],
    correctOptionIndex: 0,
  },
  {
    question: "Qui a dirigé la conquête de la Gaule?",
    options: ["Vercingétorix", "Jules César", "Napoléon", "Charlemagne"],
    correctOptionIndex: 1,
  },
  {
    question: "Qui était le chef gaulois qui s'est opposé à César?",
    options: ["Vercingétorix", "Astérix", "Clovis", "Brennus"],
    correctOptionIndex: 0,
  },
  {
    question: "Combien de temps a duré la guerre des Gaules?",
    options: ["8 ans", "10 ans", "5 ans", "15 ans"],
    correctOptionIndex: 0,
  },
  {
    question: "Quelle était la principale motivation de César pour conquérir la Gaule?",
    options: [
      "La gloire politique et militaire",
      "Les ressources naturelles",
      "L'expansion du commerce",
      "La défense de Rome"
    ],
    correctOptionIndex: 0,
  }
];

const chapter2Quiz = [
  {
    question: "Qui était Jeanne d'Arc?",
    options: ["Une reine", "Une guerrière et héroïne française", "Une philosophe", "Une reine anglaise"],
    correctOptionIndex: 1,
  },
  {
    question: "Quand la guerre de Cent Ans a-t-elle commencé?",
    options: ["1337", "1453", "1492", "1610"],
    correctOptionIndex: 0,
  },
  {
    question: "Où Jeanne d'Arc a-t-elle été capturée?",
    options: ["Compiègne", "Paris", "Orléans", "Rouen"],
    correctOptionIndex: 0,
  },
  {
    question: "Quel roi Jeanne d'Arc a-t-elle aidé à faire couronner?",
    options: ["Charles VII", "Philippe VI", "Henri V", "Louis XI"],
    correctOptionIndex: 0,
  },
  {
    question: "En quelle année Jeanne d'Arc a-t-elle été canonisée?",
    options: ["1920", "1900", "1945", "1889"],
    correctOptionIndex: 0,
  }
];

const chapter3Quiz = [
  {
    question: "Quel roi a marqué la Renaissance française?",
    options: ["Louis XIV", "François 1er", "Napoléon", "Henri IV"],
    correctOptionIndex: 1,
  },
  {
    question: "Que signifie l'humanisme?",
    options: [
      "Accent sur la spiritualité",
      "Accent sur la guerre",
      "Accent sur la valeur humaine et la raison",
      "Accent sur le pouvoir royal"
    ],
    correctOptionIndex: 2,
  },
  {
    question: "Quel célèbre artiste italien François 1er a-t-il invité en France?",
    options: ["Léonard de Vinci", "Michel-Ange", "Raphaël", "Botticelli"],
    correctOptionIndex: 0,
  },
  {
    question: "Quel château est devenu le symbole de la Renaissance française?",
    options: ["Chambord", "Versailles", "Fontainebleau", "Blois"],
    correctOptionIndex: 0,
  },
  {
    question: "Quelle invention majeure a marqué cette période?",
    options: [
      "L'imprimerie",
      "La boussole",
      "La poudre à canon",
      "Le télescope"
    ],
    correctOptionIndex: 0,
  }
];

const chapter4Quiz = [
  {
    question: "Quel surnom avait Louis XIV?",
    options: ["Le Roi Soleil", "Le Roi Lune", "Le Roi Étoile", "Le Roi Vent"],
    correctOptionIndex: 0,
  },
  {
    question: "Quel palais célèbre a été construit sous son règne?",
    options: ["Le Louvre", "Versailles", "Le Palais Royal", "Le Palais Garnier"],
    correctOptionIndex: 1,
  },
  {
    question: "Combien de temps a duré le règne de Louis XIV?",
    options: ["72 ans", "50 ans", "65 ans", "45 ans"],
    correctOptionIndex: 0,
  },
  {
    question: "Quel était le style artistique dominant sous Louis XIV?",
    options: ["Le baroque", "Le gothique", "Le rococo", "Le classicisme"],
    correctOptionIndex: 3,
  },
  {
    question: "Quelle devise représentait le pouvoir absolu de Louis XIV?",
    options: [
      "L'État, c'est moi",
      "Pour le peuple",
      "Dieu et mon droit",
      "Liberté, Égalité, Fraternité"
    ],
    correctOptionIndex: 0,
  }
];

const chapter5Quiz = [
  {
    question: "Quelle bataille a marqué la chute de Napoléon?",
    options: ["Waterloo", "Austerlitz", "Marengo", "Lépante"],
    correctOptionIndex: 0,
  },
  {
    question: "Quand Napoléon est-il devenu empereur?",
    options: ["1804", "1799", "1815", "1789"],
    correctOptionIndex: 0,
  },
  {
    question: "Où Napoléon a-t-il été exilé après sa première défaite?",
    options: ["L'île d'Elbe", "Sainte-Hélène", "La Corse", "L'île de Ré"],
    correctOptionIndex: 0,
  },
  {
    question: "Quelle réforme majeure Napoléon a-t-il introduite?",
    options: [
      "Le Code Civil",
      "Le suffrage universel",
      "La séparation de l'Église et de l'État",
      "L'abolition de l'esclavage"
    ],
    correctOptionIndex: 0,
  },
  {
    question: "Combien de coalitions ont combattu Napoléon?",
    options: ["Sept", "Cinq", "Trois", "Neuf"],
    correctOptionIndex: 0,
  }
];

const chapter6Quiz = [
  {
    question: "Quel pays a vécu une guerre majeure pendant la décolonisation française?",
    options: ["Algérie", "Inde", "Canada", "Egypte"],
    correctOptionIndex: 0,
  },
  {
    question: "Quand ont émergé les mouvements de décolonisation?",
    options: ["Après la Seconde Guerre mondiale", "Au 18ème siècle", "Au Moyen Âge", "À la Renaissance"],
    correctOptionIndex: 0,
  },
  {
    question: "Quelle était la plus grande colonie française en Afrique?",
    options: ["Algérie", "Maroc", "Sénégal", "Madagascar"],
    correctOptionIndex: 0,
  },
  {
    question: "En quelle année l'Algérie est-elle devenue indépendante?",
    options: ["1962", "1954", "1970", "1945"],
    correctOptionIndex: 0,
  },
  {
    question: "Quel accord a mis fin à la guerre d'Algérie?",
    options: [
      "Les accords d'Évian",
      "Les accords de Paris",
      "Les accords de Genève",
      "Les accords de Madrid"
    ],
    correctOptionIndex: 0,
  }
];

const chapter7Quiz = [
  {
    question: "Quand a commencé la Première Guerre mondiale?",
    options: ["1914", "1915", "1916", "1917"],
    correctOptionIndex: 0,
  },
  {
    question: "Quelle bataille fut l'une des plus importantes pour la France?",
    options: ["Verdun", "Paris", "Lyon", "Marseille"],
    correctOptionIndex: 0,
  },
  {
    question: "Quel événement a déclenché la Première Guerre mondiale?",
    options: [
      "L'assassinat de l'archiduc François-Ferdinand",
      "L'invasion de la Belgique",
      "La révolution russe",
      "Le blocus naval"
    ],
    correctOptionIndex: 0,
  },
  {
    question: "Qui était le commandant français à Verdun?",
    options: ["Philippe Pétain", "Ferdinand Foch", "Joseph Joffre", "Robert Nivelle"],
    correctOptionIndex: 0,
  },
  {
    question: "Quel surnom a-t-on donné aux soldats français?",
    options: ["Les Poilus", "Les Braves", "Les Héros", "Les Combattants"],
    correctOptionIndex: 0,
  }
];

const chapter8Quiz = [
  {
    question: "Quand la France fut-elle libérée de l'occupation nazie?",
    options: ["1944", "1943", "1945", "1942"],
    correctOptionIndex: 0,
  },
  {
    question: "Quel événement majeur eut lieu le 6 juin 1944?",
    options: [
      "Le débarquement de Normandie",
      "La libération de Paris",
      "La bataille de Berlin",
      "L'armistice"
    ],
    correctOptionIndex: 0,
  },
  {
    question: "Qui dirigeait la France libre pendant la guerre?",
    options: ["Charles de Gaulle", "Philippe Pétain", "Jean Moulin", "Pierre Laval"],
    correctOptionIndex: 0,
  },
  {
    question: "Quel était le nom du gouvernement collaborateur français?",
    options: ["Régime de Vichy", "La République", "L'Empire", "Le Directoire"],
    correctOptionIndex: 0,
  },
  {
    question: "Quand Paris a-t-il été libéré?",
    options: ["Août 1944", "Juin 1944", "Mai 1945", "Janvier 1944"],
    correctOptionIndex: 0,
  }
];

const chapter9Quiz = [
  {
    question: "Quelle était la nature principale des protestations en mai 1968?",
    options: ["Étudiantes et sociales", "Militaires", "Religieuses", "Monarchiques"],
    correctOptionIndex: 0,
  },
  {
    question: "Quel slogan est célèbre de mai 1968?",
    options: ["Il est interdit d'interdire", "Liberté, Égalité, Fraternité", "Vive le Roi", "La révolution est finie"],
    correctOptionIndex: 0,
  },
  {
    question: "Qui était le président de la France en mai 1968?",
    options: ["Charles de Gaulle", "Georges Pompidou", "François Mitterrand", "Valéry Giscard d'Estaing"],
    correctOptionIndex: 0,
  },
  {
    question: "Où ont commencé les manifestations étudiantes?",
    options: ["Université de Nanterre", "La Sorbonne", "Sciences Po", "École Polytechnique"],
    correctOptionIndex: 0,
  },
  {
    question: "Quel accord a mis fin aux grèves de mai 1968?",
    options: [
      "Les accords de Grenelle",
      "Les accords de Matignon",
      "Les accords de Paris",
      "Les accords de l'Élysée"
    ],
    correctOptionIndex: 0,
  }
];

// Vocabulary terms for chapters example:
const chapter1Vocabulary = [
  { term: "chevalier", translation: "knight", audioSrc: "/audio/chevalier.mp3" },
  { term: "Gaulois", translation: "Gauls" },
  { term: "conquête", translation: "conquest" },
];
// ... (similarly define vocabulary arrays for other chapters)

const chapter2Vocabulary = [
  { term: "Jeanne d'Arc", translation: "Joan of Arc", audioSrc: "/audio/jeannedarc.mp3" },
  { term: "guerre de Cent Ans", translation: "Hundred Years' War" },
  { term: "armure", translation: "armor" },
];

const chapter3Vocabulary = [
  { term: "Renaissance", translation: "Renaissance" },
  { term: "humanisme", translation: "humanism" },
  { term: "artiste", translation: "artist" },
];
const chapter4Vocabulary = [
  { term: "Roi Soleil", translation: "Sun King" },
  { term: "Versailles", translation: "Versailles" },
  { term: "monarchie absolue", translation: "absolute monarchy" },
];

const chapter5Vocabulary = [
  { term: "Napoléon", translation: "Napoleon" },
  { term: "Waterloo", translation: "Waterloo" },
  { term: "empereur", translation: "emperor" },
];

const chapter6Vocabulary = [
  { term: "colonisation", translation: "colonization" },
  { term: "décolonisation", translation: "decolonization" },
  { term: "Algérie", translation: "Algeria" },
];

const chapter7Vocabulary = [
  { term: "Première Guerre mondiale", translation: "World War I" },
  { term: "tranchées", translation: "trenches" },
  { term: "bataille", translation: "battle" },
];

const chapter8Vocabulary = [
  { term: "Seconde Guerre mondiale", translation: "World War II" },
  { term: "Résistance", translation: "Resistance" },
  { term: "occupation", translation: "occupation" },
];

const chapter9Vocabulary = [
  { term: "Mai 1968", translation: "May 1968" },
  { term: "manifestations", translation: "protests" },
  { term: "slogan", translation: "slogan" },
];

const Index = () => {
  const { language } = useLanguage();

  const chapters = [
    {
      id: 1,
      title: language === 'french' ? "La conquête de la Gaule par Jules César" : "Julius Caesar's Conquest of Gaul",
      period: "58-50 BC",
      icon: Scroll,
      facts: chapter1Facts,
      vocabulary: chapter1Vocabulary,
      quiz: chapter1Quiz,
      videoUrl: "https://www.youtube.com/embed/RAZPKaZj2gM"
    },
    {
      id: 2,
      title: language === 'french' ? "La Guerre de Cent Ans et Jeanne d'Arc" : "The Hundred Years' War and Joan of Arc",
      period: "1337-1453",
      icon: Scroll,
      facts: chapter2Facts,
      vocabulary: chapter2Vocabulary,
      quiz: chapter2Quiz,
      videoUrl: "https://www.youtube.com/embed/OGIYXemQ1YQ"
    },
    {
      id: 3,
      title: language === 'french' ? "La Renaissance et l'Humanisme" : "The Renaissance and Humanism",
      period: "16th century",
      icon: BookOpen,
      facts: chapter3Facts,
      vocabulary: chapter3Vocabulary,
      quiz: chapter3Quiz,
      videoUrl: "https://www.youtube.com/embed/_YblQCfgo9M"
    },
    {
      id: 4,
      title: language === 'french' ? "Le Règne de Louis XIV" : "The Reign of Louis XIV",
      period: "1643-1715",
      icon: BookOpen,
      facts: chapter4Facts,
      vocabulary: chapter4Vocabulary,
      quiz: chapter4Quiz,
      videoUrl: "https://www.youtube.com/embed/example4"
    },
    {
      id: 5,
      title: language === 'french' ? "Napoléon et Waterloo" : "Napoleon and Waterloo",
      period: "1815",
      icon: Scroll,
      facts: chapter5Facts,
      vocabulary: chapter5Vocabulary,
      quiz: chapter5Quiz,
      videoUrl: "https://www.youtube.com/embed/example5"
    },
    {
      id: 6,
      title: language === 'french' ? "Colonisation et Décolonisation" : "Colonization and Decolonization",
      period: "19th-20th centuries",
      icon: BookOpen,
      facts: chapter6Facts,
      vocabulary: chapter6Vocabulary,
      quiz: chapter6Quiz,
      videoUrl: "https://www.youtube.com/embed/example6"
    },
    {
      id: 7,
      title: language === 'french' ? "La Première Guerre Mondiale" : "World War I",
      period: "1914-1918",
      icon: Scroll,
      facts: chapter7Facts,
      vocabulary: chapter7Vocabulary,
      quiz: chapter7Quiz,
      videoUrl: "https://www.youtube.com/embed/example7"
    },
    {
      id: 8,
      title: language === 'french' ? "La Seconde Guerre Mondiale" : "World War II",
      period: "1939-1945",
      icon: Scroll,
      facts: chapter8Facts,
      vocabulary: chapter8Vocabulary,
      quiz: chapter8Quiz,
      videoUrl: "https://www.youtube.com/embed/example8"
    },
    {
      id: 9,
      title: language === 'french' ? "Mai 1968" : "May 1968",
      period: "1968",
      icon: BookOpen,
      facts: chapter9Facts,
      vocabulary: chapter9Vocabulary,
      quiz: chapter9Quiz,
      videoUrl: "https://www.youtube.com/embed/example9"
    }
  ];

  const scrollToChapter = (id: number) => {
    const element = document.getElementById(`chapter-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] flex flex-col items-center">
      <Header />
      
      {/* Chapter Content Sections */}
      {chapters.map((chapter) => (
        <section
          key={chapter.id}
          id={`chapter-${chapter.id}`}
          className="w-full max-w-[1400px] px-6 grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 mt-20"
        >
          {/* Left Column - Chapter Info */}
          <div className="space-y-6">
            <ChapterIntro
              title={chapter.title}
              ambientText={
                language === "french"
                  ? "Explorez cette période fascinante de l'histoire française..."
                  : "Explore this fascinating period of French history..."
              }
            />
            <ChapterVideo
              videoUrl={chapter.videoUrl}
              title={chapter.title}
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <HistoricalFacts facts={chapter.facts} icon={chapter.icon} />
            <VocabularyPopup vocabulary={chapter.vocabulary} language={language} />
            <ChapterQuiz questions={chapter.quiz} />
          </div>
        </section>
      ))}

      <footer className="mt-20 mb-10 text-gray-500 text-sm text-center">
        &copy; 2025 Echoes of France - Interactive Educational Experience
      </footer>
    </div>
  );
};

export default Index;
