import Link from "next/link";
import type { Theme } from "@/lib/themes";

type Props = {
  theme: Theme;
};

export function ThemeCard({ theme }: Props) {
  return (
    <Link
      href={`/temas/${theme.slug}`}
      className="group block border-b border-ink/10 py-6 transition duration-300 hover:border-sage/50 sm:border sm:border-ink/8 sm:bg-paper-white/40 sm:p-6 sm:hover:border-sage/35 sm:hover:bg-paper-white"
    >
      <p className="eyebrow transition-colors group-hover:text-sage">{theme.blurb}</p>
      <h3 className="mt-3 font-display text-2xl font-semibold text-ink transition-colors group-hover:text-sage-deep">
        {theme.title}
      </h3>
      <p className="mt-3 font-body text-base leading-relaxed text-ink-soft">{theme.description}</p>
      <span className="mt-4 inline-block font-sans text-sm font-semibold text-sage-deep opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
        Abrir tema →
      </span>
    </Link>
  );
}
