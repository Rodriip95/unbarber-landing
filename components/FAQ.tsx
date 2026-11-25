import type { ReactNode } from "react";

export type Faq = { id?: string; q: string; a: ReactNode };

export function FAQ({ items }: { items: Faq[] }) {
  return (
    <div className="border-t border-line">
      {items.map((f) => (
        <details key={f.q} id={f.id} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-bold md:text-base">
            {f.q}
            <span className="text-lg leading-none transition-transform group-open:rotate-45" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="pb-5 text-gray-text">{f.a}</div>
        </details>
      ))}
    </div>
  );
}
