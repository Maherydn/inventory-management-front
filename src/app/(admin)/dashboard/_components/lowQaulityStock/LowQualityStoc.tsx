import React from "react";
import LowQualityStockTable from "./LowQualityStockTable";

const LowQualityStoc = () => {
  return (
    <div className="flex flex-col w-1/3 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center justify-between h-20 px-6">
        <h4 className="capitalize text-xl font-semibold text-gray-600">
          Low Quantity Stock
        </h4>
        <button className="text-blue-300 hover:text-blue-500 duration-200 cursor-pointer ">
          see all
        </button>
      </div>
      <LowQualityStockTable />
    </div>
  );
};

export default LowQualityStoc;
