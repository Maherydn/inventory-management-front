import React from "react";
import Overview from "./_component/overview/Overview";
import BestSellingCategory from "./_component/bestSellingCategory/BestSellingCategory";
import ProfitRevenue from "./_component/profitRevenu/ProfitRevenue";
import BestSellingProductTable from "./_component/bestSellingProduct/BestSellingProductTable";
import BestSellingProduct from "./_component/bestSellingProduct/BestSellingProduct";

const page = () => {
  return (
    <section className="h-full min-w-6xl xl:overflow-y-auto p-4 space-y-4">
      <div className="h-72 w-full gap-4 flex">
        <Overview />
        <BestSellingCategory />
      </div>
      <div className="bg-white flex flex-col p-4 rounded-lg  h-full shadow-md">
        <ProfitRevenue />
      </div>
      <div className="bg-white flex flex-col  rounded-lg  h-fit shadow-md">
        <BestSellingProduct />
      </div>
    </section>
  );
};

export default page;
