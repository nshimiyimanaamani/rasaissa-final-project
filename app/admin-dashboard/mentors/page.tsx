"use client";
import React, { useState } from "react";
import MentorTable from "../components/MentorTable";
import Layout from "../layouts/LayoutWithSidebar";

export default function MyApp({}) {
  return (
    <>
      <Layout>
        <div>
          <MentorTable />
        </div>
      </Layout>
    </>
  );
}
