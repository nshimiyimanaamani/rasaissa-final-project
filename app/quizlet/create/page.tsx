import React from "react";
import Link from "next/link";
import Layout from "../../layout";
import CreateQuizlet from "../../conversations/components/CreateQuizlet";
import getMentors from "@/app/actions/getMentors";
import { HiArrowCircleLeft } from "react-icons/hi";

export default async function MyApp({}) {
  return (
    <>
      {/* <Layout> */}
      <div>
        <div>
          <Link href="/conversations/quizlet" className="flex">
            <HiArrowCircleLeft className="mt-1" />
            <span>Back</span>
          </Link>
        </div>
        <div>
          <CreateQuizlet />
        </div>
      </div>
      {/* </Layout> */}
    </>
  );
}
