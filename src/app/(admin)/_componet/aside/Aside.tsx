import React from "react";
import AsideHeader from "./AsideHeader";
import AsideNav from "./AsideNav";
import AsideActions from "./AsideActions";

const Aside = () => {
  return (
    <aside className="h-screen flex flex-col justify-between bg-white w-52 p-6 shadow-md">
      <div className=" space-y-6">
        <AsideHeader />
        <div>
          <AsideNav/>
        </div>
      </div>
      <div>
        <AsideActions/>
      </div>
    </aside>
  );
};

export default Aside;
