import React, { useState } from "react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Award, RefreshCw } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  correctOptionIndex: number;
}

interface ChapterQuizProps {
  questions: Question[];
}

const ChapterQuiz: React.FC<ChapterQuizProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const handleOptionSelect = (optionIndex: number) => {
    if (selectedOption !== null) return;
    
    setSelectedOption(optionIndex);
    const isCorrect = optionIndex === questions[currentQuestionIndex].correctOptionIndex;
    
    setAnswers([...answers, isCorrect]);
    
    if (isCorrect) {
      setScore(score + 1);
      toast.success("Correct! Well done!", {
        icon: <Check className="w-5 h-5 text-green-500" />,
      });
    } else {
      toast.error("Not quite right. Keep trying!", {
        icon: <X className="w-5 h-5 text-red-500" />,
      });
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "Perfect score! Magnifique! 🎉";
    if (percentage >= 80) return "Excellent work! Très bien! 🌟";
    if (percentage >= 60) return "Good job! Bien fait! 👍";
    return "Keep practicing! Continue à pratiquer! 💪";
  };

  return (
    <div className="relative overflow-hidden rounded-xl group">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-red-500/10 opacity-70"></div>
        <div className="absolute inset-0 backdrop-blur-xl"></div>
        <div className="absolute inset-0 bg-white/10 group-hover:bg-white/15 transition-colors duration-300"></div>
        <div className="absolute inset-0 border border-white/20 group-hover:border-white/30 rounded-xl transition-colors duration-300"></div>
      </div>

      {/* Content */}
      <div className="relative p-6 sm:p-8">
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl transform translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-500/10 rounded-full filter blur-3xl transform -translate-x-20 translate-y-20"></div>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative z-10"
            >
              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-200 mb-2">
                  <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                  <span>Score: {score}/{currentQuestionIndex}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-6">
                {questions[currentQuestionIndex].question}
              </h3>

              <div className="space-y-4">
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleOptionSelect(index)}
                    disabled={selectedOption !== null}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 relative overflow-hidden
                      ${
                        selectedOption === null
                          ? "bg-white/10 hover:bg-white/20 text-white transform hover:scale-[1.02] active:scale-[0.98]"
                          : selectedOption === index
                          ? index === questions[currentQuestionIndex].correctOptionIndex
                            ? "bg-green-500/20 text-green-200 border-2 border-green-500/50"
                            : "bg-red-500/20 text-red-200 border-2 border-red-500/50"
                          : index === questions[currentQuestionIndex].correctOptionIndex
                          ? "bg-green-500/20 text-green-200 border-2 border-green-500/50"
                          : "bg-white/5 text-gray-400"
                      }
                    `}
                  >
                    <div className="relative z-10 flex items-center">
                      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 mr-3">
                        {String.fromCharCode(65 + index)}
                      </span>
                      {option}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer"></div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center relative z-10"
            >
              <div className="mb-6">
                <Award className="w-16 h-16 mx-auto text-yellow-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Quiz Complete!</h3>
                <p className="text-xl text-gray-200 mb-4">
                  You scored {score} out of {questions.length}
                </p>
                <p className="text-lg text-gray-300">{getScoreMessage()}</p>
              </div>

              {/* Answer summary */}
              <div className="mb-8">
                <div className="flex justify-center space-x-2">
                  {answers.map((correct, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        correct ? "bg-green-500" : "bg-red-500"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={resetQuiz}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300 flex items-center justify-center mx-auto space-x-2 group"
              >
                <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                <span>Try Again</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ChapterQuiz;

