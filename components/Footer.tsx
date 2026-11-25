import Link from "next/link";
import { Logo } from "./Header";
import { config } from "@/lib/config";
import { fotos, type Foto } from "@/content/fotos";

const creditos = Object.values(fotos as Record<string, Foto>).flatMap((f) => (f.credito ? [f.credito] : []));

export function Footer() {
  return (
    <footer className="bg-ink pb-24 text-cream md:pb-0">
      <div className="mx-auto grid max-w-[1200px] gap-6 px-4 py-10 md:grid-cols-2 md:px-10">
        <div className="space-y-3">
          <Logo light className="h-8 w-auto" />
          <p className="text-xs text-cream/70">
            {config.titular} · CUIT {config.cuit} ·{" "}
            <a href={`mailto:${config.contactoEmail}`} className="underline underline-offset-2">
              {config.contactoEmail}
            </a>
          </p>
        </div>
        <nav aria-label="Legales" className="flex flex-wrap items-start gap-x-6 gap-y-2 text-xs font-bold md:justify-end">
          <Link href="/terminos" className="hover:text-peach">
            Términos
          </Link>
          <Link href="/privacidad" className="hover:text-peach">
            Privacidad
          </Link>
          <Link href="/arrepentimiento" className="hover:text-peach">
            Botón de arrepentimiento
          </Link>
        </nav>
      </div>
      {creditos.length > 0 && (
        <details className="mx-auto max-w-[1200px] px-4 pb-8 text-[11px] text-cream/55 md:px-10">
          <summary className="cursor-pointer">Créditos de las fotos</summary>
          <ul className="mt-2 space-y-1">
            {creditos.map((c) => (
              <li key={c.fuente}>
                {c.lugar}: foto de {c.autor},{" "}
                <a href={c.fuente} className="underline" rel="noopener" target="_blank">
                  {c.licencia}
                </a>
                {c.cambios && `, ${c.cambios}`}.
              </li>
            ))}
          </ul>
        </details>
      )}
    </footer>
  );
}
