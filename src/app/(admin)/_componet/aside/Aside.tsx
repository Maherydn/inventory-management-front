import React from "react";
import AsideHeader from "./AsideHeader";
import AsideNav from "./AsideNav";
import AsideActions from "./AsideActions";

const Aside = () => {
  return (
    <aside className="h-screen flex flex-col justify-between bg-white hover:w-48 w-14 p-6 shadow-md overflow-hidden duration-300 z-50">
      <div className=" space-y-6">
        <AsideHeader />
        <div className="-ml-1.5">
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
