import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  caption?: string;
};

export function ArticleFigure({ src, alt, caption }: Props) {
  return (
    <figure className="article-figure not-prose my-12 sm:my-14">
      <div className="relative aspect-[16/10] overflow-hidden bg-paper-warm">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition duration-700 ease-out hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 42rem"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 max-w-xl font-sans text-sm leading-relaxed text-ink-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
