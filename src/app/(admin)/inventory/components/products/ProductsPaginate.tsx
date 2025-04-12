import React from "react";
import ProductsButton from "./ProductsButton";

const ProductsPaginate = () => {
  return (
    <div className="w-full h-10 flex items-center justify-between px-4">
      <ProductsButton label="previous" />
      <p>Page 1 of 10</p>
      <ProductsButton label="next" />
    </div>
  );
};

export default ProductsPaginate;
