"use client";

interface FooterProps {
  // Props optionnelles si vous voulez personnaliser
  phone?: string;
  email?: string;
  whatsapp?: string;
}

export default function Footer({
  phone = "+226 70 00 00 00",
  email = "contact@autoconfort.com",
  whatsapp = "22670000000",
}: FooterProps) {
  return (
    <footer
      id="contact"
      className="border-t"
      style={{
        borderColor: "#334155",
        backgroundColor: "rgba(30, 41, 59, 0.4)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Grille 4 colonnes */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* ---------- Colonne 1 : Marque ---------- */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #996515 100%)",
                  boxShadow: "0 8px 32px -8px rgba(212, 175, 55, 0.45)",
                }}
              >
                <span
                  className="text-xl font-black"
                  style={{ color: "#0F172A" }}
                >
                  AC
                </span>
              </div>
              <div>
                <h3
                  className="text-lg font-black leading-tight"
                  style={{ color: "#F8FAFC" }}
                >
                  Auto Confort
                </h3>
                <p
                  className="text-[10px] uppercase tracking-widest"
                  style={{ color: "#D4AF37" }}
                >
                  Véhicules & Motos
                </p>
              </div>
            </div>

            <p
              className="mt-5 text-sm leading-relaxed"
              style={{ color: "#94A3B8" }}
            >
              Votre partenaire de confiance pour l'achat de véhicules et motos
              de qualité supérieure, neufs et d'occasion.
            </p>

            {/* Réseaux sociaux */}
            <div className="mt-5 flex gap-2">
              {[
                { label: "W", href: `https://wa.me/${whatsapp}`, name: "WhatsApp" },
                { label: "F", href: "#", name: "Facebook" },
                { label: "I", href: "#", name: "Instagram" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border transition hover:scale-110"
                  style={{
                    borderColor: "#334155",
                    backgroundColor: "#1E293B",
                    color: "#D4AF37",
                  }}
                  aria-label={social.name}
                >
                  <span className="text-xs font-bold">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ---------- Colonne 2 : Navigation ---------- */}
          <div>
            <h4
              className="text-sm font-bold uppercase tracking-wider"
              style={{ color: "#D4AF37" }}
            >
              Navigation
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { label: "Accueil", href: "#" },
                { label: "Catalogue", href: "#catalogue" },
                { label: "Véhicules", href: "#catalogue" },
                { label: "Motos", href: "#catalogue" },
                { label: "En arrivage", href: "#catalogue" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition"
                    style={{ color: "#94A3B8" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#D4AF37")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#94A3B8")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- Colonne 3 : Contact ---------- */}
          <div>
            <h4
              className="text-sm font-bold uppercase tracking-wider"
              style={{ color: "#D4AF37" }}
            >
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span style={{ color: "#D4AF37" }}>📞</span>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  style={{ color: "#94A3B8" }}
                >
                  {phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "#D4AF37" }}>✉️</span>
                <a href={`mailto:${email}`} style={{ color: "#94A3B8" }}>
                  {email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "#D4AF37" }}>💬</span>
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#94A3B8" }}
                >
                  WhatsApp direct
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "#D4AF37" }}>📍</span>
                <span style={{ color: "#94A3B8" }}>
                  Disponible partout au Burkina Faso
                </span>
              </li>
            </ul>
          </div>

          {/* ---------- Colonne 4 : Horaires ---------- */}
          <div>
            <h4
              className="text-sm font-bold uppercase tracking-wider"
              style={{ color: "#D4AF37" }}
            >
              Horaires
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { day: "Lundi – Vendredi", hours: "08h – 19h", closed: false },
                { day: "Samedi", hours: "09h – 17h", closed: false },
                { day: "Dimanche", hours: "Fermé", closed: true },
              ].map((item) => (
                <li
                  key={item.day}
                  className="flex items-center justify-between gap-3"
                >
                  <span style={{ color: "#94A3B8" }}>{item.day}</span>
                  <span
                    className="font-semibold"
                    style={{ color: item.closed ? "#FB7185" : "#F8FAFC" }}
                  >
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>

            {/* Badge service client */}
            <div
              className="mt-5 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold"
              style={{
                borderColor: "rgba(16, 185, 129, 0.3)",
                backgroundColor: "rgba(16, 185, 129, 0.1)",
                color: "#34D399",
              }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: "#34D399" }}
              />
              Service client disponible
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row"
          style={{ borderColor: "#334155" }}
        >
          <p className="text-xs" style={{ color: "#94A3B8" }}>
            © {new Date().getFullYear()}{" "}
            <span className="font-bold" style={{ color: "#F8FAFC" }}>
              Auto Confort
            </span>{" "}
            — Tous droits réservés.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a href="#" style={{ color: "#94A3B8" }}>
              Mentions légales
            </a>
            <span style={{ color: "#334155" }}>•</span>
            <a href="#" style={{ color: "#94A3B8" }}>
              Confidentialité
            </a>
            <span style={{ color: "#334155" }}>•</span>
            <span style={{ color: "#94A3B8" }}>
              Conçu avec <span style={{ color: "#D4AF37" }}>♦</span> par Auto
              Confort
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}