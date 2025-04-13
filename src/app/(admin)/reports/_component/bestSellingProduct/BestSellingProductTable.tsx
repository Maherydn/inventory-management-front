import React from "react";

const BestSellingProductTable = () => {
  const headers = [
    "Product",
    "Product Ref",
    "Category",
    "Remaining Quantity",
    "Turn Over",
    "Increase By",
  ];

  const data = [
    {
      name: "Tomatoes",
      ref: "VEG-001",
      category: "Vegetable",
      quantity: 120,
      turnover: "₹26,000",
      increase: "3.2%",
    },
    {
      name: "Bananas",
      ref: "FRU-002",
      category: "Fruits",
      quantity: 75,
      turnover: "₹18,500",
      increase: "2.1%",
    },
    {
      name: "Milk",
      ref: "DAI-003",
      category: "Dairy",
      quantity: 50,
      turnover: "₹12,300",
      increase: "-1.5%",
    },
  ];

  return (
    <table className="table-auto w-full">
      <thead className="bg-gray-50 text-gray-600 uppercase text-sm">
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
            <td className="px-4 py-3">{item.turnover}</td>
            <td className="px-4 py-3 text-green-500">{item.increase}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BestSellingProductTable;
