"use client";

import SalesOverview from "./_components/SalesOverview";
import InventorySummary from "./_components/InventorySummary";
import PurchaseOverview from "./_components/PurchaseOverview";
import ProductSummary from "./_components/ProductSummary";
import BarChart from "./_components/chart/BarChart";
import LineChart from "./_components/chart/LineChart";
import SellingStock from "./_components/sellingstock/SellingStock";
import LowQualityStoc from "./_components/lowQaulityStock/LowQualityStoc";

const Page = () => {
  return (
    <section className="h-full min-w-6xl xl:overflow-y-scroll py-6">
      <div className="flex flex-col gap-4 px-6">
        <div className="h-44 w-full flex gap-4">
          <SalesOverview />
          <InventorySummary />
        </div>
        <div className="h-44 w-full flex gap-4">
          <PurchaseOverview />
          <ProductSummary />
        </div>
      </div>

      <div className="flex gap-4 p-6 h-96">
        <div className="bg-white w-1/2 p-4 rounded-lg  h-full shadow-md">
          <BarChart />
        </div>
        <div className="bg-white w-1/2 p-4 rounded-lg  h-full shadow-md">
          <LineChart />
        </div>
      </div>

      <div className="flex gap-4 px-6">
        <SellingStock />
        <LowQualityStoc />
      </div>
    </section>
  );
};

export default Page;
