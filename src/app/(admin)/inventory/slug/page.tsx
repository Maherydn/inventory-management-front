import React from "react";
import ItemHeader from "./_components/detailHeaders/DetailHeader";
import ItemDetail from "./_components/Detail";

const page = () => {
  return (
    <section className="h-full min-w-6xl flex flex-col p-4 gap-6 xl:overflow-y-auto">
      <div className="bg-white rounded-xl p-2 space-y-4 shadow-md">
        <div className="w-full">
          <ItemHeader />
        </div>
        <div className="w-full flex justify-between">
          <ItemDetail />
        </div>
      </div>
    </section>
  );
};

export default page;
