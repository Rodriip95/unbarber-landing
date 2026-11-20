import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export type Tone = "red" | "blue" | "ink";

const tones: Record<Tone, string> = {
  red: "bg-red text-white",
  blue: "bg-blue text-white",
  ink: "bg-ink text-white",
};

const base =
  "inline-flex items-center justify-center gap-2 border-2 border-ink shadow-hard transition-[transform,box-shadow] " +
  "active:translate-x-1 active:translate-y-1 active:shadow-none hover:-translate-x-px hover:-translate-y-px";

export function buttonClass(tone: Tone = "ink", variant: "primary" | "secondary" = "primary") {
  return variant === "primary"
    ? `${base} ${tones[tone]} min-h-14 px-6 font-display text-lg uppercase`
    : `${base} bg-white text-ink min-h-11 px-5 font-bold`;
}

type Props = {
  href: string;
  tone?: Tone;
  variant?: "primary" | "secondary";
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href">;

export function ButtonLink({ href, tone, variant, children, className = "", ...rest }: Props) {
  const cls = `${buttonClass(tone, variant)} ${className}`;
  if (href.startsWith("http")) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
