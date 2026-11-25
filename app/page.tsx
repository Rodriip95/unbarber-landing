import { Header } from "@/components/Header";
import { Section, Title } from "@/components/Section";
import { Tag } from "@/components/Tag";
import { FeatureList } from "@/components/FeatureList";
import { FAQ } from "@/components/FAQ";
import { Photo } from "@/components/Photo";
import { ClientesCta, RegistroLink } from "@/components/RegistroLink";
import { MembershipNote } from "@/components/Membership";
import { StickyCta } from "@/components/StickyCta";
import { WaitlistForm } from "@/components/WaitlistForm";
import { ButtonLink } from "@/components/Button";
import { home as c } from "@/content/clientes";
import { fotos } from "@/content/fotos";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero: tarjeta verde con la foto a la derecha */}
        <section className="bg-cream px-4 pb-6 md:px-10">
          <div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-2xl bg-ink text-cream md:grid-cols-[1fr_1.1fr]">
            <div className="flex flex-col justify-center px-6 py-10 md:px-12 md:py-16">
              <Title as="h1" accent={c.hero.accent} dark block className="text-[44px] md:text-[68px]">
                {c.hero.title}
              </Title>
              <p className="mt-6 max-w-sm text-sm text-cream/85 md:text-base">{c.hero.subtitle}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/barberos" variant="light">
                  Soy barbero
                </ButtonLink>
                <ButtonLink href="#clientes" variant="outline">
                  Busco un buen barbero
                </ButtonLink>
              </div>
            </div>
            <Photo foto={fotos.hero} priority className="aspect-[4/3] rounded-none md:aspect-auto md:min-h-[520px] md:rounded-2xl" />
          </div>
        </section>

        <Section id="sobre">
          <div className="grid gap-4 md:grid-cols-[1fr_2fr] md:gap-10">
            <Tag>Sobre Unbarber</Tag>
            <p className="font-display text-[26px] leading-[1.2] md:text-[34px]">
              {c.sobre.lead} <em className="text-red">{c.sobre.accent}</em> {c.sobre.rest}
            </p>
          </div>
        </Section>

        <Section id="barberos" className="pt-0 md:pt-0">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Photo foto={fotos.barrio} className="aspect-[4/3] md:aspect-[5/4]" />
            <div>
              <Tag>Para barberos</Tag>
              <Title accent={c.barberos.accent} className="mt-4 text-[38px] md:text-[52px]">
                {c.barberos.title}
              </Title>
              <p className="mt-6 text-sm text-gray-text">{c.barberos.text}</p>
              <div className="mt-6">
                <FeatureList items={c.barberos.items} />
              </div>
              <div className="mt-8 space-y-3">
                <RegistroLink ubicacion="home" className="px-6" />
                <MembershipNote className="max-w-md text-xs text-gray-text" />
              </div>
            </div>
          </div>
        </Section>

        <Section id="clientes" bg="dark">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <Tag dark>Para clientes</Tag>
              <Title accent={c.clientes.accent} dark className="mt-4 text-[38px] md:text-[52px]">
                {c.clientes.title}
              </Title>
              <p className="mt-6 text-sm text-cream/80">{c.clientes.text}</p>
              <div className="mt-6">
                <FeatureList items={c.clientes.items} dark />
              </div>
              <div className="mt-8">
                <ClientesCta ubicacion="home" />
              </div>
            </div>
            <Photo foto={fotos.centro} className="aspect-[4/3] md:-order-none" />
          </div>
        </Section>

        <Section id="zona">
          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <Tag>Lista de espera</Tag>
              <Title accent={c.espera.accent} className="mt-4 text-[38px] md:text-[52px]">
                {c.espera.title}
              </Title>
              <p className="mt-6 max-w-sm text-sm text-gray-text">{c.espera.text}</p>
            </div>
            <WaitlistForm />
          </div>
        </Section>

        <Section id="faq" className="pt-0 md:pt-0">
          <div className="grid gap-8 md:grid-cols-2 md:gap-14">
            <Title accent="clientes." className="text-[38px] md:text-[52px]">
              Preguntas de
            </Title>
            <FAQ items={c.faq} />
          </div>
        </Section>
      </main>
      <StickyCta>
        <ClientesCta ubicacion="barra_fija" variant="solid" />
      </StickyCta>
    </>
  );
}
