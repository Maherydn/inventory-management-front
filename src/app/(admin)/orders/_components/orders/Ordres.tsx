import React from "react";
import OrdersTable from "./OrdersTable";
import OrdersHeader from "./OrdersHeader";
import OrdersPaginate from "./OrdersPaginate";

const Orders = () => {
  return (
    <div className="bg-white rounded-xl pb-4 space-y-4 shadow-md w-full`">
      <OrdersHeader />
      <OrdersTable />
      <OrdersPaginate />
    </div>
  );
};

export default Orders;
