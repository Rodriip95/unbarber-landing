import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Section, Title } from "@/components/Section";
import { Tag } from "@/components/Tag";
import { StepCard } from "@/components/StepCard";
import { FeatureList } from "@/components/FeatureList";
import { FAQ } from "@/components/FAQ";
import { Photo } from "@/components/Photo";
import { RegistroLink } from "@/components/RegistroLink";
import { StickyCta } from "@/components/StickyCta";
import { MembershipNote, MembershipAnswer } from "@/components/Membership";
import { PreregistroForm } from "@/components/PreregistroForm";
import { config } from "@/lib/config";
import { barberos as c } from "@/content/barberos";
import { fotos } from "@/content/fotos";

export const metadata: Metadata = {
  title: "Unbarber para barberos · Clientes de tu zona",
  description: "Registrate gratis y recibí clientes cerca cuando estás disponible.",
  alternates: { canonical: "/barberos" },
};

export default function BarberosPage() {
  const faqs = [{ id: "faq-precio", q: "¿Cuánto cuesta?", a: <MembershipAnswer /> }, ...c.faq];
  return (
    <>
      <Header />
      <main>
        <section className="bg-cream px-4 pb-6 md:px-10">
          <div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-2xl bg-ink text-cream md:grid-cols-[1fr_1.1fr]">
            <div className="flex flex-col justify-center px-6 py-10 md:px-12 md:py-16">
              <Tag dark>Para barberos · {config.zonaPiloto}</Tag>
              <Title as="h1" accent={c.hero.accent} dark className="mt-4 text-[40px] md:text-[60px]">
                {c.hero.title}
              </Title>
              <p className="mt-6 max-w-md text-sm text-cream/85 md:text-base">{c.hero.subtitle}</p>
              <div className="mt-8 space-y-3">
                <RegistroLink ubicacion="hero" variant="light">
                  Registrate gratis
                </RegistroLink>
                <MembershipNote className="max-w-md text-xs text-cream/70 [&_a]:text-peach" />
              </div>
            </div>
            <Photo foto={fotos.barberosHero} priority className="aspect-[4/3] rounded-none md:aspect-auto md:min-h-[520px] md:rounded-2xl" />
          </div>
        </section>

        <Section>
          <Tag>Cómo funciona</Tag>
          <Title accent="en tres pasos." className="mt-4 mb-10 text-[38px] md:text-[52px]">
            Empezás
          </Title>
          <ol className="grid gap-4 md:grid-cols-3">
            {c.pasos.map((p, i) => (
              <StepCard key={p.title} n={i + 1} {...p} />
            ))}
          </ol>
        </Section>

        <Section bg="dark">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Photo foto={fotos.barrio} className="aspect-[4/3]" />
            <div>
              <Tag dark>Lo que ganás</Tag>
              <Title accent="en un solo lugar." dark className="mt-4 mb-8 text-[38px] md:text-[52px]">
                Clientes, agenda y reputación
              </Title>
              <FeatureList items={c.beneficios} dark />
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-14">
            <div>
              <Tag>Reglas de la comunidad</Tag>
              <Title accent="de los dos lados." className="mt-4 text-[34px] md:text-[44px]">
                Respeto
              </Title>
            </div>
            <ul className="border-t border-line">
              {c.reglas.map((r) => (
                <li key={r} className="border-b border-line py-4 text-sm md:text-base">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {config.registroMode === "preregistro" && (
          <Section id="preregistro" className="pt-0 md:pt-0">
            <div className="grid gap-10 md:grid-cols-2 md:gap-14">
              <div>
                <Tag>Pre-registro</Tag>
                <Title accent="Sumate." className="mt-4 text-[38px] md:text-[52px]" />
              </div>
              <PreregistroForm />
            </div>
          </Section>
        )}

        <Section id="faq" className="pt-0 md:pt-0">
          <div className="grid gap-8 md:grid-cols-2 md:gap-14">
            <Title accent="barberos." className="text-[38px] md:text-[52px]">
              Preguntas de
            </Title>
            <FAQ items={faqs} />
          </div>
        </Section>

        <section className="bg-ink text-cream">
          <div className="mx-auto max-w-[1200px] px-4 py-16 md:px-10 md:py-24">
            <Title accent={c.cierre.accent} dark className="text-[38px] md:text-6xl">
              {c.cierre.title}
            </Title>
            <div className="mt-8">
              <RegistroLink ubicacion="cierre" variant="light">
                Registrate gratis
              </RegistroLink>
            </div>
          </div>
        </section>
      </main>
      <StickyCta>
        <RegistroLink ubicacion="barra_fija">Registrate gratis</RegistroLink>
      </StickyCta>
    </>
  );
}
