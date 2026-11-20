# Tasks · Landing

Los IDs `LAN-01` a `LAN-09` son los del backlog del documento maestro; las tareas nuevas siguen desde `LAN-10`. Prioridad: P0 bloquea la fecha, P1 importante, P2 puede esperar.

Estado: `[ ]` pendiente · `[~]` en curso · `[x]` hecha · `[!]` bloqueada (dice por qué).

---

## Fase 0 · Decisiones de Rodri (antes del 15 dic 2026)

Sin esto no se puede publicar contenido final. El código puede avanzar con marcadores `[ ]`.

- [x] **NEG-01** Precio de la membresía: $20.000, pago único, Mercado Pago, promo 100 % por Remote Config.
- [x] **LAN-31** Alcance de la promo: vale para quien se registra mientras está vigente y la conserva.
- [!] **NEG-02** Duración de la prueba (días o cantidad de clientes). *Bloquea LAN-04.*
- [!] **MKT-01** Zona piloto y lista de barrios. *Bloquea LAN-02, LAN-06, LAN-09.*
- [!] **NEG-03** Titular legal (persona o SAS) y CUIT. *Bloquea LAN-07.*
- [ ] **LAN-10** Confirmar si hay membresía fundador y cuántos lugares. *P1.*

## Fase 1 · Fundaciones (23 nov a 20 dic 2026)

- [ ] **LAN-01** Comprar dominio y configurar hosting · P0
  - [ ] Comprar `unbarber.com.ar` en NIC Argentina (y evaluar `unbarber.com`).
  - [ ] Crear proyecto de Firebase (compartido con la app) y el sitio de hosting `landing`.
  - [ ] Conectar `unbarber.com.ar` y `www` → `landing`; `app.` queda para la app.
  - *Terminado cuando*: `https://unbarber.com.ar` muestra una página "Muy pronto" con SSL.
- [~] **LAN-11** Crear el repositorio y el esqueleto · P0 · *esqueleto hecho; falta el repo en GitHub*
  - [ ] Next.js + TypeScript + Tailwind con `output: 'export'`.
  - [ ] ESLint, Prettier, `tsc`, `.env.example`, `firebase.json`.
  - [ ] Estructura de carpetas de [04-tecnica.md](docs/specs/04-tecnica.md).
  - *Terminado cuando*: `npm run build` genera `/out` y `firebase deploy` lo publica.
- [x] **LAN-12** Tokens y componentes base V2 · P0
  - [ ] Colores, bordes, sombras y fuentes en `tailwind.config.ts`.
  - [ ] `Button`, `Tag`, `Header` con franja del poste, `Footer`, `FAQ`.
  - *Terminado cuando*: una página `/_kit` (no indexada) muestra todos los componentes como en el canvas V2.
- [ ] **LAN-02** Textos de `/barberos` · P0
  - [ ] Partir de [02-contenido.md](docs/specs/02-contenido.md) y completar zona.
  - [ ] Revisión de Rodri.
  - *Terminado cuando*: textos aprobados en `content/barberos.ts`.
- [ ] **LAN-13** Maqueta de `/barberos` móvil y escritorio en el canvas (DIS-05) · P0

## Fase 2 · `/barberos` en línea (hasta el 11 ene 2027)

- [ ] **LAN-03** Diseño y desarrollo de `/barberos` · P0
  - [ ] Hero, Cómo funciona, Lo que ganás, Reglas, Membresía fundador (si aplica), FAQ, Cierre.
  - [ ] Barra fija con el botón en móvil.
  - [ ] Imagen Open Graph.
  - *Terminado cuando*: Lighthouse móvil ≥ 90 en las 4 categorías y Rodri la aprueba en el canal de vista previa.
- [ ] **LAN-04** Preguntas frecuentes con la membresía informada · P0 · *depende de NEG-01, NEG-02*
  - *Terminado cuando*: cumple la sección 1 de [05-legal.md](docs/specs/05-legal.md).
- [ ] **LAN-14** Destino de "Registrate gratis" · P0
  - [ ] Coordinar con el proyecto App si el alta de barbero estará lista el 11 ene.
  - [ ] Si está: link a `app.unbarber.com.ar/registro?rol=barbero` con UTM.
  - [ ] Si no: formulario de pre-registro → `preregistros_barberos` (`REGISTRO_MODE=preregistro`).
  - *Terminado cuando*: un registro de prueba llega a la app o a Firestore con sus UTM.
- [ ] **LAN-15** Reglas de Firestore y App Check para formularios · P0
  - *Terminado cuando*: con el emulador, un alta válida pasa y una con campos de más, sin consentimiento o desde fuera del sitio se rechaza.
- [ ] **LAN-05** Analítica y píxel de Meta · P0
  - [ ] GA4 y píxel cargados solo con consentimiento (LAN-16).
  - [ ] Eventos de [04-tecnica.md](docs/specs/04-tecnica.md#analítica) y UTM guardados.
  - *Terminado cuando*: los eventos aparecen en DebugView de GA4 y en el Administrador de eventos de Meta.
- [ ] **LAN-16** Aviso de cookies · P0
- [ ] **LAN-17** Política de Privacidad provisoria publicada (antes de juntar datos) · P0 · *depende de NEG-03*
- [ ] **LAN-18** Pie con datos del titular y botón de arrepentimiento · P0 · *depende de NEG-03*
- [ ] **LAN-19** SEO base: metadata, `sitemap.xml`, `robots.txt`, Search Console · P1
- [ ] **LAN-20** Prueba de humo con Playwright y CI en GitHub Actions · P1
- [ ] **LAN-21** QR a `/barberos?utm_source=visita` para el kit de visita (MKT-03) · P1
- [ ] **Publicar `/barberos`** · 11 ene 2027

## Fase 3 · `/` clientes con lista de espera (hasta el 1 feb 2027)

- [ ] **LAN-22** Textos de `/` · P0
- [ ] **LAN-23** Maqueta de `/` móvil y escritorio en el canvas (DIS-06) · P1
- [ ] **LAN-06** `/` con lista de espera por zona · P1
  - [ ] Hero, Dos formas de usarla, Por qué confiar, Dónde estamos, FAQ.
  - [ ] `WaitlistForm` → `lista_espera` con consentimiento y versión de la política.
  - [ ] Mapa estático de la zona piloto.
  - *Terminado cuando*: un alta de prueba queda en Firestore y dispara `lista_espera_alta`.
- [ ] **LAN-08** Fotos reales de barberos de la zona · P1
  - [ ] Pedir permiso de uso por escrito a cada barbero.
  - [ ] Reemplazar los marcadores grises.
- [ ] **LAN-24** Exportar la lista de espera (CSV desde la consola o script admin) para la campaña de lanzamiento · P1
- [ ] **Publicar `/`** · 1 feb 2027

## Fase 4 · Piloto (hasta el 1 mar 2027)

- [ ] **LAN-07** Páginas legales: Términos, Privacidad final y `/arrepentimiento` · P0 · *depende de NEG-03, NEG-04 y revisión del abogado*
  - *Terminado cuando*: cumple las secciones 2 a 6 de [05-legal.md](docs/specs/05-legal.md).
- [ ] **LAN-25** Pasar `/` a "Buscar barbero" en la zona piloto (`CLIENTES_MODE=abierto`, `ZONAS_ABIERTAS`) · P0
- [ ] **LAN-26** Avisar a la lista de espera de la zona piloto (email o WhatsApp manual) · P1
- [ ] **LAN-27** Revisar métricas de la primera semana con Marketing y ajustar textos · P1

## Fase 5 · Crecimiento (may a jun 2027)

- [ ] **LAN-09** Páginas por barrio para SEO (`/zona/[barrio]`) · P2
- [ ] **LAN-28** Datos estructurados `FAQPage` y `LocalBusiness` por barrio · P2
- [ ] **LAN-29** Prueba A/B del título del hero de `/barberos` · P2
- [ ] **LAN-30** Sumar barrios de la segunda zona · P2

---

## Dependencias con otros proyectos

| Necesito de | Qué | Para cuándo |
|---|---|---|
| App | Alta de barbero funcionando en `app.unbarber.com.ar/registro?rol=barbero`, leyendo UTM | 11 ene 2027 (si no, plan B: pre-registro) |
| App | Mismo proyecto de Firebase: reglas de Firestore combinadas | 20 dic 2026 |
| Diseño | Logo (DIS-01), tokens V2 (DIS-02), maquetas (DIS-05, DIS-06) | dic 2026 / ene 2027 |
| Marketing | Zona piloto (MKT-01), píxel (MKT-04), kit de visita (MKT-03) | dic 2026 |
| Negocio | Precio, prueba, titular, Términos (NEG-01 a NEG-04) | 15 dic 2026 |
