export function ModeCard({ tone, title, text }: { tone: "red" | "blue"; title: string; text: string }) {
  return (
    <article className="border-2 border-ink bg-white shadow-hard">
      <h3
        className={`border-b-2 border-ink px-5 py-4 font-display text-2xl uppercase text-white ${tone === "red" ? "bg-red" : "bg-blue"}`}
      >
        {title}
      </h3>
      <p className="px-5 py-5 text-lg">{text}</p>
    </article>
  );
}
