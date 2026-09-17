"use client";

import { motion } from "framer-motion";
import { Car, Bike, Package } from "lucide-react";
import { ProductCategory } from "@/types/product";

interface FiltersProps {
  active: ProductCategory | "all";
  onChange: (c: ProductCategory | "all") => void;
  sort: "default" | "asc" | "desc";
  onSortChange: (s: "default" | "asc" | "desc") => void;
}

const categories: {
  key: ProductCategory | "all";
  label: string;
  icon: typeof Car;
}[] = [
  { key: "all", label: "Tout", icon: Package },
  { key: "vehicules", label: "Véhicules", icon: Car },
  { key: "motos", label: "Motos", icon: Bike },
  { key: "arrivage", label: "En arrivage", icon: Package },
];

export default function Filters({
  active,
  onChange,
  sort,
  onSortChange,
}: FiltersProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Catégories */}
      <div className="flex flex-wrap gap-2">
        {categories.map(({ key, label, icon: Icon }) => {
          const isActive = active === key;
          return (
            <button
              key={key}
              onClick={() => onChange(key)}
              className={`relative flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
                isActive
                  ? "border-transparent text-base"
                  : "border-base-border bg-base-card text-text-muted hover:border-gold-light/50 hover:text-text"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-xl bg-gold-gradient shadow-gold"
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                />
              )}
              <Icon className="relative z-10 h-4 w-4" />
              <span className="relative z-10">{label}</span>
            </button>
          );
        })}
      </div>

      {/* Tri */}
      <select
        value={sort}
        onChange={(e) =>
          onSortChange(e.target.value as "default" | "asc" | "desc")
        }
        className="rounded-xl border border-base-border bg-base-card px-4 py-2.5 text-sm font-semibold text-text outline-none transition focus:border-gold-light"
      >
        <option value="default">Tri par défaut</option>
        <option value="asc">Prix croissant</option>
        <option value="desc">Prix décroissant</option>
      </select>
    </div>
  );
}