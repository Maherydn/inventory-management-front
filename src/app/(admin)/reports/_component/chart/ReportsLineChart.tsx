"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

// Enregistrement des composants nécessaires à ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Options du graphique
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        usePointStyle: true, // 🔵 Pour les pastilles rondes
        pointStyle: "circle", // 🔵 Style en cercle (rond)
        font: {
          size: 14,
          family: "'Segoe UI', sans-serif",
        },
        color: "#333",
        padding: 20,
      },
    },
  },
};

// Étiquettes des mois
const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Données aléatoires générées avec Faker
export const data = {
  labels,
  datasets: [
    {
      label: "Ordered",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      borderColor: "rgba(255, 99, 132, 0.5)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      tension: 0.4,
    },
    {
      label: "Delivered",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      borderColor: "rgba(53, 162, 235, 0.5)",
      backgroundColor: "rgba(53, 162, 235, 0.2)",
      tension: 0.4,
    },
  ],
};

// Composant du graphique
const ReportsLineChart = () => {
  return (
    <div className="h-full min-w-0 w-[calc(95vw-450px)]">
      <Line options={options} data={data} width={80} height={100} />
    </div>
  );
};

export default ReportsLineChart;
