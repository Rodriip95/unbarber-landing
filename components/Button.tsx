import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/**
 * Botones píldora de la V3.
 * - solid: verde oscuro sobre fondo claro.
 * - light: crema sobre fondo oscuro.
 * - outline: borde fino, sobre fondo oscuro (texto crema) o claro (texto verde).
 */
export type Variant = "solid" | "light" | "outline" | "outline-dark";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-cream hover:bg-[#22392f]",
  light: "bg-cream text-ink hover:bg-white",
  outline: "border border-cream/70 text-cream hover:bg-cream/10",
  "outline-dark": "border border-ink/30 text-ink hover:bg-ink/5",
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition-colors " +
  "disabled:opacity-60";

export function buttonClass(variant: Variant = "solid") {
  return `${base} ${variants[variant]}`;
}

type Props = {
  href: string;
  variant?: Variant;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href">;

export function ButtonLink({ href, variant, children, className = "", ...rest }: Props) {
  const cls = `${buttonClass(variant)} ${className}`;
  if (href.startsWith("http") || href.startsWith("#")) {
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
