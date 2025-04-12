import Link from "next/link";
import React from "react";
import OverallInventory from "./components/overallInventory/OverallInventory";
import Products from "./components/products/Products";

const page = () => {
  return (
    <div className="h-full w-full flex flex-col p-4 gap-6 overflow-y-auto">
      <div className="bg-white rounded-xl p-2 space-y-4 shadow-md">
        <OverallInventory />
      </div>
      <div className="bg-white rounded-xl pb-4 space-y-4 shadow-md w-full`">
        <Products/>
      </div>
    </div>
  );
};

export default page;
