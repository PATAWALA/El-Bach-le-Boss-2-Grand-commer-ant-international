"use client";

import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  search: string;
  onSearchChange: (v: string) => void;
}

export default function Navbar({
  cartCount,
  onCartClick,
  search,
  onSearchChange,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 w-full border-b backdrop-blur-xl"
      style={{
        borderColor: "#334155",
        backgroundColor: "rgba(15, 23, 42, 0.85)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* ============================================
            LOGO — Auto Confort (AC)
            ============================================ */}
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #996515 100%)",
              boxShadow: "0 8px 32px -8px rgba(212, 175, 55, 0.45)",
            }}
          >
            <span
              className="text-lg font-black"
              style={{ color: "#0F172A" }}
            >
              AC
            </span>
          </div>
          <div className="hidden sm:block">
            <p
              className="text-sm font-bold leading-tight"
              style={{ color: "#F8FAFC" }}
            >
              Auto Confort
            </p>
            <p
              className="text-[10px] uppercase tracking-widest"
              style={{ color: "#D4AF37" }}
            >
              Véhicules & Motos de Qualité
            </p>
          </div>
        </div>

        {/* ============================================
            RECHERCHE DESKTOP
            ============================================ */}
        <div className="relative hidden max-w-md flex-1 md:block">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
            style={{ color: "#94A3B8" }}
          />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Rechercher un véhicule, une marque..."
            className="w-full rounded-xl border py-2.5 pl-10 pr-4 text-sm outline-none transition"
            style={{
              borderColor: "#334155",
              backgroundColor: "#1E293B",
              color: "#F8FAFC",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#D4AF37";
              e.currentTarget.style.boxShadow =
                "0 0 0 3px rgba(212, 175, 55, 0.2)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#334155";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
        </div>

        {/* ============================================
            ACTIONS — Panier + Menu mobile
            ============================================ */}
        <div className="flex items-center gap-2">
          {/* Bouton panier */}
          <button
            onClick={onCartClick}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border transition hover:border-[#D4AF37]"
            style={{
              borderColor: "#334155",
              backgroundColor: "#1E293B",
            }}
            aria-label="Ouvrir le panier"
          >
            <ShoppingCart
              className="h-5 w-5"
              style={{ color: "#F8FAFC" }}
            />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-bold"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #996515 100%)",
                    color: "#0F172A",
                  }}
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Bouton menu mobile */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border transition md:hidden"
            style={{
              borderColor: "#334155",
              backgroundColor: "#1E293B",
            }}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" style={{ color: "#F8FAFC" }} />
            ) : (
              <Menu className="h-5 w-5" style={{ color: "#F8FAFC" }} />
            )}
          </button>
        </div>
      </div>

      {/* ============================================
          RECHERCHE MOBILE
          ============================================ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t md:hidden"
            style={{ borderColor: "#334155" }}
          >
            <div className="p-4">
              <div className="relative">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
                  style={{ color: "#94A3B8" }}
                />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Rechercher..."
                  className="w-full rounded-xl border py-2.5 pl-10 pr-4 text-sm outline-none"
                  style={{
                    borderColor: "#334155",
                    backgroundColor: "#1E293B",
                    color: "#F8FAFC",
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}