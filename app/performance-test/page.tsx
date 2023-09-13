"use client";
import Button from "@/app/components/Button";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import QuestionRow from "./QuestionRow";
import ResultModal from "./ResultModal";
import { quizQuestions } from "./data";

const PerformanceTest = () => {
  const { data: session, status } = useSession();

  const [questionsData, setQuestionsData] = useState(quizQuestions);
  const [score, setScore] = useState(0);
  const [canRevealAnswers, setCanRevealAnswers] = useState(false);
  const [areAnswersRevealed, setAreAnswersRevealed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectAnswer = (currentQuestion: string, selectedAnswer: string) => {
    setQuestionsData((prevState) =>
      prevState.map((answer) =>
        answer.question === currentQuestion ? { ...answer, selectedAnswer } : answer
      )
    );
  };

  const restartCurrentGame = () => {
    setAreAnswersRevealed(false);
    setCanRevealAnswers(false);
    setQuestionsData((prevState) =>
      prevState.map((question) => ({ ...question, selectedAnswer: null }))
    );
    // setScore(0);
  };

  const handleAnswersReveal = () => {
    setAreAnswersRevealed(true);
    const score = questionsData.reduce((totalScore, currentQuestion) => {
      if (currentQuestion.selectedAnswer) {
        if (currentQuestion.positiveChoices.includes(currentQuestion.selectedAnswer))
          return totalScore + 1;
      }
      return totalScore;
    }, 0);
    setScore(score);
    setIsModalOpen(true);
    // if (score === questionsData.length) setIsGameWon(true);
  };

  useEffect(() => {
    const isAllQuestionsAnswered =
      questionsData.length > 0 && questionsData.every((question) => question.selectedAnswer);
    if (isAllQuestionsAnswered) setCanRevealAnswers(true);
  }, [questionsData]);

  return (
    <section className="flex pb-20 md:pb-7 flex-col w-10/12 mx-auto mt-6 md:max-w-[1200px]">
      <>
        {questionsData.map((question, index) => {
          return (
            <div
              className="px-2 py-5 border-b hover:bg-slate-50 border-slate-300 last:border-none"
              key={index}
            >
              <QuestionRow
                selectAnswer={selectAnswer}
                areAnswersRevealed={areAnswersRevealed}
                {...question}
              />
            </div>
          );
        })}

        <div className="mt-8 w-full">
          {!areAnswersRevealed ? (
            <Button disabled={!canRevealAnswers} onClick={handleAnswersReveal} fullWidth>
              Check answers
            </Button>
          ) : (
            <div className="flex items-center justify-between my-6">
              <Button onClick={restartCurrentGame}>Retake the test</Button>
            </div>
          )}
        </div>
      </>
      <ResultModal
        isOpen={isModalOpen}
        score={score}
        handleClose={() => {
          setIsModalOpen(false);
          restartCurrentGame();
        }}
      />
    </section>
  );
};

export default PerformanceTest;
