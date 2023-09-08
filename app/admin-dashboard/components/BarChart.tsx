"use client";
import React from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";
ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  plugins
);

export default function BarChart({}) {
  const initialChartData = {
    labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Lorem #",
        data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgb(53, 162, 235, 0.4)",
      },
    ],
  };

  const initialChartOptions = {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Lorem Ipsum",
    },

    maintainAspectRatio: false,
    responsive: true,
  };
  const [chartData, setChartData] = useState(initialChartData);
  const [chartOptions, setChartOptions] = useState(initialChartOptions);
  useEffect(() => {}, []);
  return (
    <>
      <div className="w-full md:col-span-2 relative  lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
}
