import type { ReactNode } from "react";

/** Antetítulo de sección: versalitas chicas en terracota (o durazno sobre fondo oscuro). */
export function Tag({ children, dark = false, className = "" }: { children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <p
      className={`text-[11px] font-bold uppercase tracking-[0.12em] md:text-xs ${dark ? "text-peach" : "text-red"} ${className}`}
    >
      {children}
    </p>
  );
}
