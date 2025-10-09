import { Metric } from "../inventory/data";

// Définition du type pour une commande
// data.ts
export type ProductType = {
  name: string;
  price: number;
  quantity: number;
};

export type OrderType = {
  clientName: string;
  orderValue: number;
  orderId: string;
  expectedDelivery: string;
  status: boolean;
  products: ProductType[];
};

export const orderData: OrderType[] = [
  {
    clientName: "Jean Dupont",
    orderValue: 3000,
    orderId: "ORD001",
    expectedDelivery: "2025-08-01",
    status: true,
    products: [
      { name: "Surf Excel", price: 100, quantity: 10 },
      { name: "Rin", price: 200, quantity: 5 },{ name: "Surf Excel", price: 100, quantity: 10 },
      { name: "Rin", price: 200, quantity: 5 },{ name: "Surf Excel", price: 100, quantity: 10 },
      { name: "Rin", price: 200, quantity: 5 },
    ],
  },
  {
    clientName: "Marie Andrianina",
    orderValue: 4347,
    orderId: "ORD002",
    expectedDelivery: "2024-12-15",
    status: false,
    products: [
      { name: "Parle G", price: 95, quantity: 15 },
      { name: "Rin", price: 150, quantity: 6 },
    ],
  },
];



export interface OverallOrderDataType {
  orders: Metric;
  totalRecevied: Metric;
  totalReturned: Metric;
  onTheWay: Metric;
}

export const OverallOrderData: OverallOrderDataType = {
  orders: { quantity: 37 },
  totalRecevied: { quantity: 32, price: 25000 },
  totalReturned: { quantity: 5, price: 2500 },
  onTheWay: { quantity: 12, price: 2356 },
};