"use client";

interface FooterProps {
  phone?: string;
  email?: string;
  whatsapp?: string;
}

export default function Footer({
  phone = "+226 70 00 00 00",
  email = "contact@anasyabre.com",
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
        {/* ============================================
            GRILLE PRINCIPALE — 4 COLONNES
            ============================================ */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* ---------- Colonne 1 : Marque + Logo ---------- */}
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
                  AY
                </span>
              </div>
              <div>
                <h3
                  className="text-lg font-black uppercase leading-tight"
                  style={{ color: "#F8FAFC" }}
                >
                  ANAS YABRÉ
                </h3>
                <p
                  className="text-[10px] uppercase tracking-widest"
                  style={{ color: "#D4AF37" }}
                >
                  Grand Commerçant
                </p>
              </div>
            </div>

            <p
              className="mt-5 text-sm leading-relaxed"
              style={{ color: "#94A3B8" }}
            >
              Votre partenaire de confiance pour l'achat de véhicules, de
              terrains et pour tous vos projets d'investissement en Europe et
              en Afrique de l'Ouest.
            </p>

            {/* Réseaux sociaux */}
            <div className="mt-5 flex gap-2">
              {[
                {
                  label: "W",
                  href: `https://wa.me/${whatsapp}`,
                  name: "WhatsApp",
                },
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
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#D4AF37";
                    e.currentTarget.style.backgroundColor = "#D4AF37";
                    e.currentTarget.style.color = "#0F172A";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#334155";
                    e.currentTarget.style.backgroundColor = "#1E293B";
                    e.currentTarget.style.color = "#D4AF37";
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
                { label: "Véhicules & Motos", href: "#catalogue" },
                { label: "Terrains", href: "#terrains" },
                { label: "Services", href: "#services" },
                { label: "Accompagnement", href: "#accompagnement" },
                { label: "Zones d'intervention", href: "#zones" },
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
                  className="transition"
                  style={{ color: "#94A3B8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#D4AF37")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#94A3B8")
                  }
                >
                  {phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "#D4AF37" }}>✉️</span>
                <a
                  href={`mailto:${email}`}
                  className="transition"
                  style={{ color: "#94A3B8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#D4AF37")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#94A3B8")
                  }
                >
                  {email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "#D4AF37" }}>💬</span>
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition"
                  style={{ color: "#94A3B8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#D4AF37")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#94A3B8")
                  }
                >
                  WhatsApp direct
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "#D4AF37" }}>🌍</span>
                <span style={{ color: "#94A3B8" }}>
                  France, UE & Afrique de l'Ouest
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

            {/* Badge Service client */}
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

        {/* ============================================
            ZONES D'INTERVENTION — Bandeau drapeaux
            ============================================ */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-3 rounded-2xl border px-5 py-4"
          style={{
            borderColor: "#334155",
            backgroundColor: "#0F172A",
          }}
        >
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "#D4AF37" }}
          >
            Nos zones :
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { flag: "🇫🇷", name: "France" },
              { flag: "🇪🇺", name: "Union Européenne" },
              { flag: "🇧🇫", name: "Burkina Faso" },
              { flag: "🇲🇱", name: "Mali" },
              { flag: "🇨🇮", name: "Côte d'Ivoire" },
              { flag: "🇸🇳", name: "Sénégal" },
            ].map((z) => (
              <span
                key={z.name}
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
                style={{
                  borderColor: "rgba(212, 175, 55, 0.3)",
                  backgroundColor: "#1E293B",
                  color: "#F8FAFC",
                }}
                title={z.name}
              >
                <span className="text-base leading-none">{z.flag}</span>
                <span>{z.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* ============================================
            SÉPARATEUR + COPYRIGHT
            ============================================ */}
        <div
          className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row"
          style={{ borderColor: "#334155" }}
        >
          <p className="text-xs" style={{ color: "#94A3B8" }}>
            © {new Date().getFullYear()}{" "}
            <span
              className="font-black uppercase"
              style={{ color: "#F8FAFC" }}
            >
              ANAS YABRÉ
            </span>{" "}
            — Grand Commerçant — Tous droits réservés.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a
              href="#"
              className="transition"
              style={{ color: "#94A3B8" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D4AF37")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
            >
              Mentions légales
            </a>
            <span style={{ color: "#334155" }}>•</span>
            <a
              href="#"
              className="transition"
              style={{ color: "#94A3B8" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D4AF37")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
            >
              Confidentialité
            </a>
            <span style={{ color: "#334155" }}>•</span>
            <span style={{ color: "#94A3B8" }}>
              Conçu avec <span style={{ color: "#D4AF37" }}>♦</span> par ANAS
              YABRÉ
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}