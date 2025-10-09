"use client";

import { X, Plus, Minus } from "lucide-react";

interface CartProps {
  showCart: boolean;
  setShowCart: (value: boolean) => void;
}

const Cart = ({ showCart, setShowCart }: CartProps) => {
  const products = [
    { ref: "REF-001", name: "Produit A", quantity: 2, price: 15 },
    { ref: "REF-002", name: "Produit B", quantity: 1, price: 25 },
    { ref: "REF-003", name: "Produit C", quantity: 3, price: 10 },
  ];

  const total = products.reduce((sum, p) => sum + p.quantity * p.price, 0);

  return (
    <div
      className={`absolute top-0 transition-all duration-500 ${
        showCart ? "right-0" : "-right-[420px]"
      } flex justify-center items-start h-full`}
    >
      <div className="bg-white w-96 rounded-2xl shadow-2xl p-6 h-[90vh] flex flex-col">
        {/* Titre + bouton de fermeture */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center flex-1">
            🛒 Mon Panier
          </h2>
          <button
            onClick={() => setShowCart(false)}
            className="text-gray-500 hover:text-gray-700 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Liste des produits */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-4">
          {products.map((p) => (
            <div
              key={p.ref}
              className="border border-gray-200 rounded-xl p-4 hover:shadow-sm transition relative"
            >
              <button
                // onClick={() => setShowCart(false)}
                className="text-gray-500 hover:text-gray-700 transition absolute top-4 right-4 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex justify-start gap-2 mb-2">
                <p className="font-semibold text-gray-700">{p.name}</p>
                <span className="text-sm text-gray-500">( {p.ref} )</span>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <p className="text-gray-600">Prix unitaire :</p>
                <p className="font-medium text-gray-800">{p.price} €</p>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <p className="text-gray-600 ">Quantité :</p>
                <div className="flex justify-around items-center">
                  <button className="bg-red-400 rounded-lg flex items-center justify-center px-2 py-1">
                    <Minus className="w-5 h-5  " />
                  </button>
                  <p className="bg-slate-200 px-4 py-px rounded-lg">{p.quantity}</p>
                  <button className="bg-blue-400 rounded-lg flex items-center justify-center px-2 py-1">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="flex justify-between items-center mt-6 border-t border-gray-200 pt-4">
          <p className="text-lg font-semibold text-gray-800">Total</p>
          <p className="text-lg font-semibold text-gray-800">{total} €</p>
        </div>

        {/* Valider */}
        <div className="mt-4 text-center">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-xl transition font-medium shadow-md cursor-pointer">
            Valider la commande
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
