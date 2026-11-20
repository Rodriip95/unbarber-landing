"use client";

// Aviso de cookies. GA4 y el píxel de Meta se cargan solo con "Aceptar".
import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { buttonClass } from "./Button";
import { config } from "@/lib/config";
import { getConsent, onConsent, setConsent, type Consent } from "@/lib/consent";
import { captureUtm } from "@/lib/utm";

export function CookieBanner() {
  const [consent, setLocal] = useState<Consent | "loading">("loading");

  useEffect(() => {
    captureUtm();
    setLocal(getConsent());
    return onConsent(setLocal);
  }, []);

  return (
    <>
      {consent === "all" && config.metaPixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${config.metaPixelId}');fbq('track','PageView');`}
        </Script>
      )}
      {consent === null && (
        <div
          role="dialog"
          aria-label="Aviso de cookies"
          className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-ink bg-white p-4 md:inset-x-auto md:bottom-4 md:right-4 md:max-w-md md:border-2 md:shadow-hard"
        >
          <p className="text-sm">
            Usamos cookies para medir de dónde llegan las visitas y mejorar la página. Ver la{" "}
            <Link href="/privacidad" className="underline">
              Política de Privacidad
            </Link>
            .
          </p>
          <div className="mt-3 flex gap-3">
            <button className={buttonClass("ink", "secondary")} onClick={() => setConsent("necessary")}>
              Solo necesarias
            </button>
            <button className={`${buttonClass("ink", "secondary")} bg-ink! text-white!`} onClick={() => setConsent("all")}>
              Aceptar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
