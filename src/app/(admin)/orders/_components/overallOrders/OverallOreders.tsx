import React from "react";
import OverallOrdersItem from "./OverallOrdersItem";

const OverallOrders = () => {
  return (
    <div className="bg-white rounded-xl p-2 space-y-4 shadow-md">
      <h3 className="capitalize h-18 flex items-center text-xl font-semibold text-gray-600 p-4">
        Overall Orders
      </h3>
      <div className="w-full flex justify-around items-center gap-10">
        <OverallOrdersItem
          color="text-blue-400/90"
          isOrders
          title="Total Orders"
          quantity={37}
        />

        <div className="h-24 w-px bg-slate-300"></div>
        <OverallOrdersItem
          color="text-orange-400/90"
          title="Total Received"
          quantity={32}
          price={25000}
          type="Revenue"
        />

        <div className="h-24 w-px bg-slate-300"></div>
        <OverallOrdersItem
          color="text-violet-400/90"
          title="Total returned"
          quantity={5}
          price={2500}
          type="Cost"
        />

        <div className="h-24 w-px bg-slate-300"></div>
        <OverallOrdersItem
          color="text-red-400/90"
          title="On the way"
          quantity={12}
          price={2356}
          type="cost"
          isLowStock
        />
      </div>
    </div>
  );
};

export default OverallOrders;
