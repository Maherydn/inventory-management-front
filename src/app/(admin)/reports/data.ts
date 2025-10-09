// Définition du type pour chaque élément
export interface bestSellingCategoryType {
  category: string;     // nom de la catégorie
  turnover: number;     // chiffre d’affaires au format "₹xx,xxx"
  increase: number;     // variation au format "x.x%" ou "-x.x%"
};

// Déclaration du tableau avec le type
export const bestSellingCategoryData: bestSellingCategoryType[] = [
  { category: "Vegetable", turnover: 26000 , increase: 3.2 },
  { category: "Fruits", turnover: 18500, increase: 2.1 },
  { category: "Dairy", turnover: 12300, increase: -1.5 },
];

// Définition du type
export interface BestSellingProductType {
  name: string;
  ref: string;
  category: string;
  quantity: number;
  turnover: number; // maintenant un nombre
  increase: number; // maintenant un nombre, ex: 3.2 ou -1.5
};

// Données d'exemple
export const bestSellingProductData: BestSellingProductType[] = [
  {
    name: "Tomatoes",
    ref: "VEG-001",
    category: "Vegetable",
    quantity: 120,
    turnover: 26000,
    increase: 3.2,
  },
  {
    name: "Bananas",
    ref: "FRU-002",
    category: "Fruits",
    quantity: 75,
    turnover: 18500,
    increase: 2.1,
  },
  {
    name: "Milk",
    ref: "DAI-003",
    category: "Dairy",
    quantity: 50,
    turnover: 12300,
    increase: -1.5,
  },
];