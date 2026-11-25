export function StepCard({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <li className="rounded-2xl border border-line bg-paper p-6">
      <span className="font-display text-5xl leading-none text-red">{n}</span>
      <h3 className="mt-4 font-display text-2xl">{title}</h3>
      <p className="mt-1 text-sm text-gray-text">{text}</p>
    </li>
  );
}
