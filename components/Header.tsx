import Link from "next/link";
import type { ReactNode } from "react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Unbarber, inicio">
      <span className="poste block h-8 w-3 border-2 border-ink" aria-hidden="true" />
      <span className="font-display text-xl uppercase tracking-tight">Unbarber</span>
    </Link>
  );
}

export function Header({ link, action }: { link: { href: string; label: string }; action?: ReactNode }) {
  return (
    <header className="border-b-2 border-ink bg-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3">
        <Logo />
        <nav className="flex items-center gap-4">
          <Link href={link.href} className="text-sm font-bold underline underline-offset-4">
            {link.label}
          </Link>
          {action}
        </nav>
      </div>
      <div className="poste h-2 border-t-2 border-ink" aria-hidden="true" />
    </header>
  );
}
