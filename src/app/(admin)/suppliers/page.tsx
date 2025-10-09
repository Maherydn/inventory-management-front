import React from "react";
import Suppliers from "./_components/suppliers/Suppliers";

const page = () => {
  return (
    <section className="h-full w-full xl:overflow-y-auto p-4 space-y-4">
      <Suppliers />
    </section>
  );
};

export default page;
