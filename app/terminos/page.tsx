import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { config } from "@/lib/config";

export const metadata: Metadata = { title: "Términos y condiciones · Unbarber", robots: { index: false } };

// Texto base: pestaña "Términos y condiciones" del documento maestro (LAN-07).
export default function Terminos() {
  return (
    <LegalPage title="Términos y condiciones" version={config.versionTerminos}>
      <p>
        Unbarber es una plataforma de {config.titular} (CUIT {config.cuit}) que conecta a clientes con barberos
        independientes. Unbarber no presta servicios de barbería ni cobra los cortes: actúa como intermediario.
      </p>
      <h2>Membresía de acceso para barberos</h2>
      <p>
        El registro no tiene costo. Para aparecer en búsquedas y recibir solicitudes, el barbero paga una membresía de
        acceso de pago único, cuyo precio y promociones vigentes se informan en unbarber.com.ar/barberos antes de
        cualquier cobro.
      </p>
      <h2>Arrepentimiento</h2>
      <p>
        Podés revocar la compra de la membresía dentro de los 10 días corridos desde el pago, desde el Botón de
        arrepentimiento, sin costo ni explicación.
      </p>
      <h2>Pendiente</h2>
      <p>Resto de las cláusulas: copiar desde el documento maestro una vez revisadas.</p>
    </LegalPage>
  );
}
