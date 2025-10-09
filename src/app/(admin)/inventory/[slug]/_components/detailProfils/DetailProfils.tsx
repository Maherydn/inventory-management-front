import React from "react";
import DetailProfilsItem from "./DetailProfilsItem";

// Définition du type pour les props
type DetailProfilsProps = {
  openingStock: number;
  remainingStock: number;
  onTheWay: number;
  sellPrice: number;
};

const DetailProfils: React.FC<DetailProfilsProps> = ({
  openingStock,
  remainingStock,
  onTheWay,
  sellPrice,
}) => {
  return (
    <div className="flex flex-col items-start space-y-4">
      <div className="w-32 h-32 border border-gray-300 rounded-lg overflow-hidden">
        {/* Image peut être ajoutée ici */}
      </div>
      <div className="space-y-4 w-full text-sm text-gray-700">
        <DetailProfilsItem label="Opening Stock" value={openingStock} />
        <DetailProfilsItem label="Remaining Stock" value={remainingStock} />
        <DetailProfilsItem label="On the way" value={onTheWay} />
        <DetailProfilsItem label="Unit Price" value={`${sellPrice} ar`} />
      </div>
    </div>
  );
};

export default DetailProfils;
