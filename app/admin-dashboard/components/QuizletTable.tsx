"use client";
// components/DataTable.tsx
import React, { useState, useRef } from "react";
import { data } from "../Data/mentors";
import {
  HiAcademicCap,
  HiChat,
  HiCog,
  HiHand,
  HiHome,
  HiLibrary,
} from "react-icons/hi";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { User } from ".prisma/client";
import axios from "axios";
import Link from "next/link";

interface MentorTableProps {
  //   users: User[];
}
const QuizletTable: React.FC<MentorTableProps> = (users) => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [isLoading, setisLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const newUser = {
      name,
      email,
      password,
    };

    try {
      setisLoading(true);
      const response = await axios.post("/api/mentors", newUser, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        // User created successfully, you can show a success message or perform any other actions
        console.log("User created successfully");
        // clear email state
        setEmail("");
        setPassword("");
        setName("");
        setisLoading(false);
        // Close the modal
        closeModal();
      } else {
        // Handle errors, display an error message, etc.
        console.log(response.status);
        console.error("Failed to create user");
        setisLoading(false);
      }
    } catch (error) {
      console.error("Error creating user", error);
      setisLoading(false);
    }
  };

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  const createPdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(16); // Set the font size for the title
    doc.text("Mentors Report Table", 14, 10);
    doc.autoTable({ html: "#mentorsTable" });
    doc.save("mentors.pdf");
  };
  return (
    <>
      <div className="w-full col-span-1 relative lg:h-[80vh] h-[60vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
        <div>
          <div className="mt-5 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 mb-5">
            <div className="w-full md:w-1/2"></div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <Link
                href="/admin-dashboard/quizlet/create"
                className="flex items-center justify-center text-white bg-sky-500  py-2 px-4 text-sm font-medium rounded-lg"
              >
                Create Quizlet
              </Link>
            </div>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table
                className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border"
                id="mentorsTable"
              >
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Title
                    </th>
                    <th scope="col" className="px-4 py-3">
                      N.Questions
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Created At
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap "
                    >
                      hi
                    </th>
                    <td className="px-4 py-3">hi</td>
                    <td className="px-4 py-3">hi</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizletTable;
