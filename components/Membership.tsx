"use client";

// Textos de la membresía armados con los valores de Remote Config.
// Requisito legal: el precio normal siempre se muestra, también durante la promo.
import { formatArs, formatFecha, useMembership, type Membership } from "@/lib/membership";

function promoTexto(m: Membership) {
  const hasta = m.promoUntil ? ` hasta el ${formatFecha(m.promoUntil)}` : "";
  if (m.promoPercent >= 100) return `hoy 100 % bonificada por lanzamiento${hasta}`;
  if (m.promoPercent > 0) {
    const final = Math.round(m.priceArs * (1 - m.promoPercent / 100));
    return `hoy con ${m.promoPercent} % de descuento${hasta}: pagás ${formatArs(final)}`;
  }
  return "";
}

/** Línea corta que va debajo de cada "Registrate gratis". */
export function MembershipNote({ className = "" }: { className?: string }) {
  const m = useMembership();
  const promo = promoTexto(m);
  return (
    <p className={`text-sm ${className}`}>
      Registro sin cargo. Después, membresía de acceso de pago único de {formatArs(m.priceArs)}
      {promo && ` (${promo})`}.{" "}
      <a href="#faq-precio" className="font-bold underline underline-offset-2">
        Ver detalle
      </a>
    </p>
  );
}

/** Respuesta completa de "¿Cuánto cuesta?". */
export function MembershipAnswer() {
  const m = useMembership();
  const promo = promoTexto(m);
  return (
    <div className="space-y-3">
      <p>
        Registrarte no cuesta nada. Para aparecer en búsquedas y recibir alertas de clientes pagás una{" "}
        <strong className="text-ink">membresía de acceso de {formatArs(m.priceArs)}, en un solo pago</strong>. No es
        un abono mensual.
      </p>
      {promo && <p className="text-ink">Promoción de lanzamiento: {promo}.</p>}
      <p>
        Si la promoción cambia, lo vas a ver acá y te avisamos antes de cobrarte cualquier monto. Si no pagás la
        membresía, tu cuenta y tu perfil quedan guardados, pero dejás de recibir clientes.
      </p>
    </div>
  );
}
