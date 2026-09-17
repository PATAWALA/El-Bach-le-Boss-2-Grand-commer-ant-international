"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Plus } from "lucide-react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Filters from "@/components/filters";
import ProductCard from "@/components/product-card";
import CartDrawer from "@/components/cart-drawer";
import Footer from "@/components/footer";
import { products } from "@/data/products";
import { Product, CartItem, ProductCategory } from "@/types/product";
import { formatFCFA } from "@/lib/utils";

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<ProductCategory | "all">("all");
  const [sort, setSort] = useState<"default" | "asc" | "desc">("default");
  const [quickView, setQuickView] = useState<Product | null>(null);

  // ---------- Panier ----------
  const addToCart = (p: Product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === p.id);
      if (existing) {
        return prev.map((i) =>
          i.id === p.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...p, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id: string) =>
    setCart((prev) => prev.filter((i) => i.id !== id));

  const updateQty = (id: string, delta: number) =>
    setCart((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, quantity: i.quantity + delta } : i
        )
        .filter((i) => i.quantity > 0)
    );

  const clearCart = () => setCart([]);

  // ---------- Filtrage + Tri ----------
  const filtered = useMemo(() => {
    let list = [...products];

    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q)
      );
    }

    if (sort === "asc") list.sort((a, b) => a.price - b.price);
    if (sort === "desc") list.sort((a, b) => b.price - a.price);

    return list;
  }, [category, search, sort]);

  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  const scrollToCatalog = () =>
    document
      .getElementById("catalogue")
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#0F172A" }}>
      {/* ============================================
          NAVBAR
          ============================================ */}
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        search={search}
        onSearchChange={setSearch}
      />

      {/* ============================================
          HERO
          ============================================ */}
      <Hero onExplore={scrollToCatalog} />

      {/* ============================================
          CATALOGUE
          ============================================ */}
      <section
        id="catalogue"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mb-8">
          <h2
            className="text-3xl font-black sm:text-4xl"
            style={{ color: "#F8FAFC" }}
          >
            Notre Catalogue
          </h2>
          <p className="mt-2" style={{ color: "#94A3B8" }}>
            {filtered.length} engin{filtered.length > 1 ? "s" : ""} disponible
            {filtered.length > 1 ? "s" : ""} — filtrez, comparez, commandez.
          </p>
        </div>

        <Filters
          active={category}
          onChange={setCategory}
          sort={sort}
          onSortChange={setSort}
        />

        <motion.div
          layout
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onAdd={addToCart}
                onQuickView={setQuickView}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center">
            <p
              className="text-lg font-semibold"
              style={{ color: "#F8FAFC" }}
            >
              Aucun résultat trouvé
            </p>
            <p className="mt-1 text-sm" style={{ color: "#94A3B8" }}>
              Essayez de modifier votre recherche ou vos filtres.
            </p>
          </div>
        )}
      </section>

      {/* ============================================
          FOOTER — Composant séparé
          ============================================ */}
      <Footer />

      {/* ============================================
          PANIER LATÉRAL
          ============================================ */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onRemove={removeFromCart}
        onQty={updateQty}
        onClear={clearCart}
      />

      {/* ============================================
          MODAL VUE RAPIDE — ULTRA RESPONSIVE
          ============================================ */}
      <AnimatePresence>
        {quickView && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setQuickView(null)}
              className="fixed inset-0 z-[60] backdrop-blur-sm"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
            />

            {/* Conteneur modal centré */}
            <div className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative flex max-h-[95vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border"
                style={{
                  borderColor: "#334155",
                  backgroundColor: "#1E293B",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8)",
                }}
              >
                {/* Bouton fermer */}
                <button
                  onClick={() => setQuickView(null)}
                  className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border transition hover:scale-110"
                  style={{
                    borderColor: "rgba(212, 175, 55, 0.5)",
                    backgroundColor: "rgba(15, 23, 42, 0.9)",
                    color: "#D4AF37",
                    backdropFilter: "blur(8px)",
                  }}
                  aria-label="Fermer"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Zone scrollable */}
                <div className="flex-1 overflow-y-auto">
                  <div className="relative">
                    <img
                      src={quickView.image}
                      alt={quickView.name}
                      className="h-48 w-full object-cover sm:h-64 md:h-80"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, #1E293B 0%, transparent 60%)",
                      }}
                    />

                    {/* Badges */}
                    <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                      <span
                        className="rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur"
                        style={{
                          borderColor: "rgba(212, 175, 55, 0.5)",
                          backgroundColor: "rgba(15, 23, 42, 0.9)",
                          color: "#D4AF37",
                        }}
                      >
                        {quickView.condition}
                      </span>
                      <span
                        className="rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur"
                        style={{
                          borderColor:
                            quickView.status === "Disponible"
                              ? "rgba(16, 185, 129, 0.5)"
                              : "rgba(245, 158, 11, 0.5)",
                          backgroundColor: "rgba(15, 23, 42, 0.9)",
                          color:
                            quickView.status === "Disponible"
                              ? "#34D399"
                              : "#FBBF24",
                        }}
                      >
                        {quickView.status}
                      </span>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-4 sm:p-6 md:p-8">
                    <p
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{ color: "#D4AF37" }}
                    >
                      {quickView.brand}
                    </p>
                    <h3
                      className="mt-2 text-2xl font-black leading-tight sm:text-3xl md:text-4xl"
                      style={{ color: "#F8FAFC" }}
                    >
                      {quickView.name}
                    </h3>
                    <p
                      className="mt-3 text-sm leading-relaxed sm:text-base"
                      style={{ color: "#CBD5E1" }}
                    >
                      {quickView.description}
                    </p>

                    {/* Specs */}
                    <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
                      {[
                        ["État", quickView.condition],
                        ["Année", String(quickView.year)],
                        [
                          "Kilométrage",
                          `${quickView.km.toLocaleString("fr-FR")} km`,
                        ],
                        ["Carburant", quickView.fuel],
                        ["Transmission", quickView.transmission],
                        ["Statut", quickView.status],
                      ].map(([k, v]) => (
                        <div
                          key={k}
                          className="rounded-lg border px-3 py-2.5"
                          style={{
                            borderColor: "#334155",
                            backgroundColor: "#0F172A",
                          }}
                        >
                          <p
                            className="text-[10px] font-semibold uppercase tracking-wider"
                            style={{ color: "#94A3B8" }}
                          >
                            {k}
                          </p>
                          <p
                            className="mt-0.5 text-sm font-bold"
                            style={{ color: "#F8FAFC" }}
                          >
                            {v}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer sticky */}
                <div
                  className="flex flex-col gap-3 border-t p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
                  style={{
                    borderColor: "#334155",
                    backgroundColor: "#0F172A",
                  }}
                >
                  <div>
                    <p
                      className="text-[10px] font-semibold uppercase tracking-wider"
                      style={{ color: "#94A3B8" }}
                    >
                      Prix total
                    </p>
                    <p
                      className="text-xl font-black sm:text-2xl"
                      style={{ color: "#D4AF37" }}
                    >
                      {formatFCFA(quickView.price)}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      addToCart(quickView);
                      setQuickView(null);
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-extrabold uppercase tracking-wide transition hover:brightness-110 active:scale-95 sm:w-auto"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #996515 100%)",
                      color: "#0F172A",
                      boxShadow: "0 8px 32px -8px rgba(212, 175, 55, 0.6)",
                    }}
                  >
                    <Plus className="h-4 w-4" />
                    Ajouter au panier
                  </button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}