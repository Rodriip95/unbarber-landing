import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { Tag } from "@/components/Tag";
import { ModeCard } from "@/components/ModeCard";
import { FeatureList } from "@/components/FeatureList";
import { FAQ } from "@/components/FAQ";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { ClientesCta } from "@/components/RegistroLink";
import { StickyCta } from "@/components/StickyCta";
import { WaitlistForm } from "@/components/WaitlistForm";
import { ButtonLink } from "@/components/Button";
import { config } from "@/lib/config";
import { clientes as c } from "@/content/clientes";

export default function ClientesPage() {
  return (
    <>
      <Header link={{ href: "/barberos", label: "¿Sos barbero?" }} />
      <main>
        <section className="bg-white">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 py-10 md:grid-cols-[1.3fr_1fr] md:py-20">
            <div>
              <Tag>✂️ {config.zonaPiloto}</Tag>
              <h1 className="mt-5 font-display text-[40px] uppercase leading-[0.95] md:text-[80px]">{c.hero.title}</h1>
              <p className="mt-5 max-w-xl text-lg font-medium md:text-[22px]">{c.hero.subtitle}</p>
              <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
                <ClientesCta ubicacion="hero" className="w-full md:w-auto" />
                <ButtonLink href="/barberos" variant="secondary">
                  ¿Sos barbero?
                </ButtonLink>
              </div>
            </div>
            <PhotoPlaceholder label="Foto de un corte en una barbería de la zona · pendiente" className="aspect-[4/5] w-full" />
          </div>
        </section>

        <Section title="Dos formas de usarla" bg="blue">
          <div className="grid gap-6 md:grid-cols-2">
            {c.modos.map((m) => (
              <ModeCard key={m.title} {...m} />
            ))}
          </div>
        </Section>

        <Section title="Por qué confiar">
          <FeatureList items={c.confianza} />
        </Section>

        <Section id="zona" title="Dónde estamos" bg="gray">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-lg">{c.zonaTexto}</p>
              <PhotoPlaceholder label={`Mapa de ${config.zonaPiloto} · pendiente`} className="aspect-video w-full" />
            </div>
            <WaitlistForm />
          </div>
        </Section>

        <Section id="faq" title="Preguntas frecuentes">
          <FAQ items={c.faq} />
        </Section>

        <section className="border-t-2 border-ink bg-blue text-white">
          <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24">
            <h2 className="font-display text-[32px] uppercase leading-none md:text-6xl">{c.cierre}</h2>
            <div className="mt-8 [&>a]:bg-white! [&>a]:text-ink!">
              <ClientesCta ubicacion="cierre" />
            </div>
          </div>
        </section>
      </main>
      <StickyCta>
        <ClientesCta ubicacion="barra_fija" />
      </StickyCta>
    </>
  );
}
