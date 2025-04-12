import React from "react";
import ProductsTable from "./ProductsTable";
import ProductsHeader from "./ProductsHeader";
import ProductsPaginate from "./ProductsPaginate";

const Products = () => {
  return (
    <>
      <ProductsHeader />
      <ProductsTable />
      <ProductsPaginate />
    </>
  );
};

export default Products;
