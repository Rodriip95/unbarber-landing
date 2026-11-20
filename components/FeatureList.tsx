export type Feature = { title: string; text: string; emoji?: string };

export function FeatureList({ items }: { items: Feature[] }) {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {items.map((f) => (
        <li key={f.title} className="border-2 border-ink bg-white p-5">
          <h3 className="text-xl font-bold">
            {f.emoji && (
              <span className="mr-2" aria-hidden="true">
                {f.emoji}
              </span>
            )}
            {f.title}
          </h3>
          <p className="mt-1 text-gray-text">{f.text}</p>
        </li>
      ))}
    </ul>
  );
}
