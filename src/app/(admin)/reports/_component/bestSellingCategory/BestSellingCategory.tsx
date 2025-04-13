import React from "react";
import BestSellingCategoryTable from "./BestSellingCategoryTable";

const BestSellingCategory = () => {
  return (
    <div className="bg-white w-2/5 py-4 rounded-lg space-y-6 h-full shadow-md  ">
      <h3 className="capitalize h-10 px-4 flex items-center text-xl font-semibold  text-gray-600">
        Best selling category
      </h3>
      <BestSellingCategoryTable/>
    </div>
  );
};

export default BestSellingCategory;
