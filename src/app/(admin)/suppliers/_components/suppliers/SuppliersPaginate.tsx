import React from "react";
import SuppliersButton from "./SuppliersButton";

const SuppliersPaginate = () => {
  return (
    <div className="w-full h-10 flex items-center justify-between px-4">
      <SuppliersButton label="previous" />
      <p>Page 1 of 10</p>
      <SuppliersButton label="next" />
    </div>
  );
};

export default SuppliersPaginate;
