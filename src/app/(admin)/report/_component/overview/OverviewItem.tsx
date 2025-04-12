import React from "react";

interface OverviewItemProps {
  value: string | number;
  label: string;
  color: string;
}

const OverviewItem: React.FC<OverviewItemProps> = ({ value, label, color }) => {
  return (
    <div className="flex flex-col gap-4 text-md w-fit">
      <p className="text-gray-500 font-semibold">₹ {value}</p>
      <p className={`${color} 'font-normal'`}>{label}</p>
    </div>
  );
};

export default OverviewItem;
