import type { ImgHTMLAttributes } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArticleFigure } from "@/components/ArticleFigure";

type Props = {
  source: string;
};

const components = {
  Figure: ArticleFigure,
  img: (props: ImgHTMLAttributes<HTMLImageElement>) => {
    const { src, alt } = props;
    if (!src || typeof src !== "string") return null;
    return <ArticleFigure src={src} alt={alt ?? ""} />;
  },
};

export function ArticleBody({ source }: Props) {
  return (
    <div className="prose-editorial prose-book">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
