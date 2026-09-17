import { Terrain } from "@/types/product";

export const terrains: Terrain[] = [
  {
    id: "t-001",
    title: "Terrain résidentiel 500 m²",
    type: "Résidentiel",
    status: "Disponible",
    price: 7500000,
    surface: 500,
    location: "Ouagadougou — Zone résidentielle",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    description:
      "Terrain plat, prêt à construire, dans un quartier calme et sécurisé.",
    features: ["Titre foncier", "Clôturé", "Eau + Électricité", "Accès bitumé"],
  },
  {
    id: "t-002",
    title: "Terrain agricole 2 hectares",
    type: "Agricole",
    status: "Disponible",
    price: 12000000,
    surface: 20000,
    location: "Périphérie de Bobo-Dioulasso",
    image:
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80",
    description:
      "Terrain fertile, idéal pour agriculture ou élevage. Sol riche et bien irrigué.",
    features: ["Titre foncier", "Source d'eau", "Route d'accès", "Clôturé"],
  },
  {
    id: "t-003",
    title: "Terrain commercial 1000 m²",
    type: "Commercial",
    status: "Disponible",
    price: 25000000,
    surface: 1000,
    location: "Centre-ville — Zone stratégique",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80",
    description:
      "Emplacement idéal pour commerce, bureau ou hôtel. Fort passage.",
    features: [
      "Titre foncier",
      "Angle de rue",
      "Électricité triphasée",
      "Zone très fréquentée",
    ],
  },
  {
    id: "t-004",
    title: "Terrain résidentiel 300 m²",
    type: "Résidentiel",
    status: "Disponible",
    price: 4500000,
    surface: 300,
    location: "Zone en expansion",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    description:
      "Petit terrain parfait pour villa ou duplex. Quartier en plein développement.",
    features: ["Titre foncier", "Eau disponible", "Voisinage calme"],
  },
  {
    id: "t-005",
    title: "Terrain agricole 5 hectares",
    type: "Agricole",
    status: "Disponible",
    price: 28000000,
    surface: 50000,
    location: "Région fertile",
    image:
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1200&q=80",
    description:
      "Grande exploitation agricole avec accès à l'eau. Idéal pour projet agro-industriel.",
    features: ["Titre foncier", "Forage", "Bâtiment existant", "Route d'accès"],
  },
  {
    id: "t-006",
    title: "Terrain commercial 2000 m²",
    type: "Commercial",
    status: "Disponible",
    price: 45000000,
    surface: 2000,
    location: "Axe principal — Bord de route",
    image:
      "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=1200&q=80",
    description:
      "Vaste terrain en bord de route nationale. Parfait pour station, entrepôt ou centre commercial.",
    features: [
      "Titre foncier",
      "Bord de route nationale",
      "Électricité + Eau",
      "Zone industrielle",
    ],
  },
];

export const WHATSAPP_TERRAIN_MESSAGE =
  "Bonjour Auto Confort, je suis intéressé(e) par un terrain. Pouvez-vous me donner plus d'informations ?";