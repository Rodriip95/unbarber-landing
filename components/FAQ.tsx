import type { ReactNode } from "react";

export type Faq = { id?: string; q: string; a: ReactNode };

export function FAQ({ items }: { items: Faq[] }) {
  return (
    <div className="border-t-2 border-ink">
      {items.map((f) => (
        <details key={f.q} id={f.id} className="group border-b-2 border-ink bg-white">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-lg font-bold">
            {f.q}
            <span className="font-display text-2xl group-open:rotate-45" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="px-4 pb-5 text-gray-text">{f.a}</div>
        </details>
      ))}
    </div>
  );
}
