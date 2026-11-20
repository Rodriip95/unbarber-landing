"use client";

export type Consent = "all" | "necessary" | null;
const KEY = "ub_consent";
const EVENT = "ub-consent";

export function getConsent(): Consent {
  try {
    const v = localStorage.getItem(KEY);
    return v === "all" || v === "necessary" ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(v: Exclude<Consent, null>) {
  try {
    localStorage.setItem(KEY, v);
  } catch {
    /* modo privado: el aviso vuelve a aparecer, no pasa nada */
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: v }));
}

export function onConsent(cb: (v: Consent) => void) {
  const h = (e: Event) => cb((e as CustomEvent<Consent>).detail);
  window.addEventListener(EVENT, h);
  return () => window.removeEventListener(EVENT, h);
}
