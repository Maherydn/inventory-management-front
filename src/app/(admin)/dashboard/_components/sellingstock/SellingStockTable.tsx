import React from "react";

const SellingStockTable = () => {
  const headers = ["name", "sold quantity", "remaining quantity", "price"];
  const data = [
    { name: "Surf Excel", quantity: 30, sold: 12, price: 100 },
    { name: "Rin", quantity: 21, sold: 15, price: 207 },
    { name: "Parle G", quantity: 19, sold: 17, price: 105 },
  ];

  return (
    <>
      <table className="table-auto w-full  ">
        <thead className="bg-gray-50 text-gray-600 uppercase text-sm">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-3 text-left capitalize">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-400">
          {data.map((product, index) => (
            <tr key={index} className="hover:bg-gray-50 h-14">
              <td className="px-4 py-3 border-t font-semibold">
                {product.name}
              </td>
              <td className="px-4 py-3 border-t">{product.quantity}</td>
              <td className="px-4 py-3 border-t">{product.sold}</td>
              <td className="px-4 py-3 border-t">₹ {product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SellingStockTable;
