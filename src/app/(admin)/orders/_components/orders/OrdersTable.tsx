"use client"

import React, { useEffect, useState } from "react";
import { orderData, OrderType } from "../../data";

const OrdersTable: React.FC = () => {
  const headers = [
    "Client Name",
    "Order Value",
    "Products",
    "Order ID",
    "Expected Delivery",
    "Status",
  ];

  const [data, setData] = useState<OrderType[] | null>(null);

  useEffect(() => {
    setData(orderData);
  }, []);

  if (!data) return <p>Loading...</p>;

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
        {data.map((order, index) => (
          <tr key={index} className="hover:bg-gray-50 h-14 border-t">
            <td className="px-4 py-3 font-semibold">{order.clientName}</td>
            <td className="px-4 py-3">₹ {order.orderValue}</td>

            {/* Liste des produits */}
            <td className="px-4 py-3">
              {order.products.map((p, i) => (
                <div key={i}>
                  {p.name} (x{p.quantity})
                </div>
              ))}
            </td>

            <td className="px-4 py-3">{order.orderId}</td>
            <td className="px-4 py-3">{order.expectedDelivery}</td>
            <td className="px-4 py-3">
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  order.status ? "text-green-500" : "text-red-500"
                }`}
              >
                {order.status ? "Paid" : "Unpaid"}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrdersTable;
