
import React, { useState } from "react";
import { toast } from "sonner";

interface Question {
  question: string;
  options: string[];
  correctOptionIndex: number;
}

interface ChapterQuizProps {
  questions: Question[];
}

const ChapterQuiz: React.FC<ChapterQuizProps> = ({ questions }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [answered, setAnswered] = useState<boolean>(false);

  const currentQuestion = questions[currentIdx];

  const handleOptionSelect = (idx: number) => {
    if (answered) return;
    setSelectedIdx(idx);
    setAnswered(true);
    if (idx === currentQuestion.correctOptionIndex) {
      toast.success("Bonne réponse! Correct answer!");
    } else {
      toast.error("Réponse incorrecte! Incorrect answer!");
    }
  };

  const handleNext = () => {
    setSelectedIdx(null);
    setAnswered(false);
    setCurrentIdx((idx) => (idx + 1) % questions.length);
  };

  return (
    <div className="flex flex-col gap-5">
      <p className="text-lg font-semibold text-charcoalGray">{currentQuestion.question}</p>
      <div className="grid grid-cols-1 gap-3">
        {currentQuestion.options.map((option, idx) => {
          const isSelected = selectedIdx === idx;
          const isCorrect = currentQuestion.correctOptionIndex === idx;
          const optionClasses = [
            "px-4 py-2 rounded-lg cursor-pointer select-none transition-colors border",
            isSelected && (isCorrect ? "bg-green-200 border-green-400" : "bg-red-200 border-red-400"),
            !isSelected && "border-gray-300 hover:bg-gray-100",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <button
              key={idx}
              className={optionClasses}
              onClick={() => handleOptionSelect(idx)}
              disabled={answered}
              type="button"
            >
              {option}
            </button>
          );
        })}
      </div>

      {answered && (
        <button
          type="button"
          onClick={handleNext}
          className="self-end mt-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg px-4 py-2 transition-colors"
        >
          Question suivante / Next question
        </button>
      )}
    </div>
  );
};

export default ChapterQuiz;

