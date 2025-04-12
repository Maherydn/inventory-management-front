import React from "react";
import OverviewCardsItem from "./common/OverviewCardsItem";

const PurchaseOverview = () => {
  return (
    <div className="bg-white w-2/3 p-4 rounded-lg space-y-6 h-full shadow-md">
      <h3 className="capitalize h-10 flex items-center text-xl font-semibold text-gray-600">
        Purchase Overview
      </h3>
      <div className="w-full flex justify-between items-center">
        <OverviewCardsItem
          type="purchase"
          srcIcon="/image/Purchase bag.png"
          amount={832}
        />
        <div className="h-16 w-px bg-slate-300"></div>

        <OverviewCardsItem
          type="cost"
          srcIcon="/image/Cost.png"
          amount={18300}
        />
        <div className="h-16 w-px bg-slate-300"></div>

        <OverviewCardsItem
          type="cancel"
          srcIcon="/image/Cancel.png"
          amount={868}
        />
        <div className="h-16 w-px bg-slate-300"></div>

        <OverviewCardsItem
          type="return"
          srcIcon="/image/Profit.png"
          amount={17432}
        />
      </div>
    </div>
  );
};

export default PurchaseOverview;
