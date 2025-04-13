import React from "react";

const BestSellingProductHeader = () => {
  return (
    <div className="h-18 w-full p-4 flex justify-between ">
      <h3 className="capitalize h-10 flex items-center text-xl font-semibold  text-gray-600">
        Best selling product
      </h3>
      <p className="text-blue-500 mr-10">See all</p>
    </div>
  );
};

export default BestSellingProductHeader;
