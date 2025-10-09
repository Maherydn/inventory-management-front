"use client";

import React, { useEffect, useState } from "react";
import { bestSellingProductData, BestSellingProductType } from "../../data";



const BestSellingProductTable: React.FC = () => {
  const [data, setData] = useState<BestSellingProductType[]>([]);
  const headers = [
    "Product",
    "Product Ref",
    "Category",
    "Remaining Quantity",
    "Turnover",
    "Increase By",
  ];

  useEffect(() => {
    setData(bestSellingProductData);
  }, []);

  if (!data.length) return <p>Loading...</p>;

  return (
    <table className="table-auto w-full">
      <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="px-4 py-3 text-left capitalize">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {data.map((item, index) => (
          <tr
            key={index}
            className="hover:bg-gray-50 h-14 border-t border-gray-200"
          >
            <td className="px-4 py-3 font-medium">{item.name}</td>
            <td className="px-4 py-3">{item.ref}</td>
            <td className="px-4 py-3">{item.category}</td>
            <td className="px-4 py-3">{item.quantity}</td>
            <td className="px-4 py-3">₹ {item.turnover.toLocaleString()}</td>
            <td
              className={`px-4 py-3 ${
                item.increase < 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              {item.increase.toFixed(1)}%
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BestSellingProductTable;
