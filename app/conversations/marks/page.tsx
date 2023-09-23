import React from "react";
import Layout from "../layout";
import getMentors from "@/app/actions/getMentors";
import MarksTable from "../components/MarksTable";
import getQuizResults from "@/app/actions/getQuizResults";

export default async function MyApp({}) {
  const users = await getMentors();
  const quizResults = await getQuizResults();
  return (
    <>
   
      <div>
        <MarksTable
        quizResults={quizResults}
         />
      </div>
    </>
  );
}
