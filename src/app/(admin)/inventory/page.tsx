import React from "react";
import OverallInventory from "./_components/overallInventory/OverallInventory";
import Products from "./_components/products/Products";

const page = () => {
  return (
    <section className="h-full w-full flex flex-col p-4 gap-6 xl:overflow-y-auto ">
        <OverallInventory />
        <Products/>
    </section>
  );
};

export default page;
