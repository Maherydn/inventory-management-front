import React from "react";
import OverallInventory from "./_components/overallInventory/OverallInventory";
import Products from "./_components/products/Products";

const page = () => {
  return (
    <section className="h-full min-w-6xl flex flex-col p-4 gap-6 xl:overflow-y-auto ">
        <OverallInventory />
        <Products/>
    </section>
  );
};

export default page;
