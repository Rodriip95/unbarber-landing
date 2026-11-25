// Espacios de foto de la landing. Por ahora (decisión de Rodri, 25 nov 2026) se muestran
// recuadros grises tipo skeleton: no hay fotos cargadas.
// Para sumar una foto más adelante: optimizarla con scripts/fotos.py, completar `src`/`srcSm`/
// `width`/`height`, y si tiene licencia con atribución, `credito` (se lista en el pie).
// Ideas para cada espacio: barberías de CABA de barrio (Caballito, Boedo) y céntricas (Av. de Mayo).

export type Foto = {
  /** Descripción de la foto que va acá; se usa como alt cuando haya foto. */
  alt: string;
  src?: string;
  srcSm?: string;
  width?: number;
  height?: number;
  posicion?: string;
  credito?: { lugar: string; autor: string; licencia: string; fuente: string; cambios?: string };
};

export const fotos = {
  hero: { alt: "Frente de una barbería de barrio en Buenos Aires" },
  barrio: { alt: "Interior de una barbería de barrio, con sillones clásicos y espejos" },
  centro: { alt: "Barbería céntrica de la Ciudad de Buenos Aires" },
  barberosHero: { alt: "Barbero atendiendo a un cliente en su sillón" },
} satisfies Record<string, Foto>;
