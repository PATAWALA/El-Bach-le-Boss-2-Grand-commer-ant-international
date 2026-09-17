"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Truck, BadgeCheck, Sparkles } from "lucide-react";

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden border-b border-base-border">
      {/* ============================================
          IMAGE DE FOND — Véhicule premium
          ============================================ */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=90"
          alt="Véhicule premium en arrière-plan"
          className="h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* Overlay dégradé sombre pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-r from-base via-base/90 to-base/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-base/40" />
      </div>

      {/* ============================================
          HALO OR DÉCORATIF
          ============================================ */}
      <div className="pointer-events-none absolute -top-40 left-1/3 h-96 w-[800px] -translate-x-1/2 rounded-full bg-gold-light/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      {/* ============================================
          CONTENU
          ============================================ */}
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
            className="inline-flex items-center gap-2 rounded-full border border-gold-light/40 bg-gold-light/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-light backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Qualité vérifiée & garantie
          </motion.span>

          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-4xl font-black leading-[1.1] text-text sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Votre prochain véhicule,
            <span className="mt-2 block bg-gold-shine bg-[length:200%_auto] bg-clip-text text-transparent animate-shine">
              livré sans compromis.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg"
          >
            El Bach le Boss 2 & Grand Commerçant International vous propose une
            sélection premium de véhicules et motos, neufs et d'occasion.
            Qualité vérifiée, prix transparents, paiement sécurisé et
            satisfaction garantie.
          </motion.p>

          {/* Boutons d'action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button
              onClick={onExplore}
              className="group flex items-center gap-2 rounded-xl bg-gold-gradient px-6 py-3.5 text-sm font-bold text-base shadow-gold transition hover:brightness-110 active:scale-95"
            >
              Explorer le catalogue
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
            <a
              href="#contact"
              className="rounded-xl border border-base-border bg-base-card/70 px-6 py-3.5 text-sm font-bold text-text backdrop-blur-sm transition hover:border-gold-light"
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
                className="flex items-center gap-3 rounded-xl border border-base-border bg-base-card/60 px-4 py-3 backdrop-blur-sm"
              >
                <Icon className="h-5 w-5 flex-shrink-0 text-gold-light" />
                <span className="text-sm font-medium text-text">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ============================================
          INDICATEUR DE SCROLL (optionnel)
          ============================================ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-gold-light/40 p-1.5"
        >
          <div className="h-2 w-1 rounded-full bg-gold-light" />
        </motion.div>
      </motion.div>
    </section>
  );
}