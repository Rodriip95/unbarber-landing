import type { ReactNode } from "react";

const bgs = {
  cream: "bg-cream text-ink",
  dark: "bg-ink text-cream",
} as const;

export function Section({
  id,
  bg = "cream",
  className = "",
  children,
}: {
  id?: string;
  bg?: keyof typeof bgs;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-20 ${bgs[bg]}`}>
      <div className={`mx-auto max-w-[1200px] px-4 py-16 md:px-10 md:py-24 ${className}`}>{children}</div>
    </section>
  );
}

/** Título serif con una parte en itálica de color (la "frase emocional"). */
export function Title({
  as: As = "h2",
  children,
  accent,
  dark = false,
  block = false,
  className = "",
}: {
  as?: "h1" | "h2";
  /** La itálica arranca en una línea nueva (como en el hero de la referencia). */
  block?: boolean;
  children?: ReactNode;
  accent?: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <As className={`font-display leading-[1.02] tracking-[-0.01em] ${className}`}>
      {children}
      {accent && (
        <>
          {children && !block ? " " : null}
          <em className={`${dark ? "text-peach" : "text-red"} ${block ? "block" : ""}`}>{accent}</em>
        </>
      )}
    </As>
  );
}
