# Unbarber · Landing

Web pública de Unbarber. Su trabajo es uno solo: **traer barberos y clientes de la zona piloto** y mandarlos a la app (o a la lista de espera mientras la app no esté abierta en su zona).

La landing es un proyecto **separado de la app**: tiene su propio código, su propio deploy y su propio dominio.

| | Landing (este proyecto) | App |
|---|---|---|
| Dominio | `unbarber.com.ar` | `app.unbarber.com.ar` |
| Qué es | Web de lectura: fotos grandes, textos, preguntas frecuentes | Herramienta de uso diario (PWA) |
| Datos | Solo lista de espera y pre-registros | Usuarios, turnos, reputación |

## Fechas clave

| Fecha | Hito |
|---|---|
| dic 2026 | Fundaciones: dominio, hosting, textos y diseño de `/barberos` |
| **11 ene 2027** | Sale `/barberos` con "Registrate gratis" |
| **1 feb 2027** | Sale `/` (clientes) con lista de espera por zona |
| **1 mar 2027** | Piloto: `/` pasa a "Buscar barbero" (link a la app); Términos y Privacidad publicados |
| may a jun 2027 | Páginas por barrio para SEO local |

## Páginas

| Ruta | Para quién | Acción principal | Meta |
|---|---|---|---|
| `/` | Clientes | "Avisame cuando esté en mi zona" → desde el piloto, "Buscar barbero" | 500 anotados antes del lanzamiento |
| `/barberos` | Barberos | "Registrate gratis" | 50 registros antes del 1 mar 2027 |
| `/terminos`, `/privacidad` | Todos | — | Requisito legal |
| `/arrepentimiento` | Barberos que pagaron | Pedir la baja de la compra | Requisito legal (botón de arrepentimiento) |
| `/zona/[barrio]` | Clientes que buscan en Google | "Buscar barbero" | Fase de crecimiento |

## Stack (costo cero)

- **Next.js + TypeScript + Tailwind CSS**, exportado como sitio estático (`output: 'export'`).
- **Firebase Hosting** (mismo proyecto de Firebase que la app, en un sitio de hosting aparte). No se usa Vercel gratis porque no permite uso comercial.
- **Firestore** solo para la lista de espera y pre-registros, protegido con reglas y App Check.
- **Analítica**: Google Analytics 4 (vía Firebase) y píxel de Meta, con aviso de cookies.
- Lo único pago es el dominio `.com.ar` en NIC Argentina.

## Diseño

Se construye con la **V2 "Poste"**: base blanca, rojo `#E0262B` (barberos), azul `#1F49C7` (clientes), tinta `#111111`, bordes negros de 2 px sin esquinas redondeadas, sombras duras de 4 px, títulos en Archivo Black y texto en Space Grotesk. Tono directo, con voseo, sin signos de exclamación. Emojis de barbería solo en etiquetas, nunca en precios ni textos legales.

En la landing, `/barberos` se pinta del lado rojo y `/` del lado azul, igual que los dos modos de la app.

## Documentación

| Archivo | Qué contiene |
|---|---|
| [docs/specs/01-producto.md](docs/specs/01-producto.md) | Objetivos, públicos, páginas, flujos y métricas |
| [docs/specs/02-contenido.md](docs/specs/02-contenido.md) | Textos sección por sección y preguntas frecuentes (incluida la membresía) |
| [docs/specs/03-diseno.md](docs/specs/03-diseno.md) | Tokens V2, componentes y reglas visuales |
| [docs/specs/04-tecnica.md](docs/specs/04-tecnica.md) | Arquitectura, estructura del código, datos, analítica, SEO y deploy |
| [docs/specs/05-legal.md](docs/specs/05-legal.md) | Membresía informada, Términos, Privacidad, arrepentimiento y cookies |
| [TASKS.md](TASKS.md) | Tareas por fase, con IDs `LAN-xx` y criterio de terminado |
| [docs/infra.md](docs/infra.md) | Ambientes desa/prd, workflows y secretos |
| `firestore.landing.rules` | Reglas de las colecciones de la landing, para sumar a las de la app |

Fuentes de verdad: el [documento maestro](https://claude.ai/artifact/3Eh5NFbbXimfRb5U681k55) (pestañas Landing, Diseño, Marketing, Negocio y Decisiones técnicas) y la [propuesta de diseño](https://claude.ai/artifact/UJRTduMd8tdekdXRPW1jTW) (página V2 · Poste). Si algo de acá contradice al documento maestro, gana el documento maestro y se actualiza este repo.

## Cómo correrlo

```bash
cp .env.example .env.local   # valores públicos; la config de Firebase sale de npm run env:desa
npm install
npm run dev                  # http://localhost:3000
npm run lint && npm run typecheck
npm run build                # genera /out (sitio estático)
npm run deploy:desa          # lee la config de Firebase, build y deploy a desa
```

Sin las variables de Firebase la página funciona igual: los formularios se simulan en la consola y el precio sale de `.env`.

## Firebase y ambientes

Dos proyectos Firebase compartidos con la app: `unbarber-desa` (rama `develop`) y `unbarber-prd` (rama `main`). La landing es un sitio de Hosting adicional en cada uno (target `landing`); Firestore, reglas, Auth y Remote Config los administra el repo de la app. La config web no se versiona. Detalle, workflows y lo que hay que cargar en GitHub: [docs/infra.md](docs/infra.md).

La landing lee de Remote Config `membership_price_ars`, `membership_promo_percent` y `membership_promo_until`. Mercado Pago no está dentro de Firebase: el link de pago se maneja desde la app.

## Membresía

$20.000, pago único, por Mercado Pago. Hoy con promoción de 100 % que se controla desde Remote Config. La landing siempre muestra el precio normal y, aparte, la promoción vigente (requisito legal, ver `docs/specs/05-legal.md`).

## Pendientes de Rodri que bloquean contenido

- **Promo**: fecha de fin, si la tiene (vale para quien se registra mientras está vigente).
- **Duración de la prueba** (NEG-02), si se mantiene además de la promo.
- **Zona piloto** (MKT-01). Bloquea títulos, mapa y SEO.
- **Titular legal** (NEG-03). Bloquea Términos, Privacidad y el pie de página.
- **Dominio**: confirmar `unbarber.com.ar` y comprarlo (LAN-01).
