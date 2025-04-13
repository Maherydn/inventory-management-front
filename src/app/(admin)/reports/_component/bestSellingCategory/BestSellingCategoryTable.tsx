import React from "react";

const BestSellingCategoryTable = () => {
  const headers = ["Category", "Turn Over", "Increase By"];

  const data = [
    { category: "Vegetable", turnover: "₹26,000", increase: "3.2%" },
    { category: "Fruits", turnover: "₹18,500", increase: "2.1%" },
    { category: "Dairy", turnover: "₹12,300", increase: "-1.5%" },
  ];

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
            <td className="px-4 py-3">{item.turnover}</td>
            <td className="px-4 py-3  text-green-400">{item.increase}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BestSellingCategoryTable;
