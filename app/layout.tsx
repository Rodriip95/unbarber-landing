import type { Metadata } from "next";
import { DM_Serif_Text, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { config } from "@/lib/config";

// DM Serif Text solo existe en peso 400 (regular e itálica). Los "semibold/bold" del diseño
// se logran con el tamaño y el contraste, no con font-weight (evita negritas sintéticas).
const dmSerif = DM_Serif_Text({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
});
const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl),
  title: "Unbarber · Tu barbero a la vuelta de la esquina",
  description: "Unbarber conecta barberos con vecinos que buscan un corte. Cortate hoy o sacá turno desde el celu.",
  openGraph: { siteName: "Unbarber", locale: "es_AR", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={`${dmSerif.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen">
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
