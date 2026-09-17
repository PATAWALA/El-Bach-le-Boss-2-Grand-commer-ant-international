"use client";

import { motion } from "framer-motion";
import { Eye, Plus, Fuel, Gauge, Calendar } from "lucide-react";
import { Product } from "@/types/product";
import { formatFCFA } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  onAdd: (p: Product) => void;
  onQuickView: (p: Product) => void;
}

const statusStyles: Record<string, { bg: string; color: string; border: string }> = {
  Disponible: {
    bg: "rgba(16, 185, 129, 0.15)",
    color: "#34D399",
    border: "rgba(16, 185, 129, 0.3)",
  },
  "En arrivage": {
    bg: "rgba(245, 158, 11, 0.15)",
    color: "#FBBF24",
    border: "rgba(245, 158, 11, 0.3)",
  },
  Réservé: {
    bg: "rgba(244, 63, 94, 0.15)",
    color: "#FB7185",
    border: "rgba(244, 63, 94, 0.3)",
  },
};

export default function ProductCard({
  product,
  onAdd,
  onQuickView,
}: ProductCardProps) {
  const status = statusStyles[product.status] || statusStyles["Disponible"];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border"
      style={{
        borderColor: "#334155",
        backgroundColor: "#1E293B",
        boxShadow: "0 4px 24px -8px rgba(0, 0, 0, 0.6)",
      }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Overlay bas uniquement */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2"
          style={{
            background:
              "linear-gradient(to top, rgba(15,23,42,0.9) 0%, transparent 100%)",
          }}
        />

        {/* Badge statut */}
        <span
          className="absolute left-3 top-3 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur"
          style={{
            backgroundColor: status.bg,
            color: status.color,
            borderColor: status.border,
          }}
        >
          {product.status}
        </span>

        {/* Badge état */}
        <span
          className="absolute right-3 top-3 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur"
          style={{
            borderColor: "rgba(212, 175, 55, 0.5)",
            backgroundColor: "rgba(15, 23, 42, 0.85)",
            color: "#D4AF37",
          }}
        >
          {product.condition}
        </span>

        {/* Bouton vue rapide — TOUJOURS VISIBLE maintenant */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold backdrop-blur transition hover:scale-105"
          style={{
            borderColor: "rgba(212, 175, 55, 0.5)",
            backgroundColor: "rgba(15, 23, 42, 0.9)",
            color: "#D4AF37",
          }}
        >
          <Eye className="h-3.5 w-3.5" />
          Vue rapide
        </button>
      </div>

      {/* Contenu — FOND PLUS SOMBRE POUR GARANTIR LE CONTRASTE */}
      <div
        className="flex flex-1 flex-col p-4"
        style={{ backgroundColor: "#1E293B" }}
      >
        {/* Marque */}
        <p
          className="text-[10px] font-bold uppercase tracking-widest"
          style={{ color: "#D4AF37" }}
        >
          {product.brand}
        </p>

        {/* NOM DU VÉHICULE — FORCÉ VISIBLE */}
        <h3
          className="mt-1.5 text-base font-bold leading-snug"
          style={{
            color: "#F8FAFC",
            display: "block",
            minHeight: "1.5rem",
          }}
        >
          {product.name}
        </h3>

        {/* Specs */}
        <div
          className="mt-3 grid grid-cols-3 gap-2 text-[11px]"
          style={{ color: "#94A3B8" }}
        >
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" style={{ color: "#D4AF37" }} />
            <span>{product.year}</span>
          </div>
          <div className="flex items-center gap-1">
            <Gauge className="h-3 w-3" style={{ color: "#D4AF37" }} />
            <span>{product.km.toLocaleString("fr-FR")} km</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="h-3 w-3" style={{ color: "#D4AF37" }} />
            <span>{product.fuel}</span>
          </div>
        </div>

        {/* Prix + Action */}
        <div
          className="mt-4 flex items-end justify-between border-t pt-4"
          style={{ borderColor: "#334155" }}
        >
          <div>
            <p
              className="text-[10px] uppercase tracking-wider"
              style={{ color: "#94A3B8" }}
            >
              Prix
            </p>
            <p
              className="text-lg font-extrabold"
              style={{ color: "#D4AF37" }}
            >
              {formatFCFA(product.price)}
            </p>
          </div>

          {/* Bouton "Ajouter" — visible et contrasté */}
          <button
            onClick={() => onAdd(product)}
            className="flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-extrabold uppercase tracking-wide transition hover:brightness-110 active:scale-95"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #996515 100%)",
              color: "#0F172A",
              boxShadow: "0 8px 24px -8px rgba(212, 175, 55, 0.5)",
            }}
          >
            <Plus className="h-3.5 w-3.5" />
            Ajouter
          </button>
        </div>
      </div>
    </motion.article>
  );
}