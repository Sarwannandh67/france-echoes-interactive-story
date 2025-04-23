import React from "react";

interface ChapterIntroProps {
  title: string;
  ambientText: string;
}

const ChapterIntro: React.FC<ChapterIntroProps> = ({ title, ambientText }) => {
  return (
    <div className="relative text-left rounded-2xl overflow-hidden bg-[#1E293B] p-8">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="font-bold text-2xl text-white mb-4 leading-tight">
          {title}
        </h2>
        
        <p className="text-gray-300 text-lg">
          {ambientText}
        </p>
      </div>
    </div>
  );
};

export default ChapterIntro;

