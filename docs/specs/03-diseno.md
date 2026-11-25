# Spec 03 · Diseño

Dirección vigente: **V3** (25 nov 2026), basada en la referencia "Landing principal" que pasó Rodri. Reemplaza a V2 "Poste" (bordes negros, sombras duras, Archivo Black), que ya no se usa.

La landing comparte marca con la app: verde oscuro, crema, terracota y azul, títulos serif con una parte en itálica, botones píldora y fotos de barberías reales.

## Principios

- **Cálida y de barrio**: fondo crema, bloques verde oscuro, esquinas redondeadas (16 px en tarjetas y fotos), líneas finas como separadores.
- **La itálica cuenta la emoción**: cada título tiene una parte en itálica de color (terracota sobre claro, durazno sobre oscuro).
- **Fotos de barberías de verdad**, de barrio y céntricas de CABA. Nada de modelos de stock.
- **Una sola página principal** (`/`) con secciones para barberos y clientes; `/barberos` amplía la parte de barberos y la membresía.

## Tokens

Definidos una sola vez en `app/globals.css` (`@theme`). No se usan colores sueltos.

| Token | Valor | Uso |
|---|---|---|
| `cream` | `#F5F2ED` | Fondo base |
| `paper` | `#FBFAF7` | Tarjetas de formulario |
| `ink` | `#182D26` | Verde oscuro: texto, bloques oscuros, botón principal |
| `red` | `#C4523A` | Terracota: itálicas y antetítulos sobre claro |
| `blue` | `#425E78` | Azul del logo, acento secundario |
| `peach` | `#F2B48C` | Itálicas y antetítulos sobre verde |
| `sage` | `#C7CDC3` | Fondo de foto mientras carga |
| `line` / `line-dark` | `#D9D4CB` / `#3B4D46` | Separadores finos sobre claro / oscuro |
| `gray-text` | `#5B6560` | Texto secundario |

## Tipografía

| Rol | Fuente | Tamaño (móvil → escritorio) |
|---|---|---|
| Título del hero | DM Serif Text, parte final en itálica | 44 → 68 px, interlineado 1,02 |
| Título de sección | DM Serif Text + itálica | 38 → 52 px |
| Párrafo "Sobre Unbarber" | DM Serif Text | 26 → 34 px |
| Texto | Space Grotesk 400 | 14 → 16 px |
| Antetítulo | Space Grotesk 700, mayúsculas, espaciado 0,12em | 11 → 12 px |
| Botón | Space Grotesk 700, píldora | 14 px, alto 44 px |

DM Serif Text existe solo en peso 400 (regular e itálica) en Google Fonts; los "semibold/bold" del diseño se resuelven con tamaño y contraste para no generar negritas sintéticas. Las fuentes se cargan con `next/font/google` (servidas desde el mismo dominio).

## Componentes

| Componente | Descripción |
|---|---|
| `Header` | Logo nuevo (`public/brand/logo-unbarber.svg`) y navegación: La app, Para barberos, Para clientes. |
| `Button` | Píldora. `solid` (verde), `light` (crema sobre verde), `outline` (borde crema sobre verde), `outline-dark`. |
| `Tag` | Antetítulo en mayúsculas chicas, terracota o durazno. |
| `Title` | Título serif con `accent` en itálica de color. |
| `Photo` | Foto WebP con `srcset` (800/1600 px), esquinas redondeadas, `alt` en español. |
| `FeatureList` | Filas título / descripción con líneas finas. |
| `FAQ` | Acordeón con `<details>` y "+" a la derecha. |
| `WaitlistForm` | Tarjeta `paper` con borde fino, campos redondeados. |
| `Footer` | Verde oscuro, logo claro, datos legales, Botón de arrepentimiento y créditos de las fotos. |

## Layout

- Móvil primero: 360 px mínimo, márgenes de 16 px. Escritorio: contenedor de 1200 px.
- Hero: tarjeta verde con texto a la izquierda y foto a la derecha (en móvil, la foto va debajo).
- Secciones alternan crema y verde oscuro; foto y texto en dos columnas.
- En móvil, el botón principal queda fijo abajo después de pasar el hero.

## Fotos

- Fuente: Wikimedia Commons, barberías reales de CABA (La Época en Caballito como barrio; la peluquería del Café Tortoni en Av. de Mayo como céntrica). Licencias CC BY / CC BY-SA: uso comercial permitido con atribución, que se muestra en el pie ("Créditos de las fotos") y está en `content/fotos.ts`.
- Optimización: WebP 1600 px y 800 px, calidad ~72 (`scripts/fotos.py`).
- Cuando haya fotos propias de barberos de la zona piloto (LAN-08), reemplazan a estas.

## Accesibilidad

- Contraste AA en todo el texto (crema sobre `ink` 12:1; terracota sobre crema 4,6:1).
- Navegable con teclado; foco visible con contorno terracota.
- `alt` descriptivo en español en todas las fotos.
- `prefers-reduced-motion`: sin animaciones ni scroll suave.

## Entregables de diseño

- Imagen para compartir (Open Graph 1200 × 630) de cada página.
- Favicon a partir de la píldora del logo (`app/icon.svg`).
