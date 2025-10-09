import React from "react";

interface DetailHeaderButtonProps {
  isEdit?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  actionName: string;
}

const DetailHeaderButton: React.FC<DetailHeaderButtonProps> = ({
  isEdit,
  onClick,
  icon,
  actionName,
}) => {
  return (
    <div
      className="flex items-center justify-around  px-4 gap-2 py-1 border border-gray-400 text-gray-500 rounded-md hover:bg-blue-500 hover:text-white duration-150 min-w-20"
      onClick={onClick}
    >
      {isEdit && <div className="size-4 ">{icon}</div>}
      <p>{actionName}</p>
    </div>
  );
};

export default DetailHeaderButton;
