import React from "react";
import Layout from "../layouts/LayoutWithSidebar";
import getMentors from "@/app/actions/getMentors";
import MarksTable from "../components/MarksTable";

export default async function MyApp({}) {
  const users = await getMentors();
  return (
    <>
      <Layout>
        <div>
          <MarksTable users={users} />
        </div>
      </Layout>
    </>
  );
}
