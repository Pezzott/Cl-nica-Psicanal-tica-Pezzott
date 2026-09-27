import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  source: string;
};

export function ArticleBody({ source }: Props) {
  return (
    <div className="prose-editorial">
      <MDXRemote source={source} />
    </div>
  );
}
