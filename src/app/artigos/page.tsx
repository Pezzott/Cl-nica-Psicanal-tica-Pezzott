import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { getAllArticles } from "@/lib/articles";
import { collectionPageJsonLd } from "@/lib/seo";
import { getTheme, themes } from "@/lib/themes";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Artigos",
  description:
    "Biblioteca editorial de psicanálise aplicada ao cotidiano — textos com profundidade, clareza e utilidade prática.",
  alternates: { canonical: "/artigos" },
};

type Props = {
  searchParams: Promise<{ tema?: string }>;
};

export default async function ArtigosPage({ searchParams }: Props) {
  const { tema } = await searchParams;
  const all = getAllArticles();
  const articles = tema ? all.filter((article) => article.theme === tema) : all;
  const activeTheme = tema ? getTheme(tema) : null;

  return (
    <div className="pb-20">
      <JsonLd
        data={collectionPageJsonLd({
          name: "Artigos",
          description: "Biblioteca editorial de psicanálise e cotidiano.",
          path: "/artigos",
        })}
      />
      <header className="border-b border-ink/8 bg-paper-warm/40">
        <div className="container-measure py-14 lg:py-20">
          <p className="eyebrow">Biblioteca</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Artigos
          </h1>
          <p className="mt-4 max-w-2xl font-body text-lg text-ink-soft">
            Textos para aprofundar o que aparece no Instagram — com densidade para o leitor
            exigente e aplicação imediata para a vida comum.
          </p>
          {activeTheme ? (
            <p className="mt-5 font-sans text-sm text-sage-deep">
              Filtrando por: <strong>{activeTheme.title}</strong> ·{" "}
              <Link href="/artigos" className="underline-offset-2 hover:underline">
                limpar filtro
              </Link>
            </p>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-2">
            {themes.map((item) => {
              const active = tema === item.slug;
              return (
                <Link
                  key={item.slug}
                  href={`/artigos?tema=${item.slug}`}
                  className={`rounded-full border px-3 py-1.5 font-sans text-xs transition ${
                    active
                      ? "border-ink bg-ink text-paper-white"
                      : "border-ink/15 text-ink-soft hover:border-sage/50 hover:text-ink"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      <div className="container-measure mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {articles.map((article, index) => (
          <Reveal key={article.slug} delayMs={(index % 3) * 80}>
            <ArticleCard article={article} />
          </Reveal>
        ))}
      </div>

      {articles.length === 0 ? (
        <p className="container-measure mt-10 font-body text-ink-soft">
          Nenhum artigo neste tema ainda.
        </p>
      ) : null}
    </div>
  );
}
