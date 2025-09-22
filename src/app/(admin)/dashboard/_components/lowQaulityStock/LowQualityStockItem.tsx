import Image from "next/image";
import React from "react";

interface LowQualityStockItemProps {
  image: string;
  name: string;
  quantity: number;
  status: string;
}

const LowQualityStockItem: React.FC<LowQualityStockItemProps> = ({
  image,
  name,
  quantity,
  status,
}) => {
  return (
    <div className="flex w-full items-end justify-around gap-1 h-16 border-t border-gray-100 p-2 hover:bg-gray-100 duration-300">
      <div className="h-full">
        <Image src={image} alt="photo" className="h-full" width={100} height={100}/>
      </div>
      <div className="flex flex-col items-start justify-end gap-px h-full">
        <h4 className="capitalize text-md font-semibold text-gray-600">
          {name}
        </h4>
        <p className="text-sm text-gray-400">Remaining Quantity : {quantity} Packet</p>
      </div>
      <div className="flex justify-center items-center h-full">
        <p className="px-2 py-1 rounded-xl bg-red-300 text-red-700 text-xs">
          {status}
        </p>
      </div>
    </div>
  );
};

export default LowQualityStockItem;
