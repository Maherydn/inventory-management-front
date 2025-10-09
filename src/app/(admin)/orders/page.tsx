import React from "react";
import OverallOrders from "./_components/overallOrders/OverallOreders";
import Orders from "./_components/orders/Ordres";

const page = () => {
  return (
    <section className="h-full w-full flex flex-col p-4 gap-6 xl:overflow-y-auto ">
      <OverallOrders />
      <Orders />
    </section>
  );
};

export default page;
