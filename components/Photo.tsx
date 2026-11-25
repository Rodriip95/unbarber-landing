import type { Foto } from "@/content/fotos";

/**
 * Espacio de foto con esquinas redondeadas. Sin `src` muestra un recuadro gris tipo skeleton
 * (decorativo, oculto para lectores de pantalla). Con `src` muestra la foto optimizada.
 */
export function Photo({ foto, className = "", priority = false }: { foto: Foto; className?: string; priority?: boolean }) {
  if (!foto.src) {
    return (
      <div aria-hidden="true" className={`relative overflow-hidden rounded-2xl bg-sage ${className}`}>
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-white/0 via-white/25 to-white/0" />
      </div>
    );
  }
  return (
    <div className={`overflow-hidden rounded-2xl bg-sage ${className}`}>
      {/* Export estático: sin optimizador de next/image; las fotos ya vienen en WebP. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={foto.src}
        srcSet={foto.srcSm ? `${foto.srcSm} 800w, ${foto.src} 1600w` : undefined}
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
