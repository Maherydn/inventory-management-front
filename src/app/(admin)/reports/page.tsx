import React from "react";
import Overview from "./_component/overview/Overview";
import BestSellingCategory from "./_component/bestSellingCategory/BestSellingCategory";
import ProfitRevenue from "./_component/profitRevenu/ProfitRevenue";
import BestSellingProduct from "./_component/bestSellingProduct/BestSellingProduct";

const page = () => {
  return (
    <section className="h-full flex-1 xl:overflow-y-auto p-4 space-y-4 min-w-0">
      <div className="h-72 w-full gap-4 flex min-w-0">
        <Overview />
        <BestSellingCategory />
      </div>
      <div className="bg-white flex flex-col p-4 rounded-lg h-full shadow-md min-w-0 items-center">
        <ProfitRevenue />
      </div>
      <div className="bg-white flex flex-col rounded-lg h-fit shadow-md min-w-0">
        <BestSellingProduct />
      </div>
    </section>
  );
};

export default page;
