
import React from "react";

interface Developer {
  name: string;
  role: string;
  photoUrl: string;
  githubUrl?: string;
  linkedinUrl?: string;
  quote: string;
}

const developers: Developer[] = [
  {
    name: "Alice Martin",
    role: "Design",
    photoUrl: "/photos/alice.png",
    githubUrl: "https://github.com/alicemartin",
    linkedinUrl: "https://linkedin.com/in/alicemartin",
    quote: "Designing history with passion and care.",
  },
  {
    name: "Ben Lopez",
    role: "Code",
    photoUrl: "/photos/ben.png",
    githubUrl: "https://github.com/benlopez",
    linkedinUrl: "https://linkedin.com/in/benlopez",
    quote: "Learning React with every commit.",
  },
  {
    name: "Clara Nguyen",
    role: "Video",
    photoUrl: "/photos/clara.png",
    githubUrl: "https://github.com/claranguyen",
    linkedinUrl: "https://linkedin.com/in/claranguyen",
    quote: "Bringing history to life through visuals.",
  },
  {
    name: "David Smith",
    role: "Content",
    photoUrl: "/photos/david.png",
    githubUrl: "https://github.com/davidsmith",
    linkedinUrl: "https://linkedin.com/in/davidsmith",
    quote: "Researching with dedication and accuracy.",
  },
];

const DeveloperCredits = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0055A4]/60 via-white to-[#EF4135]/90 p-6 sm:p-10 md:p-16 flex flex-col items-center text-charcoalGray">
      <header className="mb-10 text-center">
        <h1 className="font-playfair text-5xl font-bold mb-2 text-white drop-shadow-lg">
          Developer Credits
        </h1>
        <p className="text-lg text-white/90">
          Meet the students who brought Echoes of France to life
        </p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full">
        {developers.map((dev, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white/30 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/40"
          >
            <img
              src={dev.photoUrl}
              alt={dev.name}
              className="w-28 h-28 rounded-full mb-4 object-cover"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold mb-1">{dev.name}</h3>
            <p className="text-sm text-secondary-foreground mb-2">{dev.role}</p>
            <div className="flex gap-4 mb-3">
              {dev.githubUrl && (
                <a
                  href={dev.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-charcoalGray hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              )}
              {dev.linkedinUrl && (
                <a
                  href={dev.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-charcoalGray hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              )}
            </div>
            <p className="text-center text-sm italic">"{dev.quote}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperCredits;

