import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { siteConfig, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Canais de contato da Clínica Psicanalítica Pezzott.",
};

export default function ContatoPage() {
  return (
    <div className="container-measure py-14 lg:py-20">
      <p className="eyebrow">Contato</p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
        Estamos disponíveis para conversar.
      </h1>
      <p className="mt-4 max-w-2xl font-body text-lg text-ink-soft">
        Este site é sobretudo uma plataforma de conteúdo. Se quiser falar sobre a clínica, o
        material publicado ou uma dúvida pontual, use os canais abaixo — sem formulários
        agressivos de agendamento.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="border border-ink/10 bg-paper-white/70 p-7">
          <p className="eyebrow">E-mail</p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="mt-3 block font-display text-2xl text-ink hover:text-sage-deep"
          >
            {siteConfig.contact.email}
          </a>
        </div>
        <div className="border border-ink/10 bg-paper-white/70 p-7">
          <p className="eyebrow">WhatsApp</p>
          <p className="mt-3 font-display text-2xl text-ink">{siteConfig.contact.phoneDisplay}</p>
          <div className="mt-5">
            <ButtonLink href={whatsappUrl()} external variant="secondary">
              Abrir conversa
            </ButtonLink>
          </div>
        </div>
        <div className="border border-ink/10 bg-paper-white/70 p-7 md:col-span-2">
          <p className="eyebrow">Endereço</p>
          <p className="mt-3 font-body text-lg text-ink-soft">{siteConfig.contact.address}</p>
          <p className="mt-6 font-sans text-sm text-ink-muted">
            Prefere acompanhar o conteúdo?{" "}
            <a
              href={siteConfig.social.instagram}
              className="font-semibold text-sage-deep hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Siga no Instagram
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
