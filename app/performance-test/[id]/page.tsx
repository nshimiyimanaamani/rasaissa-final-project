import React from "react";
import getQuizzesWithQuestionCount from "@/app/actions/create-quiz";
import PerformanceTest from "./components/quizlet";
import getQuizOptionsById from "@/app/actions/get-quiz-options";
import getCurrentUser from "@/app/actions/getCurrentUser";
interface IParams {
  id: string;
}
export default async function MyApp({ params }: { params: IParams }) {

  // get quizOptions
  const questions = await getQuizOptionsById(params.id);
  const currentUser = await getCurrentUser();
  return (
    <>
      <div>
        <PerformanceTest 
        questions={questions}
        userId={currentUser?.id}
        quizId={params.id}

         />
      </div>
      {/* </Layout> */}
    </>
  );
}
