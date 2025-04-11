"use client"; // ✅ Doit être tout en haut, avant tout import

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { Weight } from "lucide-react";

// Enregistrement des composants nécessaires à ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      position: 'bottom' as const,
      labels: {
        usePointStyle: true,       // 🔵 Pastilles rondes
        pointStyle: 'circle',
        font: {
          size: 14,
          family: "'Segoe UI', sans-serif",
        },
        color: '#333',
        padding: 20,
      },
    },
    title: {
      display: true,
      text: 'Order Summary',
      weight: 'bold', 
      font: {
        size: 20,
        family: "'Segoe UI', sans-serif",
      },
    },
  },
};

// ✅ Labels des mois
const labels = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// Données aléatoires générées avec Faker
export const data = {
  labels,
  datasets: [
    {
      label: "Purchases",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderRadius: { topLeft: 10, topRight: 10 },
    },
    {
      label: "Sales",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      borderRadius: { topLeft: 10, topRight: 10 },
    },
  ],
};

// Composant du graphique
const BarChart = () => {
  return (
    <div className="w-full h-full">
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
