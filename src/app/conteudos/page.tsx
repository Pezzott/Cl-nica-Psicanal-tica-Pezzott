import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { getAllArticles } from "@/lib/articles";
import { getTheme } from "@/lib/themes";

export const metadata: Metadata = {
  title: "Conteúdos",
  description: "Biblioteca de artigos sobre psicanálise e cotidiano.",
};

type Props = {
  searchParams: Promise<{ tema?: string }>;
};

export default async function ConteudosPage({ searchParams }: Props) {
  const { tema } = await searchParams;
  const all = getAllArticles();
  const articles = tema ? all.filter((article) => article.theme === tema) : all;
  const activeTheme = tema ? getTheme(tema) : null;

  return (
    <div className="container-measure py-14 lg:py-20">
      <p className="eyebrow">Biblioteca</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">Conteúdos</h1>
      <p className="mt-4 max-w-2xl font-body text-lg text-ink-soft">
        Artigos para aprofundar o que aparece no Instagram — com clareza para o cotidiano e
        densidade para quem quer ir além.
      </p>
      {activeTheme ? (
        <p className="mt-4 font-sans text-sm text-sage-deep">
          Filtrando por tema: <strong>{activeTheme.title}</strong> ·{" "}
          <a href="/conteudos" className="underline-offset-2 hover:underline">
            limpar filtro
          </a>
        </p>
      ) : null}

      <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

      {articles.length === 0 ? (
        <p className="mt-10 font-body text-ink-soft">Nenhum artigo neste tema ainda.</p>
      ) : null}
    </div>
  );
}
