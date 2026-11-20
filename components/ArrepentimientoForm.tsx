"use client";

// Botón de arrepentimiento (Res. 424/2020): sin login, devuelve un código de trámite.
import { useState, type FormEvent } from "react";
import { buttonClass } from "./Button";
import { Field, inputClass } from "./Field";
import { crearDocumento } from "@/lib/firebase";

type Errors = Partial<Record<"nombre" | "contacto" | "fecha_pago" | "envio", string>>;

function nuevoCodigo() {
  const n = crypto.getRandomValues(new Uint32Array(1))[0].toString(36).toUpperCase();
  return `ARR-${n.padStart(7, "0").slice(0, 7)}`;
}

export function ArrepentimientoForm() {
  const [codigo, setCodigo] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const v = (k: string) => String(fd.get(k) ?? "").trim();
    const errs: Errors = {};
    if (!v("nombre")) errs.nombre = "Poné tu nombre.";
    if (!v("contacto")) errs.contacto = "Poné el email o WhatsApp con el que pagaste.";
    if (!/^\d{4}-\d{2}-\d{2}$/.test(v("fecha_pago"))) errs.fecha_pago = "Poné la fecha de pago.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setEnviando(true);
    const c = nuevoCodigo();
    try {
      const data: Record<string, unknown> = {
        codigo: c,
        nombre: v("nombre").slice(0, 80),
        contacto: v("contacto").slice(0, 100),
        fecha_pago: v("fecha_pago"),
      };
      if (v("detalle")) data.detalle = v("detalle").slice(0, 500);
      await crearDocumento("arrepentimientos", data);
      setCodigo(c);
    } catch {
      setErrors({ envio: "No pudimos registrar el pedido. Escribinos por email y lo hacemos a mano." });
    } finally {
      setEnviando(false);
    }
  }

  if (codigo) {
    return (
      <div role="status" className="border-2 border-ink bg-white p-5 shadow-hard">
        <p className="text-lg font-bold">Recibimos tu pedido de arrepentimiento.</p>
        <p className="mt-2">
          Tu código de trámite es <strong className="font-display text-2xl">{codigo}</strong>. Guardalo. Te
          contactamos dentro de las 24 horas para devolverte el pago.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 border-2 border-ink bg-white p-5 shadow-hard md:max-w-xl">
      <Field id="nombre" name="nombre" label="Nombre y apellido" autoComplete="name" error={errors.nombre} />
      <Field id="contacto" name="contacto" label="Email o WhatsApp con el que pagaste" error={errors.contacto} />
      <Field id="fecha_pago" name="fecha_pago" label="Fecha de pago" type="date" error={errors.fecha_pago} />
      <div>
        <label htmlFor="detalle" className="mb-1 block font-bold">
          Comentario (opcional)
        </label>
        <textarea id="detalle" name="detalle" maxLength={500} rows={3} className={inputClass} />
      </div>
      {errors.envio && <p className="text-sm font-bold text-red">{errors.envio}</p>}
      <button type="submit" disabled={enviando} className={buttonClass("ink")}>
        {enviando ? "Enviando" : "Me arrepiento de la compra"}
      </button>
    </form>
  );
}
