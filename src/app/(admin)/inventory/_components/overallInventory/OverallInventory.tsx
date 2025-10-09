"use client";

import React, { useEffect, useState } from "react";
import OverallInventoryItem from "./OverallInventoryItem";
import { OverallInventoryData, OverallInventoryDataType } from "../../data";

const OverallInventory: React.FC = () => {
  const [data, setData] = useState<OverallInventoryDataType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // 🔹 FakeData temporaire (remplacer par fetch réel)

      setData(OverallInventoryData);
    };
    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="bg-white rounded-xl p-2 space-y-4 shadow-md">
      <h3 className="capitalize h-18 flex items-center text-xl font-semibold text-gray-600 p-4">
        Overall Inventory
      </h3>
      <div className="w-full flex justify-around items-center gap-10">
        <OverallInventoryItem
          color="text-blue-400/90"
          isCategory
          title="Categories"
          quantity={data.categories.quantity}
        />

        <div className="h-24 w-px bg-slate-300"></div>
        <OverallInventoryItem
          color="text-orange-400/90"
          title="Total Products"
          quantity={data.totalProducts.quantity}
          price={data.totalProducts.price}
          type="Revenue"
        />

        <div className="h-24 w-px bg-slate-300"></div>
        <OverallInventoryItem
          color="text-violet-400/90"
          title="Top Selling"
          quantity={data.topSelling.quantity}
          price={data.topSelling.price}
          type="Cost"
        />

        <div className="h-24 w-px bg-slate-300"></div>
        <OverallInventoryItem
          color="text-red-400/90"
          title="Low Stocks"
          quantity={data.lowStocks.quantity}
          price={data.lowStocks.price}
          type="Not In stock"
          isLowStock
        />
      </div>
    </div>
  );
};

export default OverallInventory;
