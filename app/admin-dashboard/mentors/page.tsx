import React from "react";
import MentorTable from "../components/MentorTable";
import Layout from "../layouts/LayoutWithSidebar";
import getMentors from "@/app/actions/getMentors";

export default async function MyApp({}) {
  const users = await getMentors();
  return (
    <>
      <Layout>
        <div>
          <MentorTable users={users} />
        </div>
      </Layout>
    </>
  );
}
