import Image from "next/image";
import React from "react";
import SalesOverview from "./_components/SalesOverview";
import InventorySummary from "./_components/InventorySummary";
import PurchaseOverview from "./_components/PurchaseOverview";
import ProductSummary from "./_components/ProductSummary";

const Dashboard = () => {
  return (
    <section className="flex flex-col gap-4 p-6">
      <div className="h-44 w-full gap-4 flex">
        <SalesOverview />
        <InventorySummary />
      </div>
      <div className="h-44 w-full gap-4 flex">
        <PurchaseOverview />
        <ProductSummary />
      </div>
    </section>
  );
};

export default Dashboard;
