
import React, { useEffect, useState } from "react";

interface ChapterIntroProps {
  title: string;
  ambientText: string;
}

const ChapterIntro: React.FC<ChapterIntroProps> = ({ title, ambientText }) => {
  const [showAmbient, setShowAmbient] = useState(false);

  useEffect(() => {
    // Animate text intro with fade in/out and slight slide
    const timer = setTimeout(() => {
      setShowAmbient(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative text-left rounded-xl bg-white/25 backdrop-blur-md border border-white/30 p-6 drop-shadow-lg min-h-[180px] flex flex-col justify-center animate-fade-in">
      <h2 className="font-playfair text-3xl font-bold mb-3 text-charcoalGray drop-shadow-sm">
        {title}
      </h2>
      {showAmbient && (
        <p className="text-lg text-gray-700 opacity-90 animate-fade-in transition-opacity duration-1000">
          {ambientText}
        </p>
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#D3E4FD]/20 via-white/10 to-[#D3E4FD]/20 rounded-xl blur-3xl pointer-events-none"
      />
    </div>
  );
};

export default ChapterIntro;

