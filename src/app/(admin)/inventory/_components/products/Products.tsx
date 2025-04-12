import React from "react";
import ProductsTable from "./ProductsTable";
import ProductsHeader from "./ProductsHeader";
import ProductsPaginate from "./ProductsPaginate";

const Products = () => {
  return (
    <div className="bg-white rounded-xl pb-4 space-y-4 shadow-md w-full`">
      <ProductsHeader />
      <ProductsTable />
      <ProductsPaginate />
    </div>
  );
};

export default Products;
