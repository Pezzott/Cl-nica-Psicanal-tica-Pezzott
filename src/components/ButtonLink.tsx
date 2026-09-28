import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "secondaryLight" | "ghost";
  external?: boolean;
};

export function ButtonLink({ href, children, variant = "primary", external }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 px-5 py-3 font-sans text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage active:scale-[0.98]";
  const styles = {
    primary:
      "bg-ink text-paper-white hover:bg-ink-soft focus-visible:outline-paper-white",
    secondary: "border border-ink/20 bg-transparent text-ink hover:border-ink/40 hover:bg-ink/[0.03]",
    secondaryLight:
      "border border-paper-white/80 bg-paper-white/[0.14] text-paper-white shadow-[inset_0_0_0_0.5px_rgba(255,252,247,0.25)] backdrop-blur-[3px] hover:border-paper-white hover:bg-paper-white/[0.24] focus-visible:outline-paper-white",
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
