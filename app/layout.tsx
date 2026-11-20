import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { config } from "@/lib/config";

// Fuentes servidas desde el propio sitio (paquetes @fontsource): el build no
// depende de Google Fonts y el navegador no hace pedidos a terceros.
const archivoBlack = localFont({
  src: [{ path: "../node_modules/@fontsource/archivo-black/files/archivo-black-latin-400-normal.woff2", weight: "400" }],
  variable: "--font-archivo-black",
  display: "swap",
});
const spaceGrotesk = localFont({
  src: [
    { path: "../node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-400-normal.woff2", weight: "400" },
    { path: "../node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-500-normal.woff2", weight: "500" },
    { path: "../node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-space-grotesk",
  display: "swap",
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
