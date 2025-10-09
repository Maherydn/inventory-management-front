"use client";

import React, { useState } from "react";
import OrdersButton from "./OrdersButton";
import OrdersFilter from "./OrdersFilter";
import OrderModal from "../modal/OrderModal";

const ProductsHeader = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className="h-18 w-full flex items-center justify-between">
      <h3 className="capitalize h-full text-xl font-semibold text-gray-600 p-6">
        Orders
      </h3>
      <div className="h-10 flex items-center gap-4 pr-6">
        <OrdersButton label="add orders" onClick={() => setOpenModal(true)} />
        <OrdersFilter />
        <OrdersButton label="orders history" />
      </div>
      {openModal && (
        <OrderModal isOpen={openModal} onClose={() => setOpenModal(false)} />
      )}
    </div>
  );
};

export default ProductsHeader;
