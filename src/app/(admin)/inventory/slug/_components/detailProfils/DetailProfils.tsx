import React from "react";
import DetailProfilsItem from "./DetailProfilsItem";
import Image from "next/image";

const DetailProfils = () => {
  return (
    <>
      <div className="w-32 h-32 border border-gray-300 rounded-lg overflow-hidden">
        <Image
          src="#"
          alt="Product image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="space-y-4 w-full text-sm text-gray-700">
        <DetailProfilsItem label="Opening Stock" value={40} />
        <DetailProfilsItem label="Remaining Stock" value={34} />
        <DetailProfilsItem label="On the way" value={15} />
        <DetailProfilsItem label="Threshold value" value={12} />
      </div>
    </>
  );
};

export default DetailProfils;
