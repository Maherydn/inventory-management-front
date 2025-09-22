"use client";

import { SearchIcon } from "lucide-react";
import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Recherche pour:", searchTerm);
    // Tu peux ajouter la logique de recherche ici
  };

  return (
    <div className="w-96 h-8 flex items-center bg-gray-50 rounded-2xl overflow-hidden">
      <button
        className="h-8 w-12 text-gray-500 px-3 py-1 bg-gray-100 "
        onClick={() => handleSearch}
      >
        <SearchIcon />
      </button>
      <input
        className="size-full px-2 rounded-r-2xl"
        type="text"
        placeholder="  Search product, supplier, order, ..."
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchTerm(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
