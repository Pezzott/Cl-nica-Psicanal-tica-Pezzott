import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ArticleMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  theme: string;
  image: string;
  featured?: boolean;
};

export type Article = ArticleMeta & {
  content: string;
};

const articlesDirectory = path.join(process.cwd(), "content", "artigos");

function parseArticle(slug: string, fileContents: string): Article {
  const { data, content } = matter(fileContents);
  return {
    slug,
    title: String(data.title ?? slug),
    excerpt: String(data.excerpt ?? ""),
    date: String(data.date ?? ""),
    readTime: String(data.readTime ?? ""),
    theme: String(data.theme ?? ""),
    image: String(data.image ?? "/img/foto-principal.jpg"),
    featured: Boolean(data.featured),
    content,
  };
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) return [];
  return fs
    .readdirSync(articlesDirectory)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

export function getArticleBySlug(slug: string): Article | null {
  const mdxPath = path.join(articlesDirectory, `${slug}.mdx`);
  const mdPath = path.join(articlesDirectory, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
  if (!fs.existsSync(filePath)) return null;
  return parseArticle(slug, fs.readFileSync(filePath, "utf8"));
}

export function getAllArticles(): ArticleMeta[] {
  return getArticleSlugs()
    .map((slug) => {
      const article = getArticleBySlug(slug);
      if (!article) return null;
      const { content: _content, ...meta } = article;
      return meta;
    })
    .filter((article): article is ArticleMeta => article !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getFeaturedArticles(limit = 3): ArticleMeta[] {
  const all = getAllArticles();
  const featured = all.filter((article) => article.featured);
  return (featured.length ? featured : all).slice(0, limit);
}

export function getArticlesByTheme(themeSlug: string): ArticleMeta[] {
  return getAllArticles().filter((article) => article.theme === themeSlug);
}

export function getRelatedArticles(slug: string, theme: string, limit = 3): ArticleMeta[] {
  return getAllArticles()
    .filter((article) => article.slug !== slug && article.theme === theme)
    .slice(0, limit);
}
