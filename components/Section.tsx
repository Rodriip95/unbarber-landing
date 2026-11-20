import type { ReactNode } from "react";

const bgs = {
  white: "bg-white",
  gray: "bg-gray",
  red: "bg-red-soft",
  blue: "bg-blue-soft",
} as const;

export function Section({
  id,
  title,
  bg = "white",
  children,
}: {
  id?: string;
  title?: string;
  bg?: keyof typeof bgs;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`border-t-2 border-ink ${bgs[bg]}`}>
      <div className="mx-auto max-w-[1200px] px-4 py-14 md:py-20">
        {title && (
          <h2 className="mb-8 font-display text-[28px] uppercase leading-none md:text-5xl">{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
}
