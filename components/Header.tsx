import Link from "next/link";

export function Logo({ light = false, className = "h-7 w-auto" }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Unbarber, inicio">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={light ? "/brand/logo-unbarber-claro.svg" : "/brand/logo-unbarber.svg"}
        alt="unbarber"
        width={350}
        height={80}
        className={className}
      />
    </Link>
  );
}

const nav = [
  { href: "/#sobre", label: "La app" },
  { href: "/barberos", label: "Para barberos" },
  { href: "/#clientes", label: "Para clientes" },
];

export function Header() {
  return (
    <header className="bg-cream">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-4 md:px-10">
        <Logo />
        <nav aria-label="Principal" className="flex items-center gap-4 text-xs font-bold md:gap-7 md:text-sm">
          {nav.map((n, i) => (
            <Link key={n.href} href={n.href} className={`hover:text-red ${i === 0 ? "hidden sm:inline" : ""}`}>
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
