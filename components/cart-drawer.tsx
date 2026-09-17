"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, MessageCircle } from "lucide-react";
import { CartItem } from "@/types/product";
import { formatFCFA } from "@/lib/utils";
import { WHATSAPP_NUMBER } from "@/data/products";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onQty: (id: string, delta: number) => void;
  onClear: () => void;
}

export default function CartDrawer({
  open,
  onClose,
  items,
  onRemove,
  onQty,
  onClear,
}: CartDrawerProps) {
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const buildWhatsAppLink = () => {
    if (items.length === 0) return "#";

    const lines: string[] = [];
    lines.push("🛒 *NOUVELLE COMMANDE — El Bach le Boss 2*");
    lines.push("");
    lines.push("Bonjour, je souhaite commander les engins suivants :");
    lines.push("");

    items.forEach((item, index) => {
      lines.push(`*${index + 1}. ${item.name}*`);
      lines.push(`   • Marque : ${item.brand}`);
      lines.push(`   • État : ${item.condition}`);
      lines.push(`   • Année : ${item.year}`);
      lines.push(`   • Prix unitaire : ${formatFCFA(item.price)}`);
      lines.push(`   • Quantité : ${item.quantity}`);
      lines.push(`   • Sous-total : ${formatFCFA(item.price * item.quantity)}`);
      lines.push("");
    });

    lines.push("━━━━━━━━━━━━━━━━━━━━");
    lines.push(`💰 *TOTAL : ${formatFCFA(total)}*`);
    lines.push("━━━━━━━━━━━━━━━━━━━━");
    lines.push("");
    lines.push("Merci de me confirmer la disponibilité et les modalités de livraison.");

    const message = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-[#334155] bg-[#0F172A]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#334155] p-5">
              <div>
                <h2 className="text-lg font-bold text-[#F8FAFC]">
                  Ma Sélection
                </h2>
                <p className="text-xs text-[#94A3B8]">
                  {items.length} article{items.length > 1 ? "s" : ""}
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#334155] bg-[#1E293B] transition hover:border-[#D4AF37]"
                aria-label="Fermer"
              >
                <X className="h-4 w-4 text-[#F8FAFC]" />
              </button>
            </div>

            {/* Liste */}
            <div className="flex-1 overflow-y-auto p-5">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#334155] bg-[#1E293B]">
                    <Trash2 className="h-6 w-6 text-[#94A3B8]" />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-[#F8FAFC]">
                    Votre sélection est vide
                  </p>
                  <p className="mt-1 text-xs text-[#94A3B8]">
                    Ajoutez des véhicules ou motos pour commander.
                  </p>
                </div>
              ) : (
                <ul className="space-y-3">
                  {items.map((item) => (
                    <motion.li
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex gap-3 rounded-xl border border-[#334155] bg-[#1E293B] p-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-20 w-20 flex-shrink-0 rounded-lg object-cover"
                      />
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-[#D4AF37]">
                              {item.brand}
                            </p>
                            <p className="line-clamp-1 text-sm font-bold text-[#F8FAFC]">
                              {item.name}
                            </p>
                          </div>
                          <button
                            onClick={() => onRemove(item.id)}
                            className="text-[#94A3B8] transition hover:text-rose-400"
                            aria-label="Retirer"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="mt-auto flex items-center justify-between pt-2">
                          <div className="flex items-center gap-2 rounded-lg border border-[#334155] bg-[#0F172A] px-2 py-1">
                            <button
                              onClick={() => onQty(item.id, -1)}
                              className="text-[#94A3B8] transition hover:text-[#D4AF37]"
                              aria-label="Diminuer"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="min-w-4 text-center text-xs font-bold text-[#F8FAFC]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onQty(item.id, 1)}
                              className="text-[#94A3B8] transition hover:text-[#D4AF37]"
                              aria-label="Augmenter"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <p className="text-sm font-extrabold text-[#D4AF37]">
                            {formatFCFA(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-[#334155] bg-[#1E293B]/50 p-5 backdrop-blur">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm text-[#94A3B8]">Total</span>
                  <span className="text-2xl font-extrabold text-[#D4AF37]">
                    {formatFCFA(total)}
                  </span>
                </div>

                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold shadow-[0_8px_32px_-8px_rgba(212,175,55,0.45)] transition hover:brightness-110 active:scale-[0.98]"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #996515 100%)",
                    color: "#0F172A",
                  }}
                >
                  <MessageCircle className="h-4 w-4" />
                  Commander via WhatsApp
                </a>

                <button
                  onClick={onClear}
                  className="mt-3 w-full rounded-xl border border-[#334155] py-2.5 text-xs font-semibold text-[#94A3B8] transition hover:border-rose-500/50 hover:text-rose-400"
                >
                  Vider la sélection
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}