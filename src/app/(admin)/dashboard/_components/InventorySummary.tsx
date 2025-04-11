import React from "react";
import SummaryCardsItem from "./common/SummaryCardsItem";

const InventorySummary = () => {
  return (
    <div className="bg-white w-1/3 px-4 py-6 rounded-lg space-y-2 h-full shadow-md ">
      <h3 className="capitalize h-8 flex items-center text-xl font-semibold">
        Inventory Summary
      </h3>

      <div className="w-full flex justify-between items-center">
        <SummaryCardsItem
          srcIcon="/image/Quantity.png"
          label="Quantity in Hand"
          total={868}
        />
        <SummaryCardsItem
          srcIcon="/image/On the way.png"
          label="To be received"
          total={200}
        />
      </div>
    </div>
  );
};

export default InventorySummary;
