import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/ArticleBody";
import { ArticleCard } from "@/components/ArticleCard";
import { ButtonLink } from "@/components/ButtonLink";
import {
  getArticleBySlug,
  getArticleSlugs,
  getRelatedArticles,
} from "@/lib/articles";
import { siteConfig } from "@/lib/site";
import { getTheme } from "@/lib/themes";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Artigo" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArtigoPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const theme = getTheme(article.theme);
  const related = getRelatedArticles(article.slug, article.theme, 3);

  return (
    <article className="pb-20">
      <header className="container-measure max-w-3xl py-12 lg:py-16">
        <Link
          href="/conteudos"
          className="font-sans text-sm font-medium text-sage-deep hover:underline"
        >
          ← Voltar aos conteúdos
        </Link>
        {theme ? (
          <p className="eyebrow mt-6">
            <Link href={`/temas/${theme.slug}`}>{theme.title}</Link>
          </p>
        ) : null}
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          {article.title}
        </h1>
        <p className="mt-4 font-sans text-sm text-ink-muted">
          {formatDate(article.date)} · {article.readTime} de leitura
        </p>
        <p className="mt-6 font-body text-xl leading-relaxed text-ink-soft">{article.excerpt}</p>
      </header>

      <div className="container-measure mb-12 max-w-4xl">
        <div className="relative aspect-[16/9] overflow-hidden border border-ink/8">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
        </div>
      </div>

      <div className="container-measure flex justify-center">
        <ArticleBody source={article.content} />
      </div>

      <aside className="container-measure mt-16 max-w-3xl border-t border-ink/10 pt-10">
        <p className="font-body text-lg text-ink-soft">
          Este texto é parte da biblioteca da {siteConfig.name}. Se chegou pelo Instagram,
          explore outros conteúdos do mesmo tema.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          {theme ? (
            <ButtonLink href={`/temas/${theme.slug}`} variant="secondary">
              Continuar em {theme.title}
            </ButtonLink>
          ) : null}
          <ButtonLink href={siteConfig.social.instagram} external variant="ghost">
            Ver no Instagram
          </ButtonLink>
        </div>
      </aside>

      {related.length > 0 ? (
        <section className="container-measure mt-16 border-t border-ink/10 pt-14">
          <h2 className="font-display text-3xl font-semibold text-ink">Leia também</h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ArticleCard key={item.slug} article={item} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}

function formatDate(date: string) {
  try {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  } catch {
    return date;
  }
}
