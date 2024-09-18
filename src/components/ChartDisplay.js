// src/ChartDisplay.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import "../styles/Barchart.css";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const ChartDisplay = ({ chartData, year }) => {
  const parts = chartData.labels[0].split("/");
  const options = {
    //to mark labels for x,y axis.
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Date", // Label for the x-axis
          color: "#6C48C5", // Optional: color of the label text
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Value", // Label for the y-axis
          color: "#6C48C5",
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h3 className="chart-year">
        {parts[1]}, {year}
      </h3>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ChartDisplay;
