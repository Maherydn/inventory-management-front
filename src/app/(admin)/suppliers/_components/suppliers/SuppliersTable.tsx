import React from "react";

// Définition du type pour un fournisseur
type Supplier = {
  supplierName: string;
  product: string;
  contactNumber: string;
  email: string;
  type: string;
  onTheWay: boolean;
};

const SuppliersTable: React.FC = () => {
  const headers = [
    "Supplier Name",
    "Product",
    "Contact Number",
    "Email",
    "Type",
    "On the way",
  ];

  const data: Supplier[] = [
    {
      supplierName: "Global Distributors",
      product: "Surf Excel",
      contactNumber: "9876543210",
      email: "contact@globaldist.com",
      type: "Regular",
      onTheWay: true,
    },
    {
      supplierName: "FreshFarm Ltd.",
      product: "Rin",
      contactNumber: "8765432109",
      email: "support@freshfarm.com",
      type: "Wholesale",
      onTheWay: false,
    },
    {
      supplierName: "Sunrise Traders",
      product: "Parle G",
      contactNumber: "7654321098",
      email: "info@sunrisetraders.com",
      type: "Local",
      onTheWay: true,
    },
    {
      supplierName: "Global Distributors",
      product: "Tide",
      contactNumber: "9876543210",
      email: "contact@globaldist.com",
      type: "Regular",
      onTheWay: false,
    },
    {
      supplierName: "FreshFarm Ltd.",
      product: "Lux",
      contactNumber: "8765432109",
      email: "support@freshfarm.com",
      type: "Wholesale",
      onTheWay: true,
    },
    {
      supplierName: "Sunrise Traders",
      product: "Good Day",
      contactNumber: "7654321098",
      email: "info@sunrisetraders.com",
      type: "Local",
      onTheWay: false,
    },
  ];

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
          <tr key={index} className="hover:bg-gray-50 h-14 border-t">
            <td className="px-4 py-3 font-semibold">{supplier.supplierName}</td>
            <td className="px-4 py-3">{supplier.product}</td>
            <td className="px-4 py-3">{supplier.contactNumber}</td>
            <td className="px-4 py-3">{supplier.email}</td>
            <td className="px-4 py-3">{supplier.type}</td>
            <td className="px-4 py-3">
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  supplier.onTheWay ? "text-green-500" : "text-red-500"
                }`}
              >
                {supplier.onTheWay ? "Yes" : "No"}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SuppliersTable;
