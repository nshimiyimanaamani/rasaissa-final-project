import React from "react";
import Layout from "../layout";
import getMentors from "@/app/actions/getMentors";
import MarksTable from "../components/MarksTable";

export default async function MyApp({}) {
  const users = await getMentors();
  return (
    <>
      {/* users={users} */}
      {/* <Layout> */}
      <div>
        <MarksTable />
      </div>
      {/* </Layout> */}
    </>
  );
}
