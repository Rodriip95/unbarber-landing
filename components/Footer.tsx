import Link from "next/link";
import { Logo } from "./Header";
import { config } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-white pb-24 md:pb-0">
      <div className="poste h-2 border-b-2 border-ink" aria-hidden="true" />
      <div className="mx-auto grid max-w-[1200px] gap-6 px-4 py-10 md:grid-cols-2">
        <div className="space-y-2">
          <Logo />
          <p className="text-sm text-gray-text">
            {config.titular} · CUIT {config.cuit} ·{" "}
            <a href={`mailto:${config.contactoEmail}`} className="underline">
              {config.contactoEmail}
            </a>
          </p>
        </div>
        <nav aria-label="Legales" className="flex flex-wrap items-start gap-x-5 gap-y-2 text-sm font-bold md:justify-end">
          <Link href="/terminos" className="underline underline-offset-4">
            Términos
          </Link>
          <Link href="/privacidad" className="underline underline-offset-4">
            Privacidad
          </Link>
          <Link href="/arrepentimiento" className="border-2 border-ink px-2 py-1">
            Botón de arrepentimiento
          </Link>
        </nav>
      </div>
    </footer>
  );
}
