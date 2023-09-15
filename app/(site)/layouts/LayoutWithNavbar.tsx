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
import { Router, useRouter } from "next/router";
import { usePathname } from "next/navigation";
import UserDropdown from "../components/UserDropDown";

export default function Layout({ children }) {
  const pathname = usePathname();
  const scrollBehaviour = {
    scroll: "smooth",
  };
  return (
    <>
      <div style={scrollBehaviour}>
        <nav className="bg-gray-100  fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="#">
              <div className="  p-3 rounded-lg flex  border">
                <HiAcademicCap size={30} className="mt-1" />
                <span className=" mx-3 text-2xl font-bold lg:block">DMS</span>
                <HiAcademicCap size={30} className="mt-1  lg:block" />
              </div>
            </Link>
            <div className="flex md:order-2">
              <Link href="/auth">
                <button
                  type="button"
                  className="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                >
                  Get started
                </button>
              </Link>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  {/* <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                /> */}
                  =
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-100">
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white bg-sky-700 rounded md:bg-transparent md:text-sky-700 md:p-0 md:dark:text-sky-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <Link href="#about">About</Link>
                </li>
                {/* <li>
                <Link href="#section2">Services</Link>
              </li> */}
                <li>
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="bg-gray-100 w-full">{children}</main>

        <footer className="bg-white shadow pt-4  dark:bg-gray-800">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <Link href="#">
              <div className="text-white  p-3 rounded-lg flex  border">
                <HiAcademicCap size={30} className="mt-1" />
                <span className=" mx-3 text-2xl font-bold lg:block">DMS</span>
                <HiAcademicCap size={30} className="mt-1  lg:block" />
              </div>
            </Link>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <Link href="#about" className="mr-4 hover:underline md:mr-6 ">
                  About
                </Link>
              </li>

              <li>
                <Link href="#contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
