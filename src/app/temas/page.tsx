import type { Metadata } from "next";
import { ThemeCard } from "@/components/ThemeCard";
import { themes } from "@/lib/themes";

export const metadata: Metadata = {
  title: "Temas",
  description: "Eixos do cotidiano para navegar a biblioteca de conteúdos.",
};

export default function TemasPage() {
  return (
    <div className="container-measure py-14 lg:py-20">
      <p className="eyebrow">Arquitetura de leitura</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">Temas</h1>
      <p className="mt-4 max-w-2xl font-body text-lg text-ink-soft">
        Organize sua navegação a partir do que você vive. Cada tema reúne artigos para
        aprofundar — sem pressa e sem linguagem de consultório como porta de entrada.
      </p>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {themes.map((theme) => (
          <ThemeCard key={theme.slug} theme={theme} />
        ))}
      </div>
    </div>
  );
}
