import React from "react";
import Layout from "../layout";
import getMentors from "@/app/actions/getMentors";
import QuizletTable from "../performance-test/components/QuizletTable";
import getQuizzesWithQuestionCount from "@/app/actions/create-quiz";

export default async function MyApp({}) {

  const quizData = await getQuizzesWithQuestionCount();

  return (
    <>
      <div>
        <QuizletTable  quizData={quizData}/>
      </div>
      {/* </Layout> */}
    </>
  );
}
