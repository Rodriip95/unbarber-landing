export type Feature = { title: string; text: string };

/** Filas título / descripción separadas por líneas finas (como en la referencia V3). */
export function FeatureList({ items, dark = false }: { items: Feature[]; dark?: boolean }) {
  return (
    <dl className={`border-t ${dark ? "border-line-dark" : "border-line"}`}>
      {items.map((f) => (
        <div
          key={f.title}
          className={`grid gap-1 border-b py-4 text-sm md:grid-cols-[150px_1fr] md:gap-6 ${dark ? "border-line-dark" : "border-line"}`}
        >
          <dt className="font-bold">{f.title}</dt>
          <dd className={dark ? "text-cream/75" : "text-gray-text"}>{f.text}</dd>
        </div>
      ))}
    </dl>
  );
}
