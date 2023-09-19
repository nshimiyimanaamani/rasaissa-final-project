"use client";
import { useState } from "react";

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

  const removeOption = (index: number) => {
    const updatedOptions = options.filter((_, i) => i !== index);
    setOptions(updatedOptions);
  };

  const setCorrectAnswer = (index: number) => {
    setCorrectAnswerIndex(index);
  };

  const submitQuestion = () => {
    if (questionTitle && options.length > 1 && correctAnswerIndex !== -1) {
      const newQuestion = {
        title: questionTitle,
        options,
        correctAnswerIndex,
      };

      setQuestions([...questions, newQuestion]);

      // Reset form fields
      setQuestionTitle("");
      setOptions([]);
      setCorrectAnswerIndex(-1);
    }
  };

  return (
    <div className="pb-10">
      <h2 className="mt-5">Create a Quizlet</h2>
      <div className="mb-4">
        <input
          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type="text"
          placeholder="Question Title"
          value={questionTitle}
          onChange={(e) => setQuestionTitle(e.target.value)}
        />
      </div>

      <h3 className="mb-2">Answer Options:</h3>
      {options.map((option, index) => (
        <div key={index} className="mb-5 flex gap-2 flex-wrap md:flex-nowrap ">
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
          <button onClick={() => removeOption(index)} className=" text-red-600">
            Remove
          </button>
          <button onClick={() => setCorrectAnswer(index)}>SetCorrect</button>
          {correctAnswerIndex === index && (
            <span className="ml-4 mt-2 text-sky-500">CorrectAnswer</span>
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
          onClick={submitQuestion}
          className="bg-sky-500 text-white rounded p-1 px-4 md:ml-5"
        >
          Submit Question
        </button>
      </div>

      {questions.length > 0 && (
        <div className="mt-5">
          <h2 className="mb-3">Quiz Questions</h2>
          {questions.map((question, index) => (
            <div key={index} className="mb-5 ">
              <h3 className="font-bold">
                {index + 1}. {question.title}
              </h3>
              <ul className="flex gap-5 flex-wrap md:flex-nowrap">
                {question.options.map((option, optionIndex) => (
                  <li
                    key={optionIndex}
                    className=" w-full rounded p-2 border border-gray-700"
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

      {questions.length > 9 && (
        <button className="w-full bg-sky-500 text-white rounded p-2">
          Submit Quiz
        </button>
      )}
    </div>
  );
};

export default QuizComponent;
