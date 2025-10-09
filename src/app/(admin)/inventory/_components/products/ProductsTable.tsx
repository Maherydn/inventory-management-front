"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { productData, ProductDataType } from "../../data"; // 🔹 Assure-toi que productData et product existent

const ProductsTable: React.FC = () => {
  const [data, setData] = useState<ProductDataType[] | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      // 🔹 Ici tu pourrais remplacer par un vrai fetch :
      // const res = await fetch("/api/products");
      // const dataFromBack = await res.json();
      setData(productData); // Fake data pour l'instant
    };

    fetchProducts();
  }, []);

  const goToInventory = (slug: string) => {
    router.push(`/inventory/${slug}`);
  };

  if (!data) return <p>Loading...</p>;

  const headers = [
    "Product",
    "Buy Price",
    "Quantity",
    "Threshold Value",
    "Expiry Date",
    "Availability",
  ];

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
        {data.map((product) => (
          <tr
            key={product.id}
            className="hover:bg-gray-50 h-14 border-t cursor-pointer"
            onClick={() => goToInventory(product.slug)}
          >
            <td className="px-4 py-3 font-semibold">{product.name}</td>
            <td className="px-4 py-3">₹ {product.buyPrice}</td>
            <td className="px-4 py-3">{product.quantity}</td>
            <td className="px-4 py-3">{product.threshold}</td>
            <td className="px-4 py-3">{product.expiryDate}</td>
            <td className="px-4 py-3">
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  product.available ? "text-green-500" : "text-red-500"
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
