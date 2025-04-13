import React from "react";

// Définition du type pour une commande
type Order = {
  name: string; // Correspond à "Orders"
  orderValue: number; // Correspond à "Orders Value"
  quantity: number;
  orderId: string;
  expectedDelivery: string;
  status: "Delivered" | "Pending" | "Cancelled";
};

const OrdersTable: React.FC = () => {
  const headers = ["Orders", "Orders Value", "Quantity", "Order ID", "Expected Delivery", "Status"];

  const data: Order[] = [
    {
      name: "Surf Excel",
      orderValue: 3000,
      quantity: 30,
      orderId: "ORD001",
      expectedDelivery: "2025-08-01",
      status: "Delivered",
    },
    {
      name: "Rin",
      orderValue: 4347,
      quantity: 21,
      orderId: "ORD002",
      expectedDelivery: "2024-12-15",
      status: "Pending",
    },
    {
      name: "Parle G",
      orderValue: 1995,
      quantity: 19,
      orderId: "ORD003",
      expectedDelivery: "2024-10-01",
      status: "Cancelled",
    },
    {
        name: "Surf Excel",
        orderValue: 3000,
        quantity: 30,
        orderId: "ORD001",
        expectedDelivery: "2025-08-01",
        status: "Delivered",
      },
      {
        name: "Rin",
        orderValue: 4347,
        quantity: 21,
        orderId: "ORD002",
        expectedDelivery: "2024-12-15",
        status: "Pending",
      },
      {
        name: "Parle G",
        orderValue: 1995,
        quantity: 19,
        orderId: "ORD003",
        expectedDelivery: "2024-10-01",
        status: "Cancelled",
      },
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
        {data.map((order, index) => (
          <tr key={index} className="hover:bg-gray-50 h-14 border-t">
            <td className="px-4 py-3 font-semibold">{order.name}</td>
            <td className="px-4 py-3">₹ {order.orderValue}</td>
            <td className="px-4 py-3">{order.quantity}</td>
            <td className="px-4 py-3">{order.orderId}</td>
            <td className="px-4 py-3">{order.expectedDelivery}</td>
            <td className="px-4 py-3">
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  order.status === "Delivered"
                    ? "text-green-500"
                    : order.status === "Pending"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                {order.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrdersTable;
