import React from "react";
import ProductsButton from "./ProductsButton";
import ProductsFilter from "./ProductsFilter";

const ProductsHeader = () => {
  return (
    <div className="h-18 w-full flex items-center justify-between">
      <h3 className="capitalize h-full text-xl font-semibold text-gray-600 p-6">
        Overall Inventory
      </h3>
      <div className="h-10 flex items-center gap-4 pr-6">
        <ProductsButton label="add product" />
        <ProductsFilter />
        <ProductsButton label="download all" />
      </div>
    </div>
  );
};

export default ProductsHeader;
