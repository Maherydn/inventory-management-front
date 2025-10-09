"use client";

import { useState } from "react";

interface CategoryType {
  name: string;
  ref: string;
}

export default function CategoryForm() {
  const [category, setCategory] = useState<CategoryType>({
    name: "",
    ref: "",
  });

  const [loading, setLoading] = useState(false);

  // 🔹 Gestion des changements
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  // 🔹 Envoi du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("📦 Données envoyées :", category);
    setLoading(true);

    try {
      const res = await fetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(category),
      });

      if (!res.ok) throw new Error("Erreur d'envoi");

      alert("Catégorie ajoutée avec succès !");
      setCategory({ name: "", ref: "" });
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
      className="max-w-md mx-auto p-6 space-y-4 bg-white rounded-lg "
    >
      {/* <h2 className="text-xl font-bold text-gray-800 mb-4">
        Ajouter une catégorie
      </h2> */}

      {/* Nom de la catégorie */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">
          Nom de la catégorie
        </label>
        <input
          type="text"
          name="name"
          value={category.name}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2"
          placeholder="Ex : Alimentation"
          required
        />
      </div>

      {/* Référence de la catégorie */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">
          Référence
        </label>
        <input
          type="text"
          name="ref"
          value={category.ref}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2"
          placeholder="Ex : CAT001"
          required
        />
      </div>

      {/* Bouton d’envoi */}
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full transition"
      >
        {loading ? "Envoi..." : "Ajouter la catégorie"}
      </button>
    </form>
  );
}
