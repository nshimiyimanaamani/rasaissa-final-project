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
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Assigned, User } from ".prisma/client";
import axios from "axios";

type Assigned = {
  id: string;
  studentId: string;
  mentorId: string;
  createdAt: Date;
  student: User;
  mentor: User;
};
interface AssignedMentorProps {
  assigns: Assigned[];
  mentors: User[];
  students: User[];
}
const AssignMentor: React.FC<AssignedMentorProps> = ({
  assigns,
  mentors,
  students,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState<string | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [isLoading, setisLoading] = useState(false);

  const cancelButtonRef = useRef(null);
  const openModal = () => {
    setOpen(true);
  };
  const createPdf = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const tablePadding = 10; // Padding within each cell
    const tableMargin = { top: 105, left: 10, right: 10 };
    const currentDate = new Date();
    const formattedDate =
      currentDate.toLocaleDateString() + " " + currentDate.toLocaleTimeString();
    // Load the logo image
    const logoImage = new Image();
    logoImage.src =
      "https://res.cloudinary.com/guazy/image/upload/v1695285863/1519897331315_isevqm.jpg";
    doc.rect(0, 0, pageWidth, pageHeight);
    doc.addImage(logoImage, "JPG", 70, 20, 50, 50);

    doc.setFontSize(8);
    doc.setFont("roman", "bolder");
    doc.text(`Kigali,Rwanda`, 85, 80);
    doc.text(`info@dms.rw`, 85, 84);

    doc.setFontSize(16); // Set the font size for the title
    doc.text("Assign Mentors Report ", 70, 95);

    doc.autoTable({
      html: "#assignTable",
      // startY: tableY,
      margin: tableMargin, // Set the table margins
      styles: {
        // cellPadding: tablePadding, // Set cell padding
        // Add other styles as needed
      },
    });
    doc.setFontSize(10);
    // doc.text(`Printed on: ${formattedDate}`, 10, 10);
    const footerText = `Printed on: ${formattedDate}`;
    const textWidth = doc.getStringUnitWidth(footerText) * 10; // Calculate text width
    // const textX = (pageWidth - textWidth) / 2; // Center text horizontally
    const textX = 10;
    const textY = pageHeight - 10; // Position text at the bottom

    doc.text(footerText, textX, textY);
    doc.save("assign.pdf");
  };
  const closeModal = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    try {
      setisLoading(true);

      // Create an object with the assignment data to send to the API
      const assignmentData = {
        mentorId: selectedMentor,
        studentId: selectedStudent,
        // Add other assignment data here
      };

      // Make a POST request to your API route
      const response = await axios.post("/api/assign", assignmentData);

      // Handle the response (e.g., show success message, close modal, etc.)
      console.log("Assignment submitted successfully!", response.data);

      // Reset the form and loading state
      setSelectedMentor(null);
      setSelectedStudent(null);
      setisLoading(false);
      closeModal();
    } catch (error) {
      // Handle errors (e.g., show error message)
      console.error("Error submitting assignment:", error);
      setisLoading(false);
    }
  };

  return (
    <>
      <div className="w-full col-span-1 relative lg:h-[80vh] h-[60vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
        <div>
          {/* <div className="flex justify-between">
            <h1>Assign Mentor</h1>
            <button
              className="p-2 px-4 bg-sky-500 rounded-lg text-white"
              onClick={openModal}
            >
              Assign
            </button>
          </div> */}
          {/* <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
              >
                <div className="bg-purple-100 rounded-lg p-3">
                  <HiCog className="text-purple-800" />
                </div>
                <div className="pl-4">
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
          </ul> */}
        </div>
        {/* modal */}
        {open && (
          <div>
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
              <div className="w-[600px]">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex justify-between font-bold">
                    <p className="text-2xl">Assign Mentor</p>
                    <button onClick={closeModal}>X</button>
                  </div>
                  <hr className="my-4" />
                  <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Mentor
                      </label>
                      <div className="">
                        <select
                          id="mentor-select"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e) => setSelectedMentor(e.target.value)}
                          value={selectedMentor || ""}
                        >
                          <option value="">Select Mentor</option>
                          {mentors.map((mentor) => (
                            <option key={mentor.id} value={mentor.id}>
                              {mentor.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Student
                      </label>
                      <div className="">
                        <select
                          id="mentor-select"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e) => setSelectedStudent(e.target.value)}
                          value={selectedStudent || ""}
                        >
                          <option value="">Select Student</option>
                          {students.map((student) => (
                            <option key={student.id} value={student.id}>
                              {student.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-5" />
                  <div className="my-5">
                    <div className="flex">
                      <button
                        className="p-2 px-5 bg-sky-500 rounded-lg text-white"
                        onClick={handleSubmit}
                      >
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
        <div>
          <div className="mt-5 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 mb-5">
            <div className="w-full md:w-1/2">
              {/* <input
                type="text"
                name="last-name"
                placeholder="Search.."
                id="last-name"
                className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
              /> */}
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <button
                type="button"
                onClick={openModal}
                className="flex items-center justify-center text-white bg-sky-500 py-2 px-4 text-sm font-medium rounded-lg"
              >
                Assign Mentor
              </button>
              <button
                type="button"
                onClick={createPdf}
                className="flex items-center justify-center text-white bg-gray-800 py-2 px-4 text-sm font-medium rounded-lg"
              >
                Print
              </button>
            </div>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table
                className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border"
                id="assignTable"
              >
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Mentor Name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Student Name
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {assigns.map((assign) => (
                    <tr className="border-b " key={assign.id}>
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {assign.mentor.name}
                      </th>
                      <td className="px-4 py-3">{assign.student.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignMentor;
