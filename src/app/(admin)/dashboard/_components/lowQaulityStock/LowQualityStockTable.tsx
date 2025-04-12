import React from "react";
import LowQualityStockItem from "./LowQualityStockItem";

const stockItems = [
  {
    id: 1,
    name: "Lays",
    quantity: 15,
    status: "Low",
    image: "/image/chips.png",
  },
  {
    id: 2,
    name: "Lays",
    quantity: 15,
    status: "Low",
    image: "/image/chips.png",
  },
  {
    id: 3,
    name: "Lays",
    quantity: 15,
    status: "Low",
    image: "/image/chips.png",
  },
];

const LowQualityStockTable = () => {
  return (
    <div className="w-full">
      {stockItems.map((item) => (
        <LowQualityStockItem
          key={item.id}
          image={item.image}
          name={item.name}
          quantity={item.quantity}
          status={item.status}
        />
      ))}
    </div>
  );
};

export default LowQualityStockTable;
