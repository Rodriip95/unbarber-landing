// Configuración pública del sitio. Todo sale de variables NEXT_PUBLIC_* (ver .env.example).

const list = (v?: string) =>
  (v ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

export const config = {
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.unbarber.com.ar",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://unbarber.com.ar",
  registroMode: (process.env.NEXT_PUBLIC_REGISTRO_MODE ?? "app") as "app" | "preregistro",
  clientesMode: (process.env.NEXT_PUBLIC_CLIENTES_MODE ?? "espera") as "espera" | "abierto",
  zonasAbiertas: list(process.env.NEXT_PUBLIC_ZONAS_ABIERTAS),
  zonaPiloto: process.env.NEXT_PUBLIC_ZONA_PILOTO ?? "[zona piloto]",
  titular: process.env.NEXT_PUBLIC_TITULAR ?? "[Titular legal]",
  cuit: process.env.NEXT_PUBLIC_CUIT ?? "[CUIT]",
  contactoEmail: process.env.NEXT_PUBLIC_CONTACTO_EMAIL ?? "hola@unbarber.com.ar",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  /** Versiones de los textos legales que se guardan con cada consentimiento. */
  versionPrivacidad: "2027-01-11",
  versionTerminos: "2027-01-11",
};

/** Valores de la membresía si Remote Config todavía no respondió o no está configurado. */
export const membershipDefaults = {
  priceArs: Number(process.env.NEXT_PUBLIC_MEMBERSHIP_PRICE_ARS ?? 20000),
  promoPercent: Number(process.env.NEXT_PUBLIC_MEMBERSHIP_PROMO_PERCENT ?? 100),
  promoUntil: process.env.NEXT_PUBLIC_MEMBERSHIP_PROMO_UNTIL ?? "",
};

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const firebaseEnabled = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);
export const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY ?? "";

export function registroUrl(utm: Record<string, string>) {
  const params = new URLSearchParams({ rol: "barbero", ...utm });
  return `${config.appUrl}/registro?${params.toString()}`;
}
