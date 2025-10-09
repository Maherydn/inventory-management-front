// Définition du type pour un fournisseur
export interface SupplierType {
  supplierName: string;
  companyName: string;
  contactNumber: string;
  email: string;
  localisation: string;
}

// Données d’exemple conformes à SupplierType
export const supplierData: SupplierType[] = [
  {
    supplierName: "Global Distributors",
    companyName: "Global Distributors SARL",
    contactNumber: "9876543210",
    email: "contact@globaldist.com",
    localisation: "Antananarivo, Madagascar",
  },
  {
    supplierName: "FreshFarm Ltd.",
    companyName: "FreshFarm Import & Export",
    contactNumber: "8765432109",
    email: "support@freshfarm.com",
    localisation: "Toamasina, Madagascar",
  },
  {
    supplierName: "Sunrise Traders",
    companyName: "Sunrise Commercial",
    contactNumber: "7654321098",
    email: "info@sunrisetraders.com",
    localisation: "Fianarantsoa, Madagascar",
  },
  {
    supplierName: "Ocean Supplies",
    companyName: "Ocean Trading Co.",
    contactNumber: "7543210987",
    email: "contact@oceansupplies.com",
    localisation: "Mahajanga, Madagascar",
  },
  {
    supplierName: "Madagascar Agro",
    companyName: "Madagascar Agro Industries",
    contactNumber: "7432109876",
    email: "hello@madaagro.com",
    localisation: "Antsirabe, Madagascar",
  },
];
