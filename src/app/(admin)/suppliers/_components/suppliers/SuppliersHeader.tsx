"use client";

import React, { useState } from "react";
import SuppliersButton from "./SuppliersButton";
import ProductsFilter from "./SuppliersFilter";
import SupplierModal from "../modal/SupplierModal";

const SuppliersHeader = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className="h-18 w-full flex items-center justify-between">
      <h3 className="capitalize h-full text-xl font-semibold text-gray-600 p-6">
        Suppliers
      </h3>
      <div className="h-10 flex items-center gap-4 pr-6">
        <SuppliersButton label="add suppliers" onClick={() => setOpenModal(true)} />
        <ProductsFilter />
      </div>
      {openModal && (
        <SupplierModal isOpen={openModal} onClose={() => setOpenModal(false)} />
      )}
    </div>
  );
};

export default SuppliersHeader;
