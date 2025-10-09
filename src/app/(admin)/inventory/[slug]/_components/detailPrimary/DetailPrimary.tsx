import React from "react";
import DetailPrimaryItem from "./DetailPrimaryItem";

// Définition du type pour les props
type DetailPrimaryProps = {
  productName: string;
  productRef: string;
  productCategory: string;
  expiryDate: string;
  thresholdValue: number;
};

const DetailPrimary: React.FC<DetailPrimaryProps> = ({
  productName,
  productRef,
  productCategory,
  expiryDate,
  thresholdValue,
}) => {
  return (
    <div className="space-y-4 w-full">
      <h3 className="text-lg text-gray-700 font-semibold border-b pb-1">
        Primary Details
      </h3>
      <DetailPrimaryItem label="Product name" value={productName} />
      <DetailPrimaryItem label="Product Ref" value={productRef} />
      <DetailPrimaryItem label="Product category" value={productCategory} />
      <DetailPrimaryItem label="Expiry Date" value={expiryDate} />
      <DetailPrimaryItem label="Threshold Value" value={thresholdValue} />
    </div>
  );
};

export default DetailPrimary;
