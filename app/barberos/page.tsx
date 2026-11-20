import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { Tag } from "@/components/Tag";
import { StepCard } from "@/components/StepCard";
import { FeatureList } from "@/components/FeatureList";
import { FAQ } from "@/components/FAQ";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { RegistroLink } from "@/components/RegistroLink";
import { StickyCta } from "@/components/StickyCta";
import { MembershipNote, MembershipAnswer } from "@/components/Membership";
import { PreregistroForm } from "@/components/PreregistroForm";
import { config } from "@/lib/config";
import { barberos as c } from "@/content/barberos";

export const metadata: Metadata = {
  title: "Unbarber para barberos · Clientes de tu zona",
  description: "Registrate gratis y recibí clientes cerca cuando estás disponible.",
  alternates: { canonical: "/barberos" },
};

export default function BarberosPage() {
  const faqs = [{ id: "faq-precio", q: "¿Cuánto cuesta?", a: <MembershipAnswer /> }, ...c.faq];
  return (
    <>
      <Header link={{ href: "/", label: "¿Buscás barbero?" }} />
      <main>
        <section className="bg-white">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 py-10 md:grid-cols-[1.3fr_1fr] md:py-20">
            <div>
              <Tag>💈 Para barberos · {config.zonaPiloto}</Tag>
              <h1 className="mt-5 font-display text-[40px] uppercase leading-[0.95] md:text-[80px]">{c.hero.title}</h1>
              <p className="mt-5 max-w-xl text-lg font-medium md:text-[22px]">{c.hero.subtitle}</p>
              <div className="mt-8 space-y-3">
                <RegistroLink ubicacion="hero" className="w-full md:w-auto" />
                <MembershipNote className="max-w-md text-gray-text" />
              </div>
            </div>
            <PhotoPlaceholder label="Foto de un barbero de la zona · pendiente" className="aspect-[4/5] w-full" />
          </div>
        </section>

        <Section title="Cómo funciona" bg="red">
          <ol className="grid gap-4 md:grid-cols-3">
            {c.pasos.map((p, i) => (
              <StepCard key={p.title} n={i + 1} {...p} />
            ))}
          </ol>
        </Section>

        <Section title="Lo que ganás">
          <FeatureList items={c.beneficios} />
        </Section>

        <Section title="Reglas de la comunidad" bg="gray">
          <ul className="grid gap-3 text-lg md:max-w-3xl">
            {c.reglas.map((r) => (
              <li key={r} className="border-2 border-ink bg-white px-4 py-3">
                {r}
              </li>
            ))}
          </ul>
        </Section>

        {config.registroMode === "preregistro" && (
          <Section id="preregistro" title="Sumate" bg="red">
            <PreregistroForm />
          </Section>
        )}

        <Section id="faq" title="Preguntas frecuentes">
          <FAQ items={faqs} />
        </Section>

        <section className="border-t-2 border-ink bg-red text-white">
          <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24">
            <h2 className="font-display text-[32px] uppercase leading-none md:text-6xl">{c.cierre}</h2>
            <div className="mt-8 [&>a]:bg-white! [&>a]:text-ink!">
              <RegistroLink ubicacion="cierre" />
            </div>
          </div>
        </section>
      </main>
      <StickyCta>
        <RegistroLink ubicacion="barra_fija" />
      </StickyCta>
    </>
  );
}
