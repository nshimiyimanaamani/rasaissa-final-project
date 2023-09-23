"use client"
import React, { useState, useRef } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";
import Link from "next/link";

type QuizData = {
  id: string;
  title: string;
  questionCount: number;
  createdAt: Date;
};

interface QuizTableProps {
  quizData: QuizData[];
}

const QuizletTable: React.FC<QuizTableProps> = ({ quizData }) => {
  console.log(quizData)
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
    doc.text(`Kigali, Rwanda`, 85, 80);
    doc.text(`info@dms.rw`, 85, 84);

    doc.setFontSize(16); // Set the font size for the title
    doc.text("Students Report ", 70, 95);

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
    doc.save("quizlet.pdf");
  };

  return (
    <>
      <div className="w-full col-span-1 relative lg:h-[80vh] h-[60vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
        <div>
          <div className="mt-5 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 mb-5">
            <h1 className="font-bold text-2xl">Quizlets</h1>
            <div className="w-full md:w-1/2"></div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
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
                  {quizData && quizData.map((quiz) => (
                    <tr key={quiz.id} className="border-b ">
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {/* Make the quiz title clickable */}
                        <a href={`/performance-test/${quiz.id}`}>{quiz.title}</a>
                      </th>
                      <td className="px-4 py-3">{quiz.questionCount}</td>
                      <td className="px-4 py-3">{quiz.createdAt.toString()}</td>
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

export default QuizletTable;
