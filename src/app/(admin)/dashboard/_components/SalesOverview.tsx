import React, { useEffect, useState } from "react";
import OverviewCardsItem from "./common/OverviewCardsItem";

// 🔹 Type pour les totaux sales venant du back
type SalesOverviewTotal = {
  sales: number;
  income: number;
  profit: number;
  cost: number;
};

// 🔹 Type et icônes statiques
const salesOverviewMeta = [
  { key: "sales", srcIcon: "/image/Sales.png", label: "Sales" },
  { key: "income", srcIcon: "/image/Revenue.png", label: "Income" },
  { key: "profit", srcIcon: "/image/Profit.png", label: "Profit" },
  { key: "cost", srcIcon: "/image/Cost.png", label: "Cost" },
];

const SalesOverview: React.FC = () => {
  const [totals, setTotals] = useState<SalesOverviewTotal | null>(null);

  useEffect(() => {
    const fetchTotals = async () => {
      // 🔹 FakeData pour le moment (remplacé par un fetch réel)
      const data: SalesOverviewTotal = {
        sales: 832,
        income: 18300,
        profit: 868,
        cost: 17432,
      };
      setTotals(data);
    };
    fetchTotals();
  }, []);

  if (!totals) return <p>Loading...</p>;

  return (
    <div className="bg-white w-2/3 p-4 rounded-lg space-y-6 h-full shadow-md">
      <h3 className="capitalize h-10 flex items-center text-xl font-semibold text-gray-600">
        Sales Overview
      </h3>
      <div className="w-full flex justify-between items-center">
        {salesOverviewMeta.map((item, index) => (
          <React.Fragment key={item.key}>
            <OverviewCardsItem
              type={item.key}
              srcIcon={item.srcIcon}
              amount={totals[item.key as keyof SalesOverviewTotal]}
            />
            {index < salesOverviewMeta.length - 1 && (
              <div className="h-16 w-px bg-slate-300"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SalesOverview;
