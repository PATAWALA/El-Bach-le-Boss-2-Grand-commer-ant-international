"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Truck, BadgeCheck, Sparkles } from "lucide-react";

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden border-b border-[#334155]">
      {/* IMAGE DE FOND */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=90"
          alt="Véhicule premium"
          className="h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/95 to-[#0F172A]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-[#0F172A]/60" />
      </div>

      {/* HALOS DÉCORATIFS */}
      <div className="pointer-events-none absolute -top-40 left-1/3 h-96 w-[800px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#B8860B]/10 blur-3xl" />

      {/* CONTENU */}
      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Badge qualité */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Qualité vérifiée & garantie
          </motion.span>

          {/* Titre */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-4xl font-black leading-[1.1] text-[#F8FAFC] sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Votre prochain véhicule,
            <span className="mt-2 block bg-gradient-to-r from-[#996515] via-[#D4AF37] to-[#996515] bg-clip-text text-transparent">
              livré sans compromis.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-[#94A3B8] sm:text-lg"
          >
            El Bach le Boss 2 & Grand Commerçant International vous propose une
            sélection premium de véhicules et motos, neufs et d'occasion.
            Qualité vérifiée, prix transparents, paiement sécurisé et
            satisfaction garantie.
          </motion.p>

          {/* BOUTONS — COULEURS HARDCODÉES, VISIBILITÉ GARANTIE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {/* Bouton principal — Or plein avec texte ARDOISE */}
            <button
              onClick={onExplore}
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl px-7 py-4 text-base font-extrabold uppercase tracking-wide shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(212,175,55,0.8)] active:scale-95"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #996515 100%)",
                color: "#0F172A",
              }}
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative z-10 flex items-center gap-2.5">
                Explorer le catalogue
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </span>
            </button>

            {/* Bouton secondaire — Contour or + texte or sur fond ardoise */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-xl border-2 px-7 py-4 text-base font-extrabold uppercase tracking-wide backdrop-blur-md transition-all duration-300 active:scale-95"
              style={{
                borderColor: "#D4AF37",
                backgroundColor: "rgba(15, 23, 42, 0.85)",
                color: "#D4AF37",
              }}
            >
              Nous contacter
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {[
              { icon: ShieldCheck, label: "Paiement sécurisé" },
              { icon: Truck, label: "Livraison rapide & suivie" },
              { icon: BadgeCheck, label: "Véhicules vérifiés" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-[#334155] bg-[#1E293B]/60 px-4 py-3 backdrop-blur-sm"
              >
                <Icon className="h-5 w-5 flex-shrink-0 text-[#D4AF37]" />
                <span className="text-sm font-medium text-[#F8FAFC]">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}