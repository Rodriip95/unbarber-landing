# Spec 03 · Diseño

Dirección vigente: **V2 "Poste"** ([canvas](https://claude.ai/artifact/UJRTduMd8tdekdXRPW1jTW), página V2 · Poste). V1 "Oficio" no se usa.

La landing comparte marca con la app pero es otra cosa: es una web de lectura, con fotos grandes, títulos enormes y mucho aire. La app tiene más densidad.

## Principios

- **Directa**: color plano, bordes negros de 2 px, cero redondeo. Una tarjeta parece tarjeta y un botón parece botón.
- **Informal, no infantil**: sombras duras, títulos en mayúsculas pesadas, algún emoji en etiquetas. De barrio, no de juguete.
- **El poste como firma**: la franja diagonal roja, blanca y azul aparece en el logo y como separador bajo el encabezado. Nunca como fondo de sección.
- **Rojo = barbero, azul = cliente.** `/barberos` usa el rojo como color de acción; `/` usa el azul. Todo lo demás, blanco y negro.

## Tokens

Se definen una sola vez en `tailwind.config.ts` (y como variables CSS) y no se usan colores sueltos en el código.

| Token | Valor | Uso |
|---|---|---|
| `white` | `#FFFFFF` | Fondo base |
| `ink` | `#111111` | Texto, bordes, sombras |
| `red` | `#E0262B` | Acción en `/barberos`, tarjeta AHORA |
| `blue` | `#1F49C7` | Acción en `/`, tarjeta SACAR TURNO |
| `red-soft` | `#FDE7E7` | Fondos suaves del lado rojo |
| `blue-soft` | `#E6ECFB` | Fondos suaves del lado azul |
| `gray` | `#F2F2F2` | Bandas neutras |
| `gray-text` | `#555555` | Texto secundario |
| `border` | `2px solid ink` | Todos los bordes |
| `radius` | `0` | Todo |
| `shadow` | `4px 4px 0 0 ink` | Solo lo que se toca o está destacado |
| `shadow-pressed` | `0 0 0 0` + `translate(4px, 4px)` | Estado presionado del botón |

Contraste comprobado: blanco sobre rojo 4,7:1 y sobre azul 7,4:1. El texto blanco sobre rojo va siempre en 18 px o más, o en negrita.

## Tipografía

| Rol | Fuente | Tamaño (móvil → escritorio) |
|---|---|---|
| Título del hero | Archivo Black, mayúsculas | 40 → 80 px, interlineado 0,95 |
| Título de sección | Archivo Black, mayúsculas | 28 → 48 px |
| Bajada | Space Grotesk 500 | 18 → 22 px |
| Texto | Space Grotesk 400 | 16 → 18 px |
| Etiqueta | Space Grotesk 700, mayúsculas, espaciado 0,08em, en recuadro con borde | 12 → 14 px |
| Botón principal | Archivo Black, mayúsculas | 18 px, alto 56 px |

Las dos fuentes se cargan con `next/font/google` (se sirven desde el mismo dominio, sin pedido a Google en el navegador del usuario).

## Componentes

| Componente | Descripción |
|---|---|
| `Header` | Logo con franja del poste, enlace "¿Sos barbero?" / "¿Buscás barbero?", botón de acción. Separador del poste debajo. |
| `Button` | Principal: fondo del color de la página, texto blanco, borde y sombra. Secundario: fondo blanco, texto tinta. Alto mínimo 44 px (principal 56 px). |
| `Tag` | Etiqueta en recuadro con borde, opcionalmente con emoji delante. |
| `StepCard` | Número grande, título y una línea. Para "Cómo funciona". |
| `ModeCard` | Cabecera de color (rojo AHORA / azul SACAR TURNO) y cuerpo blanco. |
| `FeatureList` | Lista con ícono de línea de 2 px. |
| `FAQ` | Acordeón con `<details>`; cada pregunta con borde inferior de 2 px. |
| `WaitlistForm` | Campos con borde de 2 px, foco con sombra dura, mensajes de error en texto (no solo color). |
| `ZoneMap` | Imagen estática de la zona piloto (SVG o PNG), no un mapa interactivo. |
| `PhotoBlock` | Foto real con borde de 2 px y sombra dura. |
| `Footer` | Datos legales y botón de arrepentimiento siempre visibles. |

## Layout

- Móvil primero: 360 px de ancho mínimo, márgenes de 16 px. Escritorio: contenedor de 1200 px máximo.
- Secciones separadas por bloques de color plano (blanco, gris o suave) con borde superior de 2 px, no por degradados.
- Hero en móvil: título, bajada y botón visibles sin hacer scroll en un teléfono de 390 × 844.
- En móvil, el botón principal queda fijo abajo después de pasar el hero (barra con borde superior de 2 px).

## Fotos y stickers

- Fotos reales de barberos de la zona (LAN-08). Hasta tenerlas, recuadros grises con la leyenda "Foto de [barbero] · pendiente", nunca fotos de stock.
- Stickers del set V2 (contorno negro grueso, relleno plano rojo, azul y blanco, sombra dura) como acentos en "Cómo funciona" y estados vacíos. Máximo uno por sección.

## Accesibilidad

- Contraste AA en todo el texto.
- Navegable con teclado; foco visible (contorno de 2 px + sombra).
- Botones y enlaces reales (`<a>`, `<button>`), `alt` en todas las fotos.
- `prefers-reduced-motion`: sin animaciones.

## Entregables de diseño

- Maqueta de `/barberos` móvil y escritorio (DIS-05) en el canvas de diseño.
- Maqueta de `/` móvil y escritorio (DIS-06).
- Imagen para compartir (Open Graph 1200 × 630) de cada página.
- Favicon e ícono a partir del logo (DIS-01).
