"use client";

import React, { useEffect, useState } from "react";
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
import { LineChartData } from "../../data";

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement);

// 🔹 Type pour les données du graphique
type LineChartDataType = {
  purchases: number[];
  sales: number[];
};

// 🔹 Labels statiques
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
        font: {
          size: 14,
          family: "'Segoe UI', sans-serif",
        },
        color: "#333",
        padding: 20,
      },
    },
    title: {
      display: true,
      text: "Order Summary",
      weight: "bold",
      font: {
        size: 20,
        family: "'Segoe UI', sans-serif",
      },
    },
  },
};

const LineChart: React.FC = () => {
  const [data, setData] = useState<LineChartDataType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // 🔹 Fake data pour simuler fetch depuis le back
      setData(LineChartData);
    };
    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  const chartData = {
    labels,
    datasets: [
      {
        label: "Ordered",
        data: data.purchases,
        borderColor: "rgba(255, 99, 132, 0.5)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
      },
      {
        label: "Delivered",
        data: data.sales,
        borderColor: "rgba(53, 162, 235, 0.5)",
        backgroundColor: "rgba(53, 162, 235, 0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="h-full w-[calc(45vw-225px)]">
      <Line options={options} data={chartData} />
    </div>
  );
};

export default LineChart;
