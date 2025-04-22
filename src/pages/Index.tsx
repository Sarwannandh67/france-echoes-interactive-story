
import React from "react";
import ChapterIntro from "../components/ChapterIntro";
import ChapterVideo from "../components/ChapterVideo";
import HoverFactCard from "../components/HoverFactCard";
import ChapterQuiz from "../components/ChapterQuiz";
import GlassCard from "../components/GlassCard";
import { Globe, BookOpen, Calendar, Flag } from "lucide-react";

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
            videoUrl="https://www.youtube.com/embed/RAZPKaZj2gM" // Placeholder video
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
            <ChapterQuiz
              questions={[
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
              ]}
            />
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

