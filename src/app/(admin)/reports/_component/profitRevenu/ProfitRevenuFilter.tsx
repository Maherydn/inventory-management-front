import React from "react";
import { FilterIcon } from "../../_assets/icon";

const ProfitRevenuFilter = () => {
  return (
    <div className="px-2 py-1 flex rounded-md border border-gray-400 h-fit gap-2 items-center text-gray-500  ">
      <div>
        <FilterIcon />
      </div>
      <p>weekly</p>
    </div>
  );
};

export default ProfitRevenuFilter;
