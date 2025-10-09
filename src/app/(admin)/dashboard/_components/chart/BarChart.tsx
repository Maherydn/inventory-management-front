"use client";

import React, { useEffect, useState } from "react";
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
import { barChartData } from "../../data";

// 🔹 Enregistrement des composants nécessaires
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// 🔹 Type pour les données du graphique
type BarChartDataType = {
  purchases: number[];
  sales: number[];
};

// 🔹 Labels statiques
const labels = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// 🔹 Options du graphique
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        font: { size: 14, family: "'Segoe UI', sans-serif" },
        color: "#333",
        padding: 20,
      },
    },
    title: {
      display: true,
      text: "Order Summary",
      weight: "bold",
      font: { size: 20, family: "'Segoe UI', sans-serif" },
    },
  },
};

const BarChart: React.FC = () => {
  const [data, setData] = useState<BarChartDataType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // 🔹 Fake data pour simuler fetch depuis le back
      setData(barChartData);
    };
    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  const chartData = {
    labels,
    datasets: [
      {
        label: "Purchases",
        data: data.purchases,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderRadius: { topLeft: 10, topRight: 10 },
      },
      {
        label: "Sales",
        data: data.sales,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderRadius: { topLeft: 10, topRight: 10 },
      },
    ],
  };

  return (
    <div className="h-full w-[calc(45vw-225px)]">
      <Bar options={options} data={chartData} />
    </div>
  );
};

export default BarChart;
