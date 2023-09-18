"use client";
import React from "react";
// ("use client");
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function TopCards({}) {
  return (
    <>
      <div className="grid lg:grid-cols-1 gap-4">
        <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4">
            <p className="text-2xl font-bold">876</p>
            <p className="text-gray-600">Mentors</p>
          </div>
          <p className="bg-sky-200 flex justify-center items-center p-2 rounded-lg">
            <span className="text-sky-700 text-2xl">+10%</span>
          </p>
        </div>
        <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4">
            <p className="text-2xl font-bold">876</p>
            <p className="text-gray-600">Students</p>
          </div>
          <p className="bg-sky-200 flex justify-center items-center p-2 rounded-lg">
            <span className="text-sky-700 text-2xl">+10%</span>
          </p>
        </div>
        <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4">
            <p className="text-2xl font-bold">876</p>
            <p className="text-gray-600">Assigned</p>
          </div>
          <p className="bg-sky-200 flex justify-center items-center p-2 rounded-lg">
            <span className="text-sky-700 text-2xl">+10%</span>
          </p>
        </div>
        <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4">
            <p className="text-2xl font-bold">876</p>
            <p className="text-gray-600">Assigned</p>
          </div>
          <p className="bg-sky-200 flex justify-center items-center p-2 rounded-lg">
            <span className="text-sky-700 text-2xl">+10%</span>
          </p>
        </div>
      </div>
    </>
  );
}
