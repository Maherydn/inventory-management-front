import React from "react";
import SuppliersHeader from "./SuppliersHeader";
import SuppliersTable from "./SuppliersTable";
import SuppliersPaginate from "./SuppliersPaginate";
const Suppliers = () => {
  return (
    <div className="bg-white rounded-xl pb-4 space-y-4 shadow-md w-full`">
      <SuppliersHeader />
      <SuppliersTable />
      <SuppliersPaginate />
    </div>
  );
};

export default Suppliers;
