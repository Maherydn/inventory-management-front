import React from "react";
import OverallInventoryItem from "./OverallInventoryItem";

const OverallInventory = () => {
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
          quantity={12}
        />

        <div className="h-24 w-px bg-slate-300"></div>
        <OverallInventoryItem
          color="text-orange-400/90"
          title="Total Products"
          quantity={12}
          price={25000}
          type="Revenue"
        />

        <div className="h-24 w-px bg-slate-300"></div>
        <OverallInventoryItem
          color="text-violet-400/90"
          title="Top Selling"
          quantity={5}
          price={2500}
          type="Cost"
        />

        <div className="h-24 w-px bg-slate-300"></div>
        <OverallInventoryItem
          color="text-red-400/90"
          title="Low Stocks"
          quantity={12}
          price={2}
          type="Not In stock"
          isLowStock
        />
      </div>
    </div>
  );
};

export default OverallInventory;
