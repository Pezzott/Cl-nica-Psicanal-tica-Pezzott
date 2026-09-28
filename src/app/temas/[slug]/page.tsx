import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { getArticlesByTheme } from "@/lib/articles";
import { breadcrumbJsonLd, collectionPageJsonLd } from "@/lib/seo";
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
    alternates: { canonical: `/temas/${theme.slug}` },
    openGraph: {
      title: theme.title,
      description: theme.description,
      type: "website",
    },
  };
}

export default async function TemaPage({ params }: Props) {
  const { slug } = await params;
  const theme = getTheme(slug);
  if (!theme) notFound();

  const articles = getArticlesByTheme(theme.slug);

  return (
    <div className="pb-20">
      <JsonLd
        data={[
          collectionPageJsonLd({
            name: theme.title,
            description: theme.description,
            path: `/temas/${theme.slug}`,
          }),
          breadcrumbJsonLd([
            { name: "Início", path: "/" },
            { name: "Temas", path: "/temas" },
            { name: theme.title, path: `/temas/${theme.slug}` },
          ]),
        ]}
      />
      <header className="border-b border-ink/8 bg-paper-warm/40">
        <div className="container-measure py-14 lg:py-20">
          <Link href="/temas" className="font-sans text-sm font-medium text-sage-deep hover:underline">
            ← Todos os temas
          </Link>
          <p className="eyebrow mt-8">{theme.blurb}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {theme.title}
          </h1>
          <p className="mt-4 max-w-2xl font-body text-lg text-ink-soft">{theme.description}</p>
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
          Em breve novos textos neste eixo. Enquanto isso, explore a{" "}
          <Link href="/artigos" className="text-sage-deep underline-offset-2 hover:underline">
            biblioteca completa
          </Link>
          .
        </p>
      ) : null}
    </div>
  );
}
