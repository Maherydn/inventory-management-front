"use client";

import React, { useEffect, useState } from "react";
import LowQualityStockItem from "./LowQualityStockItem";
import { LowStockItems, LowStockItemType } from "../../data";

const LowQualityStockTable: React.FC = () => {
  const [items, setItems] = useState<LowStockItemType[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      setItems(LowStockItems);
    };

    fetchItems();
  }, []);

  if (!items.length) return <p>Loading...</p>;

  return (
    <div className="w-full">
      {items.map((item) => (
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
