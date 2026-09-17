import { Service } from "@/types/product";

export const services: Service[] = [
  {
    id: "s-001",
    icon: "Car",
    title: "Vente de Véhicules",
    description:
      "Véhicules et motos neufs et d'occasion, toutes marques confondues.",
    features: [
      "Toutes marques",
      "Neufs & occasion",
      "Véhicules vérifiés",
      "Prix transparents",
    ],
  },
  {
    id: "s-002",
    icon: "MapPin",
    title: "Vente de Terrains",
    description:
      "Terrains résidentiels, agricoles et commerciaux avec titre foncier.",
    features: [
      "Résidentiels",
      "Agricoles",
      "Commerciaux",
      "Titre foncier garanti",
    ],
  },
  {
    id: "s-003",
    icon: "Handshake",
    title: "Conseils & Accompagnement",
    description:
      "Accompagnement sur-mesure pour vos investissements immobiliers.",
    features: [
      "Conseil personnalisé",
      "Sécurité juridique",
      "Confiance totale",
      "Suivi complet",
    ],
  },
  {
    id: "s-004",
    icon: "Globe",
    title: "Zone Internationale",
    description:
      "Nous intervenons dans plusieurs pays d'Europe et d'Afrique.",
    features: [
      "France & UE",
      "Burkina Faso",
      "Mali & Côte d'Ivoire",
      "Sénégal",
    ],
  },
];