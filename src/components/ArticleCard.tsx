import Image from "next/image";
import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";
import { getTheme } from "@/lib/themes";

type Props = {
  article: ArticleMeta;
  priority?: boolean;
};

export function ArticleCard({ article, priority = false }: Props) {
  const theme = getTheme(article.theme);

  return (
    <article className="group flex h-full flex-col">
      <Link
        href={`/artigos/${article.slug}`}
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
      </Link>
      <div className="flex flex-1 flex-col gap-3 border-b border-ink/10 pb-8 pt-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-xs text-ink-muted">
          {theme ? (
            <Link href={`/temas/${theme.slug}`} className="text-sage-deep hover:underline">
              {theme.title}
            </Link>
          ) : null}
          <span aria-hidden>•</span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span aria-hidden>•</span>
          <span>{article.readTime}</span>
        </div>
        <h3 className="font-display text-2xl font-semibold leading-snug text-ink">
          <Link
            href={`/artigos/${article.slug}`}
            className="link-underline decoration-sage-deep transition-colors hover:text-sage-deep"
          >
            {article.title}
          </Link>
        </h3>
        <p className="font-body text-base leading-relaxed text-ink-soft">{article.excerpt}</p>
        <Link
          href={`/artigos/${article.slug}`}
          className="mt-auto pt-2 font-sans text-sm font-semibold text-sage-deep transition hover:translate-x-0.5"
        >
          Ler artigo →
        </Link>
      </div>
    </article>
  );
}

function formatDate(date: string) {
  try {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(date));
  } catch {
    return date;
  }
}
