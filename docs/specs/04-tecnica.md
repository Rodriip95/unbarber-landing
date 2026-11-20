# Spec 04 · Técnica

## Decisiones

| Tema | Decisión | Por qué |
|---|---|---|
| Framework | Next.js (App Router) + TypeScript | Mismo stack que la app; se comparten tokens y criterios |
| Render | Exportación estática (`output: 'export'`) | Sin servidor, carga rápida, hosting gratis |
| Estilos | Tailwind CSS con los tokens de V2 | Rápido y consistente |
| Hosting | Firebase Hosting, sitio `landing` en el mismo proyecto de Firebase que la app | Gratis, SSL incluido, un solo panel |
| Alternativa | Cloudflare Pages | Si Firebase Hosting queda corto. Vercel gratis no permite uso comercial |
| Datos | Firestore (lista de espera y pre-registros), escritura desde el navegador | Gratis dentro de la cuota; no hace falta Cloud Functions |
| Protección | Reglas de Firestore + App Check (reCAPTCHA Enterprise o v3) | Evitar spam en los formularios |
| Analítica | GA4 (Firebase Analytics) + píxel de Meta | Medir campañas (LAN-05, MKT-04) |
| Fuentes | `next/font/local` + `@fontsource` | Se sirven desde el propio dominio y el build no depende de Google Fonts |
| Precio y promo | Remote Config del proyecto compartido (`membership_price_ars`, `membership_promo_percent`, `membership_promo_until`), con valores por defecto en `.env` | Cambiar la promo sin publicar de nuevo |

## Estructura del código

```
unbarber-landing/
├─ app/
│  ├─ layout.tsx            # fuentes, header, footer, analítica
│  ├─ page.tsx              # /  (clientes)
│  ├─ barberos/page.tsx     # /barberos
│  ├─ terminos/page.tsx
│  ├─ privacidad/page.tsx
│  ├─ arrepentimiento/page.tsx
│  ├─ zona/[barrio]/page.tsx   # fase de crecimiento (generateStaticParams)
│  ├─ sitemap.ts
│  └─ robots.ts
├─ components/              # Button, Tag, StepCard, ModeCard, FAQ, WaitlistForm, ...
├─ content/                 # textos en .ts o .mdx, separados del layout
│  ├─ barberos.ts
│  ├─ clientes.ts
│  └─ legal/*.mdx
├─ lib/
│  ├─ firebase.ts           # init + App Check
│  ├─ analytics.ts          # track(evento, params) → GA4 + Meta
│  ├─ consent.ts            # estado del aviso de cookies
│  └─ config.ts             # flags y URLs
├─ public/                  # imágenes, og, favicon, stickers
├─ firestore.rules
├─ firebase.json
├─ .env.example
└─ tailwind.config.ts
```

Los textos viven en `content/` para poder cambiarlos sin tocar componentes.

## Configuración

`lib/config.ts` lee variables `NEXT_PUBLIC_*`:

| Variable | Ejemplo | Para qué |
|---|---|---|
| `NEXT_PUBLIC_APP_URL` | `https://app.unbarber.com.ar` | Destino de los botones |
| `NEXT_PUBLIC_REGISTRO_MODE` | `app` \| `preregistro` | Si "Registrate gratis" va a la app o al formulario propio |
| `NEXT_PUBLIC_CLIENTES_MODE` | `espera` \| `abierto` | Si `/` muestra lista de espera o "Buscar barbero" |
| `NEXT_PUBLIC_ZONAS_ABIERTAS` | `palermo,villa-crespo` | Barrios donde ya funciona la app |
| `NEXT_PUBLIC_FIREBASE_*` | — | Configuración pública del proyecto |
| `NEXT_PUBLIC_GA_ID` | `G-XXXX` | GA4 |
| `NEXT_PUBLIC_META_PIXEL_ID` | — | Píxel de Meta |
| `NEXT_PUBLIC_RECAPTCHA_KEY` | — | App Check |

Cambiar de "lista de espera" a "abierto" el 1 de marzo es cambiar una variable y volver a publicar.

## Datos

### `lista_espera/{id}`
```ts
{
  contacto: string;          // email o WhatsApp
  tipo_contacto: 'email' | 'whatsapp';
  barrio: string;            // slug o texto libre
  consentimiento: true;
  version_privacidad: string; // ej. '2027-02-01'
  utm: { source?: string; medium?: string; campaign?: string };
  creado: Timestamp;          // serverTimestamp()
}
```

### `preregistros_barberos/{id}` (solo si `REGISTRO_MODE = preregistro`)
```ts
{
  nombre: string;
  whatsapp: string;
  barrio: string;
  instagram?: string;
  acepta_terminos: true;
  version_terminos: string;
  utm: {...};
  creado: Timestamp;
}
```

### Reglas de Firestore (resumen)

- `create` permitido sin login solo si: los campos son exactamente los esperados, los tipos y largos son válidos (contacto ≤ 100, barrio ≤ 60), `consentimiento == true` y `creado == request.time`.
- `read`, `update`, `delete`: prohibido desde el navegador. Solo admin (custom claim `admin`) o consola.
- App Check obligatorio en Firestore.

Las reglas viven en el repo (`firestore.rules`). Si la app usa el mismo proyecto, las reglas de estas dos colecciones se suman a las de la app en un solo archivo; hay que coordinarlo con el proyecto de la app.

## Analítica

Se carga **solo después de aceptar cookies** (ver sección 4 de [05-legal.md](05-legal.md)).

| Evento | Cuándo | Parámetros |
|---|---|---|
| `page_view` | Automático | ruta, utm |
| `click_registro_barbero` | Clic en "Registrate gratis" | ubicación (hero, cierre, barra fija) |
| `preregistro_barbero` | Envío correcto del pre-registro | barrio |
| `click_buscar_barbero` | Clic en "Buscar barbero" | ubicación |
| `lista_espera_alta` | Envío correcto de la lista de espera | barrio, tipo_contacto |
| `faq_abierta` | Abre una pregunta | id de la pregunta |

En Meta: `click_registro_barbero` y `preregistro_barbero` → `Lead`; `lista_espera_alta` → `CompleteRegistration`.

Los UTM de la URL se guardan en `sessionStorage` y se pasan a la app en el link de registro (`?utm_source=…`) para medir el embudo completo.

## SEO

- `metadata` por página (título, descripción, Open Graph, `lang="es-AR"`).
- `sitemap.xml` y `robots.txt` generados.
- Datos estructurados `Organization` en el inicio y `FAQPage` en las preguntas frecuentes.
- Páginas por barrio (`/zona/[barrio]`) generadas en build desde una lista en `content/zonas.ts`.
- Google Search Console verificado con el dominio.

## Rendimiento (objetivos)

- Lighthouse móvil ≥ 90 en rendimiento, accesibilidad, buenas prácticas y SEO.
- LCP < 2,5 s en 4G. Imágenes en WebP/AVIF con tamaño fijo, la del hero con prioridad.
- JS mínimo: los formularios y el aviso de cookies son los únicos componentes de cliente.

## Deploy

Ambientes `desa` y `prd`, workflows y secretos: ver [../infra.md](../infra.md). Lo de abajo aplica a los dos.

- `firebase.json` con `hosting.target = "landing"`, `public: "out"`, `cleanUrls: true`, cabeceras de caché largas para `/_next/static/**`.
- Dominios: `unbarber.com.ar` y `www` (redirige a sin www) apuntando al sitio `landing`. `app.unbarber.com.ar` apunta al sitio de la app.
- Canal de vista previa: `firebase hosting:channel:deploy preview` para revisar antes de publicar.
- CI (opcional, gratis): GitHub Actions que corre `lint`, `typecheck` y `build` en cada PR y publica un canal de vista previa.
- Plan Blaze no es necesario para la landing. Si el proyecto ya está en Blaze por la app, la alerta de presupuesto (US$5) cubre todo.

## Calidad

- `eslint` + `prettier` + `tsc --noEmit`.
- Prueba de humo con Playwright: cargan las páginas, el botón principal apunta a la URL correcta según el modo, el formulario muestra errores y confirma el envío (contra el emulador de Firestore).
