# Spec 01 · Producto

## Objetivo

Conseguir los barberos y clientes de la zona piloto antes del 1 de marzo de 2027, sin gastar en infraestructura. Primero barberos (sin barberos no hay nada que ofrecer) y después clientes.

## Públicos

| Público | Qué le importa | Qué tiene que entender en 5 segundos |
|---|---|---|
| Barbero de la zona piloto | Llenar horarios libres, clientes que cumplen, no perder tiempo | "Me llegan clientes de mi zona cuando yo estoy libre, y registrarme es gratis" |
| Cliente de la zona piloto | Cortarse hoy (incluso domingo) o sacar turno sin vueltas | "Hay barberos verificados cerca mío y puedo cortarme hoy" |

## Mensaje: serio, no promocional

La landing muestra que Unbarber es para gente que cumple con hechos, no con adjetivos.

- Títulos concretos: "Barberos verificados cerca tuyo. Hoy, también domingos." y no "La mejor app de barberías".
- Reglas a la vista: identidad verificada, calificaciones de las dos partes, reputación del cliente.
- Fotos reales de barberos de la zona.
- **Prohibido**: contadores falsos, "últimos lugares", pop-ups, cuentas regresivas inventadas, "100 % gratis".

## Páginas y alcance

### `/barberos` (sale el 11 ene 2027)

Secciones en orden:

1. **Hero**: "Clientes de tu zona, cuando vos estás disponible." · botón "Registrate gratis".
2. **Cómo funciona** en 3 pasos: armás tu perfil, activás Disponible ahora, recibís solicitudes.
3. **Lo que ganás**: clientes nuevos en tus horarios libres, agenda, Mis Clientes, reputación.
4. **Reglas de la comunidad**: clientes verificados y calificados.
5. **Membresía fundador**: los primeros 50 barberos de la zona pagan menos (solo si Rodri lo confirma).
6. **Preguntas frecuentes**, incluida "¿Cuánto cuesta?" con la membresía informada.
7. **Cierre** con el botón de registro.

### `/` clientes (sale el 1 feb 2027)

1. **Hero**: "Barberos verificados cerca tuyo. Hoy, también domingos."
2. **Dos formas de usarla**: AHORA (rojo) y SACAR TURNO (azul).
3. **Por qué confiar**: barberos verificados, portfolio, calificaciones reales.
4. **Zona disponible**: mapa simple de la zona piloto y formulario de lista de espera para otras zonas.
5. **Preguntas frecuentes** y botón final.
6. Enlace visible a `/barberos` ("¿Sos barbero?").

### Legales (antes del 1 mar 2027)

`/terminos`, `/privacidad`, `/arrepentimiento`. Ver [05-legal.md](05-legal.md).

### SEO local (may a jun 2027)

`/zona/[barrio]`: una página por barrio con barberos activos, horarios típicos y "abierto domingo".

## Flujos

### Barbero: registro

```
Anuncio / QR de visita / búsqueda
  → /barberos?utm_source=…
  → "Registrate gratis"
  → app.unbarber.com.ar/registro?rol=barbero&utm_…   (si el alta de la app está lista)
  → o formulario de pre-registro en la landing        (plan B, ver abajo)
```

**Dependencia con la app**: el 11 de enero la app tiene que tener el alta de barbero funcionando (login con Google, perfil, fotos). Si no llega, la landing usa un **pre-registro** propio: nombre, WhatsApp, barrio, Instagram y aceptación de Términos. Se guarda en Firestore (`preregistros_barberos`) y el equipo lo contacta. Cuando la app abra, se les manda el link de alta.

### Cliente: lista de espera (1 feb a 28 feb)

```
/ → "Avisame cuando esté en mi zona"
  → formulario: email o WhatsApp, barrio (lista + "otro"), consentimiento
  → Firestore `lista_espera`
  → mensaje: "Listo. Te avisamos cuando abra en [barrio]."
```

### Cliente: desde el piloto (1 mar)

Si el barrio está en la zona piloto, el botón principal pasa a "Buscar barbero" → `app.unbarber.com.ar`. Para los demás barrios queda la lista de espera. Se controla con una variable de configuración, sin rehacer la página.

## Métricas

| Métrica | Dónde se mide | Meta |
|---|---|---|
| Visitas a `/barberos` por canal | GA4 + UTM | — |
| Clics en "Registrate gratis" | Evento `click_registro_barbero` | — |
| Barberos registrados (app o pre-registro) | Firestore / app | 50 al 1 mar 2027 |
| Costo por registro de barbero | Píxel de Meta + gasto | A medir en las 2 primeras semanas |
| Anotados en lista de espera | Firestore | 500 antes del lanzamiento |
| Tasa de conversión de cada página | GA4 | > 5 % en `/barberos` (referencia) |

Eventos de analítica: ver [04-tecnica.md](04-tecnica.md#analítica).

## Fuera de alcance

- Blog, chat, login dentro de la landing, buscador de barberos (eso es la app).
- Cobro de la membresía (se hace por link de Mercado Pago desde la app o por WhatsApp).
- Inglés u otros idiomas.

## Abierto

| Tema | Responsable | Bloquea |
|---|---|---|
| Zona piloto | Rodri (MKT-01) | Títulos, mapa, SEO, barrios del formulario |
| Precio de membresía | Resuelto: $20.000, pago único, promo 100 % por Remote Config | — |
| Alcance de la promo | Resuelto: vale para quien se registra durante la promo | — |
| Duración de la prueba | Rodri (NEG-02) | FAQ y sección de membresía |
| ¿Hay membresía fundador? | Rodri | Sección 5 de `/barberos` |
| Fotos reales | Marketing (LAN-08) | Hero y "Por qué confiar" |
