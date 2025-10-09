// 🔹 Type senior pour chaque métrique
export interface Metric {
  quantity: number;
  price?: number;
}

export interface OverallInventoryDataType {
  categories: Metric;
  totalProducts: Metric;
  topSelling: Metric;
  lowStocks: Metric;
}

// 🔹 Données factices
export const OverallInventoryData: OverallInventoryDataType = {
  categories: { quantity: 12 },
  totalProducts: { quantity: 120, price: 25000 },
  topSelling: { quantity: 5, price: 2500 },
  lowStocks: { quantity: 12, price: 2 },
};


// Définition du type pour un produit
export interface ProductDataType {
  id: number;           // 🔹 Identifiant unique
  slug: string;         // 🔹 Slug pour le routing
  name: string;
  buyPrice: number;
  quantity: number;
  threshold: number;
  expiryDate: string;
  available: boolean;
};

export const productData: ProductDataType[] = [
  {
    id: 1,
    slug: "surf-excel",
    name: "Surf Excel",
    buyPrice: 100,
    quantity: 30,
    threshold: 10,
    expiryDate: "2025-08-01",
    available: true,
  },
  {
    id: 2,
    slug: "rin",
    name: "Rin",
    buyPrice: 207,
    quantity: 21,
    threshold: 8,
    expiryDate: "2024-12-15",
    available: true,
  },
  {
    id: 3,
    slug: "parle-g",
    name: "Parle G",
    buyPrice: 105,
    quantity: 19,
    threshold: 12,
    expiryDate: "2024-10-01",
    available: false,
  },
  {
    id: 4,
    slug: "surf-excel-2",
    name: "Surf Excel",
    buyPrice: 100,
    quantity: 30,
    threshold: 10,
    expiryDate: "2025-08-01",
    available: true,
  },
  {
    id: 5,
    slug: "rin-2",
    name: "Rin",
    buyPrice: 207,
    quantity: 21,
    threshold: 8,
    expiryDate: "2024-12-15",
    available: true,
  },
  {
    id: 6,
    slug: "parle-g-2",
    name: "Parle G",
    buyPrice: 105,
    quantity: 19,
    threshold: 12,
    expiryDate: "2024-10-01",
    available: false,
  },
];

// Définition du type pour un produit complet
export interface ProductDetailType {
  productName: string;
  productRef: string;
  productCategory: string;
  expiryDate: string;
  thresholdValue: number;
  sellPrice: number;
  openingStock: number;
  remainingStock: number;
  onTheWay: number;
  supplier: {
    productName: string;
    clientCode: string;
  };
}

// Type pour plusieurs produits
export const productDetailData: ProductDetailType = {
  productName: "Maggi",
  productRef: "4618",
  productCategory: "Instant food",
  expiryDate: "13/04/23",
  thresholdValue: 12,
  sellPrice: 2500,
  openingStock: 40,
  remainingStock: 34,
  onTheWay: 15,
  supplier: {
    productName: "Maggi",
    clientCode: "4618",
  },
};
