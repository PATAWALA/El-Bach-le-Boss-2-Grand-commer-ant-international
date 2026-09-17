"use client";

import { useState } from "react";
import TerrainCard from "@/components/terrain-card";
import { terrains } from "@/data/terrains";
import { TerrainType } from "@/types/product";

type FilterType = TerrainType | "all";

const filters: { key: FilterType; label: string }[] = [
  { key: "all", label: "Tous les terrains" },
  { key: "Résidentiel", label: "Résidentiels" },
  { key: "Agricole", label: "Agricoles" },
  { key: "Commercial", label: "Commerciaux" },
];

export default function TerrainsSection() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filtered =
    filter === "all" ? terrains : terrains.filter((t) => t.type === filter);

  return (
    <section id="terrains" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* En-tête */}
      <div className="mb-8">
        <span
          className="inline-block rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          style={{
            borderColor: "rgba(212, 175, 55, 0.4)",
            backgroundColor: "rgba(212, 175, 55, 0.1)",
            color: "#D4AF37",
          }}
        >
          Terrains disponibles
        </span>
        <h2
          className="mt-4 text-3xl font-black sm:text-4xl"
          style={{ color: "#F8FAFC" }}
        >
          Investissez dans le foncier
        </h2>
        <p className="mt-2 max-w-2xl text-sm sm:text-base" style={{ color: "#94A3B8" }}>
          Terrains résidentiels, agricoles et commerciaux. Titre foncier
          garanti, accompagnement complet.
        </p>
      </div>

      {/* Filtres */}
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => {
          const isActive = filter === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className="rounded-xl border px-4 py-2.5 text-sm font-semibold transition"
              style={
                isActive
                  ? {
                      backgroundImage:
                        "linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #996515 100%)",
                      color: "#0F172A",
                      borderColor: "transparent",
                      boxShadow: "0 8px 24px -8px rgba(212, 175, 55, 0.5)",
                    }
                  : {
                      borderColor: "#334155",
                      backgroundColor: "#1E293B",
                      color: "#94A3B8",
                    }
              }
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Grille */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => (
          <TerrainCard key={t.id} terrain={t} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center" style={{ color: "#94A3B8" }}>
          Aucun terrain dans cette catégorie pour le moment.
        </p>
      )}
    </section>
  );
}