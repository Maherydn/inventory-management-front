import React from "react";
import OrdersButton from "./OrdersButton";
import OrdersFilter from "./OrdersFilter";

const ProductsHeader = () => {
  return (
    <div className="h-18 w-full flex items-center justify-between">
      <h3 className="capitalize h-full text-xl font-semibold text-gray-600 p-6">
        Orders
      </h3>
      <div className="h-10 flex items-center gap-4 pr-6">
        <OrdersButton label="add orders" />
        <OrdersFilter />
        <OrdersButton label="orders history" />
      </div>
    </div>
  );
};

export default ProductsHeader;
