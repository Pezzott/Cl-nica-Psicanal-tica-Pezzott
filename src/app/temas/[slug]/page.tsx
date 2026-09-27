import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { getArticlesByTheme } from "@/lib/articles";
import { getTheme, themes } from "@/lib/themes";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return themes.map((theme) => ({ slug: theme.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const theme = getTheme(slug);
  if (!theme) return { title: "Tema" };
  return {
    title: theme.title,
    description: theme.description,
  };
}

export default async function TemaPage({ params }: Props) {
  const { slug } = await params;
  const theme = getTheme(slug);
  if (!theme) notFound();

  const articles = getArticlesByTheme(theme.slug);

  return (
    <div className="container-measure py-14 lg:py-20">
      <Link href="/temas" className="font-sans text-sm font-medium text-sage-deep hover:underline">
        ← Todos os temas
      </Link>
      <p className="eyebrow mt-6">{theme.blurb}</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
        {theme.title}
      </h1>
      <p className="mt-4 max-w-2xl font-body text-lg text-ink-soft">{theme.description}</p>

      <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

      {articles.length === 0 ? (
        <p className="mt-10 font-body text-ink-soft">
          Em breve novos textos neste eixo. Enquanto isso, explore a{" "}
          <Link href="/conteudos" className="text-sage-deep underline-offset-2 hover:underline">
            biblioteca completa
          </Link>
          .
        </p>
      ) : null}
    </div>
  );
}
