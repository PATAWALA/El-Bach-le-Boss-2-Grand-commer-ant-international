"use client";

import { motion } from "framer-motion";
import { MapPin, Maximize, MessageCircle, Check } from "lucide-react";
import { Terrain } from "@/types/product";
import { formatFCFA } from "@/lib/utils";
import { WHATSAPP_NUMBER } from "@/data/products";

interface TerrainCardProps {
  terrain: Terrain;
}

const typeStyles: Record<string, { bg: string; color: string; border: string }> = {
  Résidentiel: {
    bg: "rgba(59, 130, 246, 0.15)",
    color: "#60A5FA",
    border: "rgba(59, 130, 246, 0.3)",
  },
  Agricole: {
    bg: "rgba(34, 197, 94, 0.15)",
    color: "#4ADE80",
    border: "rgba(34, 197, 94, 0.3)",
  },
  Commercial: {
    bg: "rgba(245, 158, 11, 0.15)",
    color: "#FBBF24",
    border: "rgba(245, 158, 11, 0.3)",
  },
};

export default function TerrainCard({ terrain }: TerrainCardProps) {
  const typeStyle = typeStyles[terrain.type] || typeStyles["Résidentiel"];

  const buildWhatsAppLink = () => {
    const message = `Bonjour Auto Confort, je suis intéressé(e) par le terrain suivant :

📍 *${terrain.title}*
• Type : ${terrain.type}
• Surface : ${terrain.surface.toLocaleString("fr-FR")} m²
• Localisation : ${terrain.location}
• Prix : ${formatFCFA(terrain.price)}

Merci de me contacter pour plus d'informations.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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
          src={terrain.image}
          alt={terrain.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget;
            target.onerror = null;
            target.src =
              "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80";
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/2"
          style={{
            background:
              "linear-gradient(to top, rgba(15,23,42,0.9) 0%, transparent 100%)",
          }}
        />

        {/* Badge type */}
        <span
          className="absolute left-3 top-3 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur"
          style={{
            backgroundColor: typeStyle.bg,
            color: typeStyle.color,
            borderColor: typeStyle.border,
          }}
        >
          {terrain.type}
        </span>

        {/* Badge statut */}
        <span
          className="absolute right-3 top-3 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur"
          style={{
            borderColor: "rgba(212, 175, 55, 0.5)",
            backgroundColor: "rgba(15, 23, 42, 0.85)",
            color: "#D4AF37",
          }}
        >
          {terrain.status}
        </span>
      </div>

      {/* Contenu */}
      <div className="flex flex-1 flex-col p-4">
        <h3
          className="text-base font-bold leading-snug"
          style={{ color: "#F8FAFC" }}
        >
          {terrain.title}
        </h3>

        {/* Localisation */}
        <div
          className="mt-2 flex items-center gap-1.5 text-xs"
          style={{ color: "#94A3B8" }}
        >
          <MapPin className="h-3.5 w-3.5" style={{ color: "#D4AF37" }} />
          <span className="truncate">{terrain.location}</span>
        </div>

        {/* Surface */}
        <div
          className="mt-1.5 flex items-center gap-1.5 text-xs"
          style={{ color: "#94A3B8" }}
        >
          <Maximize className="h-3.5 w-3.5" style={{ color: "#D4AF37" }} />
          <span>{terrain.surface.toLocaleString("fr-FR")} m²</span>
        </div>

        {/* Features */}
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {terrain.features.slice(0, 3).map((f) => (
            <li
              key={f}
              className="rounded-md border px-2 py-0.5 text-[10px] font-medium"
              style={{
                borderColor: "#334155",
                backgroundColor: "#0F172A",
                color: "#CBD5E1",
              }}
            >
              {f}
            </li>
          ))}
        </ul>

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
              {formatFCFA(terrain.price)}
            </p>
          </div>

          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-xl px-3.5 py-2.5 text-xs font-extrabold uppercase tracking-wide transition hover:brightness-110 active:scale-95"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #996515 100%)",
              color: "#0F172A",
              boxShadow: "0 8px 24px -8px rgba(212, 175, 55, 0.5)",
            }}
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Info
          </a>
        </div>
      </div>
    </motion.article>
  );
}