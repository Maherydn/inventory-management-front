import React, { useEffect, useState } from "react";
import SummaryCardsItem from "./common/SummaryCardsItem";

// Type pour la donnée qui vient du back
type InventoryTotal = {
  quantityInHand: number;
  toBeReceived: number;
};

// Labels et icônes statiques
const inventorySummaryMeta = [
  { key: "quantityInHand", srcIcon: "/image/Quantity.png", label: "Quantity in Hand" },
  { key: "toBeReceived", srcIcon: "/image/On the way.png", label: "To be received" },
];

const InventorySummary: React.FC = () => {
  const [totals, setTotals] = useState<InventoryTotal | null>(null);

  // Simuler fetch depuis le back
  useEffect(() => {
    const fetchTotals = async () => {
      // Ici tu ferais un vrai fetch
      // const res = await fetch("/api/inventory-summary");
      // const data = await res.json();

      // FakeData pour le moment
      const data: InventoryTotal = { quantityInHand: 868, toBeReceived: 200 };
      setTotals(data);
    };
    fetchTotals();
  }, []);

  if (!totals) return <p>Loading...</p>;

  return (
    <div className="bg-white w-1/3 px-4 py-6 rounded-lg space-y-2 h-full shadow-md">
      <h3 className="capitalize h-8 flex items-center text-xl font-semibold text-gray-600">
        Inventory Summary
      </h3>

      <div className="w-full flex justify-between items-center">
        {inventorySummaryMeta.map((item) => (
          <SummaryCardsItem
            key={item.key}
            srcIcon={item.srcIcon}
            label={item.label}
            total={totals[item.key as keyof InventoryTotal]}
          />
        ))}
      </div>
    </div>
  );
};

export default InventorySummary;
