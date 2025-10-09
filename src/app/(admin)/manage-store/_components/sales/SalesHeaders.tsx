"use client";

import React, { Suspense, useState } from "react";
import SalesButton from "./SalesButton";
import InvoiceFilter from "./InvoiceFilter";
import Cart from "../cart/Cart";

const SalesHeaders = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="h-18 w-full flex items-center justify-between relative">
      <h3 className="capitalize h-full text-xl font-semibold text-gray-600 p-6">
        Sales
      </h3>
      <div className="h-10 flex items-center gap-4 pr-6">
        <SalesButton label="Cart" onClick={() => setShowCart(true)} />
        <Suspense fallback={<div className="w-24 h-10 bg-slate-200"></div>}>
          <InvoiceFilter />
        </Suspense>
      </div>
      <Cart showCart={showCart} setShowCart={setShowCart} />
    </div>
  );
};

export default SalesHeaders;
