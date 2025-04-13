import React from "react";
import OrdersButton from "./OrdersButton";

const OrdersPaginate = () => {
  return (
    <div className="w-full h-10 flex items-center justify-between px-4">
      <OrdersButton label="previous" />
      <p>Page 1 of 10</p>
      <OrdersButton label="next" />
    </div>
  );
};

export default OrdersPaginate;
