"use client";

import {
  ArrowRight,
  ShieldCheck,
  Truck,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section
      className="relative min-h-[90vh] overflow-hidden border-b"
      style={{ borderColor: "#334155" }}
    >
      {/* ============================================
          IMAGE DE FOND — Véhicule premium
          ============================================ */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=90"
          alt="Véhicule premium"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        {/* Overlay horizontal → texte lisible à gauche */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #0F172A 0%, rgba(15,23,42,0.95) 40%, rgba(15,23,42,0.7) 100%)",
          }}
        />
        {/* Overlay vertical → fondu haut/bas */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #0F172A 0%, rgba(15,23,42,0.3) 50%, rgba(15,23,42,0.6) 100%)",
          }}
        />
      </div>

      {/* ============================================
          HALOS OR DÉCORATIFS
          ============================================ */}
      <div
        className="pointer-events-none absolute -top-40 left-1/3 h-96 w-[800px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(212, 175, 55, 0.1)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(184, 134, 11, 0.1)" }}
      />

      {/* ============================================
          CONTENU
          ============================================ */}
      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl animate-[heroFadeIn_0.8s_ease-out_both]">
          {/* Badge qualité */}
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm"
            style={{
              borderColor: "rgba(212, 175, 55, 0.4)",
              backgroundColor: "rgba(212, 175, 55, 0.1)",
              color: "#D4AF37",
            }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Qualité vérifiée & garantie
          </span>

          {/* Titre principal */}
          <h1
            className="mt-6 text-4xl font-black leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl"
            style={{ color: "#F8FAFC" }}
          >
            Votre prochain véhicule,
            <span
              className="mt-2 block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, #996515 0%, #D4AF37 30%, #FFF3B0 50%, #D4AF37 70%, #996515 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              livré sans compromis.
            </span>
          </h1>

          {/* Description — TEXTE FORCÉ VISIBLE */}
          <p
            className="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
            style={{ color: "#CBD5E1" }}
          >
            Auto Confort vous propose une sélection premium de véhicules et
            motos, neufs et d'occasion. Qualité vérifiée, prix transparents,
            paiement sécurisé et satisfaction garantie.
          </p>

          {/* ============================================
              BOUTONS D'ACTION
              ============================================ */}
          <div className="mt-10 flex flex-wrap gap-4">
            {/* Bouton principal — Or plein */}
            <button
              onClick={onExplore}
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl px-7 py-4 text-base font-extrabold uppercase tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-95"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #996515 100%)",
                color: "#0F172A",
                boxShadow: "0 0 30px rgba(212, 175, 55, 0.5)",
              }}
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative z-10 flex items-center gap-2.5">
                Explorer le catalogue
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </span>
            </button>

            {/* Bouton secondaire — Contour or */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-xl border-2 px-7 py-4 text-base font-extrabold uppercase tracking-wide backdrop-blur-md transition-all duration-300 active:scale-95"
              style={{
                borderColor: "#D4AF37",
                backgroundColor: "rgba(15, 23, 42, 0.85)",
                color: "#D4AF37",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#D4AF37";
                e.currentTarget.style.color = "#0F172A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(15, 23, 42, 0.85)";
                e.currentTarget.style.color = "#D4AF37";
              }}
            >
              Nous contacter
            </a>
          </div>

          {/* ============================================
              TRUST BADGES
              ============================================ */}
          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, label: "Paiement sécurisé" },
              { icon: Truck, label: "Livraison rapide & suivie" },
              { icon: BadgeCheck, label: "Véhicules vérifiés" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border px-4 py-3 backdrop-blur-sm"
                style={{
                  borderColor: "#334155",
                  backgroundColor: "rgba(30, 41, 59, 0.6)",
                }}
              >
                <Icon
                  className="h-5 w-5 flex-shrink-0"
                  style={{ color: "#D4AF37" }}
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: "#F8FAFC" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}