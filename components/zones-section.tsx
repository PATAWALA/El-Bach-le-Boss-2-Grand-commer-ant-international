"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { zones } from "@/data/zones";

export default function ZonesSection() {
  return (
    <section id="zones" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* En-tête */}
      <div className="mb-12 text-center">
        <span
          className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          style={{
            borderColor: "rgba(212, 175, 55, 0.4)",
            backgroundColor: "rgba(212, 175, 55, 0.1)",
            color: "#D4AF37",
          }}
        >
          <Globe className="h-3.5 w-3.5" />
          Zone d'intervention internationale
        </span>
        <h2
          className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl"
          style={{ color: "#F8FAFC" }}
        >
          Nous intervenons partout
        </h2>
        <p
          className="mx-auto mt-4 max-w-2xl text-sm sm:text-base"
          style={{ color: "#94A3B8" }}
        >
          Un réseau solide en Europe et en Afrique de l'Ouest pour vous
          accompagner où que vous soyez.
        </p>
      </div>

      {/* Grille zones */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {zones.map((zone, index) => (
          <motion.div
            key={zone.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            whileHover={{ y: -4 }}
            className="flex flex-col items-center rounded-2xl border p-5 text-center transition"
            style={{
              borderColor: "#334155",
              backgroundColor: "#1E293B",
            }}
          >
            <span className="text-4xl leading-none sm:text-5xl">
              {zone.flag}
            </span>
            <h3
              className="mt-3 text-sm font-bold leading-tight"
              style={{ color: "#F8FAFC" }}
            >
              {zone.country}
            </h3>
            <p
              className="mt-1 text-[11px] leading-snug"
              style={{ color: "#94A3B8" }}
            >
              {zone.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}