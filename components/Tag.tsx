import type { ReactNode } from "react";

export function Tag({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-block border-2 border-ink bg-white px-2 py-1 text-xs font-bold uppercase tracking-[0.08em] md:text-sm ${className}`}
    >
      {children}
    </span>
  );
}
