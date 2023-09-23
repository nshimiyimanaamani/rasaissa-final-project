import { FC } from "react";

interface Option {
  text: string;
  isCorrect: boolean;
}

interface QuestionRowProps {
  question: string;
  options: Option[];
  selectedAnswer: string | null;
  selectAnswer: (currentQuestion: string, selectedAnswer: string) => void;
  areAnswersRevealed: boolean;
}

const QuestionRow: FC<QuestionRowProps> = ({
  question,
  options,
  selectedAnswer,
  selectAnswer,
  areAnswersRevealed,
}) => {
  const setButtonBackground = (currentAnswer: string, isCorrect: boolean) => {
    if (areAnswersRevealed) {
      if (currentAnswer === selectedAnswer) {
        if (isCorrect) return "bg-[#94D7A2]";
        return "bg-[#F8BCBC]";
      }
    }
    if (currentAnswer === selectedAnswer) return "bg-[#D6DBF5]";
  };

  return (
    <div className="text-[#293264]">
      <h1 className="text-xl font-semibold">{question}</h1>
      <div className="flex flex-col md:flex-row gap-10 mt-3 text-lg">
        {options.map((choice, index) => (
          <button
            disabled={areAnswersRevealed}
            key={index}
            className={`px-8 py-1 border border-current rounded-lg hover:bg-slate-200 ${setButtonBackground(
              choice.text,
              choice.isCorrect
            )}`}
            onClick={() => selectAnswer(question, choice.text)}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionRow;
