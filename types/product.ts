export type ProductCategory = "vehicules" | "motos" | "arrivage";
export type ProductCondition = "Neuf" | "Occasion";
export type ProductStatus = "Disponible" | "En arrivage" | "Réservé";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  condition: ProductCondition;
  status: ProductStatus;
  price: number; // en FCFA
  image: string;
  year: number;
  km: number;
  fuel: "Essence" | "Diesel" | "Électrique" | "Hybride";
  transmission: "Automatique" | "Manuelle";
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}