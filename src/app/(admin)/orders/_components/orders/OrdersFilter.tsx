import { FilterIcon } from "@/app/(admin)/inventory/_assets/icon";
import React from "react";

const OrdersFilter = () => {
  return (
    <div className="h-full  w-fit border border-gray-400 text-gray-600 font-semibold px-6 py-3  rounded-md  cursor-pointer flex gap-5 items-center">
      <div>
        <FilterIcon />
      </div>
      <p className="capitalize text-gray-500 font-semibold  ">filter</p>
    </div>
  );
};

export default OrdersFilter;
