# Spec 05 · Legal

> Esto es un checklist de producto, no asesoramiento legal. Los textos finales de Términos y Privacidad los tiene que revisar un abogado antes del 1 de marzo de 2027.

## 1. Membresía informada (Lealtad Comercial y Defensa del Consumidor)

La campaña dice "Registrate gratis", y es cierto. Para que no induzca a error:

- [ ] La landing **nunca** dice "100 % gratis", "gratis para siempre" ni "sin costo" a secas.
- [ ] Debajo de cada botón "Registrate gratis" en `/barberos` hay una línea visible: "Registro y prueba sin cargo. Después, membresía de acceso de pago único." con enlace a la pregunta del precio.
- [ ] La pregunta "¿Cuánto cuesta?" dice el **precio en pesos**, que es un **pago único**, qué incluye, cuánto dura la prueba y qué pasa si no se paga.
- [ ] Con la promoción de Remote Config, se muestra **siempre el precio normal ($20.000)** y la promoción aparte, con su fecha de fin si la tiene.
- [ ] Si la promo baja o termina, no se cobra a nadie sin aviso previo con el monto. Definir si el 100 % queda para quienes se registraron durante la promo.
- [ ] Si hay membresía fundador, se dice cuántos lugares hay y el precio normal. Un contador de lugares solo se muestra si es real.
- [ ] Los Términos tienen la cláusula de membresía, prueba y arrepentimiento (NEG-04).

## 2. Botón de arrepentimiento (Res. 424/2020)

La membresía es una venta online a consumidores, así que:

- [ ] Enlace "Botón de arrepentimiento" visible en el pie de **todas** las páginas, sin tener que iniciar sesión.
- [ ] `/arrepentimiento`: formulario con nombre, email o WhatsApp con el que pagó y fecha de pago.
- [ ] Al enviarlo se muestra y se manda un **código de trámite** dentro de las 24 h.
- [ ] Plazo: 10 días corridos desde el pago (art. 34, Ley 24.240).
- [ ] Se guarda en Firestore (`arrepentimientos`) con las mismas reglas que la lista de espera.

## 3. Datos personales (Ley 25.326)

- [ ] Política de Privacidad publicada en `/privacidad` antes de juntar el primer dato.
- [ ] Cada formulario tiene una casilla **no marcada** de consentimiento con enlace a la Privacidad: "Acepto que Unbarber use estos datos para avisarme cuando abra en mi zona."
- [ ] Se guarda la versión de la política aceptada.
- [ ] Se pide lo mínimo: contacto y barrio. Nada de DNI ni dirección.
- [ ] Explicar cómo pedir acceso, rectificación o baja (email de contacto) y mencionar a la Agencia de Acceso a la Información Pública.
- [ ] Inscripción de la base de datos en el registro de la AAIP (a confirmar con el abogado).

## 4. Cookies y píxeles

- [ ] Aviso de cookies simple con "Aceptar" y "Solo necesarias".
- [ ] GA4 y el píxel de Meta **no se cargan** hasta aceptar.
- [ ] La Privacidad lista qué herramientas se usan y para qué.

## 5. Datos del titular

- [ ] En el pie: nombre o razón social del titular, CUIT y un medio de contacto (depende de NEG-03).
- [ ] Constancia de ARCA (Data Fiscal / QR de AFIP) en el pie, cuando el titular esté inscripto.

## 6. Términos y Condiciones

Base: pestaña "Términos y condiciones" del documento maestro. En la landing:

- [ ] Publicados en `/terminos` con fecha de versión.
- [ ] Rol de Unbarber como **intermediario**: no presta el servicio de barbería ni cobra los cortes.
- [ ] Membresía, prueba, arrepentimiento y baja.
- [ ] Reglas de la comunidad y calificaciones.
- [ ] Las exclusiones de responsabilidad no pueden contradecir la Ley 24.240 (cláusulas abusivas). Revisión del abogado.

## Bloqueos

| Falta | Bloquea | Decisión de |
|---|---|---|
| Titular legal y CUIT | Pie, Términos, Privacidad | Rodri (NEG-03) |
| Precio y prueba | FAQ del precio | Rodri (NEG-01, NEG-02) |
| Revisión del abogado | Publicar Términos y Privacidad | Rodri |
