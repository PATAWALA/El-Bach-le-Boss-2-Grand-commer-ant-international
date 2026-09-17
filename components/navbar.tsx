"use client";

import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

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
    <header className="sticky top-0 z-40 w-full border-b border-base-border bg-base/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-gradient shadow-gold">
            <span className="text-lg font-black text-base">EB</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-tight text-text">
              El Bach le Boss 2
            </p>
            <p className="text-[10px] uppercase tracking-widest text-gold-light">
              Grand Commerçant International
            </p>
          </div>
        </div>

        {/* Recherche desktop */}
        <div className="relative hidden max-w-md flex-1 md:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Rechercher un véhicule, une marque..."
            className="w-full rounded-xl border border-base-border bg-base-card py-2.5 pl-10 pr-4 text-sm text-text placeholder-text-muted outline-none transition focus:border-gold-light focus:ring-2 focus:ring-gold-light/20"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onCartClick}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-base-border bg-base-card transition hover:border-gold-light"
            aria-label="Ouvrir le panier"
          >
            <ShoppingCart className="h-5 w-5 text-text" />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold-gradient px-1 text-[10px] font-bold text-base"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-base-border bg-base-card md:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-text" />
            ) : (
              <Menu className="h-5 w-5 text-text" />
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
            className="overflow-hidden border-t border-base-border md:hidden"
          >
            <div className="p-4">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Rechercher..."
                  className="w-full rounded-xl border border-base-border bg-base-card py-2.5 pl-10 pr-4 text-sm text-text placeholder-text-muted outline-none focus:border-gold-light"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}