import React from "react";

const DetailSupplier = () => {
  return (
    <div className="space-y-4 w-full">
      <h3 className="text-lg text-gray-700 font-semibold border-b pb-1">
        Supplier Details
      </h3>

      <div className="flex justify-between w-full text-sm text-gray-600">
        <span className="w-1/2">Product name</span>
        <span className="w-1/2 text-right font-medium text-gray-600">
          Maggi
        </span>
      </div>

      <div className="flex justify-between w-full text-sm text-gray-600">
        <span className="w-1/2">Client code</span>
        <span className="w-1/2 text-right font-medium text-gray-600">4618</span>
      </div>
    </div>
  );
};

export default DetailSupplier;
