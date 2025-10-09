import React, { useEffect, useState } from "react";
import SummaryCardsItem from "./common/SummaryCardsItem";

// 🔹 Type pour les totaux produits venant du back
type ProductSummaryTotal = {
  numberOfSuppliers: number;
  numberOfCategories: number;
};

// 🔹 Labels et icônes statiques
const productSummaryMeta = [
  { key: "numberOfSuppliers", srcIcon: "/image/Quantity.png", label: "Number of Suppliers" },
  { key: "numberOfCategories", srcIcon: "/image/On the way.png", label: "Number of Categories" },
];

const ProductSummary: React.FC = () => {
  const [totals, setTotals] = useState<ProductSummaryTotal | null>(null);

  // Simuler fetch depuis le back
  useEffect(() => {
    const fetchTotals = async () => {
      // Ici tu ferais un vrai fetch
      // const res = await fetch("/api/product-summary");
      // const data = await res.json();

      // FakeData pour le moment
      const data: ProductSummaryTotal = { numberOfSuppliers: 868, numberOfCategories: 200 };
      setTotals(data);
    };
    fetchTotals();
  }, []);

  if (!totals) return <p>Loading...</p>;

  return (
    <div className="bg-white w-1/3 px-4 py-6 rounded-lg space-y-2 h-full shadow-md">
      <h3 className="capitalize h-8 flex items-center text-xl font-semibold text-gray-600">
        Product Summary
      </h3>

      <div className="w-full flex justify-between items-center">
        {productSummaryMeta.map((item) => (
          <SummaryCardsItem
            key={item.key}
            srcIcon={item.srcIcon}
            label={item.label}
            total={totals[item.key as keyof ProductSummaryTotal]}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSummary;
