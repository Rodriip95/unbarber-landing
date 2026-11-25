import type { ReactNode } from "react";
import { Header } from "./Header";

export function LegalPage({ title, version, children }: { title: string; version: string; children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <p className="mb-6 rounded-lg border border-red/40 bg-red/10 px-3 py-2 text-sm font-bold text-red">
          Borrador pendiente de revisión legal. No publicar hasta que lo apruebe un abogado.
        </p>
        <h1 className="font-display text-4xl leading-none md:text-6xl">{title}</h1>
        <p className="mt-2 text-sm text-gray-text">Versión {version}</p>
        <div className="mt-8 space-y-4 text-lg leading-relaxed [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_li]:ml-5 [&_ul]:list-disc">
          {children}
        </div>
      </main>
    </>
  );
}
