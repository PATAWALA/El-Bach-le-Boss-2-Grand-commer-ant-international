import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "El Bach le Boss 2 — Véhicules & Motos de Qualité",
    template: "%s | El Bach le Boss 2",
  },
  description:
    "Découvrez une sélection premium de véhicules et motos neufs et d'occasion. Qualité vérifiée, prix transparents, commande rapide via WhatsApp.",
  keywords: [
    "véhicules de qualité",
    "motos premium",
    "voiture neuve",
    "voiture occasion",
    "moto neuve",
    "El Bach le Boss 2",
    "Grand commerçant international",
    "Toyota",
    "Mercedes",
    "Yamaha",
    "Honda",
    "vente véhicules",
    "vente motos",
  ],
  authors: [{ name: "El Bach le Boss 2" }],
  creator: "El Bach le Boss 2",
  publisher: "El Bach le Boss 2",
  metadataBase: new URL("https://elbachboss.com"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://elbachboss.com",
    siteName: "El Bach le Boss 2",
    title: "El Bach le Boss 2 — Véhicules & Motos de Qualité",
    description:
      "Sélection premium de véhicules et motos neufs et d'occasion. Qualité vérifiée, prix transparents, commande directe via WhatsApp.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "El Bach le Boss 2 — Véhicules & Motos de Qualité",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "El Bach le Boss 2 — Véhicules & Motos de Qualité",
    description:
      "Sélection premium de véhicules et motos neufs et d'occasion. Qualité vérifiée, prix transparents.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-base font-sans text-text">
        {children}
      </body>
    </html>
  );
}