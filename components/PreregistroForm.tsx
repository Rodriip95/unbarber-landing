"use client";

// Plan B si el alta de barbero de la app no está lista (NEXT_PUBLIC_REGISTRO_MODE=preregistro).
import { useState, type FormEvent } from "react";
import Link from "next/link";
import { buttonClass } from "./Button";
import { Checkbox, Field, formCardClass } from "./Field";
import { config } from "@/lib/config";
import { crearDocumento } from "@/lib/firebase";
import { getUtm } from "@/lib/utm";
import { track } from "@/lib/analytics";

type Errors = Partial<Record<"nombre" | "whatsapp" | "barrio" | "terminos" | "envio", string>>;

export function PreregistroForm() {
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok">("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const v = (k: string) => String(fd.get(k) ?? "").trim();
    const errs: Errors = {};
    if (!v("nombre")) errs.nombre = "Poné tu nombre.";
    if (!/^\+?[\d\s-]{8,20}$/.test(v("whatsapp"))) errs.whatsapp = "Poné un WhatsApp válido, con código de área.";
    if (!v("barrio")) errs.barrio = "Poné tu barrio.";
    if (fd.get("terminos") !== "on") errs.terminos = "Tenés que aceptar los Términos.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setEstado("enviando");
    try {
      const data: Record<string, unknown> = {
        nombre: v("nombre").slice(0, 80),
        whatsapp: v("whatsapp"),
        barrio: v("barrio").slice(0, 60),
        acepta_terminos: true,
        version_terminos: config.versionTerminos,
        utm: getUtm(),
      };
      if (v("instagram")) data.instagram = v("instagram").slice(0, 60);
      await crearDocumento("preregistros_barberos", data);
      track("preregistro_barbero", { barrio: v("barrio") });
      setEstado("ok");
    } catch {
      setErrors({ envio: "No pudimos guardar tus datos. Probá de nuevo en un rato." });
      setEstado("idle");
    }
  }

  if (estado === "ok") {
    return (
      <p role="status" className="rounded-2xl border border-line bg-paper p-6 font-display text-2xl">
        Listo. Te escribimos por WhatsApp para terminar tu alta.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={formCardClass}>
      <Field id="nombre" name="nombre" label="Nombre" autoComplete="name" error={errors.nombre} />
      <Field id="whatsapp" name="whatsapp" label="WhatsApp" type="tel" autoComplete="tel" error={errors.whatsapp} />
      <Field id="barrio" name="barrio" label="Barrio donde cortás" error={errors.barrio} />
      <Field id="instagram" name="instagram" label="Instagram (opcional)" />
      <Checkbox id="terminos" name="terminos" error={errors.terminos}>
        Acepto los{" "}
        <Link href="/terminos" className="underline">
          Términos
        </Link>{" "}
        y la{" "}
        <Link href="/privacidad" className="underline">
          Política de Privacidad
        </Link>
        .
      </Checkbox>
      {errors.envio && <p className="text-sm font-bold text-red">{errors.envio}</p>}
      <button type="submit" disabled={estado === "enviando"} className={`${buttonClass("solid")} justify-self-start px-8`}>
        {estado === "enviando" ? "Guardando" : "Quiero sumarme"}
      </button>
    </form>
  );
}
