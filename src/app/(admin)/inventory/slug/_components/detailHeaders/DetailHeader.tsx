import React from "react";
import ItemHeaderButton from "./DetailHeaderButton";
import { EditIcon } from "../../_assets/icon";

const DetailHeader = () => {
  return (
    <div className="h-18 w-full flex items-center justify-between border-b border-gray-400/50">
      <h3 className="capitalize h-full text-xl font-semibold text-gray-600 p-6">
        Maggi
      </h3>
      <div className="h-10 flex items-center gap-4 pr-6 ">
        <ItemHeaderButton actionName="edit" isEdit icon={<EditIcon />} />
        <ItemHeaderButton actionName="download" />
      </div>
    </div>
  );
};

export default DetailHeader;
