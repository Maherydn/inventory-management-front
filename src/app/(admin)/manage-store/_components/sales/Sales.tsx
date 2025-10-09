import React from "react";
import SalesHeader from "./SalesHeaders";
import InvoiceTable from "./InvoiceTable";
import SalesPaginate from "./SalesPaginate";
const Sales = () => {
  return (
    <div className="bg-white rounded-xl pb-4 space-y-4 shadow-md w-full`">
      <SalesHeader />
      <InvoiceTable />
      <SalesPaginate />
    </div>
  );
};

export default Sales;
