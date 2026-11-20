"use client";

const KEY = "ub_utm";
const FIELDS = ["source", "medium", "campaign"] as const;
export type Utm = Partial<Record<(typeof FIELDS)[number], string>>;

/** Guarda los UTM de la primera página vista en la sesión. */
export function captureUtm() {
  try {
    const p = new URLSearchParams(window.location.search);
    const utm: Utm = {};
    for (const f of FIELDS) {
      const v = p.get(`utm_${f}`);
      if (v) utm[f] = v.slice(0, 100);
    }
    if (Object.keys(utm).length) sessionStorage.setItem(KEY, JSON.stringify(utm));
  } catch {
    /* sin storage */
  }
}

export function getUtm(): Utm {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) ?? "{}") as Utm;
  } catch {
    return {};
  }
}

/** Los UTM como parámetros de URL (`utm_source=…`) para pasarlos a la app. */
export function utmParams(): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(getUtm())) if (v) out[`utm_${k}`] = v;
  return out;
}
