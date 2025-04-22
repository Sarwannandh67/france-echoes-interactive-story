
import React, { useState } from "react";

interface VocabularyItem {
  term: string;
  translation: string;
  audioSrc?: string;
}

interface VocabularyPopupProps {
  vocabulary: VocabularyItem[];
  language: "french" | "english";
}

const VocabularyPopup: React.FC<VocabularyPopupProps> = ({ vocabulary, language }) => {
  const [selectedTerm, setSelectedTerm] = useState<VocabularyItem | null>(null);

  const playAudio = (src?: string) => {
    if (!src) return;
    const audio = new Audio(src);
    audio.play();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3 mt-4">
        {vocabulary.map((item, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setSelectedTerm(item)}
            className="cursor-pointer rounded-md border border-gray-300 bg-white px-3 py-1 text-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors select-none"
            aria-label={`Vocabulary term ${item.term}`}
          >
            {language === "french" ? item.term : item.translation}
          </button>
        ))}
      </div>

      {selectedTerm && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="vocabPopupTitle"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={() => setSelectedTerm(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-md p-6 max-w-md w-full shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              id="vocabPopupTitle"
              className="text-xl font-semibold mb-2 text-charcoalGray dark:text-white"
            >
              {language === "french"
                ? `${selectedTerm.term} - ${selectedTerm.translation}`
                : `${selectedTerm.translation} - ${selectedTerm.term}`}
            </h3>
            {selectedTerm.audioSrc && (
              <button
                type="button"
                onClick={() => playAudio(selectedTerm.audioSrc)}
                className="inline-flex items-center gap-2 px-3 py-1 border border-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Play pronunciation audio"
              >
                ▶️ Play Audio
              </button>
            )}
            <button
              type="button"
              onClick={() => setSelectedTerm(null)}
              className="mt-4 rounded bg-crimson-red text-white px-4 py-2 hover:bg-crimson-red/90 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VocabularyPopup;

