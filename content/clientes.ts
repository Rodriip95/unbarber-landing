// Textos de / (docs/specs/02-contenido.md, actualizados al diseño V3). Voseo, sin signos de exclamación.
import type { Faq } from "@/components/FAQ";
import type { Feature } from "@/components/FeatureList";
import { config } from "@/lib/config";

export const home = {
  hero: {
    title: "Tu próximo nuevo cliente",
    accent: "a la vuelta de la esquina",
    subtitle: "Cuando se libera un sillón, alguien cerca está buscando un corte.",
  },
  sobre: {
    lead: "Unbarber conecta a quienes cortan el pelo con",
    accent: "los vecinos que buscan un corte.",
    rest: "Desde el celu podés ofrecer un turno libre, cortarte hoy o reservar para otro día.",
  },
  barberos: {
    title: "Que te encuentren",
    accent: "cuando tenés lugar.",
    text: "Activá «Disponible ahora» cuando te quede un hueco. Los vecinos que buscan un corte pueden encontrarte y vos decidís qué pedidos aceptar.",
    items: [
      { title: "Tu agenda", text: "Turnos reservados, pedidos del día y citas que cargás a mano, juntos." },
      { title: "Tus clientes", text: "Recordá quién vino, cuándo volvió y qué corte eligió." },
      { title: "Tu reputación", text: "Mostrá tus trabajos y dejá que las calificaciones hablen por vos." },
    ] satisfies Feature[],
  },
  clientes: {
    title: "Tu próximo barbero favorito",
    accent: "puede estar muy cerca.",
    text: "Conocé a los barberos de tu zona por sus cortes. Cada perfil tiene identidad verificada, fotos de sus trabajos y calificaciones de la comunidad.",
    items: [
      { title: "Cortate hoy", text: "Mirá quién está libre o avisale a la zona que buscás un corte." },
      { title: "Sacá turno", text: "Elegí servicio, día y horario, o coordiná por WhatsApp." },
    ] satisfies Feature[],
  },
  espera: {
    title: "¿Llegamos",
    accent: "a tu barrio?",
    text: `Dejanos tu contacto y te avisamos cuando Unbarber abra en tu zona. Arrancamos en ${config.zonaPiloto}.`,
  },
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
};
