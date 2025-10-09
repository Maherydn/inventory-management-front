import React from "react";

interface SalesButtonProps {
  label: string;
  onClick?: () => void;
}

const SalesButton: React.FC<SalesButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="h-full w-fit flex items-center justify-center border border-gray-400 text-gray-600 font-semibold px-4 py-1 capitalize rounded-md hover:bg-blue-500 hover:text-white cursor-pointer duration-150"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SalesButton;
