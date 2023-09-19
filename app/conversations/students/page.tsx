import React from "react";
import Layout from "../layout";
import getMentors from "@/app/actions/getMentors";
import StudentTable from "../components/StudentTable";

export default async function MyApp({}) {
  const users = await getMentors();
  return (
    <>
      {/* <Layout> */}
      <div>
        <StudentTable users={users} />
      </div>
      {/* </Layout> */}
    </>
  );
}
