"use client";

import React, { useEffect, useState } from "react";
import { supplierData, SupplierType } from "../../data";

const SuppliersTable: React.FC = () => {
  const [data, setData] = useState<SupplierType[]>([]);
  const headers = [
    "Supplier Name",
    "Company Name",
    "Contact Number",
    "Email",
    "Localisation",
  ];

  useEffect(() => {
    // Ici tu peux remplacer par un fetch depuis ton API
    setData(supplierData);
  }, []);

  if (!data.length) return <p>Loading...</p>;

  return (
    <table className="table-auto w-full p-2">
      <thead className="bg-gray-50 text-gray-600 uppercase text-sm">
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="px-4 py-3 text-left capitalize">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {data.map((supplier, index) => (
          <tr key={index} className="hover:bg-gray-50 h-14 border-t cursor-pointer">
            <td className="px-4 py-3 font-semibold">{supplier.supplierName}</td>
            <td className="px-4 py-3">{supplier.companyName}</td>
            <td className="px-4 py-3">{supplier.contactNumber}</td>
            <td className="px-4 py-3">{supplier.email}</td>
            <td className="px-4 py-3">{supplier.localisation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SuppliersTable;
