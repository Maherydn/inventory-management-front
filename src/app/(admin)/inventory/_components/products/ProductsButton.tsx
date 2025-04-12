import React from "react";

interface ProductsButtonProps {
  label: string;
  onClick?: () => void;
}

const ProductsButton: React.FC<ProductsButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="h-full w-fit flex items-center justify-center border border-gray-400 text-gray-600 font-semibold px-4 py-1 capitalize rounded-md hover:bg-blue-500 hover:text-white cursor-pointer duration-150"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ProductsButton;
