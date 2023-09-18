"use client";
import React from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import {
  HiAcademicCap,
  HiChat,
  HiHand,
  HiHome,
  HiLibrary,
  HiAnnotation,
  HiSelector,
  HiArchive,
  HiCog,
} from "react-icons/hi";

export default function Recents({}) {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <div className="w-full col-span-1 relative lg:h-[80vh] h-[50vh] m-auto border p-4 rounded-lg bg-white overflow-scroll">
        <h1 className="font-bold">Recent Activities</h1>
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
            >
              <div className="bg-sky-100 rounded-lg p-3">
                <HiCog className="text-sky-600" />
              </div>
              <div className="pl-4">
                <p className="text-gray-800 font-bold">Activity {item}</p>
                <p className="text-gray-400 text-sm">Activity {item}</p>
              </div>
              <p className="lg:flex md:hidden absolute right-6 text-sm">
                {item} min ago
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
