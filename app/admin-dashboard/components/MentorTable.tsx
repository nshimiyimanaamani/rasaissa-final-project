"use client";
// components/DataTable.tsx
import React, { useState, useRef } from "react";
import { data } from "../Data/data";
import {
  HiAcademicCap,
  HiChat,
  HiCog,
  HiHand,
  HiHome,
  HiLibrary,
} from "react-icons/hi";

const MentorTable: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const cancelButtonRef = useRef(null);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="w-full col-span-1 relative lg:h-[80vh] h-[60vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
        <div>
          <div className="flex justify-between">
            <h1>Mentor</h1>
            <button
              className="p-2 px-4 bg-sky-500 rounded-lg text-white"
              onClick={openModal}
            >
              Add Mentor
            </button>
          </div>
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
              >
                {/* <div className="bg-purple-100 rounded-lg p-3">
                  <HiCog className="text-purple-800" />
                </div> */}
                <div className="pl-4">
                  {/* <p className="text-gray-800 font-bold">${order.first}</p> */}
                  <p className="text-gray-800 font-bold">{order.name.first}</p>
                  <p className="text-gray-400 text-sm">{order.name.last}</p>
                </div>
                <div>
                  <p className="lg:flex md:hidden absolute text-danger right-6 text-sm text-red">
                    Delete
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* modal */}
        {open && (
          <div>
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
              <div className="w-[600px]">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex justify-between font-bold">
                    <p className="text-2xl">Add New Mentor</p>
                    <button onClick={closeModal}>X</button>
                  </div>
                  <hr className="my-4" />
                  <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        First name
                      </label>
                      <div className="">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Last name
                      </label>
                      <div className="">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        First name
                      </label>
                      <div className="">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Last name
                      </label>
                      <div className="">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        First name
                      </label>
                      <div className="">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Last name
                      </label>
                      <div className="">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <hr className="mt-5" />
                  <div className="my-5">
                    <div className="flex">
                      <button className="p-2 px-5 bg-sky-500 rounded-lg text-white">
                        {isLoading ? "Loading..." : "Save"}
                      </button>
                      <button
                        className="p-2 px-4 border rounded-lg ml-4"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MentorTable;
