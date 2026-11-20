# Spec 02 · Contenido

Borrador de textos. Lo que está entre corchetes `[ ]` depende de una decisión pendiente y no se publica hasta tenerla.

## Reglas de tono

- Voseo, frases cortas, palabras de todos los días.
- **Sin signos de exclamación.** Sin mayúsculas para gritar (los títulos en mayúsculas son estilo tipográfico, no énfasis).
- Hechos en lugar de adjetivos: "a menos de 2 km", "también domingos", "identidad verificada".
- Emojis solo en etiquetas (💈 ✂️ 🪒 🧔 📅). Nunca en precios, pagos ni textos legales, y nunca en lugar de una palabra.
- Nunca: "100 % gratis", "gratis para siempre", "últimos lugares", "increíble", "no te lo pierdas".

---

## `/barberos`

### Hero
- Etiqueta: `💈 PARA BARBEROS · [ZONA PILOTO]`
- Título: **CLIENTES DE TU ZONA, CUANDO VOS ESTÁS DISPONIBLE.**
- Bajada: Activás "Disponible ahora" y te llegan pedidos de gente que está cerca. Turnos, agenda y tus clientes en un solo lugar.
- Botón principal: **REGISTRATE GRATIS**
- Debajo del botón, en chico: Registro sin cargo. Después, membresía de acceso de pago único de $20.000 (hoy 100 % bonificada por lanzamiento). [Ver detalle](#faq-precio)

### Cómo funciona
1. **Armás tu perfil.** Fotos de tus cortes, servicios, precios y horarios.
2. **Activás Disponible ahora.** Cuando tenés un hueco, lo prendés.
3. **Recibís solicitudes.** Aceptás o pasás. Coordinás por WhatsApp.

### Lo que ganás
- ✂️ **Clientes nuevos en tus horarios libres.** Los domingos y los huecos de la tarde también cuentan.
- 📅 **Agenda.** Los turnos de la app, los de AHORA y los que cargás a mano, en un mismo lugar.
- **Mis Clientes.** Quién vino, cuándo y qué se hizo.
- **Reputación.** Las calificaciones te siguen y te diferencian.

### Reglas de la comunidad
- Los clientes entran con su cuenta de Google y su teléfono.
- Vos calificás a cada cliente después del corte. Los que faltan sin avisar quedan marcados.
- Los barberos también son calificados: ambiente, servicio y trato.

### Membresía fundador (solo si se confirma)
- Título: **PRIMEROS [50] DE [ZONA]**
- Texto: Los primeros [50] barberos de [zona] que se suman pagan la membresía a [precio fundador] en lugar de [precio]. Cuando se completan los lugares, lo decimos acá.
- Regla: el número de lugares que quedan solo se muestra si es real y se actualiza solo. Si no, no se muestra.

### Preguntas frecuentes
- **¿Cuánto cuesta?** (`id="faq-precio"`, se arma con Remote Config en `components/Membership.tsx`)
  Registrarte no cuesta nada. Para aparecer en búsquedas y recibir alertas de clientes pagás una membresía de acceso de **$20.000, en un solo pago**. No es un abono mensual. Promoción de lanzamiento: hoy 100 % bonificada [hasta fecha]. La promoción vale para quien se registra mientras está vigente: la conserva aunque después termine (decisión de Rodri, 20 nov 2026). Si no pagás la membresía, tu cuenta y tu perfil quedan guardados, pero dejás de recibir clientes.
- **¿Cómo pago la membresía?** Con Mercado Pago. Recibís la factura por mail.
- **¿Me puedo arrepentir?** Sí. Tenés 10 días corridos desde el pago para pedir la devolución desde [Botón de arrepentimiento](/arrepentimiento).
- **¿Tengo que tener local?** [Pendiente: decisión sobre barberos a domicilio y sin local.]
- **¿Cómo me contactan los clientes?** Por WhatsApp, desde tu perfil. No hay chat dentro de la app.
- **¿Qué pasa si un cliente no viene?** Lo calificás y queda en su reputación. Los demás barberos lo ven.
- **¿Dónde funciona?** Por ahora en [zona piloto]. Después sumamos más barrios.

### Cierre
- Título: **TU PRÓXIMO CLIENTE ESTÁ A [2] CUADRAS.**
- Botón: **REGISTRATE GRATIS**

---

## `/` (clientes)

### Hero
- Etiqueta: `✂️ [ZONA PILOTO]`
- Título: **BARBEROS VERIFICADOS CERCA TUYO. HOY, TAMBIÉN DOMINGOS.**
- Bajada: Te cortás ahora con el que esté libre, o sacás turno con el que ya conocés.
- Botón (feb): **AVISAME CUANDO ESTÉ EN MI ZONA**
- Botón (desde 1 mar, zona piloto): **BUSCAR BARBERO**
- Enlace secundario: ¿Sos barbero? → `/barberos`

### Dos formas de usarla
- Tarjeta roja · **CORTARME AHORA**: Ves los barberos libres cerca, o avisás a toda la zona y te responde el primero.
- Tarjeta azul · **SACAR TURNO**: Elegís servicio, día y horario, o pedís "a coordinar" por WhatsApp.

### Por qué confiar
- **Identidad verificada.** Cada barbero entra con su cuenta y su teléfono.
- **Portfolio real.** Fotos de sus cortes, no de stock.
- **Calificaciones de las dos partes.** Vos calificás al barbero y él te califica a vos.

### Zona disponible
- Título: **DÓNDE ESTAMOS**
- Texto: Arrancamos en [zona]. ¿Estás en otro barrio? Dejanos tu contacto y te avisamos cuando lleguemos.
- Formulario: email o WhatsApp · barrio · casilla de consentimiento (ver [05-legal.md](05-legal.md)).
- Confirmación: Listo. Te avisamos cuando abra en [barrio].

### Preguntas frecuentes
- **¿Cuánto cuesta?** Para vos, nada. Pagás el corte directo al barbero, como siempre.
- **¿Cómo pago el corte?** Directo al barbero. Unbarber no cobra el corte.
- **¿Necesito instalar algo?** No. Funciona en el navegador del teléfono y la podés agregar a la pantalla de inicio.
- **¿Qué pasa si no puedo ir?** Avisale al barbero por WhatsApp. Las ausencias sin aviso cuentan en tu reputación.

---

## Pie de página (todas las páginas)

Unbarber · [Titular legal] · CUIT [número] · [Términos](/terminos) · [Privacidad](/privacidad) · [Botón de arrepentimiento](/arrepentimiento) · Instagram · Contacto por WhatsApp

El botón de arrepentimiento tiene que verse en el pie de todas las páginas (Res. 424/2020).

## SEO: títulos y descripciones

| Ruta | `<title>` | `description` |
|---|---|---|
| `/` | Unbarber · Barberos cerca tuyo, hoy también domingos | Barberos verificados en [zona]. Cortate ahora o sacá turno. |
| `/barberos` | Unbarber para barberos · Clientes de tu zona | Registrate gratis y recibí clientes cerca cuando estás disponible. |
| `/zona/[barrio]` | Barbería abierta hoy en [barrio] · Unbarber | Barberos disponibles ahora en [barrio], también domingos. |
