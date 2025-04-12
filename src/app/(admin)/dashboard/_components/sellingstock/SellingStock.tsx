import React from "react";
import SellingStockTable from "./SellingStockTable";

const SellingStock = () => {
  return (
    <div className="flex flex-col w-2/3 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center justify-between h-20 px-6">
        <h4 className="capitalize text-xl font-semibold text-gray-600">
          Top Selling Stock
        </h4>
        <button className="text-blue-300 hover:text-blue-500 duration-200 cursor-pointer ">
          see all
        </button>
      </div>
      <div className="w-full">
        <SellingStockTable />
      </div>
    </div>
  );
};

export default SellingStock;
