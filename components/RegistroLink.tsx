"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { buttonClass, type Variant } from "./Button";
import { config, registroUrl } from "@/lib/config";
import { utmParams } from "@/lib/utm";
import { track } from "@/lib/analytics";

/** Botón de alta de barbero: va al alta de la app (con UTM) o al pre-registro propio. */
export function RegistroLink({
  ubicacion,
  className = "",
  variant = "solid",
  children = "Sumar mi barbería",
}: {
  ubicacion: string;
  className?: string;
  variant?: Variant;
  children?: React.ReactNode;
}) {
  const [href, setHref] = useState(
    config.registroMode === "app" ? registroUrl({}) : "#preregistro",
  );
  useEffect(() => {
    if (config.registroMode === "app") setHref(registroUrl(utmParams()));
  }, []);
  return (
    <a
      href={href}
      className={`${buttonClass(variant)} ${className}`}
      onClick={() => track("click_registro_barbero", { ubicacion })}
    >
      {children}
    </a>
  );
}

/** Botón principal de clientes: "Buscar barbero" o ir a la lista de espera. */
export function ClientesCta({
  ubicacion,
  className = "",
  variant = "light",
}: {
  ubicacion: string;
  className?: string;
  variant?: Variant;
}) {
  if (config.clientesMode === "abierto") {
    return (
      <a
        href={config.appUrl}
        className={`${buttonClass(variant)} ${className}`}
        onClick={() => track("click_buscar_barbero", { ubicacion })}
      >
        Buscar barbero
      </a>
    );
  }
  return (
    <Link href="/#zona" className={`${buttonClass(variant)} ${className}`}>
      Avisame cuando esté en mi zona
    </Link>
  );
}
