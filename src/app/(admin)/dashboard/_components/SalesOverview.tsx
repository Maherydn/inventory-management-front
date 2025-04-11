import Image from "next/image";
import React from "react";
import OverviewCardsItem from "./common/OverviewCardsItem";

const SalesOverview = () => {
  return (
    <div className="bg-white w-2/3 p-4 rounded-lg space-y-6 h-full shadow-md ">
      <h3 className="capitalize h-10 flex items-center text-xl font-semibold">
        Sales Overview
      </h3>
      <div className="w-full flex justify-between items-center">
        <OverviewCardsItem
          type="sales"
          srcIcon="/image/Sales.png"
          amount={832}
        />
        <div className="h-16 w-px bg-slate-300"></div>

        <OverviewCardsItem
          type="revenue"
          srcIcon="/image/Revenue.png"
          amount={18300}
        />
        <div className="h-16 w-px bg-slate-300"></div>

        <OverviewCardsItem
          type="profit"
          srcIcon="/image/Profit.png"
          amount={868}
        />
        <div className="h-16 w-px bg-slate-300"></div>

        <OverviewCardsItem
          type="cost"
          srcIcon="/image/Cost.png"
          amount={17432}
        />
      </div>
    </div>
  );
};

export default SalesOverview;
