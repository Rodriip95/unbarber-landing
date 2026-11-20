"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { buttonClass } from "./Button";
import { Checkbox, Field, inputClass } from "./Field";
import { config } from "@/lib/config";
import { crearDocumento } from "@/lib/firebase";
import { getUtm } from "@/lib/utm";
import { track } from "@/lib/analytics";
import { barrios } from "@/content/zonas";

type Errors = Partial<Record<"contacto" | "barrio" | "consentimiento" | "envio", string>>;

const esEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const esWhatsapp = (v: string) => /^\+?[\d\s-]{8,20}$/.test(v);

export function WaitlistForm() {
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [barrioOk, setBarrioOk] = useState("");
  const [otro, setOtro] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const contacto = String(fd.get("contacto") ?? "").trim();
    const barrioSel = String(fd.get("barrio") ?? "");
    const barrio = barrioSel === "otro" ? String(fd.get("barrio_otro") ?? "").trim() : barrioSel;
    const consentimiento = fd.get("consentimiento") === "on";

    const errs: Errors = {};
    if (!esEmail(contacto) && !esWhatsapp(contacto)) errs.contacto = "Poné un email o un WhatsApp válido.";
    if (!barrio) errs.barrio = "Elegí tu barrio.";
    if (!consentimiento) errs.consentimiento = "Necesitamos tu permiso para avisarte.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setEstado("enviando");
    try {
      const tipo_contacto = esEmail(contacto) ? "email" : "whatsapp";
      await crearDocumento("lista_espera", {
        contacto,
        tipo_contacto,
        barrio: barrio.slice(0, 60),
        consentimiento: true,
        version_privacidad: config.versionPrivacidad,
        utm: getUtm(),
      });
      track("lista_espera_alta", { barrio, tipo_contacto });
      setBarrioOk(barrios.find((b) => b.slug === barrio)?.nombre ?? barrio);
      setEstado("ok");
    } catch {
      setErrors({ envio: "No pudimos guardar tus datos. Probá de nuevo en un rato." });
      setEstado("idle");
    }
  }

  if (estado === "ok") {
    return (
      <p role="status" className="border-2 border-ink bg-white p-5 text-lg font-bold shadow-hard">
        Listo. Te avisamos cuando abra en {barrioOk}.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 border-2 border-ink bg-white p-5 shadow-hard md:max-w-xl">
      <Field id="contacto" name="contacto" label="Email o WhatsApp" autoComplete="email" error={errors.contacto} />
      <div>
        <label htmlFor="barrio" className="mb-1 block font-bold">
          Barrio
        </label>
        <select id="barrio" name="barrio" className={inputClass} defaultValue="" onChange={(e) => setOtro(e.target.value === "otro")}>
          <option value="" disabled>
            Elegí tu barrio
          </option>
          {barrios.map((b) => (
            <option key={b.slug} value={b.slug}>
              {b.nombre}
            </option>
          ))}
          <option value="otro">Otro</option>
        </select>
        <div hidden={!otro} className="mt-2">
          <label htmlFor="barrio_otro" className="sr-only">
            ¿Qué barrio?
          </label>
          <input id="barrio_otro" name="barrio_otro" placeholder="¿Qué barrio?" maxLength={60} className={inputClass} />
        </div>
        {errors.barrio && <p className="mt-1 text-sm font-bold text-red">{errors.barrio}</p>}
      </div>
      <Checkbox id="consentimiento" name="consentimiento" error={errors.consentimiento}>
        Acepto que Unbarber use estos datos para avisarme cuando abra en mi zona. Ver la{" "}
        <Link href="/privacidad" className="underline">
          Política de Privacidad
        </Link>
        .
      </Checkbox>
      {errors.envio && <p className="text-sm font-bold text-red">{errors.envio}</p>}
      <button type="submit" disabled={estado === "enviando"} className={buttonClass("blue")}>
        {estado === "enviando" ? "Guardando" : "Avisame"}
      </button>
    </form>
  );
}
