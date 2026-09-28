import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Quem somos, o que motiva a plataforma e como o site se relaciona com o Instagram.",
};

export default function SobrePage() {
  return (
    <div className="container-measure py-14 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="relative aspect-[4/5] overflow-hidden border border-ink/8">
          <Image
            src="/img/blog/Foto-Perfil.jpg"
            alt={siteConfig.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />
        </div>
        <div>
          <p className="eyebrow">Sobre</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
            Uma plataforma de conhecimento com identidade clínica.
          </h1>
          <div className="mt-6 space-y-5 font-body text-lg leading-relaxed text-ink-soft">
            <p>
              A {siteConfig.name} existe para tornar a psicanálise mais próxima de quem
              enfrenta questões da vida — ansiedade, relações, trabalho, amadurecimento emocional —
              e também de quem já estuda o campo e busca referência com seriedade.
            </p>
            <p>
              O Instagram é um canal forte de descoberta. Este site é o lugar do
              aprofundamento: textos organizados, temas claros e uma biblioteca que pode crescer
              para vídeos, materiais, cursos e outros formatos no futuro.
            </p>
            <p>
              A abordagem dialoga com a tradição winnicottiana — o ambiente suficientemente
              bom, o holding, o cuidado com o setting — traduzida em linguagem acessível, sem
              abrir mão da profundidade.
            </p>
            <p>
              O atendimento clínico continua fazendo parte da história da clínica, mas{" "}
              <strong className="font-semibold text-ink">não é o centro desta plataforma</strong>.
              Se precisar de contato, use a página de contato ou o rodapé — com discrição e sem
              pressão comercial.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/artigos">Explorar artigos</ButtonLink>
            <ButtonLink href="/contato" variant="secondary">
              Falar conosco
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
