import React from "react";

const AsideHeader = () => {
  return (
    <div className="flex space-x-4 h-10 w-full items-center justify-center">
      {/* <div className="size-10">
        <img src="/image/Logo.png" alt="" />
      </div> */}
      <h2 className="uppercase font-bold text-xl text-gray-500 text-nowrap">
        {"< Toto />"}
      </h2>
    </div>
  );
};

export default AsideHeader;
