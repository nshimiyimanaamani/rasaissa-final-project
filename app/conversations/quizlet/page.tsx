import React from "react";
import Layout from "../layout";
import getMentors from "@/app/actions/getMentors";
import QuizletTable from "../components/QuizletTable";
import getQuizzesWithQuestionCount from "@/app/actions/create-quiz";

export default async function MyApp({}) {

  const quizData = await getQuizzesWithQuestionCount();
  // get currentuserId
  

  return (
    <>
      <div>
        <QuizletTable  quizData={quizData}/>
      </div>
      {/* </Layout> */}
    </>
  );
}
