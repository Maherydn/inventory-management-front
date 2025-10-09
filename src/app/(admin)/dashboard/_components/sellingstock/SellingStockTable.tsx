"use client";

import React, { useEffect, useState } from "react";
import { sellingStockData, SellingStockType } from "../../data";
const SellingStockTable: React.FC = () => {
  const [products, setProducts] = useState<SellingStockType[]>([]);
  const headers = ["name", "sold quantity", "remaining quantity", "price"];

  useEffect(() => {
    const fetchProducts = async () => {
      setProducts(sellingStockData);
    };

    fetchProducts();
  }, []);

  if (!products.length) return <p>Loading...</p>;

  return (
    <table className="table-auto w-full">
      <thead className="bg-gray-100/75 text-gray-600 uppercase text-sm">
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="px-4 py-3 text-left capitalize">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-gray-500/80">
        {products.map((product, index) => (
          <tr key={index} className="hover:bg-gray-50 h-14">
            <td className="px-4 py-3 border-t font-semibold text-gray-500">
              {product.name}
            </td>
            <td className="px-4 py-3 border-t">{product.quantity}</td>
            <td className="px-4 py-3 border-t">{product.sold}</td>
            <td className="px-4 py-3 border-t">₹ {product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SellingStockTable;
