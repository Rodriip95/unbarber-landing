import Link from "next/link";
import { Logo } from "./Header";
import { config } from "@/lib/config";
import { fotos } from "@/content/fotos";

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
      <details className="mx-auto max-w-[1200px] px-4 pb-8 text-[11px] text-cream/55 md:px-10">
        <summary className="cursor-pointer">Créditos de las fotos</summary>
        <ul className="mt-2 space-y-1">
          {Object.values(fotos).map((f) => (
            <li key={f.src}>
              {f.lugar}: foto de {f.autor},{" "}
              <a href={f.fuente} className="underline" rel="noopener" target="_blank">
                {f.licencia}
              </a>
              {f.cambios && `, ${f.cambios}`}.
            </li>
          ))}
        </ul>
      </details>
    </footer>
  );
}
