// Textos de /barberos (docs/specs/02-contenido.md). Voseo, sin signos de exclamación.
// La pregunta "¿Cuánto cuesta?" se arma en components/Membership.tsx con Remote Config.
import type { Faq } from "@/components/FAQ";
import type { Feature } from "@/components/FeatureList";
import { config } from "@/lib/config";

export const barberos = {
  hero: {
    title: "Clientes de tu zona, cuando vos estás disponible.",
    subtitle:
      "Activás “Disponible ahora” y te llegan pedidos de gente que está cerca. Turnos, agenda y tus clientes en un solo lugar.",
  },
  pasos: [
    { title: "Armás tu perfil", text: "Fotos de tus cortes, servicios, precios y horarios." },
    { title: "Activás Disponible ahora", text: "Cuando tenés un hueco, lo prendés." },
    { title: "Recibís solicitudes", text: "Aceptás o pasás. Coordinás por WhatsApp." },
  ],
  beneficios: [
    { emoji: "✂️", title: "Clientes nuevos en tus horarios libres", text: "Los domingos y los huecos de la tarde también cuentan." },
    { emoji: "📅", title: "Agenda", text: "Los turnos de la app, los de AHORA y los que cargás a mano, en un mismo lugar." },
    { title: "Mis Clientes", text: "Quién vino, cuándo y qué se hizo." },
    { title: "Reputación", text: "Las calificaciones te siguen y te diferencian." },
  ] satisfies Feature[],
  reglas: [
    "Los clientes entran con su cuenta de Google y su teléfono.",
    "Vos calificás a cada cliente después del corte. Los que faltan sin avisar quedan marcados.",
    "Los barberos también son calificados: ambiente, servicio y trato.",
  ],
  faq: [
    { q: "¿Cómo pago la membresía?", a: "Con Mercado Pago. Recibís la factura por mail." },
    {
      q: "¿Me puedo arrepentir?",
      a: "Sí. Tenés 10 días corridos desde el pago para pedir la devolución desde el Botón de arrepentimiento, al pie de esta página.",
    },
    { q: "¿Cómo me contactan los clientes?", a: "Por WhatsApp, desde tu perfil. No hay chat dentro de la app." },
    { q: "¿Qué pasa si un cliente no viene?", a: "Lo calificás y queda en su reputación. Los demás barberos lo ven." },
    { q: "¿Dónde funciona?", a: `Por ahora en ${config.zonaPiloto}. Después sumamos más barrios.` },
  ] satisfies Faq[],
  cierre: "Tu próximo cliente está a pocas cuadras.",
};
