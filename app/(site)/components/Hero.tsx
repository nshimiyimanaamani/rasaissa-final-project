"use client";
import Image from "next/image";
import Link from "next/link";
import { HiAcademicCap } from "react-icons/hi";
export default function HeaderBar({}) {
  const heroImg = {
    height: "90vh",
  };
  return (
    <>
      <section className="">
        <div
          style={heroImg}
          className=" bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply"
        >
          <div className="px-4 mx-auto max-w-screen-xl text-center py-40 md:py-14 lg:py-40">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl md:pt-10 lg:pt-10">
              Digital Mentor System
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              The Digital Mentor System is an innovative concept rooted in the
              core principles of mentorship. Mentorship, a time-honored
              tradition, involves a seasoned and experienced individual guiding
              a less-experienced person to achieve their goals.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                href="/auth"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 dark:focus:ring-sky-900"
              >
                Get started
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <HiAcademicCap />
                </svg>
              </Link>
              <a
                href="#"
                className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
