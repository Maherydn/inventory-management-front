import React from "react";
import { FilterIcon } from "../../_assets/icon";
import ReportsLineChart from "../chart/ReportsLineChart";
import ProfitRevenuFilter from "./ProfitRevenuFilter";

const ProfitRevenue = () => {
  return (
    <>
      <div className="h-16 w-full flex justify-between ">
        <h3 className="capitalize h-10 flex items-center text-xl font-semibold  text-gray-600">
          Profit & Revenue
        </h3>
        <ProfitRevenuFilter/>
      </div>
      <ReportsLineChart />
    </>
  );
};

export default ProfitRevenue;
