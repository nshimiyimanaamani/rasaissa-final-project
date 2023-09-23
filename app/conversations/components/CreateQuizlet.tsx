"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const QuizComponent = () => {
  const [questions, setQuestions] = useState<
    Array<{
      title: string;
      options: string[];
      correctAnswerIndex: number;
    }>
  >([]);
  const [questionTitle, setQuestionTitle] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(-1);

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const handleOptionsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Split the input by line breaks to create an array of options
    const optionsArray = event.target.value.split('\n').map(option => option.trim());
    setOptions(optionsArray);
  };
  const removeOption = (index: number) => {
    const updatedOptions = options.filter((_, i) => i !== index);
    setOptions(updatedOptions);
  };

  const setCorrectAnswer = (index: number) => {
    setCorrectAnswerIndex(index);
  };

  const addQuestion = () => {
    if (questionTitle && options.length > 1 && correctAnswerIndex !== -1) {
      const newQuestion = {
        title: questionTitle,
        options: options,
        correctAnswerIndex: correctAnswerIndex,
      };

      setQuestions([...questions, newQuestion]);
      setQuestionTitle("");
      setOptions([]);
      setCorrectAnswerIndex(-1);
    }
  };

  const submitQuiz = async () => {
    if (questions.length >= 5) {
      try {
        const response = await axios.post("/api/create-quiz", {
          questions: questions,
        });

        if (response.status === 200) {
          const data = response.data;
          // Handle the response data here
          console.log("Quiz created:", data);
          toast.success("Quiz created")

          // Reset questions
          setQuestions([]);
        } else {
          // Handle errors here
          console.error("Failed to create quiz");
          toast.error('Something went wrong')
        }
      } catch (error) {
        console.error("Error sending the request:", error);
        toast.error('Something went wrong')
      }
    } else {
      console.error("You need at least 5 questions to submit the quiz.");
      toast.error('You need at least 5 questions to submit the quiz.')
    }
  };

  return (
    <div className="pb-10">
      <h2 className="mt-5">Create a Quizlet</h2>
      <div className="mb-4">
        <input
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type="text"
          placeholder="Question Title"
          value={questionTitle}
          onChange={(e) => setQuestionTitle(e.target.value)}
        />
      </div>

      <h3 className="mb-2">Answer Options:</h3>
      {options.map((option, index) => (
        <div key={index} className="mb-5 flex gap-2 flex-wrap md:flex-nowrap">
          <input
            type="text"
            required
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => {
              const updatedOptions = [...options];
              updatedOptions[index] = e.target.value;
              setOptions(updatedOptions);
            }}
          />
          <button onClick={() => removeOption(index)} className="text-red-600">
            Remove
          </button>
          <button onClick={() => setCorrectAnswer(index)}>Set Correct</button>
          {correctAnswerIndex === index && (
            <span className="ml-4 mt-2 text-sky-500">Correct Answer</span>
          )}
        </div>
      ))}

      <div>
        <button
          onClick={addOption}
          className="border border-gray-700 p-1 px-4 rounded mb-3"
        >
          Add Option
        </button>

        <button
          onClick={addQuestion}
          className="bg-sky-500 text-white rounded p-1 px-4 md:ml-5"
        >
          Add Question
        </button>
      </div>

      {questions.length > 0 && (
        <div className="mt-5">
          <h2 className="mb-3">Quiz Questions</h2>
          {questions.map((question, index) => (
            <div key={index} className="mb-5">
              <h3 className="font-bold">
                {index + 1}. {question.title}
              </h3>
              <ul className="flex gap-5 flex-wrap md:flex-nowrap">
                {question.options.map((option, optionIndex) => (
                  <li
                    key={optionIndex}
                    className="w-full rounded p-2 border border-gray-700"
                  >
                    {optionIndex === question.correctAnswerIndex ? (
                      <strong className="text-sky-500">{option}</strong>
                    ) : (
                      option
                    )}
                  </li>
                ))}
              </ul>
              <hr className="border-b border-gray-500 my-5" />
            </div>
          ))}
        </div>
      )}

      {questions.length > 4 && (
        <button
          onClick={submitQuiz}
          className="w-full bg-sky-500 text-white rounded p-2"
        >
          Submit Quiz
        </button>
      )}
    </div>
  );
};

export default QuizComponent;
