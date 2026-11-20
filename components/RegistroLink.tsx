"use client";

import { useEffect, useState } from "react";
import { buttonClass } from "./Button";
import { config, registroUrl } from "@/lib/config";
import { utmParams } from "@/lib/utm";
import { track } from "@/lib/analytics";

/** Botón "Registrate gratis": va al alta de la app (con UTM) o al pre-registro propio. */
export function RegistroLink({ ubicacion, className = "" }: { ubicacion: string; className?: string }) {
  const [href, setHref] = useState(
    config.registroMode === "app" ? registroUrl({}) : "#preregistro",
  );
  useEffect(() => {
    if (config.registroMode === "app") setHref(registroUrl(utmParams()));
  }, []);
  return (
    <a
      href={href}
      className={`${buttonClass("red")} ${className}`}
      onClick={() => track("click_registro_barbero", { ubicacion })}
    >
      Registrate gratis
    </a>
  );
}

/** Botón principal de clientes: "Buscar barbero" o ir a la lista de espera. */
export function ClientesCta({ ubicacion, className = "" }: { ubicacion: string; className?: string }) {
  if (config.clientesMode === "abierto") {
    return (
      <a
        href={config.appUrl}
        className={`${buttonClass("blue")} ${className}`}
        onClick={() => track("click_buscar_barbero", { ubicacion })}
      >
        Buscar barbero
      </a>
    );
  }
  return (
    <a href="#zona" className={`${buttonClass("blue")} ${className}`}>
      Avisame cuando esté en mi zona
    </a>
  );
}
