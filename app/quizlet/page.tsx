import React from "react";
import Layout from "../conversations/layout";
import getMentors from "@/app/actions/getMentors";
import QuizletTable from "../conversations/components/QuizletTable";
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
