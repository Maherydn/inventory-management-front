import React from "react";
import OverviewItem from "./OverviewItem";

const Overview = () => {
  return (
    <div className="bg-white w-2/3 p-4 rounded-lg space-y-6 h-full shadow-md ">
      <h3 className="capitalize h-10 flex items-center text-xl font-semibold  text-gray-600">
        Overview
      </h3>
      <div className="w-full space-y-4">
        <div className="w-full flex justify-between pl-6 pr-16 items-center  ">
          <OverviewItem
            value={"21,190"}
            label="Total Profit"
            color="text-gray-400"
          />
          <div className="h-16 w-px bg-slate-300/80"></div>

          <OverviewItem
            value={"18,300"}
            label="Revenue"
            color="text-orange-400"
          />
          <div className="h-16 w-px bg-slate-300/80"></div>

          <OverviewItem
            value={"17,432"}
            label="Sales"
            color="text-violet-400"
          />
        </div>
        <div className="h-px w-full bg-slate-300/80"></div>

        <div className="w-full flex justify-between px-6 gap-2 items-center ">
          <OverviewItem
            value={"1,17,432"}
            label="Net purchase value"
            color="text-gray-400"
          />
          <div className="h-16 w-px bg-slate-300/80"></div>

          <OverviewItem
            value={"80,432"}
            label="Net sales value"
            color="text-gray-400"
          />
          <div className="h-16 w-px bg-slate-300/80"></div>

          <OverviewItem
            value={"30,432"}
            label="MoM Profit"
            color="text-gray-400"
          />
          <div className="h-16 w-px bg-slate-300/80"></div>

          <OverviewItem
            value={"1,10,432"}
            label="YoY Profit"
            color="text-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
