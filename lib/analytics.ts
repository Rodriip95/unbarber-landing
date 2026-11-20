"use client";

// Eventos de la landing (ver docs/specs/04-tecnica.md). Solo se envían si la
// persona aceptó cookies; si no, track() no hace nada.
import { firebaseConfig } from "./config";
import { getConsent } from "./consent";
import { getFirebaseApp } from "./firebase";

type Params = Record<string, string | number | undefined>;

const META_EVENTS: Record<string, string> = {
  click_registro_barbero: "Lead",
  preregistro_barbero: "Lead",
  lista_espera_alta: "CompleteRegistration",
};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export async function track(event: string, params: Params = {}) {
  if (getConsent() !== "all") return;
  window.fbq?.("track", META_EVENTS[event] ?? "CustomEvent", { event, ...params });
  if (!firebaseConfig.measurementId) return;
  const app = await getFirebaseApp();
  if (!app) return;
  const { getAnalytics, logEvent, isSupported } = await import("firebase/analytics");
  if (!(await isSupported())) return;
  logEvent(getAnalytics(app), event, params);
}
