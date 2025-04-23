import React, { useState } from "react";

interface HoverFactCardProps {
  french: string;
  english: string;
}

const HoverFactCard: React.FC<HoverFactCardProps> = ({ french, english }) => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className="relative w-full cursor-pointer select-none perspective"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onTouchStart={toggleFlip}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      tabIndex={0}
      role="button"
      aria-pressed={flipped}
    >
      <div
        className={`relative w-full min-h-[80px] sm:min-h-[96px] rounded-xl shadow-lg transition-transform duration-500 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full backface-hidden rounded-xl bg-white/70 backdrop-blur-md border border-white/40 p-3 sm:p-4 flex items-center justify-center text-center font-medium text-sm sm:text-base text-charcoalGray select-text">
          {french}
          <span className="absolute bottom-2 right-2 text-xs text-gray-500 sm:block hidden">
            Tap/hover to translate
          </span>
        </div>
        <div className="absolute w-full h-full backface-hidden rounded-xl bg-primary/80 backdrop-blur-md border border-white/40 p-3 sm:p-4 flex items-center justify-center text-center font-semibold text-sm sm:text-base text-white rotate-y-180 select-text">
          {english}
        </div>
      </div>

      <style>{`
        .perspective {
          perspective: 800px;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        @media (hover: none) {
          .perspective:active .transform-style-preserve-3d {
            transform: rotateY(180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default HoverFactCard;

