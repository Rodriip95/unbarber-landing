export function StepCard({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <li className="border-2 border-ink bg-white p-5">
      <span className="font-display text-5xl leading-none">{n}</span>
      <h3 className="mt-3 text-xl font-bold">{title}</h3>
      <p className="mt-1 text-gray-text">{text}</p>
    </li>
  );
}
