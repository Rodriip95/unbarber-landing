import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ArrepentimientoForm } from "@/components/ArrepentimientoForm";

export const metadata: Metadata = { title: "Botón de arrepentimiento · Unbarber" };

export default function Arrepentimiento() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="font-display text-4xl leading-none md:text-6xl">
          Botón de <em className="text-red">arrepentimiento</em>
        </h1>
        <p className="mt-4 text-lg">
          Si pagaste la membresía hace 10 días corridos o menos, podés pedir la devolución. No hace falta explicar el
          motivo ni iniciar sesión.
        </p>
        <div className="mt-8">
          <ArrepentimientoForm />
        </div>
      </main>
    </>
  );
}
