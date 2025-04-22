
import React from "react";
import ChapterIntro from "../components/ChapterIntro";
import ChapterVideo from "../components/ChapterVideo";
import HoverFactCard from "../components/HoverFactCard";
import ChapterQuiz from "../components/ChapterQuiz";
import GlassCard from "../components/GlassCard";
import { BookOpen, Calendar, User, History, Crown, Flag, Globe, Trophy } from "lucide-react";

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
    french: "La France a été gravement touchée par les deux Guerres mondiales.",
    english: "France was severely impacted by both World Wars.",
  },
  {
    id: 2,
    french: "La Première Guerre mondiale dura de 1914 à 1918.",
    english: "World War 1 lasted from 1914 to 1918.",
  },
  {
    id: 3,
    french: "La Résistance française a joué un rôle important pendant la Seconde Guerre mondiale.",
    english: "The French Resistance played a major role in World War 2.",
  },
];

const chapter8Facts = [
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
    question:
      "Quand a eu lieu la bataille d'Alésia?",
    options: [
      "52 avant J.-C.",
      "43 après J.-C.",
      "30 avant J.-C.",
      "60 après J.-C.",
    ],
    correctOptionIndex: 0,
  },
  {
    question: "Qui a dirigé la conquête de la Gaule?",
    options: [
      "Vercingétorix",
      "Jules César",
      "Napoléon",
      "Charlemagne",
    ],
    correctOptionIndex: 1,
  },
];

const chapter2Quiz = [
  {
    question: "Qui était Jeanne d'Arc?",
    options: [
      "Une reine",
      "Une guerrière et héroïne française",
      "Une philosophe",
      "Une reine anglaise",
    ],
    correctOptionIndex: 1,
  },
  {
    question: "Quand la guerre de Cent Ans a-t-elle commencé?",
    options: ["1337", "1453", "1492", "1610"],
    correctOptionIndex: 0,
  },
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
      "Accent sur le pouvoir royal",
    ],
    correctOptionIndex: 2,
  },
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
];

const chapter7Quiz = [
  {
    question: "Quelle organisation française a résisté pendant la Seconde Guerre mondiale?",
    options: ["La Résistance française", "Les Huguenots", "Le Front Populaire", "La Commune"],
    correctOptionIndex: 0,
  },
  {
    question: "Quand s'est terminée la Première Guerre mondiale?",
    options: ["1918", "1945", "1939", "1914"],
    correctOptionIndex: 0,
  },
];

const chapter8Quiz = [
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
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#D3E4FD]/60 via-white to-[#F1F0FB]/90 p-6 sm:p-10 md:p-16 flex flex-col items-center">
      <header className="mb-16 max-w-5xl w-full text-center">
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-charcoalGray drop-shadow-md mb-2">
          Echoes of France
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          A Journey Through French History
        </p>
      </header>

      {/* Chapter 1 Section */}
      <section
        id="chapter-1"
        className="max-w-5xl w-full flex flex-col md:flex-row gap-10 md:gap-16"
      >
        <div className="md:w-2/5 flex flex-col gap-6">
          <ChapterIntro
            title="Chapitre 1: La conquête de la Gaule par Jules César"
            ambientText="Voyage dans les racines antiques de la France..."
          />
          <ChapterVideo
            videoUrl="https://www.youtube.com/embed/RAZPKaZj2gM"
            title="Julius Caesar's conquest of Gaul"
          />
        </div>

        <div className="md:w-3/5 flex flex-col gap-8">
          <GlassCard className="p-6">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-charcoalGray mb-4">
              <BookOpen size={24} /> Faits Historiques
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {chapter1Facts.map((fact) => (
                <HoverFactCard
                  key={fact.id}
                  french={fact.french}
                  english={fact.english}
                />
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-charcoalGray mb-4">
              <Calendar size={24} /> Testez Vos Connaissances
            </h2>
            <ChapterQuiz questions={chapter1Quiz} />
          </GlassCard>
        </div>
      </section>

      {/* Chapter 2 Section */}
      <section
        id="chapter-2"
        className="max-w-5xl w-full flex flex-col md:flex-row gap-10 md:gap-16 mt-20"
      >
        <div className="md:w-2/5 flex flex-col gap-6">
          <ChapterIntro
            title="Chapitre 2: Jeanne d'Arc et la Guerre de Cent Ans"
            ambientText="Explorez la femme qui a inspiré la France médiévale..."
          />
          <ChapterVideo
            videoUrl="https://www.youtube.com/embed/OGIYXemQ1YQ"
            title="Joan of Arc and the Hundred Years' War"
          />
        </div>

        <div className="md:w-3/5 flex flex-col gap-8">
          <GlassCard className="p-6">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-charcoalGray mb-4">
              <User size={24} /> Faits Historiques
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {chapter2Facts.map((fact) => (
                <HoverFactCard
                  key={fact.id}
                  french={fact.french}
                  english={fact.english}
                />
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-charcoalGray mb-4">
              <Calendar size={24} /> Testez Vos Connaissances
            </h2>
            <ChapterQuiz questions={chapter2Quiz} />
          </GlassCard>
        </div>
      </section>

      {/* Chapter 3 Section */}
      <section
        id="chapter-3"
        className="max-w-5xl w-full flex flex-col md:flex-row gap-10 md:gap-16 mt-20"
      >
        <div className="md:w-2/5 flex flex-col gap-6">
          <ChapterIntro
            title="Chapitre 3: La Renaissance et l'Humanisme"
            ambientText="Découvrez l'essor artistique et scientifique du 16ème siècle..."
          />
          <ChapterVideo
            videoUrl="https://www.youtube.com/embed/_YblQCfgo9M"
            title="The Renaissance and Humanism"
          />
        </div>

        <div className="md:w-3/5 flex flex-col gap-8">
          <GlassCard className="p-6">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-charcoalGray mb-4">
              <History size={24} /> Faits Historiques
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {chapter3Facts.map((fact) => (
                <HoverFactCard
                  key={fact.id}
                  french={fact.french}
                  english={fact.english}
                />
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-charcoalGray mb-4">
              <Calendar size={24} /> Testez Vos Connaissances
            </h2>
            <ChapterQuiz questions={chapter3Quiz} />
          </GlassCard>
        </div>
      </section>

      {/* Chapter 4 Section */}
      <section
        id="chapter-4"
        className="max-w-5xl w-full flex flex-col md:flex-row gap-10 md:gap-16 mt-20"
      >
        <div className="md:w-2/5 flex flex-col gap-6">
          <ChapterIntro
            title="Chapitre 4: Louis XIV – Le règne du Roi Soleil"
            ambientText="Entrez dans l'âge d'or de la monarchie absolue française..."
          />
          <ChapterVideo
            videoUrl="https://www.youtube.com/embed/9jv3n2zgG_I"
            title="Louis XIV, The Sun King"
          />
        </div>

        <div className="md:w-3/5 flex flex-col gap-8">
          <GlassCard className="p-6">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-charcoalGray mb-4">
              <Crown size={24} /> Faits Historiques
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {chapter4Facts.map((fact) => (
                <HoverFactCard
                  key={fact.id}
                  french={fact.french}
                  english={fact.english}
                />
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-charcoalGray mb-4">
              <Calendar size={24} /> Testez Vos Connaissances
            </h2>
            <ChapterQuiz questions={chapter4Quiz} />
          </GlassCard>
        </div>
      </section>

      {/* Chapter 5 Section */}
      <section
        id="chapter-5"
        className="max-w-5xl w-full flex flex-col md:flex-row gap-10 md:gap-16 mt-20"
      >
        <div className="md:w-2/5 flex flex-col gap-6">
          <ChapterIntro
            title="Chapitre 5: Napoléon et la bataille de Waterloo"
            ambientText="Revivez l'ascension et la chute de l'empereur français..."
          />
          <ChapterVideo
            videoUrl="https://www.youtube.com/embed/Fw2MshDqSdk"
            title="Napoleon and the Battle of Waterloo"
          />
        </div>

        <div className="md:w-3/5 flex flex-col gap-8">
          <GlassCard className="p-6">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-charcoalGray mb-4">
              <Trophy size={24} /> Faits Historiques
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {chapter5Facts.map((fact) => (
                <HoverFactCard
                  key={fact.id}
                  french={fact.french}
                  english={fact.english}
                />
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-charcoalGray mb-4">
              <Calendar size={24} /> Testez Vos Connaissances
            </h2>
            <ChapterQuiz questions={chapter5Quiz} />
          </GlassCard>
        </div>
      </section>

      {/* Chapter 6 Section */}
      <section
        id="chapter-6"
        className="max-w-5xl w-full flex flex-col md:flex-row gap-10 md:gap-16 mt-20"
      >
        <div className="md:w-2/5 flex flex-col gap-6">
          <ChapterIntro
            title="Chapitre 6: Colonisation et Décolonisation françaises"
            ambientText="Une perspective sur l'expansion et les luttes mondiales..."
          />
          <ChapterVideo
            videoUrl="https://www.youtube.com/embed/R9bkQkesj6A"
            title="French Colonisation & Decolonisation"
          />
        </div>

        <div className="md:w-3/5 flex flex-col gap-8">
          <GlassCard className="p-6">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-charcoalGray mb-4">
              <Flag size={24} /> Faits Historiques
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {chapter6Facts.map((fact) => (
                <HoverFactCard
                  key={fact.id}
                  french={fact.french}
                  english={fact.english}
                />
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-charcoalGray mb-4">
              <Calendar size={24} /> Testez Vos Connaissances
            </h2>
            <ChapterQuiz questions={chapter6Quiz} />
          </GlassCard>
        </div>
      </section>

      {/* Chapter 7 Section */}
      <section
        id="chapter-7"
        className="max-w-5xl w-full flex flex-col md:flex-row gap-10 md:gap-16 mt-20"
      >
        <div className="md:w-2/5 flex flex-col gap-6">
          <ChapterIntro
            title="Chapitre 7: La France dans la Première et Seconde Guerre mondiale"
            ambientText="Un aperçu puissant du rôle français dans les Guerres mondiales..."
          />
          <ChapterVideo
            videoUrl="https://www.youtube.com/embed/4QO-0DLZ5fw"
            title="France in WW1 & WW2"
          />
        </div>

        <div className="md:w-3/5 flex flex-col gap-8">
          <GlassCard className="p-6">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-charcoalGray mb-4">
              <Globe size={24} /> Faits Historiques
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {chapter7Facts.map((fact) => (
                <HoverFactCard
                  key={fact.id}
                  french={fact.french}
                  english={fact.english}
                />
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-charcoalGray mb-4">
              <Calendar size={24} /> Testez Vos Connaissances
            </h2>
            <ChapterQuiz questions={chapter7Quiz} />
          </GlassCard>
        </div>
      </section>

      {/* Chapter 8 Section */}
      <section
        id="chapter-8"
        className="max-w-5xl w-full flex flex-col md:flex-row gap-10 md:gap-16 mt-20 mb-20"
      >
        <div className="md:w-2/5 flex flex-col gap-6">
          <ChapterIntro
            title="Chapitre 8: Les protestations étudiantes de Mai 1968"
            ambientText="Découvrez les événements qui ont bouleversé la société française..."
          />
          <ChapterVideo
            videoUrl="https://www.youtube.com/embed/2F4K4oXOHzo"
            title="May 1968 Student Protests"
          />
        </div>

        <div className="md:w-3/5 flex flex-col gap-8">
          <GlassCard className="p-6">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-charcoalGray mb-4">
              <History size={24} /> Faits Historiques
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {chapter8Facts.map((fact) => (
                <HoverFactCard
                  key={fact.id}
                  french={fact.french}
                  english={fact.english}
                />
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-charcoalGray mb-4">
              <Calendar size={24} /> Testez Vos Connaissances
            </h2>
            <ChapterQuiz questions={chapter8Quiz} />
          </GlassCard>
        </div>
      </section>

      <footer className="mt-20 text-gray-500 text-sm">
        &copy; 2025 Echoes of France - Interactive Educational Experience
      </footer>
    </div>
  );
};

export default Index;

