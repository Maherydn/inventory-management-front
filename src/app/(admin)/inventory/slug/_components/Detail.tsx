import React from "react";
import ItemDetailPrimary from "./detailPrimary/DetailPrimary";
import ItemDetailSupplier from "./detailSupplier/DetailSupplier";
import ItemDetailProfils from "./detailProfils/DetailProfils";

const Detail = () => {
  return (
    <>
      <div className="w-1/4 flex flex-col gap-8  p-6">
        <ItemDetailPrimary />

        <ItemDetailSupplier />
      </div>

      <div className="w-1/4 flex flex-col gap-6 p-4 items-center">
        <ItemDetailProfils />
      </div>
    </>
  );
};

export default Detail;
