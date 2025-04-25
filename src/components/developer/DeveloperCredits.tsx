import React from "react";
import { useLanguage } from "../LanguageContext";

interface Developer {
  name: string;
  role: {
    french: string;
    english: string;
  };
  photoUrl: string;
  githubUrl?: string;
  linkedinUrl?: string;
  quote: {
    french: string;
    english: string;
  };
}

const developers: Developer[] = [
  {
    name: "Sarwan Nandh",
    role: {
      french: "Développeur Principal",
      english: "Lead Developer"
    },
    photoUrl: "/images/sarwan.jpg",
    githubUrl: "https://github.com/Sarwannandh67",
    linkedinUrl: "https://linkedin.com/in/sarwannandh",
    quote: {
      french: "Concevoir l'histoire avec passion et soin.",
      english: "Designing history with passion and care."
    }
  },
  {
    name: "Krish D. Shah",
    role: {
      french: "co-développeur et responsable du contenu",
      english: "Co-Developer and Content Manager"
    },
    photoUrl: "/images/krish.jpg",
    githubUrl: "https://github.com/KrishDShah",
    linkedinUrl: "https://linkedin.com/in/theKrishDShah",
    quote: {
      french: "Apprendre React à chaque commit.",
      english: "Learning React with every commit."
    }
  },
  {
    name: "Bhanu Prathap",
    role: {
      french: "Production Vidéo et stratège de contenu ",
      english: "Video Production and content strategist"
    },
    photoUrl: "/images/bhanu.jpg",
    githubUrl: "https://github.com/bhanu-prathap",
    linkedinUrl: "https://linkedin.com/in/bhanu-prathap",
    quote: {
      french: "Donner vie à l'histoire par les visuels.",
      english: "Bringing history to life through visuals."
    }
  },
  {
    name: "Lakshita",
    role: {
      french: "Responsable du contenu",
      english: "Content Lead"
    },
    photoUrl: "/images/lakshita.jpg",
    githubUrl: "https://github.com/lakshita-k",
    linkedinUrl: "https://linkedin.com/in/lakshita-k",
    quote: {
      french: "Rechercher avec dévouement et précision.",
      english: "Researching with dedication and accuracy."
    }
  },
  {
    name: "Riya Mehar",
    role: {
      french: "Stratège de Contenu",
      english: "Content Strategist"
    },
    photoUrl: "/images/riya.jpg",
    githubUrl: "https://github.com/riya-mehar",
    linkedinUrl: "https://linkedin.com/in/riya-mehar",
    quote: {
      french: "Rechercher avec dévouement et précision.",
      english: "Researching with dedication and accuracy."
    }
  },
];

const getCardBackground = (index: number) => {
  const patterns = [
    "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-accent/20 to-secondary/20",
    "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/20 via-primary/20 to-accent/20",
    "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-accent/20 via-secondary/20 to-primary/20",
    "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/20 via-secondary/20 to-accent/20",
    "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-accent/20 to-primary/20",
  ];
  return patterns[index % patterns.length];
};

const DeveloperCredits = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Gradient Overlay */}
      <div className="relative h-[30vh] bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20">
        <div className="absolute inset-0 bg-grid-black dark:bg-grid-white" />
        <div className="container h-full flex flex-col justify-center items-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            {language === 'french' ? 'Notre Équipe' : 'Meet Our Team'}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl">
            {language === 'french' 
              ? 'Les développeurs et designers passionnés derrière Échos de France'
              : 'The passionate developers and designers behind Echoes of France'}
          </p>
        </div>
      </div>

      {/* Team Grid with Overlapping Cards */}
      <div className="container py-16 relative">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex pl-8 pr-16 py-8 gap-4">
            {developers.map((dev, idx) => (
              <div
                key={idx}
                className="w-[300px] shrink-0 -ml-8 first:ml-0 group"
                style={{
                  transform: `rotate(${idx % 2 === 0 ? -2 : 2}deg)`,
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                <div 
                  className={`relative shadow-lg rounded-xl overflow-hidden transition-all duration-300 
                    group-hover:shadow-xl group-hover:-translate-y-2 group-hover:rotate-0 group-hover:z-10 
                    ${getCardBackground(idx)}`}
                >
                  {/* Decorative patterns */}
                  <div className="absolute inset-0 bg-grid-black dark:bg-grid-white opacity-30" />
                  <div className="absolute inset-0 bg-noise mix-blend-soft-light opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background/80 backdrop-blur-[2px]" />
                  
                  <div className="relative z-10">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={dev.photoUrl}
                        alt={dev.name}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="relative p-6 backdrop-blur-sm">
                      <div className="relative z-10">
                        <h3 className="text-xl font-semibold mb-1 text-primary transform group-hover:translate-x-2 transition-transform duration-300">
                          {dev.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
                          {language === 'french' ? dev.role.french : dev.role.english}
                        </p>
                        <p className="text-sm italic text-foreground/80 mb-4 transform group-hover:translate-x-2 transition-transform duration-300 delay-100">
                          "{language === 'french' ? dev.quote.french : dev.quote.english}"
                        </p>
                        <div className="flex gap-4 items-center transform group-hover:translate-x-2 transition-transform duration-300 delay-150">
                          {dev.githubUrl && (
                            <a
                              href={dev.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
                              aria-label={language === 'french' ? 'Profil GitHub' : 'GitHub Profile'}
                            >
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          )}
                          {dev.linkedinUrl && (
                            <a
                              href={dev.linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
                              aria-label={language === 'french' ? 'Profil LinkedIn' : 'LinkedIn Profile'}
                            >
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCredits;

