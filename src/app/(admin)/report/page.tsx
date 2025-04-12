import React from "react";
import Overview from "./_component/overview/Overview";

const page = () => {
  return (
    <section className="h-full w-full p-4">
      <div className="h-64 w-full gap-4 flex">
        <Overview/>
      </div>
    </section>
  );
};

export default page;
