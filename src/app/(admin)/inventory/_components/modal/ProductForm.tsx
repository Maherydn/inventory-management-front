"use client";

import { useState } from "react";

interface ProductType {
  productName: string;
  categoryId: number;
  expiryDate: string;
  thresholdValue: number;
  sellPrice: number;
  supplierId: number;
}

export default function ProductForm() {
  const [product, setProduct] = useState<ProductType>({
    productName: "",
    categoryId: 0,
    expiryDate: "",
    thresholdValue: 0,
    sellPrice: 0,
    supplierId: 0,
  });

  const [loading, setLoading] = useState(false);

  // 🔹 Liste factice des catégories
  const fakeCategories = [
    { id: 1, name: "Alimentation" },
    { id: 2, name: "Boisson" },
    { id: 3, name: "Hygiène" },
    { id: 4, name: "Électronique" },
    { id: 5, name: "Papeterie" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]:
        name === "categoryId" ||
        name === "thresholdValue" ||
        name === "sellPrice" ||
        name === "supplierId"
          ? Number(value)
          : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("📦 Données envoyées :", product);
    setLoading(true);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (!res.ok) throw new Error("Erreur d'envoi");

      alert("Produit ajouté avec succès !");
      setProduct({
        productName: "",
        categoryId: 0,
        expiryDate: "",
        thresholdValue: 0,
        sellPrice: 0,
        supplierId: 0,
      });
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
      className="max-w-lg mx-auto p-6 space-y-4 max-h-[90vh]"
    >
      {/* <h2 className="text-xl font-bold text-gray-800 mb-4">
        Ajouter un produit
      </h2> */}

      {/* Nom du produit */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">
          Nom du produit
        </label>
        <input
          type="text"
          name="productName"
          value={product.productName}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2"
          placeholder="Ex : Maggi"
          required
        />
      </div>

      {/* Catégorie */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Catégorie</label>
        <select
          name="categoryId"
          value={product.categoryId}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2"
          required
        >
          <option value={0}>-- Sélectionner une catégorie --</option>
          {fakeCategories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Date d’expiration */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">
          Date d’expiration
        </label>
        <input
          type="date"
          name="expiryDate"
          value={product.expiryDate}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2"
          required
        />
      </div>

      {/* Seuil d’alerte */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">
          Valeur seuil
        </label>
        <input
          type="number"
          name="thresholdValue"
          value={product.thresholdValue}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2"
          placeholder="Ex : 12"
          required
        />
      </div>

      {/* Prix de vente */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">
          Prix de vente
        </label>
        <input
          type="number"
          name="sellPrice"
          value={product.sellPrice}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2"
          placeholder="Ex : 2500"
          required
        />
      </div>

      {/* Fournisseur */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">
          ID du fournisseur
        </label>
        <input
          type="number"
          name="supplierId"
          value={product.supplierId}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2"
          placeholder="Ex : 2"
          required
        />
      </div>

      {/* Bouton d’envoi */}
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full transition"
      >
        {loading ? "Envoi..." : "Envoyer le produit"}
      </button>
    </form>
  );
}
