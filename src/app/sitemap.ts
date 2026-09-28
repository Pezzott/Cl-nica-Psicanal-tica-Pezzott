import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { siteConfig } from "@/lib/site";
import { themes } from "@/lib/themes";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/artigos`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/temas`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/sobre`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contato`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = getAllArticles().map((article) => ({
    url: `${base}/artigos/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const themeRoutes: MetadataRoute.Sitemap = themes.map((theme) => ({
    url: `${base}/temas/${theme.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.65,
  }));

  return [...staticRoutes, ...themeRoutes, ...articleRoutes];
}
