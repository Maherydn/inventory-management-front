import React from "react";

// Définition du type des props
type DetailSupplierProps = {
  productName: string;
  clientCode: string;
};

const DetailSupplier: React.FC<DetailSupplierProps> = ({ productName, clientCode }) => {
  return (
    <div className="space-y-4 w-full">
      <h3 className="text-lg text-gray-700 font-semibold border-b pb-1">
        Supplier Details
      </h3>

      <div className="flex justify-between w-full text-sm text-gray-600">
        <span className="w-1/2">Product name</span>
        <span className="w-1/2 text-right font-medium text-gray-600">
          {productName}
        </span>
      </div>

      <div className="flex justify-between w-full text-sm text-gray-600">
        <span className="w-1/2">Client code</span>
        <span className="w-1/2 text-right font-medium text-gray-600">
          {clientCode}
        </span>
      </div>
    </div>
  );
};

export default DetailSupplier;
