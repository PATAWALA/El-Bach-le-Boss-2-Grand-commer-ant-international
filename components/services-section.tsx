"use client";

import { motion } from "framer-motion";
import {
  Car,
  MapPin,
  Handshake,
  Globe,
  Check,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  Car,
  MapPin,
  Handshake,
  Globe,
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="border-y"
      style={{
        borderColor: "#334155",
        backgroundColor: "rgba(30, 41, 59, 0.3)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="mb-12 text-center">
          <span
            className="inline-block rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{
              borderColor: "rgba(212, 175, 55, 0.4)",
              backgroundColor: "rgba(212, 175, 55, 0.1)",
              color: "#D4AF37",
            }}
          >
            Nos Services
          </span>
          <h2
            className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl"
            style={{ color: "#F8FAFC" }}
          >
            Ce que nous proposons
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-sm sm:text-base"
            style={{ color: "#94A3B8" }}
          >
            Auto Confort vous accompagne dans tous vos projets : véhicules,
            terrains et investissements.
          </p>
        </div>

        {/* Grille services */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Car;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border p-6 transition hover:-translate-y-1"
                style={{
                  borderColor: "#334155",
                  backgroundColor: "#1E293B",
                }}
              >
                {/* Halo or au hover */}
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-3xl transition group-hover:opacity-100"
                  style={{ backgroundColor: "rgba(212, 175, 55, 0.2)" }}
                />

                {/* Icône */}
                <div
                  className="relative flex h-14 w-14 items-center justify-center rounded-xl"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #996515 100%)",
                    boxShadow: "0 8px 32px -8px rgba(212, 175, 55, 0.45)",
                  }}
                >
                  <Icon className="h-6 w-6" style={{ color: "#0F172A" }} />
                </div>

                <h3
                  className="relative mt-5 text-lg font-bold"
                  style={{ color: "#F8FAFC" }}
                >
                  {service.title}
                </h3>
                <p
                  className="relative mt-2 text-sm leading-relaxed"
                  style={{ color: "#94A3B8" }}
                >
                  {service.description}
                </p>

                {/* Features */}
                <ul className="relative mt-4 space-y-1.5">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-xs"
                      style={{ color: "#CBD5E1" }}
                    >
                      <Check
                        className="h-3.5 w-3.5 flex-shrink-0"
                        style={{ color: "#D4AF37" }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}