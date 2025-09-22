import Image from "next/image";
import React from "react";

interface OverviewCardsItemProps {
  type: string;
  amount: number;
  srcIcon: string;
}

const OverviewCardsItem: React.FC<OverviewCardsItemProps> = ({
  type,
  amount,
  srcIcon,
}) => {
  return (
    <div className="h-20 min-w-[9rem] p-2 flex flex-col justify-between">
      {/* Icon */}
      <div className="flex items-center justify-center h-2/3">
        <div className="w-6 h-6 relative">
          <Image
            src={srcIcon}
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Text */}
      <div className="flex gap-4 justify-between items-center h-1/3">
        <p className="text-gray-600 font-semibold">₹ {amount}</p>
        <p className="text-gray-400 capitalize">{type}</p>
      </div>
    </div>
  );
};

export default OverviewCardsItem;
