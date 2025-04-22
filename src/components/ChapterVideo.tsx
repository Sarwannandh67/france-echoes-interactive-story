
import React from "react";

interface ChapterVideoProps {
  videoUrl: string;
  title: string;
}

const ChapterVideo: React.FC<ChapterVideoProps> = ({ videoUrl, title }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-white/30 bg-white/30 backdrop-blur-md aspect-video max-w-full min-w-0">
      <iframe
        title={title}
        src={videoUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="w-full h-full rounded-xl"
      />
    </div>
  );
};

export default ChapterVideo;

