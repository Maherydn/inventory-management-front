"use client";

import { useState } from "react";

// Exemple de données simulées :
const fakeSuppliers = [
  { id: 1, name: "SPAT" },
  { id: 2, name: "Jumbo" },
  { id: 5, name: "Leader Price" },
];

const fakeProducts = [
  { id: 2, name: "Stylo" },
  { id: 3, name: "Cahier" },
  { id: 4, name: "Crayon" },
];

interface ProductItem {
  product_id: number;
  quantity: number;
}

export default function OrderForm() {
  const [supplier, setSupplier] = useState<number>(fakeSuppliers[0].id);
  const [products, setProducts] = useState<ProductItem[]>([
    { product_id: fakeProducts[0].id, quantity: 1 },
  ]);
  const [loading, setLoading] = useState(false);

  // Ajouter un produit
  const addProduct = () => {
    setProducts([...products, { product_id: fakeProducts[0].id, quantity: 1 }]);
  };

  // Supprimer un produit
  const removeProduct = (index: number) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  // Modifier un produit
  const handleProductChange = (
    index: number,
    field: keyof ProductItem,
    value: string | number
  ) => {
    const updated = [...products];
    updated[index][field] = field === "quantity" ? Number(value) : Number(value);
    setProducts(updated);
  };

  // Soumettre la commande
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      supplier,
      products,
    };

    console.log("📦 Données envoyées :", data);
    setLoading(true);

    try {
      // Exemple d’envoi via API
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Erreur d'envoi");

      alert("Commande envoyée avec succès !");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'envoi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 space-y-6 max-h-[80vh]"
    >
      {/* <h2 className="text-xl font-bold text-gray-800 mb-4">
        Nouvelle commande
      </h2> */}

      {/* Sélection fournisseur */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Fournisseur</label>
        <select
          value={supplier}
          onChange={(e) => setSupplier(Number(e.target.value))}
          className="border border-gray-300 rounded-md px-3 py-2"
        >
          {fakeSuppliers.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      {/* Liste des produits */}
      <div className="space-y-4 max-h-72 overflow-y-scroll">
        {products.map((p, i) => (
          <div key={i} className="flex items-end gap-2">
            {/* Produit */}
            <div className="w-32">
              <label className="text-gray-700 text-sm font-medium">
                Quantité
              </label>
              <input
                type="number"
                min={1}
                value={p.quantity}
                onChange={(e) =>
                  handleProductChange(i, "quantity", e.target.value)
                }
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>

            {/* Quantité */}
            <div className="w-32">
              <label className="text-gray-700 text-sm font-medium">
                Quantité
              </label>
              <input
                type="number"
                min={1}
                value={p.quantity}
                onChange={(e) =>
                  handleProductChange(i, "quantity", e.target.value)
                }
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>

            {/* Supprimer */}
            {products.length > 1 && (
              <button
                type="button"
                onClick={() => removeProduct(i)}
                className="bg-red-500 text-white rounded-md px-3 py-2"
              >
                ✕
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Ajouter un produit */}
      <button
        type="button"
        onClick={addProduct}
        className="text-blue-600 font-medium hover:underline"
      >
        + Ajouter un produit
      </button>

      {/* Envoyer */}
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full transition"
      >
        {loading ? "Envoi..." : "Envoyer la commande"}
      </button>
    </form>
  );
}
