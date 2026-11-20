import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { config } from "@/lib/config";

const archivoBlack = Archivo_Black({ weight: "400", subsets: ["latin"], variable: "--font-archivo-black" });
const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl),
  title: "Unbarber · Barberos cerca tuyo, hoy también domingos",
  description: `Barberos verificados en ${config.zonaPiloto}. Cortate ahora o sacá turno.`,
  openGraph: { siteName: "Unbarber", locale: "es_AR", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={`${archivoBlack.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen">
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
