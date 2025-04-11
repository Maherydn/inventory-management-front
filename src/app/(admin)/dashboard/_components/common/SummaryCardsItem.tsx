import Image from "next/image";
import React from "react";

interface SummaryCardsItemProps{
    label: string;
    total: number;
    srcIcon: string;
}

const SummaryCardsItem: React.FC<SummaryCardsItemProps> = ({
    label,
    total,
    srcIcon
}) => {
  return (
    <div className="h-20 min-w-36 p-2 ">
      <div className="flex items-center justify-center  h-2/3">
        <div className="size-6 ">
          <Image
            src={srcIcon}
            alt="Logo"
            width={24}
            height={24}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col items-center w-full h-1/3 ">
        <p className="text-gray-500 font-semibold">{total}</p>
        <p className="text-gray-600 capitalize text-sm">{label}</p>
      </div>
    </div>
  );
};

export default SummaryCardsItem;
