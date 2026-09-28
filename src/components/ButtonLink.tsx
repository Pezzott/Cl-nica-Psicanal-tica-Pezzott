import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "secondaryLight" | "ghost";
  external?: boolean;
};

export function ButtonLink({ href, children, variant = "primary", external }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 px-5 py-3 font-sans text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage";
  const styles = {
    primary: "bg-ink text-paper-white hover:bg-ink-soft",
    secondary: "border border-ink/20 bg-transparent text-ink hover:border-ink/40",
    secondaryLight:
      "border border-paper-white/45 bg-transparent text-paper-white hover:border-paper-white hover:bg-paper-white/10",
    ghost: "text-sage-deep underline-offset-4 hover:underline px-0",
  }[variant];

  if (external) {
    return (
      <a href={href} className={`${base} ${styles}`} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
