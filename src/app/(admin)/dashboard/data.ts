export interface barChartDataType {
  purchases: number[];
  sales: number[];
};

// Déclaration avec le type
export const barChartData: barChartDataType = {
  purchases: [120, 340, 560, 220, 410, 390, 480, 300, 200, 600, 700, 450],
  sales: [100, 290, 500, 180, 360, 420, 510, 280, 240, 650, 720, 500],
};

export const LineChartData: barChartDataType = {
  purchases: [100, 290, 500, 180, 360, 420, 510, 280, 240, 650, 720, 500],
  sales: [120, 340, 560, 220, 410, 390, 480, 300, 200, 600, 700, 450],
};

export interface LowStockItemType {
  id: number;
  name: string;
  quantity: number;
  status: "Low" | "Medium" | "High";
  image: string;
};

export const LowStockItems: LowStockItemType[] = [
  {
    id: 1,
    name: "Lays",
    quantity: 15,
    status: "Low",
    image: "/image/chips.png",
  },
  {
    id: 2,
    name: "Coca-Cola",
    quantity: 8,
    status: "Low",
    image: "/image/chips.png",
  },
  {
    id: 3,
    name: "Oreo",
    quantity: 20,
    status: "Low",
    image: "/image/chips.png",
  },
];

// 🔹 Type pour un produit vendu
export interface SellingStockType {
  name: string;
  quantity: number;
  sold: number;
  price: number;
};

// 🔹 Données simulées (anciennement `data`)
export const sellingStockData: SellingStockType[] = [
  { name: "Surf Excel", quantity: 30, sold: 12, price: 100 },
  { name: "Rin",        quantity: 21, sold: 15, price: 207 },
  { name: "Parle G",    quantity: 19, sold: 17, price: 105 },
];