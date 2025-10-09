"use client"

import React, { useEffect, useState } from "react";
import { bestSellingCategoryData, bestSellingCategoryType } from "../../data";

const BestSellingCategoryTable = () => {
  const headers = ["Category", "Turn Over", "Increase By"];


  const [data, setData] = useState<bestSellingCategoryType[] | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        // 🔹 FakeData temporaire (remplacer par fetch réel)
  
        setData(bestSellingCategoryData);
      };
      fetchData();
    }, []);
  
    if (!data) return <div className="w-full bg-slate-50"></div>;

  return (
    <table className="table-auto w-full p-0">
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
        {data.map((item, index) => (
          <tr
            key={index}
            className="hover:bg-gray-50 h-14 border-t border-gray-200 text-gray-500 "
          >
            <td className="px-4 py-3 font-semibold ">{item.category}</td>
            <td className="px-4 py-3">{`₹${item.turnover}`}</td>
            <td className="px-4 py-3  text-green-400">{`${item.increase}%`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BestSellingCategoryTable;
