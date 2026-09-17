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
    <header className="sticky top-0 z-40 w-full border-b border-[#334155] bg-[#0F172A]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl shadow-[0_8px_32px_-8px_rgba(212,175,55,0.45)]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #996515 100%)",
            }}
          >
            <span className="text-lg font-black" style={{ color: "#0F172A" }}>
              EB
            </span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-tight text-[#F8FAFC]">
              El Bach le Boss 2
            </p>
            <p className="text-[10px] uppercase tracking-widest text-[#D4AF37]">
              Grand Commerçant International
            </p>
          </div>
        </div>

        {/* Recherche desktop */}
        <div className="relative hidden max-w-md flex-1 md:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94A3B8]" />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Rechercher un véhicule, une marque..."
            className="w-full rounded-xl border border-[#334155] bg-[#1E293B] py-2.5 pl-10 pr-4 text-sm text-[#F8FAFC] placeholder-[#94A3B8] outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onCartClick}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#334155] bg-[#1E293B] transition hover:border-[#D4AF37]"
            aria-label="Ouvrir le panier"
          >
            <ShoppingCart className="h-5 w-5 text-[#F8FAFC]" />
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

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#334155] bg-[#1E293B] md:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-[#F8FAFC]" />
            ) : (
              <Menu className="h-5 w-5 text-[#F8FAFC]" />
            )}
          </button>
        </div>
      </div>

      {/* Recherche mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[#334155] md:hidden"
          >
            <div className="p-4">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94A3B8]" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Rechercher..."
                  className="w-full rounded-xl border border-[#334155] bg-[#1E293B] py-2.5 pl-10 pr-4 text-sm text-[#F8FAFC] placeholder-[#94A3B8] outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}