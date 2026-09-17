"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Filters from "@/components/filters";
import ProductCard from "@/components/product-card";
import CartDrawer from "@/components/cart-drawer";
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
    <main className="min-h-screen bg-base">
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        search={search}
        onSearchChange={setSearch}
      />

      <Hero onExplore={scrollToCatalog} />

      {/* Catalogue */}
      <section
        id="catalogue"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mb-8">
          <h2 className="text-3xl font-black text-text sm:text-4xl">
            Notre Catalogue
          </h2>
          <p className="mt-2 text-text-muted">
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

        {/* Grille produits */}
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
            <p className="text-lg font-semibold text-text">
              Aucun résultat trouvé
            </p>
            <p className="mt-1 text-sm text-text-muted">
              Essayez de modifier votre recherche ou vos filtres.
            </p>
          </div>
        )}
      </section>

      {/* Footer / Contact */}
      <footer
        id="contact"
        className="border-t border-base-border bg-base-card/40"
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-bold text-text">
                El Bach le Boss 2
              </h3>
              <p className="mt-1 text-xs uppercase tracking-widest text-gold-light">
                Grand Commerçant International
              </p>
              <p className="mt-4 text-sm text-text-muted">
                Importation de véhicules et motos de qualité, de Cotonou vers
                le Burkina Faso. Confiance, transparence, satisfaction.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-gold-light">
                Contact
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-text-muted">
                <li>📍 Cotonou, Bénin</li>
                <li>📞 +229 90 00 00 00</li>
                <li>✉️ contact@elbachboss.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-gold-light">
                Horaires
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-text-muted">
                <li>Lun – Ven : 08h – 19h</li>
                <li>Samedi : 09h – 17h</li>
                <li>Dimanche : Fermé</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-base-border pt-6 text-center text-xs text-text-muted">
            © {new Date().getFullYear()} El Bach le Boss 2 — Tous droits
            réservés.
          </div>
        </div>
      </footer>

      {/* Panier */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onRemove={removeFromCart}
        onQty={updateQty}
        onClear={clearCart}
      />

      {/* Quick View Modal */}
      <AnimatePresence>
        {quickView && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setQuickView(null)}
              className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 z-[70] w-[92%] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-base-border bg-base-card shadow-card"
            >
              <div className="relative">
                <img
                  src={quickView.image}
                  alt={quickView.name}
                  className="h-64 w-full object-cover sm:h-80"
                />
                <button
                  onClick={() => setQuickView(null)}
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg border border-base-border bg-base/80 backdrop-blur transition hover:border-gold-light"
                  aria-label="Fermer"
                >
                  <X className="h-4 w-4 text-text" />
                </button>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-gold-light">
                  {quickView.brand}
                </p>
                <h3 className="mt-1 text-2xl font-black text-text">
                  {quickView.name}
                </h3>
                <p className="mt-3 text-sm text-text-muted">
                  {quickView.description}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
                  {[
                    ["État", quickView.condition],
                    ["Année", String(quickView.year)],
                    ["Km", `${quickView.km.toLocaleString("fr-FR")}`],
                    ["Carburant", quickView.fuel],
                    ["Boîte", quickView.transmission],
                    ["Statut", quickView.status],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="rounded-lg border border-base-border bg-base px-3 py-2"
                    >
                      <p className="text-[10px] uppercase tracking-wider text-text-muted">
                        {k}
                      </p>
                      <p className="text-sm font-semibold text-text">{v}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-base-border pt-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-text-muted">
                      Prix
                    </p>
                    <p className="text-2xl font-extrabold text-gold-light">
                      {formatFCFA(quickView.price)}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      addToCart(quickView);
                      setQuickView(null);
                    }}
                    className="rounded-xl bg-gold-gradient px-5 py-3 text-sm font-bold text-base shadow-gold transition hover:brightness-110 active:scale-95"
                  >
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}