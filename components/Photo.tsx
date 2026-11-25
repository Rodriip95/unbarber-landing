import type { Foto } from "@/content/fotos";

/** Foto de barbería con esquinas redondeadas. Ocupa el alto del contenedor (object-cover). */
export function Photo({ foto, className = "", priority = false }: { foto: Foto; className?: string; priority?: boolean }) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-sage ${className}`}>
      {/* Export estático: sin optimizador de next/image; las fotos ya vienen optimizadas en WebP. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={foto.src}
        srcSet={`${foto.srcSm} 800w, ${foto.src} 1600w`}
        sizes="(min-width: 768px) 50vw, 100vw"
        alt={foto.alt}
        width={foto.width}
        height={foto.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="h-full w-full object-cover"
        style={{ objectPosition: foto.posicion ?? "center" }}
      />
    </div>
  );
}
