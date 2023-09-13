import { FC } from "react";
import { QuizQuestion } from "./data";

interface QuestionRowProps extends QuizQuestion {
  selectAnswer: (title: string, answer: string) => void;
  areAnswersRevealed: boolean;
}

const QuestionRow: FC<QuestionRowProps> = ({
  question,
  choices,
  negativeChoices,
  positiveChoices,
  selectAnswer,
  areAnswersRevealed,
  selectedAnswer,
}) => {
  const setButtonBackground = (currentAnswer: string) => {
    if (areAnswersRevealed) {
      {
        if (currentAnswer === selectedAnswer) {
          if (positiveChoices.includes(currentAnswer)) return "bg-[#94D7A2]";
          if (negativeChoices.includes(currentAnswer)) return "bg-[#F8BCBC]";
        }
      }
    }
    if (currentAnswer === selectedAnswer) return "bg-[#D6DBF5]";
  };

  return (
    <div className="text-[#293264]">
      <h1 className="text-xl font-semibold">{question}</h1>
      <div className="flex flex-col md:flex-row gap-10 mt-3 text-lg">
        {choices.map((choice, index) => (
          <button
            disabled={areAnswersRevealed}
            key={index}
            className={`px-8 py-1 border border-current rounded-lg hover:bg-slate-200 ${setButtonBackground(
              choice
            )}`}
            onClick={() => selectAnswer(question, choice)}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionRow;
