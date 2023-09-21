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
import { User } from ".prisma/client";
import axios from "axios";

interface MentorTableProps {
  // users: User[];
}
const MarksTable: React.FC<MentorTableProps> = () => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [isLoading, setisLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const users = data;
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
    doc.text("John Smith Report ", 70, 95);

    doc.autoTable({
      html: "#mentorsTable",
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
    doc.save("smith.pdf");
  };
  return (
    <>
      <div className="w-full  col-span-1 relative lg:h-[80vh] h-[60vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
        {/* <div>
          <div className="flex justify-between">
            <h1>Mentor</h1>
            <button
              className="p-2 px-4 bg-sky-500 rounded-lg text-white"
              onClick={openModal}
            >
              Add Mentor
            </button>
          </div>
        </div> */}
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
                        Name
                      </label>
                      <div className="">
                        <input
                          type="text"
                          name="name"
                          id="first-name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
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
                        Email
                      </label>
                      <div className="">
                        <input
                          type="text"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
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
                        Password
                      </label>
                      <div className="">
                        <input
                          type="text"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
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
            <h1 className="font-bold text-2xl">Marks</h1>
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
              {/* <button
                type="button"
                onClick={openModal}
                className="flex items-center justify-center text-white bg-sky-500 py-2 px-4 text-sm font-medium rounded-lg"
              >
                Add Mentor
              </button> */}
              <button
                type="button"
                onClick={createPdf}
                className="flex items-center justify-center text-white bg-gray-800  py-2 px-4 text-sm font-medium rounded-lg"
              >
                Print
              </button>
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
                      Student Id
                    </th>

                    <th scope="col" className="px-4 py-3">
                      First Name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Last Name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Quiz
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Marks
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr className="border-b " key={user.id}>
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {user.id}
                      </th>
                      <td className="px-4 py-3">{user.name.first}</td>
                      <td className="px-4 py-3">{user.name.last}</td>
                      <td className="px-4 py-3">{user.method}</td>
                      <td className="px-4 py-3">{user.total}</td>
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

export default MarksTable;
