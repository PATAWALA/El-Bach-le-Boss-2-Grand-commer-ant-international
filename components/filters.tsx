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
                  ? "border-transparent"
                  : "border-[#334155] bg-[#1E293B] text-[#94A3B8] hover:border-[#D4AF37]/50 hover:text-[#F8FAFC]"
              }`}
              style={
                isActive
                  ? {
                      backgroundImage:
                        "linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #996515 100%)",
                      color: "#0F172A",
                    }
                  : undefined
              }
            >
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
        className="rounded-xl border border-[#334155] bg-[#1E293B] px-4 py-2.5 text-sm font-semibold text-[#F8FAFC] outline-none transition focus:border-[#D4AF37]"
      >
        <option value="default">Tri par défaut</option>
        <option value="asc">Prix croissant</option>
        <option value="desc">Prix décroissant</option>
      </select>
    </div>
  );
}