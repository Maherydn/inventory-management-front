import React, { useEffect, useState } from "react";
import OverviewCardsItem from "./common/OverviewCardsItem";

// 🔹 Type pour chaque carte
type PurchaseOverviewTotal = {
  purchase: number;
  cost: number;
  cancel: number;
  return: number;
};

// 🔹 Type et icône statiques
const purchaseOverviewMeta = [
  { key: "purchase", srcIcon: "/image/Purchase bag.png", label: "Purchase" },
  { key: "cost", srcIcon: "/image/Cost.png", label: "Cost" },
  { key: "cancel", srcIcon: "/image/Cancel.png", label: "Cancel" },
  { key: "return", srcIcon: "/image/Profit.png", label: "Return" },
];

const PurchaseOverview: React.FC = () => {
  const [totals, setTotals] = useState<PurchaseOverviewTotal | null>(null);

  useEffect(() => {
    const fetchTotals = async () => {
      // 🔹 Fake data pour le moment (remplacé par fetch réel)
      const data: PurchaseOverviewTotal = {
        purchase: 832,
        cost: 18300,
        cancel: 868,
        return: 17432,
      };
      setTotals(data);
    };
    fetchTotals();
  }, []);

  if (!totals) return <p>Loading...</p>;

  return (
    <div className="bg-white w-2/3 p-4 rounded-lg space-y-6 h-full shadow-md">
      <h3 className="capitalize h-10 flex items-center text-xl font-semibold text-gray-600">
        Purchase Overview
      </h3>
      <div className="w-full flex justify-between items-center">
        {purchaseOverviewMeta.map((item, index) => (
          <React.Fragment key={item.key}>
            <OverviewCardsItem
              type={item.key}
              srcIcon={item.srcIcon}
              amount={totals[item.key as keyof PurchaseOverviewTotal]}
            />
            {index < purchaseOverviewMeta.length - 1 && (
              <div className="h-16 w-px bg-slate-300"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PurchaseOverview;
