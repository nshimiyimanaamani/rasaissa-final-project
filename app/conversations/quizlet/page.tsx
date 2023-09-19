import React from "react";
import Layout from "../layout";
import getMentors from "@/app/actions/getMentors";
import QuizletTable from "../components/QuizletTable";

export default async function MyApp({}) {
  const users = await getMentors();
  return (
    <>
      {/* <Layout> */}
      <div>
        <QuizletTable />
      </div>
      {/* </Layout> */}
    </>
  );
}
