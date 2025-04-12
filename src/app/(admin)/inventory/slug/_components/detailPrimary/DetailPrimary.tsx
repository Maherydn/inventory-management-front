import React from "react";
import DetailPrimaryItem from "./DetailPrimaryItem";

const DetailPrimary = () => {
  return (
    <div className="space-y-4 w-full">
      <h3 className="text-lg text-gray-700 font-semibold border-b pb-1">
        Primary Details
      </h3>
      <DetailPrimaryItem label="Product name" value={"Maggi"} />

      <DetailPrimaryItem label="Product Ref" value={"4618"} />

      <DetailPrimaryItem label="Product category" value={"Instant food"} />

      <DetailPrimaryItem label="Expiry Date" value={"13/04/23"} />

      <DetailPrimaryItem label="Threshold Value" value={12} />
    </div>
  );
};

export default DetailPrimary;
