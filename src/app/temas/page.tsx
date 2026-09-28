import type { Metadata } from "next";
import { ThemeCard } from "@/components/ThemeCard";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { collectionPageJsonLd } from "@/lib/seo";
import { themes } from "@/lib/themes";

export const metadata: Metadata = {
  title: "Temas",
  description:
    "Eixos do cotidiano para navegar a biblioteca: ansiedade, relações, limites, trabalho, holding e mais.",
  alternates: { canonical: "/temas" },
};

export default function TemasPage() {
  return (
    <div className="pb-20">
      <JsonLd
        data={collectionPageJsonLd({
          name: "Temas",
          description: "Arquitetura de leitura da plataforma Pezzott.",
          path: "/temas",
        })}
      />
      <header className="border-b border-ink/8 bg-paper-warm/40">
        <div className="container-measure py-14 lg:py-20">
          <p className="eyebrow">Arquitetura de leitura</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Temas
          </h1>
          <p className="mt-4 max-w-2xl font-body text-lg text-ink-soft">
            Navegue a partir do que você vive. Cada tema reúne artigos que partem de cenas
            concretas e chegam a compreensão aplicável — sem pressa e sem jargão vazio.
          </p>
        </div>
      </header>
      <div className="container-measure mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {themes.map((theme, index) => (
          <Reveal key={theme.slug} delayMs={(index % 3) * 70}>
            <ThemeCard theme={theme} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
