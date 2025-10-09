import React from "react";
import SalesButton from "./SalesButton";

// Définition du type pour un produit dans la facture
type Product = {
  code_id: string;
  name: string;
  quantity: number;
  unitPrice: number;
};

// Définition du type pour une facture
type Invoice = {
  invoiceNumber: string;
  customerName: string;
  products: Product[];
  total: number; // envoyé par le back
};

const InvoiceTable: React.FC = () => {
  const invoices: Invoice[] = [
    {
      invoiceNumber: "FAC-001",
      customerName: "Jean Dupont",
      products: [
        { code_id: "A01", name: "Surf Excel", quantity: 2, unitPrice: 5.0 },
        { code_id: "A02", name: "Rin", quantity: 3, unitPrice: 2.5 },
      ],
      total: 17.5, // => calculé côté back
    },
    {
      invoiceNumber: "FAC-002",
      customerName: "Marie Martin",
      products: [
        { code_id: "B01", name: "Parle G", quantity: 5, unitPrice: 1.0 },
        { code_id: "B02", name: "Lux", quantity: 4, unitPrice: 2.0 },
        { code_id: "B03", name: "Good Day", quantity: 2, unitPrice: 3.0 },
      ],
      total: 19.0, // => calculé côté back
    },
  ];

  return (
    <div className="space-y-8">
      {invoices.map((invoice, index) => (
        <div key={index} className="border rounded-xl p-4 shadow-sm">
          <div className="flex w-full justify-between items-center pb-4">
            <h2 className="text-lg font-bold mb-2">
              Facture {invoice.invoiceNumber} - {invoice.customerName}
            </h2>
            <div className="flex justify-center items-center gap-4">
              <SalesButton label="Edit" />
              <SalesButton label="Facture" />
            </div>
          </div>
          <table className="table-auto w-full">
            <thead className="bg-gray-50 text-gray-600 uppercase text-sm">
              <tr>
                <th className="px-4 py-2 text-left">Code ID</th>
                <th className="px-4 py-2 text-left">Produit</th>
                <th className="px-4 py-2 text-left">Quantité</th>
                <th className="px-4 py-2 text-left">Prix Unitaire</th>
                <th className="px-4 py-2 text-left">Total (ligne)</th>
              </tr>
            </thead>
            <tbody>
              {invoice.products.map((product, pIndex) => (
                <tr key={pIndex} className="hover:bg-gray-50 border-t h-12">
                  <td className="px-4 py-2 font-medium">{product.code_id}</td>
                  <td className="px-4 py-2">{product.name}</td>
                  <td className="px-4 py-2">{product.quantity}</td>
                  <td className="px-4 py-2">
                    {product.unitPrice.toFixed(2)} €
                  </td>
                  <td className="px-4 py-2">
                    {(product.quantity * product.unitPrice).toFixed(2)} €
                  </td>
                </tr>
              ))}
              {/* Total de la facture (envoyé par le back) */}
              <tr className="bg-gray-100 font-bold border-t">
                <td className="px-4 py-2 text-right" colSpan={4}>
                  Total Facture
                </td>
                <td className="px-4 py-2">{invoice.total.toFixed(2)} €</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default InvoiceTable;
