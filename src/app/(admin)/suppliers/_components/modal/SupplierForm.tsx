"use client";

import { useState } from "react";

interface SupplierType {
  supplierName: string;
  companyName: string;
  contactNumber: string;
  email: string;
  localisation: string;
}

export default function SupplierForm() {
  const [supplier, setSupplier] = useState<SupplierType>({
    supplierName: "",
    companyName: "",
    contactNumber: "",
    email: "",
    localisation: "",
  });

  const [loading, setLoading] = useState(false);

  // Gestion des changements dans les inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSupplier({ ...supplier, [name]: value });
  };

  // Envoi du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("📦 Données envoyées :", supplier);
    setLoading(true);

    try {
      const res = await fetch("/api/suppliers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(supplier),
      });

      if (!res.ok) throw new Error("Erreur d'envoi");

      alert("Fournisseur ajouté avec succès !");
      setSupplier({
        supplierName: "",
        companyName: "",
        contactNumber: "",
        email: "",
        localisation: "",
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
      className="max-w-lg mx-auto p-6 space-y-6"
    >
      {/* <h2 className="text-xl font-bold text-gray-800 mb-4">
        Ajouter un fournisseur
      </h2> */}

      {/* Nom du fournisseur */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">
          Nom du fournisseur
        </label>
        <input
          type="text"
          name="supplierName"
          value={supplier.supplierName}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2"
          placeholder="Ex : FreshFarm Ltd."
          required
        />
      </div>

      {/* Nom de l’entreprise */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">
          Nom de l’entreprise
        </label>
        <input
          type="text"
          name="companyName"
          value={supplier.companyName}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2"
          placeholder="Ex : FreshFarm Import & Export"
          required
        />
      </div>

      {/* Numéro de contact */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">
          Numéro de contact
        </label>
        <input
          type="text"
          name="contactNumber"
          value={supplier.contactNumber}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2"
          placeholder="Ex : 8765432109"
          required
        />
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={supplier.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2"
          placeholder="Ex : support@freshfarm.com"
          required
        />
      </div>

      {/* Localisation */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">
          Localisation
        </label>
        <input
          type="text"
          name="localisation"
          value={supplier.localisation}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2"
          placeholder="Ex : Toamasina, Madagascar"
          required
        />
      </div>

      {/* Bouton d’envoi */}
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full transition"
      >
        {loading ? "Envoi..." : "Envoyer le fournisseur"}
      </button>
    </form>
  );
}
