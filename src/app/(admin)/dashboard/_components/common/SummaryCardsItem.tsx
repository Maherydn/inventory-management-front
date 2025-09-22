import Image from "next/image";
import React from "react";

interface SummaryCardsItemProps {
  label: string;
  total: number;
  srcIcon: string;
}

const SummaryCardsItem: React.FC<SummaryCardsItemProps> = ({
  label,
  total,
  srcIcon,
}) => {
  return (
    <div className="h-20 min-w-[9rem] p-2 flex flex-col justify-between gap-4">
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
      <div className="flex flex-col items-center justify-center w-full h-1/3">
        <p className="text-gray-500 font-semibold">{total}</p>
        <p className="text-gray-600 capitalize text-sm">{label}</p>
      </div>
    </div>
  );
};

export default SummaryCardsItem;
