
import React from "react";
import { cn } from "@/lib/utils";

const LandingPage = ({ onExploreClick }: { onExploreClick: () => void }) => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-white">
      {/* Tricolor wave background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 flex flex-col overflow-hidden"
      >
        <div className="flex-1 bg-royal-blue w-full animate-wave" />
        <div className="flex-1 bg-white w-full animate-wave-delay" />
        <div className="flex-1 bg-crimson-red w-full animate-wave-delay2" />
      </div>

      {/* Transparent timeline */}
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
        <div className="h-[6px] w-[80%] max-w-xl bg-white/40 rounded-full shadow-glow"></div>
      </div>

      {/* Title and tagline */}
      <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white drop-shadow-lg mb-4 animate-fade-in-down">
        Echoes of France
      </h1>
      <p className="text-xl text-white mb-12 animate-fade-in-up">Where every century speaks.</p>

      {/* Animated scroll-down cue */}
      <div className="animate-bounce mb-8 text-white text-4xl select-none">⬇️</div>

      {/* Explore button */}
      <button
        onClick={onExploreClick}
        className="rounded-full bg-crimson-red px-8 py-3 text-lg font-semibold text-white shadow-md shadow-crimson-red/70 hover:bg-crimson-red/90 transition-colors motion-safe:animate-pulse"
        aria-label="Explore History"
      >
        Explore History
      </button>
    </div>
  );
};

export default LandingPage;

