"use client"
import React, { useEffect, useState } from "react";
import Button from "@/app/components/Button";
import QuestionRow from "./QuestionRow";
import ResultModal from "./ResultModal";
import axios from "axios";

interface Option {
  text: string;
  isCorrect: boolean;
}

interface Question {
  question: string;
  options: Option[];
  selectedAnswer: string | null; // Add selectedAnswer property
}

interface QuizComponentProps {
  questions: Question[];
  userId?: string;
  quizId: string;
}

const PerformanceTest: React.FC<QuizComponentProps> = ({ questions, userId, quizId }) => {
  const [questionsData, setQuestionsData] = useState(questions);
  const [score, setScore] = useState(0);
  const [canRevealAnswers, setCanRevealAnswers] = useState(false);
  const [areAnswersRevealed, setAreAnswersRevealed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const isAllQuestionsAnswered =
      questionsData.length > 0 && questionsData.every((question) => question.selectedAnswer);
    if (isAllQuestionsAnswered) setCanRevealAnswers(true);
  }, [questionsData]);

  const selectAnswer = (currentQuestion: string, selectedAnswer: string) => {
    setQuestionsData((prevState) =>
      prevState.map((question) =>
        question.question === currentQuestion ? { ...question, selectedAnswer } : question
      )
    );
  };

  const restartCurrentGame = () => {
    setAreAnswersRevealed(false);
    setCanRevealAnswers(false);
    setQuestionsData((prevState) =>
      prevState.map((question) => ({
        ...question,
        selectedAnswer: null,
      }))
    );
  };

  const handleAnswersReveal = async () => {
    try {
      // After successfully sending the POST request, proceed to open the modal and calculate the score
      setAreAnswersRevealed(true);
      const score = questionsData.reduce((totalScore, currentQuestion) => {
        if (currentQuestion.selectedAnswer) {
          const selectedOption = currentQuestion.options.find(
            (option) => option.text === currentQuestion.selectedAnswer
          );
          if (selectedOption && selectedOption.isCorrect) return totalScore + 1;
        }
        return totalScore;
      }, 0);

      await axios.post('/api/take-quiz', {
        userId: userId, // Replace with the actual userId value
      quizId: quizId, // Replace with the actual quizId value
      score: score,
      });
      setScore(score);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error sending POST request:', error);
      // Handle the error gracefully, you can show an error message to the user
    }
  };

  return (
    <section className="flex pb-20 md:pb-7 flex-col w-10/12 mx-auto mt-6 md:max-w-[1200px]">
      <h1 className="text-2xl font-semibold">Performance test</h1>
      <p className="mb-4">Answer all questions before checking your results</p>
      <>
        {questionsData.map((question, index) => (
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
        ))}

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
