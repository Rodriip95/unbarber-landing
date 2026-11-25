// Fotos de barberías reales de CABA, con licencia libre (Wikimedia Commons).
// Las licencias CC BY / CC BY-SA permiten uso comercial con atribución: los créditos se muestran
// en el pie de página (components/Footer.tsx). Si se edita una foto, hay que decirlo en `cambios`.
// Originales optimizados a WebP (1600 px y 800 px) con scripts/fotos.py.

export type Foto = {
  src: string;
  srcSm: string;
  width: number;
  height: number;
  alt: string;
  lugar: string;
  autor: string;
  licencia: string;
  fuente: string;
  cambios?: string;
  posicion?: string;
};

const f = (nombre: string, width: number, height: number, rest: Omit<Foto, "src" | "srcSm" | "width" | "height">): Foto => ({
  src: `/fotos/${nombre}.webp`,
  srcSm: `/fotos/${nombre}-800.webp`,
  width,
  height,
  ...rest,
});

export const fotos = {
  /** Barbería de barrio en Caballito: hero de la home. */
  hero: f("la-epoca-caballito", 1600, 900, {
    alt: "Frente de la barbería La Época en Caballito, con su sillón antiguo y el poste de barbero en la vidriera",
    lugar: "Barbería La Época, Caballito",
    autor: "lamblukas",
    licencia: "CC BY 2.0",
    fuente: "https://commons.wikimedia.org/wiki/File:Barbershop_La_Epoca_La_%C3%89poca,_Buenos_Aires,_Argentina.jpg",
    cambios: "recortada y comprimida",
  }),
  /** Interior de barbería de barrio: sección "Para barberos". */
  barrio: f("la-epoca-interior", 1280, 720, {
    alt: "Interior de una barbería de barrio en Caballito, con sillones clásicos y espejos",
    lugar: "Peluquería Barbería La Época, Caballito",
    autor: "Roberto Fiadone",
    licencia: "CC BY-SA 4.0",
    fuente: "https://commons.wikimedia.org/wiki/File:Peluquer%C3%ADa_Barber%C3%ADa_La_%C3%89poca_01.jpg",
    cambios: "comprimida",
  }),
  /** Barbería céntrica: la peluquería del Café Tortoni, Av. de Mayo. */
  centro: f("tortoni-avenida-de-mayo", 1600, 1068, {
    alt: "Peluquería histórica del Café Tortoni, sobre la Avenida de Mayo, en el centro de Buenos Aires",
    lugar: "Peluquería del Café Tortoni, Av. de Mayo (Monserrat)",
    autor: "Ramon Corvera",
    licencia: "CC BY-SA 3.0",
    fuente: "https://commons.wikimedia.org/wiki/File:Cafe_Tortoni_Peluqueria.jpg",
    cambios: "recortada y comprimida",
  }),
  /** Hero de /barberos. */
  barberosHero: f("la-epoca-sillon", 1280, 720, {
    alt: "Sillón de barbero y mostrador de una barbería de barrio en Caballito",
    lugar: "Peluquería Barbería La Época, Caballito",
    autor: "Roberto Fiadone",
    licencia: "CC BY-SA 4.0",
    fuente: "https://commons.wikimedia.org/wiki/File:Peluquer%C3%ADa_Barber%C3%ADa_La_%C3%89poca_02.jpg",
    cambios: "comprimida",
  }),
} satisfies Record<string, Foto>;
