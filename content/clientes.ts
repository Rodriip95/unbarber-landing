// Textos de / (clientes) (docs/specs/02-contenido.md).
import type { Faq } from "@/components/FAQ";
import type { Feature } from "@/components/FeatureList";
import { config } from "@/lib/config";

export const clientes = {
  hero: {
    title: "Barberos verificados cerca tuyo. Hoy, también domingos.",
    subtitle: "Te cortás ahora con el que esté libre, o sacás turno con el que ya conocés.",
  },
  modos: [
    {
      tone: "red" as const,
      title: "Cortarme ahora",
      text: "Ves los barberos libres cerca, o avisás a toda la zona y te responde el primero.",
    },
    {
      tone: "blue" as const,
      title: "Sacar turno",
      text: "Elegís servicio, día y horario, o pedís “a coordinar” por WhatsApp.",
    },
  ],
  confianza: [
    { title: "Identidad verificada", text: "Cada barbero entra con su cuenta y su teléfono." },
    { title: "Portfolio real", text: "Fotos de sus cortes, no de stock." },
    { title: "Calificaciones de las dos partes", text: "Vos calificás al barbero y él te califica a vos." },
  ] satisfies Feature[],
  zonaTexto: `Arrancamos en ${config.zonaPiloto}. ¿Estás en otro barrio? Dejanos tu contacto y te avisamos cuando lleguemos.`,
  faq: [
    { q: "¿Cuánto cuesta?", a: "Para vos, nada. Pagás el corte directo al barbero, como siempre." },
    { q: "¿Cómo pago el corte?", a: "Directo al barbero. Unbarber no cobra el corte." },
    {
      q: "¿Necesito instalar algo?",
      a: "No. Funciona en el navegador del teléfono y la podés agregar a la pantalla de inicio.",
    },
    {
      q: "¿Qué pasa si no puedo ir?",
      a: "Avisale al barbero por WhatsApp. Las ausencias sin aviso cuentan en tu reputación.",
    },
  ] satisfies Faq[],
  cierre: "Tu barbero está más cerca de lo que pensás.",
};
