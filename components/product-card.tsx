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

const statusStyles: Record<string, string> = {
  Disponible: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "En arrivage": "bg-amber-500/15 text-amber-400 border-amber-500/30",
  Réservé: "bg-rose-500/15 text-rose-400 border-rose-500/30",
};

export default function ProductCard({
  product,
  onAdd,
  onQuickView,
}: ProductCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-base-border bg-base-card shadow-card"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent opacity-70" />

        {/* Badge statut */}
        <span
          className={`absolute left-3 top-3 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
            statusStyles[product.status]
          }`}
        >
          {product.status}
        </span>

        {/* Badge état */}
        <span className="absolute right-3 top-3 rounded-full border border-gold-light/40 bg-base/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-light backdrop-blur">
          {product.condition}
        </span>

        {/* Bouton vue rapide */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg border border-base-border bg-base/80 px-3 py-1.5 text-xs font-medium text-text opacity-0 backdrop-blur transition group-hover:opacity-100 hover:border-gold-light"
        >
          <Eye className="h-3.5 w-3.5" />
          Vue rapide
        </button>
      </div>

      {/* Contenu */}
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-gold-light">
          {product.brand}
        </p>
        <h3 className="mt-1 line-clamp-1 text-base font-bold text-text">
          {product.name}
        </h3>

        {/* Specs */}
        <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-text-muted">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {product.year}
          </div>
          <div className="flex items-center gap-1">
            <Gauge className="h-3 w-3" />
            {product.km.toLocaleString("fr-FR")} km
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="h-3 w-3" />
            {product.fuel}
          </div>
        </div>

        {/* Prix + Action */}
        <div className="mt-4 flex items-end justify-between border-t border-base-border pt-4">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-text-muted">
              Prix
            </p>
            <p className="text-lg font-extrabold text-gold-light">
              {formatFCFA(product.price)}
            </p>
          </div>
          <button
            onClick={() => onAdd(product)}
            className="flex items-center gap-1.5 rounded-xl bg-gold-gradient px-3.5 py-2.5 text-xs font-bold text-base shadow-gold transition hover:brightness-110 active:scale-95"
          >
            <Plus className="h-3.5 w-3.5" />
            Ajouter
          </button>
        </div>
      </div>
    </motion.article>
  );
}