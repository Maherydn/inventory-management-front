import React from "react";
import Overview from "./_component/overview/Overview";
import BestSellingCategory from "./_component/bestSellingCategory/BestSellingCategory";

const page = () => {
  return (
    <section className="h-full min-w-6xl xl:overflow-y-auto p-4">
      <div className="h-72 w-full gap-4 flex">
        <Overview />
        <BestSellingCategory />
      </div>
    </section>
  );
};

export default page;
