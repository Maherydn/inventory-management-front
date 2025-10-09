"use client";

import React, { useEffect, useState } from "react";
import ItemHeader from "./_components/detailHeaders/DetailHeader";
import DetailPrimary from "./_components/detailPrimary/DetailPrimary";
import DetailSupplier from "./_components/detailSupplier/DetailSupplier";
import DetailProfils from "./_components/detailProfils/DetailProfils";
import { productDetailData, ProductDetailType } from "../data";

const Page: React.FC = () => {
  const [data, setData] = useState<ProductDetailType | null>(null);

  useEffect(() => {
    // Simule un fetch depuis un backend
    const fetchData = async () => {
      setData(productDetailData);
    };

    fetchData();
  }, []);

  if (!data)
    return (
      <section className="h-96 w-full p-4 rounded-xl  bg-gray-300 animate-pulse "></section>
    );

  return (
    <section className="h-full min-w-6xl flex flex-col p-4 gap-6 xl:overflow-y-auto">
      <div className="bg-white rounded-xl p-2 space-y-4 shadow-md">
        <div className="w-full">
          <ItemHeader />
        </div>
        <div className="w-full flex justify-between">
          <div className="w-1/4 flex flex-col gap-8 p-6">
            <DetailPrimary
              productName={data.productName}
              productRef={data.productRef}
              productCategory={data.productCategory}
              expiryDate={data.expiryDate}
              thresholdValue={data.thresholdValue}
            />

            <DetailSupplier
              productName={data.supplier.productName}
              clientCode={data.supplier.clientCode}
            />
          </div>

          <div className="w-1/4 flex flex-col gap-6 p-4 items-center">
            <DetailProfils
              openingStock={data.openingStock}
              remainingStock={data.remainingStock}
              onTheWay={data.onTheWay}
              sellPrice={data.sellPrice}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
