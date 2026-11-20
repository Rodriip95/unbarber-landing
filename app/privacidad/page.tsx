import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { config } from "@/lib/config";

export const metadata: Metadata = { title: "Política de Privacidad · Unbarber", robots: { index: false } };

export default function Privacidad() {
  return (
    <LegalPage title="Política de Privacidad" version={config.versionPrivacidad}>
      <p>
        Responsable de los datos: {config.titular}, CUIT {config.cuit}. Contacto:{" "}
        <a className="underline" href={`mailto:${config.contactoEmail}`}>
          {config.contactoEmail}
        </a>
        .
      </p>
      <h2>Qué datos juntamos en este sitio</h2>
      <ul>
        <li>Lista de espera: email o WhatsApp y barrio, para avisarte cuando Unbarber llegue a tu zona.</li>
        <li>Pre-registro de barberos: nombre, WhatsApp, barrio e Instagram, para completar tu alta.</li>
        <li>Botón de arrepentimiento: nombre, contacto y fecha de pago, para tramitar la devolución.</li>
        <li>Si aceptás cookies: datos de navegación con Google Analytics y el píxel de Meta, para medir campañas.</li>
      </ul>
      <h2>Tus derechos</h2>
      <p>
        Podés pedir acceso, corrección o baja de tus datos escribiendo a {config.contactoEmail} (Ley 25.326). La
        Agencia de Acceso a la Información Pública es el órgano de control.
      </p>
    </LegalPage>
  );
}
