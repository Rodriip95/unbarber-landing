"use client";

import { useEffect, useState } from "react";
import { membershipDefaults } from "./config";
import { getFirebaseApp } from "./firebase";

export type Membership = { priceArs: number; promoPercent: number; promoUntil: string };

/**
 * Precio y promo de la membresía. Arranca con los valores de build y, si hay
 * Firebase, los reemplaza por los de Remote Config (las mismas claves que usa la app).
 */
export function useMembership(): Membership {
  const [m, setM] = useState<Membership>(membershipDefaults);

  useEffect(() => {
    let cancel = false;
    (async () => {
      const app = await getFirebaseApp();
      if (!app) return;
      const { getRemoteConfig, fetchAndActivate, getValue } = await import("firebase/remote-config");
      const rc = getRemoteConfig(app);
      rc.settings.minimumFetchIntervalMillis = 60 * 60 * 1000;
      rc.defaultConfig = {
        membership_price_ars: membershipDefaults.priceArs,
        membership_promo_percent: membershipDefaults.promoPercent,
        membership_promo_until: membershipDefaults.promoUntil,
      };
      try {
        await fetchAndActivate(rc);
      } catch {
        return; // sin red: quedan los valores por defecto
      }
      if (cancel) return;
      setM({
        priceArs: getValue(rc, "membership_price_ars").asNumber(),
        promoPercent: getValue(rc, "membership_promo_percent").asNumber(),
        promoUntil: getValue(rc, "membership_promo_until").asString(),
      });
    })();
    return () => {
      cancel = true;
    };
  }, []);

  return m;
}

export const formatArs = (n: number) =>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(n);

export function formatFecha(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("es-AR", { day: "numeric", month: "long", year: "numeric" }).format(d);
}
