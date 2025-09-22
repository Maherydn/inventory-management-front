"use client"

import { useRouter } from "next/navigation";
import React from "react";

// Définition du type pour un produit
type Product = {
  name: string;
  buyPrice: number;
  quantity: number;
  threshold: number;
  expiryDate: string;
  available: boolean;
};

const ProductsTable: React.FC = () => {
  const headers = [
    "Product",
    "Buy Price",
    "Quantity",
    "Threshold Value",
    "Expiry Date",
    "Availability",
  ];

  const data: Product[] = [
    {
      name: "Surf Excel",
      buyPrice: 100,
      quantity: 30,
      threshold: 10,
      expiryDate: "2025-08-01",
      available: true,
    },
    {
      name: "Rin",
      buyPrice: 207,
      quantity: 21,
      threshold: 8,
      expiryDate: "2024-12-15",
      available: true,
    },
    {
      name: "Parle G",
      buyPrice: 105,
      quantity: 19,
      threshold: 12,
      expiryDate: "2024-10-01",
      available: false,
    },
    {
      name: "Surf Excel",
      buyPrice: 100,
      quantity: 30,
      threshold: 10,
      expiryDate: "2025-08-01",
      available: true,
    },
    {
      name: "Rin",
      buyPrice: 207,
      quantity: 21,
      threshold: 8,
      expiryDate: "2024-12-15",
      available: true,
    },
    {
      name: "Parle G",
      buyPrice: 105,
      quantity: 19,
      threshold: 12,
      expiryDate: "2024-10-01",
      available: false,
    },
  ];

  const router = useRouter();

  const goToInventory = () => {
    router.push(`/inventory/slug`);
  };

  return (
    <table className="table-auto w-full p-2">
      <thead className="bg-gray-50 text-gray-600 uppercase text-sm">
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="px-4 py-3 text-left capitalize">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-gray-500">
        {data.map((product, index) => (
          <tr
            key={index}
            className="hover:bg-gray-50 h-14 border-t cursor-pointer "
            onClick={() => goToInventory()}
          >
            <td className="px-4 py-3 font-semibold">{product.name}</td>
            <td className="px-4 py-3 ">₹ {product.buyPrice}</td>
            <td className="px-4 py-3 ">{product.quantity}</td>
            <td className="px-4 py-3 ">{product.threshold}</td>
            <td className="px-4 py-3 ">{product.expiryDate}</td>
            <td className="px-4 py-3 ">
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  product.available ? " text-green-500" : " text-red-500"
                }`}
              >
                {product.available ? "Available" : "Out of Stock"}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;
