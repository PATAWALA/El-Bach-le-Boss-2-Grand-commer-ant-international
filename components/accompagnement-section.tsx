"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, HeartHandshake, Sparkles } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Sérieux",
    description: "Un engagement ferme et une rigueur professionnelle à chaque étape.",
  },
  {
    icon: UserCheck,
    title: "Sécurité",
    description: "Transactions sécurisées, contrats vérifiés, zéro mauvaise surprise.",
  },
  {
    icon: HeartHandshake,
    title: "Confiance",
    description: "Une relation durable basée sur la transparence et l'écoute.",
  },
];

export default function AccompagnementSection() {
  return (
    <section
      id="accompagnement"
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
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{
              borderColor: "rgba(212, 175, 55, 0.4)",
              backgroundColor: "rgba(212, 175, 55, 0.1)",
              color: "#D4AF37",
            }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Conseils & Accompagnement
          </span>
          <h2
            className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl"
            style={{ color: "#F8FAFC" }}
          >
            Un accompagnement sur-mesure
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-sm sm:text-base"
            style={{ color: "#94A3B8" }}
          >
            Que ce soit pour un véhicule, un terrain ou un investissement
            immobilier, nous vous guidons de A à Z.
          </p>
        </div>

        {/* Valeurs */}
        <div className="grid gap-6 sm:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl border p-6 text-center transition hover:-translate-y-1"
              style={{
                borderColor: "#334155",
                backgroundColor: "#1E293B",
              }}
            >
              <div
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #996515 100%)",
                  boxShadow: "0 8px 32px -8px rgba(212, 175, 55, 0.45)",
                }}
              >
                <value.icon className="h-6 w-6" style={{ color: "#0F172A" }} />
              </div>
              <h3
                className="mt-5 text-xl font-black"
                style={{ color: "#F8FAFC" }}
              >
                {value.title}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "#94A3B8" }}
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}