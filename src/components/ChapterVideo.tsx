import React from "react";

interface ChapterVideoProps {
  videoUrl: string;
  title: string;
}

const ChapterVideo: React.FC<ChapterVideoProps> = ({ videoUrl, title }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-white/30 bg-white/30 backdrop-blur-md aspect-video max-w-full min-w-0">
      <video
        className="w-full h-full rounded-xl object-cover"
        controls
        preload="metadata"
        title={title}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ChapterVideo;

