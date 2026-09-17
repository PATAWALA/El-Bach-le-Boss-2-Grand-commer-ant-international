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
  price: number;
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

// ---------- TERRAINS ----------
export type TerrainType = "Résidentiel" | "Agricole" | "Commercial";
export type TerrainStatus = "Disponible" | "Réservé" | "Vendu";

export interface Terrain {
  id: string;
  title: string;
  type: TerrainType;
  status: TerrainStatus;
  price: number;
  surface: number; // en m²
  location: string;
  image: string;
  description: string;
  features: string[]; // ex: ["Titre foncier", "Clôturé", "Eau + Électricité"]
}

// ---------- SERVICES ----------
export interface Service {
  id: string;
  icon: string; // nom de l'icône Lucide
  title: string;
  description: string;
  features: string[];
}

// ---------- ZONES ----------
export interface Zone {
  id: string;
  country: string;
  flag: string;
  description: string;
}