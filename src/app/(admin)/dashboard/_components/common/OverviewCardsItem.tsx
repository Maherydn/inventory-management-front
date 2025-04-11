import Image from "next/image";
import React from "react";

interface OverviewCardsItemProps{
    type: string;
    amount: number;
    srcIcon: string;
}

const OverviewCardsItem: React.FC<OverviewCardsItemProps> = ({
    type,
    amount,
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

      <div className="flex gap-4 justify-between w-full h-1/3">
        <p className="text-gray-600 font-semibold">₹ {amount}</p>
        <p className="text-gray-400 capitalize">{type}</p>
      </div>
    </div>
  );
};

export default OverviewCardsItem;
