import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Clin d'œil SPA - Massage, Hammam & Spa à Casablanca",
  description: "Découvrez Clin d'œil SPA à Casablanca. Services de massage thérapeutique, hammam traditionnel et soins spa de luxe. Réservez votre séance de détente.",
  keywords: "spa casablanca, massage casablanca, hammam casablanca, soins spa, détente, bien-être",
  authors: [{ name: "Clin d'œil SPA" }],
  openGraph: {
    title: "Clin d'œil SPA - Massage, Hammam & Spa à Casablanca",
    description: "Services de spa de luxe à Casablanca. Massage, hammam et soins personnalisés.",
    type: "website",
    locale: "fr_MA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased bg-neutral-50`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}