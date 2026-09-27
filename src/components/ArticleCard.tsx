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
    <article className="group flex h-full flex-col overflow-hidden border-b border-ink/10 pb-8 sm:border sm:border-ink/8 sm:bg-paper-white/60 sm:pb-0 sm:shadow-[0_1px_0_rgba(36,52,71,0.04)]">
      <Link href={`/conteudos/${article.slug}`} className="relative block aspect-[16/10] overflow-hidden sm:rounded-none">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={priority}
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 pt-5 sm:p-6">
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
          <Link href={`/conteudos/${article.slug}`} className="transition-colors hover:text-sage-deep">
            {article.title}
          </Link>
        </h3>
        <p className="font-body text-base leading-relaxed text-ink-soft">{article.excerpt}</p>
        <Link
          href={`/conteudos/${article.slug}`}
          className="mt-auto pt-2 font-sans text-sm font-semibold text-sage-deep underline-offset-4 hover:underline"
        >
          Ler artigo
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
