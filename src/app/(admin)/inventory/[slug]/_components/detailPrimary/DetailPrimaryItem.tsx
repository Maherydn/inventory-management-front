import React from "react";

interface DetailPrimaryItemProps {
  label: string;
  value: string | number;
}

const DetailPrimaryItem: React.FC<DetailPrimaryItemProps> = ({
  label,
  value,
}) => {
  return (
    <div className="flex justify-between w-full text-sm text-gray-600">
      <p className="w-1/2">{label}</p>
      <p className="w-1/2 text-right font-medium text-gray-600">
        {value}
      </p>
    </div>
  );
};

export default DetailPrimaryItem;
