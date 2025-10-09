"use client"

import React, { useEffect, useState } from "react";
import OverallOrdersItem from "./OverallOrdersItem";
import { OverallOrderData, OverallOrderDataType } from "../../data";

const OverallOrders = () => {
  const [data, setData] = useState<OverallOrderDataType | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
  
        setData(OverallOrderData);
      };
      fetchData();
    }, []);
  
    if (!data) return <p>Loading...</p>;
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
          quantity={data.orders.quantity}
        />

        <div className="h-24 w-px bg-slate-300"></div>
        <OverallOrdersItem
          color="text-orange-400/90"
          title="Total Received"
          quantity={data.totalRecevied.quantity}
          price={data.totalRecevied.price}
          type="Revenue"
        />

        <div className="h-24 w-px bg-slate-300"></div>
        <OverallOrdersItem
          color="text-violet-400/90"
          title="Total returned"
          quantity={data.totalReturned.quantity}
          price={data.totalReturned.price}
          type="Cost"
        />

        <div className="h-24 w-px bg-slate-300"></div>
        <OverallOrdersItem
          color="text-red-400/90"
          title="On the way"
          quantity={data.onTheWay.quantity}
          price={data.onTheWay.price}
          type="cost"
          isLowStock
        />
      </div>
    </div>
  );
};

export default OverallOrders;
