"use client";

import React, { useState } from "react";
import ProductsButton from "./ProductsButton";
import ProductsFilter from "./ProductsFilter";
import ProductModal from "../modal/ProductModal";
import CategoryModal from "../modal/CategoryModal";

const ProductsHeader = () => {
  const [openProductModal, setOpenProductModal] = useState<boolean>(false);
  const [openCategoryModal, setOpenCategoryModal] = useState<boolean>(false);
  return (
    <div className="h-18 w-full flex items-center justify-between">
      <h3 className="capitalize h-full text-xl font-semibold text-gray-600 p-6">
        Overall Inventory
      </h3>
      <div className="h-10 flex items-center gap-4 pr-6">
        <ProductsButton
          label="add product"
          onClick={() => setOpenProductModal(true)}
        />
        <ProductsFilter />
        <ProductsButton
          label="add category"
          onClick={() => setOpenCategoryModal(true)}
        />
      </div>
      {openProductModal && (
        <ProductModal
          isOpen={openProductModal}
          onClose={() => setOpenProductModal(false)}
        />
      )}
      {openCategoryModal && (
        <CategoryModal
          isOpen={openCategoryModal}
          onClose={() => setOpenCategoryModal(false)}
        />
      )}
    </div>
  );
};

export default ProductsHeader;
