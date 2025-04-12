import Link from "next/link";
import React from "react";
import OverallInventory from "./overallInventory/OverallInventory";

const page = () => {
  return (
    <div className="h-full w-full flex flex-col p-4 gap-2">
      <div className="bg-white rounded-xl p-2 space-y-4 shadow-md">
        <OverallInventory/>
      </div>
      <div></div>
    </div>
  );
};

export default page;
