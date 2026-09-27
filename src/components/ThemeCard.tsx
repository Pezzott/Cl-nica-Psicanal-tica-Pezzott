import Link from "next/link";
import type { Theme } from "@/lib/themes";

type Props = {
  theme: Theme;
};

export function ThemeCard({ theme }: Props) {
  return (
    <Link
      href={`/temas/${theme.slug}`}
      className="group block border border-ink/8 bg-paper-white/50 p-6 transition hover:border-sage/40 hover:bg-paper-white"
    >
      <p className="eyebrow">{theme.blurb}</p>
      <h3 className="mt-3 font-display text-2xl font-semibold text-ink group-hover:text-sage-deep">
        {theme.title}
      </h3>
      <p className="mt-3 font-body text-base leading-relaxed text-ink-soft">{theme.description}</p>
    </Link>
  );
}
