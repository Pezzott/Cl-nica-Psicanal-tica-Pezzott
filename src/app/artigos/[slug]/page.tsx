import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/ArticleBody";
import { ArticleCard } from "@/components/ArticleCard";
import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { ReadingProgress } from "@/components/ReadingProgress";
import {
  getArticleBySlug,
  getArticleSlugs,
  getRelatedArticles,
} from "@/lib/articles";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
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
  const url = `/artigos/${article.slug}`;
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      url,
      images: [{ url: article.image }],
      locale: siteConfig.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArtigoPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const theme = getTheme(article.theme);
  const related = getRelatedArticles(article.slug, article.theme, 3);

  return (
    <>
      <ReadingProgress />
      <JsonLd
        data={[
          articleJsonLd({
            title: article.title,
            description: article.excerpt,
            slug: article.slug,
            date: article.date,
            image: article.image,
          }),
          breadcrumbJsonLd([
            { name: "Início", path: "/" },
            { name: "Artigos", path: "/artigos" },
            ...(theme
              ? [{ name: theme.title, path: `/temas/${theme.slug}` }]
              : []),
            { name: article.title, path: `/artigos/${article.slug}` },
          ]),
        ]}
      />
      <article className="pb-24">
        <header className="relative overflow-hidden border-b border-ink/8">
          <div className="absolute inset-0">
            <Image
              src={article.image}
              alt=""
              fill
              className="object-cover opacity-25"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-paper/70 via-paper/92 to-paper" />
          </div>
          <div className="container-measure relative max-w-3xl py-14 lg:py-20">
            <nav aria-label="Breadcrumb" className="font-sans text-sm text-ink-muted">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-sage-deep">
                    Início
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/artigos" className="hover:text-sage-deep">
                    Artigos
                  </Link>
                </li>
                {theme ? (
                  <>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href={`/temas/${theme.slug}`} className="hover:text-sage-deep">
                        {theme.title}
                      </Link>
                    </li>
                  </>
                ) : null}
              </ol>
            </nav>
            {theme ? (
              <p className="eyebrow mt-8">
                <Link href={`/temas/${theme.slug}`}>{theme.title}</Link>
              </p>
            ) : null}
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
              {article.title}
            </h1>
            <p className="mt-5 font-sans text-sm text-ink-muted">
              {formatDate(article.date)} · {article.readTime} de leitura
            </p>
            <p className="mt-6 max-w-2xl font-body text-xl leading-relaxed text-ink-soft">
              {article.excerpt}
            </p>
          </div>
        </header>

        <div className="container-measure my-12 max-w-4xl">
          <div className="relative aspect-[16/9] overflow-hidden">
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
            Este texto faz parte da biblioteca da {siteConfig.name}. Se chegou pelo Instagram,
            continue pelo tema — a leitura ganha densidade quando os textos conversam entre si.
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
            <p className="eyebrow">Continuidade</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Leia também</h2>
            <div className="mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </>
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
