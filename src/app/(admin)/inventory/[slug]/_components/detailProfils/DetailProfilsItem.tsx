import React from "react";

interface DetailProfilsItemProps {
  label: string;
  value: string | number;
}

const DetailProfilsItem: React.FC<DetailProfilsItemProps> = ({
  label,
  value,
}) => {
  return (
    <div className="flex justify-between w-full">
      <p className="text-gray-500 font-medium">{label}</p>
      {value}
    </div>
  );
};

export default DetailProfilsItem;
