"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderBar from "../components/HeaderBar";
import {
  HiAcademicCap,
  HiChat,
  HiHand,
  HiHome,
  HiLibrary,
} from "react-icons/hi";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import UserDropdown from "../components/UserDropDown";

export default function Layout({ children }) {
  const pathname = usePathname();
  const admin = false;
  return (
    <>
      <div className="flex">
        <div className="fixed w-20 lg:w-60 h-screen p-4 border-r-[1px] flex flex-col justify-between">
          {admin ? (
            <div className="flex flex-col ">
              <Link href="#">
                <div className="  p-3 rounded-lg flex mb-16 border">
                  <HiAcademicCap size={30} className="mt-1" />
                  <span className="hidden lg:mx-3 text-2xl font-bold lg:block">
                    DMS
                  </span>
                  <HiAcademicCap size={30} className="mt-1 hidden lg:block" />
                </div>
              </Link>
              <Link href="/admin-dashboard">
                <div
                  className={` p-3 rounded-lg flex mb-4 ${
                    pathname === "/admin-dashboard"
                      ? "bg-sky-500 text-white"
                      : "bg-gray-100 "
                  }`}
                >
                  <HiHome size={20} />
                  <span className="hidden lg:ml-3 lg:block">Dashboard</span>
                </div>
              </Link>

              <Link href="/admin-dashboard/mentors">
                <div
                  className={` p-3 rounded-lg flex mb-4 ${
                    pathname === "/admin-dashboard/mentors"
                      ? "bg-sky-500 text-white"
                      : "bg-gray-100 "
                  }`}
                >
                  <HiChat size={20} />
                  <span className="hidden lg:ml-3 lg:block">Mentors</span>
                </div>
              </Link>
              <Link href="/admin-dashboard/assign-mentor">
                <div
                  className={` p-3 rounded-lg flex mb-4 ${
                    pathname === "/admin-dashboard/assign-mentor"
                      ? "bg-sky-500 text-white"
                      : "bg-gray-100 "
                  }`}
                >
                  <HiChat size={20} />
                  <span className="hidden lg:ml-3 lg:block">Assign Mentor</span>
                </div>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col ">
              <Link href="#">
                <div className="  p-3 rounded-lg flex mb-16 border">
                  <HiAcademicCap size={30} className="mt-1" />
                  <span className="hidden lg:mx-3 text-2xl font-bold lg:block">
                    DMS
                  </span>
                  <HiAcademicCap size={30} className="mt-1 hidden lg:block" />
                </div>
              </Link>
              <Link href="/admin-dashboard">
                <div
                  className={` p-3 rounded-lg flex mb-4 ${
                    pathname === "/admin-dashboard"
                      ? "bg-sky-500 text-white"
                      : "bg-gray-100 "
                  }`}
                >
                  <HiHome size={20} />
                  <span className="hidden lg:ml-3 lg:block">Dashboard</span>
                </div>
              </Link>

              <Link href="/admin-dashboard/students">
                <div
                  className={` p-3 rounded-lg flex mb-4 ${
                    pathname === "/admin-dashboard/students"
                      ? "bg-sky-500 text-white"
                      : "bg-gray-100 "
                  }`}
                >
                  <HiChat size={20} />
                  <span className="hidden lg:ml-3 lg:block">Students</span>
                </div>
              </Link>
              <Link href="/admin-dashboard/marks">
                <div
                  className={` p-3 rounded-lg flex mb-4 ${
                    pathname === "/admin-dashboard/marks"
                      ? "bg-sky-500 text-white"
                      : "bg-gray-100 "
                  }`}
                >
                  <HiChat size={20} />
                  <span className="hidden lg:ml-3 lg:block">Marks</span>
                </div>
              </Link>
              <Link href="/admin-dashboard/quizlet">
                <div
                  className={` p-3 rounded-lg flex mb-4 ${
                    pathname === "/admin-dashboard/quizlet"
                      ? "bg-sky-500 text-white"
                      : "bg-gray-100 "
                  }`}
                >
                  <HiChat size={20} />
                  <span className="hidden lg:ml-3 lg:block">Quizlet</span>
                </div>
              </Link>
            </div>
          )}
          <div>
            <div></div>
          </div>
        </div>
        <div className="flex flex-col ml-20 lg:ml-60 w-full h-screen bg-gray-100">
          <HeaderBar />
          <main className="px-4 bg-gray-100 w-full">{children}</main>
        </div>
      </div>
    </>
  );
}
