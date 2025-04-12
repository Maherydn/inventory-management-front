import React from "react";

type OverallInventoryItemProps = {
  color: string;
  isCategory?: boolean;
  isLowStock?: boolean;
  title: string;
  quantity: number;
  price?: number;
  type?: string;
};

const OverallInventoryItem: React.FC<OverallInventoryItemProps> = ({
  color,
  isCategory,
  isLowStock,
  title,
  quantity,
  price,
  type,
}) => {
  return (
    <div
      className={`h-32 flex flex-col gap-3 ${isCategory ? "w-1/8" : "min-w-1/6"}`}
    >
      <h4 className={`capitalize text-xl font-semibold ${color}`}>{title}</h4>
      <div className="flex justify-between gap-4 text-lg text-gray-600 font-semibold">
        <p>{quantity}</p>
        {!isCategory && <p>{!isLowStock && '₹'} {price}</p>}
      </div>
      <div className="flex justify-between text-md text-gray-400">
        <p>{isLowStock ? 'Ordered' : 'Last 7 days'}</p>
        {!isCategory && <p>{type}</p>}
      </div>
    </div>
  );
};

export default OverallInventoryItem;
