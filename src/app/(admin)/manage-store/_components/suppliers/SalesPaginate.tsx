import React from "react";
import SalesButton from "./SalesButton";

const SalesPaginate = () => {
  return (
    <div className="w-full h-10 flex items-center justify-between px-4">
      <SalesButton label="previous" />
      <p>Page 1 of 10</p>
      <SalesButton label="next" />
    </div>
  );
};

export default SalesPaginate;
